import { Card, CardBody, Center, Text, VStack, Input , Flex, Box, IconButton} from "@chakra-ui/react"
import { useMediaQuery } from "@chakra-ui/react";
import img2 from "../../assets/coverlogin.jpg"
import Dropzone from "react-dropzone";
import { useState } from "react";
import { Button } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { EditIcon, DeleteIcon } from '@chakra-ui/icons';

import { setBooks } from "../../state";
const ListWidget = ( {picturePath }) => {
    const dispatch = useDispatch();
    const [isImage, setIsImage] = useState(false);
    const [book, setBook] = useState("");
    const { _id } = useSelector((state) => state.user);
    const token = useSelector((state) => state.token);
    const [isMobile] = useMediaQuery("(max-width: 768px)");

    const handleBook = async () => {
        const formData = new FormData();
        formData.append("userId", _id);
        formData.append("bookTitle", book);
        formData.append("description", book);
        formData.append("genre", book);
        formData.append("author", book);
        formData.append("price", book);
        if (image) {
          formData.append("picture", image);
          formData.append("picturePath", image.name);
        }

        const response = await fetch(`http://localhost:5174/books`, {
            method: "POST",
            headers: { Authorization: `Bearer ${token}` },
            body: formData,
          });
          const books = await response.json();
          dispatch(setBooks({ books }));
          setImage(null);
          setBook("");
        };

        const handleFileDrop = (e) => {
            const acceptedFiles = e.target.files;
            if (acceptedFiles.length > 0) {
              setImage(acceptedFiles[0]);
            }
          };
        
          const removeImage = () => {
            setImage(null);
          };

  return (
    <>
    <Card  bgColor={"blackAlpha.700"}w={"300px"} mx={isMobile ? "100" : ""} display={isMobile? "none":""}>
 <CardBody >


   
   
   <VStack mt='6' spacing='3'>
<Input placeholder='Book title' onChange={(e) => setBook(e.target.value)} value={book}> </Input>
<Dropzone
      acceptedFiles=".jpg,.jpeg,.png"
      multiple={false}
      onDrop={() => {}}
    >
      {({ getRootProps, getInputProps }) => (
        <Flex justifyContent="space-between">
          <Box
            {...getRootProps()}
            border={`2px dashed #123abc`} // Replace with your desired border color
            p="1rem"
            width="100%"
            sx={{ '&:hover': { cursor: 'pointer' } }}
          >
            <input
              {...getInputProps()}
              type="file"
              accept=".jpg, .jpeg, .png"
              style={{ display: 'none' }}
              onChange={handleFileDrop}
            />
            {image ? (
              <Flex alignItems="center">
                <Text>{image.name}</Text>
                <IconButton
                  icon={<EditIcon />}
                  aria-label="Edit Image"
                  ml={2}
                  onClick={removeImage}
                />
              </Flex>
            ) : (
              <Text>Add Image Here</Text>
            )}
          </Box>
          {image && (
            <IconButton
              icon={<DeleteIcon />}
              aria-label="Delete Image"
              onClick={removeImage}
              mt={isMobile ? '1rem' : 0}
            />
          )}
        </Flex>
      )}
    </Dropzone>
    <Button onClick={()=> setIsImage(!isImage)}>
        Image
    </Button>
<Input placeholder='Genre' onChange={(e) => setBook(e.target.value)} value={book} > </Input>
<Input placeholder='Author Name ' onChange={(e) => setBook(e.target.value)} value={book}> </Input>
<Input placeholder=' Price' onChange={(e) => setBook(e.target.value)} value={book} > </Input>
<Button disabled={!book} onClick={handleBook}>
POST
</Button>
   </VStack>
 </CardBody>
 
</Card>
    </>
  )
}

export default ListWidget
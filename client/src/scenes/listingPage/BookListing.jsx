import { Avatar, Box , 
  ChakraProvider, 
  Center, Image, 
  Heading, Container,  
  Stack, useMediaQuery, 
  Card,  
  CardBody, CardFooter,  
  Text , Button ,   
  VStack } from '@chakra-ui/react';
  import { useEffect } from "react";
  import { useDispatch } from "react-redux";
import ListWidget from '../widgets/ListWidget';
import { useSelector } from 'react-redux';
import BookWidget from '../widgets/BookWidget';
import { setBooks } from '../../state';


const cardOptions={
 position : "absolute",
  left:"50%",
   
   transform : "translate(-50%, -50%)",
   p:"4",
   size:"4x1",
}






const BookListing = ({ userId, isProfile = false }) => {
 
 

   const [isMobile] = useMediaQuery("(max-width: 768px)");
   const { _id, picturePath } = useSelector((state) => state.user);

   const dispatch = useDispatch();
   const books = useSelector((state) => state.books);
   const token = useSelector((state) => state.token);
 
   const getBooks = async () => {
     const response = await fetch("http://localhost:5174/books", {
       method: "GET",
       headers: { Authorization: `Bearer ${token}` },
     });
     const data = await response.json();
     dispatch(setBooks({ books: data }));
   };
 
   const getUserBooks = async () => {
     const response = await fetch(
       `http://localhost:5174/books/${userId}/books`,
       {
         method: "GET",
         headers: { Authorization: `Bearer ${token}` },
       }
     );
     const data = await response.json();
     dispatch(setBooks({ books: data }));
   };
 
   useEffect(() => {
     if (isProfile) {
       getUserBooks();
     } else {
       getBooks();
     }
   }, []); // eslint-disable-line react-hooks/exhaustive-deps
 


 return (
   
   <Box>
      
       
                
       <Box w={"full"} h={"full"}>
         <ChakraProvider></ChakraProvider>
         <Container  minH={"100vh"}  
       maxW={"container.xl"} {...cardOptions}  top={isMobile ? "50%" : "60%"}
        >
           <Stack h='full'
           
           alignItems={isMobile ? "center" : "flex-start"}
           flexWrap={isMobile ? "wrap" : "nowrap"}
           direction={["column", "row"]}>
<Card  bgColor={"blackAlpha.700"}w={"28rem"} display={isMobile ? "none" : ""}>
<CardBody >
<Center>
<Heading size='md' mt={"4"} textColor={"white"}>Filters
</Heading>

</Center>


<VStack mt='6' spacing='3'>
  
<Heading size={"md"} textColor={"white"}> Interested Genre</Heading>
  <Stack direction={"row"} mt={"1rem"}>
  <Button colorScheme='teal' textColor="white" size='sm' borderRadius={"20px"} >
  Fiction
  </Button>
  <Button colorScheme='teal' textColor="white" size='sm' borderRadius={"20px"}>
  True Crime 
  </Button>
  <Button colorScheme='teal' textColor="white" size='sm'  borderRadius={"20px"} >
  Philosophy
  </Button>

  </Stack>
  <Stack direction={"row"}>
  <Button colorScheme='teal' textColor="white" size='sm' borderRadius={"20px"} >
  Travel
  </Button>
  <Button colorScheme='teal' textColor="white" size='sm' borderRadius={"20px"}>
  Self-Help
  </Button>
  <Button colorScheme='teal' textColor="white" size='sm' borderRadius={"20px"}>
  Biography
  </Button>

  </Stack>
  <Stack direction={"row"}>
  <Button colorScheme='teal' textColor="white" size='sm' borderRadius={"20px"}>
  Adventure
  </Button>
  <Button colorScheme='teal' textColor="white" size='sm' borderRadius={"20px"}>
  Historical 
  </Button>
  <Button colorScheme='teal' textColor="white" size='sm' borderRadius={"20px"}>
  Horror
  </Button>

  </Stack>
  

</VStack>
</CardBody>

</Card>


//Books for sale 
<Card  bgColor={"whiteAlpha.200"} width={isMobile?"340px" : "1000px"} className='booksCard' mt={isMobile ? "24rem" : "25px"}  >
<CardBody >
<Center>
<Heading size='lg' textColor={"white"} bgColor={"blackAlpha.800"} padding={"1rem"} borderRadius={"1.5rem"}>Books for Sale </Heading>
</Center>
<VStack mt='6' spacing='3'>


{books.map(
        ({
          _id,
          userId,
          firstName,
          lastName,
          bookTitle,
          description,
          author,
          genre,
          price,
          picturePath,
          userPicturePath,
          likes,
         
        }) => (
          <BookWidget
            key={_id}
            bookId={_id}
            bookUserId={userId}
            bookTitle={bookTitle}
            name={`${firstName} ${lastName}`}
            description={description}
            author={author}
            price={price}
            genre={genre}
            picturePath={picturePath}
            userPicturePath={userPicturePath}
            likes={likes}
          />
        )
      )}



</VStack>
</CardBody>
</Card>
<ListWidget picturePath={picturePath}  ></ListWidget>


     
           </Stack>
         </Container>
       </Box>
             
             
      
   </Box>
   
 )
 }





export default BookListing
import {
  Card,
  Stack,
  Image,
  CardBody,
  Heading,
  Text,
  CardFooter,
  Button,
} from '@chakra-ui/react';
import img3 from "../../assets/logo.png";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBook } from '../../state';
import { useMediaQuery } from '@chakra-ui/react';

// Options for the main book card
const bookOptions = {
  position: "absolute",
  transform: "translate(-50%, -50%)",
  p: "4",
  size: "4x1",
};

// Options for the book footer
const bookFooterOptions = {
  position: "absolute",
  transform: "translate(-50%, -50%)",
  p: "4",
  size: "4x1",
};

const BookWidget = ({
  bookId,
  bookUserId,
  bookTitle,
  name,
  description,
  author,
  price,
  genre,
  picturePath,
  userPicturePath,
  likes,
}) => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token);
  const loggedInUserId = useSelector((state) => state.user._id);
  const isLiked = Boolean(likes[loggedInUserId]);
  const likeCount = Object.keys(likes).length;
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  return (
    <Card
      direction={{ base: 'column', sm: 'row' }}
      overflow='hidden'
      variant='outline'
      w={isMobile ? "330px" : "650px"} 
      h={isMobile ? "30rem" : ""}
    >
      <Stack direction={isMobile ? "column" : "row"} gap={"none"}>
        {/* Book Cover Image */}
        <Image
          objectFit='cover'
          w={isMobile ? "30rem" : "220px"}
          src={`http://localhost:5174/assets/${picturePath}`}
          alt='no pic'
        />
        <Stack>
          {/* Additional Book Image */}
          <Image
            objectFit="cover"
            src={img3}
            alt='Caffe Latte'
            h={isMobile ? "20rem" : ""}
            w={isMobile ? "" : "50rem"}
          />
          <CardBody {...bookOptions} ml={isMobile ? "7rem" : "7rem"} mt={isMobile ? "1rem" : "5rem"} mb={isMobile ? "10rem" : ""}>
            {/* Book Title */}
            <Heading size={isMobile ? "lg" : "lg"} mt={isMobile ? "18rem" : " "} textColor={"white"}>
              {bookTitle}
            </Heading>
            {/* Author and Genre */}
            <Text textColor={"white"} my={isMobile ? "3" : "4"} textAlign={"center"} fontWeight={"bold"} fontSize={isMobile ? "15px" : "15px"} borderRadius={"10px"} bgColor={"purple"}>
              {name}
            </Text>
            <Text textColor={"white"} my={isMobile ? "3" : "4"} textAlign={"center"} fontWeight={"bold"} fontSize={isMobile ? "15px" : "15px"} borderRadius={"10px"} bgColor={"purple"}>
              {genre}
            </Text>
          </CardBody>
          <CardFooter {...bookFooterOptions} ml={isMobile ? "11rem" : "12rem"} mt={isMobile ? "3rem" : "11rem"} mr={isMobile ? "10rem" : ""}>
            {/* Book Price and Author */}
            <Button variant='solid' textColor={"white"} bgGradient={"linear-gradient(315deg, #facc6b 0%, #fabc3c 74%)"} mx={isMobile ? "4" : "9"} size={isMobile ? "sm" : "md"}>
              {price}
            </Button>
            <Button variant='solid' textColor={"white"}  bgColor={"#1c1c65"} size={isMobile ? "sm" : "md"}  mr="10" >
              {author}
            </Button>
          </CardFooter>
        </Stack>
      </Stack>
    </Card>
  );
}

export default BookWidget;

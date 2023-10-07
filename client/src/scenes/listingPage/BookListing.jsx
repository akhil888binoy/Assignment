// Import necessary Chakra UI and React components and hooks
import {
  Avatar,
  Box,
  ChakraProvider,
  Center,
  Image,
  Heading,
  Container,
  Stack,
  useMediaQuery,
  Card,
  CardBody,
  CardFooter,
  Text,
  Button,
  VStack,
} from '@chakra-ui/react';
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import ListWidget from '../widgets/ListWidget';
import { useSelector } from 'react-redux';
import BookWidget from '../widgets/BookWidget';
import { setBooks } from '../../state';

// Define options for the main card
const cardOptions = {
  position: "absolute",
  left: "50%",
  transform: "translate(-50%, -50%)",
  p: "4",
  size: "4x1",
};

// Define the BookListing component
const BookListing = ({ userId, isProfile = false }) => {
  // Use the useMediaQuery hook to check if the screen is mobile
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  // Get user and book data from Redux state using useSelector
  const { _id, picturePath } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);
  const token = useSelector((state) => state.token);

  // Function to fetch all books
  const getBooks = async () => {
    const response = await fetch("http://localhost:5174/books", {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await response.json();
    dispatch(setBooks({ books: data }));
  };

  // Function to fetch user-specific books
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

  // Use useEffect to fetch books based on the component's props and state
  useEffect(() => {
    if (isProfile) {
      getUserBooks(); // Fetch user-specific books if isProfile is true
    } else {
      getBooks(); // Fetch all books if isProfile is false
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Box>
      <Box w={"full"} h={"full"}>
        <ChakraProvider></ChakraProvider>
        <Container
          minH={"100vh"}
          maxW={"container.xl"}
          {...cardOptions}
          top={isMobile ? "50%" : "60%"}
        >
          <Stack
            h='full'
            alignItems={isMobile ? "center" : "flex-start"}
            flexWrap={isMobile ? "wrap" : "nowrap"}
            direction={["column", "row"]}
          >
            {/* Filters Card */}
            <Card bgColor={"blackAlpha.700"} w={"28rem"} display={isMobile ? "none" : ""}>
              <CardBody>
                <Center>
                  <Heading size='md' mt={"4"} textColor={"white"}>Filters</Heading>
                </Center>
                <VStack mt='6' spacing='3'>
                  <Heading size={"md"} textColor={"white"}>Interested Genre</Heading>
                  <Stack direction={"row"} mt={"1rem"}>
                    <Button colorScheme='teal' textColor="white" size='sm' borderRadius={"20px"} >
                      Fiction
                    </Button>
                    <Button colorScheme='teal' textColor="white" size='sm' borderRadius={"20px"}>
                      True Crime 
                    </Button>
                    <Button colorScheme='teal' textColor="white" size='sm' borderRadius={"20px"} >
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
            
            {/* Books for Sale Card */}
            <Card bgColor={"whiteAlpha.200"} width={isMobile ? "340px" : "1000px"} className='booksCard' mt={isMobile ? "24rem" : "25px"}>
              <CardBody>
                <Center>
                  <Heading size='lg' textColor={"white"} bgColor={"blackAlpha.800"} padding={"1rem"} borderRadius={"1.5rem"}>Books for Sale </Heading>
                </Center>
                <VStack mt='6' spacing='3'>
                  {/* Map over books and render BookWidget component for each */}
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

            {/* ListWidget */}
            <ListWidget picturePath={picturePath} />
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}

export default BookListing;

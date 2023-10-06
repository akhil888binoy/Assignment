import BookListing from "./BookListing"
import { Box, Image } from "@chakra-ui/react"
import listcover1 from "../../assets/listcover1.jpg";
import listcover2 from "../../assets/listcover2.jpg";
const BookList = () => {
  return (
    
   
    <Box w="full" h={'full'}>
          <Image src={listcover1} h="100vh" w={'full'} objectFit={'cover'}/>
          <Image src={listcover2} h="100vh" w={'full'} objectFit={'cover'}></Image>
          <BookListing></BookListing>

                       
                 
                 
         </Box>
    
  )
}

export default BookList
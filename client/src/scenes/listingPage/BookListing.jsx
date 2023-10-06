import { Avatar, Box , 
  ChakraProvider, 
  Center, Image, 
  Heading, Container,  
  Stack, useMediaQuery, 
  Card,  
  CardBody, CardFooter,  
  Text , Button ,   
  VStack } from '@chakra-ui/react';
import img2 from "../../assets/logo.png";
import img3 from "../../assets/coverlogin.jpg";






const cardOptions={
 position : "absolute",
  left:"50%",
   
   transform : "translate(-50%, -50%)",
   p:"4",
   size:"4x1",
}

const hackathonOptions={
 position : "absolute",
  
  
   transform : "translate(-50%, -50%)",
   p:"4",
   size:"4x1",
}


const hackathonfooterOptions={
 position : "absolute",
  
   
   transform : "translate(-50%, -50%)",
   p:"4",
   size:"4x1",
}





const BookListing = () => {
 
 

   const [isMobile] = useMediaQuery("(max-width: 768px)");

 


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
<Card  bgColor={"whiteAlpha.100"}w={"28rem"} display={isMobile ? "none" : ""}>
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
<Card  bgColor={"whiteAlpha.200"} width={isMobile?"340px" : "1000px"} className='HackathonsCard' mt={isMobile ? "24rem" : "25px"}  >
<CardBody >
<Center>
<Heading size='lg' textColor={"white"} bgColor={"blackAlpha.800"} padding={"1rem"} borderRadius={"1.5rem"}>Books for Sale </Heading>
</Center>
<VStack mt='6' spacing='3'>


<Card
direction={{ base: 'column', sm: 'row' }}
overflow='hidden'
variant='outline'
w={isMobile ? "330px" : "650px"} 
h={isMobile ? "30rem" : ""}

>
<Stack direction={isMobile? "column":"row"} gap={"none"}>

<Image
objectFit='cover'
w={isMobile ? "30rem" : "220px"}
src={img2}
alt='Caffe Latte'

/>

<Stack>
<Image
objectFit="cover"
src={img3}
alt='Caffe Latte'
h={isMobile ? "20rem" : ""}
w={isMobile ? "" : "50rem"}
/>


<CardBody {...hackathonOptions}  ml={isMobile? "7rem" : "7rem"}  mt={isMobile  ? "1rem" : "5rem"} mb={isMobile? "10rem" : ""}>

<Heading size={isMobile ? "lg" : "lg"} mt={isMobile?"18rem" : " "} textColor={"white"}> Book Title</Heading>
  

  
<Text textColor={"white"} my={isMobile ? "3" : "4"} textAlign={"center"}  fontWeight={"bold"} fontSize={isMobile ? "15px" : "15px"} borderRadius={"10px"} bgColor={"purple"}>
 Name of Seller
</Text>

<Text textColor={"white"} my={isMobile ? "3" : "4"} textAlign={"center"}  fontWeight={"bold"} fontSize={isMobile ? "15px" : "15px"} borderRadius={"10px"} bgColor={"purple"}>
 Genre
</Text>

  

</CardBody>

<CardFooter {...hackathonfooterOptions} ml={isMobile? "11rem": "12rem"} mt={isMobile? "3rem":"11rem"} mr={isMobile?"10rem":""} >
<Button variant='solid' textColor={"white"} bgGradient={"linear-gradient(315deg, #facc6b 0%, #fabc3c 74%)"} mx={isMobile ? "4" : "9"} size={isMobile ? "sm" : "md"}>
$1000
</Button>
<Button variant='solid' textColor={"white"}  bgColor={"#1c1c65"} size={isMobile ? "sm" : "md"}  mr="10" >
 Name of Author
</Button>

</CardFooter>
</Stack>
  
</Stack>

</Card>





</VStack>
</CardBody>
</Card>

<Card  bgColor={"whiteAlpha.100"}w={"300px"} mx={isMobile ? "100" : ""} display={isMobile? "none":""}>
 <CardBody >
   <Center>
           
       <Avatar objectFit="contain" w="150px" h="150px"  borderWidth={"5px"} borderColor={"purple"}
       src={img2}
     alt='Green double couch with wooden legs'     
   />
     
   </Center>
   <Center>
   <Heading size='md' mt={"4"}>Akhil Binoy
</Heading>
   
   </Center>
   <Center>
   <Text size={"md"}>25 points</Text>
   </Center>
   
   <VStack mt='6' spacing='3'>
     <Heading size='md'>Top Builders</Heading>
<Card
mt={"3"}
 bgColor={"whiteAlpha.200"}
 direction={{ base: 'column', sm: 'row' }}
 overflow='hidden'
 variant='outline'
 size={"md"}
 maxH={"100px"}
 _hover={{ bgGradient:'linear-gradient(316deg, #310e68 0%, #5f0f40 74%)' }}
       sx={{
         "&:hover > *": {
           color: "white",
         },
       }}
>
 <Avatar
   mx={"3"}
   mt={"3"}
   objectFit='cover'
   size={'lg'}
   src={img2}
   alt='Caffe Latte'
 />

 <Stack>
   <CardBody objectFit={"contain"} >
     <Heading size='md'>Akhil Binoy</Heading>
     <Text fontSize={"10px"}>100 points</Text>
   </CardBody>
 </Stack>
 </Card>
 
   </VStack>
 </CardBody>
 
</Card>

     
           </Stack>
         </Container>
       </Box>
             
             

   </Box>
   
 )
 }





export default BookListing
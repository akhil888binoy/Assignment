import {  Box, Image  } from '@chakra-ui/react'
 import Form from "./Form";
 import coverlogin from "../../assets/coverlogin.jpg";
 
 
 
 
 
 const LoginPage = () => {
   return (
     
     <Box>
        
          <Box w="full" h={'full'}>
          <Image src={coverlogin} h="100vh" w={'full'} objectFit={'cover'}/>

                   <Form ></Form>
                       
                 
                 
         </Box>
        
               
               
 
    </Box>
     
   )
   }
 
 
 
 
 
 export default LoginPage
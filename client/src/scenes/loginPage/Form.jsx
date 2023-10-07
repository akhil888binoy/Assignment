import { useState } from "react";
import { Formik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {  Box, Card, theme, FormControl,  CardBody , ChakraProvider} from "@chakra-ui/react";
import { Center } from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/react";
import { setLogin } from "../../state";

  import { 
   
    Heading, 
    Input, 
    Button, 
    
    Text} from '@chakra-ui/react'
  

const registerSchema = yup.object().shape({
  username: yup.string().required("required"),  
  firstName: yup.string().required("required"),
  lastName: yup.string().required("required"),
  email: yup.string().email("invalid email").required("required"),
  password: yup.string().required("required"),
  picture: yup.string().required("required"),
});



const loginSchema = yup.object().shape({
  email: yup.string().email("invalid email").required("required"),
  password: yup.string().required("required"),
});

const initialValuesRegister = {
  username:"",
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  
  picture: "",
};

const initialValuesLogin = {
  email: "",
  password: "",
};
const headingOptions={
    position : "absolute",
    left : "50%",
    transform : "translate(-50%, -50%)",
    p:"2",
    top:"19rem",
    size:"4x1",
    
}


const Form = () => {
  const [pageType, setPageType] = useState("login");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLogin = pageType === "login";
  const isRegister = pageType === "register";
  const [isMobile] = useMediaQuery("(max-width: 768px)");



  const register = async (values, onSubmitProps) => {
    // this allows us to send form info 
    const formData = new FormData();
    for (let value in values) {
      formData.append(value, values[value]);
    }

    const savedUserResponse = await fetch(
      "http://localhost:5174/auth/register",
      {
        method: "POST",
        body: formData,
      }
    );
    const savedUser = await savedUserResponse.json();
    onSubmitProps.resetForm();

    if (savedUser) {
      setPageType("login");
    }
    /* the values from the frontend will
     be transferred to the database using the /auth/register 
     endpoint. The /auth/register endpoint is a RESTful
      endpoint that is used to register new users.
       The endpoint takes a POST request with the form
        data as the body of the request. 
    The endpoint will then save the form data in the database.*/
  };

  const login = async (values, onSubmitProps) => {
    const loggedInResponse = await fetch("http://localhost:5174/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    const loggedIn = await loggedInResponse.json();
    onSubmitProps.resetForm();
    if (loggedIn) {
      dispatch(
        setLogin({
          user: loggedIn.user,
          token: loggedIn.token,
        })
      );
      navigate("/listing");
    }
  };
  
  const handleFormSubmit = async (values, onSubmitProps) => {
    if (isLogin) await login(values, onSubmitProps);
    if (isRegister) await register(values, onSubmitProps);
  };
  return (
    <Formik
      onSubmit={handleFormSubmit}
      initialValues={isLogin ? initialValuesLogin : initialValuesRegister}
      validationSchema={isLogin ? loginSchema : registerSchema}
    >
      {({
        values,
        errors,
        touched,
        handleBlur,
        handleChange,
        handleSubmit,
        setFieldValue,
        resetForm,
      })=>(
        <form onSubmit={handleSubmit}>
    <Box  {...headingOptions} backdropFilter="auto" backdropBlur='3px'   >
      
      
      <ChakraProvider theme={theme} >
      <Card   bgColor={"whiteAlpha.100"}  width={isMobile? "340px" : "500px"} className='SignUpForm' mt={isMobile? "10rem" :"2rem"} >
        <CardBody>
        <Heading textAlign="center" size="xl" mb="7" textColor={"white"}>
        {isLogin ? "Login": "Sign Up"}
      </Heading>
        
        {isRegister && (
          <>
         
      <FormControl>
       
        <Input variant='flushed'
        placeholder="Username" label="username" 
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.username}
        name="username"
        mb="6"
        textColor={"white"}
        error={Boolean(touched.username)&& Boolean(errors.username)}
        _placeholder={{ opacity: 1, color: 'white' }}
        helperText={touched.username && errors.username}
        />
      </FormControl>
      
      <FormControl>
        
        <Input variant='flushed'

        onBlur={handleBlur}
         onChange={handleChange}
         value={values.firstName}
         textColor={"white"}
         name="firstName"
         error={Boolean(touched.firstName)&& Boolean(errors.firstName)}
         helperText={touched.firstName && errors.firstName}
        placeholder="First Name" mb="6" _placeholder={{ opacity: 1, color: 'white' }}/>
      </FormControl>
      
      <FormControl>
        
        <Input variant='flushed'
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.lastName}
        textColor={"white"}
        name="lastName"
        error={Boolean(touched.lastName)&& Boolean(errors.lastName)}
        helperText={touched.lastName && errors.lastName}
        
        placeholder="Last Name" mb="6" _placeholder={{ opacity: 1, color: 'white' }} />
      </FormControl>
 
          </>
        )}




      
    
      <FormControl>
        
        <Input variant='flushed' label="email"  type="Email" 
         onBlur={handleBlur}
         onChange={handleChange}
         value={values.email}
         textColor={"white"}
         name="email"
         error={Boolean(touched.email)&& Boolean(errors.email)}
         helperText={touched.email && errors.email}
         placeholder=" Email" mb="4" _placeholder={{ opacity: 1, color: 'white' }} />
      </FormControl>
      
     
      <FormControl>
       
        <Input variant='flushed'
        onBlur={handleBlur}
        onChange={handleChange}
        textColor={"white"}
        value={values.password}
        name="password"
        error={Boolean(touched.password)&& Boolean(errors.password)}
        helperText={touched.password && errors.password}
        
        
        type="password" placeholder="Password" mb="6" _placeholder={{ opacity: 1, color: 'white' }}/>
      </FormControl>


      <Center>
      <Button colorScheme='teal' 
        borderRadius={"20"} size='lg' 
        
        bgColor="#6617cb"
                   bgImage="linear-gradient(315deg, #6617cb 0%, #cb218e 74%)"  _hover={{ bg: "#c961de" }}
                             sx={{
                               "&:hover > *": {
                                 color: "white",
                               },
                             }} textColor={"white"}
                             type="submit"
                             
                             >
                           {isLogin ? "Login": "Sign Up"}
                         </Button>

      </Center>
      <Text
      onClick={()=>{
        setPageType(isLogin?"register":"login")
        resetForm();
      }}
      textColor={"white"}
      mt={"20px"}
      _hover={{ textColor: "#c961de" }}
      sx={{
        "&:hover > *": {
          color: "white",
        },
      }}
      >
        {isLogin ? "Dont have an account ? SignUp here":
        "Already have an account ? Login here"
        }
      </Text>
      
      </CardBody>

      </Card>



      
      </ChakraProvider>
      
      
    </Box>

        </form>
      ) }
     </Formik>
    
    
  )
};

export default Form;
import {  Avatar } from '@chakra-ui/react' 
import { Drawer,} from '@chakra-ui/react'
import { DrawerOverlay  , DrawerContent,  DrawerBody , Button  , useDisclosure} from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import {  HStack } from '@chakra-ui/react'; 
import {  Box } from '@chakra-ui/react';
import { useMediaQuery } from '@chakra-ui/react';

function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [isMobile] = useMediaQuery("(max-width: 768px)");


  return (
    <>
    <Avatar pos={"fixed"}
    top={"4"}
    left={"4"}
    _hover={{ bg: "#c961de" }}
        sx={{
          "&:hover > *": {
            color: "#2f2f8A",
          },
        }}
        bgColor={"white"}
    padding={"0"}
    width={"60px"}
    height={"60px"}
    zIndex={"overlay"}
    onClick={onOpen}>
        <Box mx={4}>
                            < Avatar  alt="Logo" bgColor={"red"} objectFit="contain" w="50px" h="50px"   />
                     </Box>
    
    </Avatar>
    <Drawer placement={'top'} onClose={onClose} isOpen={isOpen} >
      <DrawerOverlay />
      <DrawerContent bgColor={"whiteAlpha.100"}>
        <DrawerBody >
        <HStack justifyContent={"center"}>
                    <Button onClick={onClose}  variant={"ghost"} size={isMobile?"sm" : "md"} textColor={'white'} _hover={{ bg: "#c961de" } }
        sx={{
          "&:hover > *": {
            color: "white",
          },
        }}>
                        <Link to={'/Login'}>Login</Link>
                    </Button>
                    <Button onClick={onClose}  variant={"ghost"} size={isMobile?"sm" : "md"} textColor={'white'} _hover={{ bg: "#c961de" }}
        sx={{
          "&:hover > *": {
            color: "white",
          },
        }}>
                        <Link to={'/listing'}>List Books</Link>
                    </Button>
                   
                    <Button onClick={onClose}  variant={"ghost"} size={isMobile?"sm" : "md"} textColor={'white'} _hover={{ bg: "#c961de" }}
        sx={{
          "&:hover > *": {
            color: "white",
          },
        }}>
                        <Link to={'/AboutUs'}>About Us</Link>
                    </Button>
                    <Button onClick={onClose} size={isMobile?"sm" : "md"} variant={"ghost"} textColor={'white'} _hover={{ bg: "#c961de" }}
        sx={{
          "&:hover > *": {
            color: "white",
          },
        }}>
                        <Link to={'/contact'}> Contact </Link>
                    </Button>
                </HStack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  </>
  )
}

export default Header
import { Avatar, Drawer, DrawerOverlay, DrawerContent, DrawerBody, Button, useDisclosure, HStack, Box, useMediaQuery, Text } from '@chakra-ui/react';
import logo from "../assets/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { setLogout } from "../state";
import { useNavigate } from "react-router-dom";

function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const fullName = user?.firstName && user?.lastName ? `${user.firstName} ${user.lastName}` : "";

  return (
    <>
      {/* Avatar for opening the drawer */}
      <Avatar
        pos={"fixed"}
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
        onClick={onOpen}
      >
        <Box mx={4}>
          <Avatar src={logo} alt="Logo" objectFit="contain" w="55px" h="55px" />
        </Box>
      </Avatar>
      
      {/* Drawer for navigation */}
      <Drawer placement={'top'} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent bgColor={"whiteAlpha.100"}>
          <DrawerBody>
            <HStack justifyContent={"center"}>
              {/* Login Button */}
              <Button
                onClick={() => navigate("/login")}
                variant={"ghost"}
                size={isMobile ? "sm" : "md"}
                textColor={'white'}
                _hover={{ bg: "#c961de" }}
                sx={{
                  "&:hover > *": {
                    color: "white",
                  },
                }}
              >
                Login
              </Button>
              
              {/* Book List Button */}
              <Button
                onClick={() => navigate("/listing")}
                variant={"ghost"}
                size={isMobile ? "sm" : "md"}
                textColor={'white'}
                _hover={{ bg: "#c961de" }}
                sx={{
                  "&:hover > *": {
                    color: "white",
                  },
                }}
              >
                Book List
              </Button>
              
              {/* Logo */}
              <Box mx={4}>
                <Avatar src={logo} alt="Logo" variant={"ghost"} objectFit="contain" size={isMobile ? "md" : "lg"} />
              </Box>
              
              {/* Logout Button */}
              <Button
                onClick={() => dispatch(setLogout())}
                size={isMobile ? "sm" : "md"}
                variant={"ghost"}
                textColor={'white'}
                _hover={{ bg: "#c961de" }}
                sx={{
                  "&:hover > *": {
                    color: "white",
                  },
                }}
              >
                LogOut
              </Button>
              
              {/* Display user's full name */}
              <Text textColor={"white"} fontSize={"lg"}>{fullName}</Text>
            </HStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default Header;

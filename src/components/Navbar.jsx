import {
  Box,
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useColorModeValue,
  Stack,
  Center,
  Text,
} from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { auth } from "../config/login";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";



export default function Navbar() {
  const [user] = useAuthState(auth);

 
  const handleSignOut = () => {
    signOut(auth);
  };
  return (
    <>
      <Box w="full" bg={useColorModeValue("#bac4be", "white.900")} px={4} mb={10}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box>
            <Text as='b'>Deep Vision Tech</Text>
          </Box>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              

              <Menu>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                >
                   <Avatar size={"sm"} src={user.photoURL} />
                </MenuButton>
                <MenuList alignItems={"center"}>
                  <br />
                  <Center>
                  <Avatar size={"2xl"} src={user.photoURL} />
                  </Center>
                  <br />
                  <Center>
                  <p>Hi, {user.displayName}</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem>
                    <Button
                      onClick={handleSignOut}
                      colorScheme="red"
                      w={"full"}
                      leftIcon={<ArrowBackIcon/>} variant='outline'
                    >
                      Logout
                    </Button>
                  </MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>

      </Box>
    </>
  );
}


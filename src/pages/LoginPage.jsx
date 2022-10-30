import {
  Box,
  Stack,
  Heading,
  Text,
  Container,
  Button,
  SimpleGrid,
  useBreakpointValue,
  Icon,
  Center,
} from "@chakra-ui/react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { FcGoogle } from "react-icons/fc";
import { auth } from "../config/login";


export default function LoginPage() {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  return (
    <Box position={"relative"} mt={"5%"}>
      <Container
        as={SimpleGrid}
        maxW={"7xl"}
        columns={{ base: 1, md: 2 }}
        spacing={{ base: 10, lg: 32 }}
        py={{ base: 10, sm: 20, lg: 32 }}
      >
        <Stack spacing={{ base: 10, md: 20 }}>
          <Heading
            lineHeight={1.1}
            fontSize={{ base: "3xl", sm: "4xl", md: "5xl", lg: "6xl" }}
          >
            Welome
            <Text
              ml={4}
              as={"span"}
              bgGradient="linear(to-r, red.400,pink.400)"
              bgClip="text"
            >
              to <br />
            </Text>{" "}
            Deep Vision Tech
          </Heading>
        </Stack>
        <Stack
          rounded={"xl"}
          p={{ base: 4, sm: 6, md: 8 }}
          spacing={{ base: 8 }}
          maxW={{ lg: "lg" }}
          style={{
            boxShadow:
              "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",
          }}
        >
          <Stack spacing={4}>
            <Center>
              <Heading
               color="#83d4e4"
                lineHeight={1.1}
                fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
              >
                Sign in to Continue
                <Text
                  ml={1}
                  as={"span"}
                  bgGradient="linear(to-r, red.400,pink.400)"
                  bgClip="text"
                >
                  !
                </Text>
              </Heading>
            </Center>
          </Stack>
          <Box as={"form"}>
            <Center p={8}>
              <Button
                w={"85%"}
                p={6}
                maxW={"md"}
                variant={"outline"}
                bg="blackAlpha.800"
                color="whitesmoke"
                leftIcon={<FcGoogle />}
                onClick={() =>
                  signInWithGoogle("", { prompt: "select_account" })
                }
                _hover={{ bg: "gray.400", color: "black", cursor: "pointer" }}
              >
                <Center>
                  <Text >Sign in with Google</Text>
                </Center>
              </Button>
            </Center>
          </Box>
        </Stack>
      </Container>
      <Blur
        position={"absolute"}
        top={-10}
        left={-10}
        style={{ filter: "blur(70px)" }}
      />
    </Box>
  );
}

export const Blur = (props) => {
  return (
    <Icon
      width={useBreakpointValue({ base: "100%", md: "40vw", lg: "30vw" })}
      zIndex={useBreakpointValue({ base: -1, md: -1, lg: 0 })}
      height="560px"
      viewBox="0 0 528 560"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="71" cy="61" r="111" fill="#F56565" />
      <circle cx="244" cy="106" r="139" fill="#ED64A6" />
      <circle cy="291" r="139" fill="#ED64A6" />
      <circle cx="80.5" cy="189.5" r="101.5" fill="#ED8936" />
      <circle cx="196.5" cy="317.5" r="101.5" fill="#ECC94B" />
      <circle cx="70.5" cy="458.5" r="101.5" fill="#48BB78" />
      <circle cx="426.5" cy="-0.5" r="101.5" fill="#4299E1" />
    </Icon>
  );
};

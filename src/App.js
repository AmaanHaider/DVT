import { Box, CircularProgress } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { auth } from "./config/login";
import { useAuthState } from "react-firebase-hooks/auth";
import LoginPage from "./pages/LoginPage";


function App() {

  const [user, loading] = useAuthState(auth);

  if (loading) {
    return (
      <Box mt={50} textAlign="center">
        <CircularProgress />
      </Box>
    )
  }
  if (!user) {
    return <LoginPage />
  }
  return (
    <Routes>

      <Route path="/" element={  <Home />}/>
    </Routes>
  
  );
}

export default App;

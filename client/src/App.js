import {BrowserRouter,Navigate,Routes,Route} from "react-router-dom";
import HomePage from "./scenes/Homepage"
import LoginPage from "./scenes/Loginpage"
import ProfilePage from "./scenes/Profilepage/Profilepage";
import './App.css';
import {useMemo} from "react";
import {useSelector} from "react-redux";
import {CssBaseline,ThemeProvider} from "@mui/material";
import {createTheme} from "@mui/material/styles";
import {themeSettings} from "./theme";

function App() {
  const mode=useSelector((state)=>state.mode);
  const theme=useMemo(()=>createTheme(themeSettings(mode)),[mode]);
const isAuth=Boolean(useSelector((state)=>state.token))

  return (
    <div className="app">
      <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
      <Routes>
        <Route path="/" element={<LoginPage></LoginPage>}></Route>
        <Route path="/home" element={isAuth?<HomePage/>:<Navigate to="/" />}></Route>
        <Route path="/profile/:userId" element={isAuth?<ProfilePage/>: <Navigate to="/"></Navigate>}></Route>
      </Routes>
  
      </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;

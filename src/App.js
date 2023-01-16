import { ToastContainer } from "react-toastify";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./Components/Nav/Navbar";
import HomePageContents from "./Pages/HomePage.jsx/HomePageContents";

function App() {
  // let navigate = useNavigate();

  return (
    <>
      <ToastContainer
        position="top-center"
        className="w-full"
        style={{ width: "600px" }}
      />
      
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePageContents/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import Profile from "./pages/Profile";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Listing from "./pages/Listing";
import CreateListing from "./pages/CreateListing";
import EditListing from "./pages/EditListing";
import Search from "./pages/Search";
import { ListingProvider } from "./context/ListingContext";

function App() {
  return (
    <>
      <ListingProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route element={<PrivateRoute />}>
              <Route path="/profile" element={<Profile />}></Route>
              <Route path="/create-listing" element={<CreateListing />} />
              <Route path="/edit-listing/:id/edit" element={<EditListing />} />
            </Route>

            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/listing/:listing/:id" element={<Listing />} />
            <Route path="/search" element={<Search />} />
          </Routes>
        </Router>
        <ToastContainer />
      </ListingProvider>
    </>
  );
}

export default App;

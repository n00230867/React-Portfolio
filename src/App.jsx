import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//pages imports
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PageNotFound from "./pages/PageNotFound";
import NavigationExample from "./pages/NavigationExample";

//import components
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

//import books pages
import Index from "./pages/books/Index";
import Show from "./pages/books/Show";

const App = () => {
  return (
    <Router>
      <NavBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/nav-example" element={<NavigationExample />} />

          <Route path="/books" element={<Index />} />
          <Route path="/books/:id" element={<Show />} />

          <Route path="/books/:id/:someOtherParam" element={<Show />} />
        </Routes>

      <Footer />

    </Router>
  );
};

export default App;
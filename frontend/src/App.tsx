import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Footer from "./layouts/Footer";
import NotFound from "./pages/NotFound";
import Navbar from "./layouts/navbar/Navbar";
import { cn } from "./lib/utils";
import { useStoreState } from "./store/store";
import Courses from "./pages/Courses";
import Course from "./layouts/courses/Course";


const App = () => {
  const isAuth = useStoreState((state) => state.auth.isAuth);

  return (
    < div className="App" >
      <Navbar />
      <Routes>
        {/* ROOT ROUTES */}
        <Route path="/" element={<Home className={cn("max-container", { "md:ml-20": isAuth })} />} />
        <Route path="about" element={<h1>About us</h1>} />
        <Route path="contact" element={<h1>Contact</h1>} />
        <Route path="courses" element={<Courses className={cn("max-container", { "md:ml-20": isAuth })} />} />
        <Route path="courses/:course" element={<Course className={cn("max-container", { "md:ml-20": isAuth })} />} />
        <Route path="pricing" element={<h1>Pricing</h1>} />
        <Route path="blog" element={<h1>Blog</h1>} />

        {/* USER ROUTES */}
        <Route path="/user/:id" element={<h1>User</h1>} />
        <Route path="/user/:id/courses" element={<h1>Recent Courses</h1>} />

        {/* AUTH ROUTES */}
        <Route path="auth" element={<h1>Auth index</h1>} />
        <Route path="auth/signin" element={<h1>Auth signin</h1>} />
        <Route path="auth/signup" element={<h1>Auth signup</h1>} />

        {/* 404 page ROUTES */}
        <Route path="*" element={<NotFound />} />
        <Route path="404" element={<NotFound />} />
      </Routes>
      <Footer className={cn({ "md:ml-20": isAuth })} />
    </div >
  )
}

export default App

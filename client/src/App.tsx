import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import Quote from './pages/Quote';
import Testimonials from './pages/Testimonials';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';

function ScrollToTopOnRouteChange() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <Layout>
      <ScrollToTopOnRouteChange />
      <Routes>
        <Route path="/"             element={<Home />} />
        <Route path="/services"     element={<Services />} />
        <Route path="/about"        element={<About />} />
        <Route path="/contact"      element={<Contact />} />
        <Route path="/faq"          element={<FAQ />} />
        <Route path="/quote"        element={<Quote />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/privacy"      element={<Privacy />} />
        <Route path="/terms"        element={<Terms />} />
      </Routes>
    </Layout>
  );
}
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout.jsx';
import LandingPage from './pages/LandingPage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import ComingSoon from './pages/ComingSoon.jsx';

// Every navbar link routes to a real path. For now all non-home routes render
// <ComingSoon /> inside the shared <Layout>. Later, swap each `element` for the
// real page component — nothing else changes.
export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/about/strategic-directions" element={<ComingSoon />} />
        <Route path="/about/general-assembly" element={<ComingSoon />} />
        <Route path="/about/board-members" element={<ComingSoon />} />
        <Route path="/about/executive-director" element={<ComingSoon />} />
        <Route path="/about/organizational-structure" element={<ComingSoon />} />
        <Route path="/about/license-certificate" element={<ComingSoon />} />
        <Route path="/about/commercial-register" element={<ComingSoon />} />
        <Route path="/about/success-partners" element={<ComingSoon />} />
        <Route path="/governance" element={<ComingSoon />} />
        <Route path="/donate" element={<ComingSoon />} />
        <Route path="/centers" element={<ComingSoon />} />
        <Route path="/jobs" element={<ComingSoon />} />
        <Route path="/media" element={<ComingSoon />} />
        <Route path="/satisfaction" element={<ComingSoon />} />
        <Route path="/contact" element={<ComingSoon />} />
        <Route path="/partners" element={<ComingSoon />} />
        <Route path="*" element={<ComingSoon />} />
      </Route>
    </Routes>
  );
}

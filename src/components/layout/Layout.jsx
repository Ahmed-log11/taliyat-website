import { Outlet } from 'react-router-dom';
import Header from './Header.jsx';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import FloatingButtons from './FloatingButtons.jsx';

// Wraps every page: header + nav on top, footer + floating buttons at the
// bottom, page content in between via <Outlet />.
export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}

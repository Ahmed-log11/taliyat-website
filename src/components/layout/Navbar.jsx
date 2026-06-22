import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { navLinks } from '../../data/navLinks.js';

export default function Navbar() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `flex items-center gap-1 px-3 py-2 text-sm font-semibold transition-colors ${
      isActive ? 'text-gold' : 'text-white hover:text-gold-light'
    }`;

  return (
    <nav className="sticky top-0 z-40 bg-primary-dark shadow-md">
      <div className="container">
        {/* mobile toggle */}
        <div className="flex items-center justify-between md:hidden">
          <span className="py-3 font-semibold text-white">{t('nav.home')}</span>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            className="p-2 text-white"
            aria-expanded={open}
            aria-label="Menu"
          >
            ☰
          </button>
        </div>

        {/* links */}
        <ul
          className={`${
            open ? 'flex' : 'hidden'
          } flex-col py-2 md:flex md:flex-row md:items-center md:justify-center md:py-0`}
        >
          {navLinks.map((link) => (
            <li key={link.path} className="relative">
              <NavLink to={link.path} className={linkClass} end={link.path === '/'}>
                {t(link.key)}
                {link.dropdown && <span aria-hidden className="text-xs">▾</span>}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

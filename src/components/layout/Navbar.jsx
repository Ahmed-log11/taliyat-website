import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { navLinks } from '../../data/navLinks.js';

export default function Navbar() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);

  const linkClass = ({ isActive }) =>
    `flex items-center gap-1 px-3 py-2 text-sm font-semibold transition-colors ${
      isActive ? 'text-gold' : 'text-white hover:text-gold-light'
    }`;

  const subLinkClass = ({ isActive }) =>
    `block whitespace-nowrap px-4 py-2 text-sm font-semibold transition-colors ${
      isActive ? 'text-gold' : 'text-primary-dark hover:text-gold'
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
          {navLinks.map((link) => {
            const hasDropdown = link.dropdown && link.dropdown.length > 0;
            const isSubmenuOpen = openSubmenu === link.key;

            return (
              <li
                key={link.path}
                className="relative"
                onMouseEnter={() => hasDropdown && setOpenSubmenu(link.key)}
                onMouseLeave={() => hasDropdown && setOpenSubmenu(null)}
              >
                <div className="flex items-center">
                  <NavLink to={link.path} className={linkClass} end={link.path === '/'}>
                    {t(link.key)}
                  </NavLink>
                  {hasDropdown && (
                    <button
                      type="button"
                      onClick={() => setOpenSubmenu(isSubmenuOpen ? null : link.key)}
                      className="px-1 py-2 text-xs text-white hover:text-gold-light md:pointer-events-none"
                      aria-expanded={isSubmenuOpen}
                      aria-label="Toggle submenu"
                    >
                      ▾
                    </button>
                  )}
                </div>

                {hasDropdown && (
                  <ul
                    className={`${
                      isSubmenuOpen ? 'flex' : 'hidden'
                    } flex-col rounded-lg bg-white py-2 shadow-lg md:absolute md:start-0 md:top-full md:z-50 md:min-w-[220px]`}
                  >
                    {link.dropdown.map((sub) => (
                      <li key={sub.path}>
                        <NavLink to={sub.path} className={subLinkClass} onClick={() => setOpen(false)}>
                          {t(sub.key)}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

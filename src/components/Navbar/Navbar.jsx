import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Navbar.scss';
import { BsYinYang } from 'react-icons/bs';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
  const [isSideMenuOpen, setSideMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 60) setScrolled(true);
    else setScrolled(false);
  };

  const showSideMenu = () => setSideMenuOpen(true);
  const hideSideMenu = () => setSideMenuOpen(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);
  return (
    <nav className={`navbar flex items-center ${scrolled ? 'scrolled' : ''}`}>
      <div className='container navbar-container w-full flex justify-between'>
        <div className='brand-and-toggler flex items-center justify-between'>
          <Link to='/' className='nav-brand text-white'>
            betterme <BsYinYang className='nav-brand-dot' />
          </Link>
          <button
            type='button'
            className='nav-show-btn text-white'
            onClick={showSideMenu}
          >
            <AiOutlineMenu className='bi bi-list' />
          </button>
        </div>

        <div
          className={`nb-menu-wrapper flex items-center ${
            isSideMenuOpen ? 'show' : ''
          }`}
        >
          <button type='button' className='nav-hide-btn' onClick={hideSideMenu}>
            <AiOutlineClose className='bi bi-x-square' />
          </button>
          <ul className='nav-menu flex items-center'>
            <li className='nav-item'>
              <a href='#' className='nav-link'>
                Inicio
              </a>
            </li>
            <li className='nav-item'>
              <a href='#' className='nav-link'>
                Sobre Nosotros
              </a>
            </li>
          </ul>
          <div className='nav-btns'>
            <a href='#' className='nav-btn btn'>
              Explorar
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

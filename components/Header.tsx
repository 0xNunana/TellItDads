'use client'
import { useState,useEffect } from 'react';
import {
  faMagnifyingGlass,
  faUser,
  faArrowRightToBracket,
  faBars,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const handleResize = () => {
    // Check if screen size is larger than the mobile breakpoint
    if (window.innerWidth >= 1024) {
      setIsMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    // Add a resize event listener
    window.addEventListener('resize', handleResize);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="bg-white sticky top-0 z-30">
      <div className="px-5 max-w-screen-xl mx-auto flex justify-between items-center py-3">
        <img
          src="/logo.jpg"
          alt="TID LOGO"
          className="rounded-full h-10 sm:h-16 md:20 w-auto"
        />
        <div className="lg:hidden flex items-center">
          <FontAwesomeIcon
            icon={faBars}
            height={20}
            width={20}
            onClick={toggleMobileMenu}
          />
        </div>
        {/* Non-mobile Menu */}
        <div className="hidden lg:flex space-x-4">
          <Link href="/Account">
            <div className="flex items-center space-x-1">
              <FontAwesomeIcon icon={faUser} width={25} height={25} />
              <p>Account</p>
            </div>
          </Link>
          <p>|</p>
          <Link href="/login">
            <div className="flex items-center space-x-1">
              <p>Login</p>
              <FontAwesomeIcon
                icon={faArrowRightToBracket}
                width={25}
                height={25}
              />
            </div>
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex pt-40 justify-center">
          <div className="lg:hidden flex flex-col items-center space-y-2 text-white">
            <Link href="/Account">
              <div className="flex items-center space-x-1">
                <FontAwesomeIcon icon={faUser} width={25} height={25} />
                <p>Account</p>
              </div>
            </Link>
          
            <Link href="/login">
              <div className="flex items-center space-x-1">
                <p>Login</p>
                <FontAwesomeIcon
                  icon={faArrowRightToBracket}
                  width={25}
                  height={25}
                />
              </div>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;

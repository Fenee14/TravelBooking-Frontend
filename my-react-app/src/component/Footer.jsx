import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        {/* Footer Top: Links and Social Media */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: About */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-violet-400">About Us</h3>
            <p className="text-white">
              We provide the best travel packages for your dream vacation. Explore the world with us.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-violet-400">Quick Links</h3>
            <ul>
              <li className="mb-2">
                <a href="#home" className="text-white hover:text-white">Home</a>
              </li>
              <li className="mb-2">
                <a href="#packages" className="text-white hover:text-white">Tour Packages</a>
              </li>
              <li className="mb-2">
                <a href="#contact" className="text-white hover:text-white">Contact Us</a>
              </li>
              <li className="mb-2">
                <a href="#about" className="text-white hover:text-white">About Us</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Social Media */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-violet-400">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <i className="fab fa-facebook fa-2x"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <i className="fab fa-twitter fa-2x"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <i className="fab fa-instagram fa-2x"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <i className="fab fa-linkedin fa-2x"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom: Copyright */}
        <div className="mt-8 border-t border-white pt-6 text-center">
          <p className="text-white">
            &copy; {new Date().getFullYear()} Travel Tours. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

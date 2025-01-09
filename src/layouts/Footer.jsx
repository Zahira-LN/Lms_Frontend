import React from "react";

const Footer = () => {
   

  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 font-notosans">

        {/* Logo and Description */}
        <div>
          <div className="flex items-center mb-4">
            <div className="bg-blue-500 w-16 h-12 rounded-full flex items-center justify-center text-white font-bold text-[18px]">
              LMS
            </div>
            <span className="ml-2 text-lg font-semibold font-monsterrtate">
              Learning Management System
            </span>
          </div>
          <p className="text-sm">
            Empowering learners through accessible and engaging online
            education. Byway is a leading online learning platform dedicated to
            providing high-quality, flexible, and affordable educational
            experiences.
          </p>
        </div>

        {/* Get Help */}
        <div>
          <h3 className="text-lg font-semibold mb-4 font-monsterrtate">Get Help</h3>
          <ul className="space-y-2 text-sm">
            <li>Contact Us</li>
            <li>Latest Articles</li>
            <li>FAQ</li>
          </ul>
        </div>

        {/* Programs */}
        <div>
          <h3 className="text-lg font-semibold mb-4 font-monsterrtate">Programs</h3>
          <ul className="space-y-2 text-sm">
            <li>Art & Design</li>
            <li>Business</li>
            <li>IT & Software</li>
            <li>Languages</li>
            <li>Programming</li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-lg font-semibold mb-4 font-monsterrtate">Contact Us</h3>
          <p className="text-sm">
            Address: 123 Main Street, Anytown, Karnataka
          </p>
          <p className="text-sm">Tel: +(123) 456-7890</p>
          <p className="text-sm mb-4">Mail: agdhfdmd@cddg.in</p>
          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-github"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-google"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-xing"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-windows"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// src/components/Header.jsx
import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="bg-primary text-white text-sm px-4 py-2 flex justify-between items-center">
        <div>📧 contact@example.com</div>
        <div>📞 +1 5589 55488 55</div>
      </div>
      <div className="container mx-auto flex justify-between items-center py-4 px-4">
        <h1 className="text-2xl font-bold">Medilab</h1>
        <nav className="hidden md:flex gap-6 text-gray-700">
          {["Home", "About", "Services", "Departments", "Doctors", "Dropdown", "Contact"].map((item) => (
            <a key={item} href="#" className="hover:text-primary">{item}</a>
          ))}
          <button className="bg-primary text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">Make an Appointment</button>
        </nav>
      </div>
    </header>
  );
};

export default Header;

import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 py-8 px-4 text-center text-gray-600">
      <p className="mb-2">Индивидуальный проект «Засорение русского языка жаргонизмами»</p>
      <p className="text-sm">© {new Date().getFullYear()} Все права защищены</p>
    </footer>
  );
};

export default Footer;

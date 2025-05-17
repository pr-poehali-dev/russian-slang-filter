
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-900 text-white px-4 py-12 text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 font-serif">Чистота русского языка</h1>
      <p className="text-xl max-w-3xl mx-auto opacity-90 font-sans">
        Исследование влияния жаргонизмов на современную русскую речь и культуру
      </p>
    </header>
  );
};

export default Header;

import React from "react";
import { quotes } from "../../data/language-data";

const Conclusion: React.FC = () => {
  return (
    <section className="my-12 bg-gradient-to-r from-blue-900 to-blue-700 p-6 rounded-lg shadow-md text-white">
      <h2 className="text-3xl font-bold mb-6 font-serif">Заключение</h2>
      <p className="mb-4">
        Сохранение чистоты русского языка — задача каждого из нас. Богатство и
        выразительность нашего языка — это культурное наследие, которое мы
        должны беречь и передавать будущим поколениям.
      </p>
      <blockquote className="border-l-4 border-white pl-4 my-4 italic">
        «{quotes[1].text}»
        <footer className="text-sm mt-1">— {quotes[1].author}</footer>
      </blockquote>
    </section>
  );
};

export default Conclusion;

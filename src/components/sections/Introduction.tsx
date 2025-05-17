
import React from 'react';
import { quotes } from '../../data/language-data';

const Introduction: React.FC = () => {
  return (
    <section className="my-12 bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-blue-900 mb-6 font-serif">Введение</h2>
      <div className="prose prose-lg max-w-none">
        <p>
          Русский язык — один из богатейших языков мира, обладающий выразительными средствами для передачи любой мысли. 
          Однако в последние десятилетия наблюдается тенденция к засорению русской речи жаргонизмами, сленгом и 
          необоснованными заимствованиями, что постепенно обедняет красоту и точность языка А.С. Пушкина и Л.Н. Толстого.
        </p>
        <blockquote className="text-red-800 border-l-4 border-red-800 pl-4 italic">
          «{quotes[0].text}»
          <footer className="text-sm mt-1">— {quotes[0].author}</footer>
        </blockquote>
      </div>
    </section>
  );
};

export default Introduction;

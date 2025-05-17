
import React from 'react';
import Icon from "@/components/ui/icon";
import { recommendations } from '../../data/language-data';

const Recommendations: React.FC = () => {
  return (
    <section className="my-12 bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-blue-900 mb-6 font-serif">Как сохранить чистоту языка</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {recommendations.map((rec, index) => (
          <div key={index} className="flex flex-col items-center text-center p-4 border border-blue-100 rounded-lg bg-blue-50">
            <div className="bg-blue-900 p-3 rounded-full mb-4">
              <Icon name={rec.icon} className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-red-900">{rec.title}</h3>
            <p className="text-sm">{rec.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded">
        <h3 className="text-lg font-semibold mb-2">Важно помнить</h3>
        <p>
          Язык — живой организм, который естественным образом развивается и изменяется. 
          Цель не в том, чтобы полностью исключить новые слова, а в том, чтобы сохранить баланс 
          между обновлением языка и сохранением его культурного наследия.
        </p>
      </div>
    </section>
  );
};

export default Recommendations;

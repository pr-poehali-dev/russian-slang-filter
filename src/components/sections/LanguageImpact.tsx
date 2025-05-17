
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const LanguageImpact: React.FC = () => {
  return (
    <section className="my-12 bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-blue-900 mb-6 font-serif">Влияние на русский язык</h2>
      
      <Tabs defaultValue="negative" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="negative">Негативное влияние</TabsTrigger>
          <TabsTrigger value="context">Контекстное использование</TabsTrigger>
        </TabsList>
        <TabsContent value="negative" className="p-4 bg-red-50 rounded-md mt-2">
          <ul className="space-y-2 list-disc pl-5">
            <li><strong>Обеднение речи</strong> — сужение словарного запаса и утрата выразительности.</li>
            <li><strong>Нарушение норм</strong> — искажение грамматических и синтаксических структур языка.</li>
            <li><strong>Коммуникационный барьер</strong> — затруднение общения между разными поколениями.</li>
            <li><strong>Культурное размывание</strong> — утрата культурной самобытности, выраженной через язык.</li>
          </ul>
        </TabsContent>
        <TabsContent value="context" className="p-4 bg-blue-50 rounded-md mt-2">
          <p>
            Стоит отметить, что жаргонизмы могут быть уместны в определенных коммуникативных ситуациях:
          </p>
          <ul className="space-y-2 list-disc pl-5 mt-2">
            <li>В неформальном общении между представителями одной социальной группы</li>
            <li>В художественной литературе для создания речевых характеристик персонажей</li>
            <li>В специализированных профессиональных беседах, где жаргон выполняет роль терминологии</li>
          </ul>
          <p className="mt-2">
            Однако проблемой становится неуместное использование жаргона в официальных, деловых и 
            образовательных контекстах, а также вытеснение им литературных эквивалентов в повседневной речи.
          </p>
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default LanguageImpact;

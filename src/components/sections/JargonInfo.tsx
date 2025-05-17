
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { reasons } from '../../data/language-data';

const JargonInfo: React.FC = () => {
  return (
    <section className="my-12 bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-blue-900 mb-6 font-serif">Что такое жаргонизмы?</h2>
      <div className="prose prose-lg max-w-none">
        <p>
          <strong>Жаргонизмы</strong> — слова и выражения, используемые определенными социальными группами, 
          профессиональными сообществами или возрастными категориями. В отличие от терминов, они часто 
          имеют эмоционально-экспрессивную окраску и затрудняют понимание речи людьми вне этих групп.
        </p>
        <p>
          Особенностью современных жаргонизмов является активное заимствование иностранных слов, 
          особенно из английского языка, даже при наличии точных русских эквивалентов.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        {reasons.map((reason, index) => (
          <Card key={index} className="transition-all hover:shadow-lg">
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="bg-blue-100 p-2 rounded-full">
                <Icon name={reason.icon} className="h-5 w-5 text-blue-900" />
              </div>
              <CardTitle className="text-xl text-red-900">{reason.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{reason.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default JargonInfo;

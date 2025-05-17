
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { examples } from '../../data/language-data';

const JargonExamples: React.FC = () => {
  return (
    <section className="my-12 bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-blue-900 mb-6 font-serif">Примеры жаргонизмов</h2>
      <p className="mb-6">
        Ниже представлены распространенные жаргонизмы, которые всё чаще встречаются в повседневной речи. 
        Обратите внимание на их литературные аналоги, которые точнее и выразительнее передают смысл.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {examples.map((example, index) => (
          <Card key={index} className="transition-all hover:shadow-lg hover:-translate-y-1">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg text-red-900">{example.jargon}</CardTitle>
              <CardDescription className="text-green-800 font-medium">
                Литературный аналог: {example.literary}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm">{example.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-6 text-center">
        <Button variant="outline" className="bg-blue-50 hover:bg-blue-100">
          Еще примеры
          <Icon name="ChevronDown" className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </section>
  );
};

export default JargonExamples;

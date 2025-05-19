
import React from 'react';
import Icon from "@/components/ui/icon";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    title: "Интерактивный словарь жаргонизмов",
    description: "Обширная база данных современных жаргонизмов с пояснениями и литературными аналогами. Возможность поиска по категориям и происхождению.",
    icon: "BookOpen"
  },
  {
    title: "Тесты и упражнения",
    description: "Проверьте свои знания и улучшите речь с помощью интерактивных заданий разного уровня сложности. Индивидуальная статистика прогресса.",
    icon: "CheckSquare"
  },
  {
    title: "Образовательные материалы",
    description: "Статьи, видеолекции и презентации от ведущих лингвистов и филологов о культуре речи и истории языка.",
    icon: "GraduationCap"
  },
  {
    title: "Форум для обсуждений",
    description: "Общайтесь с единомышленниками, задавайте вопросы экспертам и участвуйте в дискуссиях о современном русском языке.",
    icon: "MessageCircle"
  }
];

const SiteFeatures: React.FC = () => {
  return (
    <section className="my-12 bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-blue-900 mb-8 font-serif text-center">Основные функции сайта</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {features.map((feature, index) => (
          <Card key={index} className="border-2 border-blue-100 transition-all hover:shadow-lg hover:-translate-y-1">
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <div className="bg-blue-900 p-2 rounded-full">
                <Icon name={feature.icon} className="h-5 w-5 text-white" />
              </div>
              <CardTitle className="text-xl text-red-900">{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="text-center mt-8">
        <p className="text-blue-800 italic">
          Присоединяйтесь к нашему сообществу и вместе будем сохранять красоту русского языка!
        </p>
      </div>
    </section>
  );
};

export default SiteFeatures;

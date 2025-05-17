
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const examples = [
  { 
    jargon: "Чекать", 
    literary: "Проверять",
    description: "От английского «to check» — проверять." 
  },
  { 
    jargon: "Краш", 
    literary: "Объект влюбленности",
    description: "Возникло от английского «crush» — увлечение." 
  },
  { 
    jargon: "Рофлить", 
    literary: "Смеяться",
    description: "Произошло от англоязычной аббревиатуры ROFL (rolling on the floor laughing)." 
  },
  { 
    jargon: "Кринж", 
    literary: "Стыд, неловкость",
    description: "От английского «cringe» — содрогаться от стыда или отвращения." 
  },
  { 
    jargon: "Токсичный", 
    literary: "Неприятный, вредный",
    description: "Прямое заимствование английского «toxic», применяемое к людям." 
  },
  { 
    jargon: "Хейтить", 
    literary: "Ненавидеть, критиковать",
    description: "От английского «to hate» — ненавидеть." 
  }
];

const reasons = [
  {
    title: "Глобализация",
    description: "Активное проникновение иностранных слов в русскую речь из-за открытости информационного пространства.",
    icon: "Globe"
  },
  {
    title: "Технологии",
    description: "Быстрое развитие компьютерных технологий и интернета привело к появлению множества новых терминов.",
    icon: "Laptop"
  },
  {
    title: "Социальные сети",
    description: "Распространение сокращений и языковых новшеств через социальные платформы.",
    icon: "Share2"
  },
  {
    title: "Мода на иностранное",
    description: "Предпочтение заимствованных слов исконно русским из-за ошибочного представления об их престижности.",
    icon: "TrendingUp"
  }
];

const recommendations = [
  {
    title: "Читайте классическую литературу",
    description: "Регулярное чтение произведений русских классиков обогащает словарный запас и знакомит с правильными речевыми оборотами.",
    icon: "BookOpen"
  },
  {
    title: "Используйте словари",
    description: "При возникновении сомнений обращайтесь к толковым словарям русского языка.",
    icon: "BookText"
  },
  {
    title: "Следите за своей речью",
    description: "Старайтесь заменять жаргонизмы и иностранные слова русскими аналогами, когда это возможно.",
    icon: "MessageSquare"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Шапка */}
      <header className="bg-blue-900 text-white px-4 py-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 font-serif">Чистота русского языка</h1>
        <p className="text-xl max-w-3xl mx-auto opacity-90 font-sans">
          Исследование влияния жаргонизмов на современную русскую речь и культуру
        </p>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Введение */}
        <section className="my-12 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold text-blue-900 mb-6 font-serif">Введение</h2>
          <div className="prose prose-lg max-w-none">
            <p>
              Русский язык — один из богатейших языков мира, обладающий выразительными средствами для передачи любой мысли. 
              Однако в последние десятилетия наблюдается тенденция к засорению русской речи жаргонизмами, сленгом и 
              необоснованными заимствованиями, что постепенно обедняет красоту и точность языка А.С. Пушкина и Л.Н. Толстого.
            </p>
            <blockquote className="text-red-800 border-l-4 border-red-800 pl-4 italic">
              «Берегите наш язык, наш прекрасный русский язык, этот клад, это достояние, переданное нам нашими предшественниками...»
              <footer className="text-sm mt-1">— И.С. Тургенев</footer>
            </blockquote>
          </div>
        </section>

        {/* Что такое жаргонизмы */}
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

        {/* Примеры жаргонизмов */}
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

        {/* Влияние на язык */}
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

        {/* Рекомендации */}
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

        {/* Заключение */}
        <section className="my-12 bg-gradient-to-r from-blue-900 to-blue-700 p-6 rounded-lg shadow-md text-white">
          <h2 className="text-3xl font-bold mb-6 font-serif">Заключение</h2>
          <p className="mb-4">
            Сохранение чистоты русского языка — задача каждого из нас. Богатство и выразительность нашего языка 
            — это культурное наследие, которое мы должны беречь и передавать будущим поколениям.
          </p>
          <blockquote className="border-l-4 border-white pl-4 my-4 italic">
            «Язык есть исповедь народа, в нём слышится его природа, его душа и быт родной...»
            <footer className="text-sm mt-1">— П.А. Вяземский</footer>
          </blockquote>
          <Button className="mt-4 bg-white text-blue-900 hover:bg-blue-100">
            Узнать больше о русском языке
            <Icon name="ExternalLink" className="ml-2 h-4 w-4" />
          </Button>
        </section>
      </main>

      {/* Подвал */}
      <footer className="bg-gray-100 py-8 px-4 text-center text-gray-600">
        <p className="mb-2">Индивидуальный проект «Засорение русского языка жаргонизмами»</p>
        <p className="text-sm">© {new Date().getFullYear()} Все права защищены</p>
      </footer>
    </div>
  );
};

export default Index;

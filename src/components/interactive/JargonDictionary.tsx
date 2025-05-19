
import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";
import { examples } from '../../data/language-data';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const JargonDictionary: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredJargons = examples.filter(example => 
    example.jargon.toLowerCase().includes(searchTerm.toLowerCase()) ||
    example.literary.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold text-blue-900 mb-4">Интерактивный словарь жаргонизмов</h2>
      
      <div className="mb-6 relative">
        <Input
          placeholder="Поиск жаргонизмов..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10"
        />
        <Icon 
          name="Search" 
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" 
          size={18} 
        />
      </div>

      <Tabs defaultValue="all">
        <TabsList className="mb-4">
          <TabsTrigger value="all">Все</TabsTrigger>
          <TabsTrigger value="internet">Интернет</TabsTrigger>
          <TabsTrigger value="youth">Молодежные</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredJargons.length > 0 ? (
              filteredJargons.map((item, index) => (
                <Card key={index}>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-xl text-red-900">{item.jargon}</CardTitle>
                    <CardDescription>Литературный аналог: <span className="font-medium text-green-800">{item.literary}</span></CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>{item.description}</p>
                  </CardContent>
                </Card>
              ))
            ) : (
              <p className="col-span-2 text-center py-8 text-gray-500">Ничего не найдено. Попробуйте изменить запрос.</p>
            )}
          </div>
        </TabsContent>
        
        <TabsContent value="internet" className="mt-0">
          <p className="text-center py-8 text-gray-500">Раздел находится в разработке</p>
        </TabsContent>
        
        <TabsContent value="youth" className="mt-0">
          <p className="text-center py-8 text-gray-500">Раздел находится в разработке</p>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default JargonDictionary;


import React from 'react';
import { AspectRatio } from "@/components/ui/aspect-ratio";

const images = [
  {
    url: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Молодые люди смотрят в смартфоны",
    caption: "Социальные сети - основной источник распространения языковых новшеств"
  },
  {
    url: "https://images.unsplash.com/photo-1503551723145-6c040742065b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Граффити на стене с современными выражениями",
    caption: "Уличная культура активно использует заимствованные слова"
  },
  {
    url: "https://images.unsplash.com/photo-1519791883288-dc8bd696e667?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Человек читает книгу в традиционной библиотеке",
    caption: "Классическая литература - хранитель чистоты языка"
  }
];

const VisualExamples: React.FC = () => {
  return (
    <section className="my-12 bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-blue-900 mb-6 font-serif">Визуальные примеры</h2>
      <p className="mb-6">
        Фотографии, иллюстрирующие процесс влияния современных тенденций на русский язык 
        и контраст между классическим и жаргонным использованием языка.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <div key={index} className="overflow-hidden rounded-lg border border-gray-200 shadow-sm">
            <div className="w-full relative">
              <AspectRatio ratio={4/3}>
                <img 
                  src={image.url} 
                  alt={image.alt} 
                  className="object-cover w-full h-full"
                />
              </AspectRatio>
            </div>
            <div className="p-4">
              <p className="text-sm text-gray-600">{image.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VisualExamples;

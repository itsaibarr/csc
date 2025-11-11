'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { htmlTags, tagCategories, getTagsByCategory } from '../data/tags';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('Все');
  const filteredTags = getTagsByCategory(selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl font-bold text-gray-900 mb-4"
            >
              Изучаем HTML теги
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Интерактивная платформа для изучения HTML-тегов и их атрибутов.
              Практикуйтесь с визуальными примерами и сразу видите результат изменений.
            </motion.p>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Category Navigation */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {tagCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Tag Cards */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredTags.map((tag) => (
            <motion.div
              key={tag.name}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-bold text-gray-900">
                  {tag.name}
                </h3>
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                  {tag.category}
                </span>
              </div>
              <p className="text-gray-600 mb-4 line-clamp-2">
                {tag.description}
              </p>
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-500">
                  {tag.attributes.length} атрибутов
                </div>
                <Link
                  href={`/tags/${tag.name}`}
                  className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors text-sm"
                >
                  Изучить
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {filteredTags.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              В этой категории пока нет тегов
            </p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-500">
            <p>Интерактивная платформа для изучения HTML</p>
            <p className="mt-2">Создано с помощью Next.js и TypeScript</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

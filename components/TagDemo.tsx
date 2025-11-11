'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TagDefinition } from '../data/tags';

interface TagDemoProps {
  tag: TagDefinition;
}

export default function TagDemo({ tag }: TagDemoProps) {
  const [interactiveProps, setInteractiveProps] = useState(tag.interactiveProps || {});
  const [showInteractive, setShowInteractive] = useState(false);

  const updateProp = (key: string, value: any) => {
    setInteractiveProps(prev => ({ ...prev, [key]: value }));
  };

  const renderInteractiveExample = () => {
    switch (tag.name) {
      case 'h1':
      case 'h2':
      case 'h3':
        const HeadingTag = tag.name as React.ElementType;
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Текст заголовка:</label>
              <input
                type="text"
                value={interactiveProps.text}
                onChange={(e) => updateProp('text', e.target.value)}
                className="w-full px-3 py-2 border rounded"
                placeholder="Введите текст заголовка"
              />
            </div>
            <div className="border rounded p-4 bg-gray-50">
              <HeadingTag className="text-gray-900">
                {interactiveProps.text}
              </HeadingTag>
            </div>
          </div>
        );

      case 'p':
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Текст параграфа:</label>
              <textarea
                value={interactiveProps.text}
                onChange={(e) => updateProp('text', e.target.value)}
                className="w-full px-3 py-2 border rounded h-24 resize-none"
                placeholder="Введите текст параграфа"
              />
            </div>
            <div className="border rounded p-4 bg-gray-50">
              <p className="text-gray-700 leading-relaxed">
                {interactiveProps.text}
              </p>
            </div>
          </div>
        );

      case 'table':
        return (
          <div className="space-y-4">
            <div className="flex gap-4 flex-wrap">
              <div>
                <label className="block text-sm font-medium mb-1">Строки:</label>
                <input
                  type="number"
                  min="1"
                  max="5"
                  value={interactiveProps.rows}
                  onChange={(e) => updateProp('rows', parseInt(e.target.value))}
                  className="px-3 py-1 border rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Столбцы:</label>
                <input
                  type="number"
                  min="1"
                  max="5"
                  value={interactiveProps.cols}
                  onChange={(e) => updateProp('cols', parseInt(e.target.value))}
                  className="px-3 py-1 border rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Рамка:</label>
                <input
                  type="number"
                  min="0"
                  max="5"
                  value={interactiveProps.border}
                  onChange={(e) => updateProp('border', parseInt(e.target.value))}
                  className="px-3 py-1 border rounded"
                />
              </div>
            </div>
            <div className="border rounded p-4 bg-gray-50">
              <table border={interactiveProps.border} className="w-full">
                <tbody>
                  {Array.from({ length: interactiveProps.rows }, (_, rowIndex) => (
                    <tr key={rowIndex}>
                      {Array.from({ length: interactiveProps.cols }, (_, colIndex) => (
                        <td key={colIndex} className="p-2 border">
                          Ячейка {rowIndex + 1}-{colIndex + 1}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );

      case 'img':
        return (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">URL изображения:</label>
                <input
                  type="text"
                  value={interactiveProps.src}
                  onChange={(e) => updateProp('src', e.target.value)}
                  className="w-full px-3 py-1 border rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Alt текст:</label>
                <input
                  type="text"
                  value={interactiveProps.alt}
                  onChange={(e) => updateProp('alt', e.target.value)}
                  className="w-full px-3 py-1 border rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Ширина:</label>
                <input
                  type="number"
                  value={interactiveProps.width}
                  onChange={(e) => updateProp('width', parseInt(e.target.value))}
                  className="w-full px-3 py-1 border rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Высота:</label>
                <input
                  type="number"
                  value={interactiveProps.height}
                  onChange={(e) => updateProp('height', parseInt(e.target.value))}
                  className="w-full px-3 py-1 border rounded"
                />
              </div>
            </div>
            <div className="border rounded p-4 bg-gray-50 flex justify-center">
              <img
                src={interactiveProps.src}
                alt={interactiveProps.alt}
                width={interactiveProps.width}
                height={interactiveProps.height}
                className="border"
              />
            </div>
          </div>
        );

      case 'a':
        return (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">URL:</label>
                <input
                  type="text"
                  value={interactiveProps.href}
                  onChange={(e) => updateProp('href', e.target.value)}
                  className="w-full px-3 py-1 border rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Target:</label>
                <select
                  value={interactiveProps.target}
                  onChange={(e) => updateProp('target', e.target.value)}
                  className="w-full px-3 py-1 border rounded"
                >
                  <option value="_self">_self</option>
                  <option value="_blank">_blank</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Текст ссылки:</label>
              <input
                type="text"
                value={interactiveProps.text}
                onChange={(e) => updateProp('text', e.target.value)}
                className="w-full px-3 py-1 border rounded"
              />
            </div>
            <div className="border rounded p-4 bg-gray-50">
              <a
                href={interactiveProps.href}
                target={interactiveProps.target}
                className="text-blue-600 hover:underline"
              >
                {interactiveProps.text}
              </a>
            </div>
          </div>
        );

      case 'ul':
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Количество пунктов:</label>
              <input
                type="number"
                min="1"
                max="10"
                value={interactiveProps.items?.length || 3}
                onChange={(e) => {
                  const count = parseInt(e.target.value);
                  const newItems = Array.from({ length: count }, (_, i) => `Пункт ${i + 1}`);
                  updateProp('items', newItems);
                }}
                className="px-3 py-1 border rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Тип маркеров:</label>
              <select
                value={interactiveProps.type}
                onChange={(e) => updateProp('type', e.target.value)}
                className="px-3 py-1 border rounded"
              >
                <option value="disc">disc</option>
                <option value="circle">circle</option>
                <option value="square">square</option>
              </select>
            </div>
            <div className="border rounded p-4 bg-gray-50">
              <ul style={{ listStyleType: interactiveProps.type }}>
                {interactiveProps.items?.map((item: string, index: number) => (
                  <li key={index} className="mb-1">{item}</li>
                ))}
              </ul>
            </div>
          </div>
        );

      case 'form':
        return (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Action:</label>
                <input
                  type="text"
                  value={interactiveProps.action}
                  onChange={(e) => updateProp('action', e.target.value)}
                  className="w-full px-3 py-1 border rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Method:</label>
                <select
                  value={interactiveProps.method}
                  onChange={(e) => updateProp('method', e.target.value)}
                  className="w-full px-3 py-1 border rounded"
                >
                  <option value="get">GET</option>
                  <option value="post">POST</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Тип input:</label>
                <select
                  value={interactiveProps.inputType}
                  onChange={(e) => updateProp('inputType', e.target.value)}
                  className="w-full px-3 py-1 border rounded"
                >
                  <option value="text">text</option>
                  <option value="email">email</option>
                  <option value="password">password</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Текст кнопки:</label>
                <input
                  type="text"
                  value={interactiveProps.buttonText}
                  onChange={(e) => updateProp('buttonText', e.target.value)}
                  className="w-full px-3 py-1 border rounded"
                />
              </div>
            </div>
            <div className="border rounded p-4 bg-gray-50">
              <form action={interactiveProps.action} method={interactiveProps.method}>
                <div className="mb-3">
                  <input
                    type={interactiveProps.inputType}
                    name={interactiveProps.inputName}
                    placeholder="Введите текст"
                    className="px-3 py-2 border rounded w-full"
                  />
                </div>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  {interactiveProps.buttonText}
                </button>
              </form>
            </div>
          </div>
        );

      case 'header':
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Название сайта:</label>
              <input
                type="text"
                value={interactiveProps.title}
                onChange={(e) => updateProp('title', e.target.value)}
                className="w-full px-3 py-2 border rounded"
                placeholder="Введите название сайта"
              />
            </div>
            <div className="border rounded p-4 bg-gray-50">
              <header className="bg-blue-50 p-4 rounded border">
                <h1 className="text-xl font-bold text-blue-900 mb-2">{interactiveProps.title}</h1>
                <nav>
                  <ul className="flex gap-4">
                    {interactiveProps.navItems?.map((item: string, index: number) => (
                      <li key={index}>
                        <a href="#" className="text-blue-600 hover:underline">{item}</a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </header>
            </div>
          </div>
        );

      case 'nav':
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Пункты меню (через запятую):</label>
              <input
                type="text"
                value={interactiveProps.items?.join(', ')}
                onChange={(e) => updateProp('items', e.target.value.split(',').map(s => s.trim()))}
                className="w-full px-3 py-2 border rounded"
                placeholder="Главная, О нас, Услуги, Контакты"
              />
            </div>
            <div className="border rounded p-4 bg-gray-50">
              <nav className="bg-gray-100 p-4 rounded">
                <ul className="flex gap-6">
                  {interactiveProps.items?.map((item: string, index: number) => (
                    <li key={index}>
                      <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">{item}</a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        );

      case 'main':
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Заголовок:</label>
              <input
                type="text"
                value={interactiveProps.heading}
                onChange={(e) => updateProp('heading', e.target.value)}
                className="w-full px-3 py-2 border rounded"
                placeholder="Введите заголовок"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Содержание:</label>
              <textarea
                value={interactiveProps.content}
                onChange={(e) => updateProp('content', e.target.value)}
                className="w-full px-3 py-2 border rounded h-24 resize-none"
                placeholder="Введите содержание"
              />
            </div>
            <div className="border rounded p-4 bg-gray-50">
              <main className="bg-white p-6 rounded border">
                <h1 className="text-2xl font-bold mb-4">{interactiveProps.heading}</h1>
                <p className="text-gray-700">{interactiveProps.content}</p>
              </main>
            </div>
          </div>
        );

      case 'section':
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Заголовок раздела:</label>
              <input
                type="text"
                value={interactiveProps.heading}
                onChange={(e) => updateProp('heading', e.target.value)}
                className="w-full px-3 py-2 border rounded"
                placeholder="Введите заголовок раздела"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Содержание:</label>
              <textarea
                value={interactiveProps.content}
                onChange={(e) => updateProp('content', e.target.value)}
                className="w-full px-3 py-2 border rounded h-24 resize-none"
                placeholder="Введите содержание раздела"
              />
            </div>
            <div className="border rounded p-4 bg-gray-50">
              <section className="bg-blue-50 p-6 rounded border">
                <h2 className="text-xl font-bold mb-3 text-blue-900">{interactiveProps.heading}</h2>
                <p className="text-gray-700">{interactiveProps.content}</p>
              </section>
            </div>
          </div>
        );

      case 'article':
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Заголовок статьи:</label>
              <input
                type="text"
                value={interactiveProps.title}
                onChange={(e) => updateProp('title', e.target.value)}
                className="w-full px-3 py-2 border rounded"
                placeholder="Введите заголовок статьи"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Содержание статьи:</label>
              <textarea
                value={interactiveProps.content}
                onChange={(e) => updateProp('content', e.target.value)}
                className="w-full px-3 py-2 border rounded h-32 resize-none"
                placeholder="Введите содержание статьи"
              />
            </div>
            <div className="border rounded p-4 bg-gray-50">
              <article className="bg-white p-6 rounded border shadow-sm">
                <h2 className="text-xl font-bold mb-3">{interactiveProps.title}</h2>
                <p className="text-gray-700 leading-relaxed">{interactiveProps.content}</p>
              </article>
            </div>
          </div>
        );

      case 'aside':
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Заголовок:</label>
              <input
                type="text"
                value={interactiveProps.title}
                onChange={(e) => updateProp('title', e.target.value)}
                className="w-full px-3 py-2 border rounded"
                placeholder="Введите заголовок боковой панели"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Ссылки (через запятую):</label>
              <input
                type="text"
                value={interactiveProps.links?.join(', ')}
                onChange={(e) => updateProp('links', e.target.value.split(',').map(s => s.trim()))}
                className="w-full px-3 py-2 border rounded"
                placeholder="Ссылка 1, Ссылка 2, Ссылка 3"
              />
            </div>
            <div className="border rounded p-4 bg-gray-50">
              <aside className="bg-gray-100 p-4 rounded w-64">
                <h3 className="font-bold mb-3">{interactiveProps.title}</h3>
                <ul className="space-y-2">
                  {interactiveProps.links?.map((link: string, index: number) => (
                    <li key={index}>
                      <a href="#" className="text-blue-600 hover:underline">{link}</a>
                    </li>
                  ))}
                </ul>
              </aside>
            </div>
          </div>
        );

      case 'footer':
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Copyright:</label>
              <input
                type="text"
                value={interactiveProps.copyright}
                onChange={(e) => updateProp('copyright', e.target.value)}
                className="w-full px-3 py-2 border rounded"
                placeholder="© 2024 Мой сайт"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Контакты:</label>
              <input
                type="text"
                value={interactiveProps.contact}
                onChange={(e) => updateProp('contact', e.target.value)}
                className="w-full px-3 py-2 border rounded"
                placeholder="info@example.com"
              />
            </div>
            <div className="border rounded p-4 bg-gray-50">
              <footer className="bg-gray-800 text-white p-6 rounded">
                <div className="flex justify-between items-center">
                  <p>{interactiveProps.copyright}</p>
                  <p>{interactiveProps.contact}</p>
                </div>
              </footer>
            </div>
          </div>
        );

      case 'practice':
        return (
          <div className="space-y-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Создание вашей первой веб-страницы</h3>
              <p className="text-gray-700 mb-4">
                Попробуйте изменить элементы ниже и посмотрите, как изменится ваша страница!
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Заголовок страницы:</label>
                  <input
                    type="text"
                    value={interactiveProps.title}
                    onChange={(e) => updateProp('title', e.target.value)}
                    className="w-full px-3 py-2 border rounded"
                    placeholder="Моя первая страница"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Главный заголовок:</label>
                  <input
                    type="text"
                    value={interactiveProps.heading}
                    onChange={(e) => updateProp('heading', e.target.value)}
                    className="w-full px-3 py-2 border rounded"
                    placeholder="Привет, мир!"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Текст параграфа:</label>
                  <textarea
                    value={interactiveProps.paragraph}
                    onChange={(e) => updateProp('paragraph', e.target.value)}
                    className="w-full px-3 py-2 border rounded h-24 resize-none"
                    placeholder="Это моя первая веб-страница."
                  />
                </div>
              </div>

              <div className="border rounded p-4 bg-gray-50">
                <div className="text-sm text-gray-600 mb-2">Предварительный просмотр:</div>
                <div className="border bg-white p-4 rounded min-h-[200px]">
                  <h1 className="text-2xl font-bold mb-4 text-blue-900">{interactiveProps.heading}</h1>
                  <p className="text-gray-700 leading-relaxed">{interactiveProps.paragraph}</p>
                </div>
              </div>
            </div>

            <div className="border rounded p-4 bg-gray-900 text-green-400">
              <div className="text-sm text-gray-300 mb-2">HTML код вашей страницы:</div>
              <pre className="text-xs overflow-x-auto">
                <code>{`<!DOCTYPE html>
<html>
<head>
  <title>${interactiveProps.title}</title>
</head>
<body>
  <h1>${interactiveProps.heading}</h1>
  <p>${interactiveProps.paragraph}</p>
</body>
</html>`}</code>
              </pre>
            </div>
          </div>
        );

      default:
        return <div>Интерактивный пример для этого тега пока не реализован</div>;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-lg shadow-md p-6"
    >
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">{tag.name}</h2>
        <p className="text-gray-600 mb-4">{tag.description}</p>
        <span className="inline-block bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
          {tag.category}
        </span>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-3">Атрибуты:</h3>
        <div className="space-y-2">
          {tag.attributes.map((attr, index) => (
            <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded">
              <code className="font-mono text-sm bg-white px-2 py-1 rounded border">
                {attr.name}
              </code>
              <div className="flex-1">
                <p className="text-sm text-gray-700">{attr.description}</p>
                {attr.example && (
                  <code className="text-xs text-gray-500 block mt-1">
                    Пример: {attr.example}
                  </code>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-3">Пример кода:</h3>
        <pre className="bg-gray-900 text-green-400 p-4 rounded overflow-x-auto text-sm">
          <code>{tag.example}</code>
        </pre>
      </div>

      <div>
        <button
          onClick={() => setShowInteractive(!showInteractive)}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors"
        >
          {showInteractive ? 'Скрыть' : 'Попробуй изменить'}
        </button>

        {showInteractive && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-4"
          >
            <h3 className="text-lg font-semibold mb-3">Интерактивный пример:</h3>
            {renderInteractiveExample()}
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

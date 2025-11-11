'use client';

import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import TagDemo from '../../../components/TagDemo';
import { htmlTags } from '../../../data/tags';

export default function TagPage() {
  const params = useParams();
  const router = useRouter();
  const tagName = params.tag as string;
  const tag = htmlTags[tagName];

  if (!tag) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Тег не найден</h1>
          <p className="text-gray-600 mb-6">Тег "{tagName}" не существует в нашей базе.</p>
          <Link
            href="/"
            className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition-colors"
          >
            Вернуться на главную
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => router.back()}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Назад
            </button>
            <Link
              href="/"
              className="text-blue-600 hover:text-blue-800 transition-colors"
            >
              Главная
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <TagDemo tag={tag} />
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

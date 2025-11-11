export interface TagAttribute {
  name: string;
  description: string;
  example?: string;
}

export interface TagDefinition {
  name: string;
  description: string;
  category: string;
  attributes: TagAttribute[];
  example: string;
  interactiveProps?: Record<string, any>;
}

export const htmlTags: Record<string, TagDefinition> = {
  h1: {
    name: 'h1',
    description: 'Главный заголовок страницы (самый высокий уровень)',
    category: 'Структура',
    attributes: [
      { name: 'id', description: 'Уникальный идентификатор', example: 'id="main-title"' },
      { name: 'class', description: 'CSS классы', example: 'class="title"' },
    ],
    example: '<h1>Главный заголовок</h1>',
    interactiveProps: {
      text: 'Главный заголовок',
      level: 1
    }
  },
  h2: {
    name: 'h2',
    description: 'Заголовок второго уровня',
    category: 'Структура',
    attributes: [
      { name: 'id', description: 'Уникальный идентификатор', example: 'id="section-title"' },
      { name: 'class', description: 'CSS классы', example: 'class="subtitle"' },
    ],
    example: '<h2>Заголовок второго уровня</h2>',
    interactiveProps: {
      text: 'Заголовок второго уровня',
      level: 2
    }
  },
  h3: {
    name: 'h3',
    description: 'Заголовок третьего уровня',
    category: 'Структура',
    attributes: [
      { name: 'id', description: 'Уникальный идентификатор', example: 'id="subsection-title"' },
      { name: 'class', description: 'CSS классы', example: 'class="heading"' },
    ],
    example: '<h3>Заголовок третьего уровня</h3>',
    interactiveProps: {
      text: 'Заголовок третьего уровня',
      level: 3
    }
  },
  p: {
    name: 'p',
    description: 'Тег для создания параграфов текста',
    category: 'Контент',
    attributes: [
      { name: 'id', description: 'Уникальный идентификатор', example: 'id="intro"' },
      { name: 'class', description: 'CSS классы', example: 'class="text"' },
    ],
    example: '<p>Это параграф текста. Он содержит основную информацию страницы.</p>',
    interactiveProps: {
      text: 'Это параграф текста. Он содержит основную информацию страницы.'
    }
  },
  table: {
    name: 'table',
    description: 'Тег для создания таблиц с данными',
    category: 'Структура',
    attributes: [
      { name: 'border', description: 'Толщина рамки таблицы', example: 'border="1"' },
      { name: 'cellspacing', description: 'Расстояние между ячейками', example: 'cellspacing="0"' },
      { name: 'cellpadding', description: 'Отступ внутри ячеек', example: 'cellpadding="5"' },
    ],
    example: '<table border="1"><tr><th>Заголовок 1</th><th>Заголовок 2</th></tr><tr><td>Ячейка 1</td><td>Ячейка 2</td></tr></table>',
    interactiveProps: {
      rows: 2,
      cols: 2,
      border: 1,
      data: [['Ячейка 1', 'Ячейка 2'], ['Ячейка 3', 'Ячейка 4']]
    }
  },
  img: {
    name: 'img',
    description: 'Тег для вставки изображений',
    category: 'Контент',
    attributes: [
      { name: 'src', description: 'Путь к изображению', example: 'src="image.jpg"' },
      { name: 'alt', description: 'Альтернативный текст', example: 'alt="Описание изображения"' },
      { name: 'width', description: 'Ширина изображения', example: 'width="300"' },
      { name: 'height', description: 'Высота изображения', example: 'height="200"' },
    ],
    example: '<img src="https://via.placeholder.com/300x200" alt="Пример изображения" width="300" height="200">',
    interactiveProps: {
      src: 'https://via.placeholder.com/300x200',
      alt: 'Пример изображения',
      width: 300,
      height: 200
    }
  },
  a: {
    name: 'a',
    description: 'Тег для создания ссылок',
    category: 'Навигация',
    attributes: [
      { name: 'href', description: 'URL назначения', example: 'href="https://example.com"' },
      { name: 'target', description: 'Где открыть ссылку', example: 'target="_blank"' },
      { name: 'title', description: 'Всплывающая подсказка', example: 'title="Перейти на сайт"' },
    ],
    example: '<a href="https://example.com" target="_blank">Перейти на сайт</a>',
    interactiveProps: {
      href: 'https://example.com',
      target: '_blank',
      text: 'Перейти на сайт'
    }
  },
  ul: {
    name: 'ul',
    description: 'Тег для создания неупорядоченного списка',
    category: 'Структура',
    attributes: [
      { name: 'type', description: 'Тип маркеров', example: 'type="disc"' },
    ],
    example: '<ul><li>Первый пункт</li><li>Второй пункт</li><li>Третий пункт</li></ul>',
    interactiveProps: {
      items: ['Первый пункт', 'Второй пункт', 'Третий пункт'],
      type: 'disc'
    }
  },
  form: {
    name: 'form',
    description: 'Тег для создания форм',
    category: 'Интерактив',
    attributes: [
      { name: 'action', description: 'URL для отправки данных', example: 'action="/submit"' },
      { name: 'method', description: 'Метод отправки', example: 'method="post"' },
    ],
    example: '<form action="/submit" method="post"><input type="text" name="name"><button type="submit">Отправить</button></form>',
    interactiveProps: {
      action: '/submit',
      method: 'post',
      inputType: 'text',
      inputName: 'name',
      buttonText: 'Отправить'
    }
  },
  header: {
    name: 'header',
    description: 'Семантический тег для заголовка страницы или раздела',
    category: 'Семантика',
    attributes: [
      { name: 'id', description: 'Уникальный идентификатор', example: 'id="page-header"' },
      { name: 'class', description: 'CSS классы', example: 'class="header"' },
    ],
    example: '<header><h1>Название сайта</h1><nav><a href="/">Главная</a></nav></header>',
    interactiveProps: {
      title: 'Название сайта',
      navItems: ['Главная', 'О нас', 'Контакты']
    }
  },
  nav: {
    name: 'nav',
    description: 'Семантический тег для навигации по сайту',
    category: 'Семантика',
    attributes: [
      { name: 'id', description: 'Уникальный идентификатор', example: 'id="main-nav"' },
      { name: 'class', description: 'CSS классы', example: 'class="navigation"' },
    ],
    example: '<nav><ul><li><a href="/">Главная</a></li><li><a href="/about">О нас</a></li></ul></nav>',
    interactiveProps: {
      items: ['Главная', 'О нас', 'Услуги', 'Контакты']
    }
  },
  main: {
    name: 'main',
    description: 'Основное содержимое страницы',
    category: 'Семантика',
    attributes: [
      { name: 'id', description: 'Уникальный идентификатор', example: 'id="main-content"' },
      { name: 'class', description: 'CSS классы', example: 'class="main"' },
    ],
    example: '<main><h1>Добро пожаловать</h1><p>Основной контент страницы</p></main>',
    interactiveProps: {
      heading: 'Добро пожаловать',
      content: 'Основной контент страницы находится здесь.'
    }
  },
  section: {
    name: 'section',
    description: 'Семантический тег для раздела страницы',
    category: 'Семантика',
    attributes: [
      { name: 'id', description: 'Уникальный идентификатор', example: 'id="about-section"' },
      { name: 'class', description: 'CSS классы', example: 'class="section"' },
    ],
    example: '<section><h2>О компании</h2><p>Информация о нашей компании</p></section>',
    interactiveProps: {
      heading: 'О компании',
      content: 'Информация о нашей компании и наших услугах.'
    }
  },
  article: {
    name: 'article',
    description: 'Самостоятельный блок контента (статья, пост, новость)',
    category: 'Семантика',
    attributes: [
      { name: 'id', description: 'Уникальный идентификатор', example: 'id="article-1"' },
      { name: 'class', description: 'CSS классы', example: 'class="article"' },
    ],
    example: '<article><h2>Заголовок статьи</h2><p>Содержание статьи...</p></article>',
    interactiveProps: {
      title: 'Заголовок статьи',
      content: 'Это содержимое статьи. Статья может содержать текст, изображения и другие элементы.'
    }
  },
  aside: {
    name: 'aside',
    description: 'Боковая панель или дополнительная информация',
    category: 'Семантика',
    attributes: [
      { name: 'id', description: 'Уникальный идентификатор', example: 'id="sidebar"' },
      { name: 'class', description: 'CSS классы', example: 'class="sidebar"' },
    ],
    example: '<aside><h3>Связанные ссылки</h3><ul><li><a href="#">Ссылка 1</a></li></ul></aside>',
    interactiveProps: {
      title: 'Связанные ссылки',
      links: ['Ссылка 1', 'Ссылка 2', 'Ссылка 3']
    }
  },
  footer: {
    name: 'footer',
    description: 'Нижняя часть страницы с контактной информацией',
    category: 'Семантика',
    attributes: [
      { name: 'id', description: 'Уникальный идентификатор', example: 'id="page-footer"' },
      { name: 'class', description: 'CSS классы', example: 'class="footer"' },
    ],
    example: '<footer><p>&copy; 2024 Мой сайт</p><p>Контакты: info@example.com</p></footer>',
    interactiveProps: {
      copyright: '© 2024 Мой сайт',
      contact: 'Контакты: info@example.com'
    }
  },
};

export const tagCategories = [
  'Все',
  'Структура',
  'Контент',
  'Навигация',
  'Интерактив',
  'Семантика',
  'Практика'
];

export const getTagsByCategory = (category: string) => {
  if (category === 'Все') return Object.values(htmlTags);
  return Object.values(htmlTags).filter(tag => tag.category === category);
};

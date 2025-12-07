export interface Course {
  id: number;
  title: string;
  description: string;
  duration: string;
  level: string;
  progress: number;
  rating: number;
  students: number;
  category: string;
  modules?: Module[];
}

export interface Module {
  id: number;
  title: string;
  lessons: Lesson[];
}

export interface Lesson {
  id: number;
  title: string;
  duration: string;
  type: 'video' | 'text' | 'quiz';
  completed: boolean;
}

export const courses: Course[] = [
  {
    id: 1,
    title: 'Основы веб-разработки',
    description: 'Изучите HTML, CSS и JavaScript с нуля',
    duration: '8 недель',
    level: 'Начальный',
    progress: 65,
    rating: 4.8,
    students: 2543,
    category: 'Программирование',
    modules: [
      {
        id: 1,
        title: 'Введение в HTML',
        lessons: [
          { id: 1, title: 'Что такое HTML?', duration: '12 мин', type: 'video', completed: true },
          { id: 2, title: 'Структура HTML документа', duration: '15 мин', type: 'video', completed: true },
          { id: 3, title: 'Теги и атрибуты', duration: '20 мин', type: 'video', completed: false },
          { id: 4, title: 'Тест по HTML', duration: '10 мин', type: 'quiz', completed: false }
        ]
      },
      {
        id: 2,
        title: 'Основы CSS',
        lessons: [
          { id: 5, title: 'Введение в CSS', duration: '14 мин', type: 'video', completed: false },
          { id: 6, title: 'Селекторы и свойства', duration: '18 мин', type: 'video', completed: false },
          { id: 7, title: 'Flexbox и Grid', duration: '25 мин', type: 'video', completed: false }
        ]
      },
      {
        id: 3,
        title: 'JavaScript для начинающих',
        lessons: [
          { id: 8, title: 'Переменные и типы данных', duration: '16 мин', type: 'video', completed: false },
          { id: 9, title: 'Функции', duration: '22 мин', type: 'video', completed: false },
          { id: 10, title: 'Итоговый тест', duration: '15 мин', type: 'quiz', completed: false }
        ]
      }
    ]
  },
  {
    id: 2,
    title: 'React и современный фронтенд',
    description: 'Создавайте интерактивные веб-приложения',
    duration: '10 недель',
    level: 'Средний',
    progress: 35,
    rating: 4.9,
    students: 1876,
    category: 'Программирование',
    modules: [
      {
        id: 1,
        title: 'Введение в React',
        lessons: [
          { id: 1, title: 'Что такое React?', duration: '10 мин', type: 'video', completed: false },
          { id: 2, title: 'Создание первого компонента', duration: '18 мин', type: 'video', completed: false },
          { id: 3, title: 'JSX синтаксис', duration: '15 мин', type: 'video', completed: false }
        ]
      },
      {
        id: 2,
        title: 'Hooks и состояние',
        lessons: [
          { id: 4, title: 'useState хук', duration: '20 мин', type: 'video', completed: false },
          { id: 5, title: 'useEffect и жизненный цикл', duration: '25 мин', type: 'video', completed: false },
          { id: 6, title: 'Практика: Счетчик', duration: '30 мин', type: 'text', completed: false }
        ]
      }
    ]
  },
  {
    id: 3,
    title: 'UX/UI дизайн с нуля',
    description: 'Научитесь создавать красивые интерфейсы',
    duration: '6 недель',
    level: 'Начальный',
    progress: 0,
    rating: 4.7,
    students: 3201,
    category: 'Дизайн',
    modules: [
      {
        id: 1,
        title: 'Основы UX дизайна',
        lessons: [
          { id: 1, title: 'Принципы user experience', duration: '12 мин', type: 'video', completed: false },
          { id: 2, title: 'Исследование пользователей', duration: '16 мин', type: 'video', completed: false },
          { id: 3, title: 'Персоны и сценарии', duration: '14 мин', type: 'text', completed: false }
        ]
      },
      {
        id: 2,
        title: 'UI и визуальный дизайн',
        lessons: [
          { id: 4, title: 'Типографика', duration: '18 мин', type: 'video', completed: false },
          { id: 5, title: 'Цветовая теория', duration: '20 мин', type: 'video', completed: false },
          { id: 6, title: 'Композиция и сетки', duration: '22 мин', type: 'video', completed: false }
        ]
      }
    ]
  },
  {
    id: 4,
    title: 'Python для анализа данных',
    description: 'Работа с данными и машинное обучение',
    duration: '12 недель',
    level: 'Средний',
    progress: 0,
    rating: 4.9,
    students: 1432,
    category: 'Data Science',
    modules: [
      {
        id: 1,
        title: 'Основы Python',
        lessons: [
          { id: 1, title: 'Синтаксис Python', duration: '15 мин', type: 'video', completed: false },
          { id: 2, title: 'Типы данных и коллекции', duration: '20 мин', type: 'video', completed: false },
          { id: 3, title: 'Функции и модули', duration: '18 мин', type: 'video', completed: false }
        ]
      },
      {
        id: 2,
        title: 'Pandas и NumPy',
        lessons: [
          { id: 4, title: 'Работа с DataFrame', duration: '25 мин', type: 'video', completed: false },
          { id: 5, title: 'Анализ и визуализация', duration: '30 мин', type: 'video', completed: false },
          { id: 6, title: 'Практический проект', duration: '45 мин', type: 'text', completed: false }
        ]
      }
    ]
  },
  {
    id: 5,
    title: 'Digital маркетинг 2024',
    description: 'Современные инструменты продвижения',
    duration: '5 недель',
    level: 'Начальный',
    progress: 0,
    rating: 4.6,
    students: 2890,
    category: 'Маркетинг',
    modules: [
      {
        id: 1,
        title: 'Основы digital маркетинга',
        lessons: [
          { id: 1, title: 'Что такое digital маркетинг?', duration: '10 мин', type: 'video', completed: false },
          { id: 2, title: 'Каналы продвижения', duration: '15 мин', type: 'video', completed: false },
          { id: 3, title: 'Целевая аудитория', duration: '12 мин', type: 'video', completed: false }
        ]
      },
      {
        id: 2,
        title: 'SMM и контент-маркетинг',
        lessons: [
          { id: 4, title: 'Стратегия в соцсетях', duration: '20 мин', type: 'video', completed: false },
          { id: 5, title: 'Создание контент-плана', duration: '18 мин', type: 'text', completed: false },
          { id: 6, title: 'Аналитика и метрики', duration: '16 мин', type: 'video', completed: false }
        ]
      }
    ]
  },
  {
    id: 6,
    title: 'Backend разработка на Node.js',
    description: 'Создавайте серверные приложения',
    duration: '9 недель',
    level: 'Продвинутый',
    progress: 0,
    rating: 4.8,
    students: 1654,
    category: 'Программирование',
    modules: [
      {
        id: 1,
        title: 'Node.js основы',
        lessons: [
          { id: 1, title: 'Введение в Node.js', duration: '14 мин', type: 'video', completed: false },
          { id: 2, title: 'NPM и модули', duration: '16 мин', type: 'video', completed: false },
          { id: 3, title: 'Асинхронность и промисы', duration: '22 мин', type: 'video', completed: false }
        ]
      },
      {
        id: 2,
        title: 'Express и REST API',
        lessons: [
          { id: 4, title: 'Создание сервера на Express', duration: '20 мин', type: 'video', completed: false },
          { id: 5, title: 'Роутинг и middleware', duration: '25 мин', type: 'video', completed: false },
          { id: 6, title: 'Работа с базами данных', duration: '30 мин', type: 'video', completed: false }
        ]
      }
    ]
  }
];

export const stats = [
  { label: 'Пройдено курсов', value: '12', icon: 'GraduationCap', color: 'text-primary' },
  { label: 'Часов обучения', value: '156', icon: 'Clock', color: 'text-secondary' },
  { label: 'Сертификатов', value: '8', icon: 'Award', color: 'text-accent' },
  { label: 'Средний балл', value: '4.7', icon: 'Star', color: 'text-amber-500' }
];

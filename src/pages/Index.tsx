import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

interface Course {
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

interface Module {
  id: number;
  title: string;
  lessons: Lesson[];
}

interface Lesson {
  id: number;
  title: string;
  duration: string;
  type: 'video' | 'text' | 'quiz';
  completed: boolean;
}

const courses: Course[] = [
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
    category: 'Программирование'
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
    category: 'Дизайн'
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
    category: 'Data Science'
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
    category: 'Маркетинг'
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
    category: 'Программирование'
  }
];

const stats = [
  { label: 'Пройдено курсов', value: '12', icon: 'GraduationCap', color: 'text-primary' },
  { label: 'Часов обучения', value: '156', icon: 'Clock', color: 'text-secondary' },
  { label: 'Сертификатов', value: '8', icon: 'Award', color: 'text-accent' },
  { label: 'Средний балл', value: '4.7', icon: 'Star', color: 'text-amber-500' }
];

export default function Index() {
  const [selectedCategory, setSelectedCategory] = useState('Все');
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const categories = ['Все', 'Программирование', 'Дизайн', 'Data Science', 'Маркетинг'];

  const handleCourseClick = (course: Course) => {
    setSelectedCourse(course);
    setIsDialogOpen(true);
  };

  const filteredCourses = selectedCategory === 'Все' 
    ? courses 
    : courses.filter(course => course.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10"></div>
        
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Учись по-новому
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Современная платформа для онлайн-образования с интерактивными курсами и личным кабинетом
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" className="text-lg px-8 py-6 hover:scale-105 transition-transform">
                <Icon name="Rocket" size={24} className="mr-2" />
                Начать обучение
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 hover:scale-105 transition-transform">
                <Icon name="PlayCircle" size={24} className="mr-2" />
                Смотреть демо
              </Button>
            </div>
          </div>

          <Tabs defaultValue="courses" className="mb-16">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
              <TabsTrigger value="courses" className="text-lg">
                <Icon name="BookOpen" size={20} className="mr-2" />
                Курсы
              </TabsTrigger>
              <TabsTrigger value="dashboard" className="text-lg">
                <Icon name="LayoutDashboard" size={20} className="mr-2" />
                Панель
              </TabsTrigger>
            </TabsList>

            <TabsContent value="courses" className="animate-fade-in">
              <div className="mb-8 flex gap-2 flex-wrap justify-center">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? 'default' : 'outline'}
                    onClick={() => setSelectedCategory(category)}
                    className="hover:scale-105 transition-transform"
                  >
                    {category}
                  </Button>
                ))}
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCourses.map((course, index) => (
                  <Card 
                    key={course.id} 
                    className="hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-scale-in border-2 hover:border-primary/50"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <Badge variant={course.progress > 0 ? 'default' : 'secondary'}>
                          {course.level}
                        </Badge>
                        <div className="flex items-center gap-1 text-amber-500">
                          <Icon name="Star" size={16} />
                          <span className="font-semibold">{course.rating}</span>
                        </div>
                      </div>
                      <CardTitle className="text-2xl mb-2">{course.title}</CardTitle>
                      <CardDescription className="text-base">{course.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      {course.progress > 0 && (
                        <div className="mb-4">
                          <div className="flex justify-between text-sm mb-2">
                            <span className="text-muted-foreground">Прогресс</span>
                            <span className="font-semibold text-primary">{course.progress}%</span>
                          </div>
                          <Progress value={course.progress} className="h-2" />
                        </div>
                      )}
                      <div className="flex justify-between items-center text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-1">
                          <Icon name="Clock" size={16} />
                          <span>{course.duration}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Icon name="Users" size={16} />
                          <span>{course.students.toLocaleString()}</span>
                        </div>
                      </div>
                      <Button 
                        className="w-full hover:scale-105 transition-transform" 
                        size="lg"
                        onClick={() => handleCourseClick(course)}
                      >
                        {course.progress > 0 ? (
                          <>
                            <Icon name="PlayCircle" size={20} className="mr-2" />
                            Продолжить
                          </>
                        ) : (
                          <>
                            <Icon name="Rocket" size={20} className="mr-2" />
                            Начать курс
                          </>
                        )}
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="dashboard" className="animate-fade-in">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {stats.map((stat, index) => (
                  <Card 
                    key={stat.label} 
                    className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-scale-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="pt-6">
                      <div className="flex items-center justify-between mb-2">
                        <Icon name={stat.icon} size={32} className={stat.color} />
                        <span className="text-4xl font-bold">{stat.value}</span>
                      </div>
                      <p className="text-muted-foreground text-sm">{stat.label}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="grid lg:grid-cols-2 gap-6">
                <Card className="animate-slide-up">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="TrendingUp" size={24} className="text-primary" />
                      Активность обучения
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'].map((day, index) => {
                        const value = Math.random() * 100;
                        return (
                          <div key={day}>
                            <div className="flex justify-between text-sm mb-2">
                              <span className="text-muted-foreground">{day}</span>
                              <span className="font-semibold">{Math.round(value)}%</span>
                            </div>
                            <Progress value={value} className="h-3" />
                          </div>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>

                <Card className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="Target" size={24} className="text-secondary" />
                      Текущие цели
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-2">
                            <Icon name="CheckCircle2" size={20} className="text-primary" />
                            <span className="font-semibold">Завершить 3 курса</span>
                          </div>
                          <span className="text-sm text-muted-foreground">2/3</span>
                        </div>
                        <Progress value={66} className="h-2" />
                      </div>
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-2">
                            <Icon name="Award" size={20} className="text-accent" />
                            <span className="font-semibold">Получить 5 сертификатов</span>
                          </div>
                          <span className="text-sm text-muted-foreground">3/5</span>
                        </div>
                        <Progress value={60} className="h-2" />
                      </div>
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-2">
                            <Icon name="Flame" size={20} className="text-orange-500" />
                            <span className="font-semibold">Учиться 30 дней подряд</span>
                          </div>
                          <span className="text-sm text-muted-foreground">18/30</span>
                        </div>
                        <Progress value={60} className="h-2" />
                      </div>
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-2">
                            <Icon name="BookOpen" size={20} className="text-secondary" />
                            <span className="font-semibold">Пройти 100 уроков</span>
                          </div>
                          <span className="text-sm text-muted-foreground">78/100</span>
                        </div>
                        <Progress value={78} className="h-2" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="mt-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Trophy" size={24} className="text-amber-500" />
                    Достижения
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                      { icon: 'Medal', label: 'Первый курс', color: 'text-amber-500' },
                      { icon: 'Zap', label: 'Быстрый старт', color: 'text-primary' },
                      { icon: 'Flame', label: 'Неделя обучения', color: 'text-orange-500' },
                      { icon: 'Star', label: 'Отличник', color: 'text-secondary' },
                      { icon: 'Heart', label: 'Активный ученик', color: 'text-rose-500' },
                      { icon: 'Brain', label: 'Знаток', color: 'text-accent' },
                      { icon: 'Sparkles', label: 'Перфекционист', color: 'text-purple-500' },
                      { icon: 'Crown', label: 'Мастер', color: 'text-amber-600' }
                    ].map((achievement) => (
                      <div 
                        key={achievement.label}
                        className="flex flex-col items-center p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors hover:scale-105 transform duration-200"
                      >
                        <Icon name={achievement.icon} size={32} className={achievement.color} />
                        <span className="text-xs text-center mt-2 font-medium">{achievement.label}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-4xl max-h-[85vh]">
          <DialogHeader>
            <DialogTitle className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {selectedCourse?.title}
            </DialogTitle>
            <DialogDescription className="text-base">
              {selectedCourse?.description}
            </DialogDescription>
          </DialogHeader>
          
          <ScrollArea className="h-[60vh] pr-4">
            {selectedCourse?.modules ? (
              <div className="space-y-6">
                {selectedCourse.modules.map((module, moduleIndex) => (
                  <div key={module.id} className="animate-fade-in" style={{ animationDelay: `${moduleIndex * 0.1}s` }}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold">
                        {moduleIndex + 1}
                      </div>
                      <h3 className="text-xl font-semibold">{module.title}</h3>
                    </div>
                    
                    <div className="space-y-2 ml-13">
                      {module.lessons.map((lesson) => (
                        <Card 
                          key={lesson.id} 
                          className={`hover:shadow-md transition-all cursor-pointer ${
                            lesson.completed ? 'bg-muted/50 border-primary/30' : 'hover:border-primary/50'
                          }`}
                        >
                          <CardContent className="p-4">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3 flex-1">
                                <div className={`flex items-center justify-center w-8 h-8 rounded-full ${
                                  lesson.completed ? 'bg-primary text-primary-foreground' : 'bg-muted'
                                }`}>
                                  {lesson.completed ? (
                                    <Icon name="Check" size={16} />
                                  ) : (
                                    <Icon 
                                      name={lesson.type === 'video' ? 'PlayCircle' : lesson.type === 'quiz' ? 'FileQuestion' : 'FileText'} 
                                      size={16} 
                                    />
                                  )}
                                </div>
                                <div className="flex-1">
                                  <p className={`font-medium ${
                                    lesson.completed ? 'text-muted-foreground line-through' : ''
                                  }`}>
                                    {lesson.title}
                                  </p>
                                  <div className="flex items-center gap-4 mt-1">
                                    <span className="text-sm text-muted-foreground flex items-center gap-1">
                                      <Icon name="Clock" size={14} />
                                      {lesson.duration}
                                    </span>
                                    <Badge variant="outline" className="text-xs">
                                      {lesson.type === 'video' ? 'Видео' : lesson.type === 'quiz' ? 'Тест' : 'Текст'}
                                    </Badge>
                                  </div>
                                </div>
                              </div>
                              <Button size="sm" variant={lesson.completed ? 'outline' : 'default'}>
                                {lesson.completed ? 'Повторить' : 'Начать'}
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                    
                    {moduleIndex < (selectedCourse.modules?.length || 0) - 1 && (
                      <Separator className="my-6" />
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <Icon name="BookOpen" size={32} className="text-primary" />
                      <div>
                        <h3 className="text-lg font-semibold">Содержание курса</h3>
                        <p className="text-sm text-muted-foreground">Программа обучения будет доступна после старта</p>
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4 mt-6">
                      <div className="flex items-center gap-2">
                        <Icon name="Clock" size={20} className="text-accent" />
                        <span className="text-sm"><strong>Длительность:</strong> {selectedCourse?.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="BarChart" size={20} className="text-secondary" />
                        <span className="text-sm"><strong>Уровень:</strong> {selectedCourse?.level}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="Users" size={20} className="text-primary" />
                        <span className="text-sm"><strong>Студентов:</strong> {selectedCourse?.students.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="Star" size={20} className="text-amber-500" />
                        <span className="text-sm"><strong>Рейтинг:</strong> {selectedCourse?.rating}/5</span>
                      </div>
                    </div>
                    <Button className="w-full mt-6" size="lg">
                      <Icon name="Rocket" size={20} className="mr-2" />
                      Записаться на курс
                    </Button>
                  </CardContent>
                </Card>
              </div>
            )}
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </div>
  );
}
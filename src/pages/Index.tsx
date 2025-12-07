import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { courses, Course } from '@/types/course';
import CourseCard from '@/components/CourseCard';
import CourseDialog from '@/components/CourseDialog';
import ProfileDialog from '@/components/ProfileDialog';

export default function Index() {
  const [selectedCategory, setSelectedCategory] = useState('Все');
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

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
            <div className="flex gap-4 justify-center items-center flex-wrap">
              <Button size="lg" className="text-lg px-8 py-6 hover:scale-105 transition-transform">
                <Icon name="Rocket" size={24} className="mr-2" />
                Начать обучение
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 hover:scale-105 transition-transform">
                <Icon name="PlayCircle" size={24} className="mr-2" />
                Смотреть демо
              </Button>
              <Button 
                size="lg" 
                variant="secondary" 
                className="text-lg px-8 py-6 hover:scale-105 transition-transform"
                onClick={() => setShowProfile(true)}
              >
                <Icon name="User" size={24} className="mr-2" />
                Мой профиль
              </Button>
            </div>
          </div>

          <div className="mb-16">
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
                <CourseCard 
                  key={course.id}
                  course={course}
                  index={index}
                  onCourseClick={handleCourseClick}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <ProfileDialog 
        isOpen={showProfile}
        onOpenChange={setShowProfile}
      />

      <CourseDialog 
        isOpen={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        course={selectedCourse}
      />
    </div>
  );
}

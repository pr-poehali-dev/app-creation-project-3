import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Course } from '@/types/course';

interface CourseCardProps {
  course: Course;
  index: number;
  onCourseClick: (course: Course) => void;
}

export default function CourseCard({ course, index, onCourseClick }: CourseCardProps) {
  return (
    <Card 
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
          onClick={() => onCourseClick(course)}
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
  );
}

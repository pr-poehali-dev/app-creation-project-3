import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';
import { Course } from '@/types/course';

interface CourseDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  course: Course | null;
}

export default function CourseDialog({ isOpen, onOpenChange, course }: CourseDialogProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[85vh]">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            {course?.title}
          </DialogTitle>
          <DialogDescription className="text-base">
            {course?.description}
          </DialogDescription>
        </DialogHeader>
        
        <ScrollArea className="h-[60vh] pr-4">
          {course?.modules ? (
            <div className="space-y-6">
              {course.modules.map((module, moduleIndex) => (
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
                  
                  {moduleIndex < (course.modules?.length || 0) - 1 && (
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
                      <span className="text-sm"><strong>Длительность:</strong> {course?.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="BarChart" size={20} className="text-secondary" />
                      <span className="text-sm"><strong>Уровень:</strong> {course?.level}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Users" size={20} className="text-primary" />
                      <span className="text-sm"><strong>Студентов:</strong> {course?.students.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Star" size={20} className="text-amber-500" />
                      <span className="text-sm"><strong>Рейтинг:</strong> {course?.rating}/5</span>
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
  );
}

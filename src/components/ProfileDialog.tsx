import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { ScrollArea } from '@/components/ui/scroll-area';
import Icon from '@/components/ui/icon';
import { stats } from '@/types/course';

interface ProfileDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function ProfileDialog({ isOpen, onOpenChange }: ProfileDialogProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-6xl max-h-[90vh]">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent flex items-center gap-3">
            <Icon name="User" size={32} className="text-primary" />
            Мой профиль
          </DialogTitle>
          <DialogDescription className="text-base">
            Ваша статистика обучения и достижения
          </DialogDescription>
        </DialogHeader>
        
        <ScrollArea className="h-[70vh] pr-4">
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                    {['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'].map((day) => {
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

            <Card className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
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
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}

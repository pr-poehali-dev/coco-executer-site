import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  const features = [
    {
      icon: "Shield",
      title: "Защита от бана",
      description: "Многоуровневая система защиты обеспечивает безопасность вашего аккаунта"
    },
    {
      icon: "RefreshCw",
      title: "Автообновление",
      description: "Инжектор автоматически обновляется, защита всегда актуальна"
    },
    {
      icon: "Zap",
      title: "Высокая скорость",
      description: "Мгновенная инъекция скриптов без задержек и лагов"
    },
    {
      icon: "Code",
      title: "Поддержка скриптов",
      description: "Совместимость со всеми популярными скриптами для Roblox"
    },
    {
      icon: "Lock",
      title: "Безопасность",
      description: "Encrypted соединение и защита от детекта античитом"
    },
    {
      icon: "Download",
      title: "Легкая установка",
      description: "Простая установка за 2 минуты, не требует технических знаний"
    }
  ];

  const reviews = [
    {
      name: "Макс",
      rating: 5,
      text: "Лучший инжектор! Пользуюсь уже 6 месяцев, ни одного бана. Автообновление работает идеально.",
      game: "Arsenal"
    },
    {
      name: "Анна",
      rating: 5,
      text: "Очень быстрый и надежный. Скрипты работают без лагов, интерфейс понятный. Рекомендую!",
      game: "Adopt Me"
    },
    {
      name: "Дима",
      rating: 5,
      text: "Защита топовая! Играю в разные игры, все работает стабильно. Поддержка отвечает быстро.",
      game: "Blox Fruits"
    },
    {
      name: "Саша",
      rating: 5,
      text: "Использую для фарма. Автообновления — огромный плюс, не нужно каждый раз качать новую версию.",
      game: "Pet Simulator X"
    }
  ];

  const stats = [
    { value: "50K+", label: "Активных пользователей" },
    { value: "99.9%", label: "Uptime" },
    { value: "24/7", label: "Поддержка" },
    { value: "0", label: "Банов" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-bg via-[#0f1419] to-dark-bg">
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-dark-bg/70 border-b border-primary/20">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-neon-purple to-neon-blue rounded-lg flex items-center justify-center neon-border">
              <span className="text-2xl">⚡</span>
            </div>
            <span className="text-2xl font-bold neon-glow">Coco-Executer</span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <a href="#features" className="hover:text-primary transition-colors">Возможности</a>
            <a href="#reviews" className="hover:text-primary transition-colors">Отзывы</a>
            <a href="#download" className="hover:text-primary transition-colors">Загрузка</a>
            <a href="#docs" className="hover:text-primary transition-colors">Документация</a>
          </div>
          <Button className="bg-gradient-to-r from-neon-purple to-neon-blue neon-border hover:scale-105 transition-transform">
            <Icon name="Download" size={18} className="mr-2" />
            Скачать
          </Button>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <Badge className="bg-primary/20 text-primary border-primary/40 neon-border">
                <Icon name="Sparkles" size={14} className="mr-1" />
                Обновлено v3.5
              </Badge>
              <h1 className="text-5xl md:text-7xl font-black neon-glow leading-tight">
                Coco-Executer
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground">
                Самый надежный инжектор для Roblox с автоматическим обновлением и защитой
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-gradient-to-r from-neon-purple to-neon-blue text-lg px-8 py-6 neon-border animate-pulse-glow hover:scale-105 transition-transform">
                  <Icon name="Download" size={24} className="mr-2" />
                  Скачать бесплатно
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-primary/40 hover:bg-primary/10">
                  <Icon name="BookOpen" size={24} className="mr-2" />
                  Документация
                </Button>
              </div>
              <div className="flex gap-8 pt-4">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-primary">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative animate-float">
              <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/30 to-neon-blue/30 blur-3xl rounded-full"></div>
              <img 
                src="https://cdn.poehali.dev/projects/a8ee14fa-61af-4a4f-a146-f396d6ce32db/files/920222d7-bf5f-461a-811a-8ac5be5c4106.jpg"
                alt="Coco-Executer Interface"
                className="relative rounded-2xl neon-border-blue"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-secondary/20 text-secondary border-secondary/40 neon-border-blue mb-4">
              <Icon name="Cpu" size={14} className="mr-1" />
              Возможности
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Почему выбирают <span className="text-primary neon-glow">Coco-Executer?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Мощный функционал и надежная защита в одном инструменте
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="bg-card/50 backdrop-blur border-primary/20 hover:border-primary/40 transition-all hover:scale-105 hover:neon-border group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="w-14 h-14 bg-gradient-to-br from-neon-purple to-neon-blue rounded-xl flex items-center justify-center mb-4 group-hover:animate-pulse-glow">
                    <Icon name={feature.icon} size={28} />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 px-4 bg-gradient-to-b from-transparent via-primary/5 to-transparent">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-primary/20 text-primary border-primary/40 neon-border mb-4">
              <Icon name="MessageSquare" size={14} className="mr-1" />
              Отзывы
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Что говорят <span className="text-secondary">пользователи?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Тысячи довольных игроков уже используют Coco-Executer
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {reviews.map((review, index) => (
              <Card 
                key={index} 
                className="bg-card/50 backdrop-blur border-secondary/20 hover:border-secondary/40 transition-all hover:scale-105 hover:neon-border-blue"
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-neon-purple to-neon-blue rounded-full flex items-center justify-center font-bold text-lg">
                        {review.name[0]}
                      </div>
                      <div>
                        <CardTitle className="text-lg">{review.name}</CardTitle>
                        <div className="flex gap-1 mt-1">
                          {Array(review.rating).fill(0).map((_, i) => (
                            <Icon key={i} name="Star" size={14} className="fill-yellow-500 text-yellow-500" />
                          ))}
                        </div>
                      </div>
                    </div>
                    <Badge variant="outline" className="border-secondary/40 text-secondary">
                      {review.game}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic">"{review.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="download" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="bg-gradient-to-br from-neon-purple/10 to-neon-blue/10 border-primary/30 neon-border overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/5 to-neon-blue/5"></div>
            <CardHeader className="text-center relative z-10 pb-8">
              <Badge className="bg-primary/20 text-primary border-primary/40 neon-border mx-auto mb-4">
                <Icon name="Download" size={14} className="mr-1" />
                Загрузка
              </Badge>
              <CardTitle className="text-4xl md:text-5xl font-bold mb-4 neon-glow">
                Начни использовать Coco-Executer
              </CardTitle>
              <CardDescription className="text-lg">
                Бесплатная загрузка • Windows 10/11 • Автообновление включено
              </CardDescription>
            </CardHeader>
            <CardContent className="relative z-10 space-y-6">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-to-r from-neon-purple to-neon-blue text-xl px-12 py-8 neon-border animate-pulse-glow hover:scale-105 transition-transform">
                  <Icon name="Download" size={28} className="mr-3" />
                  Скачать v3.5
                </Button>
                <Button size="lg" variant="outline" className="text-xl px-12 py-8 border-primary/40 hover:bg-primary/10">
                  <Icon name="Github" size={28} className="mr-3" />
                  GitHub
                </Button>
              </div>
              <div className="grid md:grid-cols-3 gap-4 pt-8">
                <div className="text-center p-4 bg-card/30 rounded-lg border border-primary/10">
                  <Icon name="Shield" size={32} className="mx-auto mb-2 text-primary" />
                  <div className="font-semibold">100% Безопасно</div>
                  <div className="text-sm text-muted-foreground">Без вирусов</div>
                </div>
                <div className="text-center p-4 bg-card/30 rounded-lg border border-primary/10">
                  <Icon name="Zap" size={32} className="mx-auto mb-2 text-secondary" />
                  <div className="font-semibold">Быстро</div>
                  <div className="text-sm text-muted-foreground">Установка 2 мин</div>
                </div>
                <div className="text-center p-4 bg-card/30 rounded-lg border border-primary/10">
                  <Icon name="Heart" size={32} className="mx-auto mb-2 text-destructive" />
                  <div className="font-semibold">Бесплатно</div>
                  <div className="text-sm text-muted-foreground">Навсегда</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="docs" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <Badge className="bg-secondary/20 text-secondary border-secondary/40 neon-border-blue mb-4">
              <Icon name="BookOpen" size={14} className="mr-1" />
              Документация
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Нужна помощь?
            </h2>
            <p className="text-xl text-muted-foreground">
              Полная документация и руководства по использованию
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-card/50 backdrop-blur border-primary/20 hover:border-primary/40 transition-all hover:scale-105 group cursor-pointer">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-neon-purple to-neon-blue rounded-lg flex items-center justify-center mb-3 group-hover:animate-pulse-glow">
                  <Icon name="PlayCircle" size={24} />
                </div>
                <CardTitle>Быстрый старт</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Установка и первый запуск за 5 минут
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="bg-card/50 backdrop-blur border-primary/20 hover:border-primary/40 transition-all hover:scale-105 group cursor-pointer">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-neon-purple to-neon-blue rounded-lg flex items-center justify-center mb-3 group-hover:animate-pulse-glow">
                  <Icon name="FileText" size={24} />
                </div>
                <CardTitle>API документация</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Подробное описание всех функций и методов
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="bg-card/50 backdrop-blur border-primary/20 hover:border-primary/40 transition-all hover:scale-105 group cursor-pointer">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-neon-purple to-neon-blue rounded-lg flex items-center justify-center mb-3 group-hover:animate-pulse-glow">
                  <Icon name="MessageCircle" size={24} />
                </div>
                <CardTitle>Поддержка 24/7</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Discord сервер с активным комьюнити
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="bg-card/50 backdrop-blur border-primary/20 hover:border-primary/40 transition-all hover:scale-105 group cursor-pointer">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-neon-purple to-neon-blue rounded-lg flex items-center justify-center mb-3 group-hover:animate-pulse-glow">
                  <Icon name="Video" size={24} />
                </div>
                <CardTitle>Видео гайды</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Наглядные туториалы для новичков
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-12 px-4 border-t border-primary/20 bg-card/30 backdrop-blur">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-neon-purple to-neon-blue rounded-lg flex items-center justify-center neon-border">
                <span className="text-2xl">⚡</span>
              </div>
              <span className="text-xl font-bold">Coco-Executer</span>
            </div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary transition-colors">
                <Icon name="Github" size={24} />
              </a>
              <a href="#" className="hover:text-secondary transition-colors">
                <Icon name="MessageCircle" size={24} />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Icon name="Twitter" size={24} />
              </a>
            </div>
          </div>
          <div className="text-center mt-8 text-muted-foreground text-sm">
            © 2024 Coco-Executer. Все права защищены. Используйте на свой страх и риск.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

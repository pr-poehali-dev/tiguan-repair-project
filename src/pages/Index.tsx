import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const services = [
    {
      icon: 'Cog',
      title: 'Восстановление шлицов',
      description: 'Профессиональное восстановление шлицевых соединений с применением современного оборудования',
      price: 'от 8 000 ₽'
    },
    {
      icon: 'Cable',
      title: 'Ремонт полного привода',
      description: 'Диагностика и ремонт системы полного привода 4Motion с заменой муфты Haldex',
      price: 'от 25 000 ₽'
    },
    {
      icon: 'CircuitBoard',
      title: 'Диагностика подвески',
      description: 'Компьютерная диагностика ходовой части на стенде Hunter',
      price: 'от 2 000 ₽'
    },
    {
      icon: 'Wrench',
      title: 'Замена приводов',
      description: 'Установка оригинальных и качественных аналогов ШРУСов',
      price: 'от 6 500 ₽'
    },
    {
      icon: 'Settings',
      title: 'ТО Volkswagen',
      description: 'Регламентное техническое обслуживание согласно рекомендациям производителя',
      price: 'от 12 000 ₽'
    },
    {
      icon: 'Gauge',
      title: 'Компьютерная диагностика',
      description: 'Полная диагностика всех систем автомобиля на дилерском оборудовании',
      price: 'от 1 500 ₽'
    }
  ];

  const portfolio = [
    {
      title: 'Восстановление шлицов приводного вала',
      car: 'VW Tiguan 2.0 TSI 4Motion',
      year: '2018',
      work: 'Восстановление изношенных шлицов методом наплавки с последующей механической обработкой',
      image: 'https://cdn.poehali.dev/projects/2ebda34c-8a7e-48ca-8c9a-1d778db06372/files/344af438-2cf3-462d-8a1c-07004361e676.jpg'
    },
    {
      title: 'Капитальный ремонт трансмиссии',
      car: 'VW Tiguan 2.0 TDI 4Motion',
      year: '2016',
      work: 'Замена муфты Haldex, восстановление карданного вала, замена обоих приводов',
      image: 'https://cdn.poehali.dev/projects/2ebda34c-8a7e-48ca-8c9a-1d778db06372/files/99bfe21f-3603-4929-9394-e5dcded08802.jpg'
    },
    {
      title: 'Комплексное ТО с диагностикой',
      car: 'VW Tiguan 1.4 TSI',
      year: '2019',
      work: 'ТО-60000, замена масла DSG, диагностика подвески, замена передних тормозных дисков',
      image: 'https://cdn.poehali.dev/projects/2ebda34c-8a7e-48ca-8c9a-1d778db06372/files/23cc98d7-15e4-431a-982c-9d2217d5d79a.jpg'
    }
  ];

  const guarantees = [
    {
      title: 'Гарантия на работы',
      items: [
        'Восстановление шлицов - 12 месяцев без ограничения пробега',
        'Ремонт трансмиссии и полного привода - 12 месяцев или 20 000 км',
        'Замена приводов и ШРУСов - 6 месяцев или 10 000 км',
        'Техническое обслуживание - 6 месяцев или 10 000 км',
        'Диагностические работы - 1 месяц на выявленные дефекты'
      ]
    },
    {
      title: 'Гарантия на запчасти',
      items: [
        'Оригинальные запчасти VAG - гарантия производителя 24 месяца',
        'Качественные аналоги (GKN, SKF, FAG) - 12 месяцев',
        'Расходные материалы - согласно рекомендациям производителя',
        'Масла и технические жидкости - гарантия подлинности'
      ]
    },
    {
      title: 'Условия гарантийного обслуживания',
      items: [
        'Бесплатное устранение дефектов по вине исполнителя',
        'Предоставление подменного автомобиля на время ремонта (при наличии)',
        'Компенсация стоимости эвакуатора в случае поломки по гарантии',
        'Гарантия действует при соблюдении регламента ТО',
        'Обязательное использование рекомендованных масел и жидкостей'
      ]
    },
    {
      title: 'Исключения из гарантии',
      items: [
        'Механические повреждения вследствие ДТП или неправильной эксплуатации',
        'Ремонт или вмешательство третьих лиц',
        'Использование нерекомендованных запчастей и материалов',
        'Естественный износ расходных материалов',
        'Эксплуатация автомобиля в экстремальных условиях без согласования'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-border z-50 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <Icon name="Wrench" className="text-primary" size={28} />
              <span className="text-xl font-bold text-secondary">VW Tiguan Сервис</span>
            </div>
            <div className="hidden md:flex space-x-1">
              {['home', 'services', 'pricing', 'portfolio', 'guarantees', 'contacts'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    activeSection === section
                      ? 'bg-primary text-primary-foreground'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                  }`}
                >
                  {section === 'home' && 'Главная'}
                  {section === 'services' && 'Услуги'}
                  {section === 'pricing' && 'Прайс'}
                  {section === 'portfolio' && 'Портфолио'}
                  {section === 'guarantees' && 'Гарантии'}
                  {section === 'contacts' && 'Контакты'}
                </button>
              ))}
            </div>
            <Button className="hidden md:flex">
              <Icon name="Phone" size={18} className="mr-2" />
              Позвонить
            </Button>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-primary/10 text-primary hover:bg-primary/20">
                Специализация: Volkswagen Tiguan
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Восстановление шлицов и ремонт полного привода
              </h1>
              <p className="text-lg text-muted-foreground">
                Профессиональный ремонт трансмиссии и ходовой части Volkswagen Tiguan. 
                Гарантия качества 12 месяцев. Оригинальные запчасти и современное оборудование.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" onClick={() => scrollToSection('services')}>
                  <Icon name="Settings" size={20} className="mr-2" />
                  Наши услуги
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection('contacts')}>
                  <Icon name="MapPin" size={20} className="mr-2" />
                  Как проехать
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">12+</div>
                  <div className="text-sm text-muted-foreground">лет опыта</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">автомобилей</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">98%</div>
                  <div className="text-sm text-muted-foreground">довольных клиентов</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl transform rotate-3"></div>
              <img 
                src="https://cdn.poehali.dev/projects/2ebda34c-8a7e-48ca-8c9a-1d778db06372/files/99bfe21f-3603-4929-9394-e5dcded08802.jpg"
                alt="Автосервис"
                className="relative rounded-3xl shadow-2xl w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4">Услуги</Badge>
            <h2 className="text-4xl font-bold mb-4">Что мы делаем</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Полный спектр услуг по ремонту и обслуживанию трансмиссии и ходовой части Volkswagen Tiguan
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-all hover:-translate-y-1">
                <CardHeader>
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon name={service.icon} className="text-primary" size={28} />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">{service.price}</span>
                    <Button variant="ghost" size="sm">
                      Подробнее
                      <Icon name="ArrowRight" size={16} className="ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4">Прайс-лист</Badge>
            <h2 className="text-4xl font-bold mb-4">Стоимость работ</h2>
            <p className="text-muted-foreground text-lg">
              Прозрачное ценообразование без скрытых платежей
            </p>
          </div>
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="space-y-4">
                {[
                  { name: 'Диагностика трансмиссии', price: '2 000 ₽' },
                  { name: 'Восстановление шлицов приводного вала', price: '8 000 - 15 000 ₽' },
                  { name: 'Замена муфты Haldex', price: '25 000 - 35 000 ₽' },
                  { name: 'Замена приводного вала (ШРУС)', price: '6 500 - 12 000 ₽' },
                  { name: 'Ремонт карданного вала', price: '18 000 - 25 000 ₽' },
                  { name: 'Диагностика подвески на стенде', price: '2 000 ₽' },
                  { name: 'ТО-60000 (масло, фильтры, диагностика)', price: '12 000 - 18 000 ₽' },
                  { name: 'Замена масла DSG', price: '8 500 ₽' },
                  { name: 'Замена тормозных дисков и колодок (комплект)', price: '15 000 - 22 000 ₽' }
                ].map((item, index) => (
                  <div key={index} className="flex justify-between items-center py-3 border-b last:border-0">
                    <span className="font-medium">{item.name}</span>
                    <span className="text-primary font-bold">{item.price}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-6 bg-muted rounded-lg">
                <div className="flex items-start gap-3">
                  <Icon name="Info" className="text-primary mt-1" size={20} />
                  <p className="text-sm text-muted-foreground">
                    Стоимость запчастей рассчитывается отдельно. Используем оригинальные детали VAG 
                    или качественные аналоги (GKN, SKF, FAG) по вашему выбору. Точная цена определяется 
                    после диагностики.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4">Наши работы</Badge>
            <h2 className="text-4xl font-bold mb-4">Портфолио</h2>
            <p className="text-muted-foreground text-lg">
              Примеры выполненных работ с фотографиями и описанием
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolio.map((item, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all">
                <img 
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover"
                />
                <CardHeader>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                  <CardDescription>
                    <div className="flex items-center gap-2 mt-2">
                      <Icon name="Car" size={16} />
                      <span>{item.car}</span>
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <Icon name="Calendar" size={16} />
                      <span>{item.year} год</span>
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{item.work}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="guarantees" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4">Надёжность</Badge>
            <h2 className="text-4xl font-bold mb-4">Гарантии качества</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Мы несём полную ответственность за качество выполненных работ 
              и предоставляем расширенные гарантийные обязательства
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {guarantees.map((guarantee, index) => (
              <Card key={index} className="overflow-hidden">
                <CardHeader className="bg-muted/50">
                  <CardTitle className="flex items-center gap-3">
                    <Icon name="ShieldCheck" className="text-primary" size={24} />
                    {guarantee.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-3">
                    {guarantee.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3">
                        <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={18} />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mt-12 max-w-4xl mx-auto border-primary/50 bg-primary/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-xl">
                <Icon name="FileText" className="text-primary" size={24} />
                Гарантийный талон
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                На все виды работ предоставляется официальный гарантийный талон с печатью организации. 
                В документе указываются:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-2">
                  <Icon name="Check" className="text-primary mt-1" size={16} />
                  <span className="text-sm">Перечень выполненных работ</span>
                </div>
                <div className="flex items-start gap-2">
                  <Icon name="Check" className="text-primary mt-1" size={16} />
                  <span className="text-sm">Использованные запчасти</span>
                </div>
                <div className="flex items-start gap-2">
                  <Icon name="Check" className="text-primary mt-1" size={16} />
                  <span className="text-sm">Срок гарантии на работы</span>
                </div>
                <div className="flex items-start gap-2">
                  <Icon name="Check" className="text-primary mt-1" size={16} />
                  <span className="text-sm">Условия гарантийного обслуживания</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4">Контакты</Badge>
            <h2 className="text-4xl font-bold mb-4">Как нас найти</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Контактная информация</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Icon name="Phone" className="text-primary mt-1" size={20} />
                  <div>
                    <div className="font-medium">Телефон</div>
                    <a href="tel:+79001234567" className="text-primary hover:underline">+7 (900) 123-45-67</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="MapPin" className="text-primary mt-1" size={20} />
                  <div>
                    <div className="font-medium">Адрес</div>
                    <div className="text-muted-foreground">г. Москва, ул. Автомобильная, д. 15</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Clock" className="text-primary mt-1" size={20} />
                  <div>
                    <div className="font-medium">Режим работы</div>
                    <div className="text-muted-foreground">Пн-Пт: 9:00 - 20:00</div>
                    <div className="text-muted-foreground">Сб-Вс: 10:00 - 18:00</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Mail" className="text-primary mt-1" size={20} />
                  <div>
                    <div className="font-medium">Email</div>
                    <a href="mailto:info@vw-tiguan-service.ru" className="text-primary hover:underline">
                      info@vw-tiguan-service.ru
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Записаться на ремонт</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Ваше имя</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Иван Иванов"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Телефон</label>
                    <input 
                      type="tel" 
                      className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="+7 (___) ___-__-__"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Автомобиль</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="VW Tiguan 2.0 TSI 2018"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Описание проблемы</label>
                    <textarea 
                      className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary min-h-24"
                      placeholder="Опишите проблему с автомобилем"
                    />
                  </div>
                  <Button className="w-full" size="lg">
                    <Icon name="Send" size={18} className="mr-2" />
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-secondary text-secondary-foreground py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Wrench" size={24} />
                <span className="text-lg font-bold">VW Tiguan Сервис</span>
              </div>
              <p className="text-secondary-foreground/80 text-sm">
                Профессиональный ремонт и обслуживание Volkswagen Tiguan с гарантией качества
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Быстрые ссылки</h3>
              <div className="space-y-2 text-sm">
                <div><button onClick={() => scrollToSection('services')} className="hover:underline">Услуги</button></div>
                <div><button onClick={() => scrollToSection('pricing')} className="hover:underline">Прайс</button></div>
                <div><button onClick={() => scrollToSection('guarantees')} className="hover:underline">Гарантии</button></div>
                <div><button onClick={() => scrollToSection('contacts')} className="hover:underline">Контакты</button></div>
              </div>
            </div>
            <div>
              <h3 className="font-bold mb-4">Контакты</h3>
              <div className="space-y-2 text-sm text-secondary-foreground/80">
                <div>+7 (900) 123-45-67</div>
                <div>info@vw-tiguan-service.ru</div>
                <div>г. Москва, ул. Автомобильная, 15</div>
              </div>
            </div>
          </div>
          <div className="border-t border-secondary-foreground/20 pt-8 text-center text-sm text-secondary-foreground/60">
            <p>© 2024 VW Tiguan Сервис. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

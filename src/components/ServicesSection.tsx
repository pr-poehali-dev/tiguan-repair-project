import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const ServicesSection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      url: 'https://cdn.poehali.dev/files/6bfcc366-0e54-412a-88e5-69e2a5b8ddc0.jpg',
      title: 'Восстановленные шлицевые соединения',
      description: 'Высокоточная обработка на станках с ЧПУ'
    },
    {
      url: 'https://cdn.poehali.dev/projects/2ebda34c-8a7e-48ca-8c9a-1d778db06372/files/344af438-2cf3-462d-8a1c-07004361e676.jpg',
      title: 'Приводной вал Volkswagen Tiguan I',
      description: 'До и после восстановления шлицов'
    },
    {
      url: 'https://cdn.poehali.dev/projects/2ebda34c-8a7e-48ca-8c9a-1d778db06372/files/99bfe21f-3603-4929-9394-e5dcded08802.jpg',
      title: 'Механическая обработка',
      description: 'Процесс восстановления геометрии'
    },
    {
      url: 'https://cdn.poehali.dev/projects/2ebda34c-8a7e-48ca-8c9a-1d778db06372/files/23cc98d7-15e4-431a-982c-9d2217d5d79a.jpg',
      title: 'Готовые детали',
      description: 'Контроль качества после термообработки'
    }
  ];

  const services = [
    {
      icon: 'Car',
      title: 'Восстановление шлицевых соединений Volkswagen Tiguan I',
      description: 'Специализация на ремонте полноприводной трансмиссии Tiguan первого поколения (5N, 2007-2017): восстановление приводных валов, шлицевых соединений передней и задней оси',
      price: 'от 8 000 ₽'
    },
    {
      icon: 'Factory',
      title: 'Изготовление шлицевых валов',
      description: 'Производство новых шлицевых валов по чертежам или образцам с соблюдением всех технических характеристик',
      price: 'от 15 000 ₽'
    },
    {
      icon: 'Gauge',
      title: 'Контроль качества',
      description: 'Многоуровневая проверка геометрии, твердости и точности шлицевых соединений на профессиональном оборудовании',
      price: 'включено'
    },
    {
      icon: 'Wrench',
      title: 'Балансировка валов',
      description: 'Прецизионная динамическая балансировка карданных и приводных валов для устранения вибраций',
      price: 'от 3 500 ₽'
    },
    {
      icon: 'Shield',
      title: 'Термообработка',
      description: 'Профессиональная термообработка деталей для восстановления твердости и износостойкости поверхности',
      price: 'от 5 000 ₽'
    },
    {
      icon: 'Package',
      title: 'Комплексный ремонт трансмиссии',
      description: 'Восстановление всех изношенных шлицевых узлов в трансмиссии с гарантией качества',
      price: 'от 25 000 ₽'
    }
  ];

  const portfolio = [
    {
      title: 'Восстановление шлицевого соединения Volkswagen Tiguan',
      car: 'Volkswagen Tiguan I (5N)',
      year: '2024',
      work: 'Восстановление изношенных шлицов приводного вала, механическая обработка на станке с ЧПУ, термообработка, контроль геометрии, балансировка',
      image: 'https://cdn.poehali.dev/projects/2ebda34c-8a7e-48ca-8c9a-1d778db06372/files/344af438-2cf3-462d-8a1c-07004361e676.jpg'
    },
    {
      title: 'Восстановление карданного вала BMW X5',
      car: 'BMW X5 E70',
      year: '2024',
      work: 'Восстановление изношенных шлицов карданного вала, механическая обработка на станке с ЧПУ, термообработка, балансировка',
      image: 'https://cdn.poehali.dev/projects/2ebda34c-8a7e-48ca-8c9a-1d778db06372/files/99bfe21f-3603-4929-9394-e5dcded08802.jpg'
    },
    {
      title: 'Изготовление приводного вала',
      car: 'Mercedes-Benz ML W164',
      year: '2024',
      work: 'Производство нового приводного вала с шлицевыми соединениями по оригинальным чертежам, контроль качества, балансировка',
      image: 'https://cdn.poehali.dev/projects/2ebda34c-8a7e-48ca-8c9a-1d778db06372/files/23cc98d7-15e4-431a-982c-9d2217d5d79a.jpg'
    },
    {
      title: 'Ремонт раздаточной коробки Audi Q7',
      car: 'Audi Q7 4L',
      year: '2024',
      work: 'Восстановление шлицевых соединений первичного вала раздатки, замена подшипников, герметизация корпуса',
      image: 'https://cdn.poehali.dev/projects/2ebda34c-8a7e-48ca-8c9a-1d778db06372/files/23cc98d7-15e4-431a-982c-9d2217d5d79a.jpg'
    }
  ];

  const guarantees = [
    {
      title: 'Гарантия качества работ',
      items: [
        'Восстановление шлицевых соединений Volkswagen Tiguan I - 18 месяцев без ограничения пробега',
        'Изготовление новых валов - 24 месяца гарантии',
        'Балансировка валов - 12 месяцев или 30 000 км',
        'Термообработка деталей - пожизненная гарантия на технологию',
        'Механическая обработка на ЧПУ - гарантия точности соответствия чертежам'
      ]
    },
    {
      title: 'Контроль качества',
      items: [
        'Измерение геометрии шлицов высокоточным оборудованием',
        'Контроль твердости поверхности после термообработки',
        'Проверка биения валов на балансировочном стенде',
        'Документирование всех этапов работы с фотофиксацией',
        'Выдача протокола испытаний после завершения работ'
      ]
    },
    {
      title: 'Технологические преимущества',
      items: [
        'Собственное производство с полным циклом обработки',
        'Станки с ЧПУ для высокоточной механической обработки',
        'Современное оборудование для наплавки и термообработки',
        'Опыт работы с любыми марками автомобилей',
        'Индивидуальный подход к каждой детали'
      ]
    },
    {
      title: 'Дополнительные услуги',
      items: [
        'Бесплатная диагностика шлицевых соединений',
        'Консультация по выбору оптимального метода восстановления',
        'Доставка деталей по Москве и области',
        'Работа с юридическими лицами, безналичный расчет',
        'Срочное выполнение заказов (от 2 рабочих дней)'
      ]
    }
  ];

  return (
    <>
      <section id="services" className="py-24 px-4 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-6">
              <span className="text-sm font-semibold text-primary uppercase tracking-wide">Технологии</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Специализация — Volkswagen Tiguan I (5N)</h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
              Профессиональное восстановление шлицевых соединений полноприводной трансмиссии Tiguan первого поколения (2007-2017). Запатентованные технологии, станки с ЧПУ, гарантия 18 месяцев.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-border/50 hover:border-primary/50 bg-card/50 backdrop-blur-sm">
                <CardHeader className="space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                    <Icon name={service.icon} className="text-primary" size={32} />
                  </div>
                  <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between pt-4 border-t">
                    <span className="text-2xl font-bold text-primary">{service.price}</span>
                    <Button variant="ghost" size="sm" className="group-hover:bg-primary/10">
                      <Icon name="ArrowRight" size={18} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-r from-primary/5 via-background to-accent/5">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-6">
              <span className="text-sm font-semibold text-primary uppercase tracking-wide">Сертификация</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Патенты и лицензии</h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
              Запатентованные технологии восстановления и полный пакет разрешительной документации
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <Card className="group hover:shadow-2xl transition-all duration-300 border-border/50 bg-card/50 backdrop-blur-sm text-center">
              <CardContent className="pt-8 pb-6 space-y-4">
                <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                  <Icon name="Award" className="text-primary" size={40} />
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-1">№2829377</div>
                  <p className="text-sm font-semibold text-foreground mb-2">Патент РФ</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Способ восстановления шлицевого соединения на Volkswagen Tiguan I и других полноприводных автомобилях
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 border-border/50 bg-card/50 backdrop-blur-sm text-center">
              <CardContent className="pt-8 pb-6 space-y-4">
                <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                  <Icon name="FileCheck" className="text-primary" size={40} />
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-1">ISO 9001</div>
                  <p className="text-sm font-semibold text-foreground mb-2">Сертификат качества</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Система менеджмента качества производства
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 border-border/50 bg-card/50 backdrop-blur-sm text-center">
              <CardContent className="pt-8 pb-6 space-y-4">
                <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                  <Icon name="Shield" className="text-primary" size={40} />
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-1">15+</div>
                  <p className="text-sm font-semibold text-foreground mb-2">Лет опыта</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Работаем с 2009 года. Более 50 корпоративных клиентов
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 border-border/50 bg-card/50 backdrop-blur-sm text-center">
              <CardContent className="pt-8 pb-6 space-y-4">
                <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                  <Icon name="Users" className="text-primary" size={40} />
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-1">100%</div>
                  <p className="text-sm font-semibold text-foreground mb-2">Легально</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    ООО с полным пакетом документов. Работаем с НДС
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 max-w-4xl mx-auto">
            <Card className="border-primary/20 bg-gradient-to-r from-card/80 to-primary/5 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <img 
                      src="https://cdn.poehali.dev/files/72de0a62-55b0-4414-8c96-a15fb577a0a3.jpg"
                      alt="Патент на изобретение"
                      className="rounded-xl shadow-lg border border-border w-full"
                    />
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Icon name="Award" className="text-primary" size={32} />
                      <h3 className="text-2xl font-bold">Патент на изобретение</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      Наша компания является правообладателем патента на изобретение <span className="font-semibold text-foreground">№2829377</span> "Способ восстановления шлицевого соединения на Volkswagen Tiguan I и других полноприводных автомобилях".
                    </p>
                    <div className="space-y-2 pt-4">
                      <div className="flex items-center gap-2 text-sm">
                        <Icon name="Check" className="text-primary" size={16} />
                        <span>Дата регистрации: 30 октября 2024 г.</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Icon name="Check" className="text-primary" size={16} />
                        <span>Действует на территории РФ</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Icon name="Check" className="text-primary" size={16} />
                        <span>Запатентованная технология восстановления</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-24 px-4 bg-muted/20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-6">
              <span className="text-sm font-semibold text-primary uppercase tracking-wide">Портфолио</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Наши работы по Volkswagen Tiguan I</h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Специализируемся на восстановлении шлицевых соединений Tiguan первого поколения. Более 2100 успешно восстановленных узлов.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolio.map((item, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-2xl transition-all duration-300 border-border/50">
                <div className="relative overflow-hidden">
                  <img 
                    src={item.image}
                    alt={item.title}
                    className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-primary text-primary-foreground">{item.year}</Badge>
                  </div>
                </div>
                <CardHeader className="space-y-3">
                  <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">{item.title}</CardTitle>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Icon name="Car" size={18} className="text-primary" />
                    <span className="font-medium">{item.car}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.work}</p>
                  <Button variant="link" className="px-0 mt-4 text-primary">
                    Подробнее о проекте
                    <Icon name="ArrowRight" size={16} className="ml-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-4">Галерея работ</h3>
              <p className="text-muted-foreground">Нажмите на фото для просмотра в полном размере</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {galleryImages.map((image, index) => (
                <div 
                  key={index}
                  onClick={() => setSelectedImage(image.url)}
                  className="group relative overflow-hidden rounded-xl cursor-pointer hover:shadow-2xl transition-all duration-300"
                >
                  <img 
                    src={image.url}
                    alt={image.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <p className="font-semibold text-sm mb-1">{image.title}</p>
                      <p className="text-xs text-white/80">{image.description}</p>
                    </div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <Icon name="ZoomIn" className="text-white" size={24} />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {selectedImage && (
        <div 
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 cursor-pointer animate-in fade-in duration-200"
        >
          <button 
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-colors z-10"
          >
            <Icon name="X" className="text-white" size={24} />
          </button>
          <img 
            src={selectedImage}
            alt="Просмотр фото"
            className="max-w-full max-h-full object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      <section id="guarantees" className="py-24 px-4 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-6">
              <span className="text-sm font-semibold text-primary uppercase tracking-wide">Преимущества</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Почему выбирают Мега Шлиц</h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
              Комплексный подход к восстановлению и контролю качества на каждом этапе производства
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-6">
            {guarantees.map((guarantee, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-border/50 bg-card/50 backdrop-blur-sm">
                <CardHeader className="bg-gradient-to-br from-muted/50 to-muted/20 pb-6">
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon name="ShieldCheck" className="text-primary" size={24} />
                    </div>
                    {guarantee.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-4">
                    {guarantee.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3 group/item">
                        <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/item:bg-primary/20 transition-colors">
                          <Icon name="Check" className="text-primary" size={14} />
                        </div>
                        <span className="text-muted-foreground leading-relaxed">{item}</span>
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

      <section id="contacts" className="py-24 px-4 bg-muted/20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-6">
              <span className="text-sm font-semibold text-primary uppercase tracking-wide">Контакты</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Свяжитесь с нами</h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Работаем напрямую с автовладельцами и СТО. Бесплатная консультация и расчёт стоимости
            </p>
          </div>
          <div className="grid lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
            <Card className="lg:col-span-2 border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl">Производственная база</CardTitle>
                <CardDescription>Приезжайте или отправьте детали</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" className="text-primary" size={22} />
                  </div>
                  <div>
                    <div className="font-semibold text-lg mb-1">Телефон</div>
                    <a href="tel:+79001234567" className="text-primary hover:underline text-lg font-medium">+7 (900) 123-45-67</a>
                    <div className="text-sm text-muted-foreground mt-1">Технические консультации 24/7</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" className="text-primary" size={22} />
                  </div>
                  <div>
                    <div className="font-semibold text-lg mb-1">Адрес</div>
                    <div className="text-muted-foreground">г. Москва, ул. Промышленная,<br />д. 28, стр. 3</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="Clock" className="text-primary" size={22} />
                  </div>
                  <div>
                    <div className="font-semibold text-lg mb-1">Режим работы</div>
                    <div className="text-muted-foreground">Пн-Пт: 8:00 - 20:00</div>
                    <div className="text-muted-foreground">Сб: 9:00 - 18:00</div>
                    <Badge className="mt-2 bg-primary/10 text-primary hover:bg-primary/20">Срочные заказы 24/7</Badge>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" className="text-primary" size={22} />
                  </div>
                  <div>
                    <div className="font-semibold text-lg mb-1">Email</div>
                    <a href="mailto:info@mega-shlic.ru" className="text-primary hover:underline font-medium">
                      info@mega-shlic.ru
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="lg:col-span-3 border-border/50 bg-gradient-to-br from-card/50 to-primary/5 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl">Получить расчёт стоимости</CardTitle>
                <CardDescription className="text-base">Отправьте запрос — мы рассчитаем стоимость и сроки восстановления в течение 30 минут</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="text-sm font-semibold mb-2 block">Ваше имя *</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 border border-input rounded-xl focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                        placeholder="Иван Иванов"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-semibold mb-2 block">Телефон *</label>
                      <input 
                        type="tel" 
                        className="w-full px-4 py-3 border border-input rounded-xl focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                        placeholder="+7 (___) ___-__-__"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-semibold mb-2 block">Автомобиль / деталь *</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border border-input rounded-xl focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                      placeholder="BMW X5 E70 / карданный вал"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-semibold mb-2 block">Опишите задачу *</label>
                    <textarea 
                      className="w-full px-4 py-3 border border-input rounded-xl focus:outline-none focus:ring-2 focus:ring-primary min-h-32 bg-background"
                      placeholder="Например: износ шлицов карданного вала, люфт при движении, требуется диагностика и восстановление"
                    />
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-xl">
                    <Icon name="Clock" className="text-primary" size={20} />
                    <p className="text-sm text-muted-foreground">Ответим в течение 30 минут в рабочее время</p>
                  </div>
                  <Button className="w-full h-12 text-base" size="lg">
                    <Icon name="Send" size={20} className="mr-2" />
                    Получить расчёт
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesSection;
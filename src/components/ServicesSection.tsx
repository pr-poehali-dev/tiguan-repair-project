import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import AnimatedSection from '@/components/AnimatedSection';
import SectionDivider from '@/components/SectionDivider';

const ServicesSection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    car: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const mailtoLink = `mailto:megashlic@yandex.ru?subject=Заявка на восстановление шлицов&body=Имя: ${encodeURIComponent(formData.name)}%0D%0AТелефон: ${encodeURIComponent(formData.phone)}%0D%0AАвтомобиль: ${encodeURIComponent(formData.car)}%0D%0AСообщение: ${encodeURIComponent(formData.message)}`;
    
    window.location.href = mailtoLink;
    
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', phone: '', car: '', message: '' });
      
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 3000);
    }, 500);
  };
  const [imageViews, setImageViews] = useState<{ [key: string]: number }>({});

  useEffect(() => {
    const storedViews = localStorage.getItem('galleryViews');
    if (storedViews) {
      setImageViews(JSON.parse(storedViews));
    } else {
      const initialViews = {
        'gallery-1': 245,
        'gallery-2': 189,
        'gallery-3': 156
      };
      setImageViews(initialViews);
      localStorage.setItem('galleryViews', JSON.stringify(initialViews));
    }
  }, []);

  const handleImageView = (imageId: string, imageUrl: string) => {
    const newViews = { ...imageViews, [imageId]: (imageViews[imageId] || 0) + 1 };
    setImageViews(newViews);
    localStorage.setItem('galleryViews', JSON.stringify(newViews));
    setSelectedImage(imageUrl);
  };

  const handleShare = (e: React.MouseEvent, item: { title: string; image: string; description: string }) => {
    e.stopPropagation();
    const shareUrl = window.location.href;
    const shareText = `${item.title} - Мега Шлиц: ${item.description}`;
    
    if (navigator.share) {
      navigator.share({
        title: item.title,
        text: shareText,
        url: shareUrl
      }).catch(() => {});
    } else {
      const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(shareText + ' ' + shareUrl)}`;
      window.open(whatsappUrl, '_blank');
    }
  };

  const galleryImages = [
    {
      url: 'https://cdn.poehali.dev/files/90506945-c80c-4a2c-bc39-960d87906952.jpg',
      title: 'До и после восстановления',
      description: 'Наглядное сравнение изношенных и восстановленных шлицов'
    },
    {
      url: 'https://cdn.poehali.dev/files/6bfcc366-0e54-412a-88e5-69e2a5b8ddc0.jpg',
      title: 'Восстановленные шлицевые соединения',
      description: 'Высокоточная обработка на станках с ЧПУ'
    },
    {
      url: 'https://cdn.poehali.dev/files/3670ad1e-8c6b-43b5-9081-66a9d5aff82d.jpg',
      title: 'Раздаточная коробка Tiguan',
      description: 'Восстановленные шлицы в сборе с новыми подшипниками'
    },
    {
      url: 'https://cdn.poehali.dev/projects/2ebda34c-8a7e-48ca-8c9a-1d778db06372/files/344af438-2cf3-462d-8a1c-07004361e676.jpg',
      title: 'Приводной вал Volkswagen Tiguan I',
      description: 'Процесс восстановления шлицевого соединения'
    },
    {
      url: 'https://cdn.poehali.dev/projects/2ebda34c-8a7e-48ca-8c9a-1d778db06372/files/23cc98d7-15e4-431a-982c-9d2217d5d79a.jpg',
      title: 'Готовые детали',
      description: 'Контроль качества после термообработки'
    }
  ];

  const services = [
    {
      icon: 'Settings',
      title: 'Комплексный ремонт полного привода Tiguan под ключ',
      description: 'Полное восстановление системы полного привода Volkswagen Tiguan I (5N, 2007-2017): диагностика, ремонт муфты Haldex, восстановление шлицевых соединений передней и задней оси, ремонт раздаточной коробки, замена подшипников и сальников. Всё в одном месте с гарантией 12 месяцев без ограничения пробега.',
      features: [
        'Диагностика системы полного привода',
        'Ремонт муфты Haldex Gen 4',
        'Восстановление шлицевых соединений',
        'Ремонт раздаточной коробки',
        'Замена масла в редукторах',
        'Тестирование после ремонта'
      ],
      price: 'от 94 990 ₽',
      duration: '1 день'
    },
    {
      icon: 'Cog',
      title: 'Восстановление шлицевых соединений',
      description: 'Высокоточное восстановление изношенных шлицов на станках с ЧПУ: механическая обработка, наплавка, термообработка до HRC 58-62, контроль геометрии. Специализация на трансмиссии Tiguan I.',
      features: [
        'Обработка на станках с ЧПУ',
        'Восстановление до заводских параметров',
        'Термообработка HRC 58-62',
        'Контроль геометрии и твердости'
      ],
      price: 'от 34 990 ₽',
      duration: '1 день'
    },
    {
      icon: 'Gauge',
      title: 'Ремонт муфты Haldex',
      description: 'Профессиональный ремонт муфты полного привода Haldex Generation 4: разборка, дефектовка, замена изношенных дисков, сальников, подшипников, прокладок. Заправка оригинальным маслом Haldex Gen 4.',
      features: [
        'Полная разборка и дефектовка',
        'Замена дисков и фрикционов',
        'Установка новых подшипников',
        'Заправка оригинальным маслом'
      ],
      price: 'от 24 990 ₽',
      duration: '1 день'
    },
    {
      icon: 'Wrench',
      title: 'Ремонт раздаточной коробки',
      description: 'Капитальный ремонт раздаточной коробки: восстановление шлицов первичного и вторичного валов, замена подшипников, сальников, синхронизаторов. Регулировка зазоров, герметизация корпуса.',
      features: [
        'Восстановление шлицевых соединений',
        'Замена подшипников и сальников',
        'Регулировка зазоров валов',
        'Герметизация корпуса'
      ],
      price: 'от 34 990 ₽',
      duration: '1 день'
    },

    {
      icon: 'Package',
      title: 'Техническое обслуживание полного привода',
      description: 'Комплексное ТО системы 4Motion: замена масла в муфте Haldex и редукторах, диагностика электронного блока управления, проверка датчиков, очистка фильтра муфты, тестирование работы полного привода.',
      features: [
        'Замена масла Haldex (1.2 л)',
        'Замена масла в редукторах',
        'Профилактика полного привода',
        'Очистка фильтра муфты'
      ],
      price: 'от 4 990 ₽',
      duration: '1 день'
    }
  ];

  const portfolio = [
    {
      title: 'Ремонт полного привода Volkswagen Tiguan',
      car: 'Volkswagen Tiguan I (5N)',
      year: '2024',
      work: 'Комплексное восстановление системы 4Motion: ремонт муфты Haldex, восстановление шлицевых соединений, ремонт раздаточной коробки',
      image: 'https://cdn.poehali.dev/projects/2ebda34c-8a7e-48ca-8c9a-1d778db06372/files/344af438-2cf3-462d-8a1c-07004361e676.jpg'
    },
    {
      title: 'Ремонт муфты Haldex Tiguan',
      car: 'Volkswagen Tiguan I (5N)',
      year: '2024',
      work: 'Полная разборка муфты Haldex Gen 4, замена изношенных дисков, подшипников, сальников',
      image: 'https://cdn.poehali.dev/projects/2ebda34c-8a7e-48ca-8c9a-1d778db06372/files/99bfe21f-3603-4929-9394-e5dcded08802.jpg'
    },
    {
      title: 'Ремонт раздаточной коробки Tiguan',
      car: 'Volkswagen Tiguan I (5N)',
      year: '2024',
      work: 'Восстановление шлицевых соединений валов раздатки, замена подшипников, герметизация корпуса',
      image: 'https://cdn.poehali.dev/projects/2ebda34c-8a7e-48ca-8c9a-1d778db06372/files/23cc98d7-15e4-431a-982c-9d2217d5d79a.jpg'
    }
  ];

  const guarantees = [
    {
      title: 'Гарантия качества работ',
      items: [
        'Восстановление шлицевых соединений Volkswagen Tiguan I - 12 месяцев без ограничения пробега',
        'Изготовление новых деталей - 24 месяца гарантии',
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
        'Современное оборудование для восстановления и термообработки',
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
      <section 
        id="gallery" 
        className="py-4 px-4 bg-gradient-to-b from-background via-muted/10 to-muted/20"
      >
        <div className="container mx-auto max-w-6xl">
          <AnimatedSection>
            <div className="text-center mb-3">
              <h2 className="text-2xl lg:text-3xl font-bold mb-2 text-foreground">
                Примеры восстановленных деталей
              </h2>
              <p className="text-xs text-muted-foreground max-w-2xl mx-auto">
                Реальные работы: от изношенных шлицов до полностью восстановленных деталей с гарантией
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              {
                id: 'gallery-1',
                image: 'https://cdn.poehali.dev/files/afd05d83-5c3a-44b5-b7e1-d3ae38464a3d.jpg',
                title: 'Готовые детали',
                description: 'Восстановленные шлицы после ЧПУ и термообработки',
                badge: null
              },
              {
                id: 'gallery-2',
                image: 'https://cdn.poehali.dev/files/64672975-4dd9-45b5-91f5-5d17f9a3a5d2.jpg',
                title: 'До и после',
                description: 'Наглядное сравнение изношенных и восстановленных шлицов',
                badge: 'До / После'
              },
              {
                id: 'gallery-3',
                image: 'https://cdn.poehali.dev/files/a0f934cd-d8de-4ab1-8b44-67a3a4433a84.jpeg',
                title: 'Дифференциал и вал',
                description: 'Восстановление до заводского состояния',
                badge: null
              }
            ].map((item, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <Card 
                  className="group overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-2xl hover:border-primary/50 transition-all duration-300 cursor-pointer h-full flex flex-col"
                  onClick={() => handleImageView(item.id, item.image)}
                >
                    <div className="relative overflow-hidden">
                      <img 
                        src={item.image}
                        alt={item.title}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3">
                        <Badge className="bg-background/90 text-foreground shadow-lg text-xs backdrop-blur-sm">
                          <Icon name="Eye" size={12} className="mr-1" />
                          {imageViews[item.id] || 0}
                        </Badge>
                      </div>
                      {item.badge && (
                        <div className="absolute top-3 right-3">
                          <Badge className="bg-primary text-primary-foreground shadow-lg text-xs">
                            {item.badge}
                          </Badge>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-2">
                          <div className="flex items-center gap-2 text-white">
                            <Icon name="ZoomIn" size={18} />
                            <span className="text-sm font-semibold">Увеличить фото</span>
                          </div>
                          <button
                            onClick={(e) => handleShare(e, item)}
                            className="flex items-center gap-1.5 px-3 py-1.5 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-lg transition-colors text-white text-sm font-semibold"
                          >
                            <Icon name="Share2" size={16} />
                            <span className="hidden sm:inline">Поделиться</span>
                          </button>
                        </div>
                      </div>
                    </div>
                    <CardContent className="pt-4 pb-4 flex-1 flex flex-col">
                      <h3 className="font-bold text-base mb-1.5">{item.title}</h3>
                      <p className="text-xs text-muted-foreground flex-1">{item.description}</p>
                    </CardContent>
                  </Card>
              </AnimatedSection>
            ))}
          </div>

          <div className="mt-6">
            <AnimatedSection delay={0.4}>
              <Card className="border-primary/30 bg-gradient-to-br from-primary/5 to-accent/5 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon name="Video" className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Видео процесса</h3>
                      <p className="text-sm text-muted-foreground">
                        Смотрите, как мы восстанавливаем шлицы на нашем канале RuTube
                      </p>
                    </div>
                  </div>
                  <div className="aspect-video rounded-lg overflow-hidden bg-black/5 mb-3">
                    <iframe
                      src="https://rutube.ru/play/embed/cc980b113b77037430a3b1067666c8e1/"
                      frameBorder="0"
                      allow="clipboard-write; autoplay"
                      allowFullScreen
                      className="w-full h-full"
                      title="Видео восстановления шлицов"
                    />
                  </div>
                  <a 
                    href="https://rutube.ru/channel/35843934/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" className="w-full">
                      <Icon name="ExternalLink" size={16} className="mr-2" />
                      Больше видео на RuTube
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <SectionDivider variant="gradient" />

      <section 
        id="services" 
        className="py-4 px-4 bg-muted/5 relative overflow-hidden"
      >
        <div className="container mx-auto relative z-10 max-w-6xl">
          <AnimatedSection>
            <div className="text-center mb-3">
              <h2 className="text-2xl lg:text-3xl font-bold mb-2 text-foreground">
                Специализация по Volkswagen Tiguan I
              </h2>
              <p className="text-xs text-muted-foreground max-w-2xl mx-auto">
                Полный цикл восстановления системы полного привода 4Motion с гарантией качества
              </p>
            </div>
          </AnimatedSection>

          <div className="space-y-2 mb-4">
            {services.map((service, index) => (
              <AnimatedSection key={index} delay={index * 0.05}>
                <Card className="group border-border/50 bg-card/80 backdrop-blur-sm hover:border-primary/40 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-3">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon name={service.icon} className="text-primary" size={16} />
                      </div>
                        
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                            <h3 className="text-sm font-bold text-foreground">{service.title}</h3>
                            <div className="flex items-center gap-1.5 flex-shrink-0">
                              <Badge variant="outline" className="text-primary border-primary/30 text-xs px-2 py-0">
                                {service.price}
                              </Badge>
                              <Badge variant="outline" className="text-muted-foreground border-border text-xs px-2 py-0">
                                {service.duration}
                              </Badge>
                            </div>
                          </div>
                          
                          <p className="text-xs text-muted-foreground leading-snug mb-2">
                            {service.description}
                          </p>
                          
                          {service.features && service.features.length > 0 && (
                            <div className="grid grid-cols-2 gap-x-3 gap-y-0.5 mb-3">
                              {service.features.slice(0, 4).map((feature: string, idx: number) => (
                                <div key={idx} className="flex items-start gap-1 text-xs">
                                  <Icon name="Check" className="text-primary flex-shrink-0 mt-0.5" size={12} />
                                  <span className="text-foreground/80 text-xs leading-tight">{feature}</span>
                                </div>
                              ))}
                            </div>
                          )}
                          
                          <div className="flex gap-2 mt-2">
                            <a href="tel:+79202520352" className="flex-1">
                              <Button size="sm" className="w-full text-xs h-8">
                                <Icon name="Phone" size={14} className="mr-1.5" />
                                Позвонить
                              </Button>
                            </a>
                            <a href="https://wa.me/79202520352" target="_blank" rel="noopener noreferrer" className="flex-1">
                              <Button size="sm" variant="outline" className="w-full text-xs h-8 border-green-500/30 text-green-700 hover:bg-green-500/10">
                                <Icon name="MessageCircle" size={14} className="mr-1.5" />
                                WhatsApp
                              </Button>
                            </a>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider variant="gradient" />

      <section 
        id="patents" 
        className="py-4 px-4 bg-gradient-to-b from-muted/5 via-muted/10 to-muted/5"
      >
        <div className="container mx-auto max-w-6xl">
          <AnimatedSection>
            <div className="text-center mb-3">
              <h2 className="text-2xl lg:text-3xl font-bold mb-2 text-foreground">
                Защищённая интеллектуальная собственность
              </h2>
              <p className="text-xs text-muted-foreground max-w-2xl mx-auto">
                Наша технология восстановления шлицов защищена патентом РФ
              </p>
            </div>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-3">
            <AnimatedSection delay={0.1}>
              <Card className="border-primary/30 bg-gradient-to-br from-primary/5 to-accent/5 backdrop-blur-sm h-full">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="Award" className="text-primary" size={20} />
                    </div>
                    <div>
                      <h3 className="text-base font-bold mb-0.5">Патент РФ №2829377</h3>
                      <p className="text-xs text-muted-foreground">Выдан 30 октября 2024 года</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <p className="text-xs leading-snug">
                      <span className="font-semibold">Способ восстановления шлицевого соединения</span> на полноприводных автомобилях с использованием высокоточной механической обработки и термообработки.
                    </p>
                    
                    <div className="space-y-1">
                      <div className="flex items-start gap-1.5">
                        <Icon name="Check" className="text-primary mt-0.5 flex-shrink-0" size={12} />
                        <span className="text-xs">Восстановление изношенных шлицов методом механической обработки на станках с ЧПУ</span>
                      </div>
                      <div className="flex items-start gap-1.5">
                        <Icon name="Check" className="text-primary mt-0.5 flex-shrink-0" size={12} />
                        <span className="text-xs">Термообработка для восстановления твёрдости поверхности до заводских параметров</span>
                      </div>
                      <div className="flex items-start gap-1.5">
                        <Icon name="Check" className="text-primary mt-0.5 flex-shrink-0" size={12} />
                        <span className="text-xs">Гарантированное качество и долговечность восстановленных деталей</span>
                      </div>
                    </div>

                    <div className="pt-1.5 border-t border-border/50">
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary" className="text-xs">
                          <Icon name="MapPin" className="mr-1" size={12} />
                          Российская Федерация
                        </Badge>
                        <Badge variant="secondary" className="text-xs">
                          <Icon name="Calendar" className="mr-1" size={12} />
                          2024
                        </Badge>
                        <Badge variant="secondary" className="text-xs">
                          <Icon name="ShieldCheck" className="mr-1" size={12} />
                          Действующий
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <Card className="border-border/50 bg-card/50 backdrop-blur-sm h-full overflow-hidden">
                <CardContent className="p-0 h-full flex flex-col">
                  <div className="p-2 border-b border-border/50">
                    <div className="flex items-center gap-2 mb-0.5">
                      <Icon name="FileText" className="text-primary" size={16} />
                      <h3 className="text-sm font-bold">Свидетельство о патенте</h3>
                    </div>
                    <p className="text-xs text-muted-foreground">Официальный документ Роспатента</p>
                  </div>
                  
                  <div className="flex-1 p-2 flex items-center justify-center bg-muted/20">
                    <img 
                      src="https://cdn.poehali.dev/files/72de0a62-55b0-4414-8c96-a15fb577a0a3.jpg"
                      alt="Патент на изобретение №2829377"
                      className="rounded-lg shadow-lg border-2 border-border max-h-60 object-contain cursor-pointer hover:scale-105 transition-transform duration-300"
                      onClick={() => setSelectedImage('https://cdn.poehali.dev/files/72de0a62-55b0-4414-8c96-a15fb577a0a3.jpg')}
                    />
                  </div>
                  
                  <div className="p-2 bg-muted/30 text-center">
                    <p className="text-xs text-muted-foreground">
                      <Icon name="MousePointer2" className="inline mr-1" size={12} />
                      Нажмите для увеличения
                    </p>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={0.3}>
            <Card className="mt-3 border-border/50 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-3">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-3">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Lightbulb" className="text-accent-foreground" size={20} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-sm mb-1">Почему это важно для вас?</h3>
                    <p className="text-xs text-muted-foreground leading-snug">
                      Патент подтверждает уникальность и эффективность нашей технологии. Это не просто ремонт — это научно обоснованный, проверенный и защищённый государством способ восстановления деталей. Вы получаете гарантию качества на 12 месяцев, потому что мы уверены в результате.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      <section 
        id="warranty" 
        className="py-4 px-4 bg-gradient-to-b from-background via-primary/5 to-background"
      >
        <div className="container mx-auto max-w-6xl">
          <AnimatedSection>
            <div className="text-center mb-3">
              <h2 className="text-2xl lg:text-3xl font-bold mb-2 text-foreground">
                Гарантия 12 месяцев без ограничения пробега
              </h2>
              <p className="text-xs text-muted-foreground max-w-3xl mx-auto">
                Мы уверены в качестве нашей работы и даём расширенную гарантию на все восстановленные детали
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-3 mb-4">
            {[
              {
                icon: 'ShieldCheck',
                title: '12 месяцев',
                subtitle: 'Полная гарантия',
                description: 'Официальная гарантия на год — дольше, чем у большинства конкурентов'
              },
              {
                icon: 'Gauge',
                title: 'Без ограничений',
                subtitle: 'По пробегу',
                description: 'Неважно, сколько километров вы проедете — гарантия действует'
              },
              {
                icon: 'Award',
                title: 'Патент РФ',
                subtitle: 'Проверенная технология',
                description: 'Качество подтверждено патентом на изобретение №2829377'
              }
            ].map((item, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <Card className="border-border/50 bg-card/80 backdrop-blur-sm h-full hover:border-primary/50 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-4 text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/20 via-primary/10 to-accent/10 rounded-xl flex items-center justify-center mx-auto mb-2 shadow-lg">
                      <Icon name={item.icon} className="text-primary" size={20} />
                    </div>
                    <div className="text-xl font-bold text-primary mb-0.5">{item.title}</div>
                    <div className="text-xs font-semibold text-muted-foreground mb-2">{item.subtitle}</div>
                    <p className="text-xs text-muted-foreground leading-snug">{item.description}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.3}>
            <Card className="border-primary/30 bg-gradient-to-br from-primary/10 via-primary/5 to-accent/5 backdrop-blur-sm shadow-xl">
              <CardContent className="p-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon name="FileCheck" className="text-primary" size={20} />
                      </div>
                      <div>
                        <h3 className="text-base font-bold mb-1">Что входит в гарантию?</h3>
                        <p className="text-xs text-muted-foreground">Полная защита вашего ремонта</p>
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      {[
                        'Бесплатное устранение любых дефектов нашей работы',
                        'Замена детали при выявлении производственного брака',
                        'Компенсация стоимости работ при гарантийном случае',
                        'Консультации и диагностика в течение гарантийного срока'
                      ].map((item, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <Icon name="Check" className="text-primary flex-shrink-0 mt-0.5" size={14} />
                          <span className="text-xs">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon name="AlertCircle" className="text-primary" size={20} />
                      </div>
                      <div>
                        <h3 className="text-base font-bold mb-1">Почему мы можем это дать?</h3>
                        <p className="text-xs text-muted-foreground">Уверенность в технологии</p>
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      {[
                        'Патентованная технология восстановления шлицов',
                        'Высокоточное оборудование с ЧПУ',
                        'Термообработка до заводских параметров HRC 58-62',
                        'Многоступенчатый контроль качества на каждом этапе'
                      ].map((item, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <Icon name="Check" className="text-primary flex-shrink-0 mt-0.5" size={14} />
                          <span className="text-xs">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-border/50">
                  <div className="bg-background/50 rounded-lg p-4 text-center">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <Icon name="BadgeCheck" className="text-primary" size={20} />
                      <h4 className="text-base font-bold">Официальный гарантийный талон</h4>
                    </div>
                    <p className="text-xs text-muted-foreground max-w-2xl mx-auto mb-3">
                      На каждую восстановленную деталь выдаём официальный гарантийный талон с печатью организации, номером заказа и подписью мастера
                    </p>
                    <div className="flex flex-wrap justify-center gap-2">
                      <a href="tel:+79202520352">
                        <Button size="sm" className="font-bold">
                          <Icon name="Phone" size={16} className="mr-1.5" />
                          Узнать подробности
                        </Button>
                      </a>
                      <a href="https://wa.me/79202520352" target="_blank" rel="noopener noreferrer" className="group">
                        <Button size="sm" variant="outline" className="font-bold group-hover:scale-105 transition-transform duration-200">
                          <Icon name="MessageCircle" size={16} className="mr-1.5" />
                          WhatsApp
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      <section 
        id="faq" 
        className="py-4 px-4 bg-gradient-to-b from-muted/20 via-muted/10 to-background"
      >
        <div className="container mx-auto max-w-6xl">
          <AnimatedSection>
            <div className="text-center mb-3">
              <h2 className="text-2xl lg:text-3xl font-bold mb-2 text-foreground">
                Частые вопросы о восстановлении шлицов
              </h2>
              <p className="text-xs text-muted-foreground max-w-2xl mx-auto">
                Всё, что нужно знать о технологии восстановления шлицевых соединений Volkswagen Tiguan I
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                icon: 'AlertCircle',
                question: 'Как понять, что шлицы изношены?',
                answer: 'Основные признаки: вибрация при разгоне, металлический стук при трогании, рывки при переключении передач, гул со стороны раздатки.'
              },
              {
                icon: 'Clock',
                question: 'Сколько времени занимает?',
                answer: 'От 1 до 5 рабочих дней с момента получения деталей. Обычно справляемся за 2 дня благодаря отлаженному процессу.'
              },
              {
                icon: 'Wrench',
                question: 'Восстановите сильно изношенные?',
                answer: 'Да! Наша запатентованная технология позволяет восстанавливать даже критически изношенные шлицы. Качество как новых деталей.'
              },
              {
                icon: 'ShieldCheck',
                question: 'Какая гарантия?',
                answer: '12 месяцев без ограничения пробега. Официальный гарантийный талон с печатью организации.'
              },
              {
                icon: 'Car',
                question: 'Нужно снимать детали самому?',
                answer: 'Мы работаем только с уже снятыми деталями. Можете снять сами или в любом автосервисе, затем привезти к нам или отправить СДЭК.'
              },
              {
                icon: 'Users',
                question: 'Только Tiguan I?',
                answer: 'Tiguan I — наша специализация, но восстанавливаем шлицы и на других полноприводных авто. Позвоните — проконсультируем.'
              }
            ].map((item, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <Card className="border-border/50 bg-card/50 backdrop-blur-sm h-full hover:border-primary/50 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-3">
                      <div className="flex items-start gap-2 mb-2">
                        <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon name={item.icon} className="text-primary" size={16} />
                        </div>
                        <h3 className="text-xs font-bold leading-tight pt-1">{item.question}</h3>
                      </div>
                      <p className="text-xs text-muted-foreground leading-snug pl-10">
                        {item.answer}
                      </p>
                    </CardContent>
                  </Card>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.6}>
            <Card className="mt-3 border-primary/30 bg-gradient-to-r from-primary/5 to-accent/5 backdrop-blur-sm">
              <CardContent className="p-3">
                <div className="flex flex-col md:flex-row items-center gap-3 text-center md:text-left">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="MessageCircle" className="text-primary" size={20} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold mb-0.5 text-sm">Не нашли ответ на свой вопрос?</h3>
                    <p className="text-xs text-muted-foreground">
                      Позвоните нам или оставьте заявку — ответим на любые вопросы о восстановлении шлицов
                    </p>
                  </div>
                  <Button className="flex-shrink-0" size="sm">
                    <Icon name="Phone" size={16} className="mr-1.5" />
                    Задать вопрос
                  </Button>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
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

      <section 
        id="guarantees" 
        className="py-4 px-4 bg-muted/10"
      >
        <div className="container mx-auto max-w-6xl">
          <AnimatedSection>
            <div className="text-center mb-3">
              <h2 className="text-2xl lg:text-3xl font-bold mb-2 text-foreground">
                Как мы работаем с регионами
              </h2>
              <p className="text-xs text-muted-foreground max-w-2xl mx-auto">
                Находимся в Нижнем Новгороде, принимаем детали со всей России. Доставка СДЭК 2-5 дней.
              </p>
            </div>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-3 gap-3 mb-4">
            {[
              {
                step: 1,
                icon: 'Send',
                title: 'Заявка и консультация',
                description: 'Свяжитесь с нами любым удобным способом. Расскажем о технологии и рассчитаем стоимость.'
              },
              {
                step: 2,
                icon: 'Truck',
                title: 'Отправка деталей',
                description: 'Отправьте детали СДЭК на наш адрес или привезите лично. Бесплатная диагностика при получении.'
              },
              {
                step: 3,
                icon: 'Search',
                title: 'Диагностика и оценка',
                description: 'Проводим дефектовку, замеряем износ. Согласовываем с вами объём работ и финальную стоимость.'
              },
              {
                step: 4,
                icon: 'Settings',
                title: 'Восстановление',
                description: 'Восстановление шлицов, механическая обработка на ЧПУ, термообработка, балансировка.'
              },
              {
                step: 5,
                icon: 'Camera',
                title: 'Контроль качества',
                description: 'Проверяем геометрию, твёрдость, баланс. Оформляем фотоотчёт и протокол контроля.'
              },
              {
                step: 6,
                icon: 'PackageCheck',
                title: 'Отправка и гарантия',
                description: 'После оплаты отправляем детали в течение 1 дня. Гарантия 12 месяцев без ограничения пробега.'
              }
            ].map((item, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <Card className="border-border/50 bg-card/50 backdrop-blur-sm h-full hover:border-primary/50 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-3">
                    <div className="flex items-start gap-2 mb-2">
                      <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-bold flex-shrink-0 text-sm">
                        {item.step}
                      </div>
                      <div className="flex-1">
                        <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mb-1.5">
                          <Icon name={item.icon} className="text-primary" size={16} />
                        </div>
                        <h3 className="text-xs font-bold mb-1">{item.title}</h3>
                        <p className="text-xs text-muted-foreground leading-snug">{item.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>



          <AnimatedSection delay={0.7}>
            <Card className="border-primary/30 bg-gradient-to-br from-primary/5 to-accent/5 backdrop-blur-sm mt-3">
              <CardContent className="p-3">
                <div className="flex items-center justify-between gap-3 mb-2">
                  <div className="flex items-center gap-2">
                    <Icon name="MapPin" className="text-primary" size={16} />
                    <h3 className="text-sm font-bold">География и доставка</h3>
                  </div>
                  <a 
                    href="https://www.cdek.ru/ru/calculate" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" size="sm" className="text-xs h-7 px-2">
                      <Icon name="ExternalLink" size={12} className="mr-1" />
                      СДЭК
                    </Button>
                  </a>
                </div>

                <div className="grid grid-cols-3 md:grid-cols-6 gap-1.5">
                  {[
                    { region: 'Москва, СПб', days: '1-2 дня' },
                    { region: 'ЦФО', days: '2-3 дня' },
                    { region: 'Урал, Сибирь', days: '3-5 дн' },
                    { region: 'Дальний Восток', days: '5-7 дн' },
                    { region: 'Юг России', days: '3-4 дня' },
                    { region: 'Поволжье', days: '1-2 дня' }
                  ].map((item, index) => (
                    <div key={index} className="bg-background/80 rounded p-1.5 text-center">
                      <div className="font-bold text-xs mb-0.5 leading-tight">{item.region}</div>
                      <div className="text-xs text-primary font-semibold">{item.days}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>

          <div className="mt-3">
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-4">
                <div className="grid md:grid-cols-2 gap-3 mb-3">
                  <div className="space-y-2">
                    <h4 className="font-bold text-sm flex items-center gap-2">
                      <Icon name="PackageOpen" className="text-primary" size={16} />
                      Отправка деталей к нам
                    </h4>
                    <ul className="space-y-1">
                      <li className="flex items-start gap-2">
                        <Icon name="Check" className="text-primary mt-0.5 flex-shrink-0" size={14} />
                        <span className="text-xs text-muted-foreground">Упакуйте детали в прочную коробку с защитой от ударов</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Check" className="text-primary mt-0.5 flex-shrink-0" size={14} />
                        <span className="text-xs text-muted-foreground">Отправьте в ближайший пункт СДЭК на наш адрес</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Check" className="text-primary mt-0.5 flex-shrink-0" size={14} />
                        <span className="text-xs text-muted-foreground">Стоимость доставки рассчитывается индивидуально на сайте СДЭК</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-bold text-sm flex items-center gap-2">
                      <Icon name="PackageCheck" className="text-primary" size={16} />
                      Возврат восстановленных деталей
                    </h4>
                    <ul className="space-y-1">
                      <li className="flex items-start gap-2">
                        <Icon name="Check" className="text-primary mt-0.5 flex-shrink-0" size={14} />
                        <span className="text-xs text-muted-foreground">Надёжная упаковка с защитой от повреждений при транспортировке</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Check" className="text-primary mt-0.5 flex-shrink-0" size={14} />
                        <span className="text-xs text-muted-foreground">Отправка в течение 1 рабочего дня после оплаты</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Check" className="text-primary mt-0.5 flex-shrink-0" size={14} />
                        <span className="text-xs text-muted-foreground">Доставка в любой город России за 2-5 дней</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-3">
                  <div className="bg-primary/5 border border-primary/20 rounded-lg p-3">
                    <div className="flex items-start gap-2">
                      <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon name="Info" className="text-primary" size={16} />
                      </div>
                      <div className="space-y-1">
                        <h4 className="font-bold text-sm">Адрес для отправки через СДЭК</h4>
                        <p className="text-xs text-muted-foreground">
                          <strong>Получатель:</strong> ООО "Мега Шлиц"<br />
                          <strong>Адрес:</strong> г. Нижний Новгород, Восточный проезд, 11/1<br />
                          <strong>Телефон:</strong> +7 (920) 252-03-52
                        </p>
                        <p className="text-xs text-primary font-medium mt-2">
                          Свяжитесь с нами перед отправкой — поможем правильно оформить доставку
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-accent/5 border border-accent/20 rounded-lg p-3">
                    <div className="flex items-start gap-2">
                      <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon name="Package" className="text-accent-foreground" size={16} />
                      </div>
                      <div className="space-y-2 flex-1">
                        <h4 className="font-bold text-sm">Как упаковать детали</h4>
                        <div className="space-y-1">
                          {[
                            'Прочная картонная коробка',
                            'Оберните в плёнку или бумагу',
                            'Заполните пустоты пенопластом',
                            'Заклейте скотчем со всех сторон'
                          ].map((item, index) => (
                            <div key={index} className="flex items-start gap-1.5 text-xs">
                              <Icon name="Check" className="text-primary flex-shrink-0 mt-0.5" size={12} />
                              <span className="text-muted-foreground">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section 
        id="contacts" 
        className="py-4 px-4 bg-gradient-to-b from-muted/20 via-muted/10 to-background"
      >
        <div className="container mx-auto max-w-6xl">
          <AnimatedSection>
            <div className="text-center mb-3">
              <h2 className="text-2xl lg:text-3xl font-bold mb-2 text-foreground">
                Узнайте стоимость восстановления
              </h2>
              <p className="text-xs text-muted-foreground max-w-2xl mx-auto">
                Бесплатная консультация и расчёт стоимости.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-3 mb-4">
            <AnimatedSection delay={0.2}>
              <a href="tel:+79202520352">
                <Card className="border-primary/30 bg-gradient-to-br from-primary/5 to-accent/5 backdrop-blur-sm h-full hover:border-primary/50 hover:shadow-lg transition-all duration-300 cursor-pointer group">
                  <CardContent className="p-4 text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                      <Icon name="Phone" className="text-primary" size={32} />
                    </div>
                    <h3 className="text-base font-bold mb-2">Позвонить</h3>
                    <p className="text-sm text-primary font-semibold mb-1">+7 (920) 252-03-52</p>
                    <p className="text-xs text-muted-foreground">Консультации 24/7</p>
                    <Button size="sm" className="w-full mt-3">
                      Позвонить сейчас
                    </Button>
                  </CardContent>
                </Card>
              </a>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <a href="https://wa.me/79202520352" target="_blank" rel="noopener noreferrer">
                <Card className="border-green-500/30 bg-gradient-to-br from-green-500/5 to-green-600/5 backdrop-blur-sm h-full hover:border-green-500/50 hover:shadow-lg transition-all duration-300 cursor-pointer group">
                  <CardContent className="p-4 text-center">
                    <div className="w-16 h-16 bg-green-500/10 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                      <Icon name="MessageCircle" className="text-green-600" size={32} />
                    </div>
                    <h3 className="text-base font-bold mb-2">WhatsApp</h3>
                    <p className="text-sm text-green-600 font-semibold mb-1">+7 (920) 252-03-52</p>
                    <p className="text-xs text-muted-foreground">Быстрые ответы</p>
                    <Button size="sm" variant="outline" className="w-full mt-3 border-green-500/30 text-green-700 hover:bg-green-500/10 group-hover:scale-105 transition-transform duration-200">
                      Написать в WhatsApp
                    </Button>
                  </CardContent>
                </Card>
              </a>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <Card 
                className="border-border/50 bg-card/50 backdrop-blur-sm h-full hover:border-primary/50 hover:shadow-lg transition-all duration-300 cursor-pointer group"
                onClick={() => setShowEmailForm(!showEmailForm)}
              >
                <CardContent className="p-4 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                    <Icon name="Mail" className="text-primary" size={32} />
                  </div>
                  <h3 className="text-base font-bold mb-2">Email</h3>
                  <p className="text-sm text-primary font-semibold mb-1">megashlic@yandex.ru</p>
                  <p className="text-xs text-muted-foreground">Подробные запросы</p>
                  <Button size="sm" variant="outline" className="w-full mt-3">
                    {showEmailForm ? 'Скрыть форму' : 'Написать письмо'}
                  </Button>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={0.5}>
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-2">
                  <div className="p-4 bg-muted/20">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon name="MapPin" className="text-primary" size={20} />
                      </div>
                      <div>
                        <h3 className="text-base font-bold mb-1">Адрес производства</h3>
                        <p className="text-sm text-muted-foreground">г. Нижний Новгород, Восточный проезд, 11/1</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon name="Clock" className="text-primary" size={20} />
                      </div>
                      <div>
                        <h3 className="text-base font-bold mb-1">Режим работы</h3>
                        <div className="space-y-1 text-sm text-muted-foreground">
                          <div>Пн-Пт: 9:30 - 17:30</div>
                          <div>Сб-Вс: Выходной</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="w-full h-64 md:h-auto flex flex-col">
                    <div className="flex-1">
                      <iframe
                        src="https://yandex.ru/map-widget/v1/?ll=43.914851%2C56.253544&amp;z=17&amp;pt=43.914851%2C56.253544%2Cpm2rdm"
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        title="Карта проезда"
                        className="w-full h-full"
                      />
                    </div>
                    <div className="p-3 bg-muted/30 border-t border-border/50">
                      <a 
                        href="https://yandex.ru/maps/?rtext=~56.253544,43.914851" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <Button variant="outline" size="sm" className="w-full">
                          <Icon name="Navigation" size={16} className="mr-2" />
                          Построить маршрут
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>

          {showEmailForm && (
            <AnimatedSection delay={0.6}>
              <Card className="border-primary/30 bg-gradient-to-br from-primary/5 to-accent/5 backdrop-blur-sm mt-4">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <Icon name="MessageSquare" className="text-primary" size={24} />
                    Форма обратной связи
                  </CardTitle>
                  <CardDescription>
                    Оставьте заявку и мы свяжемся с вами в ближайшее время
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">
                          Ваше имя *
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="Иван"
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-medium">
                          Телефон *
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="+7 (920) 123-45-67"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="car" className="text-sm font-medium">
                        Автомобиль
                      </label>
                      <input
                        id="car"
                        name="car"
                        type="text"
                        value={formData.car}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Volkswagen Tiguan"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Сообщение
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                        placeholder="Опишите вашу проблему или задайте вопрос"
                      />
                    </div>

                    {submitStatus === 'success' && (
                      <div className="bg-green-500/10 border border-green-500/30 rounded-md p-3 text-sm text-green-700 dark:text-green-400 flex items-center gap-2">
                        <Icon name="CheckCircle" size={16} />
                        Ваша заявка отправлена! Мы свяжемся с вами в ближайшее время.
                      </div>
                    )}

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full"
                      size="lg"
                    >
                      {isSubmitting ? (
                        <>
                          <Icon name="Loader2" size={16} className="mr-2 animate-spin" />
                          Отправка...
                        </>
                      ) : (
                        <>
                          <Icon name="Send" size={16} className="mr-2" />
                          Отправить заявку
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </AnimatedSection>
          )}
        </div>
      </section>
    </>
  );
};

export default ServicesSection;
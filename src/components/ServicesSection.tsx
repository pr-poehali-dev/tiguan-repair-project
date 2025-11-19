import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import AnimatedSection from '@/components/AnimatedSection';
import SectionDivider from '@/components/SectionDivider';

const ServicesSection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    car: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
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
      icon: 'Car',
      title: 'Восстановление шлицевых соединений Volkswagen Tiguan I',
      description: 'Специализация на ремонте полноприводной трансмиссии Tiguan первого поколения (5N, 2007-2017): восстановление шлицевых соединений передней и задней оси, раздаточной коробки'
    },
    {
      icon: 'Factory',
      title: 'Изготовление шлицевых деталей',
      description: 'Производство новых шлицевых деталей по чертежам или образцам с соблюдением всех технических характеристик'
    },
    {
      icon: 'Gauge',
      title: 'Контроль качества',
      description: 'Многоуровневая проверка геометрии, твердости и точности шлицевых соединений на профессиональном оборудовании'
    },
    {
      icon: 'Wrench',
      title: 'Балансировка деталей',
      description: 'Прецизионная динамическая балансировка приводных деталей трансмиссии для устранения вибраций'
    },
    {
      icon: 'Shield',
      title: 'Термообработка',
      description: 'Профессиональная термообработка деталей для восстановления твердости и износостойкости поверхности'
    },
    {
      icon: 'Package',
      title: 'Комплексный ремонт трансмиссии',
      description: 'Восстановление всех изношенных шлицевых узлов в трансмиссии с гарантией качества'
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
      <section id="services" className="py-8 px-4 bg-gradient-to-b from-background via-muted/10 to-muted/30 relative overflow-hidden">
        <div className="container mx-auto relative z-10">
          <AnimatedSection>
            <div className="text-center mb-8">
              <motion.div 
                className="inline-block px-3 py-1.5 bg-primary/10 rounded-full mb-4 backdrop-blur-sm border border-primary/20"
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-xs font-semibold text-primary uppercase tracking-wide">Технологии</span>
              </motion.div>
              <h2 className="text-2xl lg:text-3xl font-bold mb-3 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                Специализация — Volkswagen Tiguan I (5N)
              </h2>
              <p className="text-muted-foreground text-sm max-w-2xl mx-auto leading-relaxed">
                Профессиональное восстановление шлицевых соединений полноприводной трансмиссии Tiguan первого поколения (2007-2017). Запатентованные технологии, станки с ЧПУ, гарантия 18 месяцев.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
            {services.map((service, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="w-full max-w-sm h-full"
                >
                  <Card className="group h-full flex flex-col border-border/50 hover:border-primary/50 bg-gradient-to-br from-card/80 to-card/50 backdrop-blur-sm hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300">
                    <CardHeader className="space-y-2 pb-4 flex-1 flex flex-col">
                      <motion.div 
                        className="w-12 h-12 bg-gradient-to-br from-primary/20 via-primary/10 to-accent/10 rounded-lg flex items-center justify-center mb-1 shadow-lg"
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Icon name={service.icon} className="text-primary" size={24} />
                      </motion.div>
                      <CardTitle className="text-base font-bold">{service.title}</CardTitle>
                      <CardDescription className="text-xs leading-relaxed flex-1">{service.description}</CardDescription>
                    </CardHeader>
                  </Card>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider variant="gradient" />

      <section id="patents" className="py-8 px-4 bg-gradient-to-b from-muted/5 via-muted/10 to-muted/5">
        <div className="container mx-auto max-w-5xl">
          <AnimatedSection>
            <div className="text-center mb-8">
              <motion.div 
                className="inline-block px-3 py-1.5 bg-primary/10 rounded-full mb-4 backdrop-blur-sm border border-primary/20"
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-xs font-semibold text-primary uppercase tracking-wide">Патентованная технология</span>
              </motion.div>
              <h2 className="text-2xl lg:text-3xl font-bold mb-3 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                Защищённая интеллектуальная собственность
              </h2>
              <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
                Наша технология восстановления шлицов защищена патентом РФ
              </p>
            </div>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-4">
            <AnimatedSection delay={0.1}>
              <Card className="border-primary/30 bg-gradient-to-br from-primary/5 to-accent/5 backdrop-blur-sm h-full">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon name="Award" className="text-primary" size={28} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1">Патент РФ №2829377</h3>
                      <p className="text-sm text-muted-foreground">Выдан 30 октября 2024 года</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <p className="text-sm leading-relaxed">
                      <span className="font-semibold">Способ восстановления шлицевого соединения</span> на полноприводных автомобилях с использованием высокоточной механической обработки и термообработки.
                    </p>
                    
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <Icon name="Check" className="text-primary mt-0.5 flex-shrink-0" size={16} />
                        <span className="text-sm">Восстановление изношенных шлицов методом механической обработки на станках с ЧПУ</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Icon name="Check" className="text-primary mt-0.5 flex-shrink-0" size={16} />
                        <span className="text-sm">Термообработка для восстановления твёрдости поверхности до заводских параметров</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Icon name="Check" className="text-primary mt-0.5 flex-shrink-0" size={16} />
                        <span className="text-sm">Гарантированное качество и долговечность восстановленных деталей</span>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-border/50">
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
                  <div className="p-4 border-b border-border/50">
                    <div className="flex items-center gap-2 mb-1">
                      <Icon name="FileText" className="text-primary" size={20} />
                      <h3 className="text-base font-bold">Свидетельство о патенте</h3>
                    </div>
                    <p className="text-xs text-muted-foreground">Официальный документ Роспатента</p>
                  </div>
                  
                  <div className="flex-1 p-4 flex items-center justify-center bg-muted/20">
                    <motion.img 
                      src="https://cdn.poehali.dev/files/72de0a62-55b0-4414-8c96-a15fb577a0a3.jpg"
                      alt="Патент на изобретение №2829377"
                      className="rounded-lg shadow-lg border-2 border-border max-h-80 object-contain cursor-pointer hover:scale-105 transition-transform duration-300"
                      whileHover={{ scale: 1.05 }}
                      onClick={() => setSelectedImage('https://cdn.poehali.dev/files/72de0a62-55b0-4414-8c96-a15fb577a0a3.jpg')}
                    />
                  </div>
                  
                  <div className="p-3 bg-muted/30 text-center">
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
            <Card className="mt-4 border-border/50 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="Lightbulb" className="text-accent-foreground" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-2">Почему это важно для вас?</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Патент подтверждает уникальность и эффективность нашей технологии. Это не просто ремонт — это научно обоснованный, проверенный и защищённый государством способ восстановления деталей. Вы получаете гарантию качества на 18 месяцев, потому что мы уверены в результате.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      <section id="faq" className="py-8 px-4 bg-gradient-to-b from-muted/20 via-muted/10 to-background">
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection>
            <div className="text-center mb-8">
              <motion.div 
                className="inline-block px-3 py-1.5 bg-primary/10 rounded-full mb-4 backdrop-blur-sm border border-primary/20"
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-xs font-semibold text-primary uppercase tracking-wide">Ответы на вопросы</span>
              </motion.div>
              <h2 className="text-2xl lg:text-3xl font-bold mb-3 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                Частые вопросы о восстановлении шлицов
              </h2>
              <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
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
                answer: '18 месяцев без ограничения пробега. Официальный гарантийный талон с печатью организации.'
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
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <Card className="border-border/50 bg-card/50 backdrop-blur-sm h-full hover:border-primary/50 hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-5">
                      <div className="flex items-start gap-3 mb-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon name={item.icon} className="text-primary" size={20} />
                        </div>
                        <h3 className="text-sm font-bold leading-tight pt-1">{item.question}</h3>
                      </div>
                      <p className="text-xs text-muted-foreground leading-relaxed pl-13">
                        {item.answer}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.6}>
            <Card className="mt-6 border-primary/30 bg-gradient-to-r from-primary/5 to-accent/5 backdrop-blur-sm">
              <CardContent className="p-5">
                <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="MessageCircle" className="text-primary" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold mb-1">Не нашли ответ на свой вопрос?</h3>
                    <p className="text-sm text-muted-foreground">
                      Позвоните нам или оставьте заявку — ответим на любые вопросы о восстановлении шлицов
                    </p>
                  </div>
                  <Button className="flex-shrink-0">
                    <Icon name="Phone" size={18} className="mr-2" />
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

      <section id="turnkey" className="py-8 px-4 bg-gradient-to-b from-background via-muted/5 to-muted/20">
        <div className="container mx-auto max-w-5xl">
          <AnimatedSection>
            <div className="text-center mb-8">
              <motion.div 
                className="inline-block px-3 py-1.5 bg-primary/10 rounded-full mb-4 backdrop-blur-sm border border-primary/20"
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-xs font-semibold text-primary uppercase tracking-wide">Комплексное решение</span>
              </motion.div>
              <h2 className="text-2xl lg:text-3xl font-bold mb-3 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                Ремонт трансмиссии под ключ
              </h2>
              <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
                Полный цикл восстановления — от диагностики до финального контроля качества
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-4 mb-6">
            {[
              {
                icon: 'Search',
                title: 'Диагностика',
                items: ['Дефектовка деталей', 'Замер износа', 'Расчёт стоимости']
              },
              {
                icon: 'Settings',
                title: 'Восстановление',
                items: ['Восстановление шлицов', 'Обработка на ЧПУ', 'Термообработка']
              },
              {
                icon: 'ShieldCheck',
                title: 'Контроль',
                items: ['Проверка геометрии', 'Балансировка', 'Фотоотчёт']
              }
            ].map((step, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <Card className="border-border/50 bg-card/50 backdrop-blur-sm h-full hover:border-primary/50 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-5">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-3">
                      <Icon name={step.icon} className="text-primary" size={24} />
                    </div>
                    <h3 className="font-bold mb-3">{step.title}</h3>
                    <ul className="space-y-1.5">
                      {step.items.map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
                          <Icon name="Check" className="text-primary flex-shrink-0" size={14} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.4}>
            <Card className="border-primary/30 bg-gradient-to-br from-primary/5 via-primary/3 to-accent/5 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="grid md:grid-cols-3 gap-6 items-center">
                  <div className="text-center">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <Icon name="Calendar" className="text-primary" size={28} />
                    </div>
                    <div className="text-2xl font-bold text-primary mb-1">1 день</div>
                    <div className="text-xs text-muted-foreground">Полный цикл работ</div>
                  </div>
                  <div className="text-center">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <Icon name="BadgeCheck" className="text-primary" size={28} />
                    </div>
                    <div className="text-2xl font-bold text-primary mb-1">18 мес</div>
                    <div className="text-xs text-muted-foreground">Гарантия без ограничений</div>
                  </div>
                  <div className="text-center">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <Icon name="Camera" className="text-primary" size={28} />
                    </div>
                    <div className="text-2xl font-bold text-primary mb-1">100%</div>
                    <div className="text-xs text-muted-foreground">Полный фотоотчёт</div>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-border/50 text-center">
                  <p className="text-sm font-semibold mb-3">Узнайте стоимость вашего ремонта</p>
                  <a href="tel:+79202520352">
                    <Button size="lg" className="font-bold">
                      <Icon name="Phone" size={20} className="mr-2" />
                      +7 (920) 252-03-52
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      <section id="guarantees" className="py-8 px-4 bg-gradient-to-b from-muted/20 via-muted/10 to-background">
        <div className="container mx-auto max-w-5xl">
          <AnimatedSection>
            <div className="text-center mb-8">
              <motion.div 
                className="inline-block px-3 py-1.5 bg-primary/10 rounded-full mb-4 backdrop-blur-sm border border-primary/20"
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-xs font-semibold text-primary uppercase tracking-wide">Этапы работы</span>
              </motion.div>
              <h2 className="text-2xl lg:text-3xl font-bold mb-3 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                Как мы работаем
              </h2>
              <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
                Прозрачный процесс от заявки до получения восстановленных деталей
              </p>
            </div>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-3 gap-4 mb-6">
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
                description: 'После оплаты отправляем детали в течение 1 дня. Гарантия 18 месяцев без ограничения пробега.'
              }
            ].map((item, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <Card className="border-border/50 bg-card/50 backdrop-blur-sm h-full hover:border-primary/50 hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-5">
                      <div className="flex items-start gap-3 mb-3">
                        <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-primary-foreground font-bold flex-shrink-0">
                          {item.step}
                        </div>
                        <div className="flex-1">
                          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                            <Icon name={item.icon} className="text-primary" size={20} />
                          </div>
                          <h3 className="text-sm font-bold mb-2">{item.title}</h3>
                          <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.6}>
            <Card className="border-primary/30 bg-gradient-to-br from-primary/10 via-primary/5 to-accent/5 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="ShieldCheck" className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">Гарантия качества 18 месяцев</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Официальная гарантия без ограничения пробега. Уверены в качестве — работаем по патентованной технологии.
                    </p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    'Полный фотоотчёт всех этапов работ',
                    'Протокол контроля качества с замерами',
                    'Гарантия без ограничения пробега',
                    'Бесплатная диагностика при обращении'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Icon name="Check" className="text-primary flex-shrink-0" size={16} />
                      <span className="text-xs">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>

          <div className="mt-12">
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader className="text-center">
                <CardTitle className="flex items-center justify-center gap-3 text-2xl">
                  <Icon name="Truck" className="text-primary" size={28} />
                  Доставка по всей России
                </CardTitle>
                <CardDescription className="text-base">
                  Работаем с транспортной компанией СДЭК — быстро и надёжно
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8 mb-6">
                  <div className="space-y-4">
                    <h4 className="font-bold text-lg flex items-center gap-2">
                      <Icon name="PackageOpen" className="text-primary" size={20} />
                      Отправка деталей к нам
                    </h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={18} />
                        <span className="text-sm text-muted-foreground">Упакуйте детали в прочную коробку с защитой от ударов</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={18} />
                        <span className="text-sm text-muted-foreground">Отправьте в ближайший пункт СДЭК на наш адрес</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={18} />
                        <span className="text-sm text-muted-foreground">Стоимость доставки рассчитывается индивидуально на сайте СДЭК</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="font-bold text-lg flex items-center gap-2">
                      <Icon name="PackageCheck" className="text-primary" size={20} />
                      Возврат восстановленных деталей
                    </h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={18} />
                        <span className="text-sm text-muted-foreground">Надёжная упаковка с защитой от повреждений при транспортировке</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={18} />
                        <span className="text-sm text-muted-foreground">Отправка в течение 1 рабочего дня после оплаты</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={18} />
                        <span className="text-sm text-muted-foreground">Доставка в любой город России за 2-5 дней</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon name="Info" className="text-primary" size={24} />
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-bold">Адрес для отправки через СДЭК</h4>
                        <p className="text-sm text-muted-foreground">
                          <strong>Получатель:</strong> ООО "Мега Шлиц"<br />
                          <strong>Адрес:</strong> г. Нижний Новгород, Восточный проезд, 11/1<br />
                          <strong>Телефон:</strong> +7 (920) 252-03-52
                        </p>
                        <p className="text-sm text-primary font-medium mt-3">
                          Свяжитесь с нами перед отправкой — поможем правильно оформить доставку
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-accent/5 border border-accent/20 rounded-xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon name="Calculator" className="text-accent-foreground" size={24} />
                      </div>
                      <div className="space-y-3 flex-1">
                        <h4 className="font-bold">Рассчитать стоимость доставки</h4>
                        <p className="text-sm text-muted-foreground">
                          Узнайте точную стоимость и сроки доставки из вашего города
                        </p>
                        <a 
                          href="https://www.cdek.ru/ru/calculate" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm font-semibold"
                        >
                          <Icon name="ExternalLink" size={16} />
                          Калькулятор СДЭК
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="gallery" className="py-8 px-4 bg-gradient-to-b from-background via-muted/10 to-muted/20">
        <div className="container mx-auto max-w-6xl">
          <AnimatedSection>
            <div className="text-center mb-8">
              <motion.div 
                className="inline-block px-3 py-1.5 bg-primary/10 rounded-full mb-4 backdrop-blur-sm border border-primary/20"
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-xs font-semibold text-primary uppercase tracking-wide">Наши работы</span>
              </motion.div>
              <h2 className="text-2xl lg:text-3xl font-bold mb-3 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                Примеры восстановленных деталей
              </h2>
              <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
                Реальные работы: от изношенных шлицов до полностью восстановленных деталей с гарантией
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
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
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="h-full"
                >
                  <Card 
                    className="group overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-2xl hover:border-primary/50 transition-all duration-300 cursor-pointer h-full flex flex-col"
                    onClick={() => handleImageView(item.id, item.image)}
                  >
                    <div className="relative overflow-hidden">
                      <img 
                        src={item.image}
                        alt={item.title}
                        className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
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
                </motion.div>
              </AnimatedSection>
            ))}
          </div>

          <div className="mt-8 grid md:grid-cols-2 gap-5">
            <AnimatedSection delay={0.4}>
              <Card className="border-primary/30 bg-gradient-to-br from-primary/5 to-accent/5 backdrop-blur-sm h-full">
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
                  <div className="aspect-video rounded-lg overflow-hidden bg-black/5 mb-4">
                    <iframe
                      src="https://rutube.ru/play/embed/a2c345d99a6b40181efac28a33770cb9/"
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

            <AnimatedSection delay={0.5}>
              <Card className="border-border/50 bg-card/50 backdrop-blur-sm h-full">
                <CardContent className="p-6 h-full flex flex-col justify-center">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon name="Camera" className="text-primary" size={28} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Фотоотчёт каждого заказа</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    Документируем все этапы: от получения детали до финального контроля. Вы видите весь процесс восстановления вашей детали.
                  </p>
                  <div className="space-y-2">
                    {[
                      'Состояние при получении',
                      'Процесс восстановления и обработки',
                      'Термообработка и закалка',
                      'Финальный контроль качества'
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <Icon name="Check" className="text-primary flex-shrink-0" size={16} />
                        <span className="text-xs">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-8 px-4 bg-gradient-to-b from-muted/20 via-muted/10 to-background">
        <div className="container mx-auto max-w-5xl">
          <AnimatedSection>
            <div className="text-center mb-8">
              <motion.div 
                className="inline-block px-3 py-1.5 bg-primary/10 rounded-full mb-4 backdrop-blur-sm border border-primary/20"
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-xs font-semibold text-primary uppercase tracking-wide">Свяжитесь с нами</span>
              </motion.div>
              <h2 className="text-2xl lg:text-3xl font-bold mb-3 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                Узнайте стоимость восстановления
              </h2>
              <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
                Бесплатная консультация. Расчёт стоимости за 15 минут.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-5 mb-8">
            {[
              {
                icon: 'Phone',
                title: 'Телефон',
                content: '+7 (920) 252-03-52',
                link: 'tel:+79202520352',
                subtitle: 'Консультации 24/7'
              },
              {
                icon: 'MapPin',
                title: 'Адрес производства',
                content: 'г. Нижний Новгород, Восточный проезд, 11/1',
                link: null,
                subtitle: 'Пн-Пт: 9:30 - 17:30'
              },
              {
                icon: 'Mail',
                title: 'Email',
                content: 'megashlic@yandex.ru',
                link: 'mailto:megashlic@yandex.ru',
                subtitle: 'Напишите нам'
              },
              {
                icon: 'MessageCircle',
                title: 'WhatsApp',
                content: 'Написать в мессенджер',
                link: 'https://wa.me/79202520352',
                subtitle: 'Удобная связь'
              }
            ].map((item, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <Card className="border-border/50 bg-card/50 backdrop-blur-sm h-full hover:border-primary/50 hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-5">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon name={item.icon} className="text-primary" size={20} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-xs font-semibold text-muted-foreground mb-1">{item.title}</div>
                          {item.link ? (
                            <a href={item.link} className="text-sm font-bold text-foreground hover:text-primary transition-colors break-words">
                              {item.content}
                            </a>
                          ) : (
                            <div className="text-sm font-bold text-foreground break-words">{item.content}</div>
                          )}
                          <div className="text-xs text-muted-foreground mt-1">{item.subtitle}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.5}>
            <Card className="border-primary/30 bg-gradient-to-br from-primary/5 to-accent/5 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row items-start gap-6">
                  <div className="flex-1">
                    <div className="flex items-start gap-3 mb-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon name="MessageSquare" className="text-primary" size={20} />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold mb-1">Получить расчёт стоимости</h3>
                        <p className="text-sm text-muted-foreground">
                          Позвоните или напишите — рассчитаем стоимость за 15 минут
                        </p>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <a href="tel:+79202520352">
                        <Button size="lg" className="w-full justify-start font-bold">
                          <Icon name="Phone" size={20} className="mr-2" />
                          +7 (920) 252-03-52
                        </Button>
                      </a>
                      
                      <a href="https://wa.me/79202520352" target="_blank" rel="noopener noreferrer">
                        <Button size="lg" variant="outline" className="w-full justify-start font-bold">
                          <Icon name="MessageCircle" size={20} className="mr-2" />
                          Написать в WhatsApp
                        </Button>
                      </a>
                      
                      <a href="mailto:megashlic@yandex.ru">
                        <Button size="lg" variant="outline" className="w-full justify-start font-bold">
                          <Icon name="Mail" size={20} className="mr-2" />
                          megashlic@yandex.ru
                        </Button>
                      </a>
                    </div>
                  </div>
                  
                  <div className="w-full md:w-72 p-4 bg-muted/30 rounded-xl">
                    <div className="flex items-center gap-2 mb-3">
                      <Icon name="Clock" className="text-primary" size={18} />
                      <span className="text-xs font-semibold">Режим работы</span>
                    </div>
                    <div className="space-y-1.5 text-xs text-muted-foreground">
                      <div>Пн-Пт: 9:30 - 17:30</div>
                      <div>Сб-Вс: Выходной</div>
                      <div className="pt-2 border-t border-border/50 text-primary font-medium">
                        Консультации по телефону 24/7
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>

          <AnimatedSection delay={0.6}>
            <Card className="mt-6 border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden">
              <CardContent className="p-0">
                <div className="p-5 border-b border-border/50">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon name="MapPin" className="text-primary" size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold text-base">Производственная база</h3>
                      <p className="text-sm text-muted-foreground">г. Нижний Новгород, Восточный проезд, 11/1</p>
                    </div>
                  </div>
                </div>
                <div className="w-full h-80">
                  <iframe
                    src="https://yandex.ru/map-widget/v1/?ll=43.914851%2C56.253544&amp;z=17&amp;pt=43.914851%2C56.253544%2Cpm2rdm"
                    width="100%"
                    height="320"
                    frameBorder="0"
                    title="Карта проезда"
                    className="w-full h-full"
                  />
                </div>
                <div className="p-4 bg-muted/20 border-t border-border/50">
                  <div className="grid grid-cols-2 gap-3">
                    <a 
                      href="https://yandex.ru/maps/?rtext=~56.253544,43.914851" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Button variant="outline" className="w-full">
                        <Icon name="Navigation" size={18} className="mr-2" />
                        Яндекс.Карты
                      </Button>
                    </a>
                    <a 
                      href="https://www.google.com/maps/dir/?api=1&destination=56.253544,43.914851" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Button variant="outline" className="w-full">
                        <Icon name="MapPin" size={18} className="mr-2" />
                        Google Maps
                      </Button>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default ServicesSection;
import { useState } from 'react';
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
      <section id="services" className="py-12 px-4 bg-gradient-to-b from-background via-muted/10 to-muted/30 relative overflow-hidden">
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

      <section className="py-12 px-4 bg-gradient-to-b from-muted/5 via-muted/10 to-muted/5">
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

          <div className="grid lg:grid-cols-2 gap-6">
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
                        <span className="text-sm">Восстановление изношенных шлицов методом наплавки и механической обработки на станках с ЧПУ</span>
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
            <Card className="mt-6 border-border/50 bg-card/50 backdrop-blur-sm">
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

      <section id="faq" className="py-12 px-4 bg-gradient-to-b from-muted/20 via-muted/10 to-background">
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection>
            <div className="text-center mb-10">
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

      <section id="turnkey" className="py-12 px-4 bg-gradient-to-b from-background via-muted/5 to-muted/20">
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
                items: ['Наплавка шлицов', 'Обработка на ЧПУ', 'Термообработка']
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
                    <div className="text-2xl font-bold text-primary mb-1">2 дня</div>
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

      <section id="guarantees" className="py-12 px-4 bg-gradient-to-b from-muted/20 via-muted/10 to-background">
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
                description: 'Наплавка шлицов, механическая обработка на ЧПУ, термообработка, балансировка.'
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

      <section id="gallery" className="py-24 px-4 bg-muted/20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-6">
              <span className="text-sm font-semibold text-primary uppercase tracking-wide">Портфолио</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Наши работы</h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">Примеры восстановленных шлицевых соединений с высокоточной обработкой на станках с ЧПУ и термообработкой</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="group overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 cursor-pointer h-full flex flex-col"
                  onClick={() => setSelectedImage('https://cdn.poehali.dev/files/afd05d83-5c3a-44b5-b7e1-d3ae38464a3d.jpg')}>
              <div className="relative overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/files/afd05d83-5c3a-44b5-b7e1-d3ae38464a3d.jpg"
                  alt="Восстановленные шлицевые детали"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-2 text-white">
                      <Icon name="ZoomIn" size={20} />
                      <span className="text-sm font-semibold">Увеличить</span>
                    </div>
                  </div>
                </div>
              </div>
              <CardContent className="pt-4 flex-1 flex flex-col">
                <h3 className="font-bold text-lg mb-2">Восстановленные детали трансмиссии</h3>
                <p className="text-sm text-muted-foreground flex-1">Шлицевые соединения после механической обработки и термообработки</p>
              </CardContent>
            </Card>

            <Card className="group overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 cursor-pointer h-full flex flex-col"
                  onClick={() => setSelectedImage('https://cdn.poehali.dev/files/64672975-4dd9-45b5-91f5-5d17f9a3a5d2.jpg')}>
              <div className="relative overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/files/64672975-4dd9-45b5-91f5-5d17f9a3a5d2.jpg"
                  alt="До и после восстановления"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-primary text-primary-foreground shadow-lg">До / После</Badge>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-2 text-white">
                      <Icon name="ZoomIn" size={20} />
                      <span className="text-sm font-semibold">Увеличить</span>
                    </div>
                  </div>
                </div>
              </div>
              <CardContent className="pt-4 flex-1 flex flex-col">
                <h3 className="font-bold text-lg mb-2">Сравнение: изношенная и восстановленная деталь</h3>
                <p className="text-sm text-muted-foreground flex-1">Наглядная демонстрация качества восстановления шлицов</p>
              </CardContent>
            </Card>

            <Card className="group overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 cursor-pointer h-full flex flex-col"
                  onClick={() => setSelectedImage('https://cdn.poehali.dev/files/a0f934cd-d8de-4ab1-8b44-67a3a4433a84.jpeg')}>
              <div className="relative overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/files/a0f934cd-d8de-4ab1-8b44-67a3a4433a84.jpeg"
                  alt="Восстановление дифференциала"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-2 text-white">
                      <Icon name="ZoomIn" size={20} />
                      <span className="text-sm font-semibold">Увеличить</span>
                    </div>
                  </div>
                </div>
              </div>
              <CardContent className="pt-4 flex-1 flex flex-col">
                <h3 className="font-bold text-lg mb-2">Восстановленный дифференциал и вал раздатки</h3>
                <p className="text-sm text-muted-foreground flex-1">Восстановленные детали до заводского состояния</p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 space-y-8">
            <Card className="border-primary/30 bg-gradient-to-r from-primary/5 to-accent/5 backdrop-blur-sm">
              <CardHeader className="text-center">
                <CardTitle className="flex items-center justify-center gap-3 text-2xl">
                  <Icon name="Video" className="text-primary" size={28} />
                  Видео наших работ
                </CardTitle>
                <CardDescription className="text-base">
                  Процесс восстановления шлицевых соединений на нашем производстве
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video rounded-xl overflow-hidden bg-black/5">
                  <iframe
                    src="https://rutube.ru/play/embed/a2c345d99a6b40181efac28a33770cb9/"
                    frameBorder="0"
                    allow="clipboard-write; autoplay"
                    allowFullScreen
                    className="w-full h-full"
                    title="Видео работ по восстановлению шлицевых соединений"
                  />
                </div>
                <div className="mt-6 text-center">
                  <a 
                    href="https://rutube.ru/channel/35843934/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-colors font-semibold"
                  >
                    <Icon name="ExternalLink" size={20} />
                    Больше видео на RuTube
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/30 bg-gradient-to-r from-primary/5 to-accent/5 backdrop-blur-sm">
              <CardContent className="py-8 px-6">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Icon name="Camera" className="text-primary" size={32} />
                  </div>
                  <div className="text-center md:text-left flex-1">
                    <h3 className="text-xl font-bold mb-2">Фотоотчёт каждого заказа</h3>
                    <p className="text-muted-foreground">
                      Документируем все этапы восстановления: от получения детали до финального контроля качества
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-24 px-4 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-6">
              <span className="text-sm font-semibold text-primary uppercase tracking-wide">Контакты</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Узнайте точную стоимость</h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">Цена зависит от восстанавливаемой детали. Бесплатная консультация и расчёт.</p>
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
                    <a href="tel:+79202520352" className="text-primary hover:underline text-lg font-medium">+7 (920) 252-03-52</a>
                    <div className="text-sm text-muted-foreground mt-1">Технические консультации 24/7</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" className="text-primary" size={22} />
                  </div>
                  <div>
                    <div className="font-semibold text-lg mb-1">Адрес</div>
                    <div className="text-muted-foreground">г. Нижний Новгород,<br />Восточный проезд, 11/1</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="Clock" className="text-primary" size={22} />
                  </div>
                  <div>
                    <div className="font-semibold text-lg mb-1">Режим работы</div>
                    <div className="text-muted-foreground">Пн-Пт: 9:30 - 17:30</div>
                    <div className="text-muted-foreground">Сб-Вс: Выходной</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" className="text-primary" size={22} />
                  </div>
                  <div>
                    <div className="font-semibold text-lg mb-1">Email</div>
                    <a href="mailto:megashlic@yandex.ru" className="text-primary hover:underline font-medium">
                      megashlic@yandex.ru
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="lg:col-span-3 border-border/50 bg-gradient-to-br from-card/50 to-primary/5 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl">Получить расчёт стоимости</CardTitle>
                <CardDescription className="text-base">Отправьте запрос — мы рассчитаем стоимость и сроки восстановления</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={(e) => {
                  e.preventDefault();
                  setIsSubmitting(true);
                  
                  // Формируем сообщение для отправки
                  const message = `Новая заявка с сайта:\n\nИмя: ${formData.name}\nТелефон: ${formData.phone}\nАвтомобиль: ${formData.car}\nСообщение: ${formData.message}`;
                  
                  // Отправляем в Telegram через WhatsApp (можно заменить на email или Telegram Bot)
                  const phoneNumber = '79202520352';
                  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                  
                  // Открываем WhatsApp
                  window.open(whatsappUrl, '_blank');
                  
                  // Показываем успех
                  setSubmitStatus('success');
                  setIsSubmitting(false);
                  
                  // Очищаем форму
                  setFormData({ name: '', phone: '', car: '', message: '' });
                  
                  // Сбрасываем статус через 5 секунд
                  setTimeout(() => setSubmitStatus('idle'), 5000);
                }} className="space-y-5">
                  {submitStatus === 'success' && (
                    <div className="flex items-center gap-3 p-4 bg-primary/10 border border-primary/30 rounded-xl">
                      <Icon name="CheckCircle" className="text-primary" size={20} />
                      <p className="text-sm text-primary font-semibold">Спасибо! Ваша заявка отправлена. Мы свяжемся с вами в ближайшее время.</p>
                    </div>
                  )}
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="text-sm font-semibold mb-2 block">Ваше имя *</label>
                      <input 
                        type="text" 
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full px-4 py-3 border border-input rounded-xl focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                        placeholder="Иван Иванов"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-semibold mb-2 block">Телефон *</label>
                      <input 
                        type="tel" 
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full px-4 py-3 border border-input rounded-xl focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                        placeholder="+7 (___) ___-__-__"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-semibold mb-2 block">Автомобиль / деталь *</label>
                    <input 
                      type="text" 
                      required
                      value={formData.car}
                      onChange={(e) => setFormData({...formData, car: e.target.value})}
                      className="w-full px-4 py-3 border border-input rounded-xl focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                      placeholder="Volkswagen Tiguan I (5N)"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-semibold mb-2 block">Опишите задачу *</label>
                    <textarea 
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full px-4 py-3 border border-input rounded-xl focus:outline-none focus:ring-2 focus:ring-primary min-h-32 bg-background"
                      placeholder="Например: Ремонт шлицевых соединений. Комплексные услуги &quot;под ключ&quot;."
                    />
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-xl">
                    <Icon name="Clock" className="text-primary" size={20} />
                    <p className="text-sm text-muted-foreground">Ответим в рабочее время</p>
                  </div>
                  <Button type="submit" disabled={isSubmitting} className="w-full h-12 text-base" size="lg">
                    {isSubmitting ? (
                      <>
                        <Icon name="Loader2" size={20} className="mr-2 animate-spin" />
                        Отправка...
                      </>
                    ) : (
                      <>
                        <Icon name="Send" size={20} className="mr-2" />
                        Получить расчёт
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 max-w-6xl mx-auto">
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Icon name="MapPin" className="text-primary" size={28} />
                  Как нас найти
                </CardTitle>
                <CardDescription className="text-base">
                  г. Нижний Новгород, Восточный проезд, 11/1
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="w-full h-[450px]">
                  <iframe
                    src="https://yandex.ru/map-widget/v1/?ll=43.914851%2C56.253544&amp;z=17&amp;pt=43.914851%2C56.253544%2Cpm2rdm"
                    width="100%"
                    height="450"
                    frameBorder="0"
                    title="Карта проезда"
                    className="w-full h-full"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesSection;
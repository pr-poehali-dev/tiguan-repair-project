import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import AnimatedCounter from '@/components/AnimatedCounter';

interface HeroSectionProps {
  scrollToSection: (id: string) => void;
}

const HeroSection = ({ scrollToSection }: HeroSectionProps) => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section id="home" className="relative h-screen min-h-[700px] px-4 overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: 'url(https://cdn.poehali.dev/files/3ea564e1-504c-4086-937c-2ac7babaa779.jpg)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/40" />
      </div>

      <div className="container mx-auto relative z-10 h-full flex items-center">
        <div className="max-w-3xl space-y-6 py-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full backdrop-blur-sm border border-primary/20">
            <Icon name="Zap" className="text-primary" size={16} />
            <span className="text-sm font-bold text-primary uppercase tracking-wider">Ремонт за 1 день</span>
          </div>

          <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-foreground">
            <span className="text-primary">Volkswagen Tiguan I</span>
            <br />
            Ремонт полного привода под ключ
          </h1>

          <ul className="space-y-3 text-lg">
            <li className="flex items-center gap-3">
              <Icon name="Check" className="text-primary flex-shrink-0" size={20} />
              <span>Восстановление муфты Haldex</span>
            </li>
            <li className="flex items-center gap-3">
              <Icon name="Check" className="text-primary flex-shrink-0" size={20} />
              <span>Ремонт раздаточной коробки</span>
            </li>
            <li className="flex items-center gap-3">
              <Icon name="Check" className="text-primary flex-shrink-0" size={20} />
              <span>Восстановление шлицевых соединений</span>
            </li>
            <li className="flex items-center gap-3">
              <Icon name="Check" className="text-primary flex-shrink-0" size={20} />
              <span>Диагностика системы 4Motion</span>
            </li>
          </ul>
          
          <div className="flex flex-wrap gap-3 pt-4">
            <div className="flex items-center gap-2 px-5 py-2.5 bg-background/90 backdrop-blur rounded-lg border border-border/50 shadow-sm">
              <Icon name="Clock" className="text-primary" size={20} />
              <span className="font-semibold">Ремонт за 1 день</span>
            </div>
            <div className="flex items-center gap-2 px-5 py-2.5 bg-background/90 backdrop-blur rounded-lg border border-border/50 shadow-sm">
              <Icon name="Award" className="text-primary" size={20} />
              <span className="font-semibold">12 месяцев гарантии</span>
            </div>
            <div className="flex items-center gap-2 px-5 py-2.5 bg-background/90 backdrop-blur rounded-lg border border-border/50 shadow-sm">
              <Icon name="Gauge" className="text-primary" size={20} />
              <span className="font-semibold">Без ограничения пробега</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 pt-6">
            <Button 
              size="lg" 
              className="h-12 px-8 text-base shadow-lg hover:shadow-xl transition-all" 
              onClick={() => scrollToSection('services')}
            >
              <Icon name="ArrowRight" size={20} className="mr-2" />
              Подробнее о технологиях
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="h-12 px-8 text-base bg-background/90 backdrop-blur hover:bg-background transition-colors" 
              onClick={() => scrollToSection('contacts')}
            >
              <Icon name="Phone" size={20} className="mr-2" />
              Консультация
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-8 pt-10">
            {[
              { value: 15, suffix: '+', label: 'лет опыта', decimal: false },
              { value: 100, suffix: '+', label: 'узлов восстановлено', decimal: false },
              { value: 99.2, suffix: '%', label: 'успешных работ', decimal: true }
            ].map((stat, index) => (
              <div key={index} className="bg-background/80 backdrop-blur rounded-lg p-4 border border-border/50">
                <div className="text-4xl font-bold text-primary mb-1">
                    <AnimatedCounter 
                      end={stat.value} 
                      suffix={stat.suffix}
                      decimal={stat.decimal}
                      duration={2.5}
                    />
                </div>
                <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
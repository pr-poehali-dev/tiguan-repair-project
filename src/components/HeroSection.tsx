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
    <section id="home" className="relative min-h-[600px] px-4 overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: 'url(https://cdn.poehali.dev/files/3ea564e1-504c-4086-937c-2ac7babaa779.jpg)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/40" />
      </div>

      <div className="container mx-auto relative z-10 h-full flex items-center">
        <div className="max-w-2xl space-y-4 py-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 rounded-full backdrop-blur-sm border border-primary/20">
            <Icon name="Zap" className="text-primary" size={14} />
            <span className="text-xs font-bold text-primary uppercase tracking-wider">Ремонт за 1 день</span>
          </div>

          <h1 className="text-3xl lg:text-5xl font-bold leading-tight text-foreground">
            <span className="text-primary">Volkswagen Tiguan I</span>
            <br />
            Ремонт полного привода под ключ
          </h1>

          <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-base">
            <div className="flex items-center gap-2">
              <Icon name="Check" className="text-primary flex-shrink-0" size={18} />
              <span>Восстановление муфты Haldex</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Check" className="text-primary flex-shrink-0" size={18} />
              <span>Восстановление шлицевых соединений</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Check" className="text-primary flex-shrink-0" size={18} />
              <span>Диагностика системы 4Motion</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Check" className="text-primary flex-shrink-0" size={18} />
              <span>Ремонт раздаточной коробки</span>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2 pt-2">
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-background/90 backdrop-blur rounded-lg border border-border/50 text-sm">
              <Icon name="Clock" className="text-primary" size={16} />
              <span className="font-semibold">Ремонт за 1 день</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-background/90 backdrop-blur rounded-lg border border-border/50 text-sm">
              <Icon name="Award" className="text-primary" size={16} />
              <span className="font-semibold">12 месяцев гарантии</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-background/90 backdrop-blur rounded-lg border border-border/50 text-sm">
              <Icon name="Gauge" className="text-primary" size={16} />
              <span className="font-semibold">Без ограничения пробега</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 pt-4">
            <Button 
              size="default" 
              className="h-10 px-5 text-sm shadow-lg hover:shadow-xl transition-all" 
              onClick={() => scrollToSection('services')}
            >
              <Icon name="ArrowRight" size={18} className="mr-2" />
              Подробнее о технологиях
            </Button>
            <Button 
              size="default" 
              variant="outline" 
              className="h-10 px-5 text-sm bg-background/90 backdrop-blur hover:bg-background transition-colors" 
              onClick={() => scrollToSection('contacts')}
            >
              <Icon name="Phone" size={18} className="mr-2" />
              Консультация
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-4 pt-6">
            {[
              { value: 15, suffix: '+', label: 'лет опыта', decimal: false },
              { value: 100, suffix: '+', label: 'узлов восстановлено', decimal: false },
              { value: 99.2, suffix: '%', label: 'успешных работ', decimal: true }
            ].map((stat, index) => (
              <div key={index} className="bg-background/80 backdrop-blur rounded-lg p-3 border border-border/50">
                <div className="text-2xl lg:text-3xl font-bold text-primary mb-0.5">
                    <AnimatedCounter 
                      end={stat.value} 
                      suffix={stat.suffix}
                      decimal={stat.decimal}
                      duration={2.5}
                    />
                </div>
                <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
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
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
    <section id="home" className="relative pt-24 pb-12 px-4 overflow-hidden">
      <motion.div 
        className="absolute inset-0 bg-muted/30"
        style={{ y, opacity }}
      />

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 rounded-full backdrop-blur-sm border border-primary/20">
              <Icon name="Zap" className="text-primary" size={14} />
              <span className="text-xs font-bold text-primary uppercase tracking-wider">Ремонт за 1 день</span>
            </div>

            <h1 className="text-3xl lg:text-5xl font-bold leading-tight text-foreground">
              Ремонт полного привода
              <br />
              <span className="text-primary">
                Volkswagen Tiguan I под ключ
              </span>
            </h1>

            <p className="text-base text-muted-foreground leading-relaxed max-w-xl">
              Комплексное восстановление системы 4Motion: муфта Haldex, раздаточная коробка, шлицевые соединения. Стандартный ремонт — 1 день. Гарантия 12 месяцев.
            </p>
            
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2 px-3 py-2 bg-background/80 backdrop-blur rounded-lg border border-border/50">
                <Icon name="Clock" className="text-primary" size={16} />
                <span className="font-semibold">1 день</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 bg-background/80 backdrop-blur rounded-lg border border-border/50">
                <Icon name="Award" className="text-primary" size={16} />
                <span className="font-semibold">Гарантия 12 месяцев</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 bg-background/80 backdrop-blur rounded-lg border border-border/50">
                <Icon name="CheckCircle" className="text-primary" size={16} />
                <span className="font-semibold">Под ключ</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button 
                size="default" 
                className="h-10 px-5 text-sm shadow-sm hover:shadow-md transition-all" 
                onClick={() => scrollToSection('services')}
              >
                <Icon name="ArrowRight" size={20} className="mr-2" />
                Подробнее о технологиях
              </Button>
              <Button 
                size="default" 
                variant="outline" 
                className="h-10 px-5 text-sm hover:bg-muted transition-colors" 
                onClick={() => scrollToSection('contacts')}
              >
                <Icon name="Phone" size={20} className="mr-2" />
                Консультация
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border/50">
              {[
                { value: 15, suffix: '+', label: 'лет опыта', decimal: false },
                { value: 100, suffix: '+', label: 'узлов восстановлено', decimal: false },
                { value: 99.2, suffix: '%', label: 'успешных работ', decimal: true }
              ].map((stat, index) => (
                <div key={index}>
                  <div className="text-2xl lg:text-3xl font-bold text-primary mb-1">
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

          <div className="relative hidden lg:block">
            <div className="relative">
              <img 
                src="https://cdn.poehali.dev/files/3ea564e1-504c-4086-937c-2ac7babaa779.jpg"
                alt="Детали трансмиссии Volkswagen Tiguan"
                className="relative rounded-2xl shadow-lg w-full h-[400px] object-cover border border-border/50"
              />
              
              <div className="absolute bottom-4 left-4 right-4 bg-background/95 backdrop-blur-md p-4 rounded-xl border border-border/50 shadow-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Icon name="Car" className="text-primary" size={20} />
                  <span className="font-bold text-base">Эксперты по Volkswagen Tiguan I</span>
                </div>
                <p className="text-sm text-muted-foreground">Восстановление шлицевых соединений трансмиссии с гарантией</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
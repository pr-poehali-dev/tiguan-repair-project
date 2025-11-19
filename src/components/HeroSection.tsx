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
    <section id="home" className="relative pt-24 pb-16 px-4 overflow-hidden">
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10"
        style={{ y, opacity }}
      />
      
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full backdrop-blur-sm border border-primary/20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm font-medium text-primary">Производственная компания</span>
            </motion.div>

            <motion.h1 
              className="text-4xl lg:text-6xl font-bold leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <span className="bg-gradient-to-r from-foreground via-foreground/90 to-foreground/70 bg-clip-text text-transparent">
                Восстановление шлицевых соединений
              </span>
              <br />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Volkswagen Tiguan I
              </span>
            </motion.h1>

            <motion.p 
              className="text-lg text-muted-foreground leading-relaxed max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Специализируемся на ремонте полноприводной трансмиссии Tiguan первого поколения (5N). Полный цикл: диагностика, восстановление шлицов, термообработка, балансировка на станках с ЧПУ.
            </motion.p>

            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Button 
                size="lg" 
                className="h-12 px-6 text-base shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all hover:scale-105" 
                onClick={() => scrollToSection('services')}
              >
                <Icon name="ArrowRight" size={20} className="mr-2" />
                Подробнее о технологиях
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="h-12 px-6 text-base hover:scale-105 transition-all" 
                onClick={() => scrollToSection('contacts')}
              >
                <Icon name="Phone" size={20} className="mr-2" />
                Консультация
              </Button>
            </motion.div>

            <motion.div 
              className="grid grid-cols-3 gap-6 pt-8 border-t border-border/50"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              {[
                { value: 5, suffix: '+', label: 'лет опыта', decimal: false },
                { value: 100, suffix: '+', label: 'узлов восстановлено', decimal: false },
                { value: 99.2, suffix: '%', label: 'успешных работ', decimal: true }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative">
                    <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-primary via-primary/90 to-accent bg-clip-text text-transparent mb-1.5">
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
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div 
            className="relative hidden lg:block"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 to-accent/30 rounded-3xl blur-3xl opacity-50" />
            <div className="relative">
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-2xl animate-pulse" />
              <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-accent/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
              
              <motion.img 
                src="https://cdn.poehali.dev/files/3ea564e1-504c-4086-937c-2ac7babaa779.jpg"
                alt="Детали трансмиссии Volkswagen Tiguan"
                className="relative rounded-2xl shadow-2xl w-full h-[500px] object-cover border border-border/50"
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
              />
              
              <motion.div 
                className="absolute bottom-6 left-6 right-6 bg-background/95 backdrop-blur-md p-5 rounded-xl border border-border/50 shadow-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <Icon name="Car" className="text-primary" size={24} />
                  <span className="font-bold text-lg">Эксперты по Volkswagen Tiguan I</span>
                </div>
                <p className="text-sm text-muted-foreground">Восстановление шлицевых соединений трансмиссии с гарантией</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
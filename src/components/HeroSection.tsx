import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface HeroSectionProps {
  scrollToSection: (id: string) => void;
}

const HeroSection = ({ scrollToSection }: HeroSectionProps) => {
  return (
    <section id="home" className="relative pt-32 pb-24 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm font-medium text-primary">Производственная компания</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                Восстановление шлицевых соединений
              </span>
              <br />
              <span className="text-primary">Volkswagen Tiguan I</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
              Специализируемся на ремонте полноприводной трансмиссии Tiguan первого поколения (5N). Полный цикл: диагностика, восстановление шлицов, термообработка, балансировка на станках с ЧПУ.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="h-14 px-8 text-base" onClick={() => scrollToSection('services')}>
                <Icon name="ArrowRight" size={20} className="mr-2" />
                Подробнее о технологиях
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8 text-base" onClick={() => scrollToSection('contacts')}>
                <Icon name="Phone" size={20} className="mr-2" />
                Консультация
              </Button>
            </div>
            <div className="grid grid-cols-3 gap-8 pt-12 border-t">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">15+</div>
                <div className="text-sm font-medium text-muted-foreground uppercase tracking-wide">лет опыта</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">2100+</div>
                <div className="text-sm font-medium text-muted-foreground uppercase tracking-wide">узлов восстановлено</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">99.2%</div>
                <div className="text-sm font-medium text-muted-foreground uppercase tracking-wide">успешных работ</div>
              </div>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-3xl" />
            <div className="relative">
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
              <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-accent/10 rounded-full blur-2xl" />
              <img 
                src="https://cdn.poehali.dev/files/3ea564e1-504c-4086-937c-2ac7babaa779.jpg"
                alt="Детали трансмиссии Volkswagen Tiguan"
                className="relative rounded-2xl shadow-2xl w-full h-[600px] object-cover border border-border/50"
              />
              <div className="absolute bottom-8 left-8 right-8 bg-background/95 backdrop-blur-sm p-6 rounded-xl border border-border shadow-xl">
                <div className="flex items-center gap-3 mb-3">
                  <Icon name="Car" className="text-primary" size={24} />
                  <span className="font-bold text-lg">Эксперты по Volkswagen Tiguan I</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Восстановление приводных валов и шлицевых соединений с гарантией 18 месяцев
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
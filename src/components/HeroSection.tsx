import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface HeroSectionProps {
  scrollToSection: (id: string) => void;
}

const HeroSection = ({ scrollToSection }: HeroSectionProps) => {
  return (
    <section id="home" className="pt-32 pb-20 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Эксперты по восстановлению шлицевых соединений</Badge>
            <h1 className="md:text-6xl leading-tight text-[#000000] font-semibold text-4xl">Мега Шлиц — восстановление шлицов приводных валов</h1>
            <p className="text-lg text-muted-foreground">Специализируемся на профессиональном восстановлении шлицевых соединений трансмиссии. Собственное производство, современное оборудование, гарантия качества 12 месяцев.</p>
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
                <div className="text-3xl font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground">лет в отрасли</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">2000+</div>
                <div className="text-sm text-muted-foreground">восстановленных узлов</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">99%</div>
                <div className="text-sm text-muted-foreground">успешных ремонтов</div>
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
  );
};

export default HeroSection;
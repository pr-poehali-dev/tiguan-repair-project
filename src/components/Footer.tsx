import Icon from '@/components/ui/icon';

interface FooterProps {
  scrollToSection: (id: string) => void;
}

const Footer = ({ scrollToSection }: FooterProps) => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Icon name="Wrench" size={24} />
              <span className="text-lg font-bold">VW Tiguan Сервис</span>
            </div>
            <p className="text-secondary-foreground/80 text-sm">
              Профессиональный ремонт и обслуживание Volkswagen Tiguan с гарантией качества
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-4">Быстрые ссылки</h3>
            <div className="space-y-2 text-sm">
              <div><button onClick={() => scrollToSection('services')} className="hover:underline">Услуги</button></div>
              <div><button onClick={() => scrollToSection('portfolio')} className="hover:underline">Портфолио</button></div>
              <div><button onClick={() => scrollToSection('guarantees')} className="hover:underline">Гарантии</button></div>
              <div><button onClick={() => scrollToSection('contacts')} className="hover:underline">Контакты</button></div>
            </div>
          </div>
          <div>
            <h3 className="font-bold mb-4">Контакты</h3>
            <div className="space-y-2 text-sm text-secondary-foreground/80">
              <div>+7 (900) 123-45-67</div>
              <div>info@vw-tiguan-service.ru</div>
              <div>г. Москва, ул. Автомобильная, 15</div>
            </div>
          </div>
        </div>
        <div className="border-t border-secondary-foreground/20 pt-8 text-center text-sm text-secondary-foreground/60">
          <p>© 2024 VW Tiguan Сервис. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
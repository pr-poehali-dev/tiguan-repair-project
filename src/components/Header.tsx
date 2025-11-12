import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface HeaderProps {
  activeSection: string;
  scrollToSection: (id: string) => void;
}

const Header = ({ activeSection, scrollToSection }: HeaderProps) => {
  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-border z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Icon name="Cog" className="text-primary" size={28} />
            <span className="text-xl font-bold text-secondary">Мега Шлиц</span>
          </div>
          <div className="hidden md:flex space-x-1">
            {['home', 'services', 'portfolio', 'guarantees', 'contacts'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeSection === section
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
              >
                {section === 'home' && 'Главная'}
                {section === 'services' && 'Услуги'}
                {section === 'portfolio' && 'Портфолио'}
                {section === 'guarantees' && 'Гарантии'}
                {section === 'contacts' && 'Контакты'}
              </button>
            ))}
          </div>
          <Button className="hidden md:flex">
            <Icon name="Phone" size={18} className="mr-2" />
            Позвонить
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
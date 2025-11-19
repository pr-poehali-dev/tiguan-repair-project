import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import MobileMenu from '@/components/MobileMenu';

interface HeaderProps {
  activeSection: string;
  scrollToSection: (id: string) => void;
}

const Header = ({ activeSection, scrollToSection }: HeaderProps) => {
  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border/50 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <button onClick={() => scrollToSection('home')} className="flex items-center space-x-3 group">
            <img 
              src="https://cdn.poehali.dev/files/ee0a5ef4-bf03-4f3d-9cca-0715c95a466c.jpg"
              alt="Мега Шлиц"
              className="h-14 w-auto object-contain"
            />
            <div className="flex flex-col items-start">
              <span className="text-xl font-bold text-foreground">Мега Шлиц<sup className="text-xs ml-0.5">®</sup></span>
              <span className="text-xs text-muted-foreground hidden sm:block">Эксперты по VW Tiguan I</span>
            </div>
          </button>
          <div className="hidden lg:flex items-center space-x-2">
            {['home', 'services', 'turnkey', 'guarantees', 'faq', 'contacts'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                  activeSection === section
                    ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/30'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                }`}
              >
                {section === 'home' && 'Главная'}
                {section === 'services' && 'Технологии'}
                {section === 'turnkey' && 'Под ключ'}
                {section === 'guarantees' && 'Порядок работ'}
                {section === 'faq' && 'Вопросы'}
                {section === 'contacts' && 'Контакты'}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <a href="tel:+79202520352" className="hidden md:block">
              <Button className="h-11 px-6 shadow-lg">
                <Icon name="Phone" size={18} className="mr-2" />
                +7 (920) 252-03-52
              </Button>
            </a>
            <MobileMenu activeSection={activeSection} scrollToSection={scrollToSection} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
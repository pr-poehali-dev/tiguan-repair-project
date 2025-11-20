import { useState } from 'react';
import Icon from '@/components/ui/icon';

interface MobileMenuProps {
  activeSection: string;
  scrollToSection: (id: string) => void;
}

const MobileMenu = ({ activeSection, scrollToSection }: MobileMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (section: string) => {
    scrollToSection(section);
    setIsOpen(false);
  };

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-foreground hover:bg-muted/50 rounded-lg transition-colors"
        aria-label="Меню"
      >
        {isOpen ? (
          <Icon name="X" size={28} />
        ) : (
          <Icon name="Menu" size={28} />
        )}
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-40"
            onClick={() => setIsOpen(false)}
          />
          <div className="fixed top-20 left-0 right-0 bg-background border-b border-border shadow-2xl z-50 max-h-[calc(100vh-5rem)] overflow-y-auto">
            <div className="container mx-auto px-4 py-6">
              <div className="flex flex-col space-y-2">
                {['home', 'gallery', 'services', 'patents', 'warranty', 'faq', 'guarantees', 'contacts'].map((section) => (
                  <button
                    key={section}
                    onClick={() => handleNavClick(section)}
                    className={`px-5 py-3 rounded-xl text-base font-semibold transition-all text-left ${
                      activeSection === section
                        ? 'bg-primary text-primary-foreground'
                        : 'text-foreground hover:bg-muted/50'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      {section === 'home' && <><Icon name="Home" size={18} />Главная</>}
                      {section === 'gallery' && <><Icon name="Image" size={18} />Галерея</>}
                      {section === 'services' && <><Icon name="Wrench" size={18} />Услуги</>}
                      {section === 'patents' && <><Icon name="Award" size={18} />Патенты</>}
                      {section === 'warranty' && <><Icon name="ShieldCheck" size={18} />Гарантия</>}
                      {section === 'faq' && <><Icon name="HelpCircle" size={18} />FAQ</>}
                      {section === 'guarantees' && <><Icon name="ClipboardList" size={18} />Порядок работы</>}
                      {section === 'contacts' && <><Icon name="MapPin" size={18} />Контакты</>}
                    </span>
                  </button>
                ))}
                <a
                  href="tel:+79202520352"
                  className="flex items-center gap-2 px-5 py-3 bg-primary text-primary-foreground rounded-xl font-semibold mt-4"
                >
                  <Icon name="Phone" size={20} />
                  +7 (920) 252-03-52
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MobileMenu;
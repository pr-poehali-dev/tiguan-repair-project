import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import MobileMenu from '@/components/MobileMenu';

interface HeaderProps {
  activeSection: string;
  scrollToSection: (id: string) => void;
}

const Header = ({ activeSection, scrollToSection }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (window.scrollY / windowHeight) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ 
        y: 0,
        backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.98)' : 'rgba(255, 255, 255, 0.95)'
      }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className={`fixed top-0 w-full bg-background/98 backdrop-blur-md border-b z-50 transition-all duration-300 ${
        isScrolled 
          ? 'border-border/80 shadow-xl' 
          : 'border-border/50 shadow-lg'
      }`}
    >
      <div
        className="absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-200"
        style={{ width: `${scrollProgress}%` }}
      />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="flex items-center justify-between"
          animate={{ height: isScrolled ? '3.5rem' : '4.5rem' }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          <button 
            onClick={() => scrollToSection('home')} 
            className="flex items-center space-x-3 group transition-opacity hover:opacity-80"
          >
            <div className="relative">
              <motion.img 
                src="https://cdn.poehali.dev/files/ee0a5ef4-bf03-4f3d-9cca-0715c95a466c.jpg"
                alt="Мега Шлиц"
                className="w-auto object-contain relative z-10 rounded-lg"
                animate={{ height: isScrolled ? '2.5rem' : '3rem' }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <div className="flex flex-col items-start">
              <motion.span 
                className="font-bold text-foreground group-hover:text-primary transition-colors duration-200"
                animate={{ fontSize: isScrolled ? '1rem' : '1.125rem' }}
                transition={{ duration: 0.3 }}
              >
                Мега Шлиц<sup className="text-xs ml-0.5">®</sup>
              </motion.span>
              <motion.span 
                className="text-xs text-muted-foreground hidden sm:block group-hover:text-primary transition-colors duration-300"
                animate={{ opacity: isScrolled ? 0 : 1, height: isScrolled ? 0 : 'auto' }}
                transition={{ duration: 0.3 }}
              >
                Эксперты по VW Tiguan I
              </motion.span>
            </div>
          </button>
          <div className="hidden lg:flex items-center space-x-2">
            {['home', 'gallery', 'services', 'patents', 'warranty', 'faq', 'guarantees', 'contacts'].map((section, index) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`rounded-lg font-semibold transition-all relative ${
                  isScrolled ? 'px-3 py-1.5 text-xs' : 'px-4 py-2 text-sm'
                } ${
                  activeSection === section
                    ? 'bg-primary text-primary-foreground shadow-lg scale-105'
                    : 'text-foreground/60 hover:text-foreground hover:bg-muted/80 hover:scale-105'
                }`}
              >

                <span className="relative z-10 flex items-center gap-1.5">
                  {section === 'home' && <><Icon name="Home" size={14} />Главная</>}
                  {section === 'gallery' && <><Icon name="Image" size={14} />Галерея</>}
                  {section === 'services' && <><Icon name="Wrench" size={14} />Услуги</>}
                  {section === 'patents' && <><Icon name="Award" size={14} />Патенты</>}
                  {section === 'warranty' && <><Icon name="ShieldCheck" size={14} />Гарантия</>}
                  {section === 'faq' && <><Icon name="HelpCircle" size={14} />FAQ</>}
                  {section === 'guarantees' && <><Icon name="ClipboardList" size={14} />Порядок работы</>}
                  {section === 'contacts' && <><Icon name="MapPin" size={14} />Контакты</>}
                </span>
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <a 
              href="tel:+79202520352" 
              className="hidden md:block"
            >
                <Button className={`shadow-sm bg-primary hover:bg-primary/90 transition-colors ${
                  isScrolled ? 'h-9 px-3 text-xs' : 'h-10 px-4 text-sm'
                }`}>
                  <Icon name="Phone" size={16} className="mr-1.5" />
                  <span>+7 (920) 252-03-52</span>
              </Button>
            </a>
            <MobileMenu activeSection={activeSection} scrollToSection={scrollToSection} />
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Header;
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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
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
      className={`fixed top-0 w-full bg-gradient-to-r from-background/95 via-background/90 to-background/95 backdrop-blur-lg border-b z-50 transition-all duration-300 ${
        isScrolled 
          ? 'border-border/80 shadow-xl' 
          : 'border-border/50 shadow-lg'
      }`}
    >
      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5 pointer-events-none"
        animate={{ opacity: isScrolled ? 0.3 : 1 }}
        transition={{ duration: 0.3 }}
      />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="flex items-center justify-between"
          animate={{ height: isScrolled ? '3.5rem' : '4.5rem' }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          <motion.button 
            onClick={() => scrollToSection('home')} 
            className="flex items-center space-x-3 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 400 }}
          >
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <motion.img 
                src="https://cdn.poehali.dev/files/ee0a5ef4-bf03-4f3d-9cca-0715c95a466c.jpg"
                alt="Мега Шлиц"
                className="w-auto object-contain relative z-10 rounded-lg"
                animate={{ height: isScrolled ? '2.5rem' : '3rem' }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
            <div className="flex flex-col items-start">
              <motion.span 
                className="font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent group-hover:from-primary group-hover:to-accent transition-all duration-300"
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
          </motion.button>
          <div className="hidden lg:flex items-center space-x-2">
            {['home', 'services', 'patents', 'faq', 'turnkey', 'guarantees', 'gallery', 'contacts'].map((section, index) => (
              <motion.button
                key={section}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(section)}
                className={`rounded-xl text-xs font-semibold transition-all relative overflow-hidden ${
                  isScrolled ? 'px-3 py-1.5' : 'px-4 py-2'
                } ${
                  activeSection === section
                    ? 'bg-gradient-to-r from-primary to-primary/90 text-primary-foreground shadow-lg shadow-primary/30'
                    : 'text-muted-foreground hover:text-foreground hover:bg-gradient-to-r hover:from-muted/50 hover:to-muted/30'
                }`}
              >
                {activeSection === section && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute inset-0 bg-gradient-to-r from-primary to-accent"
                    style={{ borderRadius: '0.75rem' }}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">
                  {section === 'home' && 'Главная'}
                  {section === 'services' && 'Услуги'}
                  {section === 'patents' && 'Патенты'}
                  {section === 'faq' && 'FAQ'}
                  {section === 'turnkey' && 'Под ключ'}
                  {section === 'guarantees' && 'Порядок работы'}
                  {section === 'gallery' && 'Галерея'}
                  {section === 'contacts' && 'Контакты'}
                </span>
              </motion.button>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <motion.a 
              href="tel:+79202520352" 
              className="hidden md:block"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                animate={{ height: isScrolled ? '2.25rem' : '2.5rem' }}
                transition={{ duration: 0.3 }}
              >
                <Button className={`shadow-lg shadow-primary/20 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 ${
                  isScrolled ? 'h-9 px-3 text-xs' : 'h-10 px-4 text-sm'
                }`}>
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 3 }}
                >
                  <Icon name="Phone" size={16} className="mr-1.5" />
                </motion.div>
                <motion.span
                  animate={{ fontSize: isScrolled ? '0.75rem' : '0.875rem' }}
                  transition={{ duration: 0.3 }}
                >
                  +7 (920) 252-03-52
                </motion.span>
              </Button>
              </motion.div>
            </motion.a>
            <MobileMenu activeSection={activeSection} scrollToSection={scrollToSection} />
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Header;
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import MobileMenu from '@/components/MobileMenu';

interface HeaderProps {
  activeSection: string;
  scrollToSection: (id: string) => void;
}

const Header = ({ activeSection, scrollToSection }: HeaderProps) => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed top-0 w-full bg-gradient-to-r from-background/95 via-background/90 to-background/95 backdrop-blur-lg border-b border-border/50 z-50 shadow-lg"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5 pointer-events-none" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex items-center justify-between h-20">
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
              <img 
                src="https://cdn.poehali.dev/files/ee0a5ef4-bf03-4f3d-9cca-0715c95a466c.jpg"
                alt="Мега Шлиц"
                className="h-14 w-auto object-contain relative z-10 rounded-lg"
              />
            </motion.div>
            <div className="flex flex-col items-start">
              <span className="text-xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent group-hover:from-primary group-hover:to-accent transition-all duration-300">Мега Шлиц<sup className="text-xs ml-0.5">®</sup></span>
              <span className="text-xs text-muted-foreground hidden sm:block group-hover:text-primary transition-colors duration-300">Эксперты по VW Tiguan I</span>
            </div>
          </motion.button>
          <div className="hidden lg:flex items-center space-x-2">
            {['home', 'services', 'turnkey', 'guarantees', 'faq', 'contacts'].map((section, index) => (
              <motion.button
                key={section}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(section)}
                className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all relative overflow-hidden ${
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
                  {section === 'services' && 'Технологии'}
                  {section === 'turnkey' && 'Под ключ'}
                  {section === 'guarantees' && 'Порядок работ'}
                  {section === 'faq' && 'Вопросы'}
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
              <Button className="h-11 px-6 shadow-lg shadow-primary/20 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary hover:shadow-xl hover:shadow-primary/30 transition-all duration-300">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 3 }}
                >
                  <Icon name="Phone" size={18} className="mr-2" />
                </motion.div>
                +7 (920) 252-03-52
              </Button>
            </motion.a>
            <MobileMenu activeSection={activeSection} scrollToSection={scrollToSection} />
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Header;
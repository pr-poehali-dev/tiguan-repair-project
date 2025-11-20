import Icon from '@/components/ui/icon';
import VisitorCounter from '@/components/VisitorCounter';

interface FooterProps {
  scrollToSection: (id: string) => void;
}

const Footer = ({ scrollToSection }: FooterProps) => {
  return (
    <footer className="bg-black text-white py-3 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2">
            <img 
              src="https://cdn.poehali.dev/files/91564d46-9c4b-434e-9dcf-d231a1c4ff2d.jpg"
              alt="Мега Шлиц"
              className="h-6 w-auto object-contain rounded"
              style={{ background: 'transparent' }}
            />
            <span className="font-bold">Мега Шлиц<sup className="text-xs ml-0.5">®</sup></span>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-white/70">
            <a href="tel:+79202520352" className="hover:text-white transition-colors">+7 (920) 252-03-52</a>
            <span className="hidden md:inline">•</span>
            <a href="mailto:megashlic@yandex.ru" className="hover:text-white transition-colors">megashlic@yandex.ru</a>
            <span className="hidden md:inline">•</span>
            <span>г. Нижний Новгород</span>
          </div>
          
          <div className="flex items-center gap-3">
            <a 
              href="https://wa.me/79202520352" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 bg-green-600 hover:bg-green-700 rounded-lg transition-colors"
            >
              <Icon name="MessageCircle" size={14} />
              <span className="font-medium">WhatsApp</span>
            </a>
            <VisitorCounter />
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-3 pt-2 text-center text-xs text-white/50">
          © 2024 Мега Шлиц<sup className="text-xs">®</sup>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
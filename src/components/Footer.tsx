import Icon from '@/components/ui/icon';
import VisitorCounter from '@/components/VisitorCounter';

interface FooterProps {
  scrollToSection: (id: string) => void;
}

const Footer = ({ scrollToSection }: FooterProps) => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-6 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-4 mb-4">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <img 
                src="https://cdn.poehali.dev/files/91564d46-9c4b-434e-9dcf-d231a1c4ff2d.jpg"
                alt="Мега Шлиц"
                className="h-10 w-auto object-contain rounded-lg"
                style={{ background: 'transparent' }}
              />
              <span className="text-base font-bold">Мега Шлиц<sup className="text-xs ml-0.5">®</sup></span>
            </div>
            <p className="text-secondary-foreground/80 text-sm">
              Профессиональное восстановление и изготовление шлицевых соединений. Собственное производство.
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-3 text-sm">Быстрые ссылки</h3>
            <div className="space-y-1.5 text-xs">
              <div><button onClick={() => scrollToSection('services')} className="hover:underline">Услуги</button></div>
              <div><button onClick={() => scrollToSection('patents')} className="hover:underline">Патенты</button></div>
              <div><button onClick={() => scrollToSection('faq')} className="hover:underline">FAQ</button></div>
              <div><button onClick={() => scrollToSection('turnkey')} className="hover:underline">Под ключ</button></div>
              <div><button onClick={() => scrollToSection('guarantees')} className="hover:underline">Порядок работы</button></div>
              <div><button onClick={() => scrollToSection('gallery')} className="hover:underline">Галерея</button></div>
              <div><button onClick={() => scrollToSection('contacts')} className="hover:underline">Контакты</button></div>
            </div>
          </div>
          <div>
            <h3 className="font-bold mb-3 text-sm">Контакты</h3>
            <div className="space-y-1.5 text-xs text-secondary-foreground/80">
              <div>+7 (920) 252-03-52</div>
              <div>megashlic@yandex.ru</div>
              <div>г. Нижний Новгород, Восточный проезд, 11/1</div>
            </div>
          </div>
        </div>
        <div className="border-t border-secondary-foreground/20 pt-6 text-center text-xs text-secondary-foreground/60">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="order-2 md:order-1">© 2024 Мега Шлиц<sup className="text-xs">®</sup>. Все права защищены.</p>
            <div className="order-1 md:order-2">
              <VisitorCounter />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
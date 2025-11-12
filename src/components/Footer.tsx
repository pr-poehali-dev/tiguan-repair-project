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
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="https://cdn.poehali.dev/files/ee0a5ef4-bf03-4f3d-9cca-0715c95a466c.jpg"
                alt="Мега Шлиц"
                className="h-12 w-auto object-contain"
              />
              <span className="text-lg font-bold">Мега Шлиц</span>
            </div>
            <p className="text-secondary-foreground/80 text-sm">
              Профессиональное восстановление и изготовление шлицевых соединений. Собственное производство.
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-4">Быстрые ссылки</h3>
            <div className="space-y-2 text-sm">
              <div><button onClick={() => scrollToSection('services')} className="hover:underline">Технологии</button></div>
              <div><button onClick={() => scrollToSection('guarantees')} className="hover:underline">Преимущества</button></div>
              <div><button onClick={() => scrollToSection('faq')} className="hover:underline">Вопросы</button></div>
              <div><button onClick={() => scrollToSection('contacts')} className="hover:underline">Контакты</button></div>
            </div>
          </div>
          <div>
            <h3 className="font-bold mb-4">Контакты</h3>
            <div className="space-y-2 text-sm text-secondary-foreground/80">
              <div>+7 (920) 252-03-52</div>
              <div>megashlic@mail.ru</div>
              <div>г. Нижний Новгород, Восточный проезд, 11/1</div>
            </div>
          </div>
        </div>
        <div className="border-t border-secondary-foreground/20 pt-8 text-center text-sm text-secondary-foreground/60">
          <p>© 2024 Мега Шлиц. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import Icon from '@/components/ui/icon';

const WhatsAppButton = () => {
  const phoneNumber = '79001234567';
  const message = encodeURIComponent('Здравствуйте! Интересует восстановление шлицевых соединений Volkswagen Tiguan I.');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Написать в WhatsApp"
    >
      <div className="relative">
        <div className="absolute inset-0 bg-[#25D366] rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity animate-pulse" />
        <div className="relative w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
          <Icon name="MessageCircle" className="text-white" size={32} />
        </div>
      </div>
      <div className="absolute -top-12 right-0 bg-background/95 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap border border-border">
        <p className="text-sm font-semibold">Написать в WhatsApp</p>
      </div>
    </a>
  );
};

export default WhatsAppButton;

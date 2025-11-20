import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{ text: string; isBot: boolean }>>([
    { text: 'Здравствуйте! Я помогу вам с вопросами о восстановлении шлицов. Выберите интересующую тему:', isBot: true }
  ]);

  const quickAnswers = [
    {
      question: 'Стоимость работ',
      answer: 'Стоимость восстановления шлицевых соединений VW Tiguan I зависит от степени износа. Для точного расчёта позвоните нам: +7 (920) 252-03-52 или отправьте фото детали на megashlic@yandex.ru'
    },
    {
      question: 'Сроки ремонта',
      answer: 'Стандартный срок ремонта — 1 день. Комплексные работы могут потребовать больше времени в зависимости от степени износа.'
    },
    {
      question: 'Гарантия',
      answer: 'Предоставляем гарантию 12 месяцев без ограничения пробега на все восстановленные детали. Выдаём официальный гарантийный талон с печатью.'
    },
    {
      question: 'Доставка',
      answer: 'Работаем с СДЭК — доставка по всей России за 2-5 дней. Вы можете привезти детали лично или отправить через транспортную компанию.'
    }
  ];

  const handleQuickAnswer = (qa: { question: string; answer: string }) => {
    setMessages([
      ...messages,
      { text: qa.question, isBot: false },
      { text: qa.answer, isBot: true }
    ]);
  };

  const resetChat = () => {
    setMessages([
      { text: 'Здравствуйте! Я помогу вам с вопросами о восстановлении шлицов. Выберите интересующую тему:', isBot: true }
    ]);
  };

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-4 right-4 z-50 bg-primary text-primary-foreground p-4 rounded-full shadow-lg hover:bg-primary/90 transition-all hover:scale-110 flex items-center gap-2"
          aria-label="Открыть чат"
        >
          <Icon name="MessageCircle" size={28} />
          <span className="hidden sm:inline text-sm font-semibold pr-2">Есть вопросы?</span>
        </button>
      )}

      {isOpen && (
        <Card className="fixed bottom-4 right-4 z-50 w-[90vw] sm:w-96 shadow-2xl border-2 border-primary/20">
          <CardHeader className="bg-primary text-primary-foreground rounded-t-lg pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2 text-lg">
                <Icon name="MessageCircle" size={24} />
                Онлайн-консультант
              </CardTitle>
              <button
                onClick={() => setIsOpen(false)}
                className="hover:bg-primary-foreground/20 rounded-full p-1 transition-colors"
                aria-label="Закрыть чат"
              >
                <Icon name="X" size={20} />
              </button>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <div className="h-96 overflow-y-auto p-4 space-y-3 bg-muted/10">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div
                    className={`max-w-[80%] px-4 py-2 rounded-2xl ${
                      msg.isBot
                        ? 'bg-background border border-border text-foreground'
                        : 'bg-primary text-primary-foreground'
                    }`}
                  >
                    <p className="text-sm">{msg.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-4 border-t bg-background space-y-2">
              <div className="grid grid-cols-2 gap-2">
                {quickAnswers.map((qa, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    onClick={() => handleQuickAnswer(qa)}
                    className="text-xs h-auto py-2"
                  >
                    {qa.question}
                  </Button>
                ))}
              </div>
              <div className="flex gap-2 pt-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={resetChat}
                  className="flex-1"
                >
                  <Icon name="RotateCcw" size={16} className="mr-1" />
                  Начать заново
                </Button>
                <a href="tel:+79202520352" className="flex-1">
                  <Button size="sm" className="w-full">
                    <Icon name="Phone" size={16} className="mr-1" />
                    Позвонить
                  </Button>
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default ChatBot;
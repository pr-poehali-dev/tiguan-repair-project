import { useEffect, useState } from 'react';
import { Eye } from 'lucide-react';

const VisitorCounter = () => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    // Получаем текущее значение счетчика из localStorage
    const currentCount = parseInt(localStorage.getItem('visitorCount') || '0');
    
    // Проверяем, был ли уже визит в этой сессии
    const hasVisited = sessionStorage.getItem('hasVisited');
    
    if (!hasVisited) {
      // Увеличиваем счетчик только для новых посещений в сессии
      const newCount = currentCount + 1;
      localStorage.setItem('visitorCount', newCount.toString());
      sessionStorage.setItem('hasVisited', 'true');
      setCount(newCount);
    } else {
      setCount(currentCount);
    }
  }, []);

  return (
    <div className="fixed bottom-4 right-4 bg-background/95 backdrop-blur-sm border border-border rounded-lg px-4 py-2 shadow-lg flex items-center gap-2 z-50">
      <Eye size={18} className="text-primary" />
      <div className="flex flex-col">
        <span className="text-xs text-muted-foreground">Посещений</span>
        <span className="text-lg font-bold text-foreground">{count.toLocaleString('ru-RU')}</span>
      </div>
    </div>
  );
};

export default VisitorCounter;

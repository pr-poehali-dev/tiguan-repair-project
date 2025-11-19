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
    <div className="bg-secondary-foreground/10 backdrop-blur-sm border border-secondary-foreground/20 rounded-lg px-4 py-2 flex items-center gap-2">
      <Eye size={18} className="text-secondary-foreground" />
      <div className="flex flex-col">
        <span className="text-xs text-secondary-foreground/70">Посещений</span>
        <span className="text-lg font-bold text-secondary-foreground">{count.toLocaleString('ru-RU')}</span>
      </div>
    </div>
  );
};

export default VisitorCounter;
import { ReactNode } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
}

const AnimatedSection = ({ 
  children, 
  className = ''
}: AnimatedSectionProps) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};

export default AnimatedSection;
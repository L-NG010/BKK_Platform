// components/Card.tsx
import type { ReactNode } from 'react';

interface CardProps {
  title: string;
  value: string | number;
  description?: string;
  icon?: ReactNode;
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  valueClassName?: string;
}

export default function Card({
  title,
  value,
  description,
  icon,
  className = '',
  titleClassName = 'text-gray-500 text-sm font-medium',
  descriptionClassName = 'text-gray-400 text-xs mt-2',
  valueClassName = 'text-2xl font-bold mt-1'
}: CardProps) {
  return (
    <div className={`bg-white rounded-lg shadow p-6 ${className}`}>
      <div className="flex justify-between items-start">
        <div>
          <h3 className={titleClassName}>{title}</h3>
          <p className={valueClassName}>{value}</p>
        </div>
        {icon && <div className="p-2 bg-blue-100 rounded-md">{icon}</div>}
      </div>
      {description && (
        <p className={descriptionClassName}>{description}</p>
      )}
    </div>
  );
}

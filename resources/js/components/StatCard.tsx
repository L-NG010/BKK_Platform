import React from 'react';

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  icon: string;
  changePositive?: boolean;
}

const StatCard = ({
  title,
  value,
  change,
  icon,
  changePositive = true
}: StatCardProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-gray-500 text-sm">{title}</p>
          <p className="text-2xl font-bold mt-1">{value}</p>
          <p className={`${changePositive ? 'text-green-500' : 'text-red-500'} text-sm mt-2`}>
            {change}
          </p>
        </div>
        <span className="text-2xl">{icon}</span>
      </div>
    </div>
  );
};

export default StatCard;

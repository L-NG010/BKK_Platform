import React from 'react';

interface DistributionItem {
  label: string;
  percentage: string;
  color: string;
  change?: string;
}

const DistributionChart = () => {
  const distributionData: DistributionItem[] = [
    { label: 'Employed', percentage: '50%', color: 'bg-blue-500', change: '+16%' },
    { label: 'Higher Education', percentage: '23%', color: 'bg-purple-500' },
    { label: 'Entrepreneurs', percentage: '15%', color: 'bg-green-500' },
    { label: 'Other', percentage: '12%', color: 'bg-yellow-500' },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow h-full">
      <h2 className="text-xl font-semibold mb-4">Student Distribution</h2>
      <p className="text-gray-500 mb-6">Current status breakdown of all students</p>

      {distributionData.map((item, index) => (
        <div key={index} className="flex items-center justify-between mb-3">
          <div className="flex items-center">
            <div className={`w-3 h-3 ${item.color} rounded-full mr-2`}></div>
            <span>{item.label} {item.percentage}</span>
          </div>
          {item.change && <span className="text-green-500">{item.change}</span>}
        </div>
      ))}
    </div>
  );
};

export default DistributionChart;

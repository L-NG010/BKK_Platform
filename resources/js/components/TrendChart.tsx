import React from 'react';

interface TrendData {
  month: string;
  value: number;
}

const TrendsChart = () => {
  const trendData: TrendData[] = [
    { month: 'Jan', value: 48 },
    { month: 'Feb', value: 32 },
    { month: 'Mar', value: 40 },
    { month: 'Apr', value: 56 },
  ];

  const maxValue = Math.max(...trendData.map(item => item.value));

  return (
    <div className="bg-white p-6 rounded-lg shadow h-full">
      <h2 className="text-xl font-semibold mb-4">Monthly Trends</h2>
      <p className="text-gray-500 mb-6">Student status progression over the last 4 months</p>

      <div className="h-64 flex items-end space-x-4">
        {trendData.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <div
              className="w-12 bg-blue-500 rounded-t"
              style={{ height: `${(item.value / maxValue) * 100}%` }}
            ></div>
            <span className="mt-2 text-sm">{item.month}</span>
          </div>
        ))}
      </div>

      <div className="flex justify-between mt-4 text-sm text-gray-500">
        {[0, 150, 300, 450, 600].map((value, index) => (
          <span key={index}>{value}</span>
        ))}
      </div>
    </div>
  );
};

export default TrendsChart;

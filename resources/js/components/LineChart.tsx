// components/LineChart.tsx
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', Kerja: 400, Enterpreneur: 240, Kuliah: 240, 'Mencari Kerja': 180 },
  { name: 'Feb', Kerja: 300, Enterpreneur: 139, Kuliah: 221, 'Mencari Kerja': 250 },
  { name: 'Mar', Kerja: 200, Enterpreneur: 980, Kuliah: 229, 'Mencari Kerja': 150 },
  { name: 'Apr', Kerja: 278, Enterpreneur: 390, Kuliah: 200, 'Mencari Kerja': 200 },
  { name: 'Mei', Kerja: 189, Enterpreneur: 480, Kuliah: 218, 'Mencari Kerja': 180 },
  { name: 'Jun', Kerja: 239, Enterpreneur: 380, Kuliah: 250, 'Mencari Kerja': 220 },
  { name: 'Jul', Kerja: 349, Enterpreneur: 430, Kuliah: 210, 'Mencari Kerja': 190 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

interface LineChartProps {
  data?: any[];
  width?: number | string;
  height?: number | string;
}

const LineChartComponent: React.FC<LineChartProps> = ({
  data: customData,
  width = '100%',
  height = 300
}) => {
  const chartData = customData || data;
  
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <h3 className="text-gray-700 font-medium mb-4">Data Alumni Sekolah Per Bulan</h3>
      <ResponsiveContainer width={width} height={height}>
        <LineChart
          data={chartData}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Kerja" stroke={COLORS[0]} activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="Enterpreneur" stroke={COLORS[1]} />
          <Line type="monotone" dataKey="Kuliah" stroke={COLORS[2]} />
          <Line type="monotone" dataKey="Mencari Kerja" stroke={COLORS[3]} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineChartComponent;

import { useState } from 'react';

const NavigationButton = () => {
  const [activeTab, setActiveTab] = useState('Students');

  return (
    <div className="relative flex w-96 bg-white rounded-full border">
      {/* Active tab indicator */}
      <div
        className={`absolute h-full bg-[#0C1E3D] rounded-full shadow-sm transition-all duration-300 ${
          activeTab === 'Dashboard' ? 'left-1 w-1/2' : 'left-1/2 w-1/2'
        }`}
      />

      <button
        onClick={() => setActiveTab('Dashboard')}
        className={`relative z-10 flex-1 py-2 text-center transition-colors duration-300 hover:cursor-pointer ${
          activeTab === 'Dashboard' ? 'text-white font-medium' : 'text-gray-600'
        }`}
      >
        Dashboard
      </button>

      <button
        onClick={() => setActiveTab('Students')}
        className={`relative z-10 flex-1 py-2 text-center transition-colors duration-300 hover:cursor-pointer ${
          activeTab === 'Students' ? 'text-white font-medium' : 'text-gray-600'
        }`}
      >
        Students
      </button>
    </div>
  );
};

export default NavigationButton;

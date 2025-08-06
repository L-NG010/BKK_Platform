import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";
import Card from "../../Components/Card";
import { FiUsers, FiBriefcase, FiUserCheck, FiUserX } from "react-icons/fi";
import LineChartComponent from "../../Components/LineChart";
import NavigationButton from "../../Components/NavigationButton";

const Main = () => {
    // Data for doughnut chart
    const distributionData = [
        { name: "Bekerja", value: 62, color: "#3B82F6" },
        { name: "Wirausaha", value: 18, color: "#10B981" },
        { name: "Kuliah", value: 12, color: "#F59E0B" },
        { name: "Mencari Kerja", value: 8, color: "#EF4444" },
    ];

    return (
        <div className="min-h-screen bg-gray-50 p-6">
            {/* Centered Navigation */}
            <div className="flex justify-center mb-10">
                <NavigationButton />
            </div>

            {/* Card Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10 max-w-7xl mx-auto">
                <Card
                    title="Total Murid"
                    value="34"
                    description="Alumni yang masih aktif"
                    icon={<FiUsers className="text-blue-500" />}
                    className="bg-gradient-to-br from-[#141d2d] to-[#354156]"
                    titleClassName="text-white text-sm font-medium"
                    descriptionClassName="text-white text-xs mt-2"
                    valueClassName="text-white text-3xl font-bold mt-1"
                />
                <Card
                    title="Alumni Bekerja"
                    value="5,245"
                    description="Alumni yang sudah bekerja"
                    icon={<FiBriefcase className="text-green-500" />}
                />
                <Card
                    title="Belum Bekerja"
                    value="129"
                    description="Alumni yang belum bekerja"
                    icon={<FiUserX className="text-yellow-500" />}
                />
                <Card
                    title="Status Alumni"
                    value="4 Kategori"
                    description="Kerja, Wirausaha, Kuliah, Mencari kerja"
                    icon={<FiUserCheck className="text-purple-500" />}
                />
            </div>

            {/* Charts Row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-7xl mx-auto">
                {/* Line Chart (you can replace with your LineChartComponent) */}
                <LineChartComponent />

                {/* Doughnut Chart */}
                <div className="bg-white p-6 rounded-xl shadow">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">
                        Distribusi Alumni
                    </h3>
                    <div className="h-80">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={distributionData}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={60}
                                    outerRadius={80}
                                    paddingAngle={2}
                                    dataKey="value"
                                >
                                    {distributionData.map((entry, index) => (
                                        <Cell
                                            key={`cell-${index}`}
                                            fill={entry.color}
                                        />
                                    ))}
                                </Pie>
                                <Tooltip
                                    formatter={(value) => [
                                        `${value}%`,
                                        "Persentase",
                                    ]}
                                />
                                <Legend
                                    layout="vertical"
                                    verticalAlign="middle"
                                    align="right"
                                />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;

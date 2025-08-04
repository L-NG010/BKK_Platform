import Sidebar from '../components/Sidebar'
import { Head } from '@inertiajs/react'
import StatCard from '../components/StatCard'
import DistributionChart from '../components/DistributionChart'
import TrendsChart from '../components/TrendChart'

const Home = ({name, appName}) => {
  return (
    <div className="flex">

      {/* Main Content */}
      <div className="flex-1 p-6 bg-gray-50 min-h-screen">
        <Head title={`${appName} - Dashboard`}/>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Student Career Dashboard</h1>
          <p className="text-gray-600">Track and manage student employment status and career paths</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="Total Students"
            value="1,245"
            change="+5.2% from last month"
            icon="👥"
          />
          <StatCard
            title="Employed"
            value="623"
            change="+12.3% from last month"
            icon="💼"
          />
          <StatCard
            title="Higher Education"
            value="286"
            change="+8.1% from last month"
            icon="🎓"
          />
          <StatCard
            title="Entrepreneurs"
            value="187"
            change="+15.7% from last month"
            icon="🚀"
          />
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <DistributionChart />
          <TrendsChart />
        </div>
      </div>
    </div>
  )
}

export default Home

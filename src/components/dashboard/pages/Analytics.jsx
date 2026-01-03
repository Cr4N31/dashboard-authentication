import { useState } from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function Analytics() {
    const [ range, setRange ] = useState("week");
    const buttonStyles = "bg-black text-white p-2 hover:bg-gray-800 transition-all ease focus:outline-1 focus:outline-offset-1 focus:bg-white focus:outline-black focus:text-black";
    const chartData = [
        { label: "Last 3 Days", value: "3d", days: 3 },
        { label: "Last Week", value: "1w", days: 7 },
        { label: "Last Month", value: "1m", days: 30 },
        { label: "Last 3 Months", value: "3m", days: 90 },
        { label: "Last Year", value: "1y", days: 365 }
    ];

    const analyticsData = {
    "3d": [
      { name: "Day 1", users: 5, projects: 2, tasks: 10 },
      { name: "Day 2", users: 8, projects: 3, tasks: 7 },
      { name: "Day 3", users: 6, projects: 4, tasks: 12 },
    ],
    "1w": [
      { name: "Mon", users: 12, projects: 4, tasks: 18 },
      { name: "Tue", users: 9, projects: 3, tasks: 14 },
      { name: "Wed", users: 15, projects: 5, tasks: 20 },
      { name: "Thu", users: 11, projects: 4, tasks: 17 },
      { name: "Fri", users: 8, projects: 3, tasks: 12 },
      { name: "Sat", users: 10, projects: 2, tasks: 9 },
      { name: "Sun", users: 14, projects: 6, tasks: 22 },
    ],
    "1m": [
      { name: "Week 1", users: 40, projects: 15, tasks: 70 },
      { name: "Week 2", users: 35, projects: 12, tasks: 65 },
      { name: "Week 3", users: 50, projects: 18, tasks: 80 },
      { name: "Week 4", users: 45, projects: 16, tasks: 75 },
    ],
    "3m": [
      { name: "Month 1", users: 165, projects: 61, tasks: 290 },
      { name: "Month 2", users: 100, projects: 10, tasks: 65 },
      { name: "Month 3", users: 80, projects: 18, tasks: 80 },
    ],
    "1y": [
      { name: "Month 1", users: 165, projects: 61, tasks: 290 },
      { name: "Month 2", users: 100, projects: 10, tasks: 65 },
      { name: "Month 3", users: 80, projects: 18, tasks: 80 },
      { name: "Month 4", users: 365, projects: 101, tasks: 250 },
      { name: "Month 5", users: 200, projects: 20, tasks: 45 },
      { name: "Month 6", users: 180, projects: 30, tasks: 80 },
      { name: "Month 7", users: 165, projects: 61, tasks: 290 },
      { name: "Month 8", users: 150, projects: 10, tasks: 65 },
      { name: "Month 9", users: 80, projects: 18, tasks: 80 },
      { name: "Month 10", users: 165, projects: 61, tasks: 290 },
      { name: "Month 11", users: 100, projects: 10, tasks: 65 },
      { name: "Month 12", users: 80, projects: 18, tasks: 80 },
      
    ]
  };



    return(
        <div data-aos="fade-up">
            <h3 className="text-3xl font-bold">Analytics</h3>
            <div className='flex flex-row gap-4 mt-6'>
              {chartData.map(({ label, value }) => (
                    <button
                        key={value}
                        className={`${buttonStyles} ${range === value ? "ring-2 ring-white" : ""}`}
                        onClick={() => setRange(value)}
                    >
                        {label}
                    </button>
                ))}

            </div>

            <div className='mt-6'>
                <p className='font-semibold text-xl uppercase'>Showing analytics for {range}</p>
            </div>
            
            <ResponsiveContainer width="100%" height={300}>
                <BarChart
                    data={analyticsData[range]}
                    margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="users" fill="#070707ff" />
                    <Bar dataKey="projects" fill="#b3afafff" />
                    <Bar dataKey="tasks" fill="#44423fff" />
                </BarChart>
            </ResponsiveContainer>

        </div>
    )
}

export default Analytics
import React from 'react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Define interfaces for our data structures
interface SimulationDataPoint {
  day: number;
  strongRight?: number;
  mediumRight?: number;
  weakRight?: number;
  veryWeakRight?: number;
  strongLeft?: number;
  mediumLeft?: number;
  weakLeft?: number;
  veryWeakLeft?: number;
  strongCross?: number;
  mediumCross?: number;
  weakCross?: number;
  veryWeakCross?: number;
}

interface SimulationData {
  title: string;
  data: SimulationDataPoint[];
  readRate: string;
  revenue: string;
}

interface StrongLinksDataPoint {
  day: string;
  sim1Right: number;
  sim2Left: number;
  sim3Left: number;
  sim3Right: number;
  sim3Cross: number;
  sim4Left: number;
  sim4Right: number;
  sim4Cross: number;
  sim5Left: number;
  sim5Right: number;
  sim5Cross: number;
}

interface CrossLinksDataPoint {
  day: string;
  sim3Medium: number;
  sim3Weak: number;
  sim3VeryWeak: number;
  sim4Medium: number;
  sim4Weak: number;
  sim4VeryWeak: number;
  sim5Medium: number;
  sim5Weak: number;
  sim5VeryWeak: number;
}

interface SummaryDataPoint {
  name: string;
  readRate: number;
  revenue: number;
  description: string;
}

const HighExplorationViz = () => {
  // Process the data from the simulations
  const days = [0, 100, 200, 300, 400, 500];
  
  const simulationData: SimulationData[] = [
    // Simulation 1: 0 left, 30 right users
    {
      title: "Simulation 1: 0 Left, 30 Right Users",
      data: [
        { day: 0, strongRight: 0, mediumRight: 435, weakRight: 0, veryWeakRight: 0 },
        { day: 100, strongRight: 118, mediumRight: 304, weakRight: 8, veryWeakRight: 5 },
        { day: 200, strongRight: 111, mediumRight: 321, weakRight: 3, veryWeakRight: 0 },
        { day: 300, strongRight: 91, mediumRight: 344, weakRight: 0, veryWeakRight: 0 },
        { day: 400, strongRight: 81, mediumRight: 353, weakRight: 1, veryWeakRight: 0 },
        { day: 500, strongRight: 76, mediumRight: 359, weakRight: 0, veryWeakRight: 0 },
      ],
      readRate: "57.75%",
      revenue: "$4352.25"
    },
    
    // Simulation 2: 30 left, 0 right users
    {
      title: "Simulation 2: 30 Left, 0 Right Users",
      data: [
        { day: 0, strongLeft: 0, mediumLeft: 435, weakLeft: 0, veryWeakLeft: 0 },
        { day: 100, strongLeft: 128, mediumLeft: 297, weakLeft: 9, veryWeakLeft: 1 },
        { day: 200, strongLeft: 121, mediumLeft: 312, weakLeft: 2, veryWeakLeft: 0 },
        { day: 300, strongLeft: 107, mediumLeft: 326, weakLeft: 2, veryWeakLeft: 0 },
        { day: 400, strongLeft: 98, mediumLeft: 337, weakLeft: 0, veryWeakLeft: 0 },
        { day: 500, strongLeft: 79, mediumLeft: 356, weakLeft: 0, veryWeakLeft: 0 },
      ],
      readRate: "57.75%",
      revenue: "$4351.70"
    },
    
    // Simulation 3: 15 left, 15 right users
    {
      title: "Simulation 3: 15 Left, 15 Right Users",
      data: [
        { day: 0, 
          strongLeft: 0, mediumLeft: 105, weakLeft: 0, veryWeakLeft: 0,
          strongRight: 0, mediumRight: 105, weakRight: 0, veryWeakRight: 0,
          strongCross: 0, mediumCross: 225, weakCross: 0, veryWeakCross: 0
        },
        { day: 100, 
          strongLeft: 29, mediumLeft: 73, weakLeft: 3, veryWeakLeft: 0,
          strongRight: 30, mediumRight: 73, weakRight: 1, veryWeakRight: 1,
          strongCross: 1, mediumCross: 76, weakCross: 74, veryWeakCross: 74
        },
        { day: 200, 
          strongLeft: 36, mediumLeft: 69, weakLeft: 0, veryWeakLeft: 0,
          strongRight: 24, mediumRight: 81, weakRight: 0, veryWeakRight: 0,
          strongCross: 0, mediumCross: 55, weakCross: 106, veryWeakCross: 64
        },
        { day: 300, 
          strongLeft: 32, mediumLeft: 73, weakLeft: 0, veryWeakLeft: 0,
          strongRight: 20, mediumRight: 85, weakRight: 0, veryWeakRight: 0,
          strongCross: 0, mediumCross: 47, weakCross: 120, veryWeakCross: 58
        },
        { day: 400, 
          strongLeft: 31, mediumLeft: 74, weakLeft: 0, veryWeakLeft: 0,
          strongRight: 14, mediumRight: 91, weakRight: 0, veryWeakRight: 0,
          strongCross: 0, mediumCross: 38, weakCross: 128, veryWeakCross: 59
        },
        { day: 500, 
          strongLeft: 24, mediumLeft: 81, weakLeft: 0, veryWeakLeft: 0,
          strongRight: 17, mediumRight: 88, weakRight: 0, veryWeakRight: 0,
          strongCross: 0, mediumCross: 34, weakCross: 136, veryWeakCross: 55
        },
      ],
      readRate: "50.93%",
      revenue: "$3833.50"
    },
    
    // Simulation 4: 20 left, 30 right users
    {
      title: "Simulation 4: 20 Left, 30 Right Users",
      data: [
        { day: 0, 
          strongLeft: 0, mediumLeft: 190, weakLeft: 0, veryWeakLeft: 0,
          strongRight: 0, mediumRight: 435, weakRight: 0, veryWeakRight: 0,
          strongCross: 0, mediumCross: 600, weakCross: 0, veryWeakCross: 0
        },
        { day: 100, 
          strongLeft: 56, mediumLeft: 118, weakLeft: 11, veryWeakLeft: 5,
          strongRight: 133, mediumRight: 263, weakRight: 27, veryWeakRight: 12,
          strongCross: 2, mediumCross: 198, weakCross: 138, veryWeakCross: 262
        },
        { day: 200, 
          strongLeft: 52, mediumLeft: 136, weakLeft: 2, veryWeakLeft: 0,
          strongRight: 111, mediumRight: 312, weakRight: 7, veryWeakRight: 5,
          strongCross: 0, mediumCross: 185, weakCross: 178, veryWeakCross: 237
        },
        { day: 300, 
          strongLeft: 51, mediumLeft: 139, weakLeft: 0, veryWeakLeft: 0,
          strongRight: 102, mediumRight: 330, weakRight: 2, veryWeakRight: 1,
          strongCross: 0, mediumCross: 141, weakCross: 239, veryWeakCross: 220
        },
        { day: 400, 
          strongLeft: 40, mediumLeft: 150, weakLeft: 0, veryWeakLeft: 0,
          strongRight: 85, mediumRight: 348, weakRight: 2, veryWeakRight: 0,
          strongCross: 0, mediumCross: 130, weakCross: 263, veryWeakCross: 207
        },
        { day: 500, 
          strongLeft: 39, mediumLeft: 151, weakLeft: 0, veryWeakLeft: 0,
          strongRight: 80, mediumRight: 355, weakRight: 0, veryWeakRight: 0,
          strongCross: 0, mediumCross: 110, weakCross: 291, veryWeakCross: 199
        },
      ],
      readRate: "51.32%",
      revenue: "$6477.90"
    },
    
    // Simulation 5: 30 left, 20 right users
    {
      title: "Simulation 5: 30 Left, 20 Right Users",
      data: [
        { day: 0, 
          strongLeft: 0, mediumLeft: 435, weakLeft: 0, veryWeakLeft: 0,
          strongRight: 0, mediumRight: 190, weakRight: 0, veryWeakRight: 0,
          strongCross: 0, mediumCross: 600, weakCross: 0, veryWeakCross: 0
        },
        { day: 100, 
          strongLeft: 130, mediumLeft: 270, weakLeft: 24, veryWeakLeft: 11,
          strongRight: 55, mediumRight: 115, weakRight: 13, veryWeakRight: 7,
          strongCross: 4, mediumCross: 231, weakCross: 122, veryWeakCross: 243
        },
        { day: 200, 
          strongLeft: 117, mediumLeft: 310, weakLeft: 7, veryWeakLeft: 1,
          strongRight: 54, mediumRight: 130, weakRight: 5, veryWeakRight: 1,
          strongCross: 0, mediumCross: 195, weakCross: 185, veryWeakCross: 220
        },
        { day: 300, 
          strongLeft: 94, mediumLeft: 339, weakLeft: 2, veryWeakLeft: 0,
          strongRight: 49, mediumRight: 140, weakRight: 1, veryWeakRight: 0,
          strongCross: 0, mediumCross: 180, weakCross: 210, veryWeakCross: 210
        },
        { day: 400, 
          strongLeft: 111, mediumLeft: 322, weakLeft: 2, veryWeakLeft: 0,
          strongRight: 44, mediumRight: 146, weakRight: 0, veryWeakRight: 0,
          strongCross: 0, mediumCross: 147, weakCross: 264, veryWeakCross: 189
        },
        { day: 500, 
          strongLeft: 101, mediumLeft: 334, weakLeft: 0, veryWeakLeft: 0,
          strongRight: 39, mediumRight: 151, weakRight: 0, veryWeakRight: 0,
          strongCross: 0, mediumCross: 141, weakCross: 284, veryWeakCross: 175
        },
      ],
      readRate: "51.59%",
      revenue: "$6511.80"
    }
  ];

  // Format the data for the main visualization - Strong Links Evolution
  const strongLinksData: StrongLinksDataPoint[] = days.map(day => {
    const result = { day: `Day ${day}` } as StrongLinksDataPoint;
    
    // Simulation 1
    const sim1Data = simulationData[0].data.find(d => d.day === day);
    result.sim1Right = sim1Data?.strongRight || 0;
    
    // Simulation 2
    const sim2Data = simulationData[1].data.find(d => d.day === day);
    result.sim2Left = sim2Data?.strongLeft || 0;
    
    // Simulation 3
    const sim3Data = simulationData[2].data.find(d => d.day === day);
    result.sim3Left = sim3Data?.strongLeft || 0;
    result.sim3Right = sim3Data?.strongRight || 0;
    result.sim3Cross = sim3Data?.strongCross || 0;
    
    // Simulation 4
    const sim4Data = simulationData[3].data.find(d => d.day === day);
    result.sim4Left = sim4Data?.strongLeft || 0;
    result.sim4Right = sim4Data?.strongRight || 0;
    result.sim4Cross = sim4Data?.strongCross || 0;
    
    // Simulation 5
    const sim5Data = simulationData[4].data.find(d => d.day === day);
    result.sim5Left = sim5Data?.strongLeft || 0;
    result.sim5Right = sim5Data?.strongRight || 0;
    result.sim5Cross = sim5Data?.strongCross || 0;
    
    return result;
  });
  
  // Format the data for cross-links in mixed simulations
  const crossLinksComparisonData: CrossLinksDataPoint[] = days.map(day => {
    const sim3Data = simulationData[2].data.find(d => d.day === day);
    const sim4Data = simulationData[3].data.find(d => d.day === day);
    const sim5Data = simulationData[4].data.find(d => d.day === day);
    
    return {
      day: `Day ${day}`,
      // Sim 3 (15-15) cross links
      sim3Medium: sim3Data?.mediumCross || 0,
      sim3Weak: sim3Data?.weakCross || 0,
      sim3VeryWeak: sim3Data?.veryWeakCross || 0,
      // Sim 4 (20-30) cross links
      sim4Medium: sim4Data?.mediumCross || 0,
      sim4Weak: sim4Data?.weakCross || 0,
      sim4VeryWeak: sim4Data?.veryWeakCross || 0,
      // Sim 5 (30-20) cross links
      sim5Medium: sim5Data?.mediumCross || 0,
      sim5Weak: sim5Data?.weakCross || 0,
      sim5VeryWeak: sim5Data?.veryWeakCross || 0,
    };
  });
  
  // Format the summary data
  const summaryData: SummaryDataPoint[] = simulationData.map((sim, index) => ({
    name: `Sim ${index + 1}`,
    readRate: parseFloat(sim.readRate.replace('%', '')),
    revenue: parseFloat(sim.revenue.replace('$', '')),
    description: sim.title
  }));

  return (
    <div className="flex flex-col space-y-8">
      <div className="p-4 bg-gray-50 rounded-lg shadow">
        <h2 className="text-xl font-bold mb-4">Evolution of Strong Links Over Time (0.9 Exploration, 0.9 Diversity)</h2>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart 
            data={strongLinksData}
            margin={{ top: 20, right: 30, left: 20, bottom: 60 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis label={{ value: 'Number of Strong Links', angle: -90, position: 'insideLeft' }} />
            <Tooltip />
            <Legend />
            <Bar dataKey="sim1Right" name="Sim 1: Right-Right (0L-30R)" fill="#ff8884" />
            <Bar dataKey="sim2Left" name="Sim 2: Left-Left (30L-0R)" fill="#82ca9d" />
            <Bar dataKey="sim3Left" name="Sim 3: Left-Left (15L-15R)" fill="#8884d8" />
            <Bar dataKey="sim3Right" name="Sim 3: Right-Right (15L-15R)" fill="#ffc658" />
            <Bar dataKey="sim3Cross" name="Sim 3: Cross-Links (15L-15R)" fill="#a2a5fc" />
            <Bar dataKey="sim4Left" name="Sim 4: Left-Left (20L-30R)" fill="#a4de6c" />
            <Bar dataKey="sim4Right" name="Sim 4: Right-Right (20L-30R)" fill="#d88884" />
            <Bar dataKey="sim4Cross" name="Sim 4: Cross-Links (20L-30R)" fill="#82abca" />
            <Bar dataKey="sim5Left" name="Sim 5: Left-Left (30L-20R)" fill="#de9c6c" />
            <Bar dataKey="sim5Right" name="Sim 5: Right-Right (30L-20R)" fill="#8450d8" />
            <Bar dataKey="sim5Cross" name="Sim 5: Cross-Links (30L-20R)" fill="#5cd850" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      
      <div className="p-4 bg-gray-50 rounded-lg shadow">
        <h2 className="text-xl font-bold mb-4">Cross-Links Comparison: Different Mixed Population Ratios</h2>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart 
            data={crossLinksComparisonData}
            margin={{ top: 20, right: 30, left: 20, bottom: 60 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis label={{ value: 'Number of Cross-Ideological Links', angle: -90, position: 'insideLeft' }} />
            <Tooltip />
            <Legend />
            <Bar dataKey="sim3Medium" name="Sim 3 (15-15): Medium" fill="#82ca9d" />
            <Bar dataKey="sim3Weak" name="Sim 3 (15-15): Weak" fill="#ffc658" />
            <Bar dataKey="sim3VeryWeak" name="Sim 3 (15-15): Very Weak" fill="#ff8884" />
            <Bar dataKey="sim4Medium" name="Sim 4 (20-30): Medium" fill="#8884d8" />
            <Bar dataKey="sim4Weak" name="Sim 4 (20-30): Weak" fill="#a4de6c" />
            <Bar dataKey="sim4VeryWeak" name="Sim 4 (20-30): Very Weak" fill="#d88884" />
            <Bar dataKey="sim5Medium" name="Sim 5 (30-20): Medium" fill="#82abca" />
            <Bar dataKey="sim5Weak" name="Sim 5 (30-20): Weak" fill="#de9c6c" />
            <Bar dataKey="sim5VeryWeak" name="Sim 5 (30-20): Very Weak" fill="#8450d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      
      <div className="p-4 bg-gray-50 rounded-lg shadow">
        <h2 className="text-xl font-bold mb-4">Simulation Performance Summary</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border p-4 rounded-lg">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={summaryData} margin={{ top: 20, right: 30, left: 20, bottom: 60 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis label={{ value: 'Read Rate (%)', angle: -90, position: 'insideLeft' }} />
                <Tooltip formatter={(value: any) => [`${Number(value).toFixed(2)}%`, 'Read Rate']} />
                <Bar dataKey="readRate" name="Read Rate (%)" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="border p-4 rounded-lg">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={summaryData} margin={{ top: 20, right: 30, left: 20, bottom: 60 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis domain={[0, 7000]} label={{ value: 'Revenue ($)', angle: -90, position: 'insideLeft' }} />
                <Tooltip formatter={(value: any) => [`$${Number(value).toFixed(2)}`, 'Revenue']} />
                <Legend />
                <Line type="monotone" dataKey="revenue" name="Revenue ($)" stroke="#8884d8" strokeWidth={2} dot={{ r: 6 }} activeDot={{ r: 8 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {summaryData.map((data, index) => (
            <div key={index} className="border p-4 rounded-lg">
              <h3 className="font-bold">{data.description}</h3>
              <p>Read Rate: {data.readRate.toFixed(2)}%</p>
              <p>Revenue: ${data.revenue.toFixed(2)}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div className="p-4 bg-gray-50 rounded-lg shadow">
        <h2 className="text-xl font-bold mb-4">Key Observations (High Exploration Parameters)</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Strong in-group connections form more slowly but are more evenly distributed compared to low exploration scenarios.</li>
          <li>Even with high exploration (0.9) and diversity (0.9) parameters, cross-ideological strong connections rarely form after Day 100.</li>
          <li>Homogeneous networks (0L-30R and 30L-0R) maintain higher read rates (57.75%) compared to mixed networks.</li>
          <li>The mixed networks (20L-30R and 30L-20R) generate significantly higher total revenue despite lower read rates.</li>
          <li>Over time, most cross-ideological connections transition from medium to weak and very weak strength, even with high exploration settings.</li>
          <li>The balanced 15L-15R network shows the lowest read rate (50.93%) and revenue ($3833.50) among all simulations.</li>
          <li>Larger networks (regardless of political distribution) generate more revenue due to increased user interactions.</li>
          <li>The formation of echo chambers appears to be a natural phenomenon that occurs even when the system is explicitly designed to encourage exploration.</li>
        </ul>
      </div>
    </div>
  );
};

export default HighExplorationViz;
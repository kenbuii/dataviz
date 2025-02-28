import React, { useState } from 'react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';

// Add these interfaces to properly type your data
interface SimulationDataPoint {
  day: number;
  strongLeft?: number;
  mediumLeft?: number;
  weakLeft?: number;
  veryWeakLeft?: number;
  strongRight?: number;
  mediumRight?: number;
  weakRight?: number;
  veryWeakRight?: number;
  strongCross?: number;
  mediumCross?: number;
  weakCross?: number;
  veryWeakCross?: number;
}

interface SimulationData {
  title: string;
  data: SimulationDataPoint[];
  readRate: number;
  revenue: number;
}

// Add interfaces for chart data
interface StrongLinksDataPoint {
  day: string;
  [key: string]: string | number; // This allows for dynamic property names
}

interface CrossLinksDataPoint {
  day: string;
  [key: string]: string | number; // This allows for dynamic property names
}

interface SummaryDataPoint {
  name: string;
  readRate: number;
  revenue: number;
  description: string;
}

// Define the type for the colors object
interface ColorMap {
  [key: number]: string[];
}

const SocialNetworkChart: React.FC = () => {
  const [activeTab, setActiveTab] = useState('strong-links');
  const [selectedSims, setSelectedSims] = useState<number[]>([0, 1, 2, 3, 4]);
  
  const days = [0, 100, 200, 300, 400, 500];
  
  const simulationData: SimulationData[] = [
    {
      title: "Low Exploration (0.1), High Diversity (0.9)",
      data: [
        { day: 0, strongLeft: 0, mediumLeft: 190, strongRight: 0, mediumRight: 190, strongCross: 0, mediumCross: 400, weakCross: 0, veryWeakCross: 0 },
        { day: 100, strongLeft: 160, mediumLeft: 30, strongRight: 150, mediumRight: 39, strongCross: 0, mediumCross: 17, weakCross: 47, veryWeakCross: 336 },
        { day: 200, strongLeft: 181, mediumLeft: 9, strongRight: 179, mediumRight: 11, strongCross: 0, mediumCross: 3, weakCross: 29, veryWeakCross: 368 },
        { day: 300, strongLeft: 183, mediumLeft: 7, strongRight: 188, mediumRight: 2, strongCross: 0, mediumCross: 1, weakCross: 12, veryWeakCross: 387 },
        { day: 400, strongLeft: 189, mediumLeft: 1, strongRight: 189, mediumRight: 1, strongCross: 0, mediumCross: 0, weakCross: 5, veryWeakCross: 395 },
        { day: 500, strongLeft: 189, mediumLeft: 1, strongRight: 190, mediumRight: 0, strongCross: 0, mediumCross: 0, weakCross: 4, veryWeakCross: 396 }
      ],
      readRate: 55.50,
      revenue: 5593.65
    },
    {
      title: "High Exploration (0.9), Low Diversity (0.1)",
      data: [
        { day: 0, strongLeft: 0, mediumLeft: 190, strongRight: 0, mediumRight: 190, strongCross: 0, mediumCross: 400, weakCross: 0, veryWeakCross: 0 },
        { day: 100, strongLeft: 57, mediumLeft: 92, strongRight: 40, mediumRight: 107, strongCross: 0, mediumCross: 102, weakCross: 89, veryWeakCross: 209 },
        { day: 200, strongLeft: 49, mediumLeft: 120, strongRight: 49, mediumRight: 122, strongCross: 0, mediumCross: 83, weakCross: 111, veryWeakCross: 206 },
        { day: 300, strongLeft: 45, mediumLeft: 133, strongRight: 44, mediumRight: 133, strongCross: 0, mediumCross: 91, weakCross: 122, veryWeakCross: 187 },
        { day: 400, strongLeft: 34, mediumLeft: 149, strongRight: 35, mediumRight: 147, strongCross: 0, mediumCross: 78, weakCross: 143, veryWeakCross: 179 },
        { day: 500, strongLeft: 26, mediumLeft: 159, strongRight: 30, mediumRight: 153, strongCross: 0, mediumCross: 75, weakCross: 149, veryWeakCross: 176 }
      ],
      readRate: 55.19,
      revenue: 5561.55
    },
    {
      title: "Medium Exploration (0.5), Medium Diversity (0.5)",
      data: [
        { day: 0, strongLeft: 0, mediumLeft: 190, strongRight: 0, mediumRight: 190, strongCross: 0, mediumCross: 400, weakCross: 0, veryWeakCross: 0 },
        { day: 100, strongLeft: 132, mediumLeft: 55, strongRight: 114, mediumRight: 68, strongCross: 0, mediumCross: 58, weakCross: 63, veryWeakCross: 279 },
        { day: 200, strongLeft: 142, mediumLeft: 47, strongRight: 135, mediumRight: 55, strongCross: 0, mediumCross: 29, weakCross: 77, veryWeakCross: 294 },
        { day: 300, strongLeft: 161, mediumLeft: 29, strongRight: 145, mediumRight: 45, strongCross: 0, mediumCross: 18, weakCross: 80, veryWeakCross: 302 },
        { day: 400, strongLeft: 165, mediumLeft: 25, strongRight: 165, mediumRight: 25, strongCross: 0, mediumCross: 17, weakCross: 56, veryWeakCross: 327 },
        { day: 500, strongLeft: 169, mediumLeft: 21, strongRight: 173, mediumRight: 17, strongCross: 0, mediumCross: 10, weakCross: 60, veryWeakCross: 330 }
      ],
      readRate: 57.15,
      revenue: 5759.15
    },
    {
      title: "Very Low Exploration (0.01), Very Low Diversity (0.01)",
      data: [
        { day: 0, strongLeft: 0, mediumLeft: 190, strongRight: 0, mediumRight: 190, strongCross: 0, mediumCross: 400, weakCross: 0, veryWeakCross: 0 },
        { day: 100, strongLeft: 151, mediumLeft: 22, strongRight: 127, mediumRight: 17, strongCross: 0, mediumCross: 11, weakCross: 26, veryWeakCross: 363 },
        { day: 200, strongLeft: 170, mediumLeft: 12, strongRight: 149, mediumRight: 7, strongCross: 0, mediumCross: 5, weakCross: 22, veryWeakCross: 373 },
        { day: 300, strongLeft: 178, mediumLeft: 5, strongRight: 160, mediumRight: 4, strongCross: 0, mediumCross: 7, weakCross: 19, veryWeakCross: 374 },
        { day: 400, strongLeft: 179, mediumLeft: 6, strongRight: 165, mediumRight: 4, strongCross: 0, mediumCross: 3, weakCross: 16, veryWeakCross: 381 },
        { day: 500, strongLeft: 179, mediumLeft: 6, strongRight: 168, mediumRight: 6, strongCross: 0, mediumCross: 4, weakCross: 13, veryWeakCross: 383 }
      ],
      readRate: 67.44,
      revenue: 6796.65
    },
    {
      title: "Very High Exploration (0.99), Very High Diversity (0.99)",
      data: [
        { day: 0, strongLeft: 0, mediumLeft: 190, strongRight: 0, mediumRight: 190, strongCross: 0, mediumCross: 400, weakCross: 0, veryWeakCross: 0 },
        { day: 100, strongLeft: 38, mediumLeft: 133, strongRight: 32, mediumRight: 142, strongCross: 1, mediumCross: 146, weakCross: 118, veryWeakCross: 135 },
        { day: 200, strongLeft: 36, mediumLeft: 145, strongRight: 22, mediumRight: 165, strongCross: 0, mediumCross: 168, weakCross: 129, veryWeakCross: 103 },
        { day: 300, strongLeft: 29, mediumLeft: 157, strongRight: 26, mediumRight: 164, strongCross: 0, mediumCross: 161, weakCross: 152, veryWeakCross: 87 },
        { day: 400, strongLeft: 19, mediumLeft: 171, strongRight: 20, mediumRight: 170, strongCross: 0, mediumCross: 140, weakCross: 191, veryWeakCross: 69 },
        { day: 500, strongLeft: 13, mediumLeft: 177, strongRight: 10, mediumRight: 180, strongCross: 0, mediumCross: 145, weakCross: 203, veryWeakCross: 52 }
      ],
      readRate: 50.16,
      revenue: 5054.90
    }
  ];

  // Format data for charts
  const strongLinksData: StrongLinksDataPoint[] = days.map(day => {
    const result: StrongLinksDataPoint = { day: `Day ${day}` };
    
    simulationData.forEach((sim, index) => {
      const dayData = sim.data.find(d => d.day === day);
      if (dayData) {
        result[`sim${index+1}Left`] = dayData.strongLeft || 0;
        result[`sim${index+1}Right`] = dayData.strongRight || 0;
        result[`sim${index+1}Cross`] = dayData.strongCross || 0;
      }
    });
    return result;
  });
  
  const crossLinksData: CrossLinksDataPoint[] = days.map(day => {
    const result: CrossLinksDataPoint = { day: `Day ${day}` };
    
    simulationData.forEach((sim, index) => {
      const dayData = sim.data.find(d => d.day === day);
      if (dayData) {
        result[`sim${index+1}Medium`] = dayData.mediumCross || 0;
        result[`sim${index+1}Weak`] = dayData.weakCross || 0;
        result[`sim${index+1}VeryWeak`] = dayData.veryWeakCross || 0;
      }
    });
    return result;
  });

  const summaryData: SummaryDataPoint[] = simulationData.map((sim, index) => ({
    name: `Sim ${index + 1}`,
    readRate: sim.readRate,
    revenue: sim.revenue,
    description: sim.title
  }));

  const toggleSimulation = (index: number) => {
    if (selectedSims.includes(index)) {
      setSelectedSims(selectedSims.filter(i => i !== index));
    } else {
      setSelectedSims([...selectedSims, index]);
    }
  };

  // Define colors with proper typing
  const colors: ColorMap = {
    0: ['#8884d8', '#83a6ed', '#8dd1e1'],
    1: ['#82ca9d', '#a4de6c', '#d0ed57'],
    2: ['#ffc658', '#ff8800', '#ff9955'],
    3: ['#ff8084', '#ff5555', '#ff0000'],
    4: ['#da70d6', '#9932cc', '#8a2be2']
  };

  return (
    <div className="flex flex-col space-y-6">
      <div className="p-4 bg-gray-100 rounded-lg">
        <h1 className="text-2xl font-bold mb-4">Social Network Polarization Analysis</h1>
        <p className="text-sm mb-4"> 
          This visualization shows the evolution of the social network over time for different exploration and diversity parameters. 
          Select the simulations you want to visualize. By default, all simulations are selected. 
          </p>
        
        <div className="mb-4">
          <h2 className="text-lg font-semibold mb-2">Select Simulations:</h2>
          <div className="flex flex-wrap gap-2">
            {simulationData.map((sim, index) => (
              <button
                key={index}
                className="px-3 py-1 rounded-full text-sm"
                style={{ 
                  backgroundColor: selectedSims.includes(index) ? colors[index][0] : '#e5e7eb',
                  color: selectedSims.includes(index) ? 'white' : '#374151'
                }}
                onClick={() => toggleSimulation(index)}
              >
                Sim {index + 1}
              </button>
            ))}
          </div>
        </div>
        
        <div className="flex space-x-4 mb-4">
          <button 
            className={`px-4 py-2 rounded ${activeTab === 'strong-links' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            onClick={() => setActiveTab('strong-links')}
          >
            Strong Links
          </button>
          <button 
            className={`px-4 py-2 rounded ${activeTab === 'cross-links' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            onClick={() => setActiveTab('cross-links')}
          >
            Cross-Links
          </button>
          <button 
            className={`px-4 py-2 rounded ${activeTab === 'performance' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            onClick={() => setActiveTab('performance')}
          >
            Performance
          </button>
        </div>
      </div>
      
      {activeTab === 'strong-links' && (
        <div className="p-4 bg-gray-50 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4">Strong Links Evolution</h2>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart 
              data={strongLinksData}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Legend />
              {selectedSims.map(simIndex => (
                <React.Fragment key={simIndex}>
                  <Line 
                    type="monotone" 
                    dataKey={`sim${simIndex+1}Left`} 
                    name={`Sim ${simIndex+1}: Left`}
                    stroke={colors[simIndex][0]}
                    strokeWidth={2}
                  />
                  <Line 
                    type="monotone" 
                    dataKey={`sim${simIndex+1}Right`} 
                    name={`Sim ${simIndex+1}: Right`}
                    stroke={colors[simIndex][1]}
                    strokeDasharray="5 5"
                  />
                </React.Fragment>
              ))}
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}
      
      {activeTab === 'cross-links' && (
        <div className="p-4 bg-gray-50 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4">Cross-Ideology Links</h2>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart 
              data={crossLinksData}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Legend />
              {selectedSims.map(simIndex => (
                <React.Fragment key={simIndex}>
                  <Line 
                    type="monotone" 
                    dataKey={`sim${simIndex+1}Medium`} 
                    name={`Sim ${simIndex+1}: Medium`}
                    stroke={colors[simIndex][0]}
                  />
                  <Line 
                    type="monotone" 
                    dataKey={`sim${simIndex+1}VeryWeak`} 
                    name={`Sim ${simIndex+1}: Very Weak`}
                    stroke={colors[simIndex][2]}
                    strokeDasharray="3 3"
                  />
                </React.Fragment>
              ))}
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}
      
      {activeTab === 'performance' && (
        <div className="p-4 bg-gray-50 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4">Performance Metrics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Read Rate (%)</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={summaryData.filter((_, i) => selectedSims.includes(i))}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="readRate" name="Read Rate (%)">
                    {summaryData.filter((_, i) => selectedSims.includes(i)).map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={colors[selectedSims[index]][0]} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="border p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Revenue ($)</h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={summaryData.filter((_, i) => selectedSims.includes(i))}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis domain={[0, 7000]} />
                  <Tooltip formatter={(value: any) => [`$${Number(value).toFixed(2)}`, 'Revenue']} />
                  <Legend />
                  {summaryData.filter((_, i) => selectedSims.includes(i)).map((entry, index) => (
                    <Line 
                      key={`line-${index}`}
                      type="monotone" 
                      dataKey="revenue" 
                      name={`${entry.description} Revenue`}
                      stroke={colors[selectedSims[index]][1]}
                      strokeWidth={2}
                      dot={{ r: 6, fill: colors[selectedSims[index]][1] }}
                      activeDot={{ r: 8 }}
                    />
                  ))}
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
            {summaryData.filter((_, i) => selectedSims.includes(i)).map((data, index) => (
              <div 
                key={index} 
                className="border p-4 rounded-lg" 
                style={{ borderColor: colors[selectedSims[index]][0] }}
              >
                <h3 className="font-bold text-sm">{data.description}</h3>
                <p>Read Rate: {data.readRate.toFixed(2)}%</p>
                <p>Revenue: ${data.revenue.toFixed(2)}</p>
              </div>
            ))}
          </div>
        </div>
      )}
      
      <div className="p-4 bg-gray-50 rounded-lg shadow">
        <h2 className="text-xl font-bold mb-4">Key Insights</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Lower exploration (0.01, 0.1) leads to faster formation of strong in-group connections and higher polarization.</li>
          <li>Higher exploration (0.9, 0.99) slows strong in-group connection formation but doesn't prevent polarization entirely.</li>
          <li>The highest read rate (67.44%) and revenue ($6796.65) occur with very low exploration and diversity (0.01/0.01).</li>
          <li>Very high exploration and diversity (0.99/0.99) maintains more cross-ideological connections but has lowest revenue.</li>
          <li>All simulations show polarization over time - it appears to be a natural network phenomenon.</li>
        </ul>
      </div>
    </div>
  );
};

export default SocialNetworkChart;
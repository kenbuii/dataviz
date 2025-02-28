import React from 'react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Add these interfaces at the top of the file, after your existing interfaces
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

const ThirdAnalysis: React.FC = () => {
  // Process the data from the simulations
  const days = [0, 100, 200, 300, 400, 500];
  
  const simulationData = [
    // Simulation 1: Medium Parameters (0.5, 0.5)
    {
      title: "Balanced Parameters: 0.5 Exploration, 0.5 Diversity",
      data: [
        { day: 0, 
          strongLeft: 0, mediumLeft: 190, weakLeft: 0, veryWeakLeft: 0,
          strongRight: 0, mediumRight: 190, weakRight: 0, veryWeakRight: 0,
          strongCross: 0, mediumCross: 400, weakCross: 0, veryWeakCross: 0
        },
        { day: 100, 
          strongLeft: 132, mediumLeft: 55, weakLeft: 2, veryWeakLeft: 1,
          strongRight: 114, mediumRight: 68, weakRight: 6, veryWeakRight: 2,
          strongCross: 0, mediumCross: 58, weakCross: 63, veryWeakCross: 279
        },
        { day: 200, 
          strongLeft: 142, mediumLeft: 47, weakLeft: 1, veryWeakLeft: 0,
          strongRight: 135, mediumRight: 55, weakRight: 0, veryWeakRight: 0,
          strongCross: 0, mediumCross: 29, weakCross: 77, veryWeakCross: 294
        },
        { day: 300, 
          strongLeft: 161, mediumLeft: 29, weakLeft: 0, veryWeakLeft: 0,
          strongRight: 145, mediumRight: 45, weakRight: 0, veryWeakRight: 0,
          strongCross: 0, mediumCross: 18, weakCross: 80, veryWeakCross: 302
        },
        { day: 400, 
          strongLeft: 165, mediumLeft: 25, weakLeft: 0, veryWeakLeft: 0,
          strongRight: 165, mediumRight: 25, weakRight: 0, veryWeakRight: 0,
          strongCross: 0, mediumCross: 17, weakCross: 56, veryWeakCross: 327
        },
        { day: 500, 
          strongLeft: 169, mediumLeft: 21, weakLeft: 0, veryWeakLeft: 0,
          strongRight: 173, mediumRight: 17, weakRight: 0, veryWeakRight: 0,
          strongCross: 0, mediumCross: 10, weakCross: 60, veryWeakCross: 330
        },
      ],
      readRate: "57.15%",
      revenue: "$5759.15"
    },
    
    // Simulation 2: Low Exploration, High Diversity (0.1, 0.9)
    {
      title: "Low Exploration, High Diversity: 0.1 Exploration, 0.9 Diversity",
      data: [
        { day: 0, 
          strongLeft: 0, mediumLeft: 190, weakLeft: 0, veryWeakLeft: 0,
          strongRight: 0, mediumRight: 190, weakRight: 0, veryWeakRight: 0,
          strongCross: 0, mediumCross: 400, weakCross: 0, veryWeakCross: 0
        },
        { day: 100, 
          strongLeft: 160, mediumLeft: 30, weakLeft: 0, veryWeakLeft: 0,
          strongRight: 150, mediumRight: 39, weakRight: 1, veryWeakRight: 0,
          strongCross: 0, mediumCross: 17, weakCross: 47, veryWeakCross: 336
        },
        { day: 200, 
          strongLeft: 181, mediumLeft: 9, weakLeft: 0, veryWeakLeft: 0,
          strongRight: 179, mediumRight: 11, weakRight: 0, veryWeakRight: 0,
          strongCross: 0, mediumCross: 3, weakCross: 29, veryWeakCross: 368
        },
        { day: 300, 
          strongLeft: 183, mediumLeft: 7, weakLeft: 0, veryWeakLeft: 0,
          strongRight: 188, mediumRight: 2, weakRight: 0, veryWeakRight: 0,
          strongCross: 0, mediumCross: 1, weakCross: 12, veryWeakCross: 387
        },
        { day: 400, 
          strongLeft: 189, mediumLeft: 1, weakLeft: 0, veryWeakLeft: 0,
          strongRight: 189, mediumRight: 1, weakRight: 0, veryWeakRight: 0,
          strongCross: 0, mediumCross: 0, weakCross: 5, veryWeakCross: 395
        },
        { day: 500, 
          strongLeft: 189, mediumLeft: 1, weakLeft: 0, veryWeakLeft: 0,
          strongRight: 190, mediumRight: 0, weakRight: 0, veryWeakRight: 0,
          strongCross: 0, mediumCross: 0, weakCross: 4, veryWeakCross: 396
        },
      ],
      readRate: "55.50%",
      revenue: "$5593.65"
    },
    
    // Simulation 3: High Exploration, Low Diversity (0.9, 0.1)
    {
      title: "High Exploration, Low Diversity: 0.9 Exploration, 0.1 Diversity",
      data: [
        { day: 0, 
          strongLeft: 0, mediumLeft: 190, weakLeft: 0, veryWeakLeft: 0,
          strongRight: 0, mediumRight: 190, weakRight: 0, veryWeakRight: 0,
          strongCross: 0, mediumCross: 400, weakCross: 0, veryWeakCross: 0
        },
        { day: 100, 
          strongLeft: 57, mediumLeft: 92, weakLeft: 8, veryWeakLeft: 33,
          strongRight: 40, mediumRight: 107, weakRight: 10, veryWeakRight: 33,
          strongCross: 0, mediumCross: 102, weakCross: 89, veryWeakCross: 209
        },
        { day: 200, 
          strongLeft: 49, mediumLeft: 120, weakLeft: 8, veryWeakLeft: 13,
          strongRight: 49, mediumRight: 122, weakRight: 3, veryWeakRight: 16,
          strongCross: 0, mediumCross: 83, weakCross: 111, veryWeakCross: 206
        },
        { day: 300, 
          strongLeft: 45, mediumLeft: 133, weakLeft: 6, veryWeakLeft: 6,
          strongRight: 44, mediumRight: 133, weakRight: 3, veryWeakRight: 10,
          strongCross: 0, mediumCross: 91, weakCross: 122, veryWeakCross: 187
        },
        { day: 400, 
          strongLeft: 34, mediumLeft: 149, weakLeft: 4, veryWeakLeft: 3,
          strongRight: 35, mediumRight: 147, weakRight: 1, veryWeakRight: 7,
          strongCross: 0, mediumCross: 78, weakCross: 143, veryWeakCross: 179
        },
        { day: 500, 
          strongLeft: 26, mediumLeft: 159, weakLeft: 3, veryWeakLeft: 2,
          strongRight: 30, mediumRight: 153, weakRight: 4, veryWeakRight: 3,
          strongCross: 0, mediumCross: 75, weakCross: 149, veryWeakCross: 176
        },
      ],
      readRate: "55.19%",
      revenue: "$5561.55"
    },
    
    // Simulation 4: Low-Mid Exploration, High-Mid Diversity (0.3, 0.7)
    {
      title: "Low-Mid Exploration, High-Mid Diversity: 0.3 Exploration, 0.7 Diversity",
      data: [
        { day: 0, 
          strongLeft: 0, mediumLeft: 190, weakLeft: 0, veryWeakLeft: 0,
          strongRight: 0, mediumRight: 190, weakRight: 0, veryWeakRight: 0,
          strongCross: 0, mediumCross: 400, weakCross: 0, veryWeakCross: 0
        },
        { day: 100, 
          strongLeft: 137, mediumLeft: 51, weakLeft: 1, veryWeakLeft: 1,
          strongRight: 131, mediumRight: 59, weakRight: 0, veryWeakRight: 0,
          strongCross: 0, mediumCross: 42, weakCross: 66, veryWeakCross: 292
        },
        { day: 200, 
          strongLeft: 164, mediumLeft: 26, weakLeft: 0, veryWeakLeft: 0,
          strongRight: 165, mediumRight: 25, weakRight: 0, veryWeakRight: 0,
          strongCross: 0, mediumCross: 9, weakCross: 56, veryWeakCross: 335
        },
        { day: 300, 
          strongLeft: 177, mediumLeft: 13, weakLeft: 0, veryWeakLeft: 0,
          strongRight: 175, mediumRight: 15, weakRight: 0, veryWeakRight: 0,
          strongCross: 0, mediumCross: 2, weakCross: 39, veryWeakCross: 359
        },
        { day: 400, 
          strongLeft: 182, mediumLeft: 8, weakLeft: 0, veryWeakLeft: 0,
          strongRight: 181, mediumRight: 9, weakRight: 0, veryWeakRight: 0,
          strongCross: 0, mediumCross: 1, weakCross: 24, veryWeakCross: 375
        },
        { day: 500, 
          strongLeft: 185, mediumLeft: 5, weakLeft: 0, veryWeakLeft: 0,
          strongRight: 180, mediumRight: 10, weakRight: 0, veryWeakRight: 0,
          strongCross: 0, mediumCross: 0, weakCross: 18, veryWeakCross: 382
        },
      ],
      readRate: "56.57%",
      revenue: "$5700.80"
    },
    
    // Simulation 5: High-Mid Exploration, Low-Mid Diversity (0.7, 0.3)
    {
      title: "High-Mid Exploration, Low-Mid Diversity: 0.7 Exploration, 0.3 Diversity",
      data: [
        { day: 0, 
          strongLeft: 0, mediumLeft: 190, weakLeft: 0, veryWeakLeft: 0,
          strongRight: 0, mediumRight: 190, weakRight: 0, veryWeakRight: 0,
          strongCross: 0, mediumCross: 400, weakCross: 0, veryWeakCross: 0
        },
        { day: 100, 
          strongLeft: 82, mediumLeft: 95, weakLeft: 5, veryWeakLeft: 8,
          strongRight: 73, mediumRight: 98, weakRight: 11, veryWeakRight: 8,
          strongCross: 0, mediumCross: 96, weakCross: 93, veryWeakCross: 211
        },
        { day: 200, 
          strongLeft: 97, mediumLeft: 87, weakLeft: 3, veryWeakLeft: 3,
          strongRight: 77, mediumRight: 109, weakRight: 2, veryWeakRight: 2,
          strongCross: 0, mediumCross: 69, weakCross: 102, veryWeakCross: 229
        },
        { day: 300, 
          strongLeft: 105, mediumLeft: 81, weakLeft: 2, veryWeakLeft: 2,
          strongRight: 80, mediumRight: 108, weakRight: 1, veryWeakRight: 1,
          strongCross: 0, mediumCross: 60, weakCross: 105, veryWeakCross: 235
        },
        { day: 400, 
          strongLeft: 111, mediumLeft: 77, weakLeft: 1, veryWeakLeft: 1,
          strongRight: 83, mediumRight: 106, weakRight: 1, veryWeakRight: 0,
          strongCross: 0, mediumCross: 48, weakCross: 120, veryWeakCross: 232
        },
        { day: 500, 
          strongLeft: 117, mediumLeft: 72, weakLeft: 0, veryWeakLeft: 1,
          strongRight: 92, mediumRight: 97, weakRight: 1, veryWeakRight: 0,
          strongCross: 0, mediumCross: 30, weakCross: 133, veryWeakCross: 237
        },
      ],
      readRate: "56.34%",
      revenue: "$5677.90"
    },
    
    // Simulation 6: Very Low Exploration, Very Low Diversity (0.01, 0.01)
    {
      title: "Very Low Exploration & Diversity: 0.01 Exploration, 0.01 Diversity",
      data: [
        { day: 0, 
          strongLeft: 0, mediumLeft: 190, weakLeft: 0, veryWeakLeft: 0,
          strongRight: 0, mediumRight: 190, weakRight: 0, veryWeakRight: 0,
          strongCross: 0, mediumCross: 400, weakCross: 0, veryWeakCross: 0
        },
        { day: 100, 
          strongLeft: 151, mediumLeft: 22, weakLeft: 1, veryWeakLeft: 16,
          strongRight: 127, mediumRight: 17, weakRight: 0, veryWeakRight: 46,
          strongCross: 0, mediumCross: 11, weakCross: 26, veryWeakCross: 363
        },
        { day: 200, 
          strongLeft: 170, mediumLeft: 12, weakLeft: 1, veryWeakLeft: 7,
          strongRight: 149, mediumRight: 7, weakRight: 0, veryWeakRight: 34,
          strongCross: 0, mediumCross: 5, weakCross: 22, veryWeakCross: 373
        },
        { day: 300, 
          strongLeft: 178, mediumLeft: 5, weakLeft: 0, veryWeakLeft: 7,
          strongRight: 160, mediumRight: 4, weakRight: 0, veryWeakRight: 26,
          strongCross: 0, mediumCross: 7, weakCross: 19, veryWeakCross: 374
        },
        { day: 400, 
          strongLeft: 179, mediumLeft: 6, weakLeft: 0, veryWeakLeft: 5,
          strongRight: 165, mediumRight: 4, weakRight: 0, veryWeakRight: 21,
          strongCross: 0, mediumCross: 3, weakCross: 16, veryWeakCross: 381
        },
        { day: 500, 
          strongLeft: 179, mediumLeft: 6, weakLeft: 0, veryWeakLeft: 5,
          strongRight: 168, mediumRight: 6, weakRight: 0, veryWeakRight: 16,
          strongCross: 0, mediumCross: 4, weakCross: 13, veryWeakCross: 383
        },
      ],
      readRate: "67.44%",
      revenue: "$6796.65"
    },
    
    // Simulation 7: Very High Exploration, Very High Diversity (0.99, 0.99)
    {
      title: "Very High Exploration & Diversity: 0.99 Exploration, 0.99 Diversity",
      data: [
        { day: 0, 
          strongLeft: 0, mediumLeft: 190, weakLeft: 0, veryWeakLeft: 0,
          strongRight: 0, mediumRight: 190, weakRight: 0, veryWeakRight: 0,
          strongCross: 0, mediumCross: 400, weakCross: 0, veryWeakCross: 0
        },
        { day: 100, 
          strongLeft: 38, mediumLeft: 133, weakLeft: 16, veryWeakLeft: 3,
          strongRight: 32, mediumRight: 142, weakRight: 8, veryWeakRight: 8,
          strongCross: 1, mediumCross: 146, weakCross: 118, veryWeakCross: 135
        },
        { day: 200, 
          strongLeft: 36, mediumLeft: 145, weakLeft: 7, veryWeakLeft: 2,
          strongRight: 22, mediumRight: 165, weakRight: 2, veryWeakRight: 1,
          strongCross: 0, mediumCross: 168, weakCross: 129, veryWeakCross: 103
        },
        { day: 300, 
          strongLeft: 29, mediumLeft: 157, weakLeft: 4, veryWeakLeft: 0,
          strongRight: 26, mediumRight: 164, weakRight: 0, veryWeakRight: 0,
          strongCross: 0, mediumCross: 161, weakCross: 152, veryWeakCross: 87
        },
        { day: 400, 
          strongLeft: 19, mediumLeft: 171, weakLeft: 0, veryWeakLeft: 0,
          strongRight: 20, mediumRight: 170, weakRight: 0, veryWeakRight: 0,
          strongCross: 0, mediumCross: 140, weakCross: 191, veryWeakCross: 69
        },
        { day: 500, 
          strongLeft: 13, mediumLeft: 177, weakLeft: 0, veryWeakLeft: 0,
          strongRight: 10, mediumRight: 180, weakRight: 0, veryWeakRight: 0,
          strongCross: 0, mediumCross: 145, weakCross: 203, veryWeakCross: 52
        },
      ],
      readRate: "50.16%",
      revenue: "$5054.90"
    }
  ];

  // Format the data for the main visualization - Strong Links Evolution
  const strongLinksData = days.map(day => {
    const result: StrongLinksDataPoint = { day: `Day ${day}` };
    
    // Add data for each simulation
    simulationData.forEach((sim, index) => {
      const simData = sim.data.find(d => d.day === day);
      if (simData) {
        result[`sim${index+1}Left`] = simData.strongLeft || 0;
        result[`sim${index+1}Right`] = simData.strongRight || 0;
        result[`sim${index+1}Cross`] = simData.strongCross || 0;
      }
    });
    
    return result;
  });
  
  // Format the data for cross-links evolution
  const crossLinksData = days.map(day => {
    const result: CrossLinksDataPoint = { day: `Day ${day}` };
    
    // Add data for each simulation
    simulationData.forEach((sim, index) => {
      const simData = sim.data.find(d => d.day === day);
      if (simData) {
        result[`sim${index+1}Medium`] = simData.mediumCross || 0;
        result[`sim${index+1}Weak`] = simData.weakCross || 0;
        result[`sim${index+1}VeryWeak`] = simData.veryWeakCross || 0;
      }
    });
    
    return result;
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
        <h2 className="text-xl font-bold mb-4">Evolution of Strong In-Group Links Over Time with Different Parameters</h2>
        <ResponsiveContainer width="100%" height={500}>
          <BarChart 
            data={strongLinksData}
            margin={{ top: 20, right: 30, left: 20, bottom: 60 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis label={{ value: 'Number of Strong Links', angle: -90, position: 'insideLeft' }} />
            <Tooltip />
            <Legend />
            <Bar dataKey="sim1Left" name="0.5/0.5: Left-Left" fill="#8884d8" />
            <Bar dataKey="sim1Right" name="0.5/0.5: Right-Right" fill="#82ca9d" />
            <Bar dataKey="sim2Left" name="0.1/0.9: Left-Left" fill="#ff8884" />
            <Bar dataKey="sim2Right" name="0.1/0.9: Right-Right" fill="#ffc658" />
            <Bar dataKey="sim3Left" name="0.9/0.1: Left-Left" fill="#a4de6c" />
            <Bar dataKey="sim3Right" name="0.9/0.1: Right-Right" fill="#d88884" />
            <Bar dataKey="sim6Left" name="0.01/0.01: Left-Left" fill="#de9c6c" />
            <Bar dataKey="sim6Right" name="0.01/0.01: Right-Right" fill="#8450d8" />
            <Bar dataKey="sim7Left" name="0.99/0.99: Left-Left" fill="#5cd850" />
            <Bar dataKey="sim7Right" name="0.99/0.99: Right-Right" fill="#82abca" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      
      <div className="p-4 bg-gray-50 rounded-lg shadow">
        <h2 className="text-xl font-bold mb-4">Evolution of Cross-Ideological Medium Links</h2>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart 
            data={crossLinksData}
            margin={{ top: 20, right: 30, left: 20, bottom: 60 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis label={{ value: 'Number of Medium Cross-Links', angle: -90, position: 'insideLeft' }} />
            <Tooltip />
            <Legend />
            <Bar dataKey="sim1Medium" name="0.5/0.5: Medium" fill="#8884d8" />
            <Bar dataKey="sim2Medium" name="0.1/0.9: Medium" fill="#82ca9d" />
            <Bar dataKey="sim3Medium" name="0.9/0.1: Medium" fill="#ffc658" />
            <Bar dataKey="sim4Medium" name="0.3/0.7: Medium" fill="#ff8884" />
            <Bar dataKey="sim5Medium" name="0.7/0.3: Medium" fill="#a4de6c" />
            <Bar dataKey="sim6Medium" name="0.01/0.01: Medium" fill="#de9c6c" />
            <Bar dataKey="sim7Medium" name="0.99/0.99: Medium" fill="#82abca" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      
      <div className="p-4 bg-gray-50 rounded-lg shadow">
        <h2 className="text-xl font-bold mb-4">Evolution of Cross-Ideological Weak and Very Weak Links</h2>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart 
            data={crossLinksData}
            margin={{ top: 20, right: 30, left: 20, bottom: 60 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis label={{ value: 'Number of Weak & Very Weak Cross-Links', angle: -90, position: 'insideLeft' }} />
            <Tooltip />
            <Legend />
            <Bar dataKey="sim1Weak" name="0.5/0.5: Weak" fill="#8884d8" />
            <Bar dataKey="sim1VeryWeak" name="0.5/0.5: Very Weak" fill="#82ca9d" />
            <Bar dataKey="sim2VeryWeak" name="0.1/0.9: Very Weak" fill="#ff8884" />
            <Bar dataKey="sim3Weak" name="0.9/0.1: Weak" fill="#ffc658" />
            <Bar dataKey="sim3VeryWeak" name="0.9/0.1: Very Weak" fill="#d88884" />
            <Bar dataKey="sim7Weak" name="0.99/0.99: Weak" fill="#a4de6c" />
            <Bar dataKey="sim7VeryWeak" name="0.99/0.99: Very Weak" fill="#de9c6c" />
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
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {summaryData.map((data, index) => (
            <div key={index} className="border p-4 rounded-lg">
              <h3 className="font-bold">{data.description}</h3>
              <p>Read Rate: {data.readRate.toFixed(2)}%</p>
              <p>Revenue: ${data.revenue.toFixed(2)}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ThirdAnalysis;

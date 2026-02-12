import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowUpRight, ArrowDownRight, ArrowRight, TrendingUp, Calendar, Timer, DollarSign, Target, BarChart3, Activity, LineChart, Download, CheckCircle, AlertTriangle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import RiskDisclaimerBanner from '../components/RiskDisclaimerBanner';
const Backtesting = () => {
  const [activeTab, setActiveTab] = useState('performance');
  const navigate = useNavigate();

  // Performance data
  const performanceStats = {
    totalReturn: { value: '3919.8%', change: '+2.74%', label: 'Net Profit Performance', type: 'primary' },
    winRate: { value: '56.48%', label: 'Trade Success Ratio', type: 'success' },
    maxDrawdown: { value: '24.57%', label: 'Risk Control', type: 'risk' },
    profitFactor: { value: '1.841', label: 'Risk-Reward Ratio', type: 'efficiency' },
    incubationDelta: { value: '3579.87%', label: 'Live vs Backtest', type: 'live' },
    totalTrades: { value: '779', label: 'Executed Trades', type: 'volume' }
  };

  // Equity curve data
  const equityCurveData = [
    { trade: 1, backtest: 0, live: 0 },
    { trade: 112, backtest: 50, live: 100 },
    { trade: 224, backtest: 100, live: 300 },
    { trade: 335, backtest: 150, live: 500 },
    { trade: 446, backtest: 200, live: 800 },
    { trade: 557, backtest: 250, live: 1500 },
    { trade: 669, backtest: 300, live: 2500 },
    { trade: 757, backtest: 350, live: 4300 }
  ];

  // Monthly P&L data
  const monthlyData = [
    { year: 2023, months: [
      { month: 'January', value: '0.00%', status: 'neutral' },
      { month: 'February', value: '0.00%', status: 'neutral' },
      { month: 'March', value: '2.34%', status: 'profit' },
      { month: 'April', value: '23.84%', status: 'profit' },
      { month: 'May', value: '16.44%', status: 'profit' },
      { month: 'June', value: '3.55%', status: 'profit' },
      { month: 'July', value: '5.85%', status: 'profit' },
      { month: 'August', value: '-2.99%', status: 'loss' },
      { month: 'September', value: '19.52%', status: 'profit' },
      { month: 'October', value: '10.48%', status: 'profit' }
    ]},
    { year: 2024, months: [
      { month: 'January', value: '10.15%', status: 'profit' },
      { month: 'February', value: '-5.07%', status: 'loss' },
      { month: 'March', value: '3.95%', status: 'profit' },
      { month: 'April', value: '38.53%', status: 'profit' },
      { month: 'May', value: '12.21%', status: 'profit' },
      { month: 'June', value: '6.67%', status: 'profit' },
      { month: 'July', value: '13.99%', status: 'profit' },
      { month: 'August', value: '15.69%', status: 'profit' },
      { month: 'September', value: '-6.84%', status: 'loss' },
      { month: 'October', value: '6.97%', status: 'profit' }
    ]},
    { year: 2025, months: [
      { month: 'January', value: '41.08%', status: 'profit' },
      { month: 'February', value: '32.92%', status: 'profit' },
      { month: 'March', value: '19.62%', status: 'profit' },
      { month: 'April', value: '25.22%', status: 'profit' },
      { month: 'May', value: '52.79%', status: 'profit' },
      { month: 'June', value: '42.52%', status: 'profit' },
      { month: 'July', value: '-6.64%', status: 'loss' },
      { month: 'August', value: '0.00%', status: 'neutral' },
      { month: 'September', value: '0.00%', status: 'neutral' },
      { month: 'October', value: '0.00%', status: 'neutral' }
    ]}
  ];

  // Live stats data
  const liveStats = {
    numberTrades: 239,
    cumulativeReturns: '233.91%',
    winRate: '63.18%',
    incubationStart: '2024-10-15',
    returns: {
      '7Days': '-2.74%',
      '30Days': '30.76%',
      '60Days': '282.56%',
      '90Days': '109.08%'
    }
  };

  // Strategy audit data
  const auditData = {
    openPnL: { allUSD: 590.4, allPercent: 0.13 },
    netProfit: { allUSD: 339934.73, allPercent: 339.93, longUSD: -92910.78, longPercent: -92.91, shortUSD: 432845.51, shortPercent: 432.85 },
    grossProfit: { allUSD: 1878623.97, allPercent: 1878.62, longUSD: 726405.66, longPercent: 726.41, shortUSD: 1152218.31, shortPercent: 1152.22 },
    grossLoss: { allUSD: 1538689.24, allPercent: 1538.69, longUSD: 819316.44, longPercent: 819.32, shortUSD: 719372.8, shortPercent: 719.37 },
    commissionPaid: { allUSD: 101444.04, longUSD: 44330.73, shortUSD: 57113.31 },
    buyHoldReturn: { allUSD: -54234.53, allPercent: -54.23 },
    maxEquityRunup: { allUSD: 375809.3, allPercent: 78.99 },
    maxDrawdown: { allUSD: 89181.82, allPercent: 24.57 },
    maxContractsHeld: { all: 1462335.0, long: 1342401.0, short: 1462335.0 }
  };

  return (
    <div className="min-h-screen bg-[#0a0b0d] text-white pt-24 pb-16">
      {/* Risk Disclaimer Banner - Safe Browsing Compliance */}
      <RiskDisclaimerBanner />
      
      <div className="container mx-auto px-4 md:px-6">
        {/* Performance Disclaimer */}
        <div className="bg-[rgba(255,193,7,0.1)] border-l-4 border-[rgb(255,193,7)] p-4 rounded-r-lg mb-8">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-[rgb(255,193,7)] flex-shrink-0 mt-0.5" />
            <p className="text-sm text-white">
              <strong>Performance Disclaimer:</strong> These results are simulated backtests using historical data and do not represent actual trading. Past performance does not guarantee future results. Actual trading may result in losses.
            </p>
          </div>
        </div>
        
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Performance Overview</h1>
          <div className="flex items-center gap-4 mt-4">
            <div className="bg-[#1a1c1e] px-4 py-2 rounded-full border border-[#2a2c2e]">
              <span className="text-sm text-white font-medium">Live Trading</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <ArrowUpRight className="w-4 h-4 text-green-400" />
              <span className="text-green-400">Last 7 days: +2.74%</span>
              <Timer className="w-4 h-4 ml-4" />
              <span>Updated 5 hours ago</span>
            </div>
          </div>
        </div>

        {/* Performance Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {/* Total Return - Primary */}
          <Card className="bg-gradient-to-br from-blue-600 to-blue-800 border-0 relative overflow-hidden">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm text-blue-100 font-medium">Total Return</span>
                    <span className="text-xs bg-white/20 px-2 py-1 rounded text-blue-100">PRIMARY</span>
                  </div>
                </div>
                <ArrowUpRight className="w-5 h-5 text-white" />
              </div>
              <div className="mb-4">
                <h2 className="text-5xl font-bold text-white mb-2">{performanceStats.totalReturn.value}</h2>
                <p className="text-blue-100 text-sm">{performanceStats.totalReturn.label}</p>
              </div>
              <div className="w-full bg-blue-400 h-1 rounded-full"></div>
            </CardContent>
          </Card>

          {/* Win Rate */}
          <Card className="bg-[#1a1c1e] border-[#2a2c2e]">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm text-gray-300 font-medium">Win Rate</span>
                    <span className="text-xs bg-green-500/20 px-2 py-1 rounded text-green-400">SUCCESS</span>
                  </div>
                </div>
                <ArrowUpRight className="w-5 h-5 text-green-400" />
              </div>
              <div className="mb-4">
                <h2 className="text-4xl font-bold text-white mb-2">{performanceStats.winRate.value}</h2>
                <p className="text-gray-400 text-sm">{performanceStats.winRate.label}</p>
              </div>
              <div className="w-full bg-gray-700 h-1 rounded-full overflow-hidden">
                <div className="bg-green-400 h-full w-[56%]"></div>
              </div>
            </CardContent>
          </Card>

          {/* Max Drawdown */}
          <Card className="bg-[#1a1c1e] border-[#2a2c2e]">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm text-gray-300 font-medium">Max Drawdown</span>
                    <span className="text-xs bg-orange-500/20 px-2 py-1 rounded text-orange-400">RISK</span>
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <h2 className="text-4xl font-bold text-white mb-2">{performanceStats.maxDrawdown.value}</h2>
                <p className="text-gray-400 text-sm">{performanceStats.maxDrawdown.label}</p>
              </div>
            </CardContent>
          </Card>

          {/* Profit Factor */}
          <Card className="bg-[#1a1c1e] border-[#2a2c2e]">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm text-gray-300 font-medium">Profit Factor</span>
                    <span className="text-xs bg-teal-500/20 px-2 py-1 rounded text-teal-400">EFFICIENCY</span>
                  </div>
                </div>
                <ArrowUpRight className="w-5 h-5 text-teal-400" />
              </div>
              <div className="mb-4">
                <h2 className="text-4xl font-bold text-white mb-2">{performanceStats.profitFactor.value}</h2>
                <p className="text-gray-400 text-sm">{performanceStats.profitFactor.label}</p>
              </div>
              <div className="w-full bg-gray-700 h-1 rounded-full overflow-hidden">
                <div className="bg-blue-400 h-full w-[75%]"></div>
              </div>
            </CardContent>
          </Card>

          {/* Incubation Delta */}
          <Card className="bg-[#1a1c1e] border-[#2a2c2e]">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm text-gray-300 font-medium">Incubation Delta</span>
                    <span className="text-xs bg-purple-500/20 px-2 py-1 rounded text-purple-400">LIVE</span>
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <h2 className="text-4xl font-bold text-white mb-2">{performanceStats.incubationDelta.value}</h2>
                <p className="text-gray-400 text-sm">{performanceStats.incubationDelta.label}</p>
              </div>
            </CardContent>
          </Card>

          {/* Total Trades */}
          <Card className="bg-[#1a1c1e] border-[#2a2c2e]">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm text-gray-300 font-medium">Total Trades</span>
                    <span className="text-xs bg-gray-600 px-2 py-1 rounded text-gray-300">VOLUME</span>
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <h2 className="text-4xl font-bold text-white mb-2">{performanceStats.totalTrades.value}</h2>
                <p className="text-gray-400 text-sm">{performanceStats.totalTrades.label}</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Equity Curve Analysis */}
        <Card className="bg-[#1a1c1e] border-[#2a2c2e] mb-8">
          <CardContent className="p-6">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">Equity Curve Analysis</h2>
                <p className="text-gray-400 text-sm">Performance comparison between backtest and live trading results</p>
              </div>
              <div className="flex gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-teal-400"></div>
                  <span className="text-sm text-gray-300">Backtest Performance</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-pink-500"></div>
                  <span className="text-sm text-gray-300">Live Trading</span>
                </div>
              </div>
            </div>
            
            {/* Chart Area */}
            <div className="relative h-96 bg-[#0a0b0d] rounded-lg p-4">
              <svg className="w-full h-full" viewBox="0 0 1000 400">
                {/* Grid lines */}
                <line x1="0" y1="100" x2="1000" y2="100" stroke="#2a2c2e" strokeWidth="1" />
                <line x1="0" y1="200" x2="1000" y2="200" stroke="#2a2c2e" strokeWidth="1" />
                <line x1="0" y1="300" x2="1000" y2="300" stroke="#2a2c2e" strokeWidth="1" />
                
                {/* Backtest line (teal, flat growth) */}
                <path
                  d="M 50 350 L 200 340 L 350 330 L 500 320 L 650 310 L 800 300 L 950 290"
                  fill="none"
                  stroke="#14b8a6"
                  strokeWidth="3"
                />
                
                {/* Live trading area (pink, exponential growth) */}
                <path
                  d="M 50 350 L 200 340 L 350 320 L 500 280 L 650 180 L 800 80 L 950 20"
                  fill="url(#gradient)"
                  fillOpacity="0.3"
                />
                <path
                  d="M 50 350 L 200 340 L 350 320 L 500 280 L 650 180 L 800 80 L 950 20"
                  fill="none"
                  stroke="#ec4899"
                  strokeWidth="3"
                />
                
                {/* Gradient definition */}
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#ec4899" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#ec4899" stopOpacity="0" />
                  </linearGradient>
                </defs>
                
                {/* Y-axis labels */}
                <text x="10" y="105" fill="#6b7280" fontSize="12">5000%</text>
                <text x="10" y="205" fill="#6b7280" fontSize="12">3000%</text>
                <text x="10" y="305" fill="#6b7280" fontSize="12">1000%</text>
                <text x="10" y="385" fill="#6b7280" fontSize="12">0%</text>
                
                {/* X-axis labels */}
                <text x="50" y="395" fill="#6b7280" fontSize="12">1</text>
                <text x="250" y="395" fill="#6b7280" fontSize="12">224</text>
                <text x="450" y="395" fill="#6b7280" fontSize="12">446</text>
                <text x="650" y="395" fill="#6b7280" fontSize="12">669</text>
                <text x="900" y="395" fill="#6b7280" fontSize="12">757</text>
                
                {/* Highlight point */}
                <circle cx="950" cy="20" r="8" fill="#ec4899" />
                <circle cx="950" cy="20" r="15" fill="none" stroke="#ec4899" strokeWidth="2" opacity="0.5" />
              </svg>
              
              {/* Tooltip */}
              <div className="absolute top-8 right-8 bg-[#1a1c1e] border border-[#2a2c2e] rounded-lg p-3">
                <p className="text-xs text-gray-400 mb-1">Trade #: 757</p>
                <p className="text-sm text-pink-400 font-bold">Live Trades: 3728.9%</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tabs Section */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="bg-[#1a1c1e] border border-[#2a2c2e] p-1 mb-6">
            <TabsTrigger value="performance" className="data-[state=active]:bg-blue-600">
              <BarChart3 className="w-4 h-4 mr-2" />
              Performance
            </TabsTrigger>
            <TabsTrigger value="trades" className="data-[state=active]:bg-blue-600">
              <Activity className="w-4 h-4 mr-2" />
              Trades
            </TabsTrigger>
            <TabsTrigger value="monthly" className="data-[state=active]:bg-blue-600">
              <Calendar className="w-4 h-4 mr-2" />
              Monthly P&L
            </TabsTrigger>
            <TabsTrigger value="live" className="data-[state=active]:bg-blue-600">
              <TrendingUp className="w-4 h-4 mr-2" />
              Live Stats
            </TabsTrigger>
            <TabsTrigger value="audit" className="data-[state=active]:bg-blue-600">
              <Target className="w-4 h-4 mr-2" />
              Strategy Audit
            </TabsTrigger>
            <TabsTrigger value="ai" className="data-[state=active]:bg-blue-600">
              <LineChart className="w-4 h-4 mr-2" />
              AI Analysis
            </TabsTrigger>
          </TabsList>

          {/* Performance Tab */}
          <TabsContent value="performance">
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Trades per Day */}
              <Card className="bg-[#1a1c1e] border-[#2a2c2e]">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-4">Trades per Day</h3>
                  <p className="text-sm text-gray-400 mb-6">Total Trades per Day</p>
                  
                  {/* Bar Chart */}
                  <div className="flex items-end justify-between h-64 gap-4">
                    {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => {
                      const heights = [140, 105, 120, 115, 115, 80, 110];
                      return (
                        <div key={day} className="flex-1 flex flex-col items-center gap-2">
                          <div 
                            className="w-full bg-gradient-to-t from-pink-500 to-pink-400 rounded-t-lg transition-all hover:opacity-80"
                            style={{ height: `${heights[index]}px` }}
                          ></div>
                          <span className="text-xs text-gray-400">{day}</span>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Trades Tab */}
          <TabsContent value="trades">
            <Card className="bg-[#1a1c1e] border-[#2a2c2e]">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-4">Trade History</h3>
                <p className="text-gray-400 text-sm mb-4">Recent trading activity and executed orders</p>
                <div className="text-center py-12 text-gray-500">
                  <Activity className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <p>Detailed trade history coming soon</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Monthly P&L Tab */}
          <TabsContent value="monthly">
            <Card className="bg-[#1a1c1e] border-[#2a2c2e]">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">Monthly Profit & Loss</h3>
                <p className="text-gray-400 text-sm mb-6">Monthly performance breakdown with profit/loss indicators</p>
                
                <div className="mb-4">
                  <h4 className="text-lg font-bold text-white mb-4">Standard Monthly Profit</h4>
                  <p className="text-sm text-gray-400 mb-6">
                    This shows the total profits or losses of the strategy after closing a trade and the percentage gain or loss of the strategy over time.
                  </p>
                  
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-gray-500"></div>
                      <span className="text-sm text-gray-300">Incubation Period</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                      <span className="text-sm text-gray-300">Live Trading</span>
                    </div>
                  </div>
                </div>

                {/* Monthly Table */}
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-[#2a2c2e]">
                        <th className="text-left text-sm text-gray-400 font-medium py-3 px-4">Year/Month</th>
                        <th className="text-center text-sm text-gray-400 font-medium py-3 px-4">January</th>
                        <th className="text-center text-sm text-gray-400 font-medium py-3 px-4">February</th>
                        <th className="text-center text-sm text-gray-400 font-medium py-3 px-4">March</th>
                        <th className="text-center text-sm text-gray-400 font-medium py-3 px-4">April</th>
                        <th className="text-center text-sm text-gray-400 font-medium py-3 px-4">May</th>
                        <th className="text-center text-sm text-gray-400 font-medium py-3 px-4">June</th>
                        <th className="text-center text-sm text-gray-400 font-medium py-3 px-4">July</th>
                        <th className="text-center text-sm text-gray-400 font-medium py-3 px-4">August</th>
                        <th className="text-center text-sm text-gray-400 font-medium py-3 px-4">September</th>
                        <th className="text-center text-sm text-gray-400 font-medium py-3 px-4">October</th>
                      </tr>
                    </thead>
                    <tbody>
                      {monthlyData.map((yearData) => (
                        <tr key={yearData.year} className="border-b border-[#2a2c2e]">
                          <td className="text-left text-white font-medium py-3 px-4">{yearData.year}</td>
                          {yearData.months.map((month, idx) => (
                            <td key={idx} className="text-center py-3 px-4">
                              <div className="flex flex-col items-center gap-1">
                                <span className={`text-sm font-medium ${
                                  month.status === 'profit' ? 'text-green-400' :
                                  month.status === 'loss' ? 'text-red-400' :
                                  'text-gray-500'
                                }`}>
                                  {month.value}
                                </span>
                                <div className={`w-2 h-2 rounded-full ${
                                  yearData.year === 2023 ? 'bg-gray-500' : 'bg-blue-500'
                                }`}></div>
                              </div>
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Live Stats Tab */}
          <TabsContent value="live">
            <div className="space-y-6">
              <Card className="bg-[#1a1c1e] border-[#2a2c2e]">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">Live Trading Statistics</h3>
                  <p className="text-gray-400 text-sm mb-8">Real-time trading performance and statistics</p>
                  
                  <div className="mb-8">
                    <h4 className="text-lg font-bold text-white mb-6">Live Trades Stats</h4>
                    
                    {/* Top Stats */}
                    <div className="grid grid-cols-3 gap-6 mb-8">
                      <div className="bg-[#0a0b0d] rounded-lg p-6 text-center border border-[#2a2c2e]">
                        <DollarSign className="w-12 h-12 mx-auto mb-4 text-gray-400" />
                        <h5 className="text-4xl font-bold text-white mb-2">{liveStats.numberTrades}</h5>
                        <p className="text-sm text-gray-400">Number of Trades</p>
                      </div>
                      
                      <div className="bg-[#0a0b0d] rounded-lg p-6 text-center border border-[#2a2c2e]">
                        <Calendar className="w-12 h-12 mx-auto mb-4 text-gray-400" />
                        <h5 className="text-4xl font-bold text-white mb-2">{liveStats.cumulativeReturns}</h5>
                        <p className="text-sm text-gray-400">Cumulative Returns</p>
                      </div>
                      
                      <div className="bg-[#0a0b0d] rounded-lg p-6 text-center border border-[#2a2c2e]">
                        <Timer className="w-12 h-12 mx-auto mb-4 text-gray-400" />
                        <h5 className="text-4xl font-bold text-white mb-2">{liveStats.winRate}</h5>
                        <p className="text-sm text-gray-400">Win Rate</p>
                      </div>
                    </div>
                    
                    {/* Time-based Returns */}
                    <div className="grid grid-cols-4 gap-4">
                      <div className="bg-[#0a0b0d] rounded-lg p-4 border border-[#2a2c2e]">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-2 h-2 rounded-full bg-orange-400"></div>
                          <span className="text-sm text-gray-400">Incubation started</span>
                        </div>
                        <p className="text-lg font-bold text-white">{liveStats.incubationStart}</p>
                      </div>
                      
                      <div className="bg-[#0a0b0d] rounded-lg p-4 border border-[#2a2c2e]">
                        <p className="text-sm text-gray-400 mb-2">7 Days</p>
                        <p className="text-2xl font-bold text-red-400">{liveStats.returns['7Days']}</p>
                      </div>
                      
                      <div className="bg-[#0a0b0d] rounded-lg p-4 border border-[#2a2c2e]">
                        <p className="text-sm text-gray-400 mb-2">30 Days</p>
                        <p className="text-2xl font-bold text-green-400">{liveStats.returns['30Days']}</p>
                      </div>
                      
                      <div className="bg-[#0a0b0d] rounded-lg p-4 border border-[#2a2c2e]">
                        <p className="text-sm text-gray-400 mb-2">60 Days</p>
                        <p className="text-2xl font-bold text-green-400">{liveStats.returns['60Days']}</p>
                      </div>
                      
                      <div className="bg-[#0a0b0d] rounded-lg p-4 border border-[#2a2c2e] col-start-2">
                        <p className="text-sm text-gray-400 mb-2">90 Days</p>
                        <p className="text-2xl font-bold text-green-400">{liveStats.returns['90Days']}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Strategy Audit Tab */}
          <TabsContent value="audit">
            <Card className="bg-[#1a1c1e] border-[#2a2c2e]">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">Strategy Audit & Screenshots</h3>
                <p className="text-gray-400 text-sm mb-6">Visual verification of strategy performance with TradingView screenshots</p>
                
                {/* Tab Switcher */}
                <div className="flex gap-4 mb-6">
                  <Button variant="ghost" className="bg-[#0a0b0d] text-white hover:bg-[#2a2c2e]">
                    Performance (Backtest)
                  </Button>
                  <Button variant="ghost" className="text-gray-400 hover:bg-[#2a2c2e] hover:text-white">
                    Performance (Forward Test)
                  </Button>
                </div>
                
                {/* Audit Table */}
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-[#2a2c2e]">
                        <th className="text-left text-sm text-gray-400 font-medium py-3 px-4"></th>
                        <th className="text-center text-sm text-gray-400 font-medium py-3 px-4">All USD</th>
                        <th className="text-center text-sm text-gray-400 font-medium py-3 px-4">All %</th>
                        <th className="text-center text-sm text-gray-400 font-medium py-3 px-4">Long USD</th>
                        <th className="text-center text-sm text-gray-400 font-medium py-3 px-4">Long %</th>
                        <th className="text-center text-sm text-gray-400 font-medium py-3 px-4">Short USD</th>
                        <th className="text-center text-sm text-gray-400 font-medium py-3 px-4">Short %</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-[#2a2c2e]">
                        <td className="text-left text-white py-3 px-4">Open P&L</td>
                        <td className="text-center text-white py-3 px-4">{auditData.openPnL.allUSD}</td>
                        <td className="text-center text-white py-3 px-4">{auditData.openPnL.allPercent}</td>
                        <td className="text-center text-gray-500 py-3 px-4">-</td>
                        <td className="text-center text-gray-500 py-3 px-4">-</td>
                        <td className="text-center text-gray-500 py-3 px-4">-</td>
                        <td className="text-center text-gray-500 py-3 px-4">-</td>
                      </tr>
                      <tr className="border-b border-[#2a2c2e]">
                        <td className="text-left text-white py-3 px-4">Net Profit</td>
                        <td className="text-center text-white py-3 px-4">{auditData.netProfit.allUSD.toLocaleString()}</td>
                        <td className="text-center text-white py-3 px-4">{auditData.netProfit.allPercent}</td>
                        <td className="text-center text-white py-3 px-4">{auditData.netProfit.longUSD.toLocaleString()}</td>
                        <td className="text-center text-white py-3 px-4">{auditData.netProfit.longPercent}</td>
                        <td className="text-center text-white py-3 px-4">{auditData.netProfit.shortUSD.toLocaleString()}</td>
                        <td className="text-center text-white py-3 px-4">{auditData.netProfit.shortPercent}</td>
                      </tr>
                      <tr className="border-b border-[#2a2c2e]">
                        <td className="text-left text-white py-3 px-4">Gross Profit</td>
                        <td className="text-center text-white py-3 px-4">{auditData.grossProfit.allUSD.toLocaleString()}</td>
                        <td className="text-center text-white py-3 px-4">{auditData.grossProfit.allPercent}</td>
                        <td className="text-center text-white py-3 px-4">{auditData.grossProfit.longUSD.toLocaleString()}</td>
                        <td className="text-center text-white py-3 px-4">{auditData.grossProfit.longPercent}</td>
                        <td className="text-center text-white py-3 px-4">{auditData.grossProfit.shortUSD.toLocaleString()}</td>
                        <td className="text-center text-white py-3 px-4">{auditData.grossProfit.shortPercent}</td>
                      </tr>
                      <tr className="border-b border-[#2a2c2e]">
                        <td className="text-left text-white py-3 px-4">Gross Loss</td>
                        <td className="text-center text-white py-3 px-4">{auditData.grossLoss.allUSD.toLocaleString()}</td>
                        <td className="text-center text-white py-3 px-4">{auditData.grossLoss.allPercent}</td>
                        <td className="text-center text-white py-3 px-4">{auditData.grossLoss.longUSD.toLocaleString()}</td>
                        <td className="text-center text-white py-3 px-4">{auditData.grossLoss.longPercent}</td>
                        <td className="text-center text-white py-3 px-4">{auditData.grossLoss.shortUSD.toLocaleString()}</td>
                        <td className="text-center text-white py-3 px-4">{auditData.grossLoss.shortPercent}</td>
                      </tr>
                      <tr className="border-b border-[#2a2c2e]">
                        <td className="text-left text-white py-3 px-4">Commission Paid</td>
                        <td className="text-center text-white py-3 px-4">{auditData.commissionPaid.allUSD.toLocaleString()}</td>
                        <td className="text-center text-gray-500 py-3 px-4">-</td>
                        <td className="text-center text-white py-3 px-4">{auditData.commissionPaid.longUSD.toLocaleString()}</td>
                        <td className="text-center text-gray-500 py-3 px-4">-</td>
                        <td className="text-center text-white py-3 px-4">{auditData.commissionPaid.shortUSD.toLocaleString()}</td>
                        <td className="text-center text-gray-500 py-3 px-4">-</td>
                      </tr>
                      <tr className="border-b border-[#2a2c2e]">
                        <td className="text-left text-white py-3 px-4">Buy & Hold Return</td>
                        <td className="text-center text-white py-3 px-4">{auditData.buyHoldReturn.allUSD.toLocaleString()}</td>
                        <td className="text-center text-white py-3 px-4">{auditData.buyHoldReturn.allPercent}</td>
                        <td className="text-center text-gray-500 py-3 px-4">-</td>
                        <td className="text-center text-gray-500 py-3 px-4">-</td>
                        <td className="text-center text-gray-500 py-3 px-4">-</td>
                        <td className="text-center text-gray-500 py-3 px-4">-</td>
                      </tr>
                      <tr className="border-b border-[#2a2c2e]">
                        <td className="text-left text-white py-3 px-4">Max Equity Run-up</td>
                        <td className="text-center text-white py-3 px-4">{auditData.maxEquityRunup.allUSD.toLocaleString()}</td>
                        <td className="text-center text-white py-3 px-4">{auditData.maxEquityRunup.allPercent}</td>
                        <td className="text-center text-gray-500 py-3 px-4">-</td>
                        <td className="text-center text-gray-500 py-3 px-4">-</td>
                        <td className="text-center text-gray-500 py-3 px-4">-</td>
                        <td className="text-center text-gray-500 py-3 px-4">-</td>
                      </tr>
                      <tr className="border-b border-[#2a2c2e]">
                        <td className="text-left text-white py-3 px-4">Max Drawdown</td>
                        <td className="text-center text-white py-3 px-4">{auditData.maxDrawdown.allUSD.toLocaleString()}</td>
                        <td className="text-center text-white py-3 px-4">{auditData.maxDrawdown.allPercent}</td>
                        <td className="text-center text-gray-500 py-3 px-4">-</td>
                        <td className="text-center text-gray-500 py-3 px-4">-</td>
                        <td className="text-center text-gray-500 py-3 px-4">-</td>
                        <td className="text-center text-gray-500 py-3 px-4">-</td>
                      </tr>
                      <tr className="border-b border-[#2a2c2e]">
                        <td className="text-left text-white py-3 px-4">Max Contracts Held</td>
                        <td className="text-center text-white py-3 px-4">{auditData.maxContractsHeld.all.toLocaleString()}</td>
                        <td className="text-center text-gray-500 py-3 px-4">-</td>
                        <td className="text-center text-white py-3 px-4">{auditData.maxContractsHeld.long.toLocaleString()}</td>
                        <td className="text-center text-gray-500 py-3 px-4">-</td>
                        <td className="text-center text-white py-3 px-4">{auditData.maxContractsHeld.short.toLocaleString()}</td>
                        <td className="text-center text-gray-500 py-3 px-4">-</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* AI Analysis Tab */}
          <TabsContent value="ai">
            <Card className="bg-[#1a1c1e] border-[#2a2c2e]">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-4">AI-Powered Analysis</h3>
                <p className="text-gray-400 text-sm mb-4">Advanced insights and recommendations from our AI engine</p>
                <div className="text-center py-12 text-gray-500">
                  <LineChart className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <p>AI analysis features coming soon</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Features Grid with Images */}
        <section className="py-16 md:py-20 lg:py-32 bg-[#0a0a0a]">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-white mb-4">
                Powerful <span className="text-[#38FE60]">Backtesting</span> Features
              </h2>
              <p className="text-[#B5B5B5] text-lg md:text-xl max-w-3xl mx-auto">
                Everything you need to validate and optimize your crypto trading strategies
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16">
              {/* Feature 1 */}
              <div className="bg-[#1a1c1e] border border-[#2a2c2e] rounded-2xl p-6 hover:border-[#38FE60] transition-all">
                <div className="w-12 h-12 bg-[#38FE60] rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-[#111113]" />
                </div>
                <h3 className="text-xl font-normal text-white mb-3">Historical Data Analysis</h3>
                <p className="text-[#B5B5B5] text-sm leading-relaxed">
                  Access years of tick-by-tick crypto market data for accurate backtesting across all major trading pairs.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="bg-[#1a1c1e] border border-[#2a2c2e] rounded-2xl p-6 hover:border-[#38FE60] transition-all">
                <div className="w-12 h-12 bg-[#38FE60] rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-[#111113]" />
                </div>
                <h3 className="text-xl font-normal text-white mb-3">Performance Metrics</h3>
                <p className="text-[#B5B5B5] text-sm leading-relaxed">
                  Get detailed analytics including Sharpe ratio, max drawdown, win rate, and profit factor for your strategies.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="bg-[#1a1c1e] border border-[#2a2c2e] rounded-2xl p-6 hover:border-[#38FE60] transition-all">
                <div className="w-12 h-12 bg-[#38FE60] rounded-lg flex items-center justify-center mb-4">
                  <Activity className="w-6 h-6 text-[#111113]" />
                </div>
                <h3 className="text-xl font-normal text-white mb-3">Real-Time Simulation</h3>
                <p className="text-[#B5B5B5] text-sm leading-relaxed">
                  Simulate real market conditions including slippage, fees, and order execution delays for accurate results.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="bg-[#1a1c1e] border border-[#2a2c2e] rounded-2xl p-6 hover:border-[#38FE60] transition-all">
                <div className="w-12 h-12 bg-[#38FE60] rounded-lg flex items-center justify-center mb-4">
                  <LineChart className="w-6 h-6 text-[#111113]" />
                </div>
                <h3 className="text-xl font-normal text-white mb-3">Multi-Timeframe Testing</h3>
                <p className="text-[#B5B5B5] text-sm leading-relaxed">
                  Test strategies across multiple timeframes from 1-minute to monthly charts simultaneously.
                </p>
              </div>

              {/* Feature 5 */}
              <div className="bg-[#1a1c1e] border border-[#2a2c2e] rounded-2xl p-6 hover:border-[#38FE60] transition-all">
                <div className="w-12 h-12 bg-[#38FE60] rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-[#111113]" />
                </div>
                <h3 className="text-xl font-normal text-white mb-3">Strategy Optimization</h3>
                <p className="text-[#B5B5B5] text-sm leading-relaxed">
                  Automatically optimize strategy parameters to maximize returns and minimize risk.
                </p>
              </div>

              {/* Feature 6 */}
              <div className="bg-[#1a1c1e] border border-[#2a2c2e] rounded-2xl p-6 hover:border-[#38FE60] transition-all">
                <div className="w-12 h-12 bg-[#38FE60] rounded-lg flex items-center justify-center mb-4">
                  <Download className="w-6 h-6 text-[#111113]" />
                </div>
                <h3 className="text-xl font-normal text-white mb-3">Export Reports</h3>
                <p className="text-[#B5B5B5] text-sm leading-relaxed">
                  Generate comprehensive PDF reports with charts, statistics, and trade logs for analysis.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-16 md:py-20 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-white mb-4">
                How <span className="text-[#38FE60]">Backtesting</span> Works
              </h2>
              <p className="text-[#B5B5B5] text-lg md:text-xl max-w-3xl mx-auto">
                Our 4-step process to validate your crypto trading strategies
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              <div className="bg-[#1a1c1e] border border-[#2a2c2e] rounded-2xl p-6 text-center">
                <div className="w-16 h-16 bg-[#38FE60] rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-[#111113]">
                  1
                </div>
                <h3 className="text-xl font-normal text-white mb-3">Define Strategy</h3>
                <p className="text-[#B5B5B5] text-sm">
                  Set your entry/exit rules, indicators, and risk management parameters
                </p>
              </div>

              <div className="bg-[#1a1c1e] border border-[#2a2c2e] rounded-2xl p-6 text-center">
                <div className="w-16 h-16 bg-[#38FE60] rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-[#111113]">
                  2
                </div>
                <h3 className="text-xl font-normal text-white mb-3">Select Data</h3>
                <p className="text-[#B5B5B5] text-sm">
                  Choose cryptocurrencies, timeframes, and historical period for testing
                </p>
              </div>

              <div className="bg-[#1a1c1e] border border-[#2a2c2e] rounded-2xl p-6 text-center">
                <div className="w-16 h-16 bg-[#38FE60] rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-[#111113]">
                  3
                </div>
                <h3 className="text-xl font-normal text-white mb-3">Run Simulation</h3>
                <p className="text-[#B5B5B5] text-sm">
                  Our engine processes millions of data points in seconds
                </p>
              </div>

              <div className="bg-[#1a1c1e] border border-[#2a2c2e] rounded-2xl p-6 text-center">
                <div className="w-16 h-16 bg-[#38FE60] rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-[#111113]">
                  4
                </div>
                <h3 className="text-xl font-normal text-white mb-3">Analyze Results</h3>
                <p className="text-[#B5B5B5] text-sm">
                  Review performance metrics, charts, and detailed trade logs
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Crypto Markets Supported */}
        <section className="py-16 md:py-20 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-white mb-4">
                Test Across <span className="text-[#38FE60]">1000+</span> Crypto Assets
              </h2>
              <p className="text-[#B5B5B5] text-lg md:text-xl max-w-3xl mx-auto">
                Backtest your strategies on all major cryptocurrencies and trading pairs
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6 max-w-5xl mx-auto">
              {[
                { name: 'Bitcoin', symbol: 'BTC' },
                { name: 'Ethereum', symbol: 'ETH' },
                { name: 'Binance Coin', symbol: 'BNB' },
                { name: 'Cardano', symbol: 'ADA' },
                { name: 'Solana', symbol: 'SOL' },
                { name: 'Ripple', symbol: 'XRP' },
                { name: 'Polkadot', symbol: 'DOT' },
                { name: 'Dogecoin', symbol: 'DOGE' },
                { name: 'Avalanche', symbol: 'AVAX' },
                { name: 'Polygon', symbol: 'MATIC' },
                { name: 'Chainlink', symbol: 'LINK' },
                { name: 'Litecoin', symbol: 'LTC' }
              ].map((crypto) => (
                <div 
                  key={crypto.symbol}
                  className="bg-[#1a1c1e] border border-[#2a2c2e] rounded-xl p-4 hover:border-[#38FE60] transition-all text-center"
                >
                  <div className="w-12 h-12 bg-[#38FE60] rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-[#111113] font-bold text-lg">{crypto.symbol[0]}</span>
                  </div>
                  <p className="text-white text-sm font-medium">{crypto.symbol}</p>
                  <p className="text-[#B5B5B5] text-xs">{crypto.name}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <p className="text-[#B5B5B5] text-base">
                + 988 more cryptocurrencies available for backtesting
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 lg:py-32 bg-gradient-to-b from-[#111113] to-[#0a0a0a]">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-white">
                Ready to Test Your
                <br />
                <span className="text-[#38FE60]">Crypto Trading Strategy?</span>
              </h2>
              <p className="text-[#B5B5B5] text-lg md:text-xl max-w-2xl mx-auto">
                Join 66,000+ traders who trust KiteKrakenAlgo for their backtesting needs. Start validating your strategies today.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <Button
                  onClick={() => {
                    window.scrollTo(0, 0);
                    navigate('/pricing', { replace: false, state: { scrollTop: true } });
                  }}
                  className="bg-[#38FE60] text-[#111113] hover:bg-[#36FE60] font-normal px-10 py-7 rounded-full text-lg transition-all hover:scale-105 shadow-lg w-full sm:w-auto"
                >
                  Get Started Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
              <p className="text-[#9CA3AF] text-sm">No credit card required • Free trial available</p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Backtesting;

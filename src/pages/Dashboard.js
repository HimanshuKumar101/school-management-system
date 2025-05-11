import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
} from 'recharts';

const Dashboard = () => {
  const { user } = useAuth();
  const [selectedMetric, setSelectedMetric] = useState('attendance');
  const [selectedReportType, setSelectedReportType] = useState('summary');
  const [isGeneratingReport, setIsGeneratingReport] = useState(false);

  const metrics = {
    attendance: {
      total: 95,
      present: 89,
      absent: 6,
    },
    performance: {
      average: 85,
      highest: 95,
      lowest: 75,
    },
    events: [
      { title: 'Science Exhibition', date: '2024-03-15', type: 'Academic' },
      { title: 'Sports Day', date: '2024-03-20', type: 'Sports' },
      { title: 'Parent-Teacher Meeting', date: '2024-03-25', type: 'Meeting' },
    ],
  };

  // Chart data
  const attendanceData = [
    { name: 'Mon', present: 92, absent: 8 },
    { name: 'Tue', present: 88, absent: 12 },
    { name: 'Wed', present: 95, absent: 5 },
    { name: 'Thu', present: 90, absent: 10 },
    { name: 'Fri', present: 85, absent: 15 },
  ];

  const performanceData = [
    { name: 'Class A', value: 85 },
    { name: 'Class B', value: 78 },
    { name: 'Class C', value: 92 },
    { name: 'Class D', value: 88 },
  ];

  const subjectPerformanceData = [
    { name: 'Math', score: 88 },
    { name: 'Science', score: 92 },
    { name: 'English', score: 85 },
    { name: 'History', score: 78 },
    { name: 'Geography', score: 82 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

  const quickActions = {
    admin: [
      { name: 'Add Student', icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z' },
      { name: 'Add Teacher', icon: 'M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z' },
      { name: 'Generate Report', icon: 'M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' },
    ],
    teacher: [
      { name: 'Take Attendance', icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01' },
      { name: 'Upload Results', icon: 'M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12' },
      { name: 'Schedule Meeting', icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' },
    ],
    student: [
      { name: 'View Results', icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' },
      { name: 'Check Attendance', icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01' },
      { name: 'View Events', icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' },
    ],
    parent: [
      { name: 'View Children', icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z' },
      { name: 'Check Results', icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' },
      { name: 'Schedule Meeting', icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' },
    ],
  };

  // AI Insights and Alerts
  const insights = {
    attendance: [
      { type: 'warning', message: 'Class 10B shows declining attendance trend', severity: 'high' },
      { type: 'info', message: 'Overall attendance improved by 5% this week', severity: 'low' },
    ],
    performance: [
      { type: 'warning', message: 'Math scores below average in Class 8A', severity: 'medium' },
      { type: 'success', message: 'Science performance improved across all classes', severity: 'low' },
    ],
    behavior: [
      { type: 'warning', message: 'Increased late arrivals in Class 9C', severity: 'medium' },
      { type: 'info', message: 'Positive behavior reports increased by 15%', severity: 'low' },
    ],
  };

  const reportTypes = [
    { id: 'summary', name: 'Summary Report', description: 'Overview of key metrics and trends' },
    { id: 'attendance', name: 'Attendance Analysis', description: 'Detailed attendance patterns and alerts' },
    { id: 'performance', name: 'Performance Report', description: 'Academic performance analysis' },
    { id: 'behavior', name: 'Behavior Report', description: 'Student behavior and discipline analysis' },
  ];

  const generateReport = async () => {
    setIsGeneratingReport(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      alert('Report generated successfully!');
    } catch (error) {
      alert('Error generating report. Please try again.');
    } finally {
      setIsGeneratingReport(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Attendance Card */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Attendance Overview</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-500 dark:text-gray-400">Total Students</span>
              <span className="text-gray-900 dark:text-white font-medium">{metrics.attendance.total}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-500 dark:text-gray-400">Present</span>
              <span className="text-green-600 dark:text-green-400 font-medium">{metrics.attendance.present}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-500 dark:text-gray-400">Absent</span>
              <span className="text-red-600 dark:text-red-400 font-medium">{metrics.attendance.absent}</span>
            </div>
          </div>
        </div>

        {/* Performance Card */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Performance Overview</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-500 dark:text-gray-400">Average Score</span>
              <span className="text-gray-900 dark:text-white font-medium">{metrics.performance.average}%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-500 dark:text-gray-400">Highest Score</span>
              <span className="text-green-600 dark:text-green-400 font-medium">{metrics.performance.highest}%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-500 dark:text-gray-400">Lowest Score</span>
              <span className="text-red-600 dark:text-red-400 font-medium">{metrics.performance.lowest}%</span>
            </div>
          </div>
        </div>

        {/* Upcoming Events Card */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Upcoming Events</h3>
          <div className="space-y-4">
            {metrics.events.map((event, index) => (
              <div key={index} className="flex justify-between items-center">
                <div>
                  <p className="text-gray-900 dark:text-white font-medium">{event.title}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{event.type}</p>
                </div>
                <span className="text-gray-500 dark:text-gray-400">{event.date}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Weekly Attendance Chart */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Weekly Attendance</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={attendanceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="present" name="Present" fill="#10B981" />
                <Bar dataKey="absent" name="Absent" fill="#EF4444" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Class Performance Distribution */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Class Performance Distribution</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={performanceData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {performanceData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Subject-wise Performance */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Subject-wise Performance</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={subjectPerformanceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="score" name="Score" stroke="#3B82F6" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Performance Trends */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Performance Trends</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={attendanceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="present" name="Performance" stroke="#8B5CF6" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* AI-Powered Report Generator */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">AI-Powered Report Generator</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Generate comprehensive reports with AI insights and recommendations
            </p>
          </div>
          <button
            onClick={generateReport}
            disabled={isGeneratingReport}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isGeneratingReport ? 'Generating...' : 'Generate Report'}
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Report Type Selection */}
          <div className="space-y-4">
            <h4 className="text-md font-medium text-gray-900 dark:text-white">Select Report Type</h4>
            <div className="grid grid-cols-1 gap-3">
              {reportTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => setSelectedReportType(type.id)}
                  className={`p-4 text-left rounded-lg border ${
                    selectedReportType === type.id
                      ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                      : 'border-gray-200 dark:border-gray-700 hover:border-blue-500'
                  }`}
                >
                  <h5 className="font-medium text-gray-900 dark:text-white">{type.name}</h5>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{type.description}</p>
                </button>
              ))}
            </div>
          </div>

          {/* AI Insights */}
          <div className="space-y-4">
            <h4 className="text-md font-medium text-gray-900 dark:text-white">AI Insights & Alerts</h4>
            <div className="space-y-3">
              {insights[selectedReportType]?.map((insight, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg border ${
                    insight.type === 'warning'
                      ? 'border-red-200 bg-red-50 dark:bg-red-900/20'
                      : insight.type === 'success'
                      ? 'border-green-200 bg-green-50 dark:bg-green-900/20'
                      : 'border-blue-200 bg-blue-50 dark:bg-blue-900/20'
                  }`}
                >
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      {insight.type === 'warning' && (
                        <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                      )}
                      {insight.type === 'success' && (
                        <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      )}
                      {insight.type === 'info' && (
                        <svg className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                        </svg>
                      )}
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900 dark:text-white">{insight.message}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                        Severity: {insight.severity.charAt(0).toUpperCase() + insight.severity.slice(1)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {quickActions[user?.role]?.map((action, index) => (
            <button
              key={index}
              className="flex items-center space-x-2 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
            >
              <svg
                className="h-6 w-6 text-gray-500 dark:text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={action.icon} />
              </svg>
              <span className="text-gray-900 dark:text-white">{action.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 
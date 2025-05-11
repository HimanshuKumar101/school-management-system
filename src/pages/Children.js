import React, { useState } from 'react';

const Children = () => {
  const [children] = useState([
    {
      id: 1,
      name: 'Emma Johnson',
      class: 'Class 10A',
      rollNumber: '101',
      attendance: 95,
      performance: 88,
      recentGrades: [
        { subject: 'Mathematics', grade: 'A', score: 92 },
        { subject: 'Science', grade: 'A-', score: 88 },
        { subject: 'English', grade: 'B+', score: 85 },
      ],
      upcomingEvents: [
        { title: 'Science Project Submission', date: '2024-03-15' },
        { title: 'Parent-Teacher Meeting', date: '2024-03-20' },
      ],
    },
    {
      id: 2,
      name: 'Michael Johnson',
      class: 'Class 8B',
      rollNumber: '203',
      attendance: 92,
      performance: 85,
      recentGrades: [
        { subject: 'Mathematics', grade: 'B+', score: 87 },
        { subject: 'Science', grade: 'A', score: 90 },
        { subject: 'English', grade: 'B', score: 82 },
      ],
      upcomingEvents: [
        { title: 'Sports Day', date: '2024-03-18' },
        { title: 'Math Test', date: '2024-03-22' },
      ],
    },
  ]);

  const [selectedChild, setSelectedChild] = useState(null);

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">My Children</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {children.map((child) => (
          <div
            key={child.id}
            className={`card cursor-pointer transition-colors ${
              selectedChild === child.id ? 'ring-2 ring-blue-500' : ''
            }`}
            onClick={() => setSelectedChild(child.id)}
          >
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-lg font-medium text-gray-900 dark:text-white">{child.name}</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">{child.class}</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-500 dark:text-gray-400">Roll No: {child.rollNumber}</p>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className="bg-blue-50 dark:bg-blue-900/30 p-3 rounded-lg">
                <p className="text-sm text-gray-500 dark:text-gray-400">Attendance</p>
                <p className="text-lg font-medium text-blue-600 dark:text-blue-400">
                  {child.attendance}%
                </p>
              </div>
              <div className="bg-green-50 dark:bg-green-900/30 p-3 rounded-lg">
                <p className="text-sm text-gray-500 dark:text-gray-400">Performance</p>
                <p className="text-lg font-medium text-green-600 dark:text-green-400">
                  {child.performance}%
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedChild && (
        <div className="card">
          <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
            {children.find(c => c.id === selectedChild)?.name}'s Details
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-md font-medium text-gray-900 dark:text-white mb-2">Recent Grades</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead className="bg-gray-50 dark:bg-gray-800">
                    <tr>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Subject
                      </th>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Grade
                      </th>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Score
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
                    {children
                      .find(c => c.id === selectedChild)
                      ?.recentGrades.map((grade, index) => (
                        <tr key={index}>
                          <td className="px-4 py-2 text-sm text-gray-900 dark:text-white">
                            {grade.subject}
                          </td>
                          <td className="px-4 py-2 text-sm text-gray-900 dark:text-white">
                            {grade.grade}
                          </td>
                          <td className="px-4 py-2 text-sm text-gray-900 dark:text-white">
                            {grade.score}%
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h3 className="text-md font-medium text-gray-900 dark:text-white mb-2">Upcoming Events</h3>
              <div className="space-y-2">
                {children
                  .find(c => c.id === selectedChild)
                  ?.upcomingEvents.map((event, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg"
                    >
                      <span className="text-sm text-gray-900 dark:text-white">{event.title}</span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">{event.date}</span>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Children; 
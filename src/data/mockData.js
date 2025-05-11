export const students = [
  {
    id: 1,
    name: 'John Doe',
    class: 'Class A',
    rollNumber: 'A001',
    attendance: 95,
    performance: 88,
  },
  {
    id: 2,
    name: 'Jane Smith',
    class: 'Class A',
    rollNumber: 'A002',
    attendance: 92,
    performance: 95,
  },
  // Add more mock students as needed
];

export const teachers = [
  {
    id: 1,
    name: 'Dr. Sarah Johnson',
    subject: 'Mathematics',
    classes: ['Class A', 'Class B'],
    experience: '10 years',
  },
  {
    id: 2,
    name: 'Prof. Michael Brown',
    subject: 'Physics',
    classes: ['Class C', 'Class D'],
    experience: '8 years',
  },
  // Add more mock teachers as needed
];

export const events = [
  {
    id: 1,
    title: 'Annual Sports Day',
    date: '2024-03-15',
    type: 'Sports',
    description: 'Annual sports competition for all classes',
  },
  {
    id: 2,
    title: 'Science Exhibition',
    date: '2024-04-20',
    type: 'Academic',
    description: 'Student science projects exhibition',
  },
  // Add more mock events as needed
];

export const attendanceData = {
  'Class A': {
    present: 45,
    absent: 5,
    total: 50,
  },
  'Class B': {
    present: 42,
    absent: 8,
    total: 50,
  },
  // Add more class attendance data
};

export const performanceData = {
  'Class A': {
    average: 85,
    highest: 95,
    lowest: 75,
  },
  'Class B': {
    average: 82,
    highest: 92,
    lowest: 72,
  },
  // Add more class performance data
};

export const messages = [
  {
    id: 1,
    from: 'Dr. Sarah Johnson',
    to: 'John Doe',
    subject: 'Assignment Submission',
    content: 'Please submit your mathematics assignment by Friday.',
    date: '2024-02-20',
  },
  // Add more mock messages
];

export const meetings = [
  {
    id: 1,
    teacher: 'Dr. Sarah Johnson',
    parent: 'Mr. Doe',
    student: 'John Doe',
    date: '2024-03-01',
    time: '14:00',
    status: 'Scheduled',
  },
  // Add more mock meetings
]; 
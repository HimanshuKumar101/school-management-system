# School Management System

A comprehensive school management system built with React and Tailwind CSS. **This is a frontend-only project using demo/mock data.**

## Project Structure

```
src/
├── components/
│   ├── auth/
│   │   ├── Login.js
│   │   └── ProtectedRoute.js
│   ├── dashboard/
│   │   ├── Dashboard.js
│   │   ├── QuickActions.js
│   │   └── Metrics.js
│   ├── layout/
│   │   ├── Sidebar.js
│   │   ├── Header.js
│   │   └── Layout.js
│   ├── modules/
│   │   ├── students/
│   │   ├── teachers/
│   │   ├── attendance/
│   │   ├── events/
│   │   ├── results/
│   │   └── meetings/
│   └── shared/
│       ├── Button.js
│       ├── Card.js
│       └── Table.js
├── context/
│   ├── AuthContext.js
│   └── ThemeContext.js
├── data/
│   └── mockData.js
├── pages/
│   ├── Home.js
│   ├── Login.js
│   └── Dashboard.js
├── utils/
│   ├── auth.js
│   └── helpers.js
└── App.js
```

## Features

- Role-Based Access Control (Admin, Teacher, Student, Parent)
- Performance Dashboard with Real-time Metrics
- Student & Teacher Management
- Attendance Tracking
- Event Scheduling
- Results Management
- Parent-Teacher Meeting Scheduler
- Messaging System
- Statistical Analysis
- AI-Powered Report Generation
- Theme Customization

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd school-management-system
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open the application in your browser at `http://localhost:3000`.

## Technologies Used

- React
- React Router
- Tailwind CSS
- Recharts (for data visualization)
- Heroicons
- Headless UI
   
## Note

This project is **frontend-only** and uses **mock/demo data** for features like students, teachers, attendance, events, and more. There is no backend or database integration.

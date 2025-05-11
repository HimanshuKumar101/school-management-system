import React, { useState } from 'react';
import { teachers as mockTeachers } from '../data/mockData';

const Teachers = () => {
  const [teachers, setTeachers] = useState(mockTeachers);
  const [isAddingTeacher, setIsAddingTeacher] = useState(false);
  const [newTeacher, setNewTeacher] = useState({
    name: '',
    subject: '',
    classes: '',
    experience: '',
  });

  const handleAddTeacher = (e) => {
    e.preventDefault();
    const teacher = {
      id: teachers.length + 1,
      ...newTeacher,
      classes: newTeacher.classes.split(',').map(c => c.trim()),
    };
    setTeachers([...teachers, teacher]);
    setNewTeacher({ name: '', subject: '', classes: '', experience: '' });
    setIsAddingTeacher(false);
  };

  const handleDeleteTeacher = (id) => {
    setTeachers(teachers.filter(teacher => teacher.id !== id));
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Teachers</h1>
        <button
          onClick={() => setIsAddingTeacher(true)}
          className="btn-primary"
        >
          Add Teacher
        </button>
      </div>

      {isAddingTeacher && (
        <div className="card">
          <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Add New Teacher</h2>
          <form onSubmit={handleAddTeacher} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Name
              </label>
              <input
                type="text"
                className="input-field"
                value={newTeacher.name}
                onChange={(e) => setNewTeacher({ ...newTeacher, name: e.target.value })}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Subject
              </label>
              <input
                type="text"
                className="input-field"
                value={newTeacher.subject}
                onChange={(e) => setNewTeacher({ ...newTeacher, subject: e.target.value })}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Classes (comma-separated)
              </label>
              <input
                type="text"
                className="input-field"
                value={newTeacher.classes}
                onChange={(e) => setNewTeacher({ ...newTeacher, classes: e.target.value })}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Experience
              </label>
              <input
                type="text"
                className="input-field"
                value={newTeacher.experience}
                onChange={(e) => setNewTeacher({ ...newTeacher, experience: e.target.value })}
                required
              />
            </div>
            <div className="flex space-x-4">
              <button type="submit" className="btn-primary">
                Save
              </button>
              <button
                type="button"
                onClick={() => setIsAddingTeacher(false)}
                className="btn-secondary"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="card">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-800">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Subject
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Classes
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Experience
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
              {teachers.map((teacher) => (
                <tr key={teacher.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                    {teacher.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                    {teacher.subject}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                    {teacher.classes.join(', ')}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                    {teacher.experience}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                    <button
                      onClick={() => handleDeleteTeacher(teacher.id)}
                      className="text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Teachers; 
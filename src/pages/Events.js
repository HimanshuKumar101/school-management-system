import React, { useState } from 'react';

const Events = () => {
  const [events, setEvents] = useState([
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
  ]);

  const [isAddingEvent, setIsAddingEvent] = useState(false);
  const [newEvent, setNewEvent] = useState({
    title: '',
    date: '',
    type: 'Academic',
    description: '',
  });

  const handleAddEvent = (e) => {
    e.preventDefault();
    const event = {
      id: events.length + 1,
      ...newEvent,
    };
    setEvents([...events, event]);
    setNewEvent({ title: '', date: '', type: 'Academic', description: '' });
    setIsAddingEvent(false);
  };

  const handleDeleteEvent = (id) => {
    setEvents(events.filter(event => event.id !== id));
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Events</h1>
        <button
          onClick={() => setIsAddingEvent(true)}
          className="btn-primary"
        >
          Add Event
        </button>
      </div>

      {isAddingEvent && (
        <div className="card">
          <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Add New Event</h2>
          <form onSubmit={handleAddEvent} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Title
              </label>
              <input
                type="text"
                className="input-field"
                value={newEvent.title}
                onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Date
              </label>
              <input
                type="date"
                className="input-field"
                value={newEvent.date}
                onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Type
              </label>
              <select
                className="input-field"
                value={newEvent.type}
                onChange={(e) => setNewEvent({ ...newEvent, type: e.target.value })}
                required
              >
                <option value="Academic">Academic</option>
                <option value="Sports">Sports</option>
                <option value="Cultural">Cultural</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Description
              </label>
              <textarea
                className="input-field"
                value={newEvent.description}
                onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
                required
              />
            </div>
            <div className="flex space-x-4">
              <button type="submit" className="btn-primary">
                Save
              </button>
              <button
                type="button"
                onClick={() => setIsAddingEvent(false)}
                className="btn-secondary"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event) => (
          <div key={event.id} className="card">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">{event.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{event.date}</p>
              </div>
              <span className="px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                {event.type}
              </span>
            </div>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{event.description}</p>
            <div className="mt-4 flex justify-end">
              <button
                onClick={() => handleDeleteEvent(event.id)}
                className="text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events; 
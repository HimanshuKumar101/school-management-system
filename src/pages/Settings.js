import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

const Settings = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [settings, setSettings] = useState({
    notifications: true,
    emailNotifications: true,
    language: 'en',
    timezone: 'UTC',
  });

  const handleSettingChange = (key, value) => {
    setSettings(prev => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSaveSettings = () => {
    // In a real application, this would save to a backend
    console.log('Settings saved:', settings);
    alert('Settings saved successfully!');
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Settings</h1>
        <button onClick={handleSaveSettings} className="btn-primary">
          Save Changes
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="card">
          <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Appearance</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Dark Mode
              </label>
              <button
                onClick={toggleTheme}
                className={`relative inline-flex h-6 w-11 items-center rounded-full ${
                  isDarkMode ? 'bg-blue-600' : 'bg-gray-200'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                    isDarkMode ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
          </div>
        </div>

        <div className="card">
          <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Notifications</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Enable Notifications
              </label>
              <button
                onClick={() => handleSettingChange('notifications', !settings.notifications)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full ${
                  settings.notifications ? 'bg-blue-600' : 'bg-gray-200'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                    settings.notifications ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Email Notifications
              </label>
              <button
                onClick={() => handleSettingChange('emailNotifications', !settings.emailNotifications)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full ${
                  settings.emailNotifications ? 'bg-blue-600' : 'bg-gray-200'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                    settings.emailNotifications ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
          </div>
        </div>

        <div className="card">
          <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Language & Region</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Language
              </label>
              <select
                value={settings.language}
                onChange={(e) => handleSettingChange('language', e.target.value)}
                className="input-field"
              >
                <option value="en">English</option>
                <option value="es">Spanish</option>
                <option value="fr">French</option>
                <option value="de">German</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Timezone
              </label>
              <select
                value={settings.timezone}
                onChange={(e) => handleSettingChange('timezone', e.target.value)}
                className="input-field"
              >
                <option value="UTC">UTC</option>
                <option value="EST">EST</option>
                <option value="PST">PST</option>
                <option value="GMT">GMT</option>
              </select>
            </div>
          </div>
        </div>

        <div className="card">
          <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Account</h2>
          <div className="space-y-4">
            <button className="w-full btn-secondary">
              Change Password
            </button>
            <button className="w-full btn-secondary">
              Update Profile
            </button>
            <button className="w-full text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300">
              Delete Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings; 
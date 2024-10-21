import React from 'react';

function Header({ darkMode, setDarkMode, sidebarVisible, setSidebarVisible }) {
  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Markdown Editor</h1>
      <div className="flex items-center space-x-4">
        <button
          onClick={() => setSidebarVisible(!sidebarVisible)}
          className="p-2 rounded hover:bg-gray-700"
        >
          {sidebarVisible ? 'Hide Sidebar' : 'Show Sidebar'}
        </button>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded hover:bg-gray-700"
        >
          {darkMode ? '☀️' : '🌙'}
        </button>
      </div>
    </header>
  );
}

export default Header;
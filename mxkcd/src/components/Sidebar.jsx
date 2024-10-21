import React from 'react';

function Sidebar() {
  return (
    <div className="w-64 bg-gray-100 dark:bg-gray-700 p-4 overflow-y-auto">
      <input
        type="text"
        placeholder="Search files..."
        className="w-full p-2 mb-4 rounded bg-white dark:bg-gray-600 text-gray-800 dark:text-white"
      />
      <ul className="space-y-2">
        <li className="p-2 hover:bg-gray-200 dark:hover:bg-gray-600 rounded cursor-pointer">
          File 1.md
        </li>
        <li className="p-2 hover:bg-gray-200 dark:hover:bg-gray-600 rounded cursor-pointer">
          File 2.md
        </li>
        <li className="p-2 hover:bg-gray-200 dark:hover:bg-gray-600 rounded cursor-pointer">
          File 3.md
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
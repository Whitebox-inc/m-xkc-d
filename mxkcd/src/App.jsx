import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import EditorPane from './components/EditorPane';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [sidebarVisible, setSidebarVisible] = useState(true);

  return (
    <div className={`h-screen flex flex-col ${darkMode ? 'dark' : ''}`}>
      <Header 
        darkMode={darkMode} 
        setDarkMode={setDarkMode} 
        sidebarVisible={sidebarVisible}
        setSidebarVisible={setSidebarVisible}
      />
      <div className="flex flex-1 overflow-hidden">
        {sidebarVisible && <Sidebar />}
        <EditorPane />
      </div>
    </div>
  );
}

export default App;
import React, { useState } from 'react';

function EditorPane() {
  const [markdown, setMarkdown] = useState('# Welcome to Markdown Editor');

  return (
    <div className="flex-1 flex">
      <textarea
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
        className="flex-1 p-4 bg-white dark:bg-gray-800 text-gray-800 dark:text-white resize-none"
      />
      <div
        className="flex-1 p-4 bg-gray-100 dark:bg-gray-700 overflow-y-auto"
        dangerouslySetInnerHTML={{ __html: markdown }}
      />
    </div>
  );
}

export default EditorPane;
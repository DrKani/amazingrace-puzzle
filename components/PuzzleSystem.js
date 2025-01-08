// components/PuzzleSystem.js
import React, { useState } from 'react';

// Simplified version without external UI dependencies
const PuzzleSystem = () => {
  const [activeTab, setActiveTab] = useState('crossword');

  return (
    <div className="w-full max-w-4xl mx-auto p-4 bg-white rounded-lg shadow-lg">
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-purple-900">
          AmazinGrace Spiritual Puzzles
        </h1>
      </div>
      
      <div className="space-y-4">
        <div className="flex gap-4 justify-center">
          <button
            onClick={() => setActiveTab('crossword')}
            className={`px-4 py-2 rounded ${
              activeTab === 'crossword' ? 'bg-purple-600 text-white' : 'bg-gray-200'
            }`}
          >
            Crossword
          </button>
          <button
            onClick={() => setActiveTab('wordSearch')}
            className={`px-4 py-2 rounded ${
              activeTab === 'wordSearch' ? 'bg-purple-600 text-white' : 'bg-gray-200'
            }`}
          >
            Word Search
          </button>
          <button
            onClick={() => setActiveTab('quotes')}
            className={`px-4 py-2 rounded ${
              activeTab === 'quotes' ? 'bg-purple-600 text-white' : 'bg-gray-200'
            }`}
          >
            Divine Quotes
          </button>
        </div>

        <div className="p-4 border rounded">
          {activeTab === 'crossword' && <div>Crossword Puzzle Content</div>}
          {activeTab === 'wordSearch' && <div>Word Search Content</div>}
          {activeTab === 'quotes' && <div>Divine Quotes Content</div>}
        </div>
      </div>
    </div>
  );
};

export default PuzzleSystem;
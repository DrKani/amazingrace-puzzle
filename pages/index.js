// pages/index.js
// This is our main page that will display the puzzle system
import PuzzleSystem from '../components/PuzzleSystem'

export default function Home() {
  return (
    // Create a full-height container with the theme's background color
    <div className="min-h-screen bg-[#4B0082] p-4">
      <div className="max-w-7xl mx-auto">
        {/* Add the title section matching the AmazinGrace poster */}
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold gradient-text mb-2">
            AmazinGrace 2025
          </h1>
          <p className="text-[#E5C1A9] text-lg">
            National Young Adult Retreat Puzzle Challenge
          </p>
        </header>
        
        {/* Render our main puzzle component */}
        <PuzzleSystem />
      </div>
    </div>
  )
}
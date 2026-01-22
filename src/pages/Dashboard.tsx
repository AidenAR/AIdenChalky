import Background from '../components/layout/Background'
import Sidebar from '../components/layout/Sidebar'
import Mascot from '../components/layout/Mascot'

export default function Dashboard() {
  return (
    <Background>
      <Sidebar />
      
      <div className="min-h-screen pl-12 pr-6 py-8 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-display font-bold text-white drop-shadow-lg mb-4">
            Dashboard
          </h1>
          <p className="text-white/80 font-body text-lg">
            Coming soon! 📚
          </p>
        </div>
      </div>
      
      {/* Mascot */}
      <Mascot 
        className="fixed bottom-6 left-14 z-20" 
        size="md"
      />
    </Background>
  )
}

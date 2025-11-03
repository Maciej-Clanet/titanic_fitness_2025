import './App.css'
import Routing from './routing'
import DesktopHeader from './components/DesktopHeader/DesktopHeader'
import MobileHeader from './components/MobileHeader/MobileHeader'

function App() {
  return (
    <>
      <DesktopHeader/>
      <MobileHeader/>
      <main id="main-content">
        <Routing/>
      </main>

    </>
  )
}

export default App

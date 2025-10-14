import './App.css'
import Routing from './routing'
import DesktopHeader from './components/DesktopHeader/DesktopHeader'

function App() {
  return (
    <>
      <DesktopHeader/>
      <main id="main-content">
        <Routing/>
      </main>

    </>
  )
}

export default App

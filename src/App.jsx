import './App.css'
import MainSect from './components/MainSect'
import Sidebar from './components/SIdebar'

function App() {

  return (
    <>
    <div className='flex flex-col lg:flex-row'>
      <Sidebar/>
      <MainSect/>
    </div>
    </>
  )
}

export default App

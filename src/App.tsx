import './App.css'
import { Sidebar } from './components/sidebar/sidebar'
import { Routes, Route } from "react-router-dom";
import AddPage from './pages/add-page';
import ListPage from './pages/list-page';
import EditPage from './pages/edit-page';
import { Toaster } from 'react-hot-toast';

function App() {

  return (
    <div className='bg-white h-screen w-full flex'>
      <Toaster/>
      <div>
        <Sidebar/>
      </div>
      <Routes>
          <Route path="/add" element={<AddPage />} />
          <Route path="/list" element={<ListPage />} />
          <Route path="/edit/:id" element={<EditPage />} />
      </Routes>
    </div>
  )
}

export default App

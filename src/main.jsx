import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import Fit_Center from '../Header_File/Fit_Center.jsx'
import Fit_Parther from '../Header_File/Fit_Parther.jsx'
import Blogs from '../Header_File/Blogs.jsx'
import Appx from '../Header_File/Appx.jsx'
import Help from '../Header_File/Help.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}>
          <Route path='/fit_center' element={<Fit_Center/>}/>
          <Route path='/fit_parther' element={<Fit_Parther/>}/>
          <Route path='/blogs' element={<Blogs/>}/>
          <Route path='/appx' element={<Appx/>}/>
          <Route path='/help' element={<Help/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    
  </StrictMode>,
)

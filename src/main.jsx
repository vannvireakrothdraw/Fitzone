import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import App from './App'
import Fit_Center from '../Pages/Header_File/Fit_Center'
import Blogs from '../Pages/Header_File/Blogs'
import Fit_Parther from '../Pages/Header_File/Fit_Parther'
import Appx from '../Pages/Header_File/Appx'
import Help from '../Pages/Header_File/Help.jsx'


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

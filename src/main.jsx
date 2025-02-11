import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'
import "./index.css"

// RTK query
import { ApiProvider } from '@reduxjs/toolkit/query/react'
import apiSlice from './RTK query/apiSlice.js'

// components
import App from './App.jsx'
import AddTask from './pages/AddTask.jsx'
import Daily from './pages/Daily.jsx'
import Weekly from './pages/Weekly.jsx'
import Yearly from './pages/Yearly.jsx'
import Anytime from './pages/Anytime.jsx'

createRoot(document.getElementById('root')).render(
  <ApiProvider api={apiSlice}>
      <BrowserRouter>
        <StrictMode>
          <Routes>
            <Route path="" element={<App/>} >
              <Route path="/" element={<Daily/>} />
              <Route path="/new" element={<AddTask/>} />
              <Route path="/weekly" element={<Weekly/>} />
              <Route path="/yearly" element={<Yearly/>} />
              <Route path="/anytime" element={<Anytime/>} />
            </Route>
          </Routes>
        </StrictMode>,
      </BrowserRouter>
  </ApiProvider>
)

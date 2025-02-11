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

createRoot(document.getElementById('root')).render(
  <ApiProvider api={apiSlice}>
      <BrowserRouter>
        <StrictMode>
          <Routes>
            <Route path="" element={<App/>} >
              <Route path="/" element={<Daily/>} />
              <Route path="/new" element={<AddTask/>} />
              <Route path="/weekly" element={<h1>Weekly tasks</h1>} />
              <Route path="/yearly" element={<h1>Yearly tasks</h1>} />
              <Route path="/anytime" element={<h1>Anytime</h1>} />
            </Route>
          </Routes>
        </StrictMode>,
      </BrowserRouter>
  </ApiProvider>
)

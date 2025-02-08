import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <Routes>
        <Route path="/" element={<App/>} >
          <Route path="/new" element={<h1>Add New Task</h1>} />
          <Route path="/weekly" element={<h1>Weekly tasks</h1>} />
          <Route path="/yearly" element={<h1>Yearly tasks</h1>} />
          <Route path="/anytime" element={<h1>Anytime</h1>} />
        </Route>
      </Routes>
    </StrictMode>,
  </BrowserRouter>
)

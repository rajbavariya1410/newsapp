import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import NewsCard from './components/NewsCard'
import LatestNews from './components/LatestNews'
import Politic from './components/Politic'
import SportNews from './components/SportNews'
import Technology from './components/Technology'
import Entertainment from './components/Entertainment'
import Footer from './components/Footer'


function App() {
  const apiKey = "pub_684b5d2354074edaaed32e0ec63a5805";
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/newsapp" element={<NewsCard apiKey={apiKey}/>} />
        <Route path="/newsapp/trending" element={<LatestNews apiKey={apiKey}/>} />
        <Route path="/newsapp/politics" element={<Politic apiKey={apiKey}/>} />
        <Route path="/newsapp/sports" element={<SportNews apiKey={apiKey}/>} />
        <Route path="/newsapp/technology" element={<Technology apiKey={apiKey}/>} />
        <Route path="/newsapp/entertainment" element={<Entertainment apiKey={apiKey}/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

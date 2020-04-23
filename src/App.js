import React from 'react';
import './App.css';
import data from './data/data'
import Header from './components/Header';
import Card from './components/Card'

function App() {

  return (
    <div className='App'>
      <Header />
      <div className='grid'>
        {data.map((item, index) =>
          <Card key={index} item = {item} />
        )}
      </div>
    </div>
  )
}

export default App;
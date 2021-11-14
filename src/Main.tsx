import App from 'App';
import FruitList from 'FruitList';
import Home from 'Home';
import React from 'react';
import { Routes, Route } from 'react-router-dom';

function Main() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="fruits" element={<FruitList />} />
          <Route
            path="*"
            element={
              <main style={{ padding: '1rem' }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Route>
      </Routes>
    </div>
  );
}

export default Main;

import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <div>
      <nav>
        <Link to="/">홈</Link>
        <Link to="/fruits">과일 리스트</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;

import { useState } from 'react';
import './App.css';

import { BottomNavBar } from './components';
import { GamePage, MainPage, MyPage, SearchPage } from './pages';

function App() {
  const [activeTab, setActiveTab] = useState('home');

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <MainPage />;
      case 'game':
        return <GamePage />;
      case 'search':
        return <SearchPage />;
      case 'profile':
        return <MyPage />;
      default:
        return <MainPage />;
    }
  };
  return (
    <>
      <div className="pb-16">
        {renderContent()}
        <BottomNavBar activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
    </>
  );
}

export default App;

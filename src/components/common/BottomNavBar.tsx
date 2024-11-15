import { NavBarType } from '@/types';
import { FaHome, FaGamepad, FaSearch, FaUser } from 'react-icons/fa';

const BottomNavBar = ({ activeTab, setActiveTab }: NavBarType) => {
  const tabs = [
    { id: 'home', label: '메인', icon: <FaHome /> },
    { id: 'game', label: '게임', icon: <FaGamepad /> },
    { id: 'search', label: '검색', icon: <FaSearch /> },
    { id: 'profile', label: '마이', icon: <FaUser /> },
  ];

  return (
    <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200">
      <div className="container mx-auto flex justify-around items-center h-16 max-w-screen-mobile">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex flex-col items-center justify-center w-full h-full py-2 text-sm transition-colors duration-200 ${
              activeTab === tab.id ? 'text-black bg-gray-200 rounded-md' : 'text-gray-500'
            }`}
          >
            <div className={`mb-1 ${activeTab === tab.id ? 'scale-110' : ''}`}>{tab.icon}</div>
            <span>{tab.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default BottomNavBar;

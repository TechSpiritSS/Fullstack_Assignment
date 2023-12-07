import React from 'react';
import { Provider } from 'react-redux';
import UserTeam from './pages/User_Team';
import store from './redux/store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <h1>User Management App</h1>
        <UserTeam />
      </div>
    </Provider>
  );
};

export default App;


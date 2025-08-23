import '../App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import UserList from './UserList';
import UserDetail from './UserDetail';
import RandomUserCard from './random-user-card';
import Header from '../header';

function MainUserList() {
  return (
    <Router>
      <div className="App">
        <Header title="Multi-Page User App"/>
        
        {/* Navigation */}
        <nav style={styles.nav}>
          <Link to="/users" style={styles.navLink}>👥 User Directory</Link>
          <Link to="/single-user" style={styles.navLink}>👤 Single User Card</Link>
        </nav>

        <Routes>
          {/* User Directory Routes */}
          <Route path="/users" element={<UserList />} />
          <Route path="/user/:id" element={<UserDetail />} />
          
          {/* Single User Card */}
          <Route path="/single-user" element={
            <div style={{ padding: "20px" }}>
              <RandomUserCard />
            </div>
          } />
          
          {/* Default Route */}
          <Route path="/" element={<UserList />} />
        </Routes>
      </div>
    </Router>
  );
}

const styles = {
  nav: {
    background: '#f8f9fa',
    padding: 15,
    display: 'flex',
    gap: 20,
    justifyContent: 'center',
    borderBottom: '1px solid #ddd'
  },
  navLink: {
    textDecoration: 'none',
    color: '#007bff',
    padding: '10px 20px',
    borderRadius: 6,
    border: '1px solid #007bff',
    transition: 'all 0.3s'
  }
};

export default MainUserList;
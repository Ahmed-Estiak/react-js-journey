// src/components/UserList.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

function UserList() {
  const [gender, setGender] = useState('');
  
  // 10 users fetch করা
  const { data, loading, error, refetch } = useFetch(
    gender 
      ? `https://randomuser.me/api/?results=10&gender=${gender}`
      : 'https://randomuser.me/api/?results=10'
  );
  
  const users = data?.results || [];

  return (
    <div style={styles.container}>
      <h1>🌟 User Directory</h1>
      
      {/* Gender Filter */}
      <div style={styles.filterContainer}>
        <button 
          onClick={() => setGender('')}
          style={{...styles.filterBtn, ...(gender === '' ? styles.active : {})}}
        >
          All Users
        </button>
        <button 
          onClick={() => setGender('male')}
          style={{...styles.filterBtn, ...(gender === 'male' ? styles.active : {})}}
        >
          👨 Male
        </button>
        <button 
          onClick={() => setGender('female')}
          style={{...styles.filterBtn, ...(gender === 'female' ? styles.active : {})}}
        >
          👩 Female
        </button>
      </div>

      {/* Loading & Error States */}
      {loading && <div style={styles.loading}>⏳ Loading users...</div>}
      {error && (
        <div style={styles.error}>
          ❌ Error: {error}
          <button onClick={refetch} style={styles.retryBtn}>🔄 Retry</button>
        </div>
      )}

      {/* User Grid */}
      <div style={styles.userGrid}>
        {users.map((user, index) => (
          <Link 
            key={user.login.uuid || index} 
            to={`/user/${user.login.uuid || index}`}
            style={styles.userCard}
            state={{ user }} // Pass user data to detail page
          >
            <img 
              src={user.picture.medium} 
              alt="User" 
              style={styles.userImage}
            />
            <h3 style={styles.userName}>
              {user.name.first} {user.name.last}
            </h3>
            <p style={styles.userEmail}>📧 {user.email}</p>
            <p style={styles.userLocation}>
              📍 {user.location.city}, {user.location.country}
            </p>
          </Link>
        ))}
      </div>

      {/* Refresh Button */}
      <button onClick={refetch} style={styles.refreshBtn}>
        🔄 Load New Users
      </button>
    </div>
  );
}

const styles = {
  container: {
    padding: 20,
    maxWidth: 1200,
    margin: '0 auto'
  },
  filterContainer: {
    display: 'flex',
    gap: 10,
    justifyContent: 'center',
    marginBottom: 30
  },
  filterBtn: {
    padding: '10px 20px',
    border: '2px solid #ddd',
    borderRadius: 25,
    background: 'white',
    cursor: 'pointer',
    fontSize: 16,
    transition: 'all 0.3s'
  },
  active: {
    background: '#007bff',
    color: 'white',
    borderColor: '#007bff'
  },
  loading: {
    textAlign: 'center',
    fontSize: 18,
    padding: 40
  },
  error: {
    background: '#ffe6e6',
    border: '1px solid #ff4444',
    borderRadius: 8,
    padding: 15,
    margin: '20px 0',
    textAlign: 'center'
  },
  retryBtn: {
    marginLeft: 10,
    padding: '5px 15px',
    cursor: 'pointer'
  },
  userGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: 20,
    marginBottom: 30
  },
  userCard: {
    background: 'white',
    border: '1px solid #ddd',
    borderRadius: 12,
    padding: 20,
    textAlign: 'center',
    textDecoration: 'none',
    color: 'inherit',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    transition: 'transform 0.2s',
    cursor: 'pointer'
  },
  userImage: {
    width: 80,
    height: 80,
    borderRadius: '50%',
    marginBottom: 15
  },
  userName: {
    margin: '10px 0',
    color: '#333'
  },
  userEmail: {
    color: '#666',
    fontSize: 14,
    margin: '5px 0'
  },
  userLocation: {
    color: '#666',
    fontSize: 14,
    margin: '5px 0'
  },
  refreshBtn: {
    display: 'block',
    margin: '30px auto',
    padding: '15px 30px',
    background: '#28a745',
    color: 'white',
    border: 'none',
    borderRadius: 8,
    fontSize: 16,
    cursor: 'pointer'
  }
};

export default UserList;
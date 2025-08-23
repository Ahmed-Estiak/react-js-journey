// src/components/UserDetail.js
import React from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';

function UserDetail() {
  const { id } = useParams();
  const location = useLocation();
  const user = location.state?.user;

  if (!user) {
    return (
      <div style={styles.container}>
        <h2>❌ User not found</h2>
        <Link to="/users" style={styles.backBtn}>
          ← Back to User List
        </Link>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <Link to="/users" style={styles.backBtn}>
        ← Back to User List
      </Link>
      
      <div style={styles.userProfile}>
        <img 
          src={user.picture.large} 
          alt="User" 
          style={styles.profileImage}
        />
        
        <div style={styles.userInfo}>
          <h1 style={styles.fullName}>
            {user.name.title} {user.name.first} {user.name.last}
          </h1>
          
          <div style={styles.infoGrid}>
            <div style={styles.infoCard}>
              <h3>📧 Contact</h3>
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Phone:</strong> {user.phone}</p>
              <p><strong>Cell:</strong> {user.cell}</p>
            </div>
            
            <div style={styles.infoCard}>
              <h3>📍 Location</h3>
              <p><strong>Address:</strong> {user.location.street.number} {user.location.street.name}</p>
              <p><strong>City:</strong> {user.location.city}</p>
              <p><strong>State:</strong> {user.location.state}</p>
              <p><strong>Country:</strong> {user.location.country}</p>
              <p><strong>Postcode:</strong> {user.location.postcode}</p>
            </div>
            
            <div style={styles.infoCard}>
              <h3>👤 Personal Info</h3>
              <p><strong>Gender:</strong> {user.gender}</p>
              <p><strong>Age:</strong> {user.dob.age} years old</p>
              <p><strong>Date of Birth:</strong> {new Date(user.dob.date).toLocaleDateString()}</p>
              <p><strong>Nationality:</strong> {user.nat}</p>
            </div>
            
            <div style={styles.infoCard}>
              <h3>🔐 Account Info</h3>
              <p><strong>Username:</strong> {user.login.username}</p>
              <p><strong>UUID:</strong> {user.login.uuid}</p>
              <p><strong>Registered:</strong> {new Date(user.registered.date).toLocaleDateString()}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: 20,
    maxWidth: 1000,
    margin: '0 auto'
  },
  backBtn: {
    display: 'inline-block',
    background: '#007bff',
    color: 'white',
    padding: '10px 20px',
    textDecoration: 'none',
    borderRadius: 6,
    marginBottom: 30
  },
  userProfile: {
    background: 'white',
    borderRadius: 12,
    padding: 30,
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: '50%',
    display: 'block',
    margin: '0 auto 30px'
  },
  userInfo: {
    textAlign: 'center'
  },
  fullName: {
    color: '#333',
    marginBottom: 30,
    fontSize: 28
  },
  infoGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: 20,
    textAlign: 'left'
  },
  infoCard: {
    background: '#f8f9fa',
    padding: 20,
    borderRadius: 8,
    border: '1px solid #e9ecef'
  }
};

export default UserDetail;
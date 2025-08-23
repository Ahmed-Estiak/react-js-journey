import React from "react";
import useFetch from "../hooks/useFetch";
import { useState } from "react";

function RandomUserCard(){
  const [gender, setGender] = useState("");
  const {data, loading, error, refetch} = useFetch(
    gender ? `https://randomuser.me/api/?gender=${gender}` : "https://randomuser.me/api/");
  const user = data?.results?.[0];
  
  
  // Fallback data for testing/demo
  const fallbackUser = {
    name: { first: "Demo", last: "User" },
    email: "demo@example.com",
    location: { city: "Sample City", country: "Sample Country" },
    picture: { large: "https://via.placeholder.com/150/0066cc/ffffff?text=Demo+User" }
  };
  return (
    <div style={styles.container}>
    <h1>Random User Card</h1>
    <div>
        <button onClick={() => setGender('male')}>Male</button>
        <button onClick={() => setGender('female')}>Female</button>
        <button onClick={() => setGender('')}>All</button>
      </div>
    {error && (
      <div style={{color: 'red', marginBottom: 15, padding: 10, border: '1px solid red', borderRadius: 5}}>
        <p>❌ <strong>Error:</strong> {error}</p>
        
      </div>
    )}
    {loading && <p>⏳ Loading...</p>}
  
    {(user || error) && (
      <div style={styles.card}>
        <img 
          src={(user || fallbackUser).picture.large} 
          alt="User" 
          style={styles.image} 
        />
        <h2>
          {(user || fallbackUser).name.first} {(user || fallbackUser).name.last}
        </h2>
        <p>📧 {(user || fallbackUser).email}</p>
        <p>📍 {(user || fallbackUser).location.city}, {(user || fallbackUser).location.country}</p>
        {error && <p style={{color: 'orange', fontStyle: 'italic'}}>⚠️ Showing demo data due to API error</p>}
      </div>
    )}
  
    <button onClick={refetch} style={styles.button}>Next User</button>
  </div>
  );

}

const styles = {
  container: { textAlign: "center", padding: 20 },
  card: {
    border: "1px solid #ddd",
    padding: 20,
    borderRadius: 10,
    display: "inline-block",
    marginTop: 20,
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
  },
  image: { borderRadius: "50%", marginBottom: 10 },
  button: {
    marginTop: 20,
    padding: "10px 20px",
    fontSize: 16,
    cursor: "pointer"
  }
}

export default RandomUserCard;


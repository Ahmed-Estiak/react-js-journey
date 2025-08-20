import React, { useState, useEffect } from "react";

function RandomUserCard(){
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchUser = async()=>{
    setLoading(true);
    try{
      const response = await fetch("https://randomuser.me/api/");
      const data= await response.json();
      setUser(data.results[0]);
    }catch(error){
      console.error("Error fetching user:", error);
    }
    setLoading(false);
    
  }

  useEffect(()=>{
    fetchUser();
  }, []);
  return (
    <div style={styles.container}>
    <h1>Random User Card</h1>
  
    {loading && <p>Loading...</p>}
  
    {user && (
      <div style={styles.card}>
        <img src={user.picture.large} alt="User" style={styles.image} />
        <h2>{user.name.first} {user.name.last}</h2>
        <p>📧 {user.email}</p>
        <p>📍 {user.location.city}, {user.location.country}</p>
      </div>
    )}
  
    <button onClick={fetchUser} style={styles.button}>Next User</button>
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
  };

export default RandomUserCard;


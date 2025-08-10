import React, { useState } from 'react';

function LikeButtonCounter() {
  const [count, setCount] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const handleLike=()=>{
    setCount(count+1);
    setIsLiked(true);
  };

  return (
    <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',height:'20vh'}}>
      <button onClick={handleLike} style={{backgroundColor:'blue',color:'white',padding:'10px',borderRadius:'5px',cursor:'pointer'}}>
      ❤️ {count}
      </button>
      {isLiked && <p style={{marginTop:'10px'}}>Liked</p>}
    </div>
  )
};

export default LikeButtonCounter;
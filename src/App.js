import React from "react";

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
      <h1>Hi, I'm ______</h1>
      <img
        src="path/to/profile-pic.jpg"
        alt="Profile picture"
        style={{ width: '200px', height: '200px', borderRadius: '50%', margin: '20px 0' }}
      />
      <div style={{ textAlign: 'center' }}>
        <h2>About Me</h2>
        <p>Brief introduction about yourself.</p>
      </div>
      <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
        <a href="https://github.com/abudhosamuel" style={{ padding: '10px 20px', border: '1px solid #000', borderRadius: '5px', textDecoration: 'none' }}>GitHub</a>
        <a href="https://www.linkedin.com/in/samuel-abudho-14b72128b/" style={{ padding: '10px 20px', border: '1px solid #000', borderRadius: '5px', textDecoration: 'none' }}>LinkedIn</a>
      </div>
    </div>
  );
}

export default App;

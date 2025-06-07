import React, { useEffect, useState } from 'react'

const App = () => {
  const [message, setMessage] = useState('Loading...')

  useEffect(() => {
    fetch('https://multi-regional-cloud-infrastructure.onrender.com/api')
      .then(res => res.json())
      .then(data => setMessage(data.message))
      .catch(() => setMessage('Failed to fetch data'))
  }, [])

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      fontFamily: 'Segoe UI, Arial, sans-serif'
    }}>
      <div style={{
        background: 'white',
        padding: '2.5rem 3.5rem',
        borderRadius: '20px',
        boxShadow: '0 8px 32px rgba(0,0,0,0.18)',
        textAlign: 'center',
        minWidth: '340px',
        animation: 'fadeIn 1.2s'
      }}>
        {/* Logo or Avatar */}
        <div style={{
          width: 70,
          height: 70,
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #764ba2 60%, #667eea 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 1.5rem auto',
          boxShadow: '0 2px 12px rgba(118,75,162,0.15)'
        }}>
          <span style={{
            fontSize: 38,
            color: 'white',
            fontWeight: 700,
            letterSpacing: 1
          }}>☁️</span>
        </div>
        <h1 style={{
          color: '#764ba2',
          marginBottom: '0.5rem',
          fontWeight: 700,
          fontSize: '2rem',
          letterSpacing: '0.5px'
        }}>
          Multi-Regional Cloud Infrastructure
        </h1>
        <hr style={{
          border: 'none',
          borderTop: '2px solid #eee',
          margin: '1rem 0 1.5rem 0'
        }} />
        <p style={{
          fontSize: '1.15rem',
          color: '#444',
          marginBottom: 0,
          transition: 'color 0.3s'
        }}>
          {message}
        </p>
      </div>
      {/* Keyframes for fadeIn animation */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(30px);}
            to { opacity: 1; transform: translateY(0);}
          }
        `}
      </style>
    </div>
  )
}

export default App

// This is a simple React component that fetches a message from an API and displays it.
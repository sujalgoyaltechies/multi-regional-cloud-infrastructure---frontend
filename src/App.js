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
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    }}>
      <div style={{
        background: 'white',
        padding: '2rem 3rem',
        borderRadius: '16px',
        boxShadow: '0 4px 24px rgba(0,0,0,0.12)',
        textAlign: 'center'
      }}>
        <h1 style={{ color: '#764ba2', marginBottom: '1rem' }}>Multi-Regional Cloud Infrastructure</h1>
        <p style={{ fontSize: '1.25rem', color: '#333' }}>{message}</p>
      </div>
    </div>
  )
}

export default App

// This is a simple React component that fetches a message from an API and displays it.
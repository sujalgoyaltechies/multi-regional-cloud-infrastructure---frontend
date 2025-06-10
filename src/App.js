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
      width: '100vw',
      display: 'flex',
      flexDirection: 'column',
      background: 'linear-gradient(120deg, #667eea 0%, #764ba2 100%)',
      fontFamily: 'Segoe UI, Arial, sans-serif',
      overflow: 'hidden'
    }}>
      {/* Header */}
      <header style={{
        width: '100%',
        padding: '1.2rem 0',
        background: 'rgba(255,255,255,0.92)',
        boxShadow: '0 2px 12px rgba(118,75,162,0.08)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 10
      }}>
        <span style={{
          fontWeight: 800,
          fontSize: '1.5rem',
          color: '#764ba2',
          letterSpacing: '1px',
          display: 'flex',
          alignItems: 'center',
          gap: 10
        }}>
          <span style={{
            fontSize: 28,
            marginRight: 8
          }}>☁️</span>
          CloudInfra
        </span>
      </header>

      {/* Main Content */}
      <main style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '5.5rem',
        marginBottom: '4.5rem'
      }}>
        {/* Hero Card */}
        <div style={{
          background: 'rgba(255,255,255,0.97)',
          padding: '3rem 4rem',
          borderRadius: '28px',
          boxShadow: '0 12px 48px rgba(118,75,162,0.18)',
          textAlign: 'center',
          minWidth: '350px',
          maxWidth: '95vw',
          animation: 'fadeIn 1.2s',
          position: 'relative'
        }}>
          {/* Logo/Avatar */}
          <div style={{
            width: 80,
            height: 80,
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #764ba2 60%, #667eea 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 1.5rem auto',
            boxShadow: '0 2px 16px rgba(118,75,162,0.18)'
          }}>
            <span style={{
              fontSize: 44,
              color: 'white',
              fontWeight: 700,
              letterSpacing: 1
            }}>☁️</span>
          </div>
          <h1 style={{
            color: '#764ba2',
            marginBottom: '0.5rem',
            fontWeight: 800,
            fontSize: '2.5rem',
            letterSpacing: '0.5px'
          }}>
            Multi-Regional Cloud Infrastructure
          </h1>
          <p style={{
            color: '#667eea',
            fontSize: '1.15rem',
            marginBottom: '1.5rem',
            fontWeight: 500,
            letterSpacing: '0.2px'
          }}>
            Reliable, scalable, and global cloud solutions for your business.
          </p>
          <hr style={{
            border: 'none',
            borderTop: '2px solid #eee',
            margin: '1rem 0 1.5rem 0'
          }} />
          <p style={{
            fontSize: '1.1rem',
            color: '#444',
            marginBottom: '2rem',
            transition: 'color 0.3s'
          }}>
            {message}
          </p>
          <a
            href="#"
            style={{
              display: 'inline-block',
              padding: '0.85rem 2.2rem',
              background: 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)',
              color: 'white',
              borderRadius: '30px',
              fontWeight: 700,
              fontSize: '1.1rem',
              letterSpacing: '0.5px',
              textDecoration: 'none',
              boxShadow: '0 2px 12px rgba(118,75,162,0.10)',
              transition: 'background 0.3s, box-shadow 0.3s'
            }}
            onMouseOver={e => {
              e.target.style.background = 'linear-gradient(90deg, #764ba2 0%, #667eea 100%)'
              e.target.style.boxShadow = '0 4px 24px rgba(118,75,162,0.18)'
            }}
            onMouseOut={e => {
              e.target.style.background = 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)'
              e.target.style.boxShadow = '0 2px 12px rgba(118,75,162,0.10)'
            }}
          >
            Get Started
          </a>
        </div>

        {/* Features Section */}
        <section style={{
          marginTop: '3.5rem',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '2.5rem',
          justifyContent: 'center'
        }}>
          <div style={{
            background: 'rgba(255,255,255,0.93)',
            borderRadius: '18px',
            boxShadow: '0 4px 18px rgba(118,75,162,0.10)',
            padding: '2rem 2.5rem',
            minWidth: 240,
            maxWidth: 320,
            textAlign: 'center'
          }}>
            <div style={{ fontSize: 32, color: '#764ba2', marginBottom: 10 }}>🌍</div>
            <h3 style={{ color: '#764ba2', fontWeight: 700, marginBottom: 8 }}>Global Reach</h3>
            <p style={{ color: '#444', fontSize: '1rem' }}>Deploy your applications across multiple regions for maximum availability and performance.</p>
          </div>
          <div style={{
            background: 'rgba(255,255,255,0.93)',
            borderRadius: '18px',
            boxShadow: '0 4px 18px rgba(118,75,162,0.10)',
            padding: '2rem 2.5rem',
            minWidth: 240,
            maxWidth: 320,
            textAlign: 'center'
          }}>
            <div style={{ fontSize: 32, color: '#764ba2', marginBottom: 10 }}>🔒</div>
            <h3 style={{ color: '#764ba2', fontWeight: 700, marginBottom: 8 }}>Secure & Reliable</h3>
            <p style={{ color: '#444', fontSize: '1rem' }}>Enterprise-grade security and 99.99% uptime for your mission-critical workloads.</p>
          </div>
          <div style={{
            background: 'rgba(255,255,255,0.93)',
            borderRadius: '18px',
            boxShadow: '0 4px 18px rgba(118,75,162,0.10)',
            padding: '2rem 2.5rem',
            minWidth: 240,
            maxWidth: 320,
            textAlign: 'center'
          }}>
            <div style={{ fontSize: 32, color: '#764ba2', marginBottom: 10 }}>⚡</div>
            <h3 style={{ color: '#764ba2', fontWeight: 700, marginBottom: 8 }}>Fast Deployment</h3>
            <p style={{ color: '#444', fontSize: '1rem' }}>Launch and scale your infrastructure in minutes, not hours.</p>
          </div>
        </section>
      </main>

      {/* Decorative Circles */}
      <div style={{
        position: 'absolute',
        top: 40,
        left: 40,
        width: 120,
        height: 120,
        borderRadius: '50%',
        background: 'rgba(102,126,234,0.12)',
        zIndex: 0
      }} />
      <div style={{
        position: 'absolute',
        bottom: 60,
        right: 60,
        width: 180,
        height: 180,
        borderRadius: '50%',
        background: 'rgba(118,75,162,0.10)',
        zIndex: 0
      }} />

      {/* Footer */}
      <footer style={{
        width: '100%',
        padding: '1.2rem 0',
        background: 'rgba(255,255,255,0.92)',
        boxShadow: '0 -2px 12px rgba(118,75,162,0.08)',
        textAlign: 'center',
        fontWeight: 500,
        color: '#764ba2',
        fontSize: '1rem',
        letterSpacing: '0.2px',
        position: 'fixed',
        bottom: 0,
        left: 0,
        zIndex: 10
      }}>
        &copy; {new Date().getFullYear()} CloudInfra. All rights reserved.
      </footer>

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


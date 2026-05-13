import { useState } from 'react'

// 🧱 Composant — Badge de compétence
function Badge({ texte }) {
  return (
    <span style={{
      background: '#2980b9',
      color: 'white',
      padding: '4px 12px',
      borderRadius: '20px',
      margin: '4px',
      display: 'inline-block',
      fontSize: '0.85rem'
    }}>
      {texte}
    </span>
  )
}

// 🧱 Composant — Carte de Profil
function CarteProfil({ nom, titre, email, github }) {
  const [message, setMessage] = useState('')

  const competences = ['HTML', 'CSS', 'JavaScript', 'Python', 'Git', 'React', 'Prompt IA']

  return (
    <div style={{
      maxWidth: '400px',
      margin: '60px auto',
      padding: '40px',
      borderRadius: '16px',
      boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
      textAlign: 'center',
      fontFamily: 'sans-serif'
    }}>

      {/* Avatar */}
      <div style={{
        width: '80px',
        height: '80px',
        borderRadius: '50%',
        background: '#2c3e50',
        color: 'white',
        fontSize: '1.8rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0 auto 20px'
      }}>
        JN
      </div>

      {/* Infos */}
      <h1 style={{ margin: '0', color: '#2c3e50' }}>{nom}</h1>
      <p style={{ color: '#7f8c8d', marginTop: '8px' }}>{titre}</p>

      <hr style={{ margin: '20px 0', borderColor: '#ecf0f1' }} />

      {/* Liens */}
      <p>✉️ <a href={`mailto:${email}`}>{email}</a></p>
      <p>🐙 <a href={`https://${github}`} target="_blank">{github}</a></p>

      <hr style={{ margin: '20px 0', borderColor: '#ecf0f1' }} />

      {/* Compétences */}
      <h3 style={{ color: '#2c3e50' }}>Mes compétences</h3>
      <div>
        {competences.map((c) => (
          <Badge key={c} texte={c} />
        ))}
      </div>

      <hr style={{ margin: '20px 0', borderColor: '#ecf0f1' }} />

      {/* Bouton contact */}
      <button
        onClick={() => setMessage('Merci ! Je vous recontacte bientôt 😊')}
        style={{
          background: '#2c3e50',
          color: 'white',
          border: 'none',
          padding: '12px 24px',
          borderRadius: '8px',
          cursor: 'pointer',
          fontSize: '1rem'
        }}
      >
        Me contacter 📩
      </button>

      {message && <p style={{ color: 'green', marginTop: '12px' }}>{message}</p>}

    </div>
  )
}

// 🏠 App principale
function App() {
  return (
    <CarteProfil
      nom="Jopie NLEMVO"
      titre="Développeur Web & IA"
      email="nlemvojopie@gmail.com"
      github="github.com/nlemvojopie-star"
    />
  )
}

export default App
import { useState, useEffect } from 'react'

const theme = {
  primaire: '#2c3e50',
  accent: '#2980b9',
  blanc: '#ffffff',
}

function Live() {
  const [citation, setCitation] = useState(null)
  const [repos, setRepos] = useState([])
  const [meteo, setMeteo] = useState(null)
  const [chargement, setChargement] = useState(true)

  useEffect(() => {
    fetch('https://api.quotable.io/random')
      .then(res => res.json())
      .then(data => setCitation({ texte: data.content, auteur: data.author }))
      .catch(() => setCitation({ texte: 'La rigueur, la curiosité et la persévérance sont les clés du développeur de demain.', auteur: 'Jopie NLEMVO' }))

    fetch('https://api.github.com/users/nlemvojopie-star/repos')
      .then(res => res.json())
      .then(data => setRepos(data.slice(0, 3)))
      .catch(() => setRepos([]))

    fetch('https://wttr.in/Melun?format=j1')
      .then(res => res.json())
      .then(data => {
        const current = data.current_condition[0]
        setMeteo({ temp: current.temp_C, desc: current.weatherDesc[0].value, humidite: current.humidity })
      })
      .catch(() => setMeteo({ temp: '--', desc: 'Melun (77)', humidite: '--' }))
      .finally(() => setChargement(false))
  }, [])

  if (chargement) return (
    <div style={{ textAlign: 'center', padding: '80px', color: '#7f8c8d' }}>
      ⏳ Chargement des données en direct...
    </div>
  )

  return (
    <div style={{ padding: '60px 20px', maxWidth: '800px', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center', color: theme.primaire, marginBottom: '40px' }}>
        🌐 Données en Direct
      </h2>

      {/* Citation */}
      <div style={{
        background: theme.blanc, borderRadius: '12px', padding: '32px',
        marginBottom: '24px', boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
        borderLeft: `4px solid ${theme.accent}`
      }}>
        <h3 style={{ color: theme.accent, margin: '0 0 16px' }}>💬 Citation du jour</h3>
        {citation && <>
          <p style={{ fontSize: '1.1rem', fontStyle: 'italic', color: theme.primaire, margin: '0 0 12px' }}>
            "{citation.texte}"
          </p>
          <p style={{ color: '#7f8c8d', margin: 0 }}>— {citation.auteur}</p>
        </>}
      </div>

      {/* Météo */}
      <div style={{
        background: theme.blanc, borderRadius: '12px', padding: '32px',
        marginBottom: '24px', boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
        borderLeft: '4px solid #27ae60'
      }}>
        <h3 style={{ color: '#27ae60', margin: '0 0 16px' }}>🌤️ Météo à Melun (77)</h3>
        {meteo && (
          <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
            <div style={{ fontSize: '3rem', fontWeight: 'bold', color: theme.primaire }}>
              {meteo.temp}°C
            </div>
            <div>
              <p style={{ margin: '0 0 4px', color: theme.primaire }}>{meteo.desc}</p>
              <p style={{ margin: 0, color: '#7f8c8d' }}>Humidité : {meteo.humidite}%</p>
            </div>
          </div>
        )}
      </div>

      {/* GitHub */}
      <div style={{
        background: theme.blanc, borderRadius: '12px', padding: '32px',
        boxShadow: '0 2px 12px rgba(0,0,0,0.08)', borderLeft: `4px solid ${theme.primaire}`
      }}>
        <h3 style={{ color: theme.primaire, margin: '0 0 16px' }}>🐙 Mes repos GitHub</h3>
        {repos.length > 0 ? repos.map((repo) => (
          <div key={repo.id} style={{ padding: '12px 0', borderBottom: '1px solid #ecf0f1' }}>
            <a href={repo.html_url} target="_blank" style={{
              color: theme.accent, fontWeight: 'bold', textDecoration: 'none'
            }}>{repo.name}</a>
            <p style={{ margin: '4px 0 0', color: '#7f8c8d', fontSize: '0.85rem' }}>
              {repo.description || 'Projet de formation'}
            </p>
          </div>
        )) : <p style={{ color: '#7f8c8d' }}>Chargement des repos...</p>}
      </div>
    </div>
  )
}

export default Live
import { useState, useEffect } from 'react'
import axios from 'axios'

const API = 'https://mon-backend-production-c799.up.railway.app'

function App() {
  const [profil, setProfil] = useState(null)
  const [projets, setProjets] = useState([])
  const [loading, setLoading] = useState(true)
  const [nom, setNom] = useState('')
  const [message, setMessage] = useState('')
  const [reponse, setReponse] = useState('')

  useEffect(() => {
    axios.get(`${API}/profil`)
      .then(res => setProfil(res.data))
      .catch(err => console.error('Erreur profil:', err))

    axios.get(`${API}/projets`)
      .then(res => {
        setProjets(res.data)
        setLoading(false)
      })
      .catch(err => console.error('Erreur projets:', err))
  }, [])

  const envoyerMessage = () => {
    axios.post(`${API}/message`, { nom, message })
      .then(res => setReponse(res.data.reponse))
      .catch(err => console.error('Erreur POST:', err))
  }

  if (loading) return <p className="text-center mt-10">Chargement...</p>

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6">

      {profil && (
        <div className="bg-blue-50 rounded-xl p-6 mb-6 shadow">
          <h1 className="text-2xl font-bold text-blue-800">{profil.nom}</h1>
          <p className="text-gray-600">{profil.metier} — {profil.localisation}</p>
          <div className="flex flex-wrap gap-2 mt-3">
            {profil.competences.map(c => (
              <span key={c} className="bg-blue-200 text-blue-800 px-3 py-1 rounded-full text-sm">{c}</span>
            ))}
          </div>
        </div>
      )}

      <h2 className="text-xl font-bold mb-4 text-gray-800">Mes Projets</h2>
      <div className="grid grid-cols-2 gap-4">
        {projets.map((p, i) => (
          <div key={i} className="bg-white border rounded-xl p-4 shadow hover:shadow-md transition">
            <h3 className="font-semibold text-gray-800">{p.titre}</h3>
            <p className="text-sm text-gray-500">{p.tech}</p>
          </div>
        ))}
      </div>

      <h2 className="text-xl font-bold mt-8 mb-4 text-gray-800">Envoyer un message</h2>
      <div className="bg-white border rounded-xl p-6 shadow space-y-4">
        <input
          type="text"
          placeholder="Ton nom"
          value={nom}
          onChange={e => setNom(e.target.value)}
          className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
        />
        <input
          type="text"
          placeholder="Ton message"
          value={message}
          onChange={e => setMessage(e.target.value)}
          className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
        />
        <button
          onClick={envoyerMessage}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Envoyer
        </button>
        {reponse && (
          <p className="text-green-600 font-medium">{reponse}</p>
        )}
      </div>

    </div>
  )
}

export default App
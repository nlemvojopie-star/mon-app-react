import { useState } from 'react'

function Contact() {
  const [formulaire, setFormulaire] = useState({ nom: '', email: '', sujet: '', message: '' })
  const [envoye, setEnvoye] = useState(false)
  const [erreur, setErreur] = useState('')

  function handleChange(e) {
    setFormulaire({ ...formulaire, [e.target.name]: e.target.value })
  }

  function handleEnvoyer() {
    if (!formulaire.nom || !formulaire.email || !formulaire.message) {
      setErreur('Veuillez remplir tous les champs obligatoires !')
      return
    }
    if (!formulaire.email.includes('@')) {
      setErreur('Veuillez entrer un email valide !')
      return
    }
    setErreur('')
    setEnvoye(true)
  }

  if (envoye) return (
    <div className="text-center py-20 px-5 bg-gray-50 min-h-screen">
      <div className="text-6xl mb-4">✅</div>
      <h2 className="text-3xl font-bold text-slate-800 mb-2">Message envoyé !</h2>
      <p className="text-gray-500 mb-8">Merci {formulaire.nom} ! Je vous recontacte bientôt.</p>
      <button
        onClick={() => { setEnvoye(false); setFormulaire({ nom: '', email: '', sujet: '', message: '' }) }}
        className="bg-blue-600 text-white px-6 py-3 rounded-lg cursor-pointer border-none"
      >
        Envoyer un autre message
      </button>
    </div>
  )

  return (
    <div className="py-16 px-5 max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold text-slate-800 text-center mb-2">📬 Me contacter</h2>
      <p className="text-gray-500 text-center mb-8">Disponible pour une collaboration ou un poste</p>

      {/* Liens */}
      <div className="flex justify-center gap-8 mb-10">
        <a href="mailto:nlemvojopie@gmail.com" className="text-blue-600 hover:underline">
          ✉️ nlemvojopie@gmail.com
        </a>
        <a href="https://github.com/nlemvojopie-star" target="_blank" className="text-blue-600 hover:underline">
          🐙 GitHub
        </a>
      </div>

      {/* Formulaire */}
      <div className="bg-white rounded-xl shadow-md p-8">

        <div className="mb-5">
          <label className="block text-slate-800 font-bold mb-2">Nom *</label>
          <input type="text" name="nom" value={formulaire.nom} onChange={handleChange}
            placeholder="Votre nom complet"
            className="w-full p-3 rounded-lg border border-gray-300 text-base focus:outline-none focus:border-blue-500" />
        </div>

        <div className="mb-5">
          <label className="block text-slate-800 font-bold mb-2">Email *</label>
          <input type="email" name="email" value={formulaire.email} onChange={handleChange}
            placeholder="votre@email.com"
            className="w-full p-3 rounded-lg border border-gray-300 text-base focus:outline-none focus:border-blue-500" />
        </div>

        <div className="mb-5">
          <label className="block text-slate-800 font-bold mb-2">Sujet</label>
          <input type="text" name="sujet" value={formulaire.sujet} onChange={handleChange}
            placeholder="Objet de votre message"
            className="w-full p-3 rounded-lg border border-gray-300 text-base focus:outline-none focus:border-blue-500" />
        </div>

        <div className="mb-6">
          <label className="block text-slate-800 font-bold mb-2">Message *</label>
          <textarea name="message" value={formulaire.message} onChange={handleChange}
            placeholder="Votre message..." rows={5}
            className="w-full p-3 rounded-lg border border-gray-300 text-base focus:outline-none focus:border-blue-500 resize-y" />
        </div>

        {erreur && <p className="text-red-500 font-bold mb-4">⚠️ {erreur}</p>}

        <button onClick={handleEnvoyer}
          className="w-full bg-slate-800 text-white py-4 rounded-lg font-bold text-base cursor-pointer border-none hover:bg-slate-700">
          Envoyer le message 📩
        </button>
      </div>
    </div>
  )
}

export default Contact
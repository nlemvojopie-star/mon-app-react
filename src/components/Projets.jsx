function Projets() {
  const projets = [
    { titre: 'Carte de Visite', tech: 'HTML + CSS', desc: 'Ma première page web', emoji: '🪪' },
    { titre: 'Calculatrice', tech: 'JavaScript', desc: 'Addition et multiplication', emoji: '🧮' },
    { titre: 'To-Do List', tech: 'JavaScript + DOM', desc: 'Gestion de tâches interactive', emoji: '✅' },
    { titre: 'Carte Profil', tech: 'React', desc: 'Composants et useState', emoji: '⚛️' },
  ]
  return (
    <div className="py-16 px-5 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-slate-800 text-center mb-10">
        🛠 Mes Projets
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {projets.map((p) => (
          <div key={p.titre} className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-shadow">
            <div className="text-5xl mb-4">{p.emoji}</div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">{p.titre}</h3>
            <p className="text-gray-500 text-sm mb-4">{p.desc}</p>
            <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm font-bold">
              {p.tech}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projets
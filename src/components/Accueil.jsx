function Accueil() {
  return (
    <div className="text-center py-20 px-5 bg-gray-50 min-h-screen">
      
      {/* Avatar */}
      <div className="w-24 h-24 rounded-full bg-slate-700 text-white text-3xl flex items-center justify-center mx-auto mb-6">
        JN
      </div>

      {/* Nom */}
      <h1 className="text-5xl font-bold text-slate-800 mb-2">
        Jopie NLEMVO
      </h1>
      <p className="text-xl text-gray-500 mb-8">
        Développeur Web & IA
      </p>

      {/* Badges */}
      <div className="flex flex-wrap justify-center gap-2">
        {['HTML', 'CSS', 'JavaScript', 'Python', 'React', 'Git', 'Prompt IA'].map((c) => (
          <span key={c} className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm">
            {c}
          </span>
        ))}
      </div>

    </div>
  )
}

export default Accueil
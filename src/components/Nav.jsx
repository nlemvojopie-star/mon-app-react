function Nav({ section, setSection }) {
  const liens = ['Accueil', 'Projets', 'Contact', 'Live']
  return (
    <nav className="bg-slate-800 px-10 py-4 flex justify-between items-center sticky top-0 z-10">
      <span className="text-white font-bold text-xl">JN</span>
      <div className="flex gap-2">
        {liens.map((lien) => (
          <button
            key={lien}
            onClick={() => setSection(lien)}
            className={`px-4 py-2 rounded-md text-white text-sm cursor-pointer border-none
              ${section === lien ? 'bg-blue-600' : 'bg-transparent hover:bg-slate-700'}`}
          >
            {lien}
          </button>
        ))}
      </div>
    </nav>
  )
}

export default Nav
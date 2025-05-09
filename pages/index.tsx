export default function FastTravelHome() {
  return (
    <div className="min-h-screen bg-white text-gray-800 px-6 py-10 space-y-12">
      <header className="text-center">
        <h1 className="text-4xl font-bold text-blue-700">FAST TRAVEL</h1>
        <p className="text-lg mt-2">Voyagez l’esprit léger, nous nous occupons du reste.</p>
      </header>

      <section className="bg-blue-50 p-6 rounded-xl shadow-md max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4 text-blue-800">Réservez votre vol</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input className="p-2 border rounded" placeholder="Ville de départ" />
          <input className="p-2 border rounded" placeholder="Ville d’arrivée" />
          <input className="p-2 border rounded" placeholder="Date de départ" type="date" />
          <input className="p-2 border rounded" placeholder="Date de retour (optionnel)" type="date" />
        </div>
        <button className="mt-4 w-full bg-blue-700 text-white py-2 rounded hover:bg-blue-800">Rechercher un vol</button>
      </section>

      <section className="max-w-4xl mx-auto text-center">
        <h3 className="text-xl font-semibold mb-2">Pourquoi choisir Fast Travel ?</h3>
        <p className="text-gray-600">
          Accompagnement personnalisé, assistance visa, billetterie internationale et conseils pratiques pour tous vos projets de mobilité.
        </p>
      </section>

      <footer className="border-t pt-6 text-center text-sm text-gray-500">
        © 2025 Fast Travel SARL — Tous droits réservés
      </footer>
    </div>
  );
}
export default function ServicesImmigration() {
  return (
    <div className="min-h-screen bg-white text-gray-800 px-6 py-12 max-w-4xl mx-auto space-y-10">
      <h1 className="text-3xl font-bold text-blue-700 text-center">Nos services d'immigration</h1>
      <p className="text-center text-gray-600">
        Fast Travel vous accompagne à chaque étape de votre projet de mobilité internationale : conseils, démarches, documents, préparation au départ, et bien plus encore.
      </p>
      <section>
        <h2 className="text-xl font-semibold text-blue-800 mb-2">1. Visas & accompagnement personnalisé</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Visa étudiant</li>
          <li>Visa travailleur</li>
          <li>Visa visiteur</li>
          <li>Visa chercheur d'emploi / affaires</li>
          <li>Regroupement familial</li>
        </ul>
      </section>
      <section>
        <h2 className="text-xl font-semibold text-blue-800 mb-2">2. Services pratiques</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Recherche de logement dans le pays d’accueil</li>
          <li>Assistance à la recherche d’emploi</li>
          <li>Rédaction de CV et lettres de motivation</li>
          <li>Traduction de documents</li>
        </ul>
      </section>
      <section>
        <h2 className="text-xl font-semibold text-blue-800 mb-2">3. Justificatifs et pièces de dossier</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Preuve de fonds et caution bancaire</li>
          <li>Réservation de vol pour dossier de visa</li>
          <li>Support administratif et assistance</li>
        </ul>
      </section>
      <div className="text-center mt-10">
        <p className="text-gray-600">Besoin d’un accompagnement sur mesure ?</p>
        <a href="/contact" className="text-blue-700 underline">Contactez notre équipe</a>
      </div>
    </div>
  );
}
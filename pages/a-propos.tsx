export default function AboutFastTravel() {
  return (
    <div className="min-h-screen bg-white text-gray-800 px-6 py-12 max-w-4xl mx-auto space-y-10">
      <h1 className="text-3xl font-bold text-blue-700 text-center">À propos de Fast Travel</h1>

      <section className="text-gray-700 space-y-4">
        <p>
          Fondée avec la conviction que la mobilité internationale doit être accessible, claire et accompagnée, <strong>Fast Travel SARL</strong> est une agence spécialisée dans les démarches de <strong>voyage, d’immigration</strong> et de <strong>mobilité professionnelle et académique</strong>.
        </p>
        <p>
          Nous aidons nos clients à <strong>préparer leurs départs à l’étranger</strong> en toute sérénité, qu’il s’agisse de poursuivre leurs études, de trouver une opportunité de carrière, ou de rejoindre leur famille. Notre équipe propose un accompagnement personnalisé à chaque étape : conseil, orientation, constitution de dossier, appui logistique et suivi administratif.
        </p>
        <p>
          En complément, Fast Travel propose un service de <strong>réservation de billets d’avion</strong> pour toutes destinations, facilitant ainsi le processus global du départ.
        </p>
      </section>

      <section className="bg-blue-50 p-6 rounded-xl shadow-md">
        <h2 className="text-xl font-semibold text-blue-800 mb-4">Nos valeurs</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li><strong>Fiabilité :</strong> des services sécurisés et à jour des exigences officielles.</li>
          <li><strong>Transparence :</strong> une information claire, sans frais cachés.</li>
          <li><strong>Proximité :</strong> un accompagnement humain, à l’écoute et réactif.</li>
        </ul>
      </section>
    </div>
  );
}
export default function ContactFastTravel() {
  return (
    <div className="min-h-screen bg-white text-gray-800 px-6 py-12 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-blue-700 text-center mb-6">Contactez Fast Travel</h1>
      <p className="text-center mb-8 text-gray-600">
        Pour toute question ou prise de rendez-vous, remplissez ce formulaire ou contactez-nous via WhatsApp ou Facebook.
      </p>
      <form className="space-y-6">
        <input className="p-2 border rounded w-full" placeholder="Votre nom" required />
        <input className="p-2 border rounded w-full" type="email" placeholder="Votre adresse e-mail" required />
        <textarea className="p-2 border rounded w-full" rows={5} placeholder="Votre message..." required></textarea>
        <button className="w-full bg-blue-700 text-white py-2 rounded hover:bg-blue-800">Envoyer</button>
      </form>
      <div className="text-center mt-10 text-sm text-gray-500">
        WhatsApp : <a href="https://chat.whatsapp.com/votre-lien" className="text-blue-600 underline">Rejoindre notre groupe</a><br />
        Facebook : <a href="https://facebook.com/fasttravelsarl" className="text-blue-600 underline">Fast Travel SARL</a>
      </div>
    </div>
  );
}
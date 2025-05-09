export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-600 text-sm mt-16 py-6 border-t">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <p>© 2025 Fast Travel SARL — Tous droits réservés</p>
        <div className="space-x-4">
          <a href="/" className="hover:underline">Accueil</a>
          <a href="/a-propos" className="hover:underline">À propos</a>
          <a href="/services-immigration" className="hover:underline">Services</a>
          <a href="/contact" className="hover:underline">Contact</a>
        </div>
      </div>
    </footer>
  );
}
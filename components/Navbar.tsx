export default function Navbar() {
  return (
    <nav className="bg-blue-700 text-white py-4 px-6 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <span className="text-xl font-bold">FAST TRAVEL</span>
        <div className="space-x-6 text-sm md:text-base">
          <a href="/" className="hover:underline">Accueil</a>
          <a href="/a-propos" className="hover:underline">À propos</a>
          <a href="/services-immigration" className="hover:underline">Services</a>
          <a href="/contact" className="hover:underline">Contact</a>
        </div>
      </div>
    </nav>
  );
}
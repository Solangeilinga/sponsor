import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Instagram, Youtube, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import AccueilPage from './AccueilPage';
import ServicesPage from './ServicesPage';
import PortfolioPage from './PortfolioPage';
import AProposPage from './AProposPage';
import ContactPage from './ContactPage';
import './index.css'

const App = () => {
  const [currentPage, setCurrentPage] = useState('accueil');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const pages = {
    accueil: 'Accueil',
    services: 'Services',
    portfolio: 'Portfolio',
    apropos: 'À Propos',
    contact: 'Contact'
  };

  const NavBar = () => (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrollY > 50
      ? 'bg-white/95 backdrop-blur-lg border-b border-blue-100 shadow-lg'
      : 'bg-transparent'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Fille du <span className={scrollY > 50 ? 'text-gray-800' : 'text-black'}>Sponsor</span>
          </div>

          <div className="hidden md:flex space-x-8">
            {Object.entries(pages).map(([key, label]) => (
              <button
                key={key}
                onClick={() => setCurrentPage(key)}
                className={`transition-all duration-300 hover:text-blue-600 relative group font-medium ${currentPage === key
                  ? 'text-blue-600'
                  : scrollY > 50 ? 'text-gray-700' : 'text-gray-700'
                  }`}
              >
                {label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </div>

          <button
            className={`md:hidden ${scrollY > 50 ? 'text-gray-800' : 'text-white'}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-lg border-t border-blue-100">
          <div className="px-4 py-4 space-y-4">
            {Object.entries(pages).map(([key, label]) => (
              <button
                key={key}
                onClick={() => {
                  setCurrentPage(key);
                  setIsMenuOpen(false);
                }}
                className={`block w-full text-left py-2 transition-colors font-medium ${currentPage === key ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
                  }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );

  const renderPage = () => {
    const pageProps = { setCurrentPage };

    switch (currentPage) {
      case 'accueil':
        return <AccueilPage {...pageProps} />;
      case 'services':
        return <ServicesPage {...pageProps} />;
      case 'portfolio':
        return <PortfolioPage {...pageProps} />;
      case 'apropos':
        return <AProposPage {...pageProps} />;
      case 'contact':
        return <ContactPage {...pageProps} />;
      default:
        return <AccueilPage {...pageProps} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      {renderPage()}

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                Fille du<span className="text-gray-800"> Sponsor</span>
              </div>
              <p className="text-gray-600 mb-4">
                Créatrice de contenu digital passionnée, transformant vos idées en succès viral.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                  <Youtube className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-gray-800 mb-4">Services</h3>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-blue-600 transition-colors">Création de contenu</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Stratégie digitale</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Publicité</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Production vidéo</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-800 mb-4">Navigation</h3>
              <ul className="space-y-2 text-gray-600">
                {Object.entries(pages).map(([key, label]) => (
                  <li key={key}>
                    <button
                      onClick={() => setCurrentPage(key)}
                      className="hover:text-blue-600 transition-colors"
                    >
                      {label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-800 mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-600">
                <li>contact@filledusponsor.com</li>
                <li>+226 61 12 34 56 78</li>
                <li>Ouagadougou, Burkina</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-500">
            <p>&copy; 2025 FilleduSponsor. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
import React from 'react';
import { ArrowRight, Star, Camera, PenTool, Megaphone, Video } from 'lucide-react';

const AccueilPage = ({ setCurrentPage }) => {
  const services = [
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Création de Contenu Visuel",
      description: "Photos et vidéos haute qualité pour vos réseaux sociaux"
    },
    {
      icon: <PenTool className="w-8 h-8" />,
      title: "Stratégie de Contenu",
      description: "Développement d'une stratégie personnalisée pour votre marque"
    },
    {
      icon: <Megaphone className="w-8 h-8" />,
      title: "Campagnes Publicitaires",
      description: "Création de campagnes publicitaires impactantes"
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: "Production Vidéo",
      description: "Production complète de vidéos corporate et publicitaires"
    }
  ];

  const portfolioItems = [
    {
      id: 1,
      category: "Campagne Publicitaire",
      title: "Lancement Produit Tech",
      client: "TechCorp",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      results: "↗ 150% d'engagement"
    },
    {
      id: 2,
      category: "Contenu Social",
      title: "Stratégie Instagram",
      client: "Fashion Brand",
      image: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=600&h=400&fit=crop",
      results: "↗ 300% de followers"
    },
    {
      id: 3,
      category: "Production Vidéo",
      title: "Vidéo Corporate",
      client: "StartupXYZ",
      image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&h=400&fit=crop",
      results: "↗ 2M de vues"
    }
  ];

  const testimonials = [
    {
      name: "Client 1",
      company: "CEO, TechStart",
      rating: 5,
      text: "Une créatrice exceptionnelle qui a transformé notre présence digitale. Nos ventes ont augmenté de 200%."
    },
    {
      name: "Client 2",
      company: "Directeur Marketing, FashionCorp",
      rating: 5,
      text: "Créativité, professionnalisme et résultats au rendez-vous. Je recommande vivement ses services."
    },
    {
      name: "Client 3",
      company: "Fondatrice, BeautyBrand",
      rating: 5,
      text: "Elle a su capter l'essence de notre marque et créer du contenu qui résonne avec notre audience."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-purple-600/10"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="relative z-10 text-center max-w-5xl mx-auto px-4">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-gray-800">
            Créatrice de
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Contenu Digital</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transformez votre vision en contenu viral. Stratégies créatives, campagnes percutantes, résultats exceptionnels.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setCurrentPage('portfolio')}
              className="group bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105"
            >
              Voir mes créations
              <ArrowRight className="inline ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => setCurrentPage('contact')}
              className="border-2 border-blue-600 px-8 py-4 rounded-full text-blue-600 font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300"
            >
              Démarrer un projet
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '150+', label: 'Projets Réalisés' },
              { number: '50M+', label: 'Vues Générées' },
              { number: '98%', label: 'Clients Satisfaits' },
              { number: '3 ans', label: "d'Expérience" }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
              Mes <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des solutions créatives complètes pour développer votre présence digitale
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, i) => (
              <div key={i} className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100">
                <div className="text-blue-600 mb-4 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => setCurrentPage('services')}
              className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-3 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
            >
              Découvrir tous mes services
            </button>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
              Projets <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Récents</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item) => (
              <div key={item.id} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl mb-4 shadow-lg">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <div className="text-blue-400 text-sm mb-1">{item.category}</div>
                      <h3 className="font-semibold mb-1">{item.title}</h3>
                      <div className="text-green-400 text-sm">{item.results}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
              Ce que disent mes <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Clients</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <div className="font-semibold text-gray-800">{testimonial.name}</div>
                  <div className="text-blue-600 text-sm">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AccueilPage;
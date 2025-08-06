import React from 'react';
import { Camera, PenTool, Megaphone, Video, Users, Target, Sparkles, BarChart3 } from 'lucide-react';

const ServicesPage = ({ setCurrentPage }) => {
    const services = [
        {
            icon: <Camera className="w-10 h-10" />,
            title: "Création de Contenu Visuel",
            description: "Photos et vidéos haute qualité pour maximiser votre impact sur les réseaux sociaux et dans vos campagnes publicitaires.",
            features: [
                "Shooting photo produit professionnel",
                "Vidéos promotionnelles engageantes",
                "Stories Instagram créatives",
                "Reels et contenus courts viraux",
                "Direction artistique complète",
                "Retouche et post-production"
            ],
            price: "À partir de .....",
            popular: false
        },
        {
            icon: <PenTool className="w-10 h-10" />,
            title: "Stratégie de Contenu",
            description: "Développement d'une stratégie de contenu personnalisée qui résonne avec votre audience et génère des résultats mesurables.",
            features: [
                "Audit de votre présence digitale",
                "Calendrier éditorial optimisé",
                "Ligne éditoriale sur-mesure",
                "Analyse des tendances du marché",
                "Optimisation SEO/SEA",
                "Reporting et analytics détaillés"
            ],
            price: "À partir de .....",
            popular: true
        },
        {
            icon: <Megaphone className="w-10 h-10" />,
            title: "Campagnes Publicitaires",
            description: "Création et gestion de campagnes publicitaires multi-plateformes qui convertissent et maximisent votre ROI.",
            features: [
                "Facebook & Instagram Ads",
                "Google Ads & YouTube",
                "TikTok Ads & LinkedIn",
                "Stratégie d'influencer marketing",
                "A/B testing et optimisation",
                "Suivi des performances en temps réel"
            ],
            price: "À partir de .....",
            popular: false
        },
        {
            icon: <Video className="w-10 h-10" />,
            title: "Production Vidéo",
            description: "Production complète de vidéos corporate, publicitaires et de contenu pour tous vos besoins de communication.",
            features: [
                "Développement concept créatif",
                "Tournage professionnel multi-caméras",
                "Montage et effets spéciaux",
                "Motion design et animations",
                "Étalonnage couleur professionnel",
                "Livraison multi-formats"
            ],
            price: "À partir de .....",
            popular: false
        }
    ];

    const additionalServices = [
        {
            icon: <Users className="w-8 h-8" />,
            title: "Community Management",
            description: "Gestion complète de vos réseaux sociaux avec engagement authentique"
        },
        {
            icon: <Target className="w-8 h-8" />,
            title: "Consulting Digital",
            description: "Accompagnement stratégique pour votre transformation digitale"
        },
        {
            icon: <Sparkles className="w-8 h-8" />,
            title: "Formation Équipes",
            description: "Formation de vos équipes aux dernières tendances du marketing digital"
        },
        {
            icon: <BarChart3 className="w-8 h-8" />,
            title: "Analytics & Reporting",
            description: "Analyse approfondie de vos performances avec recommandations"
        }
    ];

    const processSteps = [
        {
            step: "01",
            title: "Découverte",
            description: "Analyse de vos besoins, objectifs et contraintes pour définir la stratégie optimale"
        },
        {
            step: "02",
            title: "Stratégie",
            description: "Développement d'un plan d'action personnalisé avec timeline et KPIs définis"
        },
        {
            step: "03",
            title: "Création",
            description: "Production du contenu avec validation à chaque étape pour garantir la qualité"
        },
        {
            step: "04",
            title: "Lancement",
            description: "Déploiement des campagnes avec monitoring en temps réel des performances"
        },
        {
            step: "05",
            title: "Optimisation",
            description: "Analyse des résultats et optimisation continue pour maximiser le ROI"
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-20">
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4">
                    {/* Header */}
                    <div className="text-center mb-20">
                        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-800">
                            Mes <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Services</span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                            Des solutions créatives sur-mesure pour propulser votre marque vers le succès digital.
                            Chaque service est conçu pour générer des résultats mesurables et un ROI exceptionnel.
                        </p>
                    </div>

                    {/* Services principaux */}
                    <div className="grid lg:grid-cols-2 gap-8 mb-20">
                        {services.map((service, i) => (
                            <div key={i} className={`relative bg-white p-8 rounded-3xl shadow-xl border-2 transition-all duration-300 hover:scale-105 hover:shadow-2xl ${service.popular
                                ? 'border-blue-500 ring-4 ring-blue-100'
                                : 'border-gray-100 hover:border-blue-200'
                                }`}>
                                {service.popular && (
                                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                                            ⭐ Le Plus Populaire
                                        </span>
                                    </div>
                                )}

                                <div className="flex items-center mb-6">
                                    <div className="text-blue-600 mr-4 p-3 bg-blue-50 rounded-2xl">
                                        {service.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-800">{service.title}</h3>
                                        <p className="text-blue-600 font-semibold text-lg">{service.price}</p>
                                    </div>
                                </div>

                                <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                                    {service.description}
                                </p>

                                <div className="space-y-3 mb-8">
                                    {service.features.map((feature, j) => (
                                        <div key={j} className="flex items-center">
                                            <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mr-3 flex-shrink-0"></div>
                                            <span className="text-gray-700">{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                <button
                                    onClick={() => setCurrentPage('contact')}
                                    className={`w-full py-4 rounded-2xl font-semibold text-lg transition-all duration-300 ${service.popular
                                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg hover:shadow-blue-500/25'
                                        : 'bg-gray-100 text-gray-800 hover:bg-blue-600 hover:text-white'
                                        }`}
                                >
                                    Demander un devis
                                </button>
                            </div>
                        ))}
                    </div>

                    {/* Services additionnels */}
                    <div className="mb-20">
                        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
                            Services <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Complémentaires</span>
                        </h2>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {additionalServices.map((service, i) => (
                                <div key={i} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100">
                                    <div className="text-blue-600 mb-4 p-3 bg-blue-50 rounded-xl inline-block">
                                        {service.icon}
                                    </div>
                                    <h3 className="text-lg font-bold mb-3 text-gray-800">{service.title}</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Processus de travail */}
                    <div className="mb-20">
                        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
                            Mon <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Processus</span>
                        </h2>

                        <div className="relative">
                            {/* Ligne de connexion */}
                            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 to-purple-200 transform -translate-y-1/2"></div>

                            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
                                {processSteps.map((step, i) => (
                                    <div key={i} className="relative text-center">
                                        <div className="bg-white p-6 rounded-2xl shadow-lg border-2 border-gray-100 hover:border-blue-300 transition-all duration-300 relative z-10">
                                            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                                                {step.step}
                                            </div>
                                            <h3 className="text-xl font-bold mb-3 text-gray-800">{step.title}</h3>
                                            <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white">
                        <h3 className="text-4xl font-bold mb-4">Besoin d'un service personnalisé ?</h3>
                        <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto leading-relaxed">
                            Chaque projet est unique. Discutons ensemble de vos besoins spécifiques pour créer
                            une solution sur-mesure qui dépasse vos attentes et génère des résultats exceptionnels.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button
                                onClick={() => setCurrentPage('contact')}
                                className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
                            >
                                Consultation gratuite 30min
                            </button>
                            <button
                                onClick={() => setCurrentPage('portfolio')}
                                className="border-2 border-white px-8 py-4 rounded-full text-white font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
                            >
                                Voir mes réalisations
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ServicesPage;
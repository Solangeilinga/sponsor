import React from 'react';
import { Camera, Video, TrendingUp, Award, Users, Heart, Zap, Target } from 'lucide-react';

const AProposPage = ({ setCurrentPage }) => {
    const expertises = [
        {
            icon: <Camera className="w-8 h-8" />,
            title: "Création Visuelle",
            skills: ["Photographie", "Direction Artistique", "Design Graphique", "Retouche Photo"],
            experience: "5+ ans"
        },
        {
            icon: <Video className="w-8 h-8" />,
            title: "Production Vidéo",
            skills: ["Réalisation", "Montage", "Motion Design", "Storytelling"],
            experience: "4+ ans"
        },
        {
            icon: <TrendingUp className="w-8 h-8" />,
            title: "Marketing Digital",
            skills: ["Social Media", "Publicité Payante", "Analytics", "SEO/SEA"],
            experience: "6+ ans"
        }
    ];

    const values = [
        {
            icon: <Heart className="w-8 h-8" />,
            title: "Passion",
            description: "Chaque projet est une nouvelle aventure créative que j'aborde avec enthousiasme et dévouement total."
        },
        {
            icon: <Zap className="w-8 h-8" />,
            title: "Innovation",
            description: "Toujours à l'affût des dernières tendances pour proposer des solutions avant-gardistes et impactantes."
        },
        {
            icon: <Target className="w-8 h-8" />,
            title: "Résultats",
            description: "Focus sur la performance avec des KPIs clairs et un ROI mesurable sur chaque collaboration."
        },
        {
            icon: <Users className="w-8 h-8" />,
            title: "Collaboration",
            description: "Une approche partenariale basée sur l'écoute, la transparence et la co-création."
        }
    ];

    const achievements = [
        {
            year: "2024",
            title: "Prix de la Meilleure Campagne Digitale",
            organization: "Digital Marketing Awards France",
            description: "Récompense pour la campagne virale BeautyBrand (+3M de vues)"
        },
        {
            year: "2023",
            title: "Top 30 Under 30 - Marketing Digital",
            organization: "Forbes France",
            description: "Reconnaissance dans la catégorie des jeunes talents du marketing"
        },
        {
            year: "2023",
            title: "Influencer Marketing Excellence",
            organization: "Social Media Summit",
            description: "Prix pour l'innovation dans les stratégies d'influence"
        },
        {
            year: "2022",
            title: "Creative Video Award",
            organization: "Cannes Corporate Media",
            description: "Bronze pour la série documentaire 'Entrepreneurs du Futur'"
        }
    ];

    const timeline = [
        {
            year: "2019",
            title: "Début de l'aventure",
            description: "Lancement de mon activité freelance après 2 ans en agence de communication"
        },
        {
            year: "2020",
            title: "Spécialisation TikTok",
            description: "Première à proposer des stratégies TikTok pour les entreprises"
        },
        {
            year: "2021",
            title: "Expansion internationale",
            description: "Collaboration avec des marques"
        },
        {
            year: "2022",
            title: "Studio de création",
            description: "Ouverture de mon studio professionnel à Paris pour la production vidéo"
        },
        {
            year: "2023",
            title: "Équipe créative",
            description: "Constitution d'une équipe de créatifs spécialisés selon les projets"
        },
        {
            year: "2024",
            title: "Leadership market",
            description: "Référence française dans la création de contenu viral B2B"
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-20">
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4">
                    {/* Hero Section */}
                    <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
                        <div>
                            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-800">
                                À <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Propos</span>
                            </h1>
                            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                                <p>
                                    <strong className="text-gray-800">Salut ! Je suis Huguette,</strong> créatrice de contenu digital passionnée depuis plus de 5 ans.
                                    Ma mission ? Transformer vos idées en contenus viraux qui marquent les esprits et génèrent des résultats concrets.
                                </p>
                                <p>
                                    Spécialisée dans l'univers des réseaux sociaux et du marketing d'influence, j'ai eu la chance de collaborer
                                    avec plus de 150 entreprises, générant <strong className="text-blue-600">plus de 50 millions de vues</strong> et
                                    propulsant leurs marques vers de nouveaux sommets.
                                </p>
                                <p>
                                    Mon approche ? Allier créativité débordante et stratégie data-driven pour créer des campagnes qui
                                    <strong className="text-purple-600"> convertissent vraiment</strong>. Chaque projet est une nouvelle aventure
                                    où innovation rime avec performance.
                                </p>
                            </div>

                            <div className="mt-12 grid grid-cols-2 gap-8">
                                <div className="text-center p-4 bg-white rounded-2xl shadow-lg border border-blue-100">
                                    <h3 className="text-3xl font-bold text-blue-600 mb-2">150+</h3>
                                    <p className="text-gray-600">Projets réalisés</p>
                                </div>
                                <div className="text-center p-4 bg-white rounded-2xl shadow-lg border border-purple-100">
                                    <h3 className="text-3xl font-bold text-purple-600 mb-2">50M+</h3>
                                    <p className="text-gray-600">Vues générées</p>
                                </div>
                                <div className="text-center p-4 bg-white rounded-2xl shadow-lg border border-green-100">
                                    <h3 className="text-3xl font-bold text-green-600 mb-2">98%</h3>
                                    <p className="text-gray-600">Clients satisfaits</p>
                                </div>
                                <div className="text-center p-4 bg-white rounded-2xl shadow-lg border border-orange-100">
                                    <h3 className="text-3xl font-bold text-orange-600 mb-2">24h</h3>
                                    <p className="text-gray-600">Temps de réponse</p>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="relative z-10">
                                <img
                                    src="./huguette.png"
                                    alt="Huguette - Créatrice de contenu"
                                    className="w-full max-w-md mx-auto rounded-3xl shadow-2xl"
                                />
                            </div>
                            <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-400/20 rounded-full blur-3xl"></div>
                            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-400/20 rounded-full blur-3xl"></div>
                        </div>
                    </div>

                    {/* Mes Valeurs */}
                    <div className="mb-20">
                        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
                            Mes <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Valeurs</span>
                        </h2>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {values.map((value, i) => (
                                <div key={i} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100 text-center">
                                    <div className="text-blue-600 mb-4 p-3 bg-blue-50 rounded-xl inline-block">
                                        {value.icon}
                                    </div>
                                    <h3 className="text-xl font-bold mb-3 text-gray-800">{value.title}</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Mes Expertises */}
                    <div className="mb-20">
                        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
                            Mes <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Expertises</span>
                        </h2>

                        <div className="grid md:grid-cols-3 gap-8">
                            {expertises.map((expertise, i) => (
                                <div key={i} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                                    <div className="flex items-center justify-between mb-6">
                                        <div className="text-blue-600 p-3 bg-blue-50 rounded-xl">
                                            {expertise.icon}
                                        </div>
                                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                                            {expertise.experience}
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-bold mb-4 text-gray-800">{expertise.title}</h3>
                                    <ul className="space-y-2">
                                        {expertise.skills.map((skill, j) => (
                                            <li key={j} className="flex items-center text-gray-600">
                                                <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mr-3 flex-shrink-0"></div>
                                                {skill}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Mon Parcours */}
                    <div className="mb-20">
                        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
                            Mon <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Parcours</span>
                        </h2>

                        <div className="relative">
                            {/* Timeline line */}
                            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 to-purple-200 hidden md:block"></div>

                            <div className="space-y-8">
                                {timeline.map((item, i) => (
                                    <div key={i} className="relative flex items-start">
                                        <div className="hidden md:block absolute left-6 w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full transform -translate-x-1/2"></div>
                                        <div className="md:ml-16 bg-white p-6 rounded-2xl shadow-lg border border-gray-100 w-full hover:shadow-xl transition-all duration-300">
                                            <div className="flex items-center justify-between mb-3">
                                                <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                                                    {item.year}
                                                </span>
                                            </div>
                                            <h3 className="text-xl font-bold mb-2 text-gray-800">{item.title}</h3>
                                            <p className="text-gray-600">{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Récompenses */}
                    <div className="mb-20">
                        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
                            Récompenses & <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Reconnaissances</span>
                        </h2>

                        <div className="grid md:grid-cols-2 gap-8">
                            {achievements.map((achievement, i) => (
                                <div key={i} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="flex items-center">
                                            <Award className="w-8 h-8 text-yellow-500 mr-3" />
                                            <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-semibold">
                                                {achievement.year}
                                            </span>
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-bold mb-2 text-gray-800">{achievement.title}</h3>
                                    <p className="text-blue-600 font-semibold mb-3">{achievement.organization}</p>
                                    <p className="text-gray-600">{achievement.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Philosophie de travail */}
                    <div className="mb-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white text-center">
                        <h2 className="text-4xl font-bold mb-6">Ma Philosophie</h2>
                        <div className="max-w-4xl mx-auto">
                            <p className="text-xl mb-8 opacity-90 leading-relaxed">
                                "Je crois profondément que chaque marque a une histoire unique à raconter. Mon rôle est de la révéler
                                au monde de la façon la plus authentique et impactante possible. Pas de contenu générique chez moi -
                                que du sur-mesure qui résonne vraiment avec votre audience."
                            </p>
                            <div className="grid md:grid-cols-3 gap-8 mt-12">
                                <div className="text-center">
                                    <div className="text-4xl mb-3">🎯</div>
                                    <h3 className="font-bold mb-2">Stratégie</h3>
                                    <p className="opacity-90">Chaque action a un objectif précis</p>
                                </div>
                                <div className="text-center">
                                    <div className="text-4xl mb-3">✨</div>
                                    <h3 className="font-bold mb-2">Créativité</h3>
                                    <p className="opacity-90">Innovation permanente et originalité</p>
                                </div>
                                <div className="text-center">
                                    <div className="text-4xl mb-3">📈</div>
                                    <h3 className="font-bold mb-2">Performance</h3>
                                    <p className="opacity-90">Résultats mesurables et ROI optimisé</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Call to Action */}
                    <div className="text-center bg-white rounded-3xl p-12 shadow-xl border border-gray-100">
                        <h3 className="text-4xl font-bold mb-4 text-gray-800">Prêt à collaborer ?</h3>
                        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                            Que vous soyez une startup ambitieuse ou une grande entreprise, discutons de votre projet
                            et créons ensemble du contenu qui marque les esprits.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button
                                onClick={() => setCurrentPage('contact')}
                                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105"
                            >
                                Démarrons votre projet
                            </button>
                            <button
                                onClick={() => setCurrentPage('portfolio')}
                                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300"
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

export default AProposPage;
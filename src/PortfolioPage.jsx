import React, { useRef, useEffect } from 'react';
import { Play, Eye, TrendingUp, Award } from 'lucide-react';

const PortfolioPage = ({ setCurrentPage }) => {
    // Vidéos TikTok/verticales en format MP4
    const tiktokVideos = [
        {
            id: 1,
            category: "TikTok1",
            title: "titre",
            client: "1",
            videoUrl: "/videos/tiktok1.mp4",
            results: "↗ 2.5M vues",
            likes: "125K",
            shares: "15K"
        },
        {
            id: 2,
            category: "TikTok1",
            title: "titre",
            client: "1",
            videoUrl: "/videos/tiktok2.mp4",
            results: "↗ 1.8M vues",
            likes: "89K",
            shares: "12K"
        },
        {
            id: 3,
            category: "TikTok1",
            title: "titre",
            client: "1",
            videoUrl: "/videos/tiktok3.mp4",
            results: "↗ 3.2M vues",
            likes: "180K",
            shares: "25K"
        },
        {
            id: 4,
            category: "TikTok1",
            title: "titre",
            client: "1",
            videoUrl: "/videos/tiktok4.mp4",
            results: "↗ 900K vues",
            likes: "45K",
            shares: "8K"
        },
        {
            id: 5,
            category: "TikTok1",
            title: "titre",
            client: "1",
            videoUrl: "/videos/tiktok5.mp4",
            results: "↗ 1.5M vues",
            likes: "75K",
            shares: "18K"
        },
        {
            id: 6,
            category: "TikTok1",
            title: "titre",
            client: "1",
            videoUrl: "/videos/tiktok6.mp4",
            results: "↗ 2.1M vues",
            likes: "95K",
            shares: "14K"
        }
    ];

    const traditionalPortfolio = [
        {
            id: 7,
            category: "Campagne Publicitaire",
            title: "Lancement Produit Premium",
            client: "LuxuryCorp",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
            results: "↗ 150% ROI"
        },
        {
            id: 8,
            category: "Social Media",
            title: "Stratégie Instagram",
            client: "StartupXYZ",
            image: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=600&h=400&fit=crop",
            results: "↗ 300% followers"
        },
        {
            id: 9,
            category: "E-commerce",
            title: "Shooting Produit",
            client: "OnlineStore",
            image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&h=400&fit=crop",
            results: "↗ 80% conversions"
        }
    ];

    // Composant vidéo TikTok avec autoplay
    const TikTokVideo = ({ video }) => {
        const videoRef = useRef(null);

        useEffect(() => {
            const videoElement = videoRef.current;
            if (videoElement) {
                // Observer pour détecter quand la vidéo entre dans le viewport
                const observer = new IntersectionObserver(
                    (entries) => {
                        entries.forEach((entry) => {
                            if (entry.isIntersecting) {
                                videoElement.play().catch(console.error);
                            } else {
                                videoElement.pause();
                            }
                        });
                    },
                    { threshold: 0.5 }
                );

                observer.observe(videoElement);

                return () => {
                    observer.unobserve(videoElement);
                };
            }
        }, []);

        return (
            <div className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative aspect-[9/16] bg-gray-900 overflow-hidden">
                    <video
                        ref={videoRef}
                        className="w-full h-full object-cover"
                        loop
                        muted
                        playsInline
                        preload="metadata"
                    >
                        <source src={video.videoUrl} type="video/mp4" />
                        Votre navigateur ne supporte pas les vidéos.
                    </video>

                    {/* Overlay avec infos */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-4 left-4 right-4 text-white">
                            <div className="text-blue-400 text-sm mb-1">{video.category}</div>
                            <h3 className="font-semibold mb-1 text-sm">{video.title}</h3>
                            <div className="text-xs text-gray-300 mb-2">Client: {video.client}</div>
                            <div className="flex items-center justify-between text-xs">
                                <span className="text-green-400 font-medium">{video.results}</span>
                                <div className="flex space-x-3">
                                    <span>❤️ {video.likes}</span>
                                    <span>📤 {video.shares}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Badge catégorie */}
                    <div className="absolute top-3 left-3">
                        <span className="bg-blue-600/90 text-white px-2 py-1 rounded-full text-xs font-medium">
                            {video.category}
                        </span>
                    </div>

                    {/* Badge résultats */}
                    <div className="absolute top-3 right-3">
                        <span className="bg-green-500/90 text-white px-2 py-1 rounded-full text-xs font-medium">
                            {video.results}
                        </span>
                    </div>
                </div>

                <div className="p-4">
                    <h3 className="font-semibold text-gray-800 mb-1">{video.title}</h3>
                    <p className="text-sm text-gray-600 mb-2">Client: {video.client}</p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                        <span className="flex items-center">
                            <Eye className="w-4 h-4 mr-1" />
                            {video.results.replace('↗ ', '')}
                        </span>
                        <div className="flex space-x-3">
                            <span>❤️ {video.likes}</span>
                            <span>📤 {video.shares}</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-20">
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-800">
                            Mon <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Portfolio</span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Découvrez mes créations qui ont généré des millions de vues et transformé des marques
                        </p>
                    </div>

                    {/* Section Vidéos TikTok */}
                    <div className="mb-20">
                        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                            🎬 Contenus <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Vidéo Viraux</span>
                        </h2>
                        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                            Vidéos courtes optimisées pour TikTok, Instagram Reels et YouTube Shorts avec lecture automatique
                        </p>

                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                            {tiktokVideos.map((video) => (
                                <TikTokVideo key={video.id} video={video} />
                            ))}
                        </div>
                    </div>

                    {/* Section Portfolio Traditionnel */}
                    <div className="mb-20">
                        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                            📸 Projets <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Créatifs</span>
                        </h2>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {traditionalPortfolio.map((item) => (
                                <div key={item.id} className="group cursor-pointer">
                                    <div className="relative overflow-hidden rounded-2xl mb-6 h-80 shadow-lg">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <Play className="w-16 h-16 text-white opacity-90 transform scale-0 group-hover:scale-100 transition-transform duration-300" />
                                            </div>
                                        </div>
                                        <div className="absolute top-4 left-4">
                                            <span className="bg-blue-600/90 text-white px-3 py-1 rounded-full text-sm font-medium">
                                                {item.category}
                                            </span>
                                        </div>
                                        <div className="absolute bottom-4 right-4">
                                            <span className="bg-green-500/90 text-white px-3 py-1 rounded-full text-sm font-medium">
                                                {item.results}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <h3 className="text-xl font-bold group-hover:text-blue-600 transition-colors text-gray-800">
                                            {item.title}
                                        </h3>
                                        <p className="text-gray-600">Client: {item.client}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Statistiques de Performance */}
                    <div className="grid md:grid-cols-4 gap-8 mb-20">
                        <div className="text-center p-8 bg-white rounded-2xl shadow-lg border border-blue-100">
                            <Eye className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                            <h3 className="text-3xl font-bold text-gray-800 mb-2">50M+</h3>
                            <p className="text-gray-600">Vues générées</p>
                        </div>
                        <div className="text-center p-8 bg-white rounded-2xl shadow-lg border border-purple-100">
                            <TrendingUp className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                            <h3 className="text-3xl font-bold text-gray-800 mb-2">+275%</h3>
                            <p className="text-gray-600">Engagement moyen</p>
                        </div>
                        <div className="text-center p-8 bg-white rounded-2xl shadow-lg border border-green-100">
                            <Award className="w-12 h-12 text-green-600 mx-auto mb-4" />
                            <h3 className="text-3xl font-bold text-gray-800 mb-2">15+</h3>
                            <p className="text-gray-600">Prix remportés</p>
                        </div>
                        <div className="text-center p-8 bg-white rounded-2xl shadow-lg border border-orange-100">
                            <div className="text-4xl mb-4">🚀</div>
                            <h3 className="text-3xl font-bold text-gray-800 mb-2">98%</h3>
                            <p className="text-gray-600">Taux de réussite</p>
                        </div>
                    </div>

                    {/* Call to Action */}
                    <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white">
                        <h3 className="text-3xl font-bold mb-4">Prêt à créer du contenu viral ?</h3>
                        <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                            Transformons vos idées en contenus qui marquent les esprits et génèrent des résultats exceptionnels
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button
                                onClick={() => setCurrentPage('contact')}
                                className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
                            >
                                Démarrer mon projet
                            </button>
                            <button
                                onClick={() => setCurrentPage('services')}
                                className="border-2 border-white px-8 py-4 rounded-full text-white font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
                            >
                                Voir mes services
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PortfolioPage;
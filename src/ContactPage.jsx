import React, { useState } from 'react';
import { Mail, Phone, MapPin, Instagram, Youtube, Linkedin, Send, Clock, CheckCircle, Star } from 'lucide-react';

const ContactPage = ({ setCurrentPage }) => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        projectType: '',
        budget: '',
        message: ''
    });

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulation d'envoi du formulaire
        alert('Merci pour votre message ! Je vous répondrai dans les 24h.');
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            company: '',
            projectType: '',
            budget: '',
            message: ''
        });
    };

    const contactInfo = [
        {
            icon: <Mail className="w-6 h-6" />,
            title: "Email",
            info: "contact@filledusponsor.com",
            description: "Réponse sous 24h garantie"
        },
        {
            icon: <Phone className="w-6 h-6" />,
            title: "Téléphone",
            info: "+2266 61 12 34 56",
            description: "Lun-Ven 9h-18h"
        },
        {
            icon: <MapPin className="w-6 h-6" />,
            title: "Localisation",
            info: "Ouagadougou, Burkina",
            description: "Interventions nationales et internationales"
        }
    ];

    const faqs = [
        {
            question: "Quel est votre délai de réponse ?",
            answer: "Je réponds à tous les messages sous 24h maximum, souvent beaucoup plus rapidement !"
        },
        {
            question: "Proposez-vous une consultation gratuite ?",
            answer: "Oui ! Je propose une consultation téléphonique gratuite de 30 minutes pour discuter de votre projet."
        },
        {
            question: "Travaillez-vous dans toute le Burkina?",
            answer: "Absolument ! Basée à Ouagadougou, j'interviens partout en France et à l'international selon les projets."
        },
        {
            question: "Quels sont vos tarifs ?",
            answer: "Mes tarifs varient selon la complexité du projet. Contactez-moi pour un devis personnalisé gratuit."
        }
    ];

    const processSteps = [
        {
            step: 1,
            title: "Contact initial",
            description: "Vous me contactez via le formulaire ou par téléphone"
        },
        {
            step: 2,
            title: "Consultation gratuite",
            description: "Échange de 30min pour comprendre vos besoins"
        },
        {
            step: 3,
            title: "Proposition personnalisée",
            description: "Je vous envoie un devis détaillé sous 48h"
        },
        {
            step: 4,
            title: "Démarrage du projet",
            description: "Lancement du projet selon le planning défini"
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-20">
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-800">
                            Démarrons votre <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projet</span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Prêt à propulser votre marque vers de nouveaux sommets ? Contactez-moi pour une consultation gratuite
                            et découvrons ensemble comment créer du contenu qui marque les esprits.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-16">
                        {/* Formulaire de contact */}
                        <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
                            <div className="flex items-center mb-8">
                                <Send className="w-8 h-8 text-blue-600 mr-3" />
                                <h2 className="text-3xl font-bold text-gray-800">Envoyez-moi un message</h2>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">Prénom *</label>
                                        <input
                                            type="text"
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleInputChange}
                                            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:border-blue-500 focus:bg-white focus:outline-none transition-all duration-300"
                                            placeholder="Votre prénom"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">Nom *</label>
                                        <input
                                            type="text"
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleInputChange}
                                            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:border-blue-500 focus:bg-white focus:outline-none transition-all duration-300"
                                            placeholder="Votre nom"
                                            required
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email *</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:border-blue-500 focus:bg-white focus:outline-none transition-all duration-300"
                                        placeholder="votre@email.com"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Entreprise</label>
                                    <input
                                        type="text"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleInputChange}
                                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:border-blue-500 focus:bg-white focus:outline-none transition-all duration-300"
                                        placeholder="Nom de votre entreprise"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Type de projet *</label>
                                    <select
                                        name="projectType"
                                        value={formData.projectType}
                                        onChange={handleInputChange}
                                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:border-blue-500 focus:bg-white focus:outline-none transition-all duration-300"
                                        required
                                    >
                                        <option value="">Sélectionnez un service</option>
                                        <option value="content-creation">Création de contenu visuel</option>
                                        <option value="content-strategy">Stratégie de contenu</option>
                                        <option value="advertising">Campagnes publicitaires</option>
                                        <option value="video-production">Production vidéo</option>
                                        <option value="consulting">Consulting digital</option>
                                        <option value="other">Autre / Projet sur-mesure</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Budget estimé</label>
                                    <select
                                        name="budget"
                                        value={formData.budget}
                                        onChange={handleInputChange}
                                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:border-blue-500 focus:bg-white focus:outline-none transition-all duration-300"
                                    >
                                        <option value="">Sélectionnez votre budget</option>
                                        <option value="under-5k">Moins de.....*:</option>
                                        <option value="5k-15k">......- ....</option>
                                        <option value="15k-50k">..... - ....</option>
                                        <option value="over-50k">.....</option>
                                        <option value="discuss">À discuter</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Décrivez votre projet *</label>
                                    <textarea
                                        rows="5"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:border-blue-500 focus:bg-white focus:outline-none transition-all duration-300 resize-none"
                                        placeholder="Parlez-moi de votre projet, vos objectifs, votre vision, vos contraintes... Plus vous donnez de détails, mieux je peux vous aider !"
                                        required
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-semibold text-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center"
                                >
                                    <Send className="w-5 h-5 mr-2" />
                                    Envoyer ma demande
                                </button>
                            </form>
                        </div>

                        {/* Informations et contact */}
                        <div className="space-y-8">
                            {/* Informations de contact */}
                            <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
                                <h2 className="text-2xl font-bold mb-6 text-gray-800">Informations de contact</h2>

                                <div className="space-y-6">
                                    {contactInfo.map((info, i) => (
                                        <div key={i} className="flex items-start">
                                            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                                                {info.icon}
                                            </div>
                                            <div>
                                                <div className="font-semibold text-gray-800">{info.title}</div>
                                                <div className="text-blue-600 font-semibold">{info.info}</div>
                                                <div className="text-gray-500 text-sm">{info.description}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Réseaux sociaux */}
                            <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
                                <h3 className="text-xl font-bold mb-4 text-gray-800">Suivez-moi</h3>
                                <div className="flex space-x-4">
                                    <a href="#" className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center text-white hover:scale-110 transition-transform">
                                        <Instagram className="w-6 h-6" />
                                    </a>
                                    <a href="#" className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center text-white hover:scale-110 transition-transform">
                                        <Youtube className="w-6 h-6" />
                                    </a>
                                    <a href="#" className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center text-white hover:scale-110 transition-transform">
                                        <Linkedin className="w-6 h-6" />
                                    </a>
                                </div>
                            </div>

                            {/* Processus */}
                            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white">
                                <h3 className="text-xl font-bold mb-6">Comment ça marche ?</h3>
                                <div className="space-y-4">
                                    {processSteps.map((step, i) => (
                                        <div key={i} className="flex items-start">
                                            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">
                                                {step.step}
                                            </div>
                                            <div>
                                                <div className="font-semibold">{step.title}</div>
                                                <div className="text-sm opacity-90">{step.description}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Garanties */}
                            <div className="bg-green-50 rounded-3xl p-8 border border-green-100">
                                <h3 className="text-xl font-bold mb-4 text-green-800">Mes garanties</h3>
                                <div className="space-y-3">
                                    <div className="flex items-center text-green-700">
                                        <CheckCircle className="w-5 h-5 mr-3 flex-shrink-0" />
                                        <span>Réponse sous 24h maximum</span>
                                    </div>
                                    <div className="flex items-center text-green-700">
                                        <CheckCircle className="w-5 h-5 mr-3 flex-shrink-0" />
                                        <span>Consultation gratuite de 30min</span>
                                    </div>
                                    <div className="flex items-center text-green-700">
                                        <CheckCircle className="w-5 h-5 mr-3 flex-shrink-0" />
                                        <span>Devis détaillé sous 48h</span>
                                    </div>
                                    <div className="flex items-center text-green-700">
                                        <CheckCircle className="w-5 h-5 mr-3 flex-shrink-0" />
                                        <span>Suivi personnalisé du projet</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* FAQ Section */}
                    <div className="mt-20">
                        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
                            Questions <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Fréquentes</span>
                        </h2>

                        <div className="grid md:grid-cols-2 gap-8">
                            {faqs.map((faq, i) => (
                                <div key={i} className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                                    <h3 className="font-bold text-lg mb-3 text-gray-800">{faq.question}</h3>
                                    <p className="text-gray-600">{faq.answer}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactPage;
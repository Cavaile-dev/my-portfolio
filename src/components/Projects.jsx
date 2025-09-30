import React, { useState } from 'react';

// --- PROJECT DATA (No changes needed here) ---
const projectsData = [
    {
        title: 'Garment Worker Productivity Predictor',
        description: 'This is the project I built with my group for my machine learning course final project. Our project uses a CatBoost Classification model to forecast a team\'s productivity. By analyzing operational factors, the app determines if a team will be Productive or Not Productive, helping managers optimize performance.',
        tools: ['Python', 'Pandas', 'Scikit-learn', 'Matplotlib', 'StreamLit', 'CatBoost'],
        images: ['/src/assets/project1-1.png', '/src/assets/project1-2.png', '/src/assets/project1-3.png'],
        githubUrl: 'https://github.com/Cavaile-dev/garmentivity-app',
        liveUrl: 'https://garmentivity-app.streamlit.app/',
    },
    {
        title: 'Movie App with Top 5 Trending',
        description: 'I learned react with this project based learning from a YouTube channel called \"JavaScript Mastery\". I learned a lot about react components, states and hooks, UseEffect hook, fetching API from the Movie DB API, using appwrite to implement top 5 trending movies by tracking user searches in a database, and many more.',
        tools: ['React', 'Javascript', 'Appwrite', 'Tailwind CSS', 'Vite', 'The Movie Database (TMDB) API'],
        images: ['/src/assets/project2-1.png', '/src/assets/project2-2.png'],
        githubUrl: 'https://github.com/yourprofile/customer-segmentation',
        liveUrl: '',
    },
    {
        title: 'Demand Forecasting ML App',
        description: 'This project is a comprehensive AI-powered demand forecasting application designed to predict the Number of Products Sold based on sales, financial, and supply chain data. It follows a complete data science workflow, from initial Exploratory Data Analysis (EDA) to a final, optimized model deployment. The core of the solution is an optimized Random Forest Regressor model, which was rigorously refined using techniques like feature importance analysis and hyperparameter tuning to ensure accuracy and efficiency.',
        tools: ['pandas', 'matplotlib', 'seaborn', 'scikit-learn', 'pickle', 'streamlit', 'numpy', 'plotly'],
        images: ['/src/assets/project3-1.png', '/src/assets/project3-2.png'],
        githubUrl: 'https://github.com/Cavaile-dev/demand-forecasting-ml-streamlit',
        liveUrl: 'https://ml-demand-forecasting.streamlit.app/',
    },
    {
        title: 'Comparing Models to Predict Tweet Sentiment',
        description: 'In this NLP project, my group and I were comparing the performance of SOTA models such as RoBERTa, BERT, and DistilBERT with TF-IDF for the traditional model on a dataset of 100,000 tweets to predict its sentiment. We compared the performance of the models using the F1-score and the ROC-AUC.',
        tools: ['pandas', 'scikit-learn', 'transformers', 'torch', 'numpy', 'scipy', 'datasets'],
        images: ['/src/assets/project4-1.png', '/src/assets/project4-2.png'],
        githubUrl: 'https://github.com/Cavaile-dev/NLP-Model-Comparison-for-Sentiment-Analysis',
        liveUrl: '',
    },
];

// --- A NEW COMPONENT TO MANAGE THE CAROUSEL LOGIC ---
const ProjectCard = ({ project }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? project.images.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        const isLastSlide = currentIndex === project.images.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    return (
        <div className="bg-gray-800 p-6 rounded-lg shadow-xl flex flex-col">
            {/* Custom Image Carousel */}
            <div className="relative h-64 w-full rounded-md overflow-hidden">
                <img
                    src={project.images[currentIndex]}
                    alt={`${project.title} screenshot ${currentIndex + 1}`}
                    className="w-full h-full transition-transform duration-500 ease-in-out"
                />
                {/* Left Arrow */}
                <button
                    onClick={goToPrevious}
                    className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-opacity"
                >
                    &#10094;
                </button>
                {/* Right Arrow */}
                <button
                    onClick={goToNext}
                    className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-opacity"
                >
                    &#10095;
                </button>
                {/* Dots */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-2">
                    {project.images.map((_, slideIndex) => (
                        <div
                            key={slideIndex}
                            onClick={() => setCurrentIndex(slideIndex)}
                            className={`h-2 w-2 rounded-full cursor-pointer transition-colors ${
                                currentIndex === slideIndex ? 'bg-accent' : 'bg-gray-400'
                            }`}
                        ></div>
                    ))}
                </div>
            </div>

            <div className="flex-grow mt-6">
                <h3 className="text-2xl font-bold mb-2 text-accent">{project.title}</h3>
                <p className="text-secondary-text mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                    {project.tools.map((tool, i) => (
                        <span key={i} className="bg-gray-700 text-xs font-semibold px-3 py-1 rounded-full">{tool}</span>
                    ))}
                </div>
            </div>

            {/* Buttons Section */}
            <div className="mt-auto flex items-center gap-4">
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-center w-full border border-accent text-accent font-bold py-2 px-4 rounded-lg hover:bg-accent hover:text-white transition-colors duration-300">
                    View GitHub
                </a>
                {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-center w-full border border-secondary-text text-secondary-text font-bold py-2 px-4 rounded-lg hover:bg-secondary-text hover:text-dark-bg transition-colors duration-300">
                        View Application
                    </a>
                )}
            </div>
        </div>
    );
};


// --- THE MAIN PROJECTS COMPONENT ---
const Projects = () => {
    return (
        <section id="projects" className="py-20 min-h-screen">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-12">Projects Built</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {projectsData.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </div>
                <div className="text-center mt-16">
                    <a
                        href="https://github.com/Cavaile-dev?tab=repositories" // <-- IMPORTANT: Change this to your GitHub profile URL
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-accent text-white font-bold py-3 px-8 rounded-lg hover:bg-accent-hover transition-colors duration-300 shadow-md"
                    >
                        See More Projects on GitHub
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;
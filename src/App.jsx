import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Experiences from './components/Experiences';
import Skills from './components/Skills';
import Contact from './components/Contact';

// Import the new animation component
import AnimateOnScroll from './components/AnimateOnScroll';

function App() {
    return (
        <div>
            <Header />
            <main>
                <About />

                <AnimateOnScroll>
                    <Projects />
                </AnimateOnScroll>

                <AnimateOnScroll>
                    <Experiences />
                </AnimateOnScroll>

                <AnimateOnScroll>
                    <Skills />
                </AnimateOnScroll>

                <AnimateOnScroll>
                    <Contact />
                </AnimateOnScroll>
            </main>
        </div>
    );
}

export default App;
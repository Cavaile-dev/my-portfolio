import React from 'react';

// --- ACTION REQUIRED ---
// Import each skill logo from your assets folder.
// Make sure the file names match what you have saved.
import pythonLogo from '../assets/skills/python.svg';
import javascriptLogo from '../assets/skills/javascript.svg';
import reactLogo from '../assets/skills/react.svg';
import pandasLogo from '../assets/skills/pandas.svg';
import numpyLogo from '../assets/skills/numpy.svg';
import scikitLogo from '../assets/skills/scikitlearn.svg';
import tensorflowLogo from '../assets/skills/tensorflow.svg';
import pytorchLogo from '../assets/skills/pytorch.svg';
import htmlLogo from '../assets/skills/html.svg';
import cssLogo from '../assets/skills/css.svg';
import mysqlLogo from '../assets/skills/mysql.svg';
import cppLogo from '../assets/skills/cpp.svg';
import gitLogo from '../assets/skills/git.svg';
import javaLogo from '../assets/skills/java.svg';

const skills = [
    { name: 'Python', imgSrc: pythonLogo },
    { name: 'JavaScript', imgSrc: javascriptLogo },
    { name: 'React', imgSrc: reactLogo },
    { name: 'Pandas', imgSrc: pandasLogo },
    { name: 'NumPy', imgSrc: numpyLogo },
    { name: 'Scikit-learn', imgSrc: scikitLogo },
    { name: 'TensorFlow', imgSrc: tensorflowLogo },
    { name: 'PyTorch', imgSrc: pytorchLogo },
    { name: 'HTML5', imgSrc: htmlLogo },
    { name: 'CSS3', imgSrc: cssLogo },
    { name: 'MySQL', imgSrc: mysqlLogo },
    { name: 'Java', imgSrc: javaLogo },
    { name: 'C++', imgSrc: cppLogo },
    { name: 'Git', imgSrc: gitLogo },
];

// Split the skills array into two halves
const half = Math.ceil(skills.length / 2);
const skillsRow1 = skills.slice(0, half);
const skillsRow2 = skills.slice(half);

// Duplicate each row for a seamless loop
const extendedSkills1 = [...skillsRow1, ...skillsRow1];
const extendedSkills2 = [...skillsRow2, ...skillsRow2];

const Skills = () => {
    return (
        <section id="skills" className="py-20">
            <div className="container mx-auto px-8">
                <h2 className="text-3xl font-bold text-center text-white mb-12">My Skills</h2>

                {/* First Row */}
                <div className="relative w-full overflow-hidden group mb-6">
                    <div className="flex animate-slide group-hover:pause">
                        {extendedSkills1.map((skill, index) => (
                            <div
                                key={`row1-${index}`}
                                className="flex-shrink-0 w-48 mx-4 bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center justify-center"
                            >
                                <img src={skill.imgSrc} alt={`${skill.name} logo`} className="h-14 mb-3" />
                                <p className="text-lg font-semibold text-white">{skill.name}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Second Row */}
                <div className="relative w-full overflow-hidden group">
                    <div className="flex animate-slide-reverse group-hover:pause">
                        {extendedSkills2.map((skill, index) => (
                            <div
                                key={`row2-${index}`}
                                className="flex-shrink-0 w-48 mx-4 bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center justify-center"
                            >
                                <img src={skill.imgSrc} alt={`${skill.name} logo`} className="h-14 mb-3" />
                                <p className="text-lg font-semibold text-white">{skill.name}</p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Skills;
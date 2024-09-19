import React from 'react';
import './skill.css';

function Skill() {
    return (
        <div className="app-container">
            <h1 className="title">Skills</h1>
            <p className="description">
                Skilled MERN developer, competitive coder focused on DSA, learning Cybersecurity, and passionate about web design and development.
            </p>
            <div className="skills-container">
                <div className="skill">
                    <div className="skill-info">
                        <span>HTML</span>
                        <span>60%</span>
                    </div>
                    <div className="progress-bar">
                        <div className="progress html" style={{ width: '60%' }}></div>
                    </div>
                </div>
                <div className="skill">
                    <div className="skill-info">
                        <span>CSS</span>
                        <span>70%</span>
                    </div>
                    <div className="progress-bar">
                        <div className="progress css" style={{ width: '70%' }}></div>
                    </div>
                </div>
                <div className="skill">
                    <div className="skill-info">
                        <span>JavaScript</span>
                        <span>80%</span>
                    </div>
                    <div className="progress-bar">
                        <div className="progress javascript" style={{ width: '80%' }}></div>
                    </div>
                </div>
                <div className="skill">
                    <div className="skill-info">
                        <span>React</span>
                        <span>80%</span>
                    </div>
                    <div className="progress-bar">
                        <div className="progress react" style={{ width: '80%' }}></div>
                    </div>
                </div>
                <div className="skill">
                    <div className="skill-info">
                        <span>Linux</span>
                        <span>60%</span>
                    </div>
                    <div className="progress-bar">
                        <div className="progress linux" style={{ width: '60%' }}></div>
                    </div>
                </div>
                {/* New Skills */}
                <div className="skill">
                    <div className="skill-info">
                        <span>C++</span>
                        <span>70%</span>
                    </div>
                    <div className="progress-bar">
                        <div className="progress cpp" style={{ width: '70%' }}></div>
                    </div>
                </div>
                <div className="skill">
                    <div className="skill-info">
                        <span>Python</span>
                        <span>65%</span>
                    </div>
                    <div className="progress-bar">
                        <div className="progress python" style={{ width: '65%' }}></div>
                    </div>
                </div>
                <div className="skill">
                    <div className="skill-info">
                        <span>Node.js</span>
                        <span>25%</span>
                    </div>
                    <div className="progress-bar">
                        <div className="progress node" style={{ width: '25%' }}></div>
                    </div>
                </div>
                <div className="skill">
                    <div className="skill-info">
                        <span>UI/UX</span>
                        <span>45%</span>
                    </div>
                    <div className="progress-bar">
                        <div className="progress uiux" style={{ width: '45%' }}></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skill;

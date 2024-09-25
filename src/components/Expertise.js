import ProgressBar from './Progressbar';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Expertise = () => {
    const leftref = useRef(null);
    const rightref = useRef(null);

    useEffect(() => {
        const timeline = gsap.timeline({
            defaults: { duration: 1.5, ease: 'power2.out' }
        });

        timeline
            .fromTo(leftref.current, { x: '-100%', opacity: 0 }, { x: '0%', opacity: 1 }, '-=0.5')
            .fromTo(rightref.current, { x: '30%', opacity: 0 }, { x: '0%', opacity: 1 }, '-=0.5');

        const scrollTriggerInstance = ScrollTrigger.create({
            animation: timeline,
            trigger: '.expertise',
            start: 'top 80%',
            toggleActions: 'play none none none',
        });

        return () => {
            scrollTriggerInstance.kill();
        };
    }, []);

    const commonStyles = {
        backgroundColor: '#205BC9',
        height: '10px',
        borderRadius: '30px'
    };

    const leftSkills = [
        { name: 'HTML/CSS', value: 95 },
        { name: 'JavaScript', value: 75 },
        { name: 'Laravel', value: 65 },
        { name: 'Bootstrap', value: 75 },
        { name: 'Vue.js', value: 60 },
        { name: 'Basic React.js', value: 75 },
        { name: 'Basic PHP', value: 75 },
        { name: 'Craft CMS V5 / Twig', value: 75 },
        { name: 'WordPress', value: 50 }
    ];

    const rightSkills = [
        { name: 'Photoshop', value: 75 },
        { name: 'Illustrator', value: 75 },
        { name: 'After Effects', value: 75 },
        { name: 'Lightroom', value: 95 },
        { name: 'XD', value: 80 },
        { name: 'Figma', value: 50 },
        { name: 'GitHub', value: 90 }
    ];

    return (
        <div className="expertise">
            <div className="expertise__left" ref={leftref}>
                {leftSkills.map((skill, index) => (
                    <div className="expertise__block" key={index}>
                        <div className="expertise__block__title">
                            <p>{skill.name}</p>
                            <p>{skill.value}%</p>
                        </div>
                        <div className="expertise__block__bar">
                            <ProgressBar value={skill.value} max={100} aria-label={`${skill.name}`} {...commonStyles} />
                        </div>
                    </div>
                ))}
            </div>
            <div className="expertise__right" ref={rightref}>
                {rightSkills.map((skill, index) => (
                    <div className="expertise__block" key={index}>
                        <div className="expertise__block__title">
                            <p>{skill.name}</p>
                            <p>{skill.value}%</p>
                        </div>
                        <div className="expertise__block__bar">
                            <ProgressBar value={skill.value} max={100} {...commonStyles} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Expertise;
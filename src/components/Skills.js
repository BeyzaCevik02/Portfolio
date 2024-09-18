import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
    const h1Ref = useRef(null);
    const h2Ref = useRef(null);
    const skillCardsRef = useRef([]);

    useEffect(() => {
        const timeline = gsap.timeline({
            defaults: { duration: 1, ease: 'power2.out' }
        });

        timeline
            .fromTo(h2Ref.current, { y: '-100%', opacity: 0 }, { y: '0%', opacity: 0.25 })
            .fromTo(h1Ref.current, { y: '-100%', opacity: 0 }, { y: '0%', opacity: 1 }, '-=0.5');

        skillCardsRef.current.forEach((card, index) => {
            timeline.fromTo(card, 
                { x: '20%', opacity: 0 }, 
                { x: '0%', opacity: 1 }, 
                '-=0.5' 
            );
        });

        const scrollTriggerInstance = ScrollTrigger.create({
            animation: timeline,
            trigger: '.skills',
            start: 'top 90%',
            toggleActions: 'play none none none',
        });

        return () => {
            scrollTriggerInstance.kill();
        };
    }, []);

    return (
        <div className="skills">
            <div className='titles'>
                <h1 ref={h1Ref}>My Skills</h1>
                <h2 ref={h2Ref}>What I Do</h2>
            </div>
            <div className="skills__content">
                {[{
                    icon: '/assets/skills/web.png',
                    title: 'Main Expertise: Frontend Development',
                    text: `With 6 years of dedicated experience in frontend development at school and an additional year through internships and student work, I have honed my skills in HTML, SCSS, CSS, and JavaScript. My primary focus has been on creating seamless and interactive user interfaces. Additionally, I have extensive experience working with Laravel, specializing in API integrations, enhancing my ability to deliver comprehensive web solutions.`
                }, {
                    icon: '/assets/skills/design.png',
                    title: 'Sub Expertise: Web Design',
                    text: `I excel at web design, especially using Adobe XD. I create attractive and user-friendly designs. While I'm just starting with Figma, I'm eager to improve. My designs are high-quality, and I'm always looking to get better.`
                }, {
                    icon: '/assets/skills/social.png',
                    title: 'Sub Expertise: Social Media Content Creation And Management',
                    text: `I have experience creating and managing social media content. I can use Adobe tools like Photoshop, Illustrator, After Effects, and Lightroom to edit content for social media. During my internship, I managed social media accounts and made engaging content, including TikTok videos with over 3,600 views.`
                }, {
                    icon: '/assets/skills/cms.png',
                    title: 'Sub Expertise: CMS Integration',
                    text: `I also have a lot of experience with CMS platforms. I specialize in Craft CMS, using Twig to get data and hosting it with WAMP server during my school projects. I have also worked with WordPress using Elementor and am always looking to improve my skills in this area.`
                }].map((skill, index) => (
                    <div className="skills__card" key={index} ref={el => skillCardsRef.current[index] = el}>
                        <div className="skills__card__icon">
                            <img src={skill.icon} alt={skill.title} />
                        </div>
                        <div className="skills__card__title">
                            <h3><span>{skill.title.split(':')[0]}:</span> {skill.title.split(':')[1]}</h3>
                        </div>
                        <div className="skills__card__text">
                            <p>{skill.text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;

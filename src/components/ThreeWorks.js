import projectsData from '../data/works.json';
import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const ThreeWorks = () => {
    const firstThreeProjects = projectsData.slice(0, 3);
    const h1Ref = useRef(null);
    const h2Ref = useRef(null);
    const projectRefs = useRef([]);

    useEffect(() => {
        const timeline = gsap.timeline({
            defaults: { duration: 1, ease: 'power2.out' }
        });

        timeline
            .fromTo(h2Ref.current, { y: '-100%', opacity: 0 }, { y: '0%', opacity: 0.25 })
            .fromTo(h1Ref.current, { y: '-100%', opacity: 0 }, { y: '0%', opacity: 1 }, '-=0.5');
            projectRefs.current.forEach(ref => {
                timeline.fromTo(ref, { x: '20%', opacity: 0 }, { x: '0%', opacity: 1 }, '-=0.5');
            });
    
        const scrollTriggerInstance = ScrollTrigger.create({
            animation: timeline,
            trigger: '.three__works',
            start: 'top 80%',
            toggleActions: 'play none none none',
        });

        return () => {
            scrollTriggerInstance.kill();
        };
    }, []);
    const setProjectRef = (element, index) => {
        projectRefs.current[index] = element;
    };
    return (
        <div className="three__works">
            <div className='titles'>
                <h1 ref={h1Ref}>My Works</h1>
                <h2 ref={h2Ref}>i made recently</h2>
            </div>
            <div className="three__works__cards" >
                {firstThreeProjects.map((project, index) => (
                    <div className="card" key={index} ref={el => setProjectRef(el, index)}>
                        <div className="card__image">
                            <img src={project.image} alt={project.title.replace(/<br\s*\/?>/gi, ' ')} />
                        </div>
                        <div className="card__bottom">
                            <div className="card__title">
                                <h2 dangerouslySetInnerHTML={{ __html: project.title }} />
                                <p>{project.description}</p>
                            </div>
                            <div className="card__tags">
                                {project.tags.map((tag, tagIndex) => (
                                    <div className={`tag ${tag.toLowerCase()}`} key={tagIndex}>
                                        <p>{tag}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="three__works__button">
                <Link to="/works" className="btn">I have more!</Link>
            </div>
        </div>
    );
};

export default ThreeWorks;
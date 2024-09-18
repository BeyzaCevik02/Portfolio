import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';  

gsap.registerPlugin(ScrollTrigger);  


const About = () => {
    const h1Ref = useRef(null);
    const h2Ref = useRef(null);
    const leftContentRef = useRef(null);
    const rightContentRef = useRef(null);

    useEffect(() => {
        const timeline = gsap.timeline({
            defaults: { duration: 1, ease: 'power2.out' }
        });

        timeline
            .fromTo(h2Ref.current, { y: '-100%', opacity: 0 }, { y: '0%', opacity: 0.25 })
            .fromTo(h1Ref.current, { y: '-100%', opacity: 0 }, { y: '0%', opacity: 1 }, '-=0.5')
            .fromTo(leftContentRef.current, { x: '-100%', opacity: 0 }, { x: '0%', opacity: 1 }, '-=0.5')
            .fromTo(rightContentRef.current, { x: '100%', opacity: 0 }, { x: '0%', opacity: 1 }, '-=0.5');

        const scrollTriggerInstance = ScrollTrigger.create({
            animation: timeline,
            trigger: '.about',
            start: 'top 80%',
            toggleActions: 'play none none none',
        });

        return () => {
            scrollTriggerInstance.kill(); 
        };
    }, []);
    

    return (
        <div className='about'>
            <div className='titles'>
                <h2 ref={h2Ref}>Know Me More</h2>
                <h1 ref={h1Ref}>About Me</h1>
            </div>
            <div className='about__content'>
                <div ref={leftContentRef} className='about__content__left'>
                    <div className='about__content__left__text'>
                        <p><b>Name:</b> Beyza Cevik</p>
                        <p><b>Email:</b> info@beyzacevik.be</p>
                        <p><b>Age:</b> 21</p>
                        <p><b>From:</b> Beringen, Belgium</p>
                    </div>
                    <a href='/assets/Beyza_Cevik_CV_ENG.pdf' target='_blank' className='btn'>Download CV</a>
                </div>
                <div ref={rightContentRef} className='about__content__right'>
                    <p>
                        Hello! I’m Beyza Cevik, born and raised in Belgium, with a degree in Digital Design from PXL University of Applied Sciences. Technology has captivated me from a young age, sparking a lifelong curiosity and drive to explore and innovate.
                        <br />
                        <br />
                        I’m proactive and adaptable, always excited to learn new things and take on challenges. I communicate well with others and make sure their needs are met with thoughtful solutions.
                        <br />
                        <br />
                        I pay close attention to detail and aim for high-quality results. I enjoy working on a variety of projects and am committed to growing both personally and professionally.
                        <br />
                        <br />
                        With a passion for technology and an appreciation for different viewpoints, I’m looking forward to contributing positively to new opportunities in the future.
                    </p>
                </div>
            </div>
            <div className='logo__back'>
                <img src='/assets/logo_white.png' alt='logo' />
            </div>
        </div>
    );
};

export default About;

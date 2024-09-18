import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Header = () => {
    const titleRef = useRef(null);

    useEffect(() => {
        gsap.matchMedia().add("(max-width: 900px)", () => {
            gsap.fromTo(
                titleRef.current,
                { x: '-50%', opacity: 0 },
                {
                    x: '0%',
                    opacity: 1,
                    duration: 1,
                    ease: 'power2.out',
                }
            );
        });

        gsap.matchMedia().add("(min-width: 900px)", () => {
            gsap.fromTo(
                titleRef.current,
                { x: '-50%', opacity: 0 },
                {
                    x: '0%',
                    opacity: 1,
                    duration: 1,
                    ease: 'power2.out',
                }
            );
        });
    }, []);

    return (
        <div className="hero">
            <div className='hero__left'>
                <div ref={titleRef} className='hero__left__title'>
                    <h1>Beyza Cevik</h1>
                    <h2>
                        Frontend Developer
                        <br></br>
                        & Designer
                    </h2>
                    <p>Based in Beringen, Belgium</p>
                </div>
            </div>
            <div className='hero__right'>
                <img src='/assets/hero.webp' alt='beyza cevik' />
            </div>
        </div>
    );
}

export default Header;

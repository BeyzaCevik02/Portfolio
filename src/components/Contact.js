import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';  
gsap.registerPlugin(ScrollTrigger);  

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isLoading, setIsLoading] = useState(false); 
    const [message, setMessage] = useState(''); 
    const [isButtonVisible, setIsButtonVisible] = useState(true); 

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setMessage('');

        try {
            const response = await fetch('/sendEmail.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams(formData).toString(),
            });

            const result = await response.json();

            if (result.status === 'success') {
                setMessage('Message sent successfully!');
                setIsButtonVisible(false); 
            } else {
                setMessage('Failed to send message.');
            }
        } catch (error) {
            setMessage('An error occurred. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };
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
            trigger: '.contact',
            start: 'top 80%',
            toggleActions: 'play none none none',
        });

        return () => {
            scrollTriggerInstance.kill(); 
        };
    }, []);
    return (
        <div className="contact">
            <div className='titles'>
                <h1 ref={h1Ref}>Contact</h1>
                <h2 ref={h2Ref}>Get in Touch</h2>
            </div>
            <div className="contact__container">
                <div className="contact__info" ref={leftContentRef}> 
                    <p>
                        Ready to create something amazing together?
                        Let's collaborate, or hire me to bring your vision to life!
                    </p>
                    <div className="contact__icon">
                        <div className="contact__icontext">
                            <img src="/assets/contact/mail.png" alt="mail" />
                            <p>info@beyzacevik.be</p>
                        </div>
                        <div className="contact__icontext">
                            <img src="/assets/contact/tel.png" alt="telephone" />
                            <p>+32 484 70 25 31</p>
                        </div>
                    </div>

                    <div className="contact__socials">
                        <p>SOCIALS</p>
                        <div className="contact__socialsicons">
                            <a href="https://www.linkedin.com/in/beyza-cevik-9875b1235" target="_blank" rel="noopener noreferrer"> <img src="/assets/contact/linkedn.png" alt="linkedin" /></a>
                            <a href="https://www.instagram.com/beyzac_10" target="_blank" rel="noopener noreferrer"> <img src="/assets/contact/insta.png" alt="instagram" /></a>
                            <a href="https://github.com/BeyzaCevik02" target="_blank" rel="noopener noreferrer"> <img src="/assets/contact/github.png" alt="github" /></a>
                        </div>
                    </div>
                </div>
                <div className="contact__form" ref={rightContentRef}>
                    <form onSubmit={handleSubmit}>
                        <div className='contact__item'>
                            <label htmlFor="name">Name *</label>
                            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                        </div>
                        <div className='contact__item'>
                            <label htmlFor="email">Email *</label>
                            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                        </div>
                        <div className='contact__item'>
                            <label htmlFor="message">Message *</label>
                            <textarea id="message" name="message" value={formData.message} onChange={handleChange} required></textarea>
                        </div>
                        {isButtonVisible && ( // Conditionally render the button
                            <button className='btn' type="submit" disabled={isLoading}>
                                {isLoading ? 'Sending...' : 'Submit'}
                            </button>
                        )}
                    </form>
                    {message && <p className="contact__message">{message}</p>}
                </div>
            </div>
        </div>
    );
};

export default Contact;

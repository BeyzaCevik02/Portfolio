import projectsData from '../data/works.json';
import { useEffect, useState } from 'react';
import Modal from './ProjectModal';

const Works = () => {
    const [showModal, setShowModal] = useState(false);
    const [modalImages, setModalImages] = useState([]);
    const handleCardClick = (images) => {
        setModalImages(images);
        setShowModal(true);
    };
    const handleMoreCardClick = (type) => {
        let images = [];
        switch (type) {
            case 'DESIGNS':
                images = [
                    '/assets/works/designs/mailing_api.png',
                    '/assets/works/designs/brandguideline.png',
                    '/assets/works/designs/firstportfolio.png',
                ];
                break;
            case 'SOCIALS':
                images = [
                    '/assets/works/socials/orcapraia.png',
                ];
                break;
            case 'ILLUSTRATIONS':
                images = [
                    '/assets/works/illustratie/outline_digitale_vormgeving.png',
                    '/assets/works/illustratie/animal.png',
                    '/assets/works/illustratie/googleads.png',
                    '/assets/works/illustratie/logocreating.png',
                ];
                break;
            default:
                break;
        }
        setModalImages(images);
        setShowModal(true);
    }; const getModalImagesForProject = (project) => {
        switch (project.title) {
            case 'Final Schoolproject':
                return [
                    '/assets/works/designs/mailing_api.png',
                ];
            case 'Schoolproject <br /> Craft CMS V5':
                return [
                    '/assets/works/showcase/craft.png',
                ];
            case 'Schoolproject <br /> WordPress':
                if (project.image.includes('wordpressks')) {
                    return [
                        '/assets/works/showcase/kss.png',
                    ];
                } else if (project.image.includes('wordpress')) {
                    return [
                        '/assets/works/showcase/gg.png',
                    ];
                }
                break;
            case 'Schoolproject <br /> Vue.js':
                return [
                    '/assets/works/showcase/vue.png',
                ];
            case 'Schoolproject <br /> SCSS':
                return [
                    '/assets/works/showcase/scss.png',
                ];
            default:
                return [];
        }
    };
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="works">
            <div className='titles'>
                <h1>My Works</h1>
            </div>
            <h2 className='subtitle'>WEBSITES</h2>
            <div className="works__cards">
            {projectsData.map((project, index) =>
                    project.link ? (
                        <a
                            key={index}
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="card"
                        >
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
                        </a>
                    ) : (
                        <div
                            className="card"
                            key={index}
                            onClick={() => handleCardClick(getModalImagesForProject(project))}
                        >
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
                    )
                )}
            </div>
            <div className='more'>
                <h2 className='subtitle2'>MORE</h2>
                <div className="more__cards">
                    <div className="more__card" onClick={() => handleMoreCardClick('DESIGNS')}>
                        <div className="more__card__image">
                            <img src="/assets/works/designs/mailing_api.png" alt="more" />
                            <div className="more__card__image__overlay">
                                <h2>DESIGNS</h2>
                            </div>
                        </div>
                    </div>
                    <div className="more__card" onClick={() => handleMoreCardClick('SOCIALS')}>
                        <div className="more__card__image">
                            <img src="/assets/works/socials/orcatiktok.png" alt="more" />
                            <div className="more__card__image__overlay">
                                <h2>SOCIALS</h2>
                            </div>
                        </div>
                    </div>
                    <div className="more__card" onClick={() => handleMoreCardClick('ILLUSTRATIONS')}>
                        <div className="more__card__image">
                            <img src="/assets/works/illustratie/outline_digitale_vormgeving.png" alt="more" />
                            <div className="more__card__image__overlay">
                                <h2>ILLUSTRATIONS</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Modal images={modalImages} showModal={showModal} setShowModal={setShowModal} />
        </div>
    );
};

export default Works;

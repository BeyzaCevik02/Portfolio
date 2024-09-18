import React, { useState, useEffect  } from 'react';
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Modal = ({ images, showModal, setShowModal }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    useEffect(() => {
      setCurrentImageIndex(0);
  }, [images]);
  
    const closeModal = () => {
        setShowModal(false);
    };

    const previousImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    if (!showModal) {
        return null;
    }

    return (
        <div className="modal">
            <div className="modal__content">
                <FaTimes className="modal__close" onClick={closeModal} />
                <div className="modal__image-container">
                    {images.length > 1 && (
                        <FaChevronLeft className="modal__arrow modal__arrow--left" onClick={previousImage} />
                    )}
                    <img src={images[currentImageIndex]} alt={`Slide ${currentImageIndex + 1}`} />
                    {images.length > 1 && (
                        <FaChevronRight className="modal__arrow modal__arrow--right" onClick={nextImage} />
                    )}
                </div>
            </div>
        </div>
    );
};

export default Modal;

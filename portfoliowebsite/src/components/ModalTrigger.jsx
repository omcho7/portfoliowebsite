import React, { useState } from 'react';

const Modal = ({ show, onClose, children }) => {
    if (!show) {
        return null;
    }

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div className="modal-overlay" onClick={handleOverlayClick}>
            <div className="modal-content">
                <button className="modal-close" onClick={onClose}>
                    &times;
                </button>
                {children}
            </div>
            <style jsx>{`
                .modal-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(0, 0, 0, 0.5);
                    backdrop-filter: blur(5px);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    z-index: 1000;
                }
                .modal-content {
                    color: white;
                    background: rgba(138, 138, 138, 0.5);
                    backdrop-filter: blur(20px);
                    padding-top: 60px !important;
                    padding: 40px;
                    border-radius: 8px;
                    position: relative;
                    z-index: 1001;
                    max-width: 500px;
                    text-align: center;
                }
                .modal-close {
                    position: absolute;
                    top: 10px;
                    right: 10px;
                    background: none;
                    border: none;
                    font-size: 24px;
                    cursor: pointer;
                }
                .modal-image {
                    width: 100%;
                    height: auto;
                    border-radius: 8px;
                    transition: transform 0.2s ease-in-out;
                }
                .modal-image-container {
                    position: relative;
                    overflow: hidden;
                }
                .modal-image-container:hover .modal-image {
                    transform: scale(2);
                }
                .modal-button {
                    margin-top: 20px;
                    padding: 10px 20px;
                    background-color: #1a1a1a;
                    color: white !important;
                    border: none;
                    border-radius: 4px;
                    cursor: pointer;
                    text-decoration: none;
                    transition: border-color 0.25s;
                }
                .modal-button:hover {
                    border: 1px solid #646cff;
                }
            `}</style>
        </div>
    );
};

const ModalTrigger = ({ imgSrc, title, description, link, buttonText, showButton }) => {
    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleMouseMove = (e) => {
        const { left, top, width, height } = e.target.getBoundingClientRect();
        const x = ((e.clientX - left) / width) * 100;
        const y = ((e.clientY - top) / height) * 100;
        e.target.style.transformOrigin = `${x}% ${y}%`;
    };

    return (
        <div>
            <button onClick={handleOpenModal}>Detailed View</button>
            <Modal show={showModal} onClose={handleCloseModal}>
                <div className="modal-image-container">
                    <img
                        src={imgSrc}
                        alt={title}
                        className="modal-image"
                        onMouseMove={handleMouseMove}
                    />
                </div>
                <h2>{title}</h2>
                <p>{description}</p>
                {showButton === 1 && (
                    <a href={link} target="_blank" rel="noopener noreferrer" className="modal-button">
                        {buttonText}
                    </a>
                )}
            </Modal>
        </div>
    );
};

export default ModalTrigger;
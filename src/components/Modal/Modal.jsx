import { useEffect } from 'react';
import PropTypes from 'prop-types';
import css from './style.module.css';

const Modal = ({ largeImageURL, tags, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleImageClick = (event) => {
    event.stopPropagation();
  };

  return (
    <>
      <div className={css.overlay} onClick={onClose}>
        <div className={`${css.modal} ${css.close}`} onClick={handleImageClick}>
          <img src={largeImageURL} alt={tags} />
        </div>
      </div>
    </>
  );
};

Modal.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
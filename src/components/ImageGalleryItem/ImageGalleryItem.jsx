import { useState } from 'react';
import PropTypes from 'prop-types';
import css from './style.module.css';
import Modal from 'components/Modal/Modal';

const ImageItem = ({ image }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal((prevShowModal) => !prevShowModal);
  };

  return (
    <>
      <li className={css.item}>
        <img
          className={css.image}
          src={image.webformatURL}
          alt={image.tags}
          onClick={toggleModal}
        />

        {showModal && (
          <Modal
            largeImageURL={image.largeImageURL}
            tags={image.tags}
            onClose={toggleModal}
          />
        )}
      </li>
    </>
  );
};

ImageItem.propTypes = {
  image: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  }).isRequired,
};

export default ImageItem;
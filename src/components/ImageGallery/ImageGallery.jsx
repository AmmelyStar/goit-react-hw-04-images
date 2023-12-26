import css from "./style.module.css"
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import { nanoid } from 'nanoid';

const ImageGallery = ({ images}) => {
  return (
    <ul className={css.gallery}>
      {images.map((image) => (
        <ImageGalleryItem key={nanoid()} image={image}  />
      ))}
    </ul>
  );
};



export default ImageGallery;


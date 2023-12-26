import { useState, useEffect } from 'react';
import axios from 'axios';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Loader from './Loader/Loader';
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const perPage = 12;
const KEY = '40311007-381e26539f6c0a156243500cd';

const App = () => {
  const [searchName, setSearchName] = useState('');
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(0);


  useEffect(() => {
   
    if (searchName === '') {
      return;
    }

  const fetchData = async () => {
    try {
      const URL = `https://pixabay.com/api/?q=${searchName}&page=${currentPage}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=${perPage}`;

      setLoading(true);

      const response = await axios.get(URL);
      const data = response.data;
      const newImages = data.hits;

      if (newImages.length === 0 || !searchName) {
        return toast.info('Sorry image not found...', {
          position: toast.POSITION.TOP_RIGHT,
        });
      }

      setImages((prevImages) => [...prevImages, ...newImages]);
      setTotalPages(Math.ceil(data.totalHits / perPage));
    } catch (error) {
      console.error('Error fetching data:', error);
    
    } finally {
      setLoading(false);
    }
    };
       fetchData();
  }, [searchName, currentPage]);

  const handleSubmit = (searchQuery) => {
    setSearchName(searchQuery);
    setImages([]);
    setCurrentPage(1);
  };

  const loadMore = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <>
      <ToastContainer transition={Slide} />
      <Searchbar onSubmit={handleSubmit} />
      <ImageGallery images={images} />
      {images.length > 0 && totalPages !== currentPage && <Button onClick={loadMore} />}
      {loading && <Loader />}
    </>
  );
};

export default App;

import css from './style.module.css'

const Button = ({ onClick }) => {
  return (
    <button className={css.btn} type="button" onClick={onClick}>
        Load more
    </button>
  );
};



export default Button;
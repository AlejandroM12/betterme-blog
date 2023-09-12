import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../../styles/Card.scss';

const Card = ({ blogItemData, showContent, isCardSm }) => {
  return (
    <div className={`card ${isCardSm ? 'card-sm' : ''}`}>
      <img
        src={`${blogItemData?.image}`}
        className='card-overlay-img object-fit-cover'
      />
      <div className='card-content'>
        <div className='card-body'>
          <h3 className='title title-base'>{blogItemData?.title}</h3>
          {showContent && (
            <p className='text text-lg'>{blogItemData?.content}</p>
          )}
        </div>
        <div className='card-footer card-footer-light flex justify-between items-center'>
          <div className='writer-info'>
            <Link
              to={`/article/${blogItemData.id}`}
              className='tags-item text-sm link-more'
            >
              Leer más
            </Link>
          </div>
          <div className='date-info text text-base'>{blogItemData.date}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;

Card.propTypes = {
  blogItemData: PropTypes.object,
  showContent: PropTypes.bool,
  isCardSm: PropTypes.bool,
};

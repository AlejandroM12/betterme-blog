import PropTypes from 'prop-types';
import '../../styles/Card.scss';

const CardArticles = ({ blogItemData }) => {
  return (
    <div className='card-grid grid'>
      <div className='card-grid-img'>
        <img
          src={`${blogItemData.image}`}
          alt='Featured image'
          className='object-fit-cover'
        />
      </div>
      <div className='card-grid-text'>
        <div>
          <h2 className='title-lg title featured-title'>
            {blogItemData.title}
          </h2>
          <p className='text-lg text'>{blogItemData.content}</p>
        </div>

        <div className='card-footer flex justify-between items-center'>
          <div className='date-info text text-base'>{blogItemData.date}</div>
        </div>
      </div>
    </div>
  );
};

export default CardArticles;

CardArticles.propTypes = {
  blogItemData: PropTypes.object,
};

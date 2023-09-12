import { blogs } from '../../data/blog-posts';
import { Card } from '../Card';
import { HiArrowLongRight } from 'react-icons/hi2';

const Recent = () => {
  return (
    <section className='recent-sc'>
      <div className='container'>
        <div className='recent-content'>
          <div className='section-head flex items-end justify-between'>
            <div className='sc-head-l'>
              <h4 className='title title-lg'>Artículos Populares</h4>
              <p className='text text-base'>
                Estos son nuestros artículos destacados.
              </p>
            </div>
            <div className='sc-head-r'>
              <button type='button' className='btn btn-o-primary'>
                Ver Más
                <span className='btn-icon'>
                  <HiArrowLongRight className='bi bi-arrow-right' />
                </span>
              </button>
            </div>
          </div>

          <div className='card-list grid-cols grid-cols-3'>
            {blogs.slice(1, 4).map((blogItem) => {
              return (
                <Card
                  blogItemData={blogItem}
                  isCardSm={true}
                  key={blogItem.id}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recent;

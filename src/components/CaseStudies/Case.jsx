import { CardWide } from '../CardWide';
import { blogs } from '../../data/blog-posts';

const Case = () => {
  return (
    <section className='case-sc'>
      <div className='container'>
        <div className='case-content'>
          <div className='section-head flex items-end justify-between'>
            <div className='sc-head-l'>
              <h4 className='title title-lg'>Casos de Estudios</h4>
              <p className='text text-base'>La Transformación de Jessica</p>
            </div>
            <div className='sc-head-r'>
              <button type='button' className='btn btn-o-primary'>
                Ver Más
                <span className='btn-icon'>
                  <i className='bi bi-arrow-right'></i>
                </span>
              </button>
            </div>
          </div>

          <CardWide blogItemData={blogs[4]} />
        </div>
      </div>
    </section>
  );
};

export default Case;

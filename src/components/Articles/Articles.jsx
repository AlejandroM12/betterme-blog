import { Link } from 'react-router-dom';
import { articlesCards } from '../../data/blog-posts';
import { Card } from '../Card';
import { HiArrowLongRight } from 'react-icons/hi2';

const Articles = () => {
  return (
    <section className='all-sc'>
      <div className='container'>
        <div className='popular-content'>
          <div className='section-head flex items-end justify-between'>
            <div className='sc-head-l'>
              <h4 className='title title-lg'>Más Artículos</h4>
              <p className='text text-base'>
                Explora artículos sobre administración personal, competencias,
                habilidades sociales, metodologías de estudio e inserción
                laboral. Descubre consejos, técnicas y reflexiones que te
                ayudarán en tu crecimiento personal y profesional.
              </p>
            </div>
            <div className='sc-head-r'>
              <Link to='/articles' type='button' className='btn btn-o-primary'>
                Ver Todos
                <span className='btn-icon'>
                  <HiArrowLongRight className='bi bi-arrow-right' />
                </span>
              </Link>
            </div>
          </div>

          <div className='card-list grid-cols grid-cols-2'>
            {articlesCards.slice(3, 5).map((blogItem) => {
              return (
                <Card
                  blogItemData={blogItem}
                  showContent={true}
                  key={blogItem.id}
                />
              );
            })}
          </div>

          <div className='card-list grid-cols grid-cols-3'>
            {articlesCards.slice(5, 8).map((blogItem) => {
              return (
                <Card
                  blogItemData={blogItem}
                  isCardSm={true}
                  key={blogItem.id}
                />
              );
            })}
          </div>

          <div className='flex justify-center section-btn'>
            <Link to='/articles' type='button' className='btn btn-o-primary'>
              Ver todos los artículos
              <span className='btn-icon'>
                <HiArrowLongRight className='bi bi-arrow-right' />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Articles;

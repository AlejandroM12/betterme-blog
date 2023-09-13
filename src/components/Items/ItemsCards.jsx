import { useEffect } from 'react';
import { articlesCards } from '../../data/blog-posts';
import { Card } from '../Card';

const ItemsCards = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className='all-sc'>
      <div className='container'>
        <div className='section-head flex'>
          <div className='sc-head-r'>
            <p className='text text-base'>
              Explora artículos sobre administración personal, competencias,
              habilidades sociales, metodologías de estudio e inserción laboral.
              Descubre consejos, técnicas y reflexiones que te ayudarán en tu
              crecimiento personal y profesional.
            </p>
          </div>
        </div>
        <div className='card-list grid-cols grid-cols-3'>
          {articlesCards.slice(0, 3).map((blogItem) => {
            return (
              <Card blogItemData={blogItem} isCardSm={true} key={blogItem.id} />
            );
          })}
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
              <Card blogItemData={blogItem} isCardSm={true} key={blogItem.id} />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ItemsCards;

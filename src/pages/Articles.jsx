import { useParams } from 'react-router-dom';
import { CardArticles } from '../components';
import { articlesCards } from '../data/blog-posts';
import Container from '../layout/Container';
import HeaderSection from '../layout/HeaderSection';
import { useEffect } from 'react';

const Articles = () => {
  const { id } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const article = articlesCards.find((blog) => blog.id === parseInt(id));
  if (!article) {
    return <div>Artículo no encontrado</div>;
  }

  return (
    <>
      <HeaderSection />
      <main>
        <Container>
          <section className='featured-sc bg-white'>
            <CardArticles blogItemData={article} />
          </section>
          <div className='section-head flex'>
            <div className='sc-head-r'>
              <h4 className='title title-lg'>Lorem ipsum dolor sit amet.</h4>
              <p className='text text-base'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure
                excepturi quas deserunt voluptates et exercitationem, quia
                consequatur eius aspernatur dolorum non minus, minima
                praesentium mollitia eveniet tempora ratione pariatur adipisci
                hic atque dolor molestiae id! Quos asperiores odio, sequi
                repellat numquam qui? Eos perspiciatis possimus quo a modi
                numquam totam.
              </p>
              <p className='text text-base'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure
                excepturi quas deserunt voluptates et exercitationem, quia
                consequatur eius aspernatur dolorum non minus, minima
                praesentium mollitia eveniet tempora ratione pariatur adipisci
                hic atque dolor molestiae id! Quos asperiores odio, sequi
                repellat numquam qui? Eos perspiciatis possimus quo a modi
                numquam totam.
              </p>
              <h4 className='title title-base'>Lorem ipsum dolor sit amet.</h4>
              <p className='text text-base'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure
                excepturi quas deserunt voluptates et exercitationem, quia
                consequatur eius aspernatur dolorum non minus, minima
                praesentium mollitia eveniet tempora ratione pariatur adipisci
                hic atque dolor molestiae id! Quos asperiores odio, sequi
                repellat numquam qui? Eos perspiciatis possimus quo a modi
                numquam totam.
              </p>
              <p className='text text-base'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure
                excepturi quas deserunt voluptates et exercitationem, quia
                consequatur eius aspernatur dolorum non minus, minima
                praesentium mollitia eveniet tempora ratione pariatur adipisci
                hic atque dolor molestiae id! Quos asperiores odio, sequi
                repellat numquam qui? Eos perspiciatis possimus quo a modi
                numquam totam.
              </p>
            </div>
          </div>
        </Container>
      </main>
    </>
  );
};

export default Articles;

import Container from '../layout/Container';
import { CardWide, Recent } from '../components';
import { blogs } from '../data/blog-posts';

const Home = () => {
  return (
    <main>
      <Container>
        <section className='featured-sc bg-white'>
          <CardWide blogItemData={blogs[0]} />
        </section>
      </Container>
      <Recent />
    </main>
  );
};

export default Home;

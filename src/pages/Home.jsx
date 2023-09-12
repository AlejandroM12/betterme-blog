import Container from '../layout/Container';
import { CardWide } from '../components';
import { blogs } from '../data/blog-posts';

const Home = () => {
  return (
    <main>
      <Container>
        <section className='featured-sc bg-white'>
          <CardWide blogItemData={blogs[0]} />
        </section>
      </Container>
    </main>
  );
};

export default Home;

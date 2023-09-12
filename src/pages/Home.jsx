import Container from '../layout/Container';
import { CardWide, Case, Recent } from '../components';
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
      <Case />
    </main>
  );
};

export default Home;

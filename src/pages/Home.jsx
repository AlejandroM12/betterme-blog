import Container from '../layout/Container';
import {
  Articles,
  Banner,
  CardWide,
  Case,
  Header,
  Recent,
} from '../components';
import { blogs } from '../data/blog-posts';
import images from '../utils/images';

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Container>
          <section className='featured-sc bg-white'>
            <CardWide blogItemData={blogs[0]} />
          </section>
        </Container>
        <Recent />
        <Case />
        <Articles />
        <div className='newsletter-curve'>
          <img src={`${images.bannerBg}`} />
        </div>
        <Banner />
      </main>
    </>
  );
};

export default Home;

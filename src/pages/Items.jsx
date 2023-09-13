import { Banner, ItemsCards } from '../components';
import HeaderItems from '../layout/HeaderItems';
import images from '../utils/images';

const Items = () => {
  return (
    <>
      <HeaderItems />
      <main>
        <ItemsCards />
        <div className='newsletter-curve'>
          <img src={`${images.bannerBg}`} />
        </div>
        <Banner />
      </main>
    </>
  );
};

export default Items;

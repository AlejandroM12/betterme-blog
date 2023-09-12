import images from '../../utils/images';

const BlogBanner = () => {
  return (
    <section className='newsletter-sc bg-blue-dark text-white'>
      <div className='container'>
        <div className='newsletter-content grid-cols grid-cols-2 items-center'>
          <div className='newsletter-l'>
            <h3 className='title title-lg'>
              Descubre las últimas tendencias y consejos en nuestro blog.
            </h3>
            <p className='text text-base text-gray'>
              Explora artículos sobre administración personal, competencias,
              habilidades sociales, metodologías de estudio e inserción laboral.
            </p>
          </div>
          <div className='newsletter-r'>
            <div className='newsletter-info'>
              <div className='newsletter-info-wrapper bg-white'>
                <div className='info-img'>
                  <img
                    src={`${images.bannerHome}`}
                    className='object-fit-cover'
                  />
                </div>
                <div className='info-text'>
                  <h4 className='text-xxl text title'>
                    Artículos que inspiran y educan
                  </h4>
                  <p className='text text-lg'>
                    Descubre consejos, técnicas y reflexiones que te ayudarán en
                    tu crecimiento personal y profesional.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogBanner;

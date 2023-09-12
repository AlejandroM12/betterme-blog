import { CardWide } from '../components';
import { cases } from '../data/blog-posts';
import Container from '../layout/Container';
import HeaderSection from '../layout/HeaderSection';

const Cases = () => {
  return (
    <>
      <HeaderSection />
      <main>
        <Container>
          <section className='featured-sc  bg-white '>
            {cases.map((caseItem) => (
              <div key={caseItem.id} className='section-cases'>
                <CardWide blogItemData={caseItem} />
              </div>
            ))}
          </section>
        </Container>
      </main>
    </>
  );
};

export default Cases;

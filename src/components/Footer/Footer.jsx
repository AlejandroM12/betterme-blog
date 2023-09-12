import { Link } from 'react-router-dom';
import { linksData } from '../../data/blog-posts';
import '../../styles/Footer.scss';
import { FooterLink } from '../FooterLink';
import { BsYinYang } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer className='footer bg-blue-dark'>
      <div className='container'>
        <div className='ftr-list'>
          <div className='ftr-item'>
            <Link to='/' className='nav-brand text-white'>
              betterme <BsYinYang className='nav-brand-dot' />
            </Link>
            <p className='text text-base'>
              Diseñado y desarrollado por el talento conjunto de nuestro equipo.
            </p>
            <ul className='social-links text-white flex flex-wrap text-gray text-base'>
              <li>Linkedin</li>
              <li>
                <a
                  className=''
                  href='https://www.linkedin.com/in/morelalejandro/'
                >
                  Alejandro Morel
                </a>
              </li>
              <li>
                <a className='' href='https://www.linkedin.com/in/ivan-meier/'>
                  Ivan Meier
                </a>
              </li>
              <li>
                <a
                  className=''
                  href='https://www.linkedin.com/in/jessica-velizflores/'
                >
                  Jessica Veliz
                </a>
              </li>
              <li>
                <a
                  className=''
                  href='https://www.linkedin.com/in/florencia-rodriguezz/'
                >
                  Florencia Rodriguez
                </a>
              </li>
              <li>
                <a
                  className=''
                  href='https://www.linkedin.com/in/ariadna-rojas-485848235/'
                >
                  Ariadna Rojas
                </a>
              </li>
            </ul>
          </div>

          {linksData.map((linkData) => {
            return <FooterLink key={linkData.id} linkData={linkData} />;
          })}
        </div>
        <div className='ftr-text text-center text-gray text-base'>
          Copyright &copy; 2023. Gracias por ser parte de nuestra comunidad.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

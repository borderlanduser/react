import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

type LogoProps = {
  isActive?: boolean;
};

function Logo({ isActive = false }: LogoProps) {
  return (
    <Link
      className={`header__logo-link ${
        isActive ? 'header__logo-link--active' : ''
      }`.trim()}
      to={AppRoute.Main}
    >
      <img
        className="header__logo"
        src="/img/logo.svg" 
        alt="Rent service logo"
        width="81"
        height="41"
      />
    </Link>
  );
}

export { Logo };

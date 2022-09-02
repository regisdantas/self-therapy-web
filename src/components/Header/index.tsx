import React from 'react';
import { NavLink } from 'react-router-dom';
import { HeaderContainer, Title, Disabled } from './styles';
import { FiArrowLeft, FiLogOut } from 'react-icons/fi';

interface IHeaderProps {
  title: string;
  backPath: string;
}

const Header: React.FC<IHeaderProps> = ({ title, backPath }: IHeaderProps) => {
  return (
    <HeaderContainer>
      <NavLink to="/">
        <Title>{title}</Title>
      </NavLink>
      <div>
        {backPath !== '' ? (
          <NavLink to={backPath}>
            <FiArrowLeft size={30} />
          </NavLink>
        ) : (
          <Disabled>
            <FiArrowLeft size={30} />
          </Disabled>
        )}
        <img src="https://avatars.githubusercontent.com/u/18015288?s=96&v=4" />
        <NavLink to="/logout">
          <FiLogOut size={30} />
        </NavLink>
      </div>
    </HeaderContainer>
  );
};

export default Header;

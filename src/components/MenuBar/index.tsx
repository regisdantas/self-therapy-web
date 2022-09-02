import React from 'react';
import { NavLink } from 'react-router-dom';
import { MenuBarContainer, Disabled } from './styles';
import { FiArrowLeft, FiLogOut } from 'react-icons/fi';

interface IMenuBarProps {
  backPath: string;
  handleLogout: any;
}

const MenuBar: React.FC<IMenuBarProps> = ({
  backPath,
  handleLogout,
}: IMenuBarProps) => {
  return (
    <MenuBarContainer>
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
      <FiLogOut size={30} onClick={() => handleLogout()} />
    </MenuBarContainer>
  );
};

export default MenuBar;

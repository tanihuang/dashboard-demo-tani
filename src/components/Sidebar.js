import classNames from 'classnames';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import {
  FaUser, FaPlus, FaTrashAlt, FaHandsHelping,
} from 'react-icons/fa';
import { BsPlusLg } from 'react-icons/bs';
import { FcMenu } from 'react-icons/fc';
import { useNavigate } from 'react-router-dom';
import SidebarListGroup from './SidebarListGroup';
import labelList from '../mockData/labelList';
import { getListLength } from '../helpers/contactList';
import icon from '../assets/images/img-logo-react.svg';

const Sidebar = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = (e) => {
    e.stopPropagation();
    setIsMenuOpened(!isMenuOpened);
  };

  const closeMenu = () => {
    setIsMenuOpened(false);
  };

  const handleSidebarClick = () => {
    closeMenu();
  };

  return (
    <div
      className={classNames(
        {
          show: isMenuOpened,
        },
        'sidebar',
      )}
      onClick={handleSidebarClick}
    >
      <h1 className="d-none d-md-inline-block">
        <img src={icon} alt="" />
        <div className="d-inline-block">聯絡人</div>
      </h1>
      <Button type="button" className="btn-add d-none d-md-inline-block">
        <FaPlus />
        建立聯絡人
      </Button>
      <button type="button" className="navbar-toggler d-flex d-md-none" onClick={toggleMenu}>
        <FcMenu />
      </button>
      <Nav
        defaultActiveKey="link-1"
        as="ul"
        className={classNames(
          {
            show: isMenuOpened,
          },
        )}
        onClick={(e) => e.stopPropagation()}
      >
        <Nav.Item as="li">
          <Nav.Link
            eventKey="link-1"
            active
            onClick={() => {
              navigate('/');
              closeMenu();
            }}
          >
            <FaUser />
            聯絡人
            <div className="num">
              {getListLength()}
            </div>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <SidebarListGroup list={labelList} onItemClick={closeMenu} />
          <Nav.Link eventKey="link-2" onClick={closeMenu}>
            <BsPlusLg />
            建立標籤
          </Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link eventKey="link-3" onClick={closeMenu}>
            <FaTrashAlt />
            垃圾桶
          </Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link eventKey="link-4" onClick={closeMenu}>
            <FaHandsHelping />
            產生一個聯絡人
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
};

export default Sidebar;

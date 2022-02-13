import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import {
  FaUser, FaPlus, FaTrashAlt, FaHandsHelping,
} from 'react-icons/fa';
import { BsPlusLg } from 'react-icons/bs';
import { FcMenu } from 'react-icons/fc';
import icon from '../assets/images/img-logo-react.svg';
import SidebarListGroup from './SidebarListGroup';

const Sidebar = () => (
  <div className="sidebar">
    <h1 className="d-none d-md-inline-block">
      <img src={icon} alt="" />
      <div className="d-inline-block">聯絡人</div>
    </h1>
    <Button type="button" className="btn-add d-none d-md-inline-block">
      <FaPlus />
      建立聯絡人
    </Button>
    <button type="button" className="navbar-toggler d-flex d-md-none">
      <FcMenu />
    </button>
    <Nav defaultActiveKey="/home" as="ul">
      <Nav.Item as="li">
        <Nav.Link href="/home" active>
          <FaUser />
          聯絡人
          <div className="num">3</div>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <SidebarListGroup />
        <Nav.Link eventKey="link-1">
          <BsPlusLg />
          建立標籤
        </Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link eventKey="link-2">
          <FaTrashAlt />
          垃圾桶
        </Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link eventKey="link-3">
          <FaHandsHelping />
          產生一個聯絡人
        </Nav.Link>
      </Nav.Item>
    </Nav>
  </div>
);

export default Sidebar;

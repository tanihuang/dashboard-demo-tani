import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav';
import SidebarListGroup from './SidebarListGroup';
import icon from '../assets/images/img-logo-react.svg';
import { FaUser } from 'react-icons/fa';
import { FaPlus } from 'react-icons/fa';
import { FaTrashAlt } from 'react-icons/fa';
import { FaHandsHelping } from 'react-icons/fa';
import { BsPlusLg } from 'react-icons/bs';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h1>
        <img src={icon} /><div className="d-inline-block">聯絡人</div>
      </h1>
      <Button className="btn-add"><FaPlus/>建立聯絡人</Button>
      <Nav defaultActiveKey="/home" as="ul">
        <Nav.Item as="li">
          <Nav.Link eventKey="link-2">
            <FaUser/>聯絡人
          </Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <SidebarListGroup/>
          <Nav.Link eventKey="link-2">
            <BsPlusLg/>建立標籤
          </Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link eventKey="link-2">
            <FaTrashAlt/>垃圾桶
          </Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link eventKey="link-2">
            <FaHandsHelping/>產生一個聯絡人
          </Nav.Link>
        </Nav.Item>
      </Nav>

    </div>
  )
}

export default Sidebar;

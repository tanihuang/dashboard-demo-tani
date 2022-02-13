import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import ListGroup from 'react-bootstrap/ListGroup';
import { BsFillTagFill, BsChevronDown } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getListLengthByLabel } from '../helpers/contactList';

const SidebarListGroup = ({ list, onItemClick }) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        <BsChevronDown />
        標籤
      </Button>
      <Collapse in={open}>
        <ListGroup as="ul">
          {
            list.map((item) => (
              <ListGroup.Item
                as="li"
                key={item}
                onClick={() => {
                  navigate(`/?label=${item}`);
                  onItemClick();
                }}
              >
                <BsFillTagFill />
                {item}
                <div className="num">
                  {getListLengthByLabel(item)}
                </div>
              </ListGroup.Item>
            ))
          }
        </ListGroup>
      </Collapse>
    </div>
  );
};

SidebarListGroup.propTypes = {
  list: PropTypes.array,
  onItemClick: PropTypes.func,
};

SidebarListGroup.defaultProps = {
  list: [],
  onItemClick: () => {},
};

export default SidebarListGroup;

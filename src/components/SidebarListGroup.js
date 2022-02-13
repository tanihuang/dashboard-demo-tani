import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import ListGroup from 'react-bootstrap/ListGroup';
import { BsFillTagFill, BsChevronDown } from 'react-icons/bs';

const SidebarListGroup = () => {
  const [open, setOpen] = useState(false);

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
          <ListGroup.Item as="li">
            <BsFillTagFill />
            item1
            <div className="num">2</div>
          </ListGroup.Item>
          <ListGroup.Item as="li">
            <BsFillTagFill />
            item1
            <div className="num">2</div>
          </ListGroup.Item>
        </ListGroup>
      </Collapse>
    </div>
  );
};

export default SidebarListGroup;

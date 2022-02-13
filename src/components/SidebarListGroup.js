import { useState } from "react";
import Button from "react-bootstrap/Button"
import Collapse from "react-bootstrap/Collapse"
import ListGroup from 'react-bootstrap/ListGroup';
import { BsFillTagFill } from 'react-icons/bs';
import { BsChevronDown } from 'react-icons/bs';

const SidebarListGroup = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        <BsChevronDown/>標籤
      </Button>
      <Collapse in={open}>
        <ListGroup as="ul">
          <ListGroup.Item as="li" active>
            <BsFillTagFill/>item1
          </ListGroup.Item>
          <ListGroup.Item as="li" disabled>
            <BsFillTagFill/>item1
          </ListGroup.Item>
        </ListGroup>
      </Collapse>
    </div>
  )
}

export default SidebarListGroup;

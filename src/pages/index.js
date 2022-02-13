import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { FaSearch, FaPlus } from 'react-icons/fa';
import Layout from '../components/layout/Layout';
import DataTable from '../components/DataTable';
import icon from '../assets/images/img-logo-react.svg';
import contactList from '../mockData/contactList';

const Home = () => {
  const [list] = useState(contactList);

  return (
    <Layout>
      <Container fluid>
        <div className="nav d-flex d-md-none justify-content-center">
          <h1>
            <img src={icon} alt="" />
            <div className="d-inline-block">聯絡人</div>
          </h1>
          <Button className="btn-add ml-auto">
            <FaPlus />
            <span className="d-none d-md-block">建立聯絡人</span>
          </Button>
        </div>
        <div className="search-input-group input-group">
          <div className="input-group-text">
            <FaSearch />
          </div>
          <input type="search" placeholder="搜尋" className="form-control" id="datatable-search-input" />
        </div>
        <DataTable list={list} />
      </Container>
    </Layout>
  );
};

export default Home;

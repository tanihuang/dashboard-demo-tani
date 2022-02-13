import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { FaSearch, FaPlus } from 'react-icons/fa';
import { useSearchParams } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import DataTable from '../components/DataTable';
import icon from '../assets/images/img-logo-react.svg';
import { getList, getListByLabel } from '../helpers/contactList';

const Home = () => {
  const [list, setList] = useState([]);
  const [searchParams] = useSearchParams();
  const labelName = searchParams.get('label');

  useEffect(() => {
    if (!labelName) {
      setList(getList());
      return;
    }

    setList(getListByLabel(labelName));
  }, [labelName]);

  const handleSearch = (key) => {
    const searchKey = key.toLowerCase();
    const defaultList = labelName ? getListByLabel(labelName) : getList();

    if (!searchKey) {
      setList(defaultList);
      return;
    }

    const filteredList = defaultList.filter((item) => (
      item.name?.toLowerCase()?.includes(searchKey)
        || item.email?.toLowerCase()?.includes(searchKey)
        || item.phone?.toLowerCase()?.includes(searchKey)
        || item.labels?.find((label) => label?.toLowerCase().includes(searchKey))
    ));
    setList(filteredList);
  };

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
          <input
            type="search"
            placeholder="搜尋"
            className="form-control"
            id="datatable-search-input"
            onChange={(e) => handleSearch(e.target.value)}
          />
        </div>
        <DataTable list={list} />
      </Container>
    </Layout>
  );
};

export default Home;

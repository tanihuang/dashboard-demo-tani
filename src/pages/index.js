import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button'
import Layout from '../components/layout/Layout';
import DataTable from '../components/DataTable';
import { FaSearch } from 'react-icons/fa';
import { FaPlus } from 'react-icons/fa';
import icon from '../assets/images/img-logo-react.svg';

const Home = () => {
  return (
    <Layout>
      <Container fluid>
        <div class="nav d-flex d-md-none justify-content-center">
          <h1>
            <img src={icon}/>
            <div className="d-inline-block">聯絡人</div>
          </h1>
          <Button className="btn-add ml-auto"><FaPlus/>建立聯絡人</Button>
        </div>
        <div className='search-input-group input-group'>
          <div className='input-group-text'>
            <FaSearch/>
          </div>
          <input type="search" placeholder="搜尋" class="form-control" id="datatable-search-input"/>
        </div>  
        <DataTable/>
      </Container>
    </Layout>
  );
};

export default Home;

import PropTypes from 'prop-types';
import Sidebar from '../Sidebar';

const Layout = ({ children }) => (
  <div className="layout">
    <Sidebar />
    <main className="main">
      {children}
    </main>
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

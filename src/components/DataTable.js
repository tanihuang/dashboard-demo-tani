import classNames from 'classnames';
import Table from 'react-bootstrap/Table';
import { FaEllipsisV } from 'react-icons/fa';
import PropTypes from 'prop-types';
import icon from '../assets/images/img-logo-react.svg';

const DataTable = ({ className }) => (
  <div className={classNames(
    className,
    'datatable',
  )}
  >
    <Table hover size="sm">
      <thead>
        <tr>
          <th>名稱</th>
          <th>電子郵件</th>
          <th>電話號碼</th>
          <th>
            標籤
            <FaEllipsisV className="icon-more" />
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="text-nowrap">
            <img src={icon} className="icon-logo" alt="" />
            <div className="d-inline-block">王小明</div>
          </td>
          <td>test@test.com</td>
          <td>0912345678</td>
          <td>
            <div className="icon-tag">Front-End</div>
          </td>
        </tr>
        <tr>
          <td className="text-nowrap">
            <img src={icon} className="icon-logo" alt="" />
            <div className="d-inline-block">黃小華</div>
          </td>
          <td>hello@test.com</td>
          <td>0987654321</td>
          <td>
            <div className="icon-tag">Back-End</div>
          </td>
        </tr>
        <tr>
          <td className="text-nowrap">
            <img src={icon} className="icon-logo" alt="" />
            <div className="d-inline-block">李小美</div>
          </td>
          <td>hello@test.com</td>
          <td>0922333444</td>
          <td>
            <div className="icon-tag">Front-End</div>
            <div className="icon-tag">Back-End</div>
          </td>
        </tr>
      </tbody>
    </Table>
  </div>
);

DataTable.propTypes = {
  className: PropTypes.string,
};

DataTable.defaultProps = {
  className: null,
};

export default DataTable;

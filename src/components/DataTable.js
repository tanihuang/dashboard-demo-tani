import classNames from 'classnames';
import Table from 'react-bootstrap/Table';
import { FaEllipsisV } from 'react-icons/fa';
import PropTypes from 'prop-types';

const DataTable = ({ className, list }) => (
  <div className={classNames(
    className,
    'datatable',
  )}
  >
    <Table hover size="sm" responsive>
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
        {
          list.map((item) => (
            <tr key={item.id}>
              <td className="text-nowrap">
                <img src={item.icon} className="icon-logo" alt="" />
                <div className="d-inline-block">
                  {item.name}
                </div>
              </td>
              <td>
                {item.email}
              </td>
              <td>
                {item.phone}
              </td>
              <td className="text-nowrap">
                {
                  item.labels?.map((label) => (
                    <div className="icon-tag" key={label}>
                      {label}
                    </div>
                  ))
                }
              </td>
            </tr>
          ))
        }
      </tbody>
    </Table>
  </div>
);

DataTable.propTypes = {
  className: PropTypes.string,
  list: PropTypes.array,
};

DataTable.defaultProps = {
  className: null,
  list: [],
};

export default DataTable;

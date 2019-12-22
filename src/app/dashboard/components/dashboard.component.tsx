import React from 'react';
import { Container, Table } from 'reactstrap';

import CustomButtom from '../../shared/form/components/custom-button.component';

import '../styles/dashboard.styles.scss';

const DashboardComponent = () => (
  <div className="dashboard d-flex flex-column flex-wrap justify-content-center align-center">
    <Container>
      <div className="add-post mb-4">
        <CustomButtom name="Add post" onClick={() => console.log()} />
      </div>
      <Table>
        <thead>
          <th>Name</th>
          <th>URL</th>
          <th>View12s</th>
        </thead>
        <tbody>
          <tr>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  </div>
)

export default DashboardComponent;
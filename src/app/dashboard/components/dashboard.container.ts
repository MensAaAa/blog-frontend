import { connect } from 'react-redux';
import DashboardComponent from './dashboard.component';
import withAuth from '../../shared/HOC/components/withAuth';

export default connect(null)(withAuth(DashboardComponent));
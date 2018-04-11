import React from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';

import { employeesFetch } from '../actions';
import ListItem from './ListItem';

class EmployeeList extends React.Component {
  componentWillMount() {
    this.props.employeesFetch();
    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }

  createDataSource = ({ employees }) => {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(employees);
  };

  renderRow = employee => {
    return <ListItem employee={employee} />;
  };

  render() {
    // console.log(this.props);
    return (
      <ListView
        enableEmptySections
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      >
        <ListItem />
      </ListView>
    );
  }
}

const mapStateToProps = state => {
  const employees = Object.keys(state.employees).map(uid => {
    return {
      ...state.employees[uid],
      uid
    };
  });

  return { employees };
};

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);

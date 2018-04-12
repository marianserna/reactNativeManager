import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATE,
  EMPLOYEES_FETCH_SUCCESS,
  EMPLOYEE_SAVE_SUCCESS
} from './types';

export const employeeUpdate = ({ prop, value }) => {
  return {
    type: EMPLOYEE_UPDATE,
    payload: { prop, value }
  };
};

export const employeeCreate = ({ name, phone, shift }) => {
  // console.log(name, phone, shift);
  const { currentUser } = firebase.auth();

  // this arrow func is just to get passed the redux thunk requirement
  return dispatch => {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/employees`)
      .push({ name, phone, shift })
      //redirect to employee list
      .then(() => {
        dispatch({ type: EMPLOYEE_CREATE });
        Actions.pop();
      });
  };
};

export const employeesFetch = () => {
  const { currentUser } = firebase.auth();

  return dispatch => {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/employees`)
      // snapshot: object that describes the data (its not the actual object)
      .on('value', snapshot => {
        dispatch({ type: EMPLOYEES_FETCH_SUCCESS, payload: snapshot.val() });
      });
  };
};

export const employeeSave = ({ name, phone, shift, uid }) => {
  const { currentUser } = firebase.auth();

  return dispatch => {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/employees/${uid}`)
      .set({ name, phone, shift })
      .then(() => {
        dispatch({ type: EMPLOYEE_SAVE_SUCCESS });
        Actions.pop();
      });
  };
};

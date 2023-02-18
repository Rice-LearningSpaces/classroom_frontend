import { GET_ROOMS } from "../../actionTypes";
// import Client from "../../../Contentful";

// export const getRooms = () => async dispatch => {
//   const response = await Client.getEntries().then(respone => respone.items);
//   dispatch({
//     type: GET_ROOMS,
//     payload: response
//   });
// };

// export const getContacts = () => dispatch => {};

import roomData from '../../../data';

export const getRooms = () => async dispatch => {
  const response = roomData;
  dispatch({
    type: GET_ROOMS,
    payload: response
  });
};

export const getContacts = () => dispatch => {};
import * as actionTypes from './actionTypes';


export const loginUser = (username=null,password=null) => {
	// (dispatch,prevState) => {
	// }
	return({
		type: actionTypes.AUTH_LOGIN,
		payload: {username, password}
	})
}
export const registerUser = (data) => {
	return({
		type: actionTypes.AUTH_REGISTER,
		payload: data,
	})
}
export const logoutUser = (id=null) => {
	return({
		type: actionTypes.AUTH_LOGOUT,
		payload: id,
	})
}
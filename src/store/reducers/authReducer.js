import * as actionTypes from '../actions/actionTypes';

const loginInfo = {
	is_loggedin: false,
}

export default function AuthReducer(state=loginInfo, action){
	switch(action.type){
		case actionTypes.AUTH_LOGIN:
			let user = localStorage.getItem(action.payload)
			return {is_loggedin: true, ...JSON.parse(user)}

		case actionTypes.AUTH_REGISTER:
			let id = new Date();
			localStorage.setItem([action.payload.username] , JSON.stringify({id,...action.payload}));
			return {is_loggedin: true, id ,...action.payload} 

		default:
			return state;
	}
}
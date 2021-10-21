import { SIGN_UP } from "../action-types/signup.type";

const initialStates = {
	userData: [],
    
};


const signCart = (state = initialStates, action) => {
	switch (action.type) {
		case SIGN_UP:
			return {
				...state.userData,
				userData: action.payload
				};

		default:
			return state;
	}
};

export default signCart;

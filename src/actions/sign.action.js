import { SIGN_UP } from "../action-types/signup.type";

export const signUp = (data) => {
	return (dispatch) => {
		dispatch({
            type: SIGN_UP,
            payload : data
        });
        console.log('signUp', data)
	};
};

// export const LogIn = (data) => {
// 	return (dispatch) => {
// 		dispatch({
//             type: LOG_IN,
//             payload : data
//         });
//         console.log('LogIn', data)
// 	};
// };


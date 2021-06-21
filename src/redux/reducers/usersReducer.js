const initialState = {
	loading:false,
	users:[],
	errors:''
}

const usersReducer = (state=initialState,action)=>{
	switch(action.type){
		case 'fetchUsersRequest':
		return{...state,loading:true}
		case 'fetchUsersSuccess':
		return{loading:false,users:action.data,error:''}
		case 'fetchUsersFail':
		return{loading:false,error:action.data,users:[]}
		default:
		return state
	}
}

export default usersReducer;
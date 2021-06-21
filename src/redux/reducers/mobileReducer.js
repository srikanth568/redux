const initialState={
	mobiles:1000
}

const mobileReducer = (state=initialState,action) =>{
	switch(action.type){
		case 'buy_mobile':
		return{mobiles:state.mobiles-1}
		default:
		return state
	}
}

export default mobileReducer;
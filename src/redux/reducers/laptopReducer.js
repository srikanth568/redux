const initialState = {
	laptops:100
}

const laptopReducer = (state=initialState,action)=>{
	switch(action.type){
		case 'buy_laptop':
		return{laptops:state.laptops-1}
		default:
		return state
	}

}

export default laptopReducer
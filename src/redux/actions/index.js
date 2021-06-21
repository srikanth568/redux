import axios from 'axios'

export const buy_laptop =()=>{
	return{
		type:'buy_laptop'
	}
}

export const buy_mobile =()=>{
	return{
		type:'buy_mobile'
	}
}

export const fetchUsersRequest = ()=>{
	return{
		type:'fetchUsersRequest'
	}
}

export const fetchUsersSuccess = (users)=>{
	return{
		type:'fetchUsersSuccess',
		data:users
	}
}

export const fetchUsersFail = (error)=>{
	return{
		type:'fetchUsersFail',
		data:error
	}
}

export const fetchUsersData = ()=>{
	return function(dispatch){
		dispatch(fetchUsersRequest())
		axios.get('https://jsonplaceholder.typicode.com/users')
		.then(res=>{
			let users = res.data.map(data=>data.id)
		dispatch(fetchUsersSuccess(users))
		})
		.catch(error=>{
			dispatch(fetchUsersFail(error))
		})
	}
}

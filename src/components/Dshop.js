import React,{Component,Fragment} from 'react'
import Styles from './Styles.css'
import {connect,useSelector} from 'react-redux'
import {buy_laptop,buy_mobile,fetchUsersData} from '../redux/actions';
import {bindActionCreators} from 'redux'

export function Dshop(props){
	let users = useSelector(state=>state.usersReducer.users)
	let laptops= useSelector(state=>state.laptopReducer.laptops)
	let mobiles = useSelector(state=>state.mobileReducer.mobiles)
		return(
			<Fragment>
				<h1 className="title">welcome to dshop</h1>
				<div className="items">
					<div className="item">
						<p>dell laptop</p>
						<p>available :{laptops}</p>
						<button className='button' onClick={props.buy_laptop}>buy</button>
					</div>
					<div className="item">
						<p>redmi</p>
						<p>available :{mobiles}</p>
						<button className='button' onClick={props.buy_mobile}>buy</button>
					</div>
					<div className="item">
						<p>api data</p>
						<p>users length:{users.length}</p>
						<button className='button' onClick={props.fetchUsersData}>call api</button>
					</div>					
				</div>			
			</Fragment>
			)
}

// const mapStateToProps = (state)=>{
// 	console.log("sate",state)
// 	return {
// 		laptops:state.laptopReducer.laptops,
// 		mobiles:state.mobileReducer.mobiles,
// 		users:state.usersReducer.users,
// 	}
// }

// const mapDispatchToProps = (dispatch)=>{
// 	return{
// 		buy_laptop:()=> dispatch(buy_laptop()),
// 		buy_mobile:()=> dispatch(buy_mobile()),
// 		getUsers:()=>dispatch(fetchUsersData()),
// 	}
// }

const mapDispatchToProps = (dispatch)=>{
	return bindActionCreators({
		buy_laptop,
		buy_mobile,
		fetchUsersData
	},dispatch)
}

export default connect(null,mapDispatchToProps)(Dshop);
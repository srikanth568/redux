import React,{Component,Fragment} from 'react'
import Styles from './Styles.css'
import {connect} from 'react-redux'
import {buy_laptop,buy_mobile,fetchUsersData} from '../redux/actions';

export class Shop extends Component{
	render(){
		return(
			<Fragment>
				<h1 className="title">welcome to dshop</h1>
				<div className="items">
					<div className="item">
						<p>dell laptop</p>
						<p>available :{this.props.laptops}</p>
						<button className='button' onClick={this.props.buy_laptop}>buy</button>
					</div>
					<div className="item">
						<p>redmi</p>
						<p>available :{this.props.mobiles}</p>
						<button className='button' onClick={this.props.buy_mobile}>buy</button>
					</div>
					<div className="item">
						<p>api data</p>
						<p>users length:{this.props.users.length}</p>
						<button className='button' onClick={this.props.getUsers}>call api</button>
					</div>					
				</div>			
			</Fragment>
			)
	}
}

const mapStateToProps = (state)=>{
	console.log("sate",state)
	return {
		laptops:state.laptopReducer.laptops,
		mobiles:state.mobileReducer.mobiles,
		users:state.usersReducer.users,
	}
}

const mapDispatchToProps = (dispatch)=>{
	return{
		buy_laptop:()=> dispatch(buy_laptop()),
		buy_mobile:()=> dispatch(buy_mobile()),
		getUsers:()=>dispatch(fetchUsersData()),
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Shop);
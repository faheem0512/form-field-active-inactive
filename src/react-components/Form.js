import React from "react";
import Proptypes from "prop-types";

export default class Form extends React.Component {
	constructor(props){
		super(props);
		this.state = {};
		this.getValue = this.getValue.bind(this);
		this.setValue = this.setValue.bind(this);
	}
	getValue(name){
		return this.state[name];

	}

	setValue(name,value){
		this.setState({
			[name]:value
		});

	}
	getChildContext(){
		return {
			formProps:{
				setValue: this.setValue,
				getValue:this.getValue,
			}
		}
	}


	render(){
		const {children} = this.props;
		return (<div>
			{children}
		</div>);
	}

};

Form.childContextTypes = {
	formProps:Proptypes.object
}

Form.propTypes = {
	children:Proptypes.node

}
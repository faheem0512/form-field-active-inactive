import React from "react";
import Proptypes from "prop-types";

export default class DataInput extends React.Component {
	constructor(props,context){
		super(props,context);
		this.state = {isActive:props.isActive};
		this.onClick = this.onClick.bind(this);
		this.onBlur = this.onBlur.bind(this);
		this.onChange = this.onChange.bind(this);

	}


	
	renderComponent(){
		const {render,label,name} = this.props;
		const {formProps:{getValue}} = this.context; 
		let value = getValue(name);
		return render({value:value?value:label,onClick:this.onClick});

	}

	onChange(e){
		const {name} = this.props;
		const {formProps:{setValue}} = this.context;
		setValue(name,e.target.value);
	}

	onBlur(){
		this.setState({isActive:false});
	}

	onClick(){
		this.setState({isActive:true});	
	}

	activeComponent(){
		const {active,name} = this.props;
		const {formProps:{getValue}} = this.context; 
		let _activeProps = {
			onChange:this.onChange,
			onBlur:this.onBlur,
			value:getValue(name),
			name
		};
		return active(_activeProps);

	}

	render(){
		const {label} = this.props;
		const {isActive} = this.state;
		return (<div className="data-input">
					
					{isActive?this.activeComponent():this.renderComponent()}
		</div>);
	}

};

DataInput.contextTypes = {
	formProps:Proptypes.object
}

DataInput.propTypes = {
	isActive:Proptypes.bool,
	value:Proptypes.string,
	render:Proptypes.func,
	active:Proptypes.func,
	name:Proptypes.string.isRequired,
	children:Proptypes.node

}

DataInput.defaultProps = {
	isActive:false,
	render:_=>_,
	active:_=>_
};





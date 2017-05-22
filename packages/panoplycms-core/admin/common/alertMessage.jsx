AlertMessage=React.createClass({
	render:function(){
		return (
			<div className="successMsg alert alert-success">
				<button type="button" onClick={this.props.func} className="close"  aria-label="Close">
					<span aria-hidden="true">&times;</span>
				</button>
				<strong>Successfully! </strong>
				{this.props.data}
			</div>
		)
	}
})

export default AlertMessage;
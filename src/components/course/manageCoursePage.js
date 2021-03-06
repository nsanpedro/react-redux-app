import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseForm from './courseForm';


class ManageCourseActions extends React.Component {
	constructor(props, context){
		super(props, context);

		this.state = {
			course: Object.assign({}, this.props.course),
			errors: {}
		};
	}

	render() {
		return(
			<div>
				<h1>Manage Course Page</h1>
				<CourseForm 
				allAuthors = {[]}
				course={this.state.course}
				errors={this.state.errors}
				/>
			</div>
		);	
	}
}

ManageCourseActions.propTypes = {
	course: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
	let course = {id: '', watchHref: '', title: '', authorId: '', length: '', category:''};
	return {
		course: course 
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(courseActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCourseActions);







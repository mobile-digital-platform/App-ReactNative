import {connect} from 'react-redux';

import {
	register,
	get_personal_data,
	change_personal_data,
	log_out,
	remove_error,
	module as settings_module
} from '../../redux/reducers/settings';
import Component from './component';

const mapStateToProps = state => ({
	user:			state[settings_module].user,
	error:			state[settings_module].error,
	initialized:	state[settings_module].initialized,
	loading:		state[settings_module].loading,
});

const mapDispatchToProps = {
	register,
	get_personal_data,
	change_personal_data,
	log_out,
	remove_error,
};

export default connect(mapStateToProps,mapDispatchToProps)(Component);

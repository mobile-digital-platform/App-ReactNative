import {connect} from 'react-redux';

import {
	register,
	get_personal_data,
	save_personal_data,
	remove_registration_error,
	remove_get_personal_data_error,
	remove_save_personal_data_error,
	log_out,
	module as settings_module
} from '../../redux/reducers/settings';
import Component from './component';

const mapStateToProps = state => ({
	user:						state[settings_module].user,
	registration_state:			state[settings_module].registration_state,
	get_personal_data_state:	state[settings_module].get_personal_data_state,
	save_personal_data_state:	state[settings_module].save_personal_data_state,
	last_action:				state[settings_module].last_action,
});

const mapDispatchToProps = {
	register,
	get_personal_data,
	save_personal_data,
	remove_registration_error,
	remove_get_personal_data_error,
	remove_save_personal_data_error,
	log_out,
};

export default connect(mapStateToProps,mapDispatchToProps)(Component);

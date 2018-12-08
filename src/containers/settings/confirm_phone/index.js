import {connect} from 'react-redux';

import {
	phone_send_code,
	phone_confirm,
	remove_phone_send_code_error,
	remove_phone_confirm_error,
	module as settings_module
} from '../../../redux/reducers/settings';
import Component from './component';

const mapStateToProps = state => ({
	user:						state[settings_module].user,
	phone_send_code_state:		state[settings_module].phone_send_code_state,
	phone_confirm_state:		state[settings_module].phone_confirm_state,
	last_action:				state[settings_module].last_action,
});

const mapDispatchToProps = {
	phone_send_code,
	phone_confirm,
	remove_phone_send_code_error,
	remove_phone_confirm_error,
};

export default connect(mapStateToProps,mapDispatchToProps)(Component);

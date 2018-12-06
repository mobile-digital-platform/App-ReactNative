// Изменение личных данных на странице настроек

import {connect} from 'react-redux';

import {send_data,module as authorization_module} from '../../../redux/reducers/settings/authorization';
import Component from './component';

const mapStateToProps = state => ({
	loading:	state[authorization_module].loading,
	loaded:		state[authorization_module].loaded,
	error:		state[authorization_module].error,
	initialed:	state[authorization_module].initialed,
	data:		state[authorization_module].data,
});

const mapDispatchToProps = {
	send_data,
};

export default connect(mapStateToProps,mapDispatchToProps)(Component);

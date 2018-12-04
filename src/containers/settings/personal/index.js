// Изменение личных данных на странице настроек

import {connect} from 'react-redux';

import {send_data,module as pesonal_module} from '../../../redux/reducers/settings/personal';
import Component from './component';

const mapStateToProps = state => ({
	loading:	state[pesonal_module].loading,
	loaded:		state[pesonal_module].loaded,
	error:		state[pesonal_module].error,
	initialed:	state[pesonal_module].initialed,
	data:		state[pesonal_module].data,
});

const mapDispatchToProps = {
	send_data,
};

export default connect(mapStateToProps,mapDispatchToProps)(Component);

import {connect} from 'react-redux';

import {
	change_city,
	module as settings_module
} from '../../../redux/reducers/settings';
import Component from './component';

const mapStateToProps = state => ({
	user: state[settings_module].user,
});

const mapDispatchToProps = {
	change_city,
};

export default connect(mapStateToProps,mapDispatchToProps)(Component);

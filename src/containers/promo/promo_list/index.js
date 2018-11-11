import {connect} from 'react-redux';

import {fetch_data,module as promo_module} from '../../../redux/reducers/promo';
import Component from './component';

const mapStateToProps = state => ({
	loading:	state[promo_module].loading,
	loaded:		state[promo_module].loaded,
	data:		state[promo_module].data,
});

const mapDispatchToProps = {
	fetch_data,
};

export default connect(mapStateToProps,mapDispatchToProps)(Component);

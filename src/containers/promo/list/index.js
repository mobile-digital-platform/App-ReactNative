import {connect} from 'react-redux';

import {list_data,module as promo_module} from '../../../redux/reducers/promo/list';
import Component from './component';

const mapStateToProps = state => ({
	loading:	state[promo_module].loading,
	loaded:		state[promo_module].loaded,
	error:		state[promo_module].error,
	initialed:	state[promo_module].initialed,
	data:		state[promo_module].data,
});

const mapDispatchToProps = {
	list_data,
};

export default connect(mapStateToProps,mapDispatchToProps)(Component);

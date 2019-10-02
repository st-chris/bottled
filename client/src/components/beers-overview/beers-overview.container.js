import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { selectIsBeerLoaded } from '../../selectors/beers';

import WithSpinner from '../with-spinner/With-spinner';
import BeersOverview from './Beers-overview';

const mapStateToProps = createStructuredSelector({
  irsLoading: selectIsBeerLoaded
});

const BeersOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(BeersOverview);

export default BeersOverviewContainer;

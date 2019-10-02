import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { selectIsBeerLoaded } from '../../selectors/beers';
import WithSpinner from '../../components/with-spinner/With-spinner';
import EbcCategory from './EbcCategory';

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsBeerLoaded
});
const EbcCategoryContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(EbcCategory);

export default EbcCategoryContainer;

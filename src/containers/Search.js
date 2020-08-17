import { connect } from 'react-redux'
import { getRepos} from '../actions'
import SearchMenu from '../components/SearchMenu'

const mapStateToProps = (state, ownProps) => ({
  defaultUser: ownProps.user
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onGet: (input) => dispatch(getRepos(input)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchMenu)

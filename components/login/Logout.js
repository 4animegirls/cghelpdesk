import { Component } from 'react';
import { connect } from 'react-redux'
import { removeToken } from '../../actions'


class Logout extends Component {

    render() { 
        this.props.removeToken()
        return (null) }
}


const mapDispatchToProps = dispatch => ({
    removeToken: () => dispatch(removeToken())
})


export default connect(
    null,
    mapDispatchToProps
)(Logout)

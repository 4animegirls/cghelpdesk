import React, { Component } from 'react'
import { Spinner, Layout } from '@ui-kitten/components'
import { connect } from 'react-redux'
import { Dimensions } from 'react-native'


class Loading extends Component {

    render() {
        const windowWidth = Dimensions.get('window').width;
        const windowHeight = Dimensions.get('window').height;
        if(this.props.loading){
            return (
                <Layout style = {{ position: 'absolute', width: windowWidth, height: '100%', top:0, left: 0, backgroundOpacity:0.5, backgroundColor: 'rgba(52, 52, 52, 0.3)', alignItems: 'center', justifyContent:'center',}}>
                    <Spinner  size='giant' status='warning' />
                </Layout>
            )
    } else return null
}
}

const mapStateToProps = state => ({
    loading: state.loading,
})

export default connect(
    mapStateToProps,
    null
)(Loading)





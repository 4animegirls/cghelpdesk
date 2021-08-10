import React, { Component } from 'react'
import { Spinner, Layout } from '@ui-kitten/components'
import { connect } from 'react-redux'


class Loading extends Component {
    constructor() {
        super()
    }


    render() {
        if(this.props.loading){
            return (
                <Layout style = {{ position: 'absolute', width:'100%', height: '100%', top:0, left: 0, backgroundColor: 'gray', opacity:0.5}}>
                    <Layout style={{ position: 'absolute', top: '45%', right: '45%', width: 50, height: 50 }} appearance='ghost'>
                        {this.props.loading && <Spinner />}
                    </Layout>
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





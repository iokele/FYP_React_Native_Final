import React from 'react'
import {connect} from 'react-redux'
import { Text } from 'react-native';

class Home extends React.Component{
    constructor() {
        super();
        this.state={
            message:""
        }
//        this.handleClick=this.handleClick.bind(this)
    }

    render(){
        return(
            <Text style = {{color:'black' } }>Hello world </Text>
        )
    }
}

const mapStateToProps =(state,ownProps) =>{
    return {
    }
}
const mapDispatchToProps =(dispatch,ownProps) =>{
    return {
    }
}
export default connect(
    mapDispatchToProps,
    mapStateToProps,
)(Home)
import React from 'react'
import {connect} from 'react-redux'
import {View,StyleSheet} from 'react-native'
import { Container, Footer, FooterTab, Button, Icon, Text } from 'native-base';
import GridMain from "./ChildComponents/Home/GridMain"
class Home extends React.Component{
    constructor() {
        super();
        this.state={
            message:""
        }
//        this.handleClick=this.handleClick.bind(this)
    }
    handleNavigation(navigation){
        navigation.navigate("EmbedImage")
    }
    render(){
        const {navigation} =this.props
        return(


        <View style = {styles.container}>
            {/* <View style = {styles.header}>
            <Header/>
            </View>  */}
        
         <View style = {styles.content}>
            <View>
                <GridMain/>
            </View>
         </View>
        
         <View style = {styles.list}>
         <Container>
            <Footer>
                <FooterTab>
                    <Button vertical onPress = {()=> this.props.navigation.navigate("Extraction")}>
                    <Icon name="unlock"  />
                    <Text>Extract</Text>
                    </Button>
                    <Button vertical active onPress = {()=> this.props.navigation.navigate("Home")} >
                    <Icon name="home"  />
                    <Text>Home</Text>
                    </Button>
                    <Button vertical onPress = {()=> this.props.navigation.navigate("EmbedImage")}>
                    <Icon active name="lock" />
                    <Text>Embed</Text>
                    </Button>
                </FooterTab>
            </Footer>
            </Container>
         </View>
       </View>
            // <>
        
            // <View>
            // <Text style = {{color:'black' } }>This is HOME</Text>
            // <Button title= {"Go embed image"}  onPress = {()=>this.handleNavigation(navigation)}/>
            // </View>
       
            // </>
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

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  
    header: {
      backgroundColor: 'powderblue'
    },
  
    content: {
      flex: 7,
    },
  
    list: {
      
      height: 50
    }
  });
  
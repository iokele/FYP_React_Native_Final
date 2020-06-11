import React, { Component } from 'react';
import { Container, Footer, FooterTab, Button, Icon, Text } from 'native-base';



export default class FooterBar extends Component {
  render() {
    return (
      <Container>
        <Footer>
          <FooterTab>
            <Button vertical>
              <Icon name="logo-apple" onPress = {()=> this.props.navigation.navigate("GridMain")} />
              <Text>Extract</Text>
            </Button>
            <Button vertical>
              <Icon name="home" onPress = {()=> this.props.navigation.navigate("MainPage")}  />
              <Text>Home</Text>
            </Button>
            <Button vertical active>
              <Icon active name="share" />
              <Text>Embed</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
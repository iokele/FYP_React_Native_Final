import React, { Component } from 'react';
import { Container, Footer, FooterTab, Button, Icon, Text } from 'native-base';



export default class EmbeddoneFooter extends Component {
  render() {
    return (
      <Container>
        <Footer>
          <FooterTab>
            <Button vertical>
              <Icon name="md-share" onPress = {()=> this.props.navigation.navigate("GridMain")} />
              <Text>Share</Text>
            </Button>
            <Button vertical>
              <Icon name="md-download" onPress = {()=> this.props.navigation.navigate("MainPage")}  />
              <Text>Download</Text>
            </Button>
            <Button vertical active>
              <Icon active name="trash" />
              <Text>Delete</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
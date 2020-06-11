//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { List, ListItem, Thumbnail, Left, Body, Right, Button } from 'native-base';
import MatchHeader from './src/MatchOriginalImage/MatchOriginalHeader';


// create a component
class MatchOriginalImage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style = {styles.header}>
          <MatchHeader/>
        </View>
        <View style = {styles.listView}>
        <List>
            {/* {datas.map((data, i) => (
              <ListItem thumbnail>
                <Left>
                  <Thumbnail square source={data.img} />
                </Left>
                <Body>
                  <Text>{data.text}</Text>
                </Body>
                <Right>
                  <Button transparent>
                    <Text>View</Text>
                  </Button>
                </Right>
              </ListItem>
            ))} */}
          </List>
        </View>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  header: {
    alignContent: 'center',
    backgroundColor: 'powderblue'
  },

  listView: {
   paddingTop: 10
  },

});

// const img1 = require("./src/Embedding/dog.jpg");
// const img2 = require("./src/Embedding/dog.jpg");
// const img3 = require("./src/Embedding/dog.jpg");
// const img4 = require("./src/Embedding/dog.jpg");
// const img5 = require("./src/Embedding/dog.jpg");
// const img6 = require("./src/Embedding/dog.jpg");
// const datas = [
//   {
//     img: img1,
//     text: "image1.jpg",
//   },
//   {
//     img: img2,
//     text: "image2.jpg",
//   },
//   {
//     img: img3,
//     text: "image3.jpg",
//   },
//   {
//     img: img4,
//     text: "image4.jpg",
//   },
//   {
//     img: img5,
//     text: "image5.jpg",
//   },
//   {
//     img: img6,
//     text: "image6.jpg",
//   }
// ];

//make this component available to the app
export default MatchOriginalImage;
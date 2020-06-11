import {StyleSheet} from 'react-native'
export const styles = StyleSheet.create({
    header: {
      flexDirection: 'row',
      height: 80,
      paddingTop: 10,
      justifyContent: 'space-between',
      alignContent: 'center',
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderBottomColor: 'black'
    },

    backIcon: {
        marginLeft: 5,
        paddingTop: 20
    },

    text: {
        textAlign: 'center',
        fontSize: 20,
        paddingTop: 15
    },
    text_review:{
        fontSize:20,
        paddingTop:15,
        color:'blue'
    },
    icon: {
        marginRight: 5,
        paddingTop: 20,
    }

});
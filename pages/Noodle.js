import React from 'react';
import { Modal, TouchableOpacity, StyleSheet, ImageBackground, Image, Animated, Text, View, ScrollView} from 'react-native';



import backimg from './images/yourcookback.jpg'

import noodletop from './images/top/noodletop.png'

import bihon from './images/noodle/bihon.png'
//import palabok from './images/noodle/palabok.png'
import spaghetti from './images/noodle/spaghetti.png'




import noodle from './images/noodle.png'



export default class Noodle extends React.Component {

  state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }
  

  render() {
    return (
      <ImageBackground source={backimg} style={styles.mainBack}>


        <Modal style={styles.mainBack} animationType="slide" transparent={true} visible={this.state.modalVisible} onRequestClose={() => { Alert.alert('Modal has been closed.'); }}>

          <View style={styles.modal}>

            <Image source={noodle} style={styles.btncss} />

            <ScrollView>
              <Text style={styles.textdesc}>
                {"\t\t"} is a course that concludes an evening meal.
                  The course usually consists of sweet foods,
                  such as confections dishes or fruit, and possibly
                   a beverage such as dessert wine or liqueur, however
                    in the United States it may include coffee, cheeses,
                     nuts, or other savory items regarded as a separate
                     course elsewhere. In some parts of the world, such
                      as much of central and western Africa, and most parts
                       of China, there is no tradition of a dessert course to conclude a meal.
{"\n\n\n"}
                {"\t\t"} The term dessert can apply to many confections,
                 such as biscuits, cakes, cookies, custards, gelatins,
                 ice creams, pastries, pies, puddings, and sweet soups, and
                 tarts. Fruit is also commonly found in dessert courses because
                 of its naturally occurring sweetness. Some cultures sweeten foods
                  that are more commonly savory to create desserts.
{"\n\n\n"}

              </Text>

            </ScrollView>


  <TouchableOpacity style={styles.modalClose} onPress={() => { this.setModalVisible(!this.state.modalVisible); }}>
    <Text>Close</Text>
  </TouchableOpacity>

</View>
</Modal>


        <TouchableOpacity style={styles.btnStew} onPress={() => { this.setModalVisible(true); }}>
          <Image source={noodletop}/>
        </TouchableOpacity>

        <ScrollView >

          <TouchableOpacity style={styles.btnDishes}  onPress={() => this.props.navigation.navigate('Bihon')}>
            <Image source={bihon} style={styles.btnBord}/>
          </TouchableOpacity>

        

          <TouchableOpacity style={styles.btnDishes}  onPress={() => this.props.navigation.navigate('Spaghetti')}>
          <Image source={spaghetti} style={styles.btnBord}/>
          </TouchableOpacity>




        </ScrollView>
      



      </ImageBackground>
    );
  }
};




const styles = StyleSheet.create
({
	mainBack:
	{
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	    
  },
  btnStew:
  {        
    width: 300,
    height: 200,
    margin: 10,
  },
  btnDishes:
  {
    width: 300,    
    height: 120,
    margin: 7,
    
  },
  btnBord:
  {
    borderRadius: 10,
   
  },


  

  modal:
  {
    width: 300,
    height: 400,
    backgroundColor: 'rgba(255,165,0, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    borderWidth: 2,
    margin: 10,
    flex: 1,
    padding: 30,

    color: 'black',
    fontSize: 20
  },
  modalClose:
  {
    width: 250,
    height: 30,
    borderRadius: 50,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 20,
    opacity: 1,
    color: 'white',


  },
  textdesc:
  {
    fontSize: 17,
    color: 'black',
  }



    
	
	
	
  
 
    
  
});





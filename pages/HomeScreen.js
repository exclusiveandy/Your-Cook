import React from 'react';
import { Modal, TouchableOpacity, StyleSheet, ImageBackground, Image, Animated, Text, View } from 'react-native';



import backimg from './images/yourcookback.jpg'
import yclogo from './images/yourcooklogo.png'

import stew from './images/stew.png'
import vegie from './images/vegie.png'
import seafood from './images/seafood.png'
import noodle from './images/noodle.png'
import soup from './images/soup.png'
import dessert from './images/dessert.png'

import category from './images/category.png'




class FadeInView extends React.Component {
  state = {
    fadeAnim: new Animated.Value(0),  
  }

  componentDidMount() {
    Animated.timing(                 
      this.state.fadeAnim,           
      {
        toValue: 1,                   
        duration: 5000,             
      }
    ).start();                       
  }

  render() {

    let { fadeAnim } = this.state;

    return (
      <Animated.View                
        style={{
          ...this.props.style,
          opacity: fadeAnim,        
        }}
      >
        {this.props.children}
      </Animated.View>
    );
  }
}


export default class HomeScreen extends React.Component {

  constructor(props) {
		super(props);
		this.state = {
        intro: true,
        btnStew: false,
        btnVegie: false,
        btnSeafood: false,
        btnNoodle: false,
        btnSoup: false,
        btnDessert: false,
        btnCateg: false,
        
        modalVisible: false,


			};
  }


  
  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }



  intro = () =>{		  
 
    if(this.state.intro == true)
    {
    this.setState({intro: false})
    this.setState({btnStew: true})
    this.setState({btnVegie: true})
    this.setState({btnSeafood: true})
    this.setState({btnNoodle: true})
    this.setState({btnSoup: true})
    this.setState({btnDessert: true})
    this.setState({btnCateg: true})
    }
    
  }




  render() {
    return (
      <ImageBackground source={backimg} style={styles.mainBack}>




        <Modal style={styles.mainBack} animationType="slide" transparent={true} visible={this.state.modalVisible} onRequestClose={() => { Alert.alert('Modal has been closed.'); }}>

          <View style={styles.modal}>
           
              <Text style={{ textAlign:'center', fontSize: 20, color: 'black', fontWeight: 'bold' }}> Polytechnic University of The Philippines</Text>
              <Text> {"\n"}</Text>
              <Text style={{ fontSize: 18, color: 'black', fontWeight: 'bold' }}> Developers:</Text>
              <Text> {"\n"}</Text>
              <Text style={{ fontSize: 17, color: 'black', fontWeight: 'bold' }}> Aira De Chavez</Text>
              <Text style={{ fontSize: 17, color: 'black', fontWeight: 'bold' }}> Andrywin Maquinto</Text>
              <Text style={{ fontSize: 17, color: 'black', fontWeight: 'bold' }}> Joyce Mendoza</Text>
              <Text style={{ fontSize: 17, color: 'black', fontWeight: 'bold' }}> Gian Gabriel Ocampo</Text>
              <Text> {"\n"}</Text>
              <Text> {"\n"}</Text>
              <Text style={{ fontSize: 17, color: 'black', fontWeight: 'bold' }}> Just Pick & Enjoy Your Cook</Text>
            

            <TouchableOpacity style={styles.modalClose} onPress={() => { this.setModalVisible(!this.state.modalVisible); }}>
              <Text>Close</Text>
            </TouchableOpacity>

          </View>
        </Modal>







        <FadeInView>

          <TouchableOpacity style={styles.introbutton} onPress={this.intro}>
          {
            this.state.intro ? <Image source={yclogo} style={styles.yclogocss}/> : null
          }
          </TouchableOpacity>
          
        </FadeInView>


            <View>
              
          
              <TouchableOpacity onPress={this.intro} onPress={() => { this.setModalVisible(true); }}>
              {
                this.state.btnCateg ? <Image source={category} style={styles.btncategcss}/> : null
              }
              </TouchableOpacity> 
              

            </View>


           

        <FadeInView>           

          <View style={styles.row}>
          
            <TouchableOpacity style={styles.btnDishes}  onPress={() => this.props.navigation.navigate('Stew')}>
            {
              this.state.btnStew ? <Image source={stew} style={styles.btncss}/> : null
            }
            </TouchableOpacity>  

            <TouchableOpacity style={styles.btnDishes} onPress={() => this.props.navigation.navigate('Vegie')}>
            {
              this.state.btnVegie ? <Image source={vegie} style={styles.btncss}/> : null
            }
            </TouchableOpacity>  

          </View>

          <View style={styles.row}>
          
            <TouchableOpacity style={styles.btnDishes} onPress={() => this.props.navigation.navigate('Seafood')}>
            {
              this.state.btnSeafood ? <Image source={seafood} style={styles.btncss}/> : null
            }
            </TouchableOpacity>  

            <TouchableOpacity style={styles.btnDishes} onPress={() => this.props.navigation.navigate('Noodle')}>
            {
              this.state.btnNoodle ? <Image source={noodle} style={styles.btncss}/> : null
            }
            </TouchableOpacity> 

          </View> 

          <View style={styles.row}>
          
            <TouchableOpacity style={styles.btnDishes} onPress={() => this.props.navigation.navigate('Soup')}>
            {
              this.state.btnSoup ? <Image source={soup} style={styles.btncss}/> : null
            }
            </TouchableOpacity>  

            <TouchableOpacity style={styles.btnDishes} onPress={() => this.props.navigation.navigate('Dessert')}>
            {
              this.state.btnDessert ? <Image source={dessert} style={styles.btncss}/> : null
            }
            </TouchableOpacity>  
          
          </View>


        </FadeInView>












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
  yclogocss:
  {
    width: 200,
    height: 225,
  },
  introbutton:
  {
    marginTop: -80,
  },
  btncss:
  {
    width: 90,
    height: 113,
    margin: 15,
    
    
  },
  row:
  {
    flexDirection: 'row',
  },
  
  btnDishes:
  {
    
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 10,
    
  },
  btncategcss:
  {
    width: 300,
    height: 62,
    marginBottom: 10,
    
  },


  


  modal:
  {
    width: 300,
    height: 400,
    backgroundColor: 'rgb(255,165,0)',
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





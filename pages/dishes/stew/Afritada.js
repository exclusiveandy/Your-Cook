import React from 'react';
import {  Platform, ProgressBarAndroid, ScrollView, Modal, Alert, TouchableOpacity, StyleSheet, ImageBackground, Image, Animated, Text, View,  } from 'react-native';
import { Timer } from 'react-native-stopwatch-timer';
import { PlaySound, PlaySoundMusicVolume } from 'react-native-play-sound';

import backimg from '../../images/yourcookback.jpg'

import afritada from '../../images/stew/afritada.png'

import course from '../../images/dishdesc/course.png'
import prep from '../../images/dishdesc/preptime.png'
import cook from '../../images/dishdesc/cook.png'
import total from '../../images/dishdesc/total.png'
import servings from '../../images/dishdesc/servings.png'
import calories from '../../images/dishdesc/calories.png'



export default class Afritada extends React.Component {






   constructor() {
    super();
    this.state = {
      modalFact: false,
      modalVisible1: false,
      modalVisible2: false,
      modalVisible3: false,
      modalVisible4: false,
      modalVisible5: false,
      modalVisible6: false,
      modalVisible7: false,
      modalVisible8: false,
      
      isTimerStart: false,
      duration1: 120000,
      duration2: 300000,
      duration3: 300000,
      duration4: 300000,
      duration5: 300000,
      duration6: 1800000,
      duration7: 720000,
      duration8: 180000,



      resetTimer: false,

    };

    this.startStopTimer = this.startStopTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
  }



  startStopTimer() {
    this.setState({isTimerStart: !this.state.isTimerStart, resetTimer: false});
  }
  resetTimer() {
    this.setState({isTimerStart: false, resetTimer: true});
  }

  modalfacts = () => {
    this.setState({ modalFact: true });

  }
  closemodalfacts = () => {
    this.setState({ modalFact: false });

  }


 
    
  modal1 = () => {
    this.setState({ modalVisible1: true }); 
  }
  modal2 = () => {
    this.setState({ modalVisible1: false }); 
    this.setState({ modalVisible2: true });  
    PlaySound('my_file_name.mp3');    
    this.setState({isTimerStart: false,resetTimer: true});
  }
  modal3 = () => {
    this.setState({ modalVisible1: false }); 
    this.setState({ modalVisible2: false });  
    this.setState({ modalVisible3: true });  
    PlaySound('my_file_name.mp3');    
    this.setState({isTimerStart: false,resetTimer: true});
  }
  modal4 = () => {
    this.setState({ modalVisible1: false }); 
    this.setState({ modalVisible2: false });  
    this.setState({ modalVisible3: false }); 
    this.setState({ modalVisible4: true });   
    PlaySound('my_file_name.mp3');    
    this.setState({isTimerStart: false,resetTimer: true});
  }
  modal5 = () => {
    this.setState({ modalVisible1: false }); 
    this.setState({ modalVisible2: false });  
    this.setState({ modalVisible3: false }); 
    this.setState({ modalVisible4: false });   
    this.setState({ modalVisible5: true });  
    PlaySound('my_file_name.mp3');    
    this.setState({isTimerStart: false,resetTimer: true});
  }
  modal6 = () => {
    this.setState({ modalVisible1: false }); 
    this.setState({ modalVisible2: false });  
    this.setState({ modalVisible3: false }); 
    this.setState({ modalVisible4: false });   
    this.setState({ modalVisible5: false });  
    this.setState({ modalVisible6: true });  
    PlaySound('my_file_name.mp3');    
    this.setState({isTimerStart: false,resetTimer: true});
  }
  modal7 = () => {
    this.setState({ modalVisible1: false }); 
    this.setState({ modalVisible2: false });  
    this.setState({ modalVisible3: false }); 
    this.setState({ modalVisible4: false });   
    this.setState({ modalVisible5: false });  
    this.setState({ modalVisible6: false });
    this.setState({ modalVisible7: true });  
    PlaySound('my_file_name.mp3');    
    this.setState({isTimerStart: false,resetTimer: true});
  }
  modal8 = () => {
    this.setState({ modalVisible1: false }); 
    this.setState({ modalVisible2: false });  
    this.setState({ modalVisible3: false }); 
    this.setState({ modalVisible4: false });   
    this.setState({ modalVisible5: false });  
    this.setState({ modalVisible6: false });
    this.setState({ modalVisible7: false });  
    this.setState({ modalVisible8: true }); 
    PlaySound('my_file_name.mp3');    
    this.setState({isTimerStart: false,resetTimer: true});
  }




  closemodal = () => {
    this.setState({ modalVisible1: false });
    this.setState({ modalVisible2: false });
    this.setState({ modalVisible3: false });
    this.setState({ modalVisible4: false }); 
    this.setState({ modalVisible5: false }); 
    this.setState({ modalVisible6: false }); 
    this.setState({ modalVisible7: false });
    this.setState({ modalVisible8: false });
    this.setState({isTimerStart: false,resetTimer: true});
    
      
  }

  
   

  complete = () =>  {
  
    this.setState({isTimerStart: false,resetTimer: true});

    this.setState({ modalVisible1: false });  
    this.setState({ modalVisible2: false });     
    this.setState({ modalVisible3: false }); 
    this.setState({ modalVisible4: false }); 
    this.setState({ modalVisible5: false }); 
    this.setState({ modalVisible6: false }); 
    this.setState({ modalVisible7: false });
    this.setState({ modalVisible8: false });

    Alert.alert("Congrats Enjoy Your Cook!"); 

  }


  playsound = () =>{

    PlaySound('my_file_name.mp3');

  }

  
  render() {
    return (



      <ImageBackground source={backimg} style={styles.mainBack}>

        <Modal style={styles.mainBack} animationType="slide" transparent={true} visible={this.state.modalFact} onRequestClose={() => { Alert.alert('Modal has been closed.'); }}>
          <View style={styles.modal}>
            <View style={{position: 'absolute', top: 30,}}>
              
            <Text style={{ fontSize: 20, color: 'black', fontWeight: 'bold' }}> Nutrition's Fact</Text>

            <Text> {"\n"}</Text>
              <Text style={{ fontSize: 14, color: 'black' }}> Calories: 1211 kcal</Text>
              <Text style={{ fontSize: 14, color: 'black' }}> Carbohydrates: 5g</Text>
              <Text style={{ fontSize: 14, color: 'black' }}> Protein: 24g</Text>
              <Text style={{ fontSize: 14, color: 'black' }}> Fat: 120g</Text>
              <Text style={{ fontSize: 14, color: 'black' }}> Saturated Fat: 43g</Text>
              <Text style={{ fontSize: 14, color: 'black' }}> Cholesterol: 163mg</Text>
              <Text style={{ fontSize: 14, color: 'black' }}> Sodium: 1700mg</Text>
              <Text style={{ fontSize: 14, color: 'black' }}> Potassium: 530mg</Text>
              <Text style={{ fontSize: 14, color: 'black' }}> Fiber: 1g</Text>
              <Text style={{ fontSize: 14, color: 'black' }}> Vitamin A: 2.3%</Text>
              <Text style={{ fontSize: 14, color: 'black' }}> Vitamin C: 3%</Text>
              <Text style={{ fontSize: 14, color: 'black' }}> Calcium: 5%</Text>
              <Text style={{ fontSize: 14, color: 'black' }}> Iron: 15.1%</Text>

              <Text> {"\n"}</Text>

              <Text style={{ fontSize: 20, color: 'black', fontWeight: 'bold' }}> Estimated Cost</Text>
              <Text style={{ fontSize: 14, color: 'black' }}> 100 php+</Text>
              <Text style={{ fontSize: 14, color: 'black' }}> Good for 4 person(s)</Text>


            </View>
            <TouchableOpacity
              style={{ width: 270, height: 30, alignItems: 'center', margin: 30, position: 'absolute', bottom: 5, backgroundColor: 'red', borderRadius: 40 }}
              onPress={this.closemodalfacts}>
              <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold' }}>CLOSE</Text>
            </TouchableOpacity>

          </View>
        </Modal>


        <View style={{ marginTop: 20, }}>
          <TouchableOpacity onPress={this.modalfacts}>
            <Image source={afritada} style={styles.btnBord} />
          </TouchableOpacity>
        </View>

        <ScrollView styles={{ marginTop: 50, }}>

          <View style={styles.row}>
            <Image source={course} style={styles.imgDesc} />
            <Text style={styles.textDesc}>Course {"\t\t\t\t"}- Chicken</Text>
          </View>

          <View style={styles.row}>
            <Image source={prep} style={styles.imgDesc} />
            <Text style={styles.textDesc}>Prep Time{"\t\t"}- 10 Minutes</Text>
          </View>

          <View style={styles.row}>
            <Image source={cook} style={styles.imgDesc} />
            <Text style={styles.textDesc}>Cook Time{"\t\t"}- 1 Hour</Text>
          </View>

          <View style={styles.row}>
            <Image source={total} style={styles.imgDesc} />
            <Text style={styles.textDesc}>Total Time{"\t\t"}- 1hr 10mins</Text>
          </View>

          <View style={styles.row}>
            <Image source={servings} style={styles.imgDesc} />
            <Text style={styles.textDesc}>Servings{"\t\t\t"}- 4 People</Text>
          </View>

          <View style={styles.row}>
            <Image source={calories} style={styles.imgDesc} />
            <Text style={styles.textDesc}>Calories{"\t\t\t\t"}- 1211 kcal</Text>
          </View>

          <Text>{"\n"}</Text>

          <View style={{ borderBottomColor: 'black', borderBottomWidth: 3, }} />


          <Text style={styles.ingretext}>Ingredients</Text>


          <View style={{ marginTop: 10 }}>
            <Text style={styles.ingredients}>• 1 ½ lb. chicken cut into serving pieces</Text>
            <Text style={styles.ingredients}>• 1 small red bell pepper sliced</Text>
            <Text style={styles.ingredients}>• 1 small green bell pepper sliced</Text>
            <Text style={styles.ingredients}>• 1 medium baking potato cut into cubes</Text>
            <Text style={styles.ingredients}>• 1 medium carrot cut into cubes</Text>
            <Text style={styles.ingredients}>• 1 8 oz. can tomato sauce</Text>
            <Text style={styles.ingredients}>• 1 Knorr Chicken Cube</Text>
            <Text style={styles.ingredients}>• 4 to 5 pieces dried bay leaves</Text>
            <Text style={styles.ingredients}>• 1 small onion minced</Text>
            <Text style={styles.ingredients}>• 4 cloves garlic crushed and minced</Text>
            <Text style={styles.ingredients}>• 1 ½ cups water</Text>
            <Text style={styles.ingredients}>• 3 tablespoons cooking oil</Text>
            <Text style={styles.ingredients}>• Salt and ground black pepper to taste</Text>

          </View>

          <Text>{"\n"}</Text>

          <View style={{ borderBottomColor: 'black', borderBottomWidth: 3, }} />


          <Text style={styles.ingretext}>Instructions</Text>


          <View style={{ marginTop: 10, flexWrap: 'wrap'}}>
            <Text style={styles.ingredients}>1. Heat the oil in a cooking pot.</Text>
            <Text style={styles.ingredients}>2. Sauté the garlic and onion</Text>
            <Text style={styles.ingredients}>3. Add the chicken pieces when the onion gets soft. Cook both sides until it turns light brown.</Text>
            <Text style={styles.ingredients}>4. Add the tomato sauce and water. Let boil.</Text>
            <Text style={styles.ingredients}>5. Put the dried bay leaves in the pot and then add the Knorr Chicken Cube. Stir and cover. Cook between low to medium heat for 30 minutes or until the chicken gets tender.</Text>
            <Text style={styles.ingredients}>6. Add the carrot, bell peppers, and potato. Stir. Cover and cook for 12 minutes.</Text>
            <Text style={styles.ingredients}>7. Add salt and ground black pepper to taste. Stir and cook for 3 minutes more.</Text>
            <Text style={styles.ingredients}>8. Transfer to serving bowl or plate. Serve!</Text>



          </View>


          <TouchableOpacity style={styles.realtime} onPress={this.modal1}>
              <Text style={{fontSize: 20, color:'white', fontWeight: 'bold'}}>REAL TIME</Text>
          </TouchableOpacity>  


        </ScrollView>




         {/* MODAL 1 */}
        <Modal style={styles.mainBack} animationType="slide" transparent={true} visible={this.state.modalVisible1} onRequestClose={() => { Alert.alert('Modal has been closed.'); }}>
          <View style={styles.modal}>
            <View style={{ width: 300, flex: 1, padding: 30 }}>

              {/* TIMER*/}


              <View style={{ marginTop: 32, alignItems: 'center', justifyContent: 'center' }}>

                <Text style={{ flexWrap: 'wrap', alignSelf: 'center', fontSize: 18, marginBottom: 120, color: 'black'}}>
                 PREPARE THE INGREDIENTS
                </Text>

                <Timer
                  totalDuration={this.state.duration1} msecs
                  //Time Duration
                  start={this.state.isTimerStart}
                  //To start
                  reset={this.state.resetTimer}
                  //To reset
                  //options for the styling
                  handleFinish={handleTimerComplete}
                //can call a function On finish of the time 
                />

                <TouchableOpacity onPress={this.startStopTimer}>
                  <Text style={{ fontSize: 20, marginTop: 10 }}>
                    {!this.state.isTimerStart ? "START" : "STOP"}
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={this.modal2}>
                  <Text style={{ fontSize: 20, marginTop: 10 }}>NEXT</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={this.closemodal}>
                  <Text style={{ fontSize: 20, marginTop: 10 }}>CLOSE</Text>
                </TouchableOpacity>
              </View>

            </View>
            
          </View>
        </Modal>

          {/* MODAL 2 */}
          <Modal style={styles.mainBack} animationType="slide" transparent={true} visible={this.state.modalVisible2} onRequestClose={() => { Alert.alert('Modal has been closed.'); }}>
          <View style={styles.modal}>
            <View style={{ width: 300, flex: 1, padding: 30 }}>

              {/* TIMER*/}


              <View style={{ marginTop: 32, alignItems: 'center', justifyContent: 'center' }}>

                <Text style={{ textAlign: 'center', flexWrap: 'wrap', alignSelf: 'center', fontSize: 18, marginBottom: 120, color: 'black'}}>
                 MINCED / SLICE CHIKEN, RED & GREEN BELL PEPPER, BAKING POTATO/, CARROT, ONIONS & GARLIC
                </Text>

                <Timer
                  totalDuration={this.state.duration2} msecs
                  //Time Duration
                  start={this.state.isTimerStart}
                  //To start                  //To reset
                  //options for the styling
                  handleFinish={handleTimerComplete}
                  //this.complete.bind(this)
                //can call a function On finish of the time 
                />

                <TouchableOpacity onPress={this.startStopTimer}>
                  <Text style={{ fontSize: 20, marginTop: 10 }}>
                    {!this.state.isTimerStart ? "START" : "STOP"}
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={this.modal3}>
                  <Text style={{ fontSize: 20, marginTop: 10 }}>NEXT</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={this.closemodal}>
                  <Text style={{ fontSize: 20, marginTop: 10 }}>CLOSE</Text>
                </TouchableOpacity>
              </View>

            </View>
            
          </View>
        </Modal>



         {/* MODAL 3 */}
         <Modal style={styles.mainBack} animationType="slide" transparent={true} visible={this.state.modalVisible3} onRequestClose={() => { Alert.alert('Modal has been closed.'); }}>
          <View style={styles.modal}>
            <View style={{ width: 300, flex: 1, padding: 30 }}>

              {/* TIMER*/}


              <View style={{ marginTop: 32, alignItems: 'center', justifyContent: 'center' }}>

                <Text style={{ textAlign: 'center', flexWrap: 'wrap', alignSelf: 'center', fontSize: 18, marginBottom: 120, color: 'black'}}>
                 Saute the Garlic and Onion
                </Text>

                <Timer
                  totalDuration={this.state.duration3} msecs
                  //Time Duration
                  start={this.state.isTimerStart}
                  //To start                  //To reset
                  //options for the styling
                  handleFinish={handleTimerComplete}
                  //this.complete.bind(this)
                //can call a function On finish of the time 
                />

                <TouchableOpacity onPress={this.startStopTimer}>
                  <Text style={{ fontSize: 20, marginTop: 10 }}>
                    {!this.state.isTimerStart ? "START" : "STOP"}
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={this.modal4}>
                  <Text style={{ fontSize: 20, marginTop: 10 }}>NEXT</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={this.closemodal}>
                  <Text style={{ fontSize: 20, marginTop: 10 }}>CLOSE</Text>
                </TouchableOpacity>
              </View>

            </View>
            
          </View>
        </Modal>

        
         {/* MODAL 4 */}
         <Modal style={styles.mainBack} animationType="slide" transparent={true} visible={this.state.modalVisible4} onRequestClose={() => { Alert.alert('Modal has been closed.'); }}>
          <View style={styles.modal}>
            <View style={{ width: 300, flex: 1, padding: 30 }}>

              {/* TIMER*/}


              <View style={{ marginTop: 32, alignItems: 'center', justifyContent: 'center' }}>

                <Text style={{ textAlign: 'center', flexWrap: 'wrap', alignSelf: 'center', fontSize: 18, marginBottom: 120, color: 'black'}}>
                Add the chicken pieces when the onion gets soft. Cook both sides until it turns light brown.
                </Text>

                <Timer
                  totalDuration={this.state.duration4} msecs
                  //Time Duration
                  start={this.state.isTimerStart}
                  //To start                  //To reset
                  //options for the styling
                  handleFinish={handleTimerComplete}
                  //this.complete.bind(this)
                //can call a function On finish of the time 
                />

                <TouchableOpacity onPress={this.startStopTimer}>
                  <Text style={{ fontSize: 20, marginTop: 10 }}>
                    {!this.state.isTimerStart ? "START" : "STOP"}
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={this.modal5}>
                  <Text style={{ fontSize: 20, marginTop: 10 }}>NEXT</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={this.closemodal}>
                  <Text style={{ fontSize: 20, marginTop: 10 }}>CLOSE</Text>
                </TouchableOpacity>
              </View>

            </View>
            
          </View>
        </Modal>

        
         {/* MODAL 5 */}
         <Modal style={styles.mainBack} animationType="slide" transparent={true} visible={this.state.modalVisible5} onRequestClose={() => { Alert.alert('Modal has been closed.'); }}>
          <View style={styles.modal}>
            <View style={{ width: 300, flex: 1, padding: 30 }}>

              {/* TIMER*/}


              <View style={{ marginTop: 32, alignItems: 'center', justifyContent: 'center' }}>

                <Text style={{ textAlign: 'center', flexWrap: 'wrap', alignSelf: 'center', fontSize: 18, marginBottom: 120, color: 'black'}}>
                Add the tomato sauce and water. Let boil.
                </Text>

                <Timer
                  totalDuration={this.state.duration5} msecs
                  //Time Duration
                  start={this.state.isTimerStart}
                  //To start                  //To reset
                  //options for the styling
                  handleFinish={handleTimerComplete}
                  //this.complete.bind(this)
                //can call a function On finish of the time 
                />

                <TouchableOpacity onPress={this.startStopTimer}>
                  <Text style={{ fontSize: 20, marginTop: 10 }}>
                    {!this.state.isTimerStart ? "START" : "STOP"}
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={this.modal6}>
                  <Text style={{ fontSize: 20, marginTop: 10 }}>NEXT</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={this.closemodal}>
                  <Text style={{ fontSize: 20, marginTop: 10 }}>CLOSE</Text>
                </TouchableOpacity>
              </View>

            </View>
            
          </View>
        </Modal>

         {/* MODAL 6 */}
         <Modal style={styles.mainBack} animationType="slide" transparent={true} visible={this.state.modalVisible6} onRequestClose={() => { Alert.alert('Modal has been closed.'); }}>
          <View style={styles.modal}>
            <View style={{ width: 300, flex: 1, padding: 30 }}>

              {/* TIMER*/}


              <View style={{ marginTop: 32, alignItems: 'center', justifyContent: 'center' }}>

                <Text style={{ textAlign: 'center', flexWrap: 'wrap', alignSelf: 'center', fontSize: 18, marginBottom: 120, color: 'black'}}>
                Put the dried bay leaves in the pot and then add the Knorr Chicken Cube. Stir and cover. Cook between low to medium heat for 30 minutes or until the chicken gets tender.
                </Text>

                <Timer
                  totalDuration={this.state.duration6} msecs
                  //Time Duration
                  start={this.state.isTimerStart}
                  //To start                  //To reset
                  //options for the styling
                  handleFinish={handleTimerComplete}
                  //this.complete.bind(this)
                //can call a function On finish of the time 
                />

                <TouchableOpacity onPress={this.startStopTimer}>
                  <Text style={{ fontSize: 20, marginTop: 10 }}>
                    {!this.state.isTimerStart ? "START" : "STOP"}
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={this.modal7}>
                  <Text style={{ fontSize: 20, marginTop: 10 }}>NEXT</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={this.closemodal}>
                  <Text style={{ fontSize: 20, marginTop: 10 }}>CLOSE</Text>
                </TouchableOpacity>
              </View>

            </View>
            
          </View>
        </Modal>

         {/* MODAL 7 */}
         <Modal style={styles.mainBack} animationType="slide" transparent={true} visible={this.state.modalVisible7} onRequestClose={() => { Alert.alert('Modal has been closed.'); }}>
          <View style={styles.modal}>
            <View style={{ width: 300, flex: 1, padding: 30 }}>

              {/* TIMER*/}


              <View style={{ marginTop: 32, alignItems: 'center', justifyContent: 'center' }}>

                <Text style={{ textAlign: 'center', flexWrap: 'wrap', alignSelf: 'center', fontSize: 18, marginBottom: 120, color: 'black'}}>
                Add the carrot, bell peppers, and potato. Stir. Cover and cook for 12 minutes.
                </Text>

                <Timer
                  totalDuration={this.state.duration7} msecs
                  //Time Duration
                  start={this.state.isTimerStart}
                  //To start                  //To reset
                  //options for the styling
                  handleFinish={handleTimerComplete}
                  //this.complete.bind(this)
                //can call a function On finish of the time 
                />

                <TouchableOpacity onPress={this.startStopTimer}>
                  <Text style={{ fontSize: 20, marginTop: 10 }}>
                    {!this.state.isTimerStart ? "START" : "STOP"}
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={this.modal8}>
                  <Text style={{ fontSize: 20, marginTop: 10 }}>NEXT</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={this.closemodal}>
                  <Text style={{ fontSize: 20, marginTop: 10 }}>CLOSE</Text>
                </TouchableOpacity>
              </View>

            </View>
            
          </View>
        </Modal>

         {/* MODAL 8 */}
         <Modal style={styles.mainBack} animationType="slide" transparent={true} visible={this.state.modalVisible8} onRequestClose={() => { Alert.alert('Modal has been closed.'); }}>
          <View style={styles.modal}>
            <View style={{ width: 300, flex: 1, padding: 30 }}>

              {/* TIMER*/}


              <View style={{ marginTop: 32, alignItems: 'center', justifyContent: 'center' }}>

                <Text style={{ textAlign: 'center', flexWrap: 'wrap', alignSelf: 'center', fontSize: 18, marginBottom: 120, color: 'black'}}>
                Add salt and ground black pepper to taste. Stir and cook for 3 minutes more.
                </Text>

                <Timer
                  totalDuration={this.state.duration8} msecs
                  //Time Duration
                  start={this.state.isTimerStart}
                  //To start                  //To reset
                  //options for the styling
                  handleFinish={this.complete.bind(this)}
                  //this.complete.bind(this)
                //can call a function On finish of the time 
                />

                <TouchableOpacity onPress={this.startStopTimer}>
                  <Text style={{ fontSize: 20, marginTop: 10 }}>
                    {!this.state.isTimerStart ? "START" : "STOP"}
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={this.complete.bind(this)}>
                  <Text style={{ fontSize: 20, marginTop: 10 }}>NEXT</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={this.closemodal}>
                  <Text style={{ fontSize: 20, marginTop: 10 }}>CLOSE</Text>
                </TouchableOpacity>
              </View>

            </View>
            
          </View>
        </Modal>

        

        






















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
    row:
    {
      flexDirection: 'row',
    },
    btnBord:
    {
      borderRadius: 10,
      marginBottom:10,

    },
    imgDesc:
    {
      margin: 10,
    },
    textDesc:
    {
       margin: 13,
       fontSize: 18,
       color: 'black'
    },


    ingretext:
    {
      marginTop: 20,
      alignSelf: 'center', 
      fontSize: 20, 
      fontWeight: 'bold',
      color: 'black'
    },
    ingredients:
    {
      
      fontSize: 16,
      color: 'black',
      padding: 10,
    },
    realtime:
    {
      alignSelf: 'center',
      width: 270,
      height: 50,
      margin: 30,
      borderRadius: 50,
      backgroundColor: 'steelblue',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',

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
    modalBtn:
    {
      width: 125,
      height: 30,
      borderRadius: 50,
      backgroundColor: 'red',
      alignSelf: 'center',
      justifyContent: 'center',
      color: 'white',
      margin: 5,
      paddingLeft: 40,
      paddingTop: 5
    },
    modalTextPos:
    {
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalStart:
    {
      width: 250,
      height: 30,
      borderRadius: 50,
      backgroundColor: 'red',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      paddingLeft: 100,
      paddingTop: 5,


    },
























  });

const handleTimerComplete = () =>  PlaySound("my_file_name.mp3");


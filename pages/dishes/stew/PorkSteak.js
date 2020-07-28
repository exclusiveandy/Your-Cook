import React from 'react';
import {  Platform, ProgressBarAndroid, ScrollView, Modal, Alert, TouchableOpacity, StyleSheet, ImageBackground, Image, Animated, Text, View,  } from 'react-native';
import { Timer } from 'react-native-stopwatch-timer';
import { PlaySound, PlaySoundMusicVolume } from 'react-native-play-sound';

import backimg from '../../images/yourcookback.jpg'

import porksteak from '../../images/stew/porksteak.png'

import course from '../../images/dishdesc/course.png'
import prep from '../../images/dishdesc/preptime.png'
import cook from '../../images/dishdesc/cook.png'
import total from '../../images/dishdesc/total.png'
import servings from '../../images/dishdesc/servings.png'
import calories from '../../images/dishdesc/calories.png'



export default class PorkSteak extends React.Component {






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
      
      isTimerStart: false,
      duration1: 120000,
      duration2: 3600000,
      duration3: 300000,
      duration4: 300000,
      duration5: 2700000,
      duration6: 300000,
      duration7: 18000,



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




  closemodal = () => {
    this.setState({ modalVisible1: false });
    this.setState({ modalVisible2: false });
    this.setState({ modalVisible3: false });
    this.setState({ modalVisible4: false }); 
    this.setState({ modalVisible5: false }); 
    this.setState({ modalVisible6: false }); 
    this.setState({ modalVisible7: false });
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
              <Text style={{ fontSize: 14, color: 'black' }}> Calories: 1092 kcal</Text>
              <Text style={{ fontSize: 14, color: 'black' }}> Carbohydrates: 6g</Text>
              <Text style={{ fontSize: 14, color: 'black' }}> Protein: 24g</Text>
              <Text style={{ fontSize: 14, color: 'black' }}> Fat: 109g</Text>
              <Text style={{ fontSize: 14, color: 'black' }}> Saturated Fat: 50g</Text>
              <Text style={{ fontSize: 14, color: 'black' }}> Cholesterol: 227mg</Text>
              <Text style={{ fontSize: 14, color: 'black' }}> Sodium: 431mg</Text>
              <Text style={{ fontSize: 14, color: 'black' }}> Potassium: 569mg</Text>
              <Text style={{ fontSize: 14, color: 'black' }}> Vitamin A: 0.5%</Text>
              <Text style={{ fontSize: 14, color: 'black' }}> Vitamin C: 6%</Text>
              <Text style={{ fontSize: 14, color: 'black' }}> Calcium: 7.6%</Text>
              <Text style={{ fontSize: 14, color: 'black' }}> Iron: 29.5%</Text>

              <Text> {"\n"}</Text>

              <Text style={{ fontSize: 20, color: 'black', fontWeight: 'bold' }}> Estimated Cost</Text>
              <Text style={{ fontSize: 14, color: 'black' }}> 140 php+</Text>
              <Text style={{ fontSize: 14, color: 'black' }}> Good for 4-6 person(s)</Text>


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
            <Image source={porksteak} style={styles.btnBord} />
          </TouchableOpacity>
        </View>

        <ScrollView styles={{ marginTop: 50, }}>

          <View style={styles.row}>
            <Image source={course} style={styles.imgDesc} />
            <Text style={styles.textDesc}>Course {"\t\t\t\t"}- Main Dish</Text>
          </View>

          <View style={styles.row}>
            <Image source={prep} style={styles.imgDesc} />
            <Text style={styles.textDesc}>Prep Time{"\t\t"}- 50 Minutes</Text>
          </View>

          <View style={styles.row}>
            <Image source={cook} style={styles.imgDesc} />
            <Text style={styles.textDesc}>Cook Time{"\t\t"}- 50 Minutes</Text>
          </View>

          <View style={styles.row}>
            <Image source={total} style={styles.imgDesc} />
            <Text style={styles.textDesc}>Total Time{"\t\t"}- 1hr 40mins</Text>
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
            <Text style={styles.ingredients}>• 4 to 5 pieces pork chops</Text>
            <Text style={styles.ingredients}>• 5 tablespoons soy sauce</Text>
            <Text style={styles.ingredients}>• 2 pieces lime or 1 piece lemon</Text>
            <Text style={styles.ingredients}>• 1/2 cup cooking oil</Text>
            <Text style={styles.ingredients}>• 2 medium onions sliced</Text>
            <Text style={styles.ingredients}>• 1 1/2 cups water</Text>
            <Text style={styles.ingredients}>• 1 tablespoon granulated white sugar</Text>
            <Text style={styles.ingredients}>• Salt and pepper to taste</Text>

          </View>

          <Text>{"\n"}</Text>

          <View style={{ borderBottomColor: 'black', borderBottomWidth: 3, }} />


          <Text style={styles.ingretext}>Instructions</Text>


          <View style={{ marginTop: 10, flexWrap: 'wrap'}}>
            <Text style={styles.ingredients}>1. Combine pork chops, soy sauce, and lime juice in a large bowl or container. Marinade for at least 1 hour.</Text>
            <Text style={styles.ingredients}>2. Heat a pan then pour-in cooking oil.</Text>
            <Text style={styles.ingredients}>3. Pan-fry the marinated pork chops in medium heat for 3 to 5 minutes per side.</Text>
            <Text style={styles.ingredients}>4. Remove excess oil. Pour-in the remaining marinade and water and let boil. Simmer for 45 minutes or until the pork is tender. Note: Add water as needed.</Text>
            <Text style={styles.ingredients}>5. Add-in the sugar, salt, and pepper then stir.</Text>
            <Text style={styles.ingredients}>6. Put-in the onions and cook for 3 minutes more.</Text>
            <Text style={styles.ingredients}>6. Turn-off heat and transfer to a serving plate. Serve!</Text>


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
                 Combine pork chops, soy sauce, and lime juice in a large bowl or container. Marinade for at least 1 hour.
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
                Heat a pan then pour-in cooking oil.
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
                Pan-fry the marinated pork chops in medium heat for 3 to 5 minutes per side.
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
                Remove excess oil. Pour-in the remaining marinade and water and let boil. Simmer for 45 minutes or until the pork is tender. Note: Add water as needed.
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
                Add-in the sugar, salt, and pepper then stir.
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
                Put-in the onions and cook for 3 minutes more.
                </Text>

                <Timer
                  totalDuration={this.state.duration7} msecs
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


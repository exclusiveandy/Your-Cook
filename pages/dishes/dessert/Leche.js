import React from 'react';
import {  Platform, ProgressBarAndroid, ScrollView, Modal, Alert, TouchableOpacity, StyleSheet, ImageBackground, Image, Animated, Text, View,  } from 'react-native';
import { Timer } from 'react-native-stopwatch-timer';
import { PlaySound, PlaySoundMusicVolume } from 'react-native-play-sound';

import backimg from '../../images/yourcookback.jpg'

import leche from '../../images/dessert/leche.png'

import course from '../../images/dishdesc/course.png'
import prep from '../../images/dishdesc/preptime.png'
import cook from '../../images/dishdesc/cook.png'
import total from '../../images/dishdesc/total.png'
import servings from '../../images/dishdesc/servings.png'
import calories from '../../images/dishdesc/calories.png'



export default class Leche extends React.Component {






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
      duration1: 180000,
      duration2: 180000,
      duration3: 900000,
      duration4: 60000,
      duration5: 600000,
      duration6: 2100000,
      duration7: 5000,



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
            <View style={{ position: 'absolute', top: 30, }}>

              <Text style={{ fontSize: 20, color: 'black', fontWeight: 'bold' }}> Nutrition's Fact</Text>

              <Text> {"\n"}</Text>
              <Text style={{ fontSize: 14, color: 'black' }}> Calories: 21 kcal</Text>
              <Text style={{ fontSize: 14, color: 'black' }}> Carbohydrates: 4g</Text>
              <Text style={{ fontSize: 14, color: 'black' }}> Protein: 1g</Text>
              <Text style={{ fontSize: 14, color: 'black' }}> Sodium: 1192mg</Text>
              <Text style={{ fontSize: 14, color: 'black' }}> Potassium: 119mg</Text>
              <Text style={{ fontSize: 14, color: 'black' }}> Sugar: 2g</Text>
              <Text style={{ fontSize: 14, color: 'black' }}> Vitamin A: 11.7%</Text>
              <Text style={{ fontSize: 14, color: 'black' }}> Vitamin C: 12.8%</Text>
              <Text style={{ fontSize: 14, color: 'black' }}> Calcium: 2.6%</Text>
              <Text style={{ fontSize: 14, color: 'black' }}> Iron: 1.8%</Text>

              <Text> {"\n"}</Text>

              <Text style={{ fontSize: 20, color: 'black', fontWeight: 'bold' }}> Estimated Cost</Text>
              <Text style={{ fontSize: 14, color: 'black' }}> 150 php+</Text>
              <Text style={{ fontSize: 14, color: 'black' }}> Good for 6 person(s)</Text>



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
            <Image source={leche} style={styles.btnBord} />
          </TouchableOpacity>
        </View>

        <ScrollView styles={{ marginTop: 50, }}>

          <View style={styles.row}>
            <Image source={course} style={styles.imgDesc} />
            <Text style={styles.textDesc}>Course {"\t\t\t\t"}- Dessert</Text>
          </View>

          <View style={styles.row}>
            <Image source={prep} style={styles.imgDesc} />
            <Text style={styles.textDesc}>Prep Time{"\t\t"}- 10 Minutes</Text>
          </View>

          <View style={styles.row}>
            <Image source={cook} style={styles.imgDesc} />
            <Text style={styles.textDesc}>Cook Time{"\t\t"}- 45 Minutes</Text>
          </View>

          <View style={styles.row}>
            <Image source={total} style={styles.imgDesc} />
            <Text style={styles.textDesc}>Total Time{"\t\t"}- 55 Minutes</Text>
          </View>

          <View style={styles.row}>
            <Image source={servings} style={styles.imgDesc} />
            <Text style={styles.textDesc}>Servings{"\t\t\t"}- 6 People</Text>
          </View>

          <View style={styles.row}>
            <Image source={calories} style={styles.imgDesc} />
            <Text style={styles.textDesc}>Calories{"\t\t\t\t"}- 369 kcal</Text>
          </View>

          <Text>{"\n"}</Text>

          <View style={{ borderBottomColor: 'black', borderBottomWidth: 3, }} />


          <Text style={styles.ingretext}>Ingredients</Text>


          <View style={{ marginTop: 10 }}>
            <Text style={styles.ingredients}>• 10 pieces eggs</Text>
            <Text style={styles.ingredients}>• 1 can condensed milk (14 oz)</Text>
            <Text style={styles.ingredients}>• 1 cup fresh milk or evaporated milk</Text>
            <Text style={styles.ingredients}>• 1 cup granulated sugar</Text>
            <Text style={styles.ingredients}>• 1 teaspoon vanilla extract</Text>

          </View>

          <Text>{"\n"}</Text>

          <View style={{ borderBottomColor: 'black', borderBottomWidth: 3, }} />


          <Text style={styles.ingretext}>Instructions</Text>


          <View style={{ marginTop: 10, flexWrap: 'wrap'}}>
            <Text style={styles.ingredients}>1. Using all the eggs, separate the yolk from the egg white (only egg yolks will be used).</Text>
            <Text style={styles.ingredients}>2. Place the egg yolks in a big bowl then beat them using a fork or an egg beater then Add the condensed milk and mix thoroughly then Pour-in the fresh milk and Vanilla. Mix well</Text>
            <Text style={styles.ingredients}>3. Put the mold (llanera) on top of the stove and heat using low fire then Put-in the granulated sugar on the mold and mix thoroughly until the solid sugar turns into liquid (caramel) having a light brown color. Note: Sometimes it is hard to find a Llanera (Traditional flan mold) depending on your location. I find it more convenient to use individual Round Pans in making leche flan.</Text>
            <Text style={styles.ingredients}>4. Spread the caramel (liquid sugar) evenly on the flat side of the mold then Wait for 5 minutes then pour the egg yolk and milk mixture on the mold</Text>
            <Text style={styles.ingredients}>5. Cover the top of the mold using an Aluminum foil then Steam the mold with egg and milk mixture for 30 to 35 minutes.</Text>
            <Text style={styles.ingredients}>6. After steaming, let the temperature cool down then refrigerate. Serve!</Text>

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
                Using all the eggs, separate the yolk from the egg white (only egg yolks will be used).
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
                Place the egg yolks in a big bowl then beat them using a fork or an egg beater then Add the condensed milk and mix thoroughly then Pour-in the fresh milk and Vanilla. Mix well
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
                Put the mold (llanera) on top of the stove and heat using low fire then Put-in the granulated sugar on the mold and mix thoroughly until the solid sugar turns into liquid (caramel) having a light brown color. Note: Sometimes it is hard to find a Llanera (Traditional flan mold) depending on your location. I find it more convenient to use individual Round Pans in making leche flan.
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
                Spread the caramel (liquid sugar) evenly on the flat side of the mold then Wait for 5 minutes then pour the egg yolk and milk mixture on the mold
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
                Cover the top of the mold using an Aluminum foil then Steam the mold with egg and milk mixture for 30 to 35 minutes.
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
                After steaming, let the temperature cool down then refrigerate. Serve!
                </Text>

                <Timer
                  totalDuration={this.state.duration6} msecs
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

         {/* MODAL 7 */}
         <Modal style={styles.mainBack} animationType="slide" transparent={true} visible={this.state.modalVisible7} onRequestClose={() => { Alert.alert('Modal has been closed.'); }}>
          <View style={styles.modal}>
            <View style={{ width: 300, flex: 1, padding: 30 }}>

              {/* TIMER*/}


              <View style={{ marginTop: 32, alignItems: 'center', justifyContent: 'center' }}>

                <Text style={{ textAlign: 'center', flexWrap: 'wrap', alignSelf: 'center', fontSize: 18, marginBottom: 120, color: 'black'}}>
                Add salt to taste
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


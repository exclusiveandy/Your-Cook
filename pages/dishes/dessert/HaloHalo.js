import React from 'react';
import {  Platform, ProgressBarAndroid, ScrollView, Modal, Alert, TouchableOpacity, StyleSheet, ImageBackground, Image, Animated, Text, View,  } from 'react-native';
import { Timer } from 'react-native-stopwatch-timer';
import { PlaySound, PlaySoundMusicVolume } from 'react-native-play-sound';

import backimg from '../../images/yourcookback.jpg'

import halohalo from '../../images/dessert/halohalo.png'

import course from '../../images/dishdesc/course.png'
import prep from '../../images/dishdesc/preptime.png'
import cook from '../../images/dishdesc/cook.png'
import total from '../../images/dishdesc/total.png'
import servings from '../../images/dishdesc/servings.png'
import calories from '../../images/dishdesc/calories.png'



export default class HaloHalo extends React.Component {






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
      duration2: 180000,
      duration3: 60000,
      duration4: 30000,
      duration5: 10000,
      duration6: 10000,
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
            <View style={{position: 'absolute', top: 30,}}>
              
            <Text style={{ fontSize: 20, color: 'black', fontWeight: 'bold' }}> Nutrition's Fact</Text>

            <Text> {"\n"}</Text>
            <Text style={{ fontSize: 14, color: 'black'}}> 1211 kcal</Text>
            <Text style={{ fontSize: 14, color: 'black'}}> 1211 kcal</Text>
            <Text style={{ fontSize: 14, color: 'black'}}> 1211 kcal</Text>

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
            <Image source={halohalo} style={styles.btnBord} />
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
            <Text style={styles.textDesc}>Cook Time{"\t\t"}- 5 Minutes</Text>
          </View>

          <View style={styles.row}>
            <Image source={total} style={styles.imgDesc} />
            <Text style={styles.textDesc}>Total Time{"\t\t"}- 15 Minutes</Text>
          </View>

          <View style={styles.row}>
            <Image source={servings} style={styles.imgDesc} />
            <Text style={styles.textDesc}>Servings{"\t\t\t"}- 1 People</Text>
          </View>

          <View style={styles.row}>
            <Image source={calories} style={styles.imgDesc} />
            <Text style={styles.textDesc}>Calories{"\t\t\t\t"}- 1211 kcal</Text>
          </View>

          <Text>{"\n"}</Text>

          <View style={{ borderBottomColor: 'black', borderBottomWidth: 3, }} />


          <Text style={styles.ingretext}>Ingredients</Text>


          <View style={{ marginTop: 10 }}>
            <Text style={styles.ingredients}>• 2 cups of shaved ice</Text>
            <Text style={styles.ingredients}>• 1 ripe large banana</Text>
            <Text style={styles.ingredients}>• 1 cup young shredded coconut, fresh or bottled</Text>
            <Text style={styles.ingredients}>• 1/2 cup sweet corn or chick peas (garbanzos)</Text>
            <Text style={styles.ingredients}>• 2 cups evaporated milk</Text>
            <Text style={styles.ingredients}>• 1 cup firm gelatin set into gel and cut into 1/2 inch cubes</Text>
            <Text style={styles.ingredients}>• 2 ripe mangoes</Text>
            <Text style={styles.ingredients}>• 1 cup ripe jackfruit</Text>
            <Text style={styles.ingredients}>• 1 cup cooked sweet yams or (ube halaya)</Text>
            <Text style={styles.ingredients}>• 4 scoops of favorite ice cream</Text>
            <Text style={styles.ingredients}>• 1/2 cup rice pop</Text>

          </View>

          <Text>{"\n"}</Text>

          <View style={{ borderBottomColor: 'black', borderBottomWidth: 3, }} />


          <Text style={styles.ingretext}>Instructions</Text>


          <View style={{ marginTop: 10, flexWrap: 'wrap'}}>
            <Text style={styles.ingredients}>1. Peel mangoes and slice into half-inch cubes.</Text>
            <Text style={styles.ingredients}>2. Divide each ingredient into 4 equal parts. Get 4 tall glasses, then place each ingredients layer by layer.</Text>
            <Text style={styles.ingredients}>3. Put the one half cup of shaved ice to each glass.</Text>
            <Text style={styles.ingredients}>4. Pour a quarter of milk evap over shaved ice to each glass.</Text>
            <Text style={styles.ingredients}>5. Put a scoop of ice cream on top</Text>
            <Text style={styles.ingredients}>6. Drizzle some nuts or rice crispies on top of the ice cream.</Text>

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
                Peel mangoes and slice into half-inch cubes.
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
                Divide each ingredient into 4 equal parts. Get 4 tall glasses, then place each ingredients layer by layer.
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
                Put the one half cup of shaved ice to each glass.
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
                Pour a quarter of milk evap over shaved ice to each glass.
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
                Put a scoop of ice cream on top
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
                Drizzle some nuts or rice crispies on top of the ice cream.
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


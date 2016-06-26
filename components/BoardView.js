import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Animated,
  Easing,
  AlertIOS
} from 'react-native';

const Sound = require('react-native-sound');

const {width, height} = require('Dimensions').get('window');
const SIZE = 2; // two-by-two grid
const CELL_SIZE = Math.floor(width * .4); // 20% of the screen width
const CELL_PADDING = Math.floor(CELL_SIZE * .02); // 5% of the cell size
const BORDER_RADIUS = CELL_PADDING * 2;
const TILE_SIZE = CELL_SIZE - CELL_PADDING * 2;
const LETTER_SIZE = 50;


var mainSequence = [];
var currSequence = [];

class BoardView extends Component {
  constructor(props) {
    super(props);

    // load all four sounds note1, note2, note3, note4
    for (let i = 1; i <= 4; i++) {
      let note = 'note' + i;
      this[note] = new Sound(i + '.mp3', Sound.MAIN_BUNDLE, (error) => {
        if (error) {
          console.log('failed to load the note', error);
        } else { // loaded successfully
          console.log('duration in seconds: ' + this[note].getDuration() +
            'number of channels: ' + this[note].getNumberOfChannels());
        }
      });
    }

  }

  render() {
    return <View style={styles.container}>
      <TouchableOpacity onPress={this._resetTheGame.bind(this)}>
        <Text style={styles.letter}>PLAY!</Text>
      </TouchableOpacity>
      {this._renderTiles()}
    </View>
  }

  //componentDidMount() {
  //  //this._resetTheGame();
  //}

  // create all four tiles
  _renderTiles() {
    let result = [];
    let key = 1;
    let bgColors = ["", "", "#3275DD", "#D93333", "#64D23B", "#FED731"];
    for (var row = 0; row < SIZE; row++) {
      for (var col = 0; col < SIZE; col++) {
        var position = {
          left: col * CELL_SIZE + CELL_PADDING,
          top: row * CELL_SIZE + CELL_PADDING
        };
        result.push(this._renderTile(key++, position, {backgroundColor: bgColors[key]}));
      }
    }
    return result;
  }

  // create one tile
  _renderTile(id, position, bgColor) {
    return <TouchableOpacity onPress={() => this._playTheGame(id)}>
      <View style={[styles.tile, position, bgColor]}>
      </View>
    </TouchableOpacity>
  }

  // play one note
  _playNote(note) {
    note.play((success) => {
      if (success) {
        //console.log('successfully finished playing');
      } else {
        //console.log('playback failed due to audio decoding errors');
      }
    });
  }

  _resetTheGame() {
    mainSequence = [];
    let startSound = random(1, 4);
    currSequence = mainSequence.slice(0);
    mainSequence.push(startSound);
    this._playNote(this['note' + startSound])
    console.log("start the game", startSound);
  }


  _playTheGame(id) {
    console.log("this is the current id = ", id);
    console.log("the main array ", mainSequence, "  the current ", currSequence);
    console.log("curent note", this['note' + id]);
    this._playNote(this['note' + id]);

    if (currSequence.shift() !== id+"") {
      console.log("game over", currSequence);
      //currSequence = [];
      AlertIOS.alert("Game Over! id = ")
    }

    if (currSequence.length === 0) {
      mainSequence.push(random(1, 4));
      currSequence = mainSequence.slice(0);
      console.log("the main Array ", mainSequence);
      //this._playSounds(mainSequence);

    }


    ////mainSequence.push(id+"");
    //let res = compare(currSequence, mainSequence);
    //// console.log("the result = ", res);
    //
    //if (res === "done") {
    //  currSequence = [];
    //  ///  console.log("next step");
    //  //  AlertIOS.alert("next");
    //
    //  mainSequence.push(random(1, 4) + "");
    //  //  console.log("the main Array ", mainSequence);
    //  this._playSounds(mainSequence);
    //
    //} else if (res === "wrong") {
    //  //console.log("game over");
    //  AlertIOS.alert("Game Over!")
    //  mainSequence = [];
    //  currSequence = [];
    //
    //} else if (res === "right") {
    //  currSequence.push(id + "");
    //  //console.log("keep going")
    //}
  }

  _playSounds(sequence) {
    var i = 0;
   // var that = this;
    var intervalId = setInterval(() => {
      this._playNote(sequence[i]);
      //that.lightUp(sequence[i]);
      i++;
      if (i >= sequence.length) {
        clearInterval(intervalId);
        //that.activateSimonBoard();
      }
    }, 2000);


    //var i = 0;
    //var self = this;
    //console.log("seq length = ", sequence.length)
    //var interval = setInterval(function () {
    //  console.log("iteration =", i, "note =  ", sequence[i])
    //  self._playNote(self['note' + sequence[i]]);
    //  if (++i > sequence.length - 1) {
    //    console.log("clear interval!")
    //    clearInterval(interval);
    //  }
    //}, 2000);
  }





}

//function compare(currentArr, mainArr){
//
//  let arr1 = currentArr.map(elm => elm);
//  let arr2 = mainArr.map(elm => elm);
//  //console.log("Current", arr1, "  MAin", arr2);
//  while (arr1.length && arr2.length){
//    if (arr1.shift() === arr2[0]){
//      arr2.shift();
//    }else{
//      return "wrong"
//    }
//  }
//  if (arr2.length === 0) return "done";
//
//  return "right"
//}




//get a random number within the range  min <= rand <= max
function random(min, max){
  return  (min + Math.floor(Math.random() * (max + 1 - min)))+"";
}

var styles = StyleSheet.create({
  container: {
    width: CELL_SIZE * SIZE,
    height: CELL_SIZE * SIZE,
    backgroundColor: 'transparent',
  },
  tile: {
    position: 'absolute',
    width: TILE_SIZE,
    height: TILE_SIZE,
    borderRadius: BORDER_RADIUS,
    justifyContent: 'center',
    alignItems: 'center',
  },
  letter: {
    color: 'white',
    fontSize: LETTER_SIZE,
    backgroundColor: 'transparent',
    borderRadius: BORDER_RADIUS,
    textAlign: 'center',
  },
});

module.exports = BoardView;


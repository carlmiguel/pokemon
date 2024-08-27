import { SafeAreaView, Text, StyleSheet, Platform, ScrollView } from 'react-native';
import Pokecard from "./components/Pokecard";

export default function App() {

const CharmanderData = {
name: "Charmander",
image: require("./assets/Charmander.png"),
type: "Fire",
hp: 39,
moves: ["Scratch", "Ember", "Growl", "Leer"],
weaknesses: ["Water", " Rock"],
}


const SquirtleData = {
name: "Squirtle",
image: require("./assets/squirt.png"),
type: "Water",
hp: 44,
moves: ["Tackle", " Water gun", " Tail whip", " Withdraw"],
weaknesses: ["electric", "grass"],
}



const BalbasaurData = {
name: "Balbasaur",
image: require("./assets/balbons.png"),
type: "Grass",
hp: 45,
moves: ["Tackle", " Vine whip", " Growl", " Leech seed"],
weaknesses:[ "Fire", "Ice", "Flying", "Psychic"],
}



const PikachuData = {
name: "Pikachu",
image: require("./assets/pikachu.png"), 
type: "Electric",
hp: 35,
moves: ["Quick Attack", "Thunderbolt", "Tail Whip", "Growl"],
weaknesses: ["Ground"],
};


const InfernapeData = {
name: "Infernape",
image: require("./assets/infernape.png"),
type: "Fire",
hp: 39,
moves: ["Scratch", "Ember", "Growl", "Leer"],
weaknesses: ["Water", " Rock"],
}


const HorseaData = {
name: "Horsea",
image: require("./assets/horsea.png"),
type: "Water",
hp: 44,
moves: ["Tackle", " Water gun", " Tail whip", " Withdraw"],
weaknesses: ["electric", "grass"],
}


const ElectrodeData = {
name: "Electrode",
image: require("./assets/electorde.png"), 
type: "Electric",
hp: 35,
moves: ["Quick Attack", "Thunderbolt", "Tail Whip", "Growl"],
weaknesses: ["Ground"],
};


const ChikoritaData = {
name: "Chikorita",
image: require("./assets/chikorita.png"),
type: "Grass",
hp: 45,
moves: ["Tackle", " Vine whip", " Growl", " Leech seed"],
weaknesses:[ "Fire", "Ice", "Flying", "Psychic"],
}


const CharizardData = {
name: "Charizard",
image: require("./assets/charizard.png"),
type: "Fire",
hp: 39,
moves: ["Scratch", "Ember", "Growl", "Leer"],
weaknesses: ["Water", " Rock"],
}


const MagnetonData = {
name: "Magneton",
image: require("./assets/magneton.png"), 
type: "Electric",
hp: 35,
moves: ["Quick Attack", "Thunderbolt", "Tail Whip", "Growl"],
weaknesses: ["Ground"],
};


  return (


 <SafeAreaView style={styles.container}>
  <ScrollView>
    <Pokecard{...CharmanderData}/>
     <Pokecard{...SquirtleData}/>
     <Pokecard{...BalbasaurData}/>
     <Pokecard{...PikachuData}/>
      <Pokecard{...InfernapeData}/>
      <Pokecard{...HorseaData}/>
      <Pokecard{...ElectrodeData}/>
      <Pokecard{...ChikoritaData}/>
       <Pokecard{...CharizardData}/>
        <Pokecard{...MagnetonData}/>
  </ScrollView>
   </SafeAreaView>

 
  );
}


const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? 30 : 0 ,
    flex: 1,
    backgroundColor: '#f5f5f5',

  },
});


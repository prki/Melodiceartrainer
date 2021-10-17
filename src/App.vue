<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <!--
    <div id="music-player">
      <p>Click me to play muzak.</p>
      <button id="playMusicButton" v-on:click="playMusic">Play Music</button>
    </div>
    -->
    <MusicGenerator v-on:music-generated="logReturn" />
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import MusicGenerator from "./components/MusicGenerator.vue";

import * as Tone from "tone";

export default {
  name: "App",
  components: {
    MusicGenerator
  },
  methods: {
    playMusic: function() {
      document
        .querySelector("playMusicButton")
        ?.addEventListener("click", async () => {
          await Tone.start();
          console.log("Audio is ready.");
        });

      const synth = new Tone.PolySynth(Tone.Synth).toDestination();
      const now = Tone.now();
      synth.triggerAttackRelease("D4", "8n", now);
      synth.triggerAttackRelease("F4", "8n", now + 0.5);
      synth.triggerAttackRelease("A4", "8n", now + 1);
      synth.triggerAttackRelease("C5", "8n", now + 1.5);
      synth.triggerAttackRelease("E5", "8n", now + 2);
      // synth.triggerRelease(["D4", "F4", "A4", "C5", "E5"], now + 4);
    },

    logReturn: function(valueReturned) {
      console.log(valueReturned);
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

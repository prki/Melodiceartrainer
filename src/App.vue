<template>
  <div id="app">
    <!--<img alt="Vue logo" src="./assets/logo.png" />-->
    <button v-on:click="changeQuizParametersVisibility">Show parameters.</button>
    <QuizParameters v-show="showQuizParameters" />
    <MusicGenerator v-on:music-generated="logReturn" />
    <QuizController />
  </div>
</template>

<script>
import MusicGenerator from "./components/MusicGenerator.vue";
import QuizParameters from "./components/QuizParameters.vue";
import QuizController from "./components/QuizController.vue";

import * as Tone from "tone";

export default {
  name: "App",
  data: function() {
    return {
      showQuizParameters: false
    };
  },
  components: {
    MusicGenerator,
    QuizParameters,
    QuizController
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
    },

    changeQuizParametersVisibility: function() {
      this.showQuizParameters = !this.showQuizParameters;
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

<template>
  <div id="app">
    <div class="md-toolbar-row md-elevation-4 main-header">
      <h1 class="md-title">Toolbar navbar//Melodic ear trainer</h1>
    </div>
    <div class="container">
      <div class="md-layout main">
        <!--<div class="md-layout-item md-size-20"></div>-->
        <div class="md-layout-item md-size-70 quiz">
          <md-content>
            <div class="md-title">Melodic ear trainer</div>
            <md-button
              class="md-raised md-primary"
              v-on:click="changeQuizParametersVisibility"
            >Show parameters.</md-button>
            <QuizParameters v-show="showQuizParameters" />
            <QuizController v-on:music-generated="playGeneratedMusic" />
          </md-content>
        </div>
        <div class="md-layout-item md-size-30">
          <MelodyHistory />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import QuizParameters from "./components/QuizParameters.vue";
import QuizController from "./components/QuizController.vue";
import MelodyHistory from "./components/MelodyHistory.vue";

import * as Tone from "tone";

export default {
  name: "App",
  data: function() {
    return {
      showQuizParameters: false
    };
  },
  components: {
    QuizParameters,
    QuizController,
    MelodyHistory
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

    playGeneratedMusic: function() {
      const generatedMelodies = this.$store.state.generatedMelodies;
      const lastMelody = generatedMelodies[generatedMelodies.length - 1];
      //console.log(lastMelody);

      const synth = new Tone.PolySynth(Tone.Synth).toDestination();
      const now = Tone.now();
      let j = 0;
      for (let i = 0; i < lastMelody["tones"].length; i++) {
        //console.log("Adding tone", lastMelody["tones"][i]);
        synth.triggerAttackRelease(
          lastMelody["tones"][i],
          lastMelody["lengths"][i],
          now + j
        );
        j += 0.5;
      }
    },

    changeQuizParametersVisibility: function() {
      this.showQuizParameters = !this.showQuizParameters;
    }
  }
};
</script>

<style>
#app {
  font-family: Roboto, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50;*/
  /*margin-top: 60px;*/
}

.main-header {
  /*background-color: #f5f5f5;*/
  margin-bottom: 20px;
  color: #ffffff;
}

.main {
  margin: 0 auto;
}

.quiz {
  min-width: 600px;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>

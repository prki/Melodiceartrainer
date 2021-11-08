<template>
  <div id="QuizController">
    <md-content v-show="!quizStarted">
      <md-button class="md-raised md-primary" v-on:click="startQuiz">Start quiz</md-button>
    </md-content>
    <md-content v-show="quizStarted">
      <h1 class="md-title">Generated melody number {{ totalQuestions + 1 }}.</h1>
      <md-list class="answers-list">
        <md-list-item>Total melodies played: {{ totalQuestions + 1 }}</md-list-item>
        <md-list-item>Correct answers: {{ correctAnswers }}</md-list-item>
      </md-list>
      <md-button class="md-raised md-primary" v-on:click="replayMelody">Replay melody</md-button>
      <md-button class="md-raised md-primary" v-on:click="handleMelodyHeard(true)">Melody heard</md-button>
      <md-button class="md-raised md-accent" v-on:click="handleMelodyHeard(false)">Melody misheard</md-button>

      <md-progress-bar md-mode="determinate" :md-value="correctPercentage"></md-progress-bar>
      <p class="md-body-1">Score in percentage: {{ Math.round(correctPercentage * 10) / 10 }}</p>
    </md-content>
  </div>
</template>

<script>
import * as musicGenerator from "../modules/musicGenerator.js";

export default {
  data: () => ({
    correctAnswers: 0,
    totalQuestions: 0,
    correctPercentage: 0,
    quizStarted: false
  }),

  methods: {
    replayMelody: () => {
      alert("Not implemented.");
    },

    handleMelodyHeard: function(heardCorrect) {
      if (heardCorrect === true) {
        this.correctAnswers++;
        this.markGuessedAnswer(true);
      } else {
        this.markGuessedAnswer(false);
      }
      this.totalQuestions++;
      this.correctPercentage =
        (this.correctAnswers / this.totalQuestions) * 100;

      this.generateNewMelody();
    },

    markGuessedAnswer: function(answer) {
      this.$store.commit("markLastAnswer", answer);
    },

    startQuiz: function() {
      this.quizStarted = true;
      // [TODO]: start Tone context, async, ideal place.
      this.generateNewMelody();
    },

    generateNewMelody: function() {
      const majorScale = musicGenerator.generateMajorScale();
      let tones = new Array(8);
      let lengths = ["8n", "8n", "8n", "8n", "8n", "8n", "8n", "8n"];
      for (let i = 0; i < 8; i++) {
        let randIdx = Math.floor(Math.random() * majorScale.length);
        tones[i] = majorScale[randIdx];
        tones[i] += "4";
      }
      const melody = {
        tones: tones,
        lengths: lengths
      };

      this.$store.commit("setCurrentMelody", melody);
      this.$emit("music-generated", this.CHROMATIC_SCALE);
    }
  }
};
</script>

<style scoped>
.answers-list {
  align-items: center;
}
</style>
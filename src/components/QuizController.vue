<template>
  <div id="QuizController">
    <md-card>
      <md-card-header>Melody {{ totalQuestions }}.</md-card-header>
      <md-list class="answers-list">
        <md-list-item>Total melodies played: {{ totalQuestions }}</md-list-item>
        <md-list-item>Correct answers: {{ correctAnswers }}</md-list-item>
      </md-list>
      <md-button class="md-raised md-primary" v-on:click="replayMelody">Replay melody</md-button>
      <md-button class="md-raised md-primary" v-on:click="handleMelodyHeard(true)">Melody heard</md-button>
      <md-button class="md-raised md-accent" v-on:click="handleMelodyHeard(false)">Melody misheard</md-button>

      <md-progress-bar md-mode="determinate" :md-value="correctPercentage"></md-progress-bar>
      <p class="md-body-1">Score in percentage: {{ Math.round(correctPercentage * 10) / 10 }}</p>
    </md-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    correctAnswers: 0,
    totalQuestions: 0,
    correctPercentage: 0
  }),
  methods: {
    replayMelody: () => {
      alert("Not implemented.");
    },

    handleMelodyHeard: function(heardCorrect) {
      if (heardCorrect === true) {
        this.correctAnswers++;
      }
      this.totalQuestions++;
      this.correctPercentage =
        (this.correctAnswers / this.totalQuestions) * 100;
    }
  }
};
</script>

<style scoped>
.answers-list {
  align-items: center;
}
</style>
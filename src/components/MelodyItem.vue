<template>
  <div>
    <md-dialog :md-active.sync="showDetail">
      <md-dialog-title>Melody detail view</md-dialog-title>
      <p class="md-body-1">Melody played: {{ melodyPrettyPrint }}</p>
      <md-dialog-actions>
        <md-button class="md-primary" @click="replayMelody()">Replay melody</md-button>
        <md-button class="md-primary" @click="showDetail = false">Close</md-button>
      </md-dialog-actions>
    </md-dialog>

    <md-list-item v-bind:class="highlightAnswer" class="history-item">
      <md-button @click="showDetail = true">
        <span>Melody #{{ questionId }} {{ answerValue }}</span>
      </md-button>
    </md-list-item>
  </div>
</template>

<script>
export default {
  computed: {
    highlightAnswer: function() {
      console.log("Highlighting answer.");
      if (this.correctAnswer === true) return "highlight-correct";
      return "highlight-wrong";
    },

    answerValue: function() {
      if (this.correctAnswer === true) {
        return "Correct";
      }
      return "Wrong";
    },

    melodyPrettyPrint: function() {
      return this.$store.state.pastMelodies[this.questionId];
    }
  },

  data: () => ({
    showDetail: false
  }),

  props: ["correctAnswer", "questionId"]
};
</script>

<style scoped>
.history-item {
  border-top: 0px;
  border-left: 0px;
  border-right: 0px;
  border-bottom: 1px;
  border-color: black;
  border-style: solid;
}

li:last-child {
  border: 0;
}

.highlight-correct {
  background-color: #007700;
}

.highlight-wrong {
  background-color: #ff0000;
}
</style>
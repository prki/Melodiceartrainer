<template>
  <md-list-item v-bind:class="highlightAnswer" class="history-item">
    <md-button>
      <span>Melody #{{ questionId }} {{ answerValue }}</span>
    </md-button>
  </md-list-item>
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
    }
  },

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
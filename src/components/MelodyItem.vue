<template>
  <span v-bind:class="highlightAnswer">Item #{{ questionId }} {{ correctAnswer }}</span>
</template>

<script>
export default {
  computed: {
    highlightAnswer: function() {
      console.log("Highlighting answer.");
      if (this.correctAnswer === true) return "highlight-correct";
      return "highlight-wrong";
    }
  },

  props: ["correctAnswer", "questionId"]
};
</script>

<style scoped>
.highlight-correct {
  background-color: #00ff00;
}

.highlight-wrong {
  background-color: #ff0000;
}
</style>
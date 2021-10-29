<template>
  <md-content class="md-scrollbar history-bar">
    <h1 class="md-title">Melody history</h1>
    <md-list class="ul-history md-dense">
      <md-list-item
        @click="displayHistoryDetails(idx)"
        v-for="(melody, idx) in this.$store.state.generatedMelodies"
        :key="melody.id"
      >
        <span
          class="md-list-item-text"
          v-bind:class="highlightAnswer(melody['answer'])"
        >Melody #{{ idx }}</span>
      </md-list-item>
    </md-list>
  </md-content>
</template>

<script>
export default {
  /*  computed: {
    highlightAnswer: function(answer) {
      console.log(answer);
      return {
        "highlight-correct": 1
      };
    }
  },
*/

  methods: {
    displayHistoryDetails: function(idx) {
      alert(idx.toString());
    },

    highlightAnswer: function(answer) {
      if (answer === true) {
        return "highlight-correct";
      }
      return "highlight-wrong";
    }
  }
};
</script>

<style scoped>
.history-bar {
  overflow: auto;
  max-height: 80vh;
  min-height: 80vh;
}

.ul-history {
  margin-top: 0px;
}

.highlight-correct {
  background-color: #00ff00;
}

.highlight-wrong {
  background-color: #ff0000;
}
</style>
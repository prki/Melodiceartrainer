<template>
  <md-content class="md-scrollbar history-bar">
    <h1 class="md-title">Melody history</h1>
    <md-list class="ul-history md-dense">
      <md-list-item
        @click="displayHistoryDetails(idx)"
        v-for="(melody, idx) in this.$store.state.generatedMelodies"
        :key="melody.id"
      >
        <MelodyItem v-bind:correctAnswer="melody['answer']" v-bind:questionId="idx" />
      </md-list-item>
    </md-list>
  </md-content>
</template>

<script>
import MelodyItem from "./MelodyItem.vue";

export default {
  components: {
    MelodyItem
  },

  /** [TODO] push melody into history
   *
   */
  data: function() {},

  methods: {
    displayHistoryDetails: function(idx) {
      alert(idx.toString());
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
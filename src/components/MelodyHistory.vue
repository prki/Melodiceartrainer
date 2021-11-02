<template>
  <md-content class="md-scrollbar history-bar">
    <h1 class="md-title">Melody history</h1>
    <md-list class="ul-history md-dense">
      <MelodyItem
        v-for="(melody, idx) in this.$store.state.pastMelodies"
        :key="melody.id"
        v-bind:correctAnswer="melody['answer']"
        v-bind:questionId="idx"
      />
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
  data: function() {
    return {
      melodiesTested: ["foo"]
    };
  },

  methods: {
    displayHistoryDetails: function(idx) {
      alert(idx.toString());
      this.melodiesTested.push("abc");
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
</style>
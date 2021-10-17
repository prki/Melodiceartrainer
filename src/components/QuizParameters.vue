<template>
  <div id="quizform">
    <input type="radio" id="use-major-scale" value="Major scale" v-model="scale" />
    <label for="use-major-scale">Use major scale (random key).</label>
    <br />
    <input
      type="checkbox"
      id="use-quarter-notes"
      value="Quarter notes"
      v-model="possibleToneLength"
    />
    <label for="use-quarter-notes">Generate quarter notes.</label>
    <button v-on:click="logDebug">Log debug values</button>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      scale: null,
      possibleToneLength: []
    };
  },
  methods: {
    logDebug: function() {
      console.log(this.scale);
      console.log(this.possibleToneLength);
    }
  }
};
</script>

<style scoped>
</style>
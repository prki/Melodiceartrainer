<template>
  <div id="quizform">
    <md-radio id="use-major-scale" value="Major scale" v-model="scale">Use major scale (random key).</md-radio>
    <br />
    <md-checkbox
      type="checkbox"
      id="use-quarter-notes"
      value="Quarter notes"
      v-model="possibleToneLength"
    >Use quarter notes.</md-checkbox>
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
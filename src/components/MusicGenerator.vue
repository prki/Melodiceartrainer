<template>
  <div class="music-generator">
    <button v-on:click="returnData">Generate music</button>
  </div>
</template>

<script>
export default {
  created() {
    this.CHROMATIC_SCALE = [
      "A",
      "A#",
      "B",
      "C",
      "C#",
      "D",
      "D#",
      "E",
      "F",
      "F#",
      "G",
      "G#"
    ];
  },

  methods: {
    data: function() {
      return {
        retval: "Some return value."
      };
    },

    /**
     * Method generating a random note. The note is returned as a string representing
     * the note.
     *
     * @returns {string} Random note.
     */
    generateRandomNote: function() {
      return this.CHROMATIC_SCALE[Math.floor(Math.random() * 12)];
    },

    /**
     * Method generating a major scale for a particular root note provided as
     * a parameter.
     * In case no parameter is provided, chooses a random key.
     *
     * Major scale is created using the following formula:
     *
     * root - W W H W W W H
     *
     * Where W represents a whole step (step over one note) and H represents
     * a half step (next note in chromatic scale).
     *
     * @param {string} key The root note to generate key from. If not provided, generates starting from a random note.
     */
    generateMajorScale: function(key) {
      if (arguments.length == 0) {
        key = this.generateRandomNote();
      }
      const startingIndex = this.CHROMATIC_SCALE.findIndex(k => k === key);

      const retArray = new Array(7);
      retArray[0] = this.CHROMATIC_SCALE[startingIndex];
      retArray[1] = this.CHROMATIC_SCALE[(startingIndex + 2) % 12];
      retArray[2] = this.CHROMATIC_SCALE[(startingIndex + 4) % 12];
      retArray[3] = this.CHROMATIC_SCALE[(startingIndex + 5) % 12];
      retArray[4] = this.CHROMATIC_SCALE[(startingIndex + 7) % 12];
      retArray[5] = this.CHROMATIC_SCALE[(startingIndex + 9) % 12];
      retArray[6] = this.CHROMATIC_SCALE[(startingIndex + 11) % 12];

      return retArray;
    },

    returnData: function() {
      this.$emit("music-generated", this.CHROMATIC_SCALE);
      //const majorScale = this.generateMajorScale();
      const melody = {
        tones: ["C4", "D4", "E4"],
        lengths: ["8n", "8n", "8n"]
      };

      this.$store.commit("addMelody", melody);
    }
  }
};
</script>

<style scoped>
</style>
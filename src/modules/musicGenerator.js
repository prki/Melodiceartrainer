import * as constants from './constants.js';

export function alertOther() {
  //alert("This is a function imported from another module.");
  alert(generateRandomNote());
}

/**
 * Method generating a random note. The note is returned as a string representing
 * the note.
 *
 * @returns {string} Random note.
*/
function generateRandomNote() {
  return constants.CHROMATIC_SCALE[Math.floor(Math.random() * 12)];
}

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
export function generateMajorScale(key) {
  if (arguments.length === 0) {
    key = generateRandomNote();
  }
  const startingIndex = constants.CHROMATIC_SCALE.findIndex(k => k === key);

  const retArray = new Array(7);
  retArray[0] = constants.CHROMATIC_SCALE[startingIndex];
  retArray[1] = constants.CHROMATIC_SCALE[(startingIndex + 2) % 12];
  retArray[2] = constants.CHROMATIC_SCALE[(startingIndex + 4) % 12];
  retArray[3] = constants.CHROMATIC_SCALE[(startingIndex + 5) % 12];
  retArray[4] = constants.CHROMATIC_SCALE[(startingIndex + 7) % 12];
  retArray[5] = constants.CHROMATIC_SCALE[(startingIndex + 9) % 12];
  retArray[6] = constants.CHROMATIC_SCALE[(startingIndex + 11) % 12];

  return retArray;
}
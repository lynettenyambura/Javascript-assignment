const color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const o = ["th", "st", "nd", "rd"];

for (let i = 0; i < color.length; i++) {
  let ordinal = i + 1;
  let suffix = o[0];
  if (ordinal % 100 >= 11 && ordinal % 100 <= 13) {
    suffix = o[0];
  } else if (ordinal % 10 === 1) {
    suffix = o[1];
  } else if (ordinal % 10 === 2) {
    suffix = o[2];
  } else if (ordinal % 10 === 3) {
    suffix = o[3];
  }
  console.log(`${ordinal}${suffix} choice is ${color[i]}.`);
}

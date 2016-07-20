var result = 100;

for (result = 100; result < 201; result++) {
  if (result % 3 === 0 && result % 4 === 0) {
    console.log("LoopyLighthouse");
  }

  else if (result % 3 === 0) {
    console.log("Loopy");
  }

  else if (result % 4 === 0) {
    console.log("Lighthouse");
  }

  else {
    console.log(result);
  }
}
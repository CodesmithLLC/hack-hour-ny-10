function drawStairs2(n, stars = 1, stairs = "") {
  if (stars >= n) {
    console.log((stairs += "*".repeat(n)));
  } else {
    stairs += `${" ".repeat(n - stars)}${"*".repeat(stars)}\n`;
    drawStairs2(n, ++stars, stairs);
  }
}

drawStairs2(6);

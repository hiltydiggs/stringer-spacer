/**************
 *            *
 *   SPACER   *
 *            *
 *************/

/*
 * inputs to collect:
 *   total span
 *   max on center gap
 *
 * output:
 *   number of stringers
 *   proper gap length
*/

// the business
function recalc() {
  let span = parseFloat(document.getElementById('span').value);
  let fraction = parseFloat(document.getElementById('fractions').value);
  let onCenter = parseFloat(document.getElementById('oncenter').value);
  span = span + fraction;
  calculateGaps(span, onCenter);
}

function calculateGaps(span, onCenter) {
  let totalGaps = Math.ceil( span / onCenter );
  let totalStringers = totalGaps + 1;
  let spacing = span / totalGaps;
  let decimal = spacing % 1;
  switch (decimal) {
    case (decimal > 0.937 || decimal < 0.062):
      decimal = 0;
  }
  updateDisplay(totalStringers, spacing);
}

function updateDisplay(x, y) {
  let stringers = document.getElementById('stringers');
  let spacing = document.getElementById('spacing');
  stringers.textContent = x;
  spacing.textContent = y;
}

// deal with god damn imperial units !!!!!!

/*
 * 0   = 0.938-0.062
 * 1/8 = 0.063-0.187
 * 1/4 = 0.188-0.312
 * 3/8 = 0.313-0.437
 * 1/2 = 0.438-0.562
 * 5/8 = 0.563-0.687
 * 3/4 = 0.688-0.812
 * 7/8 = 0.813-0.937
*/
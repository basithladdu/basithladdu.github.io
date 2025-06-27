document.getElementById("dowryForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const income = parseInt(this.income.value);
  const education = parseInt(this.education.value);
  const looks = parseInt(this.looks.value);
  const region = this.region.value;
  const marriageType = this.marriageType.value;

  let dowry = income * 0.5;

  // Bonus logic
  if (education >= 3) dowry += 200000;
  if (education === 4) dowry += 300000;
  if (looks >= 8) dowry += 100000;
  if (region === "Urban") dowry += 50000;
  if (marriageType === "Love") dowry -= 100000;

  // Clamp to minimum
  if (dowry < 0) dowry = 0;

  let msg = "";
  if (dowry > 1000000) {
    msg = "🤑 Your relatives must be flexing in weddings!";
  } else if (dowry > 500000) {
    msg = "📈 You're in the elite rishta market.";
  } else {
    msg = "📉 Your dowry prediction is modest. Maybe that's a good thing.";
  }

  document.getElementById("result").innerHTML = `
    <p>Estimated Dowry Demand: <strong>₹${dowry.toLocaleString()}</strong></p>
    <p>${msg}</p>
  `;
});

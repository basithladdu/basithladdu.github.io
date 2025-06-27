document.getElementById("dowryForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = this.name.value || "Unnamed Groom";
  const income = parseInt(this.income.value);
  const education = parseInt(this.education.value);
  const looks = parseInt(this.looks.value);
  const region = this.region.value;
  const marriageType = this.marriageType.value;

  let dowry = income * 0.5;

  // Spice it up
  if (education >= 3) dowry += 200000;
  if (education === 4) dowry += 300000;
  if (looks >= 8) dowry += 100000;
  if (region === "Urban") dowry += 50000;
  if (marriageType === "Love") dowry -= 150000;

  // Red flag detector
  let redFlags = [];
  if (income < 40000) redFlags.push("💸 Low income");
  if (looks <= 3) redFlags.push("🧟‍♂️ Questionable looks");
  if (education === 0) redFlags.push("📚 Needs more degrees");
  if (marriageType === "Love") redFlags.push("💘 May reduce dowry potential");

  let badge = "";
  if (dowry > 1000000) badge = "💎 Supreme Rishta";
  else if (dowry > 500000) badge = "🔥 Elite Rishta";
  else badge = "🧱 Work in Progress";

  // Clamp
  if (dowry < 0) dowry = 0;

  let message = `
    <p>${badge} for <strong>${name}</strong></p>
    <p>💰 Estimated Dowry: <strong>₹${dowry.toLocaleString()}</strong></p>
    ${redFlags.length > 0 ? `<p>🚩 Red Flags: ${redFlags.join(", ")}</p>` : ""}
    <button onclick="shareDowry('${name}', ${dowry})">📤 Share My Dowry</button>
  `;

  document.getElementById("result").innerHTML = message;
});

function shareDowry(name, dowry) {
  const text = `💍 ${name}'s predicted dowry is ₹${dowry.toLocaleString()}!\n😂 Try yours here: https://basithladdu.github.io/dowry-calc/`;
  navigator.clipboard.writeText(text);
  alert("Copied! Paste it in the squad group and flex 😂");
}

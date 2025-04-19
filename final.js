function showTab(id) {
  document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function calculateSavings() {
  const distance = document.getElementById('distance').value;
  const petrolEmissions = 0.192; // kg CO2 per km
  const evEmissions = 0.04; // kg CO2 per km
  const saved = (distance * (petrolEmissions - evEmissions)).toFixed(2);
  const result = document.getElementById('result');
  result.textContent = `🎉 You saved ${saved} kg of CO₂!`;
  result.classList.add('visible');

  document.getElementById('feedback').style.display = 'block';
  document.getElementById('shareButtons').style.display = 'block';

  window.co2Saved = saved;
}

function shareOnWhatsApp() {
  const message = `I saved ${window.co2Saved} kg CO₂ today by riding an EV! Join the Green Positive movement: https://greenpositive.org/`;
  window.open(`https://wa.me/?text=${encodeURIComponent(message)}`);
}

function shareOnTwitter() {
  const message = `I saved ${window.co2Saved} kg CO₂ today by riding an EV! 🌱 Join the #GreenPositive movement! https://greenpositive.org/`;
  window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(message)}`);
}
function toggleMenu() {
  const navLinks = document.getElementById("nav-links");
  navLinks.classList.toggle("show");
}

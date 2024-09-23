// In script.js
const volumeSlider = document.getElementById("volume-slider");
const audioElement = document.getElementById("your-audio-element"); // Replace with your audio element's ID

volumeSlider.addEventListener("input", () => {
  audioElement.volume = volumeSlider.value / 100;
});

const soundEffectsToggle = document.getElementById("sound-effects-toggle");
let soundEffectsEnabled = true; // Initial state

soundEffectsToggle.addEventListener("change", () => {
  soundEffectsEnabled = soundEffectsToggle.checked;

  // Update sound effects behavior based on the toggle state
  if (soundEffectsEnabled) {
    // Enable sound effects (e.g., play sounds on certain events)
  } else {
    // Disable sound effects (e.g., mute audio elements)
  }
});
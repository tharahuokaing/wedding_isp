// led-interview.js - Handles LED Running Text, Hunting Animation & Stage Sequence

document.addEventListener("DOMContentLoaded", () => {
    const textToType = "សិអារ្យ មេត្រី";
    const ledElement = document.getElementById("interviewLedText");
    
    if (ledElement) {
        let charIndex = 0;
        const typingSpeed = 120; // Speed per character (ms)

        function typeInterviewLED() {
            if (charIndex < textToType.length) {
                ledElement.textContent += textToType.charAt(charIndex);
                charIndex++;
                setTimeout(typeInterviewLED, typingSpeed);
            } else {
                // Once typing finishes, remove cursor and trigger 10x hunting pulse
                setTimeout(() => {
                    ledElement.classList.remove("led-running");
                    ledElement.classList.add("start-hunting");
                }, 300);
            }
        }

        // Start typing on page load
        typeInterviewLED();
    }
});

// Function to handle the Start Ceremony Sequence button click
function startCeremonySequence() {
    const sequenceContainer = document.getElementById("stageSequence");
    if (sequenceContainer) {
        sequenceContainer.innerHTML = `
            <div style="margin: 15px 0; padding: 12px; background: rgba(0, 255, 102, 0.1); border: 1px solid #00ff66; border-radius: 8px; color: #00ff66; font-weight: bold; text-align: center;">
                ⚙️ កំពុងដំណើរការកម្មវិធី... / Ceremony sequence initiated!
            </div>
        `;
    }
}

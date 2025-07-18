document.addEventListener('DOMContentLoaded', function () {
  const messageInput = document.getElementById('message');
  const counter = document.getElementById('counter');
  const progressBar = document.getElementById('progress-bar');
  const maxLength = 250;

  // Initialize the counter
  updateCounter(0);

  // Add input event listener
  messageInput.addEventListener('input', function () {
    const text = messageInput.value;
    const length = text.length;

    // Update counter and progress bar
    updateCounter(length);

    // Check if we've reached the max length
    if (length >= maxLength) {
      // Trim any extra characters
      messageInput.value = text.substring(0, maxLength);

      // Add visual indication
      messageInput.classList.add('limit-reached');
      counter.classList.add('limit-reached');

      // Add animation effect
      messageInput.style.animation = 'none';
      setTimeout(() => {
        messageInput.style.animation = 'pulse 0.5s ease-in-out';
      }, 10);
    } else {
      // Remove visual indication if not at max
      messageInput.classList.remove('limit-reached');

      // Change color when approaching the limit
      if (length > maxLength * 0.9) {
        counter.classList.add('limit-reached');
      } else {
        counter.classList.remove('limit-reached');
      }
    }
  });

  function updateCounter(length) {
    counter.textContent = `${length} / ${maxLength}`;

    // Update progress bar
    const progress = (length / maxLength) * 100;
    progressBar.style.width = `${progress}%`;

    // Change progress bar color when approaching limit
    if (progress > 90) {
      progressBar.style.backgroundColor = progress >= 100 ? '#ff4757' : '#ffa502';
    } else {
      progressBar.style.backgroundColor = '#4b6cb7';
    }
  }
});
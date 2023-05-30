var chatIcon = document.getElementById('chatIcon');
var chatContainer = document.getElementById('chatContainer');
var chatClose = document.getElementById('chatClose');
var chatMaximize = document.getElementById('chatMaximize');
var isChatBoxOpen = false;
var isChatBoxMaximized = false;

chatIcon.onclick = function() {
  if(!isChatBoxOpen) {
    chatContainer.style.display = 'block';
    isChatBoxOpen = true;
  } else {
    chatContainer.style.display = 'none';
    isChatBoxOpen = false;
  }
}

chatClose.onclick = function() {
  chatContainer.style.display = 'none';
  isChatBoxOpen = false;
}

chatMaximize.onclick = function() {
  if (!isChatBoxMaximized) {
    chatContainer.style.width = '75%';
    chatContainer.style.height = '90%';
    chatContainer.style.bottom = '0';
    chatContainer.style.right = '0';
    chatBox.style.height = '85%';
    isChatBoxMaximized = true;
    chatMaximize.textContent = 'Minimize';
  } else {
    chatContainer.style.width = '300px';
    chatContainer.style.height = '400px';
    chatContainer.style.bottom = '20px';
    chatContainer.style.right = '20px';
    chatBox.style.height = '85%';
    isChatBoxMaximized = false;
    chatMaximize.textContent = 'Maximize';
  }
}
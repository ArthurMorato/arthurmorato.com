(() => {
  // DOM Elements
  const caret = document.querySelector('.input-caret');
  const logContainer = document.querySelector('.terminal-log');
  const animatedCommand = document.querySelector('#animated-command');
  
  // Validation
  if (!caret || !logContainer || !animatedCommand) return;

  // Configuration
  const config = {
    caretBlinkInterval: 520,
    
    heartbeat: {
      phrases: [
        'Think...',
        'Drawing...',
        'Creating...',
        'Testing...',
        'Deploying!',
        'repeating...'
      ],
      interval: 2000,
      removalDelay: 400
    },
    
    typing: {
      commands: [
        'cat about.txt',
        'ls projects/',
        'tail -f logs/experience.log',
        'ssh arthur@portfolio'
      ],
      typeSpeed: 90,
      eraseSpeed: 55,
      holdAfterType: 950,
      holdAfterErase: 350
    }
  };

  // State Management
  const state = {
    caret: { isVisible: true },
    heartbeat: { phraseIndex: 0 },
    typing: {
      commandIndex: 0,
      charIndex: 0,
      isErasing: false
    }
  };

  // Caret Blinking
  const toggleCaret = () => {
    state.caret.isVisible = !state.caret.isVisible;
    caret.classList.toggle('input-caret--hidden', !state.caret.isVisible);
  };

  const startCaretBlink = () => {
    setInterval(toggleCaret, config.caretBlinkInterval);
  };

  // Heartbeat Logs
  const createLogLine = (prefix, text, className) => {
    const line = document.createElement('p');
    line.className = `log-line ${className}`;
    
    const prefixEl = document.createElement('span');
    prefixEl.className = 'log-prefix';
    prefixEl.textContent = prefix;
    
    const textEl = document.createElement('span');
    textEl.className = 'log-text';
    textEl.textContent = text;
    
    line.append(prefixEl, textEl);
    return line;
  };

  const appendHeartbeatLog = () => {
    const phrase = config.heartbeat.phrases[state.heartbeat.phraseIndex];
    const line = createLogLine('[INFO]', phrase, 'log-line--heartbeat');
    logContainer.appendChild(line);
    
    state.heartbeat.phraseIndex++;
    
    if (state.heartbeat.phraseIndex >= config.heartbeat.phrases.length) {
      state.heartbeat.phraseIndex = 0;
      setTimeout(removeHeartbeatLogs, config.heartbeat.removalDelay);
    }
  };

  const removeHeartbeatLogs = () => {
    const heartbeatLines = logContainer.querySelectorAll('.log-line--heartbeat');
    heartbeatLines.forEach(el => el.remove());
  };

  const startHeartbeat = () => {
    setInterval(appendHeartbeatLog, config.heartbeat.interval);
  };

  // Typing Animation
  const typeCharacter = () => {
    const { commands } = config.typing;
    const currentCommand = commands[state.typing.commandIndex];
    
    if (state.typing.charIndex < currentCommand.length) {
      animatedCommand.textContent = currentCommand.slice(0, state.typing.charIndex + 1);
      state.typing.charIndex++;
      setTimeout(typeCharacter, config.typing.typeSpeed);
    } else {
      state.typing.isErasing = true;
      setTimeout(typeCharacter, config.typing.holdAfterType);
    }
  };

  const eraseCharacter = () => {
    const { commands } = config.typing;
    const currentCommand = commands[state.typing.commandIndex];
    
    if (state.typing.charIndex > 0) {
      animatedCommand.textContent = currentCommand.slice(0, state.typing.charIndex - 1);
      state.typing.charIndex--;
      setTimeout(typeCharacter, config.typing.eraseSpeed);
    } else {
      state.typing.isErasing = false;
      state.typing.commandIndex = (state.typing.commandIndex + 1) % commands.length;
      setTimeout(typeCharacter, config.typing.holdAfterErase);
    }
  };

  const updateAnimatedCommand = () => {
    state.typing.isErasing ? eraseCharacter() : typeCharacter();
  };

  // Initialize animations
  startCaretBlink();
  startHeartbeat();
  updateAnimatedCommand();
})();

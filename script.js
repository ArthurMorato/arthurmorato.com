;(() => {
  const caret = document.querySelector('.input-caret')
  const logContainer = document.querySelector('.terminal-log')
  const animatedCommand = document.querySelector('#animated-command')

  if (!caret || !logContainer || !animatedCommand) {
    return
  }

  let visible = true

  const toggleCaretVisibility = () => {
    visible = !visible
    if (visible) {
      caret.classList.remove('input-caret--hidden')
      return
    }
    caret.classList.add('input-caret--hidden')
  }

  window.setInterval(toggleCaretVisibility, 520)

  const appendHeartbeatLog = () => {
    const line = document.createElement('p')
    line.className = 'log-line'

    const prefix = document.createElement('span')
    prefix.className = 'log-prefix'
    prefix.textContent = '[INFO]'

    const text = document.createElement('span')
    text.className = 'log-text'
    text.textContent = 'Heartbeat: UI ainda ativa.'

    line.appendChild(prefix)
    line.appendChild(text)
    logContainer.appendChild(line)
  }

  window.setInterval(appendHeartbeatLog, 2000)

  const commands = [
    'cat about.txt',
    'ls projects/',
    'tail -f logs/experience.log',
    'ssh arthur@portfolio',
  ]

  let currentCommandIndex = 0
  let currentCharIndex = 0
  let erasing = false

  const typeSpeed = 90
  const eraseSpeed = 55
  const holdAfterType = 950
  const holdAfterErase = 350

  const updateAnimatedCommand = () => {
    const currentCommand = commands[currentCommandIndex]

    if (!erasing) {
      if (currentCharIndex < currentCommand.length) {
        animatedCommand.textContent = currentCommand.slice(0, currentCharIndex + 1)
        currentCharIndex += 1
        window.setTimeout(updateAnimatedCommand, typeSpeed)
        return
      }

      erasing = true
      window.setTimeout(updateAnimatedCommand, holdAfterType)
      return
    }

    if (currentCharIndex > 0) {
      animatedCommand.textContent = currentCommand.slice(0, currentCharIndex - 1)
      currentCharIndex -= 1
      window.setTimeout(updateAnimatedCommand, eraseSpeed)
      return
    }

    erasing = false
    currentCommandIndex = (currentCommandIndex + 1) % commands.length
    window.setTimeout(updateAnimatedCommand, holdAfterErase)
  }

  updateAnimatedCommand()
})()


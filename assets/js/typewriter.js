/**
 * Motor de typewriter para a V1 (Minimal).
 * Aceita um array de strings e o ID de um elemento.
 * Não utiliza frameworks; apenas DOM Vanilla.
 *
 * @param {string[]} lines - Linhas a serem "digitadas".
 * @param {string} elementId - ID do elemento raiz onde o texto será renderizado.
 * @param {object} [options] - Opções de velocidade.
 * @param {number} [options.charDelay] - Delay em ms entre caracteres.
 * @param {number} [options.lineDelay] - Delay em ms entre linhas.
 */
function typewriter(lines, elementId, options) {
  var settings = options || {};
  var charDelay = typeof settings.charDelay === "number" ? settings.charDelay : 55;
  var lineDelay = typeof settings.lineDelay === "number" ? settings.lineDelay : 650;

  var root = document.getElementById(elementId);
  if (!root || !Array.isArray(lines) || !lines.length) {
    return;
  }

  root.textContent = "";

  var cursor = document.createElement("span");
  cursor.className = "typewriter-cursor";
  cursor.textContent = "|";

  var textNode = document.createElement("span");
  root.appendChild(textNode);
  root.appendChild(cursor);

  var lineIndex = 0;
  var charIndex = 0;

  function typeNextChar() {
    var currentLine = lines[lineIndex];

    if (charIndex < currentLine.length) {
      textNode.textContent += currentLine.charAt(charIndex);
      charIndex += 1;
      window.setTimeout(typeNextChar, charDelay);
      return;
    }

    if (lineIndex < lines.length - 1) {
      textNode.textContent += "\n";
      lineIndex += 1;
      charIndex = 0;
      window.setTimeout(typeNextChar, lineDelay);
      return;
    }
  }

  typeNextChar();
}


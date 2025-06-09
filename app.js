let pass1 = document.getElementById("pass-1")
let pass2 = document.getElementById("pass-2")

const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

function getRandomCharacter() {
  let i = Math.floor(Math.random() * characters.length)
  return characters[i]
}

function getRandomPassword() {
  let result = ''
  for (i = 0; i < 15; i++) {
    result += getRandomCharacter()
  }

  return result
}

function getRandomPasswords() {
  pass1.textContent = getRandomPassword()
  pass2.textContent = getRandomPassword()
}
function dice () {
  var heading1 = document.lastElementChild.lastElementChild.getElementsByTagName(
    'h2'
  )[0]
  var heading2 = document.lastElementChild.lastElementChild.getElementsByTagName(
    'h2'
  )[1]
  heading1.style.color = '#45a29e'
  heading2.style.color = '#45a29e'
  var variableNum1 = Math.floor(Math.random() * 6) + 1
  var imag1 = 'i (' + variableNum1 + ').png'
  document.querySelector('.img-1').setAttribute('src', imag1)

  var variableNum2 = Math.floor(Math.random() * 6) + 1
  var imag2 = 'i (' + variableNum2 + ').png'
  document.querySelector('.img-2').setAttribute('src', imag2)
  var heading = document.lastElementChild.lastElementChild.firstElementChild

  if (variableNum1 > variableNum2) {
    heading.innerHTML = '🎉Player 1 wins!'
    heading1.style.color = '#afd275'
  } else if (variableNum1 < variableNum2) {
    heading.innerHTML = 'Player 2 wins!🎉'
    heading2.style.color = '#afd275'
  } else {
    heading.innerHTML = "It's a tie!"
  }
}

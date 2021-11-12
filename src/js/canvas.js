//Declaration of variables
var canvas = document.getElementById('dice')
var ctx = canvas.getContext('2d')
//Functions initializeDice
let initializeDice = () => {
  ctx.fillStyle = '#ffffff'
  ctx.fillRect(0 , 0, canvas.width, canvas.height)
  let sizeText = canvas.width / 3
  ctx.fillStyle = '#000000'
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.font = `${sizeText}px Arial`
  ctx.fillText('?', canvas.width / 2, canvas.width / 2)
}
//Clear canvas and create a new empty 
let clearCanvas = () => {
  ctx.clearRect(0,0, canvas.width, canvas.height)
  ctx.fillStyle = '#ffffff'
  ctx.fillRect(0 , 0, canvas.width, canvas.height)
}
//Number 1
let numberOne = () => {
  clearCanvas()
  centerPoint()
}
//Number 2
let numberTwo = () => {
  clearCanvas()
  diagonalUp()
}
//Number 3
let numberThree = () => {
  clearCanvas()
  centerPoint()
  diagonalDown()
}
//Number 4
let numberFour = () => {
  clearCanvas()
  diagonalUp()
  diagonalDown()
}
//Number 5
let numberFive = () => {
  clearCanvas()
  centerPoint()
  diagonalUp()
  diagonalDown()
}
//Number 6
let numberSixt = () => {
  clearCanvas()
  diagonalUp()
  diagonalDown()
  line()
}
//-+---+-
//-+-o-+-
//-+---+-
let centerPoint = () => {
  ctx.beginPath()
  ctx.arc(canvas.width / 2, canvas.width / 2, 10, 0, 2 * Math.PI)
  ctx.fillStyle = '#000000'
  ctx.fill()
}
//-+---o-
//-+-+-+-
//-o---+-
let diagonalUp = () => {
  ctx.beginPath()
  ctx.arc(canvas.width / 4.5, canvas.width - (canvas.width / 4.5), 10, 0, 2 * Math.PI)
  ctx.arc(canvas.width - (canvas.width / 4.5), (canvas.width / 4.5), 10, 0, 2 * Math.PI)
  ctx.fillStyle = '#000000'
  ctx.fill()
}
//-o---+-
//-+-+-+-
//-+---o-
let diagonalDown = () => {
  ctx.beginPath()
  ctx.arc(canvas.width / 4.5, canvas.width / 4.5, 10, 0, 2 * Math.PI)
  ctx.arc(canvas.width - (canvas.width / 4.5), canvas.width - (canvas.width / 4.5), 10, 0, 2 * Math.PI)
  ctx.fillStyle = '#000000'
  ctx.fill()
}
//-+---+-
//-o-+-o-
//-+---+-
let line = () => {
  ctx.beginPath()
  ctx.arc(canvas.width / 4.5, canvas.width / 2, 10, 0, 2 * Math.PI)
  ctx.arc(canvas.width - (canvas.width / 4.5), canvas.width / 2, 10, 0, 2 * Math.PI)
  ctx.fillStyle = '#000000'
  ctx.fill()
}

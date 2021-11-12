var canvas = document.getElementById('dice')
var ctx = canvas.getContext('2d')
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

let clearCanvas = () => {
  ctx.clearRect(0,0, canvas.width, canvas.height)
  ctx.fillStyle = '#ffffff'
  ctx.fillRect(0 , 0, canvas.width, canvas.height)
}

let numberOne = () => {
  clearCanvas()
  centerPoint()
}

let numberTwo = () => {
  clearCanvas()
  diagonalUp()
}

let numberThree = () => {
  clearCanvas()
  centerPoint()
  diagonalDown()
}

let numberFour = () => {
  clearCanvas()
  diagonalUp()
  diagonalDown()
}

let numberFive = () => {
  clearCanvas()
  centerPoint()
  diagonalUp()
  diagonalDown()
}

let numberSixt = () => {
  clearCanvas()
  diagonalUp()
  diagonalDown()
  line()
}

let centerPoint = () => {
  //-+---+-
  //-+-o-+-
  //-+---+-
  ctx.beginPath()
  ctx.arc(canvas.width / 2, canvas.width / 2, 10, 0, 2 * Math.PI)
  ctx.fillStyle = '#000000'
  ctx.fill()
}

let diagonalUp = () => {
  //-+---+-
  //-+-+-+-
  //-o---+-
  ctx.beginPath()
  ctx.arc(canvas.width / 4.5, canvas.width - (canvas.width / 4.5), 10, 0, 2 * Math.PI)
  ctx.fillStyle = '#000000'
  ctx.fill()
  //-+---o-
  //-+-+-+-
  //-+---+-
  ctx.beginPath()
  ctx.arc(canvas.width - (canvas.width / 4.5), (canvas.width / 4.5), 10, 0, 2 * Math.PI)
  ctx.fillStyle = '#000000'
  ctx.fill()
}

let diagonalDown = () => {
  //-o---+-
  //-+-+-+-
  //-+---+-
  ctx.beginPath()
  ctx.arc(canvas.width / 4.5, canvas.width / 4.5, 10, 0, 2 * Math.PI)
  ctx.fillStyle = '#000000'
  ctx.fill()
  //-+---+-
  //-+-+-+-
  //-+---o-
  ctx.beginPath()
  ctx.arc(canvas.width - (canvas.width / 4.5), canvas.width - (canvas.width / 4.5), 10, 0, 2 * Math.PI)
  ctx.fillStyle = '#000000'
  ctx.fill()
}

let line = () => {
  //-+---+-
  //-o-+-+-
  //-+---+-
  ctx.beginPath()
  ctx.arc(canvas.width / 4.5, canvas.width / 2, 10, 0, 2 * Math.PI)
  ctx.fillStyle = '#000000'
  ctx.fill()
  //-+---+-
  //-+-+-o-
  //-+---+-
  ctx.beginPath()
  ctx.arc(canvas.width - (canvas.width / 4.5), canvas.width / 2, 10, 0, 2 * Math.PI)
  ctx.fillStyle = '#000000'
  ctx.fill()
}

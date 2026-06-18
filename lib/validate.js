function isNumber(val) {
  return !isNaN(val) && Number(val) > 0
}

function isEmail(val) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)
}

module.exports = { isNumber, isEmail }

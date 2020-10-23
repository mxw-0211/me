function Res ({ code = 0, message = 'success', data = {} } = {}) {
  this.code = code
  this.message = message
  this.data = data
}
module.exports = Res
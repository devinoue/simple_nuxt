
module.exports = (req, res) => {
  res.write(JSON.stringify({ fjf: 'fff' }))
  res.end()
}

module.exports = {
  probably: function(probability, cb) {
    return this.random() <= probability
    ? (cb ? cb   : true)
    : (cb ? pass : false)
  }
, probablyNot: function(probability, cb) { return this.probably(1-probability, cb) }
, random: Math.random.bind(Math)
}

function pass() {}
pass.pass = true

var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "probset-2-135b",
  "level": "1",
  "url": "#probset-2-135b",
  "type": "Article",
  "number": "",
  "title": "Problem Set 2",
  "body": " Problem Set 2    MAT 135B SQ 2026  Due Friday, April 17th at 11:59PM        Problems    Let be a random variable. We've already shown that .   Let . Show that the random variable is by using the change of variables formula with Then, compute the moment generating function of using its representation in terms of .  If is , is , and and are independent, show that is also normal. Compute the mean and variance of in terms of and .       You are given an unfair 4-sided die with faces numbered 1, 2, 3, and 4 for which the probability of rolling any particular even number is and the probability of rolling any particular odd number is . Let be the number you roll on a toss of this die.   Compute , the moment generating function of .  Let be the numbers that you roll on independent rolls of this die and define . Compute .  For which values of can you find an explicit bound for that decays exponentially in ? Describe how you would find such a bound (but do not compute it explicitly).       Assume that is an exponential random variable with , representing the time a light bulb goes out. Given that , the additional time it takes a repairman to arrive to fix the bulb is either   , or  Exponential with expectation .   In each case, compute . In case (b), also compute the conditional density given .      Let . You generate a single number and then independently generate a sequence of numbers until one of them exceeds . Let be the number of generations it takes.   Compute , the pmf of .  Compute .      "
},
{
  "id": "prob-normal",
  "level": "2",
  "url": "#prob-normal",
  "type": "Problem",
  "number": "1",
  "title": "",
  "body": "  Let be a random variable. We've already shown that .   Let . Show that the random variable is by using the change of variables formula with Then, compute the moment generating function of using its representation in terms of .  If is , is , and and are independent, show that is also normal. Compute the mean and variance of in terms of and .    "
},
{
  "id": "prob-die",
  "level": "2",
  "url": "#prob-die",
  "type": "Problem",
  "number": "2",
  "title": "",
  "body": "  You are given an unfair 4-sided die with faces numbered 1, 2, 3, and 4 for which the probability of rolling any particular even number is and the probability of rolling any particular odd number is . Let be the number you roll on a toss of this die.   Compute , the moment generating function of .  Let be the numbers that you roll on independent rolls of this die and define . Compute .  For which values of can you find an explicit bound for that decays exponentially in ? Describe how you would find such a bound (but do not compute it explicitly).    "
},
{
  "id": "prob-repairman",
  "level": "2",
  "url": "#prob-repairman",
  "type": "Problem",
  "number": "3",
  "title": "",
  "body": "  Assume that is an exponential random variable with , representing the time a light bulb goes out. Given that , the additional time it takes a repairman to arrive to fix the bulb is either   , or  Exponential with expectation .   In each case, compute . In case (b), also compute the conditional density given .   "
},
{
  "id": "prob-stopping",
  "level": "2",
  "url": "#prob-stopping",
  "type": "Problem",
  "number": "4",
  "title": "",
  "body": "  Let . You generate a single number and then independently generate a sequence of numbers until one of them exceeds . Let be the number of generations it takes.   Compute , the pmf of .  Compute .    "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})

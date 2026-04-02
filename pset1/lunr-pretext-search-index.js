var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "probset-1-135b",
  "level": "1",
  "url": "#probset-1-135b",
  "type": "Article",
  "number": "",
  "title": "Problem Set 1",
  "body": " Problem Set 1    MAT 135B SQ 2026  Due Friday, April 10th at 11:59PM        Problems     Let be independent random variables that are all uniform on . Prove that the following sequences of random variables converge in probability and find the constant they converge to. (You may use without proof that and .)                     For part (c): The random variables and are not independent, so their covariance is not necessarily 0. You should be careful when computing .       You arrange cubical boxes of side length 1 numbered in a circle in clockwise order. Independently generate a random number for each , and then fill box up to height with sand. We say that box is a gap box if it's filled at least to height 3\/4, and the next box in clockwise order is filled to height at most 1\/4. Let be the number of gap boxes.    Define indicator random variables such that . Use these to compute .    If boxes and are separated by at least one box, then the events box is a gap box and box is a gap box are independent. Use this to compute .    Determine with proof a constant such that in probability.         Suppose that you have a total of cards consisting of pairs of cards where each pair is a different color. Select cards without replacement and let denote the number of colors that are not present in your selection.    Compute .    Compute .    Find a constant so that in probability. Prove this convergence in probability.       "
},
{
  "id": "prob-convergence",
  "level": "2",
  "url": "#prob-convergence",
  "type": "Problem",
  "number": "1",
  "title": "",
  "body": "  Let be independent random variables that are all uniform on . Prove that the following sequences of random variables converge in probability and find the constant they converge to. (You may use without proof that and .)                     For part (c): The random variables and are not independent, so their covariance is not necessarily 0. You should be careful when computing .   "
},
{
  "id": "prob-gap-boxes",
  "level": "2",
  "url": "#prob-gap-boxes",
  "type": "Problem",
  "number": "2",
  "title": "",
  "body": "  You arrange cubical boxes of side length 1 numbered in a circle in clockwise order. Independently generate a random number for each , and then fill box up to height with sand. We say that box is a gap box if it's filled at least to height 3\/4, and the next box in clockwise order is filled to height at most 1\/4. Let be the number of gap boxes.    Define indicator random variables such that . Use these to compute .    If boxes and are separated by at least one box, then the events box is a gap box and box is a gap box are independent. Use this to compute .    Determine with proof a constant such that in probability.     "
},
{
  "id": "prob-cards",
  "level": "2",
  "url": "#prob-cards",
  "type": "Problem",
  "number": "3",
  "title": "",
  "body": "  Suppose that you have a total of cards consisting of pairs of cards where each pair is a different color. Select cards without replacement and let denote the number of colors that are not present in your selection.    Compute .    Compute .    Find a constant so that in probability. Prove this convergence in probability.     "
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

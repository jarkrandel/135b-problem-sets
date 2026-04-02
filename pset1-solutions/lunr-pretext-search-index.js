var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "probset-1-solutions-135b",
  "level": "1",
  "url": "#probset-1-solutions-135b",
  "type": "Article",
  "number": "",
  "title": "Problem Set 1 Solutions",
  "body": " Problem Set 1 Solutions    MAT 135B SQ 2026        Problems   Let be independent random variables that are all uniform on . Prove that the following sequences of random variables converge in probability and find the constant they converge to. You may use without proof that and .       Solution (a).  Since , we have and for all . The variables are i.i.d., so the Weak Law of Large Numbers gives   in probability.  Solution (b).  For any ,   The random variables are again i.i.d. with finite variance, so the Weak Law of Large Numbers implies   in probability.  Solution (c).  Set . We cannot directly apply the Weak Law of Large Numbers because and are not independent. Instead, we use the criterion that it is enough to show the mean converges and the variance goes to zero.  Because and are independent,   So it remains to show that .   First,   Using independence again,   so   Next, and are independent whenever , so only adjacent terms contribute nonzero covariance. For ,   Therefore,   Hence   in probability.    You arrange cubical boxes of side length 1 numbered in a circle in clockwise order, independently generate a random number for each , and then fill box up to height with sand. Box is a gap box if it is filled at least to height and the next box in clockwise order is filled to height at most . Let be the number of gap boxes.   Define indicator random variables with and compute .  Use the stated independence to compute .  Determine a constant such that in probability.   Solution (a).  Let   Then   Since ,   Solution (b).  If boxes and are separated by at least one box, then and are independent. But adjacent boxes cannot both be gap boxes, so   Thus   Solution (c).  We compute   and   Therefore   in probability, so .    Suppose that you have a total of cards consisting of pairs of cards where each pair is a different color. Select cards without replacement and let denote the number of colors that are not present in your selection.   Compute and .  Find a constant so that in probability.   Solution (a).  For each , let   Then . By linearity of expectation,   Color is absent exactly when all chosen cards come from the remaining cards, so   Hence   Next,   Since   we need for . That is the probability that neither color nor color appears:   Therefore,   Solution (b).  We have   Also,   Thus   in probability, so .    "
},
{
  "id": "solution-1",
  "level": "2",
  "url": "#solution-1",
  "type": "Problem",
  "number": "1",
  "title": "",
  "body": " Let be independent random variables that are all uniform on . Prove that the following sequences of random variables converge in probability and find the constant they converge to. You may use without proof that and .       Solution (a).  Since , we have and for all . The variables are i.i.d., so the Weak Law of Large Numbers gives   in probability.  Solution (b).  For any ,   The random variables are again i.i.d. with finite variance, so the Weak Law of Large Numbers implies   in probability.  Solution (c).  Set . We cannot directly apply the Weak Law of Large Numbers because and are not independent. Instead, we use the criterion that it is enough to show the mean converges and the variance goes to zero.  Because and are independent,   So it remains to show that .   First,   Using independence again,   so   Next, and are independent whenever , so only adjacent terms contribute nonzero covariance. For ,   Therefore,   Hence   in probability.  "
},
{
  "id": "solution-2",
  "level": "2",
  "url": "#solution-2",
  "type": "Problem",
  "number": "2",
  "title": "",
  "body": " You arrange cubical boxes of side length 1 numbered in a circle in clockwise order, independently generate a random number for each , and then fill box up to height with sand. Box is a gap box if it is filled at least to height and the next box in clockwise order is filled to height at most . Let be the number of gap boxes.   Define indicator random variables with and compute .  Use the stated independence to compute .  Determine a constant such that in probability.   Solution (a).  Let   Then   Since ,   Solution (b).  If boxes and are separated by at least one box, then and are independent. But adjacent boxes cannot both be gap boxes, so   Thus   Solution (c).  We compute   and   Therefore   in probability, so .  "
},
{
  "id": "solution-3",
  "level": "2",
  "url": "#solution-3",
  "type": "Problem",
  "number": "3",
  "title": "",
  "body": " Suppose that you have a total of cards consisting of pairs of cards where each pair is a different color. Select cards without replacement and let denote the number of colors that are not present in your selection.   Compute and .  Find a constant so that in probability.   Solution (a).  For each , let   Then . By linearity of expectation,   Color is absent exactly when all chosen cards come from the remaining cards, so   Hence   Next,   Since   we need for . That is the probability that neither color nor color appears:   Therefore,   Solution (b).  We have   Also,   Thus   in probability, so .  "
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

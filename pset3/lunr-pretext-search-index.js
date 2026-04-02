var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "probset-3-135b",
  "level": "1",
  "url": "#probset-3-135b",
  "type": "Article",
  "number": "",
  "title": "Problem Set 3",
  "body": " Problem Set 3    MAT 135B SQ 2026  Due Friday, May 1st at 11:59PM        Problems    At time step 0, a single red ball and a single blue ball are placed in urns 1 and 2 with some specified initial configuration. At any future time step, we switch a ball from one urn to the other in the following way: We first choose either urn 1 with probability or urn 2 with probability . Then, we choose a ball randomly in the urn to transfer to the other urn (If there are no balls, we do nothing).   Compute the transition matrix for this Markov chain. To keep things standardized, use the following convention: state 1 = (RB)(), state 2 = (R)(B), state 3 = (B)(R), state 4 = ()(RB) where (RB)() means the red and blue ball are both in urn 1 and no balls are in urn 2, etc.  Assume that the chain starts with both balls in urn 1. Compute the probability that both balls are in urn 1 after two steps.  Assume that the chain is equally likely to start in either state with two nonempty urns. Write an expression in terms of the transition matrix for the probability that both balls are in urn 2 after 5 steps (you can leave this one as a product of matrices and vectors. You don't have to compute a final numerical value.).       A particle occupies one of three energy states with energy values and . Suppose the particle transitions between states every nanosecond as a Markov chain where the particle's energy at nanosecond n . The particle transitions according to the following transition matrix:   Assume that the particle is equally likely to begin in any state at nanosecond 0. In the parts below, \"write an expression for X\" means write a mathematical expression using the transition matrix and\/or -step transition probabilities. You do not need to come to a final numerical value for the answer as long as your answer is computable in terms of known quantities.   Compute the probability that the particle stays in the same state from nanosecond 0 through nanosecond 9 (inclusive). You do not have to attempt to simplify the expression.  Write an expression for the probability that the particle has energy at least 2 at nanosecond 5.  Write an expression for the particle's expected energy at nanosecond 5.  Suppose now that the particle begins with energy 1 at nanosecond 0. Write an expression for the probability that the particle has energy 1 at nanosecond 3 and energy at most 2 at nanosecond 10.       You have two coins. Coin 1 has probability 1\/2 of Heads, and Coin 2 has probability 3\/4 of Heads. You begin by flipping Coin 1 twice, and you flip future coins according to the following rule: You flip Coin 1 unless your previous two flips were Tails, in which case you flip Coin 2 instead. Given that your 6th flip is a Heads, what is the probability that you used Coin 2 on the 6th flip? (You can leave your answer in terms of known matrices and vectors).    To know whether you use Coin 1 or Coin 2 on any flip, you just need to keep track of what the last two flips were.     "
},
{
  "id": "prob-urns",
  "level": "2",
  "url": "#prob-urns",
  "type": "Problem",
  "number": "1",
  "title": "",
  "body": "  At time step 0, a single red ball and a single blue ball are placed in urns 1 and 2 with some specified initial configuration. At any future time step, we switch a ball from one urn to the other in the following way: We first choose either urn 1 with probability or urn 2 with probability . Then, we choose a ball randomly in the urn to transfer to the other urn (If there are no balls, we do nothing).   Compute the transition matrix for this Markov chain. To keep things standardized, use the following convention: state 1 = (RB)(), state 2 = (R)(B), state 3 = (B)(R), state 4 = ()(RB) where (RB)() means the red and blue ball are both in urn 1 and no balls are in urn 2, etc.  Assume that the chain starts with both balls in urn 1. Compute the probability that both balls are in urn 1 after two steps.  Assume that the chain is equally likely to start in either state with two nonempty urns. Write an expression in terms of the transition matrix for the probability that both balls are in urn 2 after 5 steps (you can leave this one as a product of matrices and vectors. You don't have to compute a final numerical value.).    "
},
{
  "id": "prob-energy",
  "level": "2",
  "url": "#prob-energy",
  "type": "Problem",
  "number": "2",
  "title": "",
  "body": "  A particle occupies one of three energy states with energy values and . Suppose the particle transitions between states every nanosecond as a Markov chain where the particle's energy at nanosecond n . The particle transitions according to the following transition matrix:   Assume that the particle is equally likely to begin in any state at nanosecond 0. In the parts below, \"write an expression for X\" means write a mathematical expression using the transition matrix and\/or -step transition probabilities. You do not need to come to a final numerical value for the answer as long as your answer is computable in terms of known quantities.   Compute the probability that the particle stays in the same state from nanosecond 0 through nanosecond 9 (inclusive). You do not have to attempt to simplify the expression.  Write an expression for the probability that the particle has energy at least 2 at nanosecond 5.  Write an expression for the particle's expected energy at nanosecond 5.  Suppose now that the particle begins with energy 1 at nanosecond 0. Write an expression for the probability that the particle has energy 1 at nanosecond 3 and energy at most 2 at nanosecond 10.    "
},
{
  "id": "prob-coins",
  "level": "2",
  "url": "#prob-coins",
  "type": "Problem",
  "number": "3",
  "title": "",
  "body": "  You have two coins. Coin 1 has probability 1\/2 of Heads, and Coin 2 has probability 3\/4 of Heads. You begin by flipping Coin 1 twice, and you flip future coins according to the following rule: You flip Coin 1 unless your previous two flips were Tails, in which case you flip Coin 2 instead. Given that your 6th flip is a Heads, what is the probability that you used Coin 2 on the 6th flip? (You can leave your answer in terms of known matrices and vectors).    To know whether you use Coin 1 or Coin 2 on any flip, you just need to keep track of what the last two flips were.   "
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

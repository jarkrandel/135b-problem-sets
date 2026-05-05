var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "probset-3-solutions-135b",
  "level": "1",
  "url": "#probset-3-solutions-135b",
  "type": "Article",
  "number": "",
  "title": "Problem Set 3 Solutions",
  "body": " Problem Set 3 Solutions    MAT 135B SQ 2026        Problem Set 3 Solutions   MAT 135B SQ 2026    Problem 1: At time step 0, a single red ball and a single blue ball are placed in urns 1 and 2 with some specified initial configuration. At any future time step, we switch a ball from one urn to the other in the following way: We first choose either urn 1 with probability or urn 2 with probability . Then, we choose a ball randomly in the urn to transfer to the other urn (If there are no balls in the chosen urn, we do nothing.).   Compute the transition matrix for this Markov chain. To keep things standardized, use the following convention: state 1 = (RB)(), state 2 = (R)(B), state 3 = (B)(R), state 4 = ()(RB) where (RB)() means the red and blue ball are both in urn 1 and no balls are in urn 2, etc.   Assume that the chain starts with both balls in urn 1. Compute the probability that both balls are in urn 1 after two steps.   Assume that the chain is equally likely to start in either state with two nonempty urns. Compute the probability that both balls are in urn 2 after 5 steps (you can leave this one as a matrix product).     Solution:    The transition matrix is    The matrix describes the transition probabilities between states after two iterations take place, and the probability we want is just the probability of transitioning from state 1 to itself after two iterations. This means we want to know the matrix element . This is the same as the dot product of the first row of with its first column, which is    In this case, our initial distribution row vector is   The matrix contains transition probabilities between states after 5 steps, so the 4-dimensional row vector has the probability that the chain landed in state after 5 steps. Our answer is , which we can write as      Problem 2: A particle occupies one of three energy states with energy values and . Suppose the particle transitions between states every nanosecond as a Markov chain where the particle's energy at nanosecond n . The particle transitions according to the following transition matrix:   Assume that the particle is equally likely to begin in any state at nanosecond 0. In the parts below, \"write an expression for X\" means write a mathematical expression using the transition matrix and\/or -step transition probabilities. You do not need to come to a final numerical value for the answer as long as your answer is computable in terms of known quantities.   Compute the probability that the particle stays in the same state from nanosecond 0 through nanosecond 9 (inclusive). You do not have to attempt to simplify the expression you get.   Write an expression for the probability that the particle has energy at least 2 at nanosecond 5.   Write an expression for the particle's expected energy at nanosecond 5.   Suppose now that the particle begins with energy 1 at nanosecond 0. Write an expression for the probability that the particle has energy 1 at nanosecond 3 and energy at most 2 at nanosecond 10.     Solution:     or with equal probability. If , we will have if and only if for all , meaning that the chain transitions from state 1 to itself for the first nine iterations. The probability of this occurring is . The same logic works for when or so that our desired probability is    This is just . The initial distribution has in each coordinate so that   We can extract the sum we need from this row vector by multiplying by a column vector (taking a dot product), so that the expression we need is    We're now looking for . Reusing our work from the previous part, we see that this is just    The question is asking for the probability that the particle transitions from state 1 to state 1 in three steps, then from state 1 to either state 1 or state 2 in 7 additional steps. So, this is      Problem 3: You have two coins. Coin 1 has probability 1\/2 of Heads, and Coin 2 has probability 3\/4 of Heads. You begin by flipping Coin 1 twice, and you flip future coins according to the following rule: You flip Coin 1 unless your previous two flips were Tails, in which case you flip Coin 2 instead. Given that your 6th flip is a Heads, what is the probability that you used Coin 2 on the 6th flip? (You can leave your answer in terms of known matrices and vectors).    Hint: To know whether you used Coin 2, you just need to know what the last two flips were.    Solution: Using the definition of conditional probability, we have   We will use Coin 2 for flip 6 if and only if flips 5 and 4 were both tails, in which case the probability of flipping Heads is 3\/4. Therefore   We can set up a Markov chain to keep track of the last two flips, and write our probabilities in terms of this chain's transition matrix and initial distribution. Let state 1 be HH, let state 2 be TH, let state 3 be HT, and let state 4 be TT. We assumed that we used Coin 1 for the first two flips, so we will not model this part with our Markov chain. Let   so that, for example, if and only if roll 2 was a Tails and roll 1 was a Heads. Because we flip Coin 2 after step exactly when , the transition matrix is   We can use this to compute our needed probabilities given that we know the initial distribution for . Since we just flipped Coin 1 twice for the first two flips, all possibilities are equally likely and   We have   On the other hand, flip 6 was Heads exactly when either or , so   This means our final answer is   "
},
{
  "id": "probset-3-solutions-135b-4",
  "level": "2",
  "url": "#probset-3-solutions-135b-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Problem 1: "
},
{
  "id": "probset-3-solutions-135b-6",
  "level": "2",
  "url": "#probset-3-solutions-135b-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Solution: "
},
{
  "id": "probset-3-solutions-135b-8",
  "level": "2",
  "url": "#probset-3-solutions-135b-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Problem 2: "
},
{
  "id": "probset-3-solutions-135b-12",
  "level": "2",
  "url": "#probset-3-solutions-135b-12",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Solution: "
},
{
  "id": "probset-3-solutions-135b-14",
  "level": "2",
  "url": "#probset-3-solutions-135b-14",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Problem 3: "
},
{
  "id": "probset-3-solutions-135b-16",
  "level": "2",
  "url": "#probset-3-solutions-135b-16",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Solution: "
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

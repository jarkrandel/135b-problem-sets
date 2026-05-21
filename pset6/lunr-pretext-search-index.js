var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "probset-6-135b",
  "level": "1",
  "url": "#probset-6-135b",
  "type": "Article",
  "number": "",
  "title": "Problem Set 6",
  "body": " Problem Set 6    MAT 135B SQ 2026  Due Sunday, May 31 at 11:59PM        Problems    Consider a random walk on the graph in Figure 1. Assume that all edges initially have weight 1.   Find the invariant distribution for this chain.  Suppose that a random walker starts at node 3. Compute the probability that she immediately transitions from to to to then back to .  Compute the long-run proportion of time steps on which she transitions from an odd-numbered state to another odd-numbered state.  Argue that exists for this chain, and compute its value.  Suppose now that the walk on the graph is modified so that two edges have different weights: Set and . Compute the expected number of steps it takes to return to state 3 once the walker enters 3.     This graph looks fishy...   This graph looks fishy...       Let . Although the simple random walk on is not positive recurrent, a similar walk that \"drifts\" towards a partially reflecting boundary is not only positive recurrent but also reversible.    First, let and consider the Markov chain on with transition matrix   This is a walk with two partially reflecting boundaries at and . Compute the invariant distribution for this chain and show that it is reversible.   Take a good look at the equations that come from the defining property of the invariant distribution.     A similar analysis to that of (a) shows that the analog of the above walk with and with boundaries at and is also reversible. For suitable , an infinite analog is reversible too. Let and consider the Markov chain on with the following transition matrix   that has in each entry directly below the diagonal, in each entry directly above the diagonal, and in all other entries not shown. Find the values of for which this chain has a reversible distribution and compute it.   Assume is some distribution that satisfies the detailed balance equations and use these equations to solve for in terms of . When can these equations have a solution?        "
},
{
  "id": "prob-graph-walk",
  "level": "2",
  "url": "#prob-graph-walk",
  "type": "Problem",
  "number": "1",
  "title": "",
  "body": "  Consider a random walk on the graph in Figure 1. Assume that all edges initially have weight 1.   Find the invariant distribution for this chain.  Suppose that a random walker starts at node 3. Compute the probability that she immediately transitions from to to to then back to .  Compute the long-run proportion of time steps on which she transitions from an odd-numbered state to another odd-numbered state.  Argue that exists for this chain, and compute its value.  Suppose now that the walk on the graph is modified so that two edges have different weights: Set and . Compute the expected number of steps it takes to return to state 3 once the walker enters 3.     This graph looks fishy...   This graph looks fishy...    "
},
{
  "id": "prob-reflecting-walk",
  "level": "2",
  "url": "#prob-reflecting-walk",
  "type": "Problem",
  "number": "2",
  "title": "",
  "body": "  Let . Although the simple random walk on is not positive recurrent, a similar walk that \"drifts\" towards a partially reflecting boundary is not only positive recurrent but also reversible.    First, let and consider the Markov chain on with transition matrix   This is a walk with two partially reflecting boundaries at and . Compute the invariant distribution for this chain and show that it is reversible.   Take a good look at the equations that come from the defining property of the invariant distribution.     A similar analysis to that of (a) shows that the analog of the above walk with and with boundaries at and is also reversible. For suitable , an infinite analog is reversible too. Let and consider the Markov chain on with the following transition matrix   that has in each entry directly below the diagonal, in each entry directly above the diagonal, and in all other entries not shown. Find the values of for which this chain has a reversible distribution and compute it.   Assume is some distribution that satisfies the detailed balance equations and use these equations to solve for in terms of . When can these equations have a solution?      "
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

var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "probset-6-solutions-135b",
  "level": "1",
  "url": "#probset-6-solutions-135b",
  "type": "Article",
  "number": "",
  "title": "Problem Set 6 Solutions",
  "body": " Problem Set 6 Solutions    MAT 135B SQ 2026        Problem 1: Consider a random walk on the graph in Figure 1. Assume that all edges initially have weight 1.   Find the invariant distribution for this chain.  Suppose that a random walker starts at node 3. Compute the probability that she immediately transitions from to to to then back to .  Compute the long-run proportion of time steps on which she transitions from an odd-numbered state to another odd-numbered state.  Argue that exists for this chain, and compute its value.  Suppose now that the walk on the graph is modified so that two edges have different weights: Set and . Compute the expected number of steps it takes to return to state 3 once the walker enters 3.     This graph looks fishy...   This graph looks fishy...    Solution:     There are no self edges, and there are a total of 8 edges between distinct vertices. So, and   We compute     The walker is equally likely to walk along any edge attached to its current vertex. So, we are looking for   since node has neighbors and nodes and have neighbors each.    The edges between nodes that both have odd labels are and . So, the transitions that we're looking for are: and . The long-run probability of any one of these happening is     This finite graph is connected, so it is irreducible. There is a cycle of length 3 by going , so it is aperiodic. Our convergence theorem says that exists and equals    We now compute   Now, we get   The answer is just      Problem 2: Let . Although the simple random walk on is not positive recurrent, a similar walk that \"drifts\" towards a partially reflecting boundary is not only positive recurrent but also reversible.    First, let and consider the Markov chain on with transition matrix   This is a walk with two partially reflecting boundaries at and . Compute the invariant distribution for this chain and show that it is reversible.    A similar analysis to that of (a) shows that the analog of the above walk with and with boundaries at and is also reversible. Now, let and consider the Markov chain on with the following transition matrix   that has in each entry directly below the diagonal, in each entry directly above the diagonal, and in all other entries not shown. Find the values of for which this chain has a reversible distribution and compute it.     Solution:     Our equations and give   Rearranging the first and third equations give   and   which are actually the same as   and   using the fact that and . These are exactly the two nontrivial detailed balance equations (The other equations are either or are between a state and itself and reduce to .). This shows is reversible. To compute it, notice that rearranging the detailed balance equations to solve for and in terms of gives and . Plugging these into the final equation, we get   meaning     Suppose that satisfies the detailed balance equations and . For this chain, the nonzero detailed balance equations are   for all . Iterating these equations, we can write in terms of as   Using the fact that , we get   The geometric series above converges exactly when , which happens when . This shows there is no reversible distribution when .  Assuming , we get can sum the geometric series to get   so that   and so,   for all is a solution to the detailed balance equations, hence is reversible. Notice that this is !    "
},
{
  "id": "probset-6-solutions-135b-3",
  "level": "2",
  "url": "#probset-6-solutions-135b-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Problem 1: "
},
{
  "id": "fig-graph1-solutions",
  "level": "2",
  "url": "#fig-graph1-solutions",
  "type": "Figure",
  "number": "1",
  "title": "",
  "body": "  This graph looks fishy...   This graph looks fishy...  "
},
{
  "id": "probset-6-solutions-135b-6",
  "level": "2",
  "url": "#probset-6-solutions-135b-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Solution: "
},
{
  "id": "probset-6-solutions-135b-8",
  "level": "2",
  "url": "#probset-6-solutions-135b-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Problem 2: "
},
{
  "id": "probset-6-solutions-135b-10",
  "level": "2",
  "url": "#probset-6-solutions-135b-10",
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

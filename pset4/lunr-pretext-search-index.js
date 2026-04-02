var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "probset-4-135b",
  "level": "1",
  "url": "#probset-4-135b",
  "type": "Article",
  "number": "",
  "title": "Problem Set 4",
  "body": " Problem Set 4    MAT 135B SQ 2026  Due Friday, May 8th at 11:59PM        Problems    Find the classes for the Markov chains with the following transition matrices and specify whether each class is transient or recurrent        A particle can occupy an infinite number of states indexed by the integers . The particle starts at state 0 and transitions at each time step according to one of the following rules: If the particle is in state , then it can move only to either state 0 or state . Let's consider two different cases (1) and (2) for the transition probabilities. In case (1), the particle transitions from to with probability 1\/3, while in case (2), it transitions from to with probability .   Explain why this chain is irreducible in both case (1) and case (2).  Let be the random variable whose value is the first time the particle returns to 0. Since the particle may not ever return to 0, we let in the case when the particle does not return. Compute for any in each case. You should assume so that this final case is included in your calculations.  Compute , the probability of return to 0 in each case.  Determine the recurrence or transience of all states in each case.     In the second case, first show that A lot of cancellation should happen in your expression when you take products (use factorials).      Consider the perfect infinite binary tree in Figure 1. This tree consists of a single root node (at the bottom) and satisfies the following property: Every node in the tree has two child nodes, and any node that is not the root node has a single parent node. Suppose that a random walker moves from node to node in this tree such that at any time the walker is equally likely to transition to any other node connected to its current node    A perfect infinite binary tree.   A perfect infinite binary tree (imagine it continues upwards in this fashion forever)    Argue that the Markov chain associated to this walk is irreducible.  We say that a node is at height in the tree if a shortest path from the node to the root takes steps. Determine whether the chain is recurrent or transient by considering a new Markov chain called the \"height chain\" that keeps track of the current height of the random walker in the binary tree.     A walker is at the root if and only if its current height is . You can also cite a result from lecture about gambler's ruin probabilities to help.     "
},
{
  "id": "prob-classes",
  "level": "2",
  "url": "#prob-classes",
  "type": "Problem",
  "number": "1",
  "title": "",
  "body": "  Find the classes for the Markov chains with the following transition matrices and specify whether each class is transient or recurrent     "
},
{
  "id": "prob-return",
  "level": "2",
  "url": "#prob-return",
  "type": "Problem",
  "number": "2",
  "title": "",
  "body": "  A particle can occupy an infinite number of states indexed by the integers . The particle starts at state 0 and transitions at each time step according to one of the following rules: If the particle is in state , then it can move only to either state 0 or state . Let's consider two different cases (1) and (2) for the transition probabilities. In case (1), the particle transitions from to with probability 1\/3, while in case (2), it transitions from to with probability .   Explain why this chain is irreducible in both case (1) and case (2).  Let be the random variable whose value is the first time the particle returns to 0. Since the particle may not ever return to 0, we let in the case when the particle does not return. Compute for any in each case. You should assume so that this final case is included in your calculations.  Compute , the probability of return to 0 in each case.  Determine the recurrence or transience of all states in each case.     In the second case, first show that A lot of cancellation should happen in your expression when you take products (use factorials).   "
},
{
  "id": "prob-tree",
  "level": "2",
  "url": "#prob-tree",
  "type": "Problem",
  "number": "3",
  "title": "",
  "body": "  Consider the perfect infinite binary tree in Figure 1. This tree consists of a single root node (at the bottom) and satisfies the following property: Every node in the tree has two child nodes, and any node that is not the root node has a single parent node. Suppose that a random walker moves from node to node in this tree such that at any time the walker is equally likely to transition to any other node connected to its current node    A perfect infinite binary tree.   A perfect infinite binary tree (imagine it continues upwards in this fashion forever)    Argue that the Markov chain associated to this walk is irreducible.  We say that a node is at height in the tree if a shortest path from the node to the root takes steps. Determine whether the chain is recurrent or transient by considering a new Markov chain called the \"height chain\" that keeps track of the current height of the random walker in the binary tree.     A walker is at the root if and only if its current height is . You can also cite a result from lecture about gambler's ruin probabilities to help.   "
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

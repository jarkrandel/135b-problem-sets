var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "probset-4-solutions-135b",
  "level": "1",
  "url": "#probset-4-solutions-135b",
  "type": "Article",
  "number": "",
  "title": "Problem Set 4 Solutions",
  "body": " Problem Set 4 Solutions    MAT 135B SQ 2026        Problem Set 4 Solutions   MAT 135B SQ 2026    Problem 1: Find the classes for the Markov chains with the following transition matrices and specify whether each class is transient or recurrent     Solution: I think the best way to figure this out is just to draw a diagram and chase arrows around. The specific transition probabilities don't matter; you just need to know whether there is a nonzero probability of transition between the states.  First, determine the classes by finding out which states in the chain communicate with one another. Because these chains are finite, classes are recurrent if and only if they are closed. Check whether they are closed by checking whether any state in the class has nonzero transition probability to another state outside of the class.    : There is a single class that is recurrent.    : The classes are , which is recurrent, and , which is transient.    : The classes are , which is recurrent, , which is transient, and , which is transient (Notice that 4 and 5 do not communicate.).    The classes are , which is recurrent, and , which is transient.     Problem 2: A particle can occupy an infinite number of states indexed by the integers . The particle starts at state 0 and transitions at each time step according to one of the following rules: If the particle is in state , then it can move only to either state 0 or state . Let's consider two different cases (1) and (2) for the transition probabilities. In case (1), the particle transitions from to with probability 1\/3, while in case (2), it transitions from to with probability .   Explain why this chain is irreducible in both case (1) and case (2).   Let be the random variable whose value is the first time the particle returns to 0. Since the particle may not ever return to 0, we let in the case when the particle does not return. Compute for any in each case. You should assume so that this final case is included in your calculations.    Hint: In the second case, first show that A lot of cancellation should happen in your expression when you take products (use factorials).    Compute , the probability of return to 0 in each case.   Determine the recurrence or transience of all states in each case.     Solution:    Let represent states. In either case, the transition probability from state to state is positive. This means that we can transition with positive probability from to , then from to , then ..., then from to so that . Then, can transition to 0 with positive probability and can transition to with positive probability, showing that . This shows that any two distinct states communicate.   In either case, if and only if is not less than or equal to if and only if the chain transitions from to for every (this is time steps). The probability that this happens in case (1) is just   In case (2), we get    We need to use the answers from (b). In case (1),   so . In case (2),   so .   Since the chain is irreducible, either all of the states are recurrent or all of the states are transient. This is determined by whether or not . In case (1), every state is recurrent since , while in case (2) every state is transient since .     Problem 3: Consider the perfect infinite binary tree in Figure 1. This tree consists of a single root node (at the bottom) and satisfies the following property: Every node in the tree has two child nodes, and any node that is not the root node has a single parent node. Suppose that a random walker moves from node to node in this tree such that at any time the walker is equally likely to transition to any other node connected to its current node    A perfect infinite binary tree.   A perfect infinite binary tree (imagine it continues upwards in this fashion forever)    Argue that the Markov chain associated to this walk is irreducible.   We say that a node is at height in the tree if a shortest path from the node to the root takes steps. Determine whether the chain is recurrent or transient by considering a new Markov chain called the \"height chain\" that keeps track of the current height of the random walker in the binary tree.    Hint: A walker is at the root if and only if its current height is . You can also cite a result from lecture about gambler's ruin probabilities to help.      Solution:    The root is accessible from every node by transitioning to parent nodes repeatedly. Therefore, to get from any node to any other node , the chain can transition first from to the root, then from the root to . Therefore, communicates with for any .   Consider the Markov chain on where and, for any    This Markov chain models the height of a random walker in the binary tree, so let's call it the \"height chain\". Indeed, if the walker is at height 0, then it is at the root node and it moves to a child node at height 1 with probability 1. If the walker is at height , then it moves to a child at height with probability and to its parent at height with probability . This chain is a walk on the nonnegative integers with probability of moving to the right. From our analysis of the gambler's ruin probabilities in lecture, we know that   As soon as the chain enters 0, it goes to with probability 1. This means   Therefore, state 0 is transient in our height chain. This means that the root node is transient in the binary tree because the walker is at the root node if and only if the height chain is in state 0, so the probability of ever returning to 0 in the original chain is the same as the probability of ever returning to 0 in the height chain. This shows the original chain is transient.    "
},
{
  "id": "probset-4-solutions-135b-4",
  "level": "2",
  "url": "#probset-4-solutions-135b-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Problem 1: "
},
{
  "id": "probset-4-solutions-135b-7",
  "level": "2",
  "url": "#probset-4-solutions-135b-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Solution: "
},
{
  "id": "probset-4-solutions-135b-10",
  "level": "2",
  "url": "#probset-4-solutions-135b-10",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Problem 2: "
},
{
  "id": "probset-4-solutions-135b-12",
  "level": "2",
  "url": "#probset-4-solutions-135b-12",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Solution: "
},
{
  "id": "probset-4-solutions-135b-14",
  "level": "2",
  "url": "#probset-4-solutions-135b-14",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Problem 3: "
},
{
  "id": "fig-binary-tree",
  "level": "2",
  "url": "#fig-binary-tree",
  "type": "Figure",
  "number": "1",
  "title": "",
  "body": "  A perfect infinite binary tree.   A perfect infinite binary tree (imagine it continues upwards in this fashion forever)  "
},
{
  "id": "probset-4-solutions-135b-17",
  "level": "2",
  "url": "#probset-4-solutions-135b-17",
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

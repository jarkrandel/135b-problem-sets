var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "topics",
  "level": "1",
  "url": "topics.html",
  "type": "Section",
  "number": "1",
  "title": "Topics",
  "body": " Topics  Midterm 2 will cover material from Chapters 12, 13, 14, and 15 of Janko's notes. All of the theorem numbers below come from Janko's notes. Here's an overview of the topics and what you should know:    Intro to Markov Chains: Know how to write down the transition matrix for a Markov chain given a description of the chain in words. Know the meaning of -step transition probabilities and how to write down expressions for expectations \/ probabilities related to Markov chains using -step probabilities or an initial distribution and the transition matrix.    Recurrence \/ Transience: Understand classes of states in Markov chains and how to identify them. Know the definition of transient and recurrent states, that recurrence is a class property, and how to identify whether a class is transient or recurrent (usually using the fact that for finite classes, a class is recurrent if and only if it is closed).    Branching Processes: Given some offspring distribution, know how to compute the mean at the -th stage (I won't ask you about the variance formula), the probability that the process dies out by some given generation, the probability that the process ever dies out, etc. Know how to handle branching processes that start with more than 1 individual. I'll help you factor polynomials of degree greater than 2 if they come up.    Limiting Probabilities: Understand the content of Theorems 15.2, 15.3, 15.4 on the existence, uniqueness, and general properties of invariant distributions of Markov chains. Know how to calculate invariant distributions, and how to use them to write expressions for long-term proportions of time steps satisfying some condition. Know Proposition 15.5 about the special case of doubly stochastic transition matrices.    "
},
{
  "id": "topics-3-1-1",
  "level": "2",
  "url": "topics.html#topics-3-1-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Intro to Markov Chains: "
},
{
  "id": "topics-3-2-1",
  "level": "2",
  "url": "topics.html#topics-3-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Recurrence \/ Transience: "
},
{
  "id": "topics-3-3-1",
  "level": "2",
  "url": "topics.html#topics-3-3-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Branching Processes: "
},
{
  "id": "topics-3-4-1",
  "level": "2",
  "url": "topics.html#topics-3-4-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Limiting Probabilities: "
},
{
  "id": "practice-midterm",
  "level": "1",
  "url": "practice-midterm.html",
  "type": "Problems",
  "number": "2",
  "title": "Practice Midterm",
  "body": " Practice Midterm   Here's a practice midterm to help you prepare. Practice midterm 2 in Janko's notes is also good preparation.     Suppose that a Markov chain has the following transition matrix:   Determine the classes and identify whether each is recurrent or transient.      Suppose that a branching process has offspring distribution given by   and for all other positive integers .  Hint: It should be helpful to know that .   Compute the probability that the bacteria population ever dies out.  Suppose that you know that the population has 30 individuals at generation 22. What is the expected number of individuals at generation 28?       Label the four vertices of a square in clockwise order. Suppose that an ant transitions between vertices at each time step in one of two ways.   With probability : If the ant is at vertices 1 or 2, it does not move. If it is at vertex 3, it transitions to 4. If it is at vertex 4, it transitions to 3.  With probability : The ant moves to the next vertex in clockwise order.    Write down the transition matrix for the Markov chain whose state at step is the vertex that the ant occupies at time .  Compute , for any states and . Justify your computation and your usage of any theorems (this doesn't require a long calculation).  Compute the long-run proportion of steps on which the ant transitions from an even state to an odd state.       Bob made a New Year's resolution to exercise more regularly. He randomly chooses to exercise or not exercise each day depending on how many times he exercised within the previous two days:   If Bob exercised 0 times within the previous two days, then he exercises with probability 1.  If Bob exercised times within the previous two days, then he exercises with probability .   Consider the Markov chain with states labeled respectively where if Bob did not exercise on days and , if Bob did not exercise on day , but did exercise on day , etc. Suppose that Bob did not exercise on the two days before New Year's Day (labeled days ) so that .   Write out the transition matrix for this chain using the labeling of states given above.  Write an expression for the probability that Bob exercises on days and , but not on day 5.  Write an expression in terms of for the expected number of days Bob exercises on days and combined.     "
},
{
  "id": "practice-problem-1",
  "level": "2",
  "url": "practice-midterm.html#practice-problem-1",
  "type": "Problem",
  "number": "2.1",
  "title": "",
  "body": "  Suppose that a Markov chain has the following transition matrix:   Determine the classes and identify whether each is recurrent or transient.   "
},
{
  "id": "practice-problem-2",
  "level": "2",
  "url": "practice-midterm.html#practice-problem-2",
  "type": "Problem",
  "number": "2.2",
  "title": "",
  "body": "  Suppose that a branching process has offspring distribution given by   and for all other positive integers .  Hint: It should be helpful to know that .   Compute the probability that the bacteria population ever dies out.  Suppose that you know that the population has 30 individuals at generation 22. What is the expected number of individuals at generation 28?    "
},
{
  "id": "practice-problem-3",
  "level": "2",
  "url": "practice-midterm.html#practice-problem-3",
  "type": "Problem",
  "number": "2.3",
  "title": "",
  "body": "  Label the four vertices of a square in clockwise order. Suppose that an ant transitions between vertices at each time step in one of two ways.   With probability : If the ant is at vertices 1 or 2, it does not move. If it is at vertex 3, it transitions to 4. If it is at vertex 4, it transitions to 3.  With probability : The ant moves to the next vertex in clockwise order.    Write down the transition matrix for the Markov chain whose state at step is the vertex that the ant occupies at time .  Compute , for any states and . Justify your computation and your usage of any theorems (this doesn't require a long calculation).  Compute the long-run proportion of steps on which the ant transitions from an even state to an odd state.    "
},
{
  "id": "practice-problem-4",
  "level": "2",
  "url": "practice-midterm.html#practice-problem-4",
  "type": "Problem",
  "number": "2.4",
  "title": "",
  "body": "  Bob made a New Year's resolution to exercise more regularly. He randomly chooses to exercise or not exercise each day depending on how many times he exercised within the previous two days:   If Bob exercised 0 times within the previous two days, then he exercises with probability 1.  If Bob exercised times within the previous two days, then he exercises with probability .   Consider the Markov chain with states labeled respectively where if Bob did not exercise on days and , if Bob did not exercise on day , but did exercise on day , etc. Suppose that Bob did not exercise on the two days before New Year's Day (labeled days ) so that .   Write out the transition matrix for this chain using the labeling of states given above.  Write an expression for the probability that Bob exercises on days and , but not on day 5.  Write an expression in terms of for the expected number of days Bob exercises on days and combined.    "
},
{
  "id": "solutions",
  "level": "1",
  "url": "solutions.html",
  "type": "Section",
  "number": "3",
  "title": "Solutions",
  "body": " Solutions  Problem 1: Suppose that a Markov chain has the following transition matrix:   Determine the classes and identify whether each is recurrent or transient.  Solution: Drawing the diagram for this chain, we see that the classes are and . The class is transient since implies it is not closed. Similarly, is transient since . Finally, is absorbing, hence recurrent.  Problem 2: Suppose that a branching process has offspring distribution given by   and for all other positive integers .  Hint: It should be helpful to know that .   Compute the probability that the bacteria population ever dies out.  Suppose that you know that the population has 30 individuals at generation 22. What is the expected number of individuals at generation 28?   Solution:    We have   So,   Multiplying through by 10 and rearranging, we get iff   The smallest solution to this in is , so .    The mean of the offspring distribution is   Since each of the 30 individuals at generation 22 evolves its own family tree independently of the others, and each tree has expected individuals 6 generations later, the answer is     Problem 3: Label the four vertices of a square in clockwise order. Suppose that an ant transitions between vertices at each time step in one of two ways.   With probability : If the ant is at vertices 1 or 2, it does not move. If it is at vertex 3, it transitions to 4. If it is at vertex 4, it transitions to 3.  With probability : The ant moves to the next vertex in clockwise order.    Write down the transition matrix for the Markov chain whose state at step is the vertex that the ant occupies at time .  Compute , for any states and . Justify your computation and your usage of any theorems (this doesn't require a long calculation).  Compute the long-run proportion of steps on which the ant transitions from an even state to an odd state.   Solution:    We have transitions with probability and transitions with probability . Collecting these into the transition matrix, we get    This finite chain is irreducible since . This chain is aperiodic since (implying state 1 has period 1, so the whole chain has period 1). Therefore, for any where is the invariant distribution of the chain. Since this matrix is doubly stochastic, for all , and so the limit is for all .  This is just .   Problem 4: Bob made a New Year's resolution to exercise more regularly. He randomly chooses to exercise or not exercise each day depending on how many times he exercised within the previous two days:   If Bob exercised 0 times within the previous two days, then he exercises with probability 1.  If Bob exercised times within the previous two days, then he exercises with probability .   Consider the Markov chain with states labeled respectively where if Bob did not exercise on days and , if Bob did not exercise on day , but did exercise on day , etc. Suppose that Bob did not exercise on the two days before New Year's Day (labeled days ) so that .   Write out the transition matrix for this chain using the labeling of states given above.  Write an expression for the probability that Bob exercises on days and , but not on day 5.  Write an expression in terms of for the expected number of days Bob exercises on days and combined.   Solution:    We have     We are looking for the probability that days are labeled . This is the same as saying that and . Since , we can write this as   You could also write the second two-step transition probability as a product of one-step probabilities since it's also true that . So, the answer is equivalently     The value of determines how many times Bob exercised on days and . Values of for correspond to days of exercise respectively. Since , the answer is     "
},
{
  "id": "solutions-2",
  "level": "2",
  "url": "solutions.html#solutions-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Problem 1: "
},
{
  "id": "solutions-5",
  "level": "2",
  "url": "solutions.html#solutions-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Solution: "
},
{
  "id": "solutions-6",
  "level": "2",
  "url": "solutions.html#solutions-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Problem 2: "
},
{
  "id": "solutions-11",
  "level": "2",
  "url": "solutions.html#solutions-11",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Solution: "
},
{
  "id": "solutions-13",
  "level": "2",
  "url": "solutions.html#solutions-13",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Problem 3: "
},
{
  "id": "solutions-16",
  "level": "2",
  "url": "solutions.html#solutions-16",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Solution: "
},
{
  "id": "solutions-18",
  "level": "2",
  "url": "solutions.html#solutions-18",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Problem 4: "
},
{
  "id": "solutions-22",
  "level": "2",
  "url": "solutions.html#solutions-22",
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

var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "practice-final",
  "level": "1",
  "url": "practice-final.html",
  "type": "Problems",
  "number": "1",
  "title": "Practice Problems",
  "body": " Practice Problems   The Final will cover material from Chapters 11 - 16 (Computing by conditioning up to reversibility) and Chapter 18 (Poisson processes). For common distributions (Geometric, Exponential, Binomial, etc.), I will give you any information (pdf, mean, variance, etc.) that you will need. Here's some practice problems. The practice final in the book is also good practice minus question 3 about the discrete renewal theorem.     Let . Consider a branching process in which individuals have probability of having two descendants, probability of having 0 descendants, and otherwise have one descendant. The process begins with one individual in the 0th generation.   Compute the probability that the process ever dies out as a function of .  Suppose you know the process has 5 individuals at generation 5. Write an expression for the probability that the process ever dies out given this knowledge.       Let . On any given day during the spring quarter, Carrie has between 0 and 2 pens. During the course of each day, Carrie loses each pen that she had at the beginning of the day independently of probability . When she discovers that she has 0 pens left at the beginning of a day, she later purchases 2 new pens and begins the next day with 2 pens.   Write down the transition matrix for the Markov chain whose state on step is the number of pens Carrie has at the beginning of day .  Suppose that Carrie has 1 or 2 pens at the beginning of Monday with equal probability. Write an expression for the probability that Carrie has one pen at the beginning of Friday.  Now suppose that Carrie has 2 pens at the beginning of Monday. Write an expression for the probability that Carrie loses exactly one pen during the course of Thursday.       Consider the Markov chain given by a random walk on the graph below that transitions between nodes and as labeled below along edges connecting the nodes. The walker is equally likely to move along any edge meeting its current node.    A graph with vertices 1 through 6.     What is the expected number of steps it takes the walker to return back to node once it reaches ?  Let be the -step transition probability between states 1 and 4. Is it true that exists? Explain your answer. If it does exist, what is its value?  What is the long-run proportion of time steps on which the walker occupies state 5, then again occupies state 5 two time steps later?       You are browsing a website with four web pages labeled and . When you are on page or page , you are equally likely to go to either or next. When you are on pages or , you stay on your current page with probability or you go to or each with probability .   Write down the transition matrix for the Markov chain where is the -th page you visit.  Compute this chain's invariant distribution. Hint: The equations for and are very similar.       A car wash has two washing stations. The time it takes customers to get their cars washed at each station is random: At station 1 it is Exponential with mean 5 minutes, and at station 2 it is Exponential with mean 10 minutes. Cars arrive at the wash as a Poisson process with rate per hour.   Compute the probability that fewer than 2 cars arrive from 1PM to 3PM.  Assume now that two cars simultaneously enter the two washing stations at 8:00AM. Compute the probability that no additional cars arrive at the wash and neither of the cars in stations 1 or 2 finish washing between 8:00AM and 8:10AM.  Under the same assumption as in (b), write an expression for the probability that another car arrives at the wash after one of the cars in stations 1 and 2 finishes washing and before the remaining car in either station 1 or 2 finishes washing.       Your friend Bob rolls a fair 4-sided die and gets a random number . You roll a fair 5-sided die until the number you roll exceeds . Let be the number of die rolls that this process takes.   Compute .  Compute .     "
},
{
  "id": "practice-problem-1",
  "level": "2",
  "url": "practice-final.html#practice-problem-1",
  "type": "Problem",
  "number": "1.1",
  "title": "",
  "body": "  Let . Consider a branching process in which individuals have probability of having two descendants, probability of having 0 descendants, and otherwise have one descendant. The process begins with one individual in the 0th generation.   Compute the probability that the process ever dies out as a function of .  Suppose you know the process has 5 individuals at generation 5. Write an expression for the probability that the process ever dies out given this knowledge.    "
},
{
  "id": "practice-problem-2",
  "level": "2",
  "url": "practice-final.html#practice-problem-2",
  "type": "Problem",
  "number": "1.2",
  "title": "",
  "body": "  Let . On any given day during the spring quarter, Carrie has between 0 and 2 pens. During the course of each day, Carrie loses each pen that she had at the beginning of the day independently of probability . When she discovers that she has 0 pens left at the beginning of a day, she later purchases 2 new pens and begins the next day with 2 pens.   Write down the transition matrix for the Markov chain whose state on step is the number of pens Carrie has at the beginning of day .  Suppose that Carrie has 1 or 2 pens at the beginning of Monday with equal probability. Write an expression for the probability that Carrie has one pen at the beginning of Friday.  Now suppose that Carrie has 2 pens at the beginning of Monday. Write an expression for the probability that Carrie loses exactly one pen during the course of Thursday.    "
},
{
  "id": "practice-problem-3",
  "level": "2",
  "url": "practice-final.html#practice-problem-3",
  "type": "Problem",
  "number": "1.3",
  "title": "",
  "body": "  Consider the Markov chain given by a random walk on the graph below that transitions between nodes and as labeled below along edges connecting the nodes. The walker is equally likely to move along any edge meeting its current node.    A graph with vertices 1 through 6.     What is the expected number of steps it takes the walker to return back to node once it reaches ?  Let be the -step transition probability between states 1 and 4. Is it true that exists? Explain your answer. If it does exist, what is its value?  What is the long-run proportion of time steps on which the walker occupies state 5, then again occupies state 5 two time steps later?    "
},
{
  "id": "practice-problem-4",
  "level": "2",
  "url": "practice-final.html#practice-problem-4",
  "type": "Problem",
  "number": "1.4",
  "title": "",
  "body": "  You are browsing a website with four web pages labeled and . When you are on page or page , you are equally likely to go to either or next. When you are on pages or , you stay on your current page with probability or you go to or each with probability .   Write down the transition matrix for the Markov chain where is the -th page you visit.  Compute this chain's invariant distribution. Hint: The equations for and are very similar.    "
},
{
  "id": "practice-problem-5",
  "level": "2",
  "url": "practice-final.html#practice-problem-5",
  "type": "Problem",
  "number": "1.5",
  "title": "",
  "body": "  A car wash has two washing stations. The time it takes customers to get their cars washed at each station is random: At station 1 it is Exponential with mean 5 minutes, and at station 2 it is Exponential with mean 10 minutes. Cars arrive at the wash as a Poisson process with rate per hour.   Compute the probability that fewer than 2 cars arrive from 1PM to 3PM.  Assume now that two cars simultaneously enter the two washing stations at 8:00AM. Compute the probability that no additional cars arrive at the wash and neither of the cars in stations 1 or 2 finish washing between 8:00AM and 8:10AM.  Under the same assumption as in (b), write an expression for the probability that another car arrives at the wash after one of the cars in stations 1 and 2 finishes washing and before the remaining car in either station 1 or 2 finishes washing.    "
},
{
  "id": "practice-problem-6",
  "level": "2",
  "url": "practice-final.html#practice-problem-6",
  "type": "Problem",
  "number": "1.6",
  "title": "",
  "body": "  Your friend Bob rolls a fair 4-sided die and gets a random number . You roll a fair 5-sided die until the number you roll exceeds . Let be the number of die rolls that this process takes.   Compute .  Compute .    "
},
{
  "id": "solutions",
  "level": "1",
  "url": "solutions.html",
  "type": "Section",
  "number": "2",
  "title": "Solutions",
  "body": " Solutions  Problem 1: Let . Consider a branching process in which individuals have probability of having two descendants, probability of having 0 descendants, and otherwise have one descendant. The process begins with one individual in the 0th generation.   Compute the probability that the process ever dies out as a function of .  Suppose you know the process has 5 individuals at generation 5. Write an expression for the probability that the process ever dies out given this knowledge.   Solution:    We need to find , the smallest solution to for where here   This gives   So, either or . When , this means that the smallest solution is . Otherwise the smallest solution is , so     The process dies out exactly when the processes for all 5 individuals at generation 5 die out. Since these processes evolve independently, and the probability of each dying out is the desired probability is     Problem 2: Let . On any given day during the spring quarter, Carrie has between 0 and 2 pens. During the course of each day, Carrie loses each pen that she had at the beginning of the day independently of probability . When she discovers that she has 0 pens left at the beginning of a day, she later purchases 2 new pens and begins the next day with 2 pens.   Write down the transition matrix for the Markov chain whose state on step is the number of pens Carrie has at the beginning of day .  Suppose that Carrie has 1 or 2 pens at the beginning of Monday with equal probability. Write an expression for the probability that Carrie has one pen at the beginning of Friday.  Now suppose that Carrie has 2 pens at the beginning of Monday. Write an expression for the probability that Carrie loses exactly one pen during the course of Thursday.   Solution:    Writing the states in the order 0, 1, 2, we get     The pmf on Friday is , and we are looking for the probability Carrie is in state 1 on this step, so we need     Carrie loses exactly one pen during the course of Thursday if she either transitions from state 2 to state 1 or from state 1 to state 0 going from Thursday to Friday. The probability she goes from 1 pen to 0 pens starting with 2 pens on Monday is while the probability she goes from 2 to 1 pen is , so we need     Problem 3: Consider the Markov chain given by a random walk on the graph below that transitions between nodes and as labeled below along edges connecting the nodes. The walker is equally likely to move along any edge meeting its current node.    A graph with vertices 1 through 6.     What is the expected number of steps it takes the walker to return back to node once it reaches ?  Let be the -step transition probability between states 1 and 4. Is it true that exists? Explain your answer. If it does exist, what is its value?  What is the long-run proportion of time steps on which the walker occupies state 5, then again occupies state 5 two time steps later?   Solution:    The expected number of steps to return to 3 is . Since the weights are all 1, we can use the formula   So, the answer is     This finite graph is connected, hence irreducible. It is also aperiodic since it has a length three cycle going in order . Therefore, the limit exists and     The only way that we can transition from 5 to itself in two steps is by taking one of the two-step paths   Since we spend proportion of steps in state 5 in the long run, the proportion of total steps on which we spend in 5, then end up in 5 again two steps later is     Problem 4: You are browsing a website with four web pages labeled and . When you are on page or page , you are equally likely to go to either or next. When you are on pages or , you stay on your current page with probability or you go to or each with probability .   Write down the transition matrix for the Markov chain where is the -th page you visit.  Compute this chain's invariant distribution. Hint: The equations for and are very similar.   Solution:    Labeling states in order as pages , we get     Letting , the equations and give   Since the left hand sides of equations 1 and 2 are equal, we immediately get . Replacing with in the third and fourth equations, we get   which also gives . The last equation gives   so that   This means and so that     Problem 5: A car wash has two washing stations. The time it takes customers to get their cars washed at each station is random: At station 1 it is Exponential with mean 5 minutes, and at station 2 it is Exponential with mean 10 minutes. Cars arrive at the wash as a Poisson process with rate per hour.   Compute the probability that fewer than 2 cars arrive from 1PM to 3PM.  Assume now that two cars simultaneously enter the two washing stations at 8:00AM. Compute the probability that no additional cars arrive at the wash and neither of the cars in stations 1 or 2 finish washing between 8:00AM and 8:10AM.  Under the same assumption as in (b), write an expression for the probability that another car arrives at the wash after one of the cars in stations 1 and 2 finishes washing and before the remaining car in either station 1 or 2 finishes washing.   Solution:    Let be the number of cars that have arrived at the wash hours after 1PM. We are looking for     We can view the completion of washing in stations 1 and 2 as arrivals of events in a process with rates and respectively. Notice that station 1 arrivals happen with mean 5 minutes = mean hours and station 2 arrivals happen with mean 10 minutes = mean hours. This means their parameters are and respectively. One way of computing this is combining the all the events into a single process and computing     This is the probability that the first arrival in the combined process is either from station 1 or 2, then the process counting arrivals from the remaining station and from cars has a car arrival first. The probability we're looking for is the following sum   The first term is the probability of the first event coming from station 1, then the second being a car arrival (coming from a race between car arrivals and station 2) and the second term is the probability of the first event coming from station 2, then the second being a car arrival (coming from a race between car arrivals and station 1).    Problem 6: Your friend Bob rolls a fair 4-sided die and gets a random number . You roll a fair 5-sided die until the number you roll exceeds . Let be the number of die rolls that this process takes.   Compute .  Compute .   Solution:    Given that , there are successful rolls we can make out of 5 total. Therefore, the probability that we make a successful roll is   This means that is given , implying . Therefore, the law of total expectation implies     As in (a), the probability we succeed on a roll given is . We get     "
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
  "id": "solutions-4",
  "level": "2",
  "url": "solutions.html#solutions-4",
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
  "id": "solutions-8",
  "level": "2",
  "url": "solutions.html#solutions-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Solution: "
},
{
  "id": "solutions-10",
  "level": "2",
  "url": "solutions.html#solutions-10",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Problem 3: "
},
{
  "id": "fig-final-graph-solutions",
  "level": "2",
  "url": "solutions.html#fig-final-graph-solutions",
  "type": "Figure",
  "number": "2.1",
  "title": "",
  "body": "  A graph with vertices 1 through 6.   "
},
{
  "id": "solutions-13",
  "level": "2",
  "url": "solutions.html#solutions-13",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Solution: "
},
{
  "id": "solutions-15",
  "level": "2",
  "url": "solutions.html#solutions-15",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Problem 4: "
},
{
  "id": "solutions-17",
  "level": "2",
  "url": "solutions.html#solutions-17",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Solution: "
},
{
  "id": "solutions-19",
  "level": "2",
  "url": "solutions.html#solutions-19",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Problem 5: "
},
{
  "id": "solutions-21",
  "level": "2",
  "url": "solutions.html#solutions-21",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Solution: "
},
{
  "id": "solutions-23",
  "level": "2",
  "url": "solutions.html#solutions-23",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Problem 6: "
},
{
  "id": "solutions-25",
  "level": "2",
  "url": "solutions.html#solutions-25",
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

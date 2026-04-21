var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "probset-2-solutions-135b",
  "level": "1",
  "url": "#probset-2-solutions-135b",
  "type": "Article",
  "number": "",
  "title": "Problem Set 2 Solutions",
  "body": " Problem Set 2 Solutions    MAT 135B SQ 2026        Problem Set 2 Solutions   MAT 135B SQ 2026    Problem 1: Let be a random variable. We've already shown that .   Let and let be . Show that the random variable is by using the change of variables formula with Compute the moment generating function of .   Now, if is , is , and and are independent, show that is also normal. Compute its mean and variance in terms of and .     Solution:    We have so that . Therefore,   which is exactly the pdf of a random variable. Now, let . Part (a) showed that is so that we just need to compute . Notice    To show that is normal, we will show that the MGF of is the same as the MGF of a normal variable. Since and are independent, Lemma 10.1 implies . Using part (a), we see   Using part (a) again, we see that is exactly the MGF of a normal random variable with mean and variance . Using Theorem 10.3 (specifically part 1), we see that this means that has the distribution of a normal variable with mean and variance .     Problem 2: You are given an unfair 4-sided die with faces numbered 1, 2, 3, and 4 for which the probability of rolling any particular even number is and the probability of rolling any particular odd number is . Let be the number you roll on a toss of this die.   Compute , the moment generating function of .   Let be the numbers that you roll on independent rolls of this die and define . Compute .   For which values of can you find an explicit bound for that decays exponentially in ? Describe how you would find such a bound (but do not compute it explicitly).     Solution:    Using the definition of moment generating functions, we have    Since are i.i.d. as , Lemma 10.1 implies    Our goal is to apply Theorem 10.2, the large deviations bound. We have   In order to apply the bound in this case, we need   which holds if and only if   Under this condition, we can apply the large deviation bound to conclude that   where is the number      Problem 3: Assume that is an exponential random variable with , representing the time a light bulb goes out. Given that , the additional time it takes a repairman to arrive to fix the bulb is either    , or   Exponential with expectation .    In each case, compute . In case (b), also compute the conditional density given .   Solution:    Assuming , is . This means that . Using the law of total expectation, we can compute    Assuming , is with . This means is . We can again use the law of total expectation to get   Now, we need to compute the conditional density of given . By definition,   so we just need to compute . We can use our information about for this using the same equation conditioning on instead of . Indeed, since given is ,   We have   Finally,      Problem 4: Let . You generate a single number and then independently generate a sequence of numbers until one of them exceeds . Let be the number of generations it takes.   Compute , the pmf of .   Compute .     Solution:    First, suppose that . Then the probability of exceeding is , so . Therefore,   Therefore,    We can use the law of total expectation. Using the formula for the mean of a geometric variable, we know that , so     "
},
{
  "id": "probset-2-solutions-135b-4",
  "level": "2",
  "url": "#probset-2-solutions-135b-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Problem 1: "
},
{
  "id": "probset-2-solutions-135b-6",
  "level": "2",
  "url": "#probset-2-solutions-135b-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Solution: "
},
{
  "id": "probset-2-solutions-135b-8",
  "level": "2",
  "url": "#probset-2-solutions-135b-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Problem 2: "
},
{
  "id": "probset-2-solutions-135b-10",
  "level": "2",
  "url": "#probset-2-solutions-135b-10",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Solution: "
},
{
  "id": "probset-2-solutions-135b-12",
  "level": "2",
  "url": "#probset-2-solutions-135b-12",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Problem 3: "
},
{
  "id": "probset-2-solutions-135b-15",
  "level": "2",
  "url": "#probset-2-solutions-135b-15",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Solution: "
},
{
  "id": "probset-2-solutions-135b-17",
  "level": "2",
  "url": "#probset-2-solutions-135b-17",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Problem 4: "
},
{
  "id": "probset-2-solutions-135b-19",
  "level": "2",
  "url": "#probset-2-solutions-135b-19",
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

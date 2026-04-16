var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "topics",
  "level": "1",
  "url": "topics.html",
  "type": "Section",
  "number": "1",
  "title": "Topics",
  "body": " Topics  Midterm 1 will cover material from Chapters 9, 10, and 11 of Janko's notes. Here's a more detailed list of topics:    Convergence in Probability: Know Theorem 9.1 and the Weak Law of Large numbers, and know how to use them to prove a sequence of random variables converges in probability to a constant.    Moment-generating functions: Know the definition of the moment generating function, its relationship to the moments of a random variable, and how to compute it for simple random variables. Know the meaning of the Large deviation bound (Theorem 10.2) and when or how it can be applied.    Computing pmfs\/pdfs and expectations by conditioning: Know how to compute joint\/conditional densities and joint\/conditional pmfs, and know how use them to compute probabilities and conditional expectations. Know how to use Bayes' formula \/ the tower rule \/ the law of total expectation to compute expectations by conditioning.    Sums with a random number of terms: Know how to model a random variable as a sum of a random number of terms, and know how to compute expectations and variances of such sums by applying Theorem 11.1.    For common distributions (Geometric, Exponential, Binomial, etc.), I will give you any information (pdf, mean, variance, etc.) that you will need. I'll also give the following formulas for computing variances \/ covariances      but you should know how to compute densities, pmfs, expectations, etc.  "
},
{
  "id": "topics-3-1-1",
  "level": "2",
  "url": "topics.html#topics-3-1-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Convergence in Probability: "
},
{
  "id": "topics-3-2-1",
  "level": "2",
  "url": "topics.html#topics-3-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Moment-generating functions: "
},
{
  "id": "topics-3-3-1",
  "level": "2",
  "url": "topics.html#topics-3-3-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Computing pmfs\/pdfs and expectations by conditioning: "
},
{
  "id": "topics-3-4-1",
  "level": "2",
  "url": "topics.html#topics-3-4-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Sums with a random number of terms: "
},
{
  "id": "practice-midterm",
  "level": "1",
  "url": "practice-midterm.html",
  "type": "Problems",
  "number": "2",
  "title": "Practice midterm",
  "body": " Practice midterm   Here's a practice midterm to give you an idea of what to expect. The midterm will be 4 problems of similar types to the practice ones.     A casino gives you a fair 4-sided die with faces numbered and . You repeatedly roll the die times, and on each roll you win in dollars the number you rolled. For any , let be the number of dollars you win on roll .   Compute the moment generating function where .  For which values can you find an upper bound for that decays exponentially quickly in ? Describe how you would find such a bound, but do not attempt to compute it explicitly.       Since takes the values with equal probability, we have   Then,     Here, , so we can find such a bound for any by the Large Deviations theorem. This bound has the form   where .        The same casino from problem 1 gives you a fair 5-sided die with sides numbered and , and they offer you the following game: Roll the die repeatedly until you roll a . When you roll a , you win and the game ends. When you roll or , you must pay the casino in dollars the number you rolled and then roll again. Let be your random winnings. Compute and .    We can model our winnings as   where is the number of times we roll before rolling a 5, and is the amount we lose on roll . We can immediately conclude that (we do not want to count the final ``success'' roll in since we don't lose on that roll). Since are all equally likely assuming we rolled one of them, we can conclude that takes each of them with probability . (In general, we could also compute this as a conditional probability   which works for in place of as well.)  Now, we need to compute and . We know that and   Since , we immediately get and . This means   Finally,       You are an accountant who concentrates for a random number of minutes when doing a tax calculation. Given that you concentrate for minutes, the error you make in the dollar amount your company owes to the IRS is a random number (in millions of dollars).   Compute the joint density .  Compute .       Since is given , we know (since is just the length of the interval). So,     Since implies we know that for any . By the law of total expectation,         You track the price of a stock over days numbered . On each day, the stock has price either or with equal probability. Let denote the price on day . For any , we say that the stock stayed up on day if . Let be the number of days the stock stayed up.   Compute .  Compute .  Determine with proof a constant such that in probability.       For any , define   Then,     Notice that if and are such that , then and are independent. On the other hand, so that   This means     Since and   we can conclude that in probability.      "
},
{
  "id": "practice-problem-1",
  "level": "2",
  "url": "practice-midterm.html#practice-problem-1",
  "type": "Problem",
  "number": "2.1",
  "title": "",
  "body": "  A casino gives you a fair 4-sided die with faces numbered and . You repeatedly roll the die times, and on each roll you win in dollars the number you rolled. For any , let be the number of dollars you win on roll .   Compute the moment generating function where .  For which values can you find an upper bound for that decays exponentially quickly in ? Describe how you would find such a bound, but do not attempt to compute it explicitly.       Since takes the values with equal probability, we have   Then,     Here, , so we can find such a bound for any by the Large Deviations theorem. This bound has the form   where .     "
},
{
  "id": "practice-problem-2",
  "level": "2",
  "url": "practice-midterm.html#practice-problem-2",
  "type": "Problem",
  "number": "2.2",
  "title": "",
  "body": "  The same casino from problem 1 gives you a fair 5-sided die with sides numbered and , and they offer you the following game: Roll the die repeatedly until you roll a . When you roll a , you win and the game ends. When you roll or , you must pay the casino in dollars the number you rolled and then roll again. Let be your random winnings. Compute and .    We can model our winnings as   where is the number of times we roll before rolling a 5, and is the amount we lose on roll . We can immediately conclude that (we do not want to count the final ``success'' roll in since we don't lose on that roll). Since are all equally likely assuming we rolled one of them, we can conclude that takes each of them with probability . (In general, we could also compute this as a conditional probability   which works for in place of as well.)  Now, we need to compute and . We know that and   Since , we immediately get and . This means   Finally,    "
},
{
  "id": "practice-problem-3",
  "level": "2",
  "url": "practice-midterm.html#practice-problem-3",
  "type": "Problem",
  "number": "2.3",
  "title": "",
  "body": "  You are an accountant who concentrates for a random number of minutes when doing a tax calculation. Given that you concentrate for minutes, the error you make in the dollar amount your company owes to the IRS is a random number (in millions of dollars).   Compute the joint density .  Compute .       Since is given , we know (since is just the length of the interval). So,     Since implies we know that for any . By the law of total expectation,      "
},
{
  "id": "practice-problem-4",
  "level": "2",
  "url": "practice-midterm.html#practice-problem-4",
  "type": "Problem",
  "number": "2.4",
  "title": "",
  "body": "  You track the price of a stock over days numbered . On each day, the stock has price either or with equal probability. Let denote the price on day . For any , we say that the stock stayed up on day if . Let be the number of days the stock stayed up.   Compute .  Compute .  Determine with proof a constant such that in probability.       For any , define   Then,     Notice that if and are such that , then and are independent. On the other hand, so that   This means     Since and   we can conclude that in probability.     "
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

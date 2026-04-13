var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "probset-1-solutions-135b",
  "level": "1",
  "url": "#probset-1-solutions-135b",
  "type": "Article",
  "number": "",
  "title": "Problem Set 1 Solutions",
  "body": " Problem Set 1 Solutions    MAT 135B SQ 2026        Problems   Let be independent random variables that are all uniform on . Prove that the following sequences of random variables converge in probability and find the constant they converge to. You may use without proof that and .       Hint for (c). The random variables and are not independent, so their covariance is not necessarily . You should be careful when computing .  Solution (a).  Since is , we know that for all and for all . Since the are assumed to be independent, they are i.i.d., and we can apply the Weak Law of Large Numbers with to conclude that   in probability.  Solution (b).  For any , we have   Since the are again i.i.d. and their common variance is clearly finite, we can apply the Weak Law of Large Numbers with to conclude   in probability.  Solution (c).  Set . We might like to try to apply the Weak Law of Large Numbers as in the previous two parts, but and are not independent for any , so we cannot apply the theorem. Let us instead use the more general criterion for convergence in probability from class: since and are independent, we know   This means we just have to show that . Again, the lack of independence makes this a bit more cumbersome since we have to consider covariances of the . That is,   Let us deal with the first term first. Since we already know , it is convenient to use the formula   Notice that, by independence,   by part (b), so that   Now let us handle the covariance terms. Notice that and are independent if and differ by more than , in which case . This means it suffices to consider only the case when . Recall the formula   Using this, we compute   We can plug this and our result for into our expression for to get   Therefore, we can conclude that   in probability.    You arrange cubical boxes of side length 1 numbered in a circle in clockwise order, independently generate a random number for each , and then fill box up to height with sand. Box is a gap box if it is filled at least to height and the next box in clockwise order is filled to height at most . Let be the number of gap boxes.   Define indicator random variables with and compute .  Use the stated independence to compute .  Determine a constant such that in probability.   Solution (a).  Let   Then   Since ,   Solution (b).  First, recall that multiplying indicator random variables produces an indicator random variable that identifies when both constituent events happen:   so   To compute this probability, first fix . Notice that if box is not adjacent to box , then neither box nor the next box in clockwise order from it are influenced by the state of box , meaning and are independent. However, if , then   In the notes, we use the index to refer to box and to refer to box for convenience since box is clockwise adjacent to box . This means   Solution (c).  Notice that   and   Therefore   in probability, so .    Suppose that you have a total of cards consisting of pairs of cards where each pair is a different color. Select cards without replacement and let denote the number of colors that are not present in your selection.   Compute .  Compute .  Find a constant so that in probability. Prove this convergence in probability.   Solution (a).  For each , let   Then . By linearity of expectation,   Color is absent exactly when all chosen cards come from the remaining cards, so   Hence   Next,   Since   we need for . That is the probability that neither color nor color appears:   Therefore,   Solution (b).  Since these indicator random variables are not independent, we cannot conclude pairwise covariances are zero, so it is more convenient to use   In order to compute , notice that   since the random variables and are identical. Also, is if and only if both colors and are not selected, and is otherwise. This means   So, finally,   Solution (c).  Observe that   If we can show that , then we can apply the class criterion for convergence in probability. We have   Thus   in probability, so .    "
},
{
  "id": "solution-1",
  "level": "2",
  "url": "#solution-1",
  "type": "Problem",
  "number": "1",
  "title": "",
  "body": " Let be independent random variables that are all uniform on . Prove that the following sequences of random variables converge in probability and find the constant they converge to. You may use without proof that and .       Hint for (c). The random variables and are not independent, so their covariance is not necessarily . You should be careful when computing .  Solution (a).  Since is , we know that for all and for all . Since the are assumed to be independent, they are i.i.d., and we can apply the Weak Law of Large Numbers with to conclude that   in probability.  Solution (b).  For any , we have   Since the are again i.i.d. and their common variance is clearly finite, we can apply the Weak Law of Large Numbers with to conclude   in probability.  Solution (c).  Set . We might like to try to apply the Weak Law of Large Numbers as in the previous two parts, but and are not independent for any , so we cannot apply the theorem. Let us instead use the more general criterion for convergence in probability from class: since and are independent, we know   This means we just have to show that . Again, the lack of independence makes this a bit more cumbersome since we have to consider covariances of the . That is,   Let us deal with the first term first. Since we already know , it is convenient to use the formula   Notice that, by independence,   by part (b), so that   Now let us handle the covariance terms. Notice that and are independent if and differ by more than , in which case . This means it suffices to consider only the case when . Recall the formula   Using this, we compute   We can plug this and our result for into our expression for to get   Therefore, we can conclude that   in probability.  "
},
{
  "id": "solution-2",
  "level": "2",
  "url": "#solution-2",
  "type": "Problem",
  "number": "2",
  "title": "",
  "body": " You arrange cubical boxes of side length 1 numbered in a circle in clockwise order, independently generate a random number for each , and then fill box up to height with sand. Box is a gap box if it is filled at least to height and the next box in clockwise order is filled to height at most . Let be the number of gap boxes.   Define indicator random variables with and compute .  Use the stated independence to compute .  Determine a constant such that in probability.   Solution (a).  Let   Then   Since ,   Solution (b).  First, recall that multiplying indicator random variables produces an indicator random variable that identifies when both constituent events happen:   so   To compute this probability, first fix . Notice that if box is not adjacent to box , then neither box nor the next box in clockwise order from it are influenced by the state of box , meaning and are independent. However, if , then   In the notes, we use the index to refer to box and to refer to box for convenience since box is clockwise adjacent to box . This means   Solution (c).  Notice that   and   Therefore   in probability, so .  "
},
{
  "id": "solution-3",
  "level": "2",
  "url": "#solution-3",
  "type": "Problem",
  "number": "3",
  "title": "",
  "body": " Suppose that you have a total of cards consisting of pairs of cards where each pair is a different color. Select cards without replacement and let denote the number of colors that are not present in your selection.   Compute .  Compute .  Find a constant so that in probability. Prove this convergence in probability.   Solution (a).  For each , let   Then . By linearity of expectation,   Color is absent exactly when all chosen cards come from the remaining cards, so   Hence   Next,   Since   we need for . That is the probability that neither color nor color appears:   Therefore,   Solution (b).  Since these indicator random variables are not independent, we cannot conclude pairwise covariances are zero, so it is more convenient to use   In order to compute , notice that   since the random variables and are identical. Also, is if and only if both colors and are not selected, and is otherwise. This means   So, finally,   Solution (c).  Observe that   If we can show that , then we can apply the class criterion for convergence in probability. We have   Thus   in probability, so .  "
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

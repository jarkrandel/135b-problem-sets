var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "probset-5-solutions-135b",
  "level": "1",
  "url": "#probset-5-solutions-135b",
  "type": "Article",
  "number": "",
  "title": "Problem Set 5 Solutions",
  "body": " Problem Set 5 Solutions    MAT 135B SQ 2026        Problem Set 5 Solutions   MAT 135B SQ 2026    Problem 1: You've accidentally introduced a single high-velocity neutron into a lump of Uranium-235 that begins a branching process inside the lump. At each step of the process, every high-velocity neutron impacts a U235 nucleus resulting in one of three possibilities:    Absorption: The neutron is absorbed by the nucleus, producing no offspring neutrons.    Elastic Scattering: The neutron strikes the nucleus and rebounds with high-velocity, surviving to the next stage of the process.    Binary fission: The neutron breaks apart the nucleus and produces two new high-velocity neutrons that take its place.    Suppose that binary fission and elastic scattering occur with probability , and absorption occurs with probability . Let denote the random number of high-velocity neutrons at the -th step of this process.   If grows without bound over time, then we say a chain reaction has occurred. Let be the probability that a chain reaction occurs for a fixed value of . Determine for all values of .   Compute as a function of .   Write an expression for the probability that and the process dies out by generation 5. (You do not have to compute explicit numerical values for complicated expressions as long as they are computable in terms of known functions\/quantities).   Thankfully, the first branching process died out. However, you have now somehow simultaneously introduced a large number of high-velocity neutrons into the lump. Compute the probability that a chain reaction occurs as a function of and .   Under the same setup as in (d), compute as a function of and .     Solution:    A chain reaction occurs if and only if the branching process does not die out, which happens with probability since is the probability that the process dies out. Recall that we can compute by finding the smallest positive number that is a solution to the equation where is the moment generating function of the offspring distribution. In this case, the offspring distribution is   This means that   so we are looking for the smallest solution to the equation   There are many ways to solve this. Using the fact that is always a solution, we can just write   and immediately read off , so that the solution other than is a solution to   Notice that   so when , we know that is actually the smallest solution in , and and . Otherwise, and . We've concluded that    Notice that so that    We can use conditional probability to break this problem into stages. Notice that   We can find by imagining the possible numbers of neutrons produced in generations 1 and 2 that lead to . It must be that or else the population dies out at generation 1. Therefore, we can write   If , then this single neutron must produce to two new neutrons to achieve , meaning . On the other hand, if , then either both individuals give birth to a single individual or one gives birth to two and the other gives birth to zero. There are two ways of this final scenario occurring, so . Therefore, using our previous conditional probability equation,   On the other hand, once we know that , if and only if the processes associated to each of the two neutrons in generation 2 die out within the next three generations. The probability that a single one's process dies out in this time is   where is the moment generating function of the offspring distribution. Since both have independent family trees, we see that   Therefore, our answer is    In this situation, we now have independent copies of the previous branching process at time 0. This means that a chain reaction occurs if and only if a chain reaction occurs in one of these processes. This does not happen exactly when every process dies out, which happens with probability . So, the chain reaction probability is    Each of the starting neutrons have independent family trees, and the expected number of individuals in each tree at generation is by (b). So, the total expected number is just      Problem 2: A bacterium has been genetically modified to produce identical offspring that replace it according to the following distribution:   With probability , the bacterium produces no offspring.   With probability , the bacterium produces offspring.   With probability , the bacterium produces offspring.    Suppose that the zeroth generation of a bacteria population consists of a single bacterium released into a pond.   Write an expression for the probability that the bacteria population dies out on exactly the third generation.   Suppose that you observe 6 bacteria in the pond at generation 5. What is the expected number of bacteria in generation 10?   Compute the probability that the population dies out.      Solution:    Let be the generating function for the offspring distribution. We are looking for   where the first equality follows since the events and satisfy so that .   Each bacterium from generation 5 produces its own family tree independently from the others for the next 5 generations, and each such tree has descendants at generation 10. Since   this means that the answer is    We are looking for , the smallest number that is a solution to the equation . In this case, the offspring distribution is   This means we are looking for the solution to the equation   The smallest positive solution to this is , so .    "
},
{
  "id": "probset-5-solutions-135b-4",
  "level": "2",
  "url": "#probset-5-solutions-135b-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Problem 1: "
},
{
  "id": "probset-5-solutions-135b-5-1-1",
  "level": "2",
  "url": "#probset-5-solutions-135b-5-1-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Absorption: "
},
{
  "id": "probset-5-solutions-135b-5-2-1",
  "level": "2",
  "url": "#probset-5-solutions-135b-5-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Elastic Scattering: "
},
{
  "id": "probset-5-solutions-135b-5-3-1",
  "level": "2",
  "url": "#probset-5-solutions-135b-5-3-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Binary fission: "
},
{
  "id": "probset-5-solutions-135b-8",
  "level": "2",
  "url": "#probset-5-solutions-135b-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Solution: "
},
{
  "id": "probset-5-solutions-135b-10",
  "level": "2",
  "url": "#probset-5-solutions-135b-10",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Problem 2: "
},
{
  "id": "probset-5-solutions-135b-14",
  "level": "2",
  "url": "#probset-5-solutions-135b-14",
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

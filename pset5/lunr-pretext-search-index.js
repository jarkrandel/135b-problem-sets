var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "probset-5-135b",
  "level": "1",
  "url": "#probset-5-135b",
  "type": "Article",
  "number": "",
  "title": "Problem Set 5",
  "body": " Problem Set 5    MAT 135B SQ 2026  Due Sunday, May 17th at 11:59PM        Problems    You've accidentally introduced a single high-velocity neutron into a lump of Uranium-235 that begins a branching process inside the lump. At each step of the process, every high-velocity neutron impacts a U235 nucleus resulting in one of three possibilities:   Absorption: The neutron is absorbed by the nucleus, producing no offspring neutrons.  Elastic Scattering: The neutron strikes the nucleus and rebounds with high-velocity, surviving to the next stage of the process.  Binary fission: The neutron breaks apart the nucleus and produces two new high-velocity neutrons that take its place.   Suppose that binary fission and elastic scattering occur with probability , and absorption occurs with probability . Let denote the random number of high-velocity neutrons at the -th step of this process.   If grows without bound over time, then we say a chain reaction has occurred. Let be the probability that a chain reaction occurs for a fixed value of . Determine for all values of .  Compute as a function of .  Write an expression for the probability that and the process dies out by generation 5. (You do not have to compute explicit numerical values for complicated expressions as long as they are computable in terms of known functions\/quantities).  Thankfully, the first branching process died out. However, you have now somehow simultaneously introduced a large number of high-velocity neutrons into the lump. Compute the probability that a chain reaction occurs as a function of and .  Under the same setup as in (d), compute as a function of and .       A bacterium has been genetically modified to produce identical offspring that replace it according to the following distribution:   With probability , the bacterium produces no offspring.  With probability , the bacterium produces offspring.  With probability , the bacterium produces offspring.   Suppose that the zeroth generation of a bacteria population consists of a single bacterium released into a pond.   Write an expression for the probability that the bacteria population dies out on exactly the third generation.  Suppose that you observe 6 bacteria in the pond at generation 5. What is the expected number of bacteria in generation 10?  Compute the probability that the population dies out.      "
},
{
  "id": "prob-branching",
  "level": "2",
  "url": "#prob-branching",
  "type": "Problem",
  "number": "1",
  "title": "",
  "body": "  You've accidentally introduced a single high-velocity neutron into a lump of Uranium-235 that begins a branching process inside the lump. At each step of the process, every high-velocity neutron impacts a U235 nucleus resulting in one of three possibilities:   Absorption: The neutron is absorbed by the nucleus, producing no offspring neutrons.  Elastic Scattering: The neutron strikes the nucleus and rebounds with high-velocity, surviving to the next stage of the process.  Binary fission: The neutron breaks apart the nucleus and produces two new high-velocity neutrons that take its place.   Suppose that binary fission and elastic scattering occur with probability , and absorption occurs with probability . Let denote the random number of high-velocity neutrons at the -th step of this process.   If grows without bound over time, then we say a chain reaction has occurred. Let be the probability that a chain reaction occurs for a fixed value of . Determine for all values of .  Compute as a function of .  Write an expression for the probability that and the process dies out by generation 5. (You do not have to compute explicit numerical values for complicated expressions as long as they are computable in terms of known functions\/quantities).  Thankfully, the first branching process died out. However, you have now somehow simultaneously introduced a large number of high-velocity neutrons into the lump. Compute the probability that a chain reaction occurs as a function of and .  Under the same setup as in (d), compute as a function of and .    "
},
{
  "id": "prob-bacteria",
  "level": "2",
  "url": "#prob-bacteria",
  "type": "Problem",
  "number": "2",
  "title": "",
  "body": "  A bacterium has been genetically modified to produce identical offspring that replace it according to the following distribution:   With probability , the bacterium produces no offspring.  With probability , the bacterium produces offspring.  With probability , the bacterium produces offspring.   Suppose that the zeroth generation of a bacteria population consists of a single bacterium released into a pond.   Write an expression for the probability that the bacteria population dies out on exactly the third generation.  Suppose that you observe 6 bacteria in the pond at generation 5. What is the expected number of bacteria in generation 10?  Compute the probability that the population dies out.    "
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

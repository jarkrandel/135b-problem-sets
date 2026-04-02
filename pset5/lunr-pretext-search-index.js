var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "probset-5-135b",
  "level": "1",
  "url": "#probset-5-135b",
  "type": "Article",
  "number": "",
  "title": "Problem Set 5",
  "body": " Problem Set 5    MAT 135B SQ 2026  Due Friday, May 15th at 11:59PM        Problems    You've accidentally introduced a single high-velocity neutron into a lump of Uranium-235 that begins a branching process inside the lump. At each step of the process, every high-velocity neutron impacts a U235 nucleus resulting in one of three possibilities:   Absorption: The neutron is absorbed by the nucleus, producing no offspring neutrons.  Elastic Scattering: The neutron strikes the nucleus and rebounds with high-velocity, surviving to the next stage of the process.  Binary fission: The neutron breaks apart the nucleus and produces two new high-velocity neutrons that take its place.   Suppose that binary fission and elastic scattering occur with probability , and absorption occurs with probability . Let denote the random number of high-velocity neutrons at the -th step of this process.   If grows without bound over time, then we say a chain reaction has occurred. Let be the probability that a chain reaction occurs for a fixed value of . Determine for all values of .  Compute as a function of .  Write an expression for the probability that and the process dies out by generation 5. (You do not have to compute explicit numerical values for complicated expressions as long as they are computable in terms of known functions\/quantities).  Thankfully, the first branching process died out. However, in your carelessness, you have now somehow simultaneously introduced a large number of high-velocity neutrons into the lump. Compute the probability that a chain reaction occurs as a function of and .  Under the same setup as in (d), compute as a function of and .       An online casino allows bettors to simultaneously play as many simulated slot machines as they like. Each machine takes in for each spin and pays out randomly. You have insider knowledge of the payout scheme:   With probability , you win nothing.  With probability , you win .  With probability , you win .   You begin with $1 and are an all or nothing player. At stage , you take your current bankroll of dollars and reinvest them by playing new games at the next iteration. Your goal is to make $1,000,000 or go broke.   Compute your expected bankroll after a single play. (This is how much money you receive when you put $1 in. Don't count the $1 loss).  Since you understand probability, you wouldn't play such a game for any serious number of spins expecting to come out ahead. However, you've discovered a vulnerability in the software. By pressing buttons in a particular way in the interface, you can change roughly 1\/3 of your losing hands at each stage to winners. Compute your new expected bankroll with your new edge.  Suppose you can get through each stage in 1 second. How many seconds does it take for your expected bankroll to exceed ? (You can use a calculator).  Compute the probability that you go broke eventually.     You can use the fact that is always a solution to your equation to factor a trinomial analytically if you want to do this the old-fashioned way.     "
},
{
  "id": "prob-branching",
  "level": "2",
  "url": "#prob-branching",
  "type": "Problem",
  "number": "1",
  "title": "",
  "body": "  You've accidentally introduced a single high-velocity neutron into a lump of Uranium-235 that begins a branching process inside the lump. At each step of the process, every high-velocity neutron impacts a U235 nucleus resulting in one of three possibilities:   Absorption: The neutron is absorbed by the nucleus, producing no offspring neutrons.  Elastic Scattering: The neutron strikes the nucleus and rebounds with high-velocity, surviving to the next stage of the process.  Binary fission: The neutron breaks apart the nucleus and produces two new high-velocity neutrons that take its place.   Suppose that binary fission and elastic scattering occur with probability , and absorption occurs with probability . Let denote the random number of high-velocity neutrons at the -th step of this process.   If grows without bound over time, then we say a chain reaction has occurred. Let be the probability that a chain reaction occurs for a fixed value of . Determine for all values of .  Compute as a function of .  Write an expression for the probability that and the process dies out by generation 5. (You do not have to compute explicit numerical values for complicated expressions as long as they are computable in terms of known functions\/quantities).  Thankfully, the first branching process died out. However, in your carelessness, you have now somehow simultaneously introduced a large number of high-velocity neutrons into the lump. Compute the probability that a chain reaction occurs as a function of and .  Under the same setup as in (d), compute as a function of and .    "
},
{
  "id": "prob-casino",
  "level": "2",
  "url": "#prob-casino",
  "type": "Problem",
  "number": "2",
  "title": "",
  "body": "  An online casino allows bettors to simultaneously play as many simulated slot machines as they like. Each machine takes in for each spin and pays out randomly. You have insider knowledge of the payout scheme:   With probability , you win nothing.  With probability , you win .  With probability , you win .   You begin with $1 and are an all or nothing player. At stage , you take your current bankroll of dollars and reinvest them by playing new games at the next iteration. Your goal is to make $1,000,000 or go broke.   Compute your expected bankroll after a single play. (This is how much money you receive when you put $1 in. Don't count the $1 loss).  Since you understand probability, you wouldn't play such a game for any serious number of spins expecting to come out ahead. However, you've discovered a vulnerability in the software. By pressing buttons in a particular way in the interface, you can change roughly 1\/3 of your losing hands at each stage to winners. Compute your new expected bankroll with your new edge.  Suppose you can get through each stage in 1 second. How many seconds does it take for your expected bankroll to exceed ? (You can use a calculator).  Compute the probability that you go broke eventually.     You can use the fact that is always a solution to your equation to factor a trinomial analytically if you want to do this the old-fashioned way.   "
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

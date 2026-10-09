/* Shared applicant profile data for recruiter dashboards: photo, location, tier badge, Arclent Verified status.
   Index i maps to the same 9 portfolios used by "View portfolio", so the tier matches what the recruiter opens. */
(function (w) {
  var P = ["1625241152315-4a698f74ceb7", "1734830268394-6c4a1f165af1", "1748028313767-67d97c23a0d0", "1701878133751-8279cb13aabd", "1713456047082-4e844b81c494", "1783598539449-36a8e3faef54", "1767175155385-a51ced9580ec", "1768247695726-022586dea3a1", "1633625576932-348e73c45e82",
    "1714750977930-e7a7f4611257", "1768247695735-e10baa73e917", "1768247695912-ed8f44d62649", "1591569033002-d49b7f05338f", "1514960919797-5ff58c52e5ba", "1645107914072-6f16b732f224", "1654765437547-6b572f52ee1a", "1639676514578-0eefd6e7083e", "1650381473833-3e2c74a40fbf", "1739391313544-b8ad62509770", "1596087675850-350e5f6e87b3", "1710778044102-56a3a6b69a1b", "1668547049192-118cb053906c", "1681500920181-0aff411f8cab", "1699899657675-1003c7d28f2d", "1741455620227-3b1c51e01419", "1669334185074-ece8edbdcb46", "1479795746179-419986b1cbb5", "1639619628924-eced0acbab4f", "1768247695756-8c99b9020acb", "1710777915903-a7d7f159f2c0", "1678282955795-200c1e18bc7d"];
  var TIER = ["gold", "bronze", "diamond", "silver", "bronze", "reddiamond", "bronze", "diamond", "silver"];
  var NAME = { bronze: "Bronze", silver: "Silver", gold: "Gold", diamond: "Diamond", reddiamond: "Red Diamond" };
  var LOC = ["United States", "Brazil", "India", "Nigeria", "United Kingdom", "Philippines", "Germany", "Canada", "Pakistan"];
  var VER = [1, 0, 1, 1, 0, 1, 0, 1, 0];   // only Arclent Verified talent earns a tier badge
  var m = function (i) { return Math.abs(+i || 0); };
  w.AM = {
    tiers: TIER.filter(function (t, k, a) { return VER[k] && a.indexOf(t) === k; }), names: NAME, locs: LOC.slice().sort(),
    photo: function (i, s) { s = s || 120; return "https://images.unsplash.com/photo-" + P[m(i) % P.length] + "?crop=faces&fit=crop&w=" + s + "&h=" + s + "&q=80"; },
    tier: function (i) { return VER[m(i) % 9] ? TIER[m(i) % 9] : ""; }, loc: function (i) { return LOC[m(i) % 9]; }, verified: function (i) { return VER[m(i) % 9] === 1; },
    badge: function (i, cls) { return !VER[m(i) % 9] ? "" : '<img src="assets/badge-' + TIER[m(i) % 9] + '.png" alt="" class="' + (cls || "ml-1.5 inline-block h-5 w-5 align-[-3px]") + '" />'; }
  };
})(window);

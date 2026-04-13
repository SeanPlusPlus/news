# Klowden & Tao — Mathematical Methods and Human Thought in the Age of AI

**Source:** [arxiv.org/pdf/2603.26524](https://arxiv.org/pdf/2603.26524)
**Authors:** Tanya Klowden, Terence Tao
**Date:** March 2026
**Pages:** 27

---

## What this is

This is Terence Tao — arguably the greatest living mathematician — teaming up with an art scholar to write a philosophy paper about AI. Not a math paper. Not a technical paper. A "what does this all mean" paper. And it's good, because Tao is one of the few people on earth who can speak from direct experience about AI doing something that used to require deep human intelligence (proving theorems), while also being rigorous enough not to hand-wave.

The big thesis: AI is a natural evolution of human tools, not some alien rupture in history. But it's the first tool that automates the creative process itself — not just the communication or dissemination of ideas, but the generation of them. That's new. And it forces us to actually define what we mean by "intelligence" and "understanding" in ways we've been lazy about until now.

## Why math is the sandbox

Tao's clever move here is using mathematics as the testing ground for all the big AI questions. His argument is: math is the one discipline where we have an objective standard of correctness. You can formally verify a proof. It's either valid or it isn't. So if we're going to figure out the human/AI interface anywhere, math is where we should start, because we can actually measure what's happening instead of just vibing about it.

And the findings from that sandbox are genuinely interesting, because they reveal a gap between "correct" and "valuable" that most people haven't thought about carefully enough.

## The "odorless proof" problem

This is the idea I think is most worth sitting with, because it extends way beyond math.

Here's the setup: when a human mathematician writes a proof, it comes with what Tao calls a "penumbra" — a surrounding cloud of context that isn't part of the formal logic but is essential to the proof being *useful*. A human proof tells you *why* the argument works. It reveals which steps are doing the heavy lifting and which are routine. It connects to a broader narrative in the field — "this is the technique we've been developing since so-and-so's 2019 paper, and here's why it works in this new setting." It carries the author's intuition about which parts are fragile and which are robust. It gives you a sense of what would happen if you changed the assumptions slightly. All of that context is what lets other mathematicians actually *learn* from the proof and extend the ideas to new problems.

AI can now produce proofs that are formally correct — you can run them through a proof assistant and they check out. But they're "odorless." They lack that penumbra entirely. The steps are technically valid but they don't tell you anything about *why* they work. There's no narrative, no intuition, no sense of what's important. It's like reading a correct answer with no show-your-work. You can verify it, but you can't learn from it.

Dude, this is the academic version of a problem that's everywhere right now. Think about AI-generated code that passes all the tests but nobody on the team understands. Think about AI-written reports that are factually accurate but don't help anyone make a decision. Think about AI content that's technically correct but adds nothing to the discourse. The gap between "correct" and "valuable" is the central tension of this whole era, and Tao is naming it precisely.

And the kicker: Tao points out that experienced mathematicians have always relied on a "smell test" — a subconscious assessment of whether a proof *feels* right before they've checked the details. Arguments that are heuristically sound, written by someone who clearly understands the terrain, get a different reception than arguments that are technically elaborate but feel "off." AI proofs are going to break this smell test, because they can look perfect on the surface while being either subtly wrong or correct-but-useless. The community's immune system for bad math is calibrated for human failure modes, not AI failure modes.

## The Copernican move

Tao presents three extreme philosophical positions on AI and rejects all of them:

First, pure formalism — the "who cares if it's human or AI, does the output meet spec" position. He says this is intellectually defensible but practically useless, because it gives you no framework for motivating students, choosing research directions, or doing anything that requires judgment beyond mechanical correctness.

Second, human chauvinism — the "AI will never truly understand, it's just stochastic parrots" position. He's surprisingly direct about this one, basically calling it a "god of the gaps" philosophy where the definition of real intelligence keeps shrinking to exclude whatever AI just learned to do. He points out, somewhat uncomfortably, that some portion of what we call human intelligence might not be that much more sophisticated than the algorithms we've built to mimic it.

Third, full surrender — the "AI will do everything better, let's just let it" position. He invokes Wall-E here, which is funny. The risk is obvious: we degrade our own capabilities to the point where we can't monitor or understand the systems running our civilization.

His alternative is what he calls a "Copernican" view of intelligence. The analogy is clean: just as the Copernican revolution showed that Earth isn't the center of the universe but we still rationally prioritize it, the AI revolution is showing that human intelligence isn't the only form of intelligence but we can still center our values around it. We accept that AI exists in the same ontological category as human cognition — different, with complementary strengths — without either worshiping it or pretending it's fundamentally lesser.

The chess analogy lands well here. Chess engines demolished human grandmasters decades ago. Nobody stopped playing chess. Instead, the game evolved. Players use engines for training, for exploring new theories, for probing weaknesses. The question of "what is chess and why do we play it" is still worth asking, and the answers look nothing like any of the three extreme positions.

## The vanilla extract rule and the red team framework

For practical guidance, Tao offers a phased approach that's honestly more useful than most "how to use AI" frameworks I've seen.

Short-term, he says AI is vanilla extract. A small amount enhances everything — run your draft through an LLM for grammar suggestions, hand it some bullet points to organize. But too much ruins the dish. The analogy comes from a Tumblr thought experiment about what percentage of a cake could be vanilla extract before it's inedible (44%, apparently). The point is that most people don't know where the threshold is, so keep the dose low.

Medium-term, he borrows from cybersecurity: put AI on the red team, not the blue team. Let AI verify, test, probe, and review human-generated work. Don't let it generate the core content in any domain where the "red team" (human reviewers, formal verification tools, whatever) can't reliably catch errors. This is a genuinely useful heuristic — it maps directly to how anyone shipping AI-assisted work should think about quality gates.

## The citogenesis problem

This is maybe the wildest anecdote in the paper. Tao himself helped launch an effort on an open mathematical problems site to use AI deep research tools (like the ones that came out in late 2025) to find existing literature on unsolved problems. It worked great — the tools dug up obscure papers that humans had missed.

But then they found that the AI tools started citing *their own summaries on the site* as authoritative sources in subsequent searches. The act of summarizing the research on the site contaminated future AI research about those same problems. They couldn't use the tool anymore for that purpose because it was eating its own tail.

Tao calls this "citogenesis" (borrowing from an XKCD comic). It's a concrete, observed-in-the-wild example of AI information collapse — and it happened in math, which is supposed to be the most robust domain against this kind of thing. If it's happening in math, it's happening everywhere, and most domains don't have formal verification to catch it.

## The economics and access angle

Tao makes a digital divide argument that's worth noting. The frontier models are expensive and getting more expensive. Access is increasingly gated by institutional relationships and ability to pay. He draws a direct parallel to the railroad barons of the Gilded Age — massive upfront capital requirements creating a new class of technological elites who control finite resources.

But he also sees a path out: smaller, distilled models targeted to specific domains, maintained by communities of users, could emerge as a viable alternative to the giant frontier models. He argues for public investment in national or multinational AI research resources — a "CERN for AI" — to democratize access.

The part that maps to the Jevons Paradox framing is his acknowledgment that marginal costs of inference will likely decline as infrastructure builds out and more efficient computation is developed. But he's careful to note that so far, no large AI model has even offset its own resource consumption, let alone solved the broader environmental costs.

## Bottom line

This is Tao doing what Tao does — taking something everyone is talking about loosely and applying actual rigor to it. The key ideas that stick:

The gap between "correct" and "valuable" is the defining challenge. AI can produce correct outputs that teach us nothing. The penumbra of human reasoning — the why, the narrative, the intuition — is what makes intellectual work useful, and we don't know how to get AI to produce it or how to function without it.

The Copernican framing is the most mature philosophical position on AI I've encountered. Not worship, not denial, not surrender. Accept it as a peer category of intelligence with different strengths, center your values on human flourishing anyway.

The practical framework (vanilla extract → red team → Copernican coexistence) gives you actual decision-making guidance at each stage.

And the citogenesis problem is a concrete warning that even the most reliable-seeming AI workflows can contaminate themselves in ways that are hard to detect and harder to reverse.

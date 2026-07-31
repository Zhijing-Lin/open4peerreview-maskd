import Link from "next/link";
import { Footer, Header, Screenshot, SectionLabel } from "../../components";

const reviewerShortcuts = [
  [
    "Review Progress",
    "Surfaces completed and missing criteria, ratings, comments, and submission readiness.",
  ],
  [
    "Check All Feedback",
    "Reflects back vague, repeated, unsupported, or potentially mismatched feedback.",
  ],
  [
    "Explain a Criterion",
    "Uses the rubric language and glossary to clarify what a criterion evaluates and what evidence to look for.",
  ],
  [
    "Feedback Refinement",
    "Points out missing criterion alignment, evidence, significance, or an actionable next step.",
  ],
];

const authorShortcuts = [
  [
    "Summarize Feedback",
    "Identifies themes, repeated concerns, and possible revision priorities across comments and rubrics.",
  ],
  [
    "Explain a Comment",
    "Connects a reviewer comment to its criterion and linked evidence without inventing reviewer intent.",
  ],
];

export default function AiChatboxPage() {
  return (
    <>
      <Header active="process" />
      <main>
        <section className="mvp-detail-hero shell">
          <Link className="mvp-back-link" href="/process#expansions">
            ← Back to product expansions
          </Link>
          <h1>AI support that assists reflection—not judgment.</h1>
          <p>
            The optional chatbox helps reviewers and authors understand,
            inspect, and organize information while keeping every evaluation,
            comment, revision, and final decision under human control.
          </p>
        </section>

        <section
          aria-label="AI chatbox summary"
          className="mvp-detail-summary shell"
        >
          <div>
            <span>Interaction</span>
            <strong>Optional and user-initiated</strong>
          </div>
          <div>
            <span>Grounding</span>
            <strong>OER · rubric · criterion · existing feedback</strong>
          </div>
          <div>
            <span>Boundary</span>
            <strong>Advisory only · never authors the review</strong>
          </div>
        </section>

        <section className="expansion-detail-overview ai-detail-overview shell">
          <div>
            <SectionLabel>Design direction</SectionLabel>
            <h2>We narrowed a broad AI exploration to six useful shortcuts.</h2>
            <p>
              Two rounds of testing with experienced academics shifted the
              question from “What can AI do?” to “What support do people
              actually use during a real review task?”
            </p>
          </div>
          <Screenshot
            alt="AI chatbox with shortcuts for review progress, feedback checks, criterion explanation, and refinement"
            className="expansion-detail-hero-shot ai-detail-shot"
            src="/assets/process/expansions/ai-chatbox.png"
          />
        </section>

        <section className="ai-narrowing shell">
          {[
            [
              "01",
              "Explore",
              "Brainstorm criteria ranking, comment checks, term lookup, tone, summaries, matching, and more.",
            ],
            [
              "02",
              "Test",
              "Place candidate functions in the review console and observe what experienced users reach for.",
            ],
            [
              "03",
              "Focus",
              "Keep explanation, completion guidance, quality reflection, and feedback interpretation.",
            ],
          ].map(([number, title, body], index) => (
            <article key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{body}</p>
              {index < 2 && <i aria-hidden="true">→</i>}
            </article>
          ))}
        </section>

        <section className="ai-boundaries shell">
          <div className="expansion-detail-section-heading">
            <SectionLabel>User-defined boundaries</SectionLabel>
            <h2>Four principles determined what the assistant could do.</h2>
          </div>
          <div className="ai-boundary-grid">
            {[
              [
                "Do not create or modify content",
                "The assistant does not edit the OER, write reviewer comments, complete the review, or make revisions for the author.",
              ],
              [
                "Humans retain final authority",
                "Reviewers decide the evidence, rating, and final wording. Authors decide which changes to make.",
              ],
              [
                "Support explanation and overview",
                "AI may clarify criteria, explain terminology, summarize feedback, and surface possible gaps.",
              ],
              [
                "Keep assistance optional",
                "Users choose whether to open the chatbox, which shortcut to use, and how much support they want.",
              ],
            ].map(([title, body], index) => (
              <article key={title}>
                <span>0{index + 1}</span>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="ai-shortcuts shell">
          <div className="expansion-detail-section-heading">
            <SectionLabel>Final feature set</SectionLabel>
            <h2>Six shortcuts support two points in the workflow.</h2>
          </div>
          <div className="ai-shortcut-columns">
            <div>
              <span>Reviewer</span>
              {reviewerShortcuts.map(([title, body]) => (
                <article key={title}>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </article>
              ))}
            </div>
            <div>
              <span>Author</span>
              {authorShortcuts.map(([title, body]) => (
                <article key={title}>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </article>
              ))}
              <aside>
                <strong>Observation, not instruction.</strong>
                <p>
                  Outputs point users back to their own work and source
                  evidence. They do not approve, certify, rate, or rewrite.
                </p>
              </aside>
            </div>
          </div>
        </section>

        <section className="ai-decisions shell">
          <div>
            <span>Built</span>
            <strong>
              Completion guidance · quality nudges · rubric-anchored support
            </strong>
          </div>
          <div>
            <span>Deferred</span>
            <strong>Reviewer matching until profile data is mature</strong>
          </div>
          <div>
            <span>Ruled out</span>
            <strong>Fully AI-generated review content</strong>
          </div>
        </section>

        <section className="mvp-learning expansion-detail-next shell">
          <SectionLabel>Current state</SectionLabel>
          <h2>
            The chatbox is integrated as a starting point for continued
            observation—not treated as the final form.
          </h2>
          <Link className="button button-primary" href="/process#expansions">
            Return to product expansions →
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}

import Link from "next/link";
import { Footer, Header, Screenshot, SectionLabel } from "../../components";

const units = [
  {
    number: "01",
    title: "Review Purpose, Role, and Mindset",
    body: "Reviewers learn why O4PR review matters and how their role supports improvement through standards-based peer review. The focus stays on the resource—not on judging the author or reducing the work to a simple good-or-bad verdict.",
    focus: ["Support improvement", "Review the resource", "Use shared standards"],
  },
  {
    number: "02",
    title: "Single-Point Rubric and Rating Calibration",
    body: "The established standard becomes the anchor for comparing evidence. Reviewers practice distinguishing Does Not Meet, Exemplifies, and Exceeds, while learning why a rating and its narrative explanation must work together.",
    focus: ["Established standard", "Three judgments", "Rating + rationale"],
  },
  {
    number: "03",
    title: "Rubric Structure, Scope, Evidence, and Workflow",
    body: "Reviewers read the full rubric before evaluating criteria, stay within their assigned lens, and connect observations to specific evidence. The unit directly addresses personal preference, rubric skimming, scope drift, and unsupported comments.",
    focus: ["Read the full rubric", "Stay in scope", "Select evidence"],
  },
  {
    number: "04",
    title: "CEWA Feedback Quality Framework",
    body: "Learners compare strong and weak comments, diagnose what is missing, and revise observations into actionable feedback. CEWA connects Criterion alignment, Evidence, Why it matters, and a realistic Action for the author.",
    focus: ["Criterion", "Evidence", "Why it matters", "Action"],
  },
  {
    number: "05",
    title: "Platform Tutorial",
    body: "A guided walkthrough shows reviewers how to enter a review, read the rubric, create highlights and hotspots, link evidence to criteria, complete ratings and comments, check progress, and submit the review.",
    focus: ["Navigate", "Annotate", "Link evidence", "Submit"],
  },
];

export default function PreTrainingPage() {
  return (
    <>
      <Header active="process" />
      <main>
        <section className="mvp-detail-hero shell">
          <Link className="mvp-back-link" href="/process#expansions">
            ← Back to product expansions
          </Link>
          <h1>Preparing reviewers before they enter a live review.</h1>
          <p>
            The course builds a shared understanding of the reviewer role,
            single-point rubrics, evidence-based judgment, actionable feedback,
            and the platform workflow.
          </p>
        </section>

        <section
          aria-label="Reviewer pre-training summary"
          className="mvp-detail-summary shell"
        >
          <div>
            <span>Format</span>
            <strong>Five-unit asynchronous course</strong>
          </div>
          <div>
            <span>Learning goal</span>
            <strong>Consistent, evidence-based review</strong>
          </div>
          <div>
            <span>Project state</span>
            <strong>Fully developed · integration pending</strong>
          </div>
        </section>

        <section className="expansion-detail-overview shell">
          <div>
            <SectionLabel>Course architecture</SectionLabel>
            <h2>From reviewer mindset to confident platform use.</h2>
            <p>
              The sequence moves from understanding the purpose of review to
              applying standards, producing author-ready feedback, and
              completing the same actions required in the live platform.
            </p>
          </div>
          <Screenshot
            alt="Open 4 Peer Review Reviewer Essentials course showing Units 1 and 2"
            className="expansion-detail-hero-shot training-detail-shot"
            src="/assets/process/expansions/pre-training.png"
          />
        </section>

        <section className="training-units shell">
          <div className="expansion-detail-section-heading">
            <SectionLabel>Five units</SectionLabel>
            <h2>Each unit prepares one part of the review task.</h2>
          </div>

          <div className="training-unit-list">
            {units.map((unit) => (
              <article className="training-unit" key={unit.number}>
                <div className="training-unit-copy">
                  <span>{unit.number}</span>
                  <h3>{unit.title}</h3>
                  <p>{unit.body}</p>
                </div>
                <figure className="training-unit-visual">
                  <strong>{unit.number}</strong>
                  <div>
                    {unit.focus.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </figure>
              </article>
            ))}
          </div>
        </section>

        <section className="mvp-learning expansion-detail-next shell">
          <SectionLabel>Course outcome</SectionLabel>
          <h2>
            Reviewers enter the platform having already practiced the judgments
            it asks them to make.
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

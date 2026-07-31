import Link from "next/link";
import { Footer, Header, Screenshot, SectionLabel } from "../../components";

const features = [
  {
    number: "01",
    label: "Rubric preamble",
    title: "MVP 2 Prototype: Rubric Preamble",
    body: "Our MVP2 prototype added a preamble to the review console to remind the reviewer of the rubric and its criteria that they will be using to review the OER. This preamble is also accessible to the reviewer at any time during the review process for reference.",
    image: "/assets/process/mvp-2-detail/rubric-preamble.png",
    alt: "MVP 2 rubric introduction showing the accessibility framing and criteria",
  },
  {
    number: "02",
    label: "Adaptive split screen",
    title: "MVP 2 Prototype: Adaptive Split Screen",
    body: "Whereas in MVP 1 the split-screen had to be manually adjusted, in MVP 2 we added three ratio options for the user to choose from, aligning with the dynamic attention shifting and linear review sequence we received feedback on.",
    image: "/assets/process/mvp-2-detail/adaptive-split-screen.png",
    alt: "MVP 2 split-screen workspace with three layout ratio options",
  },
  {
    number: "03",
    label: "Annotation system",
    title: "MVP 2 Prototype: Annotation System",
    body: "The MVP 2 prototype contains a more complete version of the annotation system, which includes links to specific rubric criteria and a full evidence bank.",
    image: "/assets/process/mvp-2-detail/annotation-system.png",
    alt: "MVP 2 annotation form linking selected evidence to a rubric criterion",
  },
  {
    number: "04",
    label: "Single-point rubric",
    title: "MVP 2 Prototype: Single-Point Rubric Design",
    body: "The MVP 2 prototype improves upon the rubric display by preserving the single-point rubric three-column look and allowing for direct commenting within the three columns.",
    image: "/assets/process/mvp-2-detail/single-point-rubric.png",
    alt: "MVP 2 three-column single-point rubric interface",
  },
];

export default function MvpTwoPage() {
  return (
    <>
      <Header active="process" />
      <main>
        <section className="mvp-detail-hero shell">
          <Link className="mvp-back-link" href="/process#prototyping">
            ← Back to the process
          </Link>
          <h1>MVP 2 Testing the full review workflow.</h1>
          <p>
            The foundational prototype expanded the product from a reviewing
            interface into a complete workflow—from author submission and
            reviewer assignment to criterion-linked evidence and a structured
            report.
          </p>
        </section>

        <section className="mvp-detail-summary shell" aria-label="MVP 2 summary">
          <div>
            <span>Scope</span>
            <strong>Submission → review report</strong>
          </div>
          <div>
            <span>Feedback</span>
            <strong>Client meetings + 2 user think-alouds</strong>
          </div>
          <div>
            <span>Purpose</span>
            <strong>Establish the implementation-ready model</strong>
          </div>
        </section>

        <section className="mvp-detail-features shell">
          {features.map((feature) => (
            <article className="mvp-detail-feature" key={feature.number}>
              <div className="mvp-detail-copy">
                <span>{feature.number} · {feature.label}</span>
                <h2>{feature.title}</h2>
                <p>{feature.body}</p>
              </div>
              <Screenshot
                alt={feature.alt}
                className="mvp-detail-slide"
                src={feature.image}
              />
            </article>
          ))}
        </section>

        <section className="mvp-learning shell">
          <SectionLabel>What MVP 2 established</SectionLabel>
          <h2>The prototype became the blueprint for the full-stack build.</h2>
          <p>
            MVP 2 established the core user flow, design system, rubric
            interaction model, evidence organization, and review-report
            structure. Think-aloud testing showed how users interpreted the
            interface in real time and helped us refine criterion navigation,
            evidence placement, and report comprehension.
          </p>
          <div className="mvp-learning-grid">
            <div>
              <span>Review model</span>
              <strong>Evidence, rating, and criterion became one traceable relationship</strong>
            </div>
            <div>
              <span>Workflow model</span>
              <strong>The product now connected submission through feedback delivery</strong>
            </div>
          </div>
          <Link className="button button-primary" href="/process#core-build">
            Continue to the core build →
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}

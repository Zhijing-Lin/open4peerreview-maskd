import Link from "next/link";
import { Footer, Header, Screenshot, SectionLabel } from "../../components";

const features = [
  {
    number: "01",
    label: "Author dashboard",
    title: "MVP 1 Prototype: Author Dashboard",
    body: "Our MVP1 prototype included an author dashboard where authors could keep track of where their submitted OER were in the review process.",
    image: "/assets/process/mvp-1-detail/author-dashboard.png",
    alt: "MVP 1 author dashboard showing OER projects and review status",
  },
  {
    number: "02",
    label: "OER submission",
    title: "MVP 1 Prototype: OER Submission",
    body: "Our MVP1 prototype also included an OER submission mechanism for authors, where they provide a description of their materials, add a resource link, provide copyright information, and select which of the six rubrics they would like their OER to be reviewed against (not shown).",
    image: "/assets/process/mvp-1-detail/oer-submission.png",
    alt: "MVP 1 OER submission form",
  },
  {
    number: "03",
    label: "Reviewer console",
    title: "MVP 1 Prototype: Reviewer Console",
    body: "The core feature designed for in the MVP1 prototype was the reviewer console, a split-screen view that integrates OER content, rubrics, and feedback mechanisms into a single seamless environment. Linked annotations were modeled, as well as the single-point rubric structure using the rubrics provided by the client.",
    image: "/assets/process/mvp-1-detail/reviewer-console.png",
    alt: "MVP 1 reviewer console with a linked annotation",
  },
];

export default function MvpOnePage() {
  return (
    <>
      <Header active="process" />
      <main>
        <section className="mvp-detail-hero shell">
          <Link className="mvp-back-link" href="/process#prototyping">
            ← Back to the process
          </Link>
          <h1>MVP 1 Testing the author-to-reviewer workflow.</h1>
          <p>
            Before building the full platform, we created a working concept to
            test the shape of submission, review, annotation, and feedback
            delivery with clients and representative users.
          </p>
        </section>

        <section className="mvp-detail-summary shell" aria-label="MVP 1 summary">
          <div>
            <span>Scope</span>
            <strong>Author → reviewer</strong>
          </div>
          <div>
            <span>Feedback</span>
            <strong>Client reviews + 2 informal tests</strong>
          </div>
          <div>
            <span>Purpose</span>
            <strong>Validate the core workflow</strong>
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
          <SectionLabel>What testing changed</SectionLabel>
          <h2>The workflow worked, but the review model needed to change.</h2>
          <p>
            Participants understood the basic flow and valued seeing the OER
            and review criteria together. However, the prototype still treated
            feedback like a discussion thread. Annotations were scattered, and
            the relationship among evidence, rating, and criterion was not
            explicit enough.
          </p>
          <div className="mvp-learning-grid">
            <div>
              <span>What we kept</span>
              <strong>Dashboards, submission, and the split-screen workspace</strong>
            </div>
            <div>
              <span>What we changed</span>
              <strong>A criterion-centered model with organized evidence</strong>
            </div>
          </div>
          <Link className="button button-primary" href="/process#prototyping">
            Continue to MVP 2 →
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}

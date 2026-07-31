import Link from "next/link";
import { Footer, Header, Screenshot, SectionLabel } from "../components";

const roles = [
  {
    role: "Authors",
    quote: "Where, exactly, does this feedback apply?",
    pain: "Feedback arrived separately from the OER, making it difficult to connect comments to the original content and turn them into revisions.",
  },
  {
    role: "Reviewers",
    quote: "I keep switching between the resource and the rubric.",
    pain: "Reviewers navigated multiple files and tools while trying to track criteria, capture evidence, and write useful comments.",
  },
  {
    role: "Coordinators",
    quote: "The entire pipeline is managed manually.",
    pain: "Assignments, status tracking, review completeness checks, and author communication depended on email and individual follow-up.",
  },
  {
    role: "Adopters",
    quote: "What does ‘peer reviewed’ actually mean?",
    pain: "Future users rarely saw which dimensions were evaluated, what reviewers found, or whether the author revised the resource.",
  },
];

const gaps = [
  ["Workflow gap", "The review loop was distributed across forms, files, inboxes, and individual workarounds."],
  ["Evidence gap", "Comments and ratings were not consistently connected to specific evidence in the OER."],
  ["Revision gap", "The process largely ended when feedback reached the author, with little support for turning it into concrete revisions."],
  ["Trust gap", "The work and outcomes of peer review remained largely invisible to future adopters."],
];

export default function ProblemPage() {
  return (
    <>
      <Header active="problem" />
      <main>
        <section className="page-hero light-hero shell">
          <p className="hero-kicker">THE PROBLEM</p>
          <h1>
            The resources were open.
            <span className="title-highlight"> The review process was not.</span>
          </h1>
          <p>
            OER can expand access and reduce costs, but educators still need
            confidence in their quality. Yet the review process was
            decentralized and fragmented, and its results rarely reached future
            adopters—making quality difficult to verify and even harder to
            communicate.
          </p>
        </section>

        <section className="old-flow-section">
          <div className="shell">
            <div className="section-heading">
              <SectionLabel>The existing workflow</SectionLabel>
              <h2>One review moved through many disconnected places.</h2>
            </div>
            <Screenshot
              alt="Current OER peer review workflow across disconnected tools"
              className="designed-shot workflow-source-image"
              src="/assets/website-pictures/current-workflow.png"
            />
          </div>
        </section>

        <section className="shell role-pains">
          <div className="section-heading centered">
            <SectionLabel>Four perspectives</SectionLabel>
            <h2>The same fragmented system created different problems.</h2>
          </div>
          <div className="role-pain-grid">
            {roles.map((item, index) => (
              <article className={`role-card role-card-${index + 1}`} key={item.role}>
                <span>0{index + 1}</span>
                <small>{item.role}</small>
                <blockquote>{item.quote}</blockquote>
                <p>{item.pain}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="gap-section">
          <div className="shell gap-grid">
            <div className="gap-intro">
              <SectionLabel>Our synthesis</SectionLabel>
              <h2>We found four connected gaps.</h2>
              <p>
                These were not isolated usability issues. Together, they
                showed the need for one platform connecting review,
                revision, and adoption.
              </p>
            </div>
            <div className="gap-constellation">
              <div className="gap-center">One connected platform</div>
              {gaps.map(([title, body], index) => (
                <article className={`gap-card gap-card-${index + 1}`} key={title}>
                  <span>0{index + 1}</span>
                  <div>
                    <h3>{title}</h3>
                    <p>{body}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="shell problem-to-product">
          <SectionLabel>Design challenge</SectionLabel>
          <h2>
            How might we make peer review usable for reviewers, actionable for
            authors, manageable for coordinators, and visible to adopters?
          </h2>
          <Link className="button button-primary" href="/solution">
            See how our solution responds →
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}

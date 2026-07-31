import {
  Footer,
  Header,
  Screenshot,
} from "../components";

const reviewRoles = [
  ["01", "Author", "Submits an OER"],
  ["02", "Coordinator", "Assigns and approves"],
  ["03", "Reviewer", "Reviews with evidence"],
];

const revisionSteps = [
  ["01", "Review report", "Feedback in context"],
  ["02", "Revision tracking", "Addressed, later, or not addressed"],
  ["03", "Private notes", "Author workspace"],
  ["04", "Revision record", "Documented changes and decisions"],
];

export default function SolutionPage() {
  return (
    <>
      <Header active="solution" />
      <main>
        <section className="solution-page-hero">
          <div className="shell product-hero-grid">
            <aside className="solution-challenge-card">
              <span>DESIGN CHALLENGE</span>
              <h2>
                How might we make peer review usable for reviewers, actionable
                for authors, manageable for coordinators, and visible to
                adopters?
              </h2>
            </aside>
            <div className="solution-hero-copy">
              <p className="hero-kicker">OUR SOLUTION</p>
              <h1>
                One platform for
                <span className="title-highlight">
                  {" "}the full review lifecycle.
                </span>
              </h1>
              <p>
                The Open 4 Peer Review Hub connects evidence-based review,
                human judgment, author revision, and visible quality signals
                for adopters.
              </p>
            </div>
          </div>
        </section>

        <section className="solution-story shell">
          <div className="solution-story-copy">
            <p className="problem-number">PROBLEM 01</p>
            <h2>The review workflow lived across disconnected tools.</h2>
            <p>
              Authors submitted through a form. Coordinators assigned work by
              email. Reviewers moved between the OER, rubric PDFs, notes, and
              submission tools. No one had a shared view of the process.
            </p>
            <h3>Our solution</h3>
            <p>
              Role-based dashboards centralize submission, assignment, review,
              coordinator approval, feedback delivery, and revision in one
              continuous workflow.
            </p>
          </div>
          <div className="solution-role-visual">
            <Screenshot
              alt="Role-based interfaces in the Open 4 Peer Review platform"
              className="designed-shot"
              src="/assets/website-pictures/full-show.png"
            />
            <div className="role-flow" aria-label="Author, coordinator, and reviewer workflow">
              {reviewRoles.map(([number, role, action], index) => (
                <div className={`role-flow-step role-flow-${index + 1}`} key={role}>
                  <span>{number}</span>
                  <div>
                    <b>{role}</b>
                    <small>{action}</small>
                  </div>
                  {index < reviewRoles.length - 1 && <i aria-hidden="true">→</i>}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="solution-story shell reverse">
          <div className="evidence-image">
            <Screenshot
              alt="Add Annotation dialog connecting highlighted OER content to a rubric criterion"
              caption="Each annotation carries evidence into the review report."
              className="designed-shot"
              src="/assets/website-pictures/link-evidence.png"
            />
            <span aria-hidden="true" />
          </div>
          <div className="solution-story-copy">
            <p className="problem-number">PROBLEM 02</p>
            <h2>Feedback was disconnected from the evidence behind it.</h2>
            <p>
              Authors could receive useful comments without knowing which
              paragraph, image, or interaction they referred to. Reviewers also
              had to keep rubric criteria in mind while navigating the resource
              and recording evidence.
            </p>
            <h3>Our solution</h3>
            <p>
              The split-screen review console keeps the OER and rubric visible
              together. Highlights and hotspots link each observation to a
              specific criterion and carry that evidence into the final review
              report.
            </p>
          </div>
        </section>

        <section className="solution-story shell">
          <div className="solution-story-copy">
            <p className="problem-number">PROBLEM 03</p>
            <h2>
              The review process largely ended when feedback reached the author.
            </h2>
            <p>
              Authors received comments but had no shared space to organize
              them, track what they had addressed, or explain their revision
              decisions.
            </p>
            <h3>Our solution</h3>
            <p>
              The Revision Console turns feedback into an actionable workflow.
              Authors can trace comments to the original content, track each
              decision, add private notes, and document how the resource was
              revised.
            </p>
          </div>
          <div className="revision-flow" aria-label="Revision Console workflow">
            {revisionSteps.map(([number, title, detail], index) => (
              <div className={`revision-step revision-step-${index + 1}`} key={title}>
                <span>{number}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{detail}</p>
                </div>
                {index < revisionSteps.length - 1 && <i aria-hidden="true">↓</i>}
              </div>
            ))}
          </div>
        </section>

        <section className="solution-story shell reverse">
          <Screenshot
            alt="Public OER Peer Review Hub prototype"
            caption="The public Hub makes reviewed dimensions visible before adoption."
            className="designed-shot"
            src="/assets/website-pictures/public-hub.png"
          />
          <div className="solution-story-copy">
            <p className="problem-number">PROBLEM 04</p>
            <h2>
              Review ended before revision and remained invisible to adopters.
            </h2>
            <p>
              Authors received feedback without a shared place to organize
              decisions. Even after making improvements, future adopters could
              not see what had been evaluated or changed.
            </p>
            <h3>Our solution</h3>
            <p>
              The OER Peer Review Hub was designed to turn review outcomes into
              a visible quality record. Adopters can see which rubrics and
              criteria were reviewed, when the review took place, how the
              resource changed, and how the author responded—providing
              meaningful context behind the peer-review signal before adoption.
            </p>
          </div>
        </section>

        <section className="solution-cta shell">
          <h2>
            Review becomes evidence.
            <span className="title-highlight"> Evidence becomes trust.</span>
          </h2>
          <a
            className="button button-primary"
            href="http://annotation-platform-seven.vercel.app"
          >
            Explore Our Platform ↗
          </a>
        </section>
      </main>
      <Footer />
    </>
  );
}

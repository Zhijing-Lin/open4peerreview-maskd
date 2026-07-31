/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { Footer, Header, Screenshot, SectionLabel } from "../../components";

export default function RevisionPublicPage() {
  return (
    <>
      <Header active="process" />
      <main>
        <section className="mvp-detail-hero shell">
          <Link className="mvp-back-link" href="/process#expansions">
            ← Back to product expansions
          </Link>
          <h1>Connecting review, revision, and public trust.</h1>
          <p>
            The Revision Console turns feedback into an author-controlled
            workflow. The Public Hub then translates selected review and
            revision outcomes into a quality record adopters can understand.
          </p>
        </section>

        <section
          aria-label="Revision and public page summary"
          className="mvp-detail-summary shell"
        >
          <div>
            <span>Revision Console</span>
            <strong>Integrated into the working platform</strong>
          </div>
          <div>
            <span>Public Hub</span>
            <strong>Interactive high-fidelity prototype</strong>
          </div>
          <div>
            <span>Control</span>
            <strong>Authors choose what and whether to publish</strong>
          </div>
        </section>

        <section className="revision-lifecycle shell">
          {[
            ["01", "Review", "Reviewer feedback arrives with evidence"],
            ["02", "Decide", "Author tracks how each concern will be handled"],
            ["03", "Revise", "Changes happen in the source OER platform"],
            ["04", "Publish", "Selected outcomes become a public trust signal"],
          ].map(([number, title, body], index) => (
            <article key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{body}</p>
              {index < 3 && <i aria-hidden="true">→</i>}
            </article>
          ))}
        </section>

        <section className="revision-console-section shell">
          <div className="expansion-detail-section-heading">
            <SectionLabel>Revision Console</SectionLabel>
            <h2>Feedback becomes a manageable author workflow.</h2>
            <p>
              Authors cannot edit the source OER inside O4PR. Instead, the
              console organizes the work: what needs attention, what changed,
              what will not change, and what should later become public.
            </p>
          </div>

          <div className="revision-console-layout">
            <div className="revision-console-features">
              {[
                [
                  "Private scratchpad",
                  "Capture tasks, questions, and co-author discussions without publishing working notes.",
                ],
                [
                  "Feedback status",
                  "Mark each annotation Addressed, Plan to address later, or Will not address.",
                ],
                [
                  "Private author notes",
                  "Record implementation details such as citations, replacement images, and version changes.",
                ],
                [
                  "Public revision comments",
                  "Explain criterion-level changes in a field clearly labeled as public.",
                ],
                [
                  "Prepare to publish",
                  "Add the updated OER URL, complete required public comments, and review the publication record.",
                ],
              ].map(([title, body], index) => (
                <article key={title}>
                  <span>0{index + 1}</span>
                  <div>
                    <h3>{title}</h3>
                    <p>{body}</p>
                  </div>
                </article>
              ))}
            </div>

            <figure
              aria-label="Author revision console showing feedback tracking and public revision preparation"
              className="revision-console-visual"
            >
              <div className="revision-author">
                <img alt="" src="/assets/roles/author.png" />
                <span>Author workspace</span>
              </div>
              <div className="revision-panel">
                <small>REVISION CONSOLE</small>
                <strong>Track every decision</strong>
                <div>
                  <span>✓ Addressed</span>
                  <span>○ Later</span>
                  <span>— Will not address</span>
                </div>
                <label>Private note</label>
                <p>Added a source and clarified the example.</p>
                <label>Public revision comment</label>
                <p>Revised the explanation and supporting citation.</p>
              </div>
            </figure>
          </div>
        </section>

        <section className="public-hub-section shell">
          <div className="public-hub-copy">
            <SectionLabel>Public Hub</SectionLabel>
            <h2>See the review before you adopt.</h2>
            <p>
              Open licensing explains how a resource may be used; it does not
              show what has been evaluated. The Hub adds a visible,
              rubric-grounded review record without exposing every private
              working detail.
            </p>
            <div className="public-hub-feature-grid">
              {[
                ["Browse", "Filter by discipline, rubric, material type, and license."],
                ["Review coverage", "See exactly which quality dimensions were evaluated."],
                ["Timeline", "Follow review, feedback release, and revision publication."],
                ["Criterion outcomes", "Read ratings beside optional author responses."],
              ].map(([title, body]) => (
                <article key={title}>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </article>
              ))}
            </div>
          </div>
          <Screenshot
            alt="Public OER Peer Review Hub homepage with the message See the review before you adopt"
            className="expansion-detail-hero-shot public-hub-detail-shot"
            src="/assets/process/expansions/public-hub.png"
          />
        </section>

        <section className="visibility-boundary shell">
          <div>
            <span>Private author workspace</span>
            <h3>Detailed feedback stays useful and psychologically safe.</h3>
            <p>
              Inline annotations, scratchpad notes, task tracking, and internal
              revision details remain private.
            </p>
          </div>
          <div>
            <span>Public adoption record</span>
            <h3>High-level outcomes make the review process credible.</h3>
            <p>
              Reviewed rubrics, criterion ratings, timelines, author responses,
              and revision summaries may become public.
            </p>
          </div>
        </section>

        <section className="mvp-learning expansion-detail-next shell">
          <SectionLabel>Closing the loop</SectionLabel>
          <h2>
            Granular feedback supports revision; a concise public record
            supports informed adoption.
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

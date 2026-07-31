/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { Footer, Header, Screenshot, SectionLabel } from "../../components";
import { processDetails } from "../process-details";

type CoreBuildVisualConfig = {
  type: "roles" | "screenshot" | "formats" | "approval";
  alt: string;
  src?: string;
  className?: string;
};

const coreBuildVisuals: CoreBuildVisualConfig[] = [
  {
    type: "roles",
    alt: "",
  },
  {
    type: "screenshot",
    src: "/assets/process/core-build-detail/submission.png",
    alt: "Open 4 Peer Review resource submission flow",
    className: "core-build-submission-shot",
  },
  {
    type: "screenshot",
    src: "/assets/website-pictures/full-show.png",
    alt: "Open 4 Peer Review split-screen workspace with the OER and rubric together",
    className: "core-build-console-shot",
  },
  {
    type: "formats",
    src: "/assets/process/core-build-detail/formats.png",
    alt: "Format choices for OpenStax or Pressbooks, OLI Torus, and PDF",
  },
  {
    type: "approval",
    alt: "",
  },
  {
    type: "screenshot",
    src: "/assets/process/core-build-detail/review-report.png",
    alt: "Structured review report with rubric summary and detailed feedback",
    className: "core-build-report-shot",
  },
];

function CoreBuildVisual({ index }: { index: number }) {
  const visual = coreBuildVisuals[index];

  if (visual.type === "roles") {
    return (
      <figure
        className="core-build-visual core-role-visual"
        aria-label="Author, reviewer, and coordinator dashboards connected through one role switcher"
      >
        <div className="core-role-people">
          {[
            ["Author", "/assets/roles/author.png"],
            ["Reviewer", "/assets/roles/reviewer.png"],
            ["Coordinator", "/assets/roles/coordinator.png"],
          ].map(([role, image]) => (
            <div className={`core-role-person core-role-${role.toLowerCase()}`} key={role}>
              <img alt="" src={image} />
              <span>{role}</span>
            </div>
          ))}
        </div>
        <div className="core-role-switcher">
          <small>ROLE-SPECIFIC WORKSPACE</small>
          <div className="core-role-current">
            <strong>Author</strong>
            <span aria-hidden="true">⌄</span>
          </div>
          <div className="core-role-menu" aria-hidden="true">
            <span>Author</span>
            <span>Reviewer</span>
            <span>Coordinator</span>
          </div>
        </div>
      </figure>
    );
  }

  if (visual.type === "formats") {
    return (
      <figure className="core-build-visual core-format-visual">
        <div className="core-format-heading">
          <small>SELECT A RESOURCE TYPE</small>
          <strong>One entry point, three review paths.</strong>
        </div>
        <img alt={visual.alt} src={visual.src} />
        <div className="core-format-logic">
          <span>In-platform viewer</span>
          <i aria-hidden="true">↔</i>
          <span>Shared evidence model</span>
          <i aria-hidden="true">↔</i>
          <span>Browser extension</span>
        </div>
      </figure>
    );
  }

  if (visual.type === "approval") {
    return (
      <figure
        className="core-build-visual core-approval-visual"
        aria-label="A coordinator checks a completed review and approves it for release"
      >
        <div className="core-approval-person">
          <img alt="" src="/assets/roles/coordinator.png" />
          <span>Coordinator</span>
        </div>
        <div className="core-approval-panel">
          <small>REVIEW QUALITY CHECK</small>
          <strong>Ready to release</strong>
          <ul>
            <li><span>✓</span> All criteria rated</li>
            <li><span>✓</span> Evidence is linked</li>
            <li><span>✓</span> Comments are complete</li>
          </ul>
          <div className="core-approval-action">
            <span aria-hidden="true">✓</span>
            Release to author
          </div>
        </div>
      </figure>
    );
  }

  return (
    <Screenshot
      alt={visual.alt}
      className={`core-build-visual core-build-detail-shot ${visual.className ?? ""}`}
      src={visual.src ?? ""}
    />
  );
}

export default function CoreBuildPage() {
  const detail = processDetails["core-build"];

  return (
    <>
      <Header active="process" />
      <main>
        <section className="mvp-detail-hero shell">
          <Link className="mvp-back-link" href="/process#core-build">
            ← Back to the process
          </Link>
          <h1>{detail.title}</h1>
          <p>{detail.intro}</p>
        </section>

        <section
          className="mvp-detail-summary shell"
          aria-label="Core build summary"
        >
          <div>
            <span>Roles</span>
            <strong>Author · reviewer · coordinator</strong>
          </div>
          <div>
            <span>Core flow</span>
            <strong>Submission → structured review report</strong>
          </div>
          <div>
            <span>Outcome</span>
            <strong>A working, end-to-end review platform</strong>
          </div>
        </section>

        <section className="shell detail-sections core-build-detail-sections">
          {detail.sections.map((section, index) => (
            <article className={`core-build-feature core-build-feature-${index + 1}`} key={section.title}>
              <div className="detail-section-number">0{index + 1}</div>
              <div className="detail-section-copy">
                <SectionLabel>{section.label}</SectionLabel>
                <h2>{section.title}</h2>
                <p>{section.body}</p>
                {section.bullets && (
                  <ul>
                    {section.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                )}
              </div>
              <CoreBuildVisual index={index} />
            </article>
          ))}
        </section>

        <section className="mvp-learning core-build-next shell">
          <Link className="button button-primary" href="/process#expansions">
            Continue to product expansions →
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}

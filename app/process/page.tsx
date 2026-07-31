/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { Footer, Header, Screenshot, SectionLabel } from "../components";
import { ZoomableScreenshot } from "../ZoomableScreenshot";

const stages = [
  ["01", "Discovery", "discovery"],
  ["02", "Prototyping", "prototyping"],
  ["03", "Core build", "core-build"],
  ["04", "Expansions", "expansions"],
  ["05", "Pilot testing", "pilot"],
];

const researchMethods = [
  {
    number: "01",
    type: "literature",
    title: "Literature review",
    stat: "17 sources",
    body: "We synthesized research on Creative Commons licensing, single-point rubrics, effective feedback, peer-review workflows, annotation interfaces, and AI-supported review.",
    takeaway: "Effective feedback must be specific, evidence-based, and connected to a clear revision path.",
    tags: ["CC licensing", "Single-point rubrics", "Effective feedback"],
  },
  {
    number: "02",
    type: "competitive",
    title: "Competitive analysis",
    stat: "6 OER platforms · 2 annotation tools",
    body: "We compared how existing products handle formal review, transparency, portability, and collaborative annotation.",
    takeaway: "No existing platform combined rigorous review, visible evidence, and portable outcomes.",
    tags: [],
  },
  {
    number: "03",
    type: "stakeholder",
    title: "Stakeholder research",
    stat: "19 conversations · 17 participants · 22+ hours",
    body: "Authors, reviewers, coordinators, adopters, client stakeholders, workshop participants, and technical partners described their current workflows and decisions.",
    takeaway: "The same fragmented system created a different problem for every role.",
    tags: ["Authors", "Reviewers", "Coordinators", "Adopters"],
  },
  {
    number: "04",
    type: "technical",
    title: "Technical research",
    stat: "4 priority formats",
    body: "We examined embedding, authentication, rendering, and annotation constraints across Pressbooks, OpenStax, PDF, and OLI Torus.",
    takeaway: "Different content types required different viewers, but could share one review data model.",
    tags: ["Pressbooks", "OpenStax", "PDF", "OLI Torus"],
  },
];

const competitiveLogos = [
  ["Pressbooks", "/assets/research/oer-logos/pressbooks.png", "pressbooks"],
  ["LibreTexts", "/assets/research/oer-logos/libretexts.png", "libretexts"],
  [
    "Open Textbook Library",
    "/assets/research/oer-logos/open-textbook-library.png",
    "open-textbook-library",
  ],
  ["OER Commons", "/assets/research/oer-logos/oer-commons.png", "oer-commons"],
  ["eCampus Ontario", "/assets/research/oer-logos/ecampus.png", "ecampus"],
  ["OpenStax", "/assets/research/oer-logos/openstax.png", "openstax"],
  ["Hypothes.is", "/assets/research/oer-logos/hypothesis.png", "hypothesis"],
  ["Perusall", "/assets/research/oer-logos/perusall.png", "perusall"],
];

function ResearchIcon({ type }: { type: string }) {
  if (type === "literature") {
    return (
      <svg aria-hidden="true" viewBox="0 0 48 48">
        <path d="M8 8h12a7 7 0 0 1 7 7v25H15a7 7 0 0 0-7 4V8Z" />
        <path d="M40 8H28a7 7 0 0 0-7 7v25h12a7 7 0 0 1 7 4V8Z" />
      </svg>
    );
  }

  if (type === "competitive") {
    return (
      <svg aria-hidden="true" viewBox="0 0 48 48">
        <circle cx="21" cy="21" r="14" />
        <path d="M7 21h28M21 7c5 5 7 9 7 14s-2 9-7 14c-5-5-7-9-7-14s2-9 7-14Z" />
        <path d="m32 32 10 10" />
      </svg>
    );
  }

  if (type === "stakeholder") {
    return (
      <svg aria-hidden="true" viewBox="0 0 48 48">
        <circle cx="18" cy="16" r="7" />
        <circle cx="34" cy="19" r="5" />
        <path d="M5 39c1-9 6-14 13-14s12 5 13 14M29 28c7 0 11 4 12 11" />
        <path d="M8 8h8M8 8v7" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" viewBox="0 0 48 48">
      <path d="M18 6v9M30 6v9M14 15h20v7a10 10 0 0 1-10 10 10 10 0 0 1-10-10v-7Z" />
      <path d="M24 32v10M16 42h16" />
      <circle cx="24" cy="22" r="3" />
    </svg>
  );
}

const roles = [
  {
    role: "Authors",
    quote: "Where, exactly, does this feedback apply?",
    pain: "Feedback arrived separately from the OER, making it difficult to connect comments to the original content and turn them into revisions.",
    image: "/assets/roles/author.png",
    alt: "An OER author editing a learning resource",
  },
  {
    role: "Reviewers",
    quote: "I keep switching between the resource and the rubric.",
    pain: "Reviewers navigated multiple files while trying to track criteria, capture evidence, and write useful comments.",
    image: "/assets/roles/reviewer.png",
    alt: "A reviewer comparing a rubric with a learning resource",
  },
  {
    role: "Coordinators",
    quote: "The entire pipeline is managed manually.",
    pain: "Assignments, progress checks, approval, and author communication depended on email and individual follow-up.",
    image: "/assets/roles/coordinator.png",
    alt: "A coordinator organizing review assignments",
  },
  {
    role: "Adopters",
    quote: "What does ‘peer reviewed’ actually mean?",
    pain: "Future users rarely saw what was evaluated, what reviewers found, or whether the resource was revised.",
    image: "/assets/roles/adopter.png",
    alt: "An educator browsing an open educational resource",
  },
];

const gaps = [
  ["Workflow gap", "Forms, files, inboxes, and individual workarounds separated the review loop."],
  ["Evidence gap", "Ratings and comments were not consistently connected to evidence in the OER."],
  ["Revision gap", "Little support existed for turning review feedback into concrete changes."],
  ["Trust gap", "The work and outcomes of review remained invisible to future adopters."],
];

export default function ProcessPage() {
  return (
    <>
      <Header active="process" />
      <main>
        <section className="page-hero process-story-hero shell">
          <p className="hero-kicker">OUR DESIGN PROCESS</p>
          <h1>
            Research and testing shaped
            <span className="title-highlight"> every iteration.</span>
          </h1>
          <p>
            Over seven months, we moved through repeated cycles of discovery,
            prototyping, implementation, and evaluation. Each stage challenged
            an assumption and changed what we built next.
          </p>
        </section>

        <div className="shell process-story-layout">
          <aside className="process-story-nav" aria-label="Process sections">
            <span>Our process</span>
            {stages.map(([number, label, anchor]) => (
              <a href={`#${anchor}`} key={anchor}>
                <small>{number}</small>
                {label}
              </a>
            ))}
          </aside>

          <div className="process-story-content">
            <section className="story-stage" id="discovery">
              <div className="story-stage-heading">
                <div className="story-stage-label">
                  <span>01</span>
                  <SectionLabel>Discovery</SectionLabel>
                </div>
                <h2>
                  Research the OER review process and define the problem space.
                </h2>
                <p>
                  We used four complementary research streams to understand
                  what effective review requires, how existing tools work,
                  where each user struggles, and which technical constraints
                  would shape the platform.
                </p>
              </div>

              <div className="story-subsection discovery-subchapter">
                <SectionLabel>Research</SectionLabel>
                <h3>Four research streams grounded our design decisions.</h3>
                <p className="research-section-intro">
                  We combined theory, product analysis, stakeholder
                  conversations, and technical feasibility research before
                  defining the product opportunity.
                </p>
                <div className="research-direction-grid">
                  {researchMethods.map((item) => (
                    <article
                      className={`research-direction-card research-${item.type}`}
                      key={item.title}
                    >
                      <div className="research-card-top">
                        <div className="research-icon">
                          <ResearchIcon type={item.type} />
                        </div>
                        <span>{item.stat}</span>
                      </div>
                      <small>{item.number}</small>
                      <h4>{item.title}</h4>
                      <p>{item.body}</p>
                      <blockquote>{item.takeaway}</blockquote>
                      {item.type === "competitive" ? (
                        <div
                          aria-label="Platforms analyzed"
                          className="research-logo-cloud"
                        >
                          {competitiveLogos.map(([name, image, slug]) => (
                            <div
                              className={`research-logo-cell research-logo-${slug}`}
                              key={name}
                            >
                              <img alt={name} src={image} />
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="research-tags">
                          {item.tags.map((tag) => (
                            <span key={tag}>{tag}</span>
                          ))}
                        </div>
                      )}
                    </article>
                  ))}
                </div>
              </div>

              <div className="story-subsection discovery-subchapter problem-reframe">
                <SectionLabel>The problem we uncovered</SectionLabel>
                <h3>
                  The resources were open.
                  <span className="title-highlight"> The review process was not.</span>
                </h3>
                <p>
                  OER can expand access and reduce costs, but educators still
                  need confidence in their quality. The review process was
                  decentralized, fragmented, and largely invisible to future
                  adopters.
                </p>
              </div>

              <div className="story-subsection discovery-finding">
                <h3>A single review moved across disconnected tools.</h3>
                <p>
                  Submissions, assignments, review notes, rubrics, and feedback
                  traveled through separate forms, inboxes, and documents.
                </p>
                <ZoomableScreenshot
                  alt="The original OER review workflow across disconnected tools"
                  className="designed-shot process-workflow-shot"
                  src="/assets/website-pictures/current-workflow.png"
                />
              </div>

              <div className="story-subsection discovery-finding" id="role-perspectives">
                <h3>One fragmented workflow created four different user problems.</h3>
                <p>
                  Each role experienced the same disconnected system from a
                  different point in the review lifecycle.
                </p>
                <div className="role-pain-grid process-role-grid">
                  {roles.map((item, index) => (
                    <article className={`role-card role-card-${index + 1}`} key={item.role}>
                      <span>0{index + 1}</span>
                      <small>{item.role}</small>
                      <figure className="role-character">
                        <img alt={item.alt} src={item.image} />
                      </figure>
                      <blockquote>{item.quote}</blockquote>
                      <p>{item.pain}</p>
                    </article>
                  ))}
                </div>
              </div>

              <div className="story-subsection discovery-finding">
                <h3>Four connected gaps shaped the product direction.</h3>
                <p>
                  These were not isolated usability issues. Together, they
                  pointed to the need for one platform connecting review,
                  revision, and adoption.
                </p>
                <div className="process-gap-grid">
                  {gaps.map(([title, body], index) => (
                    <article key={title}>
                      <span>0{index + 1}</span>
                      <h4>{title}</h4>
                      <p>{body}</p>
                    </article>
                  ))}
                </div>
              </div>

              <blockquote className="hmw-callout">
                <div className="hmw-callout-top">
                  <span>Design challenge</span>
                  <Link href="/solution">Check the Solution →</Link>
                </div>
                <strong>
                  How might we make peer review usable for reviewers, actionable
                  for authors, manageable for coordinators, and visible to
                  adopters?
                </strong>
              </blockquote>
            </section>

            <section className="story-stage" id="prototyping">
              <div className="story-stage-heading">
                <div className="story-stage-label">
                  <span>02</span>
                  <SectionLabel>Prototyping</SectionLabel>
                </div>
                <h2>Two prototypes defined the full review workflow.</h2>
                <p>
                  MVP 1 tested the basic author-to-reviewer flow. MVP 2 expanded
                  it into the complete path from submission to a structured
                  review report and reorganized the experience around the
                  single-point rubric.
                </p>
              </div>

              <div className="prototype-story">
                <article>
                  <div className="prototype-copy">
                    <span>MVP 1 · Explore the shape</span>
                    <h3>MVP 1 tested the author-to-reviewer workflow.</h3>
                    <p>
                      We tested dashboards, OER submission, ratings, annotation,
                      and a split-screen review workspace. Feedback came from
                      recurring client reviews and two informal usability
                      sessions. The flow was understandable, but discussion-style
                      comments and scattered annotations did not align closely
                      enough with the single-point rubric.
                    </p>
                    <Link className="prototype-detail-link" href="/process/mvp-1">
                      Explore MVP 1 features →
                    </Link>
                  </div>
                  <Screenshot
                    alt="MVP 1 review workspace with an OER and review console side by side"
                    caption="The exploratory prototype validated the basic author-to-reviewer flow."
                    className="prototype-raw-shot"
                    src="/assets/process/mvp-1-overview.png"
                  />
                </article>

                <article>
                  <div className="prototype-copy">
                    <span>MVP 2 · Validate the full flow</span>
                    <h3>MVP 2 tested the complete review workflow.</h3>
                    <p>
                      MVP 2 replaced MVP 1’s discussion-like feedback model with
                      a review experience structured around the single-point
                      rubric. It added a polished design system, criterion-linked
                      annotations and evidence banks, an adaptive split screen,
                      and a structured review report. Client meetings and two
                      user think-alouds then validated the full path from
                      submission to report, including whether reviewers could
                      organize evidence and authors could understand the
                      resulting feedback.
                    </p>
                    <Link className="prototype-detail-link" href="/process/mvp-2">
                      Explore MVP 2 features →
                    </Link>
                  </div>
                  <Screenshot
                    alt="MVP 2 review workspace with the OER, single-point rubric, and evidence bank"
                    caption="The foundational prototype connected submission, criterion-linked evidence, and the review report."
                    className="prototype-raw-shot prototype-raw-shot-mvp2"
                    src="/assets/process/mvp-2-overview.png"
                  />
                </article>
              </div>
            </section>

            <section className="story-stage" id="core-build">
              <div className="story-stage-heading">
                <div className="story-stage-label">
                  <span>03</span>
                  <SectionLabel>Core build</SectionLabel>
                </div>
                <h2>Build the validated workflow into a working platform.</h2>
                <p>
                  We turned the prototype into an end-to-end system that
                  centralizes submission, assignment, evidence-based review,
                  coordinator review checks, and feedback delivery.
                </p>
              </div>

              <div className="core-loop" aria-label="Core review loop">
                {[
                  [
                    "Author",
                    "Submits an OER",
                    "Adds resource details, licensing, and requested rubrics.",
                  ],
                  [
                    "Coordinator",
                    "Assigns a reviewer",
                    "Matches each requested rubric with an appropriate reviewer.",
                  ],
                  [
                    "Reviewer",
                    "Reviews with evidence",
                    "Accepts the task, rates criteria, and links feedback to the OER.",
                  ],
                  [
                    "Coordinator",
                    "Checks the review",
                    "Confirms completeness, then releases or returns the report.",
                  ],
                  [
                    "Author",
                    "Receives the report",
                    "Views each judgment alongside its comments and evidence.",
                  ],
                ].map(([role, action, detail], index) => (
                  <div key={`${role}-${index}`}>
                    <span>0{index + 1}</span>
                    <b>{role}</b>
                    <strong>{action}</strong>
                    <small>{detail}</small>
                    {index < 4 && <i aria-hidden="true">→</i>}
                  </div>
                ))}
              </div>

              <Link
                className="prototype-detail-link core-build-detail-link"
                href="/process/core-build"
              >
                Explore Core Build Features →
              </Link>
            </section>

            <section className="story-stage" id="expansions">
              <div className="story-stage-heading">
                <div className="story-stage-label">
                  <span>04</span>
                  <SectionLabel>Product expansions</SectionLabel>
                </div>
                <h2>
                  Three expansions supported the work before, during, and after
                  review.
                </h2>
                <p>
                  We added reviewer training before review, optional AI support
                  during review, and tools for revision and public reporting
                  after review—helping reviewers work more consistently,
                  authors turn feedback into action, and adopters understand
                  how each resource was evaluated.
                </p>
              </div>

              <div className="expansion-story-list">
                <article className="expansion-story expansion-story-training">
                  <div className="expansion-story-copy">
                    <SectionLabel>01 · Before review</SectionLabel>
                    <h3>Reviewer pre-training</h3>
                    <p>
                      A five-unit asynchronous course prepares reviewers to
                      apply a single-point rubric consistently, stay within the
                      assigned review lens, select specific evidence, and write
                      feedback authors can use.
                    </p>
                    <Link
                      className="prototype-detail-link"
                      href="/process/pre-training"
                    >
                      Explore Reviewer Pre-training →
                    </Link>
                  </div>
                  <Screenshot
                    alt="Open 4 Peer Review reviewer essentials course"
                    className="expansion-story-shot expansion-training-shot"
                    src="/assets/process/expansions/pre-training.png"
                  />
                </article>

                <article className="expansion-story expansion-story-ai">
                  <div className="expansion-story-copy">
                    <SectionLabel>02 · During review</SectionLabel>
                    <h3>AI Chatbox</h3>
                    <p>
                      An optional, rubric-grounded assistant helps users
                      understand criteria, check progress, reflect on feedback,
                      and summarize existing information. It never rates the
                      OER, writes the review, or replaces human judgment.
                    </p>
                    <Link
                      className="prototype-detail-link"
                      href="/process/ai-chatbox"
                    >
                      Explore the AI Chatbox →
                    </Link>
                  </div>
                  <Screenshot
                    alt="AI chatbox with reviewer shortcuts"
                    className="expansion-story-shot expansion-ai-shot"
                    src="/assets/process/expansions/ai-chatbox.png"
                  />
                </article>

                <article className="expansion-story expansion-story-revision">
                  <div className="expansion-story-copy">
                    <SectionLabel>03 · After review</SectionLabel>
                    <h3>Revision Console &amp; Public Page</h3>
                    <p>
                      The Revision Console helps authors organize feedback,
                      track decisions, and document changes privately. The
                      Public Page then turns selected rubric-level outcomes and
                      author responses into a visible quality signal for
                      adopters.
                    </p>
                    <Link
                      className="prototype-detail-link"
                      href="/process/revision-public"
                    >
                      Explore Revision &amp; Public Trust →
                    </Link>
                  </div>
                  <Screenshot
                    alt="Public OER Peer Review Hub prototype"
                    className="expansion-story-shot expansion-public-shot"
                    src="/assets/process/expansions/public-hub.png"
                  />
                </article>
              </div>
            </section>

            <section className="story-stage" id="pilot">
              <div className="story-stage-heading">
                <div className="story-stage-label">
                  <span>05</span>
                  <SectionLabel>Pilot testing</SectionLabel>
                </div>
                <h2>
                  A real OER workshop tested the core review loop in practice.
                </h2>
                <p>
                  In the NASA-funded REAL Astronomy workshop, reviewers used
                  O4PR to evaluate OpenStax Astronomy and OLI Torus materials
                  across two iterative rounds. The pilot showed how the
                  platform affected real review work—not just prototype use.
                </p>
              </div>

              <div className="pilot-context">
                <article>
                  <span>REAL SETTING</span>
                  <strong>Authentic review work</strong>
                  <p>
                    Reviewers evaluated real astronomy resources for future
                    course integration.
                  </p>
                </article>
                <article>
                  <span>ROUND 1</span>
                  <strong>Validate the core workflow</strong>
                  <p>
                    Compare the platform-assisted experience with the earlier
                    Google Docs-based process.
                  </p>
                </article>
                <article>
                  <span>ROUND 2</span>
                  <strong>Improve evidence capture</strong>
                  <p>
                    Add hotspots and screenshots, then observe how reviewers
                    documented interactive content.
                  </p>
                </article>
              </div>

              <section className="pilot-round pilot-round-one">
                <div className="pilot-round-heading">
                  <SectionLabel>Round 1 · Core workflow</SectionLabel>
                  <h3>
                    Review became faster, more focused, and easier to align
                    with the rubric.
                  </h3>
                  <p>
                    Round 1 tested the working Core Review Loop against the
                    previous document-based workflow. Reviewers reported
                    substantially shorter completion times and clearer support
                    for staying focused on the resource and rubric.
                  </p>
                </div>

                <div className="pilot-round-one-results">
                  <Screenshot
                    alt="Reported task completion time improvement from 45 minutes or more to 10 to 20 minutes"
                    caption="Pilot participants reported 56%–78% shorter review completion times."
                    className="pilot-result-shot pilot-time-shot"
                    src="/assets/process/pilot/round-1-time.png"
                  />
                  <Screenshot
                    alt="Directional usability metrics comparing Google Docs and the O4PR Hub"
                    caption="Directional results favored O4PR for workflow focus, criterion visibility, and rubric alignment."
                    className="pilot-result-shot pilot-usability-shot"
                    src="/assets/process/pilot/round-1-usability.png"
                  />
                </div>

                <div className="pilot-wins">
                  <article>
                    <span>01</span>
                    <h4>Clear completion status</h4>
                    <p>
                      Progress indicators made it obvious what was complete,
                      what remained, and when the review was ready to submit.
                    </p>
                  </article>
                  <article>
                    <span>02</span>
                    <h4>Single-screen review</h4>
                    <p>
                      Keeping the OER and rubric together reduced tab switching
                      and helped reviewers maintain their place and focus.
                    </p>
                  </article>
                  <article>
                    <span>03</span>
                    <h4>Structured feedback</h4>
                    <p>
                      Annotation tags, linked evidence, and a free-note bank
                      made feedback easier to organize by criterion.
                    </p>
                  </article>
                </div>
              </section>

              <section className="pilot-round pilot-round-two">
                <div className="pilot-round-two-copy">
                  <SectionLabel>Round 2 · Interactive evidence</SectionLabel>
                  <h3>
                    Hotspots and screenshots made non-text content reviewable.
                  </h3>
                  <p>
                    Round 2 moved beyond the basic workflow to test interactive
                    OER review in OLI Torus. Reviewers evaluated text, images,
                    videos, activities, and interface elements through the
                    browser extension, allowing us to test whether evidence from
                    a live interactive resource could be captured, linked to a
                    criterion, and revisited in the platform.
                  </p>
                  <p>
                    Round 1 supported text highlights, which worked well for
                    written content but could not precisely locate issues in
                    non-text elements. Round 2 added hotspots with automatic
                    screenshots, enabling reviewers to point directly to visual
                    evidence and preserve its context.
                  </p>
                  <ul>
                    <li>More observations were captured as annotations.</li>
                    <li>Annotations contained more explanatory detail.</li>
                    <li>
                      Feedback shifted from scattered comments toward contextual
                      evidence.
                    </li>
                  </ul>
                </div>
                <Screenshot
                  alt="Round 1 and Round 2 interaction data after adding hotspot and screenshot annotations"
                  caption="Round 2 expanded evidence capture from text highlights to hotspots and embedded visual proof."
                  className="pilot-result-shot pilot-interaction-shot"
                  src="/assets/process/pilot/round-2-interactions.png"
                />
              </section>

              <section className="pilot-takeaway">
                <div>
                  <SectionLabel>What the pilot established</SectionLabel>
                  <h3>
                    The platform made evidence-based review faster, clearer,
                    and easier to complete.
                  </h3>
                </div>
                <div className="pilot-takeaway-list">
                  <p>
                    The pilot validated the side-by-side workspace, visible
                    progress, and criterion-linked feedback.
                  </p>
                  <blockquote>
                    “I would strongly recommend doing it… I think it’s a good
                    tool.”
                  </blockquote>
                </div>
              </section>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

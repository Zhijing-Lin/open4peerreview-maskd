/* eslint-disable @next/next/no-img-element */
import { Footer, Header, SectionLabel } from "../components";

const team = [
  {
    name: "Dimple Lin",
    role: "Project Manager",
    image: "/assets/team/dimple-lin.jpg",
    bio: "Dimple brings experience in project management, instructional design, and learning engineering. She led project planning, timeline management, client communication, and cross-functional coordination, translating stakeholder needs into clear priorities and deliverables. She also led the design of this project website and the development of the reviewer pr-training course, applying learning science to prepare reviewers for evidence-based evaluation and actionable feedback.",
  },
  {
    name: "Kang Tan",
    role: "Product Manager",
    image: "/assets/team/kang-tan.jpg",
    bio: "Kang brings experience in product strategy, user research, and prototyping. He helped define the platform’s scope, user flows, and feature priorities while translating research findings into product requirements and iterative prototypes. He also led the exploration of the AI assistant and sustainability strategy, ensuring that new features supported real user needs while preserving human judgment.",
  },
  {
    name: "Monica Xu",
    role: "Research Lead",
    image: "/assets/team/monica-xu.jpg",
    bio: "Monica brings expertise in user research, usability testing, and data-informed product strategy. She led stakeholder interviews, workflow studies, prototype evaluations, and pilot data analysis across the OER review process, translating findings into personas, design recommendations, and product requirements. She contributed to the design and development of the AI assistant and reviewer pre-training course, while leading the development of Public Review Hub as part of the platform’s sustainability strategy.",
  },
  {
    name: "Sara Liang",
    role: "Design Lead",
    image: "/assets/team/sara-liang.jpg",
    bio: "Sara brings expertise in interaction design, frontend development, and AI-assisted design-to-code workflows. She led design and frontend implementation across the platform's dashboards, review console, and revision workflow, and built the design system that powers them in Next.js and Tailwind. She also developed a discovery-then-build workflow using AI coding tools that let the team move from design decisions into production faster, and led the visual direction of the team's report and other deliverables.",
  },
  {
    name: "Allison Dayton",
    role: "Development Lead",
    image: "/assets/team/allison-dayton.jpg",
    bio: "Allison brings a background in software engineering, data systems, and full-stack development. She led the technical implementation of the platform, including authentication, database architecture, content ingestion, annotation storage, dashboards, and review workflows. She also developed solutions for supporting PDFs, OpenStax, Pressbooks, and OLI Torus, including a browser extension for reviewing secured and interactive content.",
  },
];

export default function TeamPage() {
  return (
    <>
      <Header active="team" />
      <main>
        <section className="page-hero team-hero shell">
          <p className="hero-kicker">TEAM MASK’D</p>
          <h1>
            Five people.
            <span className="title-highlight">
              {" "}One cross-functional product team.
            </span>
          </h1>
          <p>
            We brought together project leadership, product strategy, research,
            design, learning science, and full-stack development to turn an
            open-ended challenge into a research-informed, pilot-tested
            platform.
          </p>
        </section>

        <section className="shell team-profiles" aria-label="Team members">
          {team.map((person, index) => (
            <article className={`profile-row profile-row-${index + 1}`} key={person.name}>
              <div className="profile-person">
                <div className="profile-portrait">
                  <img
                    alt={`${person.name}, ${person.role}`}
                    loading="lazy"
                    src={person.image}
                  />
                </div>
                <h2>{person.name}</h2>
                <span>{person.role}</span>
              </div>
              <p>{person.bio}</p>
            </article>
          ))}
        </section>

        <section className="team-moment shell" aria-label="Team Mask’d together">
          <figure>
            <img
              alt="Team Mask’d and project collaborators gathered together"
              loading="lazy"
              src="/assets/team/team-collaboration.png"
            />
          </figure>
          <div className="team-moment-copy">
            <SectionLabel>Team Mask’d</SectionLabel>
            <h2>Seven months, one shared build.</h2>
            <p>
              Research, product, design, learning science, and development came
              together throughout every stage of the project.
            </p>
          </div>
        </section>

        <section className="partner-band">
          <div className="shell partner-grid">
            <div>
              <SectionLabel>Our collaboration</SectionLabel>
              <h2>Grounded in real OER practice and learning engineering.</h2>
              <p>
                Maricopa brought the Open 4 Peer Review initiative, six
                single-point rubrics, and domain expertise. CMU’s Open Learning
                Initiative brought learning engineering, technology context,
                and a path for continued development.
              </p>
            </div>
            <div className="partner-logos">
              <img
                alt="Carnegie Mellon University, METALS, Open Learning Initiative, and Maricopa Community Colleges"
                loading="lazy"
                src="/assets/team/logos.png"
              />
            </div>
          </div>
        </section>

        <section className="team-close shell">
          <SectionLabel>How we worked</SectionLabel>
          <blockquote>
            Research, design, development, and client collaboration moved in
            parallel.
          </blockquote>
          <p>
            We tested ideas early, shared decisions across roles, and refined
            the scope through research, user feedback, and technical learning.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}

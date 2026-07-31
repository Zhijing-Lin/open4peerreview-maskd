/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { ProcessNavMenu } from "./ProcessNavMenu";

type Page = "home" | "problem" | "solution" | "process" | "team";

export function Header({ active }: { active: Page }) {
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link className="wordmark" href="/" aria-label="Team Mask'd home">
          <span className="wordmark-owl" aria-hidden="true" />
          MASK<span>’</span>D
          <small>
            <span className="o4pr-mark" aria-hidden="true" />
            OPEN 4 PEER REVIEW
          </small>
        </Link>
        <nav aria-label="Primary navigation">
          <Link
            aria-current={active === "home" ? "page" : undefined}
            className={active === "home" ? "active" : ""}
            href="/"
          >
            Home
          </Link>
          <ProcessNavMenu active={active === "process"} />
          <Link
            aria-current={active === "solution" ? "page" : undefined}
            className={active === "solution" ? "active" : ""}
            href="/solution"
          >
            Solution
          </Link>
          <Link
            aria-current={active === "team" ? "page" : undefined}
            className={active === "team" ? "active" : ""}
            href="/team"
          >
            Team
          </Link>
          <a
            className="nav-platform-cta"
            href="http://annotation-platform-seven.vercel.app"
          >
            Try the Platform
          </a>
        </nav>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div>
          <div className="wordmark light">
            <span className="wordmark-owl" aria-hidden="true" />
            MASK<span>’</span>D
          </div>
          <p>
            A METALS capstone project created with Maricopa County Community
            College District and Carnegie Mellon University’s Open Learning
            Initiative.
          </p>
        </div>
        <div className="footer-links">
          <Link href="/">Home</Link>
          <Link href="/solution">Solution</Link>
          <Link href="/process">Process</Link>
          <Link href="/team">Team</Link>
          <a href="http://annotation-platform-seven.vercel.app">
            Try the Platform ↗
          </a>
        </div>
      </div>
    </footer>
  );
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return <div className="eyebrow">{children}</div>;
}

export function ProductFrame() {
  return (
    <div className="product-frame" aria-label="Illustration of the review console">
      <div className="browser-bar">
        <i />
        <i />
        <i />
        <span>Review Console</span>
      </div>
      <div className="product-ui">
        <div className="document-pane">
          <div className="ui-label">OER CONTENT</div>
          <h4>The Life Cycle of Stars</h4>
          <p />
          <p />
          <p className="highlight" />
          <div className="annotation-pin">1</div>
          <p />
          <p className="short" />
        </div>
        <div className="rubric-pane">
          <div className="ui-label">RUBRIC · 4 OF 7</div>
          <h4>Disciplinary Appropriateness</h4>
          <div className="criterion selected">
            <b>04</b>
            <span>Sources and evidence</span>
          </div>
          <div className="rating-row">
            <i />
            <i className="active" />
            <i />
          </div>
          <div className="feedback-box">
            <small>LINKED EVIDENCE</small>
            <p>The source is clearly connected to the claim.</p>
          </div>
          <div className="criterion">
            <b>05</b>
            <span>Currency and relevance</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function WorkflowDiagram({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`workflow-diagram ${compact ? "compact" : ""}`}>
      {[
        ["01", "Author", "Submits an OER"],
        ["02", "Coordinator", "Assigns a reviewer"],
        ["03", "Reviewer", "Reviews with evidence"],
        ["04", "Author", "Receives and revises"],
        ["05", "Adopter", "Sees the quality signal"],
      ].map(([number, role, action], index) => (
        <div className="workflow-step" key={`${role}-${number}`}>
          <span>{number}</span>
          <div>
            <b>{role}</b>
            <small>{action}</small>
          </div>
          {index < 4 && <i aria-hidden="true">→</i>}
        </div>
      ))}
    </div>
  );
}

export function Screenshot({
  src,
  alt,
  caption,
  className = "",
}: {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
}) {
  return (
    <figure className={`screenshot ${className}`}>
      <div>
        <img alt={alt} loading="lazy" src={src} />
      </div>
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}

export function NextCase({
  href,
  label,
  title,
}: {
  href: string;
  label: string;
  title: string;
}) {
  return (
    <Link className="next-case" href={href}>
      <span>{label}</span>
      <strong>{title}</strong>
      <i aria-hidden="true">→</i>
    </Link>
  );
}

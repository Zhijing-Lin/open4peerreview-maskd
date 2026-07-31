/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { Footer, Header, Screenshot } from "./components";

const homeRoles = [
  {
    role: "Author",
    image: "/assets/roles/author.png",
    className: "home-role-author",
  },
  {
    role: "Reviewer",
    image: "/assets/roles/reviewer.png",
    className: "home-role-reviewer",
  },
  {
    role: "Coordinator",
    image: "/assets/roles/coordinator.png",
    className: "home-role-coordinator",
  },
  {
    role: "Adopter",
    image: "/assets/roles/adopter.png",
    className: "home-role-adopter",
  },
];

export default function Home() {
  return (
    <>
      <Header active="home" />
      <main className="home-v2">
        <section className="home-v2-hero">
          <div className="shell home-v2-grid">
            <div className="home-v2-copy">
              <p className="hero-kicker">A PEER REVIEW PLATFORM</p>
              <h1>
                Building trust in
                <span className="title-highlight"> open education.</span>
              </h1>
              <p>
                Open 4 Peer Review Hub turns fragmented OER evaluation into one
                structured, evidence-based process—making feedback actionable
                for authors and quality visible to future adopters.
              </p>
              <div className="home-v2-actions">
                <Link className="button home-process-button" href="/process">
                  Explore Our Process →
                </Link>
                <Link className="button home-solution-button" href="/solution">
                  Check the Solution →
                </Link>
              </div>
            </div>
            <div className="home-v2-visual" aria-label="The four roles connected through the Open 4 Peer Review Hub">
              <Screenshot
                alt="Open 4 Peer Review platform sign-in screen"
                className="designed-shot hero-product-shot home-v2-product"
                src="/assets/website-pictures/product-home.png"
              />
              {homeRoles.map((item) => (
                <figure className={`home-role-orbit ${item.className}`} key={item.role}>
                  <img alt="" src={item.image} />
                  <figcaption>{item.role}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

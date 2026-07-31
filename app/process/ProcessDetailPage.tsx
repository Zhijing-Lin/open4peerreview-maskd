import { Footer, Header, NextCase, Screenshot, SectionLabel } from "../components";
import type { ProcessDetail } from "./process-details";

export function ProcessDetailPage({ detail }: { detail: ProcessDetail }) {
  return (
    <>
      <Header active="process" />
      <main>
        <section className="detail-hero">
          <div className="shell">
            <div className="detail-index">{detail.number}</div>
            <p className="hero-kicker">{detail.label}</p>
            <h1><span className="title-highlight">{detail.title}</span></h1>
            <p>{detail.intro}</p>
          </div>
        </section>

        {detail.image && (
          <section className="shell detail-image">
            <Screenshot
              alt={detail.imageAlt ?? ""}
              caption={detail.imageCaption}
              className="large"
              src={detail.image}
            />
          </section>
        )}

        <section className="shell detail-sections">
          {detail.sections.map((section, index) => (
            <article key={section.title}>
              <div className="detail-section-number">0{index + 1}</div>
              <div className="detail-section-copy">
                <SectionLabel>{section.label}</SectionLabel>
                <h2>{section.title}</h2>
                <p>{section.body}</p>
                {section.bullets && (
                  <ul>
                    {section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                  </ul>
                )}
              </div>
              {index === detail.sections.length - 1 && detail.secondaryImage && (
                <Screenshot alt={detail.secondaryImageAlt ?? ""} src={detail.secondaryImage} />
              )}
            </article>
          ))}
        </section>

        <section className="detail-takeaway">
          <div className="shell">
            <SectionLabel>Key takeaway</SectionLabel>
            <blockquote>{detail.takeaway}</blockquote>
          </div>
        </section>

        <section className="shell detail-next">
          <NextCase {...detail.next} />
        </section>
      </main>
      <Footer />
    </>
  );
}

export type ProcessDetail = {
  label: string;
  number: string;
  title: string;
  intro: string;
  stats: Array<{ value: string; label: string }>;
  image?: string;
  imageAlt?: string;
  imageCaption?: string;
  secondaryImage?: string;
  secondaryImageAlt?: string;
  next: { href: string; label: string; title: string };
  sections: Array<{
    label: string;
    title: string;
    body: string;
    bullets?: string[];
  }>;
  takeaway: string;
};

export const processDetails: Record<string, ProcessDetail> = {
  discovery: {
    number: "01",
    label: "Discovery",
    title: "We reframed the challenge around trust—not access.",
    intro:
      "Our client already had six thoughtfully developed single-point rubrics. The open question was how those standards could become a usable, credible, and sustainable review experience.",
    stats: [
      { value: "19", label: "semi-structured conversations" },
      { value: "17", label: "unique participants" },
      { value: "22+", label: "hours of research" },
      { value: "8", label: "platforms analyzed" },
    ],
    sections: [
      {
        label: "What we studied",
        title: "We looked at the system from four directions.",
        body:
          "Discovery combined literature review, competitive analysis, stakeholder interviews, and technical conversations. This let us study both the quality of peer-review feedback and the practical constraints of delivering it across different OER platforms.",
        bullets: [
          "Effective feedback and single-point rubric research",
          "Six OER platforms and two annotation tools",
          "Authors, reviewers, coordinators, adopters, and technical partners",
          "Integration constraints for Pressbooks, OpenStax, and OLI Torus",
        ],
      },
      {
        label: "What we heard",
        title: "The pain points were different expressions of the same system.",
        body:
          "Reviewers struggled with tool switching. Authors could not locate the content behind a comment. Coordinators manually managed every transition. Adopters were almost entirely absent from the flow.",
        bullets: [
          "Feedback needed to be specific and grounded in observable evidence",
          "Review work needed to remain connected to rubric criteria",
          "The workflow needed a centralized source of truth",
          "A public signal needed to explain what had actually been reviewed",
        ],
      },
      {
        label: "How it changed the direction",
        title: "The product became a workflow system—not an annotation tool.",
        body:
          "Discovery showed that a comment layer alone would not solve the problem. The platform had to connect submission, assignment, evidence collection, structured review, report delivery, revision, and future adoption.",
      },
    ],
    takeaway:
      "The central problem was not the absence of OER or rubrics. It was a fragmented and largely invisible review process.",
    next: {
      href: "/process/prototyping",
      label: "Next chapter",
      title: "Prototyping",
    },
  },
  prototyping: {
    number: "02",
    label: "Prototyping",
    title: "Two prototypes changed the underlying review model.",
    intro:
      "We used low-cost prototypes to test the workflow before committing to a full-stack build. The most important result was not a layout preference—it was a change in how the product represented review.",
    stats: [
      { value: "2", label: "prototype cycles" },
      { value: "4", label: "user testing sessions" },
      { value: "1", label: "rubric-centered model" },
    ],
    image: "/assets/process/mvp-1.png",
    imageAlt: "MVP 1 exploratory review workspace",
    imageCaption: "MVP 1 explored the author-to-reviewer flow and split-screen workspace.",
    secondaryImage: "/assets/process/mvp-2.png",
    secondaryImageAlt: "MVP 2 rubric-centered review workspace",
    sections: [
      {
        label: "MVP 1 · Explore the shape",
        title: "The first prototype made the idea concrete.",
        body:
          "The exploratory prototype included author and reviewer dashboards, submission, a split-screen console, ratings, and annotation. It confirmed the value of keeping content and criteria together, but behaved too much like a discussion tool.",
      },
      {
        label: "What testing revealed",
        title: "Placing a rubric beside the content was not enough.",
        body:
          "The interaction itself needed to reflect the structure of the single-point rubric. Comments could not remain scattered in a thread; evidence, rating, and criterion needed a traceable relationship.",
      },
      {
        label: "MVP 2 · Establish the model",
        title: "Evidence became organized by criterion.",
        body:
          "MVP 2 introduced the evidence bank, aligned the three qualitative rating categories with the rubric, and added the structure of a review report. This became the foundation for implementation.",
        bullets: [
          "Criterion-centered navigation",
          "Annotations linked to specific standards",
          "Evidence bank instead of a general discussion stream",
          "Author-facing structured review report",
        ],
      },
    ],
    takeaway:
      "The rubric could not be one component in the interface. It had to become the organizing logic of the entire review experience.",
    next: {
      href: "/process/core-build",
      label: "Next chapter",
      title: "Core build",
    },
  },
  "core-build": {
    number: "03",
    label: "Core build",
    title: "One platform connected the complete review loop.",
    intro:
      "The Core Review Loop brings submission, assignment, evidence-based evaluation, review checks, and feedback delivery into one continuous workflow.",
    stats: [
      { value: "3", label: "role-based dashboards" },
      { value: "4", label: "supported content formats" },
      { value: "5", label: "connected handoffs" },
    ],
    image: "/assets/website-pictures/product-home.png",
    imageAlt: "Open 4 Peer Review role-based platform dashboard",
    imageCaption:
      "Authors, reviewers, and coordinators work from role-specific dashboards connected by one shared review status.",
    secondaryImage: "/assets/website-pictures/link-evidence.png",
    secondaryImageAlt:
      "Review feedback linked to specific evidence in the OER",
    sections: [
      {
        label: "Centralized workflow",
        title: "Three dashboards created one shared view.",
        body:
          "The author dashboard manages submissions, status, and feedback. The reviewer dashboard manages task acceptance and active reviews. The coordinator dashboard manages assignment, progress, review checks, and report release.",
        bullets: [
          "Authors track Draft, Active, and Completed submissions",
          "Reviewers accept, decline, complete, and revisit assigned work",
          "Coordinators assign reviewers and monitor every handoff",
        ],
      },
      {
        label: "Submission + assignment",
        title: "A submission becomes a managed review task.",
        body:
          "Authors submit the OER, license, subject area, requested rubrics, and reviewer context in one place. Coordinators then assign each requested rubric to an appropriate reviewer, who can accept the task or decline with a recorded reason.",
      },
      {
        label: "Evidence-based review",
        title: "The OER and single-point rubric stay together.",
        body:
          "The split-screen review console keeps the resource on the left and the rubric on the right. Reviewers evaluate each criterion, select a qualitative rating, and connect comments to specific text, images, or interactions.",
        bullets: [
          "Criterion-level progress and completion indicators",
          "Qualitative ratings centered on the established standard",
          "Annotations linked to a criterion and stored as evidence",
          "Independent submission for each completed rubric",
        ],
      },
      {
        label: "Multi-format evidence",
        title: "Different content types share one review structure.",
        body:
          "PDFs, OpenStax, and Pressbooks can be reviewed inside the platform. OLI Torus uses a browser extension for protected and interactive content, capturing text highlights, screenshots, and hotspots that synchronize back to the same evidence model.",
      },
      {
        label: "Coordinator review check",
        title: "Completeness is checked before the author handoff.",
        body:
          "After a reviewer submits a rubric, the coordinator checks whether criteria, ratings, comments, and annotations are complete. The report can be released to the author or returned to the reviewer with an explanation.",
      },
      {
        label: "Structured review report",
        title: "Authors receive every judgment with its evidence.",
        body:
          "The final report organizes ratings, reviewer comments, annotations, and highlighted evidence by rubric and criterion. Authors can move from a comment back to its location in the OER and understand exactly why the reviewer made that judgment.",
      },
    ],
    takeaway:
      "The core loop ends when the author receives a structured review report; revision and public visibility begin in the next product expansion.",
    next: {
      href: "/process/expansions",
      label: "Next chapter",
      title: "Product expansions",
    },
  },
  expansions: {
    number: "04",
    label: "Product expansions",
    title: "We extended the system before and after the review itself.",
    intro:
      "The core loop made review possible. Three additional product directions addressed reviewer readiness, in-task support, author revision, and the missing connection to future adopters.",
    stats: [
      { value: "5", label: "pre-training units" },
      { value: "6", label: "AI shortcuts" },
      { value: "3", label: "expansion areas" },
    ],
    image: "/assets/product/ai-assistant.png",
    imageAlt: "AI assistant integrated into the rubric workspace",
    imageCaption: "The optional AI assistant explains and reflects; it does not author the review.",
    secondaryImage: "/assets/product/public-hub.jpg",
    secondaryImageAlt: "Public OER Hub prototype",
    sections: [
      {
        label: "Reviewer pre-training",
        title: "Build capability before a live review begins.",
        body:
          "A five-unit asynchronous course moves reviewers from role and rubric foundations to evidence selection and actionable feedback. Guided examples, immediate feedback, and the CEWA framework make professional judgment visible and practiceable.",
      },
      {
        label: "AI assistant",
        title: "Offer just-in-time support without replacing expertise.",
        body:
          "Research established a firm boundary: AI may explain criteria, check progress, surface possible gaps, summarize feedback, and explain comments. It may not evaluate the OER, select ratings, or write the review.",
      },
      {
        label: "Revision console + public Hub",
        title: "Separate private improvement work from public trust.",
        body:
          "Authors can organize annotations, track decisions, and write private notes. If they choose to publish, criterion-level outcomes and author responses become a concise public record for adopters—without exposing every granular working comment.",
      },
    ],
    takeaway:
      "Pre-training builds capability, AI provides optional scaffolding, and revision turns review into a visible record of improvement.",
    next: {
      href: "/process/pilot",
      label: "Next chapter",
      title: "Pilot testing",
    },
  },
  pilot: {
    number: "05",
    label: "Pilot testing",
    title: "Real reviewers tested the core loop with real astronomy content.",
    intro:
      "The REAL Astronomy workshop moved evaluation beyond prototype walkthroughs. Participants reviewed OpenStax Astronomy and OLI Torus materials over two iterative rounds.",
    stats: [
      { value: "2", label: "pilot rounds" },
      { value: "6", label: "participants" },
      { value: "16→38", label: "annotations" },
      { value: "43→100", label: "characters per annotation" },
    ],
    image: "/assets/process/pilot-metrics.png",
    imageAlt: "Radar chart comparing workflow focus and rubric visibility",
    imageCaption: "Directional survey metrics comparing the existing workflow with the O4PR Hub.",
    sections: [
      {
        label: "What the pilot tested",
        title: "We measured workflow, usability, and annotation behavior.",
        body:
          "The pilot examined completion time, rubric visibility, feedback organization, and friction points. Round 2 introduced screenshot and hotspot annotation for interactive content.",
      },
      {
        label: "Directional evidence",
        title: "Participants reported a clearer and faster review experience.",
        body:
          "Three of six participants completed the voluntary survey. They reported shorter completion times and valued the obvious completion indicator, single-screen workspace, and clearer feedback categorization. The small sample makes these formative signals—not generalizable proof.",
      },
      {
        label: "What still needed work",
        title: "The pilot exposed the next production priorities.",
        body:
          "Participants needed comments for every rating category, richer feedback formatting, a Not Applicable option, clearer annotation onboarding, and more reliable PDF export.",
        bullets: [
          "Add comments for Exemplifies",
          "Support rich text, links, and media",
          "Clarify criterion linking and annotation onboarding",
          "Improve report export and continued UI polish",
        ],
      },
    ],
    takeaway:
      "The pilot validated the direction while making the remaining usability and production gaps concrete.",
    next: {
      href: "/solution",
      label: "Continue",
      title: "Explore the solution",
    },
  },
};

import { about_Data } from "@/data/about";

export function AboutPhilosophy() {
  const principles = [
    {
      num: "01",
      title: "Systematic Troubleshooting",
      subtitle: "Tracing data over quick fixes",
      text: "I debug by mapping systemic data paths across the client application, API layer, and database. This keeps fixes architecture-safe rather than just patching immediate syntax errors.",
      focus: [
        "End-to-End Data Tracing",
        "Root-Cause Analysis",
        "Database Seeding Integrity",
      ],
    },
    {
      num: "02",
      title: "Systems-Level Thinking",
      subtitle: "Hardware & software synergy",
      text: "My Computer Engineering training guides how I write high-level JavaScript and Python. I assess how operations impact memory usage, network communications, and execution latency.",
      focus: [
        "Computer Architecture",
        "Resource Management",
        "Network Latency & Communication",
      ],
    },
    {
      num: "03",
      title: "Practical User Value",
      subtitle: "Reliable logic over complex code",
      text: "I build feature sets around functional reliability. Beautiful frontends and advanced recommendation algorithms are only useful if the backend database pipeline handles queries reliably.",
      focus: [
        "Full-Stack Integrity",
        "Intuitive Interface Flow",
        "Pragmatic Engineering",
      ],
    },
    {
      num: "04",
      title: "AI as a Pragmatic Utility",
      subtitle: "Automation for real-world tasks",
      text: "I view AI frameworks as automated problem-solvers rather than trend features. My goal centers on applying image analytics and computer vision models to optimize workflows.",
      focus: [
        "Computer Vision Analytics",
        "PyTorch Matrix Logic",
        "Workflow Automation",
      ],
    },
  ];

  return (
    <section className="mx-auto max-w-7xl py-12 px-4 sm:px-6">
      {/* Header section */}
      <div className="mb-10 border-b border-app-border pb-5">
        <span className="font-mono text-xs uppercase tracking-widest text-app-brand font-bold">
          Core Mindset
        </span>
        <h2 className="mt-1 text-2xl font-bold tracking-tight text-app-heading sm:text-3xl">
          Engineering Philosophy
        </h2>
      </div>

      {/* Grid Stack */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
        {principles.map((p) => (
          <article
            key={p.num}
            className="group flex flex-col justify-between rounded-xl border border-app-border bg-muted/20 p-6 transition-all duration-200 hover:border-app-brand/40 hover:bg-muted/40 md:p-8"
          >
            <div>
              {/* Header */}
              <div className="flex items-center gap-3 mb-2">
                <span className="font-mono text-xs font-bold text-app-brand bg-app-brand/10 px-2 py-0.5 rounded">
                  {p.num}
                </span>
                <h3 className="text-lg font-bold text-app-heading transition-colors group-hover:text-app-brand">
                  {p.title}
                </h3>
              </div>

              {/* Subtitle */}
              <span className="font-mono text-[11px] uppercase tracking-wider text-app-text-muted mb-3 block">
                {p.subtitle}
              </span>

              {/* Core Text */}
              <p className="text-sm leading-relaxed text-app-text/90 antialiased">
                {p.text}
              </p>
            </div>

            {/* Focus List */}
            <div className="mt-5 pt-5 border-t border-app-border/60">
              <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-app-heading block mb-2">
                Core Focus Areas:
              </span>
              <ul className="flex flex-wrap gap-x-4 gap-y-1.5">
                {p.focus.map((term, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-1.5 font-mono text-xs text-app-text-muted"
                  >
                    <span className="h-1 w-1 rounded-full bg-app-brand" />
                    <span>{term}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

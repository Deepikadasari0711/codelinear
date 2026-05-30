const solutions = [
  {
    title: "Core Banking CB7",
    description:
      "CB7 helps your financial institution improve the client experience, automate operations and launch products faster.",
  },
  {
    title: "Digital Banking N7",
    description:
      "N7 brings strategy, human-centered design and technology together for modern mobile-first banking.",
  },
  {
    title: "Open Banking",
    description:
      "Secure API banking helps teams connect ecosystems, gain actionable insights and build new revenue channels.",
  },
  {
    title: "Loan Origination System",
    description:
      "Digitize onboarding, approvals and decisioning with a flexible lending experience for customers and teams.",
  },
  {
    title: "Loan Management System",
    description:
      "Manage loan servicing, collections and lifecycle operations through one configurable platform.",
  },
];

const SolutionSection = () => {
  return (
    <section id="solutions" className="bg-[#020C11] py-18 sm:py-24">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-6 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-[360px_1fr] lg:gap-20">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#71B7FF]">
              Solutions
            </p>
            <h2 className="text-[34px] font-medium leading-tight tracking-[-0.03em] text-white sm:text-5xl">
              All of our solutions are tailor-made to your needs
            </h2>

            <button className="mt-9 rounded-full border border-white/20 px-8 py-4 text-sm font-semibold uppercase tracking-[0.08em] text-white transition hover:border-white/40 hover:bg-white/10">
              REQUEST DEMO
            </button>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {solutions.map((item, index) => (
              <article
                key={item.title}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition hover:border-[#0878FF]/45 hover:bg-white/[0.05]"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15 bg-[#071821] text-sm font-semibold text-[#71B7FF]">
                  0{index + 1}
                </div>

                <h3 className="text-xl font-medium text-white">{item.title}</h3>

                <p className="mt-4 text-sm leading-7 text-[#8A95A5]">
                  {item.description}
                </p>

                <button className="mt-6 text-sm font-semibold uppercase tracking-[0.08em] text-[#138BFF]">
                  LEARN MORE -&gt;
                </button>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;

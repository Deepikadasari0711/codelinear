const insightCards = [
  {
    title: "How to transition from a traditional to a digital bank",
    date: "October 12, 2024",
    featured: true,
  },
  {
    title: "How to transition from a traditional to a digital bank",
    date: "October 12, 2024",
  },
  {
    title: "How to transition from a traditional to a digital bank",
    date: "October 12, 2024",
  },
];

const PatternTile = ({ compact = false }: { compact?: boolean }) => (
  <div
    className={`grid grid-cols-2 gap-3 rounded bg-[#001D35] p-4 ${
      compact ? "h-40 w-40" : "h-full min-h-44 w-full"
    }`}
  >
    {Array.from({ length: 4 }).map((_, index) => (
      <span
        key={index}
        className="relative block rounded bg-[#00B7FF]"
      >
        <span className="absolute left-1/2 top-0 h-full w-3 -translate-x-1/2 rotate-45 rounded bg-[#001D35]" />
        <span className="absolute left-1/2 top-0 h-full w-3 -translate-x-1/2 -rotate-45 rounded bg-[#001D35]" />
      </span>
    ))}
  </div>
);

const StatisticsSection = () => {
  return (
    <section id="resources" className="bg-[#020C11] py-20 sm:py-24">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.4fr]">
          <div>
            <h2 className="max-w-48 text-lg font-medium leading-tight text-white">
              Get yourself up-to-speed on all the things happening in fintech
            </h2>
            <button className="mt-8 rounded border border-white/30 px-8 py-2 text-xs uppercase tracking-normal text-white transition hover:border-white/50 hover:bg-white/10">
              Read all
            </button>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {insightCards.map((card, index) => (
              <article
                key={`${card.title}-${index}`}
                className={`rounded border border-[#123047] bg-[#04131B] p-4 ${
                  card.featured ? "sm:row-span-2" : ""
                }`}
              >
                {card.featured && <PatternTile />}
                <p className={card.featured ? "mt-4 text-xs text-[#00A6FF]" : "text-xs text-[#00A6FF]"}>
                  Blog
                </p>
                <h3 className="mt-2 text-sm font-medium leading-snug text-white">
                  {card.title}
                </h3>
                <p className="mt-2 text-[10px] text-[#6D7F8B]">{card.date}</p>
                <button className="mt-5 w-full rounded border border-white/20 py-2 text-[10px] uppercase tracking-normal text-white/80 transition hover:border-white/40 hover:text-white">
                  View more
                </button>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-24 text-center">
          <h2 className="text-2xl font-medium text-white">Our Case Studies</h2>
        </div>

        <div className="relative mx-auto mt-10 max-w-2xl">
          <div className="absolute left-0 top-10 h-40 w-28 -translate-x-12 rounded bg-[#021522] opacity-70" />
          <div className="absolute right-0 top-10 h-40 w-28 translate-x-12 rounded bg-[#021522] opacity-70" />

          <article className="relative grid overflow-hidden rounded bg-[#031927] shadow-2xl sm:grid-cols-[220px_1fr]">
            <PatternTile compact />

            <div className="p-6 text-left">
              <p className="text-xs uppercase tracking-normal text-[#00A6FF]">Getting Started</p>
              <h3 className="mt-3 max-w-64 text-xl font-medium leading-tight text-white">
                How we help brand reach out to more people
              </h3>
              <p className="mt-4 text-xs text-[#8A95A5]">December</p>
              <button className="mt-6 w-full rounded border border-white/20 py-2 text-[10px] uppercase tracking-normal text-white/80 transition hover:border-white/40 hover:text-white">
                View more
              </button>
            </div>
          </article>

          <div className="mt-6 flex items-center justify-center gap-5">
            <button className="flex h-6 w-6 items-center justify-center rounded-full border border-[#00A6FF] text-[#00A6FF]">
              -
            </button>
            <span className="h-px w-16 bg-[#00A6FF]" />
            <button className="flex h-6 w-6 items-center justify-center rounded-full border border-[#00A6FF] text-[#00A6FF]">
              +
            </button>
          </div>

          <button className="absolute bottom-0 right-0 text-[10px] uppercase tracking-normal text-[#00A6FF] transition hover:text-[#71B7FF]">
            See all
          </button>
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;

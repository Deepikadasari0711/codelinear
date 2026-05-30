const CTASection = () => {
  return (
    <section id="demo" className="bg-[#020C11] py-16">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <div className="grid items-center gap-8 sm:grid-cols-[1fr_auto]">
          <div>
            <h2 className="max-w-sm text-2xl font-medium leading-tight text-white">
              Take the full advantage of going paper-less now.
            </h2>
            <p className="mt-4 max-w-md text-xs leading-5 text-[#8A95A5]">
              N7 helps your financial institution improve the client experience,
              automate procedures, and launch digital banking faster.
            </p>
          </div>

          <div className="flex gap-4">
            <button className="rounded border border-white/30 px-10 py-2 text-[10px] uppercase tracking-wide text-white">
              Contact us
            </button>
            <button className="rounded bg-[#005BFF] px-10 py-2 text-[10px] uppercase tracking-wide text-white">
              Request demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

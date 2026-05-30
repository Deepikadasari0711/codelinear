const productFeatures = [
  "Customer Onboarding",
  "Transaction Processing",
  "Account Management",
  "Risk Management",
];

const ProductsSection = () => {
  return (
    <section className="bg-[#020C11] py-18 sm:py-24">
      <div className="mx-auto max-w-[1200px] space-y-8 px-5 sm:px-6 lg:px-10">
        <article className="grid items-center overflow-hidden rounded-[32px] border border-white/10 bg-[#06131B] lg:grid-cols-2">
          <div className="p-7 sm:p-10 lg:p-12">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#71B7FF]">
              Core banking
            </p>
            <h2 className="text-[32px] font-medium leading-tight tracking-[-0.03em] text-white sm:text-5xl">
              A complete cloud-based core banking.
            </h2>

            <p className="mt-6 max-w-[440px] leading-7 text-[#8A95A5]">
              Seamlessly scalable, secure and ready for financial teams that need
              speed without legacy complexity.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <button className="rounded-full bg-[#0878FF] px-6 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-white">
                REQUEST DEMO
              </button>

              <button className="text-sm font-semibold uppercase tracking-[0.08em] text-[#138BFF]">
                LEARN MORE -&gt;
              </button>
            </div>
          </div>

          <div className="min-h-[280px] bg-[#0A1B25] p-5 sm:p-8">
            <img
              src="/images/dashboard-1.png"
              alt="Core banking dashboard"
              className="h-full w-full rounded-2xl object-contain"
            />
          </div>
        </article>

        <article className="grid items-center overflow-hidden rounded-[32px] border border-white/10 bg-[#06131B] lg:grid-cols-2">
          <div className="order-2 min-h-[280px] bg-[#0A1B25] p-5 sm:p-8 lg:order-1">
            <img
              src="/images/dashboard-2.png"
              alt="Digital banking dashboard"
              className="h-full w-full rounded-2xl object-contain"
            />
          </div>

          <div className="order-1 p-7 sm:p-10 lg:order-2 lg:p-12">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#71B7FF]">
              Connected operations
            </p>
            <h2 className="text-[30px] font-medium leading-tight tracking-[-0.03em] text-white sm:text-4xl">
              Run a more efficient, flexible and digitally connected core banking.
            </h2>

            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {productFeatures.map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-[#A9B4C2]">
                  <span className="h-2 w-2 rounded-full bg-[#138BFF]" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </article>
      </div>
    </section>
  );
};

export default ProductsSection;

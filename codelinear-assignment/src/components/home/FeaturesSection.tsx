const featureList = [
  "Customer Onboarding",
  "Digital Wallet",
  "Transaction Monitoring",
  "Payment Processing",
];

const operations = [
  "Personalized Customer Experiences",
  "Better Customer Service",
  "Cloud-Native Architecture",
];

const services = [
  "Quantitative and Payment Consulting",
  "Digital Transformation Services",
  "Operational Improvement Solutions",
];

const CheckItem = ({ children }: { children: string }) => (
  <li className="flex items-start gap-3 text-[#374151]">
    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#0878FF]" />
    <span>{children}</span>
  </li>
);

const FeaturesSection = () => {
  return (
    <section className="bg-[#EEF3F7] py-18 sm:py-24">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-6 lg:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_320px_1fr]">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#0878FF]">
              Digital banking
            </p>
            <h2 className="text-[36px] font-medium leading-tight tracking-[-0.04em] text-[#06131B] sm:text-5xl">
              Digital banking out-of-the-box
            </h2>

            <p className="mt-6 max-w-[420px] leading-7 text-[#6B7280]">
              Fast, modern and scalable digital banking for customers who expect
              every financial service to feel instant.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <button className="rounded-full bg-[#0878FF] px-6 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-white">
                REQUEST DEMO
              </button>

              <button className="text-sm font-semibold uppercase tracking-[0.08em] text-[#0878FF]">
                LEARN MORE -&gt;
              </button>
            </div>
          </div>

          <div className="flex justify-center">
            <img
              src="/images/mobile-1.png"
              alt="N7 mobile banking app"
              className="w-[220px] drop-shadow-[0_30px_45px_rgba(2,12,17,0.25)] sm:w-[260px]"
            />
          </div>

          <ul className="space-y-4 rounded-[28px] bg-white p-7 shadow-[0_24px_60px_rgba(15,23,42,0.08)]">
            {featureList.map((item) => (
              <CheckItem key={item}>{item}</CheckItem>
            ))}
          </ul>
        </div>

        <div className="mt-20 grid items-center gap-12 lg:mt-32 lg:grid-cols-2">
          <div>
            <h3 className="text-[30px] font-medium tracking-[-0.03em] text-[#06131B] sm:text-[40px]">
              No legacy IT systems
            </h3>

            <p className="mt-5 max-w-[520px] leading-7 text-[#6B7280]">
              Build modern digital experiences quickly and efficiently with
              configurable modules and cloud-native delivery.
            </p>

            <ul className="mt-8 space-y-4">
              {operations.map((item) => (
                <CheckItem key={item}>{item}</CheckItem>
              ))}
            </ul>
          </div>

          <div className="flex justify-center rounded-[32px] bg-white p-8 shadow-[0_24px_60px_rgba(15,23,42,0.08)]">
            <img
              src="/images/mobile-2.png"
              alt="Mobile app account screen"
              className="w-[220px] sm:w-[260px]"
            />
          </div>
        </div>

        <div className="mt-20 grid items-center gap-12 lg:mt-32 lg:grid-cols-2">
          <div className="order-2 flex justify-center rounded-[32px] bg-white p-8 shadow-[0_24px_60px_rgba(15,23,42,0.08)] lg:order-1">
            <img
              src="/images/mobile-3.png"
              alt="Mobile app payment screen"
              className="w-[220px] sm:w-[260px]"
            />
          </div>

          <div className="order-1 lg:order-2">
            <h3 className="text-[30px] font-medium tracking-[-0.03em] text-[#06131B] sm:text-[40px]">
              No traditional boundaries
            </h3>

            <p className="mt-5 max-w-[520px] leading-7 text-[#6B7280]">
              Create digital-first banking experiences with the flexibility to
              expand services across customers, partners and channels.
            </p>

            <ul className="mt-8 space-y-4">
              {services.map((item) => (
                <CheckItem key={item}>{item}</CheckItem>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

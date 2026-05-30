import Image from "next/image";
import { IoArrowForward } from "react-icons/io5";
import Button from "../common/Button";

const metrics = [
  "Customer Onboarding",
  "Transaction Processing",
  "Account Management",
  "Risk Management",
];

const ProductsSection = () => {
  return (
    <section className="relative w-[1440px] overflow-hidden bg-[#020C11]">
      <article className="relative h-[540px] overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-[138px] top-[18px] select-none text-[520px] font-normal leading-[0.72] tracking-normal text-transparent opacity-90 [-webkit-text-stroke:1px_rgba(0,118,206,0.22)]"
        >
          CB7
        </div>

        <div className="absolute left-[66px] top-[134px] z-10">
          <h2 className="w-[430px] text-[32px] font-normal leading-[1.16] tracking-normal text-[#EAF4FB]">
            A complete cloud-based
            <br />
            core banking.
          </h2>

          <p className="mt-[18px] w-[360px] text-[14px] leading-[1.5] text-[#B9C5CB]">
            Faster time to market with our cloud-based
            <br />
            core banking services
          </p>

          <div className="mt-[28px]">
            <Button
              href="#demo"
              variant="primary"
              className="h-[34px] min-w-[110px] rounded-[4px] border-transparent bg-[linear-gradient(90deg,#08B8FF_0%,#0049E8_100%)] px-4 text-[10px] font-normal"
            >
              REQUEST DEMO
            </Button>
          </div>

          <a
            href="#resources"
            className="mt-[24px] inline-flex items-center gap-2 text-[12px] font-normal uppercase tracking-normal text-[#00B7FF] transition hover:text-[#6BD7FF]"
          >
            LEARN MORE
            <IoArrowForward className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>

        <div className="absolute left-[804px] top-[74px] z-10 h-[350px] w-[595px] rounded-[10px] border border-[#00A6FF] p-[6px]">
          <Image
            src="/images/dashboard-1.png"
            alt="AML dashboard"
            width={1063}
            height={810}
            sizes="595px"
            className="h-full w-full rounded-[5px] object-cover object-left-top"
          />
        </div>

        <div
          aria-hidden="true"
          className="absolute left-[752px] top-[405px] z-20 h-[34px] w-[620px] rounded-[10px] border border-[#00A6FF]"
        />
      </article>

      <article className="relative h-[520px] overflow-hidden">
        <div className="absolute -left-[118px] top-[34px] h-[625px] w-[858px] overflow-hidden rounded-[10px] border border-[#00A6FF] p-[8px]">
          <Image
            src="/images/dashboard-2.png"
            alt="CKYC dashboard"
            width={1062}
            height={809}
            sizes="858px"
            className="h-full w-full rounded-[7px] object-cover object-left-top"
          />
        </div>

        <div
          aria-hidden="true"
          className="absolute -left-[56px] top-[472px] h-[44px] w-[880px] rounded-r-[12px] border border-l-0 border-[#00A6FF]"
        />

        <div className="absolute left-[790px] top-[78px]">
          <p className="w-[330px] text-[16px] leading-[1.35] text-[#DCE9EF]">
            Run a more efficient, flexible and digitally
            <br />
            connected core banking system
          </p>

          <ul className="mt-[30px] grid w-[430px] grid-cols-2 gap-x-[42px] gap-y-[14px]">
            {metrics.map((metric) => (
              <li key={metric} className="flex items-start gap-3 text-[11px] leading-[1.4] text-[#A9B8C0]">
                <span className="mt-[5px] h-[6px] w-[6px] shrink-0 rounded-full bg-[#00B7FF]" />
                {metric}
              </li>
            ))}
          </ul>
        </div>
      </article>
    </section>
  );
};

export default ProductsSection;

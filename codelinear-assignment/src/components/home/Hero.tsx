import Button from "../common/Button";
import TrustedCompanies from "./TrustedCompanies";
import {
  IoArrowUpOutline,
  IoGridOutline,
  IoNotificationsOutline,
  IoWalletOutline,
} from "react-icons/io5";
import { TbMoneybag } from "react-icons/tb";

const activityFilters = ["This Day", "This Week", "This Month", "6 Month"];

const Hero = () => {
  return (
    <section className="relative h-[947px] w-[1920px] overflow-hidden bg-[#020C11]">
      <div className="absolute bottom-[-180px] right-[-80px] h-[760px] w-[920px] rounded-full bg-[#003C78]/70 blur-[120px]" />

      <div className="absolute left-[112px] top-[356px]">
        <h1 className="w-[980px] text-[108px] font-normal leading-[1.2] tracking-[-0.035em] text-[#EAF4FB]">
          The new foundation
          <br />
          of modern banking
        </h1>

        <p className="mt-[34px] w-[620px] text-[26px] leading-[1.28] text-[#B9C5CB]">
          We drive innovation and growth, provide seamless
          <br />
          customer experience and operational excellence
        </p>

        <div className="mt-[86px] flex gap-[32px]">
          <Button
            href="#demo"
            variant="primary"
            className="h-[80px] min-w-[342px] rounded-xl text-[24px] font-normal tracking-wide"
          >
            REQUEST DEMO
          </Button>

          <Button
            href="#about"
            className="h-[80px] min-w-[338px] rounded-xl text-[24px] font-normal tracking-wide"
          >
            CONTACT US
          </Button>
        </div>

        <TrustedCompanies />
      </div>

      <div className="absolute left-[1052px] top-[476px] h-[490px] w-[590px] overflow-hidden rounded-[34px] shadow-2xl">
        <img
          src="/images/Hero-Image.jpg"
          alt="Customer using N7 banking"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="absolute left-[1268px] top-[727px] w-[410px] rounded-3xl border-8 border-[#6F7B80] bg-zinc-100/90 p-4 shadow-2xl backdrop-blur-sm">
        <h3 className="text-[20px] font-bold text-zinc-950">Recent activity</h3>

        <div className="mt-[24px] flex justify-between gap-4 text-[12px] font-medium text-zinc-950">
          {activityFilters.map((filter, index) => (
            <span
              key={filter}
              className={`shrink-0 rounded-full px-4 py-2 ${
                index === 1 ? "bg-[#001B72] text-white" : "bg-white"
              }`}
            >
              {filter}
            </span>
          ))}
        </div>

        <div className="mt-[20px] flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-500 text-white">
              <IoArrowUpOutline className="h-7 w-7" aria-hidden="true" />
            </span>
            <div>
              <p className="text-[16px] font-bold text-zinc-950">
                To Jin <span className="font-normal text-zinc-500">. Work</span>
              </p>
              <p className="mt-1 text-[12px] text-zinc-600">12 jun 2022</p>
            </div>
          </div>

          <p className="text-[16px] font-black text-zinc-950">-$59</p>
        </div>

        <div className="mt-4 h-px bg-zinc-300" />
      </div>

      <div className="absolute left-[1486px] top-[518px] w-[340px] rounded-3xl border-8 border-[#6F7B80] bg-zinc-200/90 p-5 shadow-2xl backdrop-blur-sm">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <img
              src="/images/Hero-Image.jpg"
              alt="Toni Kross"
              className="h-11 w-11 rounded-full object-cover"
            />
            <div>
              <h3 className="text-[16px] font-bold text-zinc-950">Toni Kross</h3>
              <p className="text-[12px] text-zinc-600">Good Morning</p>
            </div>
          </div>
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/60 text-zinc-900">
            <IoNotificationsOutline className="h-5 w-5" aria-hidden="true" />
          </span>
        </div>

        <p className="mt-6 text-[14px] text-zinc-600">Total balance</p>
        <h2 className="mt-2 text-[24px] font-black text-blue-900">$42,295.00 USD</h2>

        <div className="mt-6 grid grid-cols-3 gap-6 border-t border-zinc-300 pt-6">
          <button className="flex flex-col items-center gap-3 text-[12px] font-bold text-zinc-950">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/50">
              <IoWalletOutline className="h-6 w-6" aria-hidden="true" />
            </span>
            Fund Transfer
          </button>

          <button className="flex flex-col items-center gap-3 text-[12px] font-bold text-zinc-950">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/50">
              <TbMoneybag className="h-6 w-6" aria-hidden="true" />
            </span>
            Add Money
          </button>

          <button className="flex flex-col items-center gap-3 text-[12px] font-bold text-zinc-950">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/50">
              <IoGridOutline className="h-6 w-6" aria-hidden="true" />
            </span>
            More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

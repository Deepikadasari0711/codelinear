import Image from "next/image";
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

const quickActions = [
  { label: "Fund Transfer", icon: IoWalletOutline },
  { label: "Add Money", icon: TbMoneybag },
  { label: "More", icon: IoGridOutline },
];

const BalancePreview = () => {
  return (
    <div className="absolute left-[1318px] top-[322px] z-20 w-[270px] rounded-[16px] border-[6px] border-[#6F7B80] bg-zinc-100/95 p-3 text-zinc-950 shadow-[0_32px_80px_rgba(0,0,0,0.28)] backdrop-blur-md">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="relative h-8 w-8 overflow-hidden rounded-full">
            <Image
              src="/images/Hero-Image.jpg"
              alt="N7 customer profile"
              fill
              sizes="44px"
              className="object-cover"
            />
          </div>
          <div>
            <h3 className="text-[12px] font-bold leading-tight">Toni Kross</h3>
            <p className="mt-1 text-[9px] leading-tight text-zinc-600">Good Morning</p>
          </div>
        </div>

        <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/70 text-zinc-900">
          <IoNotificationsOutline className="h-4 w-4" aria-hidden="true" />
        </span>
      </div>

      <p className="mt-4 text-[10px] text-zinc-600">Total balance</p>
      <h2 className="mt-1 text-[19px] font-black leading-tight text-[#082170]">
        $42,295.00 USD
      </h2>

      <div className="mt-4 grid grid-cols-3 gap-3 border-t border-zinc-300 pt-4">
        {quickActions.map((action) => {
          const Icon = action.icon;

          return (
            <button
              key={action.label}
              className="flex min-w-0 flex-col items-center gap-2 text-center text-[8px] font-bold leading-tight text-zinc-950"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-white/60">
                <Icon className="h-4 w-4" aria-hidden="true" />
              </span>
              <span>{action.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

const ActivityPreview = () => {
  return (
    <div className="absolute left-[720px] top-[655px] z-30 w-[340px] rounded-[16px] border-[6px] border-[#6F7B80] bg-zinc-100/95 p-3 text-zinc-950 shadow-[0_32px_80px_rgba(0,0,0,0.28)] backdrop-blur-md">
      <h3 className="text-[17px] font-bold leading-tight">Recent activity</h3>

      <div className="mt-4 flex justify-between gap-2 text-[10px] font-medium">
        {activityFilters.map((filter, index) => (
          <span
            key={filter}
            className={`shrink-0 rounded-full px-3 py-[7px] ${
              index === 1 ? "bg-[#082170] text-white" : "bg-white"
            }`}
          >
            {filter}
          </span>
        ))}
      </div>

      <div className="mt-4 flex items-center justify-between gap-3">
        <div className="flex min-w-0 items-center gap-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#8B73F4] text-white">
            <IoArrowUpOutline className="h-6 w-6" aria-hidden="true" />
          </span>
          <div>
            <p className="text-[14px] font-bold leading-tight">
              To Jin <span className="font-normal text-zinc-500">. Work</span>
            </p>
            <p className="mt-1 text-[10px] text-zinc-600">12 jun 2022</p>
          </div>
        </div>

        <p className="shrink-0 text-[14px] font-black">-$59</p>
      </div>
    </div>
  );
};

const Hero = () => {
  return (
    <section className="relative isolate h-[900px] w-[1440px] overflow-hidden bg-[#020C11]">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_88%_65%,rgba(0,78,145,0.56)_0%,rgba(0,45,85,0.28)_24%,rgba(2,12,17,0)_52%)]" />

      <div className="absolute left-[66px] top-[242px] z-10">
        <h1 className="w-[700px] text-[64px] font-normal leading-[1.14] tracking-normal text-[#EAF4FB]">
          The new foundation
          <br />
          of modern banking
        </h1>

        <p className="mt-[34px] w-[570px] text-[20px] leading-[1.36] text-[#B9C5CB]">
          We drive innovation and growth, provide seamless
          <br />
          customer experience and operational excellence
        </p>

        <div className="mt-[76px] flex gap-[30px]">
          <Button
            href="#demo"
            variant="primary"
            className="h-[58px] min-w-[216px] rounded-lg border-transparent bg-[linear-gradient(90deg,#08B8FF_0%,#0049E8_100%)] text-[16px] font-normal"
          >
            REQUEST DEMO
          </Button>

          <Button
            href="#about"
            className="h-[58px] min-w-[216px] rounded-lg text-[16px] font-normal"
          >
            CONTACT US
          </Button>
        </div>

        <TrustedCompanies />
      </div>

      <div className="absolute left-[938px] top-[328px] h-[452px] w-[545px] overflow-hidden rounded-[28px] shadow-[0_32px_90px_rgba(0,0,0,0.34)]">
        <Image
          src="/images/Hero-Image.jpg"
          alt="Customer using N7 banking"
          fill
          priority
          sizes="545px"
          className="object-cover object-center"
        />
      </div>

      <BalancePreview />
      <ActivityPreview />
    </section>
  );
};

export default Hero;

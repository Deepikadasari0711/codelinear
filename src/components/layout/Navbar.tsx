import Button from "../common/Button";
import { IoChevronDown } from "react-icons/io5";

const navItems = [
  { label: "SOLUTIONS", href: "#solutions", hasChevron: true },
  { label: "RESOURCES", href: "#resources", hasChevron: true },
  { label: "ABOUT US", href: "#about" },
];

const Navbar = () => {
  return (
    <nav className="flex h-[70px] w-full items-center justify-between rounded-2xl border border-white/5 bg-[#232828]/95 px-4 shadow-[0_22px_70px_rgba(0,0,0,0.32)] backdrop-blur">
      <a
        href="#"
        className="shrink-0 text-[36px] font-normal leading-none tracking-normal text-[#EAF4FB] transition hover:text-white"
        aria-label="N7 home"
      >
        N7
      </a>

      <div className="flex items-center gap-[32px]">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="flex items-center gap-2 text-[18px] font-normal uppercase tracking-normal text-[#EAF4FB] transition hover:text-white"
          >
            {item.label}
            {item.hasChevron && (
              <IoChevronDown
                className="h-[21px] w-[21px] text-[#EAF4FB]"
                aria-hidden="true"
              />
            )}
          </a>
        ))}
      </div>

      <Button
        href="#demo"
        className="h-[39px] min-w-[242px] rounded-lg px-7 text-[18px] font-normal tracking-normal"
      >
        REQUEST DEMO
      </Button>
    </nav>
  );
};

export default Navbar;

import Button from "../common/Button";
import { IoChevronDown } from "react-icons/io5";

const navItems = [
  { label: "SOLUTIONS", href: "#solutions", hasChevron: true },
  { label: "RESOURCES", href: "#resources", hasChevron: true },
  { label: "ABOUT US", href: "#about" },
];

const Navbar = () => {
  return (
    <nav className="flex h-[76px] w-full items-center justify-between rounded-2xl bg-[#232828] px-[18px] shadow-2xl">
      <a
        href="#"
        className="shrink-0 text-[40px] font-normal leading-none tracking-tight text-[#EAF4FB]"
        aria-label="N7 home"
      >
        N7
      </a>

      <div className="flex items-center gap-[34px]">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="flex items-center gap-2 text-[20px] font-normal uppercase tracking-wide text-[#EAF4FB] transition hover:text-white"
          >
            {item.label}
            {item.hasChevron && (
              <IoChevronDown className="h-[22px] w-[22px] text-[#EAF4FB]" aria-hidden="true" />
            )}
          </a>
        ))}
      </div>

      <Button
        href="#demo"
        className="h-[42px] min-w-[260px] rounded-lg px-8 text-[20px] font-normal tracking-wide"
      >
        REQUEST DEMO
      </Button>
    </nav>
  );
};

export default Navbar;

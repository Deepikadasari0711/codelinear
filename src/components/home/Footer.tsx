const footerGroups = [
  {
    title: "Solutions",
    links: [
      "Core Banking CB7",
      "Digital Banking N7",
      "Open Banking",
      "Loan Origination",
      "Loan Management",
    ],
  },
  {
    title: "N7 Banking",
    links: ["Retail Banking", "SME Banking", "Corporate", "Payments", "Digital Wallet"],
  },
  {
    title: "Our Socials",
    links: ["LinkedIn", "X", "Instagram"],
  },
];

const Footer = () => {
  return (
    <footer id="about" className="bg-[#020C11] pb-10 pt-8">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <div className="grid gap-10 border-t border-white/10 pt-10 lg:grid-cols-[1.1fr_1fr_1fr_0.8fr]">
          <div>
            <h2 className="text-[140px] font-normal leading-none tracking-normal text-[#00B7FF] sm:text-[180px]">
              N7
            </h2>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-xs font-semibold text-white">London</h3>
              <p className="mt-3 text-[10px] leading-5 text-[#8A95A5]">
                Linitis Infosystems Ltd.
                <br />
                20-22 Wenlock Road
                <br />
                London, United Kingdom
              </p>
            </div>
            <div>
              <h3 className="text-xs font-semibold text-white">Dubai</h3>
              <p className="mt-3 text-[10px] leading-5 text-[#8A95A5]">
                Business Bay
                <br />
                Dubai, United Arab Emirates
              </p>
            </div>
          </div>

          {footerGroups.slice(0, 2).map((group) => (
            <div key={group.title}>
              <h3 className="text-xs font-semibold text-white">{group.title}</h3>
              <ul className="mt-4 space-y-2 text-[10px] text-[#8A95A5]">
                {group.links.map((link) => (
                  <li key={link} className="flex items-center justify-between gap-4">
                    {link}
                    <span className="text-[#00A6FF]">+</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="text-xs font-semibold text-white">Our Socials</h3>
            <ul className="mt-4 space-y-2 text-[10px] text-[#8A95A5]">
              {footerGroups[2].links.map((link) => (
                <li key={link} className="flex items-center justify-between gap-4">
                  {link}
                  <span className="text-[#00A6FF]">+</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-5 text-center text-[10px] text-[#607080]">
          Copyright N7 2026. All rights reserved. | Designed and developed for fintech.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

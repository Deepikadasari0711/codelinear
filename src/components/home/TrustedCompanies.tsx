const companies = ["SHELLS", "SmartFinder", "Zoomerr", "ArtVenue", "kontrast", "WAVESMARATHON"];

const TrustedCompanies = () => {
  return (
    <div className="mt-14 sm:mt-[72px] lg:mt-24 2xl:mt-28">
      <p className="text-sm font-medium text-[#8C9AA8] sm:text-base">Trusted By:</p>

      <div className="mt-4 flex max-w-[720px] flex-wrap items-center gap-x-6 gap-y-4 sm:gap-x-7">
        {companies.map((company) => (
          <div
            key={company}
            className="flex items-center gap-2 text-[10px] font-semibold text-[#516375] transition hover:text-[#8C9AA8] sm:text-[11px]"
          >
            <span className="flex h-4 w-4 items-center justify-center rounded-full border border-[#516375] text-[8px]">
              {company.charAt(0)}
            </span>
            <span>{company}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustedCompanies;

const companies = ["SHELLS", "SmartFinder", "Zoomerr", "ArtVenue", "kontrast", "WAVESMARATHON"];

const TrustedCompanies = () => {
  return (
    <div className="mt-20 sm:mt-24 lg:mt-28">
      <p className="text-sm font-medium text-[#8C9AA8]">Trusted By:</p>

      <div className="mt-4 flex flex-wrap items-center gap-x-7 gap-y-4">
        {companies.map((company) => (
          <div
            key={company}
            className="flex items-center gap-2 text-[11px] font-semibold text-[#516375]"
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

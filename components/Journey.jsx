const journey = [
  {
    years: "Jan 2025 - Present",
    role: "Integration Developer",
    company: "Digia Oyj",
  },
  {
    years: "Jan 2024 - Jan 2025",
    role: "Power Platform Developer",
    company: "Moretime Oy",
  },
  {
    years: "Jan 2018 - Jan 2024",
    role: "Sales manager",
    company: "Tuusmet Oy",
  },
  {
    years: "Aug 2021 - Jun 2024",
    role: "Student - Business Information Technology",
    company: "Laurea University of Applied Sciences",
  },
];

const Journey = () => {
  return (
    <div className="flex flex-col">
      <h2 className="h2 mb-8">
        Education & <span className="text-accent">Experience</span>
      </h2>
      {journey.map((item, index) => {
        const { company, role, years } = item;
        return (
          <div key={index} className="flex items-center gap-12 w-full">
            {/* bullet */}
            <div className="flex flex-col w-max justify-center items-center">
              <div className="w-3 h-3 bg-accent rounded-full"></div>
              <div className="w-[1px] h-[180px] bg-white/10"></div>
            </div>
            {/* text */}
            <div className="max-w-[500px]">
              <p className="mb-6 text-lg text-white/50">{years}</p>
              <p className="h4 mb-2">{role}</p>
              <p className="text-lg text-white/50">{company}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Journey;

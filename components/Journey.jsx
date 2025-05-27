const journey = [
  {
    years: "Jan 2025 - Present",
    role: "Integration Developer",
    tasks: [
      "Creating integrations using Apache Camel",
      "Created custom Python scripts to automate the migration of client APIs, subscriptions and users to a new API management platform.",
      "Maintain APIs in Azure api management system",
    ],
    company: "Digia Oyj",
  },
  {
    years: "Jan 2024 - Jan 2025",
    role: "Power Platform Developer",
    tasks: [
      "I define requirements, design, develop, and finally test implementations with clients. Using Power Platform tools such as Power Automate and Power Apps",
      "321",
      "Logic apps, Azure functions, Dataverse, Sharepoint",
      "Integrating systems using APIs",
      "Point of contact for clients",
      "Responsible for maintaining solutions",
    ],
    company: "Moretime Oy",
  },
  {
    years: "Jan 2018 - Jan 2024",
    role: "Sales manager",
    tasks: [
      "Acted as the primary point of contact for clients, ensuring their needs were met",
      "Led multiple projects, from smaller to large-scale projects",
      "Responsible for sales and managing the company's quotation inquiries",
      "Developed digital solutions to enhance work efficiency",
      "Managed all IT-related aspects of the company",
    ],
    company: "Tuusmet Oy",
  },
  {
    years: "Aug 2021 - Jun 2024",
    role: "Student - Business Information Technology",
    tasks: [
      "Thesis grade 4",
      "University of Helsinki’s - introduction to programming and advanced programming course with Java",
      "Linux",
      "Fullstack course",
    ],
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
        const { company, tasks, role, years } = item;
        return (
          <div key={index} className="flex items-center gap-12 w-full">
            {/* bullet */}
            <div className="flex flex-col w-max justify-center items-center self-stretch">
              <div className="w-3 h-3 bg-accent rounded-full"></div>
              <div className="w-[1px] flex-1 bg-white/10"></div>
            </div>
            {/* text */}
            <div className="max-w-[500px] ">
              <p className="-mt-2.5 text-lg text-white/50 mb-1">{years}</p>
              <p className="h4 ">{role}</p>
              <p className="text-xl text-white/50 mb-2">{company}</p>
              <ul className="mb-8 !list-disc">
                {tasks.map((task, index) => {
                  return (
                    <li key={index} className=" text-white/90">
                      {task}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Journey;

import CountUp from "react-countup";

const Stats = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col xl:flex-row xl:items-center gap-8 xl:gap-12">
        <div className="flex gap-4">
          <div className="text-5xl font-bold text-accent flex">
            <CountUp
              end={4}
              duration={2}
              delay={2}
              className="block w-[30px]"
            />
            <div>+</div>
          </div>
          <span>
            Coffee cups <br /> daily
          </span>
        </div>

        <div className="flex gap-4">
          <div className="text-5xl font-bold text-accent flex">
            <CountUp
              end={28}
              duration={5}
              delay={2}
              className="block w-[60px]"
            />
          </div>
          <span>
            Years of life experience <br /> on planet earth
          </span>
        </div>
      </div>
      {/* second row */}
      <div className="flex flex-col xl:flex-row xl:items-center gap-8 xl:gap-12">
        <div className="flex gap-4">
          <div className="text-5xl font-bold text-accent flex">
            <CountUp
              end={10}
              duration={5}
              delay={2}
              className="block w-[60px]"
            />
            <div>+</div>
          </div>
          <span>
            Countries
            <br /> travelled
          </span>
        </div>
        <div className="flex gap-4 ">
          <div className="text-5xl font-bold text-accent flex ">
            <CountUp
              end={2}
              duration={2}
              delay={2}
              className="block w-[30px]"
            />
          </div>
          <span>
            Absolutely lovely <br /> and weird cats
          </span>
        </div>
      </div>
    </div>
  );
};

export default Stats;

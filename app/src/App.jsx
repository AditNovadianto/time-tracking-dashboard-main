import { useState } from "react";
import Section from "./components/Section";
import jeremy from "./images/image-jeremy.png";

const App = () => {
  const [weekly, setWeekly] = useState(true);
  const [daily, setDaily] = useState(false);
  const [monthly, setMonthly] = useState(false);

  const weeklyButton = () => {
    setWeekly(!weekly);
    setDaily(false);
    setMonthly(false);
  };

  const dailyButton = () => {
    setDaily(!daily);
    setWeekly(false);
    setMonthly(false);
  };

  const monthlyButton = () => {
    setMonthly(!monthly);
    setWeekly(false);
    setDaily(false);
  };

  return (
    <main>
      <div className="lg:flex-row lg:items-center min-h-screen flex flex-col justify-center bg-Very-dark-blue items-center lg:p-0 py-20">
        <div className="w-[90%] lg:flex lg:w-[30%] justify-center items-center relative">
          <div className="w-full lg:mb-[150px] lg:w-[75%] z-30 absolute">
            <div className="lg:flex-col lg:items-start flex items-center h-max rounded-2xl bg-blue-background px-7 lg:px-4 py-9">
              <img
                className="w-[80px] lg:ml-5 lg:mb-10 rounded-full border-[3px] border-white"
                src={jeremy}
                alt="jeremy"
              />
              <div className="ml-5 lg:mb-10">
                <p className="font-Rubik text-Pale-Blue">Report for</p>
                <p className="font-Rubik text-2xl text-white">Jeremy Robson</p>
              </div>
            </div>
          </div>
          <div className="bg-Dark-blue lg:w-[75%] w-full rounded-b-2xl mt-[135px] lg:mt-[290px] lg:leading-[45px] py-5 px-9">
            <div className="lg:flex-col lg:items-start mt-3 flex items-center justify-between">
              <button onClick={dailyButton}>
                <a
                  className={`${
                    daily ? "text-white" : "text-Desaturated-blue"
                  } font-Rubik hover:text-white transition-all text-lg`}
                  href="#"
                >
                  Daily
                </a>
              </button>
              <button onClick={weeklyButton}>
                <a
                  className={`${
                    weekly ? "text-white" : "text-Desaturated-blue"
                  } font-Rubik hover:text-white transition-all text-lg`}
                  href="#"
                >
                  Weekly
                </a>
              </button>
              <button onClick={monthlyButton}>
                <a
                  className={`${
                    monthly ? "text-white" : "text-Desaturated-blue"
                  } font-Rubik hover:text-white transition-all text-lg`}
                  href="#"
                >
                  Monthly
                </a>
              </button>
            </div>
          </div>
        </div>

        <Section weekly={weekly} daily={daily} monthly={monthly} />
      </div>
    </main>
  );
};

export default App;

console.log("nyelesaiin gini doang 2 jam ancu amat");

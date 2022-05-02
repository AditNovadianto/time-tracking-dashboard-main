import work from "/src/images/icon-work.svg";
import play from "/src/images/icon-play.svg";
import study from "/src/images/icon-study.svg";
import exercise from "/src/images/icon-exercise.svg";
import social from "/src/images/icon-social.svg";
import selfCare from "/src/images/icon-self-care.svg";

const Section = ({ weekly, daily, monthly }) => {
  const dailySections = [
    {
      logo: work,
      title: "Work",
      hours: "5hrs",
      previous: "Last Day - 7hrs",
      color: "bg-Light-red-(work)",
    },
    {
      logo: play,
      title: "Play",
      hours: "1hrs",
      previous: "Last Day - 2hrs",
      color: "bg-Soft-blue-(play)",
    },
    {
      logo: study,
      title: "Study",
      hours: "0hrs",
      previous: "Last Day - 1hrs",
      color: "bg-Light-red-(study)",
    },
    {
      logo: exercise,
      title: "Exercise",
      hours: "1hrs",
      previous: "Last Day - 1hrs",
      color: "bg-Lime-green-(exercise)",
    },
    {
      logo: social,
      title: "Social",
      hours: "1hrs",
      previous: "Last Day - 3hrs",
      color: "bg-Violet-(social)",
    },
    {
      logo: selfCare,
      title: "Self Care",
      hours: "0hrs",
      previous: "Last Day - 1hrs",
      color: "bg-Soft-orange-(self-care)",
    },
  ];

  const weeklySections = [
    {
      logo: work,
      title: "Work",
      hours: "32hrs",
      previous: "Last Week - 36hrs",
      color: "bg-Light-red-(work)",
    },
    {
      logo: play,
      title: "Play",
      hours: "10hrs",
      previous: "Last Week - 8hrs",
      color: "bg-Soft-blue-(play)",
    },
    {
      logo: study,
      title: "Study",
      hours: "4hrs",
      previous: "Last Week - 7hrs",
      color: "bg-Light-red-(study)",
    },
    {
      logo: exercise,
      title: "Exercise",
      hours: "4hrs",
      previous: "Last Week - 5hrs",
      color: "bg-Lime-green-(exercise)",
    },
    {
      logo: social,
      title: "Social",
      hours: "5hrs",
      previous: "Last Week - 10hrs",
      color: "bg-Violet-(social)",
    },
    {
      logo: selfCare,
      title: "Self Care",
      hours: "2hrs",
      previous: "Last Week - 2hrs",
      color: "bg-Soft-orange-(self-care)",
    },
  ];

  const monthlySections = [
    {
      logo: work,
      title: "Work",
      hours: "103hrs",
      previous: "Last Month - 128hrs",
      color: "bg-Light-red-(work)",
    },
    {
      logo: play,
      title: "Play",
      hours: "23hrs",
      previous: "Last Month - 29hrs",
      color: "bg-Soft-blue-(play)",
    },
    {
      logo: study,
      title: "Study",
      hours: "13hrs",
      previous: "Last Month - 19hrs",
      color: "bg-Light-red-(study)",
    },
    {
      logo: exercise,
      title: "Exercise",
      hours: "11hrs",
      previous: "Last Month - 18hrs",
      color: "bg-Lime-green-(exercise)",
    },
    {
      logo: social,
      title: "Social",
      hours: "21hrs",
      previous: "Last Month - 23hrs",
      color: "bg-Violet-(social)",
    },
    {
      logo: selfCare,
      title: "Self Care",
      hours: "7hrs",
      previous: "Last Month - 11hrs",
      color: "bg-Soft-orange-(self-care)",
    },
  ];

  const nonSections = [
    {
      logo: work,
      title: "-",
      hours: "-",
      previous: "-",
      color: "bg-Light-red-(work)",
    },
    {
      logo: play,
      title: "-",
      hours: "-",
      previous: "-",
      color: "bg-Soft-blue-(play)",
    },
    {
      logo: study,
      title: "-",
      hours: "-",
      previous: "-",
      color: "bg-Light-red-(study)",
    },
    {
      logo: exercise,
      title: "-",
      hours: "-",
      previous: "-",
      color: "bg-Lime-green-(exercise)",
    },
    {
      logo: social,
      title: "-",
      hours: "-",
      previous: "-",
      color: "bg-Violet-(social)",
    },
    {
      logo: selfCare,
      title: "-",
      hours: "-",
      previous: "-",
      color: "bg-Soft-orange-(self-care)",
    },
  ];

  return (
    <div className="w-[90%] lg:flex flex-wrap items-center justify-center lg:p-3 lg:w-[70%] gap-5">
      {daily &&
        dailySections.map((section, index) => (
          <div className="lg:w-[250px]">
            <div
              key={index}
              className={`relative h-[60px] overflow-hidden mt-5 -mb-8 rounded-t-2xl ${section.color}`}
            >
              <img
                className="absolute right-5 -top-1"
                src={section.logo}
                alt="icon-work"
              />
            </div>

            <div className="relative hover:bg-Desaturated-blue transition-all cursor-pointer mt-5 h-max px-7 py-8 rounded-2xl bg-Dark-blue">
              <div className="flex justify-between items-center">
                <p className="font-Rubik text-white text-lg">{section.title}</p>
                <svg
                  className="fill-purple hover:fill-white transition-all"
                  width="21"
                  height="5"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"
                    fill-rule="evenodd"
                  />
                </svg>
              </div>

              <div className="flex lg:flex-col lg:items-start mt-2 justify-between items-center">
                <p className="font-Rubik text-white text-3xl">
                  {section.hours}
                </p>
                <p className="font-Rubik text-Pale-Blue">{section.previous}</p>
              </div>
            </div>
          </div>
        ))}

      {weekly &&
        weeklySections.map((section, index) => (
          <div className="lg:w-[250px]">
            <div
              key={index}
              className={`relative h-[60px] overflow-hidden mt-5 -mb-8 rounded-t-2xl ${section.color}`}
            >
              <img
                className="absolute right-5 -top-1"
                src={section.logo}
                alt="icon-work"
              />
            </div>

            <div className="relative hover:bg-Desaturated-blue transition-all cursor-pointer mt-5 h-max px-7 py-8 rounded-2xl bg-Dark-blue">
              <div className="flex justify-between items-center">
                <p className="font-Rubik text-white text-lg">{section.title}</p>
                <svg
                  className="fill-purple hover:fill-white transition-all"
                  width="21"
                  height="5"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"
                    fill-rule="evenodd"
                  />
                </svg>
              </div>

              <div className="flex lg:flex-col lg:items-start mt-2 justify-between items-center">
                <p className="font-Rubik text-white text-3xl">
                  {section.hours}
                </p>
                <p className="font-Rubik text-Pale-Blue">{section.previous}</p>
              </div>
            </div>
          </div>
        ))}

      {monthly &&
        monthlySections.map((section, index) => (
          <div className="lg:w-[250px]">
            <div
              key={index}
              className={`relative h-[60px] overflow-hidden mt-5 -mb-8 rounded-t-2xl ${section.color}`}
            >
              <img
                className="absolute right-5 -top-1"
                src={section.logo}
                alt="icon-work"
              />
            </div>

            <div className="relative hover:bg-Desaturated-blue transition-all cursor-pointer mt-5 h-max px-7 py-8 rounded-2xl bg-Dark-blue">
              <div className="flex justify-between items-center">
                <p className="font-Rubik text-white text-lg">{section.title}</p>
                <svg
                  className="fill-purple hover:fill-white transition-all"
                  width="21"
                  height="5"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"
                    fill-rule="evenodd"
                  />
                </svg>
              </div>

              <div className="flex lg:flex-col lg:items-start mt-2 justify-between items-center">
                <p className="font-Rubik text-white text-3xl">
                  {section.hours}
                </p>
                <p className="font-Rubik text-Pale-Blue">{section.previous}</p>
              </div>
            </div>
          </div>
        ))}

      {!daily &&
        !weekly &&
        !monthly &&
        nonSections.map((section, index) => (
          <div className="lg:w-[250px]">
            <div
              key={index}
              className={`relative h-[60px] overflow-hidden mt-5 -mb-8 rounded-t-2xl ${section.color}`}
            >
              <img
                className="absolute right-5 -top-1"
                src={section.logo}
                alt="icon-work"
              />
            </div>

            <div className="relative hover:bg-Desaturated-blue transition-all cursor-pointer mt-5 h-max px-7 py-8 rounded-2xl bg-Dark-blue">
              <div className="flex justify-between items-center">
                <p className="font-Rubik text-white text-lg">{section.title}</p>
                <svg
                  className="fill-purple hover:fill-white transition-all"
                  width="21"
                  height="5"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"
                    fill-rule="evenodd"
                  />
                </svg>
              </div>

              <div className="flex lg:flex-col lg:items-start mt-2 justify-between items-center">
                <p className="font-Rubik text-white text-3xl">
                  {section.hours}
                </p>
                <p className="font-Rubik text-Pale-Blue">{section.previous}</p>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Section;

import React from "react";
import Image from "next/image";

// logos
import IITB from "./assests/IIT B.png";
import IITD from "./assests/IIT D.png";
import IITG from "./assests/IIT G.png";
import IITH from "./assests/IIT H.png";
import IITKGP from "./assests/IIT KGP.png";
import IITM from "./assests/IIT M.png";
import NITR from "./assests/NIT R.jpg";
import NITT from "./assests/NIT T.png";

// importing the assests
import heroImg from "./assests/Hero img.png";

export default function LandingPage() {
  const subjects = [
    "Engineering",
    "Biology",
    "Statistics",
    "Chemistry",
    "Economics",
    "Mathematics",
    "Psyhcology",
    "Physics",
    "Socialogy",
    "Social Science",
    "Earth Science",
  ];

  const jobData = [
    {
      title: "JRF",
      openings: "34 Openings",
      locations: "4 Openings at IIT Bombay,  3 at IISC Bengaluru,...",
      logos: [
        "https://www.mahaedunews.com/wp-content/uploads/2020/03/1200px-Indian_Institute_of_Technology_Hyderabad_logo.svg-1014x1024.png",
        "https://th.bing.com/th/id/R.c0a20bea0927b16f407df8931456bd7b?rik=x1tDXvuopgJICA&riu=http%3a%2f%2fengageindia.ca%2fwp-content%2fuploads%2f2017%2f01%2fIITB-500x500.png&ehk=s9yqa0P0kAwln6C%2f7%2b%2fD%2fFlheCfqdy29AGzON2Q%2bZOM%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1",
        "https://www.userlogos.org/files/logos/jumpordie/iitr-03.png",
        "https://th.bing.com/th/id/R.a2c920d8a4e8f68660cb185c1b52dfae?rik=MTR8cGfAphOkZg&riu=http%3a%2f%2fevent.iitg.ac.in%2ficann2019%2fProceedings_LaTeX%2f2019%2fIITG_White.png&ehk=81DZb5JCwBqGeINYSHDwkjsPYHln8Kz6bG%2f8FHE6Il0%3d&risl=&pid=ImgRaw&r=0",
      ],
    },
    {
      title: "SRF",
      openings: "42 Openings",
      locations: "9 Openings at IIT, 6 at IISC Bengaluru,...",
      logos: [
        "https://www.mahaedunews.com/wp-content/uploads/2020/03/1200px-Indian_Institute_of_Technology_Hyderabad_logo.svg-1014x1024.png",
        "https://th.bing.com/th/id/R.c0a20bea0927b16f407df8931456bd7b?rik=x1tDXvuopgJICA&riu=http%3a%2f%2fengageindia.ca%2fwp-content%2fuploads%2f2017%2f01%2fIITB-500x500.png&ehk=s9yqa0P0kAwln6C%2f7%2b%2fD%2fFlheCfqdy29AGzON2Q%2bZOM%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1",
        "https://www.userlogos.org/files/logos/jumpordie/iitr-03.png",
        "https://th.bing.com/th/id/R.a2c920d8a4e8f68660cb185c1b52dfae?rik=MTR8cGfAphOkZg&riu=http%3a%2f%2fevent.iitg.ac.in%2ficann2019%2fProceedings_LaTeX%2f2019%2fIITG_White.png&ehk=81DZb5JCwBqGeINYSHDwkjsPYHln8Kz6bG%2f8FHE6Il0%3d&risl=&pid=ImgRaw&r=0",
      ],
    },
    {
      title: "Project Associate",
      openings: "42 openings",
      locations: "9 openings at...",
      logos: [
        "https://www.mahaedunews.com/wp-content/uploads/2020/03/1200px-Indian_Institute_of_Technology_Hyderabad_logo.svg-1014x1024.png",
        "https://th.bing.com/th/id/R.c0a20bea0927b16f407df8931456bd7b?rik=x1tDXvuopgJICA&riu=http%3a%2f%2fengageindia.ca%2fwp-content%2fuploads%2f2017%2f01%2fIITB-500x500.png&ehk=s9yqa0P0kAwln6C%2f7%2b%2fD%2fFlheCfqdy29AGzON2Q%2bZOM%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1",
        "https://www.userlogos.org/files/logos/jumpordie/iitr-03.png",
        "https://th.bing.com/th/id/R.a2c920d8a4e8f68660cb185c1b52dfae?rik=MTR8cGfAphOkZg&riu=http%3a%2f%2fevent.iitg.ac.in%2ficann2019%2fProceedings_LaTeX%2f2019%2fIITG_White.png&ehk=81DZb5JCwBqGeINYSHDwkjsPYHln8Kz6bG%2f8FHE6Il0%3d&risl=&pid=ImgRaw&r=0",
      ],
    },
    {
      title: "Project Maqnager",
      openings: "12 openings",
      locations: "9 openings at...",
      logos: [
        "https://www.mahaedunews.com/wp-content/uploads/2020/03/1200px-Indian_Institute_of_Technology_Hyderabad_logo.svg-1014x1024.png",
        "https://th.bing.com/th/id/R.c0a20bea0927b16f407df8931456bd7b?rik=x1tDXvuopgJICA&riu=http%3a%2f%2fengageindia.ca%2fwp-content%2fuploads%2f2017%2f01%2fIITB-500x500.png&ehk=s9yqa0P0kAwln6C%2f7%2b%2fD%2fFlheCfqdy29AGzON2Q%2bZOM%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1",
        "https://www.userlogos.org/files/logos/jumpordie/iitr-03.png",
        "https://th.bing.com/th/id/R.a2c920d8a4e8f68660cb185c1b52dfae?rik=MTR8cGfAphOkZg&riu=http%3a%2f%2fevent.iitg.ac.in%2ficann2019%2fProceedings_LaTeX%2f2019%2fIITG_White.png&ehk=81DZb5JCwBqGeINYSHDwkjsPYHln8Kz6bG%2f8FHE6Il0%3d&risl=&pid=ImgRaw&r=0",
      ],
    },
  ];

  const institutionsLogos = [
    { name: "IIT Delhi", logo: IITD },
    { name: "IIT Bombay", logo: IITB },
    { name: "IIT Madras", logo: IITM },
    { name: "IIT Hyderabad", logo: IITH },
    { name: "NIT Rourkela", logo: NITR },
    { name: "NIT Tiruchirapalli", logo: NITT },
    { name: "IIT Guwahati", logo: IITG },
    { name: "IIT khargpur", logo: IITKGP },
  ];

  return (
    <>
      <Image src={heroImg} alt="Hero banner" className="w-full" />

      <div className="superior-container flex justify-center content-center items-center gap-5 flex-col">
        <div className="disciplanes-container text-center m-3 mt-4 flex flex-col gap-3">
          <h2 className="text-3xl font-bold text-blue">Disciplines</h2>

          <div className="hero-disciplines-container gap-2 flex justify-center align-middle flex-wrap">
            {subjects.map((subject, index) => (
              <div
                key={index}
                className="hero-disciplines hover:border-blue w-52 h-16 px-2 py-1 border border-black border-opacity-20 justify-center items-center gap-4 inline-flex cursor-default text-center shadow-md rounded-lg bg-white"
              >
                {subject}
              </div>
            ))}
          </div>
        </div>

        <div className="branches-container w-full flex flex-col items-center justify-center content-center align-middle gap-3">
          <h2 className="text-3xl font-bold text-blue">Engineering</h2>

          <div className="hero-disciplines w-full">
            <ul className="flex justify-evenly list-disc text-lightblue underline gap-y-3 max-md:flex-col max-md:items-center">
              <div className="flex flex-col gap-3 max-md:items-center">
                <li>Artificial Intelligence</li>
                <li>Biomedical Engineering</li>
                <li>Biotechnology</li>
                <li>Chemical Engineering</li>
                <li>Climate Change</li>
                <li>Civil Engineering</li>
              </div>

              <div className="flex flex-col gap-3 max-md:items-center">
                <li>Computer Science and Engineering</li>
                <li>Electrical Engineering</li>
                <li>Engineering Science</li>
                <li>Heritage Science and Technology</li>
                <li>Material Science</li>
                <li>Mechanical and Aerospace Engineering</li>
              </div>

              <div className="flex flex-col gap-3 max-md:items-center">
                <li>Liberal Arts</li>
                <li>Design</li>
                <li>Entreprenuership and Management</li>
                <li>Chemistry</li>
                <li>Physics</li>
                <li>Mathematics</li>
              </div>
            </ul>
          </div>
        </div>

        <div className="top-institutes-posting-container flex justify-center content-center items-center gap-3 flex-col">
          <h2 className="text-3xl font-bold text-blue">
            TOP INSTITUTES POSTING
          </h2>
          <div className="flex flex-row flex-wrap justify-center gap-8">
            {institutionsLogos.map((institution, index) => (
              <div
                className="w-52 flex justify-center h-16 px-2 py-1 shadow-md rounded-lg bg-white"
                key={index}
              >
                <div className="flex-row flex justify-evenly w-full align-middle items-center">
                  <Image
                    className="inst-logo"
                    src={institution.logo}
                    alt="Institution Logo"
                    width={40}
                    height={40}
                  />
                  <p>{institution.name}</p>
                </div>
              </div>
            ))}

            <div className="w-52 flex justify-center h-16 px-2 py-1 shadow-md rounded-lg bg-white">
              <div className="flex-row flex justify-evenly w-full align-middle items-center cursor-pointer">
                <p>View More</p>
              </div>
            </div>
          </div>
        </div>

        <div className="pre-footer flex w-full h-16 bg-blue justify-between px-8 p-5 items-center max-md:flex-col max-md:h-full max-md:gap-5">
          <p className="text-white font-bold">What are you Searching For?</p>
          <div className="buttons max-md:flex flex-wrap gap-5 justify-center">
            <button className="py-2 px-8 mx-4 border-2 text-white border-yellowgold rounded-lg  font-semibold">
              Post a Job
            </button>
            <button className="py-2 px-8 mx-4 border-2 bg-yellowgold rounded-lg font-semibold">
              Sign IN
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

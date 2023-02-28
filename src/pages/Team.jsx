import React from "react";
import { Link } from "react-router-dom";

export default function Team() {
  return (
    <>
      <div className="p-14">
        <div>
          <Link to={"/"} className="hover:underline px-5  font-bold">
            Home &nbsp;
          </Link>
          <span>&#62;</span>

          <span className="px-5">Team</span>
        </div>

        <img src="team.png" alt="team" className="m-auto my-10" />
        <h1 className=" text-5xl text-center font-bold my-10  ">
          Coding Pathshala
        </h1>

        <p className="text-center text-sm">
          Disha Publication over the years has garnered a team that comprises of
          renowned Teachers, Trainers, Study Coaches, Researchers, Content
          Developers, Curriculum Developers, Subject Matter Experts, Editors,
          Proof Readers (Quality ), Designers, Digital Experts, Sales and
          Marketing Professionals. They play a significant role in developing
          the study material in terms of the students’ specific requirements for
          the exam and making it accessible for students via all possible
          channels.
        </p>

        <div className="p-8">
          <p className="text-2xl font-semibold text-gray-600 text-center">
            Anurag HOD
          </p>
          <div className="flex space-x-4 justify-center items-center">
            <img
              src="anurag.jpeg"
              alt=""
              className="w-[300px] h-[300px] cursor-zoom-in rounded-[10%]"
            />

            <p className="text-sm">
              An alumnus of G.B. Pant University (B.Tech) and the Management
              Development Institute, Gurgaon (MBA), Mr. Anurag Chaturvedi
              enthusiastically leads Disha Publication as its Director. Apart
              from being the leading Business Strategist in the company, he
              oversees Disha’s Digital division, among other things. With over
              15 years of experience as a Study Skill and Habit Coach for
              students, he firmly believes that any child can be a topper. He
              has interviewed hundreds of toppers who have cracked different
              competitive exams which led him to deeply understand the topper
              mindset. Through his books, podcasts and online programmes, he
              endeavours to impart the right learning strategies, techniques and
              mindset to students to convert their potential into performance.
              He has authored several bestselling books including Toppers’ Study
              Hacks, The Secret Code of UPSC Toppers, Success Blueprint for
              Competitive Exams, How to Raise a Topper, and Bhagvad Gita - The
              Story Way. Recently, he released his first novel, Stop Being a
              Maggu which innovatively combines features of fiction and
              mentorship.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

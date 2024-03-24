export default function Evidence() {
  return (
    <div className="py-16 flex flex-col items-center">
      <h2 className="text-center text-3xl font-bold text-blue">
        Still not convinced? Take a look at the evidence.
      </h2>
      <p className="mt-4 text-center text-sm text-gray-500">
        We&#39;ve provided personalized mentorship to hundreds of students and
        professionals.
      </p>
      <div className="mt-10 flex justify-center items-center overscroll-x-auto">
        <EachMentorReview />
        <EachMentorReview />
        <EachMentorReview />
      </div>
      <div className="py-12 flex items-center space-x-12">
        <button className="bg-blue text-white py-2 px-6 my-2 mr-4 rounded-lg">
          Find my mentor
        </button>
        <a className="underline text-blue">Become a Mentor</a>
      </div>
    </div>
  );
}

const Avatar = () => {
  return <div className="w-20 h-20 bg-gray-300 rounded-full"></div>;
};

const EachMentorReview = () => {
  return (
    <div className="flex items-center w-96 m-4 shadow-xl rounded-lg p-8 border border-gray-300">
      <div>
        <Avatar />
      </div>
      <div className="flex flex-col rounded-lg bg-white ml-4">
        <p className="text-gray-800">
          “In just a few weeks, I feel a lot more confident navigating the world
          of Quantum Physics. Dr. Samiksha has been an excellent mentor.”
        </p>
        <p className="font-bold text-black">- Saswati Samant, a mentee.</p>
      </div>
    </div>
  );
};

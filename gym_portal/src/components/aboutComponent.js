// components/AboutComponent.js
import Image from "next/image";
import gymImage from "../../public/goals.jpg"; // Update the image path

const AboutComponent = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row items-center justify-between md:space-x-8 space-y-8 md:space-y-0">
        <div className="md:w-1/2 text-center md:text-left">
          <div className="max-w-md mx-auto md:mx-0">
            <h4 className="text-3xl font-semibold mb-4 text-gray-800">
              About Us
            </h4>
            <p className="text-lg mb-4 text-gray-600">
              The main aim of this gym is to simplify the process of finding the
              right gym and to enable people to compare choices, hence making
              sound choices. For the gym owners, it will be an avenue through
              which they can showcase what they have differently from others,
              attract new members, as well as effectively manage their interests
              within it.
            </p>
            <button className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition-all duration-300 ease-in-out transform hover:scale-105">
              Learn More
            </button>
          </div>
        </div>
        <div className="flex justify-center items-center md:w-1/2">
          <div className="w-full max-w-sm md:max-w-md lg:max-w-lg rounded-lg overflow-hidden shadow-xl">
            <Image
              src={gymImage}
              alt="Gym Image"
              width={400}
              height={300}
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutComponent;

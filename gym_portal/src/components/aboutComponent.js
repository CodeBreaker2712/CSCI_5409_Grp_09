// components/AboutComponent.js
import Image from 'next/image';
import gymImage from '../../public/about.jpeg';

const AboutComponent = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row items-center justify-center">
        <div className="md:w-1/2 md:pr-6">
          <div className="max-w-md">
            <h4 className="text-3xl font-semibold mb-4">About Us</h4>
            <p className="text-lg mb-4">
            The main aim of this gym is to simplify the process of finding the right gym and to enable people to compare choices, hence making sound choices. For the gym owners, it will be an avenue through which they can showcase what they have differently from others attract new members as well as effectively manage their interests within it.            </p>
            <button className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600">
              Learn More
            </button>
          </div>
        </div>
        <div className=" flex justify-center items-center">
          <div className=" ">
            <Image
              src={gymImage}
              alt="Gym Image"
              width={400}
              height={300}
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutComponent;

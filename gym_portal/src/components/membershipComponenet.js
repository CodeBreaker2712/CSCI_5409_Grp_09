// components/MembershipComponent.js
import Image from "next/image";
import gymImage from "../../public/heroImage.jpeg";

const MembershipComponent = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row items-center justify-between md:space-x-8 space-y-8 md:space-y-0">
        <div className="flex justify-center items-center md:w-1/2">
          <div className="w-full max-w-sm md:max-w-md lg:max-w-lg">
            <Image
              src={gymImage}
              alt="Gym Image"
              width={400}
              height={300}
              objectFit="cover"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
        <div className="md:w-1/2 text-center md:text-left">
          <div className="max-w-md mx-auto md:mx-0">
            <h4 className="text-3xl font-semibold mb-4 text-gray-800">
              Membership
            </h4>
            <p className="text-lg mb-4 text-gray-600">
              Discover the perfect membership plan tailored to your fitness
              goals. From flexible daily passes to comprehensive weekly
              memberships, find the option that suits your lifestyle. With our
              range of choices, you can explore various gyms before making a
              commitment, ensuring you make the right choice for your fitness
              journey.
            </p>
            <button className="bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition-all duration-300 ease-in-out transform hover:scale-105">
              Join Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MembershipComponent;

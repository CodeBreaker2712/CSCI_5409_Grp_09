// components/MembershipComponent.js
import Image from 'next/image';
import gymImage from '../../public/heroImage.jpeg';

const MembershipComponent = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row items-center justify-center">
        <div className="md:w-1/2 md:pr-6">
          <div className="max-w-md">
            <h4 className="text-3xl font-semibold mb-4">Membership</h4>
            <p className="text-lg mb-4">
            Discover the perfect membership plan tailored to your fitness goals. From flexible daily passes to comprehensive weekly memberships, find the option that suits your lifestyle. With our range of choices, you can explore various gyms before making a commitment, ensuring you make the right choice for your fitness journey.            </p>
            <button className="bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600">
              Join Now
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

export default MembershipComponent;

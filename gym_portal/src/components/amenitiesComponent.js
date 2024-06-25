// components/MembershipComponent.js
import Image from 'next/image';
import gymImage from '../../public/gym.jpg';

const AmenitiesComponent = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row items-center justify-center">
        <div className="md:w-1/2 md:pr-6">
          <div className="max-w-md">
            <h4 className="text-3xl font-semibold mb-4">Amenities</h4>
            <p className="text-lg mb-4">
            Explore the diverse amenities offered by our partnered gyms to elevate your fitness experience. Whether you're seeking state-of-the-art equipment, relaxing spa facilities, or vibrant group fitness classes, our gyms provide a variety of options to cater to your preferences. Compare amenities and find the gym that aligns perfectly with your fitness needs and interests.            </p>
            <button className="bg-purple-500 text-white px-6 py-3 rounded-full hover:bg-purple-600">
              Explore Now
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

export default AmenitiesComponent;

import React from "react";
import Back from "../../app/assets/back-showlink.png";
import Man from "../../app/assets/man-showlink.png";
import RedRound from "../../app/assets/pink-round-earn.png";
const ShowYourLink = () => {
  return (
    <div className=" mb-56">
      <div className=" relative ">
        <img
          src={RedRound}
          alt="Back"
          className=" absolute  left-1/3   top-0 z-10"
        />
        <img src={Back} alt="Back" className=" absolute  top-0 z-0" />
        <img src={Man} alt="Man" className=" absolute top-0 z-10" />
      </div>
      <div className="">
        <div className="flex flex-col">
          <div class="flex items-center justify-end space-x-4 [&>*]:ml-0">
            <div class="h-8 w-8 rounded-full bg-gray-500"></div>
            <div class="h-6 w-6 rounded-full bg-gray-500"></div>
            <div class="h-3 w-3 rounded-full bg-gray-500"></div>
          </div>

          <h1 className=" mb-10 text-right text-4xl font-bold">
            Show Your Link
          </h1>
          <p className="text-right text-3xl  font-normal leading-relaxed">
            Watch prepaid bookings flow in
          </p>
        </div>
      </div>
    </div>
  );
};

export default ShowYourLink;

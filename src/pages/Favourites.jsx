import React from "react";

export default function Favourites() {
  return (
    <>
      <h1 className="text-center text-2xl font-bold mt-10 ">My Wish List</h1>
      <div className="m-20 flex space-x-20">
        <div className="w-[30%] border-2 border-black  font-semibold mt-10 text-sm">
          <p className="hover:text-white hover:bg-black border-b-2 p-4 border-black">
            My Account
          </p>
          <p className="hover:text-white hover:bg-black border-b-2 p-4 border-black">
            My Orders
          </p>
          <p className="hover:text-white hover:bg-black border-b-2 p-4 border-black">
            My Downloadable products
          </p>
          <p className="hover:text-white hover:bg-black border-b-2 p-4 border-black">
            My Wish List
          </p>
          <p className="hover:text-white hover:bg-black border-b-2 p-4 border-black">
            Address Book
          </p>
          <p className="hover:text-white hover:bg-black border-b-2 p-4 border-black">
            Account Information
          </p>
          <p className="hover:text-white hover:bg-black border-b-2 p-4 border-black">
            Stored Payment Methods
          </p>
          <p className="hover:text-white hover:bg-black border-b-2 p-4 border-black">
            My Product Reviews
          </p>
          <p className="hover:text-white hover:bg-black border-b-2 p-4 border-black">
            New letter subscription
          </p>
          <p className="hover:text-white hover:bg-black  p-4 ">Logout</p>
        </div>

        <div className="w-full">
          <div className="flex space-x-40 border-2 border-gray-300 mt-10 w-[90%] px-5n shadow-md h-fit justify-around">
            <div>
              <h1 className="font-bold font-serif my-6 text-2xl">
                Account Information
              </h1>
              <p className="my-4 text-xl font-bold">Contact Information</p>
              <p className="text-md">Deeksha Bhargava</p>
              <p className="text-md mb-6">1886693195010923@facebook.com</p>

              <button className="p-2 w-14 rounded bg-yellow-400 mr-2 my-4">
                Edit
              </button>
              <button className="p-2 bg-black text-white rounded my-4">
                Change Password
              </button>
            </div>
            <div className="py-16">
              <h1 className="my-4 text-xl font-bold">Newsletters</h1>
              <p className="mb-4">You aren't subscribed to our newsletter.</p>
              <button className="p-2 w-14 rounded bg-yellow-400 mr-2 ">
                Edit
              </button>
            </div>
          </div>
          <div className="flex space-x-40 border-2 border-gray-300 mt-10 w-[90%] px-5n  shadow-md h-fit justify-around">
            <div>
              <h1 className="font-bold font-serif my-6 text-2xl">
                Account Information
              </h1>
              <p className="my-4 text-xl font-bold">Contact Information</p>
              <p className="text-md">Deeksha Bhargava</p>
              <p className="text-md mb-6">1886693195010923@facebook.com</p>

              <button className="p-2 w-14 rounded bg-yellow-400 mr-2 my-4">
                Edit
              </button>
              <button className="p-2 bg-black text-white rounded my-4">
                Change Password
              </button>
            </div>
            <div className="py-16">
              <h1 className="my-4 text-xl font-bold">Newsletters</h1>
              <p className="mb-4">You aren't subscribed to our newsletter.</p>
              <button className="p-2 w-14 rounded bg-yellow-400 mr-2 ">
                Edit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

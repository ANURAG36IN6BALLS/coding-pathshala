import React from "react";
import { Link } from "react-router-dom";

export default function Examcombos() {
  return (
    <>
      <div>
        <div className="ml-20 mt-14 text-md">
          <Link to={"/home"} className="hover:underline text-gray-600">
            Home
          </Link>
          <span> &#62; </span>
          <Link to={"/our-products"} className="hover:underline text-gray-600">
            Our Products
          </Link>
          <span> &#62; </span>
          <span> Exam combos</span>
        </div>

        <div className="w-[75%] m-auto border-2 border-gray-600 my-10 ">
          <div className="flex justify-between items-center  w-full  px-5">
            <p>Items 1-12 of 225</p>
            <div className="flex space-x-3 items-center">
              <p className="font-medium text-gray-700 text-lg">Sort By</p>
              <select className="border-2 border-gray-600 font-medium rounded-3xl my-5 p-2 text-gray-700 outline-none">
                <option>Position</option>
                <option>Product Name</option>
                <option>Price</option>
                <option>Read Sample Chapter</option>
              </select>
            </div>
          </div>

          <hr className="h-[2px] bg-gray-700" />
          <div className="flex flex-wrap">
            <div className="border-2 border-gray-700 w-[25%] space-y-7 pb-[20px] ">
              <div className=" bg-blue-400  m-4">
                <img
                  src="book1.jpg"
                  alt=""
                  className="w-[150px] h-[200px] py-2 px-3 m-auto"
                />
              </div>
              <p className="text-center font-semibold ">
                Samanya Vigyan for <br /> Bhartiya Railways RRB <br /> Pariksha
                - JE/NTPC/ALP/
                <br /> Group D - 2nd Edition{" "}
              </p>
              <button className="text-lg font-bold text-center bg-yellow-300 p-4 ml-12 rounded-md ">
                ADD TO CART
              </button>
              <br />
              <button className="text-lg font-bold text-center p-4 ml-12 rounded-md border border-gray-300">
                QUICK VIEW
              </button>
            </div>

            <div className="border-2 border-gray-700 w-[25%] space-y-7 pb-[20px] ">
              <div className=" bg-blue-400  m-4">
                <img
                  src="book1.jpg"
                  alt=""
                  className="w-[150px] h-[200px] py-2 px-3 m-auto"
                />
              </div>
              <p className="text-center font-semibold ">
                Samanya Vigyan for <br /> Bhartiya Railways RRB <br /> Pariksha
                - JE/NTPC/ALP/
                <br /> Group D - 2nd Edition{" "}
              </p>
              <button className="text-lg font-bold text-center bg-yellow-300 p-4 ml-12 rounded-md ">
                ADD TO CART
              </button>
              <br />
              <button className="text-lg font-bold text-center p-4 ml-12 rounded-md border border-gray-300">
                QUICK VIEW
              </button>
            </div>

            <div className="border-2 border-gray-700 w-[25%] space-y-7 pb-[20px] ">
              <div className=" bg-blue-400  m-4">
                <img
                  src="book1.jpg"
                  alt=""
                  className="w-[150px] h-[200px] py-2 px-3 m-auto"
                />
              </div>
              <p className="text-center font-semibold ">
                Samanya Vigyan for <br /> Bhartiya Railways RRB <br /> Pariksha
                - JE/NTPC/ALP/
                <br /> Group D - 2nd Edition{" "}
              </p>
              <button className="text-lg font-bold text-center bg-yellow-300 p-4 ml-12 rounded-md ">
                ADD TO CART
              </button>
              <br />
              <button className="text-lg font-bold text-center p-4 ml-12 rounded-md border border-gray-300">
                QUICK VIEW
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

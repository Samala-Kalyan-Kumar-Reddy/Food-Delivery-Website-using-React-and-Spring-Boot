import React from "react";
import "./HomePage.css";
import MultipleItemCarousel from "./MultipleItemCarousel";
import RestaurantCard from "./RestaurantCard";
import { Restaurants } from "../../../Data/Restaurants";


const HomePage = () => {
    return (
        <div>
            <section className='-z-50 banner relative flex flex-col justify-center items-center'>
                <p className='text-green-800 text-2xl lg:text-7xl font-bold z-10 py-5'>Flash Foods</p>
                <p className='z-10 text-black text-xl lg:text-4xl'>
                    Taste the convenience: Food, Fast, and Delivered
                    </p>
                    <div className="cover  absolute top-0 left-0 right-0" ></div>
                    <div className="fadeout"></div>
            </section>
            <section className="p-10 lg:py-10 lg:px-20">
                <div className="">
                    <p className="text-2xl font-semibold text-gray-400 py-3 pb-10">Top Meals</p>
                </div>
                <MultipleItemCarousel/>
            </section>
            <section className="px-5 lg:px-20">
                <div>
                    <h1 className="text-2xl font-semibold text-gray-400 py-3 ">
                        Order from your Favorite and Handpicked Restaurents

                    </h1>
                    <div className="flex flex-wrap items-center justify-content">
                        {Restaurants.map((item,index)=><RestaurantCard item={item} index={index}/>)}

                    </div>
                </div>

            </section>
        </div>
    );
}

export default HomePage;

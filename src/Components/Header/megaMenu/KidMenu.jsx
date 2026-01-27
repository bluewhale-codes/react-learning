import React from "react";

export default function KidMenu() {
  return (
    <div className=" p-10 mt-8
        w-230
        absolute left-0 right-0 top-full z-50
        bg-white shadow-xl
        transition-all duration-300 ease-in-out
        opacity-0 invisible translate-y-4
        group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
      ">
      <div className="grid grid-cols-6 gap-12 text-sm text-gray-800">
        {/* Column 1 */}
        <div>
          <h3 className="mb-4 font-semibold text-teal-500">Makeup</h3>
          <ul className="space-y-2">
            <li>Lipstick</li>
            <li>Lip Gloss</li>
            <li>Lip Liner</li>
            <li>Mascara</li>
            <li>Eyeliner</li>
            <li>Kajal</li>
            <li>Eyeshadow</li>
            <li>Foundation</li>
            <li>Primer</li>
            <li>Concealer</li>
            <li>Compact</li>
            <li>Nail Polish</li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="mb-4 font-semibold text-teal-500">Skincare, Bath & Body</h3>
          <ul className="space-y-2">
            <li>Face Moisturiser</li>
            <li>Cleanser</li>
            <li>Masks & Peel</li>
            <li>Sunscreen</li>
            <li>Serum</li>
            <li>Face Wash</li>
            <li>Eye Cream</li>
            <li>Lip Balm</li>
            <li>Body Lotion</li>
            <li>Body Wash</li>
            <li>Body Scrub</li>
            <li>Hand Cream</li>
          </ul>

          <h3 className="mt-6 mb-2 font-semibold text-teal-500">Baby Care</h3>
          <h3 className="mt-4 font-semibold text-teal-500">Masks</h3>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="mb-4 font-semibold text-teal-500">Haircare</h3>
          <ul className="space-y-2">
            <li>Shampoo</li>
            <li>Conditioner</li>
            <li>Hair Cream</li>
            <li>Hair Oil</li>
            <li>Hair Gel</li>
            <li>Hair Color</li>
            <li>Hair Serum</li>
            <li>Hair Accessory</li>
          </ul>

          <h3 className="mt-6 mb-4 font-semibold text-teal-500">Fragrances</h3>
          <ul className="space-y-2">
            <li>Perfume</li>
            <li>Deodorant</li>
            <li>Body Mist</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h3 className="mb-4 font-semibold text-teal-500">Appliances</h3>
          <ul className="space-y-2">
            <li>Hair Straightener</li>
            <li>Hair Dryer</li>
            <li>Epilator</li>
          </ul>

          <h3 className="mt-6 mb-4 font-semibold text-teal-500">Men's Grooming</h3>
          <ul className="space-y-2">
            <li>Trimmers</li>
            <li>Beard Oil</li>
            <li>Hair Wax</li>
          </ul>

          <h3 className="mt-6 mb-2 font-semibold text-teal-500">Beauty Gift & Makeup Set</h3>
          <ul className="space-y-2">
            <li>Beauty Gift</li>
            <li>Makeup Kit</li>
          </ul>

          <h3 className="mt-6 font-semibold text-teal-500">Premium Beauty</h3>
          <h3 className="mt-4 font-semibold text-teal-500">Wellness & Hygiene</h3>
        </div>

        {/* Column 5 */}
        <div>
          <h3 className="mb-4 font-semibold text-teal-500">Top Brands</h3>
          <ul className="space-y-2">
            <li>Lakme</li>
            <li>Maybelline</li>
            <li>LOreal</li>
            <li>Philips</li>
            <li>Bath & Body Works</li>
            <li>THE BODY SHOP</li>
            <li>Biotique</li>
            <li>Mamaearth</li>
            <li>MCaffeine</li>
            <li>Nivea</li>
            <li>Lotus Herbals</li>
            <li>LOreal Professionnel</li>
            <li>KAMA AYURVEDA</li>
            <li>M.A.C</li>
            <li>Forest Essentials</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

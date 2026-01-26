export default function WomenMenu() {
  return (
    <div
      className="
        w-230
        absolute left-0 right-0 top-full z-50
        bg-white shadow-xl
        transition-all duration-300 ease-in-out
        opacity-0 invisible translate-y-4
        group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
      "
    >
      <div className="max-w-7xl mx-auto px-10 py-8">
        <div className="grid grid-cols-5 gap-10 text-[13px] text-gray-700">

          {/* Column 1 */}
          <div className="space-y-6">
            <div>
              <h3 className="price-title">Women's Western Wear</h3>
              <ul className="price-list">
                <li>Dresses Under ₹599</li>
                <li>Tops Under ₹399</li>
                <li>Jeans Under ₹599</li>
                <li>Trousers Under ₹699</li>
                <li>T-shirts Under ₹299</li>
                <li>Shirts Under ₹499</li>
                <li>Skirts Under ₹499</li>
                <li>Shorts Under ₹699</li>
                <li>Co-ords Under ₹799</li>
                <li>Jumpsuits Under ₹899</li>
                <li>Track Pants Under ₹699</li>
                <li>Jackets Under ₹899</li>
                <li>Sweatshirts Under ₹699</li>
                <li>Sweaters Under ₹899</li>
              </ul>
            </div>
          </div>

          {/* Column 2 */}
          <div className="space-y-6">
            <div>
              <h3 className="price-title">Women's Ethnic Wear</h3>
              <ul className="price-list">
                <li>Kurtas Under ₹399</li>
                <li>Kurtis Under ₹499</li>
                <li>Kurta Sets Under ₹499</li>
                <li>Ethnic Dresses Under ₹999</li>
                <li>Palazzos Under ₹799</li>
              </ul>
            </div>

            <div className="border-t pt-4">
              <h3 className="price-title">Lingerie & Loungewear</h3>
              <ul className="price-list">
                <li>Bras Under ₹399</li>
                <li>Night Suits Under ₹799</li>
                <li>Nightdresses Under ₹999</li>
                <li>Lounge Pants Under ₹999</li>
                <li>Briefs Under ₹599</li>
              </ul>
            </div>
          </div>

          {/* Column 3 */}
          <div className="space-y-6">
            <div>
              <h3 className="price-title">Men's Casual Wear</h3>
              <ul className="price-list">
                <li>T-shirts Under ₹299</li>
                <li>Shirts Under ₹499</li>
                <li>Jeans Under ₹599</li>
                <li>Trousers Under ₹699</li>
                <li>Shorts Under ₹599</li>
                <li>Track Pants Under ₹699</li>
                <li>Jackets Under ₹899</li>
                <li>Sweatshirts Under ₹699</li>
                <li>Sweaters Under ₹999</li>
                <li>Co-ords Under ₹999</li>
              </ul>
            </div>

            <div className="border-t pt-4">
              <h3 className="price-title">Men's Occasion Wear</h3>
              <ul className="price-list">
                <li>Kurtas Under ₹799</li>
                <li>Kurta Sets Under ₹999</li>
              </ul>
            </div>
          </div>

          {/* Column 4 */}
          <div className="space-y-6">
            <div>
              <h3 className="price-title">Women's Footwear</h3>
              <ul className="price-list">
                <li>Heels Under ₹599</li>
                <li>Flats Under ₹499</li>
                <li>Casual Shoes Under ₹699</li>
                <li>Sports Shoes Under ₹999</li>
                <li>Flip Flops Under ₹799</li>
                <li>Boots Under ₹999</li>
                <li>Ballerinas Under ₹799</li>
              </ul>
            </div>

            <div className="border-t pt-4">
              <h3 className="price-title">Men's Footwear</h3>
              <ul className="price-list">
                <li>Casual Shoes Under ₹799</li>
                <li>Sports Shoes Under ₹999</li>
                <li>Formal Shoes Under ₹999</li>
                <li>Sandals Under ₹799</li>
                <li>Flip Flops Under ₹499</li>
                <li>Boots Under ₹999</li>
              </ul>
            </div>
          </div>

          {/* Column 5 */}
          <div className="space-y-6">
            <div>
              <h3 className="price-title">Beauty & Grooming</h3>
              <ul className="price-list">
                <li>Skincare Under ₹299</li>
                <li>Haircare Under ₹399</li>
                <li>Bath & Body Under ₹399</li>
                <li>MakeUp Under ₹299</li>
                <li>Fragrances Under ₹399</li>
                <li>Appliances Under ₹999</li>
              </ul>
            </div>

            <div className="border-t pt-4">
              <h3 className="price-title">Accessories</h3>
              <ul className="price-list">
                <li>Jewellery Under ₹299</li>
                <li>Handbags Under ₹499</li>
                <li>Clutches Under ₹999</li>
                <li>Backpacks Under ₹699</li>
                <li>Wallets Under ₹499</li>
                <li>Sunglasses Under ₹699</li>
                <li>Belts Under ₹799</li>
                <li>Caps Under ₹899</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

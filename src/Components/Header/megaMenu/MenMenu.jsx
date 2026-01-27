export default function MenMenu() {
  return (
    <div
      className="
        w-230 mt-8
        absolute left-0 right-0 top-full z-50
        bg-white shadow-xl
        transition-all duration-300 ease-in-out
        opacity-0 invisible translate-y-4
        group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
      "
    >
      <div className="max-w-7xl mx-auto px-10 py-8">
        <div className="grid grid-cols-5 gap-10 text-sm text-gray-700">

          {/* Column 1 */}
          <div className="space-y-6">
            <div>
              <h3 className="menu-title">Topwear</h3>
              <ul className="menu-list">
                <li>T-Shirts</li>
                <li className="font-semibold text-gray-900">Casual Shirts</li>
                <li>Formal Shirts</li>
                <li>Sweatshirts</li>
                <li>Sweaters</li>
                <li>Jackets</li>
                <li>Blazers & Coats</li>
                <li>Suits</li>
                <li>Rain Jackets</li>
              </ul>
            </div>

            <div>
              <h3 className="menu-title">Indian & Festive Wear</h3>
              <ul className="menu-list">
                <li>Kurtas & Kurta Sets</li>
                <li>Sherwanis</li>
                <li>Nehru Jackets</li>
                <li>Dhotis</li>
              </ul>
            </div>
          </div>

          {/* Column 2 */}
          <div className="space-y-6">
            <div>
              <h3 className="menu-title">Bottomwear</h3>
              <ul className="menu-list">
                <li>Jeans</li>
                <li>Casual Trousers</li>
                <li>Formal Trousers</li>
                <li>Shorts</li>
                <li>Track Pants & Joggers</li>
              </ul>
            </div>

            <div className="border-t pt-4">
              <h3 className="menu-title">Innerwear & Sleepwear</h3>
              <ul className="menu-list">
                <li>Briefs & Trunks</li>
                <li>Boxers</li>
                <li>Vests</li>
                <li>Sleepwear & Loungewear</li>
                <li>Thermals</li>
              </ul>
            </div>

            <h3 className="menu-title">Plus Size</h3>
          </div>

          {/* Column 3 */}
          <div className="space-y-6">
            <div>
              <h3 className="menu-title">Footwear</h3>
              <ul className="menu-list">
                <li>Casual Shoes</li>
                <li>Sports Shoes</li>
                <li>Formal Shoes</li>
                <li>Sneakers</li>
                <li>Sandals & Floaters</li>
                <li>Flip Flops</li>
                <li>Socks</li>
              </ul>
            </div>

            <div className="border-t pt-4 space-y-4">
              <h3 className="menu-title">Personal Care & Grooming</h3>
              <h3 className="menu-title">Sunglasses & Frames</h3>
              <h3 className="menu-title">Watches</h3>
            </div>
          </div>

          {/* Column 4 */}
          <div className="space-y-6">
            <div>
              <h3 className="menu-title">Sports & Active Wear</h3>
              <ul className="menu-list">
                <li>Sports Shoes</li>
                <li>Sports Sandals</li>
                <li>Active T-Shirts</li>
                <li>Track Pants & Shorts</li>
                <li>Tracksuits</li>
                <li>Jackets & Sweatshirts</li>
                <li>Sports Accessories</li>
                <li>Swimwear</li>
              </ul>
            </div>

            <div className="border-t pt-4">
              <h3 className="menu-title">Gadgets</h3>
              <ul className="menu-list">
                <li>Smart Wearables</li>
                <li>Fitness Gadgets</li>
                <li>Headphones</li>
                <li>Speakers</li>
              </ul>
            </div>
          </div>

          {/* Column 5 */}
          <div className="space-y-6">
            <div>
              <h3 className="menu-title">Fashion Accessories</h3>
              <ul className="menu-list">
                <li>Wallets</li>
                <li>Belts</li>
                <li>Perfumes & Body Mists</li>
                <li>Trimmers</li>
                <li>Deodorants</li>
                <li>Ties, Cufflinks & Pocket Squares</li>
                <li>Accessory Gift Sets</li>
                <li>Caps & Hats</li>
                <li>Mufflers, Scarves & Gloves</li>
                <li>Phone Cases</li>
                <li>Rings & Wristwear</li>
                <li>Helmets</li>
              </ul>
            </div>

            <div className="border-t pt-4 space-y-4">
              <h3 className="menu-title">Bags & Backpacks</h3>
              <h3 className="menu-title">Luggages & Trolleys</h3>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

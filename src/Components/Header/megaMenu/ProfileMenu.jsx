export default function ProfileMenu() {
  return (
    <div className="w-64 absolute bg-white  shadow-lg  rounded-md text-sm text-gray-700
    shadow-xl
        transition-all duration-300 ease-in-out
        opacity-0 invisible translate-y-4
        group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
    
    ">
      {/* Header */}
      <div className="px-4 py-3 border-b">
        <p className="font-semibold text-gray-900">Hello Myntra User</p>
        <p className="text-gray-500">6280383890</p>
      </div>

      {/* Menu Section 1 */}
      <div className="px-4 py-2 space-y-2 border-b">
        <MenuItem label="Orders" />
        <MenuItem label="Wishlist" />
        <MenuItem label="Gift Cards" />
        <MenuItem label="Contact Us" />
        <MenuItem
          label="Myntra Insider"
          badge="New"
        />
      </div>

      {/* Menu Section 2 */}
      <div className="px-4 py-2 space-y-2 border-b">
        <MenuItem label="Myntra Credit" />
        <MenuItem label="Coupons" />
        <MenuItem label="Saved Cards" />
        <MenuItem label="Saved VPA" />
        <MenuItem label="Saved Addresses" />
      </div>

      {/* Footer */}
      <div className="px-4 py-2 space-y-2">
        <MenuItem label="Edit Profile" />
        <MenuItem label="Logout" danger />
      </div>
    </div>
  );
}

/* Reusable Menu Item */
function MenuItem({ label, badge, danger }) {
  return (
    <div
      className={`flex items-center justify-between cursor-pointer hover:text-pink-600 ${
        danger ? "text-red-600 hover:text-red-700" : ""
      }`}
    >
      <span>{label}</span>
      {badge && (
        <span className="text-xs bg-pink-500 text-white px-2 py-0.5 rounded">
          {badge}
        </span>
      )}
    </div>
  );
}

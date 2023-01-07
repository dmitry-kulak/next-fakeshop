import CartIcon from "@icons/CartIcon";
import BellIcon from "@icons/BellIcon";
import ExitIcon from "@icons/ExitIcon";

const UserSettings = () => {
  return (
    <div className="flex space-x-4">
      <div className="flex items-center space-x-2 border-r border-r-black-alpha-10">
        <button className="w-4">
          <CartIcon />
        </button>

        <button className="w-4">
          <BellIcon />
        </button>
      </div>

      <div className="flex items-center">Владимир{<br />}Владимирович</div>
      <div className="flex items-center border-r border-r-black-alpha-10">@</div>

      <button className="w-4">
        <ExitIcon />
      </button>
    </div>
  );
};

export default UserSettings;

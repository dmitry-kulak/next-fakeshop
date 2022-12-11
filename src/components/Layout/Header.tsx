import Link from "next/link";

import Container from "../Container/Container";
import UserSettings from "./UserSettings";
import Searchbar from "../Searchbar/Searchbar";

const Header = () => {
  return (
    <Container as="header" className="flex justify-between p-5">
      <Link href="/" className="font-logo text-xl leading-6">
        Next{<br />}Fakeshop
      </Link>

      <Searchbar />

      <UserSettings />
    </Container>
  );
};

export default Header;

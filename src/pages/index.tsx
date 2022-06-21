import type { NextPage } from "next";
import Appbar from "../components/Layout/Appbar";
import SelectedFontsDrawer from "../components/selected-fonts/SelectedFontsDrawer";

const Home: NextPage = () => {
  return (
    <div>
      <div className="">
        <SelectedFontsDrawer />
      </div>
    </div>
  );
};

export default Home;

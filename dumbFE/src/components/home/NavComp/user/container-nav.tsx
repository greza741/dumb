import { Navs } from "./navs-comp";
import Items from "./items";

const ContainerNav = () => {
  return (
    <>
      {Navs.map((item, index) => {
        return <Items key={index} {...item} />;
      })}
    </>
  );
};
export default ContainerNav;

import Items from "./items";
import { NavsAdmin } from "./navs-comp";

const ContainerNavAdmin = () => {
  return (
    <>
      {NavsAdmin.map((item, index) => {
        return <Items key={index} {...item} />;
      })}
    </>
  );
};
export default ContainerNavAdmin;

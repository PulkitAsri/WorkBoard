import useContextMenu from "../../hooks/useContextMenu";
import "./menu.css"

const Menu = () => {
  const { anchorPoint, show } = useContextMenu();

  if (show) {
    return (
      <div className="menu" style={{ top: anchorPoint.y, left: anchorPoint.x }}>
        <div>Button1</div>
        <div>Button2</div>
        <div>Button3</div>
      </div>
    );
  }
  return <></>;
};

export default Menu;

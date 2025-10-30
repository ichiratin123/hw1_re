import Banner from "./Banner";
import Item from "./Item";
export default function Body() {
  return (
    <div>
      <Banner />
      <div className="container mx-auto flex justify-center space-x-8">
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
    </div>
  );
}

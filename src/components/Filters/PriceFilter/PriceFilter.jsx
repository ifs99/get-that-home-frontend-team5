import Popover from "../../ui/Popover/Popover";
import Button from "../../ui/button";

function PriceFilter() {
  const filterContent = (
    <div>
      <h3>PRICE RANGE</h3>
      <div>
        <input placeholder="min" />
        -
        <input placeholder="max" />
      </div>
      <Button type="primary"> DONE</Button>
    </div>
  );

  return (
    <Popover content={filterContent}>
      <Button type="primary">PRICE</Button>
    </Popover>
  );
}

export default PriceFilter;

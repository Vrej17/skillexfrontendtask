import { useState } from "react";
import { useDebounce } from "react-use";

export default function MinMaxSearch({ setRangeValue, rangeValue }) {
  const [val, setVal] = useState(rangeValue);

  useDebounce(
    () => {
      setRangeValue(val);
    },
    1500,
    [val]
  );

  const handleMinChange = (e) => {
    const minValue = e.target.value === "" ? null : +e.target.value;
    setVal((prev) => ({ ...prev, min: minValue }));
  };

  const handleMaxChange = (e) => {
    const maxValue = e.target.value === "" ? null : +e.target.value;
    setVal((prev) => ({ ...prev, max: maxValue }));
  };

  return (
    <>
      <input
        type="number"
        value={val.min || ""}
        onChange={handleMinChange}
        className="w-1/3 rounded-xl outline-none border border-solid py-1 pl-1"
        placeholder="Min"
      />
      <p className="opacity-60">to</p>
      <input
        type="number"
        value={val.max || ""}
        onChange={handleMaxChange}
        className="w-1/3 rounded-xl outline-none border border-solid py-1 pl-1"
        placeholder="Max"
      />
    </>
  );
}

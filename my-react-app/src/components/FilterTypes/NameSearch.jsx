import { SearchOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import { useDebounce } from "react-use";

export default function NameSearch({ setNameSearch }) {
  const [val, setVal] = useState("");

  useDebounce(
    () => {
      setNameSearch(val);
    },
    1500,
    [val]
  );
  return (
    <label className="relative w-3/4 ml-3">
      <SearchOutlined className="absolute top-2 left-2 text-gray-500" />
      <input
        value={val}
        onChange={(e) => setVal(e.target.value)}
        className="rounded-lg border bg-slate-100 border-solid py-2 w-full pl-7 outline-none"
        placeholder="Name"
      />
    </label>
  );
}

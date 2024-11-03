import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import clsx from "clsx";
import React from "react";

export default function Loading({loading}) {
  return (
    <div
      className={clsx(
        "transition-opacity duration-400 absolute bg-slate-400/60 rounded-xl p-4",
        loading ? "opacity-100" : "opacity-0"
      )}
    >
      <Spin
        indicator={
          <LoadingOutlined className="text-main-color text-3xl" spin />
        }
        size="large"
      />
    </div>
  );
}

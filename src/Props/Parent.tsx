import React from "react";
import Child from "./Child";

function Parent() {
  return (
    <div>
      <Child color="red" onClick={() => console.log("Click")} />
    </div>
  );
}

export default Parent;

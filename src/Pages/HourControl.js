import React from "react";
import HourControlInsert from "../Components/HourControlInsert";
import HourControlTable from "../Components/HourControlTable";

function HourControl() {
  return (

    <div>
      <h1>Control Panel</h1>
      <HourControlInsert />
      <HourControlTable />
    </div>
  )
}

export default HourControl;
import React from "react";
import Centered from "common/components/flex/Center";

import { ScaleLoader } from "react-spinners";

function Loading({size = 4, sizeUnit = 'rem', loading = true, color = 'rgba(54, 255, 162, .8)'}) {
  return (
    <Centered style={{ height: "100vh" }} vertical horizontal>
      <ScaleLoader size={size} sizeUnit={sizeUnit} loading={loading} color={color}/>
      正在加载...
    </Centered>
  );
}

export default Loading;

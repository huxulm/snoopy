import React from "react";
import Centered from "common/components/flex/Center";

import { BounceLoader } from "react-spinners";

function Loading({size = 4, sizeUnit = 'rem', loading = true, color = '#D3D7DA'}) {
  return (
    <Centered style={{ height: "100vh" }} vertical horizontal>
      <BounceLoader size={size} sizeUnit={sizeUnit} loading={loading} color={color}/>
    </Centered>
  );
}

export default Loading;

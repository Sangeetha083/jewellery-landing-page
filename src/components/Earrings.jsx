import React from 'react';
import JewelleryPage from './Jewellery';
function Earrings() {
    return (
      <JewelleryPage
        title="Premium Earrings Collection"
        queries={[
          "gold earrings",
          "diamond earrings",
          "pearl earrings",
          "silver earrings",
        ]}
      />
    );
}

export default Earrings;
import React from 'react';
import JewelleryPage from './Jewellery';
function Bangles() {
    return (
      <JewelleryPage
        title="Premium Bangles Collection"
        queries={[
          "gold bangles",
          "diamond bangles",
          "pearl bangles",
          "silver bangles",
        ]}
      />
    );
}

export default Bangles;
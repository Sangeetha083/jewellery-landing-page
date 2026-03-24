import React from 'react';
import JewelleryPage from './Jewellery';
function Bracelets() {
    return (
      <JewelleryPage
        title="Premium Bracelets Collection"
        queries={[
          "gold bracelets",
          "diamond bracelets",
          "pearl bracelets",
          "silver bracelets",
        ]}
      />
    );
}

export default Bracelets;
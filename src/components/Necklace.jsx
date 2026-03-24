import JewelleryPage from "./Jewellery";

function Necklace() {
  return (
    <JewelleryPage
      title="Premium Necklaces Collection"
      queries={[
        "gold necklace",
        "diamond necklace",
        "pearl necklace",
        "silver necklace",
      ]}
    />
  );
}

export default Necklace;

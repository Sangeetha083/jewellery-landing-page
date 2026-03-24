import JewelleryPage from "./Jewellery";

function Rings() {
  return (
    <JewelleryPage
      title="Premium Rings Collection"
      queries={["gold ring", "diamond ring", "pearl ring", "silver ring"]}
    />
  );
}

export default Rings;

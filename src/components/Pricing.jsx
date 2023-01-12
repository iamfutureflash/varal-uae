import PricingSM from "./pricing_screens/PricingSM"
import PricingMD from "./pricing_screens/PricingMD"
function Pricing() {
  return (
    <>
    <div className="md:hidden">
      <PricingSM />
    </div>
    <div className="hidden md:block">
      <PricingMD />
    </div>
    </>
  )
}

export default Pricing
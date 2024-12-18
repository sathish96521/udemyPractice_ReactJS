import logo from "../../assets/investment-calculator-logo.png"

export default function HeaderCal() {
  return (
    <header id="header">
      <img src={logo} alt="Invest calculator logo" height={200} width={50} />
      <h1>Investment Calculator</h1>
    </header>
  );
}

import './SummerTap.css';

const SummerTap = () => (
  <div className="summerTap">
    <h1 className="animate-charcter">Kesätappi 2022</h1>
    <p className="havana">
      Tänä vuonna Kesätappia vietetään Mountain Bayn hiekkarannoilla teemalla
      Cuba Libre!
      Luvassa on ainakin saunomista, holittomia ja holillisia drinkkejä
      sekä tunnelmaa luovaa musiikkia!
    </p>
    <a className="havana-link" href={process.env.REACT_APP_SECRET_LINK}>Klikkaa tästä Telegrammiin</a>
  </div>
);

export default SummerTap;

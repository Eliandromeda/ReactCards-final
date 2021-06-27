
const Gauge = (props) => {
  return(
  <div className="gauge">
    <div className={props.firstBar}>
      <img src={props.firstIcon} alt={props.firstAlt} />
      <label className={props.firstPercentage}>70%</label>
    </div>
    <div className={props.secondBar}>
      <label className={props.secondPercentage}>30%</label>
      <img src={props.secondIcon} alt={props.secondAlt} />
    </div>
  </div>
  );
}

export default Gauge;

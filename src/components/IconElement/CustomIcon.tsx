type PropsValue = {
  outerClass: string;
  innerClass: string;
  value?: string;
  valueFunction?: () => void;
  srcAndAlt?: any;
};

function CustomIcon({
  outerClass,
  innerClass,
  value,
  valueFunction,
  srcAndAlt,
}: PropsValue) {
  if (valueFunction) {
    return (
      <div className={outerClass} onClick={valueFunction}>
        <i className={innerClass}></i> {value}
      </div>
    );
  } else if (srcAndAlt) {
    return (
      <div className={outerClass}>
        <img className={innerClass} src={srcAndAlt.src} alt={srcAndAlt.alt} />
      </div>
    );
  } else {
    return (
      <div className={outerClass}>
        <i className={innerClass}></i> {value}
      </div>
    );
  }
}

export default CustomIcon;

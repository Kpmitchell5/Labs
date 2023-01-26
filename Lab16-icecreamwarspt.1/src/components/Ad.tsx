import "../css/Ad.css";

interface AdProperties {
  flavor: string;
  isLight: boolean;
  fontSize: number;
}

export function Ad(props: AdProperties) {
  let className = "Ad" + (props.isLight ? "Ad--light" : "");
  return (
    <div className={className}>
      <p>Vote for:</p>
      <p style={{ fontSize: props.fontSize }}>{props.flavor}</p>
    </div>
  );
}

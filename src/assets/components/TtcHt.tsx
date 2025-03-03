type TTCProps = {
  value: number;
  taxe: number;
};

const TtcHt = ({ value, taxe }: TTCProps) => {
  return (value / (1 + taxe / 100)).toFixed(2);
};

export default TtcHt;

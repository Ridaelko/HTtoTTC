type HTProps = {
  value: number;
  taxe: number;
};

const htTtc = ({ value, taxe }: HTProps) => {
  return ((value * taxe) / 100 + value).toFixed(2);
};

export default htTtc;

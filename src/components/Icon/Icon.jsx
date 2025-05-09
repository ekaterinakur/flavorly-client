const Icon = ({ name, size = 24, color, className = '' }) => (
  <svg className={className} width={size} height={size} style={{ color }}>
    <use href={`/icons.svg#icon-${name}`} />
  </svg>
);

export default Icon;

export function PlaceholderSVG({
  width = 400,
  height = 300,
  text = "Medical Illustration",
}: {
  width?: number
  height?: number
  text?: string
}) {
  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} xmlns="http://www.w3.org/2000/svg">
      <rect width={width} height={height} fill="#f0f9ff" />
      <rect x="0" y="0" width={width} height={height} fill="none" stroke="#0ea5e9" strokeWidth="4" />
      <text
        x="50%"
        y="50%"
        fontFamily="Arial, sans-serif"
        fontSize="20"
        textAnchor="middle"
        fill="#0ea5e9"
        dominantBaseline="middle"
      >
        {text}
      </text>
      <text
        x="50%"
        y="calc(50% + 30px)"
        fontFamily="Arial, sans-serif"
        fontSize="14"
        textAnchor="middle"
        fill="#0ea5e9"
        dominantBaseline="middle"
      >
        (Placeholder Image)
      </text>
    </svg>
  )
}


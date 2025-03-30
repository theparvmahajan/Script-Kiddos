import { type NextRequest, NextResponse } from "next/server"

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams
  const width = Number.parseInt(searchParams.get("width") || "400", 10)
  const height = Number.parseInt(searchParams.get("height") || "300", 10)
  const text = searchParams.get("text") || "Medical Illustration"

  // Create an SVG placeholder
  const svg = `
    <svg
      width="${width}"
      height="${height}"
      viewBox="0 0 ${width} ${height}"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="${width}" height="${height}" fill="#f0f9ff" />
      <rect x="0" y="0" width="${width}" height="${height}" fill="none" stroke="#0ea5e9" strokeWidth="4" />
      <text
        x="50%"
        y="50%"
        font-family="Arial, sans-serif"
        font-size="20"
        text-anchor="middle"
        fill="#0ea5e9"
        dominant-baseline="middle"
      >
        ${text}
      </text>
      <text
        x="50%"
        y="calc(50% + 30px)"
        font-family="Arial, sans-serif"
        font-size="14"
        text-anchor="middle"
        fill="#0ea5e9"
        dominant-baseline="middle"
      >
        (Placeholder Image)
      </text>
    </svg>
  `

  return new NextResponse(svg, {
    headers: {
      "Content-Type": "image/svg+xml",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  })
}


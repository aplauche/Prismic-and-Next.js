import { PrismicLink } from "@prismicio/react"


// Adds a div around link text to allow custom styling
const CustomLink = ({link, text, className}) => {
  return (
    <PrismicLink field={link}>
      <div className={className}>{text}</div>
    </PrismicLink>
  )
}

export default CustomLink
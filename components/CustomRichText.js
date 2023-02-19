import { PrismicRichText } from '@prismicio/react'

// Wrap the output of PrismicRichText to allow a custom classname for styling
const CustomRichText = ({field, className}) => {
  return (
    field &&
    <div className={className}>
      <PrismicRichText field={field} />
    </div>
  )
}

export default CustomRichText
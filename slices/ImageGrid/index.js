import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import styles from './ImageGrid.module.scss'

/**
 * @typedef {import("@prismicio/client").Content.ImageGridSlice} ImageGridSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ImageGridSlice>} ImageGridProps
 * @param { ImageGridProps }
 */
const ImageGrid = ({ slice }) => (
  <section className={styles.slice_imageGrid}>
    <div>
      {
        slice?.items?.map((item, i) =>
          <img src={item.image.url} alt={item.image.alt} />
        )
      }
    </div>
  </section>
)

export default ImageGrid
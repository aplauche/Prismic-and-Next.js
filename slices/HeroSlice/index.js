import React from 'react'

import Image from 'next/image'
import { PrismicNextImage } from '@prismicio/next'
import CustomRichText from '../../components/CustomRichText'

import { PrismicLink } from '@prismicio/react'
import LogSlice from '../../components/LogSlice'

import styles from './Hero.module.scss'

/**
 * @typedef {import("@prismicio/client").Content.HeroSliceSlice} HeroSliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HeroSliceSlice>} HeroSliceProps
 * @param { HeroSliceProps }
 */
const HeroSlice = ({ slice }) => (
  <section className={styles.slice_hero}>
    {/* <LogSlice slice={slice} /> */}
    <PrismicNextImage className="image-field" field={slice.primary.image} />

    <CustomRichText field={slice.primary.title} />

    <CustomRichText field={slice.primary.description}/>


    {
      slice?.items?.map((item, i) =>
        <PrismicLink field={item.cta_link}>{item.cta_text}</PrismicLink>
      )
    }

  </section>
)

export default HeroSlice
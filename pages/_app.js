import '../styles/globals.css'

import Link from 'next/link'
import { PrismicProvider } from '@prismicio/react'
import { PrismicPreview } from '@prismicio/next'
import { linkResolver, repositoryName } from '../prismicio'

function MyApp({ Component, pageProps }) {
  return (
    <PrismicProvider
      // define our app routing structure
      linkResolver={linkResolver}
      // When we have internal links within prismic content
      internalLinkComponent={({ ...props }) => (
        <Link {...props} />
      )}
    >
      <PrismicPreview repositoryName={repositoryName}>
        <Component {...pageProps} />
      </PrismicPreview>
    </PrismicProvider>
  )
}

export default MyApp

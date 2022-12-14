import * as React from "react"
import { Helmet } from "react-helmet"

export default function Head({ title, description, image }) {
  return (
    <Helmet
      htmlAttributes={{
        lang: "en-us",
      }}
    >
      <meta charSet="utf-8" />
      <title>{title}</title>
      {description && (
        <meta
          name="description"
          property="og:description"
          content={description}
        />
      )}
      <meta property="og:title" content={title} />
      {image && <meta property="og:image" content={image.url} />}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" />
      {description && <meta name="twitter:description" content={description} />}
      {image && <meta name="twitter:image" content={image.url} />}
    </Helmet>
  )
}

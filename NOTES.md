# NextJS

### <b>Pages</b>

## File based routing
- Every file and folder in pages correspond to routes
- [id] will be used for dynamic routes
- [...id] is used for catch all routes
- default `404` page provided by Nextjs
- default `500` page provided for 500 errors

## Pre-rendering
- Static site generation
- Incremental static regeneration
- Server-side rendering

## getStaticProps
- runs at server side
- can write server side code
- not included in the js bundle sent to the browser
- is allowed only in a page and do cannot be run from a regular component
- <b>runs at build time and in development runs at every request</b>

## Link Pre-fetching
- In addition to the html file, nextjs generates json data file which is sent to the client
- JSON file will be used in client side routing through next/link and next/router
- when you navigate to a page that is pre-rendered at build time, Nextjs fetches the json (pre-computed
at build time) and uses it as a prop to create a page component at client side
- client side page transitions will not call getStaticProps as only the exported json is used
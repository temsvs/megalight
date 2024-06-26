import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Mega-Light Application',
    short_name: 'Mega-Light App',
    description:
      'Mega-Light магазин одежды, аксесуаров, концелярии и сувениров',
    start_url: '/',
    background_color: '#fff',
    theme_color: '#fff',
    display: 'standalone',
    icons: [
      {
        src: '/img/icon.svg',
        sizes: '196x196 512x512 144x144 192x192 128x128 120x120 180x180',
        type: 'image/svg',
        purpose: 'maskable',
      },
    ],
  }
}

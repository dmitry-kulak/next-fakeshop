import localFont from '@next/font/local';

export default localFont({
  variable: '--font-main',
  src: [
    {
      path: './fonts/Monrserrat-Black.woff2',
      weight: '900',
      style: 'normal',
    },
    {
      path: './fonts/Monrserrat-Bold.woff2',
      weight: '700',
      style: 'italic',
    },
    {
      path: './fonts/Monrserrat-Medium.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/Monrserrat-Regular.woff2',
      weight: '500',
      style: 'italic',
    },
  ],
})
import { NextPageWithLayout } from '@/types/pageLayout';
import type { AppProps } from 'next/app';
import Layout from './_layout';
import '@/styles/globals.scss'
 
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};
 
export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => <Layout>{page}</Layout>);
 
  return getLayout(<Component {...pageProps} />);
}

// export default function App({ Component, pageProps }: AppProps) {
//   return (
//     <Layout>
//       <Component {...pageProps} />
//     </Layout>
//   )
// }

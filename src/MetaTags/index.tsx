import Head from 'next/head';

export default function Metatags({
  title = 'Factor Launch',
  description = 'Factor Launch is a decentralized, open-source, decentralized infrastructure to launch projects, NFTs, token baskets, and derivatives with fair and accessible opportunities.',
  image = 'https://firebasestorage.googleapis.com/v0/b/factor-launch.appspot.com/o/meta-tags-img.png?alt=media&token=5173623f-aa27-47d9-b494-f2fe68f26595',
}) {
  return (
    <Head>
      <title>{title}</title>
      <meta name='twitter:card' content='summary' />
      <meta name='twitter:site' content='@FactorLaunch' />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:image' content={image} />

      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:image' content={image} />
    </Head>
  );
}

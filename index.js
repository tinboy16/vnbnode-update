import React from 'react';
import styles from './styles.module.css';

const MainnetFeatures = [
  {
    title: 'DYMENSION',
    Svg: require('@site/static/img/mainnet/dymension.svg').default,
    description: '',
    buttons: [
      { label: 'Install', url: '/docs/Mainnet/Dymension/' },
      { label: 'Explorer', url: 'https://explorer.vnbnode.com/' },
      { label: 'Stake', url: 'https://wallet.keplr.app/chains/dymension?modal=validator&chain=dymension_1100-1&validator_address=dymvaloper1mgu88mkl88q5l9h6wvzus7ul2fc263g4hpt2mj'},
    ]
  },
  {
    title: 'Tangle',
    Svg: require('@site/static/img/testnet/tangle.svg').default,
    buttons: [
      { label: 'Install', url: '/docs/Testnet_END/tangle' },
      { label: 'Explorer', url: 'https://explorer.tangle.tools/' },
      { label: 'Stake', url: '/blog/tangle-mainnet-stake'},   
    ]
  },
  {
    title: 'PACTUS',
    Svg: require('@site/static/img/mainnet/pactus.svg').default,
    description: '',
    buttons: [
      { label: 'Install', url: '/docs/Mainnet/Pactus' },
      { label: 'Explorer', url: 'https://pacviewer.com/' },
    ]
  },
  {
    title: 'Axelar',
    Svg: require('@site/static/img/mainnet/axler.svg').default,
    description: '',
    buttons: [
      { label: 'Install', url: '/docs/Mainnet/near-rpc.en' },
      { label: 'Explorer', url: 'https://explorer.vnbnode.com' },
    ]
  },
  {
    title: 'NEAR',
    Svg: require('@site/static/img/mainnet/near.svg').default,
    description: '',
    buttons: [
      { label: 'Install', url: '/docs/Mainnet/near-rpc.en' },
      { label: 'Explorer', url: 'https://explorer.vnbnode.com/' },
    ]
  },
  {
    title: 'MASSA',
    Svg: require('@site/static/img/mainnet/massa.svg').default,
    description: '',
    buttons: [
      { label: 'Install', url: '/docs/Mainnet' },
      { label: 'Explorer', url: 'https://explorer.massa.net/' },
    ]
  },
];

const TestnetFeatures = [
  {
    title: 'Tanssi',
    Svg: require('@site/static/img/testnet/tanssi.svg').default,
    description: '',
    buttons: [
      { label: 'Install', url: 'https://github.com/vnbnode/VNBnode-Guides/tree/main/Testnet/Tanssi/' },
      { label: 'Explorer', url: 'https://polkadot.js.org/apps/?rpc=wss://fraa-dancebox-rpc.a.dancebox.tanssi.network#/explorer' },
    ]
  },
  {
    title: 'Avail',
    Svg: require('@site/static/img/testnet/avail.svg').default,
    description: '',
    buttons: [
      { label: 'Install', url: 'https://github.com/vnbnode/VNBnode-Guides/tree/main/Testnet' },
      { label: 'Explorer', url: 'https://avail-testnet.subscan.io/' },
    ]
  },

  {
    title: 'Alignedlayer',
    Svg: require('@site/static/img/testnet/alignedlayer.svg').default,
    description: '',
    buttons: [
      { label: 'Install', url: 'https://github.com/vnbnode/VNBnode-Guides/tree/main/Testnet/Alignedlayer/' },
      { label: 'Explorer', url: 'http://testnet.explorer.vnbnode.com/Alignedlayer-testnet' },
    ]
  },

  {
    title: '0G',
    Svg: require('@site/static/img/testnet/0g.svg').default,
    description: '',
    buttons: [
      { label: 'Install', url: 'https://github.com/vnbnode/VNBnode-Guides/tree/main/Testnet/0G' },
      { label: 'Explorer', url: 'http://testnet.explorer.vnbnode.com/' },
    ]
  },
  {
    title: 'initia',
    Svg: require('@site/static/img/testnet/initia.svg').default,
    description: '',
    buttons: [
      { label: 'Install', url: 'https://github.com/vnbnode/VNBnode-Guides/tree/main/Testnet/Initia' },
      { label: 'Explorer', url: 'http://testnet.explorer.vnbnode.com/' },
    ]
  },
  {
    title: 'Elixir',
    Svg: require('@site/static/img/testnet/elixir.svg').default,
    description: '',
    buttons: [
      { label: 'Install', url: 'https://github.com/vnbnode/VNBnode-Guides/tree/main/Testnet' },
      { label: 'Explorer', url: 'http://testnet.explorer.vnbnode.com/' },
    ]
  },
  {
    title: 'Entrypoint',
    Svg: require('@site/static/img/testnet/entrypoint.svg').default,
    description: '',
    buttons: [
      { label: 'Install', url: 'https://github.com/vnbnode/VNBnode-Guides/tree/main/Testnet/Entrypoint' },
      { label: 'Explorer', url: 'http://testnet.explorer.vnbnode.com/' },
    ]
  },
  {
    title: 'Airchains',
    Svg: require('@site/static/img/testnet/airchains.svg').default,
    description: '',
    buttons: [
      { label: 'Install', url: 'https://github.com/vnbnode/VNBnode-Guides/tree/main/Testnet/Airchain' },
      { label: 'Explorer', url: 'http://testnet.explorer.vnbnode.com/' },
    ]
  },
{
  title: 'CrossFi',
  Svg: require('@site/static/img/testnet/crossfi.svg').default,
  buttons: [
    { label: 'Install', url: 'https://github.com/vnbnode/VNBnode-Guides/tree/main/Testnet/crossfi/' },
    { label: 'Explorer', url: 'http://explorer.vnbnode.com/Crossfi-testnet' },

  ]
},

  {
    title: 'LAVA',
    Svg: require('@site/static/img/testnet/lava.svg').default,
    buttons: [
      { label: 'Install', url: 'https://github.com/vnbnode/VNBnode-Guides/tree/main/Testnet/lava' },
      { label: 'Explorer', url: 'https://explorer.vnbnode.com/' },
    ]
  },
  {
    title: 'Artela',
    Svg: require('@site/static/img/testnet/artela.svg').default,
    buttons: [
      { label: 'Install', url: 'https://github.com/vnbnode/VNBnode-Guides/tree/main/Testnet/artela' },
      { label: 'Explorer', url: 'https://explorer.vnbnode.com/' },
    ]
  },
  {
    title: 'Redbelly',
    Svg: require('@site/static/img/testnet/redbelly.svg').default,
    buttons: [
      { label: 'Install', url: 'https://github.com/vnbnode/VNBnode-Guides/tree/main/Testnet/artela' },
      { label: 'Explorer', url: 'https://explorer.vnbnode.com/' },
    ]
  },
  {
    title: 'VOI',
    Svg: require('@site/static/img/testnet/voi.svg').default,
    buttons: [
      { label: 'Install', url: 'https://github.com/vnbnode/VNBnode-Guides/tree/main/Testnet/voi' },
      { label: 'Monitor', url: 'https://voi-nodes.dev/' },
    ]
  },
  
  {
    title: 'SIDE',
    Svg: require('@site/static/img/testnet/side.svg').default,
    buttons: [
      { label: 'Install', url: 'https://github.com/vnbnode/VNBnode-Guides/tree/main/Testnet/side' },
      { label: 'Explorer', url: 'https://testnet.side.one/staking' },
    ]
  },
];

function FeatureCard({ Svg, image, title, description, buttons }) {
  return (
    <div className={styles.featureCard}>
      <div className={styles.featureCardContent}>
        <div className={styles.featureHeader}>
          <div className={styles.featureHeaderContent}>
            {/* Tiêu đề */}
            <h2 className={styles.featureTitle}>{title}</h2>
          </div>
        </div>
        {/* Ảnh */}
        <div className={styles.featureImageContainer}>
          {Svg ? <Svg className={styles.featureCardSvg} role="img" /> : <img src={image} alt={title} className={styles.featureCardImg} />}
        </div>
        {/* Mô tả */}
        <p>{description}</p>
        {/* Các nút */}
        <div className={styles.buttonsContainer}>
          {buttons.map((button, index) => (
            <a key={index} href={button.url} className={styles.featureButton}>
              {button.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}




export default function HomepageFeatures() {
  return (
    <section>
      <h2 className={styles.mainnetTitle}>Mainnet</h2>
      <section className={styles.features}>
        {MainnetFeatures.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </section>
      <h2 className={styles.testnetTitle}>Testnet</h2>
      <section className={styles.features}>
        {TestnetFeatures.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </section>
    </section>
  );
}

const MainnetFeatures = [
  {
    title: 'AVAIL',
    Svg: require('@site/static/img/mainnet/avail.svg').default,
    description: '',
    buttons: [
      { label: 'Install', url: 'https://github.com/vnbnode/VNBnode-Guides/tree/main/Mainnet/Avail' },
      { label: 'Explorer', url: 'https://explorer.avail.so/' },
      { label: 'Stake', url: 'https://staking.avail.tools/'},
    ]
  },
  {
    title: 'DYMENSION',
    Svg: require('@site/static/img/mainnet/dymension.svg').default,
    description: '',
    buttons: [
      { label: 'Install', url: '/docs/Mainnet/Dymension/' },
      { label: 'Explorer', url: 'https://explorer.vnbnode.com/' },
    ]
  },
  {
    title: 'Self Chain',
    Svg: require('@site/static/img/mainnet/selfchain.svg').default,
    buttons: [
      { label: 'Install', url: 'https://github.com/vnbnode/VNBnode-Guides' },
      { label: 'Explorer', url: 'https://explorer.vnbnode.com/' },
      { label: 'Stake', url: 'https://staking.selfchain.xyz/'},   
    ]
  },
  {
    title: 'Tangle',
    Svg: require('@site/static/img/testnet/tangle.svg').default,
    buttons: [
      { label: 'Install', url: '/docs/Testnet_END/tangle' },
      { label: 'Explorer', url: 'https://explorer.tangle.tools/' },
      { label: 'Stake', url: 'https://app.tangle.tools/nomination'},   
    ]
  },
  {
    title: 'LAVA',
    Svg: require('@site/static/img/mainnet/lava.svg').default,
    buttons: [
      { label: 'Install', url: 'https://github.com/vnbnode/VNBnode-Guides/tree/main/Mainnet/lava' },
      { label: 'Explorer', url: 'https://explorer.vnbnode.com/' },
      { label: 'Stake', url: 'https://wallet.keplr.app/chains/lava?modal=staking&chain=lava-mainnet-1&validator_address=lava%40valoper1mfan7gazv43593pz8esmgy8vahcpf6636sprvx&step_id=2'},   
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
    title: 'Dill',
    Svg: require('@site/static/img/testnet/dill.svg').default,
    description: '',
    buttons: [
      { label: 'Install', url: 'https://github.com/vnbnode/VNBnode-Guides/tree/main/Testnet/Dill' },
      { label: 'Explorer', url: 'https://andes.dill.xyz' },
    ]
  },
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

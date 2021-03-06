export const environment = {
  production: true,
  data: {
    mailing: 'GRANDESCONTASDS',
    bannerTop: {
      name: 'Grandes Contas',
      desktop: 'assets/img/dental-speed/topo-grandes-contas.png',
      mobile: 'assets/img/dental-speed/topo-grandes-contas-mobile.png'
    },
    get url() {
      return 'data/dental-speed';
    }
  },
  api: {
    protocol: 'https',
    host: 'api.dentalspeed.com',
    get url() {
      return `${this.protocol}://${this.host}`;
    }
  }
};

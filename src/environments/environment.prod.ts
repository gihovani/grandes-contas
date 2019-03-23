export const environment = {
  production: true,
  data: {
    bannerTop: {
      name: 'Grandes Contas',
      desktop: 'assets/img/topo-grandes-contas.png',
      mobile: 'assets/img/topo-grandes-contas-mobile.png'
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

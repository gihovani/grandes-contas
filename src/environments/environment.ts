export const environment = {
  production: false,
  api: {
    protocol: 'https',
    host: 'api.dentalspeed.com',
    get url() {
      return `${this.protocol}://${this.host}`;
    }
  }
};

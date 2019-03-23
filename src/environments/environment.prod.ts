export const environment = {
  production: true,
  api: {
    protocol: 'https',
    host: 'api.dentalspeed.com',
    get url() {
      return `${this.protocol}://${this.host}/`;
    }
  }
};

import path from 'path';
export default {
  publicPath() {
    if (process.env.FrontEnd) {
      return path.resolve(__dirname, './../', 'public/dist');
    }
    return path.resolve(__dirname, './../', 'public/prod');
  },
  comingSoonPath() {
    return path.resolve(__dirname, './../', 'comingSoon/prod');
  }
};

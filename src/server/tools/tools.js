import path from 'path';
const pathFix = () => {
  if (process.env.TESTING) {
    return './../../../';
  }
  return './../';
};
export default {
  /**
   * Returns the Path of the public folder
   *
   * **Do not change if you don't know what you're doing!!**
   */
  publicPath() {
    if (process.env.FrontEnd) {
      return path.resolve(__dirname, pathFix(), 'public/dist');
    }
    return path.resolve(__dirname, pathFix(), 'public/prod');
  },
  comingSoonPath() {
    return path.resolve(__dirname, pathFix(), 'comingSoon/prod');
  },
};

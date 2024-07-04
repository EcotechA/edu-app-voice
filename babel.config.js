module.exports = function (api) {
  api.cache(true);
  const plugins = [];

  plugins.push('react-native-reanimated/plugin');
  plugins.push('nativewind/babel');

  return {
    presets: ['babel-preset-expo'],
    plugins,
  };
};

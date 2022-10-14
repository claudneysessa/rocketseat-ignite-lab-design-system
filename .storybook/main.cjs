module.exports = {
    "stories": [
      "../src/**/*.stories.mdx",
      "../src/**/*.stories.@(js|jsx|ts|tsx)"
    ],
    "addons": [
      "@storybook/addon-links",
      "@storybook/addon-essentials",
      "@storybook/addon-interactions"
    ],
    "framework": "@storybook/react",
    "core": {
      "builder": "@storybook/builder-vite"
    },
    "features": {
      "storyStoreV7": true
    },
  
    // Vite config
    // Configuração para Deploy no GitHub
    viteFinal: (config, { configType }) => {
      if (configType === 'PRODUTION') {
        config.base = '/rocketseat-ignite-lab-design-system/'
      }
      
      return config
    },
  }
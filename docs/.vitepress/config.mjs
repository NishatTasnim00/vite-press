import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Frontend Documentation",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
    ],

    sidebar: [
      {
        text: 'Content',
        items: [
          { text: 'Flight', link: '/Flight' },
          { text: 'Hotel', link: '/Hotel' },
          { text: 'Tour', link: '/Tour' },

        ]
      }
    ],

  }
})

// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Public address of the site, used for canonical URLs and link previews.
  // Change it if the site moves to a custom domain.
  site: 'https://sakibabdullah.pages.dev',

  image: {
    // Every <Image> gets a srcset for different screen sizes automatically.
    layout: 'constrained',
    responsiveStyles: true,
  },
});

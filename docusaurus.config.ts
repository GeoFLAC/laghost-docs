import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

const config: Config = {
  title: 'Laghost User Manual',
  tagline: 'Lagrangian High-Order Solver for Tectonics',
  favicon: 'img/favicon.png',

  url: 'https://geoflac.github.io',
  baseUrl: '/laghost-docs/',
  projectName: 'laghost-docs',
  organizationName: 'geoflac',
  trailingSlash: false,
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          remarkPlugins: [remarkMath],
          rehypePlugins: [[rehypeKatex, {output: 'html'}]],
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Laghost',
      logo: {
        alt: 'GeoFLAC Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'usermanualSidebar',
          position: 'left',
          label: 'User Manual',
        },
        {
          href: 'https://github.com/GeoFLAC/Laghost',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Introduction',
              to: '/docs/intro',
            },
            {
              label: 'Theory',
              to: '/docs/theory',
            },
            {
              label: 'Usage',
              to: '/docs/usage',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GeoFLAC on GitHub',
              href: 'https://github.com/GeoFLAC/',
            },
          ],
        },
        {
          title: 'Related Projects',
          items: [
            {
              label: 'Laghost on GitHub',
              href: 'https://github.com/GeoFLAC/Laghost/',
            },
            {
              label: 'DynEarthSol on GitHub',
              href: 'https://github.com/GeoFLAC/DynEarthSol/',
            },
            {
              label: 'MFEM',
              href: 'https://mfem.org/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Team GeoFLAC. Built with Docusaurus. Supported by the National Science Foundation Award 2104002.
  <br/>
  <a href="https://www.nsf.gov/" target="_blank" rel="noopener noreferrer">
    <img src="img/nsf-logo.png" alt="NSF Logo" style="height:40px; margin-top:8px;"/>
  </a>`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;

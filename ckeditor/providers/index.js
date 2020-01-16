const extraProviders = [
  {
    name: 'tenxunshipin',
    url: /^v\.qq\.com\/(\w+)/,
    html: match =>
      `<iframe frameborder="0" height="600px" width="100%" src="//${match.input}" allowFullScreen="true"></iframe>`,
  },
  {
    name: 'iframe',
    url: /<iframe[^>]*>?/,
    html: match => {
      return `${match.input}`;
    },
  },
];

export default extraProviders;

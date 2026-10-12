module.exports = {
  reactStrictMode: true,
  poweredByHeader: false,
  // Allow contact form attachments up to 4 MB (default Server Action limit is 1 MB)
  experimental: { serverActions: { bodySizeLimit: "5mb" } }
};

// Fix footer contact link to point to about.html instead of about/
hexo.extend.filter.register('after_render:html', function(str, data) {
  // Only process if this is a page (not a post or other content)
  if (data.page) {
    // Replace the contact author link in footer
    str = str.replace(
      /<a href="[^"]*about\/"[^>]*>([^<]*联系博主[^<]*)<\/a>/g,
      '<a href="/about.html">$1</a>'
    );
  }
  return str;
});
import lume from "lume/mod.ts";
import sitemap from "lume/plugins/sitemap.ts";
import source_maps from "lume/plugins/source_maps.ts";

const site = lume();

site.use(sitemap());
site.use(source_maps());

site.ignore("/README.md");

export default site;

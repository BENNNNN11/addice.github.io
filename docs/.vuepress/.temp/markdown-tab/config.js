import { CodeTabs } from "D:/datasets/addice-blogs/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.61_markdown-it@14.1.0_vuepress@2.0.0-rc.18_@vuepress+b_p2dmsvljs2bsjp467y3maq4fs4/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js";
import { Tabs } from "D:/datasets/addice-blogs/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.61_markdown-it@14.1.0_vuepress@2.0.0-rc.18_@vuepress+b_p2dmsvljs2bsjp467y3maq4fs4/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js";
import "D:/datasets/addice-blogs/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.61_markdown-it@14.1.0_vuepress@2.0.0-rc.18_@vuepress+b_p2dmsvljs2bsjp467y3maq4fs4/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};

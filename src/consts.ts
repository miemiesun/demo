// 引入的图片对象，用于 Astro 的 <Image> 组件
// 详见 https://docs.astro.build/en/guides/images/#image--astroassets
import authorAvatarImage from "./assets/Avater.png";
import headerImageDay from "./assets/Katong2 .png";
import headerImageNight from "./assets/Header.jpg";

// 网站的 <html> 语言标签
export const SITE_LANGUAGE = "zh";

// 网站名称
export const SITE_TITLE = '面包坊集';

// 网站的副标题
export const SITE_DESCRIPTION = '在面包的世界里，每一口都是故事';

// 博主的昵称
export const SITE_AUTHOR_NAME = "miemiesun";

// 博主的头像
export const SITE_AUTHOR_AVATAR = authorAvatarImage;

// 网站版权起始年份
export const SITE_COPYRIGHT_YEAR_START = "2012";

// 网站头部导航菜单
export const SITE_MENU: { title: string, href: string, target: string }[] = [
    { title: "首页", href: "./", target: "" },
    { title: "博客", href: "./blog/", target: "" },
    { title: "购买链接", href: "./page/links/", target: "" },
    { title: "关于", href: "./page/about/", target: "" },
    
]

// 网站横幅背景图片（明亮主题）
export const SITE_HEAD_IMAGE_DAY = headerImageDay;

// 网站横幅背景图片（暗黑主题）
export const SITE_HEAD_IMAGE_NIGHT = headerImageNight;

// 一页展示的博文数量
export const BLOG_PAGINATION_SIZE = 6;

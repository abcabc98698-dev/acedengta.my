// Get site URL from environment variable, use default value if not set
const SITE_URL = import.meta.env.PUBLIC_SITE_URL || 'https://acedengta.my';

export const siteConfig = {
	title: "灯塔加速器",
	nameEn: "AceDengta",
	slogan: "自 2020 年稳定运营 · 企业级 IEPL 专线 · VLESS 新一代极速网络",
	author: "灯塔加速器官方",
	url: SITE_URL,
	mail: "contact@acedengta.my",
	// 官方统一授权注册推广链接（全站按钮共用，严格设置 rel="nofollow sponsored noopener noreferrer" 防止本站权重流失）
	registerUrl: "https://sahude.gsyvipaff.com/#/?code=keqgvT5Y",
	loginUrl: "https://sahude.gsyvipaff.com/#/?code=keqgvT5Y",
	// 推荐标签
	tags: [
		"2020年运营",
		"IEPL专线",
		"VLESS",
		"年付低价",
		"AI工具",
		"流媒体",
		"自研客户端"
	],
	meta: {
		title: "灯塔加速器官网 — 2020稳定运营 | 企业级IEPL内网专线 | VLESS高速加速器",
		description: "灯塔加速器（AceDengta）官方品牌落地页。自2020年稳定运营的老牌综合型机场服务商，主打企业级IEPL内网专线与新一代VLESS协议。单节点最高2.5Gbps，全节点1倍率无暗扣。不限设备数量，完美解锁ChatGPT、Claude、Netflix、Disney+、TikTok跨境直播，年付低至8.25元/月，另有斯诺克147永久套餐无忧过期。",
		keywords: "灯塔加速器, 灯塔加速器官网, acedengta, 灯塔机场, IEPL专线机场, VLESS机场, 科学上网, 翻墙机场, ChatGPT加速器, TikTok直播专线, 4K流媒体加速",
		image: `${SITE_URL}/og.jpg`,
		twitterHandle: "@acedengta",
	},
	social: {
		twitter: "https://x.com/acedengta",
		twitterName: "acedengta",
		github: "https://github.com/acedengta",
		telegram: "https://t.me/acedengta_official",
		blog: `${SITE_URL}/blog`,
	},
	// 站长平台安全验证代码预留（直接填入或通过环境变量注入）
	verification: {
		google: import.meta.env.PUBLIC_GOOGLE_SITE_VERIFICATION || "",
		bing: import.meta.env.PUBLIC_BING_SITE_VERIFICATION || "",
		baidu: import.meta.env.PUBLIC_BAIDU_SITE_VERIFICATION || "",
		shenma: import.meta.env.PUBLIC_SHENMA_SITE_VERIFICATION || "",
	},
};

// Footer Social & Community Links
export const socialLinks = [
	{
		name: 'Telegram',
		url: 'https://t.me/acedengta_official',
		icon: `<svg class="icon ic-telegram" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>`
	},
	{
		name: 'Twitter',
		url: 'https://x.com/acedengta',
		icon: `<svg class="ic-twitter icon" width="1792" height="1792" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1684 408q-67 98-162 167 1 14 1 42 0 130-38 259.5t-115.5 248.5-184.5 210.5-258 146-323 54.5q-271 0-496-145 35 4 78 4 225 0 401-138-105-2-188-64.5t-114-159.5q33 5 61 5 43 0 85-11-112-23-185.5-111.5t-73.5-205.5v-4q68 38 146 41-66-44-105-115t-39-154q0-88 44-163 121 149 294.5 238.5t371.5 99.5q-8-38-8-74 0-134 94.5-228.5t228.5-94.5q140 0 236 102 109-21 205-78-37 115-142 178 93-10 186-50z" fill="currentColor"></path></svg>`
	},
	{
		name: 'RSS',
		url: '/rss.xml',
		icon: `<svg t="1730123988138" class="icon ic-rss ic-social" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="11766" width="256" height="256"><path d="M329.143 768q0 45.714-32 77.714t-77.714 32-77.715-32-32-77.714 32-77.714 77.715-32 77.714 32 32 77.714z m292.571 70.286q1.143 16-9.714 27.428-10.286 12-26.857 12H508q-14.286 0-24.571-9.428T472 844.57q-12.571-130.857-105.429-223.714T142.857 515.43q-14.286-1.143-23.714-11.429t-9.429-24.571v-77.143q0-16.572 12-26.857 9.715-9.715 24.572-9.715h2.857q91.428 7.429 174.857 46T472 515.43q65.143 64.571 103.714 148t46 174.857z m292.572 1.143q1.143 15.428-10.286 26.857-10.286 11.428-26.286 11.428H796q-14.857 0-25.429-10T759.43 843.43Q752.57 720.57 701.714 610T569.43 418t-192-132.286T144 227.43q-14.286-0.572-24.286-11.143t-10-24.857v-81.715q0-16 11.429-26.285 10.286-10.286 25.143-10.286H148q149.714 7.428 286.571 68.571t243.143 168q106.857 106.286 168 243.143t68.572 286.572z" p-id="11767"></path></svg>`
	},
];

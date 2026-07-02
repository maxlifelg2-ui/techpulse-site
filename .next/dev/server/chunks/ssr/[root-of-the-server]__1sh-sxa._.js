module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/Desktop/techpulse-site/app/favicon.ico (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/favicon.2vob68tjqpejf.ico" + (globalThis["NEXT_CLIENT_ASSET_SUFFIX"] || ''));}),
"[project]/Desktop/techpulse-site/app/favicon.ico.mjs { IMAGE => \"[project]/Desktop/techpulse-site/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$techpulse$2d$site$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/Desktop/techpulse-site/app/favicon.ico (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$techpulse$2d$site$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 256,
    height: 256
};
}),
"[project]/Desktop/techpulse-site/lib/articles.json.[json].cjs [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = [
    {
        "slug": "openai-משחקת-בדרך-של-אפל-למה-אנווידיה-צריכה-להיות-מודאגת",
        "headline": "OpenAI משחקת בדרך של אפל: למה אנווידיה צריכה להיות מודאגת?",
        "dek": "📱 \n\nOpenAI מעתיקה את אסטרטגיית ההשתכלול של אפל — פיתוח טכנולוגיה בבית במקום סמך על ספקים\n\nעיקרי הפרטים:\n• הדרך של אפל ליצור מוצרים ייחודיים ועוצמתיים בעצמה הופכת למודל ליוצרי AI\n• ",
        "category": "events",
        "publishedAt": "2026-06-30",
        "heroLabel": "Events",
        "readMinutes": 2,
        "featured": false,
        "bodyHtml": "<h2>מה הוכרז?</h2>\n<p>OpenAI's custom AI chip is less about challenging Nvidia today and more about following Apple's successful strategy of controlling the entire technology stack</p>\n<h2>למה זה חשוב לך?</h2>\n<p>OpenAI משחקת בדרך של אפל: למה אנווידיה צריכה להיות מודאגת?</p>\n<p>- OpenAI מעתיקה את אסטרטגיית ההשתכלול של אפל — פיתוח טכנולוגיה בבית במקום סמך על ספקים</p>\n<p>- הדרך של אפל ליצור מוצרים ייחודיים ועוצמתיים בעצמה הופכת למודל ליוצרי AI</p>\n<p>- אנווידיה עלולה להפסיד שוק משמעותי אם חברות tech גדולות יחדלו להזמין שבבים ותבנו חומרה משלהן</p>\n<h2>מה השלב הבא?</h2>\n<p>עקבו אחרינו ב-TechPulse לכיסוי מלא של כל מה שקורה בעולם האלקטרוניקה.</p>\n<p>*פורסם: 30/06/2026 14:18*</p>",
        "score": 3.43
    }
];
}),
"[project]/Desktop/techpulse-site/lib/articles.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getAllArticles",
    ()=>getAllArticles,
    "getArticleBySlug",
    ()=>getArticleBySlug,
    "getArticlesByCategory",
    ()=>getArticlesByCategory,
    "getFeaturedArticle",
    ()=>getFeaturedArticle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$techpulse$2d$site$2f$lib$2f$articles$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/techpulse-site/lib/articles.json.[json].cjs [app-rsc] (ecmascript)");
;
function getAllArticles() {
    return [
        ...__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$techpulse$2d$site$2f$lib$2f$articles$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]
    ].sort((a, b)=>new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
}
function getArticleBySlug(slug) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$techpulse$2d$site$2f$lib$2f$articles$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].find((a)=>a.slug === slug);
}
function getArticlesByCategory(category) {
    return getAllArticles().filter((a)=>a.category === category);
}
function getFeaturedArticle() {
    return getAllArticles().find((a)=>a.featured) ?? getAllArticles()[0];
}
}),
"[project]/Desktop/techpulse-site/components/ArticleCard.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ArticleCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$techpulse$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/techpulse-site/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$techpulse$2d$site$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/techpulse-site/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$techpulse$2d$site$2f$lib$2f$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/techpulse-site/lib/types.ts [app-rsc] (ecmascript)");
;
;
;
function formatDate(iso) {
    return new Intl.DateTimeFormat("he-IL", {
        day: "numeric",
        month: "long"
    }).format(new Date(iso));
}
function ArticleCard({ article }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$techpulse$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$techpulse$2d$site$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
        href: `/article/${article.slug}`,
        className: "group block border-b border-rule pb-6 last:border-b-0",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$techpulse$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2 mb-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$techpulse$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "tag-bracket text-signal",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$techpulse$2d$site$2f$lib$2f$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CATEGORY_LABELS"][article.category]
                    }, void 0, false, {
                        fileName: "[project]/Desktop/techpulse-site/components/ArticleCard.tsx",
                        lineNumber: 18,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$techpulse$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-ink-faint text-xs",
                        children: "·"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/techpulse-site/components/ArticleCard.tsx",
                        lineNumber: 21,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$techpulse$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xs text-ink-faint",
                        children: formatDate(article.publishedAt)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/techpulse-site/components/ArticleCard.tsx",
                        lineNumber: 22,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/techpulse-site/components/ArticleCard.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$techpulse$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "font-display text-xl font-bold text-ink leading-snug group-hover:text-signal transition-colors",
                children: article.headline
            }, void 0, false, {
                fileName: "[project]/Desktop/techpulse-site/components/ArticleCard.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$techpulse$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-2 text-sm text-ink-soft leading-relaxed line-clamp-2",
                children: article.dek
            }, void 0, false, {
                fileName: "[project]/Desktop/techpulse-site/components/ArticleCard.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$techpulse$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-3 flex items-center gap-3 text-xs text-ink-faint",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$techpulse$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: article.heroLabel
                    }, void 0, false, {
                        fileName: "[project]/Desktop/techpulse-site/components/ArticleCard.tsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$techpulse$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "·"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/techpulse-site/components/ArticleCard.tsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$techpulse$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            article.readMinutes,
                            " דק' קריאה"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/techpulse-site/components/ArticleCard.tsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/techpulse-site/components/ArticleCard.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/techpulse-site/components/ArticleCard.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/techpulse-site/app/category/[category]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CategoryPage,
    "generateStaticParams",
    ()=>generateStaticParams
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$techpulse$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/techpulse-site/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$techpulse$2d$site$2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/techpulse-site/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$techpulse$2d$site$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/techpulse-site/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$techpulse$2d$site$2f$lib$2f$articles$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/techpulse-site/lib/articles.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$techpulse$2d$site$2f$lib$2f$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/techpulse-site/lib/types.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$techpulse$2d$site$2f$components$2f$ArticleCard$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/techpulse-site/components/ArticleCard.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
function generateStaticParams() {
    return Object.keys(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$techpulse$2d$site$2f$lib$2f$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CATEGORY_LABELS"]).map((category)=>({
            category
        }));
}
async function CategoryPage({ params }) {
    const { category } = await params;
    const label = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$techpulse$2d$site$2f$lib$2f$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CATEGORY_LABELS"][category];
    if (!label) (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$techpulse$2d$site$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    const items = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$techpulse$2d$site$2f$lib$2f$articles$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getArticlesByCategory"])(category);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$techpulse$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mx-auto max-w-3xl px-5 py-10",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$techpulse$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "tag-bracket text-signal text-xs",
                children: "קטגוריה"
            }, void 0, false, {
                fileName: "[project]/Desktop/techpulse-site/app/category/[category]/page.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$techpulse$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "font-display mt-3 text-3xl font-extrabold text-ink",
                children: label
            }, void 0, false, {
                fileName: "[project]/Desktop/techpulse-site/app/category/[category]/page.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$techpulse$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-2 text-ink-soft",
                children: [
                    items.length,
                    " כתבות בקטגוריית ",
                    label
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/techpulse-site/app/category/[category]/page.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$techpulse$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-10 space-y-6",
                children: items.length > 0 ? items.map((article)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$techpulse$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$techpulse$2d$site$2f$components$2f$ArticleCard$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        article: article
                    }, article.slug, false, {
                        fileName: "[project]/Desktop/techpulse-site/app/category/[category]/page.tsx",
                        lineNumber: 35,
                        columnNumber: 13
                    }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$techpulse$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-ink-faint",
                    children: "אין עדיין כתבות בקטגוריה זו."
                }, void 0, false, {
                    fileName: "[project]/Desktop/techpulse-site/app/category/[category]/page.tsx",
                    lineNumber: 38,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/techpulse-site/app/category/[category]/page.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/techpulse-site/app/category/[category]/page.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/techpulse-site/app/category/[category]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Desktop/techpulse-site/app/category/[category]/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1sh-sxa._.js.map
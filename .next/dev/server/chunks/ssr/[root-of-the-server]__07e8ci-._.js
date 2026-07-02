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
"[project]/Desktop/techpulse-site/app/article/[slug]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ArticlePage,
    "generateStaticParams",
    ()=>generateStaticParams
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$techpulse$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/techpulse-site/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$techpulse$2d$site$2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/techpulse-site/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$techpulse$2d$site$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/techpulse-site/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$techpulse$2d$site$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/techpulse-site/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$techpulse$2d$site$2f$lib$2f$articles$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/techpulse-site/lib/articles.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$techpulse$2d$site$2f$lib$2f$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/techpulse-site/lib/types.ts [app-rsc] (ecmascript)");
;
;
;
;
;
function generateStaticParams() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$techpulse$2d$site$2f$lib$2f$articles$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAllArticles"])().map((a)=>({
            slug: a.slug
        }));
}
function formatDate(iso) {
    return new Intl.DateTimeFormat("he-IL", {
        day: "numeric",
        month: "long",
        year: "numeric"
    }).format(new Date(iso));
}
async function ArticlePage({ params }) {
    const { slug } = await params;
    const article = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$techpulse$2d$site$2f$lib$2f$articles$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getArticleBySlug"])(slug);
    if (!article) (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$techpulse$2d$site$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$techpulse$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        className: "mx-auto max-w-2xl px-5 py-10",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$techpulse$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$techpulse$2d$site$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                href: `/category/${article.category}`,
                className: "tag-bracket text-signal text-xs hover:text-signal-deep",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$techpulse$2d$site$2f$lib$2f$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CATEGORY_LABELS"][article.category]
            }, void 0, false, {
                fileName: "[project]/Desktop/techpulse-site/app/article/[slug]/page.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$techpulse$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "font-display mt-4 text-3xl sm:text-4xl font-extrabold leading-tight text-ink",
                children: article.headline
            }, void 0, false, {
                fileName: "[project]/Desktop/techpulse-site/app/article/[slug]/page.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$techpulse$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-4 text-lg text-ink-soft leading-relaxed",
                children: article.dek
            }, void 0, false, {
                fileName: "[project]/Desktop/techpulse-site/app/article/[slug]/page.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$techpulse$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-6 flex items-center gap-3 text-sm text-ink-faint pb-6 border-b border-rule",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$techpulse$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: formatDate(article.publishedAt)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/techpulse-site/app/article/[slug]/page.tsx",
                        lineNumber: 46,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$techpulse$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "·"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/techpulse-site/app/article/[slug]/page.tsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$techpulse$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: article.heroLabel
                    }, void 0, false, {
                        fileName: "[project]/Desktop/techpulse-site/app/article/[slug]/page.tsx",
                        lineNumber: 48,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$techpulse$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "·"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/techpulse-site/app/article/[slug]/page.tsx",
                        lineNumber: 49,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$techpulse$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            article.readMinutes,
                            " דק' קריאה"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/techpulse-site/app/article/[slug]/page.tsx",
                        lineNumber: 50,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/techpulse-site/app/article/[slug]/page.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$techpulse$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "prose-techpulse mt-8 text-[1.05rem] leading-[1.85] text-ink",
                dangerouslySetInnerHTML: {
                    __html: article.bodyHtml
                }
            }, void 0, false, {
                fileName: "[project]/Desktop/techpulse-site/app/article/[slug]/page.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$techpulse$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-12 pt-8 border-t border-rule",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$techpulse$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$techpulse$2d$site$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                    href: "/",
                    className: "inline-flex items-center gap-2 text-sm font-semibold text-signal hover:text-signal-deep",
                    children: "← חזרה לעמוד הראשי"
                }, void 0, false, {
                    fileName: "[project]/Desktop/techpulse-site/app/article/[slug]/page.tsx",
                    lineNumber: 59,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/techpulse-site/app/article/[slug]/page.tsx",
                lineNumber: 58,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/techpulse-site/app/article/[slug]/page.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/techpulse-site/app/article/[slug]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Desktop/techpulse-site/app/article/[slug]/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__07e8ci-._.js.map
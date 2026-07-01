# TechPulse — אתר עצמאי

אתר Next.js עצמאי לתוכן TechPulse — לא מפנה תנועה למקורות חיצוניים, מארח את כל התוכן בעצמו.

## הרצה מקומית

```bash
npm install
npm run dev
```

פתח http://localhost:3000

## בנייה לפרודקשן

```bash
npm run build
npm start
```

## מבנה

- `app/page.tsx` — עמוד ראשי
- `app/article/[slug]/page.tsx` — עמוד מאמר בודד
- `app/category/[category]/page.tsx` — עמוד קטגוריה
- `lib/articles.ts` — מקור התוכן (כרגע מערך סטטי, בעתיד יתחבר ל-pipeline)
- `lib/types.ts` — טיפוסי תוכן וקטגוריות
- `components/` — Header, Footer, ArticleCard

## פריסה (Deploy) — Vercel, חינם

1. העלה את התיקייה הזו ל-GitHub repository חדש
2. היכנס ל-vercel.com, התחבר עם GitHub
3. **Add New Project** → בחר את ה-repository
4. Vercel מזהה אוטומטית Next.js — לחץ **Deploy**
5. תוך כ-60 שניות האתר יהיה חי בכתובת כמו `techpulse-xxx.vercel.app`

### חיבור דומיין אמיתי בהמשך
ב-Vercel: Project Settings → Domains → הוסף את הדומיין שלך, עדכן DNS לפי ההוראות.

## הערה חשובה — נתיבי URL

נתיבי הניווט (`/article/...`, `/category/...`) הם ב-**אנגלית** בכוונה — Next.js
לא תומך בייצוא סטטי (`generateStaticParams`) עם תווים עבריים בנתיב התיקייה.
הכותרות, התוכן והקטגוריות המוצגות למשתמש — הכל בעברית. רק מבנה ה-URL באנגלית.

## חיבור עתידי ל-Pipeline

כרגע `lib/articles.ts` מכיל תוכן לדוגמה במערך סטטי. השלב הבא: לכתוב סקריפט
שלוקח פוסטים מאושרים מ-`_DASHBOARD/output/posts/*.json` (מתוך TechWithMax)
וממיר אותם אוטומטית לקבצי תוכן כאן — כך שכל פוסט שאתה מאשר בדשבורד
TechPulse מתפרסם אוטומטית באתר.

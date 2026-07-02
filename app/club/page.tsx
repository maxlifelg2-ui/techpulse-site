export default function ClubPage() {
  const categories = ["טלוויזיות", "שואבי אבק", "סאונד ואוזניות", "מחשבים", "הכל"];
  const steps = [
    { n: "01", t: "נרשמים", d: "מצטרפים בחינם — מייל בלבד, ללא כרטיס אשראי" },
    { n: "02", t: "אוספים כוח", d: "ככל שהמועדון גדל, כך גדל הלחץ שאנחנו מפעילים על היבואנים" },
    { n: "03", t: "מקבלים דיל", d: "יבואן מסכים למחיר בלעדי — אנחנו שולחים לכל החברים הרלוונטיים" },
    { n: "04", t: "קונים יחד", d: "חברי המועדון קונים ישירות — במחיר שלא קיים לציבור הרחב" },
  ];

  return (
    <div className="mx-auto max-w-2xl px-5 py-16 text-center">
      <span className="inline-block bg-signal-soft text-signal text-xs font-bold px-3 py-1 rounded-full mb-6 tracking-wide uppercase">
        Club TMaxTech
      </span>
      <h1 className="font-display text-4xl font-extrabold text-ink leading-tight mb-4">
        דילים שלא תמצא בשום מקום אחר
      </h1>
      <p className="text-lg text-ink-soft leading-relaxed mb-3 max-w-xl mx-auto">
        לא אפיליאייט. לא קופון. דיל אמיתי שנוהל ישירות מול היבואן — רק לחברי Club TMaxTech.
      </p>
      <p className="text-sm text-ink-faint mb-10">בחינם. בלי ספאם. ביטול בלחיצה אחת.</p>

      <div className="grid grid-cols-3 gap-4 mb-12">
        {[
          { v: "0", l: "חברי מועדון" },
          { v: "0", l: "דילים בלעדיים" },
          { v: "0%", l: "ספאם" },
        ].map(({ v, l }) => (
          <div key={l} className="bg-paper-raised border border-rule rounded-xl py-5">
            <div className="text-3xl font-extrabold font-display text-signal">{v}</div>
            <div className="text-xs text-ink-faint mt-1">{l}</div>
          </div>
        ))}
      </div>

      <div className="bg-paper-raised border border-rule rounded-2xl p-8 mb-8 text-right">
        <h2 className="font-display text-xl font-bold text-ink mb-6">הצטרף למועדון</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-ink-soft mb-1">שם מלא</label>
            <input type="text" placeholder="ישראל ישראלי" className="w-full px-4 py-3 rounded-xl border border-rule bg-paper text-ink placeholder:text-ink-faint focus:outline-none focus:border-signal text-right" />
          </div>
          <div>
            <label className="block text-sm font-medium text-ink-soft mb-1">כתובת מייל</label>
            <input type="email" placeholder="you@example.com" className="w-full px-4 py-3 rounded-xl border border-rule bg-paper text-ink placeholder:text-ink-faint focus:outline-none focus:border-signal" />
          </div>
          <div>
            <label className="block text-sm font-medium text-ink-soft mb-2">מה מעניין אותך?</label>
            <div className="flex flex-wrap gap-2 justify-end">
              {categories.map((cat) => (
                <button key={cat} className="px-4 py-2 rounded-full border border-rule text-sm text-ink-soft hover:border-signal hover:text-signal transition-colors">
                  {cat}
                </button>
              ))}
            </div>
          </div>
          <button className="w-full py-4 bg-signal text-white font-bold text-base rounded-xl hover:bg-signal-deep transition-colors mt-2">
            הצטרף עכשיו — חינם
          </button>
        </div>
      </div>

      <div className="border border-rule rounded-2xl p-6 flex items-center gap-4 mb-14">
        <div className="text-4xl flex-shrink-0">✈️</div>
        <div className="text-right flex-1">
          <div className="font-bold text-ink text-sm mb-1">הצטרף גם לערוץ הטלגרם</div>
          <div className="text-xs text-ink-faint">עדכונים מיידיים על דילים חמים — לפני כולם</div>
        </div>
        <a href="https://t.me/TechPulseAlertsBot" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 px-4 py-2 bg-blue-500 text-white text-sm font-semibold rounded-xl hover:opacity-90 transition-opacity">
          הצטרף
        </a>
      </div>

      <div className="text-right">
        <h2 className="font-display text-xl font-bold text-ink mb-6">איך זה עובד?</h2>
        <div className="space-y-4">
          {steps.map(({ n, t, d }) => (
            <div key={n} className="flex gap-4 items-start">
              <span className="font-display text-2xl font-extrabold text-signal flex-shrink-0 leading-none">{n}</span>
              <div>
                <div className="font-bold text-ink text-sm">{t}</div>
                <div className="text-xs text-ink-faint mt-0.5 leading-relaxed">{d}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

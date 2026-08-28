"use client";

import * as React from "react";

import { useTranslation } from "@/components/language-selector";
import type { Translations } from "@/components/language-selector";

const translations: Translations = {
  ar: {
    dir: "rtl",
    values: {
      blockquote:
        '"في النهاية،" قال، "الجميع يستمتع بنكتة جيدة، لذا من العدل أن يدفعوا مقابل هذا الامتياز."',
      brilliantPlan: "خطة عبقرية",
      discovered:
        "وبعد ذلك، في يوم من الأيام، اكتشف سكان المملكة أن النكات التي تركها المازح كانت مضحكة جداً لدرجة أنهم لم يستطيعوا منع أنفسهم من الضحك. وبمجرد أن بدأوا بالضحك، لم يستطيعوا التوقف.",
      ecstatic: "منتشٍ",
      empty: "فارغة",
      full: "ممتلئة",
      jokeTax: "ضريبة النكتة",
      jokestersRevolt: "ثورة المازح",
      kingThought: "فكر الملك طويلاً وبجد، وأخيراً توصل إلى",
      kingsPlan: "خطة الملك",
      kingsTreasury: "خزينة الملك",
      leadParagraph:
        "في قديم الزمان، في أرض بعيدة، كان هناك ملك كسول جداً يقضي يومه كله مستلقياً على عرشه. في أحد الأيام، جاءه مستشاروه بمشكلة: المملكة كانت تنفد من المال.",
      level1: "المستوى الأول من التورية: 5 قطع ذهبية",
      level2: "المستوى الثاني من النكات: 10 قطع ذهبية",
      level3: "المستوى الثالث من النكات القصيرة: 20 قطعة ذهبية",
      modest: "متواضعة",
      moral:
        "مغزى القصة هو: لا تستهن أبداً بقوة الضحك الجيد وكن دائماً حذراً من الأفكار السيئة.",
      overflowing: "فائضة",
      peoplesHappiness: "سعادة الشعب",
      peoplesRebellion: "ثورة الشعب",
      realized:
        "الملك، عندما رأى مدى سعادة رعاياه، أدرك خطأ طرقه وألغى ضريبة النكتة. أُعلن المازح بطلاً، وعاشت المملكة في سعادة دائمة.",
      satisfied: "راضٍ",
      sneaking:
        "بدأ المازح يتسلل إلى القلعة في منتصف الليل ويترك النكات في كل مكان: تحت وسادة الملك، في حسائه، حتى في المرحاض الملكي. كان الملك غاضباً، لكنه لم يستطع إيقاف المازح.",
      stoppedTelling:
        "نتيجة لذلك، توقف الناس عن رواية النكات، وغرقت المملكة في الكآبة. لكن كان هناك شخص واحد رفض أن تحبطه حماقة الملك: مهرج البلاط المسمى المازح.",
      subjectsNotAmused:
        "لم يكن رعايا الملك سعداء. تذمروا واشتكوا، لكن الملك كان حازماً:",
      taxJokes: ": سيفرض ضريبة على النكات في المملكة.",
      title: "فرض الضرائب على الضحك: سجلات ضريبة النكتة",
      uplifted:
        "شعر سكان المملكة بالبهجة من الضحك، وبدأوا في رواية النكات والتورية مرة أخرى، وسرعان ما أصبحت المملكة بأكملها جزءاً من النكتة.",
    },
  },
  en: {
    dir: "ltr",
    values: {
      blockquote:
        '"After all," he said, "everyone enjoys a good joke, so it\'s only fair that they should pay for the privilege."',
      brilliantPlan: "a brilliant plan",
      discovered:
        "And then, one day, the people of the kingdom discovered that the jokes left by Jokester were so funny that they couldn't help but laugh. And once they started laughing, they couldn't stop.",
      ecstatic: "Ecstatic",
      empty: "Empty",
      full: "Full",
      jokeTax: "The Joke Tax",
      jokestersRevolt: "Jokester's Revolt",
      kingThought: "The king thought long and hard, and finally came up with",
      kingsPlan: "The King's Plan",
      kingsTreasury: "King's Treasury",
      leadParagraph:
        "Once upon a time, in a far-off land, there was a very lazy king who spent all day lounging on his throne. One day, his advisors came to him with a problem: the kingdom was running out of money.",
      level1: "1st level of puns: 5 gold coins",
      level2: "2nd level of jokes: 10 gold coins",
      level3: "3rd level of one-liners: 20 gold coins",
      modest: "Modest",
      moral:
        "The moral of the story is: never underestimate the power of a good laugh and always be careful of bad ideas.",
      overflowing: "Overflowing",
      peoplesHappiness: "People's happiness",
      peoplesRebellion: "The People's Rebellion",
      realized:
        "The king, seeing how much happier his subjects were, realized the error of his ways and repealed the joke tax. Jokester was declared a hero, and the kingdom lived happily ever after.",
      satisfied: "Satisfied",
      sneaking:
        "Jokester began sneaking into the castle in the middle of the night and leaving jokes all over the place: under the king's pillow, in his soup, even in the royal toilet. The king was furious, but he couldn't seem to stop Jokester.",
      stoppedTelling:
        "As a result, people stopped telling jokes, and the kingdom fell into a gloom. But there was one person who refused to let the king's foolishness get him down: a court jester named Jokester.",
      subjectsNotAmused:
        "The king's subjects were not amused. They grumbled and complained, but the king was firm:",
      taxJokes: ": he would tax the jokes in the kingdom.",
      title: "Taxing Laughter: The Joke Tax Chronicles",
      uplifted:
        "The people of the kingdom, feeling uplifted by the laughter, started to tell jokes and puns again, and soon the entire kingdom was in on the joke.",
    },
  },
  he: {
    dir: "rtl",
    values: {
      blockquote:
        '"אחרי הכל," אמר, "כולם נהנים מבדיחה טובה, אז זה רק הוגן שישלמו על הזכות הזו."',
      brilliantPlan: "תוכנית גאונית",
      discovered:
        "ואז, יום אחד, תושבי הממלכה גילו שהבדיחות שהבדחן השאיר היו כל כך מצחיקות שהם לא יכלו להתאפק מלצחוק. וברגע שהתחילו לצחוק, הם לא יכלו להפסיק.",
      ecstatic: "אקסטטי",
      empty: "ריק",
      full: "מלא",
      jokeTax: "מס הבדיחה",
      jokestersRevolt: "המרד של הבדחן",
      kingThought: "המלך חשב ארוכות וקשות, ולבסוף העלה",
      kingsPlan: "התוכנית של המלך",
      kingsTreasury: "אוצר המלך",
      leadParagraph:
        "היה היה פעם, בארץ רחוקה, מלך עצלן מאוד שבילה את כל היום בהתרווחות על כס מלכותו. יום אחד, יועציו באו אליו עם בעיה: הממלכה נגמר לה הכסף.",
      level1: "רמה ראשונה של משחקי מילים: 5 מטבעות זהב",
      level2: "רמה שנייה של בדיחות: 10 מטבעות זהב",
      level3: "רמה שלישית של חידודים: 20 מטבעות זהב",
      modest: "צנוע",
      moral:
        "המוסר של הסיפור הוא: לעולם אל תזלזל בכוח של צחוק טוב ותמיד היזהר מרעיונות רעים.",
      overflowing: "גדוש",
      peoplesHappiness: "אושר העם",
      peoplesRebellion: "המרד של העם",
      realized:
        "המלך, כשראה כמה מאושרים נתיניו, הבין את טעותו וביטל את מס הבדיחה. הבדחן הוכרז כגיבור, והממלכה חיה באושר לנצח.",
      satisfied: "מרוצה",
      sneaking:
        "הבדחן התחיל להתגנב לטירה באמצע הלילה ולהשאיר בדיחות בכל מקום: מתחת לכרית המלך, במרק שלו, אפילו בשירותים המלכותיים. המלך היה זועם, אבל הוא לא הצליח לעצור את הבדחן.",
      stoppedTelling:
        "כתוצאה מכך, אנשים הפסיקו לספר בדיחות, והממלכה שקעה בעצב. אבל היה אדם אחד שסירב לתת לטיפשות המלך להפיל אותו: ליצן חצר בשם הבדחן.",
      subjectsNotAmused:
        "נתיני המלך לא היו מרוצים. הם התלוננו והתרעמו, אבל המלך היה נחוש:",
      taxJokes: ": הוא ימסה את הבדיחות בממלכה.",
      title: "מיסוי הצחוק: כרוניקות מס הבדיחה",
      uplifted:
        "תושבי הממלכה, שהרגישו מרוממים מהצחוק, התחילו לספר בדיחות ומשחקי מילים שוב, ובקרוב כל הממלכה הייתה חלק מהבדיחה.",
    },
  },
};

export default function TypographyRtl() {
  const { dir, t } = useTranslation(translations, "ar");

  return (
    <div dir={dir}>
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-balance">
        {t.title}
      </h1>
      <p className="text-xl leading-7 text-muted-foreground [&:not(:first-child)]:mt-6">
        {t.leadParagraph}
      </p>
      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        {t.kingsPlan}
      </h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        {t.kingThought} {/* oxlint-disable-next-line no-html-link-for-pages */}
        <a
          href="/docs"
          className="font-medium text-primary underline underline-offset-4"
        >
          {t.brilliantPlan}
        </a>
        {t.taxJokes}
      </p>
      <blockquote className="mt-6 border-s-2 ps-6 italic">
        {t.blockquote}
      </blockquote>
      <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
        {t.jokeTax}
      </h3>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        {t.subjectsNotAmused}
      </p>
      <ul className="my-6 ms-6 list-disc [&>li]:mt-2">
        <li>{t.level1}</li>
        <li>{t.level2}</li>
        <li>{t.level3}</li>
      </ul>
      <p className="leading-7 [&:not(:first-child)]:mt-6">{t.stoppedTelling}</p>
      <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
        {t.jokestersRevolt}
      </h3>
      <p className="leading-7 [&:not(:first-child)]:mt-6">{t.sneaking}</p>
      <p className="leading-7 [&:not(:first-child)]:mt-6">{t.discovered}</p>
      <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
        {t.peoplesRebellion}
      </h3>
      <p className="leading-7 [&:not(:first-child)]:mt-6">{t.uplifted}</p>
      <div className="my-6 w-full overflow-y-auto">
        <table className="w-full">
          <thead>
            <tr className="m-0 border-t p-0 even:bg-muted">
              <th className="border px-4 py-2 text-start font-bold">
                {t.kingsTreasury}
              </th>
              <th className="border px-4 py-2 text-start font-bold">
                {t.peoplesHappiness}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="m-0 border-t p-0 even:bg-muted">
              <td className="border px-4 py-2 text-start">{t.empty}</td>
              <td className="border px-4 py-2 text-start">{t.overflowing}</td>
            </tr>
            <tr className="m-0 border-t p-0 even:bg-muted">
              <td className="border px-4 py-2 text-start">{t.modest}</td>
              <td className="border px-4 py-2 text-start">{t.satisfied}</td>
            </tr>
            <tr className="m-0 border-t p-0 even:bg-muted">
              <td className="border px-4 py-2 text-start">{t.full}</td>
              <td className="border px-4 py-2 text-start">{t.ecstatic}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="leading-7 [&:not(:first-child)]:mt-6">{t.realized}</p>
      <p className="leading-7 [&:not(:first-child)]:mt-6">{t.moral}</p>
    </div>
  );
}

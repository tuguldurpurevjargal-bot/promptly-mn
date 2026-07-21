export interface QuizOption {
  id: string;
  label: string;
  score: number;
}

export interface QuizQuestion {
  id: string;
  dimension: string;
  question: string;
  options: QuizOption[];
}

export interface QuizDimension {
  id: string;
  label: string;
  description: string;
  maximumScore: number;
  caveat?: string;
}

export interface RatingBand {
  min: number;
  max: number;
  code: "emerging" | "developing" | "capable" | "strong";
  label: string;
}

export interface ResultLevel {
  id: string;
  min: number;
  max: number;
  title: string;
  mongolianTitle: string;
  summary: string;
  encouragingStatement: string;
  recommendedCourse: string;
  primaryCta: { label: string; target: string };
  secondaryCta?: { label: string; target: string };
  nextSteps: string[];
  accuracyNote?: string;
}

export const quizMeta = {
  title: "AI хэрэглээний түвшнээ тодорхойлох",
  instructions:
    "Асуулт бүрд тухайн нөхцөлд хамгийн зөв гэж үзсэн нэг хариултыг сонгоно уу.",
  disclaimer:
    "Энэхүү тест нь албан ёсны эсвэл шинжлэх ухаанаар баталгаажуулсан оношилгоо биш. Таны AI хэрэглээний одоогийн түвшин, давуу тал болон хөгжүүлэх боломжийг ойролцоогоор тодорхойлно.",
  resultDisclaimer:
    "Энэ үр дүн нь таны AI хэрэглээний ерөнхий чиглэлийг харуулах self-assessment бөгөөд баталгаажсан мэргэжлийн үнэлгээ биш.",
  questionCount: 11,
  durationMinutes: 3,
  maximumScore: 33,
};

export const dimensions: QuizDimension[] = [
  {
    id: "prompt_design",
    label: "Prompt design",
    description:
      "Зорилго, context, шаардлага, формат болон үнэлгээний шалгуурыг тодорхой өгөх чадвар.",
    maximumScore: 9,
  },
  {
    id: "output_evaluation",
    label: "Хариулт үнэлэх чадвар",
    description:
      "AI-ийн гаргасан мэдээллийг шалгах, харьцуулах болон алдааг илрүүлэх чадвар.",
    maximumScore: 9,
  },
  {
    id: "responsible_use",
    label: "Хариуцлагатай хэрэглээ",
    description:
      "Нууцлал, өгөгдлийн эрсдэл болон хүний хяналт шаардлагатай нөхцөлийг таних чадвар.",
    maximumScore: 6,
  },
  {
    id: "understanding_tool_selection",
    label: "AI ойлголт ба хэрэгсэл сонголт",
    description:
      "AI системийн боломж, хязгаарлалт болон зорилгод тохирсон хэрэгсэл сонгох чадвар.",
    maximumScore: 6,
  },
  {
    id: "workflow_automation",
    label: "Workflow ба automation",
    description:
      "Давтагдах ажлыг бүтэцжүүлж, хяналттай автоматжуулах чадвар.",
    maximumScore: 3,
    caveat: "Нэг асуултад суурилсан ерөнхий чиглэл — нарийвчилсан үнэлгээ бус.",
  },
];

export const ratingBands: RatingBand[] = [
  { min: 0, max: 39, code: "emerging", label: "Сууриа бүрдүүлэх боломжтой" },
  { min: 40, max: 69, code: "developing", label: "Хөгжүүлж буй түвшин" },
  { min: 70, max: 84, code: "capable", label: "Практик хэрэглээтэй" },
  { min: 85, max: 100, code: "strong", label: "Хүчтэй хэрэглээтэй" },
];

export const dimensionFeedback: Record<string, Record<string, string>> = {
  prompt_design: {
    strong:
      "Та prompt-д зорилго, context, формат болон шалгуур өгөхийн ач холбогдлыг сайн ойлгож байна.",
    capable:
      "Та ерөнхий хүсэлтийг тодорхой болгох чадвартай байна. Жишээ, хязгаарлалт болон evaluation criteria нэмэх нь үр дүнг илүү тогтвортой болгоно.",
    developing:
      "Та сайн prompt-ийн зарим бүрэлдэхүүнийг таньж байна. Зорилго, хэрэглэгч, context болон хүссэн output-ийг тогтмол тодорхойлж хэвшээрэй.",
    emerging:
      "Prompt бол зөвхөн асуулт биш, AI-д өгч буй ажлын brief юм. Энгийн бүтэц ашиглахад үр дүн хурдан сайжирна.",
  },
  output_evaluation: {
    strong:
      "Та AI-ийн хариултыг итгэлтэй өнгө аясаар нь бус эх сурвалж, context болон тодорхой шалгуураар үнэлэх хандлагатай байна.",
    capable:
      "Та AI-ийн алдаа гаргах боломжийг ойлгож байна. Чухал мэдээлэлд тогтмол verification process ашиглавал илүү найдвартай болно.",
    developing:
      "Та зарим мэдээллийг шалгах шаардлагатайг мэддэг. Дараагийн алхам нь эх сурвалж, огноо, тодорхойлолт болон тооцооллыг тусад нь шалгах юм.",
    emerging:
      "AI-ийн хариулт зөв сонсогдсон ч заавал үнэн байдаггүй. Чухал баримт бүрийг найдвартай эх сурвалжаар шалгах дадал хамгийн түрүүнд хэрэгтэй.",
  },
  responsible_use: {
    strong:
      "Та нууц мэдээлэл болон өндөр нөлөөтэй шийдвэрт хүний хяналт, data policy болон эрсдэлийн үнэлгээ шаардлагатайг сайн ойлгож байна.",
    capable:
      "Та нууцлал болон хүний хяналтын ач холбогдлыг мэддэг. Байгууллагын бодлого болон тухайн хэрэгслийн data terms-ийг тогтмол шалгах нь дараагийн алхам.",
    developing:
      "Та мэдээллийг хамгаалах шаардлагыг тодорхой хэмжээнд таньж байна. Зөвхөн нэр арилгахаас гадна дахин таних боломж болон хэрэгслийн бодлогыг тооцох хэрэгтэй.",
    emerging:
      "AI-д оруулсан мэдээлэл хэрхэн хадгалагдах, ашиглагдахыг үргэлж шалгах шаардлагатай. Нууц болон хувийн мэдээллийг шууд оруулахгүй байх нь сайн эхлэл.",
  },
  understanding_tool_selection: {
    strong:
      "Та AI хэрэгслийг нэр хүндээр нь бус ажлын зорилго, эх сурвалж болон шаардлагаар нь сонгох хандлагатай байна.",
    capable:
      "Та өөр өөр AI хэрэгсэл өөр өөр зориулалттайг ойлгож байна. Сонголтдоо нууцлал, зардал болон output-ийн шаардлагыг тогтмол оруулбал илүү хүчтэй болно.",
    developing:
      "Та AI хэрэгслүүдийн ялгааг таньж эхэлсэн байна. Дараагийн алхам нь хэрэгслийг алдартай эсэхээр бус бодит ажлын шаардлагаар харьцуулах юм.",
    emerging:
      "AI хэрэгслүүдийн үндсэн ялгаа болон зориулалтыг ойлгох нь танд зөв хэрэгсэл сонгож, илүү сайн үр дүн авахад тусална.",
  },
  workflow_automation: {
    strong:
      "Та automation-ийг шууд бүрэн автоматжуулалтаар бус оролт, дүрэм, output болон хүний баталгаажуулалттай workflow гэж харж байна.",
    capable:
      "Та давтагдах ажлыг бүтэцжүүлэх ойлголттой байна. Exception болон human review-ийг тодорхой болговол workflow илүү найдвартай болно.",
    developing:
      "Та automation-ийн боломжийг таньж байна. Эхлээд дүрэм нь тодорхой, шалгаж болох жижиг ажлаас эхлэхийг зөвлөж байна.",
    emerging:
      "Automation нь хамгийн төвөгтэй ажлыг шууд AI-д өгөхөөс эхэлдэггүй. Давтагддаг, дүрэм нь тодорхой, алдааг шалгаж болох ажлаас эхэлнэ.",
  },
};

export const resultLevels: ResultLevel[] = [
  {
    id: "explorer",
    min: 0,
    max: 8,
    title: "AI Explorer",
    mongolianTitle: "AI-г судалж эхэлж буй түвшин",
    summary:
      "Та AI-ийн боломжийг сонирхож, эхний алхмаа хийж байна. Суурь ойлголт, зөв prompt болон мэдээлэл шалгах дадлыг хөгжүүлбэл богино хугацаанд илүү итгэлтэй хэрэглэж эхлэх боломжтой.",
    encouragingStatement:
      "Эхлэх цэгээ мэдэх нь ахиц гаргах хамгийн чухал алхам юм.",
    recommendedCourse: "Promptly Beginner",
    primaryCta: { label: "Beginner сургалттай танилцах", target: "/courses/beginner" },
    nextSteps: [
      "AI-ийн боломж болон хязгаарлалтыг ойлгох",
      "Зорилго, context бүхий энгийн prompt бичиж сурах",
      "AI-ийн чухал мэдээллийг эх сурвалжаар шалгах дадал бий болгох",
    ],
  },
  {
    id: "starter",
    min: 9,
    max: 17,
    title: "AI Starter",
    mongolianTitle: "AI-г хэрэглэж эхэлсэн түвшин",
    summary:
      "Та AI-г тодорхой хэмжээнд ашиглаж эхэлсэн бөгөөд зарим зөв арга барилыг таньж байна. Одоо хэрэглээгээ илүү бүтэцтэй болгож, output шалгах болон prompt design-аа сайжруулах үе шатанд байна.",
    encouragingStatement:
      "Танд ашиглах туршлага аль хэдийн бий. Дараагийн ахиц нь илүү олон хэрэгсэл туршихаас бус, хэрэглээгээ системтэй болгохоос эхэлнэ.",
    recommendedCourse: "Promptly Beginner",
    primaryCta: { label: "Beginner сургалттай танилцах", target: "/courses/beginner" },
    nextSteps: [
      "Ерөнхий хүсэлтийг тодорхой prompt болгон өөрчлөх",
      "Сайн ажилласан prompt болон template-ээ хадгалах",
      "AI-ийн хариултыг тодорхой шалгуураар үнэлэх",
    ],
  },
  {
    id: "practitioner",
    min: 18,
    max: 26,
    title: "AI Practitioner",
    mongolianTitle: "AI-г практикт ашиглагчийн түвшин",
    summary:
      "Та AI-г бодит ажилд ашиглах үндсэн чадвартай бөгөөд зөв арга барилыг ихэнх нөхцөлд таньж байна. Дараагийн шатанд reusable workflow, илүү нарийн үнэлгээ болон automation-д төвлөрөх боломжтой.",
    encouragingStatement:
      "Таны суурь хэрэглээ тогтсон байна. Одоо тусдаа хэрэглээнүүдээ давтагдах, хэмжиж болох систем болгох нь хамгийн их үр дүн өгнө.",
    recommendedCourse: "Promptly Intermediate",
    primaryCta: {
      label: "Intermediate сургалттай танилцах",
      target: "/courses/intermediate",
    },
    nextSteps: [
      "Reusable prompt болон workflow үүсгэх",
      "Output quality шалгах rubric ашиглах",
      "Хүний хяналттай энгийн automation турших",
    ],
  },
  {
    id: "optimizer",
    min: 27,
    max: 33,
    title: "AI Optimizer",
    mongolianTitle: "AI-г системтэй ашиглагчийн түвшин",
    summary:
      "Та AI-ийн боломж, эрсдэл болон практик хэрэглээг сайн ойлгож, ихэнх нөхцөлд системтэй шийдвэр гаргаж байна. Таны дараагийн өсөлт advanced workflow, automation болон бодит гүйцэтгэлийн хэмжилтэд байна.",
    encouragingStatement:
      "Та зөв зарчмыг сайн таньж байна. Үүнийг бодит workflow, хэмжигдэх үр дүн болон багийн хэрэглээнд шилжүүлэх нь дараагийн сорилт болно.",
    recommendedCourse: "Promptly Intermediate болон Promptly Expert waitlist",
    primaryCta: { label: "Intermediate сургалт үзэх", target: "/courses/intermediate" },
    secondaryCta: { label: "Expert waitlist-д нэгдэх", target: "/courses/expert" },
    nextSteps: [
      "Олон үе шаттай workflow зохион байгуулах",
      "Automation-ийн алдаа, exception болон human review-ийг төлөвлөх",
      "AI хэрэглээний цаг, чанар болон үр дүнг хэмжих",
    ],
    accuracyNote:
      "Энэ түвшин нь таныг AI expert гэж батлахгүй. Multiple-choice асуултаар зөв зарчмыг таних чадварыг үнэлсэн үр дүн гэж тайлбарлана.",
  },
];

export const questions: QuizQuestion[] = [
  {
    id: "q1",
    dimension: "output_evaluation",
    question:
      "AI зургаан эх сурвалжаас зах зээлийн хэмжээг нэгтгэхэд нэг тайлангийн тоо бусдаасаа хоёр дахин өндөр байв. Та эхлээд юу шалгах вэ?",
    options: [
      { id: "A", label: "Зургаан тооны дунджийг ашиглах", score: 1 },
      { id: "B", label: "Хэт өндөр тоог outlier гэж үзээд хасах", score: 2 },
      {
        id: "C",
        label:
          "Тайлангуудын огноо, зах зээлийн тодорхойлолт, валют болон хамрах хүрээг харьцуулах",
        score: 3,
      },
      { id: "D", label: "AI-аас аль эх сурвалж хамгийн найдвартайг сонгуулах", score: 0 },
    ],
  },
  {
    id: "q2",
    dimension: "prompt_design",
    question:
      "20 хуудастай тайланг удирдлагад зориулсан нэг нүүр хураангуй болгоход аль prompt хамгийн үр дүнтэй вэ?",
    options: [
      { id: "A", label: "Энэ тайланг нэг нүүрэнд багтааж, маш мэргэжлийн бич.", score: 1 },
      { id: "B", label: "Тайлангийн гол санаа, тоо, эрсдэлүүдийг товчлон бич.", score: 2 },
      {
        id: "C",
        label: "Удирдлагын хураангуй гарга. Хүснэгт болон bullet ашигла.",
        score: 2,
      },
      {
        id: "D",
        label:
          "Шийдвэрт нөлөөлөх дүгнэлт, нотлох тоо, эрсдэл, дараагийн алхмыг тусад нь гарга. Шинэ баримт нэмэхгүй.",
        score: 3,
      },
    ],
  },
  {
    id: "q3",
    dimension: "prompt_design",
    question:
      "AI-ийн бичсэн сурталчилгааны текстийн мэдээлэл зөв боловч танай брэндийн өнгө аястай нийцэхгүй байна. Хамгийн үр дүнтэй засвар аль вэ?",
    options: [
      { id: "A", label: "Илүү бүтээлч, premium болго гэж хүсэх", score: 1 },
      {
        id: "B",
        label:
          "Өмнөх амжилттай текстийн жишээ, хүссэн өнгө аяс болон хэрэглэхгүй хэллэгүүдийг өгөх",
        score: 3,
      },
      { id: "C", label: "AI-д туршлагатай copywriter гэсэн role өгөх", score: 2 },
      {
        id: "D",
        label: "Олон хувилбар гаргуулаад хамгийн таалагдсанаа сонгох",
        score: 2,
      },
    ],
  },
  {
    id: "q4",
    dimension: "responsible_use",
    question:
      "Танай баг хэрэглэгчдийн худалдан авалтын түүхтэй spreadsheet-ийг AI-аар ангилуулах гэж байна. Хамгийн зөв эхний алхам аль вэ?",
    options: [
      {
        id: "A",
        label:
          "Ашиглах хэрэгслийн data policy болон байгууллагын дүрмийг шалгаж, шаардлагатай мэдээллийг нэргүйжүүлэх",
        score: 3,
      },
      {
        id: "B",
        label: "Нэр, утасны дугаарыг арилгаад бусад баганыг шууд оруулах",
        score: 2,
      },
      { id: "C", label: "AI-д мэдээллийг хадгалахгүй байхыг prompt дотор сануулах", score: 1 },
      {
        id: "D",
        label: "Төлбөртэй AI хэрэгсэл ашиглаж байгаа тул файлыг шууд оруулах",
        score: 0,
      },
    ],
  },
  {
    id: "q5",
    dimension: "understanding_tool_selection",
    question:
      "Та хамгийн сүүлийн үеийн салбарын мэдээлэл, ишлэл болон эх сурвалжтай тайлан бэлтгэх шаардлагатай. Хэрэгслээ хэрхэн сонгох вэ?",
    options: [
      { id: "A", label: "Хамгийн сайн бичдэг model-ийг сонгох", score: 1 },
      { id: "B", label: "Хамгийн олон хэрэглэгчтэй AI хэрэгслийг ашиглах", score: 0 },
      {
        id: "C",
        label:
          "Веб эх сурвалж үзүүлдэг хэрэгслээр судалгаа хийж, өөр model-оор бүтэц болон найруулгыг сайжруулах",
        score: 3,
      },
      {
        id: "D",
        label: "Нэг model ашиглавал хариулт хоорондоо зөрөхгүй тул нэг хэрэгслээр бүхнийг хийх",
        score: 2,
      },
    ],
  },
  {
    id: "q6",
    dimension: "output_evaluation",
    question:
      "AI гурван эх сурвалж иш татсан боловч нэг холбоос бодитоор байхгүй байв. Үүнээс ямар дүгнэлт хийх нь хамгийн зөв бэ?",
    options: [
      { id: "A", label: "Үлдсэн хоёр эх сурвалж мөн заавал буруу", score: 1 },
      {
        id: "B",
        label:
          "AI-ийн ишлэл үүсгэх чадварт найдахгүй, эх сурвалж бүрийг тусад нь шалгах шаардлагатай",
        score: 3,
      },
      { id: "C", label: "Prompt богино байсан учраас холбоос зохиосон", score: 0 },
      {
        id: "D",
        label: "Нэг алдаа нийт дүгнэлтэд нөлөөлөхгүй тул тайланг хэвээр ашиглаж болно",
        score: 1,
      },
    ],
  },
  {
    id: "q7",
    dimension: "workflow_automation",
    question:
      "Та долоо хоног бүр борлуулалтын файл авч, тайлбар болон удирдлагын тайлан гаргадаг. Хамгийн зөв эхний automation аль вэ?",
    options: [
      {
        id: "A",
        label:
          "Файлын бүтэц, тооцоолол, output template болон хүний баталгаажуулалттай хагас автомат workflow хийх",
        score: 3,
      },
      {
        id: "B",
        label: "AI agent-д бүх файлыг уншуулж, тайланг шууд удирдлагад илгээх",
        score: 0,
      },
      {
        id: "C",
        label: "Өмнөх prompt-оо хадгалаад долоо хоног бүр гараар ажиллуулах",
        score: 2,
      },
      { id: "D", label: "Эхлээд хамгийн төвөгтэй хэсгийг бүрэн автоматжуулах", score: 1 },
    ],
  },
  {
    id: "q8",
    dimension: "understanding_tool_selection",
    question:
      "AI agent болон энгийн automation-ийн ялгааг аль тайлбар хамгийн зөв илэрхийлэх вэ?",
    options: [
      {
        id: "A",
        label: "Agent олон AI model ашигладаг, automation нэг model ашигладаг",
        score: 1,
      },
      {
        id: "B",
        label: "Automation зөвхөн давтагдах ажилд, agent зөвхөн бүтээлч ажилд ашиглагддаг",
        score: 2,
      },
      {
        id: "C",
        label:
          "Automation тогтоосон дарааллаар ажилладаг; agent зорилгодоо хүрэхийн тулд дараагийн алхмаа тодорхой хэмжээнд сонгодог",
        score: 3,
      },
      { id: "D", label: "Agent нь automation-ийн илүү үнэтэй нэршил", score: 0 },
    ],
  },
  {
    id: "q9",
    dimension: "prompt_design",
    question:
      "Та AI-аар сайн маркетингийн төлөвлөгөө гаргуулахад ерөнхий хариулт авлаа. Аль мэдээллийг нэмэх нь хамгийн их нөлөөтэй вэ?",
    options: [
      { id: "A", label: "Илүү нарийвчилж бич гэсэн заавар", score: 1 },
      {
        id: "B",
        label:
          "Бизнесийн зорилго, хэрэглэгч, төсөв, хугацаа, сувгууд болон амжилтыг хэмжих шалгуур",
        score: 3,
      },
      { id: "C", label: "Өрсөлдөгчдийн нэрсийн жагсаалт", score: 2 },
      { id: "D", label: "Та дэлхийн шилдэг маркетингийн стратегич гэсэн role", score: 1 },
    ],
  },
  {
    id: "q10",
    dimension: "responsible_use",
    question:
      "Дараах ажлуудаас аль нь хүний хяналтгүйгээр AI-д өгөхөд хамгийн тохиромжгүй вэ?",
    options: [
      { id: "A", label: "Уулзалтын тэмдэглэлээс action item гаргах", score: 1 },
      { id: "B", label: "Олон нийтийн мэдээллээс судалгааны эхлэл бэлтгэх", score: 1 },
      { id: "C", label: "Дотоод тайлангийн анхны draft үүсгэх", score: 1 },
      {
        id: "D",
        label: "Хүний эрх, эрүүл мэнд эсвэл ажил эрхлэлтэд шууд нөлөөлөх эцсийн шийдвэр гаргах",
        score: 3,
      },
    ],
  },
  {
    id: "q11",
    dimension: "output_evaluation",
    question:
      "Хоёр AI ижил даалгаварт өөр өөр боловч боломжийн хариулт өглөө. Аль аргаар илүү сайн хариултыг сонгох вэ?",
    options: [
      { id: "A", label: "Илүү урт, дэлгэрэнгүй хариултыг сонгох", score: 1 },
      {
        id: "B",
        label:
          "Урьдчилан тогтоосон үнэн зөв байдал, хамаарал, бүрэн байдал болон ашиглах боломжийн шалгуураар үнэлэх",
        score: 3,
      },
      { id: "C", label: "Өөрийн анхны таамагтай ойр хариултыг сонгох", score: 0 },
      { id: "D", label: "Гурав дахь AI-аар аль нь зөв болохыг шийдүүлэх", score: 2 },
    ],
  },
];

export const site = {
  name: "Promptly",
  primaryMessage: "Хүн бүрт AI.",
  supportingMessage:
    "AI-г ойлгож, зөв ашиглан өдөр тутмын ажил, бүтээмж болон бүтээлч үйл явцаа сайжруулах практик сургалт.",
  vision: "Монголын хамгийн итгэл даахуйц, практик AI боловсролын брэнд болох.",
  mission:
    "Хиймэл оюуныг хүн бүрт ойлгомжтой, практик, хүртээмжтэй болгон боловсрол, хэрэгсэл болон нийгэмлэгээр дамжуулан хүргэх.",
};

export const nav = [
  { label: "Нүүр", target: "/" },
  { label: "Сургалтууд", target: "/courses" },
  { label: "Яагаад Promptly", target: "/#why-promptly" },
  { label: "Бидний тухай", target: "/about" },
  { label: "Контент", target: "/resources" },
  { label: "FAQ", target: "/#faq" },
];

export const hero = {
  eyebrow: "Монгол хэл дээрх практик AI сургалт",
  headline: "Хүн бүрт AI.",
  description:
    "AI-г ойлгож, зөв ашиглан өдөр тутмын ажил, бүтээмж болон бүтээлч үйл явцаа сайжруулах практик сургалт.",
  supportingPoints: ["Монгол хэлээр", "Практик дасгалтай", "Анхан болон дунд шат"],
  primaryCta: { label: "Сургалтуудтай танилцах", target: "/courses" },
  secondaryCta: { label: "Түвшнээ сонгох", target: "/#courses" },
};

export const problem = {
  headline: "AI ашиглаж байгаа ч хүссэн үр дүндээ хүрч чадахгүй байна уу?",
  cards: [
    {
      number: "01",
      title: "Хаанаас эхлэхээ мэдэхгүй",
      description:
        "AI хэрэгсэл олон боловч аль нь өөрт тохирохыг тодорхойлоход хэцүү.",
    },
    {
      number: "02",
      title: "Ерөнхий хариулт авдаг",
      description:
        "Тодорхой context болон зөв prompt байхгүйгээс хэрэгцээнд нийцэхгүй хариулт авдаг.",
    },
    {
      number: "03",
      title: "Ажилдаа хэрэгжүүлж чаддаггүй",
      description:
        "AI-г туршиж үздэг боловч өдөр тутмын тогтмол workflow болгож чаддаггүй.",
    },
  ],
  transition:
    "Promptly зөвхөн AI хэрэгслүүд танилцуулахгүй. AI-г ойлгож, зөв ашиглан өөрийн ажилд системтэй нэвтрүүлэх чадварыг хөгжүүлнэ.",
};

export type CourseStatus = "available" | "coming_soon";

export interface Course {
  slug: string;
  name: string;
  status: CourseStatus;
  tagline: string;
  description: string;
  bestFor?: string[];
  topics: string[];
  cta: { label: string; target: string };
}

export const courses: Course[] = [
  {
    slug: "beginner",
    name: "Promptly Beginner",
    status: "available",
    tagline: "AI-г анхнаас нь зөв ойлго.",
    description:
      "AI-ийн талаар бага мэдлэгтэй эсвэл хаанаас эхлэхээ мэдэхгүй хүмүүст зориулсан практик сургалт.",
    bestFor: [
      "AI-г бараг ашиглаж байгаагүй",
      "ChatGPT-ээс сайн хариулт авч чаддаггүй",
      "Ажил болон хичээлдээ AI ашиглахыг хүсдэг",
    ],
    topics: [
      "AI-ийн үндсэн ойлголт",
      "ChatGPT болон үндсэн AI хэрэгслүүд",
      "Prompt бичих суурь",
      "Текст, судалгаа, зураг болон контент",
      "Өдөр тутмын бодит хэрэглээ",
    ],
    cta: { label: "Beginner сургалт үзэх", target: "/courses/beginner" },
  },
  {
    slug: "intermediate",
    name: "Promptly Intermediate",
    status: "available",
    tagline: "AI-г ажлын системийнхээ нэг хэсэг болго.",
    description:
      "AI-г ашиглаж эхэлсэн бөгөөд илүү нарийн prompt, workflow болон automation сурах хүмүүст зориулсан сургалт.",
    bestFor: [
      "AI-г тогтмол ашигладаг",
      "Илүү нарийн prompt сурахыг хүсдэг",
      "Workflow болон automation хийх зорилготой",
      "AI-г баг болон бизнест ашиглах сонирхолтой",
    ],
    topics: [
      "Advanced prompting",
      "Context болон дахин ашиглах prompt систем",
      "AI-аар дэмжүүлсэн судалгаа",
      "Бүтээмжийн workflow",
      "Automation-ийн үндэс",
      "Баг болон бизнесийн хэрэглээ",
    ],
    cta: { label: "Intermediate сургалт үзэх", target: "/courses/intermediate" },
  },
  {
    slug: "expert",
    name: "Promptly Expert",
    status: "coming_soon",
    tagline: "AI систем бүтээж, оновчтой хэрэгжүүл.",
    description:
      "AI систем, агент, оновчлолт болон бизнесийн хэрэгжилтийн ахисан шатны сургалт.",
    topics: [
      "AI агентууд",
      "Системийн дизайн",
      "Advanced automation",
      "Оновчлолт",
      "Бизнесийн хэрэгжилт",
    ],
    cta: { label: "Хүлээлгийн жагсаалтад нэгдэх", target: "/courses/expert" },
  },
];

export const outcomes = {
  headline: "Сургалтын дараа та юу хийж чаддаг болох вэ?",
  items: [
    "AI хэрэгслээ зорилгодоо тохируулан сонгоно",
    "Илүү тодорхой, үр дүнтэй prompt бичнэ",
    "Имэйл, судалгаа, төлөвлөгөө болон контентоо хурдан боловсруулна",
    "AI-ийн хариултыг шалгаж, сайжруулна",
    "Өөрийн ажилд тохирсон AI workflow үүсгэнэ",
    "AI-г туршилтын хэрэгсэл биш, тогтмол ажлын систем болгон ашиглана",
  ],
};

export const howItWorks = {
  headline: "Сургалт хэрхэн явагдах вэ?",
  steps: [
    {
      number: "01",
      title: "Түвшнээ сонгоно",
      description: "Одоогийн мэдлэг болон зорилгодоо тохирох сургалтаа сонгоно.",
    },
    {
      number: "02",
      title: "Хичээлд оролцоно",
      description:
        "Ойлгомжтой тайлбар, шууд үзүүлэн болон практик жишээгээр суралцана.",
    },
    {
      number: "03",
      title: "Бодит даалгавар хийнэ",
      description: "Өөрийн ажил болон хэрэгцээнд нийцсэн дасгал гүйцэтгэнэ.",
    },
    {
      number: "04",
      title: "Материал авна",
      description: "Prompt загвар, шалгах жагсаалт болон хэрэгжүүлэх материал ашиглана.",
    },
    {
      number: "05",
      title: "Ажилдаа хэрэгжүүлнэ",
      description: "Сурснаа өдөр тутмын workflow-д нэвтрүүлнэ.",
    },
  ],
  placeholders: [
    { label: "Сургалтын хэлбэр", value: "[ONLINE_OR_OFFLINE]" },
    { label: "Нийт хугацаа", value: "[COURSE_DURATION]" },
    { label: "Нэг ангийн багтаамж", value: "[CLASS_CAPACITY]" },
    { label: "Материал дахин үзэх", value: "[REPLAY_POLICY]" },
    { label: "Сертификат", value: "[CERTIFICATE_INFORMATION]" },
  ],
};

export const curriculum = {
  headline: "Сургалтын хөтөлбөр",
  tabs: [
    {
      label: "Beginner",
      target: "/courses/beginner",
      ctaLabel: "Beginner хөтөлбөрийг бүтнээр үзэх",
      modules: [
        "Module 01 — AI-г ойлгох",
        "Module 02 — ChatGPT болон үндсэн хэрэгслүүд",
        "Module 03 — Prompt бичих суурь",
        "Module 04 — Судалгаа ба мэдээлэл боловсруулах",
        "Module 05 — Контент, зураг болон танилцуулга",
        "Module 06 — Өдөр тутмын AI workflow",
      ],
    },
    {
      label: "Intermediate",
      target: "/courses/intermediate",
      ctaLabel: "Intermediate хөтөлбөрийг бүтнээр үзэх",
      modules: [
        "Module 01 — Context ба advanced prompting",
        "Module 02 — Дахин ашиглах prompt систем",
        "Module 03 — AI-аар дэмжүүлсэн судалгаа",
        "Module 04 — Контент болон бүтээмжийн workflow",
        "Module 05 — Automation-ийн үндэс",
        "Module 06 — Хувийн AI ажиллагааны систем",
      ],
    },
  ],
};

export const whyPromptly = {
  headline: "Яагаад Promptly?",
  items: [
    {
      title: "Монгол хэл дээр",
      description:
        "AI-ийн нэр томьёог ойлгомжтой, Монгол хэрэглээнд ойр жишээгээр тайлбарлана.",
    },
    {
      title: "Практик хэрэглээ",
      description:
        "Хичээл бүр бодит ажил, дасгал болон хэрэгжүүлэх үр дүнд төвлөрнө.",
    },
    {
      title: "Шинэчлэгддэг агуулга",
      description:
        "AI хэрэгслүүдийн өөрчлөлттэй уялдуулан сургалтын агуулгыг шинэчилнэ.",
    },
    {
      title: "Tool биш, чадвар",
      description:
        "Нэг платформ цээжлүүлэхгүй. Шинэ AI хэрэгсэлд дасан зохицох арга барил заана.",
    },
  ],
};

export const founders = {
  headline: "Promptly-г хэн бүтээж байна вэ?",
  description:
    "Promptly-г AI-г бодит ажил, маркетинг, бүтээлч үйлдвэрлэл болон бүтээмжид ашигладаг хоёр хүний баг хөгжүүлж байна.",
  members: [
    {
      name: "[FOUNDER_1_NAME]",
      role: "[FOUNDER_1_ROLE]",
      bio: "[FOUNDER_1_SHORT_BIO]",
      linkedin: "[FOUNDER_1_LINKEDIN]",
    },
    {
      name: "[FOUNDER_2_NAME]",
      role: "[FOUNDER_2_ROLE]",
      bio: "[FOUNDER_2_SHORT_BIO]",
      linkedin: "[FOUNDER_2_LINKEDIN]",
    },
  ],
};

export const leadMagnet = {
  headline: "AI-г эхлүүлэх 20 prompt",
  description:
    "Имэйл, судалгаа, контент, төлөвлөгөө болон бүтээмжид зориулсан Монгол хэл дээрх үнэгүй эхлэл багц.",
  cta: "Үнэгүй авах",
  success: "Баярлалаа. Эхлэл багцыг таны имэйл рүү илгээлээ.",
  namePlaceholder: "Таны нэр",
  emailPlaceholder: "И-мэйл хаяг",
};

export const resourcesPreview = {
  headline: "Promptly-оос үнэгүй суралцаарай.",
  items: [
    { title: "AI гэж юу вэ?", type: "Reel эсвэл нийтлэл" },
    { title: "ChatGPT-ээс илүү сайн хариулт авах 3 арга", type: "Reel эсвэл carousel" },
    { title: "Ажилдаа ашиглах 5 AI workflow", type: "Нийтлэл эсвэл видео" },
  ],
  primaryCta: { label: "Instagram дагах", target: "[INSTAGRAM_URL]" },
  secondaryCta: { label: "Бүх контент үзэх", target: "/resources" },
};

export const proof = {
  headline: "Суралцагчдын үр дүн",
  launchNote:
    "Promptly одоогоор эхний сургалтуудаа бэлтгэж байна. Бид хийсвэр сэтгэгдэл нэмэхгүй — эхний суралцагчдын бодит үр дүнг энд нийтэлнэ.",
  launchOptions: [
    "Туршилтын ангийн санал хүсэлт",
    "Үнэгүй workshop-ийн оролцогчдын санал",
    "Өмнө ба дараахь ажлын жишээ",
    "Бодит AI workflow-ийн үзүүлэн",
    "Үүсгэн байгуулагчийн жишиг судалгаа",
  ],
};

export const faq = {
  headline: "Түгээмэл асуултууд",
  items: [
    {
      question: "AI-ийн өмнөх мэдлэг шаардлагатай юу?",
      answer:
        "Beginner сургалтад өмнөх мэдлэг шаардлагагүй. Intermediate сургалт нь AI-г үндсэн түвшинд ашиглаж байсан хүмүүст илүү тохиромжтой.",
    },
    {
      question: "Beginner болон Intermediate сургалтын ялгаа юу вэ?",
      answer:
        "Beginner сургалт AI-ийн үндэс болон өдөр тутмын хэрэглээнд төвлөрнө. Intermediate сургалт advanced prompting, workflow болон automation-д төвлөрнө.",
    },
    {
      question: "Сургалт онлайн уу, танхимаар уу?",
      answer: "[COURSE_DELIVERY_FORMAT]",
    },
    {
      question: "Сургалт хэдэн цаг үргэлжлэх вэ?",
      answer: "[COURSE_DURATION]",
    },
    {
      question: "Өөрийн компьютер авчрах шаардлагатай юу?",
      answer: "[DEVICE_REQUIREMENTS]",
    },
    {
      question: "Төлбөртэй AI subscription шаардлагатай юу?",
      answer: "[SUBSCRIPTION_REQUIREMENTS]",
    },
    {
      question: "Хичээлийн материал дахин үзэх боломжтой юу?",
      answer: "[REPLAY_POLICY]",
    },
    {
      question: "Сертификат олгох уу?",
      answer: "[CERTIFICATE_INFORMATION]",
    },
    {
      question: "Байгууллагын сургалт авах боломжтой юу?",
      answer:
        "Тийм. Байгууллагын хэрэгцээнд тохирсон сургалтын талаар холбоо барих хэсгээр хүсэлт илгээнэ үү.",
    },
  ],
};

export const finalCta = {
  headline: "AI-г зүгээр сонирхохоо болиод, ашиглаж эхлэхэд бэлэн үү?",
  primaryCta: { label: "Beginner сургалт сонгох", target: "/courses/beginner" },
  secondaryCta: { label: "Intermediate сургалт сонгох", target: "/courses/intermediate" },
};

export interface CoursePageData {
  slug: string;
  levelLabel: string;
  name: string;
  headline: string;
  description: string;
  bestFor: string[];
  outcomes: string[];
  modules: string[];
  primaryCta: string;
  waitlist: boolean;
}

export const coursePages: Record<string, CoursePageData> = {
  beginner: {
    slug: "beginner",
    levelLabel: "Анхан шат",
    name: "Promptly Beginner",
    headline: "AI-г анхнаас нь зөв ойлго.",
    description:
      "AI-ийн талаар бага мэдлэгтэй эсвэл хаанаас эхлэхээ мэдэхгүй хүмүүст зориулсан практик сургалт.",
    bestFor: [
      "AI-г бараг ашиглаж байгаагүй",
      "ChatGPT-ээс сайн хариулт авч чаддаггүй",
      "Ажил болон хичээлдээ AI ашиглахыг хүсдэг",
    ],
    outcomes: [
      "AI болон ChatGPT-ийн үндсэн зарчмыг ойлгоно",
      "Өөрт тохирох AI хэрэгслээ сонгоно",
      "Суурь prompt зөв бичдэг болно",
      "Судалгаа, текст, контентдоо AI ашиглана",
      "Өдөр тутмын AI workflow-оо эхлүүлнэ",
    ],
    modules: curriculum.tabs[0].modules,
    primaryCta: "Beginner сургалтад бүртгүүлэх",
    waitlist: false,
  },
  intermediate: {
    slug: "intermediate",
    levelLabel: "Дунд шат",
    name: "Promptly Intermediate",
    headline: "AI-г ажлын системийнхээ нэг хэсэг болго.",
    description:
      "AI-г ашиглаж эхэлсэн бөгөөд илүү нарийн prompt, workflow болон automation сурах хүмүүст зориулсан сургалт.",
    bestFor: [
      "AI-г тогтмол ашигладаг",
      "Илүү нарийн prompt сурахыг хүсдэг",
      "Workflow болон automation хийх зорилготой",
      "AI-г баг болон бизнест ашиглах сонирхолтой",
    ],
    outcomes: [
      "Advanced prompting арга техник эзэмшинэ",
      "Дахин ашиглах prompt систем босгоно",
      "AI-аар дэмжүүлсэн судалгаа хийдэг болно",
      "Бүтээмжийн workflow-оо оновчтой болгоно",
      "Automation-ийн үндсийг хэрэгжүүлэх суурьтай болно",
    ],
    modules: curriculum.tabs[1].modules,
    primaryCta: "Intermediate сургалтад бүртгүүлэх",
    waitlist: false,
  },
  expert: {
    slug: "expert",
    levelLabel: "Ахисан шат",
    name: "Promptly Expert",
    headline: "Promptly Expert удахгүй.",
    description:
      "AI систем, агент, оновчлолт болон бизнесийн хэрэгжилтийн ахисан шатны сургалт. Нээлтийн өдөр, үнэ болон бүртгэлийг удахгүй зарлана.",
    bestFor: [],
    outcomes: [],
    modules: [
      "AI агентууд",
      "Системийн дизайн",
      "Advanced automation",
      "Оновчлолт",
      "Бизнесийн хэрэгжилт",
    ],
    primaryCta: "Хүлээлгийн жагсаалтад нэгдэх",
    waitlist: true,
  },
};

export const registration = {
  title: "Сургалтад бүртгүүлэх",
  fields: {
    name: "Овог нэр",
    email: "И-мэйл",
    phone: "Утасны дугаар",
    course: "Сонгосон сургалт",
    level: "AI ашиглаж байсан түвшин",
    expectation: "Сургалтаас хүлээж буй үр дүн",
  },
  levelOptions: ["Ашиглаж байгаагүй", "Хааяа ашигладаг", "Тогтмол ашигладаг", "Ажилдаа системтэй ашигладаг"],
  submit: "Бүртгэл илгээх",
  success: "Таны бүртгэлийг хүлээн авлаа. Promptly-ийн баг удахгүй холбогдоно.",
};

export const waitlist = {
  title: "Хүлээлгийн жагсаалт",
  description: "Expert сургалт нээгдэх үед хамгийн түрүүнд мэдэгдэхээр бүртгүүлээрэй.",
  emailPlaceholder: "И-мэйл хаяг",
  submit: "Нэгдэх",
  success: "Баярлалаа. Та хүлээлгийн жагсаалтад нэмэгдлээ.",
};

export const contact = {
  headline: "Холбоо барих",
  description:
    "Сургалт, байгууллагын хэрэгцээ болон бусад асуултын талаар бидэнд бичээрэй.",
  email: "[CONTACT_EMAIL]",
  form: {
    name: "Таны нэр",
    email: "И-мэйл хаяг",
    message: "Зурвас",
    submit: "Илгээх",
    success: "Зурвас илгээгдлээ. Бид удахгүй хариу бичих болно.",
  },
};

export const footerCols = [
  {
    title: "Сургалтууд",
    links: [
      { label: "Beginner", target: "/courses/beginner" },
      { label: "Intermediate", target: "/courses/intermediate" },
      { label: "Expert — Удахгүй", target: "/courses/expert" },
    ],
  },
  {
    title: "Promptly",
    links: [
      { label: "Бидний тухай", target: "/about" },
      { label: "Контент", target: "/resources" },
      { label: "AI Literacy тест", target: "/test" },
      { label: "Newsletter", target: "/#free-resource" },
      { label: "Холбоо барих", target: "/contact" },
    ],
  },
  {
    title: "Social",
    links: [
      { label: "Instagram", target: "[INSTAGRAM_URL]" },
      { label: "Facebook", target: "[FACEBOOK_URL]" },
      { label: "YouTube", target: "[YOUTUBE_URL]" },
      { label: "LinkedIn", target: "[LINKEDIN_URL]" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy policy", target: "/privacy" },
      { label: "Terms and conditions", target: "/terms" },
      { label: "Refund policy", target: "/refund-policy" },
    ],
  },
];

export const socials = [
  { label: "Instagram", target: "[INSTAGRAM_URL]" },
  { label: "Facebook", target: "[FACEBOOK_URL]" },
  { label: "YouTube", target: "[YOUTUBE_URL]" },
  { label: "LinkedIn", target: "[LINKEDIN_URL]" },
];

export const legal = {
  privacy: {
    title: "Хувийн мэдээлэл хамгаалах бодлого",
    description: "Promptly нь таны хувийн мэдээллийг хэрхэн цуглуулж, ашиглаж, хамгаалдаг талаар энд танилцуулна.",
  },
  terms: {
    title: "Үйлчилгээний нөхцөл",
    description: "Promptly-ийн вэбсайт болон сургалтыг ашиглах үндсэн нөхцөлүүд.",
  },
  refund: {
    title: "Буцан олголтын бодлого",
    description: "Сургалтын төлбөрийг буцаан олгох нөхцөл ба процесс.",
  },
};

import type {
  QuizDimension,
  QuizQuestion,
  RatingBand,
  ResultLevel,
} from "./quiz";

export const quizMeta = {
  title: "Discover your AI literacy level",
  instructions:
    "For each question, choose the one answer you think is best for the situation.",
  disclaimer:
    "This test is not an official or scientifically validated diagnosis. It gives an approximate picture of your current AI usage level, strengths, and growth opportunities.",
  resultDisclaimer:
    "This result is a self-assessment showing the general direction of your AI usage — it is not a certified professional evaluation.",
  questionCount: 11,
  durationMinutes: 3,
  maximumScore: 33,
};

export const dimensions: QuizDimension[] = [
  {
    id: "prompt_design",
    label: "Prompt design",
    description:
      "The ability to specify goals, context, requirements, format, and evaluation criteria.",
    maximumScore: 9,
  },
  {
    id: "output_evaluation",
    label: "Evaluating outputs",
    description:
      "The ability to review, compare, and spot errors in AI-generated information.",
    maximumScore: 9,
  },
  {
    id: "responsible_use",
    label: "Responsible use",
    description:
      "The ability to recognize privacy, data risks, and situations that require human oversight.",
    maximumScore: 6,
  },
  {
    id: "understanding_tool_selection",
    label: "AI understanding & tool selection",
    description:
      "The ability to choose tools that fit AI capabilities, limitations, and your goals.",
    maximumScore: 6,
  },
  {
    id: "workflow_automation",
    label: "Workflow & automation",
    description:
      "The ability to structure repetitive work and automate it with controls.",
    maximumScore: 3,
    caveat: "Based on a single question — a general direction, not a precise measurement.",
  },
];

export const ratingBands: RatingBand[] = [
  { min: 0, max: 39, code: "emerging", label: "Room to build foundations" },
  { min: 40, max: 69, code: "developing", label: "Developing level" },
  { min: 70, max: 84, code: "capable", label: "Practical user" },
  { min: 85, max: 100, code: "strong", label: "Strong user" },
];

export const dimensionFeedback: Record<string, Record<string, string>> = {
  prompt_design: {
    strong:
      "You clearly understand the value of giving prompts a goal, context, format, and criteria.",
    capable:
      "You can turn general requests into specific ones. Adding examples, constraints, and evaluation criteria will make results more consistent.",
    developing:
      "You recognize some components of a good prompt. Make a habit of specifying the goal, audience, context, and desired output.",
    emerging:
      "A prompt isn't just a question — it's a work brief for the AI. Using a simple structure improves results quickly.",
  },
  output_evaluation: {
    strong:
      "You evaluate AI answers by sources, context, and clear criteria — not by how confident they sound.",
    capable:
      "You understand AI can make mistakes. Using a consistent verification process for important information will make you more reliable.",
    developing:
      "You know some information needs checking. Next step: check sources, dates, definitions, and calculations individually.",
    emerging:
      "An AI answer that sounds right isn't necessarily true. The first habit to build: verify important facts against reliable sources.",
  },
  responsible_use: {
    strong:
      "You clearly understand that sensitive data and high-impact decisions require human oversight, data policy review, and risk assessment.",
    capable:
      "You know privacy and human oversight matter. Next step: regularly check your organization's policy and the tool's data terms.",
    developing:
      "You partly recognize the need to protect information. Beyond removing names, consider re-identification risk and the tool's policy.",
    emerging:
      "Always check how data you give an AI is stored and used. Not entering private or personal data directly is a good start.",
  },
  understanding_tool_selection: {
    strong:
      "You choose AI tools by the job's goal, sources, and requirements — not by popularity.",
    capable:
      "You understand different AI tools serve different purposes. Regularly include privacy, cost, and output requirements in your choices.",
    developing:
      "You're starting to recognize differences between AI tools. Next: compare tools by real job requirements, not by fame.",
    emerging:
      "Understanding the basic differences and purposes of AI tools helps you pick the right one and get better results.",
  },
  workflow_automation: {
    strong:
      "You see automation not as full autopilot, but as a workflow with inputs, rules, outputs, and human validation.",
    capable:
      "You understand how to structure repetitive work. Defining exceptions and human review makes workflows more reliable.",
    developing:
      "You recognize automation potential. We recommend starting with a small task whose rules are clear and verifiable.",
    emerging:
      "Automation doesn't start by handing the hardest job to AI. Start with repetitive, rule-based work where errors are easy to check.",
  },
};

export const resultLevels: ResultLevel[] = [
  {
    id: "explorer",
    min: 0,
    max: 8,
    title: "AI Explorer",
    mongolianTitle: "Starting to explore AI",
    summary:
      "You're curious about AI's potential and taking your first steps. Building core understanding, good prompting, and fact-checking habits will get you using AI confidently in a short time.",
    encouragingStatement:
      "Knowing your starting point is the most important step toward progress.",
    recommendedCourse: "Promptly Beginner",
    primaryCta: { label: "Explore Beginner course", target: "/courses/beginner" },
    nextSteps: [
      "Understand AI's capabilities and limitations",
      "Learn to write simple prompts with goals and context",
      "Build a habit of verifying important AI information",
    ],
  },
  {
    id: "starter",
    min: 9,
    max: 17,
    title: "AI Starter",
    mongolianTitle: "Started using AI",
    summary:
      "You've started using AI to a degree and recognize some good practices. You're now at the stage of making your usage more structured — improving output review and prompt design.",
    encouragingStatement:
      "You already have usage experience. The next improvement comes from systematizing your usage, not from trying more tools.",
    recommendedCourse: "Promptly Beginner",
    primaryCta: { label: "Explore Beginner course", target: "/courses/beginner" },
    nextSteps: [
      "Turn general requests into specific prompts",
      "Save prompts and templates that worked well",
      "Evaluate AI answers against clear criteria",
    ],
  },
  {
    id: "practitioner",
    min: 18,
    max: 26,
    title: "AI Practitioner",
    mongolianTitle: "Using AI in practice",
    summary:
      "You have solid skills for using AI in real work and recognize good practices in most situations. Next stage: focus on reusable workflows, finer evaluation, and automation.",
    encouragingStatement:
      "Your usage foundation is set. Turning isolated uses into a repeatable, measurable system now delivers the most value.",
    recommendedCourse: "Promptly Intermediate",
    primaryCta: {
      label: "Explore Intermediate course",
      target: "/courses/intermediate",
    },
    nextSteps: [
      "Create reusable prompts and workflows",
      "Use a rubric to check output quality",
      "Try simple automation with human oversight",
    ],
  },
  {
    id: "optimizer",
    min: 27,
    max: 33,
    title: "AI Optimizer",
    mongolianTitle: "Using AI systematically",
    summary:
      "You understand AI's potential, risks, and practical use well, and make systematic decisions in most situations. Your next growth area is advanced workflows, automation, and measuring real performance.",
    encouragingStatement:
      "You know the right principles well. The next challenge is moving them into real workflows, measurable results, and team usage.",
    recommendedCourse: "Promptly Intermediate and Promptly Expert waitlist",
    primaryCta: { label: "View Intermediate course", target: "/courses/intermediate" },
    secondaryCta: { label: "Join Expert waitlist", target: "/courses/expert" },
    nextSteps: [
      "Design multi-stage workflows",
      "Plan for automation errors, exceptions, and human review",
      "Measure AI usage time, quality, and outcomes",
    ],
    accuracyNote:
      "This level does not certify you as an AI expert. It reflects the ability to recognize correct principles on multiple-choice questions.",
  },
];

export const questions: QuizQuestion[] = [
  {
    id: "q1",
    dimension: "output_evaluation",
    question:
      "While AI aggregates market size from six sources, one report's figure is twice as high as the others. What do you check first?",
    options: [
      { id: "A", label: "Use the average of the six figures", score: 1 },
      { id: "B", label: "Treat the high figure as an outlier and drop it", score: 2 },
      {
        id: "C",
        label: "Compare the reports' dates, market definitions, currencies, and scope",
        score: 3,
      },
      { id: "D", label: "Ask the AI to pick the most reliable source", score: 0 },
    ],
  },
  {
    id: "q2",
    dimension: "prompt_design",
    question:
      "Which prompt works best for turning a 20-page report into a one-page executive summary?",
    options: [
      { id: "A", label: "Fit this report into one page and write it very professionally.", score: 1 },
      { id: "B", label: "Briefly write the report's main ideas, figures, and risks.", score: 2 },
      {
        id: "C",
        label: "Produce an executive summary. Use tables and bullet points.",
        score: 2,
      },
      {
        id: "D",
        label:
          "Extract the decision-relevant conclusions, supporting figures, risks, and next steps separately. Add no new facts.",
        score: 3,
      },
    ],
  },
  {
    id: "q3",
    dimension: "prompt_design",
    question:
      "AI-written ad copy is factually correct but doesn't match your brand voice. What's the most effective fix?",
    options: [
      { id: "A", label: "Ask it to be more creative and premium", score: 1 },
      {
        id: "B",
        label:
          "Provide examples of previous successful copy, the desired tone, and phrases to avoid",
        score: 3,
      },
      { id: "C", label: "Assign the AI a role as an experienced copywriter", score: 2 },
      {
        id: "D",
        label: "Generate many variations and pick the one you like",
        score: 2,
      },
    ],
  },
  {
    id: "q4",
    dimension: "responsible_use",
    question:
      "Your team wants an AI to categorize a spreadsheet of customer purchase history. What's the correct first step?",
    options: [
      {
        id: "A",
        label:
          "Check the tool's data policy and your organization's rules, and anonymize the necessary data",
        score: 3,
      },
      {
        id: "B",
        label: "Remove names and phone numbers, then upload the remaining columns",
        score: 2,
      },
      { id: "C", label: "Remind the AI in the prompt not to store the data", score: 1 },
      {
        id: "D",
        label: "Upload the file directly since you're using a paid AI tool",
        score: 0,
      },
    ],
  },
  {
    id: "q5",
    dimension: "understanding_tool_selection",
    question:
      "You need to prepare a report with the latest industry information, quotes, and sources. How do you choose your tools?",
    options: [
      { id: "A", label: "Pick the model that writes best", score: 1 },
      { id: "B", label: "Use the AI tool with the most users", score: 0 },
      {
        id: "C",
        label:
          "Research with a tool that shows web sources, then improve structure and style with another model",
        score: 3,
      },
      {
        id: "D",
        label: "Do everything with one tool since one model gives consistent answers",
        score: 2,
      },
    ],
  },
  {
    id: "q6",
    dimension: "output_evaluation",
    question:
      "The AI cited three sources, but one link doesn't actually exist. What's the most correct conclusion?",
    options: [
      { id: "A", label: "The other two sources must also be wrong", score: 1 },
      {
        id: "B",
        label:
          "You can't trust the AI's citation ability — every source must be checked individually",
        score: 3,
      },
      { id: "C", label: "The link was invented because the prompt was short", score: 0 },
      {
        id: "D",
        label: "One error doesn't affect the overall conclusion, so the report can be used as-is",
        score: 1,
      },
    ],
  },
  {
    id: "q7",
    dimension: "workflow_automation",
    question:
      "Every week you receive a sales file and produce a commentary and management report. What's the best first automation?",
    options: [
      {
        id: "A",
        label:
          "Build a semi-automated workflow with file structure, calculations, output template, and human validation",
        score: 3,
      },
      {
        id: "B",
        label: "Have an AI agent read all files and send the report straight to management",
        score: 0,
      },
      {
        id: "C",
        label: "Save your old prompt and run it manually every week",
        score: 2,
      },
      { id: "D", label: "Fully automate the most complex part first", score: 1 },
    ],
  },
  {
    id: "q8",
    dimension: "understanding_tool_selection",
    question:
      "Which explanation best describes the difference between an AI agent and simple automation?",
    options: [
      {
        id: "A",
        label: "Agents use multiple AI models; automation uses one model",
        score: 1,
      },
      {
        id: "B",
        label: "Automation is only for repetitive work; agents are only for creative work",
        score: 2,
      },
      {
        id: "C",
        label:
          "Automation follows a predetermined sequence; an agent chooses its next steps to a degree to reach a goal",
        score: 3,
      },
      { id: "D", label: "An agent is just a more expensive name for automation", score: 0 },
    ],
  },
  {
    id: "q9",
    dimension: "prompt_design",
    question:
      "You asked AI for a marketing plan and got a generic answer. Which addition has the most impact?",
    options: [
      { id: "A", label: "Instructions to write in more detail", score: 1 },
      {
        id: "B",
        label:
          "Business goals, audience, budget, timeline, channels, and success criteria",
        score: 3,
      },
      { id: "C", label: "A list of competitor names", score: 2 },
      { id: "D", label: "A role as the world's best marketing strategist", score: 1 },
    ],
  },
  {
    id: "q10",
    dimension: "responsible_use",
    question:
      "Which of the following tasks is least appropriate to hand to AI without human oversight?",
    options: [
      { id: "A", label: "Extracting action items from meeting notes", score: 1 },
      { id: "B", label: "Preparing initial research from public information", score: 1 },
      { id: "C", label: "Creating a first draft of an internal report", score: 1 },
      {
        id: "D",
        label: "Making final decisions that directly affect human rights, health, or employment",
        score: 3,
      },
    ],
  },
  {
    id: "q11",
    dimension: "output_evaluation",
    question:
      "Two AIs gave different but plausible answers to the same task. Which method picks the better answer?",
    options: [
      { id: "A", label: "Pick the longer, more detailed answer", score: 1 },
      {
        id: "B",
        label:
          "Evaluate against pre-set criteria: accuracy, relevance, completeness, and usability",
        score: 3,
      },
      { id: "C", label: "Pick the answer closest to your initial guess", score: 0 },
      { id: "D", label: "Have a third AI decide which is correct", score: 2 },
    ],
  },
];

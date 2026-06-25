import type { Question } from "../types";

/**
 * BCBA practice questions for Cooper et al., Chapter 1: Definition and Characteristics of Applied Behavior Analysis.
 * Grounded in the chapter text. Option order is shuffled at runtime, so
 * correctIndex placement here is arbitrary.
 */
export const QUESTIONS_M4: Question[] = [
  {
    id: 3001,
    topic: "Science: Basic Characteristics and a Definition",
    prompt: "Applied behavior analysis is best described as a scientific approach for discovering what?",
    options: [
      "Mental processes that underlie socially significant behavior",
      "Neurological mechanisms responsible for learning",
      "Genetic factors that determine behavioral outcomes",
      "Environmental variables that reliably influence socially significant behavior"
    ],
    correctIndex: 3,
    explanation: "ABA is defined as a scientific approach for discovering environmental variables that reliably influence socially significant behavior and for developing a technology of behavior change that takes practical advantage of those discoveries.",
  },
  {
    id: 3002,
    topic: "Science: Basic Characteristics and a Definition",
    prompt: "Which of the following correctly lists the three levels of scientific understanding described?",
    options: [
      "Description, prediction, and control",
      "Observation, correlation, and experimentation",
      "Measurement, analysis, and generalization",
      "Hypothesis, testing, and replication"
    ],
    correctIndex: 0,
    explanation: "Different types of scientific investigations yield knowledge enabling one or more of three levels of understanding: description, prediction, and control.",
  },
  {
    id: 3005,
    topic: "Science: Basic Characteristics and a Definition",
    prompt: "A functional relation exists when a well-controlled experiment shows that a specific change in the dependent variable is reliably produced by specific manipulations of which of the following?",
    options: [
      "Extraneous environmental events",
      "The independent variable",
      "Confounding variables",
      "The dependent variable itself"
    ],
    correctIndex: 1,
    explanation: "A functional relation exists when a well-controlled experiment demonstrates that a specific change in one event (the dependent variable) is reliably produced by specific manipulations of another event (the independent variable), and that the change was unlikely to result from confounding variables.",
  },
  {
    id: 3007,
    topic: "Assumptions and Attitudes of Science",
    prompt: "The philosophical position antithetical to determinism, holding that events occur by accident or without cause, is called what?",
    options: [
      "Accidentalism",
      "Fatalism",
      "Pragmatism",
      "Mentalism"
    ],
    correctIndex: 0,
    explanation: "Accidentalism is the philosophical position antithetical to determinism that holds that events occur by accident or without cause. Fatalism is the belief that events are predetermined, which is a separate concept.",
  },
  {
    id: 3008,
    topic: "Assumptions and Attitudes of Science",
    prompt: "Which attitude of science requires the scientist to continually question the truthfulness of what is regarded as fact, treating scientific knowledge as always tentative?",
    options: [
      "Parsimony",
      "Empiricism",
      "Replication",
      "Philosophic doubt"
    ],
    correctIndex: 3,
    explanation: "Philosophic doubt requires the scientist to continually question the truthfulness of what is regarded as fact. Scientific knowledge must always be viewed as tentative, and scientists must be willing to replace cherished beliefs with knowledge derived from new discoveries.",
  },
  {
    id: 3009,
    topic: "Assumptions and Attitudes of Science",
    prompt: "A behavior analyst considers two competing explanations for a client's problem behavior. She selects the explanation that requires the fewest assumptions and involves no unnecessary variables. This illustrates which scientific attitude?",
    options: [
      "Philosophic doubt",
      "Determinism",
      "Parsimony",
      "Empiricism"
    ],
    correctIndex: 2,
    explanation: "Parsimony requires that all simple, logical explanations be ruled out before more complex or abstract explanations are considered. A fully parsimonious interpretation consists only of those elements that are necessary and sufficient to explain the phenomenon, consistent with Occam's Razor.",
  },
  {
    id: 3012,
    topic: "Assumptions and Attitudes of Science",
    prompt: "Which of the following best describes what empiricism demands of the behavior analyst?",
    options: [
      "Using logical reasoning and authority to understand behavior",
      "Developing hypothetical constructs to account for unobservable variables",
      "Objective observation based on thorough description, systematic and repeated measurement, and precise quantification",
      "Relying on common sense and personal experience to explain behavior"
    ],
    correctIndex: 2,
    explanation: "The empirical attitude demands objective observation based on thorough description, systematic and repeated measurement, and precise quantification of the phenomena of interest. Scientific knowledge is built on empiricism, the practice of objective observation and measurement.",
  },
  {
    id: 3013,
    topic: "Assumptions and Attitudes of Science",
    prompt: "The term 'functional analysis' has two meanings in contemporary behavior analysis. In its original and most fundamental usage, functional analysis denotes which of the following?",
    options: [
      "The clinical use of preference assessments to identify reinforcers",
      "Demonstrations of functional relations between environmental variables and behavior",
      "An experimental methodology for determining variables maintaining problem behavior",
      "The systematic observation of antecedent-behavior-consequence sequences"
    ],
    correctIndex: 1,
    explanation: "In its original and most fundamental usage, functional analysis denotes demonstrations of functional relations between environmental variables and behavior. Iwata and colleagues later introduced a second and now widely recognized meaning: an experimental methodology for determining environmental variables and contingencies maintaining problem behavior.",
  },
  {
    id: 3014,
    topic: "A Brief History of Behavior Analysis",
    prompt: "John B. Watson's early form of behaviorism became known as stimulus-response psychology because he argued that the objective study of behavior should consist of which of the following?",
    options: [
      "Direct observation of relationships between environmental stimuli and the responses they evoke",
      "Careful introspection of conscious thoughts and mental processes",
      "Experimental analysis of private events such as thoughts and feelings",
      "Study of operant contingencies and their effects on voluntary behavior"
    ],
    correctIndex: 0,
    explanation: "Watson argued that the objective study of behavior as a natural science should consist of direct observation of the relationships between environmental stimuli (S) and the responses (R) they evoke. This framework became known as stimulus-response (S-R) psychology.",
  },
  {
    id: 3015,
    topic: "A Brief History of Behavior Analysis",
    prompt: "The experimental branch of behavior analysis formally began with the publication of which work?",
    options: [
      "Science and Human Behavior (Skinner, 1953)",
      "About Behaviorism (Skinner, 1974)",
      "The Behavior of Organisms (Skinner, 1938)",
      "Walden Two (Skinner, 1948)"
    ],
    correctIndex: 2,
    explanation: "The experimental branch of behavior analysis formally began with the publication of B. F. Skinner's The Behavior of Organisms (1938). The book summarized Skinner's laboratory research from 1930 to 1937 and brought into perspective two kinds of behavior: respondent and operant.",
  },
  {
    id: 3018,
    topic: "Skinner's Radical Behaviorism",
    prompt: "Which of the following correctly identifies the three major branches of behavior analysis described?",
    options: [
      "Structuralism, methodological behaviorism, and radical behaviorism",
      "Cognitivism, behaviorism, and experimental analysis of behavior",
      "Applied behavior analysis, translational research, and professional practice",
      "Behaviorism, experimental analysis of behavior, and applied behavior analysis"
    ],
    correctIndex: 3,
    explanation: "The science of behavior analysis entails three interrelated domains: behaviorism as the philosophy, the experimental analysis of behavior (EAB) as basic research, and applied behavior analysis (ABA) as the applied research branch.",
  },
  {
    id: 3019,
    topic: "Skinner's Radical Behaviorism",
    prompt: "Mentalism is defined as an approach that assumes a mental or 'inner' dimension causes or mediates behavior. Mentalism relies on which two key types of explanatory tools?",
    options: [
      "Hypothetical constructs and explanatory fictions",
      "Functional relations and correlational data",
      "Private events and public observations",
      "S-R contingencies and three-term contingencies"
    ],
    correctIndex: 0,
    explanation: "Hypothetical constructs and explanatory fictions are the stock and trade of mentalism. Hypothetical constructs are theoretical terms that refer to possibly existing but unobserved processes or entities that can be neither observed nor experimentally manipulated.",
  },
  {
    id: 3020,
    topic: "Skinner's Radical Behaviorism",
    prompt: "A teacher says a student does not complete homework because he 'lacks motivation.' 'Motivation' used in this way is an example of what?",
    options: [
      "A functional relation",
      "A private event",
      "An explanatory fiction",
      "An empirical hypothesis"
    ],
    correctIndex: 2,
    explanation: "An explanatory fiction is a fictitious variable that often is simply another name for the observed behavior and contributes nothing to an understanding of the variables responsible for developing or maintaining the behavior. Explanatory fictions create a circular way of viewing cause and effect and a false sense of understanding.",
  },
  {
    id: 3021,
    topic: "Skinner's Radical Behaviorism",
    prompt: "Methodological behaviorism differs from radical behaviorism primarily in which of the following ways?",
    options: [
      "Methodological behaviorism denies that any inner variables exist; radical behaviorism denies that consequences affect behavior",
      "Methodological behaviorism acknowledges the existence of mental events but excludes them from the analysis; radical behaviorism includes private events as behavior subject to analysis",
      "Methodological behaviorism relies on mentalistic hypothetical constructs; radical behaviorism relies solely on S-R paradigms",
      "Methodological behaviorism includes private events in its analysis; radical behaviorism excludes them"
    ],
    correctIndex: 1,
    explanation: "Methodological behaviorists acknowledge the existence of mental events but do not consider them in the analysis of behavior. Radical behaviorism, by contrast, views thoughts and feelings as private events that are behavior to be analyzed with the same tools used to analyze publicly observable behavior.",
  },
  {
    id: 3024,
    topic: "Skinner's Radical Behaviorism",
    prompt: "Pragmatism, as discussed in the context of radical behaviorism, holds that the truth value of a statement is determined by what?",
    options: [
      "How well the statement promotes effective action",
      "The extent to which it can be publicly verified by multiple observers",
      "Its agreement with established theoretical frameworks",
      "The number of replications supporting the statement"
    ],
    correctIndex: 0,
    explanation: "Pragmatism is the philosophical position that 'the truth value of a statement is a function of how well the statement promotes effective action.' Pragmatism continues to be a primary criterion by which behavior analysts judge the value of their findings.",
  },
  {
    id: 3028,
    topic: "Characteristics of Applied Behavior Analysis",
    prompt: "Baer, Wolf, and Risley (1968) recommended that applied behavior analysis be characterized by seven dimensions. Which of the following correctly lists all seven?",
    options: [
      "Applied, behavioral, analytic, empirical, replicable, socially valid, and generalizable",
      "Applied, behavioral, analytic, technological, conceptually systematic, effective, and generality",
      "Behavioral, measurable, replicable, technological, conceptually systematic, effective, and public",
      "Applied, observable, analytic, technological, systematic, practical, and durable"
    ],
    correctIndex: 1,
    explanation: "Baer, Wolf, and Risley (1968) recommended that applied behavior analysis be applied, behavioral, analytic, technological, conceptually systematic, effective, and capable of appropriately generalized outcomes. These seven dimensions continue to serve as signposts for identifying research in applied behavior analysis.",
  },
  {
    id: 3029,
    topic: "Characteristics of Applied Behavior Analysis",
    prompt: "The 'applied' dimension of ABA signals a commitment to effecting improvements in behaviors that meet which criterion?",
    options: [
      "Behaviors that can be reliably measured in laboratory settings",
      "Behaviors selected by the researcher rather than the client or participant",
      "Behaviors that have been demonstrated through basic research to be operant",
      "Behaviors that are socially significant and enhance and improve people's lives"
    ],
    correctIndex: 3,
    explanation: "The applied dimension signals ABA's commitment to effecting improvements in behaviors that enhance and improve people's lives. The researcher or practitioner must select behaviors that are socially significant for participants, improving their day-to-day life experience.",
  },
  {
    id: 3030,
    topic: "Characteristics of Applied Behavior Analysis",
    prompt: "A behavior analyst studying children's social interactions collects data using a questionnaire asking students how they believe they get along with classmates. According to the 'behavioral' dimension, what is the problem with this approach?",
    options: [
      "It violates the technological dimension because the procedure is not described in sufficient detail",
      "It violates the conceptually systematic dimension because it is not derived from a behavioral principle",
      "It violates the behavioral dimension because it uses an indirect measure rather than direct observation of the actual behavior",
      "It violates the analytic dimension because no functional relation can be demonstrated"
    ],
    correctIndex: 2,
    explanation: "The behavioral dimension requires direct observation and precise measurement of the actual behavior in need of improvement, not a similar behavior that serves as a proxy or the subject's verbal description of behavior. Behavior analysts conduct studies of behavior, not studies about behavior.",
  },
  {
    id: 3032,
    topic: "Characteristics of Applied Behavior Analysis",
    prompt: "A study in applied behavior analysis is 'analytic' when which of the following has been demonstrated?",
    options: [
      "The study used a control group that received no intervention",
      "The study's results have been replicated at least three times by independent researchers",
      "The experimenter has demonstrated a functional relation between the manipulated events and a reliable change in some measurable dimension of the targeted behavior",
      "The intervention was derived from a basic behavioral principle"
    ],
    correctIndex: 2,
    explanation: "A study is analytic when the experimenter has demonstrated a functional relation between the manipulated events and a reliable change in some measurable dimension of the targeted behavior. The experimenter must control the occurrence and nonoccurrence of the behavior, with the ultimate issue being believability.",
  },
  {
    id: 3033,
    topic: "Characteristics of Applied Behavior Analysis",
    prompt: "The 'technological' dimension requires that all operative procedures be described in sufficient detail and clarity for what purpose?",
    options: [
      "So that funding agencies can evaluate the cost-effectiveness of the intervention",
      "So that a reader has a fair chance of replicating the application with the same results",
      "So that participants can implement the procedures independently",
      "So that regulatory bodies can ensure the procedures comply with ethical guidelines"
    ],
    correctIndex: 1,
    explanation: "A study in applied behavior analysis is technological when all of its operative procedures are identified and described with sufficient detail and clarity 'such that a reader has a fair chance of replicating the application with the same results.' Behavioral tactics must be replicable and teachable to others.",
  },
  {
    id: 3034,
    topic: "Characteristics of Applied Behavior Analysis",
    prompt: "The 'conceptually systematic' dimension requires that behavior change procedures and interpretations of how or why those procedures were effective be described in terms of what?",
    options: [
      "The DSM diagnostic category of the participant",
      "Lay terminology accessible to non-specialist caregivers",
      "The theoretical framework preferred by the journal editor",
      "The relevant principle(s) from which the procedures were derived"
    ],
    correctIndex: 3,
    explanation: "The conceptually systematic dimension means that the procedures for changing behavior and any interpretations of how or why those procedures were effective should be described in terms of the relevant principle(s) from which they were derived. This prevents ABA from becoming a mere 'collection of tricks.'",
  },
  {
    id: 3035,
    topic: "Characteristics of Applied Behavior Analysis",
    prompt: "Baer et al. (1968) stated that to be judged effective, an applied behavior analysis study must produce behavior changes that reach what level of significance?",
    options: [
      "Statistical significance as established by conventional p-value thresholds",
      "Theoretical significance as evaluated by peer reviewers",
      "Clinical or social significance, improving the behavior to a practically important degree",
      "Experimental significance, replicating the results across at least two conditions"
    ],
    correctIndex: 2,
    explanation: "To be judged effective, a study must produce behavior changes that reach clinical or social significance. Baer et al. (1968) stated that the practical importance of a variable, specifically its power in altering behavior enough to be socially important, is the essential criterion.",
  },
  {
    id: 3037,
    topic: "Characteristics of Applied Behavior Analysis",
    prompt: "A behavior change has 'generality' if which of the following is true?",
    options: [
      "It is replicated by an independent researcher in a separate laboratory setting",
      "It lasts over time, appears in environments other than the one in which the intervention was implemented, and/or spreads to other behaviors not directly treated",
      "It is large enough to be detected through visual analysis of graphed data",
      "It was produced by a procedure derived from a basic principle of behavior"
    ],
    correctIndex: 1,
    explanation: "A behavior change has generality if it lasts over time, appears in environments other than the one in which the intervention was initially implemented, and/or spreads to other behaviors not directly treated by the intervention.",
  },
  {
    id: 3039,
    topic: "Other Characteristics of ABA",
    prompt: "The 'public' characteristic of ABA is described as encompassing which of the following?",
    options: [
      "Delivering services primarily in community settings rather than in clinics",
      "Publishing all research findings in open-access journals",
      "Requiring that all intervention components be observable to clients",
      "ABA entails no ephemeral, mystical, or metaphysical explanations; there are no hidden treatments and no magic"
    ],
    correctIndex: 3,
    explanation: "Everything about ABA is visible and public, explicit and straightforward. ABA entails no ephemeral, mystical, or metaphysical explanations; there are no hidden treatments, and there is no magic. This transparent, public nature should raise ABA's value in many fields.",
  },
  {
    id: 3040,
    topic: "Other Characteristics of ABA",
    prompt: "The 'optimistic' characteristic of ABA is grounded in four reasons. Which of the following is one of those reasons cited?",
    options: [
      "The environmental view promoted by behaviorism suggests that individuals possess roughly equal potential and that poor outcomes originate in environmental factors that can be modified",
      "ABA has demonstrated that all behavior problems can eventually be eliminated",
      "ABA's use of statistical significance testing provides definitive proof of intervention success",
      "Behavior analysts are optimistic because mentalistic explanations are being abandoned by other disciplines"
    ],
    correctIndex: 0,
    explanation: "One basis for optimism cited is that the environmental view promoted by behaviorism suggests that individuals possess roughly equal potential and that poor outcomes originate in the way the environment and experience shaped the individual's current behavior. Once identified, these factors can be addressed through prevention and intervention programs.",
  },
  {
    id: 3041,
    topic: "A Definition of Applied Behavior Analysis",
    prompt: "The formal definition of applied behavior analysis provided includes six key components. Which of the following pairs correctly identifies two of those components?",
    options: [
      "Randomized controlled designs and standardized outcome measures",
      "Elimination of mentalistic language and promotion of radical behaviorism in practitioners",
      "Group comparison designs and statistical inference",
      "Improvement in socially significant behavior and experimentation to identify variables responsible for behavior change"
    ],
    correctIndex: 3,
    explanation: "The definition of ABA includes six components, two of which are: improvement in socially significant behavior (the goal) and the use of experimentation to identify the variables responsible for behavior change (the analytical method). The full definition states that ABA is the science in which tactics derived from the principles of behavior are applied systematically to improve socially significant behavior.",
  },
  {
    id: 3042,
    topic: "Four Interrelated Domains of Behavior Analysis",
    prompt: "The four domains of behavior analysis science and practice include radical behaviorism, the experimental analysis of behavior, applied behavior analysis, and which fourth domain?",
    options: [
      "Translational behavior analysis",
      "Organizational behavior management",
      "Professional practice guided by behavior analysis",
      "Cognitive behavior therapy"
    ],
    correctIndex: 2,
    explanation: "The four domains are: radical behaviorism (philosophy), the experimental analysis of behavior (basic research), applied behavior analysis (applied research), and professional practice in various fields that is informed and guided by that science.",
  },
  {
    id: 3044,
    topic: "A Brief History of Behavior Analysis",
    prompt: "The three-term contingency (S-R-S) gave behavior analysis a new paradigm. What does this formulation account for that the S-R model could not?",
    options: [
      "Respondent behavior elicited by antecedent stimuli",
      "The neurological mechanisms underlying reflex arcs",
      "The role of private events in the determination of public behavior",
      "How the environment 'selects' the great part of learned behavior through consequences"
    ],
    correctIndex: 3,
    explanation: "The three-term contingency accounted for how the environment 'selects' the great part of learned behavior. Through painstaking research, Skinner showed that behavior is changed less by the stimuli that precede it and more by the consequences that immediately follow it.",
  },
  {
    id: 3046,
    topic: "Science: Basic Characteristics and a Definition",
    prompt: "Science seeks to discover facts and universal laws that exist and operate independently of which of the following?",
    options: [
      "The specific behavior under investigation",
      "The opinions and beliefs of any person or group, including the scientist",
      "The methods used to collect data",
      "The measurement tools available at the time of study"
    ],
    correctIndex: 1,
    explanation: "Science seeks to discover nature's truths: facts and universal laws that exist and operate independent of the opinions and beliefs of any person or group, including the scientist. Scientific knowledge must be separated from personal, political, economic, or other reasons for which it was sought.",
  },
  {
    id: 3049,
    topic: "A Brief History of Behavior Analysis",
    prompt: "Pioneers of early ABA research in the 1960s had to develop new experimental procedures as they went along because of which challenge?",
    options: [
      "Laboratory techniques for measuring behavior and controlling variables were sometimes unavailable or inappropriate in applied settings",
      "Participants in applied settings refused to give consent for single-subject experimental designs",
      "Funding agencies required the use of group designs that were incompatible with behavioral methods",
      "Basic principles of operant behavior had not yet been established at that time"
    ],
    correctIndex: 0,
    explanation: "Laboratory techniques for measuring behavior and for controlling and manipulating variables were sometimes unavailable or their use was inappropriate in applied settings. As a result, the early practitioners of applied behavior analysis had to develop new experimental procedures as they went along.",
  },
];

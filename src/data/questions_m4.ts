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
    id: 3003,
    topic: "Science: Basic Characteristics and a Definition",
    prompt: "A researcher observes 104 classroom teachers and documents the rates at which they deliver praise versus criticism to students. This study best exemplifies which level of scientific understanding?",
    options: [
      "Control",
      "Prediction",
      "Description",
      "Functional analysis"
    ],
    correctIndex: 2,
    explanation: "White's (1975) study of teachers' approval and disapproval rates is an example of descriptive research. Descriptive knowledge consists of a collection of facts about observed events that can be quantified and classified.",
  },
  {
    id: 3004,
    topic: "Science: Basic Characteristics and a Definition",
    prompt: "A strong correlation exists between hot weather and an increased incidence of drowning deaths. This example is used to illustrate which important limitation of correlational research?",
    options: [
      "Correlational data cannot be replicated across settings",
      "Correlational findings lack practical social importance",
      "Correlation requires manipulation of the independent variable",
      "Correlational studies do not demonstrate that one variable caused change in the other"
    ],
    correctIndex: 3,
    explanation: "Because no variables are manipulated or controlled by the researcher, a correlational study cannot demonstrate whether one of the observed variables is responsible for the changes in the other variable, and no causal relations should be inferred.",
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
    id: 3006,
    topic: "Science: Basic Characteristics and a Definition",
    prompt: "A common definition of science identifies determinism as its fundamental assumption and identifies what as its prime directive?",
    options: [
      "Parsimony",
      "Replication",
      "Experimentation",
      "Empiricism"
    ],
    correctIndex: 3,
    explanation: "Science is defined as relying on determinism as its fundamental assumption, empiricism as its prime directive, experimentation as its basic strategy, replication as its necessary requirement for believability, parsimony as its conservative value, and philosophic doubt as its guiding conscience.",
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
    id: 3010,
    topic: "Assumptions and Attitudes of Science",
    prompt: "Whaley and Surratt used the anecdote of a neighbor who bowed, chanted, and drummed to ward off tigers to illustrate the need for which scientific attitude?",
    options: [
      "Parsimony",
      "Empiricism",
      "Replication",
      "Experimentation"
    ],
    correctIndex: 3,
    explanation: "The tiger-warding ritual anecdote illustrates the need for experimentation. When events covary or occur in close temporal sequence, other factors may be responsible. To investigate whether a functional relation exists, an experiment must be performed in which suspected causal factors are systematically controlled and manipulated.",
  },
  {
    id: 3011,
    topic: "Assumptions and Attitudes of Science",
    prompt: "Replication is described as the primary reason science is what kind of enterprise?",
    options: [
      "A self-correcting enterprise that ultimately gets it right",
      "A cumulative enterprise that always grows",
      "An objective enterprise free from all bias",
      "A deductive enterprise that confirms established theory"
    ],
    correctIndex: 0,
    explanation: "Replication, not the infallibility or inherent honesty of scientists, is the primary reason science is a self-correcting enterprise that ultimately gets it right. Replication is the primary method by which scientists determine the reliability and usefulness of their findings and discover their mistakes.",
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
    id: 3016,
    topic: "A Brief History of Behavior Analysis",
    prompt: "Respondent behaviors are described as being what in relation to the stimuli that precede them?",
    options: [
      "Shaped, meaning they develop gradually through successive approximations",
      "Maintained, meaning they are sustained by ongoing reinforcement",
      "Emitted, meaning they are voluntary and selected by consequences",
      "Elicited, meaning they are brought out by antecedent stimuli"
    ],
    correctIndex: 3,
    explanation: "Respondent behavior is reflexive behavior. Respondents are elicited, or 'brought out,' by stimuli that immediately precede them. Respondent behaviors are essentially involuntary and occur whenever the eliciting stimulus is presented.",
  },
  {
    id: 3017,
    topic: "A Brief History of Behavior Analysis",
    prompt: "Unlike respondent behavior, operant behavior is not elicited by preceding stimuli but instead is influenced by which of the following?",
    options: [
      "Hypothetical cognitive processes within the organism",
      "The strength of the reflex arc in the nervous system",
      "The genetic predispositions of the organism",
      "Stimulus changes that have followed the behavior in the past"
    ],
    correctIndex: 3,
    explanation: "Operant behaviors are not elicited by preceding stimuli but instead are influenced by stimulus changes that have followed the behavior in the past. Skinner's most powerful contribution was his discovery and experimental analyses of the effects of consequences on behavior.",
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
    id: 3022,
    topic: "Skinner's Radical Behaviorism",
    prompt: "Radical behaviorism makes three major assumptions about private events. Which of the following is one of those assumptions?",
    options: [
      "Private events such as thoughts and feelings are outside the proper domain of a behavioral science",
      "Private behavior operates according to principles of a separate mental world",
      "Private events cannot influence publicly observable behavior",
      "Private events such as thoughts and feelings are behavior"
    ],
    correctIndex: 3,
    explanation: "Skinner's behaviorism makes three major assumptions about private events: (a) private events such as thoughts and feelings are behavior; (b) behavior within the skin is distinguished from public behavior only by its inaccessibility; and (c) private behavior is influenced by the same kinds of variables as publicly accessible behavior.",
  },
  {
    id: 3023,
    topic: "Skinner's Radical Behaviorism",
    prompt: "In the context of radical behaviorism, why is the word 'radical' an appropriate modifier?",
    options: [
      "It signals the rejection of all experimental evidence in favor of pure observation",
      "It refers to the founding of behavior analysis in radical political contexts",
      "It reflects the philosophy's far-reaching inclusion of all behavior, public and private, representing a dramatic departure from other conceptual systems",
      "It indicates that only extreme behavioral interventions are consistent with the philosophy"
    ],
    correctIndex: 2,
    explanation: "The proper connotations of 'radical' in radical behaviorism are far-reaching and thoroughgoing, connoting the philosophy's inclusion of all behavior, public and private. It is also an appropriate modifier because Skinner's form of behaviorism represents a dramatic departure from other conceptual systems.",
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
    id: 3025,
    topic: "Applied Behavior Analysis: Historical Foundations",
    prompt: "The first published study to report the human application of principles of operant behavior was conducted by Fuller (1949). What response did Fuller condition, and in what type of participant?",
    options: [
      "Walking, in a child with moderate intellectual disabilities",
      "Arm-raising, in an 18-year-old with profound developmental disabilities",
      "Lever-pressing, in an adult with schizophrenia",
      "Verbal responding, in a preschool child with autism"
    ],
    correctIndex: 1,
    explanation: "Fuller (1949) conducted the first published study of the human application of operant conditioning. The participant was an 18-year-old with profound developmental disabilities who could not roll over. Fuller conditioned arm-raising by delivering a warm sugar-milk solution contingent on right-arm movement.",
  },
  {
    id: 3026,
    topic: "Applied Behavior Analysis: Historical Foundations",
    prompt: "The branch of behavior analysis now called applied behavior analysis can be traced to which 1959 publication?",
    options: [
      "\"Psychology as the Behaviorist Views It\" by Watson",
      "The first issue of the Journal of Applied Behavior Analysis",
      "\"The Psychiatric Nurse as a Behavioral Engineer\" by Ayllon and Michael",
      "\"Some Current Dimensions of Applied Behavior Analysis\" by Baer, Wolf, and Risley"
    ],
    correctIndex: 2,
    explanation: "The branch of behavior analysis that would later be called applied behavior analysis can be traced to the 1959 publication of Ayllon and Michael's paper 'The Psychiatric Nurse as a Behavioral Engineer,' in which direct care personnel used behavior principles to improve functioning in a state hospital.",
  },
  {
    id: 3027,
    topic: "Applied Behavior Analysis: Historical Foundations",
    prompt: "Two significant events in 1968 mark the formal beginning of contemporary applied behavior analysis. Which pair of events correctly identifies them?",
    options: [
      "Publication of JABA's first issue and publication of Baer, Wolf, and Risley's 'Some Current Dimensions of Applied Behavior Analysis'",
      "Publication of Fuller's operant conditioning study and founding of the Association for Behavior Analysis",
      "Publication of Skinner's Walden Two and the founding of the Journal of the Experimental Analysis of Behavior",
      "Publication of Ayllon and Michael's article and the founding of the BACB"
    ],
    correctIndex: 0,
    explanation: "Two significant events in 1968 mark the formal beginning of contemporary applied behavior analysis: the Journal of Applied Behavior Analysis (JABA) began publication, and Baer, Wolf, and Risley published 'Some Current Dimensions of Applied Behavior Analysis,' which outlined the seven defining dimensions of the field.",
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
    id: 3031,
    topic: "Characteristics of Applied Behavior Analysis",
    prompt: "According to the 'behavioral' dimension, explicit measurement of the reliability of human observers becomes what?",
    options: [
      "Optional when the behavior being measured is clearly defined",
      "Required only in basic research but not in applied settings",
      "Not merely good technique, but a prime criterion of whether the study was appropriately behavioral",
      "Unnecessary when the researcher is highly trained and experienced"
    ],
    correctIndex: 2,
    explanation: "Baer et al. (1968) stated that explicit measurement of the reliability of human observers becomes 'not merely good technique, but a prime criterion of whether the study was appropriately behavioral,' because observed changes may reflect only a change in observer behavior rather than the subject's behavior.",
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
    id: 3036,
    topic: "Characteristics of Applied Behavior Analysis",
    prompt: "When Baer and colleagues revisited the effectiveness dimension in 1987, they recommended that effectiveness also be judged by the extent to which changes in target behaviors result in what?",
    options: [
      "Noticeable improvements in the reasons those behaviors were originally selected for change",
      "Statistically significant group differences between treated and untreated participants",
      "Generalization to at least three different settings not included in the original treatment",
      "Maintenance of behavior change for at least six months post-intervention"
    ],
    correctIndex: 0,
    explanation: "In 1987, Baer and colleagues recommended that the effectiveness of ABA also be judged by the extent to which changes in the target behaviors result in noticeable changes in the reasons those behaviors were selected for change originally. Without this, ABA may achieve one level of effectiveness yet fail to achieve a critical form of social validity.",
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
    id: 3038,
    topic: "Other Characteristics of ABA",
    prompt: "The 'accountable' characteristic of ABA is primarily a result of which feature of behavior analytic practice?",
    options: [
      "The use of randomized controlled trials that allow comparison to untreated groups",
      "Peer review of all findings before implementation",
      "Direct and frequent measurement that enables identification of both successes and failures",
      "The use of standardized assessment tools with established psychometric properties"
    ],
    correctIndex: 2,
    explanation: "Applied behavior analysts' reliance on direct and frequent measurement to detect changes in behavior yields an inescapable and socially valuable form of accountability. Direct and frequent measurement is the foundation and most important component of ABA practices, enabling behavior analysts to identify successes and failures.",
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
    id: 3043,
    topic: "Four Interrelated Domains of Behavior Analysis",
    prompt: "Translational research is described as bridging which two domains of behavior analysis?",
    options: [
      "Radical behaviorism and methodological behaviorism",
      "Basic research (EAB) and applied research (ABA)",
      "Professional practice and conceptual philosophy",
      "Organizational behavior management and clinical practice"
    ],
    correctIndex: 1,
    explanation: "Translational research bridges basic and applied areas and translates knowledge derived from basic research into state-of-the-art clinical practices for use in the community. In some areas this is a bidirectional interplay between laboratory and applied research, where applied questions inspire research on basic mechanisms.",
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
    id: 3045,
    topic: "Skinner's Radical Behaviorism",
    prompt: "Consider a rat that presses a lever only when a light is on. Attributing this performance to the rat 'knowing' to press the lever is problematic for what reason?",
    options: [
      "'Knowledge' is acceptable as a hypothetical construct when the functional account is incomplete",
      "Knowledge is a valid construct that should be measured independently",
      "'Knowledge' is an explanatory fiction that is simply another name for the observed behavior and contributes nothing to a functional account",
      "Knowledge cannot be attributed to nonhuman animals under any circumstances"
    ],
    correctIndex: 2,
    explanation: "Attributing the rat's behavior to 'knowledge' is an example of an explanatory fiction, a fictitious variable that is simply another name for the observed behavior and contributes nothing to understanding the variables responsible for developing or maintaining the behavior. Explanatory fictions create a false sense of understanding through circular reasoning.",
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
    id: 3047,
    topic: "Assumptions and Attitudes of Science",
    prompt: "Determinism plays a 'pivotal dual role' in scientific practice. Which of the following correctly describes that dual role?",
    options: [
      "Determinism is both the hypothesis tested in each experiment and the method of statistical analysis used to confirm results",
      "Determinism is both the goal of basic research and the assumption guiding applied practice",
      "Determinism is at once a philosophical stance that does not lend itself to proof and the confirmation that is sought by each experiment",
      "Determinism is the dependent variable in theoretical work and the independent variable in applied work"
    ],
    correctIndex: 2,
    explanation: "Determinism plays a pivotal dual role: it is at once a philosophical stance that does not lend itself to proof and the confirmation that is sought by each experiment. The scientist first assumes lawfulness and then proceeds to look for lawful relations.",
  },
  {
    id: 3048,
    topic: "Characteristics of Applied Behavior Analysis",
    prompt: "Baer and colleagues (1968) argued that conceptually systematic descriptions of behavioral procedures are important for which of the following reasons?",
    options: [
      "They allow ethical review boards to evaluate the safety of procedures",
      "They help consumers derive other similar procedures from the same principle and prevent the technology from becoming merely a collection of tricks",
      "They make it easier for non-behavioral practitioners to implement the procedures without training",
      "They allow statistical comparison of procedure effectiveness across different participant populations"
    ],
    correctIndex: 1,
    explanation: "Baer et al. (1968) provided two rationales for conceptual systems: first, relating specific procedures to basic principles might enable the research consumer to derive other similar procedures from the same principle; second, conceptual systems are needed if a technology is to become an integrated discipline instead of a 'collection of tricks.'",
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
  {
    id: 3050,
    topic: "Characteristics of Applied Behavior Analysis",
    prompt: "A check of the technological adequacy of a procedural description involves having a trained person read the description and then act it out in detail. The description is NOT sufficiently technological if the person does which of the following?",
    options: [
      "Completes the procedure in less time than planned by the original researcher",
      "Achieves behavioral outcomes that differ slightly from the original study's results",
      "Implements the procedures in a different setting than the one specified in the description",
      "Makes any mistakes, adds any operations, omits any steps, or has to ask any questions to clarify the description"
    ],
    correctIndex: 3,
    explanation: "If the person makes any mistakes, adds any operations, omits any steps, or has to ask any questions to clarify the written description, then the description is not sufficiently technological and requires improvement. The goal of the technological dimension is to enable precise replication by others.",
  },
];

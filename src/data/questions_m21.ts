import type { Question } from "../types";

/**
 * BCBA practice questions for Cooper et al., Chapter 18: Verbal Behavior.
 * Grounded in the chapter text. Option order is shuffled at runtime, so
 * correctIndex placement here is arbitrary.
 */
export const QUESTIONS_M21: Question[] = [
  {
    id: 20001,
    topic: "Form and Function of Language",
    prompt: "The formal properties of language refer to which aspect of a verbal response?",
    options: [
      "The topography of the verbal response",
      "The causes or antecedents of the verbal response",
      "The cognitive processing underlying the response",
      "The genetic endowment of the speaker"
    ],
    correctIndex: 0,
    explanation: "Formal properties involve the topography of a verbal response, meaning what the response looks or sounds like, while functional properties involve the causes of that response.",
  },
  {
    id: 20003,
    topic: "Defining Verbal Behavior",
    prompt: "Skinner defined verbal behavior as behavior reinforced through the mediation of other persons who must be responding in ways:",
    options: [
      "Shaped solely by the speaker's genetic endowment",
      "Conditioned precisely in order to reinforce the behavior of the speaker",
      "Based on the formal properties of the speaker's response",
      "Governed by innate linguistic rules"
    ],
    correctIndex: 1,
    explanation: "Skinner defined verbal behavior as 'behavior reinforced through the mediation of other persons,' and those persons 'must be responding in ways which have been conditioned precisely in order to reinforce the behavior of the speaker.'",
  },
  {
    id: 20005,
    topic: "Topography-based and Selection-based Verbal Behavior",
    prompt: "In topography-based verbal behavior, what does the listener's behavior depend on?",
    options: [
      "The specific icon or symbol selected from a comparison array",
      "The specific response topography emitted by the speaker",
      "The strength of the motivating operation in the speaker",
      "The number of stimuli available in the environment"
    ],
    correctIndex: 1,
    explanation: "In topography-based verbal behavior, the listener's behavior is controlled by the speaker's specific response topography (e.g., the particular sign or spoken word), which informs the listener of the relevant motivation and consequence.",
  },
  {
    id: 20008,
    topic: "The Elementary Verbal Operants",
    prompt: "Which of the following correctly identifies the antecedent and consequence defining the mand relation?",
    options: [
      "Nonverbal SD and generalized conditioned reinforcement",
      "Verbal SD and generalized conditioned reinforcement",
      "Motivating operation and specific reinforcement",
      "Verbal SD with formal similarity and generalized reinforcement"
    ],
    correctIndex: 2,
    explanation: "The mand is controlled by a motivating operation (MO) and results in specific reinforcement that is directly relevant to that MO, distinguishing it from operants maintained by generalized reinforcement.",
  },
  {
    id: 20011,
    topic: "The Codic Relations",
    prompt: "A student reads the written word 'Chicago' aloud and says 'Chicago.' This exemplifies which verbal operant?",
    options: [
      "Echoic",
      "Textual",
      "Intraverbal",
      "Taking dictation"
    ],
    correctIndex: 1,
    explanation: "Textual behavior involves emitting a vocal response under the control of a written verbal SD. There is point-to-point correspondence but no formal similarity, because the stimulus is visual and the response is auditory.",
  },
  {
    id: 20012,
    topic: "The Codic Relations",
    prompt: "A student hears someone say 'dog' and then types 'D-O-G.' This is an example of which verbal operant?",
    options: [
      "Echoic",
      "Textual",
      "Intraverbal",
      "Taking dictation"
    ],
    correctIndex: 3,
    explanation: "Taking dictation involves converting spoken words to written words (spelling). Like the textual relation, it has point-to-point correspondence but no formal similarity; the stimulus is auditory and the response is written.",
  },
  {
    id: 20013,
    topic: "The Elementary Verbal Operants",
    prompt: "A teacher asks 'What time is it?' and a student responds '10 am' without looking at a clock. This is best classified as:",
    options: [
      "Mand",
      "Tact",
      "Echoic",
      "Intraverbal"
    ],
    correctIndex: 3,
    explanation: "The intraverbal relation involves a verbal response controlled by a verbal SD with no point-to-point correspondence between the stimulus and response. 'What time is it?' and '10 am' share no formal or point-to-point match.",
  },
  {
    id: 20014,
    topic: "Formal Similarity and Point-to-Point Correspondence",
    prompt: "Formal similarity between a verbal stimulus and a verbal response requires that:",
    options: [
      "The response is longer than the stimulus",
      "Both the stimulus and the response product are in the same sense mode and physically resemble each other",
      "The stimulus is nonverbal and the response is verbal",
      "Point-to-point correspondence exists regardless of sense mode"
    ],
    correctIndex: 1,
    explanation: "Formal similarity occurs when the controlling verbal stimulus and the response product share the same sense mode (e.g., both auditory) and physically resemble each other (e.g., hear 'bear,' say 'bear').",
  },
  {
    id: 20016,
    topic: "The Duplic Relations",
    prompt: "Which of the following best describes the three types of duplic relations?",
    options: [
      "Textual, taking dictation, and intraverbal",
      "Mand, tact, and intraverbal",
      "Echoic, motor imitation, and copying text",
      "Simple verbal, compound verbal, and verbal conditional"
    ],
    correctIndex: 2,
    explanation: "The three types of duplic relations are echoic (auditory match), motor imitation as it relates to sign language (visual match), and copying text. All involve verbally copying verbal stimuli.",
  },
  {
    id: 20019,
    topic: "Motivating Operations and the Mand",
    prompt: "How does specific reinforcement for a mand differ from the generalized reinforcement that maintains other verbal operants?",
    options: [
      "Specific reinforcement can be used with any verbal operant",
      "Specific reinforcement is established by its relation to a particular MO and abolishes that MO when provided",
      "Specific reinforcement involves praise and approval from listeners",
      "Specific reinforcement is provided automatically without listener involvement"
    ],
    correctIndex: 1,
    explanation: "Specific reinforcement is established by its relation to a specific MO, and when sufficient specific reinforcement is delivered it abolishes the MO. Generalized reinforcement, by contrast, is not dependent on any single MO.",
  },
  {
    id: 20022,
    topic: "Classifying Mand Relations",
    prompt: "A speaker says 'Don't touch that, it's hot!' to warn a child about a stove. According to Skinner's classification of mand types, this is best identified as a:",
    options: [
      "Request",
      "Command",
      "Warning",
      "Advice"
    ],
    correctIndex: 2,
    explanation: "A warning is a mand with an MO to inform the listener of a possible aversive stimulus. Listener compliance (avoiding the stove) is the specific reinforcement for the speaker, and the listener is reinforced by avoiding the aversive stimulus.",
  },
  {
    id: 20023,
    topic: "Multiple Control",
    prompt: "In convergent multiple control, which of the following correctly describes the relationship between antecedents and responses?",
    options: [
      "A single antecedent variable controls more than one response",
      "A single response is controlled by more than one antecedent variable",
      "Two responses each produce separate reinforcers",
      "Multiple responses compete to suppress each other"
    ],
    correctIndex: 1,
    explanation: "Convergent multiple control, as defined by Michael and colleagues, occurs when a single response is controlled by more than one antecedent variable simultaneously, such as a mand controlled by both an MO and an audience SD.",
  },
  {
    id: 20025,
    topic: "Private Events",
    prompt: "Which of the following best characterizes Skinner's view of private events?",
    options: [
      "Private events have special properties because they occur inside the skin",
      "Private events should be excluded from behavioral analysis because they cannot be observed",
      "Private events are distinguished by limited accessibility but not by any special structure or nature",
      "Private events do not function as causal variables in behavior"
    ],
    correctIndex: 2,
    explanation: "Skinner acknowledged that private events, while only accessible to the person experiencing them, are no different in nature from public events. They can function as MOs, SDs, and reinforcers and should be included in a complete behavioral account.",
  },
  {
    id: 20026,
    topic: "Tact Extension",
    prompt: "A child has learned to tact 'tree' when seeing a maple. When shown an oak, the child correctly says 'tree' because the oak shares all the relevant features of a tree. This is an example of:",
    options: [
      "Metaphorical tact extension",
      "Metonymical tact extension",
      "Generic tact extension",
      "Solecistic tact extension"
    ],
    correctIndex: 2,
    explanation: "In generic tact extension, the novel stimulus shares all of the relevant or defining features of the original stimulus. An oak shares all defining features of 'tree,' so the tact extends generically.",
  },
  {
    id: 20030,
    topic: "Reinforcement Controlling the Tact",
    prompt: "A child learns to label body parts during structured teaching sessions where the teacher provides differential praise for correct labeling. The type of generalized reinforcement involved in establishing this tact repertoire is best described as:",
    options: [
      "Automatic reinforcement",
      "Educational reinforcement",
      "Facilitative reinforcement",
      "Escape from aversive stimulation"
    ],
    correctIndex: 1,
    explanation: "Educational reinforcement is defined by Skinner as reinforcement supplied primarily because it establishes and maintains a particular form of behavior in the speaker, as in structured tact training with differential praise.",
  },
  {
    id: 20031,
    topic: "Automatic Reinforcement",
    prompt: "A child hums a tune to herself while playing and receives no social consequences. The humming persists because it appears to feel pleasant. This best illustrates:",
    options: [
      "Facilitative reinforcement",
      "Educational reinforcement",
      "Automatic reinforcement emanating from the response product",
      "Specific reinforcement controlled by a UMO"
    ],
    correctIndex: 2,
    explanation: "Automatic reinforcement can occur when the reinforcement emanates from the response product of the behavior itself without the direct involvement of other people, as in a child humming because it feels good.",
  },
  {
    id: 20032,
    topic: "The Intraverbal",
    prompt: "Upon hearing 'yellow fruit,' a child responds 'banana.' What type of verbal discrimination controls this intraverbal response?",
    options: [
      "Simple verbal discrimination",
      "Compound verbal discrimination",
      "Verbal conditional discrimination",
      "Verbal function-altering effect"
    ],
    correctIndex: 1,
    explanation: "A compound verbal discrimination involves two or more verbal SDs that each independently evoke behaviors, but when they occur together in the same antecedent configuration, a more specific intraverbal response is evoked.",
  },
  {
    id: 20033,
    topic: "The Intraverbal",
    prompt: "The word 'not' in the antecedent 'Who is not going to dinner?' alters the evocative effects of 'going to dinner,' changing the intraverbal response evoked. This is an example of:",
    options: [
      "Simple verbal discrimination",
      "Compound verbal discrimination",
      "Verbal conditional discrimination",
      "Recombinative generalization"
    ],
    correctIndex: 2,
    explanation: "A verbal conditional discrimination occurs when one verbal stimulus alters the evocative effects of another verbal stimulus in the same antecedent configuration, as 'not' changes the meaning of 'going to dinner.'",
  },
  {
    id: 20035,
    topic: "Verbal SDs and Intraverbal Control",
    prompt: "Palmer recommends using the term 'intraverbal control' for situations in which:",
    options: [
      "An intraverbal response is maintained by generalized reinforcement alone",
      "A verbal antecedent is, by itself, insufficient to evoke the relevant response but plays a supplemental causal role",
      "The intraverbal replaces the mand in early language development",
      "A listener's nonverbal response is evoked by a verbal SD"
    ],
    correctIndex: 1,
    explanation: "Palmer uses 'intraverbal control' for cases in which the verbal antecedent is insufficient on its own to evoke the relevant response but nonetheless participates as a supplemental SD in convergent multiple control.",
  },
  {
    id: 20036,
    topic: "Generative Learning",
    prompt: "Generative learning is defined as a behavioral effect in which:",
    options: [
      "A child learns a new operant through direct instruction and reinforcement",
      "Previously acquired skills enable or accelerate the acquisition of other skills without direct teaching or a reinforcement history",
      "A mand is strengthened by pairing it with an unconditioned motivating operation",
      "Stimulus generalization spreads a tact from a trained stimulus to a physically similar novel stimulus"
    ],
    correctIndex: 1,
    explanation: "Generative learning involves a behavioral effect where previously acquired skills enable or accelerate the acquisition of other skills without dependence on direct teaching or a history of reinforcement.",
  },
  {
    id: 20038,
    topic: "Recombinative Generalization",
    prompt: "A child is taught to tact 'green circle' and 'red square' and then, without direct training, correctly tacts 'green square' and 'red circle.' This outcome is called:",
    options: [
      "Stimulus equivalence",
      "Metaphorical tact extension",
      "Recombinative generalization",
      "Common bidirectional naming"
    ],
    correctIndex: 2,
    explanation: "Recombinative generalization is differential responding to novel combinations of stimulus components that have been included previously in other stimulus contexts. Teaching 'green circle' and 'red square' can generate untrained 'green square' and 'red circle.'",
  },
  {
    id: 20039,
    topic: "Common Bidirectional Naming",
    prompt: "In common bidirectional naming (C-BiN), once prerequisite repertoires are established, which generative effect occurs?",
    options: [
      "A new word acquired as a listener automatically generates a tact without further training",
      "A mand automatically generates an intraverbal without direct teaching",
      "A copied text automatically generates an echoic response",
      "A simple verbal discrimination automatically becomes a verbal conditional discrimination"
    ],
    correctIndex: 0,
    explanation: "In C-BiN, a new word acquired as listener can immediately generate speaker behavior (a tact) without further training, and vice versa, fusing the speaker and listener repertoires bidirectionally.",
  },
  {
    id: 20040,
    topic: "Joint Control",
    prompt: "Joint control, as described by Lowenkron, involves:",
    options: [
      "Two speakers emitting the same verbal response to different listeners simultaneously",
      "Two separately established antecedents that evoke the same response topography arising simultaneously, producing an emergent SD",
      "A listener providing both verbal and nonverbal reinforcement in the same episode",
      "A speaker simultaneously emitting a mand and a tact to separate audiences"
    ],
    correctIndex: 1,
    explanation: "Joint control occurs when two separately established antecedents that evoke the same response topography arise simultaneously. Their physical similarity generates a nonverbal SD that evokes emergent behavior.",
  },
  {
    id: 20041,
    topic: "Autoclitic Verbal Behavior",
    prompt: "In Skinner's analysis, autoclitic behavior is best described as:",
    options: [
      "Primary verbal behavior controlled directly by an MO",
      "Secondary verbal behavior controlled by some feature of the primary verbal operant or its controlling variables",
      "Any verbal response emitted without a listener present",
      "Verbal behavior that replaces nonverbal behavior when an MO is at strength"
    ],
    correctIndex: 1,
    explanation: "Autoclitic behavior is secondary verbal behavior that is controlled by some feature of the primary verbal operant or by its controlling variables, providing additional information to the listener about the primary response.",
  },
  {
    id: 20042,
    topic: "Autoclitic Verbal Behavior",
    prompt: "A speaker says 'Believe me, they are wrong,' using 'believe me' to mand the listener to verbally accept the primary statement. This is an example of:",
    options: [
      "Autoclitic tact of strength",
      "Autoclitic mand",
      "Relational autoclitic tact",
      "Intraverbal autoclitic frame"
    ],
    correctIndex: 1,
    explanation: "An autoclitic mand enjoins the listener to take some specific action regarding the primary response. 'Believe me' mands the listener to accept without challenge the primary response 'they are wrong.'",
  },
  {
    id: 20045,
    topic: "Listener Behavior",
    prompt: "According to Skinner, when a listener takes verbal action (e.g., asking a follow-up question), that listener behavior should be analyzed as:",
    options: [
      "A form of listener discrimination controlled by a nonverbal SD",
      "Speaker behavior, classified as the appropriate verbal operant (e.g., a mand)",
      "An autoclitic response to the primary speaker's words",
      "A duplic relation controlled by formal similarity"
    ],
    correctIndex: 1,
    explanation: "When a listener takes verbal action, she becomes a speaker, and her behavior should be classified as speaker behavior using the relevant verbal operant categories (e.g., a mand, if she is asking for information).",
  },
  {
    id: 20047,
    topic: "Applications to Language Assessment",
    prompt: "A language assessment based on Skinner's verbal behavior framework has three primary goals. Which of the following correctly identifies all three?",
    options: [
      "Identify the MOs present, compare listener discriminations with tact repertoires, and select a reinforcement schedule",
      "Identify the nature of the delay or problem, compare performance with expected norms, and provide guidance for an intervention program",
      "Measure echoic strength, assess motor imitation, and establish mand frames",
      "Select response forms, capture CMO-Ts, and teach autoclitic frames"
    ],
    correctIndex: 1,
    explanation: "A language assessment for a person with language delays has three primary goals: (1) to identify the nature of the delay or problem, (2) to compare performance with expected norms, and (3) to provide guidance for an appropriate intervention program.",
  },
  {
    id: 20048,
    topic: "Applications to Language Intervention",
    prompt: "In early mand training, which two general methods are used for identifying and controlling motivating operations?",
    options: [
      "Capturing the MO value change as it occurs naturally, and creating the MO by generating a change that alters the value of a consequence",
      "Using UMOs exclusively, and applying echoic prompts for each trial",
      "Providing generalized Sr and removing specific Sr after mand emission",
      "Conducting discrete trials under stable deprivation conditions only"
    ],
    correctIndex: 0,
    explanation: "Two general methods are used to control MOs for mand training: (1) capturing the MO value change as it naturally occurs, and (2) creating the MO by generating some change that increases the value of a specific consequence.",
  },
  {
    id: 20049,
    topic: "The Loss of Verbal Behavior",
    prompt: "In his discussion of aphasia, Skinner noted that the order of damage to verbal operants tends to follow the order of difficulty. Which operants did Skinner identify as most vulnerable to damage?",
    options: [
      "Echoic and textual, because they require formal similarity",
      "Mand and duplic, because they depend on strong motivating operations",
      "Intraverbals and tacts, while textual and echoic often survive",
      "Taking dictation and copying text, because they are codic"
    ],
    correctIndex: 2,
    explanation: "Skinner noted that in aphasia, textual and echoic behavior often survive while intraverbals and tacts appear to be most vulnerable, following the order of difficulty in the verbal operant hierarchy.",
  },
  {
    id: 20050,
    topic: "Classifying the Verbal Operants",
    prompt: "A behavior analyst is using the verbal classification flowchart. A child sees a ball (nonverbal SD) and says 'ball.' The analyst determines there is no MO controlling the response, but a nonverbal SD is present. What is the best classification?",
    options: [
      "Mand, because the child emitted a vocal response",
      "Tact, because a nonverbal SD controls the response form",
      "Echoic, because the response matches the form of a previous stimulus",
      "Intraverbal, because there is no MO present"
    ],
    correctIndex: 1,
    explanation: "Using the classification flowchart: no MO is controlling the response, so it is not a mand; a nonverbal SD controls the response, so it is classified as a tact. The tact relation is verbal behavior controlled by nonverbal SDs and maintained by generalized Sr.",
  },
];

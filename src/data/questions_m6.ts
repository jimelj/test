import type { Question } from "../types";

/**
 * BCBA practice questions for Cooper et al., Chapter 3: Selecting and Defining Target Behaviors.
 * Grounded in the chapter text. Option order is shuffled at runtime, so
 * correctIndex placement here is arbitrary.
 */
export const QUESTIONS_M6: Question[] = [
  {
    id: 5001,
    topic: "Role of Assessment in Applied Behavior Analysis",
    prompt: "According to the systematic model of instruction described, which sequence correctly orders the four phases?",
    options: [
      "Assessment, planning, implementation, evaluation",
      "Planning, assessment, evaluation, implementation",
      "Screening, planning, assessment, evaluation",
      "Implementation, assessment, planning, evaluation"
    ],
    correctIndex: 0,
    explanation: "The four-phase systematic model of instruction is assessment, planning, implementation, and evaluation, in that order."
  },
  {
    id: 5004,
    topic: "Preassessment Considerations",
    prompt: "Before conducting a behavioral assessment, the first fundamental question the analyst must address concerns:",
    options: [
      "Which standardized test will yield the most reliable scores",
      "Who has the authority, permission, resources, and skills to assess and intervene",
      "What reinforcers are preferred by the client",
      "Which indirect assessment format to use first"
    ],
    correctIndex: 1,
    explanation: "The first preassessment question is who has the authority, permission, resources, and skills to complete an assessment and intervene with the client."
  },
  {
    id: 5006,
    topic: "Indirect Assessment",
    prompt: "Interviews, checklists, and rating scales are classified as indirect assessment approaches because the data they produce are derived from:",
    options: [
      "Controlled experimental manipulations of antecedents",
      "Direct, continuous observation in the natural environment",
      "Standardized norm-referenced test scores",
      "Recollections, reconstructions, and subjective ordinal-scale ratings"
    ],
    correctIndex: 3,
    explanation: "Indirect assessment data come from recollections, reconstructions, and/or subjective, ordinal-scale ratings of events, not from direct measurement of behavior."
  },
  {
    id: 5008,
    topic: "Interviewing the Client",
    prompt: "Behavior analysts conducting behavioral interviews rely primarily on what and when questions because these questions tend to focus on:",
    options: [
      "The severity and topography of the problem behavior",
      "Historical data from previous standardized assessments",
      "The client's internal mental states and motivations",
      "Environmental conditions that exist before, during, and after behavioral episodes"
    ],
    correctIndex: 3,
    explanation: "What and when questions focus on the environmental conditions before, during, and after a behavioral episode, providing information about controlling variables."
  },
  {
    id: 5009,
    topic: "Interviewing Significant Others",
    prompt: "When significant others are asked to describe a behavioral problem, they often begin by using general labels that imply intrinsic causes. The behavior analyst's role during this interview is to help them describe the problem in terms of:",
    options: [
      "Specific behaviors, environmental conditions, and associated events",
      "Psychological diagnoses and developmental delays",
      "Subjective impressions and emotional experiences",
      "Long-term goals and aspirations for the client"
    ],
    correctIndex: 0,
    explanation: "By asking structured questions, the behavior analyst helps significant others describe the problem in terms of specific behaviors, environmental conditions, and events associated with those behaviors."
  },
  {
    id: 5010,
    topic: "Checklists and Rating Scales",
    prompt: "A behavior checklist provides descriptions of specific behaviors along with:",
    options: [
      "The conditions under which each behavior occurs, including antecedent and consequence events",
      "Norm-referenced percentile scores for comparison",
      "A standardized scoring system independent of the individual client",
      "Diagnoses drawn from the DSM classification system"
    ],
    correctIndex: 0,
    explanation: "A behavior checklist provides descriptions of specific behaviors and the conditions under which each behavior occurs, including antecedent and consequence events that may affect frequency, intensity, or duration."
  },
  {
    id: 5012,
    topic: "Direct Assessment",
    prompt: "Tests and direct observations are classified as direct assessment approaches because they provide:",
    options: [
      "Qualitative narratives about behavioral function",
      "Measurable and validated information about the learner's behavior",
      "Normative comparisons with a standardized population",
      "Data derived from informant recollections and subjective ratings"
    ],
    correctIndex: 1,
    explanation: "Direct assessment approaches such as tests and observations provide measurable and validated information about the learner's behavior, distinguishing them from indirect methods."
  },
  {
    id: 5013,
    topic: "Standardized Tests",
    prompt: "The majority of standardized tests are not ideal for behavioral assessment primarily because:",
    options: [
      "They are too expensive for most clinical settings",
      "They can only be interpreted by statisticians",
      "They require more than two hours to administer",
      "Their results cannot be translated directly into target behaviors for instruction or treatment"
    ],
    correctIndex: 3,
    explanation: "Most standardized tests indicate how a student performs relative to peers but do not identify specific skills mastered or provide sufficient direction for launching a behavioral intervention or enrichment program."
  },
  {
    id: 5014,
    topic: "Criterion-referenced Assessment",
    prompt: "A criterion-referenced assessment (CRA) is distinguished from norm-referenced assessment in that a CRA measures a child's skill performance across:",
    options: [
      "Nationally representative normative samples",
      "Grade-equivalent and age-equivalent benchmarks",
      "Standardized z-score distributions",
      "Recognized developmental milestones"
    ],
    correctIndex: 3,
    explanation: "A CRA measures a child's skill performance across recognized and commonly accepted developmental milestones, indicating whether each skill is present, not present, or emerging."
  },
  {
    id: 5015,
    topic: "Curriculum-based Assessment",
    prompt: "A curriculum-based assessment (CBA) is especially useful in applied settings because the data obtained:",
    options: [
      "Bear directly on the daily or weekly tasks the learner performs in response to planned lessons",
      "Compare the learner's performance with a national norm group",
      "Generate a composite score that drives placement decisions",
      "Are collected only on a summative, yearly basis"
    ],
    correctIndex: 0,
    explanation: "CBA data bear uniquely on the daily or weekly tasks the learner performs in response to planned lessons, making them directly relevant to instructional planning."
  },
  {
    id: 5016,
    topic: "Direct Observations",
    prompt: "ABC recording, first described by Bijou, Peterson, and Ault (1968), involves recording a descriptive, temporally sequenced account of:",
    options: [
      "All behaviors of interest along with their antecedent conditions and consequences as they occur in the natural environment",
      "The antecedents and consequences of a single pre-selected target behavior during controlled analogue sessions",
      "Observer ratings of behavioral severity using a structured Likert scale",
      "Historical records of behavioral incidents drawn from caregiver reports"
    ],
    correctIndex: 0,
    explanation: "ABC or anecdotal observation recording involves recording a descriptive, temporally sequenced account of all behaviors of interest and the antecedent conditions and consequences as those events occur in the client's natural environment."
  },
  {
    id: 5018,
    topic: "Ecological Assessment",
    prompt: "An ecological approach to behavioral assessment is characterized by gathering information about:",
    options: [
      "Norm-referenced test scores from multiple standardized instruments",
      "The person and the various environments in which that person lives and works, including physiological conditions and reinforcement history",
      "Curriculum-based performance data collected across academic subject areas",
      "The functional outcomes of specific operant behaviors using experimental analysis"
    ],
    correctIndex: 1,
    explanation: "An ecological assessment gathers a great deal of information about the person and the various environments in which that person lives and works, including physiological conditions, physical environment, interactions with others, home environment, and past reinforcement history."
  },
  {
    id: 5020,
    topic: "Reactive Effects of Assessment",
    prompt: "Reactivity in behavioral assessment refers to:",
    options: [
      "The tendency of behavior analysts to react emotionally to client behavior",
      "The effects that an assessment procedure has on the behavior being assessed",
      "The statistical reliability of an observational coding system",
      "The degree to which an intervention is implemented with fidelity"
    ],
    correctIndex: 1,
    explanation: "Reactivity refers to the effects that an assessment has on the behavior being assessed, and it is most likely when observation is obtrusive, meaning the person being observed is aware of the observer's presence and purpose."
  },
  {
    id: 5024,
    topic: "Assessing the Social Significance of Potential Target Behaviors",
    prompt: "Hawkins (1984) defined habilitation as:",
    options: [
      "Teaching clients skills that match the average performance of their age peers",
      "A philosophy of integrating individuals with disabilities into normalized community environments",
      "The process of replacing maladaptive behavior with an adaptive alternative",
      "The degree to which a person's repertoire maximizes short- and long-term reinforcers and minimizes short- and long-term punishers"
    ],
    correctIndex: 3,
    explanation: "Hawkins defined habilitation as 'the degree to which the person's repertoire maximizes short- and long-term reinforcers for that individual and for others, and minimizes short- and long-term punishers.'"
  },
  {
    id: 5025,
    topic: "Assessing the Social Significance of Potential Target Behaviors",
    prompt: "Target behaviors should NOT be selected primarily for the benefit of others, to maintain the status quo, or because they:",
    options: [
      "Will improve access to reinforcers in daily life",
      "Are behavioral cusps that open new contingency environments",
      "Pique the interest of someone in a position to change the behavior",
      "Are necessary prerequisites for more complex functional skills"
    ],
    correctIndex: 2,
    explanation: "Target behaviors should not be selected simply because they pique the interest of someone in a position to change the behaviors, as this does not serve the client's best interests."
  },
  {
    id: 5026,
    topic: "Relevance of Behavior Rule",
    prompt: "Ayllon and Azrin's relevance of behavior rule states that a target behavior should be selected only when:",
    options: [
      "It can be defined in clear, objective, and observable terms",
      "It has been validated against performance of highly competent peers",
      "It meets the normalization criterion for age-appropriate behavior",
      "It is likely to produce reinforcement in the person's natural environment"
    ],
    correctIndex: 3,
    explanation: "The relevance of behavior rule states that a target behavior should be selected only when it can be determined that the behavior is likely to produce reinforcement in the person's natural environment."
  },
  {
    id: 5028,
    topic: "Behavioral Cusps",
    prompt: "Rosales-Ruiz and Baer defined a behavioral cusp as a behavior that:",
    options: [
      "Produces modifications in other untrained behaviors within the same response class",
      "Meets the normalization criterion and is age-appropriate for the client",
      "Directly replaces a maladaptive behavior targeted for elimination",
      "Exposes the individual to new environments, reinforcers, contingencies, responses, and stimulus controls"
    ],
    correctIndex: 3,
    explanation: "A behavioral cusp exposes the individual's repertoire to new environments, especially new reinforcers and punishers, new contingencies, new responses, new stimulus controls, and new communities of maintaining contingencies."
  },
  {
    id: 5031,
    topic: "Pivotal Behavior",
    prompt: "A pivotal behavior is defined as a behavior that, once learned:",
    options: [
      "Opens the individual to entirely new contingency environments not previously accessible",
      "Eliminates the need for ongoing behavioral intervention in that skill domain",
      "Meets the habilitation standard and maximizes reinforcement for others",
      "Produces corresponding modifications or covariations in other adaptive untrained behaviors"
    ],
    correctIndex: 3,
    explanation: "A pivotal behavior is one that, once learned, produces corresponding modifications or covariations in other adaptive untrained behaviors."
  },
  {
    id: 5033,
    topic: "Age-Appropriate Behavior",
    prompt: "The principle of normalization, as cited, refers to:",
    options: [
      "Using progressively more typical environments, expectations, and procedures to establish behaviors that are as culturally normal as possible",
      "Calculating norm-referenced scores to compare a client's performance with same-age peers",
      "Ensuring that behavior change programs are implemented without coercive procedures",
      "Designing interventions based on average performance data from a representative sample"
    ],
    correctIndex: 0,
    explanation: "Normalization refers to using progressively more typical environments, expectations, and procedures 'to establish and/or maintain personal behaviors which are as culturally normal as possible' (Wolfensberger, 1972)."
  },
  {
    id: 5035,
    topic: "Fair Pair Rule and Replacement Behavior",
    prompt: "The fair pair rule requires that whenever a practitioner plans to reduce or eliminate a behavior, the practitioner must first:",
    options: [
      "Conduct a preference assessment to identify reinforcers for the replacement behavior",
      "Determine an adaptive behavior that will replace it and design the plan to ensure that replacement behavior is learned",
      "Obtain written consent from the client and all significant others",
      "Set socially validated outcome criteria using data from highly competent peers"
    ],
    correctIndex: 1,
    explanation: "The fair pair rule requires that a practitioner never plan to reduce or eliminate a behavior without first determining an adaptive behavior to take its place and designing the intervention to ensure the replacement behavior is learned."
  },
  {
    id: 5037,
    topic: "Directness and the Actual Problem",
    prompt: "A common error in education is designing programs to increase on-task behavior when the primary objective should be to increase work production. This illustrates the importance of:",
    options: [
      "Using ecological assessment to understand contextual variables",
      "Applying the fair pair rule before targeting any behavior for reduction",
      "Selecting target behaviors that directly represent the actual problem or goal, not indirectly related behaviors",
      "Prioritizing behaviors that pose danger to the client or others"
    ],
    correctIndex: 2,
    explanation: "Selecting on-task behavior when work production is the true goal is an example of targeting an indirect, related behavior rather than the behavior that directly represents the primary objective."
  },
  {
    id: 5038,
    topic: "Verbal Behavior vs. the Real Target",
    prompt: "Behavior analysts distinguish between what people say and what they do. This distinction is important in target behavior selection because:",
    options: [
      "Verbal behavior is never an appropriate target behavior in applied behavior analysis",
      "Verbal behavior cannot be defined in observable or measurable terms",
      "Self-report data are more reliable than direct observation data",
      "Getting someone to talk differently about a problem does not necessarily mean their actual behavior will change"
    ],
    correctIndex: 3,
    explanation: "Knowing and doing are not the same. Getting someone to understand and verbalize about a maladaptive behavior does not necessarily mean that behavior will change in more constructive directions."
  },
  {
    id: 5039,
    topic: "Goals That Are Not Behaviors",
    prompt: "Weight loss is given as an example of a goal that is NOT a behavior itself. The correct target behaviors in a weight loss program should be:",
    options: [
      "The client's weight, measured and recorded daily on a graph",
      "The client's verbal reports of dietary compliance",
      "Measures of food consumption and exercise level",
      "Composite scores from a health behavior rating scale"
    ],
    correctIndex: 2,
    explanation: "Weight is the product or result of other behaviors. Target behaviors in a weight loss program should be measures of food consumption and exercise level, with intervention strategies designed to address those behaviors."
  },
  {
    id: 5040,
    topic: "Prioritizing Target Behaviors",
    prompt: "When multiple potential target behaviors have been identified, the first prioritization question to ask is:",
    options: [
      "Does this behavior pose any danger to the client or to others?",
      "Will changing this behavior reduce negative attention from others?",
      "How long-standing is the problem or skill deficit?",
      "Will this new behavior produce reinforcement for significant others?"
    ],
    correctIndex: 0,
    explanation: "Behaviors that cause harm or pose a serious threat to the client's or others' personal safety or health must receive first priority, making danger to self or others the foremost prioritization question."
  },
  {
    id: 5041,
    topic: "Prioritizing Target Behaviors",
    prompt: "When considering how many opportunities a person will have to use a new behavior, a behavior analyst would give higher priority to a skill that the person will use:",
    options: [
      "Only once or twice per year during specific scheduled activities",
      "In controlled training settings but not yet in community environments",
      "After a prerequisite chain of component behaviors has been mastered",
      "Every workday, such as packing a lunch"
    ],
    correctIndex: 3,
    explanation: "A skill needed every workday (such as packing a lunch) takes precedence over one needed only rarely (such as planning a 2-week vacation) because of the far greater number of opportunities to use and be reinforced for the skill."
  },
  {
    id: 5044,
    topic: "Defining Target Behaviors",
    prompt: "Explicit, well-written target behavior definitions are important for applied researchers because they enable:",
    options: [
      "Clients to self-monitor their behavior without additional training",
      "The selection of the most socially significant behaviors for intervention",
      "Determination of whether a behavior meets the habilitation standard",
      "Accurate and reliable measurement of the same response classes within and across studies"
    ],
    correctIndex: 3,
    explanation: "Without explicit, well-written definitions, researchers would be unable to accurately and reliably measure the same response classes within and across studies, or to aggregate, compare, and interpret their data."
  },
  {
    id: 5045,
    topic: "Two Types of Target Behavior Definitions",
    prompt: "A function-based definition designates responses as members of the targeted response class solely by:",
    options: [
      "The shape or physical form of the behavior",
      "The topographical similarity of each response instance",
      "Their common effect on the environment",
      "The antecedent conditions that precede each instance"
    ],
    correctIndex: 2,
    explanation: "A function-based definition designates responses as members of the targeted response class solely by their common effect on the environment, regardless of the specific form each response takes."
  },
  {
    id: 5048,
    topic: "Writing Target Behavior Definitions",
    prompt: "Hawkins and Dobes described three characteristics of a good target behavior definition. Which of the following correctly lists all three?",
    options: [
      "Reliable, valid, and standardized",
      "Observable, measurable, and repeatable",
      "Objective, clear, and complete",
      "Functional, ecological, and normative"
    ],
    correctIndex: 2,
    explanation: "Hawkins and Dobes described three characteristics of a good target behavior definition: it must be objective (referring only to observable characteristics), clear (readable and unambiguous), and complete (delineating what is and is not an instance of the behavior)."
  },
  {
    id: 5049,
    topic: "Setting Criteria for Behavior Change",
    prompt: "Social validity in applied behavior analysis refers to behavior analysis efforts that not only target important behaviors but also:",
    options: [
      "Use procedures that are acceptable to the broader scientific community",
      "Involve significant others in all phases of the assessment process",
      "Change those behaviors in a positive and meaningful way",
      "Are implemented in a wide variety of natural environments"
    ],
    correctIndex: 2,
    explanation: "A behavior analysis effort is said to have social validity when it not only targets important behaviors but also changes those behaviors in a positive and meaningful way."
  },
  {
    id: 5050,
    topic: "Setting Criteria for Behavior Change",
    prompt: "Van Houten suggested two basic approaches for determining socially valid performance criteria. Which pair correctly reflects those two approaches?",
    options: [
      "Conducting a functional behavior assessment and reviewing published research",
      "Using norm-referenced test scores and curriculum-based assessment data",
      "Interviewing significant others and conducting repeated direct observations",
      "Assessing the performance of people judged to be highly competent and experimentally manipulating different performance levels to determine which produces optimal results"
    ],
    correctIndex: 3,
    explanation: "Van Houten proposed two approaches: assessing the performance of people judged to be highly competent, and experimentally manipulating different levels of performance to determine empirically which produces optimal results."
  }
];

import type { Question } from "../types";

/**
 * BCBA practice questions for Cooper et al., Chapter 23: Chaining.
 * Grounded in the chapter text. Option order is shuffled at runtime, so
 * correctIndex placement here is arbitrary.
 */
export const QUESTIONS_M26: Question[] = [
  {
    id: 25001,
    topic: "Behavior Chain Defined",
    prompt: "In a behavior chain, each stimulus that links two sequential responses serves which dual function?",
    options: [
      "Unconditioned reinforcer for the previous response and establishing operation for the next response",
      "Conditioned reinforcer for the response that produced it and discriminative stimulus for the next response",
      "Punisher for incorrect responses and reinforcer for correct responses",
      "Motivating operation for the previous response and conditioned reinforcer for the next response"
    ],
    correctIndex: 1,
    explanation: "Each stimulus in a behavior chain serves a dual function: it acts as a conditioned reinforcer for the response that produced it and as a discriminative stimulus (SD) for the next response in the chain. This dual function is what holds the chain together.",
  },
  {
    id: 25002,
    topic: "Behavior Chain Defined",
    prompt: "Which of the following is NOT listed as one of the three important characteristics of a behavior chain?",
    options: [
      "It involves the performance of a specific series of discrete responses",
      "The responses within the chain must be performed in a specific sequence and in close temporal succession",
      "Each behavior in the sequence produces a stimulus change yielding conditioned reinforcement and serving as an SD for the next response",
      "The behavior chain must be reinforced on a variable ratio schedule to maintain strength"
    ],
    correctIndex: 3,
    explanation: "The three important characteristics of a behavior chain are: (a) a specific series of discrete responses; (b) each behavior produces a stimulus change yielding conditioned reinforcement and serving as an SD; and (c) responses must be performed in a specific sequence in close temporal succession. Schedule of reinforcement is not listed as a defining characteristic.",
  },
  {
    id: 25003,
    topic: "Behavior Chain with a Limited Hold",
    prompt: "A behavior chain with a limited hold is best described as a chain that:",
    options: [
      "Must be completed within a specified time to produce reinforcement",
      "Contains a limited number of steps so that learning is not overwhelming",
      "Requires the learner to pause and hold a position at each link before moving on",
      "Can only be reinforced a limited number of times before satiation occurs"
    ],
    correctIndex: 0,
    explanation: "A behavior chain with a limited hold is one that must be completed within a specified time to produce reinforcement. Chains with limited holds are characterized by performance that is accurate and proficient, such as an assembly task that must be completed within a set production window.",
  },
  {
    id: 25004,
    topic: "Behavior Chain with a Limited Hold",
    prompt: "A worker must assemble 30 couplers onto 30 shafts within 30 minutes to earn reinforcement. This is an example of:",
    options: [
      "Total-task chaining with a graduated guidance procedure",
      "Forward chaining applied to vocational behavior",
      "A behavior chain with a limited hold",
      "Backward chaining with leap aheads"
    ],
    correctIndex: 2,
    explanation: "This assembly task exemplifies a behavior chain with a limited hold because reinforcement is contingent on completing the chain both accurately and within the prescribed time period. The person must emit the behaviors in close temporal succession to obtain reinforcement.",
  },
  {
    id: 25006,
    topic: "Rationale for Chaining",
    prompt: "What is the key distinction between a 'behavior chain' and 'chaining'?",
    options: [
      "A behavior chain denotes a particular sequence of stimuli and responses ending in reinforcement, whereas chaining refers to the methods for linking such sequences to form new performances",
      "A behavior chain involves only two responses, whereas chaining involves three or more",
      "Behavior chains are only used in laboratory settings, whereas chaining is used in applied settings",
      "Chaining always begins with the last behavior in the sequence, whereas a behavior chain always begins with the first"
    ],
    correctIndex: 0,
    explanation: "A behavior chain denotes a particular sequence of stimuli and responses ending in reinforcement, while chaining refers to the various methods for linking specific sequences of stimuli and responses to form new performances.",
  },
  {
    id: 25007,
    topic: "Rationale for Chaining",
    prompt: "A behavior analyst uses a written pictorial list to increase the number of assembly tasks a worker completes before seeking assistance. The worker crosses off each picture after completing the corresponding task. In behavioral terms, what does the first picture on the list function as?",
    options: [
      "An unconditioned reinforcer for completing the previous task",
      "A conditioned punisher that suppresses assistance-seeking behavior",
      "A motivating operation that increases the value of completing tasks",
      "A discriminative stimulus (SD) to occasion the response of completing the first task"
    ],
    correctIndex: 3,
    explanation: "The first word or picture on the list serves as the SD to occasion the response of completing the first task. After that response terminates the initial stimulus, the second picture on the list becomes the next SD, thereby linking discrete behaviors into a longer chain.",
  },
  {
    id: 25009,
    topic: "Task Analysis",
    prompt: "Task analysis is best defined as:",
    options: [
      "A process for selecting the most appropriate schedule of reinforcement for a chain",
      "Breaking a complex task into smaller, teachable units, the product of which is a series of sequentially ordered steps or tasks",
      "A method for measuring the latency of each response in a behavior chain",
      "An assessment of the learner's motivation to complete a given chain"
    ],
    correctIndex: 1,
    explanation: "Task analysis involves breaking a complex task into smaller, teachable units, the product of which is a series of sequentially ordered steps or tasks. This is an essential preliminary step before teaching any behavior chain.",
  },
  {
    id: 25010,
    topic: "Task Analysis",
    prompt: "A task analysis should be individualized according to which learner characteristics?",
    options: [
      "Diagnosis, body weight, and reinforcer preference",
      "Learning history with a specific procedure, verbal ability, and sensory preferences",
      "IQ score, motor skill level, and family background",
      "Age, skill level, and prior experience"
    ],
    correctIndex: 3,
    explanation: "A task analysis should be individualized according to the age, skill level, and prior experience of the learner. What one person needs to achieve a task efficiently may differ from what another person needs.",
  },
  {
    id: 25011,
    topic: "Constructing and Validating a Task Analysis",
    prompt: "Which of the following is NOT one of the four methods described for constructing and validating a task analysis?",
    options: [
      "Observe a competent performer",
      "Ask a learner with a disability to attempt the task and record errors",
      "Execute the task yourself",
      "Trial and error"
    ],
    correctIndex: 1,
    explanation: "The four methods for constructing and validating a task analysis are: observe a competent performer, execute the task yourself, ask an expert, and trial and error. Having a learner with a disability attempt the task and recording errors is not listed as one of the four primary construction methods.",
  },
  {
    id: 25014,
    topic: "Constructing and Validating a Task Analysis",
    prompt: "In the trial-and-error method of constructing a task analysis, what makes this approach distinct?",
    options: [
      "The task analysis is finalized before any learner attempts it",
      "The task analysis is derived solely from published research literature",
      "The initial analysis is refined through field tests and revisions to achieve a more functional result",
      "Expert observation is required before any revisions can be made"
    ],
    correctIndex: 2,
    explanation: "In the trial-and-error method, an initial task analysis is generated and then refined and revised as it is being tested. Revisions and refinements obtained through field tests yield a more functional and appropriate task analysis.",
  },
  {
    id: 25015,
    topic: "Assessing Mastery Level",
    prompt: "In the single-opportunity method of task analysis assessment, what happens when a learner performs a step incorrectly or out of sequence?",
    options: [
      "The behavior analyst completes that step for the learner and continues assessing remaining steps",
      "The learner is physically guided through the incorrect step and given another opportunity",
      "The behavior analyst repeats the instructional cue and gives the learner a second attempt",
      "The assessment probe terminates at that point"
    ],
    correctIndex: 3,
    explanation: "In the single-opportunity method, if a behavior in the chain is not performed correctly or is performed out of sequence, the assessment probe terminates at that point. This makes it the more conservative of the two assessment methods.",
  },
  {
    id: 25016,
    topic: "Assessing Mastery Level",
    prompt: "Which statement correctly describes the multiple-opportunity method of task analysis assessment?",
    options: [
      "If a step is performed incorrectly, the assessment terminates immediately",
      "Only the first error in the chain is recorded; subsequent steps are not assessed",
      "If a step is performed incorrectly or out of sequence, the behavior analyst completes that step and repositions the learner for the next step, scoring each step independently",
      "The learner is given multiple attempts at each step before the analyst moves on"
    ],
    correctIndex: 2,
    explanation: "In the multiple-opportunity method, if a step is performed incorrectly, out of sequence, or if the time limit is exceeded, the behavior analyst completes that step for the learner, repositions the learner for the next step, and continues. Each step performed correctly is scored as correct even if previous steps were incorrect.",
  },
  {
    id: 25019,
    topic: "Forward Chaining",
    prompt: "In forward chaining, reinforcement is initially delivered when:",
    options: [
      "The learner completes the entire chain from start to finish without errors",
      "The learner performs the final step of the chain independently",
      "Every other step in the task analysis is performed correctly",
      "The predetermined criterion for the performance of the first behavior in the sequence is achieved"
    ],
    correctIndex: 3,
    explanation: "In forward chaining, reinforcement is initially delivered when the predetermined criterion for the performance of the first behavior in the sequence is achieved. Reinforcement then requires criterion completion of Steps 1 and 2, and so on, building cumulatively.",
  },
  {
    id: 25021,
    topic: "Forward Chaining",
    prompt: "Which of the following is cited as an advantage of forward chaining?",
    options: [
      "The learner contacts the terminal reinforcer on every instructional trial",
      "It can be used to link smaller chains into larger ones",
      "Steps already in the learner's repertoire can be skipped automatically",
      "It eliminates the need for response prompts at any step"
    ],
    correctIndex: 1,
    explanation: "Forward chaining can be used to link smaller chains into larger ones. Additional advantages include that it is easy to implement in classroom settings and that it can be combined with other behavior change procedures such as fading.",
  },
  {
    id: 25023,
    topic: "Total-Task Chaining",
    prompt: "Total-task chaining is sometimes called whole-task presentation. How does it differ from standard forward chaining?",
    options: [
      "Total-task chaining begins training with the last step in the chain",
      "Only independently performed steps are practiced; prompted steps are skipped",
      "Total-task chaining uses only physical guidance and no verbal prompts",
      "The learner receives training on each step in the task analysis during every session, with trainer assistance provided for steps not yet mastered"
    ],
    correctIndex: 3,
    explanation: "In total-task chaining, the learner receives training on each step in the task analysis during every session. The trainer provides assistance for any steps the learner cannot perform independently, and training continues until all steps meet criterion.",
  },
  {
    id: 25025,
    topic: "Total-Task Chaining",
    prompt: "According to Miltenberger and Test and colleagues, total-task chaining may be warranted when:",
    options: [
      "The student cannot imitate any modeled behavior",
      "The task sequence is extremely long and complex",
      "The student can perform several tasks in the chain but needs to learn them in sequence",
      "The learner has no prerequisite skills in the task analysis"
    ],
    correctIndex: 2,
    explanation: "Total-task chaining may be warranted when the student can already perform several of the tasks in the chain but needs to learn them in the correct sequence, when the student has an imitative repertoire, when the student has moderate to severe disabilities, and when the task sequence is not very long or complex.",
  },
  {
    id: 25026,
    topic: "Backward Chaining",
    prompt: "In backward chaining, where does training begin?",
    options: [
      "The first behavior in the task analysis, with the trainer completing all subsequent steps",
      "The entire chain presented simultaneously, with the learner imitating the trainer",
      "The step identified as most difficult in the task analysis, regardless of its position",
      "The final behavior in the chain, with the trainer completing all earlier steps"
    ],
    correctIndex: 3,
    explanation: "In backward chaining, all behaviors identified in the task analysis are initially completed by the trainer except for the final behavior. The learner performs only the last step until criterion is met, at which point the next-to-last step is added, proceeding in reverse order.",
  },
  {
    id: 25027,
    topic: "Backward Chaining",
    prompt: "What is cited as the primary advantage of backward chaining compared to other chaining methods?",
    options: [
      "It requires the fewest number of training trials overall",
      "The learner contacts the chain's terminal reinforcer on every instructional trial",
      "It is the most straightforward procedure for teachers to implement",
      "It is the only procedure compatible with the use of response prompts"
    ],
    correctIndex: 1,
    explanation: "The primary advantage of backward chaining is that the learner contacts the chain's terminal reinforcer on every instructional trial. This repeated contact with the terminal reinforcer increases the discriminative capability of all stimuli associated with the chain's behaviors.",
  },
  {
    id: 25031,
    topic: "Backward Chaining with Leap Aheads",
    prompt: "How does backward chaining with leap aheads differ from standard backward chaining?",
    options: [
      "Training proceeds in a forward direction rather than in reverse",
      "Reinforcement is delivered after every step regardless of performance",
      "The learner begins training at the first step and leaps ahead to the last step after mastery",
      "Not every step in the reverse execution of the task analysis is trained; steps the learner can already perform are probed rather than trained"
    ],
    correctIndex: 3,
    explanation: "Backward chaining with leap aheads follows essentially the same procedures as backward chaining, except that not every step in the task analysis is trained. Steps the learner can already perform are probed rather than trained, so the trainer 'leaps ahead' to the next unmastered task to decrease total training time.",
  },
  {
    id: 25032,
    topic: "Backward Chaining with Leap Aheads",
    prompt: "The purpose of the leap-aheads modification to backward chaining is to:",
    options: [
      "Increase the difficulty of the chain by skipping easy steps permanently",
      "Decrease the total training time needed to learn the chain",
      "Provide the learner with more contact with the terminal reinforcer",
      "Allow the trainer to skip reinforcement for steps already mastered"
    ],
    correctIndex: 1,
    explanation: "The purpose of the leap-aheads modification is to decrease the total training time needed to learn the chain. When the learner has already mastered certain steps, spending training trials on those steps slows learning, so those steps are probed rather than trained.",
  },
  {
    id: 25035,
    topic: "Choosing a Chaining Method",
    prompt: "Bancroft and colleagues advised considering which learner-specific factors when deciding which chaining method to use?",
    options: [
      "Learner's preference for the activity, parent preference, and chronological age",
      "Learner's ability to tolerate physical guidance, attention span, and total training time available",
      "Learner's verbal IQ, diagnosis, and history of extinction bursts",
      "Learner's preference for a specific trainer, class schedule, and number of prerequisite skills"
    ],
    correctIndex: 1,
    explanation: "Bancroft and colleagues advised considering the learner's ability to tolerate physical guidance, the attention span of the learner, and the total amount of training time available to devote to learning the chain when deciding which chaining method to use.",
  },
  {
    id: 25036,
    topic: "Disrupting and Breaking Behavior Chains",
    prompt: "Which of the following is NOT listed as one of the six methods for disrupting or breaking a behavior chain?",
    options: [
      "Satiation",
      "Graduated guidance",
      "Unchaining",
      "Substituting the initial SD"
    ],
    correctIndex: 1,
    explanation: "The six methods for disrupting or breaking behavior chains are: extinction, satiation, unchaining, interrupting the chain, substituting an SD, and extending the chain with time delays. Graduated guidance is a response prompting strategy used during instruction, not a chain-disruption method.",
  },
  {
    id: 25037,
    topic: "Disrupting and Breaking Behavior Chains",
    prompt: "To break a behavior chain using extinction, a practitioner:",
    options: [
      "Provides unlimited access to the terminal reinforcer before the chain begins",
      "Withholds reinforcement for one or more responses in the chain",
      "Removes the initial SD from the environment entirely",
      "Introduces a competing behavior at the midpoint of the chain"
    ],
    correctIndex: 1,
    explanation: "To break or interrupt a chain using extinction, the practitioner withholds reinforcement for one or more responses in the chain. Kuhn and colleagues found that applying extinction to the final response resulted in immediate decreases in both the final and earlier responses.",
  },
  {
    id: 25039,
    topic: "Disrupting and Breaking Behavior Chains",
    prompt: "Unchaining, as described by Kuhn and colleagues, is designed to decrease an earlier response (R1) in a two-response chain. How does unchaining accomplish this?",
    options: [
      "Extinction is placed directly on R1 while R2 is kept on reinforcement",
      "Satiation is provided for R1 only, leaving R2 unaffected",
      "R2 is made to produce reinforcement both in the presence and in the absence of the stimulus produced by R1, so R1 loses its value as a conditioned reinforcer",
      "The initial SD for R1 is substituted with a novel stimulus"
    ],
    correctIndex: 2,
    explanation: "In unchaining, R2 produces reinforcement regardless of whether the stimulus produced by R1 (S2) is present. Because R1 no longer needs to occur for the learner to access the reinforcer via R2, the stimulus produced by R1 loses its value as a conditioned reinforcer and as an SD for R2, thereby decreasing R1.",
  },
  {
    id: 25040,
    topic: "Behavior Chain Interruption Strategy",
    prompt: "The behavior chain interruption strategy (BCIS) was initially developed for what primary purpose?",
    options: [
      "To teach complex motor chains to students with physical disabilities",
      "To increase speech and oral responding",
      "To reduce self-injurious behavior in adolescents",
      "To decrease the number of steps in an established chain"
    ],
    correctIndex: 1,
    explanation: "The BCIS was initially developed to increase speech and oral responding. It has since been extended to pictorial communication systems, manual signing, switch activation, and mand training.",
  },
  {
    id: 25041,
    topic: "Behavior Chain Interruption Strategy",
    prompt: "For the BCIS to be appropriate, an initial assessment must verify that:",
    options: [
      "The person cannot complete the chain independently at all",
      "The chain contains at least five steps before the point of interruption",
      "The person can independently complete a chain of two or more components",
      "The person emits significant self-injurious behavior when the chain is interrupted"
    ],
    correctIndex: 2,
    explanation: "The BCIS is predicated on an assessment that verifies the person is able to complete the chain independently. The interruption is then used to create a communication opportunity. If the person cannot complete the chain independently, the BCIS cannot function as described.",
  },
  {
    id: 25045,
    topic: "Troubleshooting Chains",
    prompt: "A restaurant trainee correctly learned the table-busing chain during training but began scraping food scraps onto the table (R2) when dirty dishes were present on the table (S1), instead of first placing dishes on the cart. What troubleshooting step addresses this problem?",
    options: [
      "The learner contacted satiation for the terminal reinforcer",
      "Determining whether similar SDs cue different responses, since S1 and S2 are both 'dirty dishes' stimuli",
      "The initial SD was too weak to evoke the first response in the chain",
      "The training setting differed from the natural setting in the number of chain steps"
    ],
    correctIndex: 1,
    explanation: "Two similar SDs, dirty dishes on the empty table (S1) and dirty dishes on the cart (S2), likely contributed to R2 (scraping dishes) coming under the control of S1 rather than S2. This illustrates the troubleshooting step of determining whether similar SDs cue different responses.",
  },
  {
    id: 25046,
    topic: "Troubleshooting Chains",
    prompt: "For behavior chains that cannot be fully replicated in simulated training settings, what is recommended to address differences between training and natural SDs?",
    options: [
      "Skip those steps in the task analysis permanently",
      "Use backward chaining with leap aheads to bypass those steps",
      "Conduct the final training session in the natural setting where the chain is expected to be performed",
      "Use satiation before each session to reduce the relevance of those steps"
    ],
    correctIndex: 2,
    explanation: "When natural conditions cannot be replicated in simulated training, it is recommended that the final training session (at least for selected chains) be conducted in the natural setting. This allows the trainer to identify any differences in SDs and refine discrimination training on site.",
  },
  {
    id: 25047,
    topic: "Factors Affecting Performance of Behavior Chains",
    prompt: "In backward chaining, why are responses performed at the end of the chain strengthened faster than responses earlier in the chain?",
    options: [
      "End responses are physically less demanding than earlier responses",
      "Earlier responses are placed on extinction while end responses are reinforced",
      "End responses benefit from more opportunities for observational learning",
      "End responses are reinforced more frequently because they are practiced on every trial from the outset"
    ],
    correctIndex: 3,
    explanation: "In backward chaining, responses at the end of the chain are strengthened faster than those earlier in the chain because they are reinforced more frequently. The last step is practiced on every trial from the very first session, while earlier steps are added progressively and practiced fewer times overall.",
  },
  {
    id: 25050,
    topic: "Factors Affecting Performance of Behavior Chains",
    prompt: "Which of the following best summarizes the factors described as affecting the performance of a behavior chain?",
    options: [
      "Completeness of the task analysis, length or complexity of the chain, schedule of reinforcement, stimulus variation, and response variation",
      "Learner age, trainer experience, reinforcer magnitude, and setting familiarity",
      "Type of chaining procedure used, number of training trials, and presence of aversive stimuli",
      "Learner diagnosis, imitative repertoire, and availability of peer models"
    ],
    correctIndex: 0,
    explanation: "The five factors described as affecting the performance of a behavior chain are: (a) completeness of the task analysis, (b) length or complexity of the chain, (c) schedule of reinforcement, (d) stimulus variation, and (e) response variation.",
  },
];

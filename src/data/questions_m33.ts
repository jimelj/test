import type { Question } from "../types";

/**
 * BCBA practice questions for Cooper et al., Chapter 30: Generalization and Maintenance of Behavior Change.
 * Grounded in the chapter text. Option order is shuffled at runtime, so
 * correctIndex placement here is arbitrary.
 */
export const QUESTIONS_M33: Question[] = [
  {
    id: 32001,
    topic: "Generalized Behavior Change: Definitions and Key Concepts",
    prompt: "Baer, Wolf, and Risley (1968) stated that a behavior change may be said to have generality if it meets which of the following conditions?",
    options: [
      "It proves durable over time, appears in a wide variety of environments, or spreads to a wide variety of related behaviors",
      "It is maintained under a continuous reinforcement schedule only",
      "It occurs exclusively in the instructional setting after training ends",
      "It is reinforced by naturally existing contingencies in the generalization setting"
    ],
    correctIndex: 0,
    explanation: "Baer, Wolf, and Risley (1968) defined generality as a behavior change that proves durable over time, appears in a wide variety of possible environments, or spreads to a wide variety of related behaviors.",
  },
  {
    id: 32002,
    topic: "Response Maintenance",
    prompt: "Response maintenance is best defined as the extent to which a learner continues to perform a target behavior after:",
    options: [
      "The target behavior has been reinforced in the generalization setting",
      "A portion or all of the intervention responsible for the behavior's initial appearance has been terminated",
      "The generalization probes have demonstrated consistent responding",
      "Multiple exemplar training has been introduced"
    ],
    correctIndex: 1,
    explanation: "Response maintenance is defined as the extent to which a learner continues to perform a target behavior after a portion or all of the intervention responsible for the behavior's initial appearance in the learner's repertoire has been terminated.",
  },
  {
    id: 32003,
    topic: "Setting/Situation Generalization",
    prompt: "Which of the following is true about generalization settings and their relationship to instructional settings?",
    options: [
      "A generalization setting must always be a physically different location from where instruction occurred",
      "The instructional setting and generalization setting can share the same physical location",
      "Generalization settings are limited to community environments outside school",
      "Generalization settings must be identified only after instruction has ended"
    ],
    correctIndex: 1,
    explanation: "A generalization setting does not have to be a different physical location from the instructional setting. The instructional and generalization settings can, and often do, share the same physical location, such as when a student must use a different format of the same task in the same classroom.",
  },
  {
    id: 32004,
    topic: "Response Generalization",
    prompt: "A student who was taught to take phone messages by writing them on notepaper begins recording messages on a tape recorder without being taught to do so. This is an example of:",
    options: [
      "Response maintenance",
      "Setting/situation generalization",
      "Overgeneralization",
      "Response generalization"
    ],
    correctIndex: 3,
    explanation: "Response generalization occurs when a learner emits untrained responses that are functionally equivalent to the trained target behavior. Using a tape recorder to take messages is a novel but functionally equivalent response to the trained behavior of writing messages.",
  },
  {
    id: 32005,
    topic: "Undesirable Generalization: Overgeneralization",
    prompt: "A student learns to spell 'division,' 'mission,' and 'fusion' using the grapheme -sion and then spells 'fraction' as 'f-r-a-c-s-i-o-n.' This outcome is best described as:",
    options: [
      "Faulty stimulus control",
      "Overgeneralization",
      "Undesirable response generalization",
      "A failure of response maintenance"
    ],
    correctIndex: 1,
    explanation: "Overgeneralization occurs when the behavior has come under control of an overly broad stimulus class, causing the learner to emit the target behavior in the presence of stimuli that are similar to instructional examples but are inappropriate occasions for the behavior.",
  },
  {
    id: 32006,
    topic: "Undesirable Generalization: Faulty Stimulus Control",
    prompt: "A student adds the numbers in any math problem containing the phrase 'in total,' even when subtraction is required. This represents:",
    options: [
      "Overgeneralization",
      "Undesirable response generalization",
      "Faulty stimulus control",
      "Response maintenance failure"
    ],
    correctIndex: 2,
    explanation: "Faulty stimulus control occurs when the target behavior comes under the restricted control of an irrelevant antecedent stimulus. Here, the phrase 'in total' (an irrelevant stimulus) controls addition regardless of what operation is actually required.",
  },
  {
    id: 32007,
    topic: "Generalization Across Subjects",
    prompt: "Changes in the behavior of people not directly treated by an intervention, as a function of treatment contingencies applied to others, is referred to as:",
    options: [
      "Response generalization",
      "Generalization across subjects",
      "Setting/situation generalization",
      "Contingency adduction"
    ],
    correctIndex: 1,
    explanation: "Generalization across subjects refers to changes in the behavior of people not directly treated by an intervention as a function of treatment contingencies applied to other people. This phenomenon has also been described as vicarious reinforcement, ripple effect, and spillover effect.",
  },
  {
    id: 32008,
    topic: "Generalization Map",
    prompt: "Drabman, Hammer, and Rosenbaum (1979) developed the generalization map. Which of the following describes their Class 16 generalization, labeled the 'ultimate form' of generalization?",
    options: [
      "Maintenance in the treatment setting after contingencies are withdrawn",
      "Behavior change across settings for the target subject",
      "A change in a nontarget subject's nontarget behavior that endures in a different setting after contingencies are withdrawn in the treatment setting",
      "Behavior change across time and settings for the target subject"
    ],
    correctIndex: 2,
    explanation: "Class 16 generalization in Drabman et al.'s generalization map is evidenced by a change in a nontarget subject's nontarget behavior that endures in a different setting after contingencies have been withdrawn in the treatment setting.",
  },
  {
    id: 32009,
    topic: "Planning: Selecting Target Behaviors",
    prompt: "Ayllon and Azrin (1968) recommended that practitioners follow the relevance-of-behavior rule. This rule states that practitioners should:",
    options: [
      "Choose behaviors that are age-appropriate and represent normalization",
      "Choose only those behaviors to change that will produce reinforcers in the learner's postintervention environment",
      "Choose behaviors that are easiest to measure and observe",
      "Choose behaviors suggested by the family or significant others in the learner's environment"
    ],
    correctIndex: 1,
    explanation: "The relevance-of-behavior rule proposed by Ayllon and Azrin (1968) states that practitioners should choose only those behaviors to change that will produce reinforcers in the learner's postintervention environment, because a behavior is functional only to the extent that it produces reinforcement for the learner.",
  },
  {
    id: 32010,
    topic: "Naturally Existing vs. Contrived Contingencies",
    prompt: "A behavior analyst designs and implements a token economy to teach a student a new social skill. From the behavior analyst's perspective, this token economy is best classified as:",
    options: [
      "A naturally existing contingency because the learner will encounter tokens in the community",
      "A contrived contingency because it was designed and implemented by the practitioner",
      "A naturally existing contingency because it is socially mediated",
      "An indiscriminable contingency because the student cannot predict when tokens will be given"
    ],
    correctIndex: 1,
    explanation: "A contrived contingency is any contingency of reinforcement or punishment designed and implemented by a behavior analyst or practitioner to achieve the acquisition, maintenance, or generalization of a targeted behavior change. The token economy here was designed and implemented by the behavior analyst.",
  },
  {
    id: 32011,
    topic: "Planning: Selecting Target Behaviors",
    prompt: "According to the chapter, what is the one ultimate criterion of functionality for a target behavior?",
    options: [
      "The behavior represents normalization for the learner's age group",
      "The behavior is valued by the learner's family and teachers",
      "The behavior produces reinforcement for the learner",
      "The behavior can be observed and measured in multiple settings"
    ],
    correctIndex: 2,
    explanation: "The chapter states that 'there is just one ultimate criterion of functionality: A behavior is functional only to the extent that it produces reinforcement for the learner.' Behaviors that are not followed by reinforcers on at least some occasions will not be maintained.",
  },
  {
    id: 32012,
    topic: "Teach Enough Examples",
    prompt: "When using the 'teach enough examples' strategy, after teaching a subset of possible examples, the practitioner:",
    options: [
      "Continues teaching additional examples regardless of learner performance",
      "Probes learner performance on untrained examples",
      "Provides continuous reinforcement in the generalization setting",
      "Withdraws all reinforcement to test response maintenance"
    ],
    correctIndex: 1,
    explanation: "The 'teach enough examples' strategy requires teaching a subset of all possible stimulus and response examples and then probing the learner's performance on untrained examples. Instruction continues until the learner consistently responds correctly to untrained examples.",
  },
  {
    id: 32013,
    topic: "Teach Enough Stimulus Examples",
    prompt: "Stokes, Baer, and Jackson (1974) demonstrated that widespread generalization of a greeting response in children with severe cognitive disabilities resulted from training with how many trainers?",
    options: [
      "One trainer working intensively across many settings",
      "A minimum of five different trainers",
      "Just two trainers, showing that widespread generalization may result from teaching as few as two examples",
      "Twenty-three different staff members who all provided reinforcement"
    ],
    correctIndex: 2,
    explanation: "The Stokes, Baer, and Jackson (1974) study showed that widespread generalization may result from teaching just two examples. After a second staff member began reinforcing greeting responses of children who had not generalized after training with only one trainer, widespread generalization to other staff members occurred.",
  },
  {
    id: 32014,
    topic: "Multiple Exemplar Training",
    prompt: "Multiple-exemplar training, a tactic for promoting response generalization, typically incorporates:",
    options: [
      "Stimulus variations only, with a fixed response topography",
      "Response variations only, with a fixed instructional setting",
      "Both stimulus and response variations",
      "Negative teaching examples only, without positive examples"
    ],
    correctIndex: 2,
    explanation: "Multiple-exemplar training is a tactic that involves practice with a variety of response topographies and typically incorporates both stimulus and response variations to promote response generalization in the form of untrained topographies.",
  },
  {
    id: 32015,
    topic: "General Case Analysis",
    prompt: "Sprague and Horner (1984) compared three instructional approaches for vending machine use. What distinguished general case instruction from multiple-instance instruction?",
    options: [
      "General case instruction used more training sessions and trials",
      "General case instruction used training examples that sampled the total range of stimulus conditions and response variations in the community",
      "General case instruction relied only on generalization probes without direct training",
      "General case instruction used only one training machine with more repetitions"
    ],
    correctIndex: 1,
    explanation: "General case instruction differed from multiple-instance instruction in that the training machines, when combined with the single-instance machine, provided practice across the total range of stimulus conditions and response variations found in vending machines in the community. Multiple-instance instruction used machines that were similar to each other and did not sample the full range.",
  },
  {
    id: 32016,
    topic: "Negative Teaching Examples",
    prompt: "In Horner and colleagues' (1986) table-busing study, 'don't do it' teaching examples were included to help students:",
    options: [
      "Learn which reinforcers were available for correctly busing tables",
      "Discriminate conditions when table busing should not occur from conditions when it should",
      "Generalize table-busing skills to multiple types of restaurants",
      "Request assistance from a trainer when unsure what to do"
    ],
    correctIndex: 1,
    explanation: "Negative, or 'don't do it,' teaching examples help learners discriminate stimulus conditions that signal when responding is appropriate from conditions when responding is inappropriate. In the table-busing study, students had to learn which tables should be bused and which should not.",
  },
  {
    id: 32017,
    topic: "Negative Teaching Examples",
    prompt: "The most effective negative teaching examples in a general case program should:",
    options: [
      "Be completely different from positive examples to ensure discrimination",
      "Share many of the relevant characteristics of the positive teaching examples, forming minimum difference negative examples",
      "Be presented only after all positive examples have been mastered",
      "Consist exclusively of naturally occurring events in the generalization setting"
    ],
    correctIndex: 1,
    explanation: "The most effective negative teaching examples share many of the relevant characteristics of the positive teaching examples. These minimum difference negative teaching examples help the learner perform the target behavior with the precision required by the natural environment and eliminate generalization errors due to overgeneralization and faulty stimulus control.",
  },
  {
    id: 32018,
    topic: "Program Common Stimuli",
    prompt: "Van den Pol and colleagues (1981) programmed common stimuli when teaching fast-food restaurant skills. Which of the following illustrates this tactic?",
    options: [
      "Teaching in three different restaurants in sequence to represent the full range of examples",
      "Providing reinforcement only in the restaurant and not in the classroom",
      "Using plastic signs with McDonald's sandwich pictures and a mock counter in the classroom",
      "Asking restaurant staff to reinforce students when they ordered correctly"
    ],
    correctIndex: 2,
    explanation: "Programming common stimuli means incorporating typical features of the generalization setting into the instructional setting. Van den Pol and colleagues used plastic signs with pictures of McDonald's menu items, a mock counter, and photographic slides from actual restaurants to simulate the conditions students would encounter.",
  },
  {
    id: 32019,
    topic: "Program Common Stimuli",
    prompt: "A behavior analyst teaching a child with autism to ice skate sets up a rollerblading environment with cones arranged in the same-sized oval as the ice rink and includes music and people in various positions. The primary rationale for this tactic is to:",
    options: [
      "Reduce the cost of instruction by avoiding the ice rink",
      "Increase the likelihood that stimuli present during instruction will acquire stimulus control over the target behavior and prepare the learner for the generalization setting",
      "Implement a general case analysis of all possible skating conditions",
      "Teach loosely by randomly varying the cones and music across sessions"
    ],
    correctIndex: 1,
    explanation: "Programming common stimuli increases the likelihood that stimuli from the generalization setting will acquire some stimulus control over the target behavior during instruction, and prepares the learner for the presence of those stimuli in the generalization setting. The rollerblading environment simulates key features of the actual ice rink.",
  },
  {
    id: 32020,
    topic: "Teach Loosely",
    prompt: "A teacher varies her tone of voice, her position in the room, the time of day, and whether other students are present while teaching a student to follow directions. This exemplifies which tactic for promoting generalization?",
    options: [
      "Programming common stimuli",
      "Teach loosely",
      "Multiple-exemplar training",
      "Instruct the learner to generalize"
    ],
    correctIndex: 1,
    explanation: "Teaching loosely means randomly varying noncritical aspects of the instructional setting within and across teaching sessions. Varying tone of voice, position, time of day, and group composition are examples of loosening noncritical stimuli to prevent them from acquiring exclusive control over the target behavior.",
  },
  {
    id: 32021,
    topic: "Teach Loosely",
    prompt: "One rationale for teaching loosely is that it reduces the likelihood noncritical stimuli will acquire exclusive control over the target behavior. A second rationale is that:",
    options: [
      "It trains the learner to discriminate exactly when and where to respond",
      "It ensures that the generalization setting will contain none of the stimuli present during instruction",
      "It increases the probability that the generalization setting will include some stimuli that were present during instruction",
      "It eliminates the need to program common stimuli or use negative teaching examples"
    ],
    correctIndex: 2,
    explanation: "A second rationale for loose teaching is that including a wide variety of noncritical stimuli during instruction increases the probability that the generalization setting will include some of the stimuli that were present during instruction, acting as a catchall effort at programming common stimuli.",
  },
  {
    id: 32022,
    topic: "Teach Loosely",
    prompt: "When implementing teach loosely, practitioners must ensure that:",
    options: [
      "Only stimuli that function as S-deltas in the generalization setting are varied",
      "The target behavior is well established under consistent conditions before much looseness is introduced",
      "All stimuli, both critical and noncritical, are randomly varied each session",
      "Instruction is conducted in the natural generalization setting rather than a simulated setting"
    ],
    correctIndex: 1,
    explanation: "The learner's performance of the target behavior should be established under fairly restricted, simplified, and consistent conditions before much looseness is introduced. Only noncritical (functionally irrelevant) stimuli should be loosened; practitioners must not inadvertently loosen stimuli that function as SDs or S-deltas in the generalization setting.",
  },
  {
    id: 32023,
    topic: "Maximize Contact with Reinforcement: Fluency",
    prompt: "A student who can work without direct supervision for only 5 minutes will not complete any task requiring more than 5 minutes of independent work. Baer (1999) would characterize this problem as:",
    options: [
      "A rate problem requiring faster responding during each work interval",
      "A latency problem because the student delays too long before starting work",
      "A duration problem because the student cannot sustain the behavior long enough to contact reinforcement",
      "A topography problem because the form of the behavior does not match natural contingency requirements"
    ],
    correctIndex: 2,
    explanation: "Baer (1999) noted that behavior must be taught to performance levels sufficient to meet natural contingencies of reinforcement. If duration is too brief, the student cannot complete tasks requiring sustained independent work, and the behavior will fail to contact natural reinforcement. This is a duration problem.",
  },
  {
    id: 32024,
    topic: "Indiscriminable Contingencies",
    prompt: "The basic rationale for programming indiscriminable contingencies is to:",
    options: [
      "Eliminate the need for any future reinforcement in the generalization setting",
      "Keep the learner responding often enough and long enough in the generalization setting for the behavior to contact naturally existing reinforcement",
      "Ensure the learner can always predict when reinforcement will follow the target behavior",
      "Replace naturally existing contingencies with contrived contingencies in the generalization setting"
    ],
    correctIndex: 1,
    explanation: "The basic rationale for programming indiscriminable contingencies is to keep the learner responding often enough and long enough in the generalization setting for the target behavior to make sufficient contact with naturally existing contingencies of reinforcement.",
  },
  {
    id: 32025,
    topic: "Indiscriminable Contingencies: Intermittent Schedules",
    prompt: "Koegel and Rincover (1977) found that when children received additional training under CRF, FR 2, or FR 5 schedules before a generalization setting with no reinforcement, which outcome occurred?",
    options: [
      "CRF-trained behaviors maintained longest in the generalization setting",
      "All schedules produced equivalent response maintenance in the generalization setting",
      "Behaviors trained on the thinnest schedule (FR 5) showed the longest response maintenance in the generalization setting",
      "FR 2 produced longer maintenance than both CRF and FR 5"
    ],
    correctIndex: 2,
    explanation: "Koegel and Rincover (1977) found a clear relationship: the thinner the schedule in the instructional setting, the longer the response maintenance in the generalization setting. FR 5 produced the longest maintenance, FR 2 produced intermediate maintenance, and CRF produced the shortest maintenance under extinction.",
  },
  {
    id: 32026,
    topic: "Indiscriminable Contingencies: Delayed Rewards",
    prompt: "A delayed reward contingency differs from intermittent reinforcement schedules in that:",
    options: [
      "Delayed rewards reinforce every occurrence of the target behavior, whereas intermittent schedules do not",
      "Delayed rewards are delivered after a period of time has elapsed rather than immediately following an occurrence of the target behavior",
      "Delayed rewards eliminate the need for the learner to perform the target behavior in the generalization setting",
      "Intermittent schedules are indiscriminable while delayed rewards are not"
    ],
    correctIndex: 1,
    explanation: "Delayed reward contingencies differ from intermittent reinforcement in that instead of the consequence immediately following an occurrence of the target behavior, the reward is provided after a period of time has elapsed. This response-to-reward delay makes the contingency indiscriminable because the learner cannot tell exactly when emitting the target behavior will produce a reward later.",
  },
  {
    id: 32027,
    topic: "Behavior Traps",
    prompt: "Baer and Wolf (1970) described behavior traps as powerful contingencies with four essential features. Which of the following is NOT one of those features?",
    options: [
      "They are 'baited' with virtually irresistible reinforcers that lure the student to the trap",
      "Only a low-effort response already in the student's repertoire is needed to enter the trap",
      "The student must exert a high-effort response to maintain engagement inside the trap",
      "Interrelated contingencies inside the trap motivate the student to acquire, extend, and maintain targeted skills"
    ],
    correctIndex: 2,
    explanation: "The four essential features of behavior traps are: (a) baited with irresistible reinforcers, (b) only a low-effort response is needed to enter the trap, (c) interrelated reinforcement contingencies inside the trap motivate acquisition and maintenance of skills, and (d) they can remain effective for a long time with few satiation effects. A high-effort entry response is not a feature.",
  },
  {
    id: 32028,
    topic: "Behavior Traps",
    prompt: "A teacher incorporates a student's intense interest in baseball cards into math, geography, and language arts activities, leading to academic gains and new friendships. This best illustrates which generalization tactic?",
    options: [
      "Teaching loosely",
      "Programming common stimuli",
      "Setting a behavior trap",
      "Recruiting reinforcement"
    ],
    correctIndex: 2,
    explanation: "This scenario illustrates setting a behavior trap. The teacher used the student's irresistible interest in baseball cards as 'bait' to draw him into academic engagement, after which interrelated contingencies within the trap motivated him to acquire and maintain academic and social skills.",
  },
  {
    id: 32029,
    topic: "Ask People in the Generalization Setting to Reinforce",
    prompt: "A special education teacher asks general education teachers to look for and praise any effort by a student with disabilities to participate in class discussions. This approach exemplifies which tactic?",
    options: [
      "Teaching the learner to recruit reinforcement",
      "Programming common stimuli",
      "Asking people in the generalization setting to reinforce the target behavior",
      "Contriving a mediating stimulus"
    ],
    correctIndex: 2,
    explanation: "Asking people in the generalization setting to reinforce the target behavior involves informing key people in the generalization setting of the value of attending to the learner's efforts and asking them to provide contingent praise and attention. This 'wakes up' a potentially powerful but dormant natural contingency of reinforcement.",
  },
  {
    id: 32030,
    topic: "Teach the Learner to Recruit Reinforcement",
    prompt: "Seymour and Stokes (1976) found that delinquent girls' improved work behaviors in a vocational training area were not maintained because staff gave no praise regardless of work quality. The solution implemented was to:",
    options: [
      "Ask staff to provide continuous reinforcement for all work-related behaviors",
      "Move instruction to a setting where naturally existing reinforcement was more available",
      "Teach the girls a response that called staff attention to their work, enabling them to recruit reinforcement",
      "Set up behavior traps using the girls' preferred activities as bait"
    ],
    correctIndex: 2,
    explanation: "Seymour and Stokes (1976) taught the delinquent girls a simple response that called staff attention to their work. This enabled the target behavior to contact natural reinforcers, extending and maintaining the desired behavior change by recruiting a dormant natural contingency of reinforcement.",
  },
  {
    id: 32031,
    topic: "Teach the Learner to Recruit Reinforcement",
    prompt: "Craft, Alber, and Heward (1998) taught four elementary students with disabilities to recruit teacher attention in the general education classroom. Students were taught to say statements such as:",
    options: [
      "'I need more time' or 'This is too hard'",
      "'How am I doing?' or 'Does this look right?'",
      "'Please give me a reward' or 'I finished first'",
      "'Can I take a break?' or 'I am done with my work'"
    ],
    correctIndex: 1,
    explanation: "Craft and colleagues (1998) taught students to use appropriate statements such as 'How am I doing?' or 'Does this look right?' to recruit teacher attention. Students were taught to show their work to the teacher or ask for help 2 to 3 times per session.",
  },
  {
    id: 32032,
    topic: "Contrive a Mediating Stimulus",
    prompt: "For a contrived mediating stimulus to effectively mediate generalization, it must meet two requirements. Which pair correctly identifies those requirements?",
    options: [
      "It must be novel and unfamiliar to the learner in the instructional setting",
      "It must be made functional for the target behavior during instruction, and it must be easily transported to the generalization setting",
      "It must be visible to all people in the generalization setting, and it must be the same stimulus used during initial acquisition",
      "It must be a physical object rather than a person, and it must remain present throughout the generalization setting"
    ],
    correctIndex: 1,
    explanation: "To effectively mediate generalization, a contrived mediating stimulus must be (a) made functional for the target behavior during instruction and (b) easily transported to the generalization setting, meaning it can go with the learner to all important generalization settings.",
  },
  {
    id: 32033,
    topic: "Contrive a Mediating Stimulus: Visual Activity Schedules",
    prompt: "MacDuff, Krantz, and McClannahan (1993) taught boys with autism to use photographic activity schedules. They concluded that the schedules:",
    options: [
      "Required continuous adult prompting to remain effective in the generalization setting",
      "Became functional discriminative stimuli that promoted sustained engagement and fostered generalized responding to new activity sequences after training ceased",
      "Were effective only when the trainer was present to provide feedback",
      "Needed to be modified for each new setting to maintain their prompting function"
    ],
    correctIndex: 1,
    explanation: "MacDuff and colleagues found that the photographic activity schedules became functional discriminative stimuli that promoted sustained engagement after training ceased and fostered generalized responding to new activity sequences and novel leisure materials, allowing the boys to change tasks and move to different areas without adult prompts.",
  },
  {
    id: 32034,
    topic: "Teach Self-Management Skills",
    prompt: "Baer and Fowler (1984) warned that using self-management to mediate generalization may create which potential problem?",
    options: [
      "Self-management responses are too complex for most learners to acquire",
      "Self-management skills cannot be taught in the instructional setting and transferred to the generalization setting",
      "The self-management responses themselves need their own generalization and maintenance, potentially replacing one problem with two",
      "Self-management eliminates the need for naturally existing contingencies of reinforcement"
    ],
    correctIndex: 2,
    explanation: "Baer and Fowler (1984) warned that self-management responses, like any other responses, need generalization and maintenance themselves. Setting up one behavior to mediate the generalization of another may succeed, but it may also represent the problem of guaranteeing the generalization of two responses where before there was only one.",
  },
  {
    id: 32035,
    topic: "Train to Generalize: Reinforce Response Variability",
    prompt: "In Goetz and Baer's (1973) block-building study, the teacher gave enthusiastic comments contingent on novel block-building forms. What was the key outcome?",
    options: [
      "Children repeated the same praised form more often because it had been reinforced",
      "Children constructed more new block forms, even though each new form had never itself been reinforced previously",
      "Children stopped building with blocks because the criterion for reinforcement was too difficult",
      "The reinforced forms generalized to a different play activity but not to additional block forms"
    ],
    correctIndex: 1,
    explanation: "In Goetz and Baer (1973), reinforcing a few members of the response class of 'new forms' increased the frequency of other members of the same response class. Children constructed more new forms even though each specific new form had never itself been reinforced, exemplifying response generalization through reinforcing response variability.",
  },
  {
    id: 32036,
    topic: "Train to Generalize: Lag Reinforcement Schedules",
    prompt: "On a Lag 1 reinforcement schedule, reinforcement is contingent on:",
    options: [
      "Emitting the target response at a rate that exceeds the learner's previous best performance",
      "A response being different in some defined way from the previous response",
      "A response that occurs after a specified time delay following the previous response",
      "Emitting the same response that was reinforced in the instructional setting"
    ],
    correctIndex: 1,
    explanation: "On a lag reinforcement schedule, reinforcement is contingent on a response being different in some defined way from the previous response (Lag 1) or from a specified number of previous responses (Lag 2 or more). This contingency directly reinforces response variability.",
  },
  {
    id: 32037,
    topic: "Train to Generalize: Instruct the Learner",
    prompt: "Stokes and Baer (1977) described treating 'to generalize' as an operant. The simplest and least expensive tactic within this strategy is to:",
    options: [
      "Set behavior traps using irresistible reinforcers to lure the learner into generalizing",
      "Conduct generalization probes before, during, and after instruction",
      "Tell the learner about the possibility of generalization and then ask for it",
      "Contrive mediating stimuli that travel with the learner to all generalization settings"
    ],
    correctIndex: 2,
    explanation: "The simplest and least expensive tactic for promoting generalized behavior change is to tell the learner about the possibility of generalization and then ask for it. A learner who successfully generalizes new skills may become a 'generalized generalizer,' increasingly skilled at applying newly acquired behaviors in untrained settings.",
  },
  {
    id: 32038,
    topic: "Distinguishing Setting/Situation Generalization and Response Maintenance",
    prompt: "In Koegel and Rincover's (1977, Experiment I) study, Child 2 showed 0% correct responding in the generalization setting at the experiment's conclusion because:",
    options: [
      "Child 2's responding in the generalization setting was initially good but then extinguished due to absence of reinforcement",
      "Child 2's imitative responding never generalized from the instructional setting to the outside setting at all",
      "Child 2 showed maintenance in the instructional setting but not in the generalization setting",
      "Child 2 required more training examples before generalization could occur"
    ],
    correctIndex: 1,
    explanation: "For Child 2, the imitative responding acquired in the instructional setting never generalized to the outside setting at all. This represents a failure of setting/situation generalization, distinct from Children 1 and 3, whose generalized responding did appear but was not maintained (a failure of response maintenance).",
  },
  {
    id: 32039,
    topic: "Planning for Generalized Behavior Change",
    prompt: "Stokes and Baer (1977) reviewed 270 published studies and concluded that practitioners should:",
    options: [
      "Expect that generalization will occur naturally for most learners if target behaviors are carefully selected",
      "Assume that generalization does not occur except through some form of programming and act as if there is no such thing as free generalization",
      "Focus on response maintenance first and address setting/situation generalization only if needed",
      "Rely on natural contingencies of reinforcement to extend behavior change without contriving supplementary tactics"
    ],
    correctIndex: 1,
    explanation: "Stokes and Baer (1977) concluded that practitioners should always assume that generalization does not occur except through some form of programming and act as if generalization never occurs 'naturally' but always requires programming. Teaching without a generalization plan was labeled the 'train and hope' approach.",
  },
  {
    id: 32040,
    topic: "Generalization Probe",
    prompt: "A generalization probe is best defined as:",
    options: [
      "A measurement taken during the instructional session to assess acquisition of the target behavior",
      "Any measurement of a learner's performance of a target behavior in a setting or stimulus situation in which direct training has not been provided",
      "A systematic assessment of whether the intervention has produced behavior change in the treatment setting",
      "An evaluation of how quickly the learner acquires a new behavior during instruction"
    ],
    correctIndex: 1,
    explanation: "A generalization probe is any measurement of a learner's performance of a target behavior in a setting or stimulus situation in which direct training has not been provided. Probes should be conducted before, during, and after instruction to monitor whether generalization has occurred.",
  },
  {
    id: 32041,
    topic: "Guiding Principles: Minimize the Need for Generalization",
    prompt: "The guiding principle of minimizing the need for generalization implies that:",
    options: [
      "Practitioners should avoid using tactics that promote generalization because they are intrusive",
      "The most critical behavior changes should be taught directly rather than left to generalization",
      "Generalization tactics should only be used when natural contingencies fail to maintain the behavior",
      "Practitioners should train a small set of behaviors and expect generalization to do the rest"
    ],
    correctIndex: 1,
    explanation: "Minimizing the need for generalization means practitioners should prioritize and teach directly the most critical behaviors in the most important settings. The most important skill-setting-stimulus combinations should always be taught directly and, when possible, taught first.",
  },
  {
    id: 32042,
    topic: "Guiding Principles: Involve Significant Others",
    prompt: "Baer (1999) described two categories of people to involve in generalization programming: active supporters and tolerators. An active supporter is someone who:",
    options: [
      "Agrees not to behave in ways that would impede the generalization plan",
      "Provides financial or administrative support for the behavior change program",
      "Arranges opportunities for the learner to practice the new skill, gives prompts, and provides reinforcement in the generalization setting",
      "Monitors generalization probes and reports data to the behavior analyst"
    ],
    correctIndex: 2,
    explanation: "An active supporter is someone naturally present in the generalization setting who helps promote generalization and maintenance by arranging opportunities for the learner to practice the new skill, giving cues and response prompts, and providing reinforcement for performance of the target behavior.",
  },
  {
    id: 32043,
    topic: "Guiding Principles: Involve Significant Others",
    prompt: "Foxx (1996) stated that in programming successful behavior change interventions, '10% is knowing what to do; 90% is getting people to do it.' This statement emphasizes the importance of:",
    options: [
      "Selecting technically sound procedures over those that are easy to implement",
      "Getting staff and significant others to implement programs with consistency and fidelity",
      "Spending most intervention time teaching the learner rather than training staff",
      "Using data-based decisions to modify procedures rather than relying on staff reports"
    ],
    correctIndex: 1,
    explanation: "Foxx's statement emphasizes that most of the challenge in successful behavior change programming is getting staff and significant others to implement programs with the consistency and fidelity needed for success. Involving significant others is therefore a crucial guiding principle for promoting generalized behavior change.",
  },
  {
    id: 32044,
    topic: "Modifying and Terminating Successful Interventions",
    prompt: "When terminating a successful behavior change program, withdrawing intervention components should be guided primarily by:",
    options: [
      "The practitioner's schedule and the number of remaining sessions in the treatment contract",
      "The learner's performance of the target behavior in the most important generalization settings",
      "The complexity of the intervention and the cost of continuing the program",
      "The wishes of the family or school staff regarding intervention duration"
    ],
    correctIndex: 1,
    explanation: "Withdrawal of a successful intervention should be carried out in a systematic fashion, guided by the learner's performance of the target behavior in the most important generalization settings. Gradually shifting from contrived intervention conditions to the typical environment will increase the likelihood that new behavior patterns will be maintained.",
  },
  {
    id: 32045,
    topic: "Modifying and Terminating Successful Interventions",
    prompt: "The chapter recommends that when withdrawing an intervention, which component should generally be addressed before withdrawing significant antecedent or consequence components?",
    options: [
      "Consequence components should be withdrawn first, since reinforcement is most controlling",
      "Antecedent components should be withdrawn first, since prompts are most intrusive",
      "All components should be withdrawn simultaneously to avoid confounding",
      "Task-related requirements should be made as similar as possible to the postintervention environment first"
    ],
    correctIndex: 3,
    explanation: "In most programs it is best to make all task-related requirements as similar as possible to those of the postintervention environment before withdrawing significant antecedent or consequence components of the intervention. This ensures the learner is emitting the target behavior at the required performance level before full withdrawal.",
  },
  {
    id: 32046,
    topic: "Modifying and Terminating Successful Interventions: Partial-Sequential Withdrawal",
    prompt: "Rusch and Kazdin (1981) described 'partial-sequential withdrawal' as a method for:",
    options: [
      "Probing generalization settings before instruction begins to identify baseline performance",
      "Systematically withdrawing intervention components one at a time while simultaneously assessing response maintenance",
      "Training new behaviors across multiple settings at the same time",
      "Gradually introducing reinforcement thinning after the behavior is acquired"
    ],
    correctIndex: 1,
    explanation: "Partial-sequential withdrawal, described by Rusch and Kazdin (1981), is a method for systematically withdrawing intervention components while simultaneously assessing response maintenance. This approach allows practitioners to evaluate whether the behavior is maintained as each component is removed.",
  },
  {
    id: 32047,
    topic: "Generalized Behavior Change Is Not Always Desirable",
    prompt: "Undesirable response generalization occurs when:",
    options: [
      "The target behavior generalizes too slowly to nontraining settings",
      "A trained behavior stops occurring in the generalization setting after initially appearing there",
      "A learner's untrained but functionally equivalent responses result in poor performance or undesirable outcomes",
      "The behavior occurs in the instructional setting but fails to generalize to any other setting"
    ],
    correctIndex: 2,
    explanation: "Undesirable response generalization occurs when a learner's untrained but functionally equivalent responses result in poor performance or undesirable outcomes. For example, a worker taught to operate a drill press safely with two hands who sometimes uses one hand demonstrates undesirable response generalization because both topographies produce the product but one compromises safety.",
  },
  {
    id: 32048,
    topic: "Planning for Generalized Behavior Change: Pre-Intervention Benefits",
    prompt: "Baer (1999) identified six benefits of listing all forms of behavior change and all situations in which those changes should occur before instruction begins. Which of the following is one of those benefits?",
    options: [
      "Listing behaviors guarantees that all desired behavior changes will occur as generalized outcomes",
      "Listing behaviors allows the practitioner to decide what is most important to teach and to teach in a way that encourages indirect development of other desired behaviors",
      "Listing behaviors eliminates the need for generalization probes because instruction covers all possible variations",
      "Listing behaviors requires families to commit to a specific number of treatment sessions"
    ],
    correctIndex: 1,
    explanation: "One of Baer's six benefits is that after listing all behaviors and situations, the practitioner can decide what is most important to teach and can decide to teach in a way that encourages the indirect development of some of the other desired forms of behavior and the indirect occurrence of the behavior in other desired situations.",
  },
  {
    id: 32049,
    topic: "Guiding Principles: Least Intrusive Tactics First",
    prompt: "The guiding principle of using the least intrusive, least costly tactics possible implies that behavior analysts should:",
    options: [
      "Never use contrived contingencies to promote generalization regardless of learner needs",
      "Try simpler, less costly approaches such as instructing the learner to generalize before using more elaborate and intrusive tactics",
      "Limit generalization programming to tactics that require no resources or staff training",
      "Use the most comprehensive set of tactics simultaneously to ensure generalization occurs"
    ],
    correctIndex: 1,
    explanation: "Behavior analysts should use less intrusive and less costly tactics to promote generalization before using more intrusive and more costly tactics. Simply reminding students to use their new skills in the generalization setting is the easiest and least expensive method. Less intrusive interventions with fewer moving parts are also easier to withdraw.",
  },
  {
    id: 32050,
    topic: "Generalized Behavior Change: A Relative and Intermingled Outcome",
    prompt: "Later in the week after training, Joyce signals her supervisor by waving her hand on a noisy factory floor, even though she was originally taught to call out for help. This scenario simultaneously exemplifies which combination of generalized behavior change types?",
    options: [
      "Response maintenance and faulty stimulus control",
      "Overgeneralization and response maintenance",
      "Response maintenance, setting/situation generalization, and response generalization",
      "Setting/situation generalization and overgeneralization"
    ],
    correctIndex: 2,
    explanation: "Joyce's scenario illustrates all three types of generalized behavior change occurring together: response maintenance (the behavior occurred later in the week after training), setting/situation generalization (it occurred under different, noisier conditions on the factory floor), and response generalization (she waved her hand rather than calling out, an untrained but functionally equivalent response).",
  },
];

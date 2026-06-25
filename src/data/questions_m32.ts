import type { Question } from "../types";

/**
 * BCBA practice questions for Cooper et al., Chapter 29: Self-Management.
 * Grounded in the chapter text. Option order is shuffled at runtime, so
 * correctIndex placement here is arbitrary.
 */
export const QUESTIONS_M32: Question[] = [
  {
    id: 31001,
    topic: "Self-Management Defined",
    prompt: "Which of the following best reflects the definition of self-management used by Cooper, Heron, and Heward?",
    options: [
      "The personal application of behavior change tactics that produces a desired improvement in behavior",
      "Any behavior that occurs in the absence of external control by another person",
      "A cognitive strategy for planning future responses",
      "Reinforcement delivered by a therapist contingent on client performance"
    ],
    correctIndex: 0,
    explanation: "The chapter defines self-management as the personal application of behavior change tactics that produces a desired improvement in behavior. This intentionally broad and functional definition requires that a desired change in the target behavior actually occur.",
  },
  {
    id: 31002,
    topic: "Skinner's Two-Response Conceptualization",
    prompt: "In Skinner's two-response conceptualization of self-control, the controlling response is best described as:",
    options: [
      "The target behavior a person wishes to eliminate from their repertoire",
      "The behavior emitted to manipulate variables that change the probability of the controlled response",
      "An internal cognitive state that precedes overt action",
      "Any behavior reinforced by the natural environment"
    ],
    correctIndex: 1,
    explanation: "Skinner (1953) described the controlling response as the behavior that affects variables in such a way as to change the probability of the controlled response (the target behavior). Together, these two responses constitute the self-control phenomenon.",
  },
  {
    id: 31003,
    topic: "Terminology: Self-Management vs. Self-Control",
    prompt: "One reason the chapter recommends using the term 'self-management' instead of 'self-control' is that self-control:",
    options: [
      "Has no established meaning in the behavioral literature",
      "Refers only to the reduction of behavior, not its increase",
      "Cannot be observed or measured by an external observer",
      "Implies that ultimate control of behavior lies within the person, which is inconsistent with radical behaviorism"
    ],
    correctIndex: 3,
    explanation: "The chapter notes that 'self-control' is an inherently misleading term because it implies the ultimate control of behavior lies within the person. From a radical behaviorist perspective, the causal factors for controlling behaviors are found in a person's experiences with the environment.",
  },
  {
    id: 31004,
    topic: "Delay Discounting",
    prompt: "Behavior analysts use the term 'delay discounting' to describe which phenomenon?",
    options: [
      "The tendency to reinforce behavior immediately rather than after a delay",
      "The decreasing influence a delayed reward exerts on current behavior as its temporal distance increases",
      "The process of gradually increasing the delay between a response and its consequence during shaping",
      "An MO that reduces the value of currently available reinforcers"
    ],
    correctIndex: 1,
    explanation: "Delay discounting (also called temporal discounting) refers to the finding that both humans and nonhuman animals discount the value of delayed rewards: the greater the delay, the less value or influence the reward has on current behavior.",
  },
  {
    id: 31005,
    topic: "Delay Discounting",
    prompt: "A behavior analyst is working with a client who consistently chooses a smaller, immediate reward over a larger, delayed reward. This pattern is best described as:",
    options: [
      "Self-control",
      "Commitment responding",
      "Impulsive behavior",
      "Progressive delay"
    ],
    correctIndex: 2,
    explanation: "Choosing the smaller, sooner reward (SSR) over the larger, later reward (LLR) is defined as impulsive behavior. Forgoing the SSR to obtain the LLR is viewed as self-control.",
  },
  {
    id: 31007,
    topic: "Applications of Self-Management",
    prompt: "Malott (2005a) argued that people struggle to manage their own behavior primarily when:",
    options: [
      "The outcome of each individual response is too small or too improbable, even though the cumulative impact of those outcomes is significant",
      "External change agents are too involved in the behavior change program",
      "The target behavior occurs in multiple settings simultaneously",
      "Reinforcement is delivered on a fixed-ratio schedule rather than a variable schedule"
    ],
    correctIndex: 0,
    explanation: "Malott argued that behavior is controlled by the outcome of each individual response, not by cumulative effects. When each instance produces only an insignificant outcome, the natural contingency is ineffective, even if the cumulative impact of many responses would be highly significant.",
  },
  {
    id: 31008,
    topic: "Advantages of Self-Management",
    prompt: "Self-management is particularly useful for influencing behaviors that external change agents cannot easily address because:",
    options: [
      "External agents are less trained than self-managers",
      "Some behaviors such as obsessive thoughts are private events accessible only to the individual",
      "Legal restrictions prevent external agents from observing certain behaviors",
      "Self-management contingencies are always more potent than externally arranged ones"
    ],
    correctIndex: 1,
    explanation: "The chapter identifies that self-management can be used to change behaviors inaccessible to observation by others, including private events such as thoughts of self-doubt, obsessive thoughts, and feelings of depression, for which a self-managed treatment approach may be needed.",
  },
  {
    id: 31009,
    topic: "Advantages of Self-Management",
    prompt: "According to Baer and Fowler (1984), the most practical behavior change agent that can follow a student to every necessary lesson at all times to prompt and reinforce every desirable behavior is:",
    options: [
      "A well-trained teacher aide",
      "A portable electronic feedback device",
      "A peer tutor",
      "The student's own 'self'"
    ],
    correctIndex: 3,
    explanation: "Baer and Fowler posed and answered a pragmatic question about promoting generalization: the student's own 'self' can always meet the specifications of being present in every necessary setting at all times to prompt and reinforce desirable behavior.",
  },
  {
    id: 31011,
    topic: "Antecedent-Based Self-Management Tactics",
    prompt: "An antecedent-based self-management tactic is best characterized by:",
    options: [
      "Arranging consequences that follow the occurrence of the target behavior",
      "Delivering self-praise after successfully completing a goal",
      "Manipulating events or stimuli that occur before the target behavior to make it more or less likely",
      "Recording the frequency of the target behavior using a wrist counter"
    ],
    correctIndex: 2,
    explanation: "Antecedent-based self-management tactics feature the manipulation of events or stimuli antecedent to the target (controlled) behavior, as distinguished from consequence-based approaches.",
  },
  {
    id: 31012,
    topic: "Antecedent-Based Self-Management Tactics",
    prompt: "A person skips lunch before attending a dinner party at a renowned chef's home in order to maximize their enjoyment of the meal. This is an example of using which antecedent-based self-management tactic?",
    options: [
      "Providing a response prompt",
      "Manipulating a motivating operation (specifically, an establishing operation)",
      "Limiting an undesired behavior to restricted stimulus conditions",
      "Performing the initial steps of a behavior chain"
    ],
    correctIndex: 1,
    explanation: "Skipping lunch creates an establishing operation (EO) that increases the momentary value of food as a reinforcer and evokes food-related behaviors. This is an example of the antecedent-based self-management tactic of manipulating motivating operations.",
  },
  {
    id: 31013,
    topic: "Antecedent-Based Self-Management Tactics",
    prompt: "Placing an umbrella on the doorknob the night before a forecasted rainy day, so you will pick it up when leaving, illustrates which antecedent-based self-management tactic?",
    options: [
      "Limiting an undesired behavior to restricted stimulus conditions",
      "Removing items necessary for an undesired behavior",
      "Dedicating a specific environment for a desired behavior",
      "Performing the initial steps of a behavior chain to ensure later contact with a discriminative stimulus"
    ],
    correctIndex: 3,
    explanation: "As Skinner (1983b) described, executing as much of the behavior chain as possible when the behavior occurs to you (placing the umbrella on the doorknob) ensures that you will be confronted later with a discriminative stimulus (seeing the umbrella) that evokes the next response in the chain (taking it with you).",
  },
  {
    id: 31016,
    topic: "Self-Monitoring",
    prompt: "Self-monitoring (also called self-recording or self-observation) is defined as:",
    options: [
      "A procedure whereby a person systematically observes their behavior and records the occurrence or nonoccurrence of a target behavior",
      "Delivering a self-selected reward after completing a specified number of responses",
      "Comparing one's performance against a predetermined goal or standard set by a therapist",
      "Using verbal self-instructions to guide oneself through a behavior chain"
    ],
    correctIndex: 0,
    explanation: "Self-monitoring is defined as a procedure whereby a person systematically observes their behavior and records the occurrence or nonoccurrence of a target behavior. It was originally conceived as a clinical assessment technique and evolved into the most widely studied self-management strategy because of the reactive behavior changes it often produced.",
  },
  {
    id: 31017,
    topic: "Self-Monitoring",
    prompt: "Reactivity in the context of self-monitoring refers to:",
    options: [
      "The negative side effects that self-monitoring has on other behaviors in the person's repertoire",
      "The resistance a client shows when asked to self-record",
      "Inaccurate data produced when a client knows an external observer is present",
      "Changes in the target behavior caused by the act of observing and recording it"
    ],
    correctIndex: 3,
    explanation: "Reactivity refers to the effects an assessment or measurement procedure has on the person's behavior. Self-monitoring produces maximum obtrusiveness because the observer and the subject are the same person. In clinical practice, these reactive changes typically occur in the desired therapeutic direction.",
  },
  {
    id: 31021,
    topic: "Self-Monitoring",
    prompt: "Regarding whether students should self-monitor on-task behavior or academic performance, which conclusion is best supported by the research reviewed in the chapter?",
    options: [
      "Self-monitoring on-task behavior consistently produces more academic responses than self-monitoring performance",
      "Students tend to complete more academic responses when self-monitoring productivity, and most students prefer self-monitoring academic performance to self-recording on-task behavior",
      "The two procedures are always equally effective and students have no preference",
      "Self-monitoring on-task behavior should always be implemented before self-monitoring performance"
    ],
    correctIndex: 1,
    explanation: "The chapter concludes that most students complete more academic responses when self-monitoring productivity than when self-recording on-task behavior, and that most students prefer self-monitoring academic performance. Because increasing on-task behavior does not necessarily produce collateral increases in productivity, the chapter recommends teaching students to self-monitor academic productivity.",
  },
  {
    id: 31024,
    topic: "Self-Monitoring",
    prompt: "Research on the relationship between self-monitoring accuracy and behavior change has found that:",
    options: [
      "Highly accurate self-monitoring is both necessary and sufficient to produce behavior change",
      "Accurate self-monitoring is neither a sufficient nor a necessary condition for behavior change, though it is desirable when self-recorded data are used for self-evaluation or self-administered consequences",
      "Inaccurate self-monitoring reliably produces greater behavior change than accurate self-monitoring",
      "Accuracy is only important for behaviors targeted for increase, not for behaviors targeted for decrease"
    ],
    correctIndex: 1,
    explanation: "Studies have found that accurate self-monitoring is neither necessary nor sufficient for behavior change: some individuals improved even when their self-recorded data did not match independent observers, while others became highly accurate self-scorers without improving the target behavior. Nevertheless, accuracy is desirable when self-recorded data form the basis for self-evaluation or self-administered consequences.",
  },
  {
    id: 31026,
    topic: "Self-Evaluation",
    prompt: "Self-evaluation in a self-management context involves:",
    options: [
      "Recording the occurrence of each target behavior as it happens",
      "Delivering a preferred item to oneself after meeting a behavioral criterion",
      "Comparing one's performance with a predetermined goal or standard",
      "Having another person judge the quality of one's work"
    ],
    correctIndex: 2,
    explanation: "Self-evaluation (also called self-assessment) involves a person comparing their performance with a predetermined goal or standard. It is often combined with self-monitoring and goal setting, and can be aided by self-graphing of self-collected data.",
  },
  {
    id: 31029,
    topic: "Self-Administered Consequences",
    prompt: "Malott (2005a) argued that self-administered consequences are best viewed as rule-governed analogs of reinforcement and punishment contingencies rather than as true reinforcement or punishment because:",
    options: [
      "Self-managers never actually deliver the promised consequences to themselves",
      "Self-management contingencies involve only antecedent variables, not consequences",
      "Social reinforcement from peers always confounds the effects of self-administered consequences",
      "The response-to-consequence delay in self-management programs is typically too great for direct operant conditioning to occur"
    ],
    correctIndex: 3,
    explanation: "Malott argued that performance-management contingencies, whether implemented by oneself or others, are best viewed as rule-governed analogs because the delay between the response and its consequence is too great to meet the requirements of direct operant reinforcement or punishment.",
  },
  {
    id: 31032,
    topic: "Self-Administered Consequences",
    prompt: "The chapter defines 'bootleg reinforcement' as:",
    options: [
      "Reinforcement delivered by an external change agent without the client's knowledge",
      "Access to the specified reward or to equally reinforcing items without meeting the response requirements of the contingency",
      "Using very large, elaborate rewards that cannot be delivered consistently",
      "Reinforcement that is delivered so gradually that its effects cannot be detected"
    ],
    correctIndex: 1,
    explanation: "Bootleg reinforcement is access to the specified reward, or other equally reinforcing items or events, without meeting the response requirements of the contingency. It is a common downfall of self-management projects because a person with a comfortable supply of smuggled rewards is less likely to work to earn response-contingent rewards.",
  },
  {
    id: 31034,
    topic: "Self-Administered Consequences",
    prompt: "When selecting consequences for self-management programs, which recommendation does the chapter provide?",
    options: [
      "Use large, highly valuable rewards to maximize motivation",
      "Set the initial performance criterion well above current performance to ensure rapid improvement",
      "Select small, easy-to-deliver consequences that can be obtained immediately and frequently",
      "Reserve all consequence delivery for the end of the week to match natural pay cycles"
    ],
    correctIndex: 2,
    explanation: "The chapter recommends selecting small, easy-to-deliver consequences in self-management programs. Large, elaborate consequences are difficult to deliver immediately and consistently. Punishing consequences in particular must be delivered immediately every time the target behavior occurs to be most effective.",
  },
  {
    id: 31035,
    topic: "Self-Administered Consequences: Self-Recruited Reinforcement",
    prompt: "In studies on self-recruited reinforcement, students are taught to:",
    options: [
      "Deliver tokens to themselves after recording a target number of on-task intervals",
      "Periodically self-evaluate their work and then show it to their teacher and request feedback or assistance",
      "Use self-instruction to remind themselves to complete tasks before seeking praise",
      "Deposit pennies in a jar each time they complete a homework problem"
    ],
    correctIndex: 1,
    explanation: "Self-recruited reinforcement involves teaching students to periodically self-evaluate their work and then seek out the teacher to show it and request feedback. By recruiting teacher attention, students in effect administer their own reinforcer, which often results in praise and other forms of reinforcement.",
  },
  {
    id: 31036,
    topic: "Self-Instruction",
    prompt: "Self-instruction as a self-management tactic consists of:",
    options: [
      "An external trainer providing step-by-step verbal instructions throughout task completion",
      "Reviewing written instructions before beginning a complex task",
      "Setting a digital timer to signal when each step of a behavior chain should be performed",
      "Self-generated verbal responses, covert or overt, that function as response prompts for a desired behavior"
    ],
    correctIndex: 3,
    explanation: "Self-instruction consists of self-generated verbal responses, covert or overt, that function as response prompts for a desired behavior. As a self-management tactic, self-instructions are often used to guide oneself through a behavior chain or sequence of tasks.",
  },
  {
    id: 31038,
    topic: "Self-Instruction",
    prompt: "O'Leary and Dubey (1979) identified factors that appear to influence the effectiveness of self-instruction training with children. Which of the following is one of those factors?",
    options: [
      "Self-instructions are effective only if they involve rhythmic repetition to strengthen memory traces",
      "Self-instructions appear effective when children actually implement them and use them to influence behavior at which they are skilled",
      "Self-instructions must be printed on cards visible to the instructor at all times",
      "Self-instructions work best with children who have no prior reinforcement history for the target behavior"
    ],
    correctIndex: 1,
    explanation: "O'Leary and Dubey summarized that self-instructions appear effective when children actually implement them, use them to influence behavior at which they are skilled, have been reinforced for adhering to self-instructions in the past, and when the focus is the behavior most subject to consequences.",
  },
  {
    id: 31039,
    topic: "Habit Reversal",
    prompt: "Habit reversal, developed by Azrin and Nunn (1973), is a self-management treatment package that typically includes:",
    options: [
      "Massed practice of the habit until it decreases through satiation",
      "Self-awareness training and competing response training, with possible motivation techniques and social support",
      "An escalating response cost that removes tokens each time the habit occurs",
      "Systematic desensitization to reduce the anxiety that triggers the habit"
    ],
    correctIndex: 1,
    explanation: "Habit reversal is a multiple-component treatment package that typically includes self-awareness training (involving response detection and identifying antecedent triggers) and competing response training (engaging in behavior incompatible with the problem behavior). Motivation techniques including self-administered consequences and social support may also be included.",
  },
  {
    id: 31041,
    topic: "Self-Directed Systematic Desensitization",
    prompt: "Self-directed systematic desensitization involves:",
    options: [
      "Forcing oneself to repeatedly perform a feared behavior until anxiety diminishes through satiation",
      "Developing a hierarchy from least to most fearful situations, learning to relax while imagining them in order, then gradually exposing oneself to real-life situations",
      "Using self-instruction to guide oneself through anxiety-provoking situations",
      "Applying response cost every time avoidance behavior occurs"
    ],
    correctIndex: 1,
    explanation: "Self-directed systematic desensitization involves substituting muscle relaxation for the fear response. The person develops a hierarchy from the least to the most fearful situation, practices relaxing while imagining each scene in order, and then gradually exposes herself to real-life situations when she can move through the entire hierarchy without anxiety.",
  },
  {
    id: 31042,
    topic: "Massed Practice",
    prompt: "The self-management tactic of massed practice involves:",
    options: [
      "Practicing a desired skill many times in rapid succession to build fluency",
      "Deliberately forcing oneself to perform an undesired behavior repeatedly, which can decrease its future occurrence",
      "Providing large amounts of reinforcement for each instance of a desired behavior early in training",
      "Having a self-management partner observe and record behavior across many consecutive sessions"
    ],
    correctIndex: 1,
    explanation: "Massed practice as a self-management tactic involves deliberately forcing oneself to repeatedly perform an undesired behavior, which can decrease future occurrences. In one reported case, a woman who performed a ritualized 13-step security check made herself repeat the entire routine five times whenever she engaged in any part of it, and she soon stopped the compulsive behavior.",
  },
  {
    id: 31043,
    topic: "Suggestions for Effective Self-Management Programs",
    prompt: "According to the chapter, the first step in designing and implementing an effective self-management program is:",
    options: [
      "Begin self-monitoring the behavior immediately",
      "Enlist a self-management partner",
      "Specify a goal and define the target behavior",
      "Create contrived contingencies to compete with natural ones"
    ],
    correctIndex: 2,
    explanation: "The first step in a self-management program is specifying a goal or objective and identifying the specific behavior changes necessary to accomplish it. A person should use questions similar to those practitioners use when selecting target behaviors to assess social significance and prioritize self-determined behavior change goals.",
  },
  {
    id: 31044,
    topic: "Suggestions for Effective Self-Management Programs",
    prompt: "The chapter recommends beginning self-monitoring before implementing any other intervention tactics primarily because:",
    options: [
      "Self-monitoring is always sufficient to produce the desired behavior change without additional tactics",
      "Regulatory guidelines require a documented baseline before any self-management program can begin",
      "Without a self-monitoring phase, participants cannot learn to use self-evaluation correctly",
      "Baseline self-monitored data help design the intervention, set initial performance criteria, evaluate effects of subsequent interventions, and behavior may improve from self-monitoring alone"
    ],
    correctIndex: 3,
    explanation: "Self-monitoring prior to implementing other interventions yields the same benefits as baseline data: it reveals ABC correlations for designing the intervention, guides setting initial performance criteria, and provides an objective basis for evaluating subsequent interventions. Additionally, the desired behavior change may be achieved through self-monitoring alone.",
  },
  {
    id: 31045,
    topic: "Suggestions for Effective Self-Management Programs",
    prompt: "Malott's 'public spotlight principle of self-management' suggests that publicly sharing a self-management goal:",
    options: [
      "Rarely improves performance because public praise is not a sufficiently powerful reinforcer",
      "Improves performance by increasing the rewarding value of success and the aversive value of failure, which function through self-stated rules that prompt immediate self-reinforcement or self-punishment",
      "Is counterproductive because public failure leads to giving up on the program",
      "Works only when the audience consists of behavior analysts who can provide accurate feedback"
    ],
    correctIndex: 1,
    explanation: "Malott's public spotlight principle holds that public statements of goals improve performance by increasing the rewarding value of success and the aversive value of failure. These social consequences are probably too delayed to directly reinforce behavior; instead they become part of self-stated rules that function as cues for immediate self-reinforcement or self-punishment.",
  },
  {
    id: 31047,
    topic: "Suggestions for Effective Self-Management Programs",
    prompt: "Which research design does the chapter suggest lends itself particularly well to self-management projects that involve stepwise increments in performance?",
    options: [
      "A reversal (ABAB) design",
      "An alternating treatments design",
      "A changing criterion design",
      "A multiple probe design"
    ],
    correctIndex: 2,
    explanation: "The chapter notes that the changing criterion design lends itself nicely not only to the stepwise increments in performance that are often part of improving personal performance but also to a clearer demonstration of the relation between the intervention and changes in the target behavior.",
  },
  {
    id: 31050,
    topic: "Self-Management: Broad Principles",
    prompt: "Epstein (1997) described three 'secrets' of self-management: Modify your environment, Monitor your behaviors, and Make commitments. These three strategies reflect which overarching principle stated at the end of the chapter?",
    options: [
      "Reinforcement controls all behavior",
      "The environment determines the limits of self-change",
      "Behavior changes behavior",
      "External agents are always necessary for lasting behavior change"
    ],
    correctIndex: 2,
    explanation: "Building upon Skinner's (1953) conceptual analysis, the chapter concludes with the principle that underlies all self-management: behavior changes behavior. The self-management behaviors a person emits (modifying the environment, monitoring, committing) serve as the controlling responses that alter the probability of the target behaviors.",
  },
];

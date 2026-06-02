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
    id: 31006,
    topic: "Delay Discounting",
    prompt: "The progressive delay strategy for increasing self-control works primarily by:",
    options: [
      "Teaching clients to identify and label the emotional states that accompany impulsive choices",
      "Providing an immediate punisher each time the smaller, sooner reward is selected",
      "Having clients sign a contract committing to the larger reward before choices are presented",
      "Gradually increasing the delay to the larger, later reward after subjects reliably choose it"
    ],
    correctIndex: 3,
    explanation: "The progressive delay strategy essentially shapes preference for larger, later rewards by initially offering both rewards at the same delay, then incrementally increasing the delay to the LLR after subjects reliably select it at each step.",
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
    id: 31010,
    topic: "Advantages of Self-Management",
    prompt: "Research by Lovitt and Curtiss (1969) found that a 12-year-old student's academic response rate during the self-selected contingency phase compared to teacher-selected phases in which way?",
    options: [
      "The student performed no differently under self-selected versus teacher-selected contingencies",
      "The student performed better under teacher-selected contingencies in both comparison phases",
      "The student's rate during the self-selected phase (2.5 per minute) was higher than both teacher-selected phases (1.65 and 1.9 per minute)",
      "The student's performance improved only on math tasks, not reading tasks"
    ],
    correctIndex: 2,
    explanation: "In the Lovitt and Curtiss study, the student's median correct response rate during the self-selected contingency phase was 2.5 responses per minute compared to 1.65 and 1.9 during the two teacher-selected phases, demonstrating that self-selected contingencies can be more effective.",
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
    id: 31014,
    topic: "Antecedent-Based Self-Management Tactics",
    prompt: "In the Nolan (1968) case, a woman designated a single uncomfortable chair as the only place she could smoke, positioned so she could not watch TV or have conversations there. This technique illustrates:",
    options: [
      "Self-administered positive punishment",
      "Habit reversal",
      "Limiting an undesired behavior to restricted stimulus conditions",
      "Massed practice"
    ],
    correctIndex: 2,
    explanation: "Restricting smoking to one unpleasant chair and removing other reinforcers from that setting exemplifies limiting an undesired behavior to restricted stimulus conditions. The woman's smoking dropped from 30 cigarettes per day at baseline to complete cessation within a month.",
  },
  {
    id: 31015,
    topic: "Antecedent-Based Self-Management Tactics",
    prompt: "A graduate student sits on a different side of his table and changes his computer desktop background to a solid color whenever he studies, reserving that configuration exclusively for academic work. This strategy is an example of:",
    options: [
      "Response cost contingency",
      "Self-instruction training",
      "Dedicating a specific environment or stimulus configuration for a desired behavior",
      "Providing supplementary auditory cues"
    ],
    correctIndex: 2,
    explanation: "Dedicating a specific environment or contriving a special stimulus for a single activity creates stimulus control over the desired behavior. Over time the 'scholarly work' desktop or the particular table position becomes a discriminative stimulus that evokes concentration and academic work.",
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
    id: 31018,
    topic: "Self-Monitoring",
    prompt: "In the Broden, Hall, and Mitts (1971) study, Liza's self-recording of study behavior produced which pattern of results?",
    options: [
      "No change in study behavior compared to baseline",
      "An increase in study behavior from about 30% to about 78% of intervals, which reversed when self-recording was withdrawn and recovered when reinstated",
      "A decrease in study behavior because Liza found recording disruptive",
      "Improvement only when teacher praise was added to the self-recording procedure"
    ],
    correctIndex: 1,
    explanation: "Liza's study behavior increased from a baseline average of 30% to approximately 78% of observed intervals during self-recording, decreased back to near-baseline during the second baseline phase, and returned to approximately 80% during the second self-recording phase. This ABAB pattern demonstrated the functional effect of the self-monitoring procedure.",
  },
  {
    id: 31019,
    topic: "Self-Monitoring",
    prompt: "Malott (1981) proposed that self-monitoring improves performance through 'guilt control,' which operates through which mechanism?",
    options: [
      "Positive reinforcement provided by a therapist when self-recorded data show improvement",
      "Self-monitoring produces covert guilty self-statements, and the target behavior is strengthened through negative reinforcement by escape and avoidance of those guilty feelings",
      "Watching video replays of one's own behavior to identify and correct errors",
      "Sharing self-recorded data with a supportive peer group to gain social reinforcement"
    ],
    correctIndex: 1,
    explanation: "Malott's guilt control hypothesis holds that self-monitoring less-than-desirable behavior produces covert guilty self-statements. The person can escape or avoid those guilty feelings by improving their performance, thereby strengthening the desired behavior through negative reinforcement.",
  },
  {
    id: 31020,
    topic: "Self-Monitoring",
    prompt: "A teacher wants to praise students more often and puts 10 pennies in her pocket, moving one coin to another pocket each time she praises a student. This illustrates which self-monitoring guideline?",
    options: [
      "Self-monitor early and often",
      "Reinforce accurate self-monitoring",
      "Provide materials that make self-monitoring easy",
      "Self-monitor the most important dimension of the target behavior"
    ],
    correctIndex: 2,
    explanation: "Using simple, readily available materials (pennies in a pocket) to facilitate self-monitoring exemplifies the guideline to provide materials that make self-monitoring as simple and efficient as possible. Difficult or cumbersome self-monitoring materials can undermine the effectiveness of a self-management intervention.",
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
    id: 31022,
    topic: "Self-Monitoring",
    prompt: "A woman who had smoked heavily began recording behavior at an earlier point in the chain leading to smoking (reaching for cigarettes, removing one from the pack) rather than each cigarette smoked. This approach illustrates which self-monitoring principle?",
    options: [
      "Providing supplementary cues to self-monitor",
      "Reinforce accurate self-monitoring by matching data to an independent observer",
      "Use permanent product measurement whenever possible",
      "Self-recording a response early in the behavior chain leading to an undesired behavior may be more effective than recording the terminal behavior"
    ],
    correctIndex: 3,
    explanation: "The case reported by Rozensky (1974) illustrates that self-recording an early response in the behavior chain leading to an undesired behavior can be more effective than recording the terminal behavior. The woman stopped smoking within weeks of self-monitoring the early chain steps.",
  },
  {
    id: 31023,
    topic: "Self-Monitoring",
    prompt: "Countoons are self-monitoring forms designed for young children that:",
    options: [
      "Provide only a series of blank boxes for recording tallies of target behaviors",
      "Use cartoon-like frames to remind children of what behavior to record and what consequences follow if specified performance criteria are met",
      "Require children to submit data to a teacher at the end of every class period",
      "Are electronic devices that vibrate to cue self-monitoring at variable time intervals"
    ],
    correctIndex: 1,
    explanation: "Countoons use a series of cartoon-like frames to illustrate the self-monitoring contingency, reminding young children of what behaviors to record (both an inappropriate behavior and an incompatible appropriate behavior) and what consequence will follow if they meet the specified performance criteria.",
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
    id: 31025,
    topic: "Self-Monitoring",
    prompt: "The faded matching technique for improving children's self-monitoring accuracy involves:",
    options: [
      "Gradually increasing the difficulty of the behaviors children are asked to self-record",
      "Initially rewarding children for producing self-recorded data that match an independent observer's data, then gradually reducing the proportion of trials that are checked",
      "Having children record behavior in increasingly brief intervals until no recording is needed",
      "Replacing external observers with peer monitors over successive sessions"
    ],
    correctIndex: 1,
    explanation: "The faded matching technique rewards children initially for producing data that match the teacher's data. The proportion of self-ratings that are spot-checked is then gradually reduced (from 50% to 33% to 25% to 12% to 0%), while children continue to self-monitor accurately throughout the fading process.",
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
    id: 31027,
    topic: "Self-Evaluation",
    prompt: "In the Grossi and Heward (1998) study of restaurant trainees with developmental disabilities, the self-evaluation training produced which outcome for all four trainees?",
    options: [
      "No measurable change in work productivity for any of the four trainees",
      "Increased work productivity, with the majority of trials meeting or exceeding the competitive performance range",
      "Improvements in accuracy and quality of work but no change in productivity rate",
      "Productivity improved only for trainees who had already met competitive standards during baseline"
    ],
    correctIndex: 1,
    explanation: "The work productivity of all four trainees increased as a function of the self-evaluation intervention. For Chad, pot scrubbing increased from a baseline mean of 4.5 pots per 10 minutes to 11.7 pots, with 76% of self-evaluation trials at or above the competitive range.",
  },
  {
    id: 31028,
    topic: "Self-Administered Consequences",
    prompt: "Skinner (1953) argued that self-reinforcement should not be considered synonymous with the principle of operant reinforcement primarily because:",
    options: [
      "Self-reinforcement always involves aversive stimuli rather than positive ones",
      "The person retains the ability to access the reinforcer without emitting the target behavior, so variables must still be identified that account for why the person does not do so",
      "Self-reinforcement can only function as a punisher because it involves self-evaluation",
      "Operant reinforcement requires a minimum two-week delay between response and consequence"
    ],
    correctIndex: 1,
    explanation: "Skinner pointed out that in self-reinforcement the person can access the reinforcer at any moment without completing the task. The variables controlling why the person refrains from doing so must still be accounted for, making self-reinforcement something more than a straightforward application of the operant reinforcement principle.",
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
    id: 31030,
    topic: "Self-Administered Consequences",
    prompt: "A woman self-monitors her hair pulling and wears a rubber band on her wrist, snapping it contingent on each instance of hair pulling. This is an example of a self-management analog of:",
    options: [
      "Negative reinforcement",
      "Response cost",
      "Positive punishment",
      "An abolishing operation"
    ],
    correctIndex: 2,
    explanation: "Applying contingent painful stimulation (snapping a rubber band on the wrist) following each occurrence of an undesired behavior is an example of a self-management analog of positive punishment. The onset of an aversive event is made contingent on the behavior targeted for reduction.",
  },
  {
    id: 31031,
    topic: "Self-Administered Consequences",
    prompt: "A graduate student gives her roommate five $10 checks made out to a disliked charity. She gets one check back for each paper section completed by its due date; missed sections result in the roommate sending the check to the charity. This contingency is best described as an analog to:",
    options: [
      "Positive reinforcement, because completing sections results in receiving checks back",
      "Negative reinforcement, because completing sections prevents the loss of money to an aversive cause",
      "Extinction, because the checks are withheld until behavior meets criterion",
      "Positive punishment, because completing sections produces an aversive event"
    ],
    correctIndex: 1,
    explanation: "Completing each section of the paper allows the student to avoid the loss of $10 to a disliked charity. This is an analog to a negative reinforcement (avoidance) contingency: emitting the target behavior prevents an aversive outcome.",
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
    id: 31033,
    topic: "Self-Administered Consequences",
    prompt: "Kanfer (1976) used the term 'decisional self-control' to describe which type of self-management arrangement?",
    options: [
      "The person uses self-instructions to decide which behavior to emit in each situation",
      "The person selects both the target behavior and the performance criteria without any external input",
      "An external agent decides the goals but the person self-monitors and self-reinforces progress",
      "The person makes the initial decision to change behavior and plans how it will be accomplished but then turns implementation of consequences over to a second party"
    ],
    correctIndex: 3,
    explanation: "Kanfer's decisional self-control involves making the initial decision and plan for change but then having another person implement the consequences, avoiding the problem of failing to emit the controlling response consistently. This is distinguished from protracted self-control, in which the person consistently engages in self-deprivation.",
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
    id: 31037,
    topic: "Self-Instruction",
    prompt: "In the Bornstein and Quevillon (1976) self-instruction training study with hyperactive preschool boys, the sequence of training steps progressed from:",
    options: [
      "Experimenter modeling the task aloud, to child performing while experimenter instructs aloud, to child whispering, to lip movements only, to fully covert self-instruction",
      "The child using covert instructions immediately while the experimenter observed",
      "The child repeating the instructions aloud for all subsequent sessions",
      "The experimenter providing written instructions that the child read silently"
    ],
    correctIndex: 0,
    explanation: "The training sequence moved progressively from overt to covert: experimenter models aloud, child performs with experimenter instructing aloud, child performs with experimenter whispering, child performs while whispering with experimenter mouthing silently, child performs with lip movements only, then child performs with fully covert self-instruction.",
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
    id: 31040,
    topic: "Habit Reversal",
    prompt: "In the Mancuso and Miltenberger (2016) study applying habit reversal to public speaking, what was the overall result for the six participants?",
    options: [
      "No significant change in filled pauses during post-intervention speeches",
      "Improvement only on 'uh' and 'um' fillers, with no change in tongue clicking or interjecting 'like'",
      "Improvement during training sessions only, with a complete return to baseline at follow-up",
      "A reduction in filled pauses from a mean of 7.4 per minute during baseline to 1.4 per minute after training, maintained at follow-up"
    ],
    correctIndex: 3,
    explanation: "Following habit reversal training, the mean rate of filled pauses across participants dropped from 7.4 responses per minute during baseline to 1.4 per minute. Each participant maintained improved performance in a follow-up speech conducted 2 to 5 weeks after training.",
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
    id: 31046,
    topic: "Suggestions for Effective Self-Management Programs",
    prompt: "A self-management exchange, as described in the chapter, involves:",
    options: [
      "Exchanging self-management programs with a partner so each person implements the other's program",
      "Trading preferred activities between two people to increase the value of available reinforcers",
      "Two people, each with goals or tasks, who regularly interact to share self-monitoring data and exchange contingent praise, admonishments, or tangible consequences",
      "A formal contract signed by both parties and filed with a behavior change organization"
    ],
    correctIndex: 2,
    explanation: "A self-management exchange involves two people who each have long-range goals or regular tasks to complete. They agree to interact regularly (in person, by phone, text, e-mail, or social media) to share self-monitoring data and exchange verbal praise, admonishments, or tangible consequences contingent on performance.",
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
    id: 31048,
    topic: "Suggestions for Effective Self-Management Programs",
    prompt: "Malott (2012) called outcome measures such as pounds lost or improved lung capacity 'benefit measures.' In evaluating self-management programs, these benefit measures serve to:",
    options: [
      "Replace the need for direct measurement of the target behavior",
      "Assess the social validity of the program's results and may also serve as consequences that strengthen continued adherence to the program",
      "Determine whether the program meets insurance reimbursement requirements",
      "Verify the accuracy of the self-monitoring data collected by the participant"
    ],
    correctIndex: 1,
    explanation: "Benefit measures assess the social validity of self-management results by capturing whether measured changes in the target behavior actually make a difference in the person's life. Additionally, positive benefit measures may serve as consequences that reward and strengthen continued adherence to the self-management program.",
  },
  {
    id: 31049,
    topic: "Advantages of Self-Management",
    prompt: "When Hall, Delquadri, and Harris (1977) observed elementary classrooms and found low levels of active student responding, what did they surmise about the potential relationship between high rates of student responding and teacher behavior?",
    options: [
      "High rates of student responding always produce increases in teacher praise and positive attention",
      "Higher rates of academic productivity might actually be punishing to teachers because they result in more papers to grade",
      "Teachers preferred working in classrooms where students responded at low rates to reduce noise",
      "High student response rates decreased teacher accuracy in grading individual papers"
    ],
    correctIndex: 1,
    explanation: "Hall and colleagues surmised that higher rates of student responding might actually be punishing to teachers because generating more student responses in most classrooms results in the teacher having to grade more papers. This observation points to one advantage of students who can self-score their work, which saves teachers considerable time.",
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

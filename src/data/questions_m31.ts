import type { Question } from "../types";

/**
 * BCBA practice questions for Cooper et al., Chapter 28: Token Economy, Group Contingencies, and Contingency Contracting.
 * Grounded in the chapter text. Option order is shuffled at runtime, so
 * correctIndex placement here is arbitrary.
 */
export const QUESTIONS_M31: Question[] = [
  {
    id: 30001,
    topic: "Token Economy Defined",
    prompt: "Which of the following correctly identifies the three major components of a token economy?",
    options: [
      "A list of target behaviors, tokens earned for those behaviors, and a menu of backup reinforcers",
      "A list of rules, a schedule of punishment, and a menu of preferred activities",
      "A reinforcer assessment, a token exchange ratio, and a response cost procedure",
      "A list of target behaviors, a DRO schedule, and a level system"
    ],
    correctIndex: 0,
    explanation: "A token economy consists of: (a) a list of target behaviors, (b) tokens or points participants earn for emitting those behaviors, and (c) a menu of backup reinforcers that participants obtain by exchanging earned tokens.",
  },
  {
    id: 30002,
    topic: "Functions of Tokens",
    prompt: "Tokens function as generalized conditioned reinforcers primarily because they:",
    options: [
      "Are intrinsically valuable objects that participants want to collect",
      "Have been paired with a wide variety of backup reinforcers",
      "Are delivered on a fixed-ratio schedule without exception",
      "Require participants to be in a state of deprivation to be effective"
    ],
    correctIndex: 1,
    explanation: "Tokens are generalized conditioned reinforcers because they have been paired with a wide array of backup reinforcers, making them effective across different motivational states and settings.",
  },
  {
    id: 30005,
    topic: "Level Systems",
    prompt: "In a level system, what happens as participants advance from lower to higher levels?",
    options: [
      "The number of tokens required per behavior increases and backup reinforcers become less desirable",
      "The response cost contingency is removed and extinction is introduced",
      "Tokens are replaced with verbal praise exclusively, with no other changes",
      "Participants have access to more privileges and are expected to demonstrate more independence"
    ],
    correctIndex: 3,
    explanation: "As participants move up from one level to the next in a level system, they gain access to more privileges and are expected to demonstrate greater independence, while the token reinforcement schedule is gradually thinned.",
  },
  {
    id: 30007,
    topic: "Designing a Token Economy",
    prompt: "Which of the following is the correct sequence of the six basic steps in designing a token economy?",
    options: [
      "Select tokens, identify behaviors, develop backup reinforcers, field-test, establish exchange ratio, determine dispensing procedures",
      "Field-test the system, identify behaviors, select tokens, develop backup reinforcers, establish exchange ratio, determine dispensing procedures",
      "Develop backup reinforcers, establish exchange ratio, identify behaviors, select tokens, field-test, determine dispensing procedures",
      "Identify target behaviors, select tokens, develop backup reinforcers, establish exchange ratio, determine dispensing and exchange procedures, field-test"
    ],
    correctIndex: 3,
    explanation: "The six steps are: (1) identify target behaviors and rules, (2) select tokens, (3) develop a menu of backup reinforcers, (4) establish a token exchange ratio, (5) determine when and how tokens will be dispensed and exchanged, and (6) field-test the system before full-scale implementation.",
  },
  {
    id: 30009,
    topic: "Selecting Tokens",
    prompt: "A practitioner wants to use tally marks as tokens. To prevent learners from counterfeiting the tokens, the practitioner should:",
    options: [
      "Use a special card or marking pen available only to the analyst",
      "Allow learners to tally their own marks to promote self-management",
      "Switch immediately to physical objects such as poker chips",
      "Increase the price of backup reinforcers so that tally marks are harder to earn"
    ],
    correctIndex: 0,
    explanation: "To prevent counterfeiting when using tally marks, the marks should be placed on a special card or made with a special marking pen available only to the analyst, preventing learners from surreptitiously manufacturing their own tokens.",
  },
  {
    id: 30011,
    topic: "Backup Reinforcers",
    prompt: "Which of the following items should NOT be used as a backup reinforcer in a token economy?",
    options: [
      "Access to basic needs such as food, adequate heating, or medical care",
      "Favorite classroom jobs such as office messenger or teacher assistant",
      "Special school-wide privileges such as a library pass",
      "Computer games and leisure books during free time"
    ],
    correctIndex: 0,
    explanation: "Token reinforcement contingencies should not deny the learner basic needs (food, medical care) or items associated with basic rights (clean clothing, adequate heating). These should not be withheld as part of a token economy program.",
  },
  {
    id: 30013,
    topic: "Token Exchange Ratio",
    prompt: "When first implementing a token economy, the ratio between tokens earned and the price of backup items should be:",
    options: [
      "Set high so that learners must work for extended periods before earning a reward",
      "Identical for all learners regardless of individual differences",
      "Set low to provide immediate success for learners",
      "Changed every session to prevent satiation"
    ],
    correctIndex: 2,
    explanation: "Initially, the ratio between tokens earned and the price of backup items should be small (low) to provide immediate success for learners. Thereafter, the ratio of exchange should be adjusted to maintain the responsiveness of participants.",
  },
  {
    id: 30015,
    topic: "Specifying Token Requirements",
    prompt: "A learner says she does not want any tokens or backup items. What is the recommended practitioner response?",
    options: [
      "Argue with the learner to convince her that the tokens are valuable",
      "Immediately remove the learner from the token economy program",
      "Say something neutral such as 'That is your decision,' then walk away to avoid confrontation",
      "Increase the desirability of the backup reinforcers immediately to recapture the learner's interest"
    ],
    correctIndex: 2,
    explanation: "When a learner tests the system by claiming she does not want tokens, the recommended approach is to say something neutral and walk away, avoiding argument or debate and keeping the occasion set for future token delivery.",
  },
  {
    id: 30016,
    topic: "Response Cost in Token Economies",
    prompt: "When including a response cost contingency in a token economy, which rule should always be followed?",
    options: [
      "Token loss should be applied equally to all behaviors regardless of severity",
      "Token loss should never be applied if the learner does not have any tokens",
      "Learners should be allowed to go into debt to ensure the response cost has an effect",
      "The same token loss amount should be assigned to all rule infractions for consistency"
    ],
    correctIndex: 1,
    explanation: "Token loss should never be applied when a learner has no tokens. Students should not be allowed to go into debt, as doing so would likely decrease the reinforcement value of the tokens. A learner should always earn more tokens than she loses.",
  },
  {
    id: 30018,
    topic: "Field-Testing a Token Economy",
    prompt: "During the field-test phase of a token economy, what distinguishes it from full implementation?",
    options: [
      "Field-testing uses different backup reinforcers than those planned for the actual program",
      "Only the most challenging learners participate so that the system can be calibrated to their needs",
      "The field test involves teaching learners the rules without any observation of their behavior",
      "Token delivery is tallied exactly as if tokens were being earned, but no tokens are actually awarded"
    ],
    correctIndex: 3,
    explanation: "During the field test, token delivery is tallied exactly as if tokens were being earned, but no actual tokens are awarded. This allows the practitioner to assess whether the system is calibrated appropriately before full-scale implementation.",
  },
  {
    id: 30019,
    topic: "Training Staff",
    prompt: "A behavior analyst trains teachers using the model-lead-test (MLT) procedure. What should the analyst anticipate during initial training?",
    options: [
      "Trainees will perform perfectly immediately because the procedure is simple",
      "Trainees will require booster training, review sessions, or monitoring protocols because they are on a learning curve and will make mistakes",
      "Trainees will implement all steps correctly as long as a written checklist is provided",
      "Trainees will not require any follow-up once initial training is complete"
    ],
    correctIndex: 1,
    explanation: "The behavior analyst must recognize that during initial training, trainees are on a learning curve and will make mistakes. Booster training, review sessions, or monitoring protocols should be planned to ensure correct implementation when the trainee is working independently.",
  },
  {
    id: 30021,
    topic: "Withdrawing a Token Economy",
    prompt: "Which of the following is the first guideline for withdrawing a token economy effectively?",
    options: [
      "Immediately remove all tokens and backup reinforcers at once to prevent dependency",
      "Replace physical tokens with points tracked by the teacher only",
      "Remove luxury backup items first before removing necessary backup items",
      "Always pair token presentation with social approval and verbal praise to increase the reinforcing effect of praise"
    ],
    correctIndex: 3,
    explanation: "The first guideline for withdrawing a token economy is that token presentation should always be paired with social approval and verbal praise. This increases the reinforcing effect of social approval and helps maintain behaviors after token withdrawal.",
  },
  {
    id: 30023,
    topic: "Evaluating a Token Economy",
    prompt: "Why is it important to analyze individual data rather than only group aggregate data when evaluating a token economy?",
    options: [
      "Group data are unreliable and should never be used in applied settings",
      "Regulations require individual data reporting for all behavior change programs",
      "Individual data collection requires less time than group data collection",
      "Individual differences in performance may be masked by overall group averages, and some individuals may respond differently than the group trend suggests"
    ],
    correctIndex: 3,
    explanation: "Individual data should always be analyzed because, despite aggregate group data demonstrating effectiveness, individual data may not be as robust. The Jowett Hirst et al. study showed that many students performed better under response cost, a finding that would have been masked by overall group averages.",
  },
  {
    id: 30024,
    topic: "Further Considerations: Token Economy",
    prompt: "Which of the following is identified as a challenge or limitation of token economies?",
    options: [
      "Token economies have no research support in educational settings",
      "Token systems can be intrusive, requiring time, energy, and resources, and natural environments typically do not reinforce behavior with tokens",
      "Token economies cannot be combined with other behavior change procedures",
      "Token economies are ineffective for learners with severe disabilities"
    ],
    correctIndex: 1,
    explanation: "Token economies can be intrusive because they require time, energy, and resources. Additionally, most natural environments do not reinforce behavior with tokens, making schedule thinning while maintaining performance an important consideration.",
  },
  {
    id: 30026,
    topic: "Group Contingency Defined",
    prompt: "In a group contingency, a common consequence is contingent on:",
    options: [
      "Only the behavior of the highest-performing member of the group",
      "The average performance of all group members over the previous month",
      "The behavior of one member, part of the group, or the behavior of everyone in the group",
      "A randomly selected reinforcer chosen by the practitioner at the start of each session"
    ],
    correctIndex: 2,
    explanation: "In a group contingency, a common consequence is contingent on the behavior of one member of the group, the behavior of part of the group, or the behavior of everyone in the group. Group contingencies can be classified as dependent, independent, or interdependent.",
  },
  {
    id: 30027,
    topic: "Rationale for Group Contingencies",
    prompt: "Which of the following is an advantage of using a group contingency rather than individual contingencies?",
    options: [
      "Group contingencies always produce higher individual performance than individual contingencies",
      "Administering one consequence to all group members can save time and reduce the practitioner's workload",
      "Group contingencies eliminate the need to collect any behavioral data",
      "Group contingencies avoid all risk of negative peer interactions"
    ],
    correctIndex: 1,
    explanation: "One advantage of a group contingency is efficiency: instead of repeatedly administering individual consequences to each group member, the practitioner can apply one consequence to all members, saving time and potentially reducing workload.",
  },
  {
    id: 30029,
    topic: "Independent Group Contingencies",
    prompt: "In an independent group contingency, who receives the reinforcer?",
    options: [
      "Only the student who earns the highest score in the group",
      "Only those group members who individually meet the criterion outlined in the contingency",
      "The group as a whole, only when every member meets the criterion",
      "All members of the group, regardless of individual performance"
    ],
    correctIndex: 1,
    explanation: "In an independent group contingency, a contingency is presented to all members of a group, but reinforcement is delivered only to those group members who individually meet the criterion outlined in the contingency.",
  },
  {
    id: 30030,
    topic: "Dependent Group Contingencies",
    prompt: "Under a dependent group contingency, the reward for the whole group is contingent on:",
    options: [
      "The performance of one individual or a small group within the total group",
      "Each member of the group independently meeting the performance criterion",
      "The group as a whole achieving a mean score above a preset level",
      "A randomly selected behavior that changes each session"
    ],
    correctIndex: 0,
    explanation: "Under a dependent group contingency, the reward for the whole group depends on the performance of an individual student or small group. If the individual performs below criterion, the reward is not delivered to anyone.",
  },
  {
    id: 30032,
    topic: "Interdependent Group Contingencies",
    prompt: "An interdependent group contingency is best described as an 'all or none' arrangement because:",
    options: [
      "Only the lowest-performing student determines whether the group earns the reward",
      "All students earn the reward or none of them do, with reinforcement contingent on all members meeting the criterion",
      "Each student earns individual reinforcers but must share them with the group",
      "The practitioner selects at random whether the group or individual receives reinforcement"
    ],
    correctIndex: 1,
    explanation: "An interdependent group contingency requires all members to meet the criterion (individually and as a group) before any member earns the reward. This means all students earn the reward or none of them do.",
  },
  {
    id: 30034,
    topic: "Good Behavior Game",
    prompt: "In the original Good Behavior Game, how did a team win the game?",
    options: [
      "By having the most marks recorded by the teacher during the session",
      "By collectively completing the most academic work during the session",
      "By having every member earn a predetermined number of individual tokens",
      "By having the fewest marks against it at the end of the game, or by having fewer than a specified number of marks"
    ],
    correctIndex: 3,
    explanation: "In the Good Behavior Game, the team with the fewest marks against it wins the reward. Both teams can also win if each has fewer than a specified number of marks, incorporating a differential reinforcement of low rates (DRL) schedule element.",
  },
  {
    id: 30035,
    topic: "Good Student Game",
    prompt: "The Good Student Game differs from the Good Behavior Game in that the Good Student Game:",
    options: [
      "Combines an interdependent group contingency with a self-monitoring component in which students record rule-following behavior",
      "Can only be used with elementary-aged students, not high school students",
      "Requires teacher monitoring and recording of behavior rather than student self-monitoring",
      "Is based on independent rather than interdependent reinforcement arrangements"
    ],
    correctIndex: 0,
    explanation: "The Good Student Game combines an interdependent group contingency with a self-monitoring twist. Unlike the GBG (where the teacher monitors and records rule-breaking), in the Good Student Game students self-monitor and record their own or their group's rule-following behavior on a variable-interval schedule.",
  },
  {
    id: 30036,
    topic: "Setting Performance Criteria for Group Contingencies",
    prompt: "In an average-performance group contingency, reinforcement is contingent on:",
    options: [
      "The highest-performing student's score serving as the standard for all group members",
      "The lowest-performing student's score determining the level needed to receive the reward",
      "The mean performance of the group being achieved; achieving the mean score or higher earns the reward",
      "Each student achieving a fixed absolute criterion unrelated to group performance"
    ],
    correctIndex: 2,
    explanation: "In an average-performance group contingency, the mean performance of the group is averaged and reinforcement is contingent on achieving that mean score or higher. High- and low-performance contingencies use the high score and low score, respectively, as the standard.",
  },
  {
    id: 30038,
    topic: "Selecting the Appropriate Group Contingency",
    prompt: "A practitioner wants to improve the behavior of one student who has recently been integrated into a general education classroom, with the whole class benefiting from the student's improvement. Which type of group contingency is most appropriate?",
    options: [
      "Independent group contingency",
      "Average-performance group contingency",
      "Interdependent group contingency",
      "Dependent group contingency"
    ],
    correctIndex: 3,
    explanation: "When the goal is to improve the behavior of one person or a small group, a dependent group contingency is most appropriate. The whole group's reward depends on that individual's performance, facilitating positive attention and encouragement from peers.",
  },
  {
    id: 30041,
    topic: "Contingency Contract Components",
    prompt: "Which two components are required in ALL contingency contracts?",
    options: [
      "A task record and a bonus contingency",
      "A list of rules and a list of consequences for rule violations",
      "A description of the task and a description of the reward",
      "A signature block and a timeline for renegotiation"
    ],
    correctIndex: 2,
    explanation: "All contingency contracts require two components: a task description and a reward description. A task record is an optional third element that helps track completion and provide interim reinforcement.",
  },
  {
    id: 30044,
    topic: "How Contracts Work",
    prompt: "Although contingency contracts appear to involve simple positive reinforcement, they are more accurately described as:",
    options: [
      "A punishment-based procedure because the reward is often delayed beyond a useful interval",
      "An extinction procedure because the natural reinforcers for the task are withheld",
      "A form of negative reinforcement because completing the task removes aversive monitoring",
      "An intervention package that combines several behavior principles and procedures, likely including rule-governed behavior"
    ],
    correctIndex: 3,
    explanation: "Contingency contracting is more accurately conceptualized as an intervention package that combines several behavior principles and procedures. Rule-governed behavior is likely involved, as the contract describes a rule specifying that a behavior will be followed by a specified consequence.",
  },
  {
    id: 30045,
    topic: "Self-Contracts",
    prompt: "A self-contract differs from a standard contingency contract in that a self-contract involves:",
    options: [
      "A behavior analyst determining the task while the client selects the reward",
      "No written document because the individual keeps a verbal record",
      "A third party such as a teacher or parent countersigning the contract to make it official",
      "The person making the contract with herself, selecting her own task and reward, monitoring her own completion, and delivering her own reward"
    ],
    correctIndex: 3,
    explanation: "A self-contract is a contingency contract that a person makes with herself, incorporating a self-selected task and reward as well as personal monitoring of task completion and self-delivery of the reward. Self-contracting skills can be developed by gradually shifting decision-making from the adult to the child.",
  },
  {
    id: 30046,
    topic: "Contracting with Nonreaders",
    prompt: "A contingency contract for a nonreader should specify tasks and rewards using:",
    options: [
      "Simplified written text at a kindergarten reading level",
      "Verbal agreements only, since nonreaders cannot benefit from written contracts",
      "Nonprint elements such as symbols, pictures, photos, and audio recordings",
      "A token economy in lieu of a contract, because contracting requires literacy"
    ],
    correctIndex: 2,
    explanation: "Contracts for nonreaders specify tasks and rewards with nonprint elements such as symbols, pictures, photos, and audio recordings chosen to suit the individual skills and preferences of nonreaders. Reading ability is not a prerequisite for contracting; the individual must only come under the control of the visual or oral statements of the contract.",
  },
  {
    id: 30047,
    topic: "Contracting with Nonsigners",
    prompt: "If a child refuses to enter into a contingency contract, which of the following is a recommended strategy?",
    options: [
      "Force the child to sign the contract to establish that the adult is in charge",
      "Withhold all reinforcers until the child agrees to sign the contract",
      "Abandon contracting entirely and rely on a token economy instead",
      "Use modeling, where a sibling or parent demonstrates successful contracting so the nonsigner can observe it working"
    ],
    correctIndex: 3,
    explanation: "When a child refuses to sign a contract, coercion is contrary to behavioral contracting. Recommended strategies include shaping and ignoring anti-contracting behavior, modeling (having a sibling or parent use a contract successfully), offering a parent contract in which the child controls the reward, or allowing a self-contract.",
  },
  {
    id: 30048,
    topic: "Guidelines for Contingency Contracts",
    prompt: "A contingency contract should be renegotiated when:",
    options: [
      "Either party is consistently unhappy with the current contract terms",
      "The learner successfully completes the task every day for one week",
      "The behavior analyst decides to switch to a token economy",
      "The contract has been in effect for exactly 30 days"
    ],
    correctIndex: 0,
    explanation: "A contingency contract should be renegotiated and changed when either party is consistently unhappy with it. Contracting is designed to be a positive experience for all parties, not a tedious endurance contest to determine survivors.",
  },
  {
    id: 30049,
    topic: "Evaluating Contingency Contracts",
    prompt: "A student studies algebra for 1 hour each school night as specified in a contract, but his algebra grades do not improve. What does this outcome indicate about the contract?",
    options: [
      "The contract was successful because the student completed the specified task consistently",
      "The contract should be terminated because contracts are ineffective for academic goals",
      "The reward was not powerful enough to maintain the student's studying behavior",
      "The student specified the wrong behavior; studying for 1 hour was not directly related to the goal of earning better grades"
    ],
    correctIndex: 3,
    explanation: "The student specified the wrong behavior in the task component. Studying for 1 hour was not directly related to earning better grades. Changing the contract to require solving a specific number of algebra equations correctly would better target the behavior needed to achieve the stated goal.",
  },
];

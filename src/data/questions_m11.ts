import type { Question } from "../types";

/**
 * BCBA practice questions for Cooper et al., Chapter 8: Reversal and Multielement Designs.
 * Grounded in the chapter text. Option order is shuffled at runtime, so
 * correctIndex placement here is arbitrary.
 */
export const QUESTIONS_M11: Question[] = [
  {
    id: 10001,
    topic: "Reversal Design",
    prompt: "The A-B-A-B design is described as the most straightforward and generally most powerful within-subject design for demonstrating which of the following?",
    options: [
      "Social validity of treatment outcomes",
      "A functional relation between an environmental manipulation and a behavior",
      "Generalization of treatment effects across settings",
      "The durability of behavior change after treatment ends"
    ],
    correctIndex: 1,
    explanation: "The A-B-A-B reversal design is identified as the most straightforward and generally most powerful within-subject design for demonstrating a functional relation between an environmental manipulation and a behavior.",
  },
  {
    id: 10002,
    topic: "Operation and Logic of the Reversal Design",
    prompt: "In an A-B-A-B reversal design, which phase provides verification of the prediction made from Baseline 1?",
    options: [
      "Treatment 1",
      "Treatment 2",
      "Baseline 2",
      "Any probe session inserted between phases"
    ],
    correctIndex: 2,
    explanation: "Baseline 2 data verify the prediction made from Baseline 1. If responding in Baseline 2 parallels the measures from Baseline 1, the data show that behavior would have remained at baseline levels had the intervention never been introduced.",
  },
  {
    id: 10003,
    topic: "Operation and Logic of the Reversal Design",
    prompt: "In baseline logic as applied to the A-B-A-B design, replication of the experimental effect is demonstrated when which event occurs?",
    options: [
      "Baseline 1 data are stable before treatment begins",
      "Behavior deteriorates during Baseline 2",
      "Treatment 2 reproduces the behavior change observed during Treatment 1",
      "The behavior analyst maintains procedural fidelity throughout the study"
    ],
    correctIndex: 2,
    explanation: "Replication of effect is achieved when reintroduction of the independent variable in Treatment 2 reproduces the behavior change observed during Treatment 1, thereby demonstrating a functional relation.",
  },
  {
    id: 10004,
    topic: "Variations of the A-B-A-B Design",
    prompt: "When an A-B-A-B design is extended to an A-B-A-B-A-B sequence, each additional presentation and withdrawal that reproduces the previously observed effects on behavior does which of the following?",
    options: [
      "Increases the likelihood that behavior changes result from manipulating the independent variable",
      "Eliminates all threats to internal validity",
      "Removes the need for a stable baseline in subsequent phases",
      "Guarantees that sequence effects cannot confound the results"
    ],
    correctIndex: 0,
    explanation: "Each additional presentation and withdrawal in a repeated reversals design increases the likelihood that the observed behavior changes result from manipulating the independent variable, producing a more convincing demonstration of a functional relation.",
  },
  {
    id: 10005,
    topic: "Variations of the A-B-A-B Design",
    prompt: "A behavior analyst begins an experiment with the treatment already in effect and later withdraws it. If the behavior worsens during withdrawal, the treatment is reintroduced. This sequence describes which design?",
    options: [
      "A-B-A design",
      "A-B-A-B design",
      "B-A-B design",
      "Multiple treatment reversal design"
    ],
    correctIndex: 2,
    explanation: "The B-A-B design begins with treatment (B), withdraws it (A), and then reintroduces treatment (B). It is used when an initial baseline phase is inappropriate or impossible for ethical or practical reasons.",
  },
  {
    id: 10006,
    topic: "Variations of the A-B-A-B Design",
    prompt: "Compared with an A-B-A design, the B-A-B design is considered weaker for demonstrating a functional relation primarily because it does not do which of the following?",
    options: [
      "End with the treatment condition in place",
      "Permit assessment of the independent variable's effect on the preintervention level of responding",
      "Allow for replication of treatment effects",
      "Reduce the risk of maturation as a confound"
    ],
    correctIndex: 1,
    explanation: "The B-A-B design is the weaker of the two because it does not enable an assessment of the effects of the independent variable on the preintervention level of responding. The nonintervention (A) condition cannot verify a prediction from a baseline that never existed.",
  },
  {
    id: 10007,
    topic: "Variations of the A-B-A-B Design",
    prompt: "Sequence effects in a multiple treatment reversal design refer to which of the following?",
    options: [
      "The order in which data points are recorded within a single session",
      "Effects on a subject's behavior in a given condition that are influenced by the subject's experience with a prior condition",
      "The gradual improvement in behavior due to repeated practice opportunities",
      "Confounding caused by maturation over the course of the study"
    ],
    correctIndex: 1,
    explanation: "Sequence effects are the effects on a subject's behavior in a given condition that are influenced by the subject's experience with a prior condition. Multiple treatment reversal designs are particularly vulnerable to this confound.",
  },
  {
    id: 10008,
    topic: "Noncontingent Reinforcement (NCR) Reversal Technique",
    prompt: "The noncontingent reinforcement (NCR) reversal technique is used as a control condition primarily to demonstrate which of the following?",
    options: [
      "That the reinforcer has lost its value due to satiation",
      "That behavior change is the result of contingent reinforcement, not merely contact with the stimulus event",
      "That the independent variable can be successfully withdrawn without ethical concerns",
      "That generalization has occurred across settings"
    ],
    correctIndex: 1,
    explanation: "The NCR reversal technique is used to show that behavior change results from contingent reinforcement, not simply from the presentation of or contact with the stimulus event. If improvements are lost when equal amounts of the consequence are delivered independent of the target behavior, a functional relation between the contingency and behavior change may be demonstrated.",
  },
  {
    id: 10009,
    topic: "Noncontingent Reinforcement (NCR) Reversal Technique",
    prompt: "A potential weakness of the NCR control procedure is that when high rates of the desired behavior have been produced during the preceding contingent reinforcement phase, NCR delivered on a time schedule may accidentally follow occurrences of the target behavior and thereby function as which of the following?",
    options: [
      "A conditioned punisher",
      "A generalized conditioned reinforcer",
      "Adventitious (accidental) reinforcement",
      "A discriminative stimulus for extinction"
    ],
    correctIndex: 2,
    explanation: "When NCR is delivered on a predetermined time schedule after a period of high responding, some deliveries will closely follow target behavior in time and may function as adventitious, or accidental, reinforcement, possibly creating an inadvertent intermittent schedule.",
  },
  {
    id: 10010,
    topic: "DRO Reversal Technique",
    prompt: "In a DRO reversal technique used as a control condition, the event suspected of functioning as reinforcement is delivered immediately following which of the following?",
    options: [
      "Any occurrence of the target behavior",
      "The target behavior on a fixed ratio schedule",
      "Any behavior other than the target behavior",
      "Behavior that is incompatible with the target behavior only"
    ],
    correctIndex: 2,
    explanation: "In the DRO reversal technique, the event suspected of functioning as reinforcement is delivered immediately following the emission of any behavior other than the target behavior, ensuring that reinforcement will not immediately follow the target response.",
  },
  {
    id: 10011,
    topic: "DRI/DRA Reversal Technique",
    prompt: "During the control condition in a DRI/DRA reversal technique, the consequence previously used for the target behavior is delivered contingent on behavior that is incompatible with or an alternative to the target behavior. This procedure demonstrates which of the following?",
    options: [
      "That the reinforcer is no longer effective",
      "That it is not just the delivery of the consequence but its contingent application to the specific behavior that produces the observed change",
      "That the dependent variable is irreversible",
      "That the participant has discriminated between baseline and treatment conditions"
    ],
    correctIndex: 1,
    explanation: "The DRI/DRA control condition shows that it is not merely the delivery of teacher attention or praise that produces the behavior change; the consequence must be delivered contingent on the specific target behavior. If the change is lost when the same consequence is made contingent on a different behavior, the contingency, not just the stimulus, is responsible.",
  },
  {
    id: 10012,
    topic: "Considering the Appropriateness of the Reversal Design",
    prompt: "A behavior analyst wants to evaluate the effects of a teacher in-service training workshop on classroom praise delivery. Why would a reversal design be inappropriate for this study?",
    options: [
      "The training workshop would be too expensive to replicate",
      "Attending the workshop is a behavior that cannot be operationally defined",
      "The independent variable, once presented, cannot be withdrawn because the exposure cannot be removed",
      "Training workshops do not qualify as independent variables in single-case research"
    ],
    correctIndex: 2,
    explanation: "A reversal design is inappropriate when the independent variable cannot be withdrawn once presented. Attending a training workshop and observing a model are irreversible events; the knowledge and experience gained cannot simply be removed from participants.",
  },
  {
    id: 10013,
    topic: "Considering the Appropriateness of the Reversal Design",
    prompt: "Behavioral irreversibility means which of the following?",
    options: [
      "The behavior can only be increased, never decreased, by an intervention",
      "A level of behavior observed in an earlier phase cannot be reproduced even though the experimental conditions are the same as they were during the earlier phase",
      "The independent variable has a permanent effect on the nervous system",
      "Baseline data cannot be collected before treatment begins"
    ],
    correctIndex: 1,
    explanation: "Behavioral irreversibility, as defined by Sidman (1960), means that a level of behavior observed in an earlier phase cannot be reproduced even though the experimental conditions are the same as they were during that earlier phase. This prevents effective use of the reversal design.",
  },
  {
    id: 10014,
    topic: "Considering the Appropriateness of the Reversal Design",
    prompt: "When a child's social behavior improves during teacher-delivered reinforcement and remains high even after that reinforcement is removed because classmates now interact with the child, this is an example of which phenomenon affecting reversal design validity?",
    options: [
      "Sequence effects",
      "Multiple treatment interference",
      "Behavioral irreversibility maintained by natural communities of reinforcement",
      "Carryover effects from counterbalancing"
    ],
    correctIndex: 2,
    explanation: "This illustrates behavioral irreversibility maintained by natural communities of reinforcement. The classmates talking to and playing with the child function as a source of reinforcement uncontrolled by the experimenter, keeping behavior elevated after the planned intervention is withdrawn.",
  },
  {
    id: 10015,
    topic: "Considering the Appropriateness of the Reversal Design",
    prompt: "An ethical concern with using a reversal design arises most directly when the target behavior is which of the following?",
    options: [
      "A low-frequency behavior that occurs infrequently across sessions",
      "A self-injurious or dangerous behavior, because withdrawing treatment even briefly may be harmful",
      "An academic skill that is unlikely to generalize across settings",
      "A behavior that is already at a high rate before the intervention begins"
    ],
    correctIndex: 1,
    explanation: "A serious ethical concern arises when a reversal design is considered for evaluating a treatment for self-injurious or dangerous behaviors. Withdrawing an effective intervention, even for one session, could result in harm to the participant.",
  },
  {
    id: 10016,
    topic: "Considering the Appropriateness of the Reversal Design",
    prompt: "Which of the following strategies can be used when the behavior worsens rapidly upon treatment withdrawal, allowing a brief demonstration of experimental control without a prolonged reversal phase?",
    options: [
      "Combining the baseline and treatment conditions within the same session",
      "Using a single-session return-to-baseline probe",
      "Switching to a changing criterion design",
      "Extending the final treatment phase to compensate"
    ],
    correctIndex: 1,
    explanation: "With mild self-injurious or aggressive behaviors, a single-session return-to-baseline probe can sometimes provide sufficient empirical evidence to reveal a functional relation without exposing the participant to an extended period of no treatment.",
  },
  {
    id: 10017,
    topic: "Considering the Appropriateness of the Reversal Design",
    prompt: "Social concerns about using a reversal design arise primarily because which of the following may occur?",
    options: [
      "Administrators, teachers, parents, or participants may object to withdrawing an intervention they associate with desirable behavior change",
      "The data paths produced by the design are difficult to interpret visually",
      "Reversal designs require specialized measurement equipment not available in applied settings",
      "The design cannot be used with participants who have developmental disabilities"
    ],
    correctIndex: 0,
    explanation: "Social concerns arise because the people involved, such as administrators, teachers, parents, and participants, may object to the withdrawal of an intervention they associate with desirable behavior change. Without their cooperation, the procedural integrity of the experiment could be compromised.",
  },
  {
    id: 10018,
    topic: "Considering the Appropriateness of the Reversal Design",
    prompt: "Educational or clinical concerns about the reversal design are often raised in terms of which of the following?",
    options: [
      "Instructional time lost during reversal phases and the possibility that behavioral improvements may not be recaptured when treatment resumes",
      "The cost of training additional observers to maintain reliability",
      "The requirement that social validity measures be collected in every phase",
      "Difficulty in operationally defining the independent variable during baseline"
    ],
    correctIndex: 0,
    explanation: "Educational or clinical concerns focus on instructional time lost during reversal phases and the possibility that behavioral improvements observed during intervention may not be recaptured when treatment is resumed after a return to baseline conditions.",
  },
  {
    id: 10019,
    topic: "Multiple Treatment Reversal Designs",
    prompt: "In a multiple treatment reversal design, the letters A, B, C, D, and so on are used to denote different conditions. Which of the following best describes what such a design accomplishes?",
    options: [
      "It compares the effects of two or more experimental conditions to baseline and/or to one another using reversal logic",
      "It replicates findings across multiple participants simultaneously",
      "It uses changing criterion logic to shape behavior in successive steps",
      "It eliminates the need for baseline data collection before treatment"
    ],
    correctIndex: 0,
    explanation: "Multiple treatment reversal designs use the reversal tactic to compare the effects of two or more experimental conditions to baseline and/or to one another, with each condition following the logic of prediction, verification, and replication.",
  },
  {
    id: 10020,
    topic: "Multiple Treatment Reversal Designs",
    prompt: "To reduce the threat of sequence effects when comparing two treatments in a reversal design, which of the following design sequences is most appropriate?",
    options: [
      "A-B-C-B-C",
      "A-B-A-C-A-C",
      "B-C-B-C",
      "A-B-B-C-C-A"
    ],
    correctIndex: 1,
    explanation: "Recapturing the original baseline levels of responding before introducing each new treatment condition, as in an A-B-A-C-A-C sequence, reduces the threat of sequence effects or helps expose them for what they are.",
  },
  {
    id: 10021,
    topic: "Multielement Design",
    prompt: "The multielement design is also commonly referred to by which other name?",
    options: [
      "Changing criterion design",
      "Multiple baseline design",
      "Alternating treatments design",
      "Withdrawal design"
    ],
    correctIndex: 2,
    explanation: "The multielement design is also called the alternating treatments design. Barlow and Hayes (1979) introduced the term 'alternating treatments design' to describe this approach.",
  },
  {
    id: 10022,
    topic: "Operation and Logic of the Multielement Design",
    prompt: "Unlike the reversal design, in which experimental manipulations are made after steady state responding is achieved, the multielement design alternates different interventions in what manner?",
    options: [
      "Only after the participant has mastered the first treatment condition",
      "Independent of the level of responding",
      "Based on the phase criterion set by the research team",
      "After a minimum of 10 data points has been collected in each condition"
    ],
    correctIndex: 1,
    explanation: "In the multielement design, the different interventions are manipulated independent of the level of responding, in contrast to the reversal design, which waits for steady state responding before making experimental manipulations.",
  },
  {
    id: 10023,
    topic: "Operation and Logic of the Multielement Design",
    prompt: "To help a participant discriminate which treatment condition is currently in effect in a multielement design, researchers often do which of the following?",
    options: [
      "Deliver the same prompt sequence regardless of the condition in effect",
      "Associate a distinct stimulus (such as a sign, verbal instructions, or different-colored worksheets) with each treatment",
      "Reduce the number of sessions per week to prevent confusion",
      "Keep the physical setting identical across all conditions to control extraneous variables"
    ],
    correctIndex: 1,
    explanation: "To aid the participant in discriminating which treatment condition is in effect, a distinct stimulus such as a sign, verbal instructions, or different-colored worksheets is often associated with each treatment in a multielement design.",
  },
  {
    id: 10024,
    topic: "Operation and Logic of the Multielement Design",
    prompt: "In a multielement design, experimental control is demonstrated when which of the following is observed?",
    options: [
      "Baseline data remain stable across the entire study",
      "The data paths for two different treatments show little or no overlap",
      "The participant reaches mastery criterion in the final phase",
      "Treatment effects replicate across three or more separate experimenters"
    ],
    correctIndex: 1,
    explanation: "Experimental control in a multielement design is demonstrated when the data paths for two different treatments show little or no overlap, providing objective, believable evidence that different levels of responding are predictably and reliably produced by the presence of the different treatments.",
  },
  {
    id: 10025,
    topic: "Operation and Logic of the Multielement Design",
    prompt: "In a multielement design, each successive data point for a specific treatment simultaneously serves which three functions?",
    options: [
      "Stabilization, replication, and generalization",
      "Prediction of future responding, verification of previous predictions, and replication of previous effects",
      "Baseline control, treatment comparison, and social validity",
      "Randomization, counterbalancing, and blinding"
    ],
    correctIndex: 1,
    explanation: "In the multielement design, each successive data point for a specific treatment plays all three roles of baseline logic: it provides a basis for predicting future levels of responding, offers potential verification of the previous prediction, and represents an opportunity for replication of previous effects produced by that treatment.",
  },
  {
    id: 10026,
    topic: "Operation and Logic of the Multielement Design",
    prompt: "The extent of differential effects produced by two treatments in a multielement design is quantified by which of the following?",
    options: [
      "The number of data points collected across all conditions",
      "The vertical distance (fractionation) between the respective data paths on the graph",
      "The statistical p-value computed from parametric analysis",
      "The horizontal distance between the first and last sessions of each treatment"
    ],
    correctIndex: 1,
    explanation: "The extent of differential effects produced by two treatments is determined by the vertical distance (fractionation) between their respective data paths and quantified by the vertical axis scale. The greater the vertical distance, the greater the differential effects.",
  },
  {
    id: 10027,
    topic: "Operation and Logic of the Multielement Design",
    prompt: "Counterbalancing the days of the week, times of day, and sequence of treatments in a multielement design is done primarily to accomplish which of the following?",
    options: [
      "Increase the number of data points collected per condition",
      "Reduce the probability that observed differences are due to variables other than the treatments themselves",
      "Allow the participant to choose their preferred treatment sooner",
      "Satisfy institutional review board requirements for randomization"
    ],
    correctIndex: 1,
    explanation: "Counterbalancing the days of the week, times of day, sequence in which treatments occur, and persons delivering treatments reduces the probability that any observed differences in behavior are the result of variables other than the treatments themselves.",
  },
  {
    id: 10028,
    topic: "Variations of the Multielement Design",
    prompt: "The single-phase multielement design is the primary experimental tool used in which common behavior-analytic assessment?",
    options: [
      "Preference assessments using paired-stimulus methodology",
      "Functional analyses of problem behavior",
      "Curriculum-based measurement of academic skills",
      "Social validity interviews with caregivers"
    ],
    correctIndex: 1,
    explanation: "The single-phase multielement design is the primary experimental tool for conducting functional analyses of problem behavior, rapidly comparing the differential effects of conditions such as attention, escape, and alone to identify behavioral function.",
  },
  {
    id: 10029,
    topic: "Variations of the Multielement Design",
    prompt: "In the two-phase multielement design (baseline and comparison), the measures obtained during the no-treatment condition interspersed within the alternating treatments phase should not be treated as which of the following?",
    options: [
      "A comparison point against which treatment effects can be evaluated",
      "A demonstration that the design controls for time-of-day effects",
      "A representative preintervention baseline level of responding",
      "Evidence that the participant discriminates between conditions"
    ],
    correctIndex: 2,
    explanation: "Measures obtained during the no-treatment control condition in an ongoing multielement design should not be considered representative of the unknown preintervention baseline level of responding; they may reflect only the level of behavior under no-treatment conditions when interspersed within ongoing treatment conditions.",
  },
  {
    id: 10030,
    topic: "Variations of the Multielement Design",
    prompt: "In the three-phase multielement design consisting of baseline, comparison, and best treatment only, the purpose of the final phase is to do which of the following?",
    options: [
      "Compare additional untested treatments to the most effective one found during comparison",
      "Administer only the treatment that proved most effective during the alternating treatments phase",
      "Return to baseline conditions to verify the functional relation",
      "Allow the participant to choose which treatment they prefer going forward"
    ],
    correctIndex: 1,
    explanation: "In the three-phase design with a best-treatment-only final phase, the last phase involves administering only the most effective treatment identified during the alternating treatments comparison phase.",
  },
  {
    id: 10031,
    topic: "Variations of the Multielement Design",
    prompt: "In the three-phase multielement design that ends with a participant's choice phase, the final phase differs from the best-treatment-only variation in which key way?",
    options: [
      "The final phase uses a changing criterion rather than a fixed treatment procedure",
      "Only the treatment selected by each participant is implemented in the final phase, rather than the objectively most effective one",
      "A second baseline is collected after the choice phase to verify the functional relation",
      "The participant receives a different treatment each session regardless of preference"
    ],
    correctIndex: 1,
    explanation: "In the participant's choice variation, the final phase implements only the treatment selected by each participant, whereas the best-treatment-only variation implements the treatment that was empirically most effective during the comparison phase.",
  },
  {
    id: 10032,
    topic: "Variations of the Multielement Design",
    prompt: "A concurrent chains (schedule) design is one in which participants do which of the following?",
    options: [
      "Experience all treatments sequentially over multiple weeks",
      "Choose between two or more concurrently available treatments by responding to stimuli linked to different treatment procedures",
      "Receive treatments delivered simultaneously by two different therapists in the same session",
      "Alternate between baseline and a single treatment in a predetermined schedule"
    ],
    correctIndex: 1,
    explanation: "In a concurrent chains design, participants choose between two or more concurrently available treatments. Each option is associated with a distinctive discriminative stimulus and leads to a different set of treatment procedures, allowing assessment of treatment preference.",
  },
  {
    id: 10033,
    topic: "Variations of the Multielement Design",
    prompt: "The adapted alternating treatments design is specifically designed to compare the efficiency of two instructional procedures by doing which of the following?",
    options: [
      "Alternating the same set of instructional items across both conditions within a single session",
      "Applying each teaching method to different but equivalent sets of instructional items",
      "Having the participant choose which set of items to practice under each condition",
      "Using a changing criterion for each treatment to assess which produces more rapid acquisition"
    ],
    correctIndex: 1,
    explanation: "In the adapted alternating treatments design, each of two (or more) teaching methods is applied to a different but equivalent set of instructional items. A baseline demonstrating equivalence of performance on the two sets precedes the experimental comparison.",
  },
  {
    id: 10034,
    topic: "Advantages of the Multielement Design",
    prompt: "A major advantage of the multielement design over the reversal design is that it does not require the investigator to do which of the following?",
    options: [
      "Collect baseline data before beginning treatment",
      "Withdraw a seemingly effective treatment to demonstrate a functional relation",
      "Use visual analysis to evaluate differences between data paths",
      "Counterbalance the sequence of treatment conditions"
    ],
    correctIndex: 1,
    explanation: "A major advantage of the alternating treatments design is that it does not require the investigator to withdraw a seemingly effective treatment to demonstrate a functional relation, thereby avoiding the ethical and social concerns associated with treatment withdrawal.",
  },
  {
    id: 10035,
    topic: "Advantages of the Multielement Design",
    prompt: "The multielement design is considered the basic experimental tactic used in functional analysis of problem behavior largely because of which advantage?",
    options: [
      "Its ability to rapidly demonstrate differential effects of different maintaining conditions",
      "Its requirement for a stable baseline before any treatment is introduced",
      "Its suitability for studying behaviors that occur at very low frequencies",
      "Its use of statistical analyses to compare treatment outcomes"
    ],
    correctIndex: 0,
    explanation: "The multielement design's ability to rapidly demonstrate differential effects of different conditions makes it the basic experimental tactic in functional analyses of problem behavior, quickly identifying the environmental variables maintaining the behavior.",
  },
  {
    id: 10036,
    topic: "Advantages of the Multielement Design",
    prompt: "Which advantage of the multielement design helps address the problem of behaviors that do not return to baseline levels when an intervention is withdrawn?",
    options: [
      "It requires treatment withdrawal only once rather than twice",
      "It minimizes the irreversibility problem by rapidly alternating treatment and no-treatment conditions, potentially revealing differences before no-treatment responding rises to treatment levels",
      "It uses statistical tests to determine whether baseline differences are meaningful",
      "It allows the researcher to extend the baseline phase indefinitely until responding stabilizes"
    ],
    correctIndex: 1,
    explanation: "The multielement design minimizes the irreversibility problem by rapidly alternating treatment and no-treatment (baseline) conditions, which may reveal differences in responding between the two conditions, especially early in the experiment before responding in the no-treatment condition begins to approximate treatment levels.",
  },
  {
    id: 10037,
    topic: "Advantages of the Multielement Design",
    prompt: "The multielement design minimizes sequence effects compared to multiple treatment reversal designs primarily because which of the following is true?",
    options: [
      "Each condition remains in effect for a longer period, allowing full adaptation",
      "Independent variables are rapidly alternated in a random fashion, with each treatment in effect for short periods, reducing carryover effects",
      "Only one treatment is administered per participant, preventing cross-condition influences",
      "The design requires participants to be naive to all treatments before the study begins"
    ],
    correctIndex: 1,
    explanation: "In a multielement design, independent variables are rapidly alternated in a random fashion producing no particular sequence, and each treatment is in effect for short periods, reducing the likelihood of carryover effects. This minimizes sequence effects that are difficult to control in reversal or multiple baseline designs.",
  },
  {
    id: 10038,
    topic: "Advantages of the Multielement Design",
    prompt: "When data in a multielement design are unstable or show ascending trends due to practice effects, why are observed differences between treatment data paths still potentially attributable to the treatments?",
    options: [
      "Practice effects cancel out because the total number of sessions is equated across conditions",
      "Unstable data are removed before visual analysis is conducted",
      "Because conditions are rapidly alternated over the same time period, practice effects, maturation, and other historical variables are presumed to be equally represented in each condition",
      "Statistical regression to the mean equalizes performance across all conditions"
    ],
    correctIndex: 2,
    explanation: "Because no single condition is present for any considerable length of time and conditions are presented many times throughout the study, it can be presumed that effects of practice, task difficulty changes, maturation, or other historical variables are equally represented in each treatment condition and will not differentially affect any one condition.",
  },
  {
    id: 10039,
    topic: "Advantages of the Multielement Design",
    prompt: "By alternating different therapists across conditions in the final phase of a study, a researcher using a multielement design can continually assess which of the following?",
    options: [
      "Interobserver agreement across data collectors",
      "The degree of generalization of behavior change to other persons",
      "Whether the treatment is socially valid according to teachers",
      "The stability of baseline responding under different personnel"
    ],
    correctIndex: 1,
    explanation: "By alternating different therapists in a multielement design, the experimenter can continually assess the degree to which behavior change generalizes from the effective treatment to other conditions of interest, such as different persons administering the procedure.",
  },
  {
    id: 10040,
    topic: "Considering the Appropriateness of the Multielement Design",
    prompt: "Multiple treatment interference in a multielement design refers to which of the following?",
    options: [
      "The experimenter accidentally applying both treatments during the same session",
      "The confounding effects of one treatment on a subject's behavior being influenced by the effects of another treatment administered in the same study",
      "The inability to replicate treatment effects across more than two participants",
      "Observer drift that occurs when multiple data collectors are used"
    ],
    correctIndex: 1,
    explanation: "Multiple treatment interference refers to the confounding effects of one treatment on a subject's behavior being influenced by the effects of another treatment administered in the same study. It raises the question of whether the effects observed under a given treatment would be the same if that treatment were implemented alone.",
  },
  {
    id: 10041,
    topic: "Considering the Appropriateness of the Multielement Design",
    prompt: "To assess the effects of a treatment in isolation and thus address multiple treatment interference, a researcher using a multielement design can do which of the following?",
    options: [
      "Reduce the number of alternations so that each treatment is presented for longer blocks",
      "Follow the alternating treatments phase with a final phase in which only one treatment is in effect",
      "Collect social validity data from the participant about which treatment they found most helpful",
      "Replicate the experiment with a new participant who receives only one treatment"
    ],
    correctIndex: 1,
    explanation: "By following the alternating treatments phase with a phase in which only one treatment is administered, the experimenter can assess the effects of that treatment when administered in isolation, addressing the concern of multiple treatment interference.",
  },
  {
    id: 10042,
    topic: "Considering the Appropriateness of the Multielement Design",
    prompt: "Regarding the practical capacity of a multielement design, in most applied settings how many different conditions can typically be compared effectively within a single alternating treatments phase?",
    options: [
      "Up to ten, as long as counterbalancing is applied",
      "A maximum of four different conditions, and in many instances only two",
      "Exactly three, because data paths from more than three conditions overlap too much to interpret",
      "An unlimited number, provided each condition is distinct"
    ],
    correctIndex: 1,
    explanation: "In most applied settings, a maximum of four different conditions (one of which may be a no-treatment control condition) can be compared effectively within a given phase of an alternating treatments design, and in many instances only two different treatments can be accommodated.",
  },
  {
    id: 10043,
    topic: "Considering the Appropriateness of the Multielement Design",
    prompt: "When selecting treatment conditions for a multielement design, why is it important that the conditions embody significant differences from one another?",
    options: [
      "To satisfy the rule of changing only one variable at a time across phases",
      "To enhance the probability that participants will discriminate between conditions, thereby increasing the likelihood of obtaining reliable, measurable differences in behavior",
      "To ensure that each treatment is associated with a unique therapist to prevent confusion",
      "To maximize the vertical distance between data paths on the graph for aesthetic clarity"
    ],
    correctIndex: 1,
    explanation: "Treatments should embody significant differences from one another to enhance the probability of discrimination between conditions and thereby increase the possibility of obtaining reliable, measurable differences in behavior.",
  },
  {
    id: 10044,
    topic: "Considering the Appropriateness of the Multielement Design",
    prompt: "A multielement design is not effective for assessing the effects of independent variables that do which of the following?",
    options: [
      "Require counterbalancing of session order",
      "Change behavior only when implemented consistently over a continuous period of time",
      "Produce increases rather than decreases in the target behavior",
      "Involve social reinforcement rather than tangible reinforcement"
    ],
    correctIndex: 1,
    explanation: "Multielement designs are not effective for assessing the effects of independent variables that change behavior only when implemented consistently over a continuous period of time, because the rapid alternation of conditions prevents any single condition from being present long enough for such effects to accumulate.",
  },
  {
    id: 10045,
    topic: "Considering the Appropriateness of the Multielement Design",
    prompt: "A researcher notes that a treatment appears ineffective in a multielement design but suspects it might work if delivered continuously for several sessions. This concern is best addressed by doing which of the following?",
    options: [
      "Extending the multielement comparison phase to include more sessions per condition",
      "Conducting a separate experiment using a reversal or multiple baseline design to evaluate the treatment when it is applied continuously",
      "Eliminating the treatment from further consideration and selecting a new one",
      "Reducing the number of conditions in the multielement design to minimize interference"
    ],
    correctIndex: 1,
    explanation: "The suspicion that a treatment may be effective if presented in isolation for an extended period is an empirical question that can be explored through a reversal or multiple baseline design in which the single treatment is evaluated continuously.",
  },
  {
    id: 10046,
    topic: "Operation and Logic of the Reversal Design",
    prompt: "A behavior analyst is conducting an A-B-A-B study and observes that responding during Baseline 2 closely approximates the data path predicted from Baseline 1. This outcome is best interpreted as which of the following?",
    options: [
      "Replication of the treatment effect",
      "Evidence that the treatment was not responsible for behavior change",
      "Verification that the behavior would have remained at baseline levels had the intervention not been introduced",
      "Confirmation that the independent variable is irreversible"
    ],
    correctIndex: 2,
    explanation: "When the level of responding in Baseline 2 parallels or closely approximates the measures obtained during Baseline 1, verification of the prediction made from Baseline 1 data is obtained. It confirms that the behavior would have continued at baseline levels had the intervention not been introduced.",
  },
  {
    id: 10047,
    topic: "Reversal Design",
    prompt: "In the widely used notation system for single-case experimental designs, a study in which the independent variable is absent in the first phase, introduced in the second phase, and withdrawn in the third phase is described as which of the following?",
    options: [
      "A-B-A-B design",
      "B-A-B design",
      "A-B-A design",
      "A-B design"
    ],
    correctIndex: 2,
    explanation: "A study with only one reversal (baseline, treatment, return to baseline) is described as an A-B-A design, where A denotes the baseline (independent variable absent) and B denotes the intervention (independent variable present).",
  },
  {
    id: 10048,
    topic: "Advantages of the Multielement Design",
    prompt: "Research by Kahng and Iwata (1999) on brief multielement designs found that false positives, in which a functional relation appears to exist when none does, were most likely to occur under which condition?",
    options: [
      "When counterbalancing was not implemented across sessions",
      "When only one or two measures were taken per condition",
      "When the target behavior showed high levels of variability across all conditions",
      "When three or more conditions were compared simultaneously"
    ],
    correctIndex: 1,
    explanation: "Kahng and Iwata (1999) found that false positives were obtained more often in brief multielement designs than in multielement designs with three or more sessions in each condition, highlighting the need for adequate data per condition before drawing conclusions.",
  },
  {
    id: 10049,
    topic: "Considering the Appropriateness of the Reversal Design",
    prompt: "A primary advantage of the reversal design identified is its ability to do which of the following?",
    options: [
      "Compare two or more treatments without requiring a common dependent variable",
      "Rapidly identify the most effective treatment from among several alternatives",
      "Provide a clear demonstration of the existence or absence of a functional relation and quantify the amount of behavior change over the preintervention level of responding",
      "Assess generalization of treatment effects across multiple settings simultaneously"
    ],
    correctIndex: 2,
    explanation: "The primary advantage of the reversal design is its ability to provide a clear demonstration of the existence or absence of a functional relation. In addition, it enables quantification of the amount of behavior change over the preintervention level, and the return to baseline provides information on the need to program for maintenance.",
  },
  {
    id: 10050,
    topic: "Considering the Appropriateness of the Multielement Design",
    prompt: "The rapid back-and-forth switching of treatments in a multielement design is sometimes criticized because it does which of the following?",
    options: [
      "Makes it impossible to collect interobserver agreement data across conditions",
      "Prevents the use of visual analysis to evaluate treatment effects",
      "Does not reflect the typical manner in which clinical and educational interventions are applied, making the approach appear artificial and undesirable",
      "Requires the experimenter to change the dependent variable definition in each condition"
    ],
    correctIndex: 2,
    explanation: "The rapid back-and-forth switching of treatments does not reflect the typical manner in which clinical and educational interventions are applied. From an instructional perspective this can be viewed as artificial and undesirable, though the quick identification of effective interventions generally compensates for this limitation.",
  },
];

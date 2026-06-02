import type { Question } from "../types";

/**
 * BCBA practice questions for Cooper et al., Chapter 9: Multiple Baseline and Changing Criterion Designs.
 * Grounded in the chapter text. Option order is shuffled at runtime, so
 * correctIndex placement here is arbitrary.
 */
export const QUESTIONS_M12: Question[] = [
  {
    id: 11001,
    topic: "Operation and Logic of the Multiple Baseline Design",
    prompt: "Baer, Wolf, and Risley (1968) first proposed the multiple baseline design as an alternative to the reversal design for which two situations?",
    options: [
      "When the target behavior is likely to be irreversible, or when withdrawal of treatment is undesirable, impractical, or unethical",
      "When the independent variable cannot be measured, or when the dependent variable is unstable",
      "When only a single behavior is targeted, or when concurrent measurement is too costly",
      "When baseline data are too variable, or when the treatment must be applied simultaneously to all behaviors"
    ],
    correctIndex: 0,
    explanation: "Baer, Wolf, and Risley described the multiple baseline design as appropriate when the target behavior is likely to be irreversible (i.e., it comes into contact with naturally existing contingencies that maintain the new level), or when it is undesirable, impractical, or unethical to withdraw a seemingly effective treatment.",
  },
  {
    id: 11002,
    topic: "Operation and Logic of the Multiple Baseline Design",
    prompt: "In a multiple baseline design, experimental control and a functional relation are demonstrated when:",
    options: [
      "Baseline data show high variability across all tiers before treatment is introduced",
      "Each behavior changes maximally only when the independent variable is applied to it",
      "All behaviors change simultaneously when the first treatment phase begins",
      "The independent variable is withdrawn and behavior returns to baseline levels"
    ],
    correctIndex: 1,
    explanation: "Experimental control in a multiple baseline design is shown when each behavior changes maximally only when the independent variable is specifically applied to it, and not before. This pattern of sequential change provides evidence of a functional relation.",
  },
  {
    id: 11003,
    topic: "Three Basic Forms of the Multiple Baseline Design",
    prompt: "A researcher measures the same behavior of the same student in the classroom, the cafeteria, and on the playground, then applies the intervention in each setting sequentially. This is an example of which form of the multiple baseline design?",
    options: [
      "Multiple baseline across behaviors",
      "Multiple baseline across subjects",
      "Multiple baseline across settings",
      "Multiple probe design"
    ],
    correctIndex: 2,
    explanation: "The multiple baseline across settings design involves measuring the same behavior of the same subject in two or more different settings and then applying the independent variable sequentially across those settings.",
  },
  {
    id: 11004,
    topic: "Three Basic Forms of the Multiple Baseline Design",
    prompt: "A behavior analyst simultaneously measures aggression, elopement, and self-injury in one client, then applies a function-based intervention to each behavior in a staggered sequence. Which form of the multiple baseline design is this?",
    options: [
      "Multiple baseline across subjects",
      "Multiple baseline across behaviors",
      "Multiple baseline across settings",
      "Delayed multiple baseline design"
    ],
    correctIndex: 1,
    explanation: "The multiple baseline across behaviors design consists of concurrent measurement of two or more different behaviors of the same subject, with the independent variable applied sequentially to each behavior.",
  },
  {
    id: 11005,
    topic: "Three Basic Forms of the Multiple Baseline Design",
    prompt: "Which of the three basic forms of the multiple baseline design is the most widely used?",
    options: [
      "Multiple baseline across behaviors",
      "Multiple baseline across settings",
      "Multiple baseline across subjects",
      "Multiple probe design"
    ],
    correctIndex: 2,
    explanation: "The multiple baseline across subjects design is identified as the most widely used of the three forms, in part because practitioners are commonly confronted by multiple clients or students who need to learn the same skill or eliminate the same problem behavior.",
  },
  {
    id: 11006,
    topic: "Operation and Logic of the Multiple Baseline Design",
    prompt: "In a multiple baseline design, how do the baseline data for behaviors still in baseline serve the logic of the design?",
    options: [
      "They provide direct evidence that the independent variable is effective",
      "They verify the prediction made for the behavior currently in treatment by showing little or no change",
      "They demonstrate replication by showing changes similar to the treated behavior",
      "They establish the terminal performance criterion for the treatment phase"
    ],
    correctIndex: 1,
    explanation: "Verification in the multiple baseline design is achieved when behaviors still in baseline show little or no change while the treated behavior changes. This stability supports the prediction that the behavior would not change unless the independent variable were applied to it.",
  },
  {
    id: 11007,
    topic: "Operation and Logic of the Multiple Baseline Design",
    prompt: "How does replication of the treatment effect occur in a multiple baseline design?",
    options: [
      "By withdrawing the independent variable and observing the behavior return to baseline",
      "By applying the independent variable to multiple settings at the same time",
      "By each behavior changing when, and only when, the independent variable is applied to it across successive tiers",
      "By collecting continuous baseline data on all behaviors throughout the study"
    ],
    correctIndex: 2,
    explanation: "Replication is demonstrated each time a new tier's behavior changes when and only when the independent variable is applied to it. Each such change adds to confidence that the independent variable, and not some other factor, is responsible for the behavioral improvements.",
  },
  {
    id: 11008,
    topic: "Operation and Logic of the Multiple Baseline Design",
    prompt: "Compared to the reversal design, the multiple baseline design is considered an inherently weaker demonstration of experimental control primarily because:",
    options: [
      "It requires more tiers and is therefore more time-consuming",
      "Verification of the baseline prediction for each behavior must be inferred from the lack of change in other behaviors rather than demonstrated directly with that behavior",
      "It cannot be used to evaluate the effects of instructional programs",
      "It requires continuous measurement of all behaviors throughout the study"
    ],
    correctIndex: 1,
    explanation: "The multiple baseline design is considered inherently weaker than the reversal design because verification is not demonstrated directly with the behavior in question. Instead, it is inferred from the relative stability of other behaviors that are still under baseline conditions.",
  },
  {
    id: 11009,
    topic: "Operation and Logic of the Multiple Baseline Design",
    prompt: "Baer, Wolf, and Risley (1968) stated that the number of replications needed in any multiple baseline design is ultimately determined by:",
    options: [
      "The magnitude of behavior change observed in the first tier",
      "The consumers of the research, such as teachers, administrators, parents, and journal editors",
      "A minimum of five tiers as specified by experimental convention",
      "The statistical power analysis conducted before the study begins"
    ],
    correctIndex: 1,
    explanation: "Baer and colleagues indicated that the minimum number of replications needed is the number necessary to convince those who will be asked to respond to the experiment and the researcher's claims, such as teachers, administrators, parents, funding sources, and journal editors.",
  },
  {
    id: 11010,
    topic: "Multiple Baseline Across Behaviors Design",
    prompt: "Ward and Carnes (2002) used a multiple baseline across behaviors design with college football linebackers. What were the three behaviors targeted in that study?",
    options: [
      "Blocking, passing, and kicking",
      "Reads, drops, and tackles",
      "Sprinting, conditioning, and stance",
      "Passing routes, blitzing, and coverage"
    ],
    correctIndex: 1,
    explanation: "Ward and Carnes targeted three football skills: reads (positioning to cover an area), drops (moving to correct position based on offensive alignment), and tackles (stopping the ball carrier). These were measured in practice sessions and games.",
  },
  {
    id: 11011,
    topic: "Multiple Baseline Across Behaviors Design",
    prompt: "In the Ward and Carnes (2002) football study, what was the independent variable applied across the three behaviors?",
    options: [
      "Video modeling and peer feedback",
      "Token economy and response cost",
      "Self-set goals and public posting",
      "Differential reinforcement of high rates"
    ],
    correctIndex: 2,
    explanation: "The independent variable was a combination of self-set goals and public posting. Players set personal performance goals and their results were posted on a chart in the locker room after each practice.",
  },
  {
    id: 11012,
    topic: "Multiple Baseline Across Settings Design",
    prompt: "In the Roane, Kelly, and Fisher (2003) study, the treatment condition for reducing Jason's object mouthing involved:",
    options: [
      "Response interruption and redirection combined with token reinforcement",
      "Continuous access to food items (chewing gum, marshmallows, and hard candy) carried in a fanny pack",
      "Differential reinforcement of other behavior with a 30-second delay",
      "Physical guidance and verbal prompts by a therapist present in each setting"
    ],
    correctIndex: 1,
    explanation: "During the treatment condition, Jason had continuous access to competing food items (chewing gum, marshmallows, and hard candy) that he carried in a fanny pack around his waist. This noncontingent access to food competed with object mouthing.",
  },
  {
    id: 11013,
    topic: "Multiple Baseline Across Settings Design",
    prompt: "The Roane et al. (2003) object mouthing study is an example of a multiple baseline across settings design because:",
    options: [
      "Three different behaviors were targeted for the same participant across sequential phases",
      "Three different participants each exhibited mouthing in a single shared setting",
      "The same behavior (object mouthing) was measured in three different settings (classroom, playroom, outdoors) and the treatment was introduced in each setting sequentially",
      "The intervention criteria were gradually increased across three treatment sub-phases"
    ],
    correctIndex: 2,
    explanation: "A multiple baseline across settings design targets the same behavior of the same subject in two or more different settings, with treatment introduced sequentially. Roane and colleagues measured Jason's mouthing across three settings and applied treatment in each setting in a staggered sequence.",
  },
  {
    id: 11014,
    topic: "Multiple Baseline Across Subjects Design",
    prompt: "In the Scherrer and Wilder (2008) cocktail server study, what was the dependent variable?",
    options: [
      "The number of customer complaints about spills per shift",
      "The speed at which servers carried trays to tables",
      "The percentage of eight safe tray-carrying behaviors performed correctly by each server",
      "The number of training trials required for each server to reach mastery"
    ],
    correctIndex: 2,
    explanation: "The dependent variable was the percentage of eight safe tray-carrying behaviors performed by each server, including carrying position for amount of weight, finger and thumb positions, wrist position, and tray distance from body, among others.",
  },
  {
    id: 11015,
    topic: "Multiple Baseline Across Subjects Design",
    prompt: "Why is the multiple baseline across subjects design considered 'not a true single-case design' according to the text?",
    options: [
      "Because it requires group-level statistical analysis to interpret outcomes",
      "Because each subject does not serve as his or her own control; verification must be inferred from the relatively unchanging baselines of other subjects",
      "Because the same behavior is measured across multiple subjects rather than multiple behaviors within one subject",
      "Because the design requires a minimum of five subjects to achieve experimental control"
    ],
    correctIndex: 1,
    explanation: "The multiple baseline across subjects design is not a true single-case design because each subject does not serve as his or her own control. Verification of predictions relies on the relatively unchanging baseline measures of other subjects still in baseline.",
  },
  {
    id: 11016,
    topic: "Multiple Probe Design",
    prompt: "Horner and Baer (1978) first described the multiple probe design as particularly appropriate for which type of situation?",
    options: [
      "Analyzing treatments that must be withdrawn and reintroduced to demonstrate a functional relation",
      "Analyzing the relation between an independent variable and the acquisition of successive approximations or task sequences",
      "Comparing two competing treatments applied alternately within the same session",
      "Evaluating the generalization of a skill across unrelated settings"
    ],
    correctIndex: 1,
    explanation: "Horner and Baer (1978) described the multiple probe design as a method for analyzing the relation between an independent variable and the acquisition of successive approximations or a task sequence, particularly when continuous baseline measurement of all behaviors is unnecessary or impractical.",
  },
  {
    id: 11017,
    topic: "Multiple Probe Design",
    prompt: "In contrast to a standard multiple baseline design, what distinguishes the data collection approach in a multiple probe design?",
    options: [
      "Continuous data collection occurs only during treatment phases, not during baseline",
      "All tiers are measured simultaneously and continuously throughout the entire study",
      "Intermittent measures (probes) rather than continuous data collection provide the basis for determining whether behavior change has occurred prior to intervention",
      "Data are collected once per week regardless of the number of teaching sessions"
    ],
    correctIndex: 2,
    explanation: "In the multiple probe design, intermittent measures called probes (rather than continuous data collection) provide the basis for determining whether behavior change has occurred prior to intervention. This distinguishes it from the standard multiple baseline design, in which data are collected simultaneously throughout the baseline phase.",
  },
  {
    id: 11018,
    topic: "Multiple Probe Design",
    prompt: "According to Horner and Baer (1978), why is continuous baseline measurement of steps later in a task sequence often unnecessary and illusory in a multiple baseline analysis?",
    options: [
      "Because later steps are always mastered before earlier steps when using chaining procedures",
      "Because measuring steps that cannot be performed until earlier prerequisite steps are mastered represents zero opportunity for the behavior, not truly zero responding",
      "Because later steps in a sequence always show high variability that prevents stable baseline measurement",
      "Because continuous measurement of all steps increases the likelihood of reactivity and inflates baseline performance"
    ],
    correctIndex: 1,
    explanation: "Horner and Baer argued that measuring a behavior that has no opportunity to occur (because prerequisite steps have not been taught) does not represent zero behavior so much as zero opportunity. Such measures fill out the picture of a multiple baseline in an illusory way without adding meaningful information.",
  },
  {
    id: 11019,
    topic: "Multiple Probe Design",
    prompt: "The multiple probe design is described as especially appropriate when extended baseline measurement may be reactive. What does 'reactive' measurement mean in this context?",
    options: [
      "Measurement that occurs in a different setting than where training will take place",
      "Repeated measurement of a skill under nontreatment conditions that proves aversive to some students, potentially leading to extinction, boredom, or other undesirable responses",
      "Measurement conducted by observers who are known to the participants",
      "Measurement that uses interval recording rather than event recording"
    ],
    correctIndex: 1,
    explanation: "Reactive measurement refers to repeated assessment under nontreatment conditions that itself affects performance. For example, repeatedly measuring skills a student cannot perform may be aversive and produce extinction, boredom, or other undesirable responses that interfere with the analysis.",
  },
  {
    id: 11020,
    topic: "Delayed Multiple Baseline Design",
    prompt: "The delayed multiple baseline design is best described as:",
    options: [
      "A design in which all baselines are started simultaneously but treatments are applied with equal spacing between tiers",
      "A design in which an initial baseline and intervention are begun, and subsequent baselines are added in a staggered or delayed fashion",
      "A design in which baseline measurement is paused between tiers to allow for equipment recalibration",
      "A design in which multiple treatments are applied simultaneously and their effects compared"
    ],
    correctIndex: 1,
    explanation: "The delayed multiple baseline design is one in which an initial baseline and intervention are begun, and subsequent baselines are added in a staggered or delayed fashion after the study has already started. Heward (1978) described three situations that justify its use.",
  },
  {
    id: 11021,
    topic: "Delayed Multiple Baseline Design",
    prompt: "According to Heward (1978), in a delayed multiple baseline design, baseline data gathered for a subsequent behavior that was begun after the independent variable was applied to earlier behaviors may represent a limitation because:",
    options: [
      "It prevents the behavior analyst from determining the magnitude of change produced by the intervention",
      "The delayed baseline data may represent changed performance due to the experimental manipulation of other behaviors, masking true covariation",
      "It forces the behavior analyst to use a different measurement system for later tiers",
      "The delayed start reduces the total number of data points available for visual analysis"
    ],
    correctIndex: 1,
    explanation: "A major weakness of the delayed multiple baseline design is that baselines begun after the independent variable has been applied to earlier behaviors may not represent the true preexperimental operant level. They may reflect changes due to the manipulation of other behaviors, potentially masking behavioral covariation.",
  },
  {
    id: 11022,
    topic: "Delayed Multiple Baseline Design",
    prompt: "Poche, Brouwer, and Swearingen (1981) used a delayed multiple baseline design to teach self-protective responses to children. What was one ethical justification for beginning training with each child at approximately the same time despite equal-length baselines?",
    options: [
      "Equal baselines were required by the journal's publication standards",
      "The nature of the target behavior required it be taught to each child as soon as possible given the potential danger of repeated exposure to adult lures",
      "The children's parents requested simultaneous training for all three children",
      "The training was expected to produce immediate generalization across children, making equal baselines necessary"
    ],
    correctIndex: 1,
    explanation: "The ethical justification was that the target behavior (self-protective responses to adult lures) needed to be taught to each child as soon as possible. Continuing to expose children to adult lures while withholding training would have been highly questionable given the potential danger.",
  },
  {
    id: 11023,
    topic: "Delayed Multiple Baseline Design",
    prompt: "Which of the following is NOT identified as an appropriate situation for using a delayed multiple baseline design?",
    options: [
      "A planned reversal design is no longer desirable or possible",
      "Limited resources or ethical concerns preclude a full-scale multiple baseline design",
      "New behaviors, settings, or subjects become available during an ongoing study",
      "The target behavior is already at a high, stable rate and does not require intervention"
    ],
    correctIndex: 3,
    explanation: "The three situations Heward (1978) identified for using a delayed multiple baseline design are: (1) when a reversal design is no longer possible or desirable, (2) when limited resources or ethical concerns preclude a full-scale design, and (3) when new behaviors, settings, or subjects become available. A behavior already at a high stable rate does not justify this design.",
  },
  {
    id: 11024,
    topic: "Nonconcurrent Multiple Baseline Across Participants Design",
    prompt: "The nonconcurrent multiple baseline across participants design is essentially a series of:",
    options: [
      "A-B-A-B sequences conducted simultaneously across subjects in the same setting",
      "A-B (baseline-intervention) sequences conducted across subjects at different points in time",
      "Changing criterion sub-phases conducted with a single subject across different settings",
      "Multiple probe sessions conducted at predetermined intervals throughout a school year"
    ],
    correctIndex: 1,
    explanation: "Watson and Workman (1981) proposed the nonconcurrent multiple baseline across participants design as a related series of A-B sequences conducted across subjects at different points in time. Each participant's A-B sequence differs in the length of the baseline phase.",
  },
  {
    id: 11025,
    topic: "Nonconcurrent Multiple Baseline Across Participants Design",
    prompt: "Which elements of baseline logic are present in the nonconcurrent multiple baseline design, and which element is absent?",
    options: [
      "Prediction and verification are present; replication is absent",
      "Prediction and replication are present; verification is absent because concurrent baseline measures are not available",
      "Replication and verification are present; prediction is absent because baselines are not concurrent",
      "All three elements (prediction, verification, and replication) are fully present"
    ],
    correctIndex: 1,
    explanation: "The nonconcurrent multiple baseline design entails prediction and replication, but the absence of concurrent baseline measures precludes the verification of intervention effects. This makes it inherently weaker than other multiple baseline variations.",
  },
  {
    id: 11026,
    topic: "Assumptions and Guidelines for Using Multiple Baseline Designs",
    prompt: "When selecting behaviors for a multiple baseline design, an experimenter must assume that the behaviors are both functionally independent and functionally similar. What does 'functionally independent' mean in this context?",
    options: [
      "Each behavior is measured by a different observer using a different recording system",
      "The behaviors will not covary with one another; change in one behavior will not automatically produce change in another",
      "Each behavior occurs in a physically separate setting from the others",
      "The behaviors are maintained by different types of reinforcement"
    ],
    correctIndex: 1,
    explanation: "Functional independence means the behaviors are not expected to covary: change produced in one behavior by the independent variable should not automatically produce change in the other behaviors. This is essential so that baseline tiers remain stable and can serve as verification of the prediction made for treated tiers.",
  },
  {
    id: 11027,
    topic: "Assumptions and Guidelines for Using Multiple Baseline Designs",
    prompt: "If, in a multiple baseline design, behaviors still in baseline change simultaneously with the behavior receiving treatment, what are the two possible interpretations?",
    options: [
      "Either the treatment was applied too soon, or the baseline phases were too short",
      "Either an uncontrolled variable changed all behaviors simultaneously, or the independent variable's effect generalized from the treated behavior to the others",
      "Either the dependent variable was measured incorrectly, or the treatment was not implemented with fidelity",
      "Either the baselines were too variable, or the tiers were not functionally similar enough"
    ],
    correctIndex: 1,
    explanation: "When behaviors still in baseline change simultaneously with the treated behavior, two interpretations are possible: an uncontrolled extraneous variable may be responsible for all the changes, or the independent variable's effect may have generalized from the treated behavior to the others. Neither outcome allows a clear demonstration of experimental control.",
  },
  {
    id: 11028,
    topic: "Assumptions and Guidelines for Using Multiple Baseline Designs",
    prompt: "Why is it important that the baselines in a multiple baseline design vary significantly in length?",
    options: [
      "Longer baselines ensure that each participant receives the same amount of treatment",
      "Varying baseline lengths controls for confounding variables such as practice effects and reactivity, which would otherwise be plausible alternative explanations for behavior change",
      "Shorter baselines reduce participant burden and improve social validity of the design",
      "Varying lengths ensure that the dependent variable is measured with the same instrument across all tiers"
    ],
    correctIndex: 1,
    explanation: "Systematically varying baseline lengths controls for confounds such as practice, adaptation, and reactivity. When behavior changes at different points in time following different lengths of baseline, it is more convincing that the independent variable rather than time or practice is responsible for the changes. Baer recommended varying lengths by at least a factor of 2.",
  },
  {
    id: 11029,
    topic: "Assumptions and Guidelines for Using Multiple Baseline Designs",
    prompt: "When intervention cannot be delayed for all behaviors and must begin before stability is evident across each tier, to which behavior should the independent variable be applied first?",
    options: [
      "The behavior showing the most rapid upward trend in baseline",
      "The behavior that is most socially significant to the client's family",
      "The behavior showing the most stable baseline data path, or a counter-therapeutic trend",
      "The behavior with the fewest data points collected during baseline"
    ],
    correctIndex: 2,
    explanation: "When intervention cannot be delayed across all tiers, the independent variable should be applied first to the behavior showing the most stable baseline data path (or a counter-therapeutic trend). This provides the most convincing comparison against which to evaluate the treatment's effect.",
  },
  {
    id: 11030,
    topic: "Assumptions and Guidelines for Using Multiple Baseline Designs",
    prompt: "Johnston and Pennypacker (1980) warned that applying the independent variable to subsequent behaviors too soon can destroy the potential for experimental control because:",
    options: [
      "It prevents the treated behavior from reaching its maximum level of change",
      "The influence of unknown, concomitant extraneous variables could still be substantial even a day or two later, making it difficult to rule out alternative explanations",
      "Concurrent treatment of multiple tiers violates the sequential-application requirement of the design",
      "Rapid staggering makes data difficult to display clearly in a graph"
    ],
    correctIndex: 1,
    explanation: "Johnston and Pennypacker warned that unknown extraneous variables could still be influential even if the next tier receives treatment shortly after the first. Demonstrating continued stability in the second tier during and after treatment of the first, for a sufficient period of time, is necessary for convincing experimental control.",
  },
  {
    id: 11031,
    topic: "Considerations: Advantages of the Multiple Baseline Design",
    prompt: "Which of the following is identified as a key advantage of the multiple baseline design related to the nature of clinical and educational practice?",
    options: [
      "It provides a more direct demonstration of experimental control than the reversal design",
      "The sequential application of the independent variable across multiple behaviors, settings, or subjects complements the practice of teachers and clinicians who aim to change multiple behaviors",
      "It requires fewer data points than the reversal design to demonstrate a functional relation",
      "It eliminates the need for concurrent measurement, reducing the cost of implementation"
    ],
    correctIndex: 1,
    explanation: "A key advantage is that the multiple baseline design's requirement to sequentially apply the independent variable across multiple behaviors, settings, or subjects aligns naturally with the goals of practitioners who need to help multiple clients learn multiple skills in multiple settings.",
  },
  {
    id: 11032,
    topic: "Considerations: Advantages of the Multiple Baseline Design",
    prompt: "In addition to not requiring treatment withdrawal, the text identifies which other advantage related to detecting generalization?",
    options: [
      "It eliminates the ethical concerns associated with withholding treatment from some behaviors",
      "Concurrent measurement of multiple behaviors allows the behavior analyst to directly monitor covariation and detect generalization of behavior change",
      "It allows the experimenter to compare multiple independent variables simultaneously",
      "It produces a stronger demonstration of experimental control than any other single-case design"
    ],
    correctIndex: 1,
    explanation: "Because the multiple baseline design involves concurrent measurement of two or more behaviors, settings, or subjects, it provides a direct opportunity to observe whether behavior change generalizes across tiers. Changes in behaviors still under baseline conditions may indicate generalization, even though such changes compromise experimental control.",
  },
  {
    id: 11033,
    topic: "Considerations: Limitations of the Multiple Baseline Design",
    prompt: "According to Baer (1975), compared to the reversal design, the multiple baseline design more thoroughly evaluates:",
    options: [
      "The function of any particular target behavior",
      "The effectiveness of the experimental technique, because the technique works again and again while each response works only once",
      "The generalization of behavior change across untrained behaviors",
      "The stability of behavior within each individual tier of the design"
    ],
    correctIndex: 1,
    explanation: "Baer (1975) noted that in the multiple baseline design, it is primarily the technique that is made to work repeatedly, not the same response in the same subject. This provides rich information about the technique's effectiveness across diverse behaviors or subjects, but less information about the function of any particular target behavior.",
  },
  {
    id: 11034,
    topic: "Considerations: Limitations of the Multiple Baseline Design",
    prompt: "Which of the following represents an ethical concern unique to the multiple baseline design?",
    options: [
      "The treatment may produce irreversible changes, making it impossible to return to baseline",
      "Withholding a seemingly effective treatment from some behaviors, settings, or subjects while others receive it may be impractical or unethical",
      "Concurrent measurement of multiple behaviors may expose participants to excessive assessment demands",
      "The design requires the behavior analyst to serve as both therapist and data collector simultaneously"
    ],
    correctIndex: 1,
    explanation: "Because the treatment cannot be applied to all tiers simultaneously, some behaviors, settings, or subjects must wait. Stolz (1978) noted that if the intervention is generally acknowledged to be effective, denying it simply to achieve a multiple baseline design might be unethical. This is a distinct applied and ethical concern.",
  },
  {
    id: 11035,
    topic: "Operation and Logic of the Changing Criterion Design",
    prompt: "Hartmann and Hall (1976) described the changing criterion design as requiring a baseline phase followed by a series of treatment phases, each associated with a step-wise change in criterion. Experimental control is demonstrated when:",
    options: [
      "The rate of target behavior returns to baseline each time a new criterion is introduced",
      "The rate of the target behavior changes with each step-wise change in the criterion, replicating therapeutic change",
      "Baseline data remain stable for at least 10 sessions before each new criterion is introduced",
      "The target behavior reaches the terminal criterion within the first three treatment phases"
    ],
    correctIndex: 1,
    explanation: "Hartmann and Hall (1976) stated that when the rate of the target behavior changes with each step-wise change in the criterion, therapeutic change is replicated and experimental control is demonstrated. Each phase serves as a baseline for the following phase.",
  },
  {
    id: 11036,
    topic: "Operation and Logic of the Changing Criterion Design",
    prompt: "How can verification of baseline predictions be approached in a changing criterion design?",
    options: [
      "By measuring two or more different behaviors concurrently throughout the study",
      "By varying phase lengths and by returning to a former criterion level and observing the behavior conform to that earlier criterion",
      "By withdrawing the independent variable completely and showing behavior returns to the initial baseline rate",
      "By applying the treatment to a no-treatment control group simultaneously"
    ],
    correctIndex: 1,
    explanation: "Verification in the changing criterion design can be approached in two ways: (1) varying phase lengths so that behavior changes only when the criterion changes regardless of varied phase durations, and (2) returning to a former criterion level (a reversed criterion) and demonstrating that behavior conforms to that earlier level, as Hall and Fox (1977) suggested.",
  },
  {
    id: 11037,
    topic: "Operation and Logic of the Changing Criterion Design",
    prompt: "Cook, Rapp, and Schulze (2015) used a changing criterion design to increase the duration that a boy with autism wore a medical alert bracelet. What was the independent variable in that study?",
    options: [
      "Positive reinforcement contingent on wearing the bracelet for increasingly longer intervals",
      "Differential negative reinforcement of other behavior (DNRO), in which the bracelet was removed contingent on compliance with a predetermined wait time",
      "Extinction of problem behavior combined with a gradual desensitization hierarchy",
      "Token economy in which the child earned tokens exchangeable for preferred items by wearing the bracelet"
    ],
    correctIndex: 1,
    explanation: "The independent variable was differential negative reinforcement of other behavior (DNRO). The bracelet was removed (negative reinforcement) contingent on Jonah complying with a predetermined wait time without problem behavior. The criterion wait time was gradually increased across phases.",
  },
  {
    id: 11038,
    topic: "Operation and Logic of the Changing Criterion Design",
    prompt: "McDougall (2005) proposed the range-bound changing criterion design in which each sub-phase includes:",
    options: [
      "A single criterion that must be met for exactly five consecutive sessions before advancing",
      "Both a lower and an upper criterion within which the participant is expected to perform",
      "A reversal to a previous criterion at the midpoint of each sub-phase",
      "A probe session comparing performance to a no-treatment control condition"
    ],
    correctIndex: 1,
    explanation: "McDougall's range-bound changing criterion design specifies both a lower and an upper criterion for each intervention sub-phase, creating a range within which the participant is expected to perform. Improvements and experimental control are demonstrated when the target behavior resides within the pre-specified range.",
  },
  {
    id: 11039,
    topic: "Guidelines for Using the Changing Criterion Design",
    prompt: "Why should the length of phases in a changing criterion design vary considerably?",
    options: [
      "Varying phase lengths ensures the design meets the minimum number of data points required by professional guidelines",
      "Varying phase lengths reduces the likelihood that observed behavior changes are due to factors other than the independent variable, such as maturation or practice effects",
      "Shorter phases allow the behavior analyst to implement more criterion changes within a limited study period",
      "Equal-length phases are required so that each criterion level receives the same amount of exposure before evaluation"
    ],
    correctIndex: 1,
    explanation: "Varying phase lengths increases the design's validity. When behavior changes to each new criterion and remains at that level for varied periods before advancing, it is less likely that the changes are due to maturation, practice, or other confounds and more likely they reflect the influence of the independent variable.",
  },
  {
    id: 11040,
    topic: "Guidelines for Using the Changing Criterion Design",
    prompt: "What is one risk if criterion changes in a changing criterion design are made too large?",
    options: [
      "The target behavior may stabilize too quickly, preventing the demonstration of a functional relation",
      "The terminal level of performance may be reached sooner with insufficient criterion changes to demonstrate control, and changes that are too large may conflict with good instructional practice because they become unachievable",
      "Large criterion changes require longer phases, which conflicts with the need to vary phase length",
      "Large criterion changes produce floor effects that prevent further decreases in behavior"
    ],
    correctIndex: 1,
    explanation: "Two problems arise with overly large criterion changes: from a design standpoint, they can result in too few criterion changes before the terminal level is reached; and from an applied standpoint, criterion changes that are too large may be unachievable and conflict with good instructional practice.",
  },
  {
    id: 11041,
    topic: "Guidelines for Using the Changing Criterion Design",
    prompt: "A behavior analyst gives a student exactly five math problems when the criterion for reinforcement is also five problems. Why is this problematic from an experimental design standpoint?",
    options: [
      "It creates a floor effect by preventing the student from performing below criterion",
      "It imposes an artificial ceiling that eliminates the possibility of exceeding the criterion, resulting in an impressive-looking graph affected by poor experimental procedure",
      "It confounds the independent variable with the number of opportunities to respond",
      "It violates the requirement to vary the magnitude of criterion changes across phases"
    ],
    correctIndex: 1,
    explanation: "When the number of response opportunities exactly equals the criterion, the student cannot exceed the criterion even if capable of doing so. This imposes an artificial ceiling on responding and compromises the validity of the data, producing a misleadingly controlled-looking graph.",
  },
  {
    id: 11042,
    topic: "Guidelines for Using the Changing Criterion Design",
    prompt: "Kratochwill and colleagues (2017) recommended a minimum of how many criterion changes in a changing criterion design?",
    options: [
      "Two",
      "Three",
      "Five",
      "Eight"
    ],
    correctIndex: 1,
    explanation: "Kratochwill and colleagues (2017) recommended a minimum of three criterion changes for a changing criterion design to provide a convincing demonstration of experimental control.",
  },
  {
    id: 11043,
    topic: "Considerations: Appropriateness of the Changing Criterion Design",
    prompt: "Which of the following is identified as a limitation specific to the changing criterion design?",
    options: [
      "It does not permit the concurrent measurement of multiple behaviors",
      "The target behavior must already be in the subject's repertoire, and incorporating the necessary design features may impede optimal learning rates",
      "It requires a withdrawal phase to verify that behavior changes are due to the independent variable",
      "It cannot be used to evaluate academic skills such as reading or math computation"
    ],
    correctIndex: 1,
    explanation: "Two limitations of the changing criterion design are that (1) the target behavior must already exist in the subject's repertoire, and (2) incorporating the required design features, such as varying phase lengths and magnitudes, may impede optimal learning rates by constraining how quickly the criterion advances.",
  },
  {
    id: 11044,
    topic: "Considerations: Appropriateness of the Changing Criterion Design",
    prompt: "Why is the changing criterion design NOT appropriate for evaluating a shaping program?",
    options: [
      "Shaping programs always involve more than one behavior, making concurrent measurement unnecessary",
      "In shaping, the changing response criteria are topographical in nature, requiring different forms of behavior at each level; a changing criterion design is better suited for changes in rate, accuracy, duration, or latency of a single existing behavior",
      "Shaping requires a reversal phase that conflicts with the changing criterion design's stepwise structure",
      "The number of successive approximations in shaping exceeds the maximum number of criterion changes permitted in a changing criterion design"
    ],
    correctIndex: 1,
    explanation: "Shaping involves reinforcing successive approximations that differ in topography (form) rather than simply in the rate or duration of an existing behavior. Because each new criterion in shaping represents a different response class, the changing criterion design, which is suited for stepwise changes in the rate, accuracy, duration, or latency of a single behavior, is not appropriate for shaping programs.",
  },
  {
    id: 11045,
    topic: "Considerations: Appropriateness of the Changing Criterion Design",
    prompt: "Which single-case design does the changing criterion design resemble from a conceptual standpoint, even though the analogy is imperfect?",
    options: [
      "The reversal (A-B-A-B) design",
      "The alternating treatments design",
      "The multiple baseline design",
      "The multielement design"
    ],
    correctIndex: 2,
    explanation: "Both Hartmann and Hall (1976) and Hall and Fox (1977) replotted changing criterion data in a multiple baseline format to illustrate the conceptual similarity. However, the analogy is imperfect because the 'different behaviors' at each tier are not truly independent of one another.",
  },
  {
    id: 11046,
    topic: "Operation and Logic of the Multiple Baseline Design",
    prompt: "In a multiple baseline design, what is meant by the term 'tier'?",
    options: [
      "A single data point collected during a probe session",
      "Each separate behavior, setting, or subject that constitutes one level of the stacked multiple baseline graph",
      "The stepwise criterion change in a changing criterion design",
      "The minimum number of sessions required before applying the independent variable"
    ],
    correctIndex: 1,
    explanation: "In multiple baseline design terminology, a tier refers to each separate behavior, setting, or subject that constitutes one row of the stacked multiple baseline graph. Each tier receives the independent variable sequentially.",
  },
  {
    id: 11047,
    topic: "Three Basic Forms of the Multiple Baseline Design",
    prompt: "Hall, Cristler, Cranston, and Tucker (1970) published a paper describing three experiments, one for each basic form of the multiple baseline design. What was notable about who conducted those studies?",
    options: [
      "The studies were conducted exclusively by university researchers in highly controlled laboratory settings",
      "The studies were carried out by teachers and parents, demonstrating that practitioners can conduct important studies in natural settings using available resources",
      "The studies were replicated across five countries to establish cross-cultural validity",
      "The studies were conducted by the same researcher across all three forms to ensure methodological consistency"
    ],
    correctIndex: 1,
    explanation: "Hall and colleagues' 1970 paper was important in part because the studies were carried out by teachers and parents, indicating that practitioners can conduct significant studies in natural settings using resources available to them. This highlighted the accessibility of the multiple baseline design.",
  },
  {
    id: 11048,
    topic: "Nonconcurrent Multiple Baseline Across Participants Design",
    prompt: "Watson and Workman (1981) proposed the nonconcurrent multiple baseline design to address which specific challenge faced by researchers in applied settings?",
    options: [
      "The difficulty of measuring behavior in multiple settings simultaneously when only one observer is available",
      "The fact that clients with the same target behavior may only infrequently be referred at the same point in time, making concurrent measurement across subjects impossible",
      "The ethical concern about withholding treatment from control participants for an extended period",
      "The logistical difficulty of training multiple therapists to implement the same independent variable with fidelity"
    ],
    correctIndex: 1,
    explanation: "Watson and Workman (1981) proposed the nonconcurrent design because concurrent measurement across subjects clearly poses problems for researchers in applied settings such as schools and mental health centers, where clients with the same target behavior may only infrequently be referred at the same point in time.",
  },
  {
    id: 11049,
    topic: "Guidelines for Using the Changing Criterion Design",
    prompt: "Klein, Houlihan, Vincent, and Panahon (2017) surveyed 106 articles using changing criterion designs published between 1971 and 2013. What did they find regarding adequacy of experimental control?",
    options: [
      "Approximately 75% of studies met all necessary requirements for adequate experimental control",
      "Only about 25% of the graphs reviewed met all necessary requirements; most lacked variation in phase magnitude, variation in phase length, or implemented two or fewer criterion changes",
      "All studies that included a reversal to a previous criterion level demonstrated adequate experimental control",
      "Studies with the most criterion changes consistently produced the strongest demonstrations of experimental control"
    ],
    correctIndex: 1,
    explanation: "Klein and colleagues found that only about 25% of the graphs reviewed met all necessary requirements for adequate experimental control. The most common deficiencies were lack of variation in phase magnitude (without compensating with a reversal), lack of variation in phase length, and implementing two or fewer criterion changes.",
  },
  {
    id: 11050,
    topic: "Considerations: Appropriateness of the Changing Criterion Design",
    prompt: "A behavior analyst wants to increase the number of minutes per day a student engages in independent reading, starting from a low but existing rate and gradually increasing the criterion for reinforcement. Which design would be most appropriate?",
    options: [
      "Multiple baseline across subjects, because multiple students need reading improvement",
      "Reversal design, because reading rate is likely to reverse when treatment is withdrawn",
      "Changing criterion design, because the target behavior is in the student's repertoire and lends itself to stepwise modification of rate",
      "Multiple probe design, because reading is a skill sequence requiring prerequisite skills"
    ],
    correctIndex: 2,
    explanation: "The changing criterion design is best suited for evaluating the effects of instructional techniques on stepwise changes in the rate, accuracy, duration, or latency of a single target behavior that is already in the subject's repertoire. Increasing minutes of independent reading is a rate-based behavior that fits this description precisely.",
  },
];

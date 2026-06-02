import type { Question } from "../types";

/**
 * BCBA practice questions for Cooper et al., Chapter 27: Functional Behavior Assessment.
 * Grounded in the chapter text. Option order is shuffled at runtime, so
 * correctIndex placement here is arbitrary.
 */
export const QUESTIONS_M30: Question[] = [
  {
    id: 29001,
    topic: "Functions of Behavior",
    prompt: "Functional behavior assessment (FBA) is best described as a type of assessment designed to identify which of the following?",
    options: [
      "The reinforcers currently maintaining problem behavior",
      "The topography of problem behavior and its developmental history",
      "The cognitive deficits underlying problem behavior",
      "The medical conditions that cause problem behavior"
    ],
    correctIndex: 0,
    explanation: "FBA can be thought of as a reinforcer assessment of sorts. It identifies the reinforcers currently maintaining problem behavior, whether those reinforcers are positive or negative social reinforcers or automatic reinforcers produced directly by the behavior itself.",
  },
  {
    id: 29002,
    topic: "Functions of Behavior",
    prompt: "A child screams and tantrums when placed near running water. A classmate in the same setting completes the handwashing routine without difficulty. This scenario best illustrates which principle?",
    options: [
      "The same topography of behavior always serves the same function across individuals",
      "Behavior topography reliably predicts the function of the behavior",
      "The same topography of behavior can serve different functions for different individuals",
      "Different topographies of behavior always serve different functions"
    ],
    correctIndex: 2,
    explanation: "Tantrums may be maintained by positive reinforcement (attention) for one child and by negative reinforcement (escape) for another child. Because the same topography can serve different functions, topography alone reveals little useful information about the conditions that account for behavior.",
  },
  {
    id: 29003,
    topic: "Functions of Behavior",
    prompt: "Each time a student becomes aggressive during a task, the teacher removes the task demands, and over time the aggression has become more frequent during demanding tasks. This pattern is most consistent with behavior maintained by which source of reinforcement?",
    options: [
      "Automatic positive reinforcement",
      "Social positive reinforcement in the form of attention",
      "Social negative reinforcement in the form of escape",
      "Tangible reinforcement"
    ],
    correctIndex: 2,
    explanation: "Social negative reinforcement (escape) occurs when behaviors are learned as a result of their effectiveness in terminating or postponing aversive events. Aggression that terminates task demands is maintained by negative reinforcement.",
  },
  {
    id: 29004,
    topic: "Functions of Behavior",
    prompt: "A child rocks back and forth in the corner of the classroom even when no adults or peers are present and no materials are available. This behavior is most likely maintained by which function?",
    options: [
      "Social positive reinforcement",
      "Social negative reinforcement",
      "Automatic reinforcement",
      "Tangible reinforcement"
    ],
    correctIndex: 2,
    explanation: "A behavior is assumed to be maintained by automatic reinforcement only after social reinforcers have been ruled out, such as when the behavior occurs even when the individual is alone. Rocking with no social consequences present is consistent with automatic reinforcement.",
  },
  {
    id: 29005,
    topic: "Functions of Behavior",
    prompt: "A child cries and tantrums until a preferred toy is returned to her. The behavior is most likely maintained by which source of reinforcement?",
    options: [
      "Automatic negative reinforcement",
      "Social positive reinforcement in the form of tangible access",
      "Social negative reinforcement in the form of escape",
      "Automatic positive reinforcement"
    ],
    correctIndex: 1,
    explanation: "Tangible reinforcement occurs when problem behaviors produce access to reinforcing materials or other stimuli. A child who tantrums until a preferred item is returned is obtaining positive reinforcement in the form of access to tangibles.",
  },
  {
    id: 29006,
    topic: "Functions of Behavior",
    prompt: "Intense scratching of a poison ivy rash is most accurately described as behavior maintained by which reinforcement contingency?",
    options: [
      "Social positive reinforcement",
      "Automatic positive reinforcement",
      "Automatic negative reinforcement",
      "Social negative reinforcement"
    ],
    correctIndex: 2,
    explanation: "Automatic negative reinforcement can account for behaviors that terminate aversive stimulation directly. Scratching a rash is negatively reinforced by the alleviation of itching, and the reinforcer is an automatic outcome of the response rather than dependent on another person's action.",
  },
  {
    id: 29007,
    topic: "Functions of Behavior",
    prompt: "A teacher inadvertently reprimands a student every time the student engages in disruptive behavior. Over time, the disruptive behavior increases. This scenario is best explained by which reinforcement contingency?",
    options: [
      "Automatic negative reinforcement, because reprimands are aversive",
      "Automatic positive reinforcement, because no social interaction is involved",
      "Social negative reinforcement, because the teacher removes demands during the reprimand",
      "Social positive reinforcement, because the reprimand is a form of attention"
    ],
    correctIndex: 3,
    explanation: "Problem behavior often results in immediate attention from others in the form of reprimands. These reactions can positively reinforce problem behavior even if inadvertently, making it more likely in similar circumstances.",
  },
  {
    id: 29008,
    topic: "Functions of Behavior",
    prompt: "The fact that the same reinforcement contingencies that account for desirable behavior can also account for undesirable behavior is evidence that environmental influences do what?",
    options: [
      "Only strengthen behavior that serves adaptive functions",
      "Only weaken behavior that serves maladaptive functions",
      "Distinguish between desirable and undesirable topographies of behavior",
      "Do not make distinctions between desirable and undesirable topographies of behavior"
    ],
    correctIndex: 3,
    explanation: "It is important to recognize that environmental influences do not make distinctions between desirable and undesirable topographies of behavior. The same reinforcement contingencies can account for both appropriate and problem behavior.",
  },
  {
    id: 29009,
    topic: "Role of FBA in Intervention and Prevention",
    prompt: "A behavior analyst learns from an FBA that a student's tantrums are triggered by the discriminative stimulus of running water. Replacing running water with a waterless antibacterial hand gel is an example of which intervention approach?",
    options: [
      "Altering consequent variables",
      "Teaching an alternative behavior",
      "Altering antecedent variables",
      "Implementing a punishment procedure"
    ],
    correctIndex: 2,
    explanation: "Altering antecedent variables involves changing antecedents that might trigger problem behavior. Removing the discriminative stimulus (running water) by substituting a waterless gel removes the trigger for problem behavior, illustrating alteration of antecedent variables.",
  },
  {
    id: 29010,
    topic: "Role of FBA in Intervention and Prevention",
    prompt: "A behavior analyst determines that a student's tantrums are maintained by escape from lunchtime activities. The analyst then ensures that tantrums no longer result in escape from those activities. This approach primarily involves which intervention strategy?",
    options: [
      "Altering antecedent variables by modifying the motivating operation",
      "Altering consequent variables by placing problem behavior on extinction",
      "Teaching an alternative behavior that produces the same reinforcer",
      "Using a default technology to suppress the behavior"
    ],
    correctIndex: 1,
    explanation: "Altering consequent variables involves eliminating the source of reinforcement for problem behavior. Ensuring that the reinforcer (escape from lunch) no longer follows tantrums places the behavior on extinction, which is an example of altering consequent variables.",
  },
  {
    id: 29011,
    topic: "Role of FBA in Intervention and Prevention",
    prompt: "A child's tantrums are maintained by escape from hand washing. A behavior analyst teaches the child to touch a 'break' card to produce a delay in being seated at the lunch table. This is an example of which intervention approach?",
    options: [
      "Altering antecedent variables",
      "Altering consequent variables",
      "Teaching an alternative behavior that serves the same function",
      "Implementing a token economy"
    ],
    correctIndex: 2,
    explanation: "Teaching alternative behaviors involves identifying the reinforcer currently maintaining problem behavior and teaching an alternative appropriate behavior that produces the same reinforcer. Teaching the child to request a break serves the same escape function as tantrums.",
  },
  {
    id: 29012,
    topic: "Role of FBA in Intervention and Prevention",
    prompt: "A student's tantrums appear to be maintained by escape from hand washing, but a time-out intervention is implemented that inadvertently allows the student to avoid lunchtime activities. What is the most likely outcome?",
    options: [
      "The tantrums will decrease because the student receives a consequence",
      "The tantrums will increase because time-out serves as the reinforcer (escape)",
      "The tantrums will be unaffected because no extinction is in place",
      "The tantrums will generalize to new settings and then extinguish"
    ],
    correctIndex: 1,
    explanation: "If the function of tantrums is escape from aversive lunchtime events, a time-out that removes the student from those events functions as the same reinforcer (escape), making tantrums more likely. Using an intervention without considering behavioral function can exacerbate problem behavior.",
  },
  {
    id: 29013,
    topic: "Role of FBA in Intervention and Prevention",
    prompt: "Interventions selected without consideration of behavioral function and implemented in a trial-and-error manner are referred to as what?",
    options: [
      "Evidence-based practices",
      "Functional communication training procedures",
      "Descriptive assessment methods",
      "Default technologies"
    ],
    correctIndex: 3,
    explanation: "When caregivers resort to increasingly intrusive, coercive, or punishment-based interventions after previous unsuccessful attempts without understanding behavioral function, those interventions are referred to as default technologies.",
  },
  {
    id: 29014,
    topic: "Role of FBA in Intervention and Prevention",
    prompt: "Research by Iwata and colleagues (1994b) found that escape from task demands or other aversive stimuli accounted for self-injurious behavior (SIB) in the largest proportion of cases. What implication does this finding have for prevention?",
    options: [
      "Preventive efforts should focus on using punishment to suppress SIB early",
      "Preventive efforts should target modifying instructional environments to be less aversive",
      "Preventive efforts are ineffective because SIB is biologically determined",
      "Preventive efforts should focus exclusively on medication management"
    ],
    correctIndex: 1,
    explanation: "The data suggest that preventive efforts should be directed toward modifying instructional environments, such as providing more frequent reinforcement for desirable behavior, opportunities for breaks, or means to request help with difficult tasks, so they are less likely to function as sources of aversive stimulation.",
  },
  {
    id: 29015,
    topic: "Role of FBA in Intervention and Prevention",
    prompt: "When problem behavior is suppressed through punishment without addressing its function, what is a likely unintended consequence?",
    options: [
      "The motivating operations for problem behavior are eliminated permanently",
      "Other behaviors serving the same function may emerge",
      "The reinforcer maintaining the behavior is permanently removed",
      "The behavior will generalize to all settings and then extinguish"
    ],
    correctIndex: 1,
    explanation: "Although problem behavior may be suppressed using punishment, additional behaviors not subject to the punishment contingencies may emerge because the motivating operations for problem behavior remain. For example, eliminating tantrums does not eliminate avoidance as a reinforcer, so other escape-maintained behaviors may develop.",
  },
  {
    id: 29016,
    topic: "Overview of FBA Methods",
    prompt: "Which of the following correctly lists the three types of FBA methods arranged from most to least specialized expertise and time required?",
    options: [
      "Indirect assessment, descriptive assessment, functional analysis",
      "Descriptive assessment, indirect assessment, functional analysis",
      "Functional analysis, descriptive assessment, indirect assessment",
      "Indirect assessment, functional analysis, descriptive assessment"
    ],
    correctIndex: 2,
    explanation: "FBA methods can be arranged on a continuum. Functional analysis requires the most specialized expertise and time, followed by descriptive assessment, and then indirect assessment, which requires the least expertise and time to conduct.",
  },
  {
    id: 29017,
    topic: "Overview of FBA Methods",
    prompt: "Which FBA method is the only one that allows practitioners to confirm hypotheses regarding functional relations between problem behavior and environmental events?",
    options: [
      "Functional analysis",
      "ABC narrative recording",
      "Behavior rating scales",
      "Scatterplot recording"
    ],
    correctIndex: 0,
    explanation: "Functional analysis is the only FBA method that allows practitioners to confirm hypotheses regarding functional relations between problem behavior and environmental events. Descriptive and indirect methods are used for hypothesis formulation, not confirmation.",
  },
  {
    id: 29018,
    topic: "Functional Analysis",
    prompt: "Functional analysis procedures were first pioneered by which researchers?",
    options: [
      "Bijou, Peterson, and Ault (1968)",
      "O'Neill, Bundock, Kladis, and Hawken (2015)",
      "Hanley, Jin, Vanselow, and Hanratty (2014)",
      "Iwata, Dorsey, Slifer, Bauman, and Richman (1994a)"
    ],
    correctIndex: 3,
    explanation: "Functional analysis procedures were first pioneered by Iwata, Dorsey, Slifer, Bauman, and Richman (1994a). Their work systematically arranged antecedents and consequences to observe and measure their separate effects on problem behavior.",
  },
  {
    id: 29019,
    topic: "Functional Analysis",
    prompt: "In a functional analysis, the term 'analog' refers to which of the following?",
    options: [
      "The arrangement of variables that resemble those in the natural routine, presented systematically",
      "The natural environment in which the assessment is conducted",
      "A measurement system based on continuous recording",
      "A rating scale completed by caregivers"
    ],
    correctIndex: 0,
    explanation: "A functional analysis is often referred to as an analog because antecedents and consequences similar to those occurring in natural routines are presented in a systematic manner, but the analysis is not conducted in the context of naturally occurring routines. Analog refers to the arrangement of variables rather than the setting.",
  },
  {
    id: 29020,
    topic: "Functional Analysis",
    prompt: "In a standard functional analysis, the play (control) condition is designed to produce what result?",
    options: [
      "High rates of problem behavior to establish a baseline",
      "Variable rates of problem behavior across sessions",
      "Low rates of problem behavior because no motivating operations for problem behavior are present",
      "Moderate rates of problem behavior to allow for comparison"
    ],
    correctIndex: 2,
    explanation: "In the play condition, preferred activities are continuously available, social attention is provided, and no demands are placed on the person. Problem behavior is expected to be low in this condition because no motivating operations for problem behavior are present.",
  },
  {
    id: 29021,
    topic: "Functional Analysis",
    prompt: "During a functional analysis, problem behavior is elevated only in the 'alone' condition while remaining low in all other conditions. What is the most appropriate interpretation?",
    options: [
      "The behavior is maintained by social positive reinforcement (attention)",
      "The behavior is maintained by negative reinforcement (escape)",
      "The behavior is maintained by automatic reinforcement",
      "The results are undifferentiated and inconclusive"
    ],
    correctIndex: 2,
    explanation: "Elevated problem behavior in the alone condition suggests that problem behavior is maintained by automatic reinforcement. Further analysis is needed to determine whether the source is positive or negative automatic reinforcement.",
  },
  {
    id: 29022,
    topic: "Functional Analysis",
    prompt: "When problem behavior occurs frequently across all functional analysis conditions, including the play condition, or varies unpredictably across conditions, this pattern is called what?",
    options: [
      "A differentiated pattern indicating multiple functions",
      "An undifferentiated pattern, which is inconclusive",
      "A clear escape function",
      "Automatic reinforcement confirmed by the alone condition"
    ],
    correctIndex: 1,
    explanation: "If problem behavior occurs frequently in all conditions, including the play condition, or is variable across conditions, responding is considered undifferentiated. Such results are inconclusive, but can also occur with behavior maintained by automatic reinforcement.",
  },
  {
    id: 29023,
    topic: "Functional Analysis",
    prompt: "Which of the following is identified as the primary advantage of functional analysis over other FBA methods?",
    options: [
      "It requires minimal training and can be completed quickly",
      "It avoids exposing the client to conditions that evoke problem behavior",
      "It can be conducted entirely through caregiver interviews",
      "It yields a clear demonstration of the variable or variables that influence problem behavior"
    ],
    correctIndex: 3,
    explanation: "The primary advantage of functional analysis is its ability to yield a clear demonstration of the variable or variables that influence the occurrence of a problem behavior. It is the standard of scientific evidence by which other assessment alternatives are evaluated.",
  },
  {
    id: 29024,
    topic: "Functional Analysis",
    prompt: "A known risk of conducting a functional analysis is that the assessment process may do which of the following?",
    options: [
      "Permanently eliminate problem behavior during assessment conditions",
      "Temporarily strengthen or increase problem behavior to unacceptable levels",
      "Produce results identical to those of indirect assessments",
      "Prevent the practitioner from forming any hypotheses about function"
    ],
    correctIndex: 1,
    explanation: "A risk of functional analysis is that the assessment process may temporarily strengthen or increase the undesirable behavior to unacceptable levels, or possibly result in the behavior acquiring new functions.",
  },
  {
    id: 29025,
    topic: "Variations of Functional Analysis",
    prompt: "A brief functional analysis is distinguished from a standard functional analysis primarily by which feature?",
    options: [
      "Only one or two 5- to 10-minute sessions are conducted per condition",
      "It uses rating scales rather than direct observation",
      "It is conducted exclusively in the client's natural environment",
      "It never includes a control condition"
    ],
    correctIndex: 0,
    explanation: "In a brief functional analysis, only one or two 5- to 10-minute sessions are conducted for each condition due to time constraints or the severity of the problem behavior, in contrast to the multiple sessions used in a full functional analysis.",
  },
  {
    id: 29026,
    topic: "Variations of Functional Analysis",
    prompt: "A contingency reversal in a brief functional analysis involves which procedure?",
    options: [
      "Removing all conditions and conducting observations in the natural environment",
      "First making the putative reinforcer contingent on the problem behavior, then on a replacement behavior",
      "Alternating between two test conditions without a control condition",
      "Conducting all conditions simultaneously rather than sequentially"
    ],
    correctIndex: 1,
    explanation: "A contingency reversal is when the practitioner first makes the putative reinforcer contingent on one target behavior, such as tantrums, and then on an appropriate replacement behavior, such as making requests. This provides a convincing demonstration of function.",
  },
  {
    id: 29027,
    topic: "Variations of Functional Analysis",
    prompt: "A trial-based functional analysis (TBFA) consists of two components within each trial. What do those two components consist of?",
    options: [
      "A naturalistic observation period followed by a structured interview",
      "A test component presenting the establishing operation and contingency, followed by a control component with continuous reinforcer access",
      "Baseline data collection followed by treatment implementation",
      "A rating scale component followed by a direct observation component"
    ],
    correctIndex: 1,
    explanation: "Each trial in a trial-based functional analysis consists of two components, each lasting 1 minute. The first presents the establishing operation and contingency for problem behavior (test condition), and the second provides continuous access to the reinforcer (control condition).",
  },
  {
    id: 29028,
    topic: "Variations of Functional Analysis",
    prompt: "The interview-informed synthesized contingency analysis (IISCA) is most useful in which situation?",
    options: [
      "When behavior occurs at high rates in all standard functional analysis conditions",
      "When problem behavior is not observed in typical FA conditions and the analyst suspects multiple contingencies may be maintaining it",
      "When the analyst wants to avoid using a control condition",
      "When only a single reinforcer is hypothesized to maintain the behavior"
    ],
    correctIndex: 1,
    explanation: "The IISCA may have particular utility when problem behavior is not observed in typical FA conditions and when the behavior analyst suspects multiple contingencies may be maintaining problem behavior. It tests multiple contingencies implemented simultaneously.",
  },
  {
    id: 29029,
    topic: "Variations of Functional Analysis",
    prompt: "In a latency-based functional analysis, what is the index of problem behavior that is measured?",
    options: [
      "The frequency of problem behavior per session",
      "The duration of each problem behavior episode",
      "The latency from onset of the establishing operation to the first occurrence of problem behavior",
      "The interval between consecutive occurrences of problem behavior"
    ],
    correctIndex: 2,
    explanation: "In a latency-based functional analysis, the index of problem behavior is the latency from onset of the establishing operation to the first occurrence of the problem behavior. Shorter latency in a particular condition suggests that condition is maintaining the behavior.",
  },
  {
    id: 29030,
    topic: "Variations of Functional Analysis",
    prompt: "Conducting a functional analysis on precursor behavior is most appropriate when which condition exists?",
    options: [
      "The target behavior is too infrequent to analyze",
      "The target behavior occurs exclusively in natural settings",
      "Indirect assessments have already confirmed the function of the behavior",
      "Even one occurrence of the target behavior poses unacceptable risk to the client or others"
    ],
    correctIndex: 3,
    explanation: "When even one occurrence of problem behavior can be so severe that evoking it poses unacceptable risk to the client and/or others, it can be helpful to conduct the functional analysis on precursor behavior, a behavior that reliably precedes the target behavior.",
  },
  {
    id: 29031,
    topic: "Safety Considerations for Functional Analyses",
    prompt: "Research has found that the use of protective equipment during a functional analysis may have which effect on the assessment?",
    options: [
      "Always improve the safety of clients and practitioners with no effect on results",
      "Reduce the number of conditions needed to identify behavioral function",
      "Eliminate the need for a control condition in the analysis",
      "Invalidate functional analysis results"
    ],
    correctIndex: 3,
    explanation: "Researchers have found that the use of protective equipment can invalidate FA results. Although safety precautions are important, protective equipment is cited as a consideration that may affect the validity of the assessment.",
  },
  {
    id: 29032,
    topic: "Descriptive Functional Behavior Assessment",
    prompt: "How do descriptive functional behavior assessments differ fundamentally from functional analyses?",
    options: [
      "Descriptive assessments confirm functional relations, whereas functional analyses generate hypotheses",
      "Descriptive assessments are conducted in clinical settings only, whereas functional analyses occur in natural settings",
      "Descriptive assessments use rating scales, whereas functional analyses use direct observation",
      "Descriptive assessments involve observation under naturally occurring conditions, whereas functional analyses systematically arrange conditions"
    ],
    correctIndex: 3,
    explanation: "Descriptive functional behavior assessment encompasses direct observation of behavior under naturally occurring conditions. Unlike functional analyses, observations are made in relation to events that are not arranged in a systematic manner.",
  },
  {
    id: 29033,
    topic: "Descriptive Functional Behavior Assessment",
    prompt: "Descriptive assessments are generally considered invalid for detecting behavioral function and tend to yield false positives for which function?",
    options: [
      "Attention, because attention is often delivered both independent of and contingent on problem behavior",
      "Escape, because demands are rarely placed during observations",
      "Automatic reinforcement, because problem behavior occurs when the person is alone",
      "Tangible, because preferred items are often available during observations"
    ],
    correctIndex: 0,
    explanation: "Descriptive assessments tend to yield false positives for an attention function. When an individual displays severe problem behavior, attention is often ubiquitous in the environment, delivered both independent of and contingent on problem behavior.",
  },
  {
    id: 29034,
    topic: "Descriptive Functional Behavior Assessment",
    prompt: "In ABC continuous recording, when are environmental events (antecedents and consequences) recorded?",
    options: [
      "Only when problem behavior occurs",
      "Only at the end of the observation session based on the observer's recall",
      "Only when the observer predicts problem behavior is about to occur",
      "Whenever they occur, regardless of whether problem behavior occurred with them"
    ],
    correctIndex: 3,
    explanation: "With ABC continuous recording, targeted environmental events (antecedents and consequences) are recorded whenever they occur, regardless of whether problem behavior occurred with them. This recording method may reveal events that occur in close temporal proximity to the target behavior.",
  },
  {
    id: 29035,
    topic: "Descriptive Functional Behavior Assessment",
    prompt: "ABC narrative recording differs from ABC continuous recording in which important way?",
    options: [
      "Narrative recording uses structured codes, whereas continuous recording is open-ended",
      "Narrative recording is conducted only in clinical settings",
      "Data in narrative recording are collected only when the target behavior occurs, and the recording is open-ended",
      "Narrative recording requires more time to complete than continuous recording"
    ],
    correctIndex: 2,
    explanation: "ABC narrative recording differs from continuous recording in that data are collected only when behaviors of interest are observed, and the recording is open-ended (any events that immediately precede and follow the target behavior are noted).",
  },
  {
    id: 29036,
    topic: "Descriptive Functional Behavior Assessment",
    prompt: "A potential limitation of ABC narrative recording is that observers may report inferred states rather than observable events. What does this suggest?",
    options: [
      "Observers need no training because narrative recording is subjective by design",
      "Unless observers receive adequate training, they may report inferred states or subjective impressions instead of observable events",
      "Observers should be trained to omit consequences and focus only on antecedents",
      "Observers should use narrative recording only when problem behavior occurs at high frequencies"
    ],
    correctIndex: 1,
    explanation: "Unless observers receive adequate training, they may report inferred states or subjective impressions (for example, 'felt embarrassed' or 'was frustrated') instead of describing observable events in objective terms, which is a known limitation of ABC narrative recording.",
  },
  {
    id: 29037,
    topic: "Descriptive Functional Behavior Assessment",
    prompt: "Scatterplot recording is primarily designed to identify which of the following?",
    options: [
      "The specific antecedents and consequences surrounding each occurrence of problem behavior",
      "Time periods during which the problem behavior occurs more often than others",
      "The overall frequency of problem behavior across the entire day",
      "The topography and intensity of problem behavior across conditions"
    ],
    correctIndex: 1,
    explanation: "Scatterplot recording is a procedure for recording the extent to which a target behavior occurs more often at particular times than others. After data are collected over a series of days, they are analyzed for patterns (specific time periods typically associated with problem behavior).",
  },
  {
    id: 29038,
    topic: "Descriptive Functional Behavior Assessment",
    prompt: "In a contingency space analysis (CSA), where on the graph would a data point fall to suggest a positive contingency potentially maintaining the behavior?",
    options: [
      "Below and to the right of the neutrality line",
      "On or near the neutrality line",
      "Above and to the left of the neutrality line",
      "At the origin of the graph (coordinates 0, 0)"
    ],
    correctIndex: 2,
    explanation: "In a contingency space analysis, if the data point falls above and to the left of the neutrality line, a positive contingency may exist, suggesting that the consequence could be maintaining the behavior. The greater the distance from the neutrality line, the stronger the hypothesized relationship.",
  },
  {
    id: 29039,
    topic: "Indirect Functional Behavior Assessment",
    prompt: "Indirect functional assessment methods are classified as 'indirect' for which reason?",
    options: [
      "They do not involve direct observation of behavior but rely on others' recollections",
      "They involve direct observation of behavior but not in the natural environment",
      "They involve systematic manipulation of antecedents and consequences",
      "They use analog conditions similar to those in naturally occurring routines"
    ],
    correctIndex: 0,
    explanation: "Such procedures are referred to as 'indirect' because they do not involve direct observation of the behavior, but rather solicit information based on others' recollections of the behavior through structured interviews, checklists, rating scales, or questionnaires.",
  },
  {
    id: 29040,
    topic: "Indirect Functional Behavior Assessment",
    prompt: "The Functional Assessment Interview (FAI) includes which of the following components?",
    options: [
      "Systematic manipulation of antecedents and consequences across analog conditions",
      "Description of behavior topography, general factors affecting behavior, antecedents and outcomes, and communication skills",
      "Direct observation of behavior using partial interval recording",
      "A scatterplot of behavior across 30-minute time blocks"
    ],
    correctIndex: 1,
    explanation: "The Functional Assessment Interview (O'Neill et al., 1997) has 11 sections, including description of the form (topography) of the behavior, general factors that might affect the behavior, antecedents and outcomes, functional behavior repertoires, communication skills, potential reinforcers, and treatment history.",
  },
  {
    id: 29041,
    topic: "Indirect Functional Behavior Assessment",
    prompt: "Behavior rating scales such as the Motivation Assessment Scale (MAS) ask informants to do which of the following?",
    options: [
      "Directly observe and record antecedents and consequences during live sessions",
      "Estimate the extent to which behavior occurs under specified conditions using a Likert scale",
      "Conduct brief functional analysis sessions and record the results",
      "Complete an open-ended narrative description of each behavior occurrence"
    ],
    correctIndex: 1,
    explanation: "Behavior rating scales designed for functional assessment ask informants to estimate the extent to which behavior occurs under specified conditions, using a Likert scale (for example, never, seldom, usually, always). Hypotheses about function are based on the scores associated with each condition.",
  },
  {
    id: 29042,
    topic: "Indirect Functional Behavior Assessment",
    prompt: "The Motivation Assessment Scale (MAS) and the Questions About Behavioral Function (QABF) have been found to have which significant limitation?",
    options: [
      "They have been repeatedly demonstrated to be unreliable and of questionable validity in identifying function",
      "They are too time-consuming for practical use in school settings",
      "They require highly specialized training to administer and score",
      "They assess too many behavioral functions to be clinically useful"
    ],
    correctIndex: 0,
    explanation: "The MAS and QABF have been repeatedly demonstrated to be unreliable and therefore of questionable validity in identifying function. Behavior analysts are cautioned about relying on these closed-ended indirect assessment instruments.",
  },
  {
    id: 29043,
    topic: "Conducting a Functional Behavior Assessment",
    prompt: "FBA is best viewed as a four-step process. Which of the following correctly lists all four steps in the proper sequence?",
    options: [
      "Test hypotheses, develop interventions, gather information, formulate hypotheses",
      "Gather information, formulate hypotheses, test hypotheses, develop intervention options",
      "Develop interventions, gather information, test hypotheses, formulate hypotheses",
      "Formulate hypotheses, gather information, develop interventions, test hypotheses"
    ],
    correctIndex: 1,
    explanation: "FBA can best be viewed as a four-step process: (1) gather information with indirect and descriptive assessment, (2) interpret information and formulate hypotheses about the purpose of problem behavior, (3) test hypotheses using functional analysis, and (4) develop intervention options based on the function of problem behavior.",
  },
  {
    id: 29044,
    topic: "Conducting a Functional Behavior Assessment",
    prompt: "Hypothesis statements generated during an FBA should be written in which format?",
    options: [
      "A statement of the diagnosis, behavior topography, and recommended treatment",
      "A statement of the antecedent, behavior topography, and maintaining consequence (ABC format)",
      "A statement of the behavior intensity, frequency, and duration",
      "A statement of the setting, function, and replacement behavior"
    ],
    correctIndex: 1,
    explanation: "Hypothesis statements should be written in ABC format. The hypothesis statement should state the antecedent(s) hypothesized to trigger the problem behavior, the topography of problem behavior, and the maintaining consequence.",
  },
  {
    id: 29045,
    topic: "Conducting a Functional Behavior Assessment",
    prompt: "A behavior analyst is developing an intervention for a student whose problem behavior is maintained by escape. Which of the following interventions is contraindicated?",
    options: [
      "Functional communication training to request breaks",
      "Providing frequent breaks contingent on appropriate behavior",
      "Time-out, in-school suspension, or planned ignoring",
      "Modifying task demands to reduce their aversive properties"
    ],
    correctIndex: 2,
    explanation: "Interventions involving time-out, in-school or out-of-school suspension, or planned ignoring are contraindicated for problem behaviors maintained by escape. These consequences may actually serve as reinforcers if they allow the student to escape from task demands.",
  },
  {
    id: 29046,
    topic: "Conducting a Functional Behavior Assessment",
    prompt: "When an intervention has been developed and implemented based on an FBA, what should happen next?",
    options: [
      "The FBA process is complete and no further assessment is needed",
      "A new FBA should immediately be conducted to verify the intervention",
      "Assessment should continue because functions of behavior are dynamic and may change over time",
      "The same intervention should be maintained indefinitely regardless of outcome"
    ],
    correctIndex: 2,
    explanation: "Assessment is ongoing once intervention is implemented, as it is important for the continued monitoring of intervention effectiveness. The functions of behavior are not static but dynamic and change over time. If the function changes, additional functional analyses may be needed to revise the intervention.",
  },
  {
    id: 29047,
    topic: "Case Examples",
    prompt: "In the case of Marie, her aggression was determined to be maintained by access to tangibles. Which treatment was found to be effective in decreasing her aggression?",
    options: [
      "Extinction alone, without teaching a replacement behavior",
      "Functional communication training (FCT) to teach appropriate requesting for the tangible item",
      "A differential reinforcement of other behavior (DRO) schedule",
      "Removing all preferred tangibles from Marie's environment"
    ],
    correctIndex: 1,
    explanation: "Functional communication training (FCT) was used to teach Marie to ask appropriately for the tangible item. This replacement behavior matched the function of the problem behavior and could efficiently compete for the reinforcer. During training, requests increased and aggression dropped to zero.",
  },
  {
    id: 29048,
    topic: "Case Examples",
    prompt: "In the case of Carson, a trial-based functional analysis revealed that his disruptive behavior was maintained by which function?",
    options: [
      "Escape from academic demands",
      "Access to tangible items",
      "Social positive reinforcement in the form of teacher attention",
      "Automatic reinforcement"
    ],
    correctIndex: 2,
    explanation: "The results of Carson's trial-based functional analysis showed that disruption occurred most often in the attention test condition, supporting the hypothesis that attention was maintaining disruptive behavior. The escape test condition evoked no problem behavior.",
  },
  {
    id: 29049,
    topic: "Case Examples",
    prompt: "In the case of Lorraine, the functional analysis revealed that noncompliance and self-injurious behavior (SIB) served different functions. What were those functions?",
    options: [
      "Noncompliance served an attention function; SIB served an escape function",
      "Both noncompliance and SIB served an escape function",
      "Noncompliance served an escape function; SIB served an attention function",
      "Both noncompliance and SIB served an automatic reinforcement function"
    ],
    correctIndex: 2,
    explanation: "In Lorraine's functional analysis, noncompliance occurred most frequently during the contingent escape condition, suggesting an escape function. SIB occurred most frequently during the contingent attention condition, suggesting an attention function. Different interventions were developed for each behavior accordingly.",
  },
  {
    id: 29050,
    topic: "Case Examples",
    prompt: "In the case of Will, a functional analysis of precursor behavior (verbal outbursts) was conducted instead of directly assessing his physical aggression. What was the primary reason for this decision?",
    options: [
      "Will's physical aggression occurred too frequently to measure accurately",
      "Will's behaviors were so severe that allowing even one occurrence could be dangerous",
      "The functional analysis setting did not have sufficient space to observe aggression safely",
      "Will refused to participate in any condition that involved physical demands"
    ],
    correctIndex: 1,
    explanation: "One of Will's caseworkers was concerned that Will's behaviors were so severe that allowing them to occur even once could be dangerous. Because verbal outbursts reliably preceded Will's aggression, the functional analysis was conducted on the precursor behavior to avoid evoking the severe target behavior.",
  },
];

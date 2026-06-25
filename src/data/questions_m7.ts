import type { Question } from "../types";

/**
 * BCBA practice questions for Cooper et al., Chapter 4: Measuring Behavior.
 * Grounded in the chapter text. Option order is shuffled at runtime, so
 * correctIndex placement here is arbitrary.
 */
export const QUESTIONS_M7: Question[] = [
  {
    id: 6001,
    topic: "Definition and Functions of Measurement",
    prompt: "Measurement in applied behavior analysis entails three steps. Which of the following correctly lists all three steps?",
    options: [
      "Selecting a reinforcer, implementing the intervention, and graphing results",
      "Identifying the behavior, defining it in observable terms, and selecting an observation and data-recording method",
      "Writing a behavior intervention plan, training staff, and collecting interobserver agreement data",
      "Operationalizing empiricism, establishing reliability, and evaluating social validity"
    ],
    correctIndex: 1,
    explanation: "Measurement in ABA entails three steps: (a) identifying the behavior to be measured, (b) defining the behavior in observable terms, and (c) selecting an appropriate observation and data-recording method."
  },
  {
    id: 6002,
    topic: "Definition and Functions of Measurement",
    prompt: "Without measurement, the three levels of scientific knowledge would be relegated to guesswork. Which option correctly names those three levels?",
    options: [
      "Observation, recording, and analysis",
      "Reliability, validity, and generality",
      "Description, prediction, and control",
      "Identification, definition, and measurement"
    ],
    correctIndex: 2,
    explanation: "Without measurement, all three levels of scientific knowledge, description, prediction, and control, would be relegated to guesswork subject to individual prejudices and private opinions."
  },
  {
    id: 6003,
    topic: "Definition and Functions of Measurement",
    prompt: "Frequent measures of behavior obtained during treatment to guide ongoing decisions about continuation, modification, or termination of a program are called:",
    options: [
      "Summative evaluation",
      "Functional assessment",
      "Formative assessment",
      "Normative comparison"
    ],
    correctIndex: 2,
    explanation: "Frequent measures of behavior during treatment constitute formative assessment, enabling dynamic, data-based decision making about continuation, modification, or termination of treatment."
  },
  {
    id: 6004,
    topic: "Definition and Functions of Measurement",
    prompt: "Comparing measurements of a target behavior before and after treatment to evaluate the overall effects of a behavior change program is referred to as:",
    options: [
      "Formative assessment",
      "Summative evaluation",
      "Interobserver agreement",
      "Treatment integrity"
    ],
    correctIndex: 1,
    explanation: "Practitioners compare measurements before and after treatment (sometimes including pre- and post-treatment measures in nontreatment settings) to evaluate overall effects, which is called summative evaluation."
  },
  {
    id: 6006,
    topic: "Measurable Dimensions of Behavior",
    prompt: "Johnston and Pennypacker described three fundamental and measurable dimensional quantities of behavior. Which option lists all three correctly?",
    options: [
      "Frequency, accuracy, and duration",
      "Repeatability, temporal extent, and temporal locus",
      "Count, latency, and magnitude",
      "Rate, topography, and interresponse time"
    ],
    correctIndex: 1,
    explanation: "Johnston and Pennypacker described three dimensional quantities: repeatability (behavior can be counted), temporal extent (behavior has duration), and temporal locus (behavior occurs at a certain point in time relative to other events)."
  },
  {
    id: 6008,
    topic: "Measures Based on Repeatability",
    prompt: "Rate of response is defined as:",
    options: [
      "The physical form or shape of a response",
      "The number of responses per unit of time",
      "The elapsed time between two consecutive responses",
      "The total cumulative time a behavior occurs within a session"
    ],
    correctIndex: 1,
    explanation: "Rate is defined as the number of responses per unit of time, a ratio of count and the observation period in which that count was obtained."
  },
  {
    id: 6010,
    topic: "Measures Based on Repeatability",
    prompt: "A free operant is best characterized by which set of features?",
    options: [
      "Discrete onset and offset, does not depend on a discriminative stimulus, involves minimal displacement in time and space, and can be emitted over a wide range of rates",
      "Requires a specific antecedent stimulus to occur, produces permanent products, and occurs in restricted trial formats",
      "Has no measurable duration, is controlled entirely by consequences, and is always measured by percentage",
      "Involves significant displacement in time and space and is best measured by trials-to-criterion"
    ],
    correctIndex: 0,
    explanation: "Free operants have discrete onsets and offsets, do not depend on discriminative stimuli, involve minimal displacement of the organism in time and space, and can be emitted over a wide range of response rates. Rate is the preferred measure for free operants."
  },
  {
    id: 6013,
    topic: "Measures Based on Repeatability",
    prompt: "Celeration is best defined as:",
    options: [
      "The number of correct responses divided by the total observation time",
      "A measure of count per unit time per unit of time, describing how rates of response change over successive counting periods",
      "The elapsed time between the onset of a stimulus and the initiation of a response",
      "A measure of the cumulative duration of behavior across an observation session"
    ],
    correctIndex: 1,
    explanation: "Celeration is a measure of count per unit time per unit of time (rate per unit of time). It describes how rates of response accelerate or decelerate over successive counting periods and is displayed on the Standard Celeration Chart."
  },
  {
    id: 6014,
    topic: "Measures Based on Temporal Extent",
    prompt: "Duration is defined as:",
    options: [
      "The number of responses emitted per standard unit of time",
      "The elapsed time between two consecutive instances of the same response class",
      "The amount of time from the onset to the end point of a response",
      "The elapsed time between the onset of a stimulus and the initiation of a response"
    ],
    correctIndex: 2,
    explanation: "Duration is the amount of time from the onset to the end point of a response, and it is measured in standard units of time."
  },
  {
    id: 6015,
    topic: "Measures Based on Temporal Extent",
    prompt: "A behavior analyst wants to track how long a child with developmental disabilities engages in tantrums because they can last over an hour. Which type of duration measure would give both the number of tantrums and the length of each one?",
    options: [
      "Total duration per session",
      "Duration per occurrence",
      "Interresponse time",
      "Celeration"
    ],
    correctIndex: 1,
    explanation: "Duration per occurrence measures the duration of each individual instance of the target behavior, which also yields a count of occurrences. It is often preferred over total duration because it captures both the rate and the temporal extent of the behavior."
  },
  {
    id: 6017,
    topic: "Measures Based on Temporal Locus",
    prompt: "Response latency is defined as:",
    options: [
      "The amount of time a behavior continues from onset to offset",
      "The elapsed time between two consecutive instances of a response class",
      "The elapsed time between the onset of a stimulus and the initiation of a subsequent response",
      "The total number of responses emitted during a specified observation period"
    ],
    correctIndex: 2,
    explanation: "Latency is a measure of the elapsed time between the onset of a stimulus and a subsequent response. It is an appropriate measure when the analyst is interested in how much time occurs between opportunities to respond and when the individual actually begins the target behavior."
  },
  {
    id: 6018,
    topic: "Measures Based on Temporal Locus",
    prompt: "Interresponse time (IRT) is defined as:",
    options: [
      "The elapsed time from the onset of a discriminative stimulus to the first response in a session",
      "The amount of time that elapses between two consecutive instances of a behavior",
      "The total session time divided by the number of responses emitted",
      "A measure of the force or intensity with which a response is emitted"
    ],
    correctIndex: 1,
    explanation: "Interresponse time (IRT) is the amount of time that elapses between two consecutive instances of a behavior. It is a measure of temporal locus because it identifies when a specific response occurs relative to the previous response."
  },
  {
    id: 6020,
    topic: "Measures Based on Temporal Locus",
    prompt: "IRT measurement is particularly important when implementing and evaluating which behavioral intervention procedure?",
    options: [
      "Differential reinforcement of other behavior (DRO)",
      "Differential reinforcement of low and high rates (DRL and DRH)",
      "Functional communication training (FCT)",
      "Token economy systems"
    ],
    correctIndex: 1,
    explanation: "IRT provides a basic measure for implementing and evaluating interventions using differential reinforcement of low and high rates (DRL and DRH), which are procedures for using reinforcement to reduce or increase the rate of responding."
  },
  {
    id: 6021,
    topic: "Derivative Measures",
    prompt: "Percentage is defined in applied behavior analysis as:",
    options: [
      "A fundamental dimensional quantity equal to count divided by observation time",
      "A ratio formed by combining the same dimensional quantities, expressing the proportional quantity of an event per 100 opportunities",
      "The cumulative total of all responses emitted across an entire study",
      "A measure of the change in rate of responding over successive time periods"
    ],
    correctIndex: 1,
    explanation: "Percentage is a ratio formed by combining the same dimensional quantities (such as count divided by count, or time divided by time), expressing the proportional quantity of an event in terms of occurrences per 100 opportunities."
  },
  {
    id: 6025,
    topic: "Derivative Measures",
    prompt: "Trials-to-criterion is defined as:",
    options: [
      "The number of sessions required for a treatment to produce statistically significant results",
      "The number of response opportunities needed to achieve a predetermined level of performance",
      "The ratio of correct responses to total responses across all baseline sessions",
      "The minimum number of observations required before a behavior change decision can be made"
    ],
    correctIndex: 1,
    explanation: "Trials-to-criterion is a measure of the number of response opportunities needed to achieve a predetermined level of performance. It is often used to compare the relative efficiency of two or more treatments or instructional methods."
  },
  {
    id: 6027,
    topic: "Definitional Measures",
    prompt: "Topography refers to:",
    options: [
      "The force or intensity with which a response is emitted",
      "The number of times a behavior occurs within a fixed observation period",
      "The physical form or shape of a behavior",
      "The elapsed time between the onset of a stimulus and the response"
    ],
    correctIndex: 2,
    explanation: "Topography is the physical form or shape of a behavior. It is a measurable and malleable dimension because responses of varying form can be detected and are shaped and selected by their consequences."
  },
  {
    id: 6029,
    topic: "Definitional Measures",
    prompt: "Magnitude as a measurable dimension of behavior refers to:",
    options: [
      "The number of times a response occurs within a fixed time period",
      "The elapsed time from onset to offset of a single response",
      "The force or intensity of a response",
      "The sequential order in which component behaviors occur"
    ],
    correctIndex: 2,
    explanation: "Magnitude refers to the force or intensity of a response. The desired outcomes of some behaviors are contingent on responding at or above (or below) a certain intensity or force."
  },
  {
    id: 6030,
    topic: "Definitional Measures",
    prompt: "Topography and magnitude are classified as definitional measures rather than fundamental dimensional quantities because:",
    options: [
      "They cannot be reliably measured in applied settings",
      "They are used to determine whether responses constitute occurrences of the target behavior, but the resulting quantification is reported using fundamental measures such as count or rate",
      "They are only relevant in laboratory studies and have no application in clinical practice",
      "They are derivative measures calculated from count and time data"
    ],
    correctIndex: 1,
    explanation: "Topography and magnitude are not fundamental dimensional quantities but are important parameters for defining and verifying occurrences of many response classes. Occurrences verified on the basis of topography or magnitude are then quantified using fundamental measures such as count, rate, duration, latency, IRT, percentage, or trials-to-criterion."
  },
  {
    id: 6031,
    topic: "Event Recording",
    prompt: "Event recording is most appropriate for which type of target behavior?",
    options: [
      "Continuous behaviors that occur for extended time periods, such as on-task behavior",
      "Behaviors occurring at very high rates, such as rapid body rocking",
      "Discrete behaviors with clear beginning and ending points that do not occur at extremely high rates",
      "Behaviors that leave measurable permanent products in the environment"
    ],
    correctIndex: 2,
    explanation: "Event recording is applicable for target behaviors that have discrete beginning and ending points and do not occur at such high rates that an observer would have difficulty counting each occurrence accurately."
  },
  {
    id: 6033,
    topic: "Time Sampling",
    prompt: "Time sampling methods were originally developed by ethologists to study animal behavior in the field because:",
    options: [
      "Ethologists preferred estimates over exact counts",
      "It was not possible or feasible to observe animals continuously, so systematic schedules of brief but frequent observation intervals were arranged",
      "Animals moved too quickly for event recording to be accurate",
      "Time sampling produces lower observer burden and requires less training than event recording"
    ],
    correctIndex: 1,
    explanation: "Ethologists originally developed time sampling to study the behavior of animals in the field because it was not possible or feasible to observe the animals continuously. Systematic schedules of brief but frequent observation intervals were arranged to collect representative samples."
  },
  {
    id: 6034,
    topic: "Whole-Interval Recording",
    prompt: "In whole-interval recording, an interval is scored as the behavior occurring only if:",
    options: [
      "The behavior occurs at any point during the interval, regardless of duration",
      "The behavior is occurring at the exact moment the interval ends",
      "The behavior occurs throughout the entire interval",
      "The behavior occurs for more than half of the interval duration"
    ],
    correctIndex: 2,
    explanation: "In whole-interval recording, the observer records whether the target behavior occurred throughout the entire interval. An interval is scored only if the behavior was present for the full duration of that interval."
  },
  {
    id: 6036,
    topic: "Partial-Interval Recording",
    prompt: "An observer using partial-interval recording marks an interval as occurring if:",
    options: [
      "The target behavior is present throughout the entire interval",
      "The target behavior is occurring at the exact moment the interval ends",
      "The target behavior occurs at any point during the interval, even for only 1 second",
      "The target behavior occurs for more than 50% of the interval duration"
    ],
    correctIndex: 2,
    explanation: "Partial-interval recording scores an interval as occurring if the behavior occurred at any point during the interval, regardless of how many times or how long. An interval would be scored even if the behavior lasted only 1 second of a 6-second interval."
  },
  {
    id: 6038,
    topic: "Momentary Time Sampling",
    prompt: "In momentary time sampling, the observer records whether the target behavior:",
    options: [
      "Occurred at any point during the interval",
      "Occurred throughout the entire interval",
      "Is occurring at the exact moment the time interval ends",
      "Occurred for more than half of the interval duration"
    ],
    correctIndex: 2,
    explanation: "An observer using momentary time sampling records whether the target behavior occurred at the exact moment the time interval ends, looking at the person at that precise point and immediately indicating the presence or absence of the behavior."
  },
  {
    id: 6041,
    topic: "Planned Activity Check",
    prompt: "Planned activity check (PLACHECK) is a variation of momentary time sampling used to measure:",
    options: [
      "The duration of an individual client's target behavior across multiple settings",
      "Group behavior by recording at the end of each interval the number of individuals in a group engaged in a targeted activity",
      "The latency between a teacher instruction and each student's response",
      "The rate of problem behavior for each individual student using event recording"
    ],
    correctIndex: 1,
    explanation: "PLACHECK is a variation of momentary time sampling that uses head counts to measure group behavior. At the end of each time interval, the observer counts the number of individuals in a group engaged in the targeted activity and records the tally with the total number of people in the group."
  },
  {
    id: 6043,
    topic: "Recognizing Discrepancies Among Time Sampling Methods",
    prompt: "The misleading measures of 30% (whole-interval) and 70% (partial-interval) for a behavior that actually occurred 55% of the time are best described as:",
    options: [
      "Observer errors caused by inadequate training",
      "Artifacts of the measurement methods used to obtain them",
      "Evidence that time sampling is always less reliable than event recording",
      "Results of interobserver disagreement between the two observers"
    ],
    correctIndex: 1,
    explanation: "These misleading data are artifacts of the measurement methods. An artifact is a phenomenon that appears to exist because of the way it is examined or measured. The consistent underestimation by whole-interval and overestimation by partial-interval recording are well-known artifacts of those methods."
  },
  {
    id: 6044,
    topic: "Measuring Behavior by Permanent Products",
    prompt: "Measurement by permanent product refers to:",
    options: [
      "Observing and recording behavior exactly as it occurs in real time",
      "Measuring behavior after it has occurred by observing the effects the behavior produced on the environment",
      "Using interval recording to estimate the proportion of time a behavior occurs",
      "Any measurement procedure in which two observers simultaneously record the same behavior"
    ],
    correctIndex: 1,
    explanation: "Measuring behavior after it has occurred by observing the effects the behavior produced on the environment is known as measurement by permanent product. A permanent product is a change in the environment produced by a behavior that lasts long enough for measurement to take place."
  },
  {
    id: 6045,
    topic: "Measuring Behavior by Permanent Products",
    prompt: "Rule 1 for using permanent products states that each occurrence of the target behavior must produce the same permanent product. Which example violates this rule?",
    options: [
      "Counting correctly assembled widgets in a completed work bin",
      "Counting spelling words written correctly on a worksheet",
      "Using marks on the skin to measure self-injurious behavior, because some responses leave no discernible marks",
      "Using written math computation answers to assess calculation skills"
    ],
    correctIndex: 2,
    explanation: "Measuring SIB by marks on the skin violates Rule 1 because some SIB responses will not leave discernible marks, meaning not every occurrence produces the same permanent product."
  },
  {
    id: 6047,
    topic: "Measuring Behavior by Permanent Products",
    prompt: "Which of the following is listed as an advantage of measuring behavior by permanent product?",
    options: [
      "It always provides moment-to-moment data needed for real-time treatment decisions",
      "It eliminates all reactivity effects because the observer is not present during behavior",
      "It enables measurement of some behaviors that occur at inconvenient or inaccessible times and places",
      "It requires no special equipment and is always less expensive than direct observation"
    ],
    correctIndex: 2,
    explanation: "One advantage of permanent product measurement is that it enables measurement of behaviors that occur at times and places that are inconvenient or inaccessible to the researcher or practitioner, such as a student's home practice of a musical instrument."
  },
  {
    id: 6049,
    topic: "Measurement Tools",
    prompt: "Which of the following is described as a low-tech measurement tool with a history of use in applied behavior analysis?",
    options: [
      "BDataPro software on a laptop computer",
      "A vibrating tactile prompting device programmed to signal observation intervals",
      "A wrist counter used to tally occurrences of behavior",
      "PROCODER software for facilitating collection and analysis of video-recorded behavior"
    ],
    correctIndex: 2,
    explanation: "Wrist counters are described as low-tech measurement tools useful for tallying behavior. They are functional, easy to use, and inexpensive. Most wrist counters record from 0 to 99 responses and can be purchased from sporting goods stores."
  },
  {
    id: 6050,
    topic: "Selecting a Measurement Method",
    prompt: "A behavior analyst must select a measurement method for a student whose out-of-seat behavior is a concern. The analyst wants to know both how many times the student leaves her seat and how long she stays out of her seat each time. Which measurement approach best captures both dimensions?",
    options: [
      "Whole-interval recording, because it estimates total duration",
      "Momentary time sampling, because it is the least burdensome for the observer",
      "Duration per occurrence, because it measures both the count (repeatability) and the temporal extent of each instance",
      "Trials-to-criterion, because it provides an ex post facto description of the behavior"
    ],
    correctIndex: 2,
    explanation: "Duration per occurrence is often preferable to total duration because it captures both the number of times the student was out of her seat (rate, repeatability) and the duration of each occurrence (temporal extent). It provides the analyst with information on both dimensions simultaneously."
  },
];

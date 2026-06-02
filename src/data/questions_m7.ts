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
    id: 6005,
    topic: "Definition and Functions of Measurement",
    prompt: "A behavior analyst who does not obtain and attend to frequent measures of the target behavior risks making which two types of errors?",
    options: [
      "Failing to define behavior in measurable terms and failing to train observers",
      "Continuing an ineffective treatment and discontinuing an effective treatment prematurely",
      "Selecting the wrong reinforcer and using an inappropriate data sheet",
      "Overfitting the data and underestimating baseline variability"
    ],
    correctIndex: 1,
    explanation: "Without frequent measurement, practitioners risk (a) continuing an ineffective treatment when no real behavior change has occurred and (b) discontinuing an effective treatment because subjective judgment detects no improvement."
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
    id: 6007,
    topic: "Measures Based on Repeatability",
    prompt: "A teacher records that a student raised her hand 5 times on Monday, 5 times on Tuesday, and 5 times on Wednesday. Without additional information, why might these count measures be difficult to interpret?",
    options: [
      "Count measures do not distinguish correct from incorrect responses",
      "Count alone does not account for the observation period, so response rates cannot be compared",
      "Count measures require a minimum of 30 opportunities to be valid",
      "Count measures are only appropriate for behaviors measured by permanent product"
    ],
    correctIndex: 1,
    explanation: "Count measures alone may not provide enough information because the observation period should always be noted. The same count obtained over very different observation durations yields very different interpretations of behavior."
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
    id: 6009,
    topic: "Measures Based on Repeatability",
    prompt: "Skinner considered which measure to be the basic measurement for behavioral research and invented a device to automatically record it?",
    options: [
      "Latency, recorded with the response cost meter",
      "Rate of response, recorded with the cumulative recorder",
      "Duration, recorded with the digital stopwatch",
      "Percentage correct, recorded with the data sheet"
    ],
    correctIndex: 1,
    explanation: "Skinner considered rate of response the basic measurement for behavioral research and invented the cumulative recorder, a device that automatically produced a graphic record of operant response rates."
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
    id: 6011,
    topic: "Measures Based on Repeatability",
    prompt: "When assessing skill development, why is it important to calculate both correct and incorrect rates of response rather than correct rate alone?",
    options: [
      "Because incorrect rate tells the analyst how long each response takes",
      "Because correct rate alone could show improving performance even if the rate of incorrect responding is also increasing",
      "Because incorrect rate is used to calculate interresponse time",
      "Because the BACB ethics code requires both rates to be reported at all times"
    ],
    correctIndex: 1,
    explanation: "Calculating both correct and incorrect rates is crucial because correct rate alone could show improving performance while incorrect responding is also increasing, creating an illusory picture of progress. Fluency requires accurate responses, so both rates are needed."
  },
  {
    id: 6012,
    topic: "Measures Based on Repeatability",
    prompt: "Rate of response is an inappropriate measure for behaviors that occur within discrete trials because:",
    options: [
      "Discrete trial behaviors happen too quickly to time accurately",
      "The response rate of discrete trial behaviors is controlled by the presentation of a discriminative stimulus, making the behavior opportunity-bound",
      "Discrete trials always produce permanent products that are measured separately",
      "Rate measures require a minimum observation period of 30 minutes to be valid"
    ],
    correctIndex: 1,
    explanation: "Behaviors occurring within discrete trials are controlled by the presentation of a discriminative stimulus. Because they are opportunity-bound, measures such as percentage of opportunities or trials-to-criterion should be used instead of rate."
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
    id: 6016,
    topic: "Measures Based on Temporal Extent",
    prompt: "When the duration of observation periods varies from session to session, total duration per session data should be:",
    options: [
      "Reported in raw seconds only, with no conversion necessary",
      "Converted to a percentage of total time observed",
      "Replaced with a count measure to maintain consistency",
      "Discarded and recollected using fixed observation periods"
    ],
    correctIndex: 1,
    explanation: "If the duration of observation periods varies, total duration per session data must be converted to a percentage of total time observed so that sessions can be meaningfully compared."
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
    id: 6019,
    topic: "Measures Based on Temporal Locus",
    prompt: "IRT is functionally related to rate of response in which way?",
    options: [
      "Shorter IRTs coexist with higher response rates; longer IRTs occur with lower response rates",
      "Longer IRTs coexist with higher response rates; shorter IRTs occur with lower response rates",
      "IRT and rate are independent measures that share no mathematical relationship",
      "IRT replaces rate as the preferred measure whenever duration is also being recorded"
    ],
    correctIndex: 0,
    explanation: "Although IRT is a direct measure of temporal locus, it is functionally related to rate of response. Shorter IRTs coexist with higher rates of response, and longer IRTs occur within lower response rates."
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
    id: 6022,
    topic: "Derivative Measures",
    prompt: "A limitation of percentage as a behavioral measure is that it imposes upper and lower limits on data. Which of the following illustrates this limitation?",
    options: [
      "Percentage cannot be used with behaviors that occur in discrete trials",
      "A learner who correctly reads 100% of presented words cannot improve according to that measure",
      "Percentage cannot be compared across observers who use different data sheets",
      "Percentage is undefined when the observation period is less than 10 minutes"
    ],
    correctIndex: 1,
    explanation: "Using percent correct establishes an artificial ceiling. A learner who correctly reads 100% of words presented cannot show further improvement on that measure, illustrating the upper limit imposed by percentage."
  },
  {
    id: 6023,
    topic: "Derivative Measures",
    prompt: "Guilford cautioned that it is unwise to compute percentages with divisors smaller than what number?",
    options: [
      "10",
      "20",
      "30",
      "50"
    ],
    correctIndex: 1,
    explanation: "Guilford cautioned that it is unwise to compute percentages with divisors smaller than 20. For research purposes, the recommendation is that percentages be based on no fewer than 30 response opportunities or observation intervals."
  },
  {
    id: 6024,
    topic: "Derivative Measures",
    prompt: "Why can percentage not be used to assess fluent or proficient performance?",
    options: [
      "Because fluency is measured only with topographical criteria",
      "Because fluency requires referencing count and time, and percentage has no dimensional quantities",
      "Because percentage always overestimates proficiency in high-rate behaviors",
      "Because fluency data must be displayed on the Standard Celeration Chart, not as percentages"
    ],
    correctIndex: 1,
    explanation: "Percentage has no dimensional quantities (the quantity is canceled out in the ratio), so it cannot be used to assess proficiency or fluency. An assessment of proficiency must reference count and time."
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
    id: 6026,
    topic: "Derivative Measures",
    prompt: "A teacher uses trials-to-criterion data to compare two spelling practice methods and finds that students master words faster with Method A. This use of trials-to-criterion is best described as:",
    options: [
      "A summative evaluation of overall treatment efficacy",
      "A measure of the relative efficiency of two instructional methods",
      "A formative assessment of ongoing skill development",
      "An artifact of interval-based measurement"
    ],
    correctIndex: 1,
    explanation: "Trials-to-criterion data are frequently used to compare the relative efficiency of two or more treatments or instructional methods, helping determine which approach achieves the performance criterion in fewer practice opportunities."
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
    id: 6028,
    topic: "Definitional Measures",
    prompt: "Which statement best characterizes the relationship between topography and response class membership?",
    options: [
      "All responses within a response class must share the exact same topography",
      "Responses with widely different topographies can serve the same function and form a response class, but some classes require a narrow range of topographies",
      "Topography is irrelevant to response class membership because only function matters",
      "Response class membership is determined entirely by the magnitude of the response, not its form"
    ],
    correctIndex: 1,
    explanation: "A group of responses with widely different topographies may serve the same function and form a response class. However, membership in some response classes is limited to responses within a narrow range of topographies, such as advanced calligraphy."
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
    id: 6032,
    topic: "Event Recording",
    prompt: "Why is event recording a poor choice for measuring a behavior like humming?",
    options: [
      "Humming occurs too rarely to make event recording cost-effective",
      "An observer would have difficulty determining when one hum ends and another begins because the behavior lacks discrete boundaries",
      "Humming produces permanent products that make event recording unnecessary",
      "Event recording requires a minimum response rate of at least five per minute to be reliable"
    ],
    correctIndex: 1,
    explanation: "Behaviors such as humming are hard to measure with event recording because an observer would have difficulty determining when one hum ends and another begins. The behavior lacks the discrete beginning and ending points required for event recording."
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
    id: 6035,
    topic: "Whole-Interval Recording",
    prompt: "Data obtained with whole-interval recording typically:",
    options: [
      "Overestimate the overall proportion of time in which the behavior actually occurred",
      "Provide an exact measure equal to continuous duration recording",
      "Underestimate the overall percentage of the observation period in which the behavior actually occurred",
      "Are equivalent to partial-interval recording when intervals are shorter than 10 seconds"
    ],
    correctIndex: 2,
    explanation: "Data obtained with whole-interval recording usually underestimate the overall percentage of the observation period in which the behavior actually occurred. The longer the observation intervals, the greater the degree of underestimation."
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
    id: 6037,
    topic: "Partial-Interval Recording",
    prompt: "Compared to continuous duration recording, partial-interval recording tends to:",
    options: [
      "Underestimate the total duration of the behavior",
      "Produce data identical to whole-interval recording",
      "Overestimate the overall proportion of the observation period in which the behavior occurred",
      "Accurately represent both rate and duration of behavior"
    ],
    correctIndex: 2,
    explanation: "Data obtained with partial-interval recording often overestimate the overall percentage of the observation period in which the behavior actually occurred, because any brief occurrence during an interval scores the entire interval as a behavior occurrence."
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
    id: 6039,
    topic: "Momentary Time Sampling",
    prompt: "A major advantage of momentary time sampling compared to interval recording methods is that:",
    options: [
      "It provides an exact count of each discrete response occurrence",
      "The observer does not have to attend continuously to measurement, reducing observer burden",
      "It is the most accurate method for measuring low-count, short-duration behaviors",
      "It eliminates the possibility of measurement artifacts"
    ],
    correctIndex: 1,
    explanation: "A major advantage of momentary time sampling is that the observer does not have to attend continuously to measurement, whereas interval recording methods demand the observer's undivided attention throughout each interval."
  },
  {
    id: 6040,
    topic: "Momentary Time Sampling",
    prompt: "Momentary time sampling is not recommended for measuring which type of behavior?",
    options: [
      "Continuous activity behaviors such as engagement with a task",
      "Low-count, short-duration behaviors",
      "Behaviors that occur at high and relatively stable rates",
      "Group behaviors measured with a head count"
    ],
    correctIndex: 1,
    explanation: "Momentary time sampling is not recommended for measuring low-count, short-duration behaviors because the person is observed for only a brief moment and much behavior will be missed."
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
    id: 6042,
    topic: "Recognizing Discrepancies Among Time Sampling Methods",
    prompt: "In the example comparing time sampling methods with continuous duration recording (55% actual occurrence), what result did each method yield?",
    options: [
      "Whole-interval: 70%; partial-interval: 30%; momentary time sampling: 55%",
      "Whole-interval: 55%; partial-interval: 55%; momentary time sampling: 55%",
      "Whole-interval: 30%; partial-interval: 70%; momentary time sampling: 50%",
      "Whole-interval: 50%; partial-interval: 55%; momentary time sampling: 30%"
    ],
    correctIndex: 2,
    explanation: "The comparison showed that for a behavior occurring 55% of the time by continuous duration recording, whole-interval recording yielded 30% (underestimate), partial-interval recording yielded 70% (overestimate), and momentary time sampling yielded 50% (fairly close estimate)."
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
    id: 6046,
    topic: "Measuring Behavior by Permanent Products",
    prompt: "Rule 2 for using permanent products states that the permanent product can be produced only by the target behavior. A correctly assembled widget in an employee's bin would violate Rule 2 if:",
    options: [
      "The employee assembled more widgets than required",
      "Another person placed assembled widgets in the employee's bin",
      "The employee worked faster than the baseline rate",
      "The widget assembly task required more than five operational steps"
    ],
    correctIndex: 1,
    explanation: "Rule 2 requires that the permanent product cannot result from the behavior of anyone other than the participant. If another person placed assembled objects in the employee's completed work bin, the permanent product no longer exclusively reflects the target behavior."
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
    id: 6048,
    topic: "Measuring Behavior by Permanent Products",
    prompt: "When is real-time measurement necessary and measurement by permanent product not warranted?",
    options: [
      "When the behavior produces a contrived rather than natural permanent product",
      "When moment-to-moment treatment decisions must be made based on the participant's behavior during the session",
      "When two observers are available to achieve interobserver agreement simultaneously",
      "When the behavior occurs at a rate lower than once per session"
    ],
    correctIndex: 1,
    explanation: "When moment-to-moment treatment decisions must be made according to the participant's behavior during the session, real-time measurement is necessary. Permanent product measurement is typically conducted after the session has ended."
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

import type { Question } from "../types";

/**
 * BCBA practice questions for Cooper et al., Chapter 5: Improving and Assessing the Quality of Behavioral Measurement.
 * Grounded in the chapter text. Option order is shuffled at runtime, so
 * correctIndex placement here is arbitrary.
 */
export const QUESTIONS_M8: Question[] = [
  {
    id: 7001,
    topic: "Indicators of Trustworthy Measurement",
    prompt: "Measurement has validity when it yields data directly relevant to the phenomenon measured and to the reason(s) for measuring it. Which of the following questions best captures the central concern of measurement validity?",
    options: [
      "Were the same values obtained across repeated measurements of the same event?",
      "Did the observed values match the true value of the event?",
      "Was a relevant dimension of the behavior measured directly and legitimately?",
      "Was human error minimized through adequate observer training?"
    ],
    correctIndex: 2,
    explanation: "Validity revolves around whether a relevant dimension of the target behavior was measured directly and legitimately. Consistency across repeated measures describes reliability, and correspondence to true values describes accuracy.",
  },
  {
    id: 7002,
    topic: "Indicators of Trustworthy Measurement",
    prompt: "Valid measurement in applied behavior analysis requires three equally important elements. Which combination correctly identifies all three?",
    options: [
      "Measuring a socially significant behavior directly, measuring a relevant dimension of it, and ensuring data are representative of relevant conditions and times",
      "Measuring indirectly when direct access is unavailable, achieving high interobserver agreement, and calibrating timing devices",
      "Training observers to a criterion, using continuous measurement, and computing IOA for every session",
      "Avoiding measurement artifacts, using naive observers, and reporting accuracy assessments in research reports"
    ],
    correctIndex: 0,
    explanation: "The three elements of valid measurement are: (a) directly measuring a socially significant target behavior, (b) measuring a dimension relevant to the question about the behavior, and (c) ensuring data represent the behavior under the most relevant conditions and times.",
  },
  {
    id: 7003,
    topic: "Indicators of Trustworthy Measurement",
    prompt: "Accuracy in behavioral measurement refers to the extent to which observed values match the true value of the event. What is required for obtaining a true value?",
    options: [
      "Having at least two observers independently record the same events",
      "Using procedures that differ from those used to produce the data being evaluated and that minimize the possibility of error",
      "Achieving 80% or higher interobserver agreement across all sessions",
      "Using the identical procedures that produced the original data but with a more experienced observer"
    ],
    correctIndex: 1,
    explanation: "Obtaining a true value requires observation and recording procedures that must be at least somewhat different from those used to produce the data being evaluated, and the differences must minimize the possibility of error to an uncommon degree.",
  },
  {
    id: 7005,
    topic: "Indicators of Trustworthy Measurement",
    prompt: "Measurement bias is best defined as which of the following?",
    options: [
      "Nonrandom measurement error that is likely to be consistently in one direction",
      "Random measurement error that is equally likely to overestimate or underestimate a true value",
      "The degree of inconsistency between two independent observers' records",
      "An unintended change in an observer's use of a measurement system over time"
    ],
    correctIndex: 0,
    explanation: "Measurement bias refers to nonrandom measurement error, specifically error that is likely to be consistently in one direction (e.g., consistently overestimating the true value). This differs from random error, which is equally likely to overestimate or underestimate.",
  },
  {
    id: 7007,
    topic: "Threats to Valid Measurement",
    prompt: "A school psychologist uses a student's score on a standardized social skills questionnaire as an indicator of how often the student actually initiates peer interactions. This is an example of which threat to measurement validity?",
    options: [
      "Observer drift",
      "Measurement artifact",
      "Poorly scheduled measurement periods",
      "Indirect measurement"
    ],
    correctIndex: 3,
    explanation: "Indirect measurement occurs when a proxy or stand-in is measured rather than the actual behavior of interest. Using a questionnaire score as an indicator of actual peer-initiation frequency requires an inference and is therefore indirect measurement.",
  },
  {
    id: 7008,
    topic: "Threats to Valid Measurement",
    prompt: "Direct measurement in applied behavior analysis is defined as measurement in which the behavior measured is:",
    options: [
      "Observed continuously without any sampling procedures",
      "Calibrated against a known standard or true value",
      "Exactly the same as the behavior that is the focus of the investigation or behavior change program",
      "Recorded by two or more independent observers simultaneously"
    ],
    correctIndex: 2,
    explanation: "Direct measurement occurs when the behavior measured is exactly the same as the behavior that is the focus of the investigation or behavior change program. It does not require an inference about its relation to the behavior of interest.",
  },
  {
    id: 7010,
    topic: "Threats to Valid Measurement",
    prompt: "A measurement artifact is best described as data that:",
    options: [
      "Are collected by an inadequately trained observer",
      "Result from comparing observed values with true values",
      "Give an unwarranted or misleading picture of behavior because of the way measurement was conducted",
      "Are inconsistent across repeated measurements of the same event"
    ],
    correctIndex: 2,
    explanation: "A measurement artifact is data that give an unwarranted or misleading picture of the behavior because of the way measurement was conducted, not because of any actual change in the behavior itself.",
  },
  {
    id: 7011,
    topic: "Threats to Valid Measurement",
    prompt: "Continuous measurement is considered the gold standard in behavior analysis research and practice. It is defined as measurement that:",
    options: [
      "Uses two or more independent observers recording simultaneously",
      "Detects all instances of the target behavior during the observation period",
      "Is scheduled at daily or very frequent intervals across a study",
      "Employs automated data collection technology exclusively"
    ],
    correctIndex: 1,
    explanation: "Continuous measurement is measurement that detects all instances of the target behavior during the observation period. It is the gold standard because it provides the most complete and representative picture of behavior.",
  },
  {
    id: 7014,
    topic: "Threats to Valid Measurement",
    prompt: "Poorly scheduled measurement periods can produce data that are an artifact of when measurement occurred rather than actual behavior. When data will be used to assess the effects of an intervention on a behavior targeted for reduction, when should observations be scheduled?",
    options: [
      "During times when the behavior is least likely to occur, to demonstrate the intervention's impact",
      "Randomly throughout the day to ensure representativeness",
      "Only at times that are convenient for the observer's schedule",
      "During times when the behavior is most likely to occur at its highest rate"
    ],
    correctIndex: 3,
    explanation: "For behaviors targeted for reduction, the most conservative observation times are when those behaviors are most likely to occur at their highest rates. Measuring at high-rate times is the most stringent test of whether the intervention is effective.",
  },
  {
    id: 7016,
    topic: "Threats to Accurate and Reliable Measurement",
    prompt: "In applied behavior analysis, what is identified as the biggest overall threat to the accuracy and reliability of behavioral data?",
    options: [
      "Human error by observers",
      "Automated data collection technology failures",
      "Poorly defined target behaviors",
      "Using discontinuous measurement methods"
    ],
    correctIndex: 0,
    explanation: "Human error is identified as the biggest threat to the accuracy and reliability of data in applied behavior analysis, because most ABA investigations use human observers rather than automated measurement systems.",
  },
  {
    id: 7018,
    topic: "Threats to Accurate and Reliable Measurement",
    prompt: "Observer drift is best defined as:",
    options: [
      "Random measurement error caused by fatigue during long observation sessions",
      "A deliberate shift in an observer's behavior when the observer knows the study's hypothesis",
      "Unintended changes in the way an observer applies a measurement system over the course of a study",
      "The systematic underestimation of behavior that occurs when observation intervals are too long"
    ],
    correctIndex: 2,
    explanation: "Observer drift refers to unintended changes in the way an observer applies a measurement system over the course of a study, usually involving a shift in interpretation of the target behavior definition. Observers are typically unaware that drift has occurred.",
  },
  {
    id: 7019,
    topic: "Threats to Accurate and Reliable Measurement",
    prompt: "Which strategy is most effective for minimizing observer drift across the course of an investigation?",
    options: [
      "Providing occasional retraining or booster sessions with feedback on accuracy and reliability",
      "Keeping observers naive about the study's purpose and hypotheses",
      "Having observers work independently without any contact with other observers",
      "Using the simplest possible measurement code with only one or two behaviors"
    ],
    correctIndex: 0,
    explanation: "Occasional observer retraining or booster sessions throughout the investigation can minimize observer drift by providing observers with frequent feedback on the accuracy and reliability of measurement. These can be scheduled at regular or random intervals.",
  },
  {
    id: 7020,
    topic: "Threats to Accurate and Reliable Measurement",
    prompt: "An observer believes that a token economy intervention should decrease a student's inappropriate behavior. As a result, she records fewer inappropriate behaviors during the token condition than she would have otherwise. This is an example of:",
    options: [
      "Measurement bias caused by observer expectations",
      "Observer reactivity",
      "Observer drift",
      "Indirect measurement"
    ],
    correctIndex: 0,
    explanation: "Data influenced by an observer's expectations or efforts to obtain results that will please the researcher are characterized by measurement bias. When an observer's belief about predicted outcomes shapes what she records, it is measurement bias caused by observer expectations.",
  },
  {
    id: 7022,
    topic: "Threats to Accurate and Reliable Measurement",
    prompt: "Observer reactivity is measurement error resulting from:",
    options: [
      "An observer's awareness that his behavior is being observed by the subject",
      "The observer recording behavior at a time different from when the behavior occurred",
      "An observer applying the wrong recording procedure for the type of behavior",
      "An observer's awareness that others are evaluating the data he reports"
    ],
    correctIndex: 3,
    explanation: "Observer reactivity is measurement error resulting from an observer's awareness that others are evaluating the data he reports. Knowing that a researcher or another observer is watching the same behavior, or will monitor recordings later, can influence what the observer records.",
  },
  {
    id: 7024,
    topic: "Threats to Accurate and Reliable Measurement",
    prompt: "When selecting potential data collectors, a systematic approach recommends interviewing candidates to determine several factors. Which factor is NOT specifically mentioned as part of the selection interview?",
    options: [
      "Past experiences with observation and measurement activities",
      "Undergraduate GPA and academic credentials",
      "Current schedule and upcoming commitments",
      "Work ethic and motivation"
    ],
    correctIndex: 1,
    explanation: "The selection interview is recommended to cover past observation experience, current schedule and commitments, work ethic and motivation, and overall social skills. Undergraduate GPA is not mentioned as a recommended screening criterion.",
  },
  {
    id: 7026,
    topic: "Assessing the Accuracy of Measurement",
    prompt: "Conducting accuracy assessments serves four interrelated purposes. Which of the following is NOT one of those four purposes?",
    options: [
      "Replacing interobserver agreement as the primary indicator of measurement quality",
      "Determining early whether the data are good enough for experimental or treatment decisions",
      "Enabling discovery and correction of specific instances of measurement error",
      "Revealing consistent patterns of measurement error that can lead to calibration"
    ],
    correctIndex: 0,
    explanation: "The four purposes of accuracy assessments are: (1) determining early if data are usable, (2) discovering and correcting errors, (3) revealing consistent error patterns for calibration, and (4) assuring consumers of data trustworthiness. Replacing IOA is not one of the stated purposes.",
  },
  {
    id: 7027,
    topic: "Assessing the Accuracy of Measurement",
    prompt: "Calibration of a measurement system entails:",
    options: [
      "Comparing the data produced by a measurement system to a known standard or true value and adjusting the system if necessary",
      "Having two independent observers measure the same events and comparing their totals",
      "Scheduling observation sessions randomly across conditions and phases",
      "Training observers to a pre-established criterion before collecting actual data"
    ],
    correctIndex: 0,
    explanation: "Calibration entails comparing the data produced by a measurement system to a known standard or true value and, if necessary, adjusting the measurement system so the data it produces match the known standard.",
  },
  {
    id: 7028,
    topic: "Assessing the Accuracy of Measurement",
    prompt: "What two requirements must be met by any procedure used to establish true values for behavioral measurement?",
    options: [
      "The procedure must be performed by at least two trained observers and must be conducted in the natural environment",
      "The procedure must be different from that used to collect the data being evaluated and must incorporate extraordinary steps that avoid or remove possible sources of error",
      "The procedure must achieve at least 95% agreement with an independent standard and must be repeated three or more times",
      "The procedure must use automated recording technology and must be conducted by someone naive to the study's hypothesis"
    ],
    correctIndex: 1,
    explanation: "There are two requirements for establishing true values: (a) the procedure must be different from that used to collect the data being evaluated, and (b) the procedure must incorporate extraordinary steps that avoid or remove possible sources of error.",
  },
  {
    id: 7031,
    topic: "Assessing the Reliability of Measurement",
    prompt: "Assessing the reliability of behavioral measurement requires a natural or contrived permanent product so the observer can re-measure the same events. To prevent measures from the second scoring being influenced by memory of the first scoring, a researcher should:",
    options: [
      "Have two different observers conduct the initial and second measurements",
      "Conduct the second measurement immediately after the first to capitalize on memory accuracy",
      "Require the observer to wait exactly 24 hours between the first and second scoring",
      "Insert previously scored products randomly into the sequence of new data before re-scoring"
    ],
    correctIndex: 3,
    explanation: "To avoid memory contamination of the second scoring, a researcher can insert several previously scored essays or videos randomly into the sequence of new data being recorded by observers, preventing the observer from knowing which products have been scored before.",
  },
  {
    id: 7032,
    topic: "Assessing the Reliability of Measurement",
    prompt: "Which statement best captures why high reliability alone is insufficient evidence that data should be trusted?",
    options: [
      "Reliability assessments cannot detect observer drift.",
      "A measurement system may consistently produce the same inaccurate value, meaning reliable data can still be wrong.",
      "Reliable data from permanent products cannot be used in published research.",
      "Reliability assessments require true values, which are often unavailable."
    ],
    correctIndex: 1,
    explanation: "Highly reliable measurement means whatever degree of accuracy or inaccuracy exists will be revealed consistently. A system that consistently overestimates or underestimates true values is both reliable and inaccurate, as illustrated by the bicycle computer example.",
  },
  {
    id: 7033,
    topic: "Using Interobserver Agreement to Assess Behavioral Measurement",
    prompt: "Interobserver agreement (IOA) is defined as:",
    options: [
      "The degree to which observed values match the true value of the event",
      "The percentage of sessions in which observer drift was detected and corrected",
      "The consistency with which a single observer applies a measurement system across sessions",
      "The degree to which two or more independent observers report the same observed values after measuring the same events"
    ],
    correctIndex: 3,
    explanation: "Interobserver agreement (IOA) refers to the degree to which two or more independent observers report the same observed values after measuring the same events. It is the most commonly used indicator of measurement quality in ABA.",
  },
  {
    id: 7036,
    topic: "IOA for Event Recording",
    prompt: "Total count IOA for event recording is calculated by:",
    options: [
      "Dividing the number of intervals in which observers agreed by the total number of intervals",
      "Adding each interval's IOA percentage and dividing by the number of intervals",
      "Dividing the shorter duration by the longer duration and multiplying by 100",
      "Dividing the smaller count by the larger count and multiplying by 100"
    ],
    correctIndex: 3,
    explanation: "Total count IOA is calculated by dividing the smaller of the counts recorded by each observer by the larger count and multiplying by 100. It is the simplest but also the crudest indicator of agreement for event recording data.",
  },
  {
    id: 7038,
    topic: "IOA for Event Recording",
    prompt: "Mean count-per-interval IOA increases the likelihood that agreement is meaningful compared to total count IOA by:",
    options: [
      "Requiring at least three independent observers to record the same events",
      "Dividing the observation period into smaller intervals, comparing counts within each interval, and averaging the interval agreements",
      "Counting only trials in which behavior did not occur and comparing those counts across observers",
      "Using the exact same formula as total count IOA but applied to each individual occurrence"
    ],
    correctIndex: 1,
    explanation: "Mean count-per-interval IOA increases meaningfulness by dividing the observation period into smaller counting intervals, having observers record counts within each interval, calculating IOA for each interval, and then averaging those interval agreements across the session.",
  },
  {
    id: 7040,
    topic: "IOA for Event Recording",
    prompt: "Trial-by-trial IOA for discrete trial data is considered more conservative and meaningful than total count IOA because:",
    options: [
      "It uses only intervals in which at least one observer recorded the occurrence of the behavior",
      "It divides the shorter total count by the longer total count, which is a more rigorous formula",
      "It requires observers to be physically separated during the observation period",
      "It compares observer agreement on each individual trial rather than only on overall session totals"
    ],
    correctIndex: 3,
    explanation: "Trial-by-trial IOA is more conservative because it compares the observers' records on a trial-by-trial basis rather than comparing only overall session totals. Total count IOA can appear high even when observers disagreed on many individual trials.",
  },
  {
    id: 7041,
    topic: "IOA for Timing Data",
    prompt: "For duration-per-occurrence data, which IOA method is described as more conservative and meaningful than total duration IOA?",
    options: [
      "Interval-by-interval IOA",
      "Scored-interval IOA",
      "Mean duration-per-occurrence IOA",
      "Exact count-per-interval IOA"
    ],
    correctIndex: 2,
    explanation: "Mean duration-per-occurrence IOA is a more conservative and usually more meaningful assessment of IOA for total duration data. It compares observers' timings for each individual occurrence rather than summing all durations, which can mask disagreements on specific responses.",
  },
  {
    id: 7043,
    topic: "IOA for Interval Recording",
    prompt: "Interval-by-interval IOA is calculated using which formula?",
    options: [
      "Number of intervals agreed divided by (intervals agreed plus intervals disagreed), multiplied by 100",
      "Number of scored intervals in which both observers recorded occurrence divided by total scored intervals, multiplied by 100",
      "Shorter total duration divided by longer total duration, multiplied by 100",
      "Number of intervals with 100% agreement divided by total number of intervals, multiplied by 100"
    ],
    correctIndex: 0,
    explanation: "Interval-by-interval IOA is calculated by dividing the number of intervals in which both observers agreed (on either occurrence or nonoccurrence) by the total number of intervals (agreements plus disagreements) and multiplying by 100.",
  },
  {
    id: 7044,
    topic: "IOA for Interval Recording",
    prompt: "Interval-by-interval IOA tends to overestimate actual agreement when behavior occurs at very low or very high rates because:",
    options: [
      "Observers tend to record all intervals as the same value when behavior is extreme in frequency",
      "There is a high probability of chance agreement in most intervals for behaviors that rarely occur or almost always occur",
      "The formula treats scored and unscored intervals equally, reducing sensitivity to rare events",
      "The formula counts agreements on nonoccurrence only, missing true occurrences"
    ],
    correctIndex: 1,
    explanation: "Interval-by-interval IOA is subject to random or accidental agreement. For behaviors that occur very rarely, observers are likely to mark most intervals as nonoccurrence, resulting in high apparent agreement by chance. Similarly, for behaviors occurring very frequently, most intervals will be scored as occurrences by both observers.",
  },
  {
    id: 7045,
    topic: "IOA for Interval Recording",
    prompt: "Scored-interval IOA is recommended when the primary observer scores the target behavior as occurring in approximately what percentage of intervals or fewer?",
    options: [
      "50% or fewer",
      "15% or fewer",
      "70% or fewer",
      "30% or fewer"
    ],
    correctIndex: 3,
    explanation: "Scored-interval IOA is recommended for behaviors that occur at approximately 30% or fewer of the observation intervals. For low-rate behaviors, scored-interval IOA provides a more conservative measure by ignoring intervals where both observers agreed that the behavior did not occur.",
  },
  {
    id: 7047,
    topic: "Considerations in Selecting, Obtaining, and Reporting IOA",
    prompt: "How often should IOA be assessed in a typical applied behavior analysis study?",
    options: [
      "At least once per experimental condition, totaling a minimum of 10% of all sessions",
      "For exactly 50% of sessions to ensure a representative sample",
      "Only during baseline phases, since intervention phases are typically more stable",
      "For a minimum of 20% of sessions, and preferably 25% to 33% of sessions"
    ],
    correctIndex: 3,
    explanation: "It is generally recommended that IOA be obtained for a minimum of 20% of a study's sessions, and preferably between 25% and 33% of sessions. IOA should also be distributed across all conditions, phases, days, times, and settings.",
  },
  {
    id: 7050,
    topic: "Choosing Among Accuracy, Reliability, and IOA",
    prompt: "Applied behavior analysts should choose to assess the accuracy of measurement whenever possible. If accurate assessment is not possible because true values are unavailable, what should be the next best quality indicator?",
    options: [
      "Interobserver agreement, because it is the most commonly used indicator in ABA",
      "Total count IOA, because it provides the simplest and most direct comparison",
      "Calibration of measurement instruments against a known standard",
      "An assessment of reliability using natural or contrived permanent products"
    ],
    correctIndex: 3,
    explanation: "When accuracy assessment is not possible because true values are unavailable, an assessment of reliability provides the next best quality indicator. Reliability assessment requires that natural or contrived permanent products can be archived so the observer can re-measure the same events. IOA is used when true values and permanent product archives are both unavailable.",
  },
];

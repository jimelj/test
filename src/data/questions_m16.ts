import type { Question } from "../types";

/**
 * BCBA practice questions for Cooper et al., Chapter 13: Schedules of Reinforcement.
 * Grounded in the chapter text. Option order is shuffled at runtime, so
 * correctIndex placement here is arbitrary.
 */
export const QUESTIONS_M16: Question[] = [
  {
    id: 15001,
    topic: "Schedule of Reinforcement: Definition",
    prompt: "A schedule of reinforcement is best defined as which of the following?",
    options: [
      "A rule that describes a contingency of reinforcement and the conditions by which behaviors will produce reinforcement",
      "A procedure for delivering punishment following undesired behavior",
      "A plan for gradually removing all reinforcement from a training program",
      "A method for measuring the frequency of behavior across sessions"
    ],
    correctIndex: 0,
    explanation: "A schedule of reinforcement is a rule that describes a contingency of reinforcement, specifying the environmental arrangements that determine the conditions by which behaviors will produce reinforcement.",
  },
  {
    id: 15002,
    topic: "Continuous Reinforcement",
    prompt: "A teacher praises a student every single time the student correctly identifies a sight word. This arrangement represents which schedule of reinforcement?",
    options: [
      "Variable ratio",
      "Fixed interval",
      "Continuous reinforcement (CRF)",
      "Intermittent reinforcement"
    ],
    correctIndex: 2,
    explanation: "A schedule of continuous reinforcement (CRF) provides reinforcement for each occurrence of the target behavior. Praising every correct response is the defining feature of CRF.",
  },
  {
    id: 15003,
    topic: "Intermittent Reinforcement",
    prompt: "An intermittent schedule of reinforcement (INT) is most appropriate during which stage of learning?",
    options: [
      "Initial acquisition of a new behavior",
      "Maintenance of an already established behavior",
      "Extinction of a behavior that is no longer desired",
      "Assessment of reinforcer preference"
    ],
    correctIndex: 1,
    explanation: "CRF is used to strengthen behavior primarily during initial learning, whereas INT is used to maintain an established behavior, especially during the maintenance stage.",
  },
  {
    id: 15004,
    topic: "Continuous Reinforcement",
    prompt: "Which of the following best illustrates why CRF is recommended during the initial stages of teaching a new skill?",
    options: [
      "CRF produces a break-and-run pattern that is ideal for skill building",
      "CRF allows behavior analysts to identify the breaking point of a reinforcer",
      "CRF strengthens behavior by reinforcing each occurrence, maximizing early learning",
      "CRF eliminates postreinforcement pauses that would slow acquisition"
    ],
    correctIndex: 2,
    explanation: "CRF is used to strengthen behavior primarily during the initial stages of learning new behaviors because reinforcing every occurrence provides maximum feedback and builds the behavior rapidly.",
  },
  {
    id: 15005,
    topic: "Ratio vs. Interval Schedules",
    prompt: "On a ratio schedule of reinforcement, what determines when reinforcement is delivered?",
    options: [
      "The elapse of a fixed or variable amount of time",
      "The completion of a specified number of responses",
      "The topography of the response emitted",
      "Whether a discriminative stimulus is present"
    ],
    correctIndex: 1,
    explanation: "Ratio schedules require a number of responses before one response produces reinforcement. The participant's response rate determines the rate of reinforcement.",
  },
  {
    id: 15006,
    topic: "Ratio vs. Interval Schedules",
    prompt: "A behavior analyst sets a timer and delivers reinforcement for the first correct response after 5 minutes has elapsed. This arrangement is an example of which type of schedule?",
    options: [
      "Fixed ratio",
      "Variable ratio",
      "Interval schedule",
      "Concurrent schedule"
    ],
    correctIndex: 2,
    explanation: "Interval schedules require the elapse of time before a response produces reinforcement. The first correct response after the required interval has elapsed produces the reinforcer.",
  },
  {
    id: 15007,
    topic: "Ratio vs. Interval Schedules",
    prompt: "Which statement accurately compares ratio and interval schedules?",
    options: [
      "On interval schedules, emitting a high rate of response increases the rate of reinforcement",
      "On ratio schedules, the elapse of time alone can produce reinforcement",
      "On ratio schedules, the more quickly the person completes the ratio, the sooner reinforcement occurs",
      "On interval schedules, the number of responses determines when reinforcement is delivered"
    ],
    correctIndex: 2,
    explanation: "With ratio schedules, the rate of reinforcement is self-controlled; the more quickly the individual completes the ratio requirement, the sooner reinforcement occurs. On interval schedules, emitting more responses does not increase reinforcement rate.",
  },
  {
    id: 15008,
    topic: "Fixed Ratio Schedule",
    prompt: "On a fixed ratio (FR) schedule, the reinforcer is delivered contingent on which of the following?",
    options: [
      "The first response after a specified time period has elapsed",
      "The completion of a fixed number of responses",
      "A variable number of responses averaging a specified count",
      "Any response emitted more than 30 seconds after the previous response"
    ],
    correctIndex: 1,
    explanation: "A fixed ratio (FR) schedule requires the completion of a fixed number of responses for a reinforcer. For example, an FR 4 schedule delivers reinforcement after every fourth response.",
  },
  {
    id: 15009,
    topic: "Fixed Ratio Schedule Effects",
    prompt: "Which response pattern is most characteristic of behavior maintained on a fixed ratio schedule?",
    options: [
      "A slow, scallop-shaped acceleration of responses toward the end of the ratio",
      "A steady, uniform rate of responding with few pauses",
      "A postreinforcement pause followed by a high, consistent run of responding",
      "Gradually increasing response rates as the ratio requirement grows larger"
    ],
    correctIndex: 2,
    explanation: "FR schedules produce a break-and-run pattern: a postreinforcement pause followed by a high, steady rate of responding until the ratio is completed. This pattern repeats after each reinforcer delivery.",
  },
  {
    id: 15010,
    topic: "Postreinforcement Pause",
    prompt: "What factors influence the duration of the postreinforcement pause on an FR schedule?",
    options: [
      "The topography of the response and the type of discriminative stimulus used",
      "The size of the ratio requirement and the magnitude of reinforcement",
      "The participant's verbal repertoire and the presence of competing schedules",
      "The interval length and the number of component schedules in the chain"
    ],
    correctIndex: 1,
    explanation: "The size of the ratio and reinforcement magnitude can both influence the duration of the postreinforcement pause. Large ratio requirements may produce long pauses, and lower reinforcement magnitudes may also produce longer pauses.",
  },
  {
    id: 15011,
    topic: "Fixed Ratio Schedule Effects",
    prompt: "To a degree, increasing the ratio requirement on an FR schedule produces what effect on rate of response?",
    options: [
      "Rate of response decreases proportionally with each increase",
      "Rate of response is unaffected because time, not response count, controls behavior",
      "Rate of response increases up to some maximum determined by participant history and other variables",
      "Rate of response becomes irregular due to unpredictability in the schedule"
    ],
    correctIndex: 2,
    explanation: "To a degree, the larger the ratio requirement, the higher the rate of response on FR schedules. However, if requirements are too large, response rate decreases. The maximum ratio is partly determined by past FR history, motivating operations, and reinforcer quality.",
  },
  {
    id: 15012,
    topic: "Variable Ratio Schedule",
    prompt: "A VR 10 schedule of reinforcement is best described as one in which:",
    options: [
      "Reinforcement is delivered after every 10th response without exception",
      "Reinforcement is delivered for the first response after an average of 10 minutes",
      "Reinforcement is delivered after a variable number of responses averaging 10",
      "Reinforcement is delivered 10 times per session regardless of response rate"
    ],
    correctIndex: 2,
    explanation: "A variable ratio (VR) schedule requires the completion of a variable number of responses for reinforcement. A VR 10 schedule means on average every 10th response produces reinforcement, but the actual requirement varies across trials.",
  },
  {
    id: 15013,
    topic: "Variable Ratio Schedule Effects",
    prompt: "Compared with FR schedules, VR schedules typically produce which pattern of responding?",
    options: [
      "Longer postreinforcement pauses and lower overall rates of response",
      "High, steady rates of response with little or no postreinforcement pause",
      "A scallop-shaped acceleration toward the end of each ratio unit",
      "Moderate response rates with pronounced pauses after each reinforcer"
    ],
    correctIndex: 1,
    explanation: "VR schedules produce consistent, high, steady rates of responding and typically do not produce a postreinforcement pause. The absence of pauses may be because the participant cannot predict when the next response will produce reinforcement.",
  },
  {
    id: 15014,
    topic: "Variable Ratio Schedule Effects",
    prompt: "Why is the postreinforcement pause typically absent on variable ratio schedules?",
    options: [
      "Because the reinforcer is delivered too quickly for a pause to develop",
      "Because responding on VR schedules occurs independently of reinforcement",
      "Because the participant cannot predict when the next response will produce reinforcement, so responding remains steady",
      "Because VR schedules only apply to nonhuman animals in laboratory settings"
    ],
    correctIndex: 2,
    explanation: "The absence of postreinforcement pauses on VR schedules is likely due to the unpredictability of when the next response will produce reinforcement. Since any response could be reinforced, responding remains steady.",
  },
  {
    id: 15015,
    topic: "Variable Ratio Schedules in Applied Settings",
    prompt: "A teacher wants to implement a true VR schedule in the classroom. Which approach best approximates an effective VR procedure?",
    options: [
      "Delivering reinforcement spontaneously whenever the teacher feels like it",
      "Selecting a maximum ratio and using a table of random numbers to generate the specific ratios for the schedule",
      "Reinforcing the student after every response during a specified time interval",
      "Setting an electronic timer to vary in random intervals between 1 and 10 minutes"
    ],
    correctIndex: 1,
    explanation: "Teachers can plan systematic VR schedules by selecting a maximum ratio and using a table of random numbers to produce specific variable ratios. This planned approach better approximates the VR schedules used in basic research.",
  },
  {
    id: 15016,
    topic: "Fixed Interval Schedule",
    prompt: "On an FI 3-min schedule, when is a response reinforced?",
    options: [
      "After exactly 3 minutes have elapsed, regardless of whether a response occurs",
      "After the participant emits at least three responses during a 1-minute window",
      "For the first response following the elapse of 3 minutes",
      "After every third response, with a 1-minute break between ratios"
    ],
    correctIndex: 2,
    explanation: "On a fixed interval schedule, reinforcement is delivered for the first response following the elapse of the fixed time interval. The reinforcer is available after the interval, and it remains available until the first response occurs.",
  },
  {
    id: 15017,
    topic: "Fixed Interval Schedule Effects",
    prompt: "The FI scallop is the term used to describe which pattern of responding?",
    options: [
      "A high, steady rate of responding with no pauses throughout the interval",
      "A postreinforcement pause followed by a gradual acceleration in responding toward the end of the interval",
      "An abrupt burst of responses immediately after the reinforcer is delivered",
      "A uniform pattern of low-rate responding across the entire interval"
    ],
    correctIndex: 1,
    explanation: "FI schedules produce a postreinforcement pause followed by an initially slow but accelerating rate of response toward the end of the interval, reaching maximum rate just before the reinforcer. This pattern creates the scallop shape on a cumulative graph.",
  },
  {
    id: 15018,
    topic: "Fixed Interval Schedule Effects",
    prompt: "Why do FI schedules produce a postreinforcement pause?",
    options: [
      "Because the fixed interval is always too long to maintain responding during the early portion",
      "Because participants learn to discriminate the elapse of time and that responses right after a reinforced response are never reinforced",
      "Because the reinforcer delivered at the end of the interval temporarily suppresses behavior",
      "Because FI schedules require more responses than FR schedules for the same amount of reinforcement"
    ],
    correctIndex: 1,
    explanation: "After adjustment to an FI schedule, participants learn to discriminate the elapse of time and that responses emitted right after a reinforced response are never reinforced. This produces extinction during the early part of the interval, accounting for the postreinforcement pause.",
  },
  {
    id: 15019,
    topic: "Fixed Interval Schedule Effects",
    prompt: "How does FI schedule responding differ from FR schedule responding?",
    options: [
      "FR produces a scallop effect, while FI produces a break-and-run pattern",
      "FI produces responses at a consistent rate until the requirement is met, while FR begins slowly and accelerates",
      "FR responses are emitted at a consistent rate until completing the ratio, while FI responses begin slow and accelerate toward the end of each interval",
      "Both FI and FR produce identical response patterns but differ only in which stimulus signals the schedule"
    ],
    correctIndex: 2,
    explanation: "Both FI and FR schedules produce postreinforcement pauses, but their patterns differ. FR produces consistent responding until the ratio is completed (break-and-run), while FI produces a slow start that accelerates toward the end of each interval (the scallop).",
  },
  {
    id: 15020,
    topic: "Variable Interval Schedule",
    prompt: "A variable interval (VI) schedule provides reinforcement based on which contingency?",
    options: [
      "A fixed number of responses that increases progressively within the session",
      "The first correct response following the elapse of variable durations of time",
      "Any response emitted during a specified time window regardless of number",
      "A number of responses that varies around a fixed average per session"
    ],
    correctIndex: 1,
    explanation: "A variable interval (VI) schedule provides reinforcement for the first correct response following the elapse of variable durations of time. The distinguishing feature is that intervals between reinforcement opportunities vary in a random or nearly random order.",
  },
  {
    id: 15021,
    topic: "Variable Interval Schedule Effects",
    prompt: "Which response characteristic is most associated with variable interval (VI) schedules?",
    options: [
      "High response rates with pronounced postreinforcement pauses",
      "A scallop pattern of accelerating responses toward the end of each interval",
      "Consistent, stable, low-to-moderate response rates with few pauses",
      "Break-and-run responding with rapid completion of ratio requirements"
    ],
    correctIndex: 2,
    explanation: "VI schedules tend to produce a constant, stable, low-to-moderate rate of response. On a cumulative graph, the slope appears uniform with few pauses in responding, and there are typically no postreinforcement pauses.",
  },
  {
    id: 15022,
    topic: "Variable Interval Schedule Effects",
    prompt: "Pop quizzes are often cited as a classroom analogue of the VI schedule because they produce which effect on student study behavior?",
    options: [
      "Students study in bursts just before quizzes, reflecting a scallop pattern",
      "Students study consistently because they cannot predict when the next quiz will occur",
      "Students show a break-and-run pattern alternating between studying and not studying",
      "Students stop studying entirely because the schedule is too unpredictable"
    ],
    correctIndex: 1,
    explanation: "Pop quizzes at unpredictable times tend to occasion more consistent study behavior than quizzes scheduled at fixed intervals, which is similar to the steady responding produced by VI schedules in laboratory settings.",
  },
  {
    id: 15023,
    topic: "Limited Hold",
    prompt: "What does adding a limited hold to an FI schedule mean for the participant?",
    options: [
      "The interval is shortened on every other trial to prevent satiation",
      "The participant may hold a token for a limited number of sessions before exchanging it",
      "Reinforcement remains available for only a finite time after the interval elapses; if no response occurs in that window, the opportunity is lost",
      "The participant must hold responding for a minimum amount of time before a response will be reinforced"
    ],
    correctIndex: 2,
    explanation: "When a limited hold is added to an interval schedule, reinforcement remains available for a finite time following the elapse of the FI or VI interval. If a targeted response does not occur within the time limit, the opportunity for reinforcement is lost and a new interval begins.",
  },
  {
    id: 15024,
    topic: "Schedule Thinning",
    prompt: "A teacher gradually moves a student from CRF to VR 2, then VR 3, then VR 5. This process is best described as:",
    options: [
      "Ratio strain",
      "Progressive ratio assessment",
      "Schedule thinning",
      "Differential reinforcement of high rates"
    ],
    correctIndex: 2,
    explanation: "Schedule thinning refers to the process of gradually increasing the response ratio or the duration of the time interval. Moving from a dense schedule (CRF) to progressively thinner schedules (VR 2, VR 3, VR 5) is a common thinning procedure.",
  },
  {
    id: 15025,
    topic: "Schedule Thinning",
    prompt: "When thinning a reinforcement schedule, which approach best avoids disruption to the learner's performance?",
    options: [
      "Removing reinforcement entirely and replacing it with a fixed interval schedule",
      "Making large and abrupt increases in ratio requirements to accelerate the thinning process",
      "Using small, gradual increments of schedule changes with ongoing evaluation of performance",
      "Switching immediately from CRF to the thinnest schedule that has produced behavior in the past"
    ],
    correctIndex: 2,
    explanation: "Applied behavior analysts should use small increments of schedule changes during thinning and ongoing evaluation of the learner's performance to adjust the thinning process and avoid loss of previous improvements.",
  },
  {
    id: 15026,
    topic: "Ratio Strain",
    prompt: "Ratio strain is most likely to occur under which condition?",
    options: [
      "When an interval schedule is switched to a ratio schedule too slowly",
      "When ratio requirements are increased abruptly or become so large that reinforcement cannot maintain the response level",
      "When a variable schedule is replaced by a fixed schedule at the same ratio value",
      "When reinforcement is delivered too frequently, producing satiation"
    ],
    correctIndex: 1,
    explanation: "Ratio strain results from abrupt increases in ratio requirements when moving from denser to thinner reinforcement schedules, or when the ratio becomes so large that reinforcement cannot maintain the response level or the requirement exceeds the participant's physiological capabilities.",
  },
  {
    id: 15027,
    topic: "Ratio Strain",
    prompt: "Which behavioral signs are most associated with ratio strain?",
    options: [
      "Consistently high response rates, scallop patterns, and limited pauses",
      "Avoidance, aggression, and unpredictable pauses in responding",
      "Steady low-rate responding and frequent postreinforcement pauses",
      "Increased variability in response topography and decreased latency"
    ],
    correctIndex: 1,
    explanation: "Common behavioral characteristics associated with ratio strain include avoidance, aggression, and unpredictable pauses in responding. When ratio strain is evident, analysts should reduce the ratio requirement.",
  },
  {
    id: 15028,
    topic: "Differential Reinforcement of High and Low Rates",
    prompt: "Differential reinforcement of high rates (DRH) and differential reinforcement of low rates (DRL) are best described as variations of which type of schedule?",
    options: [
      "Interval schedules",
      "Ratio schedules",
      "Compound schedules",
      "Progressive schedules"
    ],
    correctIndex: 1,
    explanation: "Differential reinforcement of particular rates of behavior is described as a variation of ratio schedules. Delivery of the reinforcer is contingent on responses occurring at a rate either higher than or lower than some predetermined criterion.",
  },
  {
    id: 15029,
    topic: "Differential Reinforcement of High and Low Rates",
    prompt: "On a DRL schedule with a 30-second time criterion, which response produces reinforcement?",
    options: [
      "Any response emitted within 30 seconds of the previous response",
      "Any response emitted after at least 30 seconds have elapsed since the previous response",
      "Every 30th response regardless of time between responses",
      "The first response following a 30-second reinforcer delivery period"
    ],
    correctIndex: 1,
    explanation: "Under a DRL schedule, a response produces reinforcement when it occurs after a time criterion has elapsed. If the DRL criterion is 30 seconds, a response is reinforced only when the interresponse time (IRT) is 30 seconds or greater.",
  },
  {
    id: 15030,
    topic: "Interresponse Time (IRT)",
    prompt: "Interresponse time (IRT) refers to which measurement?",
    options: [
      "The duration between the onset of a discriminative stimulus and the first response",
      "The duration of time between two consecutive responses",
      "The length of a reinforcement delivery interval",
      "The time from the start of a session to the first response emitted"
    ],
    correctIndex: 1,
    explanation: "An interresponse time (IRT) identifies the duration of time that occurs between two responses. IRT and rate of response are functionally related: long IRTs produce low rates of responding and short IRTs produce high rates of responding.",
  },
  {
    id: 15031,
    topic: "Full-Session and Interval DRL",
    prompt: "A full-session DRL schedule provides reinforcement under which condition?",
    options: [
      "When the total number of responses during the session meets or exceeds a number criterion",
      "When the total number of responses during the session is at or below a specified criterion",
      "When each individual response follows a time criterion of no fewer than 30 seconds",
      "When the ratio requirements are gradually reduced to zero across the session"
    ],
    correctIndex: 1,
    explanation: "A DRL full-session schedule provides reinforcement for responding at or below the criterion limit. If the participant emits more than the specified number of responses during the session, reinforcement is not delivered.",
  },
  {
    id: 15032,
    topic: "Differential Reinforcement of Diminishing Rates",
    prompt: "The differential reinforcement of diminishing rates (DRD) schedule is most accurately described as which of the following?",
    options: [
      "A schedule that reinforces a gradually increasing number of responses per interval",
      "A schedule that provides reinforcement when the number of responses is less than a criterion that is gradually decreased over time based on performance",
      "A schedule that replaces extinction with a progressively thinning ratio requirement",
      "A variation of the lag schedule that increases response variability across sessions"
    ],
    correctIndex: 1,
    explanation: "The DRD schedule provides reinforcement at the end of a predetermined time interval when the number of responses is less than a criterion that is gradually decreased across time intervals based on the individual's performance.",
  },
  {
    id: 15033,
    topic: "Lag Schedules",
    prompt: "What is the defining feature of a lag schedule of reinforcement?",
    options: [
      "Reinforcement is delayed by a fixed amount of time following each response",
      "Reinforcement is contingent on a response differing in some predetermined way from one or more responses that preceded it",
      "Reinforcement is delivered only after the response rate lags below a specified criterion",
      "Reinforcement is made progressively harder to obtain by increasing the ratio within the session"
    ],
    correctIndex: 1,
    explanation: "A lag schedule of reinforcement is used to increase response variability. Reinforcement is contingent on a response differing in some predetermined way (e.g., different topography or sequence) from one or more responses that preceded it.",
  },
  {
    id: 15034,
    topic: "Lag Schedules",
    prompt: "On a Lag 2 schedule of reinforcement, a response produces reinforcement only when it:",
    options: [
      "Differs from the previous 2 responses",
      "Is identical to the previous 2 responses",
      "Occurs at least 2 seconds after the previous response",
      "Follows the same topography as the last reinforced response"
    ],
    correctIndex: 0,
    explanation: "On a Lag 2 schedule, reinforcement is contingent on a response being different from the previous 2 responses. A Lag 3 requires a response to differ from the previous 3 responses, and so on.",
  },
  {
    id: 15035,
    topic: "Progressive-Ratio Schedule",
    prompt: "A progressive-ratio (PR) schedule of reinforcement differs from a standard FR schedule in which key way?",
    options: [
      "PR schedules use variable rather than fixed ratio requirements within the session",
      "PR schedules increase the ratio requirements in incremental steps within a session",
      "PR schedules deliver reinforcement at progressively shorter delays within the session",
      "PR schedules allow the participant to choose which ratio applies on each trial"
    ],
    correctIndex: 1,
    explanation: "In a progressive-ratio (PR) schedule, the ratio requirements increase in incremental steps within the session. For example, a participant begins on FR 5, then the requirement increases to FR 10, then FR 15, and so on.",
  },
  {
    id: 15036,
    topic: "Progressive-Ratio Schedule",
    prompt: "In PR schedule assessments, what does the 'breaking point' indicate?",
    options: [
      "The ratio at which ratio strain first becomes apparent across sessions",
      "The point in a session when the participant stops responding, used as a measure of reinforcer potency",
      "The maximum ratio ever achieved by the participant in any prior session",
      "The session at which the schedule transitions from PR to CRF"
    ],
    correctIndex: 1,
    explanation: "During PR sessions, the ratios are typically increased to the breaking point, when the participant stops responding. Comparing breaking points across conditions provides an assessment of the potency of a reinforcer.",
  },
  {
    id: 15037,
    topic: "Delay to Reinforcement Schedules",
    prompt: "Delay to reinforcement schedules have been used primarily to develop which behavioral outcome?",
    options: [
      "Response generalization across settings",
      "Self-control by progressively increasing the delay between responding and reinforcement",
      "Stimulus discrimination between two simultaneously available schedules",
      "High, steady rates of responding on academic tasks"
    ],
    correctIndex: 1,
    explanation: "Applied behavior analysts have used delay to reinforcement schedules to develop self-control. By progressively increasing the delay before the larger reinforcer is delivered, participants learn to tolerate delays in order to receive greater reinforcement.",
  },
  {
    id: 15038,
    topic: "Compound Schedules of Reinforcement",
    prompt: "Which of the following is the most accurate definition of a compound schedule of reinforcement?",
    options: [
      "A schedule in which two or more reinforcers are delivered simultaneously for a single response",
      "A schedule formed by combining two or more basic schedules of reinforcement",
      "A procedure for gradually replacing artificial reinforcers with naturally occurring consequences",
      "A method of delivering reinforcement on both ratio and interval bases in alternating sessions"
    ],
    correctIndex: 1,
    explanation: "Applied behavior analysts combine two or more basic schedules of reinforcement to form compound schedules of reinforcement. The component schedules can occur simultaneously or successively, with or without discriminative stimuli.",
  },
  {
    id: 15039,
    topic: "Concurrent Schedules",
    prompt: "A concurrent schedule (conc) of reinforcement is in effect when:",
    options: [
      "Two or more contingencies of reinforcement operate independently and simultaneously for two or more behaviors",
      "Two basic schedules of reinforcement occur in a specific sequential order for one behavior",
      "Reinforcement is available on two or more schedules but only the first completed schedule produces reinforcement",
      "A discriminative stimulus alternates between two different ratio requirements"
    ],
    correctIndex: 0,
    explanation: "A concurrent schedule of reinforcement occurs when two or more contingencies of reinforcement operate independently and simultaneously for two or more behaviors, each correlated with a discriminative stimulus.",
  },
  {
    id: 15040,
    topic: "Concurrent Schedules and the Matching Law",
    prompt: "The matching law as applied to concurrent interval schedules describes which pattern of responding?",
    options: [
      "Participants allocate all responses to the richer schedule to maximize reinforcement",
      "Participants distribute responding between schedules in proportion to the reinforcement obtained from each",
      "Participants respond exclusively to the leaner schedule to conserve effort",
      "Participants alternate responses equally between schedules regardless of reinforcement rate"
    ],
    correctIndex: 1,
    explanation: "With concurrent interval schedules, participants typically do not allocate all responses exclusively to the richer schedule. Instead, they distribute their responding between the two schedules to match or approximate the proportion of reinforcement obtained on each independent schedule.",
  },
  {
    id: 15041,
    topic: "Multiple Schedules",
    prompt: "A multiple schedule (mult) of reinforcement is distinguished by which characteristic?",
    options: [
      "Two or more basic schedules operate simultaneously without discriminative stimuli",
      "Two or more basic schedules for the same behavior occur successively, each correlated with a discriminative stimulus",
      "Two or more schedules operate in a fixed sequence with no SD associated with any component",
      "Two schedules operate simultaneously and reinforcement is delivered when either schedule requirement is met"
    ],
    correctIndex: 1,
    explanation: "A multiple schedule presents two or more basic schedules of reinforcement in an alternating, usually random, sequence. The basic schedules occur successively and independently, and a discriminative stimulus is correlated with each basic schedule.",
  },
  {
    id: 15042,
    topic: "Behavioral Contrast",
    prompt: "Behavioral contrast in a multiple schedule occurs when:",
    options: [
      "Increasing the ratio in one component of a multiple schedule causes the same increase in the other component",
      "A schedule change in one component increases or decreases responding in that component, accompanied by a change in the opposite direction in an unaltered component",
      "Both components of a multiple schedule produce identical response rates due to generalization",
      "Discriminative stimuli associated with each component become interchangeable over time"
    ],
    correctIndex: 1,
    explanation: "Behavioral contrast describes the effect of a schedule change that increases or decreases the rate of responding in one component of a multiple schedule, which is accompanied by a change in the response rate in the opposite direction on another, unaltered component.",
  },
  {
    id: 15043,
    topic: "Chained Schedules",
    prompt: "Which statement best distinguishes a chained schedule from a multiple schedule?",
    options: [
      "A chained schedule uses no discriminative stimuli, while a multiple schedule uses one SD per component",
      "In a chained schedule, components always occur in a specific order and completion of each element produces conditioned reinforcement in the form of the next element's SD",
      "A chained schedule always uses the same behavior across all components, while a multiple schedule requires different behaviors",
      "A chained schedule provides unconditioned reinforcement after each component, while a multiple schedule provides conditioned reinforcement only after the final component"
    ],
    correctIndex: 1,
    explanation: "A chained schedule differs from a multiple schedule in that components always occur in a specific order, and conditioned reinforcement for each element is the presentation of the discriminative stimulus for the next element. Only the last element normally produces unconditioned or conditioned reinforcement.",
  },
  {
    id: 15044,
    topic: "Mixed Schedules",
    prompt: "A mixed schedule (mix) differs from a multiple schedule in which critical way?",
    options: [
      "A mixed schedule requires two or more different behaviors, while a multiple schedule requires one",
      "A mixed schedule presents component schedules without discriminative stimuli, while a multiple schedule correlates an SD with each component",
      "A mixed schedule always presents components in a fixed order, while a multiple schedule uses a random order",
      "A mixed schedule delivers reinforcement only after the final component, while a multiple schedule delivers reinforcement after each component"
    ],
    correctIndex: 1,
    explanation: "A mixed schedule uses a procedure identical to multiple schedules, except no discriminative stimuli signal the presence of the independent component schedules. In a multiple schedule, each component is correlated with an SD.",
  },
  {
    id: 15045,
    topic: "Tandem Schedules",
    prompt: "A tandem schedule (tand) is best described as a compound schedule in which:",
    options: [
      "Two schedules operate simultaneously and reinforcement is delivered when either requirement is met first",
      "Components operate in a specific sequence, like a chained schedule, but without discriminative stimuli",
      "Both ratio and interval requirements must be met simultaneously for reinforcement",
      "The schedule component changes randomly between sessions without any signal"
    ],
    correctIndex: 1,
    explanation: "The tandem schedule operates like a chained schedule, except that discriminative stimuli are not associated with the elements in the chain. For example, in a tand FR 15/FI 2, 15 responses must occur, and then the first response after 2 minutes produces reinforcement.",
  },
  {
    id: 15046,
    topic: "Alternative Schedules",
    prompt: "An alternative schedule (alt) of reinforcement is defined as one in which:",
    options: [
      "Reinforcement requires meeting the requirements of all component schedules before delivery",
      "Reinforcement is obtained by meeting the requirements of any one of two or more simultaneously available component schedules",
      "Component schedules alternate in a random sequence, each signaled by a different discriminative stimulus",
      "Reinforcement is provided for responses that differ from previously reinforced responses"
    ],
    correctIndex: 1,
    explanation: "An alternative schedule provides an opportunity for reinforcement on two or more simultaneously available basic schedules. The first schedule completed provides reinforcement, regardless of which component is met first. All schedule requirements start over following reinforcement.",
  },
  {
    id: 15047,
    topic: "Conjunctive Schedules",
    prompt: "A conjunctive schedule (conj) of reinforcement is in effect when:",
    options: [
      "Reinforcement is delivered after the first schedule requirement is met, resetting all other component requirements",
      "Reinforcement is delivered only after meeting the response requirements of all component schedules",
      "Component schedules are presented successively, each correlated with its own discriminative stimulus",
      "A progressive increase in ratio requirements occurs simultaneously across all components"
    ],
    correctIndex: 1,
    explanation: "A conjunctive schedule is in effect whenever reinforcement follows the completion of response requirements for two or more schedules of reinforcement. For example, on a conj FI 2/FR 50 schedule, at least 2 minutes must elapse and 50 responses must be made before reinforcement is available.",
  },
  {
    id: 15048,
    topic: "Adjunctive Behavior",
    prompt: "Adjunctive behaviors (also called schedule-induced behaviors) are best characterized as:",
    options: [
      "Behaviors directly targeted and strengthened by the reinforcement schedule in effect",
      "Time-filling behaviors whose frequency increases as a side effect of other behaviors maintained by a reinforcement schedule",
      "Behavior patterns that emerge during extinction when no reinforcement is delivered",
      "Responses that compete with the target behavior on a concurrent schedule"
    ],
    correctIndex: 1,
    explanation: "Adjunctive behaviors, or schedule-induced behaviors, are time-filling behaviors (e.g., doodling, smoking, idle talking) whose frequency increases as a side effect of other behaviors maintained by a schedule of reinforcement.",
  },
  {
    id: 15049,
    topic: "Progression to Naturally Occurring Reinforcement",
    prompt: "A major long-term goal of using intermittent reinforcement in behavior change programs is to:",
    options: [
      "Replace the target behavior with a different, more socially acceptable behavior",
      "Transfer control from contrived reinforcers to naturally occurring activities, stimuli, or events that function as reinforcement",
      "Increase the density of reinforcement so the target behavior occurs at the highest possible rate",
      "Reduce the schedule requirement to CRF in order to maintain behavior during generalization"
    ],
    correctIndex: 1,
    explanation: "A major goal of most behavior change programs is the development of naturally occurring activities, stimuli, or events to function as reinforcement. Intermittent reinforcement is usually necessary for this progression from contrived to naturally occurring reinforcement.",
  },
  {
    id: 15050,
    topic: "Rule-Governed Behavior and Schedule Effects",
    prompt: "Applied behavior analysts are cautioned to be careful about extrapolating basic research schedule effects directly to applied settings with humans primarily because:",
    options: [
      "Humans respond only to interval schedules, not ratio schedules, in naturalistic settings",
      "Humans have an extensive language repertoire that allows rule-governed behavior, which can alter responses to reinforcement schedules",
      "Applied settings always use compound schedules that cannot be compared to basic laboratory schedules",
      "Basic research on schedule effects has been conducted only with nonhuman animals and thus cannot apply to humans"
    ],
    correctIndex: 1,
    explanation: "Humans have an extensive language repertoire that can influence their behavior, including responses to schedules of reinforcement via rule-governed behavior. This is a key reason why applied behavior analysts should use caution when extrapolating schedule effects from basic laboratory research to applied settings with humans.",
  },
];

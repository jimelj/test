import type { Question } from "../types";

/**
 * BCBA practice questions for Cooper et al., Chapter 25: Differential Reinforcement.
 * Grounded in the chapter text. Option order is shuffled at runtime, so
 * correctIndex placement here is arbitrary.
 */
export const QUESTIONS_M28: Question[] = [
  {
    id: 27001,
    topic: "Differential Reinforcement Defined",
    prompt: "Differential reinforcement used as a reductive procedure for problem behavior consists of which two components?",
    options: [
      "Delivering punishment for the problem behavior and reinforcement for any other behavior",
      "Placing the problem behavior on a fixed-ratio schedule and the alternative behavior on extinction",
      "Providing reinforcement on a variable schedule for all behaviors while gradually reducing overall reinforcement density",
      "Providing reinforcement contingent on a behavior other than the problem behavior, and withholding reinforcement for the problem behavior"
    ],
    correctIndex: 3,
    explanation: "Differential reinforcement as a reductive procedure involves (a) providing reinforcement contingent on a behavior other than the problem behavior or the problem behavior at a reduced rate, and (b) withholding reinforcement for the problem behavior. It does not involve punishment or extinction of the alternative behavior.",
  },
  {
    id: 27002,
    topic: "Differential Reinforcement Defined",
    prompt: "Which characteristic makes differential reinforcement procedures the least intrusive of all behavior interventions?",
    options: [
      "They do not involve extended activity interruptions, response cost, or presentation of aversive stimuli",
      "They require extended interruptions of ongoing activities",
      "They use contingent removal of positive reinforcers",
      "They rely on negative punishment as the primary mechanism of change"
    ],
    correctIndex: 0,
    explanation: "Differential reinforcement does not involve extended interruptions of ongoing activities, contingent removal of positive reinforcers, or presentation of aversive stimuli. These characteristics make it the least intrusive of all behavior interventions.",
  },
  {
    id: 27003,
    topic: "Differential Reinforcement Defined",
    prompt: "Differential reinforcement can be implemented with which type or types of reinforcement?",
    options: [
      "Only positive reinforcement",
      "Only negative reinforcement",
      "Either positive reinforcement or negative reinforcement",
      "Only conditioned reinforcement, never unconditioned reinforcement"
    ],
    correctIndex: 2,
    explanation: "Differential reinforcement can be implemented with positive reinforcement or negative reinforcement. The procedure is defined by the contingency structure, not by the specific type of reinforcement used.",
  },
  {
    id: 27004,
    topic: "Differential Reinforcement of Alternative Behavior (DRA)",
    prompt: "A practitioner using DRA reinforces a behavior that cannot occur at the same time as the problem behavior. This specific application is sometimes called:",
    options: [
      "Differential reinforcement of other behavior (DRO)",
      "Differential reinforcement of incompatible behavior (DRI)",
      "Differential reinforcement of low rates (DRL)",
      "Differential negative reinforcement of alternative behavior (DNRA)"
    ],
    correctIndex: 1,
    explanation: "When DRA is implemented by reinforcing a behavior that cannot occur simultaneously with the problem behavior, the procedure is sometimes called differential reinforcement of incompatible behavior (DRI). For example, a learner cannot simultaneously be in and out of his seat.",
  },
  {
    id: 27005,
    topic: "Differential Reinforcement of Alternative Behavior (DRA)",
    prompt: "DRA can be conceptualized as a concurrent schedule of reinforcement in which the alternative behavior receives a dense schedule of reinforcement and the problem behavior is on extinction. The allocation of responding between the two response classes is described by:",
    options: [
      "The Premack principle",
      "Respondent conditioning theory",
      "The law of effect",
      "The matching law"
    ],
    correctIndex: 3,
    explanation: "DRA can be conceptualized as a concurrent schedule of reinforcement. Because the concurrent schedule favors the alternative behavior, the client allocates more responding to the alternative behavior and less to the problem behavior, as described by the matching law.",
  },
  {
    id: 27006,
    topic: "DRA Guidelines: Selecting Alternative Behavior",
    prompt: "When selecting an alternative behavior for DRA, which of the following criteria is recommended?",
    options: [
      "The behavior should require more effort than the problem behavior to ensure motivation",
      "The behavior should require less effort than, or never more effort than, the problem behavior",
      "The behavior should occur at a very low rate so there is room to increase it",
      "The behavior should be brand new and not yet in the learner's repertoire"
    ],
    correctIndex: 1,
    explanation: "An ideal alternative behavior requires less effort, but never more, than the problem behavior. It should already exist in the learner's current repertoire, occur frequently enough to provide reinforcement opportunities, and be likely to receive reinforcement in the natural environment.",
  },
  {
    id: 27007,
    topic: "DRA Guidelines: Selecting Reinforcers",
    prompt: "What consequence that maintained the problem behavior before intervention often makes the most effective reinforcer for the alternative behavior in DRA?",
    options: [
      "A brand-new reinforcer identified through a paired stimulus preference assessment",
      "Any arbitrary reinforcer chosen by the practitioner based on convenience",
      "The same consequence that maintained the problem behavior prior to intervention",
      "A less preferred item to promote more robust responding"
    ],
    correctIndex: 2,
    explanation: "The consequence that maintained the problem behavior prior to intervention is often the most effective reinforcer for the alternative behavior. Functional assessments are used to identify these maintaining consequences so the same reinforcer can be used for the alternative behavior.",
  },
  {
    id: 27008,
    topic: "DRA Guidelines: Reinforcement Schedule",
    prompt: "A practitioner begins a DRA intervention by reinforcing the alternative behavior on a continuous reinforcement (CRF) schedule. What should the practitioner do after the alternative behavior is firmly established?",
    options: [
      "Gradually thin the reinforcement schedule",
      "Switch immediately to an extinction schedule for the alternative behavior",
      "Maintain the CRF schedule indefinitely to prevent resurgence",
      "Switch to punishment for the problem behavior and stop reinforcing the alternative"
    ],
    correctIndex: 0,
    explanation: "A continuous reinforcement schedule should be used initially for the alternative behavior. After firmly establishing the alternative behavior, the practitioner should gradually thin the reinforcement schedule so it is sustainable in the natural environment.",
  },
  {
    id: 27009,
    topic: "DRA and Treatment Integrity",
    prompt: "Research by Vollmer and colleagues (1999) on full versus partial implementation of DRA found that which level produced the greatest reduction in inappropriate behavior?",
    options: [
      "A 25% reinforcement schedule for appropriate behavior and 75% for inappropriate behavior",
      "A 50%/50% schedule providing equal reinforcement for both response classes",
      "Full implementation, with 100% reinforcement of appropriate behavior and 0% reinforcement of inappropriate behavior",
      "A 75%/25% schedule where appropriate behavior was reinforced three of every four occurrences"
    ],
    correctIndex: 2,
    explanation: "Full implementation of differential reinforcement, in which 100% of instances of alternative behavior were reinforced and 0% of instances of aberrant behavior were reinforced, produced the greatest effects, with inappropriate behavior virtually replaced by appropriate behavior.",
  },
  {
    id: 27010,
    topic: "DRA and Treatment Relapse",
    prompt: "Resurgence in the context of DRA refers to:",
    options: [
      "The reoccurrence of a previously reinforced problem behavior when reinforcement for the alternative behavior is terminated or decreased",
      "The gradual increase in alternative behavior as the DRA schedule is thinned",
      "The spontaneous increase of a new behavior that was never reinforced",
      "The extinction burst observed when the alternative behavior is first placed on a leaner schedule"
    ],
    correctIndex: 0,
    explanation: "Resurgence refers to the reoccurrence of a previously reinforced behavior when reinforcement for an alternative behavior is terminated or decreased. In functional communication training contexts, it is described as the recurrence of destructive behavior when alternative reinforcement is challenged.",
  },
  {
    id: 27011,
    topic: "DRA and Treatment Relapse",
    prompt: "Lambert and colleagues (2015) found that reinforcing a series of alternative behaviors ('serial DRA') compared to traditional DRA produced what outcome regarding target response resurgence?",
    options: [
      "Higher rates of resurgence of the target response",
      "No meaningful difference in target response resurgence",
      "Faster acquisition of the alternative behavior but slower reduction of the target behavior",
      "A lower percentage of total responding allocated toward target response resurgence"
    ],
    correctIndex: 3,
    explanation: "The results of the Lambert et al. (2015) study were encouraging: in all cases, the percentage of total responding allocated toward target response resurgence was less in the serial DRA component than in the traditional DRA component, suggesting more durable and desirable outcomes.",
  },
  {
    id: 27012,
    topic: "Differential Negative Reinforcement of Alternative Behavior (DNRA)",
    prompt: "Differential negative reinforcement of alternative behavior (DNRA) is most appropriate when the problem behavior is maintained by:",
    options: [
      "Sensory stimulation",
      "Tangible reinforcers",
      "Social attention",
      "Escape from a task or demand situation"
    ],
    correctIndex: 3,
    explanation: "When differential reinforcement uses escape from a task or demand situation as a reinforcer, the procedure is identified as DNRA. DNRA reduces problem behaviors maintained by escape by providing brief periods of escape contingent on the alternative behavior, while applying escape extinction to the problem behavior.",
  },
  {
    id: 27013,
    topic: "DRA Guidelines: Withholding Reinforcement",
    prompt: "According to Vollmer and colleagues (1999), treatment effects may degrade if which of the following occurs?",
    options: [
      "The reinforcer is delivered within 5 seconds of the alternative behavior",
      "The delay to reinforcement increases and inappropriate behavior is occasionally reinforced",
      "The alternative behavior occurs more than once per session",
      "The DRA schedule is thinned after full implementation is established"
    ],
    correctIndex: 1,
    explanation: "Vollmer and colleagues noted that treatment effects may degrade as the delay to reinforcement increases, especially if inappropriate behavior is occasionally reinforced. Perfect implementation entails providing reinforcers as immediately as possible after an appropriate behavior occurs.",
  },
  {
    id: 27014,
    topic: "DRA Guidelines: Combining with Other Procedures",
    prompt: "When should a practitioner consider combining DRA with other reductive procedures rather than using DRA alone?",
    options: [
      "When the alternative behavior is already present in the learner's repertoire",
      "When the reinforcer identified by functional assessment is a social reinforcer",
      "When the client has a long history of reinforcement for the alternative behavior",
      "When the problem behavior is destructive, dangerous, or interferes with health and safety"
    ],
    correctIndex: 3,
    explanation: "A practitioner will seldom apply DRA as a single intervention if the problem behavior is destructive, dangerous to the learner or others, or interferes with health and safety. In these situations, DRA might be combined with other reductive procedures such as response blocking, time-out, or DRO.",
  },
  {
    id: 27015,
    topic: "Differential Reinforcement of Other Behavior (DRO)",
    prompt: "Reynolds (1961) described the differential reinforcement of other behavior as:",
    options: [
      "Reinforcement for emitting an incompatible response",
      "Reinforcement for not responding",
      "Reinforcement for responding at a low but nonzero rate",
      "Reinforcement for any response except the alternative behavior"
    ],
    correctIndex: 1,
    explanation: "Reynolds (1961) described the differential reinforcement of other behavior as 'reinforcement for not responding.' A practitioner applying DRO delivers reinforcement contingent on the problem behavior not occurring throughout intervals of time or at specific moments of time.",
  },
  {
    id: 27016,
    topic: "Differential Reinforcement of Other Behavior (DRO)",
    prompt: "Which of the following is one of the four behavioral processes suggested as a potential explanation for the effects of DRO?",
    options: [
      "Respondent extinction of the conditioned response",
      "Discriminative stimulus control over the alternative behavior",
      "Other behavior being strengthened by adventitious reinforcement, resulting in displacement of the target behavior",
      "Positive punishment of the problem behavior through temporal proximity"
    ],
    correctIndex: 2,
    explanation: "One of the four proposed processes is that other behavior could be strengthened by adventitious reinforcement, resulting in displacement of the target behavior. The other three are the reinforcer functioning as an abolishing operation, extinction from disrupting the response-reinforcer contingency, and punishment via delayed access to reinforcers.",
  },
  {
    id: 27017,
    topic: "Interval DRO",
    prompt: "In a fixed-interval DRO (FI-DRO) schedule, what happens when the problem behavior occurs during the interval?",
    options: [
      "Reinforcement is delivered immediately and the interval length is increased",
      "The timer is reset and a new interval begins, postponing reinforcement",
      "The interval continues and reinforcement is withheld only at the end of the original interval",
      "The practitioner delivers a mild corrective consequence and restarts the session"
    ],
    correctIndex: 1,
    explanation: "In FI-DRO, upon any occurrence of the problem behavior, the timer is immediately reset to begin a new interval. Reinforcement is delivered at the end of the interval only if the problem behavior did not occur during that entire interval.",
  },
  {
    id: 27018,
    topic: "DRO Guidelines: Setting Initial Intervals",
    prompt: "A behavior analyst records 90 responses during 30 minutes (1800 seconds) of baseline. What is the mean IRT and an appropriate initial DRO interval?",
    options: [
      "Mean IRT of 30 seconds; initial DRO interval of 60 seconds or more",
      "Mean IRT of 20 seconds; initial DRO interval of 30 seconds or less",
      "Mean IRT of 3 seconds; initial DRO interval of 5 seconds or more",
      "Mean IRT of 20 seconds; initial DRO interval of 40 seconds or more"
    ],
    correctIndex: 1,
    explanation: "The mean IRT is calculated by dividing total duration by total responses: 1800 seconds divided by 90 responses equals 20 seconds. Beginning with an interval equal to or slightly less than the mean baseline IRT, the practitioner could set the initial DRO interval at 30 seconds or less.",
  },
  {
    id: 27019,
    topic: "DRO Guidelines: Increasing the Interval",
    prompt: "Poling and Ryan (1982) suggested that one way to increase the DRO interval is to change the interval each session based on the learner's performance. Which of the following illustrates this approach?",
    options: [
      "Increase the interval by a constant 15 seconds at each opportunity",
      "Increase the interval proportionately by 10% at each opportunity",
      "Set the DRO interval for each session equal to the mean IRT from the preceding session",
      "Double the interval length whenever two consecutive sessions produce zero problem behavior"
    ],
    correctIndex: 2,
    explanation: "One of the three procedures suggested by Poling and Ryan (1982) is to change the DRO interval each session based on the learner's performance, for example by setting the interval equal to the mean IRT from the preceding session.",
  },
  {
    id: 27020,
    topic: "Momentary DRO",
    prompt: "On a momentary DRO schedule, when is reinforcement delivered?",
    options: [
      "If the problem behavior did not occur at any point during the entire interval",
      "At the end of each interval if the problem behavior is not occurring at that exact moment",
      "Following each occurrence of the target behavior separated by a minimum IRT",
      "Only when the number of responses in a session falls below a criterion limit"
    ],
    correctIndex: 1,
    explanation: "On a momentary DRO schedule, reinforcement is contingent on the absence of the problem behavior at the exact time each interval ends, rather than throughout the entire interval. Occurrences of the problem behavior between those moments have no effect on reinforcement delivery.",
  },
  {
    id: 27021,
    topic: "Momentary DRO",
    prompt: "Hammond and colleagues (2011) concluded that fixed-momentary DRO (FM-DRO) schedules generally have been what in treating problem behavior?",
    options: [
      "More effective than interval DRO for highly frequent problem behaviors",
      "Effective as a standalone procedure for most populations",
      "Ineffective as treatment for problem behavior",
      "Most effective when combined with response blocking"
    ],
    correctIndex: 2,
    explanation: "Hammond and colleagues (2011) concluded that FM-DRO schedules 'generally have been ineffective as treatment for problem behavior.' They also noted that subtle therapist responses such as reaching for the programmed reinforcer may function as signals that render FM-DRO ineffective.",
  },
  {
    id: 27022,
    topic: "Momentary DRO",
    prompt: "A key concern with the signaled FM-DRO procedure is that subtle therapist movements before delivering the reinforcer may function as:",
    options: [
      "Abolishing operations that reduce the value of the reinforcer",
      "Discriminative stimuli allowing the client to suppress the problem behavior only at the signal moment",
      "Conditioned punishers that suppress all responding during the session",
      "Unconditioned reinforcers that increase the rate of the problem behavior"
    ],
    correctIndex: 1,
    explanation: "Hammond and colleagues (2011) noted that very subtle therapist responses (such as reaching for the programmed reinforcer) may function as signals that render FM-DRO ineffective, because the client can discriminate when reinforcement is about to occur and briefly suppress the problem behavior only at those moments.",
  },
  {
    id: 27023,
    topic: "Variable-Momentary DRO",
    prompt: "Lindberg and colleagues (1999) noted which two advantages of variable-momentary DRO (VM-DRO) over fixed-interval DRO (FI-DRO)?",
    options: [
      "VM-DRO produces faster initial suppression and requires shorter intervals",
      "VM-DRO eliminates the need for functional assessment and is easier to implement in group settings",
      "VM-DRO results in lower rates of resurgence and prevents inadvertent reinforcement of other behaviors",
      "VM-DRO appears more practical because continuous monitoring is not needed, and participants obtained higher overall rates of reinforcement"
    ],
    correctIndex: 3,
    explanation: "Lindberg and colleagues (1999) noted two potential advantages of VM-DRO over FI-DRO: first, VM-DRO is more practical because the practitioner need not monitor the participant's behavior at all times; second, participants obtained higher overall rates of reinforcement with VM-DRO than with FI-DRO.",
  },
  {
    id: 27024,
    topic: "DRO Limitations",
    prompt: "A practitioner implements interval DRO to reduce facial tics of an adolescent with Tourette syndrome. During the interval, the adolescent also curses but still receives reinforcement at the end of the tic-free interval. This illustrates the risk of:",
    options: [
      "Inadvertently reinforcing other undesirable behaviors",
      "Inadvertently punishing all responding during the interval",
      "Creating an extinction burst for the alternative behavior",
      "Thinning the DRO interval too rapidly"
    ],
    correctIndex: 0,
    explanation: "Because DRO does not require certain behaviors for reinforcement, whatever the person is doing when reinforcement is delivered is likely to occur more often in the future. Practitioners must be careful not to inadvertently strengthen other undesirable behaviors, such as cursing, when using DRO.",
  },
  {
    id: 27025,
    topic: "DRO Limitations",
    prompt: "Rozenblat and colleagues (2009) found that if DRO intervals are extremely short (e.g., 1 second), what practical problem may arise?",
    options: [
      "The reinforcer loses its effectiveness due to satiation from overly frequent delivery",
      "It may be clinically impossible for a single practitioner to implement the procedure alone",
      "The client becomes dependent on continuous reinforcement and fails to generalize",
      "Short intervals prevent adequate measurement of interresponse time"
    ],
    correctIndex: 1,
    explanation: "Rozenblat and colleagues found that very short DRO intervals may be clinically impossible for a single practitioner to implement alone. Trying to conduct a session, time intervals, collect data, and deliver reinforcers simultaneously is likely to exceed a single person's capability.",
  },
  {
    id: 27026,
    topic: "DRO Guidelines: Extending to Other Settings",
    prompt: "After a problem behavior is substantially reduced in the treatment setting under DRO, the next recommended step is to:",
    options: [
      "Terminate the DRO contingency and rely on natural reinforcement",
      "Increase the DRO interval to its maximum target length before extending to new settings",
      "Introduce the DRO intervention during other activities and times in the person's natural environment",
      "Switch from DRO to DRL to maintain a low but nonzero rate of the behavior"
    ],
    correctIndex: 2,
    explanation: "When the frequency of the problem behavior is reduced substantially in the treatment setting, the DRO intervention can be introduced during other activities and times in the person's natural environment. Having teachers, parents, or caregivers deliver reinforcement on the DRO schedule helps extend the effects.",
  },
  {
    id: 27027,
    topic: "Differential Reinforcement of Low Rates (DRL)",
    prompt: "DRL is used when a practitioner wants to:",
    options: [
      "Eliminate a behavior completely and as quickly as possible",
      "Teach a new behavior to replace an existing problem behavior",
      "Increase the duration of time a behavior is sustained",
      "Decrease the rate of a behavior that occurs too frequently without eliminating it entirely"
    ],
    correctIndex: 3,
    explanation: "Behavior analysts use DRL to decrease the rate of a behavior that occurs too frequently, but not to eliminate the behavior entirely. A practitioner may identify a behavior as a problem not because of its form, but because it occurs too often.",
  },
  {
    id: 27028,
    topic: "Differential Reinforcement of Low Rates (DRL)",
    prompt: "Which researcher named and described the three DRL procedures (full-session DRL, interval DRL, and spaced-responding DRL)?",
    options: [
      "Ferster",
      "Reynolds",
      "Deitz",
      "Catania"
    ],
    correctIndex: 2,
    explanation: "Deitz (1977) named and described three DRL procedures: full-session DRL, interval DRL, and spaced-responding DRL. These three variations offer practitioners different ways to structure the DRL contingency depending on the goal of treatment.",
  },
  {
    id: 27029,
    topic: "Full-Session DRL",
    prompt: "In a full-session DRL schedule, reinforcement is delivered when:",
    options: [
      "Each response in the session is separated from the previous response by a minimum IRT",
      "The number of responses during the entire session is equal to or below a predetermined criterion",
      "The problem behavior does not occur during any single interval within the session",
      "The learner emits the target behavior at least once but no more than twice per session"
    ],
    correctIndex: 1,
    explanation: "In a full-session DRL schedule, reinforcement is delivered when responding during an entire instructional or treatment session is equal to or below a predetermined criterion. If the number of responses exceeds the specified limit during the session, reinforcement is withheld.",
  },
  {
    id: 27030,
    topic: "Full-Session DRL",
    prompt: "A teacher applies full-session DRL to reduce a student's talk-outs, setting a criterion of 3 or fewer per 50-minute session. The student emits 4 talk-outs. What should the teacher do?",
    options: [
      "Withhold reinforcement for that session",
      "Deliver a small reinforcer because the student came close to the criterion",
      "Immediately reset the session and start over",
      "Provide escape from the next assignment as a consequence"
    ],
    correctIndex: 0,
    explanation: "In full-session DRL, if the number of responses exceeds the specified limit during the session, reinforcement is withheld. Emitting 4 talk-outs when the criterion is 3 or fewer means the criterion was not met and the reinforcer should not be delivered.",
  },
  {
    id: 27031,
    topic: "Full-Session DRL",
    prompt: "Deitz (1977) noted that with full-session DRL arranged without moment-to-moment feedback, once a learner loses the opportunity for reinforcement during the session, the learner could then:",
    options: [
      "Typically emit zero additional responses for the remainder of the session",
      "Spontaneously begin engaging in appropriate alternative behaviors",
      "Request clarification of the contingency before responding again",
      "Emit high rates of the problem behavior without consequence for the rest of the session"
    ],
    correctIndex: 3,
    explanation: "Deitz (1977) stated that with full-session DRL, once the learner loses the opportunity for reinforcement during the session, he could then emit high rates of misbehavior without consequence. This is a notable limitation of full-session DRL arranged without moment-to-moment feedback.",
  },
  {
    id: 27032,
    topic: "Interval DRL",
    prompt: "In an interval DRL schedule, the practitioner provides reinforcement at the end of an interval only when:",
    options: [
      "The problem behavior occurred at least once during that interval",
      "The problem behavior did not occur at all during the interval",
      "The number of responses during the interval was equal to or below a criterion limit",
      "The learner emitted an alternative behavior at the end of the interval"
    ],
    correctIndex: 2,
    explanation: "In interval DRL, the practitioner provides reinforcement at the end of each interval in which the number of occurrences of the problem behavior was equal to or below a criterion limit. If the learner exceeds the criterion number during an interval, the opportunity for reinforcement is removed and a new interval begins.",
  },
  {
    id: 27033,
    topic: "Spaced-Responding DRL",
    prompt: "In a spaced-responding DRL schedule, reinforcement is delivered following an occurrence of the target response that:",
    options: [
      "Is separated from the previous response by at least a specified minimum interresponse time (IRT)",
      "Is emitted within 5 seconds of the previous response",
      "Occurs during any portion of the session interval, regardless of timing",
      "Is the first response of the session only"
    ],
    correctIndex: 0,
    explanation: "In spaced-responding DRL, the practitioner delivers a reinforcer following an occurrence of a response that is separated from the previous response by at least a specified minimum interresponse time. The longer the required IRT, the lower the overall rate of responding.",
  },
  {
    id: 27034,
    topic: "Spaced-Responding DRL",
    prompt: "Spaced-responding DRL is described as the applied variation that most closely resembles DRL schedules described by Ferster and Skinner (1957) because:",
    options: [
      "It eliminates the behavior to zero occurrences like the original laboratory procedure",
      "Reinforcement immediately follows an instance of the target behavior when the IRT criterion is met",
      "It uses variable-ratio schedules identical to the original laboratory research",
      "It requires the learner to withhold the response for the entire session duration"
    ],
    correctIndex: 1,
    explanation: "Because reinforcement in a spaced-responding DRL immediately follows an instance of the target behavior when the IRT criterion is met, it is the applied variation of DRL that most closely resembles the DRL schedules of reinforcement described by Ferster and Skinner (1957).",
  },
  {
    id: 27035,
    topic: "Spaced-Responding DRL",
    prompt: "Favell, McGimsey, and Jones (1980) used spaced-responding DRL to decrease rapid eating of individuals with developmental disabilities. As treatment progressed, they:",
    options: [
      "Decreased the required pause time between bites until the behavior was eliminated",
      "Switched from spaced-responding DRL to a full-session DRL schedule",
      "Required gradually longer pauses between bites and faded out response prompts",
      "Transferred the intervention from meal settings to vocational settings"
    ],
    correctIndex: 2,
    explanation: "As treatment progressed, Favell and colleagues required gradually increasing and longer pauses between bites for reinforcement. They also manually prompted separations between bites and faded those prompts when minimum 5-second pauses occurred independently, and gradually thinned food reinforcement and praise.",
  },
  {
    id: 27036,
    topic: "DRL Guidelines: Choosing the Appropriate Procedure",
    prompt: "Of the three DRL procedures, only which one delivers reinforcement immediately following the occurrence of a specific response?",
    options: [
      "Full-session DRL",
      "Interval DRL",
      "Spaced-responding DRL",
      "Variable-interval DRL"
    ],
    correctIndex: 2,
    explanation: "Of the three DRL procedures, only spaced-responding DRL delivers reinforcement immediately following the occurrence of a specific response when the minimum IRT criterion is met. Full-session and interval DRL do not require a response to occur for the participant to receive the reinforcer.",
  },
  {
    id: 27037,
    topic: "DRL Guidelines: Limitations",
    prompt: "DRL should NOT be used with which type of problem behavior?",
    options: [
      "Self-injurious or violent behaviors",
      "Excessive hand-raising in class",
      "Frequent requests for teacher attention",
      "Rapid eating in individuals with developmental disabilities"
    ],
    correctIndex: 0,
    explanation: "DRL should not be used with self-injurious, violent, or potentially dangerous behaviors. If a practitioner needs to reduce an inappropriate behavior quickly, DRL would also not be the method of first choice, as reducing the behavior to appropriate levels may take considerable time.",
  },
  {
    id: 27038,
    topic: "DRL Guidelines: Using Baseline Data",
    prompt: "A practitioner records 8, 13, 10, 7, and 12 responses per session over five baseline sessions. What is the mean and an appropriate initial full-session DRL criterion?",
    options: [
      "Mean of 10; initial criterion of 20 responses per session",
      "Mean of 8; initial criterion of 5 responses per session",
      "Mean of 12; initial criterion of 15 responses per session",
      "Mean of 10; initial criterion of 8 to 10 responses per session"
    ],
    correctIndex: 3,
    explanation: "The mean across the five baseline sessions is 10 (50 divided by 5). Practitioners can use the mean number of responses, or slightly lower than that average, as the initial full-session DRL criterion. A limit of 8 to 10 responses per session would be an appropriate starting point.",
  },
  {
    id: 27039,
    topic: "DRL Guidelines: Thinning the Schedule",
    prompt: "When thinning a spaced-responding DRL schedule, the practitioner can adjust the IRT criterion based on:",
    options: [
      "The number of reinforcers delivered during the previous session",
      "The mean IRT of recent sessions or slightly less than that average",
      "The maximum IRT observed across all baseline sessions",
      "A fixed 50% increase in IRT per session"
    ],
    correctIndex: 1,
    explanation: "With spaced-responding DRL, the practitioner can adjust the IRT criterion based on the mean IRT of recent sessions, or slightly less than that average. Wright and Vollmer (2002), for example, set the IRT for the DRL component at the mean IRT of the previous five sessions.",
  },
  {
    id: 27040,
    topic: "DRL Guidelines: Providing Feedback",
    prompt: "Which DRL variation provides the most accurate feedback to the learner about their rate of responding?",
    options: [
      "Spaced-responding DRL, because reinforcement or withholding follows each individual response immediately",
      "Full-session DRL, because the criterion is reviewed only at the end of the session",
      "Interval DRL, because feedback is provided at the end of each equal interval",
      "Variable-interval DRL, because the random schedule prevents discrimination of the contingency"
    ],
    correctIndex: 0,
    explanation: "The most accurate feedback comes with spaced-responding DRL because reinforcement follows each response that meets the IRT criterion. When a response does not meet the criterion, reinforcement is withheld and the interval is immediately reset, providing immediate feedback on each individual response.",
  },
  {
    id: 27041,
    topic: "Comparing DRA, DRO, and DRL",
    prompt: "A behavior analyst wants to reduce problem behavior without targeting any specific alternative behavior and without necessarily maintaining any particular rate of the problem behavior. Which procedure is most appropriate?",
    options: [
      "DRA, because it strengthens a specific alternative behavior",
      "DRO, because reinforcement is contingent on the absence of the problem behavior",
      "Spaced-responding DRL, because it maintains the behavior at a reduced rate",
      "DRI, because it selects a behavior topographically incompatible with the problem"
    ],
    correctIndex: 1,
    explanation: "DRO is most appropriate when the practitioner wants to reduce problem behavior without specifying a particular alternative behavior. DRO is suited for high-rate serious problem behaviors when almost any other behavior the client might engage in is preferable to the target behavior.",
  },
  {
    id: 27042,
    topic: "Comparing DRA, DRO, and DRL",
    prompt: "A student raises her hand for help too frequently during independent seatwork. The teacher believes some hand-raising is appropriate and should continue, but at a reduced rate. Which procedure is best suited to this goal?",
    options: [
      "DRO, which would reinforce the complete absence of hand-raising",
      "DRA, which would reinforce a behavior incompatible with hand-raising",
      "DRL, which would reduce the rate while allowing the behavior to continue",
      "Extinction alone, which would eliminate the behavior entirely"
    ],
    correctIndex: 2,
    explanation: "DRL is used to decrease the rate of a behavior that occurs too frequently without eliminating it. A student's hand-raising for help is appropriate at a limited rate but problematic if too frequent. DRL allows the behavior to continue while reducing its frequency to an acceptable level.",
  },
  {
    id: 27043,
    topic: "DRA Applied Example",
    prompt: "In the study by Dixon, Benedict, and Larson (2001), DRA was used to treat Fernando's inappropriate verbal behavior. The functional analysis revealed that inappropriate verbalizations were maintained by:",
    options: [
      "Access to tangible items",
      "Escape from demands",
      "Social attention",
      "Sensory stimulation"
    ],
    correctIndex: 2,
    explanation: "The functional analysis revealed that Fernando's inappropriate verbal statements were maintained by social attention. During the DRA condition, the researchers attended to Fernando's appropriate statements with 10 seconds of relevant comments and ignored his inappropriate verbal behavior.",
  },
  {
    id: 27044,
    topic: "FI-DRO Applied Example",
    prompt: "Cowdery, Iwata, and Pace (1990) set the initial FI-DRO interval for Jerry at 2 minutes. This choice was based on:",
    options: [
      "The average session length used during baseline assessment",
      "The longest period they had previously observed Jerry refrain from scratching while left alone",
      "A standard recommended interval for DRO with children engaging in SIB",
      "The mean interresponse time calculated from baseline functional analysis data"
    ],
    correctIndex: 1,
    explanation: "Cowdery and colleagues set the initial interval at 2 minutes because that was 'the longest we had previously seen Jerry refrain from scratching while left alone.' This exemplifies the guideline of beginning with an interval equal to or slightly less than the mean baseline IRT.",
  },
  {
    id: 27045,
    topic: "Variable-Interval DRO",
    prompt: "Chiang, Iwata, and Dorsey (1979) implemented VI-DRO on a school bus using an interesting variation in which DRO intervals were based not on elapsed time but on:",
    options: [
      "The student's self-report of appropriate behavior at each bus stop",
      "A fixed number of bus stops regardless of travel time",
      "The total distance traveled in miles between school and home",
      "Landmarks on the bus route such as stop signs and traffic lights"
    ],
    correctIndex: 3,
    explanation: "Rather than basing the DRO intervals on elapsed time, Chiang and colleagues used a 'distance-based' DRO schedule. The driver divided the bus route into sections designated by landmarks such as stop signs and traffic lights, and praised the student and added a point if no disruptive behaviors had occurred during each interval.",
  },
  {
    id: 27046,
    topic: "DRL and Interresponse Time (IRT)",
    prompt: "Interresponse time (IRT) and rate of responding are related in which way?",
    options: [
      "Longer IRTs correlate with higher overall rates of responding",
      "Shorter IRTs correlate with lower overall rates of responding",
      "Longer IRTs correlate with lower overall rates of responding",
      "IRT and response rate are independent of each other"
    ],
    correctIndex: 2,
    explanation: "IRT and rate of responding are directly correlated: the longer the IRT, the lower the overall rate of responding; shorter IRTs correlate with higher response rates. When reinforcement is contingent on longer IRTs, response rate will decrease.",
  },
  {
    id: 27047,
    topic: "DRL Guidelines: Thinning the Schedule",
    prompt: "One decision rule for thinning the DRL schedule is to change the criterion whenever the learner meets or exceeds it for how many consecutive sessions?",
    options: [
      "One consecutive session",
      "Two consecutive sessions",
      "Three consecutive sessions",
      "Five consecutive sessions"
    ],
    correctIndex: 2,
    explanation: "One of the two described decision rules for thinning the DRL schedule states that practitioners may want to change the DRL criterion whenever the learner meets or exceeds the criterion for three consecutive sessions. The second rule involves the learner receiving reinforcement for at least 90% of opportunities for three consecutive sessions.",
  },
  {
    id: 27048,
    topic: "DRA and Treatment Relapse",
    prompt: "Periodic 'full implementation booster sessions' are recommended during DRA programs primarily to:",
    options: [
      "Teach the client new alternative behaviors when the original one loses function",
      "Re-establish the predominance of appropriate behavior after partial implementation periods",
      "Transition the client from DRA to a DRO schedule",
      "Eliminate the need for any reinforcement in the natural environment"
    ],
    correctIndex: 1,
    explanation: "Research suggests that treatment effects might erode over time when DRA is partially implemented. Periodic full implementation booster sessions are recommended to re-establish the predominance of appropriate behavior, particularly after thinning implementation levels or transitioning to natural settings.",
  },
  {
    id: 27049,
    topic: "DRO and DRL Compared",
    prompt: "A critical distinction between DRL and DRO is that with DRL, reinforcement follows an occurrence of the target behavior when criteria are met, whereas with DRO, reinforcement is contingent on:",
    options: [
      "The occurrence of a specific alternative behavior",
      "A response rate above a predetermined criterion",
      "An incompatible response being emitted simultaneously",
      "The absence of the target behavior"
    ],
    correctIndex: 3,
    explanation: "With DRL, reinforcement is delivered following an occurrence of the target behavior when certain IRT or response-count criteria are met. With DRO, reinforcement is contingent on the absence of the target behavior throughout an interval or at a moment in time. This distinction makes DRO appropriate for elimination rather than rate reduction.",
  },
  {
    id: 27050,
    topic: "Combining DRO with Other Procedures",
    prompt: "Rolider and Van Houten (1984) showed that a combination of DRO plus reprimands was more effective than DRO alone. This example illustrates which DRO guideline?",
    options: [
      "Set initial DRO intervals that ensure frequent reinforcement",
      "Do not inadvertently reinforce other undesirable behaviors",
      "Combine DRO with other procedures to yield more efficient and effective behavior change",
      "Extend the application of DRO to other settings and times of day"
    ],
    correctIndex: 2,
    explanation: "The Rolider and Van Houten (1984) findings illustrate the guideline of combining DRO with other behavior-reduction procedures. Including DRO in a treatment package with other procedures often yields more efficient and effective behavior change than using DRO alone.",
  },
];

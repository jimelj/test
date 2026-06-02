import type { Question } from "../types";

/**
 * BCBA practice questions for Cooper et al., Chapter 26: Antecedent Interventions.
 * Grounded in the chapter text. Option order is shuffled at runtime, so
 * correctIndex placement here is arbitrary.
 */
export const QUESTIONS_M29: Question[] = [
  {
    id: 28001,
    topic: "Defining and Classifying Antecedent Interventions",
    prompt: "An antecedent intervention is best described as one that is implemented:",
    options: [
      "Prior to and independent of the target behavior's occurrence",
      "Contingent on the target behavior's occurrence",
      "After the target behavior and its consequence have both occurred",
      "Only when a discriminative stimulus is present"
    ],
    correctIndex: 0,
    explanation: "By definition, an antecedent intervention is implemented prior to and independent of the target behavior's occurrence, distinguishing it from consequence-based procedures.",
  },
  {
    id: 28002,
    topic: "Defining and Classifying Antecedent Interventions",
    prompt: "According to Smith (2011), a 'function-based' antecedent intervention is one that:",
    options: [
      "Is applied after conducting a preference assessment only",
      "Does not require knowledge of the variables maintaining the problem behavior",
      "Relies solely on differential consequences without altering any antecedent condition",
      "Directly manipulates at least one component of the operant contingency identified as maintaining the problem behavior"
    ],
    correctIndex: 3,
    explanation: "Smith (2011) defined function-based antecedent interventions as those that directly manipulate at least one component of the operant contingency identified as maintaining the problem behavior.",
  },
  {
    id: 28003,
    topic: "Defining and Classifying Antecedent Interventions",
    prompt: "A 'default' antecedent intervention, as described by Smith (2011), is one whose effects:",
    options: [
      "Depend on identifying the specific reinforcer maintaining the problem behavior",
      "Require pairing a discriminative stimulus with reinforcement",
      "Do not depend on specific identification of the variables that set the occasion for and maintain the problem behavior",
      "Are only effective when combined with punishment"
    ],
    correctIndex: 2,
    explanation: "Smith (2011) defined default interventions as those whose effects do not depend on specific identification of the variables that set the occasion for and maintain the problem behavior.",
  },
  {
    id: 28004,
    topic: "Defining and Classifying Antecedent Interventions",
    prompt: "A contingency-dependent antecedent intervention is one whose effects:",
    options: [
      "Occur independent of any reinforcement history",
      "Are produced solely by changes in motivating operations",
      "Do not require differential reinforcement of any kind",
      "Depend on differential consequences for the target behavior in the presence or absence of the antecedent"
    ],
    correctIndex: 3,
    explanation: "Contingency-dependent antecedent interventions require differential consequences for the target behavior (or alternative behavior) in the presence or absence of the antecedent, as is the case with stimulus-control-based antecedent interventions.",
  },
  {
    id: 28005,
    topic: "Defining and Classifying Antecedent Interventions",
    prompt: "Which of the following is the best example of a contingency-independent antecedent intervention?",
    options: [
      "Teaching a student to say 'break please' and reinforcing that response when it occurs",
      "Presenting a discriminative stimulus correlated with reinforcement availability",
      "Providing noncontingent reinforcement on a fixed-time schedule",
      "Using response cost contingent on each instance of problem behavior"
    ],
    correctIndex: 2,
    explanation: "Noncontingent reinforcement is contingency-independent because its effects do not depend on differential consequences for the target behavior; reinforcers are delivered on a time-based schedule regardless of behavior.",
  },
  {
    id: 28006,
    topic: "Defining and Classifying Antecedent Interventions",
    prompt: "The evocative function of a motivating operation (MO) differs from that of a discriminative stimulus (SD) because:",
    options: [
      "MOs require a history of differential reinforcement to evoke behavior, whereas SDs do not",
      "The evocative effect of an MO is independent of the differential availability of reinforcement, whereas an SD's evocative effect depends on that history",
      "SDs are always establishing operations, while MOs are always abolishing operations",
      "MOs alter behavior only in the presence of a concurrent reinforcer, whereas SDs do not"
    ],
    correctIndex: 1,
    explanation: "An MO's evocative function is independent of the differential availability of reinforcement; an SD evokes behavior because of a history of reinforcement in its presence. Failure to distinguish these leads to conceptual confusion.",
  },
  {
    id: 28007,
    topic: "Noncontingent Reinforcement",
    prompt: "Noncontingent reinforcement (NCR) is defined as an antecedent intervention in which stimuli with known reinforcing properties are delivered:",
    options: [
      "On a fixed-ratio or variable-ratio schedule dependent on the learner's behavior",
      "Continuously and only after the problem behavior reaches a criterion level",
      "On a fixed-interval schedule only when the problem behavior has not occurred",
      "On a fixed-time or variable-time schedule independent of the learner's behavior"
    ],
    correctIndex: 3,
    explanation: "NCR delivers stimuli with known reinforcing properties on a fixed-time (FT) or variable-time (VT) schedule, independent of the learner's behavior.",
  },
  {
    id: 28008,
    topic: "Noncontingent Reinforcement",
    prompt: "NCR is thought to reduce problem behavior primarily because the freely and frequently available reinforcers function as:",
    options: [
      "An abolishing operation that reduces motivation to engage in the problem behavior",
      "A discriminative stimulus for alternative behavior",
      "A conditioned punisher for the problem behavior",
      "A prompt that cues the learner to engage in a competing response"
    ],
    correctIndex: 0,
    explanation: "NCR functions as an abolishing operation (AO) that reduces the reinforcing effectiveness of the stimuli maintaining the problem behavior, thereby reducing motivation to engage in that behavior.",
  },
  {
    id: 28009,
    topic: "Noncontingent Reinforcement",
    prompt: "Which type of reinforcer identified during a functional analysis determines the specific form of NCR that should be used?",
    options: [
      "The reinforcer most preferred by the therapist",
      "Any arbitrary reinforcer the practitioner chooses",
      "The positive, negative (escape), or automatic reinforcer maintaining the problem behavior",
      "The reinforcer identified through a paired-stimulus preference assessment only"
    ],
    correctIndex: 2,
    explanation: "A functional analysis of the maintaining contingency determines whether NCR is implemented with positive reinforcement, negative reinforcement (escape), or automatic reinforcement.",
  },
  {
    id: 28010,
    topic: "Noncontingent Reinforcement",
    prompt: "In the Kahng et al. (2000) NCR study, the initial schedule was later thinned to a terminal criterion of:",
    options: [
      "60 seconds",
      "150 seconds",
      "300 seconds",
      "600 seconds"
    ],
    correctIndex: 2,
    explanation: "In Kahng et al. (2000), the initial fixed-time schedule of 5 seconds was gradually thinned to a terminal criterion of 300 seconds.",
  },
  {
    id: 28011,
    topic: "Noncontingent Reinforcement",
    prompt: "Kodak, Miltenberger, and Romaniuk (2003) used NCR escape with two boys with autism. The initial FT schedule was 10 seconds and was thinned to a terminal criterion of:",
    options: [
      "30 seconds",
      "1 minute",
      "2 minutes",
      "5 minutes"
    ],
    correctIndex: 2,
    explanation: "The NCR escape FT schedule was thinned from 10 seconds through several steps (20 sec, 30 sec, 1 min, 1.5 min) to a terminal criterion of 2 minutes.",
  },
  {
    id: 28012,
    topic: "Noncontingent Reinforcement",
    prompt: "Lindberg et al. (2003) treated SIB maintained by automatic reinforcement with NCR by providing:",
    options: [
      "Noncontingent escape from demands on a variable-time schedule",
      "Free access to a variety of preferred leisure items throughout the day",
      "Contingent attention following each instance of SIB",
      "Response blocking combined with a dense DRO schedule"
    ],
    correctIndex: 1,
    explanation: "Lindberg et al. (2003) gave Julie and Laura free access to a variety of home-based, highly preferred leisure items (e.g., beads, string) throughout the day to compete with the automatic reinforcement maintaining SIB.",
  },
  {
    id: 28013,
    topic: "Noncontingent Reinforcement",
    prompt: "To determine an initial NCR schedule interval, the recommended formula involves:",
    options: [
      "Multiplying the mean interresponse time by a constant factor of 1.5",
      "Setting the interval arbitrarily at 5 minutes regardless of baseline data",
      "Dividing the total number of baseline sessions by the total duration of intervention",
      "Dividing the total duration of all baseline sessions by the total number of occurrences of the problem behavior during baseline"
    ],
    correctIndex: 3,
    explanation: "The recommended procedure divides the total duration of all baseline sessions by the total number of occurrences of the problem behavior to determine the initial NCR interval, ensuring frequent contact with the reinforcer.",
  },
  {
    id: 28014,
    topic: "Noncontingent Reinforcement",
    prompt: "Applied behavior analysts have used three procedures to thin NCR schedules. Which of the following is NOT one of them?",
    options: [
      "Constant time increase",
      "Response-contingent interval reduction",
      "Proportional time increase",
      "Session-to-session time increase or decrease"
    ],
    correctIndex: 1,
    explanation: "The three procedures for thinning NCR schedules are constant time increase, proportional time increase, and session-to-session time increase or decrease. Response-contingent interval reduction is not among them.",
  },
  {
    id: 28015,
    topic: "Noncontingent Reinforcement",
    prompt: "Ringdahl et al. (2001) found that NCR was ineffective when:",
    options: [
      "The NCR schedule was denser than the baseline schedule",
      "The baseline condition and NCR condition contained a similar number of reinforcers",
      "Extinction was combined with the NCR treatment package",
      "The NCR interval was set below the mean baseline interresponse time"
    ],
    correctIndex: 1,
    explanation: "NCR was ineffective when the baseline and NCR conditions contained a similar number of reinforcers. NCR was effective only when the NCR schedule was denser (richer) than the baseline schedule.",
  },
  {
    id: 28016,
    topic: "Noncontingent Reinforcement",
    prompt: "One of Ringdahl et al.'s (2001) three procedures for emphasizing reinforcement during NCR is to:",
    options: [
      "Combine differential reinforcement of other behavior (DRO) with the NCR package to decrease adventitious reinforcement",
      "Use variable-ratio schedules rather than time-based schedules throughout the intervention",
      "Deliver reinforcers contingent on each occurrence of the problem behavior to maintain contact",
      "Restrict access to reinforcers between sessions to increase their motivating value"
    ],
    correctIndex: 0,
    explanation: "One of Ringdahl et al.'s (2001) three procedures was to combine DRO with the NCR treatment package to decrease adventitious reinforcement of the problem behavior from the time-based NCR schedule.",
  },
  {
    id: 28017,
    topic: "Noncontingent Reinforcement",
    prompt: "A practical terminal criterion for NCR schedule thinning that has found the most favor in applied settings is a fixed-time schedule of:",
    options: [
      "1 minute",
      "3 minutes",
      "5 minutes",
      "10 minutes"
    ],
    correctIndex: 2,
    explanation: "While various terminal criteria have been used (3 min, 5 min, 10 min), the 5-minute FT schedule has found the most favor in applied settings because it appears both practical and effective.",
  },
  {
    id: 28018,
    topic: "Noncontingent Reinforcement",
    prompt: "One disadvantage of NCR is that chance pairings of problem behavior with NCR delivery of reinforcing stimuli could:",
    options: [
      "Strengthen and maintain desirable alternative behaviors",
      "Eliminate the abolishing operation effect entirely",
      "Inadvertently strengthen the problem behavior",
      "Increase the learner's motivation to engage in adaptive behavior"
    ],
    correctIndex: 2,
    explanation: "A listed disadvantage of NCR is that chance pairings of problem behavior and NCR delivery of stimuli with known reinforcing properties could inadvertently strengthen the problem behavior.",
  },
  {
    id: 28019,
    topic: "Noncontingent Reinforcement",
    prompt: "DeLeon et al. (2000) recommended which strategy to address the problem of changing reinforcer preferences during NCR?",
    options: [
      "Permanently locking in the initial reinforcer identified during functional analysis",
      "Conducting a new functional analysis each time the problem behavior worsens",
      "Switching to a contingent reinforcement schedule once preferences change",
      "Periodically using a variety of available stimuli with the NCR intervention"
    ],
    correctIndex: 3,
    explanation: "DeLeon et al. (2000) recommended periodically using a variety of available stimuli with the NCR intervention to reduce problems caused by changing reinforcer preferences.",
  },
  {
    id: 28020,
    topic: "Noncontingent Reinforcement",
    prompt: "When implementing NCR in the classroom, if a student engages in the problem behavior just before the end of an interval, Coy and Kostewicz (2018) recommended that the practitioner should:",
    options: [
      "Deliver the reinforcer immediately to maintain the schedule",
      "Withhold the reinforcer for approximately 10 seconds or until the student no longer displays the target behavior",
      "Extend the NCR interval by 30 seconds as a consequence",
      "Provide a verbal reprimand and then deliver the reinforcer"
    ],
    correctIndex: 1,
    explanation: "Coy and Kostewicz (2018) recommended withholding the reinforcer for approximately 10 seconds or until the student no longer displays the target problem behavior, then delivering it and starting the next NCR interval.",
  },
  {
    id: 28021,
    topic: "Noncontingent Reinforcement",
    prompt: "An advantage of NCR compared to some positive reductive techniques is that NCR:",
    options: [
      "Requires precise monitoring of the client's behavior for contingent reinforcer delivery",
      "Always eliminates the problem behavior without any schedule thinning",
      "Is effective regardless of the type of reinforcer used",
      "Is easier to apply because reinforcers are delivered on a time-based schedule rather than contingent on monitoring behavior"
    ],
    correctIndex: 3,
    explanation: "NCR is easier to apply than positive reductive techniques that require monitoring the client's behavior for contingent delivery of the reinforcer, because NCR uses a time-based schedule.",
  },
  {
    id: 28022,
    topic: "High-Probability Instructional Sequence",
    prompt: "The high-probability instructional sequence (high-p) is best described as:",
    options: [
      "Presenting a target (low-p) instruction first, followed by several easy instructions",
      "Presenting two to five instructions for which the learner has a history of compliance, followed immediately by the target low-p instruction",
      "Delivering continuous reinforcement for each compliance with any instruction regardless of difficulty",
      "Using response cost after noncompliance with low-p instructions to increase future compliance"
    ],
    correctIndex: 1,
    explanation: "In the high-p sequence, the practitioner presents two to five easy-to-follow instructions with a history of compliance (high-p), and after the learner complies with several, immediately presents the target (low-p) instruction.",
  },
  {
    id: 28023,
    topic: "High-Probability Instructional Sequence",
    prompt: "The reductive effects of the high-p instructional sequence on noncompliance are thought to resemble the abative effects of an abolishing operation that:",
    options: [
      "Reduces the current potency of reinforcement for noncompliance with low-probability requests",
      "Increases the reinforcing value of escape from low-p requests",
      "Establishes social attention as a conditioned reinforcer for compliance",
      "Increases the discriminative value of instructions across all difficulty levels"
    ],
    correctIndex: 0,
    explanation: "The high-p sequence resembles an abolishing operation that reduces the current potency of reinforcement for noncompliance with low-probability requests, effectively reducing the value of escape from those requests.",
  },
  {
    id: 28024,
    topic: "High-Probability Instructional Sequence",
    prompt: "The term 'behavioral momentum' in the context of the high-p instructional sequence refers to:",
    options: [
      "The force required to physically guide the learner through a task",
      "The speed at which a learner acquires new skills through massed practice",
      "A behavior's resistance to change following an alteration in reinforcement conditions",
      "The cumulative number of correct responses emitted during a session"
    ],
    correctIndex: 2,
    explanation: "Behavioral momentum describes a behavior's resistance to change following an alteration in reinforcement conditions, and the term is sometimes used to describe the effects produced by the high-p instructional sequence.",
  },
  {
    id: 28025,
    topic: "High-Probability Instructional Sequence",
    prompt: "For selecting high-p instructions, the most commonly used compliance criterion is:",
    options: [
      "40% or greater compliance",
      "60% or greater compliance",
      "80% or greater compliance",
      "100% compliance across all sessions"
    ],
    correctIndex: 2,
    explanation: "A criterion of 80% compliance or greater for high-p instructions is commonly used in the high-p instructional sequence research and practice.",
  },
  {
    id: 28026,
    topic: "High-Probability Instructional Sequence",
    prompt: "Axelrod and Zank (2012) categorized an instruction as low-p if a student complied with it:",
    options: [
      "Less than 20% of the time",
      "40% or less of the time",
      "Between 40% and 60% of the time",
      "Less than 80% but more than 50% of the time"
    ],
    correctIndex: 1,
    explanation: "Axelrod and Zank (2012) categorized instructions with 40% compliance or less as low-p instructions for use as the target request in the high-p sequence.",
  },
  {
    id: 28027,
    topic: "High-Probability Instructional Sequence",
    prompt: "According to guidelines for using the high-p instructional sequence, high-p requests should be presented with brief intertrial intervals of:",
    options: [
      "10 to 15 seconds",
      "15 to 30 seconds",
      "30 to 60 seconds",
      "1 to 5 seconds"
    ],
    correctIndex: 3,
    explanation: "Guidelines indicate that high-p instructions should be presented rapidly, with brief intertrial intervals of 1 to 5 seconds, to maintain the momentum of compliance.",
  },
  {
    id: 28028,
    topic: "High-Probability Instructional Sequence",
    prompt: "A key guideline for the high-p sequence states that practitioners should NOT use it just after an occurrence of the problem behavior because:",
    options: [
      "The learner will be too agitated to comply with high-p instructions",
      "The learner might learn that responding to a low-p request with the problem behavior will produce a series of easier requests",
      "The high-p sequence requires a minimum rest period between uses to be effective",
      "Providing reinforcement after problem behavior constitutes adventitious reinforcement"
    ],
    correctIndex: 1,
    explanation: "The guideline warns against using the high-p sequence immediately after problem behavior because the learner might learn that emitting the problem behavior produces a series of easier (high-p) requests.",
  },
  {
    id: 28029,
    topic: "High-Probability Instructional Sequence",
    prompt: "Mace and Belfiore (1990) cautioned that social praise may not increase compliance with the high-p sequence when:",
    options: [
      "The number of high-p requests in the sequence exceeds five",
      "Motivation for escape behavior is high",
      "The learner has not been taught to recognize praise as a reinforcer",
      "The high-p and low-p tasks are similar in topography"
    ],
    correctIndex: 1,
    explanation: "Mace and Belfiore (1990) cautioned that social praise may not increase compliance if the learner's motivation for escape behavior is high, underscoring the need for potent, high-quality reinforcers.",
  },
  {
    id: 28030,
    topic: "High-Probability Instructional Sequence",
    prompt: "A behavior analyst is fading the high-p sequence for a student who now consistently complies with low-p requests. The final target ratio of high-p to low-p instructions is:",
    options: [
      "5-to-1",
      "3-to-1",
      "2-to-1",
      "1-to-1"
    ],
    correctIndex: 3,
    explanation: "Guidelines for the high-p sequence indicate that the ratio of high-p to low-p instructions should be gradually faded to 1-to-1 once the learner consistently complies with low-p requests.",
  },
  {
    id: 28031,
    topic: "High-Probability Instructional Sequence",
    prompt: "Killu et al. (1998) studied the high-p sequence with three preschool children with developmental delays. Results showed that compliant responding to low-p requests:",
    options: [
      "Increased only during sessions with the primary experimenter and did not generalize to a second trainer",
      "Was effective only for the child for whom an 80% compliance criterion was used",
      "Decreased after the high-p sequence was implemented because of satiation",
      "Increased whether delivered by the primary experimenter or a second trainer, and maintained across time and settings"
    ],
    correctIndex: 3,
    explanation: "Killu et al. (1998) found that the high-p sequence delivered by two different trainers increased compliant responding to low-p requests for all three children, and compliant responding maintained across time and settings.",
  },
  {
    id: 28032,
    topic: "Functional Communication Training",
    prompt: "Functional communication training (FCT) establishes an appropriate communicative behavior to:",
    options: [
      "Replace the motivating operation that evokes the problem behavior",
      "Compete with problem behaviors evoked by a motivating operation (MO)",
      "Suppress the problem behavior through negative reinforcement",
      "Directly reduce the reinforcing effectiveness of stimuli maintaining the problem behavior"
    ],
    correctIndex: 1,
    explanation: "FCT establishes an appropriate communicative behavior to compete with problem behaviors evoked by a motivating operation (MO), making the communicative response functionally equivalent to the problem behavior.",
  },
  {
    id: 28033,
    topic: "Functional Communication Training",
    prompt: "The principal behavior change procedure used within FCT to teach the alternative communicative response is:",
    options: [
      "Differential reinforcement of incompatible behavior (DRI)",
      "Differential reinforcement of alternative behavior (DRA)",
      "Differential reinforcement of low rates (DRL)",
      "Noncontingent reinforcement (NCR)"
    ],
    correctIndex: 1,
    explanation: "FCT uses differential reinforcement of alternative behavior (DRA) to teach an adaptive communicative response that produces the same reinforcer that maintained the problem behavior.",
  },
  {
    id: 28034,
    topic: "Functional Communication Training",
    prompt: "A key difference between FCT and NCR or the high-p sequence is that FCT:",
    options: [
      "Alters current motivating operations rather than developing behavior sensitive to them",
      "Eliminates the need for a functional behavior assessment",
      "Works only for behaviors maintained by social positive reinforcement",
      "Develops communicative behaviors that are sensitive to existing motivating operations rather than altering them"
    ],
    correctIndex: 3,
    explanation: "Unlike NCR and the high-p sequence, which alter current MOs, FCT develops communicative behaviors that are sensitive to existing MOs, making the alternative communicative response functionally equivalent to the problem behavior.",
  },
  {
    id: 28035,
    topic: "Functional Communication Training",
    prompt: "Carr and Durand (1985) described FCT as a two-step process. Which of the following correctly describes both steps?",
    options: [
      "Step 1: conduct an extinction procedure for problem behavior; Step 2: teach a replacement behavior using prompting",
      "Step 1: conduct a functional behavior assessment to identify reinforcers maintaining the problem behavior; Step 2: use those reinforcers to develop an alternative behavior to replace the problem behavior",
      "Step 1: implement DRO to reduce the problem behavior; Step 2: teach the communicative response as reinforcer delivery becomes less frequent",
      "Step 1: apply response blocking; Step 2: reinforce any communicative attempt on a variable-ratio schedule"
    ],
    correctIndex: 1,
    explanation: "Carr and Durand (1985) described FCT as: (1) conduct a functional behavior assessment to identify reinforcers maintaining the problem behavior, and (2) use those reinforcers to develop an alternative behavior to replace the problem behavior.",
  },
  {
    id: 28036,
    topic: "Functional Communication Training",
    prompt: "Alternative communicative responses taught in FCT can take many forms. Which of the following is listed as an acceptable form?",
    options: [
      "Stimulus equivalence training",
      "Self-monitoring and graphing",
      "Vocalizations, signs, communication boards, word or picture cards, or vocal output systems",
      "Token delivery contingent on absence of problem behavior"
    ],
    correctIndex: 2,
    explanation: "Alternative communicative responses in FCT can include vocalizations, signs, communication boards, word or picture cards, vocal output systems, and gestures.",
  },
  {
    id: 28037,
    topic: "Functional Communication Training",
    prompt: "During the early stages of FCT, the alternative communicative response should produce the maintaining reinforcer on:",
    options: [
      "A continuous schedule of reinforcement",
      "A variable-interval schedule to promote resistance to extinction",
      "A differential reinforcement of other behavior schedule",
      "A thinned fixed-interval schedule from the start"
    ],
    correctIndex: 0,
    explanation: "During the early stages of communication training in FCT, the alternative communicative response should produce the reinforcers on a continuous schedule of reinforcement to firmly establish the response.",
  },
  {
    id: 28038,
    topic: "Functional Communication Training",
    prompt: "Why are time-based thinning procedures considered inappropriate for FCT schedule thinning?",
    options: [
      "They do not allow the therapist to monitor compliance rates accurately",
      "They are incompatible with extinction procedures required during FCT",
      "They require the practitioner to track multiple behaviors simultaneously",
      "They break the contingency between the communicative response and reinforcement, risking re-emergence of the problem behavior"
    ],
    correctIndex: 3,
    explanation: "Time-based procedures are inappropriate for FCT because they break the contingency between responding and reinforcement, which could cause the alternative communicative behavior to stop competing with the problem behavior and allow re-emergence of the problem behavior.",
  },
  {
    id: 28039,
    topic: "Functional Communication Training",
    prompt: "Hanley et al. (2001) recommended using picture cues and external 'clocks' during FCT schedule thinning in order to:",
    options: [
      "Prompt the learner to initiate the communicative response at appropriate times",
      "Announce when reinforcement is available and thereby control undesirably high rates of the communicative response",
      "Signal to the caregiver that the thinning criterion has been met",
      "Replace verbal prompts used during initial teaching of the communicative response"
    ],
    correctIndex: 1,
    explanation: "Hanley et al. (2001) suggested picture cues and external clocks to announce when reinforcement is available, specifically to control the undesirably high rates of the alternative communicative response that thinning the FI schedule could produce.",
  },
  {
    id: 28040,
    topic: "Functional Communication Training",
    prompt: "One listed disadvantage of FCT is that it leaves intact the environment that evoked the problem behavior. This is significant because it:",
    options: [
      "Makes generalization across settings impossible",
      "May limit FCT's overall effectiveness since the motivating conditions remain present",
      "Requires the practitioner to implement response blocking permanently",
      "Means that FCT cannot be used for behaviors maintained by escape"
    ],
    correctIndex: 1,
    explanation: "A disadvantage of FCT noted by McGill (1999) is that it leaves intact the environment that evoked the problem behavior, which may limit its overall effectiveness.",
  },
  {
    id: 28041,
    topic: "Functional Communication Training",
    prompt: "Durand (1999) taught students with severe disabilities to use a communication device to request objects and activities. This study is significant because:",
    options: [
      "It demonstrated that FCT can be implemented without a prior functional behavior assessment",
      "It proved that digitized speech devices are the only effective FCT mode for students with severe disabilities",
      "It established that FCT is effective only in school settings",
      "It showed the importance of teaching skills that recruit reinforcement in natural settings, thereby promoting generalization and maintenance"
    ],
    correctIndex: 3,
    explanation: "The Durand (1999) study is significant because it showed the importance of teaching skills that recruit reinforcement in natural community settings, thereby promoting generalization and maintenance of intervention effects.",
  },
  {
    id: 28042,
    topic: "Default Interventions",
    prompt: "Which of the following is NOT listed as one of Smith's (2011) three principal types of default antecedent interventions?",
    options: [
      "Antecedent exercise",
      "Enriched environment",
      "Noncontingent reinforcement",
      "Restraint"
    ],
    correctIndex: 2,
    explanation: "Smith (2011) described three default antecedent interventions: antecedent exercise, enriched environment, and restraint. Noncontingent reinforcement is a function-based or contingency-independent antecedent intervention, not classified as a default intervention.",
  },
  {
    id: 28043,
    topic: "Default Interventions: Antecedent Exercise",
    prompt: "Antecedent exercise differs from overcorrection in that antecedent exercise is:",
    options: [
      "Delivered contingent on each occurrence of the problem behavior",
      "Used only for behaviors maintained by social positive reinforcement",
      "Implemented independently of occurrences of the problem behavior",
      "Always followed by a token economy contingency"
    ],
    correctIndex: 2,
    explanation: "Unlike overcorrection, antecedent exercise is implemented independently of occurrences of the problem behavior; it is a proactive antecedent strategy rather than a contingent consequence.",
  },
  {
    id: 28044,
    topic: "Default Interventions: Antecedent Exercise",
    prompt: "In Celiberti et al. (1997), the exercise condition that produced sharp reductions in physical self-stimulation and 'out of seat' behavior for a child with autism was:",
    options: [
      "Jogging",
      "Walking",
      "Calisthenics",
      "Roller skating"
    ],
    correctIndex: 0,
    explanation: "Celiberti et al. (1997) found that sharp reductions in physical self-stimulation and 'out of seat' behavior were observed for the jogging condition but not the walking condition.",
  },
  {
    id: 28045,
    topic: "Default Interventions: Enriched Environment",
    prompt: "An enriched environment (EE) intervention reduces problem behavior by:",
    options: [
      "Systematically reinforcing the absence of problem behavior on a DRO schedule",
      "Identifying and removing all discriminative stimuli for the problem behavior",
      "Teaching the learner to self-monitor their own behavior",
      "Arranging a competition between noncontingent access to preferred reinforcement and the stimulation provided by the problem behavior"
    ],
    correctIndex: 3,
    explanation: "The EE intervention provides noncontingent access to preferred sources of reinforcement, which arranges a competition between the EE intervention and the stimulation provided by the problem behavior; when effective, this competition decreases the problem behavior.",
  },
  {
    id: 28046,
    topic: "Default Interventions: Enriched Environment",
    prompt: "Smith and Iwata (1997) noted that the enriched environment intervention is most frequently applied for problem behaviors maintained by:",
    options: [
      "Social negative reinforcement (escape)",
      "Social positive reinforcement (attention)",
      "Automatic positive reinforcement",
      "Access to tangibles"
    ],
    correctIndex: 2,
    explanation: "Smith and Iwata (1997) noted that the enriched environment intervention is most frequently applied for problem behaviors maintained by automatic positive reinforcement.",
  },
  {
    id: 28047,
    topic: "Default Interventions: Restraint",
    prompt: "Personal restraint as an antecedent intervention should NOT be confused with response blocking because:",
    options: [
      "Personal restraint is implemented contingent on the problem behavior, whereas response blocking is implemented before the behavior",
      "Personal restraint involves physically securing body parts before the problem behavior occurs, whereas response blocking entails stopping a problem behavior that has already been initiated",
      "Personal restraint is a punishment procedure, whereas response blocking is a reinforcement procedure",
      "Personal restraint requires parental consent, whereas response blocking does not"
    ],
    correctIndex: 1,
    explanation: "Personal restraint, as an antecedent intervention, involves caregivers physically securing body parts before the problem behavior occurs. Response blocking, by contrast, entails stopping a problem behavior that has already been initiated.",
  },
  {
    id: 28048,
    topic: "Default Interventions: Restraint",
    prompt: "Mazaleski et al. (1994) compared noncontingent and contingent use of oven mitts for treating chronic hand mouthing. Results showed that:",
    options: [
      "Only contingent mitts produced a large decrease in hand mouthing",
      "Only noncontingent mitts were effective; contingent mitts had no effect",
      "Both noncontingent and contingent mitts produced a large decrease in hand mouthing",
      "Neither condition was effective without combining extinction"
    ],
    correctIndex: 2,
    explanation: "Results of Mazaleski et al. (1994) showed that both noncontingent and contingent use of oven mitts produced a large decrease in the rate of hand mouthing for Marty and Ava.",
  },
  {
    id: 28049,
    topic: "Default Interventions: Restraint",
    prompt: "Derby, Fisher, and Piazza (1996) found that self-restraint and SIB were members of the same functional response class. What did they suggest as a possible treatment?",
    options: [
      "Physical guidance to prevent both behaviors simultaneously",
      "Extinction for both self-restraint and SIB concurrently",
      "Protective equipment restraint to prevent SIB only",
      "Noncontingent reinforcement as a possible treatment for both self-restraint and SIB"
    ],
    correctIndex: 3,
    explanation: "Derby, Fisher, and Piazza (1996) found that self-restraint and SIB were maintained by social attention (the same functional response class) and suggested noncontingent reinforcement as a possible treatment for both behaviors.",
  },
  {
    id: 28050,
    topic: "Defining and Classifying Antecedent Interventions",
    prompt: "Three groundbreaking publications in the 1980s dramatically shifted applied behavior analysts toward manipulating antecedent events. Which of the following correctly identifies one of those publications?",
    options: [
      "Lovaas's (1987) study demonstrating intensive behavioral intervention for autism",
      "Bijou and Baer's (1978) operant analysis of child development",
      "Kazdin's (1982) review of single-case research designs",
      "Carr and Durand's (1985) experiment showing that teaching appropriate communicative responses reduced misbehavior to near zero"
    ],
    correctIndex: 3,
    explanation: "One of the three groundbreaking publications was Carr and Durand's (1985) experiment showing that teaching children to emit an appropriate communicative response during conditions that previously occasioned disruptive behavior reduced misbehavior to near zero.",
  },
];

import type { Question } from "../types";

// Module 2: BAS 6th Edition Study Guide (Behavior Analyst Supervisor)
// Domain E (Ethics) questions carry highlight: "ethics" — displayed in gold.
export const QUESTIONS_M2: Question[] = [

  {
    id: 1001,
    topic: "Philosophical Underpinnings",
    prompt: "A behavior analyst is asked by a colleague why ABA focuses exclusively on observable behavior rather than mental states or cognitive constructs. Which philosophical position best explains this approach?",
    options: [
      "Mentalism, because internal states drive all behavior",
      "Radical behaviorism, because private events are dismissed entirely",
      "Methodological behaviorism, because only publicly observable events are studied",
      "Radical behaviorism, because behavior is explained by its history of interaction with the environment, including private events"
    ],
    correctIndex: 3,
    explanation: "A-1 — Radical behaviorism acknowledges private events (thoughts, feelings) as behaviors subject to the same principles, but explains all behavior through the organism's history with the environment rather than invoking unobservable mental causes.",
  },
  {
    id: 1002,
    topic: "Philosophical Underpinnings",
    prompt: "During a team meeting, a psychologist argues that a child's tantrums are caused by 'low frustration tolerance,' an internal trait. A BCBA disagrees. Which concept best explains why the BCBA objects to this explanation?",
    options: [
      "Parsimony — simpler environmental explanations should be exhausted first",
      "Determinism — behavior is determined by genetic factors only",
      "Selectionism — behavior is selected by phylogenetic contingencies",
      "Empiricism — we need more data before drawing conclusions"
    ],
    correctIndex: 0,
    explanation: "A-2 — Parsimony requires that behavior analysts use the simplest, most scientifically defensible explanation before invoking hypothetical internal constructs like 'frustration tolerance.'",
  },
  {
    id: 1003,
    topic: "Philosophical Underpinnings",
    prompt: "A researcher studying behavior finds that a pigeon's key-pecking behavior increased during extinction of a prior reinforcement history. This phenomenon is best explained by which principle?",
    options: [
      "Ontogenetic selection — behavior acquired during the organism's lifetime",
      "Phylogenetic selection — behavior shaped by evolutionary history of the species",
      "Cultural selection — behavior maintained by group practices",
      "Operant extinction — removal of reinforcement causes spontaneous recovery"
    ],
    correctIndex: 1,
    explanation: "A-3 — Selectionism operates at three levels. Phylogenetic selection shapes species-typical behavior patterns. An extinction burst in pigeons reflects behavior patterns rooted in evolutionary history of the species.",
  },
  {
    id: 1004,
    topic: "Philosophical Underpinnings",
    prompt: "A BCBA is asked to justify why ABA is considered a natural science. Which statement most accurately reflects this characterization?",
    options: [
      "ABA relies on statistical inference to determine if an intervention worked",
      "ABA uses the individual organism as its own control and relies on visual analysis of replicated data",
      "ABA requires randomized control trials for all intervention research",
      "ABA studies behavior only under laboratory conditions to control extraneous variables"
    ],
    correctIndex: 1,
    explanation: "A-4 — ABA is a natural science characterized by single-subject designs in which the individual serves as their own control, with visual analysis used to evaluate replication and functional relationships.",
  },
  {
    id: 1005,
    topic: "Philosophical Underpinnings",
    prompt: "A BCBA trainee claims that an intervention 'worked' because it made the child 'feel better about themselves.' A supervisor corrects this. Which dimension of ABA is most relevant?",
    options: [
      "Technological — procedures must be described in enough detail to replicate",
      "Conceptually systematic — treatments should be grounded in established behavioral principles",
      "Applied — the behavior must be socially significant",
      "Analytic — a functional relationship between IV and DV must be demonstrated"
    ],
    correctIndex: 1,
    explanation: "A-5 — The conceptually systematic dimension requires that ABA interventions be described in terms of established behavioral principles, not mentalistic constructs like 'feeling better about themselves.'",
  },
  {
    id: 1006,
    topic: "Philosophical Underpinnings",
    prompt: "A BCBA selects hand-washing as a target behavior for a client with an intellectual disability because it is critical for health and independence. Which dimension of ABA is best exemplified?",
    options: [
      "Analytic",
      "Technological",
      "Applied",
      "Effective"
    ],
    correctIndex: 2,
    explanation: "A-5 — The 'applied' dimension of ABA refers to focusing on behaviors of social significance to the individual. Hand-washing is a socially meaningful, health-relevant target behavior.",
  },
  {
    id: 1007,
    topic: "Philosophical Underpinnings",
    prompt: "A school psychologist reviews an ABA behavior intervention plan and notes that the procedures for delivering reinforcement are described so vaguely that different staff produce very different results. Which dimension of ABA is violated?",
    options: [
      "Applied",
      "Technological",
      "Analytic",
      "Generality"
    ],
    correctIndex: 1,
    explanation: "A-5 — The technological dimension requires that all procedures in ABA plans be described with enough precision and clarity that any trained practitioner could implement them consistently.",
  },
  {
    id: 1008,
    topic: "Philosophical Underpinnings",
    prompt: "A researcher publishes a study using a reversal design showing that a child's on-task behavior increased during token economy phases and decreased during baseline phases across three replications. Which dimension of ABA is most clearly demonstrated?",
    options: [
      "Technological",
      "Applied",
      "Analytic",
      "Conceptually systematic"
    ],
    correctIndex: 2,
    explanation: "A-5 — The analytic dimension requires demonstrating a reliable functional relationship between the independent and dependent variables, which multiple replications in a reversal design accomplish.",
  },
  {
    id: 1009,
    topic: "Philosophical Underpinnings",
    prompt: "After implementing a communication program in a classroom, a BCBA notes the child began using the new skills in the home and community settings without additional training. Which dimension of ABA does this outcome exemplify?",
    options: [
      "Effective",
      "Generality",
      "Applied",
      "Behavioral"
    ],
    correctIndex: 1,
    explanation: "A-5 — Generality refers to behavior changes that last over time, appear in new environments, and/or spread to other behaviors. Spontaneous transfer to home and community settings exemplifies generality.",
  },
  {
    id: 1010,
    topic: "Philosophical Underpinnings",
    prompt: "An agency proposes an intervention for self-injurious behavior that incorporates sensory integration theory and ABA procedures together, claiming both contribute to outcomes. A BCBA consultant is concerned. Which dimension of ABA is most at risk of being violated?",
    options: [
      "Applied — the behavior targeted is not socially significant",
      "Conceptually systematic — mixing theoretical frameworks undermines coherence with behavioral principles",
      "Effective — combining approaches rarely produces good outcomes",
      "Technological — there is no published protocol for this combined approach"
    ],
    correctIndex: 1,
    explanation: "A-5 — Conceptually systematic means treatment procedures must be consistent with established behavioral principles. Blending sensory integration theory with ABA without demonstrated behavioral grounding compromises this dimension.",
  },
  {
    id: 1011,
    topic: "Concepts and Principles",
    prompt: "A teacher gives a student a sticker every time the student raises their hand to answer a question. Over time, hand-raising increases significantly. This is an example of:",
    options: [
      "Negative reinforcement, because the sticker removes an aversive stimulus",
      "Positive reinforcement, because a stimulus is added following the behavior and the behavior increases",
      "Positive punishment, because a stimulus is added following the behavior",
      "Differential reinforcement, because only hand-raising is reinforced"
    ],
    correctIndex: 1,
    explanation: "B-1 — Positive reinforcement occurs when a stimulus is added after a behavior and the future frequency of that behavior increases. The sticker is the added stimulus and hand-raising increased.",
  },
  {
    id: 1012,
    topic: "Concepts and Principles",
    prompt: "A student's loud outbursts during math class result in the teacher sending them to the hallway. Over the following weeks, outbursts during math increase. This is most accurately described as:",
    options: [
      "Positive punishment — the hallway experience decreases future behavior",
      "Negative reinforcement — the student escapes math demands and outbursts increase",
      "Extinction — the teacher ignores the behavior by removing the student",
      "Negative punishment — access to math instruction is removed"
    ],
    correctIndex: 1,
    explanation: "B-2 — Negative reinforcement occurs when removing a stimulus (math demands) contingent on behavior increases future behavior. The student escapes math, and outbursts increase, fitting the definition.",
  },
  {
    id: 1013,
    topic: "Concepts and Principles",
    prompt: "A parent consistently ignores their child's whining at the grocery store. At first the whining gets louder and more frequent, but over several weeks it decreases to near zero. The initial increase in whining is best described as:",
    options: [
      "Resurgence",
      "Spontaneous recovery",
      "An extinction burst",
      "Ratio strain"
    ],
    correctIndex: 2,
    explanation: "B-9 — An extinction burst is the temporary increase in rate, intensity, or duration of a previously reinforced behavior when reinforcement is first withheld. The initial increase in whining is a classic extinction burst.",
  },
  {
    id: 1014,
    topic: "Concepts and Principles",
    prompt: "A BCBA uses a fixed ratio 5 schedule to reinforce a client's puzzle-completion behavior. She observes that after each reinforcer delivery, there is a brief pause before responding resumes. This pause is called:",
    options: [
      "Ratio strain",
      "Post-reinforcement pause",
      "Extinction burst",
      "Behavioral momentum"
    ],
    correctIndex: 1,
    explanation: "B-4 — A post-reinforcement pause is the temporary cessation of responding immediately following reinforcer delivery on fixed ratio (and fixed interval) schedules. It is a defining feature of these schedules.",
  },
  {
    id: 1015,
    topic: "Concepts and Principles",
    prompt: "A child reliably requests 'cookie' in the kitchen when their parent is present, but does not make the request in other rooms or with other caregivers. This behavior pattern is called:",
    options: [
      "Behavioral contrast",
      "Stimulus generalization",
      "Stimulus discrimination",
      "Response generalization"
    ],
    correctIndex: 2,
    explanation: "B-7 — Stimulus discrimination occurs when a behavior is emitted in the presence of specific antecedent stimuli (the kitchen and parent as SD) but not others. The behavior is 'under stimulus control.'",
  },
  {
    id: 1016,
    topic: "Concepts and Principles",
    prompt: "After training a dog to sit on the verbal cue 'sit,' the owner finds the dog also sits when a visitor says 'set' or 'bit.' This is best described as:",
    options: [
      "Stimulus discrimination",
      "Response generalization",
      "Stimulus generalization",
      "Operant generalization"
    ],
    correctIndex: 2,
    explanation: "B-6 — Stimulus generalization occurs when a behavior reinforced in the presence of one stimulus also occurs in the presence of similar stimuli. The dog responds to acoustically similar words.",
  },
  {
    id: 1017,
    topic: "Concepts and Principles",
    prompt: "A BCBA teaches a child to label a dog from pictures of golden retrievers, but the child begins labeling all four-legged animals as 'dog.' To address this, the BCBA presents pictures of cats and reinforces correct labeling of only dogs while withholding reinforcement for incorrect labels. This procedure is:",
    options: [
      "Shaping",
      "Stimulus fading",
      "Differential reinforcement of other behavior",
      "Discrimination training"
    ],
    correctIndex: 3,
    explanation: "B-7 — Discrimination training involves reinforcing behavior in the presence of the SD (dog pictures) and placing behavior on extinction in the presence of the S-delta (cat pictures), building stimulus control.",
  },
  {
    id: 1018,
    topic: "Concepts and Principles",
    prompt: "A behavior analyst uses a motivating operation to increase the effectiveness of verbal praise as a reinforcer for a socially withdrawn client. Which type of motivating operation is being used when the BCBA arranges several hours of low social interaction before the session?",
    options: [
      "Surrogate motivating operation",
      "Reflexive motivating operation",
      "Abolishing operation for attention",
      "Establishing operation for attention"
    ],
    correctIndex: 3,
    explanation: "B-15 — An establishing operation (EO) increases the reinforcing effectiveness of a stimulus. Deprivation from social interaction temporarily makes attention more reinforcing, constituting an establishing operation for attention.",
  },
  {
    id: 1019,
    topic: "Concepts and Principles",
    prompt: "During a fire drill, a child with ASD who was taught to line up calmly during classroom transitions suddenly runs out of the classroom before the signal. The novel alarm sound appears to have evoked this behavior. The alarm functions as a(n):",
    options: [
      "Conditioned punisher",
      "Discriminative stimulus signaling reinforcement",
      "Unconditioned motivating operation",
      "Conditioned motivating operation"
    ],
    correctIndex: 2,
    explanation: "B-15 — An unconditioned motivating operation (UMO) alters behavior effectiveness without prior learning. Loud alarms are biologically relevant, unlearned stimuli that evoke escape behavior.",
  },
  {
    id: 1020,
    topic: "Concepts and Principles",
    prompt: "A BCBA uses shaping to teach a non-vocal child to produce the sound 'mmm' as an approximation toward saying 'more.' Which characteristic of shaping makes it distinct from other reinforcement procedures?",
    options: [
      "It delivers reinforcement on a fixed ratio schedule",
      "It reinforces successive approximations toward a terminal behavior",
      "It uses extinction to eliminate competing behaviors",
      "It requires a discriminative stimulus to be present at all times"
    ],
    correctIndex: 1,
    explanation: "B-8 — Shaping is the differential reinforcement of successive approximations to a terminal behavior. What makes it unique is the progressive shifting of the criterion as each approximation is reinforced.",
  },
  {
    id: 1021,
    topic: "Concepts and Principles",
    prompt: "A child receives a time-out (removal from a preferred activity) every time she hits. Over several weeks, hitting decreases. This is best classified as:",
    options: [
      "Negative reinforcement — removal of the activity increases escape behavior",
      "Positive punishment — an aversive stimulus is added to decrease behavior",
      "Negative punishment — a preferred stimulus is removed contingent on behavior and the behavior decreases",
      "Response cost — tokens are removed contingent on behavior"
    ],
    correctIndex: 2,
    explanation: "B-3 — Negative punishment involves the removal of a stimulus following a behavior, resulting in a decrease in future behavior. Time-out from a preferred activity is a prototypical example of negative punishment.",
  },
  {
    id: 1022,
    topic: "Concepts and Principles",
    prompt: "A BCBA is designing an intervention for a student who escapes academic tasks by making loud noises. She implements noncontingent reinforcement (NCR) by giving the student a 2-minute break every 10 minutes regardless of behavior. Which MO principle underlies the expected reduction in loud noises?",
    options: [
      "The breaks function as a positive reinforcer that competes with the target behavior",
      "Free access to breaks serves as an abolishing operation for the reinforcing effectiveness of escape",
      "The predictable schedule creates a conditioned establishing operation",
      "NCR eliminates the discriminative stimulus controlling the behavior"
    ],
    correctIndex: 1,
    explanation: "B-15 — NCR using the maintaining reinforcer functions as an abolishing operation (AO) because it reduces the momentary effectiveness of escape as a reinforcer, thereby reducing the motivation to engage in the problem behavior.",
  },
  {
    id: 1023,
    topic: "Concepts and Principles",
    prompt: "During baseline, a child's tantrums average 8 per hour in class. The BCBA implements a DRO schedule, reinforcing the absence of tantrums during 5-minute intervals. After 4 weeks, tantrums drop to less than 1 per hour. Which reinforcement schedule best describes the contingency in DRO?",
    options: [
      "Fixed interval — reinforce the first response after a fixed time period",
      "Reinforcing the omission of a specific behavior for a specified duration",
      "Fixed ratio — reinforce after a fixed number of responses",
      "Variable interval — reinforce at unpredictable time intervals"
    ],
    correctIndex: 1,
    explanation: "B-11 — DRO (Differential Reinforcement of Other behavior) delivers reinforcement contingent on the absence of the target behavior for a specified interval. It is reinforcing the omission of that behavior.",
  },
  {
    id: 1024,
    topic: "Concepts and Principles",
    prompt: "A BCBA is teaching a client to make a sandwich. He breaks the task into individual steps and uses a backward chaining procedure. After mastering the last step, which step does he teach next?",
    options: [
      "The first step in the chain",
      "The step immediately before the last step",
      "The most difficult step in the chain",
      "A randomly selected step to promote generalization"
    ],
    correctIndex: 1,
    explanation: "B-11 — In backward chaining, training begins at the last step of the task analysis and proceeds backward. After mastering the final step, the next step taught is the one that immediately precedes it.",
  },
  {
    id: 1025,
    topic: "Concepts and Principles",
    prompt: "A child who previously had a water phobia after nearly drowning now cries and refuses to enter any body of water, including a small wading pool. This emotional response was acquired through:",
    options: [
      "Operant conditioning — water was paired with an aversive consequence",
      "Classical conditioning — a neutral stimulus was paired with an unconditioned aversive event",
      "Stimulus generalization following operant extinction",
      "Conditioned motivating operation"
    ],
    correctIndex: 1,
    explanation: "B-12 — Respondent (classical) conditioning involves pairing a neutral stimulus with an unconditioned stimulus until the neutral stimulus elicits the response. Near-drowning (US) was paired with water (CS), producing conditioned fear.",
  },
  {
    id: 1026,
    topic: "Concepts and Principles",
    prompt: "A behavior analyst notes that when a teacher increases the rate of reinforcement for on-task behavior in one classroom, the student's on-task behavior also increases in a second classroom without any direct intervention. This is best described as:",
    options: [
      "Stimulus generalization",
      "Behavioral contrast",
      "Induction or generalization of the operant",
      "Spontaneous recovery"
    ],
    correctIndex: 2,
    explanation: "B-6 — Response generalization (also called induction) occurs when training one response produces changes in other topographically similar or functionally related responses or in the same behavior across untrained settings.",
  },
  {
    id: 1027,
    topic: "Concepts and Principles",
    prompt: "An RBT reports that a client who had mastered a skill months ago is showing that behavior again after it had been placed on extinction. This is called:",
    options: [
      "Extinction burst",
      "Resurgence",
      "Spontaneous recovery",
      "Induction"
    ],
    correctIndex: 2,
    explanation: "B-9 — Spontaneous recovery is the reappearance of a previously extinguished response after a period of time without exposure to the conditioning context. Resurgence, by contrast, occurs when extinction of a more recently reinforced behavior causes an older behavior to reappear.",
  },
  {
    id: 1028,
    topic: "Concepts and Principles",
    prompt: "A BCBA designs an intervention in which a client earns tokens for completing work tasks, which can be exchanged for preferred activities at the end of the day. The tokens are functioning as:",
    options: [
      "Unconditioned reinforcers, because they have intrinsic value",
      "Conditioned reinforcers, because their value is established by pairing with backup reinforcers",
      "Discriminative stimuli, because they signal the availability of reinforcement",
      "Motivating operations, because they increase the effectiveness of backup reinforcers"
    ],
    correctIndex: 1,
    explanation: "B-14 — Conditioned reinforcers (secondary reinforcers) acquire their reinforcing value through pairing with other reinforcers. Tokens gain value because they can be exchanged for preferred backup reinforcers.",
  },
  {
    id: 1029,
    topic: "Concepts and Principles",
    prompt: "A BCBA implements a punishment procedure in which a client loses 2 tokens every time he engages in property destruction. The rate of property destruction decreases over time. This procedure is called:",
    options: [
      "Time-out from positive reinforcement",
      "Overcorrection",
      "Response cost",
      "Negative punishment via stimulus removal"
    ],
    correctIndex: 2,
    explanation: "B-13 — Response cost is a form of negative punishment in which a specified amount of a conditioned reinforcer (tokens) is removed contingent on the target behavior, resulting in a decrease in that behavior.",
  },
  {
    id: 1030,
    topic: "Concepts and Principles",
    prompt: "A BCBA notices that a client engages in self-stimulatory behavior (hand-flapping) at a high rate even when no social consequences are delivered. Data from a functional analysis show the behavior is highest in the alone condition. The most likely function is:",
    options: [
      "Social positive reinforcement — attention from others",
      "Social negative reinforcement — escape from demands",
      "Automatic positive reinforcement — sensory stimulation produced by the behavior itself",
      "Conditioned reinforcement — previously paired with attention"
    ],
    correctIndex: 2,
    explanation: "B-16 — When a behavior persists in the absence of social consequences and is highest in the alone condition of a functional analysis, it is likely maintained by automatic (sensory) reinforcement — the behavior produces its own consequence.",
  },
  {
    id: 1031,
    topic: "Concepts and Principles",
    prompt: "During a discrete trial training session, a therapist says 'Touch nose' and the child immediately touches his nose. The therapist provides a verbal praise and a small piece of cereal. What is the SD in this example?",
    options: [
      "The cereal",
      "The verbal praise",
      "The instruction 'Touch nose'",
      "The child's nose-touching response"
    ],
    correctIndex: 2,
    explanation: "B-7 — A discriminative stimulus (SD) is an antecedent stimulus in the presence of which a particular behavior has been reinforced. The instruction 'Touch nose' is the SD that sets the occasion for the behavior.",
  },
  {
    id: 1032,
    topic: "Concepts and Principles",
    prompt: "A BCBA wants to increase the rate of a behavior that currently occurs at a very low frequency. The behavior has never been reinforced on a continuous schedule. Which initial reinforcement schedule would most rapidly increase response frequency?",
    options: [
      "Variable interval 5 minutes",
      "Fixed ratio 10",
      "Continuous reinforcement (CRF)",
      "Variable ratio 5"
    ],
    correctIndex: 2,
    explanation: "B-4 — Continuous reinforcement (CRF) is best for establishing new behaviors or rapidly increasing low-frequency behavior because every occurrence is reinforced, resulting in faster acquisition.",
  },
  {
    id: 1033,
    topic: "Concepts and Principles",
    prompt: "A researcher finds that a rat trained on a variable ratio 50 schedule showed much greater resistance to extinction than a rat trained on a continuous reinforcement schedule. This phenomenon is best explained by:",
    options: [
      "Behavioral contrast between the two training conditions",
      "The partial reinforcement extinction effect — intermittent reinforcement produces greater resistance to extinction",
      "Spontaneous recovery occurring more frequently in VR schedules",
      "The abolishing operation created by the variable reinforcement history"
    ],
    correctIndex: 1,
    explanation: "B-4 — The partial reinforcement extinction effect describes how behaviors reinforced intermittently (e.g., VR 50) are more resistant to extinction than those reinforced continuously, because organisms have experienced many nonreinforced responses during acquisition.",
  },
  {
    id: 1034,
    topic: "Concepts and Principles",
    prompt: "A teacher who previously gave a student unlimited free time for completing assignments transitions to requiring progressively more work before break. The student initially shows increased work completion. However, as requirements continue rising steeply, work completion deteriorates and the student appears frustrated. This deterioration is called:",
    options: [
      "Behavioral contrast",
      "Ratio strain",
      "Extinction burst",
      "Schedule thinning error"
    ],
    correctIndex: 1,
    explanation: "B-4 — Ratio strain occurs when the response requirement is increased too rapidly on ratio schedules, causing a breakdown in performance. It is caused by thinning the reinforcement schedule too quickly.",
  },
  {
    id: 1035,
    topic: "Concepts and Principles",
    prompt: "A BCBA uses Functional Communication Training (FCT) to teach a child to request a break using a picture card, replacing escape-motivated problem behavior. The picture card response and the problem behavior both produce the same consequence (break from demands). According to behavioral theory, these are:",
    options: [
      "Competing behaviors maintained by different functions",
      "Members of the same response class — both produce the same functional outcome",
      "Behaviors under the control of the same SD",
      "Operant and respondent behaviors that are topographically similar"
    ],
    correctIndex: 1,
    explanation: "B-16/B-11 — A response class contains all behaviors that produce the same functional consequence. Both the picture card use and the problem behavior produce escape, making them members of the same response class.",
  },
  {
    id: 1036,
    topic: "Concepts and Principles",
    prompt: "A BCBA implements a variable interval 3-minute schedule for reinforcing appropriate peer interactions. Which pattern of responding is most likely to be observed?",
    options: [
      "High, steady rate of responding with post-reinforcement pauses",
      "Moderate, relatively steady rate of responding without post-reinforcement pauses",
      "Extremely high rate of responding that only pauses after reinforcement",
      "Very low rate of responding because the interval is unpredictable"
    ],
    correctIndex: 1,
    explanation: "B-4 — Variable interval (VI) schedules typically produce moderate, steady rates of responding without pronounced post-reinforcement pauses, because reinforcement delivery is unpredictable in timing.",
  },
  {
    id: 1037,
    topic: "Measurement, Data Display, and Interpretation",
    prompt: "A BCBA is measuring how long a child's tantrums last. She records the start and stop time of each tantrum. Which dimension of behavior is being measured?",
    options: [
      "Frequency",
      "Rate",
      "Duration",
      "Latency"
    ],
    correctIndex: 2,
    explanation: "C-1 — Duration measures the total elapsed time from the onset to the offset of a behavior. Recording start and stop times of tantrums is a duration measurement.",
  },
  {
    id: 1038,
    topic: "Measurement, Data Display, and Interpretation",
    prompt: "An RBT records the number of seconds between a therapist delivering an instruction and the child beginning to comply. This measurement captures which dimension of behavior?",
    options: [
      "Duration",
      "Latency",
      "Inter-response time",
      "Rate"
    ],
    correctIndex: 1,
    explanation: "C-1 — Latency is the time between the onset of a stimulus (the instruction) and the initiation of the response (compliance begins). It measures how quickly a person begins to respond.",
  },
  {
    id: 1039,
    topic: "Measurement, Data Display, and Interpretation",
    prompt: "A behavior analyst wants to measure the time between one instance of stereotypic behavior ending and the next beginning. This is called:",
    options: [
      "Duration",
      "Latency",
      "Inter-response time (IRT)",
      "Interobserver agreement"
    ],
    correctIndex: 2,
    explanation: "C-1 — Inter-response time (IRT) is the time between the offset of one response and the onset of the next response. It captures the temporal spacing between behavior occurrences.",
  },
  {
    id: 1040,
    topic: "Measurement, Data Display, and Interpretation",
    prompt: "A BCBA is observing a student for 30 minutes and records that the student was on-task during 22 of the 30 1-minute intervals. She reports 73% on-task behavior. What measurement system is she using?",
    options: [
      "Whole-interval recording",
      "Momentary time sampling",
      "Partial-interval recording",
      "Event recording"
    ],
    correctIndex: 0,
    explanation: "C-9 — Whole-interval recording scores an interval as an occurrence only if the behavior occurred throughout the entire interval. It is commonly used for duration-based behaviors and tends to underestimate actual occurrence.",
  },
  {
    id: 1041,
    topic: "Measurement, Data Display, and Interpretation",
    prompt: "A teacher marks an interval as an occurrence of off-task behavior if the student was off-task at any point during that interval, even for just a second. This is called:",
    options: [
      "Whole-interval recording",
      "Momentary time sampling",
      "Partial-interval recording",
      "Event recording"
    ],
    correctIndex: 2,
    explanation: "C-9 — Partial-interval recording scores an interval as an occurrence if the behavior occurs at any point during the interval. It tends to overestimate behavior occurrence.",
  },
  {
    id: 1042,
    topic: "Measurement, Data Display, and Interpretation",
    prompt: "A BCBA observes a client every 30 seconds and records whether or not the target behavior is occurring at that exact moment. This procedure is:",
    options: [
      "Whole-interval recording",
      "Partial-interval recording",
      "Momentary time sampling (MTS)",
      "Continuous event recording"
    ],
    correctIndex: 2,
    explanation: "C-9 — Momentary time sampling records whether a behavior is occurring at the exact moment of observation (not throughout the interval). It can under- or overestimate occurrence but is appropriate for persistent behaviors.",
  },
  {
    id: 1043,
    topic: "Measurement, Data Display, and Interpretation",
    prompt: "Two observers independently watch a 20-minute session and each score whether a behavior occurred in each of 20 intervals. Observer A scored 14 intervals as occurrences; Observer B scored 12. They agreed on 10 occurrence intervals and 4 nonoccurrence intervals. What is the IOA calculated using the point-by-point (interval-by-interval) method?",
    options: [
      "70%",
      "85.7%",
      "80%",
      "75%"
    ],
    correctIndex: 0,
    explanation: "C-4 — Point-by-point IOA = (agreements / total intervals) x 100 = (14 agreements / 20 intervals) x 100 = 70%. Agreements include both agree-occurrence (10) and agree-nonoccurrence (4) = 14 agreements out of 20 intervals.",
  },
  {
    id: 1044,
    topic: "Measurement, Data Display, and Interpretation",
    prompt: "A BCBA notices that over several sessions, a therapist's data consistently show lower rates of problem behavior compared to video-coded data from the same sessions. This systematic difference is called:",
    options: [
      "Observer drift",
      "Observer bias",
      "Reactivity",
      "Low interobserver agreement"
    ],
    correctIndex: 1,
    explanation: "C-5 — Observer bias occurs when an observer's expectations, beliefs, or prior knowledge about the participant or intervention systematically distort their recordings in a consistent direction.",
  },
  {
    id: 1045,
    topic: "Measurement, Data Display, and Interpretation",
    prompt: "A teacher begins recording student behavior after being told the student was recently diagnosed with ADHD. The teacher's recording rates are consistently higher than those of an independent observer with no knowledge of the diagnosis. This illustrates:",
    options: [
      "Reactivity",
      "Observer drift",
      "Observer bias due to expectation effects",
      "Low interobserver agreement from different vantage points"
    ],
    correctIndex: 2,
    explanation: "C-5 — Observer bias occurs when knowledge of a client's diagnosis or expected outcomes influences how an observer records behavior. The teacher's expectation that ADHD means high off-task behavior inflates their recording.",
  },
  {
    id: 1046,
    topic: "Measurement, Data Display, and Interpretation",
    prompt: "A BCBA wants to determine the best time of day to conduct observations of a behavior she suspects occurs primarily before lunch. Which indirect assessment tool would help her identify these temporal patterns?",
    options: [
      "Functional analysis",
      "Structured interview with teachers",
      "Scatterplot",
      "Narrative ABC recording"
    ],
    correctIndex: 2,
    explanation: "C-10 — A scatterplot records the time of day and context in which behaviors occur, allowing the analyst to identify temporal patterns (e.g., behaviors clustered before lunch) that help focus observation schedules.",
  },
  {
    id: 1047,
    topic: "Measurement, Data Display, and Interpretation",
    prompt: "Looking at a graph, a BCBA notices that a client's data within the baseline phase are stable and flat, hovering between 8 and 10 instances per session. When examining the same data, a colleague says the data are 'consistent.' In visual analysis terminology, this refers to:",
    options: [
      "Level",
      "Trend",
      "Variability",
      "Slope"
    ],
    correctIndex: 2,
    explanation: "C-11 — Variability refers to how consistently data points are to one another. Low variability (consistent data) means data points fall close together with little spread, which is what is described here.",
  },
  {
    id: 1048,
    topic: "Measurement, Data Display, and Interpretation",
    prompt: "A BCBA reviews a graph in which baseline data are stable, but during intervention the data show an immediate drop in level followed by a continuing downward trend, with all intervention data points below the highest baseline data point. Which visual analysis feature best supports the conclusion of a treatment effect?",
    options: [
      "High variability in baseline supports the conclusion",
      "An immediate change in level and a non-overlapping trend across phases",
      "The data show spontaneous recovery, confirming the intervention worked",
      "A gradual upward trend in baseline preceding the phase change"
    ],
    correctIndex: 1,
    explanation: "C-11 — Non-overlap between baseline and intervention data and an immediate change in level following the phase change are primary indicators in visual analysis that an independent variable had an effect.",
  },
  {
    id: 1049,
    topic: "Measurement, Data Display, and Interpretation",
    prompt: "A cumulative record is used to display a client's number of correct responses across sessions. A behavior analyst notices a period on the graph where the line is completely flat. What does this indicate?",
    options: [
      "The behavior occurred at a very high rate during that period",
      "The behavior decreased substantially during that period",
      "No occurrences of the behavior were recorded during that period",
      "The data collection was not reliable during that period"
    ],
    correctIndex: 2,
    explanation: "C-10 — A cumulative record never decreases because responses are added cumulatively. A flat line indicates zero responses occurred during that period — not a decrease in rate.",
  },
  {
    id: 1050,
    topic: "Measurement, Data Display, and Interpretation",
    prompt: "A BCBA is tracking a behavior that occurs very rarely — approximately once per week. She wants to use a measurement system that will capture every occurrence reliably. Which system is most appropriate?",
    options: [
      "Partial-interval recording with 10-second intervals",
      "Momentary time sampling every 30 minutes",
      "Event recording / continuous frequency recording",
      "Whole-interval recording across school periods"
    ],
    correctIndex: 2,
    explanation: "C-9 — For low-frequency behaviors, event (continuous frequency) recording or permanent product measures are preferred because interval methods risk missing the rare occurrence entirely. Event recording captures every instance.",
  },
  {
    id: 1051,
    topic: "Measurement, Data Display, and Interpretation",
    prompt: "A BCBA wants to measure whether staff are implementing a behavior intervention plan as written. She uses a checklist to observe whether each component was completed correctly. Which concept does this measure?",
    options: [
      "Social validity",
      "Interobserver agreement",
      "Procedural integrity (treatment fidelity)",
      "Generalization measurement"
    ],
    correctIndex: 2,
    explanation: "C-12 — Procedural integrity (also called treatment fidelity or implementation fidelity) refers to the degree to which an intervention is implemented as designed. Checklists tracking each procedural step are a common measurement tool.",
  },
  {
    id: 1052,
    topic: "Measurement, Data Display, and Interpretation",
    prompt: "A behavior analyst wants to evaluate whether the goals of an intervention are meaningful and the procedures are acceptable to the client's family. She asks the family to complete rating scales about these issues. This practice relates to which concept?",
    options: [
      "Interobserver agreement",
      "Social validity",
      "Procedural integrity",
      "Generalization assessment"
    ],
    correctIndex: 1,
    explanation: "C-3 — Social validity refers to the social significance of goals, the appropriateness of procedures, and the importance of outcomes from the client's and stakeholders' perspectives. Rating scales asking families are a direct way to assess it.",
  },
  {
    id: 1053,
    topic: "Measurement, Data Display, and Interpretation",
    prompt: "A BCBA is designing a data collection system for a classroom where 15 students need to be observed. She wants to check each student's behavior at set points in time throughout the day without continuous observation. Which method would she use?",
    options: [
      "Whole-interval recording",
      "Partial-interval recording",
      "PLACHECK (Planned Activity Check)",
      "Permanent product recording"
    ],
    correctIndex: 2,
    explanation: "C-9 — PLACHECK is a form of momentary time sampling applied to groups. The behavior analyst scans the group at preset moments and records how many (or which) individuals are engaged in the target behavior.",
  },
  {
    id: 1054,
    topic: "Measurement, Data Display, and Interpretation",
    prompt: "A researcher is measuring repeated daily sessions of a child's reading fluency over 20 weeks. The data, when plotted, show a very clear upward straight-line trend throughout the entire 20 weeks with virtually no scatter around that line. How would a BCBA describe this data pattern in terms of visual analysis?",
    options: [
      "High level, stable trend, low variability",
      "Increasing trend, low variability",
      "Increasing trend, high variability",
      "Accelerating trend, moderate variability"
    ],
    correctIndex: 1,
    explanation: "C-11 — The three key features of visual analysis are level (the data's position on the y-axis), trend (the overall direction), and variability (how consistent data are). A clear upward line with no scatter indicates an increasing trend with low variability.",
  },
  {
    id: 1055,
    topic: "Experimental Design",
    prompt: "In an ABA study, a researcher measures the frequency of self-injurious behavior (SIB) as the target outcome. She changes the schedule of reinforcement provided for a competing behavior (FCT response) as the intervention. In this study, what is the independent variable?",
    options: [
      "The frequency of SIB",
      "The FCT response",
      "The schedule of reinforcement for the FCT response",
      "The participant's diagnosis"
    ],
    correctIndex: 2,
    explanation: "D-1 — The independent variable is the factor the researcher manipulates (the schedule of reinforcement for the FCT response). The dependent variable is what is measured (frequency of SIB).",
  },
  {
    id: 1056,
    topic: "Experimental Design",
    prompt: "An ABA researcher demonstrates a functional relationship between an intervention and behavior change in a single subject study. She then replicates the same procedure with a second participant and finds the same results. This second replication contributes to:",
    options: [
      "Internal validity — ruling out extraneous variables within the study",
      "External validity — demonstrating the findings generalize beyond the first participant",
      "Procedural integrity — confirming the intervention was implemented consistently",
      "Social validity — showing the outcomes were meaningful to others"
    ],
    correctIndex: 1,
    explanation: "D-2 — External validity concerns whether experimental findings generalize beyond the conditions of the original study. Replicating findings with a second participant is a form of direct replication that extends external validity.",
  },
  {
    id: 1057,
    topic: "Experimental Design",
    prompt: "Midway through a 10-week study on reducing aggression, a participant's parents begin a new medication regimen. At the same time, aggression decreases dramatically. The researcher is uncertain whether the improvement is due to the ABA intervention or the medication. This confound is an example of which threat to internal validity?",
    options: [
      "Maturation",
      "Instrumentation",
      "History",
      "Statistical regression"
    ],
    correctIndex: 2,
    explanation: "D-3 — History refers to events external to the study that occur during the experiment and may affect the dependent variable. The new medication is an external event (history) that threatens the conclusion that the intervention caused the change.",
  },
  {
    id: 1058,
    topic: "Experimental Design",
    prompt: "A researcher is studying the effectiveness of social skills training on peer interactions in 6-year-olds over an academic year. She notes that children's social skills naturally improve with age and brain development during this period. This threatens internal validity through:",
    options: [
      "Selection bias",
      "Testing effects",
      "History",
      "Maturation"
    ],
    correctIndex: 3,
    explanation: "D-3 — Maturation refers to natural developmental changes in participants over time that may account for behavior changes independent of the intervention. Natural social development in 6-year-olds is a maturation threat.",
  },
  {
    id: 1059,
    topic: "Experimental Design",
    prompt: "A behavior analyst is using a single-case design to evaluate a behavior intervention. A key feature of these designs is that the individual serves as their own control. How does this differ from a between-groups design?",
    options: [
      "Single-case designs always use more participants than between-groups designs",
      "Between-groups designs compare average outcomes across conditions, while single-case designs examine each individual's behavior across phases",
      "Single-case designs require statistical analysis, while between-groups designs use visual analysis",
      "Between-groups designs cannot establish functional relationships, while single-case designs can"
    ],
    correctIndex: 1,
    explanation: "D-4 — In single-case designs, each participant serves as their own control, and behavior is examined individually across phases. Between-groups designs compare group averages, masking individual variability.",
  },
  {
    id: 1060,
    topic: "Experimental Design",
    prompt: "A BCBA is considering a reversal (ABAB) design to evaluate an intervention for a child's dangerous elopement behavior. A supervisor recommends against this design. What is the primary reason?",
    options: [
      "Reversal designs take too long to implement and are cost-prohibitive",
      "Returning to baseline requires withdrawing an effective intervention, which is unethical for a dangerous behavior",
      "Reversal designs have weak external validity compared to multiple baseline designs",
      "The behavior may not reverse because elopement is automatically reinforced"
    ],
    correctIndex: 1,
    explanation: "D-7 — A key ethical limitation of reversal/withdrawal designs for dangerous behaviors is that returning to baseline requires removing an effective treatment, exposing the client to elevated risk of harm.",
  },
  {
    id: 1061,
    topic: "Experimental Design",
    prompt: "A researcher uses a multiple baseline across behaviors design to evaluate the effectiveness of video modeling on three social skills. She introduces the intervention for Skill 1 while Skill 2 and Skill 3 remain in baseline. After Skill 1 improves, she adds the intervention for Skill 2, then Skill 3. Experimental control is demonstrated when:",
    options: [
      "All three skills improve simultaneously once the first intervention is introduced",
      "Each skill changes only when the intervention is introduced for that specific skill, while untreated skills remain stable",
      "The intervention produces the same rate of change for all three skills",
      "At least two of the three skills show improvement with the intervention"
    ],
    correctIndex: 1,
    explanation: "D-7 — In a multiple baseline design, experimental control is demonstrated when each behavior (or setting, or participant) changes only when the intervention is applied to it, while others not yet receiving the intervention remain stable.",
  },
  {
    id: 1062,
    topic: "Experimental Design",
    prompt: "A researcher wants to determine which component of a multi-component intervention package is responsible for changes in client behavior. She systematically removes one component at a time while measuring the dependent variable. This approach is called:",
    options: [
      "Parametric analysis",
      "Component analysis",
      "Comparative analysis",
      "Sequential modification design"
    ],
    correctIndex: 1,
    explanation: "D-8 — Component analysis investigates which specific component(s) of a treatment package are responsible for behavior change, by isolating and testing each element of the package.",
  },
  {
    id: 1063,
    topic: "Experimental Design",
    prompt: "A BCBA wants to determine the minimum amount of reinforcer magnitude (e.g., seconds of tablet access) required to maintain a client's compliance with instructions at 90% or above. She systematically varies the magnitude while measuring compliance. This is a:",
    options: [
      "Component analysis",
      "Comparative analysis",
      "Parametric analysis",
      "Functional analysis"
    ],
    correctIndex: 2,
    explanation: "D-8 — Parametric analysis evaluates how varying different values or amounts (parameters) of the independent variable affect the dependent variable, helping identify the optimal dose of an intervention.",
  },
  {
    id: 1064,
    topic: "Experimental Design",
    prompt: "A BCBA is implementing a changing criterion design to increase the number of math problems a student completes per session. She sets the first criterion at 5 problems, then raises it to 10, then 15, then 20. Experimental control is best demonstrated when:",
    options: [
      "The student's performance consistently exceeds each new criterion level",
      "The student's performance closely matches each criterion level, changing as criteria change",
      "The student achieves the final criterion without requiring intermediate steps",
      "The student's performance improves continuously regardless of criterion changes"
    ],
    correctIndex: 1,
    explanation: "D-7 — In a changing criterion design, experimental control is demonstrated when the participant's behavior closely tracks (matches) each new criterion level, rising (or falling) in step with criterion changes.",
  },
  {
    id: 1065,
    topic: "Experimental Design",
    prompt: "An alternating treatments design is being used to compare two interventions (DRA and DRO) for reducing head-banging in a child. The two conditions are rapidly alternated across sessions, with condition assignment randomized daily. A clear advantage of this design over a reversal design is:",
    options: [
      "It requires fewer data points to demonstrate experimental control",
      "It does not require withdrawal of an effective treatment and compares two treatments simultaneously",
      "It provides stronger evidence of external validity because of the rapid alternation",
      "It eliminates the need for baseline data entirely"
    ],
    correctIndex: 1,
    explanation: "D-7 — Alternating treatment (multi-element) designs compare the relative effectiveness of two or more interventions without requiring withdrawal to baseline, making them more ethical for persistent problem behaviors and minimizing irreversibility concerns.",
  },
  {
    id: 1066,
    topic: "Experimental Design",
    prompt: "A group design study finds that, on average, children receiving intensive ABA services improved significantly more on adaptive behavior measures than a control group. However, three children in the treatment group showed no improvement. A behavior analyst argues that group data are insufficient for ABA practice. The best justification for this critique is:",
    options: [
      "Group designs require statistical analysis, which is not appropriate for behavioral data",
      "Group averages can mask individual variability, making the data inapplicable to individual clients",
      "Between-group designs cannot establish functional relationships because they don't control for all variables",
      "Group designs violate the technological dimension of ABA"
    ],
    correctIndex: 1,
    explanation: "D-5 — A key limitation of group designs is that averaged data may not represent the outcomes of any individual in the group. Single-case designs focus on each individual's data, preserving clinically meaningful information about individual variability.",
  },
  {
    id: 1067,
    topic: "Experimental Design",
    prompt: "A researcher replicates a previously published study on social skills training with a different population (adolescents instead of young children) and in a different setting (community instead of clinic). The findings are consistent with the original study. This is called:",
    options: [
      "Direct replication",
      "Systematic replication",
      "Conceptual replication",
      "Internal replication"
    ],
    correctIndex: 1,
    explanation: "D-2 — Systematic replication involves replicating a study while varying some aspect of the original (different population, setting, or independent variable variation). It strengthens external validity by showing findings generalize across conditions.",
  },
  {
    id: 1068,
    topic: "Experimental Design",
    prompt: "A BCBA reviews an AB design study claiming that an intervention caused behavior change. She notes there was no return to baseline and only a single phase change. She concludes the study provides weak evidence. Which specific design characteristic is absent that limits causal conclusions?",
    options: [
      "Repeated measurement across phases",
      "Replication of the effect within the design",
      "A stable baseline before intervention",
      "A clearly defined dependent variable"
    ],
    correctIndex: 1,
    explanation: "D-4/D-6 — An AB design lacks internal replication. Without at least one more phase change (e.g., returning to baseline and re-introducing treatment), the behavior change cannot be attributed to the intervention with confidence.",
  },
  {
    id: 1069,
    topic: "Ethics",
    prompt: "A BCBA receives a referral to implement an intensive behavior intervention plan for a child she has never worked with, whose primary diagnosis is pediatric bipolar disorder. She has extensive experience with ASD but none with mood disorders. What is the most ethical course of action?",
    options: [
      "Accept the case and learn about pediatric bipolar disorder through self-study",
      "Accept the case and treat it like any other behavioral case, since the same principles apply",
      "Decline or consult a colleague with relevant expertise before taking the case, to ensure competence",
      "Accept the case but disclose the limitation to the family in the consent form"
    ],
    correctIndex: 2,
    explanation: "E-2 — BCBAs are required to practice within their scope of competence. Accepting a case outside one's expertise without gaining additional training or consultation violates this principle. The ethical choice is to consult or refer.",
    highlight: "ethics" as const,
  },
  {
    id: 1070,
    topic: "Ethics",
    prompt: "A BCBA has been working closely with a client's family for 2 years. The client's mother invites her to the family's annual holiday party as a thank-you. The BCBA is considering attending. According to the BACB Ethics Code, what is the most appropriate response?",
    options: [
      "Attend the party because it is a social event and not a dual professional relationship",
      "Decline, because any social contact with client families is prohibited by the ethics code",
      "Carefully weigh the potential for a conflict of interest and multiple relationships before making a decision; declining is likely the safer choice",
      "Attend but limit interaction with the client to maintain professional boundaries"
    ],
    correctIndex: 2,
    explanation: "E-2 — The BACB Ethics Code prohibits entering into multiple relationships that may result in a conflict of interest. Attending a family holiday party blurs the professional-personal boundary and risks creating a multiple relationship, so careful consideration and likely declining is most ethical.",
    highlight: "ethics" as const,
  },
  {
    id: 1071,
    topic: "Ethics",
    prompt: "During a session, an RBT notices what appears to be bruising on a child's arm consistent with physical abuse. She reports her concern to the BCBA, who is unsure whether to act because the bruises might have another explanation. What should the BCBA do?",
    options: [
      "Wait until more evidence accumulates before making a report",
      "Discuss the concern with the child's parents before involving authorities",
      "Make a mandated report to child protective services based on reasonable suspicion, without needing certainty",
      "Consult a lawyer before making any report to avoid liability"
    ],
    correctIndex: 2,
    explanation: "E-4 — Behavior analysts are mandatory reporters who must report reasonable suspicion of abuse or neglect. Certainty is not required — reasonable suspicion is the legal and ethical threshold. Delaying or consulting parents first may compromise child safety.",
    highlight: "ethics" as const,
  },
  {
    id: 1072,
    topic: "Ethics",
    prompt: "A BCBA is supervising an RBT who has been implementing a new extinction procedure. The RBT tells the BCBA privately that the procedure has been producing extinction bursts that are unsafe, but asks her not to tell the agency because she fears disciplinary action. The BCBA should:",
    options: [
      "Honor the RBT's confidentiality and troubleshoot the procedure privately",
      "Immediately modify or suspend the procedure and document the safety concerns, placing client welfare first",
      "Document the issue but wait for the next scheduled supervision meeting to address it",
      "Reassign the case to another RBT without disclosing the reason to the agency"
    ],
    correctIndex: 1,
    explanation: "E-3/E-5 — Client welfare is the primary obligation. When a procedure poses safety risks, the BCBA must prioritize the client's wellbeing and address the issue promptly. Supervisor accountability includes taking immediate action, not deferring to the RBT's preference.",
    highlight: "ethics" as const,
  },
  {
    id: 1073,
    topic: "Ethics",
    prompt: "A BCBA is asked by a school district to provide behavior support services to a student. The district drafts a service agreement specifying that all data and reports become the exclusive property of the district. The BCBA reviews this and realizes the agreement may limit her ability to advocate for the client's best interests. What should she do?",
    options: [
      "Sign the agreement because contractual obligations to the district come before individual client considerations",
      "Refuse to work for the district under any contract",
      "Negotiate the contract terms to clarify obligations to the client and align with the BACB Ethics Code before signing",
      "Sign and verbally communicate concerns to the family without documenting them"
    ],
    correctIndex: 2,
    explanation: "E-4 — BCBAs must clarify the nature of third-party contracts and identify potential conflicts before beginning services. The client's welfare takes priority, and service agreements should align with the ethics code.",
    highlight: "ethics" as const,
  },
  {
    id: 1074,
    topic: "Ethics",
    prompt: "A parent asks a BCBA to share confidential session data about her child with a new school the family is considering. The BCBA has not yet obtained written consent for release to that school. The most appropriate next step is:",
    options: [
      "Share the data verbally but not in writing to protect confidentiality",
      "Obtain written informed consent from the parent before releasing any information to the school",
      "Release the data immediately because the parent is the legal guardian",
      "Deny the request because data can only be shared with treatment team members"
    ],
    correctIndex: 1,
    explanation: "E-3 — Confidential information must only be disclosed with informed consent, except in specific circumstances. Verbal permission is insufficient; written consent is required before releasing records to a third party.",
    highlight: "ethics" as const,
  },
  {
    id: 1075,
    topic: "Ethics",
    prompt: "A BCBA is working in a cultural community where it is customary to bring food to professional helpers as a sign of respect. A family brings home-cooked food worth approximately $8 to each session. The BCBA is unsure about accepting. According to the BACB Ethics Code, this situation:",
    options: [
      "Is clearly prohibited because all gifts from clients are banned",
      "May be acceptable if it functions as an infrequent expression of gratitude with a monetary value under $10, and does not create a conflict of interest",
      "Requires written consent from both parties to be acceptable",
      "Is acceptable only if the BCBA discloses the gift to their supervisor and the BACB"
    ],
    correctIndex: 1,
    explanation: "E-2 — The BACB Ethics Code permits accepting gifts with monetary value under $10 if they are infrequent expressions of gratitude that do not create a financial benefit or conflict of interest. Cultural context is also relevant to consider.",
    highlight: "ethics" as const,
  },
  {
    id: 1076,
    topic: "Ethics",
    prompt: "A BCBA is providing supervision to an RBT who consistently implements praise but struggles with correct implementation of the extinction component of the behavior plan. The BCBA has provided verbal feedback twice. The behavior plan is producing limited results partly due to this flaw. What should the BCBA do next?",
    options: [
      "Continue verbal feedback as it is the least restrictive form of performance correction",
      "Remove the RBT from the case immediately without additional support",
      "Develop and implement a formal performance improvement plan with measurable goals and documented feedback",
      "Accept that the RBT has reached the limits of their competence and assign easier cases"
    ],
    correctIndex: 2,
    explanation: "E-5 — BCBAs are accountable for the professional activities of their supervisees. When performance issues persist, ethical supervisors implement structured improvement plans with clear criteria, documentation, and ongoing feedback rather than simply repeating verbal feedback.",
    highlight: "ethics" as const,
  },
  {
    id: 1077,
    topic: "Ethics",
    prompt: "A BCBA is asked by her employer to post a video on the company's social media page that includes footage of a client making significant progress with their ABA program. The employer says the client's mother verbally agreed to it. The BCBA should:",
    options: [
      "Post the video as requested because the mother's verbal consent is sufficient",
      "Post the video only after obtaining written informed consent that specifies the purpose and audience",
      "Decline to post any client-related content on social media under any circumstances",
      "Post the video but use a pseudonym for the client's name to protect privacy"
    ],
    correctIndex: 1,
    explanation: "E-6 — The Ethics Code requires written informed consent prior to posting digital content of clients publicly. Verbal consent is insufficient. Consent must specify the purpose, platform, and audience for the content.",
    highlight: "ethics" as const,
  },
  {
    id: 1078,
    topic: "Ethics",
    prompt: "A BCBA colleague approaches you and says she has been feeling burned out and has started missing scheduled observations of her clients' RBTs. She is not aware her performance has been slipping. As a fellow BCBA, what does the Ethics Code most directly require of you?",
    options: [
      "Report the colleague to the BACB immediately to protect clients",
      "Do nothing because it is not your responsibility to monitor other BCBAs",
      "Address the issue informally first, expressing concern for her wellbeing and the impact on clients",
      "Document her performance failures and save them in case the BACB needs them later"
    ],
    correctIndex: 2,
    explanation: "E-2 — BCBAs have ethical obligations to address potential ethical violations by colleagues. The first step is typically to address concerns directly and informally with the colleague, particularly when the situation involves professional wellness rather than misconduct.",
    highlight: "ethics" as const,
  },
  {
    id: 1079,
    topic: "Ethics",
    prompt: "A BCBA is conducting a functional analysis as part of a research study. A parent of one participant says she wants to withdraw her child from the study but is worried that withdrawing will affect the quality of her child's ongoing ABA services. What must the BCBA communicate?",
    options: [
      "Withdrawal from the study will likely affect service quality and funding",
      "Withdrawal from the study is the parent's right and will not affect the services the child receives",
      "The parent should complete the study before withdrawing to avoid compromising the data",
      "The parent needs to provide a written reason for withdrawal before it can be processed"
    ],
    correctIndex: 1,
    explanation: "E-7 — The BACB Ethics Code requires that behavior analysts make clear to research participants that consent to participate can be withdrawn at any time without penalty, and that withholding or withdrawing consent will not affect receipt of services.",
    highlight: "ethics" as const,
  },
  {
    id: 1080,
    topic: "Ethics",
    prompt: "A BCBA gives a webinar to parents in which she states 'ABA is the only scientifically proven treatment for autism.' A colleague hears this and is concerned. What ethical issue does this raise?",
    options: [
      "None — this statement is supported by the scientific literature and advocacy is appropriate",
      "Providing individualized clinical advice in a public forum",
      "Making misleading or exaggerated public statements that misrepresent the science",
      "Engaging in advertising services through public presentations"
    ],
    correctIndex: 2,
    explanation: "E-6 — BCBAs must make accurate, truthful public statements. Saying ABA is 'the only' proven treatment is an overstatement that does not accurately represent the evidence base and may mislead families, violating the requirement for honest public communications.",
    highlight: "ethics" as const,
  },
  {
    id: 1081,
    topic: "Ethics",
    prompt: "A BCBA is preparing to implement a behavior reduction procedure involving response blocking for a client who engages in hand-mouthing. Before implementing, what must the BCBA do according to the Ethics Code?",
    options: [
      "Conduct a functional analysis only if the behavior is severe",
      "Obtain informed consent from the client or guardian, explaining the procedure, risks, and benefits before implementation",
      "Get verbal approval from the parent during the next session, then begin the procedure",
      "Implement the procedure first, then obtain consent at the next team meeting"
    ],
    correctIndex: 1,
    explanation: "E-3 — Informed consent must be obtained before implementing behavior change procedures, including behavior reduction procedures. It must be documented in writing and must describe the procedure, its risks, and its benefits.",
    highlight: "ethics" as const,
  },
  {
    id: 1082,
    topic: "Ethics",
    prompt: "A BCBA learns that a client's current ABA provider has been implementing a punishment procedure (contingent water misting) that is not producing results and appears to be causing distress. No less intrusive alternatives have been tried. What should the BCBA do if asked to consult on this case?",
    options: [
      "Implement the water misting more consistently since the problem is likely procedural integrity",
      "Recommend transitioning to less intrusive procedures and document the rationale, prioritizing client welfare and the least restrictive principle",
      "Respect the current provider's clinical judgment since they have been working with the client longer",
      "Report the case to the BACB immediately as a mandatory ethics violation"
    ],
    correctIndex: 1,
    explanation: "E-3 — The Ethics Code requires that punishment procedures be used only when less intrusive alternatives have been tried and found ineffective, or when harm from the behavior outweighs procedural risks. Recommending a transition to less intrusive procedures is ethically required.",
    highlight: "ethics" as const,
  },
  {
    id: 1083,
    topic: "Ethics",
    prompt: "A BCBA is hired by a school district to improve a student's academic engagement. Over several weeks, she observes that the student's assigned RBT and the student appear to have a strong rapport, but the RBT consistently speaks to the student in the student's native language during sessions rather than English as specified in the behavior plan. The BCBA should:",
    options: [
      "Insist the RBT speak only English to ensure fidelity to the behavior plan regardless of client preference",
      "Investigate whether the native language component supports or hinders the client's goals, and collaborate with the team to revise the plan if culturally appropriate",
      "Report the RBT to their employer for deviation from the written plan",
      "Allow the deviation because client rapport is more important than procedural fidelity"
    ],
    correctIndex: 1,
    explanation: "E-2/E-3 — BCBAs must promote cultural responsiveness and involve clients in service delivery. The behavior analyst should evaluate whether the current practice is in the client's best interest and revise the plan to be culturally appropriate rather than enforcing an unnecessarily rigid protocol.",
    highlight: "ethics" as const,
  },
  {
    id: 1084,
    topic: "Ethics",
    prompt: "A BCBA provides services through a clinic that is also co-owned by the BCBA's spouse, who is the billing manager. The BCBA provides clinical services to several clients at the clinic. What ethical concern does this arrangement most directly raise?",
    options: [
      "Scope of competence — the BCBA should not be billing and providing services",
      "A multiple relationship — the financial and clinical roles create a potential conflict of interest",
      "None — spousal co-ownership of a business is legal and unrelated to clinical ethics",
      "Dual credentialing — BCBAs should not hold administrative and clinical roles simultaneously"
    ],
    correctIndex: 1,
    explanation: "E-2 — A multiple relationship exists when a BCBA is in a professional role with a person and simultaneously in another role that could impair objectivity. Having a financial interest through a spouse who manages billing for clients the BCBA serves creates a potential conflict of interest.",
    highlight: "ethics" as const,
  },
  {
    id: 1085,
    topic: "Ethics",
    prompt: "At the end of a successful 18-month treatment program, a client's parent gives the BCBA a gift card worth $75 as a heartfelt token of appreciation. According to the BACB Ethics Code, this is:",
    options: [
      "Acceptable because the professional relationship has ended",
      "Acceptable because the gift was given voluntarily and without expectation",
      "Problematic because the value exceeds the $10 limit stated in the Ethics Code",
      "Acceptable if the BCBA documents the gift in the client file"
    ],
    correctIndex: 2,
    explanation: "E-2 — The BACB Ethics Code specifies that behavior analysts do not give or accept gifts with a monetary value exceeding $10 USD from clients, stakeholders, supervisees, or trainees. A $75 gift card violates this standard regardless of context.",
    highlight: "ethics" as const,
  },
  {
    id: 1086,
    topic: "Ethics",
    prompt: "A BCBA is transitioning a client to a new provider because she is relocating. The new BCBA does not have experience with the client's specific communication device. The outgoing BCBA's primary obligation at this time is:",
    options: [
      "Complete all outstanding billing before the transition",
      "Minimize disruption to services by facilitating a comprehensive transition plan including training the new provider on device usage",
      "Inform the family that the new BCBA will need to start fresh with a new assessment",
      "Provide only the behavior intervention plan without additional support to avoid scope creep"
    ],
    correctIndex: 1,
    explanation: "E-4 — When services are transitioned, BCBAs are responsible for facilitating a smooth transition that protects the client's interests, including providing adequate information and training to the incoming provider to maintain continuity of effective services.",
    highlight: "ethics" as const,
  },
  {
    id: 1087,
    topic: "Ethics",
    prompt: "A BCBA publishes a case study based on data collected during clinical services with a client. She changes the client's name but keeps all other identifying details intact. A colleague who reads the study immediately recognizes the client. This situation most directly violates:",
    options: [
      "Accurate reporting of research data",
      "The requirement to obtain research review committee approval",
      "Confidentiality in research by failing to adequately protect participant identity",
      "Intellectual property standards by using data from services"
    ],
    correctIndex: 2,
    explanation: "E-7 — When publishing research or case data, BCBAs must protect participant confidentiality. Simply changing a name while retaining identifying details that allow recognition violates the obligation to protect research participant confidentiality.",
    highlight: "ethics" as const,
  },
  {
    id: 1088,
    topic: "Ethics",
    prompt: "A BCBA is providing home-based services and notices that the family's home has significant safety hazards (exposed wiring, rodent droppings) that pose risks to the child client and the therapy staff. The family is resistant to making changes. What should the BCBA do?",
    options: [
      "Continue services without comment to maintain the therapeutic relationship",
      "Immediately discharge the client because the environment is unsafe",
      "Document the safety concerns, discuss them with the family, and take steps to address the hazards or modify service delivery to protect all parties",
      "Require the family to relocate sessions to a clinical setting immediately without explanation"
    ],
    correctIndex: 2,
    explanation: "E-3/E-4 — BCBAs must address conditions that interfere with effective and safe service delivery. Documentation, family communication, and problem-solving to reduce risks are required before considering more drastic measures like service discontinuation.",
    highlight: "ethics" as const,
  },
  {
    id: 1089,
    topic: "Ethics",
    prompt: "A BCBA discovers that another behavior analyst at her organization has been fabricating data in monthly progress reports to satisfy funding requirements. No clients appear to have been directly harmed yet. What is the BCBA's most appropriate first step?",
    options: [
      "Do nothing because it is not her responsibility to police colleagues",
      "Confront the colleague and give them 30 days to self-report to the BACB",
      "Address the issue directly with the colleague first; if unresolved, report to relevant parties including the BACB if required",
      "Report directly to the funding agency while keeping the BACB uninvolved"
    ],
    correctIndex: 2,
    explanation: "E-2 — The Ethics Code requires BCBAs to address potential violations by others. Addressing the colleague directly is typically the first step. If the issue is not resolved or involves serious misconduct (such as data fabrication), the BCBA has an obligation to report to appropriate authorities including the BACB.",
    highlight: "ethics" as const,
  },
  {
    id: 1090,
    topic: "Ethics",
    prompt: "A BCBA has been working with a child for 3 years. The child has met all treatment goals and the family wants to discontinue services. The BCBA believes the child could still benefit from continued services. What is the most ethical course of action?",
    options: [
      "Continue services over the family's objection because clinical judgment supersedes client preference",
      "Discharge the client per the family's request, provide a transition plan, and document all relevant clinical information",
      "Request a 90-day extension before agreeing to discharge in order to complete additional goals",
      "Refer the family to another BCBA who might be able to persuade them to continue"
    ],
    correctIndex: 1,
    explanation: "E-4 — When clients or stakeholders request discontinuation of services, BCBAs must respect that decision. Client autonomy and the right to refuse services must be honored. The ethical obligation is to facilitate a responsible transition and documentation rather than prolonging services against the client's wishes.",
    highlight: "ethics" as const,
  },
  {
    id: 1091,
    topic: "Behavior Assessment",
    prompt: "A BCBA is beginning services with a new client referred for aggression. Before conducting any observations or interviews, what should the BCBA do first?",
    options: [
      "Conduct a functional analysis to identify the function of aggression",
      "Administer a preference assessment to identify potential reinforcers",
      "Implement a DRO procedure as a preliminary intervention",
      "Review all available records including medical, educational, and historical data"
    ],
    correctIndex: 3,
    explanation: "F-1 — Reviewing records and available data at the outset of the case is the first step in behavior assessment, as it helps identify medical factors, prior interventions, and historical context before any direct assessment begins."
  },
  {
    id: 1092,
    topic: "Behavior Assessment",
    prompt: "During an intake assessment for a 7-year-old child, the BCBA notices that the child's challenging behavior at school began shortly after a significant medical diagnosis. The BCBA should:",
    options: [
      "Disregard the medical history since behavior analysts address behavioral — not medical — concerns",
      "Immediately design a punishment-based intervention to suppress the behavior",
      "Postpone assessment until the medical issue resolves on its own",
      "Suggest to the family that medical factors may be influencing behavior and that medical evaluation is warranted"
    ],
    correctIndex: 3,
    explanation: "F-1 — When evidence suggests medical factors may be influencing behavior, it is the BCBA's ethical responsibility to recommend medical evaluation, as biological variables can affect behavior and must be considered in assessment and planning."
  },
  {
    id: 1093,
    topic: "Behavior Assessment",
    prompt: "A BCBA is assessing a Latinx child whose family reports that the child avoids eye contact with adults. Before labeling this as a social skills deficit, the BCBA should:",
    options: [
      "Administer a standardized norm-referenced assessment of social skills",
      "Immediately begin eye contact training using discrete trial instruction",
      "Conduct a functional analysis to determine the function of gaze aversion",
      "Identify and integrate relevant cultural variables, as avoiding eye contact with adults may be a sign of respect in the family's culture"
    ],
    correctIndex: 3,
    explanation: "F-2 — Behavior analysts must identify and integrate relevant cultural variables in the assessment process, as behaviors interpreted one way in one culture (e.g., avoiding eye contact as disrespect) may carry opposite meaning in another (e.g., a sign of respect)."
  },
  {
    id: 1094,
    topic: "Behavior Assessment",
    prompt: "A behavior analyst uses a culturally adapted interview tool and consults with a community leader who shares the client's background before finalizing an assessment. This practice best reflects which task item?",
    options: [
      "F-1 — reviewing historical records at the outset",
      "F-2 — identifying and integrating cultural variables in the assessment process",
      "F-5 — conducting a descriptive assessment of problem behavior",
      "F-8 — interpreting data to determine the need for referral"
    ],
    correctIndex: 1,
    explanation: "F-2 — Using culturally adapted tools and consulting with individuals who share the client's cultural background are hallmarks of integrating cultural variables into the assessment process to ensure accuracy and cultural sensitivity."
  },
  {
    id: 1095,
    topic: "Behavior Assessment",
    prompt: "A school-based BCBA wants to identify a student's skill strengths and areas of need to set intervention targets. The BCBA uses a tool that lists developmental milestones in chronological order and approximate age ranges. This type of assessment is best described as:",
    options: [
      "An ecobehavioral assessment",
      "A criterion-referenced assessment",
      "A standardized norm-referenced test",
      "A curriculum-based assessment"
    ],
    correctIndex: 1,
    explanation: "F-3 — Criterion-referenced assessments list generally accepted developmental milestones in chronological order with typical age ranges, providing individualized information about skill strengths and deficits relative to developmental benchmarks."
  },
  {
    id: 1096,
    topic: "Behavior Assessment",
    prompt: "A BCBA is choosing between a standardized assessment and a curriculum-based assessment for a new client. Which of the following is a key advantage of curriculum-based assessments?",
    options: [
      "They provide norm-referenced scores needed for billing and qualifying for services",
      "They eliminate the need for direct observation",
      "They can only be administered by licensed psychologists",
      "They give exact guidelines for intervention targets aligned with the curriculum the client is using"
    ],
    correctIndex: 3,
    explanation: "F-3 — Curriculum-based assessments are designed to match a specific curriculum's learning objectives, providing precise targets for intervention that are directly tied to the environment where the skill will be used."
  },
  {
    id: 1097,
    topic: "Behavior Assessment",
    prompt: "A BCBA clears a room of all potential distractors, presents an array of 6 items, observes which item the child approaches first, allows 1 minute of play, removes the item, then repeats the process until all items have been selected. This procedure is best described as:",
    options: [
      "A free-operant preference assessment",
      "A single stimulus (successive choice) preference assessment",
      "A paired stimulus preference assessment",
      "A reinforcer survey"
    ],
    correctIndex: 1,
    explanation: "F-4 — The procedure described — presenting items one at a time, observing approach, then removing chosen items and repeating — is a single stimulus (successive choice) preference assessment that records the order in which items are selected."
  },
  {
    id: 1098,
    topic: "Behavior Assessment",
    prompt: "A BCBA tells a parent, 'We think your child may enjoy these items, but we haven't yet confirmed that they actually increase behavior.' The items the BCBA is referring to are best described as:",
    options: [
      "Conditioned reinforcers",
      "Putative reinforcers",
      "Unconditioned reinforcers",
      "Negative reinforcers"
    ],
    correctIndex: 1,
    explanation: "F-4 — Putative reinforcers are presumed or potential reinforcers — items that someone appears to prefer — but have not yet been empirically demonstrated to increase future behavior through controlled assessment."
  },
  {
    id: 1099,
    topic: "Behavior Assessment",
    prompt: "During a classroom observation, a BCBA records what happens immediately before and after each instance of a student's disruptive behavior. This method is referred to as:",
    options: [
      "Scatterplot recording",
      "ABC (antecedent-behavior-consequence) event recording",
      "Momentary time sampling",
      "Interval recording"
    ],
    correctIndex: 1,
    explanation: "F-5 — ABC event recording captures the antecedents and consequences surrounding each instance of target behavior, making it a key tool for descriptive assessment of problem behavior and hypothesis generation about its function."
  },
  {
    id: 1100,
    topic: "Behavior Assessment",
    prompt: "A BCBA hypothesizes that a student's self-injurious behavior (SIB) is maintained by escape from demands. To experimentally verify this hypothesis, the BCBA designs sessions where academic demands are presented and removed contingent on SIB, while a control condition provides free play. This is best described as:",
    options: [
      "An analogue functional analysis",
      "An indirect assessment using caregiver interviews",
      "A contingency reversal using naturalistic conditions",
      "A descriptive assessment using ecobehavioral recording"
    ],
    correctIndex: 0,
    explanation: "F-6 — An analogue functional analysis involves systematic experimental manipulation of conditions (demand, attention, alone, play/control) to identify the function of problem behavior, providing the highest level of experimental control among FBA methods."
  },
  {
    id: 1101,
    topic: "Behavior Assessment",
    prompt: "In a functional analysis, a client's SIB occurs at high rates in the 'alone' condition but at near-zero rates in all other conditions. What does this pattern most strongly suggest?",
    options: [
      "The behavior is maintained by attention from others",
      "The behavior is maintained by escape from demands",
      "The behavior is maintained by access to tangible items",
      "The behavior is automatically reinforced (sensory/automatic function)"
    ],
    correctIndex: 3,
    explanation: "F-6 — High rates of behavior in the alone condition (no social attention, no demands, no access reinforcement available) indicate the behavior is self-sustaining through automatic/sensory reinforcement, as no external contingency is needed to maintain it."
  },
  {
    id: 1102,
    topic: "Behavior Assessment",
    prompt: "A BCBA wants to understand the broader behavioral patterns of a student who tends to elope across a variety of school situations. Rather than looking only at immediate antecedents and consequences, the BCBA examines the student's response history across many contexts. This approach best reflects which FA method?",
    options: [
      "In-situ functional analysis",
      "Ecobehavioral assessment",
      "Contingency reversal",
      "Paired choice preference assessment"
    ],
    correctIndex: 1,
    explanation: "F-6 — Ecobehavioral assessment analyzes patterns of responding across broader contextual variables and response history rather than only immediate antecedent-consequence pairs, helping predict behavior in novel circumstances."
  },
  {
    id: 1103,
    topic: "Behavior Assessment",
    prompt: "A functional analysis is conducted in the client's actual classroom rather than a contrived clinic setting, allowing naturally occurring discriminative stimuli to be present. This is called:",
    options: [
      "A structured descriptive assessment",
      "An in-situ functional analysis",
      "A contingency reversal procedure",
      "An antecedent manipulation"
    ],
    correctIndex: 1,
    explanation: "F-6 — An in-situ functional analysis is conducted in the natural environment (classroom, home, playground), providing the advantage of including naturally occurring stimuli that would not be present in a contrived clinical setting."
  },
  {
    id: 1104,
    topic: "Behavior Assessment",
    prompt: "After reviewing an FA graph showing high rates of problem behavior in both the attention condition and the demand condition, a BCBA concludes the behavior likely has multiple functions. This interpretation is part of which task item?",
    options: [
      "F-5 — Conducting a descriptive assessment",
      "F-3 — Designing assessments of skill strengths and needs",
      "F-7 — Conducting preference assessments",
      "F-8 — Interpreting assessment data to determine need for behavior-analytic services"
    ],
    correctIndex: 3,
    explanation: "F-8 — Interpreting functional assessment data — including identifying multiple functions and making recommendations about the need for behavior-analytic services or referral — is the core of F-8."
  },
  {
    id: 1105,
    topic: "Behavior Assessment",
    prompt: "After completing a comprehensive behavior assessment, a BCBA notes that antecedent stimuli from the client's medical history (chronic ear infections) frequently precede challenging behavior and may be functioning as establishing operations. The BCBA's most appropriate action is to:",
    options: [
      "Ignore the medical information since it falls outside the scope of behavior analysis",
      "Recommend immediate hospitalization",
      "Include the medical variables in the functional hypothesis and recommend medical evaluation, noting their potential role in behavior",
      "Implement an extinction procedure immediately"
    ],
    correctIndex: 2,
    explanation: "F-8 — Interpreting assessment data includes identifying when medical/biological variables may be influencing behavior and recommending referral to appropriate professionals, while also noting how such variables may function as establishing operations in the behavioral program."
  },
  {
    id: 1106,
    topic: "Behavior Assessment",
    prompt: "A preliminary assessment for a new adult client involves completing surveys, conducting interviews, and brief direct observation to identify target behaviors and possible functions. The purpose of this preliminary assessment is to:",
    options: [
      "Replace the need for a functional analysis",
      "Complete the entire FBA so that intervention can begin immediately",
      "Narrow the focus of investigation and determine which behavioral dimensions to measure in a more complete assessment",
      "Satisfy insurance requirements without further assessment"
    ],
    correctIndex: 2,
    explanation: "F-8 — A preliminary assessment uses descriptive measures, interviews, and observation to briefly identify target behaviors, likely antecedents, and possible functions, giving the behavior analyst a focused starting point for a more individualized and thorough assessment."
  },
  {
    id: 1107,
    topic: "Behavior Assessment",
    prompt: "A BCBA is designing an individualized assessment for a client whose behavior looks different at home versus school, and whose function may differ across settings. The BCBA should:",
    options: [
      "Choose the function that appears most often across settings and build a single intervention around it",
      "Design a tailored assessment that considers the complexity of the behavior, multiple settings, and possible multiple functions, reassessing if intervention does not produce expected results",
      "Only use indirect assessment methods since direct observation is too time-consuming",
      "Use a standardized protocol identical to what was used with the previous client"
    ],
    correctIndex: 1,
    explanation: "F-8 — Individualized behavioral assessment procedures require tailoring the assessment to each client's behaviors, settings, and complexity; reassessment of hypothesized function is necessary when intervention does not change behavior in the expected direction or magnitude."
  },
  {
    id: 1108,
    topic: "Behavior Assessment",
    prompt: "A client's teacher completes a rating scale and questionnaire about the student's challenging behavior without the BCBA directly observing. This type of information gathering is classified as:",
    options: [
      "An indirect assessment",
      "A descriptive assessment",
      "An analogue functional analysis",
      "A criterion-referenced assessment"
    ],
    correctIndex: 0,
    explanation: "F-5 — Indirect assessment methods (surveys, questionnaires, interviews) gather information without direct observation of the behavior by the behavior analyst; while useful for generating hypotheses, they are generally insufficient on their own for accurate functional conclusions."
  },
  {
    id: 1109,
    topic: "Behavior Change Procedures",
    prompt: "A student frequently blurts out answers during class. The teacher no longer calls on her when she blurts, but consistently calls on her when she raises her hand and waits. After several weeks, blurting has decreased and hand-raising has increased. Which behavior-change procedures are in effect?",
    options: [
      "Negative reinforcement for hand-raising; positive punishment for blurting",
      "DRO for blurting combined with negative reinforcement for hand-raising",
      "DRL for blurting combined with noncontingent reinforcement",
      "Extinction for blurting combined with positive reinforcement for hand-raising (DRA)"
    ],
    correctIndex: 3,
    explanation: "G-1 and G-2 — Calling on the student when she raises her hand provides positive reinforcement (attention) for the alternative behavior, while no longer calling on her when she blurts applies extinction to the target behavior — a classic DRA with extinction procedure."
  },
  {
    id: 1110,
    topic: "Behavior Change Procedures",
    prompt: "A classroom teacher provides reinforcement to a student every 15 minutes as long as the student has NOT engaged in any out-of-seat behavior during that interval. If the student is out of seat, the interval is reset. Which differential reinforcement procedure is being used?",
    options: [
      "Differential Reinforcement of Alternative behavior (DRA)",
      "Differential Reinforcement of Other behavior (DRO)",
      "Differential Reinforcement of Low Rates (DRL)",
      "Differential Reinforcement of High Rates (DRH)"
    ],
    correctIndex: 1,
    explanation: "G-2 — DRO provides reinforcement when the target behavior has NOT occurred during a specified interval; the interval resets if the behavior occurs, making it a time-based schedule contingent on the absence of the target behavior."
  },
  {
    id: 1111,
    topic: "Behavior Change Procedures",
    prompt: "A therapist wants to reduce a client's hand-flapping behavior without eliminating it entirely. The client currently hand-flaps approximately 40 times per session. The therapist sets a criterion of 20 times per session and provides reinforcement when the client meets or stays below this criterion. This procedure is best described as:",
    options: [
      "DRL — differential reinforcement of low rates",
      "DRO — reinforcing the absence of hand-flapping",
      "DRI — reinforcing a behavior physically incompatible with hand-flapping",
      "DRD — differential reinforcement of diminishing rates"
    ],
    correctIndex: 0,
    explanation: "G-2 — DRL is used when the goal is to reduce but not eliminate a behavior; reinforcement is provided when the rate of behavior meets or stays below a socially acceptable criterion, unlike DRO which requires zero occurrence."
  },
  {
    id: 1112,
    topic: "Behavior Change Procedures",
    prompt: "A student rarely asks questions or seeks input from classmates during group projects. A BCBA sets a criterion that the student must ask at least 5 questions per group session to earn reinforcement. This procedure is:",
    options: [
      "DRL — differential reinforcement of low rates",
      "DRH — differential reinforcement of high rates",
      "DRA — differential reinforcement of alternative behavior",
      "DRO — differential reinforcement of other behavior"
    ],
    correctIndex: 1,
    explanation: "G-2 — DRH is used when the goal is to increase the frequency of a behavior; reinforcement is provided when the rate meets or exceeds a set criterion, and the criterion level should be socially valid."
  },
  {
    id: 1113,
    topic: "Behavior Change Procedures",
    prompt: "An adult client engages in disruptive verbal behavior about 30 times per hour. The BCBA implements a DRD procedure, providing reinforcement when the behavior occurs no more than 25 times per hour. Once this criterion is consistently met, the next criterion is set at 20 times per hour. This gradual reduction process continues. What does the data pattern for a successful DRD procedure most resemble?",
    options: [
      "An ABAB reversal design",
      "An alternating treatments design",
      "A multiple baseline design",
      "A changing criterion design"
    ],
    correctIndex: 3,
    explanation: "G-2 — DRD (Differential Reinforcement of Diminishing Rates) uses progressively lower criteria for reduction, creating a data pattern that resembles a changing criterion design as each successive target for reduction is met."
  },
  {
    id: 1114,
    topic: "Behavior Change Procedures",
    prompt: "A BCBA delivers preferred items to a client every 5 minutes regardless of the client's behavior. Over time, problem behavior decreases. The mechanism by which this procedure is thought to reduce problem behavior is:",
    options: [
      "Positive punishment of problem behavior",
      "DRO by providing reinforcement during intervals without problem behavior",
      "Extinction of the problem behavior by blocking its reinforcement",
      "Creating an abolishing operation that reduces the motivation to engage in problem behavior to obtain the item"
    ],
    correctIndex: 3,
    explanation: "G-2 — Noncontingent Reinforcement (NCR) functions as an antecedent intervention by creating an abolishing operation: satiation of the reinforcer reduces the motivation to engage in problem behavior to obtain it, without requiring any behavioral contingency."
  },
  {
    id: 1115,
    topic: "Behavior Change Procedures",
    prompt: "A BCBA implements a fixed-time 5-minute schedule of reinforcement (FT-5) for a client. A key feature that distinguishes this from NCR and other reinforcement schedules is:",
    options: [
      "Reinforcement is delivered every 5 minutes regardless of whether the target behavior has occurred",
      "Reinforcement is contingent on the client performing a specific behavior",
      "The interval resets if the client engages in problem behavior",
      "Reinforcement is delivered after exactly 5 responses occur"
    ],
    correctIndex: 0,
    explanation: "G-3 — Fixed-time (FT) schedules deliver reinforcement after a set amount of time has passed, independent of the individual's behavior; this non-contingent, time-based delivery is the defining feature of FT schedules."
  },
  {
    id: 1116,
    topic: "Behavior Change Procedures",
    prompt: "A teacher is introducing a token economy. During the initial phase, students earn a token for every correct response and immediately exchange it for backup reinforcers. The teacher pairs token delivery with verbal praise. Which step in token economy implementation does this describe?",
    options: [
      "The fading phase, where artificial reinforcers are gradually removed",
      "The generalization phase, where tokens are transferred to natural reinforcers",
      "The thinning phase, where the ratio of behavior to tokens is increased",
      "The implementation phase, where tokens are generously provided and paired with backup reinforcers to establish the token as a conditioned reinforcer"
    ],
    correctIndex: 3,
    explanation: "G-4 — In the implementation phase of a token economy, tokens are provided generously (on a continuous or near-continuous schedule) and immediately followed by exchange for backup reinforcers, establishing the token as a conditioned reinforcer through pairing."
  },
  {
    id: 1117,
    topic: "Behavior Change Procedures",
    prompt: "A BCBA is fading a token economy. Which of the following strategies would be appropriate during fading?",
    options: [
      "Increase the number of responses required to earn a token and replace backup reinforcers with naturally available items/activities",
      "Increase the number of tokens given per behavior",
      "Shorten the time between earning tokens and exchanging them for backup reinforcers",
      "Deliver backup reinforcers independently of whether the client has earned tokens"
    ],
    correctIndex: 0,
    explanation: "G-4 — Fading a token economy involves increasing the response requirement per token, extending the delay to exchange, and replacing contrived backup reinforcers with naturally occurring ones so behavior is eventually maintained by natural contingencies."
  },
  {
    id: 1118,
    topic: "Behavior Change Procedures",
    prompt: "A BCBA restricts a student's access to a preferred toy before a work session, then makes the toy visible but out of reach. During the work session, the student must request the toy using a functional communication response. The BCBA is using which type of intervention?",
    options: [
      "A discriminative stimulus manipulation to establish the work task as an S-delta",
      "Negative reinforcement by removing an aversive task contingent on requests",
      "A DRO procedure to eliminate tantrum behavior",
      "A motivating operation (establishing operation) combined with a discriminative stimulus to occasion requesting behavior"
    ],
    correctIndex: 3,
    explanation: "G-5 — Restricting access to a preferred item functions as an establishing operation, increasing the value of the toy as a reinforcer; making it visible but out of reach provides a discriminative stimulus for requesting — combining MO and SD to occasion communication."
  },
  {
    id: 1119,
    topic: "Behavior Change Procedures",
    prompt: "A student is presented with a red card (SD) and says 'red.' He is also presented with a blue card (S-delta) and is corrected if he says 'red.' Over time, the student reliably says 'red' only in the presence of the red card. This is an example of:",
    options: [
      "A conditional discrimination",
      "Stimulus generalization",
      "A simple discrimination",
      "Response generalization"
    ],
    correctIndex: 2,
    explanation: "G-6 — A simple discrimination involves responding differentially to one stimulus (SD) versus another (S-delta) based on a three-term contingency; responding 'red' only in the presence of the red card reflects simple stimulus control."
  },
  {
    id: 1120,
    topic: "Behavior Change Procedures",
    prompt: "A child is shown a sample picture of a cow and must select from an array the matching picture of a cow. This response is reinforced. This training procedure is specifically called:",
    options: [
      "Identity matching-to-sample",
      "Oddity matching",
      "Arbitrary matching",
      "Conditional discrimination with novel stimuli"
    ],
    correctIndex: 0,
    explanation: "G-6 — Matching-to-sample where the child selects a stimulus identical to the sample is called identity matching; this is a form of simple discrimination training used to establish stimulus control."
  },
  {
    id: 1121,
    topic: "Behavior Change Procedures",
    prompt: "A client is learning to identify 'same' versus 'different' across multiple stimulus dimensions. The correct response depends on both the sample AND the comparison stimuli shown. This type of learning requires:",
    options: [
      "Simple discrimination training using two stimuli",
      "Response generalization training using multiple exemplars",
      "Conditional discrimination, where responding to one stimulus is conditional on another stimulus",
      "Backward chaining with total task presentation"
    ],
    correctIndex: 2,
    explanation: "G-6 — Conditional discrimination requires that the reinforced response to a stimulus is conditional on the presence of at least one other stimulus, making it more complex than a simple three-term contingency."
  },
  {
    id: 1122,
    topic: "Behavior Change Procedures",
    prompt: "A therapist is teaching a child to button a shirt. She begins by fully physically guiding the child through the entire motion, then gradually reduces the physical guidance over successive trials while adding a verbal prompt. When the child responds correctly without guidance, she fades the verbal prompt. This describes:",
    options: [
      "Most-to-least prompting with graduated fading",
      "Least-to-most prompting",
      "Time delay prompting",
      "Errorless learning with stimulus fading"
    ],
    correctIndex: 0,
    explanation: "G-7 — Most-to-least prompting begins with the most intrusive prompt needed to ensure correct responding, then systematically fades to less intrusive prompts as the learner demonstrates proficiency, associated with errorless learning principles."
  },
  {
    id: 1123,
    topic: "Behavior Change Procedures",
    prompt: "A therapist presents a picture of an apple to a child. She waits 5 seconds for an independent response. If none is given or an incorrect response occurs, she repeats the trial with a verbal prompt ('ap…'). If the child still does not respond, she provides the full verbal model. This procedure is:",
    options: [
      "Most-to-least prompting",
      "Graduated guidance",
      "Least-to-most prompting (the 'do over' method)",
      "Simultaneous prompting"
    ],
    correctIndex: 2,
    explanation: "G-7 — Least-to-most prompting begins with a waiting period for independent response, then provides progressively more intrusive prompts if needed; this 'do over' approach starts from the beginning with more prompting if the client does not respond correctly."
  },
  {
    id: 1124,
    topic: "Behavior Change Procedures",
    prompt: "A BCBA uses a prompt delay procedure where she initially presents the SD and prompt simultaneously (0-second delay), then gradually increases the delay from 0 to 3 seconds between the SD and the prompt. The purpose of this approach is to:",
    options: [
      "Decrease the rate of reinforcement to thin the schedule",
      "Establish the SD as a punisher by pairing it with removal of reinforcement",
      "Create a conditional discrimination using multiple stimuli",
      "Transfer stimulus control from the prompt to the natural SD by giving the learner increasing time to respond independently before the prompt is delivered"
    ],
    correctIndex: 3,
    explanation: "G-8 — Prompt delay systematically increases the interval between the SD and the prompt, giving the learner opportunity to respond to the natural SD independently; this transfers stimulus control from the prompt to the SD, reducing prompt dependence."
  },
  {
    id: 1125,
    topic: "Behavior Change Procedures",
    prompt: "A BCBA is teaching letter writing. She initially gives students a fully formed letter to trace, then a dotted-line version, and finally a blank line with no visual support. This technique is called:",
    options: [
      "Response prompt fading using most-to-least procedure",
      "Behavioral momentum using high-probability requests",
      "Graduated guidance using physical prompts",
      "Stimulus fading, where the stimulus prompt is gradually changed to transfer control to the natural stimulus"
    ],
    correctIndex: 3,
    explanation: "G-8 — Stimulus fading involves gradually changing the stimulus prompt (e.g., from a fully formed letter to a dotted outline to a blank line) so that responding eventually comes under control of the natural, unprompted stimulus."
  },
  {
    id: 1126,
    topic: "Behavior Change Procedures",
    prompt: "A therapist demonstrates how to clap twice, and after a few trials with physical and verbal prompting, a toddler independently imitates clapping twice when the therapist does so without instruction. Reinforcement is then given for a new novel action, and the toddler eventually imitates novel actions without additional teaching. This process of teaching generalized imitation is called:",
    options: [
      "Chaining — linking individual responses into a sequence",
      "Imitation training — teaching clients to copy specific actions until novel actions are imitated without direct training",
      "Shaping — reinforcing successive approximations to a target response",
      "Errorless learning — preventing any incorrect responses during training"
    ],
    correctIndex: 1,
    explanation: "G-9 — Imitation training involves teaching clients to copy specific actions using prompting and reinforcement of approximations; imitation is achieved when novel actions are independently imitated without specific training for each action."
  },
  {
    id: 1127,
    topic: "Behavior Change Procedures",
    prompt: "A BCBA tells parents: 'Think of this rule like a seat belt — most people wear it not because they've experienced a car accident, but because they've been told about consequences that may occur.' The behavior being described is controlled by:",
    options: [
      "Immediate contingency-shaped consequences in the environment",
      "Negative reinforcement by escape from social disapproval",
      "Rule-governed behavior — a verbal statement describing a contingency that controls behavior without direct contact with the contingency",
      "An establishing operation that momentarily increases the value of safety"
    ],
    correctIndex: 2,
    explanation: "G-10 — Rule-governed behavior is controlled by the verbal description of a contingency rather than direct contact with that contingency; wearing a seat belt 'because you were told to' is a classic example of rule-governed rather than contingency-shaped behavior."
  },
  {
    id: 1128,
    topic: "Behavior Change Procedures",
    prompt: "A therapist wants to teach a student to say 'excuse me' rather than interrupting. She reinforces every instance of 'excuse me' and ignores interrupting. Over time, the student begins to say 'excuse me' almost exclusively. The process by which successive approximations toward saying 'excuse me' were reinforced to build this skill is called:",
    options: [
      "Shaping, which uses differential reinforcement of successive approximations toward a target response",
      "Chaining, which links individual responses into a behavioral sequence",
      "Stimulus fading, which transfers stimulus control from prompts to the natural environment",
      "DRL, which reinforces low rates of interrupting"
    ],
    correctIndex: 0,
    explanation: "G-11 — Shaping creates new behaviors through differential reinforcement of successive approximations to the target response; each attempt must be closer to the target than the previous to earn reinforcement."
  },
  {
    id: 1129,
    topic: "Behavior Change Procedures",
    prompt: "A behavior analyst is teaching a client to make a sandwich. She begins by teaching only the last step (placing the top slice of bread), providing reinforcement after the client completes it, with the analyst completing all prior steps. After the last step is mastered, the analyst completes all steps except the last two, and the client must complete the final two. This method is called:",
    options: [
      "Backward chaining",
      "Forward chaining",
      "Total task presentation",
      "Leap ahead chaining"
    ],
    correctIndex: 0,
    explanation: "G-12 — Backward chaining has the trainer complete all steps except the last one, with the learner completing the final step to receive reinforcement; once mastered, the trainer leaves the final two steps to the learner, and so on, working backward through the chain."
  },
  {
    id: 1130,
    topic: "Behavior Change Procedures",
    prompt: "A BCBA is implementing chaining for a 10-step skill with a client who already has steps 3, 4, and 5 in his repertoire. Using forward chaining, after the client masters step 1 and then steps 1-2, the BCBA allows the client to skip directly to step 6 rather than drilling steps 3-5 individually. This modification is called:",
    options: [
      "Total task presentation",
      "A leap ahead",
      "Backward chaining",
      "Graduated guidance"
    ],
    correctIndex: 1,
    explanation: "G-12 — Leap aheads in chaining allow steps that are already in the client's repertoire to be skipped in training trials, saving time and avoiding unnecessary practice on already mastered steps."
  },
  {
    id: 1131,
    topic: "Behavior Change Procedures",
    prompt: "A therapist is teaching math facts using flash cards. She presents each card, waits for a response, reinforces correct responses, and provides a correction procedure for incorrect ones before presenting the next card. There is a brief inter-trial interval between each card. This procedure is best described as:",
    options: [
      "Discrete trial training (DTT)",
      "Naturalistic teaching",
      "Free-operant arrangement",
      "Total task presentation with backward chaining"
    ],
    correctIndex: 0,
    explanation: "G-13 — Discrete trial training (DTT) consists of an SD, a prompt (if needed), a response, a consequence, and an inter-trial interval; each trial is one opportunity to respond and receive reinforcement or correction — the hallmark of a discrete trial."
  },
  {
    id: 1132,
    topic: "Behavior Change Procedures",
    prompt: "A speech therapist sets preferred toys just out of a child's reach. When the child reaches for a toy, the therapist prompts the child to label the item, then provides access to the toy. This procedure capitalizes on the child's motivation in the moment to teach language. This approach is best described as:",
    options: [
      "Discrete trial training in a structured format",
      "DRH to increase rate of verbal requests",
      "Backward chaining of communication responses",
      "Naturalistic (incidental) teaching using motivating operations"
    ],
    correctIndex: 3,
    explanation: "G-13 — Naturalistic/incidental teaching capitalizes on the child's naturally occurring motivation (MO) by making preferred items accessible only after a communicative response, teaching language in the natural context of the child's interests."
  },
  {
    id: 1133,
    topic: "Behavior Change Procedures",
    prompt: "A teacher tells her class: 'Anyone who finishes their worksheet correctly earns extra recess time.' Only students who meet the criterion individually earn the reward. What type of group contingency is this?",
    options: [
      "Independent group contingency — each student earns the reward based on their own performance",
      "Dependent group contingency — one student's performance determines the group's reward",
      "Hero contingency — one student's exemplary behavior benefits the whole group",
      "Interdependent group contingency — all students must meet the criterion"
    ],
    correctIndex: 0,
    explanation: "G-14 — An independent group contingency (IGC) presents the same contingency to all group members but only those who individually meet the criterion receive reinforcement — the 'everyone for themselves' contingency."
  },
  {
    id: 1134,
    topic: "Behavior Change Procedures",
    prompt: "A teacher tells the class: 'If our class as a whole averages 85% or above on tomorrow's quiz, everyone gets a movie Friday.' Individual scores contribute to the group average, and no one receives the reward unless the group criterion is met. This is a(n):",
    options: [
      "Interdependent group contingency",
      "Dependent group contingency",
      "Independent group contingency",
      "Token economy"
    ],
    correctIndex: 0,
    explanation: "G-14 — An interdependent group contingency requires all members to meet or contribute to a group criterion before any member earns reinforcement — the 'all or none' contingency."
  },
  {
    id: 1135,
    topic: "Behavior Change Procedures",
    prompt: "A BCBA teaches a child to greet adults by saying 'Hello, Mr./Ms. [Name].' To promote generalization, she conducts training sessions with multiple therapists, at home, at school, and in the community. This strategy promotes:",
    options: [
      "Maintenance by thinning the reinforcement schedule",
      "Stimulus generalization by training across multiple exemplars and settings so the behavior occurs with novel people and in novel environments",
      "Response generalization by teaching many different greeting topographies",
      "Backward chaining by starting with the final component of the greeting"
    ],
    correctIndex: 1,
    explanation: "G-15 — Training across multiple settings, trainers, and stimulus conditions promotes stimulus generalization — the behavior occurs in the presence of similar but different stimuli (new people, places) not directly trained."
  },
  {
    id: 1136,
    topic: "Behavior Change Procedures",
    prompt: "A student who was taught to say 'I want the ball please' later begins spontaneously saying 'Can I have the ball?' and 'May I please have the ball?' without these forms being specifically reinforced. This is an example of:",
    options: [
      "Response generalization — emitting functionally equivalent, untrained responses",
      "Stimulus generalization — responding the same way to similar stimuli",
      "Stimulus equivalence — relating trained and untrained stimuli across modalities",
      "Behavioral cusp — opening access to new reinforcement contingencies"
    ],
    correctIndex: 0,
    explanation: "G-15 — Response generalization (also called response induction) occurs when the learner emits functionally equivalent responses that were not directly trained, reflecting a broadening of the response class."
  },
  {
    id: 1137,
    topic: "Behavior Change Procedures",
    prompt: "After successfully reducing a client's self-injurious behavior, a BCBA wants to ensure the behavior does not return once the structured intervention ends. The BCBA begins extending reinforcement intervals, transferring from token reinforcement to naturally occurring praise, and training in multiple settings. These procedures are components of:",
    options: [
      "DRO with extinction",
      "Response blocking and redirection",
      "Procedures to maintain desired behavior change following intervention, including schedule thinning and transfer to natural reinforcers",
      "Functional communication training"
    ],
    correctIndex: 2,
    explanation: "G-16 — Maintaining behavior change after intervention involves schedule thinning (gradually increasing the response requirement for reinforcement) and transferring to naturally occurring reinforcers so behavior is maintained by natural contingencies after the intervention ends."
  },
  {
    id: 1138,
    topic: "Behavior Change Procedures",
    prompt: "A BCBA is using response cost as a behavior reduction procedure. A client loses 2 minutes of free time for each instance of an aggressive behavior. Response cost is best categorized as:",
    options: [
      "Positive punishment — something is added contingent on behavior that decreases its future probability",
      "Negative punishment — something is removed contingent on behavior that decreases its future probability",
      "Negative reinforcement — something is removed contingent on behavior that increases its future probability",
      "Positive reinforcement — something is added contingent on behavior that increases its future probability"
    ],
    correctIndex: 1,
    explanation: "G-17 — Response cost is a negative punishment procedure: a valued stimulus (free time) is removed contingent on the target behavior, decreasing the future probability of that behavior."
  },
  {
    id: 1139,
    topic: "Behavior Change Procedures",
    prompt: "A BCBA implements a continuous punishment schedule for a client's aggressive behavior. After one month, the behavior appears suppressed. The BCBA then removes the punishment procedure. The client's aggression immediately returns to near-baseline levels. This is most likely an example of:",
    options: [
      "Spontaneous recovery — the behavior recurs after punishment has been in place for some time and is then removed",
      "Resistance to extinction, because behavior on continuous schedules extinguishes quickly",
      "Behavioral contrast, because aggression is now occurring in more settings",
      "Extinction burst — an increase in behavior at the onset of extinction"
    ],
    correctIndex: 0,
    explanation: "G-17 — Spontaneous recovery is the return of a previously suppressed behavior when a continuous punishment schedule ends; behaviors punished on continuous schedules are more susceptible to spontaneous recovery than those on intermittent schedules."
  },
  {
    id: 1140,
    topic: "Behavior Change Procedures",
    prompt: "Kevin writes on his school desk. As a consequence, he is required to clean not only his desk but one other desk in the classroom as well. This consequence procedure is best described as:",
    options: [
      "Response cost — removing a preferred item contingent on the behavior",
      "Time-out from positive reinforcement",
      "Restitutional overcorrection — requiring the learner to repair the environmental damage beyond restoring it to its original state",
      "Positive practice overcorrection — practicing the correct behavior repeatedly"
    ],
    correctIndex: 2,
    explanation: "G-17 — Restitutional overcorrection requires the learner to 'fix' what they damaged beyond simply restoring it to the original state; cleaning one's own desk AND another desk goes beyond simple restitution — hence 'over' correction."
  },
  {
    id: 1141,
    topic: "Behavior Change Procedures",
    prompt: "When a BCBA implements an extinction procedure for attention-maintained problem behavior, the client begins crying more intensely and for longer durations at first. The BCBA should interpret this as:",
    options: [
      "Evidence that extinction is not working and should be discontinued",
      "Spontaneous recovery of a previously extinguished behavior",
      "An extinction burst — a temporary increase in the rate, intensity, or duration of behavior at the onset of extinction that is expected and does not indicate failure",
      "Behavioral contrast due to the punishment being applied in one setting"
    ],
    correctIndex: 2,
    explanation: "G-18 — An extinction burst is an expected increase in behavior at the onset of extinction; evaluating the emotional and elicited effects of behavior-change procedures (G-18) includes anticipating and monitoring extinction bursts and other emotional responses as part of the intervention plan."
  },
  {
    id: 1142,
    topic: "Behavior Change Procedures",
    prompt: "During an extinction intervention for escape-maintained behavior, a teacher notices the client is also beginning to avoid activities and becoming more withdrawn in class. This is an example of which unwanted side effect of extinction?",
    options: [
      "Extinction burst — a temporary increase in the target behavior",
      "Spontaneous recovery — return of the behavior after extinction has been in place",
      "Escape/avoidance behavior — when a behavior no longer receives reinforcement, the client may develop escape or avoidance of associated activities",
      "Behavioral contrast — behavior increases in a setting where it is not being extinguished"
    ],
    correctIndex: 2,
    explanation: "G-18 — Evaluating elicited effects of behavior-change procedures (G-18) includes monitoring for escape/avoidance behaviors that may emerge when reinforcement for a behavior is withheld; these are side effects that the BCBA should plan for and address."
  },
  {
    id: 1143,
    topic: "Behavior Change Procedures",
    prompt: "After learning to identify animals from pictures, a child spontaneously identifies real animals at the zoo that were never included in training sessions. This emergent skill — responding to new stimuli based on trained relationships without direct teaching — is best explained by:",
    options: [
      "Response generalization, where the learner produces untrained but functionally equivalent responses",
      "Shaping, where successive approximations led to the new skill",
      "Stimulus equivalence and emergent relations, where trained relationships give rise to untrained stimulus-stimulus connections",
      "Rule-governed behavior, where verbal descriptions control the new responses"
    ],
    correctIndex: 2,
    explanation: "G-19 — Emergent relations arise when trained stimulus-stimulus connections allow the learner to respond to untrained relationships; stimulus equivalence (reflexivity, symmetry, transitivity) underpins the emergence of new responses to untrained stimuli."
  },
  {
    id: 1144,
    topic: "Behavior Change Procedures",
    prompt: "A learner is trained: picture of apple → spoken word 'apple' (A→B). Later, without training, the learner can hear the spoken word 'apple' and select the picture of an apple (B→A). This is an example of which property of stimulus equivalence?",
    options: [
      "Symmetry — if A=B then B=A",
      "Reflexivity — A=A",
      "Transitivity — A=C derived from A=B and B=C",
      "Generalization — responding to untrained similar stimuli"
    ],
    correctIndex: 0,
    explanation: "G-19 — Symmetry in stimulus equivalence means if training establishes A→B, the reverse relation B→A emerges without direct training; this bidirectional relation is one of the three defining properties of stimulus equivalence."
  },
  {
    id: 1145,
    topic: "Behavior Change Procedures",
    prompt: "A learner is trained: written word 'dog' → picture of dog (A→B), and picture of dog → real dog (B→C). Without further training, the learner can now match written word 'dog' → real dog (A→C). This emergent relation demonstrates:",
    options: [
      "Reflexivity — A=A",
      "Symmetry — if A=B then B=A",
      "Transitivity — A=C is derived from the two trained relations A=B and B=C",
      "Generalization — trained stimuli evoke the same response as similar untrained stimuli"
    ],
    correctIndex: 2,
    explanation: "G-19 — Transitivity is the 'leap' property of stimulus equivalence: if A=B and B=C are trained, then A=C emerges without direct training; this is the property that most strongly demonstrates the formation of a stimulus equivalence class."
  },
  {
    id: 1146,
    topic: "Selecting and Implementing Interventions",
    prompt: "A BCBA writes the following goal: 'Marcus will increase appropriate requesting (defined as saying \"I want ___\" or pointing to an item while making eye contact, in a conversational volume) from 0 to at least 10 times per 30-minute session for 3 consecutive sessions.' This goal best demonstrates which task item?",
    options: [
      "H-1 — developing intervention goals in observable and measurable terms",
      "H-3 — selecting a socially valid alternative behavior",
      "H-6 — making data-based decisions about procedural integrity",
      "H-2 — recommending interventions based on scientific evidence"
    ],
    correctIndex: 0,
    explanation: "H-1 — Well-written intervention goals operationally define the target behavior using observable and measurable terms (topography, frequency, criterion, duration), including a clear definition of what counts as an instance of the behavior."
  },
  {
    id: 1147,
    topic: "Selecting and Implementing Interventions",
    prompt: "A BCBA is writing a behavior reduction goal for a client who engages in 'aggression.' Before finalizing the goal, she should ensure that the behavior is defined in observable and measurable terms. Which of the following is the most operationally defined description?",
    options: [
      "Judy will decrease aggressive behavior",
      "Judy will stop being mean to others at school",
      "Judy will decrease acting out and violence in the classroom",
      "Judy will reduce hitting (defined as striking another person with a closed or open hand with enough force to be audible at 3 feet) to zero incidents per week for 2 consecutive weeks"
    ],
    correctIndex: 3,
    explanation: "H-1 — Operational definitions specify observable behavior using topography, intensity, and measurable criteria including a start/stop definition, mastery criterion, and timeline; only option C provides all of these elements."
  },
  {
    id: 1148,
    topic: "Selecting and Implementing Interventions",
    prompt: "A BCBA selects a DRA procedure for a client's attention-maintained challenging behavior because it is supported by multiple research studies, matches the identified function of behavior, and can be implemented by the family with the available resources. This decision-making process reflects:",
    options: [
      "H-4 — planning for unwanted effects of reinforcement procedures",
      "H-5 — planning to mitigate relapse of target behavior",
      "H-2 — identifying and recommending interventions based on assessment results, scientific evidence, client preferences, and contextual fit",
      "H-8 — collaborating with others to support client services"
    ],
    correctIndex: 2,
    explanation: "H-2 — Selecting interventions requires integration of assessment results (function), scientific evidence (research support), client preferences, and contextual fit (available resources, implementer expertise, cultural variables) — the four pillars of H-2."
  },
  {
    id: 1149,
    topic: "Selecting and Implementing Interventions",
    prompt: "A BCBA has been authorized for 4 hours of service per week for a client. During a home visit, the parent says she is too busy to implement procedures during the visit. Considering these resource constraints, the BCBA should:",
    options: [
      "Discharge the client immediately since the parent is not compliant",
      "Design a time-efficient intervention and prioritize communication with the parent about how natural contingencies can maintain behavior without constant BCBA presence",
      "Ignore the resource constraints and implement the most evidence-based procedure available",
      "Design a complex, multi-component intervention requiring intensive daily implementation by the parent"
    ],
    correctIndex: 1,
    explanation: "H-2 — Contextual fit requires selecting interventions that match available resources, including implementer time and willingness; designing parsimonious, family-friendly interventions and identifying natural maintaining contingencies is appropriate when resources are limited."
  },
  {
    id: 1150,
    topic: "Selecting and Implementing Interventions",
    prompt: "A BCBA is working with a client who engages in high-rate head-banging (HB). The team decides to use extinction. Before implementing, the BCBA identifies that learning to communicate 'stop' or 'break please' is a functional alternative that serves the same escape function. Including this replacement behavior is required because:",
    options: [
      "When a behavior is targeted for reduction, an ethical and effective plan must include reinforcement of a socially valid alternative behavior that serves the same function",
      "DRO is not effective for automatically reinforced behavior and requires an alternative",
      "Extinction alone is sufficient, but adding a replacement makes billing easier",
      "The ethical code requires formal written parental consent before implementing any reduction procedure"
    ],
    correctIndex: 0,
    explanation: "H-3 — Any time behavior reduction is proposed, it must include reinforcement for a socially valid, functionally equivalent alternative behavior; selecting a replacement behavior that is already in the repertoire when possible makes the intervention more efficient and ethical."
  },
  {
    id: 1151,
    topic: "Selecting and Implementing Interventions",
    prompt: "A BCBA selects 'learning to read' as an intervention target for a young client with autism because it will open access to many new reinforcement contingencies and learning opportunities throughout the client's life. This type of goal selection reflects which concept?",
    options: [
      "Behavioral cusp — selecting behaviors that open access to new reinforcement contingencies and expand the person's behavioral repertoire",
      "Behavioral momentum — selecting high-probability requests before low-probability requests",
      "Stimulus equivalence — training stimuli that lead to emergent untrained relations",
      "Behavioral contrast — the behavior increases in settings where it is not punished"
    ],
    correctIndex: 0,
    explanation: "H-2 — Behavioral cusps are behaviors that, when learned, open access to new environments, reinforcers, and learning opportunities (like reading); selecting cusp behaviors as intervention targets maximizes the impact of behavior-analytic services."
  },
  {
    id: 1152,
    topic: "Selecting and Implementing Interventions",
    prompt: "A BCBA implements an extinction procedure for a child's crying, which was previously reinforced by attention. During the first week, the child cries more frequently and at higher intensity before the behavior decreases. The BCBA also notices the child has become more aggressive. To mitigate these effects, the BCBA should:",
    options: [
      "Immediately discontinue extinction since the side effects indicate the procedure is harmful",
      "Switch to a DRO procedure, since extinction has no side effects when combined with reinforcement",
      "Anticipate the extinction burst and aggression as expected side effects, continue the program, and ensure caregivers reinforce alternative communicative behaviors consistently",
      "Add a punishment procedure to suppress the extinction burst"
    ],
    correctIndex: 2,
    explanation: "H-4 — Planning for unwanted effects of extinction includes anticipating extinction bursts, emotional/aggressive responses, and escape/avoidance; mitigating these effects requires consistent application of the extinction procedure and reinforcement of alternative behaviors to minimize the duration and intensity of these side effects."
  },
  {
    id: 1153,
    topic: "Selecting and Implementing Interventions",
    prompt: "A parent begins implementing an extinction procedure for their child's tantrum behavior at home, but also uses it inconsistently when they are tired in the evenings. The BCBA explains that inconsistent application during extinction is dangerous because:",
    options: [
      "It will cause behavioral contrast — increasing the behavior in other settings",
      "It creates a conditional discrimination that only the parent can resolve",
      "It reduces the child's motivation to seek reinforcement from other sources",
      "It puts the behavior on an intermittent reinforcement schedule, making it more resistant to extinction and potentially more intense"
    ],
    correctIndex: 3,
    explanation: "H-4 — Inconsistent extinction inadvertently places the behavior on an intermittent schedule, which makes the behavior more resistant to extinction; this is a major unwanted effect that must be mitigated through consistent implementation across all settings and caregivers."
  },
  {
    id: 1154,
    topic: "Selecting and Implementing Interventions",
    prompt: "After a successful intervention reduces a client's self-injurious behavior to near zero, the BCBA observes a significant increase in SIB three months later when the client transitions to a new classroom. The BCBA should identify this as:",
    options: [
      "An extinction burst that should resolve without intervention",
      "Evidence that the original intervention was ineffective",
      "A likely relapse triggered by environmental changes, requiring reassessment and possible reintroduction of intervention components",
      "Behavioral contrast from punishment in the new classroom"
    ],
    correctIndex: 2,
    explanation: "H-5 — Relapse of target behavior can occur when environmental changes disrupt established contingencies; planning for relapse includes identifying potential triggers (like setting changes) and having a plan for re-assessment and reintroduction of intervention elements."
  },
  {
    id: 1155,
    topic: "Selecting and Implementing Interventions",
    prompt: "A BCBA conducts a surprise observation and finds that an RBT is not resetting the DRO interval after occurrences of the target behavior, skipping steps in the DTT correction procedure, and providing reinforcement inconsistently. The BCBA is assessing:",
    options: [
      "Procedural integrity (treatment fidelity) — the extent to which the intervention is being implemented as designed",
      "Treatment generalization — whether behaviors are occurring in untrained settings",
      "Social validity — whether caregivers find the intervention acceptable",
      "Interobserver agreement — the extent to which two observers agree on occurrence of behavior"
    ],
    correctIndex: 0,
    explanation: "H-6 — Procedural integrity (also called treatment fidelity) refers to the degree to which the independent variable (intervention) is implemented as planned; monitoring through observation, checklists, and IOA on procedural steps is essential for data-based decisions about integrity."
  },
  {
    id: 1156,
    topic: "Selecting and Implementing Interventions",
    prompt: "A client has been receiving intervention for 6 weeks. Data show the target behavior has been increasing for 3 consecutive data points rather than decreasing. According to data-based decision making for intervention effectiveness, the BCBA should:",
    options: [
      "Continue the current plan for at least 3 more weeks before evaluating",
      "Review the data trend and consider modifying the intervention — reassess the function, check procedural integrity, and determine if intervention components need adjustment",
      "Discharge the client since the behavior is not responding to treatment",
      "Increase the magnitude of punishment to counteract the increase"
    ],
    correctIndex: 1,
    explanation: "H-7 — Data-based decisions about intervention effectiveness include recognizing when data trends indicate lack of progress or wrong direction, triggering reassessment of function, integrity, and possible modification of the treatment approach."
  },
  {
    id: 1157,
    topic: "Selecting and Implementing Interventions",
    prompt: "A BCBA builds into the behavior plan a rule that if a client scores 80% or above for 2 consecutive days, the team should review the program for advancement to the next level of difficulty. This planned decision rule reflects:",
    options: [
      "H-6 — making data-based decisions about procedural integrity",
      "H-3 — selecting socially valid alternative behaviors",
      "H-4 — planning for unwanted effects of reinforcement",
      "H-7 — making data-based decisions about intervention effectiveness and modification"
    ],
    correctIndex: 3,
    explanation: "H-7 — Pre-establishing decision rules for when to modify, advance, or terminate an intervention based on client data is a key component of making data-based decisions about intervention effectiveness and the need for modification."
  },
  {
    id: 1158,
    topic: "Selecting and Implementing Interventions",
    prompt: "A BCBA is providing services to a child who also receives speech therapy and occupational therapy. The BCBA schedules a team meeting to share assessment data, align goals across disciplines, and coordinate procedures to avoid conflicting contingencies. This practice reflects:",
    options: [
      "H-5 — planning to mitigate relapse",
      "I-2 — establishing effective supervisory relationships",
      "H-8 — collaborating with others to support and enhance client services",
      "H-1 — developing intervention goals in observable terms"
    ],
    correctIndex: 2,
    explanation: "H-8 — Collaborating with other professionals who provide services to the same client, sharing information, and aligning procedures is essential to providing behavior-analytic services that enhance overall client outcomes within a multidisciplinary context."
  },
  {
    id: 1159,
    topic: "Selecting and Implementing Interventions",
    prompt: "A BCBA disagrees with a recommendation made by a child's occupational therapist regarding a 'sensory diet.' The BCBA should:",
    options: [
      "Immediately report the OT to their licensing board for practicing outside their scope",
      "Implement the sensory diet as designed since the OT is the expert in sensory processing",
      "Collaborate with the OT, share behavioral data relevant to the recommendation, address the conflict by compromising when possible, and always prioritize the client's best interest",
      "Refuse to work with the family until the OT's involvement ends"
    ],
    correctIndex: 2,
    explanation: "H-8 — Behavior analysts collaborate with colleagues from other professions in the best interest of clients and stakeholders; conflicts are addressed through compromise and communication while always prioritizing client welfare and documenting actions and outcomes."
  },
  {
    id: 1160,
    topic: "Selecting and Implementing Interventions",
    prompt: "A BCBA is planning an intervention for a client's escape-maintained aggression. The plan includes extinction of aggression, FCT teaching 'break please,' and NCR on a fixed-time 3-minute schedule. Before implementing, the BCBA should also consider:",
    options: [
      "Whether the client meets criteria for ASD, since ABA is only evidence-based for ASD",
      "Whether punishment procedures should be implemented first since they produce faster results",
      "Whether the RBT has a minimum of 3 years of experience",
      "Whether there is a plan to fade the FCT from artificial reinforcement to naturally occurring reinforcement and address potential relapse triggers after intervention"
    ],
    correctIndex: 3,
    explanation: "H-2 and H-5 — A complete intervention plan addresses both immediate procedures and long-term maintenance; planning includes how to fade from contrived to natural reinforcers (G-16) and anticipating/mitigating relapse triggers (H-5) for sustained behavior change."
  },
  {
    id: 1161,
    topic: "Selecting and Implementing Interventions",
    prompt: "A school BCBA is designing an intervention for a student's behavior during math class. The student's math skills are significantly below grade level. The most complete intervention approach would be to:",
    options: [
      "Only implement a behavior reduction plan for the disruptive behavior",
      "Use a group contingency to motivate the entire class",
      "Address the behavior reduction AND recommend academic remediation, since skill deficits may be functioning as establishing operations for escape behavior",
      "Refer the student to special education and discontinue behavior analysis services"
    ],
    correctIndex: 2,
    explanation: "H-2 — Identifying and making environmental changes that reduce the need for behavior-analytic services includes addressing antecedent variables (like skill deficits that make tasks aversive); a complete intervention addresses both the behavior and its antecedent conditions."
  },
  {
    id: 1162,
    topic: "Selecting and Implementing Interventions",
    prompt: "A BCBA sets the following mastery criterion for a client's skill acquisition program: '80% correct across 2 consecutive sessions with 2 different therapists in 2 different settings.' The inclusion of 'different therapists' and 'different settings' in the mastery criterion is intended to:",
    options: [
      "Make the program harder to master so the client qualifies for more services",
      "Increase procedural integrity by having multiple implementers",
      "Satisfy BACB requirements for supervisory ratio",
      "Ensure stimulus generalization is demonstrated before the skill is considered mastered"
    ],
    correctIndex: 3,
    explanation: "H-1 — Including generalization criteria (different people and settings) in mastery criteria ensures that observable and measurable goals reflect real-world utility; skills mastered in only one context may not truly demonstrate functional acquisition."
  },
  {
    id: 1163,
    topic: "Selecting and Implementing Interventions",
    prompt: "A BCBA uses a combination of observation, staff self-assessment checklists, and periodic video review of sessions to evaluate how accurately an RBT is implementing a behavior plan. These methods are used to monitor:",
    options: [
      "Interobserver agreement on the target behavior definition",
      "The client's rate of skill acquisition",
      "Treatment integrity and procedural fidelity of the intervention",
      "The social validity of the intervention goals"
    ],
    correctIndex: 2,
    explanation: "H-6 — Monitoring treatment integrity involves using checklists, observing staff implementation, and reviewing recorded sessions to evaluate the degree to which procedures are implemented as planned — essential for making data-based decisions about procedural integrity."
  },
  {
    id: 1164,
    topic: "Selecting and Implementing Interventions",
    prompt: "A BCBA documents in the behavior support plan that services will be faded and terminated when the client's target behaviors reach zero for 8 consecutive weeks and maintained skills generalize to home and community. This documentation component reflects planning for:",
    options: [
      "H-4 — mitigating unwanted effects of extinction",
      "H-3 — selecting socially valid alternative behaviors",
      "H-2 — recommending interventions based on scientific evidence",
      "H-7 — data-based decisions about effectiveness and the need for modification, including criteria for service continuation and termination"
    ],
    correctIndex: 3,
    explanation: "H-7 — Effective data-based decision making includes pre-establishing criteria for when services should be continued, modified, or terminated; documenting termination criteria in the behavior plan ensures decisions are proactive and data-driven rather than arbitrary."
  },
  {
    id: 1165,
    topic: "Selecting and Implementing Interventions",
    prompt: "A client's caregivers report that the token economy the BCBA implemented works well during sessions but the family does not believe in using external rewards and refuses to implement it at home. The BCBA's best first response is to:",
    options: [
      "Explore the family's concerns, provide education about the difference between bribery and reinforcement, and collaboratively identify natural reinforcers and procedures that align with family values while achieving behavioral goals",
      "Insist on implementing the token economy since it is evidence-based",
      "Discontinue all behavior-analytic services since the family is non-compliant",
      "Implement the token economy during sessions only and accept that home generalization will not occur"
    ],
    correctIndex: 0,
    explanation: "H-2 — Contextual fit includes cultural variables and client/caregiver preferences; when caregivers have philosophical objections, the BCBA should address concerns, provide education, and collaboratively adapt the approach to increase social validity and support implementation."
  },
  {
    id: 1166,
    topic: "Selecting and Implementing Interventions",
    prompt: "A BCBA is setting intervention priorities for a new client. Which of the following criteria should guide the selection of behaviors to target for reduction FIRST?",
    options: [
      "Behaviors that the caregivers find most annoying or inconvenient",
      "Behaviors that are easiest to reduce quickly in order to demonstrate progress",
      "Behaviors that the client most wants to change, regardless of safety concerns",
      "Behaviors that are dangerous to the client or others, or that interfere with learning and access to services"
    ],
    correctIndex: 3,
    explanation: "H-2 — Intervention priorities are guided by safety, learning interference, and function; behaviors posing danger to self or others, or that significantly impede access to learning and services, are prioritized over less impactful behaviors in evidence-based intervention planning."
  },
  {
    id: 1167,
    topic: "Personnel Supervision and Management",
    prompt: "A BCBA-D is explaining the value of using behavior-analytic principles in supervision to a new supervisor trainee. Which of the following best illustrates a benefit of behavior-analytic supervision?",
    options: [
      "It reduces the need for data collection since supervisors can rely on clinical intuition",
      "It eliminates the ethical requirement to document all supervisory activities",
      "It allows supervisors to set goals informally without specifying observable criteria",
      "It improves client outcomes and staff performance and retention by applying the same principles used with clients to the supervisory relationship"
    ],
    correctIndex: 3,
    explanation: "I-1 — Behavior-analytic supervision applies ABA principles to staff management, resulting in improved client outcomes because procedures are implemented correctly, and improved staff performance and retention through contingency-based feedback, goal-setting, and reinforcement."
  },
  {
    id: 1168,
    topic: "Personnel Supervision and Management",
    prompt: "According to BACB requirements, RBTs must receive face-to-face supervision at minimum how frequently, and for what percentage of the time they provide ABA services?",
    options: [
      "Once per month and at least 10% of service hours",
      "Once per week and at least 10% of service hours",
      "At least twice per month and at least 5% of the time spent providing ABA services",
      "Daily and for 100% of service hours"
    ],
    correctIndex: 2,
    explanation: "I-1 — BACB standards require that RBTs receive face-to-face (or video conferencing) supervision at least twice per month and for at least 5% of the total time they have spent providing ABA services in that month."
  },
  {
    id: 1169,
    topic: "Personnel Supervision and Management",
    prompt: "A BCBA is establishing a supervision relationship with a new RBT. They collaboratively create a written document specifying meeting frequency, agenda format, expectations for professional behavior, acceptable response times to communications, and conditions under which the supervision relationship may end. This document is called a:",
    options: [
      "Behavior support plan",
      "Functional assessment report",
      "Supervisory contract",
      "Performance improvement plan"
    ],
    correctIndex: 2,
    explanation: "I-2 — A supervisory contract establishes the structure and expectations of the supervisory relationship, including meeting schedules, communication expectations, professional behavior standards, and termination conditions — a key strategy for establishing effective supervisory relationships."
  },
  {
    id: 1170,
    topic: "Personnel Supervision and Management",
    prompt: "During supervision, a BCBA provides an RBT with only negative feedback about implementation errors without acknowledging correct performance. This approach is problematic because:",
    options: [
      "Balanced feedback — both positive reinforcement for correct performance and constructive feedback for errors — is essential for effective behavior-analytic supervision and staff development",
      "BACB rules prohibit any corrective feedback during supervision",
      "Supervisors should only provide feedback in writing, not verbally",
      "Corrective feedback should only be given after the RBT has been supervised for at least 6 months"
    ],
    correctIndex: 0,
    explanation: "I-2 — Effective supervisory relationships involve giving and accepting feedback that balances positive reinforcement for good performance with constructive corrective feedback; unbalanced criticism without acknowledgment of strengths undermines the relationship and reduces supervisee motivation."
  },
  {
    id: 1171,
    topic: "Personnel Supervision and Management",
    prompt: "A supervisor learns that one of her supervisees comes from a cultural background where direct eye contact with authority figures is considered disrespectful. Rather than interpreting the supervisee's behavior as disengagement, the supervisor adjusts her feedback style and acknowledges this difference in her assessment. This practice reflects:",
    options: [
      "I-4 — selecting supervision goals based on assessments of the supervisee's skills",
      "I-5 — applying performance management procedures to supervisees",
      "I-3 — identifying and implementing methods that promote equity in supervision practices, including cultural humility and competence",
      "I-1 — identifying the benefits of behavior-analytic supervision"
    ],
    correctIndex: 2,
    explanation: "I-3 — Equity in supervision requires cultural humility — ongoing self-reflection about cultural biases — and recognizing that cultural background influences communication styles, decision-making, and behavior; supervisors must adapt their practices to avoid misinterpretation and inequitable treatment."
  },
  {
    id: 1172,
    topic: "Personnel Supervision and Management",
    prompt: "A supervisor notices that two of her supervisees — who have similar experience levels — consistently receive less feedback and fewer advancement opportunities than others on the team. To address this potential inequity, the supervisor should:",
    options: [
      "Provide identical supervision to all supervisees regardless of their individual needs and backgrounds",
      "Reduce supervision for all supervisees to match the reduced level provided to the two affected supervisees",
      "Conduct self-assessment of her own supervisory practices, solicit feedback from supervisees, and address any identified inequities promptly and constructively",
      "Report the situation to the BACB and wait for guidance before taking any action"
    ],
    correctIndex: 2,
    explanation: "I-3 — Promoting equity requires supervisors to regularly assess their own practices, solicit supervisee feedback, identify inequities, and address concerns promptly; this continuous self-monitoring is a key component of equitable supervision."
  },
  {
    id: 1173,
    topic: "Personnel Supervision and Management",
    prompt: "Before selecting supervision goals for a new supervisee, a BCBA observes the supervisee working with clients, reviews their self-assessment checklist, and identifies areas of strength and areas needing improvement. The BCBA also asks about the supervisee's professional goals and cultural background. This process reflects:",
    options: [
      "I-2 — establishing a supervisory contract",
      "I-6 — using functional assessment to identify variables affecting personnel performance",
      "I-4 — selecting supervision goals based on assessment of the supervisee's skills, cultural variables, and environment",
      "I-7 — making data-based decisions about supervisory efficacy"
    ],
    correctIndex: 2,
    explanation: "I-4 — Supervision goals should be individualized based on a thorough assessment of the supervisee's current skill levels, areas for growth, cultural context, and work environment — paralleling the individualized assessment process used with clients."
  },
  {
    id: 1174,
    topic: "Personnel Supervision and Management",
    prompt: "During a supervision session, a BCBA first explains why a skill is important, then provides written and verbal descriptions of the skill, demonstrates it, has the RBT practice it, and provides corrective and positive feedback. This repeated until the RBT performs the skill correctly. This procedure is called:",
    options: [
      "Behavioral Skills Training (BST) — a competency-based training approach using instructions, modeling, rehearsal, and feedback",
      "Backward chaining — teaching the last step of a skill sequence first",
      "Total task presentation — prompting through all steps of a task on every trial",
      "Performance diagnostics — assessing variables affecting staff performance"
    ],
    correctIndex: 0,
    explanation: "I-4 — Competency-based training (Behavioral Skills Training/BST) follows a structured sequence: rationale → written description → verbal description → modeling → practice → feedback → repeat until mastery; this is the gold standard for teaching ABA skills to supervisees."
  },
  {
    id: 1175,
    topic: "Personnel Supervision and Management",
    prompt: "A BCBA supervisor wants to increase an RBT's implementation of praise statements during sessions. The supervisor praises the RBT verbally after sessions with high rates of praise and provides corrective feedback after sessions with low rates. The supervisor is applying which performance management technique?",
    options: [
      "Performance diagnostics — identifying the antecedents and consequences maintaining staff performance",
      "Rule-governed training — giving the RBT a rule to follow",
      "Positive reinforcement and corrective feedback as empirically validated performance management procedures",
      "Shaping through discrimination training"
    ],
    correctIndex: 2,
    explanation: "I-5 — Empirically validated performance management procedures include modeling, practice, feedback, and reinforcement; applying positive reinforcement for correct performance and constructive corrective feedback for errors directly applies ABA principles to staff management."
  },
  {
    id: 1176,
    topic: "Personnel Supervision and Management",
    prompt: "A BCBA notices that an RBT consistently submits session notes late. Rather than assuming the RBT is lazy, the BCBA investigates and discovers the RBT has no reliable access to a device after sessions and is unsure exactly what information to include in notes. The BCBA's approach of investigating antecedents, consequences, and skill deficits before designing an intervention is called:",
    options: [
      "Behavioral skills training",
      "Performance diagnostics or functional assessment approach to identifying variables affecting personnel performance",
      "Interdependent group contingency management",
      "Schedule thinning for staff reinforcement"
    ],
    correctIndex: 1,
    explanation: "I-6 — Using a functional assessment approach (performance diagnostics) to understand why staff are not performing as expected — examining antecedents, consequences, skill deficits, and environmental variables — allows the supervisor to design targeted, effective interventions rather than assuming motivational problems."
  },
  {
    id: 1177,
    topic: "Personnel Supervision and Management",
    prompt: "A supervisor discovers that an RBT's low implementation accuracy is primarily due to unclear written instructions in the behavior support plan rather than lack of skill or motivation. Based on this functional assessment finding, the most appropriate intervention is:",
    options: [
      "Implement a punitive consequence for each implementation error",
      "Provide additional modeling of the entire plan without changing the written instructions",
      "Rewrite the behavior plan with clearer, step-by-step instructions and verify the RBT can follow them accurately",
      "Discharge the RBT and hire a more experienced technician"
    ],
    correctIndex: 2,
    explanation: "I-6 — When performance diagnostics reveal that unclear instructions (antecedent variables) are the primary cause of implementation errors rather than skill deficits, the intervention should address the antecedent by improving the clarity of instructions — a function-based approach to personnel management."
  },
  {
    id: 1178,
    topic: "Personnel Supervision and Management",
    prompt: "A BCBA supervisor evaluates her supervision approach by reviewing client progress data, checking whether supervisees have met their performance goals, and asking supervisees for feedback on the supervision process. She modifies her approach when data suggest she could be more effective. This reflects:",
    options: [
      "I-7 — making data-based decisions about the efficacy of supervisory practices",
      "I-5 — applying performance management procedures to supervisees",
      "I-3 — promoting equity in supervision",
      "I-2 — establishing an effective supervisory relationship"
    ],
    correctIndex: 0,
    explanation: "I-7 — Data-based evaluation of supervision efficacy involves using client outcomes, supervisee performance data, and supervisee feedback to determine whether supervision is achieving its goals, and modifying supervisory methods when data indicate improvements are possible."
  },
  {
    id: 1179,
    topic: "Personnel Supervision and Management",
    prompt: "A BCBA finds that one of her supervisees excels at implementing discrete trial training but struggles with naturalistic teaching. Another supervisee is the opposite. Instead of providing identical supervision to both, the BCBA tailors each supervisee's supervision goals to their individual profiles. This individualized approach is most consistent with:",
    options: [
      "I-1 — identifying benefits of behavior-analytic supervision",
      "I-4 — selecting supervision goals based on assessment of each supervisee's skills, cultural variables, and environment",
      "I-7 — making data-based decisions about supervision efficacy",
      "I-3 — promoting equity in supervision practices"
    ],
    correctIndex: 1,
    explanation: "I-4 — Just as client assessment drives individualized treatment plans, supervisor assessment of each supervisee's unique skill profile, strengths, and areas for growth should drive individualized supervision goals — this is the core of I-4."
  },
  {
    id: 1180,
    topic: "Personnel Supervision and Management",
    prompt: "A BCBA wants to improve an RBT's consistency in collecting data during sessions. The BCBA provides a visual checklist, demonstrates data collection while narrating each step, has the RBT practice with the BCBA observing, and then provides both praise for correct data sheets and written feedback on errors. Two weeks later, the RBT's data accuracy is 95%. The primary active ingredient in this training approach was:",
    options: [
      "The supervisor's authority and the RBT's fear of negative evaluation",
      "The checklist alone, which provided the antecedent for correct data collection",
      "The combination of written instructions, modeling, rehearsal, and feedback (BST/competency-based training)",
      "The 2-week delay between training and evaluation"
    ],
    correctIndex: 2,
    explanation: "I-5 — Behavioral Skills Training (BST) — combining instructions, modeling, rehearsal, and immediate feedback — is the most empirically validated procedure for teaching skills to staff; the multi-component approach addresses both antecedents (instructions, model) and consequences (feedback) for performance."
  },
  {
    id: 1181,
    topic: "Personnel Supervision and Management",
    prompt: "A BCBA discovers that an RBT who was previously performing well has become inconsistent since being assigned to a new client. The BCBA observes a session and notices the RBT seems unsure how to implement the new client's FCT program. The BCBA should:",
    options: [
      "Document the performance issues and present them at the next quarterly review",
      "Conduct a functional assessment of the performance problem to determine if it is a skills deficit, unclear instructions, or insufficient resources, then provide targeted training",
      "Put the RBT on a performance improvement plan immediately",
      "Reassign the RBT to a different client without addressing the root cause"
    ],
    correctIndex: 1,
    explanation: "I-6 — Using a functional assessment approach to personnel performance means identifying the variables (skill deficits, antecedent problems, consequence issues) maintaining the performance problem before designing an intervention; providing targeted training addresses identified skill gaps efficiently."
  },
  {
    id: 1182,
    topic: "Personnel Supervision and Management",
    prompt: "A BCBA uses IOA data (comparing the BCBA's and RBT's client behavior data recorded simultaneously) to determine whether the RBT is recording data accurately. This application of IOA in supervision serves to:",
    options: [
      "Increase the total amount of data collected for research purposes",
      "Evaluate treatment integrity, measurement accuracy, and the consistency of the behavior plan's implementation — informing data-based decisions about supervision efficacy",
      "Satisfy legal requirements for documentation of direct service hours",
      "Replace the need for supervisory observations"
    ],
    correctIndex: 1,
    explanation: "I-7 — IOA data collected alongside supervisees serves multiple purposes: evaluating whether the RBT is recording behavior accurately (observer drift), assessing procedural integrity of the program, and informing data-based decisions about the need for additional training or supervisory adjustments."
  },
  {
    id: 1183,
    topic: "Personnel Supervision and Management",
    prompt: "A BCBA is mentoring a new supervisor trainee. She explains that the goal of behavior-analytic supervision is not only to ensure RBTs implement procedures correctly, but also to promote self-monitoring and self-management in supervisees. Which strategy best promotes this goal?",
    options: [
      "Providing all feedback in writing so supervisees can review it independently",
      "Increasing the frequency of direct observation until supervisees perform independently",
      "Teaching supervisees to use self-monitoring tools (e.g., checklists, session notes) and asking reflective questions so they develop independent evaluation of their own performance",
      "Assigning supervisees to read more research articles about ABA procedures"
    ],
    correctIndex: 2,
    explanation: "I-5 — Performance management procedures include promoting self-monitoring and providing cues to performance so supervisees can evaluate their own work without constant direct supervision; this increases independence and long-term maintenance of skills."
  },
  {
    id: 1184,
    topic: "Personnel Supervision and Management",
    prompt: "A supervisor uses periodic preference assessments to identify what kinds of feedback and recognition each of her RBTs finds most reinforcing. She finds that one RBT prefers public acknowledgment in team meetings, while another prefers written private notes. This practice reflects:",
    options: [
      "Using functional assessment to identify variables affecting personnel performance and applying individualized, culturally responsive reinforcement strategies",
      "DRO — providing reinforcement when the RBT does not make implementation errors",
      "Stimulus control — establishing the supervisor's presence as an SD for correct performance",
      "NCR — providing reinforcement on a fixed-time schedule regardless of RBT performance"
    ],
    correctIndex: 0,
    explanation: "I-6 — Conducting preference assessments with staff and applying individualized reinforcers (aligned with each supervisee's preferences and cultural values) is an application of performance diagnostics and culturally responsive performance management, maximizing the effectiveness of supervision."
  },
  {
    id: 1185,
    topic: "Personnel Supervision and Management",
    prompt: "A BCBA supervises two RBTs who work with different clients. She finds that RBT A's clients are making good progress, but RBT B's clients have shown no improvement for 6 weeks. The BCBA reviews IOA data, session notes, and procedural integrity checklists for both RBTs, then conducts a side-by-side observation. Based on this data, she modifies her supervision approach for RBT B to include more frequent modeling and immediate in-vivo feedback. This process is an example of:",
    options: [
      "I-2 — using a supervisory contract to outline expectations for RBT performance",
      "I-3 — promoting equity by ensuring both RBTs receive the same type of supervision",
      "I-7 — making data-based decisions about the efficacy of supervisory practices and adjusting supervision methods based on client and supervisee outcome data",
      "I-5 — applying modeling as the sole empirically validated performance management procedure"
    ],
    correctIndex: 2,
    explanation: "I-7 — Evaluating client progress data, IOA, and procedural integrity to determine whether supervision is effective — and then modifying the supervisory approach when data indicate insufficient progress — is the essence of making data-based decisions about supervisory efficacy."
  }
];

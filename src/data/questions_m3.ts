import type { Question } from "../types";

// Module 3: PTBA "Pass the Big ABA Exam" Study Manual
export const QUESTIONS_M3: Question[] = 
[
  {
    id: 2001,
    topic: "Behaviorism and Philosophical Foundations",
    prompt: "A behavior analyst explains that the first level of scientific understanding involves organizing and classifying observations of behavior to test for possible relationships. Which level is being described?",
    options: [
      "Control",
      "Prediction",
      "Description",
      "Replication"
    ],
    correctIndex: 2,
    explanation: "A-1 — Description is the first level of scientific understanding, involving organizing and classifying observed events to test for possible relationships.",
    highlight: "lime" as const,
  },
  {
    id: 2002,
    topic: "Behaviorism and Philosophical Foundations",
    prompt: "During a team meeting, a BCBA states: 'We have observed the same relationship between the antecedent and the behavior across 15 sessions, so we can now hypothesize that access to tangibles is the function.' Which level of scientific understanding is the BCBA demonstrating?",
    options: [
      "Description",
      "Control",
      "Prediction",
      "Replication"
    ],
    correctIndex: 2,
    explanation: "A-1 — Prediction (correlation/covariation) is the second level of scientific understanding, in which consistent ABC observations allow a practitioner to hypothesize about function.",
    highlight: "lime" as const,
  },
  {
    id: 2003,
    topic: "Behaviorism and Philosophical Foundations",
    prompt: "A researcher manipulates the independent variable across conditions and demonstrates that only the IV produced changes in the dependent variable. This establishes a functional relationship. Which level of scientific understanding does this represent?",
    options: [
      "Description",
      "Prediction",
      "Replication",
      "Control"
    ],
    correctIndex: 3,
    explanation: "A-1 — Control (causation) is the third and highest level of scientific understanding, in which an experimental demonstration proves that the IV caused the change in the DV.",
    highlight: "lime" as const,
  },
  {
    id: 2004,
    topic: "Behaviorism and Philosophical Foundations",
    prompt: "A behavior analyst assumes that every instance of challenging behavior occurs because of a specific environmental antecedent, and that behavior does not occur spontaneously without cause. Which philosophical assumption is illustrated?",
    options: [
      "Empiricism",
      "Parsimony",
      "Pragmatism",
      "Determinism"
    ],
    correctIndex: 3,
    explanation: "A-2 — Determinism is the assumption that the world is orderly and lawful, and that all behavior is caused by environmental stimuli rather than occurring spontaneously.",
    highlight: "lime" as const,
  },
  {
    id: 2005,
    topic: "Behaviorism and Philosophical Foundations",
    prompt: "Before hypothesizing a mentalistic cause for a client's aggression, a BCBA first rules out all environmental explanations. Which philosophical assumption is the BCBA applying?",
    options: [
      "Selectionism",
      "Parsimony",
      "Determinism",
      "Empiricism"
    ],
    correctIndex: 1,
    explanation: "A-2 — Parsimony requires that the simplest, most logical explanation (environmental variables) be ruled out before entertaining more complex or mentalistic accounts.",
    highlight: "lime" as const,
  },
  {
    id: 2006,
    topic: "Behaviorism and Philosophical Foundations",
    prompt: "During a team meeting, a BCBA argues that a client's self-reported anxiety before therapy sessions is clinically relevant and can be addressed using behavioral principles. A colleague disagrees, stating that only directly observable behaviors should be targeted. Which BCBA's position aligns with radical behaviorism?",
    options: [
      "The colleague, because only publicly observable events count as behavior",
      "The first BCBA, because radical behaviorism treats private events as legitimate subject matter analyzed with the same behavioral principles as overt behavior",
      "Neither, because both verbal reports and private events are excluded from behavioral analysis",
      "The first BCBA, but only if the anxiety can be confirmed through physiological measurement"
    ],
    correctIndex: 1,
    explanation: "A-3 — Radical behaviorism includes private events (covert behavior) as subject matter and analyzes them with the same behavioral principles used for publicly observable behavior.",
    highlight: "lime" as const,
  },
  {
    id: 2007,
    topic: "Behaviorism and Philosophical Foundations",
    prompt: "A client reports feeling anxious before public speaking. From a radical behaviorist perspective, this anxiety should be:",
    options: [
      "Dismissed because it cannot be directly observed by the therapist",
      "Treated as a purely physiological response unrelated to behavior analysis",
      "Analyzed using the same behavioral principles applied to overt behaviors",
      "Considered evidence that the behavior has a biological, not environmental, cause"
    ],
    correctIndex: 2,
    explanation: "A-3 — Radical behaviorism holds that private events (e.g., anxiety) are legitimate subject matter and should be analyzed with the same principles as overt behavior.",
    highlight: "lime" as const,
  },
  {
    id: 2008,
    topic: "Behaviorism and Philosophical Foundations",
    prompt: "A researcher spends her career running tightly controlled studies with pigeons and rats in operant chambers, examining how reinforcement schedules affect response rates and how extinction curves develop. Her work does not involve human participants and focuses on discovering fundamental behavioral laws. She works in which branch of behavior analysis?",
    options: [
      "Applied behavior analysis, because she studies operant behavior",
      "Organizational behavior management, because she measures performance",
      "Experimental analysis of behavior, because she conducts controlled laboratory research on basic behavioral processes",
      "Behaviorism as a philosophy, because she bases her work on Skinner's writings"
    ],
    correctIndex: 2,
    explanation: "A-4 — The experimental analysis of behavior (EAB) involves controlled laboratory research on basic processes and principles, often using non-human subjects.",
    highlight: "lime" as const,
  },
  {
    id: 2009,
    topic: "Behaviorism and Philosophical Foundations",
    prompt: "A BCBA conducts a functional analysis, designs a function-based intervention, collects data, and revises the program based on the data. This best represents which branch of behavior analysis?",
    options: [
      "Experimental analysis of behavior",
      "Behaviorism",
      "Applied behavior analysis",
      "Professional practice"
    ],
    correctIndex: 2,
    explanation: "A-4 — Applied behavior analysis uses principles derived from EAB to improve socially important behavior through assessment-based intervention and data-based decision-making.",
    highlight: "lime" as const,
  },
  {
    id: 2010,
    topic: "Behaviorism and Philosophical Foundations",
    prompt: "A scientist questions even well-replicated findings and remains open to revising conclusions in light of new data. Which feature of behavior analysis as a natural science does this exemplify?",
    options: [
      "Selectionism",
      "Philosophical doubt",
      "Pragmatism",
      "Replication"
    ],
    correctIndex: 1,
    explanation: "A-5 — Philosophical doubt requires a continuously critical eye on research results and openness to being wrong, reflecting science as a self-correcting enterprise.",
    highlight: "lime" as const,
  },
  {
    id: 2011,
    topic: "Concepts and Principles",
    prompt: "A teacher observes that her student waves hello, blows kisses, and gives thumbs-up signs when greeting people. Although these behaviors look different, they all serve the same social function. These behaviors are best described as:",
    options: [
      "A response class",
      "A stimulus class",
      "Topographically identical responses",
      "Separate and unrelated behaviors"
    ],
    correctIndex: 0,
    explanation: "B-1 — A response class is a group of behaviors that share the same function; members may look topographically different but are strengthened or weakened collectively.",
    highlight: "blue" as const,
  },
  {
    id: 2012,
    topic: "Concepts and Principles",
    prompt: "A client claps his hands one time. This single instance of the behavior is best referred to as a:",
    options: [
      "Behavior",
      "Response",
      "Response class",
      "Repertoire"
    ],
    correctIndex: 1,
    explanation: "B-1 — A response is a single instance of behavior and is the measurable unit of analysis in behavior analysis.",
    highlight: "blue" as const,
  },
  {
    id: 2013,
    topic: "Concepts and Principles",
    prompt: "A group of stimuli that all evoke the same response but do not share common physical features — such as the words 'fifty percent,' '0.5,' '1/2,' and '½' — belongs to which type of stimulus class?",
    options: [
      "Formal stimulus class",
      "Feature stimulus class",
      "Functional stimulus class",
      "Arbitrary stimulus class"
    ],
    correctIndex: 3,
    explanation: "B-2 — An arbitrary stimulus class is a group of stimuli that evoke the same response but do not share a common physical feature; membership is established through stimulus equivalence.",
    highlight: "blue" as const,
  },
  {
    id: 2014,
    topic: "Concepts and Principles",
    prompt: "A child automatically blinks when a puff of air is directed at her eye. This behavior is best characterized as:",
    options: [
      "An operant behavior shaped by reinforcement history",
      "A respondent behavior elicited by an unconditioned stimulus",
      "A conditioned response resulting from prior pairing",
      "A rule-governed behavior under verbal control"
    ],
    correctIndex: 1,
    explanation: "B-3 — Respondent behavior is reflexive and involuntary, elicited by an unconditioned stimulus (US) without prior learning history.",
    highlight: "blue" as const,
  },
  {
    id: 2015,
    topic: "Concepts and Principles",
    prompt: "After a child repeatedly hears a bell just before receiving food, the bell alone begins to elicit salivation. The bell has become a:",
    options: [
      "Discriminative stimulus",
      "Unconditioned stimulus",
      "Conditioned stimulus",
      "Motivating operation"
    ],
    correctIndex: 2,
    explanation: "B-3 — In respondent conditioning, a neutral stimulus paired repeatedly with an unconditioned stimulus acquires the ability to elicit the conditioned response and is called a conditioned stimulus (CS).",
    highlight: "blue" as const,
  },
  {
    id: 2016,
    topic: "Concepts and Principles",
    prompt: "A student raises her hand in class, is called on by the teacher, and subsequently raises her hand more often. The teacher calling on her functions as:",
    options: [
      "Negative reinforcement because attention was added",
      "Positive reinforcement because a stimulus was added and the behavior increased",
      "Positive punishment because a stimulus was added",
      "Negative punishment because the student's behavior was suppressed"
    ],
    correctIndex: 1,
    explanation: "B-4 — Positive reinforcement occurs when a behavior is followed immediately by the addition of a stimulus that increases the future occurrence of that behavior.",
    highlight: "blue" as const,
  },
  {
    id: 2017,
    topic: "Concepts and Principles",
    prompt: "A child screams every time demands are presented. When screaming occurs, demands are removed and the child's screaming increases over time. This scenario best illustrates:",
    options: [
      "Positive reinforcement — access to tangibles",
      "Negative punishment — loss of preferred item",
      "Negative reinforcement — escape from demands",
      "Positive punishment — adding an aversive stimulus"
    ],
    correctIndex: 2,
    explanation: "B-4 — Negative reinforcement involves the removal of an aversive stimulus (demands) contingent on behavior, resulting in an increase in that behavior (escape contingency).",
    highlight: "blue" as const,
  },
  {
    id: 2018,
    topic: "Concepts and Principles",
    prompt: "A parent begins sending their child to time-out every time the child hits a sibling. Over the next two weeks, hitting decreases significantly. Time-out in this scenario is functioning as:",
    options: [
      "Negative reinforcement",
      "Positive punishment",
      "Negative punishment",
      "Extinction"
    ],
    correctIndex: 2,
    explanation: "B-5 — Negative punishment involves the removal of a stimulus contingent on behavior, resulting in a decrease in that behavior. Time-out removes access to reinforcement.",
    highlight: "blue" as const,
  },
  {
    id: 2019,
    topic: "Concepts and Principles",
    prompt: "A teenager is given extra chores every time he talks back to his parents. His talking back decreases. The extra chores are functioning as:",
    options: [
      "Positive reinforcement",
      "Negative reinforcement",
      "Positive punishment",
      "Negative punishment"
    ],
    correctIndex: 2,
    explanation: "B-5 — Positive punishment occurs when a behavior is followed by the addition of a stimulus (extra chores) that decreases the future occurrence of that behavior.",
    highlight: "blue" as const,
  },
  {
    id: 2020,
    topic: "Concepts and Principles",
    prompt: "A client engages in head-banging that produces sensory stimulation in the absence of any social consequence. This behavior is most likely maintained by:",
    options: [
      "Socially mediated positive reinforcement",
      "Socially mediated negative reinforcement",
      "Automatic reinforcement",
      "Conditioned punishment"
    ],
    correctIndex: 2,
    explanation: "B-6 — Automatic reinforcement occurs when the behavior produces its own reinforcement independent of the behavior of others (sensory stimulation in this case).",
    highlight: "blue" as const,
  },
  {
    id: 2021,
    topic: "Concepts and Principles",
    prompt: "An RBT pairs herself with edible reinforcers during initial sessions so that the client begins to enjoy spending time with her. The RBT is attempting to become a:",
    options: [
      "Unconditioned reinforcer",
      "Generalized conditioned reinforcer",
      "Conditioned reinforcer",
      "Unconditioned punisher"
    ],
    correctIndex: 2,
    explanation: "B-7 — A conditioned reinforcer is a previously neutral stimulus that acquires reinforcing properties through pairing with an established reinforcer (stimulus-stimulus pairing).",
    highlight: "blue" as const,
  },
  {
    id: 2022,
    topic: "Concepts and Principles",
    prompt: "A classroom teacher gives students a plastic chip each time they complete an assignment. At the end of the week, chips can be exchanged for any of 12 backup rewards: extra recess, a homework pass, classroom jobs, snacks, or free reading time. Because multiple different students earn chips consistently regardless of their current preferences, the chips are functioning as:",
    options: [
      "Unconditioned reinforcers, because all students find them naturally valuable",
      "Generalized conditioned reinforcers, because they have been paired with multiple backup reinforcers and do not depend on a specific motivating operation",
      "Simple conditioned reinforcers, because they only work within the classroom",
      "Primary reinforcers, because they consistently motivate behavior"
    ],
    correctIndex: 1,
    explanation: "B-7 — Generalized conditioned reinforcers (like tokens/money) have been paired with an unlimited number of reinforcers and do not depend on a specific MO for their effectiveness.",
    highlight: "blue" as const,
  },
  {
    id: 2023,
    topic: "Concepts and Principles",
    prompt: "A supervisor receives a reprimand from her manager every time she submits a report late. Over the next month, her late submissions decrease. The reprimand is functioning as a:",
    options: [
      "Unconditioned punisher",
      "Generalized conditioned punisher",
      "Conditioned punisher",
      "Generalized conditioned reinforcer"
    ],
    correctIndex: 2,
    explanation: "B-8 — A conditioned punisher is a previously neutral stimulus (e.g., reprimand) that decreases behavior because of its prior pairing with other punishers.",
    highlight: "blue" as const,
  },
  {
    id: 2024,
    topic: "Concepts and Principles",
    prompt: "A client is on a schedule where every fifth correct response produces reinforcement, with no post-reinforcement pause. A high, steady rate of responding is observed. Which schedule is in effect?",
    options: [
      "Fixed ratio 5",
      "Variable ratio 5",
      "Fixed interval 5",
      "Variable interval 5"
    ],
    correctIndex: 1,
    explanation: "B-9 — Variable ratio schedules produce a high, steady rate of responding without a post-reinforcement pause because the next response may immediately produce reinforcement.",
    highlight: "blue" as const,
  },
  {
    id: 2025,
    topic: "Concepts and Principles",
    prompt: "A teacher reinforces a student's correct math answers after every 10 responses. The student pauses briefly after each reinforcer and then picks up speed toward the next reinforcer. This pattern is characteristic of:",
    options: [
      "Variable ratio schedule",
      "Fixed interval schedule",
      "Fixed ratio schedule",
      "Variable interval schedule"
    ],
    correctIndex: 2,
    explanation: "B-9 — Fixed ratio schedules produce a post-reinforcement pause followed by a high 'run' of responding until the next reinforcer is delivered.",
    highlight: "blue" as const,
  },
  {
    id: 2026,
    topic: "Concepts and Principles",
    prompt: "A BCBA sets up two work areas in a therapy room: a blue station with a card-sorting task on a VI 1-minute schedule, and a red station with a matching task on a VR 10 schedule. The client can freely switch between tasks at any time and earn reinforcers from whichever station they are at. This arrangement is called a:",
    options: [
      "Multiple schedule, because two different schedules are in place",
      "Chained schedule, because the client must complete one task before accessing the other",
      "Concurrent schedule, because two or more schedules are simultaneously available and the client can choose between behaviors",
      "Mixed schedule, because no discriminative stimuli are present to signal the schedules"
    ],
    correctIndex: 2,
    explanation: "B-10 — A concurrent schedule of reinforcement involves two or more schedules available simultaneously for two or more behaviors, each signaled by its own SP, allowing choice.",
    highlight: "blue" as const,
  },
  {
    id: 2027,
    topic: "Concepts and Principles",
    prompt: "A practitioner stops providing attention when a client engages in attention-maintained tantrum behavior. The tantrums gradually decrease. This procedure is an example of:",
    options: [
      "Respondent extinction",
      "Negative punishment",
      "Operant extinction",
      "Differential reinforcement"
    ],
    correctIndex: 2,
    explanation: "B-11 — Operant extinction involves withholding the maintaining reinforcer (attention) when the target behavior occurs, resulting in a decrease in the behavior over time.",
    highlight: "blue" as const,
  },
  {
    id: 2028,
    topic: "Concepts and Principles",
    prompt: "A child developed a fear response (heart racing, crying) to the sound of fire alarms after a frightening school evacuation drill. Her teacher began briefly sounding a small alarm each day during a calm, enjoyable activity without any emergency or follow-up consequence. After several weeks, the alarm sound no longer triggered the child's fear response. This process is best described as:",
    options: [
      "Operant extinction, because the fear behavior was no longer reinforced",
      "Respondent extinction, because the CS was repeatedly presented without the US, eliminating the conditioned response",
      "Stimulus discrimination, because the child learned to distinguish between alarm types",
      "Response generalization, because the calm response spread to other previously feared stimuli"
    ],
    correctIndex: 1,
    explanation: "B-11 — Respondent extinction involves unpairing the CS and US, causing the CS to return to neutral stimulus status and lose its ability to elicit the conditioned response.",
    highlight: "blue" as const,
  },
  {
    id: 2029,
    topic: "Concepts and Principles",
    prompt: "A child correctly identifies her teacher's name when the teacher is present but not in the teacher's absence. The teacher's presence has acquired the ability to control this verbal behavior. This is an example of:",
    options: [
      "Response generalization",
      "Motivating operation",
      "Stimulus control",
      "Respondent conditioning"
    ],
    correctIndex: 2,
    explanation: "B-12 — Stimulus control exists when a discriminated operant occurs reliably in the presence of the SD and not in its absence.",
    highlight: "blue" as const,
  },
  {
    id: 2030,
    topic: "Concepts and Principles",
    prompt: "A child learns to say 'dog' only in the presence of dogs and not in the presence of cats or birds. This behavioral outcome reflects:",
    options: [
      "Stimulus generalization",
      "Response generalization",
      "Stimulus discrimination",
      "Behavioral momentum"
    ],
    correctIndex: 2,
    explanation: "B-13 — Stimulus discrimination is the outcome of reinforcement in the presence of the SD and extinction in the presence of other stimuli, resulting in differential responding.",
    highlight: "blue" as const,
  },
  {
    id: 2031,
    topic: "Concepts and Principles",
    prompt: "After being taught to label a golden retriever as 'dog,' a child also correctly labels a poodle and a Great Dane as 'dog' without specific training. This is an example of:",
    options: [
      "Response generalization",
      "Stimulus discrimination",
      "Stimulus generalization",
      "Behavioral momentum"
    ],
    correctIndex: 2,
    explanation: "B-14 — Stimulus generalization occurs when a response trained in the presence of one stimulus also occurs in the presence of novel but similar stimuli.",
    highlight: "blue" as const,
  },
  {
    id: 2032,
    topic: "Concepts and Principles",
    prompt: "A child who was taught to say 'ball' in response to seeing a football spontaneously begins saying 'round,' 'throw it,' and 'touchdown' in the presence of the same stimulus. This illustrates:",
    options: [
      "Stimulus generalization",
      "Response generalization",
      "Stimulus discrimination",
      "Observational learning"
    ],
    correctIndex: 1,
    explanation: "B-14 — Response generalization occurs when a person exhibits novel, untrained responses that are functionally equivalent to trained responses in the presence of the same stimulus.",
    highlight: "blue" as const,
  },
  {
    id: 2033,
    topic: "Concepts and Principles",
    prompt: "Skills acquired during an ABA intervention continue to be performed independently six months after services have ended. This outcome is best described as:",
    options: [
      "Stimulus generalization",
      "Response maintenance",
      "Response generalization",
      "Behavioral momentum"
    ],
    correctIndex: 1,
    explanation: "B-15 — Response maintenance describes the lasting change in behavior; the extent to which behavior remains in a client's repertoire over time beyond treatment.",
    highlight: "blue" as const,
  },
  {
    id: 2034,
    topic: "Concepts and Principles",
    prompt: "A client has not eaten for several hours. As a result, the value of food as a reinforcer increases and food-seeking behavior increases. The state of food deprivation is functioning as:",
    options: [
      "A discriminative stimulus",
      "An unconditioned punisher",
      "A motivating operation",
      "A conditioned reinforcer"
    ],
    correctIndex: 2,
    explanation: "B-16 — A motivating operation (MO) alters the value of a reinforcer and the current frequency of behavior evoked by that reinforcer; deprivation is a common establishing operation.",
    highlight: "blue" as const,
  },
  {
    id: 2035,
    topic: "Concepts and Principles",
    prompt: "A person goes to McDonald's when they are hungry AND see the golden arches. The golden arches signal that food is available, while hunger creates the want for food. Which statement best describes this scenario?",
    options: [
      "The golden arches are an MO and hunger is the SD",
      "Hunger is the SD and the golden arches are the MO",
      "Hunger is the MO and the golden arches are the SD",
      "Both hunger and the golden arches are unconditioned reinforcers"
    ],
    correctIndex: 2,
    explanation: "B-17 — MOs alter the value of reinforcers (hunger increases the value of food), while SDs signal the availability of reinforcement (the golden arches signal food is available there).",
    highlight: "blue" as const,
  },
  {
    id: 2036,
    topic: "Concepts and Principles",
    prompt: "A practitioner tells a new employee, 'If you always arrive on time and complete your reports by Friday, your performance review will be excellent.' The employee begins arriving on time despite no immediate consequence. This behavior is best described as:",
    options: [
      "Contingency-shaped behavior",
      "Rule-governed behavior",
      "Respondent behavior",
      "Automatic reinforcement"
    ],
    correctIndex: 1,
    explanation: "B-18 — Rule-governed behavior is controlled by a verbal description of a contingency (the rule) rather than direct contact with an immediate consequence.",
    highlight: "blue" as const,
  },
  {
    id: 2037,
    topic: "Concepts and Principles",
    prompt: "A client asks for a cookie by pointing to the cookie jar. The client's pointing response is reinforced when the therapist gives the cookie. The pointing behavior is best classified as a:",
    options: [
      "Tact",
      "Intraverbal",
      "Mand",
      "Echoic"
    ],
    correctIndex: 2,
    explanation: "B-19 — A mand is a verbal operant under the control of a motivating operation in which the response produces the specific reinforcer specified by the mand.",
    highlight: "blue" as const,
  },
  {
    id: 2038,
    topic: "Concepts and Principles",
    prompt: "A child sees a dog and says 'dog.' There is no MO for the dog, and the child receives social praise for the correct label. This verbal operant is best classified as a:",
    options: [
      "Mand",
      "Tact",
      "Intraverbal",
      "Echoic"
    ],
    correctIndex: 1,
    explanation: "B-19 — A tact is a verbal operant occasioned by a nonverbal stimulus (seeing a dog) in which the response is reinforced by generalized conditioned reinforcement (praise).",
    highlight: "blue" as const,
  },
  {
    id: 2039,
    topic: "Concepts and Principles",
    prompt: "A therapist says 'What do you do at a park?' and the client responds 'I play on the swings.' The therapist's question is the verbal antecedent and the client's response has no formal similarity to the verbal stimulus. This verbal operant is a:",
    options: [
      "Echoic",
      "Tact",
      "Mand",
      "Intraverbal"
    ],
    correctIndex: 3,
    explanation: "B-19 — An intraverbal is a verbal operant controlled by a verbal antecedent with no point-to-point correspondence between the stimulus and the response.",
    highlight: "blue" as const,
  },
  {
    id: 2040,
    topic: "Concepts and Principles",
    prompt: "A behavior analyst determines that a client's requesting behavior is strong in therapy sessions but never occurs at home, even when the same items are present. Using the matching law, this suggests that:",
    options: [
      "The behavior is under genetic control and unlikely to change",
      "Reinforcement is available at a higher rate in therapy than at home",
      "The client's behavior is maintained by automatic reinforcement at home",
      "The behavior at home is under a different unconditioned reinforcer"
    ],
    correctIndex: 1,
    explanation: "B-23 — The matching law states that organisms allocate responding proportionally to the relative rate of reinforcement; higher responding in therapy reflects higher reinforcement availability there.",
    highlight: "blue" as const,
  },
  {
    id: 2041,
    topic: "Concepts and Principles",
    prompt: "A trainer models waving and the client immediately waves back with formal similarity to the model. No other cue was given. This is an example of:",
    options: [
      "Observational learning",
      "Intraverbal behavior",
      "Imitation",
      "Stimulus control"
    ],
    correctIndex: 2,
    explanation: "B-24 — Imitation requires a model, formal similarity between the model and the response, immediacy, and that the model be the controlling variable for the response.",
    highlight: "blue" as const,
  },
  {
    id: 2042,
    topic: "Concepts and Principles",
    prompt: "A child watches another student receive a sticker for completing her worksheet, then completes his own worksheet without being told to. This learning occurred without the child directly experiencing the consequence. This is best described as:",
    options: [
      "Imitation training",
      "Observational learning",
      "Echoic behavior",
      "Rule-governed behavior"
    ],
    correctIndex: 1,
    explanation: "B-24 — Observational learning occurs when a person experiences another's behavior and its consequence and uses that information to decide whether to engage in the same behavior.",
    highlight: "blue" as const,
  },
  {
    id: 2043,
    topic: "Measurement, Data Display, and Interpretation",
    prompt: "A practitioner defines 'aggression' as any instance of hitting, kicking, or biting, regardless of intensity, as long as it makes physical contact. This type of operational definition is:",
    options: [
      "Topography-based",
      "Function-based",
      "Product-based",
      "Interval-based"
    ],
    correctIndex: 0,
    explanation: "C-1 — A topography-based operational definition defines behavior by its physical form/structure rather than by the effect it has on the environment.",
    highlight: "green" as const,
  },
  {
    id: 2044,
    topic: "Measurement, Data Display, and Interpretation",
    prompt: "A BCBA asks a parent to complete a rating scale about the frequency of their child's tantrums over the past month. This form of data collection is best described as:",
    options: [
      "Direct measurement",
      "Product measurement",
      "Indirect measurement",
      "Event recording"
    ],
    correctIndex: 2,
    explanation: "C-2 — Indirect measurement involves a secondhand account of behavior; it is used when the behavior cannot be or is not measured as it is occurring.",
    highlight: "green" as const,
  },
  {
    id: 2045,
    topic: "Measurement, Data Display, and Interpretation",
    prompt: "A practitioner reviews completed math worksheets to determine how many problems a student solved correctly during independent work time. This measurement approach is an example of:",
    options: [
      "Direct measurement",
      "Indirect measurement",
      "Product measurement",
      "Momentary time sampling"
    ],
    correctIndex: 2,
    explanation: "C-2 — Product measurement (permanent product recording) involves measuring the environmental changes produced by behavior after it has occurred.",
    highlight: "green" as const,
  },
  {
    id: 2046,
    topic: "Measurement, Data Display, and Interpretation",
    prompt: "A therapist records that a client emitted 24 correct tacts during a 30-minute session. Which measure of occurrence is being reported?",
    options: [
      "Rate",
      "Count",
      "Celeration",
      "Duration"
    ],
    correctIndex: 1,
    explanation: "C-3 — Count is a simple measure of the number of occurrences of a behavior; rate requires dividing count by the observation period.",
    highlight: "green" as const,
  },
  {
    id: 2047,
    topic: "Measurement, Data Display, and Interpretation",
    prompt: "A behavior analyst reports that a client emitted 12 self-injurious behaviors per hour across three sessions. Which dimensional quantity is being reported?",
    options: [
      "Count",
      "Duration",
      "Rate",
      "Latency"
    ],
    correctIndex: 2,
    explanation: "C-3 — Rate is a measure of the number of occurrences of a behavior divided by the observation time, reported as behaviors per unit of time.",
    highlight: "green" as const,
  },
  {
    id: 2048,
    topic: "Measurement, Data Display, and Interpretation",
    prompt: "A clinician measures the total time a client spends engaged in stereotypy across a session. The clinician is measuring which dimension of behavior?",
    options: [
      "Latency",
      "Interresponse time",
      "Duration",
      "Magnitude"
    ],
    correctIndex: 2,
    explanation: "C-4 — Duration measures the total elapsed time from the start to the end of a behavior and reflects the temporal extent dimension.",
    highlight: "green" as const,
  },
  {
    id: 2049,
    topic: "Measurement, Data Display, and Interpretation",
    prompt: "A practitioner measures the time elapsed between the presentation of a demand and the client's initiation of the task. This is a measure of:",
    options: [
      "Duration",
      "Latency",
      "Interresponse time",
      "Rate"
    ],
    correctIndex: 1,
    explanation: "C-4 — Latency measures the time between the onset of an antecedent stimulus (SD) and the initiation of the response.",
    highlight: "green" as const,
  },
  {
    id: 2050,
    topic: "Measurement, Data Display, and Interpretation",
    prompt: "During a 10-minute observation, an observer records whether a target behavior is occurring or not occurring at the end of each 1-minute interval. Which measurement procedure is being used?",
    options: [
      "Partial interval recording",
      "Whole interval recording",
      "Momentary time sampling",
      "Event recording"
    ],
    correctIndex: 2,
    explanation: "C-5 — Momentary time sampling involves recording whether behavior is occurring at the exact moment each interval ends, rather than throughout the interval.",
    highlight: "green" as const,
  },
  {
    id: 2051,
    topic: "Measurement, Data Display, and Interpretation",
    prompt: "A data collector records a '+' if the target behavior occurred at any point during a 15-second interval, even if only for one second. This is:",
    options: [
      "Whole interval recording",
      "Momentary time sampling",
      "Partial interval recording",
      "Event recording"
    ],
    correctIndex: 2,
    explanation: "C-5 — Partial interval recording scores a '+' if the behavior occurs at any point during the interval; it tends to overestimate the occurrence of behavior.",
    highlight: "green" as const,
  },
  {
    id: 2052,
    topic: "Measurement, Data Display, and Interpretation",
    prompt: "Two observers independently record a client's hitting behavior. Observer 1 records 10 instances; Observer 2 records 8 instances. Using the smaller-over-larger formula, the IOA is:",
    options: [
      "80%",
      "90%",
      "75%",
      "85%"
    ],
    correctIndex: 0,
    explanation: "C-8 — Total count IOA = smaller count ÷ larger count × 100 = 8 ÷ 10 × 100 = 80%.",
    highlight: "green" as const,
  },
  {
    id: 2053,
    topic: "Measurement, Data Display, and Interpretation",
    prompt: "A BCBA is choosing between partial interval recording and momentary time sampling for a behavior that occurs at a very high rate for long durations. Which measurement system would LEAST distort the true prevalence of the behavior?",
    options: [
      "Partial interval recording, because it captures any occurrence",
      "Momentary time sampling, because it produces less overestimation",
      "Whole interval recording, because it requires the behavior throughout the interval",
      "Event recording, because it counts each instance"
    ],
    correctIndex: 1,
    explanation: "C-9 — Momentary time sampling produces less overestimation for high-rate, long-duration behaviors compared to partial interval recording, which consistently overestimates.",
    highlight: "green" as const,
  },
  {
    id: 2054,
    topic: "Measurement, Data Display, and Interpretation",
    prompt: "On a line graph, data points within a condition show sharp zig-zagging up and down with large differences between consecutive points. This is best described as:",
    options: [
      "A stable trend",
      "High variability",
      "An ascending level",
      "Low celeration"
    ],
    correctIndex: 1,
    explanation: "C-11 — Variability is the degree to which data bounce around on a graph; acute angles and large differences between consecutive data points indicate high variability.",
    highlight: "green" as const,
  },
  {
    id: 2055,
    topic: "Measurement, Data Display, and Interpretation",
    prompt: "A behavior analyst draws a split-middle line of progress through a data series and finds that the data are consistently above the line in the treatment phase. This visual analysis suggests:",
    options: [
      "No change from baseline",
      "A descending trend suggesting the behavior is decreasing",
      "An ascending trend suggesting the behavior is increasing",
      "High variability with no clear trend"
    ],
    correctIndex: 2,
    explanation: "C-11 — A split-middle line of progress reveals trends in data; consistent data points above the line indicate an ascending (accelerating) trend.",
    highlight: "green" as const,
  },
  {
    id: 2056,
    topic: "Measurement, Data Display, and Interpretation",
    prompt: "A practitioner compares the level, trend, and variability of data in adjacent phases of a graph to determine whether an intervention was effective. This process is called:",
    options: [
      "Social validity assessment",
      "Visual analysis",
      "Parametric analysis",
      "IOA calculation"
    ],
    correctIndex: 1,
    explanation: "C-12 — Visual analysis involves examining graphed data for changes in level, trend, and variability within and between conditions to interpret the effects of an intervention.",
    highlight: "green" as const,
  },
  {
    id: 2057,
    topic: "Measurement, Data Display, and Interpretation",
    prompt: "In a graph, the data in the baseline phase are stable and then immediately change following the introduction of the intervention. This immediate change in level between phases provides evidence of:",
    options: [
      "Replication",
      "High variability",
      "A functional relationship",
      "Poor interobserver agreement"
    ],
    correctIndex: 2,
    explanation: "C-12 — An immediate change in level between baseline and intervention phases, especially when replicated, is a key indicator of a functional relationship in visual analysis.",
    highlight: "green" as const,
  },
  {
    id: 2058,
    topic: "Experimental Design",
    prompt: "A researcher establishes stable baseline data, introduces an intervention, removes it, and reintroduces it. Behavior changes systematically with each manipulation. This design is a:",
    options: [
      "Multiple baseline design",
      "Multielement design",
      "Reversal (ABAB) design",
      "Changing criterion design"
    ],
    correctIndex: 2,
    explanation: "D-5 — The reversal (ABAB) design involves introducing, withdrawing, and reintroducing the IV; systematic behavior change across phases demonstrates a functional relationship.",
    highlight: "magenta" as const,
  },
  {
    id: 2059,
    topic: "Experimental Design",
    prompt: "A BCBA wants to evaluate an intervention for self-injury but believes that withdrawing treatment would be unethical because the behavior is dangerous. Which experimental design is most appropriate?",
    options: [
      "Reversal design",
      "Multiple baseline design",
      "Alternating treatments design",
      "Multielement design"
    ],
    correctIndex: 1,
    explanation: "D-5 — The multiple baseline design does not require withdrawal of treatment, making it ethically appropriate for dangerous behaviors or those likely to be irreversible.",
    highlight: "magenta" as const,
  },
  {
    id: 2060,
    topic: "Experimental Design",
    prompt: "An intervention is applied sequentially to three different behaviors for the same participant. Each new behavior's baseline remains stable until the intervention is introduced. This is a:",
    options: [
      "Multiple baseline across settings",
      "Multiple baseline across behaviors",
      "Changing criterion design",
      "Multielement design"
    ],
    correctIndex: 1,
    explanation: "D-7 — A multiple baseline across behaviors examines the effects of one IV on two or more different behaviors for the same participant.",
    highlight: "magenta" as const,
  },
  {
    id: 2061,
    topic: "Experimental Design",
    prompt: "A researcher rapidly alternates between two different interventions across sessions, with each condition signaled by a different color card. Results show clearly differentiated data paths. This design is a:",
    options: [
      "Reversal design",
      "Changing criterion design",
      "Multiple baseline design",
      "Multielement (alternating treatments) design"
    ],
    correctIndex: 3,
    explanation: "D-7 — The multielement (alternating treatments) design rapidly alternates between conditions and uses discriminative stimuli to signal each condition, allowing direct comparison.",
    highlight: "magenta" as const,
  },
  {
    id: 2062,
    topic: "Experimental Design",
    prompt: "A practitioner uses a design to gradually increase a student's reading fluency criterion from 20 to 50 words per minute across phases. Each phase serves as a baseline for the next. This is a:",
    options: [
      "Reversal design",
      "Multiple baseline design",
      "Changing criterion design",
      "Comparative analysis"
    ],
    correctIndex: 2,
    explanation: "D-7 — A changing criterion design involves systematic and incremental changes in a performance criterion across phases; it is ideal for shaping behavior within a single response topography.",
    highlight: "magenta" as const,
  },
  {
    id: 2063,
    topic: "Experimental Design",
    prompt: "A researcher observes a client's disruptive classroom behavior for two weeks before introducing a new intervention. The baseline data form a stable, flat line at approximately 12 disruptions per day. The researcher states: 'Based on this data, we can project that disruptions would continue at approximately 12 per day if we changed nothing.' This statement reflects which element of baseline logic?",
    options: [
      "Verification, because the data confirm the researcher's original hypothesis",
      "Replication, because the pattern has been repeated across multiple observation sessions",
      "Prediction, because stable baseline data allow the researcher to project future responding in the absence of the IV",
      "Affirmation of the consequent, because a change followed the introduction of the baseline condition"
    ],
    correctIndex: 2,
    explanation: "D-4 — Prediction is the baseline logic element in which stable responding in the baseline phase implies that behavior would continue at the same level without the IV.",
    highlight: "magenta" as const,
  },
  {
    id: 2064,
    topic: "Experimental Design",
    prompt: "After implementing an IV, responding changes in the predicted direction. Removing the IV and seeing behavior return to baseline levels most directly demonstrates which element of baseline logic?",
    options: [
      "Prediction",
      "Affirmation of the consequent",
      "Replication",
      "Verification"
    ],
    correctIndex: 3,
    explanation: "D-4 — Verification occurs when removing the IV causes behavior to return to baseline levels, confirming that the behavior change was caused by the IV.",
    highlight: "magenta" as const,
  },
  {
    id: 2065,
    topic: "Experimental Design",
    prompt: "A researcher conducts a study comparing two different token economy systems to determine which produces higher academic engagement. This type of analysis is a:",
    options: [
      "Component analysis",
      "Comparative analysis",
      "Parametric analysis",
      "Functional analysis"
    ],
    correctIndex: 1,
    explanation: "D-8 — A comparative analysis directly compares two or more independent treatments to determine which IV is most effective.",
    highlight: "magenta" as const,
  },
  {
    id: 2066,
    topic: "Experimental Design",
    prompt: "A researcher varies the number of tokens required for a backup reinforcer across conditions to identify the optimal requirement. This is an example of a:",
    options: [
      "Component analysis",
      "Comparative analysis",
      "Parametric analysis",
      "Reversal design"
    ],
    correctIndex: 2,
    explanation: "D-8 — A parametric analysis examines the effects of different values or parameters of the same IV to identify the most effective value.",
    highlight: "magenta" as const,
  },
  {
    id: 2067,
    topic: "Experimental Design",
    prompt: "A BCBA needs to determine which components of a treatment package are active ingredients. She systematically removes one component at a time and measures behavior change. This is a:",
    options: [
      "Comparative analysis",
      "Parametric analysis",
      "Component analysis",
      "Reversal design"
    ],
    correctIndex: 2,
    explanation: "D-8 — A component analysis isolates the active treatment components in a package by systematically adding or removing elements.",
    highlight: "magenta" as const,
  },
  {
    id: 2068,
    topic: "Experimental Design",
    prompt: "A BCBA introduces a new visual schedule intervention for a child with autism and observes a rapid drop in problem behavior. A skeptical colleague questions whether the improvement was caused by the intervention or by something else occurring at the same time, such as the child maturing or the family making changes at home. What would most directly strengthen the argument that the intervention itself caused the change?",
    options: [
      "Collecting the same data from a large group of children with similar diagnoses",
      "Replicating the same effect across multiple conditions, phases, or participants",
      "Ensuring all data were collected by a trained observer with high interobserver agreement",
      "Demonstrating that the child generalized the improvement to settings where the schedule was not used"
    ],
    correctIndex: 1,
    explanation: "D-3 — Internal validity (demonstration of a functional relationship) is strengthened by replication of the effect within and across participants or conditions in single-case research.",
    highlight: "magenta" as const,
  },
  {
    id: 2069,
    topic: "Experimental Design",
    prompt: "A researcher notes that participants in a study change their behavior simply because they know they are being observed. This threat to validity is known as:",
    options: [
      "History",
      "Maturation",
      "Reactivity",
      "Instrumentation"
    ],
    correctIndex: 2,
    explanation: "D-2 — Reactivity occurs when participants alter their behavior because of awareness that their behavior is being observed, threatening the internal validity of the study.",
    highlight: "magenta" as const,
  },
  {
    id: 2070,
    topic: "Experimental Design",
    prompt: "A researcher wants to evaluate the generality of a newly developed teaching procedure across multiple populations and settings. The ability to extend findings beyond the original study is a question of:",
    options: [
      "Internal validity",
      "External validity",
      "Social validity",
      "Treatment fidelity"
    ],
    correctIndex: 1,
    explanation: "D-9 — External validity refers to the degree to which findings from a study can be generalized or extended to other participants, settings, and behaviors.",
    highlight: "magenta" as const,
  },
  {
    id: 2071,
    topic: "Ethical and Professional Issues",
    prompt: "A BCBA receives a request from a school district (a third party) to provide behavioral services for a student. According to the BACB Ethics Code, the BCBA must ensure that:",
    options: [
      "The school district approves all intervention decisions without parental consultation",
      "The parent or legally authorized representative is informed of the rationale and scope of services",
      "All data collected are shared only with the school district and not the parents",
      "Services can begin immediately without a signed service agreement"
    ],
    correctIndex: 1,
    explanation: "E-1 — Code Standard 3.09 requires that when services are provided at the request of a third party for a minor, the parent or LAR must be informed of the rationale and scope of services.",
    highlight: "ethics" as const,
  },
  {
    id: 2072,
    topic: "Ethical and Professional Issues",
    prompt: "A BCBA begins providing services without first obtaining a signed service agreement. According to the Ethics Code, this is problematic because:",
    options: [
      "Services cannot be legally billed without a signed agreement",
      "The service agreement ensures informed consent and outlines responsibilities of all parties",
      "The BCBA cannot submit data without the agreement on file",
      "Only BCaBAs need signed service agreements"
    ],
    correctIndex: 1,
    explanation: "E-1 — Code Standard 3.04 requires a signed service agreement before implementing services, outlining responsibilities, scope of services, and the BCBA's ethical obligations.",
    highlight: "ethics" as const,
  },
  {
    id: 2073,
    topic: "Ethical and Professional Issues",
    prompt: "A BCBA discovers she has been unintentionally operating outside her area of competence by serving a client with a dual diagnosis she has no training in. The most ethical course of action is to:",
    options: [
      "Continue services because the client has already made progress",
      "Discontinue services immediately without discussing with stakeholders",
      "Obtain appropriate training, supervision, or refer the client to a competent professional",
      "Ask the RBT to handle all sessions that involve the unfamiliar diagnosis"
    ],
    correctIndex: 2,
    explanation: "E-2 — Code Standard 1.05 requires behavior analysts to practice only within their scope of competence and to seek appropriate training/supervision or refer when working in new areas.",
    highlight: "ethics" as const,
  },
  {
    id: 2074,
    topic: "Ethical and Professional Issues",
    prompt: "A BCBA makes a clinical error that negatively affects a client. According to the Ethics Code, the BCBA should:",
    options: [
      "Conceal the error to protect the client's trust in services",
      "Immediately address the error, first in the best interest of the client, then in the interest of relevant parties",
      "Wait until the next scheduled team meeting to disclose the error",
      "Only disclose the error if requested by the funding source"
    ],
    correctIndex: 1,
    explanation: "E-3 — Code Standard 1.03 on Accountability requires behavior analysts to directly address errors, first in the best interest of clients and then in the interest of relevant parties.",
    highlight: "ethics" as const,
  },
  {
    id: 2075,
    topic: "Ethical and Professional Issues",
    prompt: "A parent offers a BCBA a $25 gift card as a thank-you at the end of a session. According to the Ethics Code, the BCBA should:",
    options: [
      "Accept the gift card because it was given freely",
      "Accept it only if the parent also gives gifts to all team members",
      "Decline it because it exceeds the monetary value threshold permitted by the Ethics Code",
      "Accept it if the BCBA has not received any other gifts that year"
    ],
    correctIndex: 2,
    explanation: "E-5 — Code Standard 1.12 prohibits accepting gifts with a monetary value of more than $10 USD; the $25 gift card exceeds this threshold.",
    highlight: "ethics" as const,
  },
  {
    id: 2076,
    topic: "Ethical and Professional Issues",
    prompt: "A BCBA who supervised a trainee for two years ends the supervisory relationship. Three months later, the BCBA considers dating the former trainee. According to the Ethics Code, this is:",
    options: [
      "Acceptable because the supervision relationship has ended",
      "Not permissible until at least six months have passed since the relationship ended and all professional duties are complete",
      "Acceptable because romantic relationships with former trainees are always permitted",
      "Permissible only if the trainee is now a certified BCBA"
    ],
    correctIndex: 1,
    explanation: "E-5 — Code Standard 1.14 prohibits romantic relationships with former supervisees until the professional relationship has ended and at least six months have passed.",
    highlight: "ethics" as const,
  },
  {
    id: 2077,
    topic: "Ethical and Professional Issues",
    prompt: "A BCBA realizes that a colleague is implementing a procedure that appears to be harmful to a client. According to the Ethics Code, the BCBA's first step should be to:",
    options: [
      "Report the colleague immediately to the BACB",
      "Ignore it if the colleague has more years of experience",
      "Address the issue directly with the colleague before escalating",
      "Only act if the client or family makes a formal complaint"
    ],
    correctIndex: 2,
    explanation: "E-6 — The Ethics Code encourages behavior analysts to address concerns directly with the involved party first before escalating to formal reporting channels.",
    highlight: "ethics" as const,
  },
  {
    id: 2078,
    topic: "Ethical and Professional Issues",
    prompt: "A BCBA is also a close personal friend of the mother of one of her clients. The BCBA has noticed that this personal relationship sometimes affects her clinical judgment. Which ethical concept does this represent?",
    options: [
      "Practicing outside scope of competence",
      "Multiple relationship and conflict of interest",
      "Violation of informed consent",
      "Misrepresentation of credentials"
    ],
    correctIndex: 1,
    explanation: "E-7 — Code Standard 1.11 defines a multiple relationship as a co-mingling of professional and personal roles that may create a conflict of interest impairing professional judgment.",
    highlight: "ethics" as const,
  },
  {
    id: 2079,
    topic: "Ethical and Professional Issues",
    prompt: "A BCBA discovers a multiple relationship with a supervisee that cannot be resolved immediately. According to the Ethics Code, the BCBA's next steps should include:",
    options: [
      "Continue as normal until a natural resolution occurs",
      "Identify conflicts, take action to minimize risks, create a plan to resolve it, and document all steps taken",
      "Terminate the supervisory relationship immediately without any plan",
      "Disclose the relationship only if the supervisee requests it"
    ],
    correctIndex: 1,
    explanation: "E-7 — Code Standard 1.11 requires identifying the conflict, minimizing risks, planning to resolve the multiple relationship, and documenting all actions taken.",
    highlight: "ethics" as const,
  },
  {
    id: 2080,
    topic: "Ethical and Professional Issues",
    prompt: "A BCBA is asked to present data and conclusions from a study in a way that overstates the effectiveness of an intervention to satisfy a funder. Complying would violate which ethical principle?",
    options: [
      "Cultural humility",
      "Scope of competence",
      "Scientific integrity and truthfulness",
      "Financial agreements"
    ],
    correctIndex: 2,
    explanation: "E-3 — Behavior analysts must maintain scientific integrity; misrepresenting findings to satisfy funders violates the principle of truthfulness in reporting.",
    highlight: "ethics" as const,
  },
  {
    id: 2081,
    topic: "Ethical and Professional Issues",
    prompt: "A behavior analyst is working with a client whose cultural practices conflict with the proposed intervention. The most ethical response is to:",
    options: [
      "Proceed with the intervention because clinical effectiveness supersedes cultural differences",
      "Incorporate cultural humility by modifying the intervention to respect cultural values while achieving goals",
      "Transfer the client to a different provider without explanation",
      "Ask the RBT to address cultural concerns during sessions"
    ],
    correctIndex: 1,
    explanation: "E-8 — Cultural humility and responsiveness require behavior analysts to modify practices to respect clients' cultural values while still achieving meaningful clinical goals.",
    highlight: "ethics" as const,
  },
  {
    id: 2082,
    topic: "Ethical and Professional Issues",
    prompt: "A BCBA is preparing to discontinue services because the client is no longer benefiting. According to the Ethics Code, which of the following must the BCBA do?",
    options: [
      "Immediately stop all services and notify the insurance company",
      "Facilitate a safe transition of services and notify all relevant stakeholders",
      "Only document the discontinuation in the clinical file",
      "Wait for the client's family to request service termination first"
    ],
    correctIndex: 1,
    explanation: "E-6 — Code Standard 3.15 (Appropriately Discontinuing Services) requires behavior analysts to facilitate continuity of care and notify all relevant parties before discontinuing services.",
    highlight: "ethics" as const,
  },
  {
    id: 2083,
    topic: "Ethical and Professional Issues",
    prompt: "Supervision documentation under the Ethics Code must be retained for a minimum of:",
    options: [
      "Two years",
      "Three years",
      "Five years",
      "Seven years"
    ],
    correctIndex: 3,
    explanation: "E-9 — The BACB Ethics Code and Code Standard 4.10 require that supervision documentation be retained for at least seven years.",
    highlight: "ethics" as const,
  },
  {
    id: 2084,
    topic: "Ethical and Professional Issues",
    prompt: "A BCBA's supervisor tells her to falsify supervision hours to help her complete her fieldwork more quickly. The BCBA should:",
    options: [
      "Comply because the supervisor has authority over the supervisee",
      "Refuse and report the coercion to the appropriate authority",
      "Comply only if the hours missed were due to unplanned absences",
      "Complete the hours retroactively and sign the document"
    ],
    correctIndex: 1,
    explanation: "E-9 — Code Standard 1.13 prohibits coercive relationships; supervisees should refuse requests to falsify documentation and report unethical behavior through appropriate channels.",
    highlight: "ethics" as const,
  },
  {
    id: 2085,
    topic: "Ethical and Professional Issues",
    prompt: "A BCBA plans to use an intrusive behavior-reduction procedure with a client. Before implementing it, the BCBA must:",
    options: [
      "Ensure that all less restrictive alternatives have been considered first",
      "Obtain only verbal consent from the caregiver",
      "Implement the procedure and then seek permission",
      "Wait until the behavior reaches crisis level"
    ],
    correctIndex: 0,
    explanation: "E-10 — The least restrictive alternative principle requires that behavior analysts consider and document why less restrictive procedures are insufficient before implementing intrusive ones.",
    highlight: "ethics" as const,
  },
  {
    id: 2086,
    topic: "Ethical and Professional Issues",
    prompt: "A client's behavior improves significantly but the BCBA continues services without re-evaluating goals. This most directly violates the ethical obligation to:",
    options: [
      "Use the least restrictive procedure available",
      "Continuously evaluate and modify the intervention plan based on client data",
      "Avoid multiple relationships that create conflicts of interest",
      "Facilitate referrals when services are no longer needed"
    ],
    correctIndex: 1,
    explanation: "E-11 — Code Standard 2.15 requires behavior analysts to continuously evaluate the intervention plan and modify goals and procedures as indicated by data.",
    highlight: "ethics" as const,
  },
  {
    id: 2087,
    topic: "Ethical and Professional Issues",
    prompt: "A BCBA allows a client's goals to remain unchanged for over a year despite data showing mastery of several targets. This failure to update goals represents a problem with:",
    options: [
      "Social validity",
      "Ongoing evaluation and treatment planning",
      "Interobserver agreement",
      "Informed consent"
    ],
    correctIndex: 1,
    explanation: "E-11 — Ongoing evaluation requires behavior analysts to regularly review data and update the intervention plan, including mastered goals and emerging treatment targets.",
    highlight: "ethics" as const,
  },
  {
    id: 2088,
    topic: "Ethical and Professional Issues",
    prompt: "A BCBA describes proposed behavior-change procedures in writing to the parent before implementation and updates the parent in writing each time a new procedure is introduced. This reflects:",
    options: [
      "The principle of least restrictive treatment",
      "The ethical requirement to describe behavior-change procedures in writing and update caregivers with each change",
      "The requirement to obtain a signed service agreement before services begin",
      "The concept of social validity"
    ],
    correctIndex: 1,
    explanation: "E-12 — Code Standard 2.16 requires behavior analysts to describe behavior-change procedures in writing and to update that description each time a new procedure is introduced or modified.",
    highlight: "ethics" as const,
  },
  {
    id: 2089,
    topic: "Ethical and Professional Issues",
    prompt: "A BCBA notices that environmental conditions in a client's home are creating safety hazards that interfere with service delivery. According to the Ethics Code, the BCBA should:",
    options: [
      "Continue services until the family addresses the hazard on their own",
      "Actively identify the conditions, attempt to remove or minimize them, and document the situation and actions taken",
      "Only address safety issues if a formal complaint is filed",
      "Delegate the concern to the RBT on the case"
    ],
    correctIndex: 1,
    explanation: "E-6 — Code Standard 2.19 requires behavior analysts to actively address environmental conditions interfering with service delivery, including documenting conditions and actions taken.",
    highlight: "ethics" as const,
  },
  {
    id: 2090,
    topic: "Ethical and Professional Issues",
    prompt: "A BCBA has been treating a client for 18 months and the client has met all goals. There is no new clinical need. The most appropriate ethical action is to:",
    options: [
      "Continue services indefinitely to ensure maintenance",
      "Appropriately discontinue services and facilitate a safe transition of care",
      "Add new goals without consulting the family to justify continued services",
      "Reduce service hours by 50% without notifying stakeholders"
    ],
    correctIndex: 1,
    explanation: "E-6 — Code Standard 3.15 requires behavior analysts to appropriately discontinue services when goals have been met and continued services are no longer warranted.",
    highlight: "ethics" as const,
  },
  {
    id: 2091,
    topic: "Behavior Assessment",
    prompt: "A BCBA conducts an interview with a parent and reviews previous records to gather information about a client's challenging behavior before observing it directly. This process is best described as part of:",
    options: [
      "Functional analysis",
      "Indirect functional behavior assessment",
      "Direct observation functional behavior assessment",
      "Preference assessment"
    ],
    correctIndex: 1,
    explanation: "F-1 — Indirect FBA methods include interviews, checklists, and rating scales that gather information about behavior without direct observation of the behavior as it occurs.",
    highlight: "orange" as const,
  },
  {
    id: 2092,
    topic: "Behavior Assessment",
    prompt: "A practitioner observes a client in the natural environment, recording antecedents and consequences each time the target behavior occurs over several sessions. This is a:",
    options: [
      "Functional analysis",
      "Indirect assessment",
      "Descriptive assessment",
      "Preference assessment"
    ],
    correctIndex: 2,
    explanation: "F-2 — A descriptive assessment (direct FBA) involves observing and recording the ABCs of behavior in the natural environment as the behavior occurs.",
    highlight: "orange" as const,
  },
  {
    id: 2093,
    topic: "Behavior Assessment",
    prompt: "A BCBA systematically manipulates antecedent and consequence conditions to isolate the function of a client's self-injurious behavior. This is best described as a:",
    options: [
      "Descriptive assessment",
      "Indirect assessment",
      "Functional analysis",
      "Scatterplot assessment"
    ],
    correctIndex: 2,
    explanation: "F-6 — A functional analysis (FA) involves experimental manipulation of antecedent and consequence conditions to establish a functional relationship between environmental variables and behavior.",
    highlight: "orange" as const,
  },
  {
    id: 2094,
    topic: "Behavior Assessment",
    prompt: "During a functional analysis, a client's self-injurious behavior is highest during the demand condition and lowest during the free play condition. This pattern most likely indicates the behavior is maintained by:",
    options: [
      "Access to attention",
      "Automatic reinforcement",
      "Negative reinforcement (escape from demands)",
      "Access to tangibles"
    ],
    correctIndex: 2,
    explanation: "F-6 — In an FA, high rates during the contingent escape (demand) condition and low rates in free play indicate that the behavior is maintained by negative reinforcement (escape).",
    highlight: "orange" as const,
  },
  {
    id: 2095,
    topic: "Behavior Assessment",
    prompt: "A client's behavior occurs equally across all FA conditions including the control, producing what looks like a spider-web graph pattern. This result is called:",
    options: [
      "Differentiated results",
      "Escape-maintained behavior",
      "Automatic reinforcement function",
      "Undifferentiated results"
    ],
    correctIndex: 3,
    explanation: "F-6 — Undifferentiated FA results occur when behavior is elevated across all conditions; this pattern suggests an automatic reinforcement function.",
    highlight: "orange" as const,
  },
  {
    id: 2096,
    topic: "Behavior Assessment",
    prompt: "A BCBA uses free-operant and trial-based preference assessment methods to identify potential reinforcers before designing a reinforcement program. This process is called:",
    options: [
      "Functional analysis",
      "Stimulus preference assessment",
      "Scatterplot recording",
      "Direct observation"
    ],
    correctIndex: 1,
    explanation: "F-5 — Stimulus preference assessments use systematic methods (e.g., free-operant, paired-stimulus, multiple-stimulus) to identify stimuli that may function as reinforcers.",
    highlight: "orange" as const,
  },
  {
    id: 2097,
    topic: "Behavior Assessment",
    prompt: "A BCBA uses a grid to record whether challenging behavior occurs or does not occur during each hour of the day across several days. Patterns of behavior cluster between 9–11 a.m. and during transitions. This assessment is called a:",
    options: [
      "Functional analysis",
      "Scatterplot",
      "ABC recording",
      "Permanent product measure"
    ],
    correctIndex: 1,
    explanation: "F-3 — A scatterplot is an indirect tool that reveals patterns of behavior across time of day and settings, helping identify antecedent variables associated with behavior.",
    highlight: "orange" as const,
  },
  {
    id: 2098,
    topic: "Behavior Assessment",
    prompt: "A BCBA identifies that a client's behavior of arguing occurs primarily around homework time and rarely during play. Based on this assessment, interventions should:",
    options: [
      "Target the behavior during play to extinguish it in all contexts",
      "Be function-based and address the identified antecedent conditions around homework",
      "Ignore the behavior during homework because it is situational",
      "Focus exclusively on punishment-based procedures"
    ],
    correctIndex: 1,
    explanation: "F-4 — Assessment findings should directly inform function-based intervention planning that addresses the specific antecedent conditions associated with the behavior.",
    highlight: "orange" as const,
  },
  {
    id: 2099,
    topic: "Behavior Assessment",
    prompt: "During skills assessment, a BCBA identifies behaviors that, when taught, are likely to result in collateral improvements across many other skill areas. These behaviors are known as:",
    options: [
      "Terminal behaviors",
      "Pivotal behaviors",
      "Response chains",
      "Prerequisite skills"
    ],
    correctIndex: 1,
    explanation: "F-8 — Pivotal behaviors are behaviors that, when acquired, produce collateral improvements in many other untrained skills and areas of development.",
    highlight: "orange" as const,
  },
  {
    id: 2100,
    topic: "Behavior Assessment",
    prompt: "A behavior analyst measures a client's baseline performance on a task analysis to identify which steps are already in the client's repertoire and which require instruction. This process is part of:",
    options: [
      "Functional analysis",
      "Skills assessment",
      "IOA calculation",
      "Preference assessment"
    ],
    correctIndex: 1,
    explanation: "F-7 — Skills assessment involves evaluating a client's current repertoire to identify skill deficits and strengths, which directly informs goal selection and instructional planning.",
    highlight: "orange" as const,
  },
  {
    id: 2101,
    topic: "Behavior Assessment",
    prompt: "A BCBA conducts a reinforcer assessment using a progressive ratio schedule and records the breaking point for each tested stimulus. The breaking point is most useful for:",
    options: [
      "Identifying the least preferred stimulus",
      "Ranking the relative strength or value of potential reinforcers",
      "Establishing extinction conditions",
      "Determining the function of the target behavior"
    ],
    correctIndex: 1,
    explanation: "F-5 — In a progressive ratio schedule reinforcer assessment, the breaking point indicates how hard a client will work for a stimulus, allowing reinforcers to be ranked by relative value.",
    highlight: "orange" as const,
  },
  {
    id: 2102,
    topic: "Behavior-Change Procedures",
    prompt: "A BCBA designs a plan where a highly preferred activity (computer games) is made contingent on completing homework. This arrangement uses which principle?",
    options: [
      "Negative reinforcement contingency",
      "The Premack Principle",
      "Escape extinction",
      "Differential reinforcement of low rates"
    ],
    correctIndex: 1,
    explanation: "G-1 — The Premack Principle (or high-probability behavior contingency) states that a high-probability behavior can be used to reinforce a low-probability behavior.",
    highlight: "purple" as const,
  },
  {
    id: 2103,
    topic: "Behavior-Change Procedures",
    prompt: "A behavior analyst provides reinforcement for any behavior that is an alternative to the problem behavior, regardless of its topography. This is most consistent with:",
    options: [
      "DRO (differential reinforcement of other behavior)",
      "DRL (differential reinforcement of low rates)",
      "DRA (differential reinforcement of alternative behavior)",
      "DRH (differential reinforcement of high rates)"
    ],
    correctIndex: 2,
    explanation: "G-2 — DRA involves reinforcing a specific alternative behavior that is incompatible with or serves as a replacement for the problem behavior.",
    highlight: "purple" as const,
  },
  {
    id: 2104,
    topic: "Behavior-Change Procedures",
    prompt: "A practitioner delivers reinforcement at the end of each 5-minute interval during which zero instances of the target behavior occurred. This is:",
    options: [
      "DRA",
      "DRL",
      "DRO",
      "DRH"
    ],
    correctIndex: 2,
    explanation: "G-2 — DRO (differential reinforcement of other behavior) delivers reinforcement at the end of an interval in which the target behavior did not occur.",
    highlight: "purple" as const,
  },
  {
    id: 2105,
    topic: "Behavior-Change Procedures",
    prompt: "A client engages in attention-maintained self-injury. To reduce the motivation for self-injury, the BCBA decides to deliver brief, warm social attention to the client every 3 minutes throughout the session — regardless of whether self-injury has occurred or not. Even if self-injury occurs between deliveries, the schedule does not change. The BCBA is implementing:",
    options: [
      "Differential reinforcement of other behavior, because the BCBA is monitoring periods without self-injury",
      "Non-contingent reinforcement, because reinforcement is delivered on a time-based schedule independent of the occurrence of any specific behavior",
      "A fixed ratio schedule, because the interval between deliveries is set at a constant rate",
      "Functional communication training, because the intervention involves teaching the client an alternative way to access attention"
    ],
    correctIndex: 1,
    explanation: "G-3 — Non-contingent reinforcement (NCR) / time-based reinforcement delivers reinforcers on a fixed or variable time schedule independent of the individual's behavior.",
    highlight: "purple" as const,
  },
  {
    id: 2106,
    topic: "Behavior-Change Procedures",
    prompt: "A practitioner teaches a client to request a break using a communication device instead of engaging in elopement, and then reinforces only the communication response. This procedure is called:",
    options: [
      "Incidental teaching",
      "Functional communication training",
      "Shaping",
      "Chaining"
    ],
    correctIndex: 1,
    explanation: "G-1 — Functional communication training (FCT) replaces challenging behavior by teaching and reinforcing a communicative alternative that contacts the same maintaining reinforcement.",
    highlight: "purple" as const,
  },
  {
    id: 2107,
    topic: "Behavior-Change Procedures",
    prompt: "A residential ABA program uses a point system in which clients earn points throughout the day for completing self-care routines, following house rules, and participating in therapy. Each evening, clients can spend their points from a store menu offering 15 different rewards — snacks, phone time, movie night, outings, and more. The points function as:",
    options: [
      "Unconditioned reinforcers, because all clients find them naturally motivating without any learning history",
      "Generalized conditioned reinforcers, because they have been paired with many different backup reinforcers and are effective regardless of any single MO",
      "Simple conditioned reinforcers, because they only work within the residential program",
      "Automatic reinforcers, because they produce consequences without direct staff involvement"
    ],
    correctIndex: 1,
    explanation: "G-4 — Tokens in a token economy function as generalized conditioned reinforcers because they have been paired with multiple backup reinforcers and can be exchanged like money.",
    highlight: "purple" as const,
  },
  {
    id: 2108,
    topic: "Behavior-Change Procedures",
    prompt: "A BCBA manipulates the value of a preferred item by withholding it before a session to increase its reinforcing effectiveness. The BCBA is using:",
    options: [
      "A stimulus delta",
      "A discriminative stimulus procedure",
      "A motivating operation",
      "A conditioned reinforcer procedure"
    ],
    correctIndex: 2,
    explanation: "G-5 — Manipulating MOs (specifically establishing operations) by depriving a client of a preferred item increases the value of that item as a reinforcer before the session.",
    highlight: "purple" as const,
  },
  {
    id: 2109,
    topic: "Behavior-Change Procedures",
    prompt: "A practitioner teaches a client to respond correctly when shown a red card but not when shown a blue card. Over many trials, the client learns to discriminate between the two stimuli. This is:",
    options: [
      "Stimulus generalization training",
      "Simple discrimination training",
      "Response generalization training",
      "Backward chaining"
    ],
    correctIndex: 1,
    explanation: "G-6 — Simple discrimination training involves reinforcing behavior in the presence of the SD (red card) and extinguishing it in the presence of the SA (blue card).",
    highlight: "purple" as const,
  },
  {
    id: 2110,
    topic: "Behavior-Change Procedures",
    prompt: "A child is taught that touching the red button is correct only when the yellow light is on, but not when the green light is on. This involves learning a relationship between multiple stimuli and is called:",
    options: [
      "Simple discrimination",
      "Conditional discrimination",
      "Stimulus generalization",
      "Response generalization"
    ],
    correctIndex: 1,
    explanation: "G-6 — A conditional discrimination requires responding differently based on the relationship between multiple stimuli (the correct response depends on the context provided by another stimulus).",
    highlight: "purple" as const,
  },
  {
    id: 2111,
    topic: "Behavior-Change Procedures",
    prompt: "A trainer physically guides a client's hand through the correct response immediately after presenting a cue, before the client has the opportunity to make an error. This is an example of:",
    options: [
      "Least-to-most prompting",
      "Errorless learning with most-to-least prompting",
      "Stimulus fading",
      "Graduated guidance"
    ],
    correctIndex: 1,
    explanation: "G-7 — Errorless learning involves presenting the prompt immediately with the cue (before errors can occur); starting with the most intrusive prompt reflects most-to-least prompting.",
    highlight: "purple" as const,
  },
  {
    id: 2112,
    topic: "Behavior-Change Procedures",
    prompt: "A trainer presents the natural SD, waits 5 seconds for the client to respond independently, and only provides the prompt if no correct response is initiated. This prompt fading strategy is called:",
    options: [
      "Stimulus fading",
      "Most-to-least prompting",
      "Progressive prompt delay",
      "Graduated guidance"
    ],
    correctIndex: 2,
    explanation: "G-8 — Progressive (or constant) prompt delay involves inserting a time delay between the SD and the prompt, transferring stimulus control to the natural antecedent over time.",
    highlight: "purple" as const,
  },
  {
    id: 2113,
    topic: "Behavior-Change Procedures",
    prompt: "A practitioner reinforces only successive approximations toward a target behavior that does not yet exist in the client's repertoire. Each new criterion is slightly closer to the terminal behavior. This procedure is:",
    options: [
      "Chaining",
      "Imitation training",
      "Shaping",
      "Prompt fading"
    ],
    correctIndex: 2,
    explanation: "G-11 — Shaping involves the differential reinforcement of successive approximations toward a terminal behavior that is not currently in the individual's repertoire.",
    highlight: "purple" as const,
  },
  {
    id: 2114,
    topic: "Behavior-Change Procedures",
    prompt: "A task analysis for tooth brushing has 8 steps. The instructor completes steps 1–7 and then prompts the client to do only step 8, which produces the natural reinforcer (clean teeth). Once step 8 is mastered, steps 6–7 are added. This is:",
    options: [
      "Forward chaining",
      "Total-task chaining",
      "Backward chaining",
      "Simultaneous chaining"
    ],
    correctIndex: 2,
    explanation: "G-12 — Backward chaining begins by teaching the last step of the chain first so that every trial produces the natural (terminal) reinforcer.",
    highlight: "purple" as const,
  },
  {
    id: 2115,
    topic: "Behavior-Change Procedures",
    prompt: "A client who already knows some steps in a behavior chain is taught every step in every session, with prompts faded on steps she cannot yet do independently. This method is called:",
    options: [
      "Forward chaining",
      "Backward chaining",
      "Total-task chaining",
      "Single-opportunity assessment"
    ],
    correctIndex: 2,
    explanation: "G-12 — Total-task chaining (concurrent chaining) presents the entire behavior chain each session and uses prompting to support steps not yet mastered independently.",
    highlight: "purple" as const,
  },
  {
    id: 2116,
    topic: "Behavior-Change Procedures",
    prompt: "A teacher delivers reinforcement to the whole class if the student selected as 'the chosen one' completes their math worksheet within the class period. This is a:",
    options: [
      "Independent group contingency",
      "Interdependent group contingency",
      "Dependent group contingency",
      "Noncontingent group reinforcement"
    ],
    correctIndex: 2,
    explanation: "G-14 — A dependent group contingency (hero procedure) makes reinforcement for the whole group contingent on the behavior of one or a small subset of group members.",
    highlight: "purple" as const,
  },
  {
    id: 2117,
    topic: "Behavior-Change Procedures",
    prompt: "A BCBA teaches a skill across multiple trainers, settings, and stimulus materials to promote broad generalization. This strategy uses:",
    options: [
      "Multiple exemplar training",
      "Chaining procedures",
      "Errorless learning",
      "Non-contingent reinforcement"
    ],
    correctIndex: 0,
    explanation: "G-15 — Multiple exemplar training exposes clients to diverse examples of the target skill across trainers, settings, and stimuli to promote stimulus and response generalization.",
    highlight: "purple" as const,
  },
  {
    id: 2118,
    topic: "Behavior-Change Procedures",
    prompt: "A practitioner systematically thins the schedule of reinforcement from CRF to VR-10 over several weeks and transfers control to naturally occurring reinforcers before fading out of treatment. This addresses:",
    options: [
      "Stimulus generalization",
      "Maintenance of behavior change",
      "Response generalization",
      "Chaining"
    ],
    correctIndex: 1,
    explanation: "G-16 — Procedures for maintaining behavior change include schedule thinning and transferring to naturally occurring reinforcers to ensure behavior persists after treatment fades.",
    highlight: "purple" as const,
  },
  {
    id: 2119,
    topic: "Behavior-Change Procedures",
    prompt: "A client is removed from the reinforcing environment for 2 minutes contingent on each instance of aggression. Aggression decreases over time. This is:",
    options: [
      "Response cost",
      "Overcorrection",
      "Time-out from positive reinforcement",
      "Extinction"
    ],
    correctIndex: 2,
    explanation: "G-17 — Time-out from positive reinforcement is a punishment procedure involving contingent removal from access to reinforcement, resulting in decreased behavior.",
    highlight: "purple" as const,
  },
  {
    id: 2120,
    topic: "Behavior-Change Procedures",
    prompt: "A client loses 5 tokens from her token board each time she engages in property destruction. Property destruction decreases. This is:",
    options: [
      "Negative reinforcement",
      "Time-out",
      "Response cost",
      "Positive punishment"
    ],
    correctIndex: 2,
    explanation: "G-17 — Response cost is a negative punishment procedure involving the contingent removal of a specified amount of a conditioned reinforcer, resulting in reduced behavior.",
    highlight: "purple" as const,
  },
  {
    id: 2121,
    topic: "Behavior-Change Procedures",
    prompt: "After aggression results in a broken item, a client is required to repair the item and restore the surrounding environment to a better-than-before condition. This procedure is:",
    options: [
      "Time-out",
      "Overcorrection — restitutional",
      "Response cost",
      "Extinction"
    ],
    correctIndex: 1,
    explanation: "G-17 — Restitutional overcorrection requires the individual to restore the environment to a better state than before the behavior occurred.",
    highlight: "purple" as const,
  },
  {
    id: 2122,
    topic: "Behavior-Change Procedures",
    prompt: "A BCBA notes that a client becomes agitated and begins engaging in stereotypy following a switch in activities. The BCBA considers that the behavior-change procedure may be producing an elicited emotional response. This awareness is relevant to:",
    options: [
      "Identifying the function of the behavior",
      "Evaluating the emotional and elicited effects of behavior-change procedures",
      "Designing a new chaining procedure",
      "Conducting an IOA calculation"
    ],
    correctIndex: 1,
    explanation: "G-18 — G-18 requires behavior analysts to evaluate emotional and elicited (respondent) effects of behavior-change procedures to ensure they do not produce harmful side effects.",
    highlight: "purple" as const,
  },
  {
    id: 2123,
    topic: "Behavior-Change Procedures",
    prompt: "A client is taught that A=B and B=C. Without further instruction, the client demonstrates that A=C, B=A, and C=B. These new, untrained relations are called:",
    options: [
      "Respondent behaviors",
      "Emergent relations",
      "Imitation responses",
      "Intraverbal responses"
    ],
    correctIndex: 1,
    explanation: "G-19 — Emergent relations (e.g., transitivity, symmetry) are novel, untrained relations that derive from trained conditional discriminations, forming stimulus equivalence classes.",
    highlight: "purple" as const,
  },
  {
    id: 2124,
    topic: "Behavior-Change Procedures",
    prompt: "A naturalistic teaching approach capitalizes on the child's MOs and choice-making opportunities during free play. The child initiates an interaction, and the trainer takes advantage of that moment to teach. This describes:",
    options: [
      "Discrete trial teaching",
      "Incidental teaching",
      "Total-task chaining",
      "Group contingency"
    ],
    correctIndex: 1,
    explanation: "G-13 — Incidental teaching is a free-operant method where a child's initiations become learning opportunities; the trainer waits for the child's interest to create a teaching moment.",
    highlight: "purple" as const,
  },
  {
    id: 2125,
    topic: "Behavior-Change Procedures",
    prompt: "A BCBA implements a teaching methodology using massed discrete trials in a structured one-on-one format, presenting a clear antecedent, waiting for a response, and delivering a consequence. This is:",
    options: [
      "Pivotal response training",
      "Discrete trial teaching (DTT)",
      "Incidental teaching",
      "Free-operant procedures"
    ],
    correctIndex: 1,
    explanation: "G-13 — Discrete trial teaching (DTT) is a structured, one-on-one methodology involving clear SD-response-consequence sequences, typically used in massed trials for skill acquisition.",
    highlight: "purple" as const,
  },
  {
    id: 2126,
    topic: "Behavior-Change Procedures",
    prompt: "A client records the number of times he interrupts others during meetings each day and compares it to his personal goal of fewer than 2 interruptions. He then evaluates whether his behavior met criterion. This self-management procedure is called:",
    options: [
      "Self-monitoring",
      "Self-evaluation",
      "Self-administered consequences",
      "Habit reversal"
    ],
    correctIndex: 1,
    explanation: "G-16 — Self-evaluation involves comparing self-monitoring data to a predetermined criterion; it is distinct from self-monitoring, which is only the act of recording the behavior.",
    highlight: "purple" as const,
  },
  {
    id: 2127,
    topic: "Behavior-Change Procedures",
    prompt: "A BCBA teaches a client to use a written schedule posted on the refrigerator to prompt himself to take his medication each morning. This is an antecedent-based self-management procedure using:",
    options: [
      "Massed practice",
      "Self-administered punishment",
      "Response prompting (self-reminder)",
      "Habit reversal"
    ],
    correctIndex: 2,
    explanation: "G-16 — Using a written schedule as a self-reminder is an antecedent-based self-management strategy that uses response prompting to cue the desired behavior.",
    highlight: "purple" as const,
  },
  {
    id: 2128,
    topic: "Behavior-Change Procedures",
    prompt: "A BCBA reinforces each correct vocal approximation that is successively closer to the target word 'more.' Initially 'mmm' is reinforced, then 'moh,' then 'more.' This illustrates which type of shaping?",
    options: [
      "Shaping across behaviors (topographical shaping)",
      "Shaping within a single dimension",
      "Response generalization",
      "Chaining"
    ],
    correctIndex: 0,
    explanation: "G-11 — Shaping across behaviors involves reinforcing successive approximations that are each topographically different, moving toward the terminal behavior through a series of criteria changes.",
    highlight: "purple" as const,
  },
  {
    id: 2129,
    topic: "Behavior-Change Procedures",
    prompt: "Reinforcement is delivered every time a desired behavior occurs during skill acquisition. As behavior becomes fluent, the practitioner plans to thin the schedule. The initial schedule is:",
    options: [
      "Variable ratio",
      "Fixed interval",
      "Continuous reinforcement (CRF)",
      "Fixed ratio"
    ],
    correctIndex: 2,
    explanation: "G-1 — Continuous reinforcement (CRF) is used during initial skill acquisition because it produces rapid learning; the schedule is then thinned to promote maintenance.",
    highlight: "purple" as const,
  },
  {
    id: 2130,
    topic: "Behavior-Change Procedures",
    prompt: "A class earns a pizza party on Friday only if every student in the class maintained at or below 3 disruptions per day for the entire week. This group contingency is:",
    options: [
      "Dependent group contingency",
      "Independent group contingency",
      "Interdependent group contingency",
      "Non-contingent group reinforcement"
    ],
    correctIndex: 2,
    explanation: "G-14 — An interdependent group contingency makes reinforcement for the whole group contingent on every member of the group meeting the criterion.",
    highlight: "purple" as const,
  },
  {
    id: 2131,
    topic: "Behavior-Change Procedures",
    prompt: "A BCBA uses DRL to reduce the rate of a student's talking out. Reinforcement is delivered only if the student talks out fewer than 5 times per class period. The student's talking out decreases from 12 to 4 times per period. DRL is being used to:",
    options: [
      "Eliminate the behavior entirely",
      "Reduce the rate to a socially acceptable level",
      "Replace the behavior with a communication alternative",
      "Deliver reinforcement independent of behavior"
    ],
    correctIndex: 1,
    explanation: "G-2 — DRL (differential reinforcement of low rates) is designed to decrease the rate of a behavior to a socially acceptable level rather than eliminate it entirely.",
    highlight: "purple" as const,
  },
  {
    id: 2132,
    topic: "Behavior-Change Procedures",
    prompt: "A trainer models hand-washing step by step for a client who watches and then completes the same sequence. Which teaching procedure is primarily being used?",
    options: [
      "Physical prompting",
      "Verbal instructions",
      "Modeling",
      "Stimulus fading"
    ],
    correctIndex: 2,
    explanation: "G-9 — Modeling involves the trainer demonstrating the correct behavior so the learner can observe and then imitate; it requires that the learner have attending and imitation skills.",
    highlight: "purple" as const,
  },
  {
    id: 2133,
    topic: "Behavior-Change Procedures",
    prompt: "Rules are presented to a child before beginning a task and the child follows them correctly. In terms of stimulus functions, rules act primarily as:",
    options: [
      "Motivating operations",
      "Discriminative stimuli",
      "Unconditioned reinforcers",
      "Conditioned punishers"
    ],
    correctIndex: 1,
    explanation: "G-10 — Rules function as discriminative stimuli (SDs) that signal the availability of reinforcement for behaving according to the rule.",
    highlight: "purple" as const,
  },
  {
    id: 2134,
    topic: "Behavior-Change Procedures",
    prompt: "A BCBA teaches a client to respond independently by first providing maximal physical guidance and then systematically reducing the level of prompting over successive trials. This is:",
    options: [
      "Least-to-most prompting",
      "Errorless learning",
      "Most-to-least prompting",
      "Constant prompt delay"
    ],
    correctIndex: 2,
    explanation: "G-7 — Most-to-least (maximum-to-minimum) prompting begins with the most intrusive prompt (physical guidance) and systematically reduces assistance as the learner acquires the skill.",
    highlight: "purple" as const,
  },
  {
    id: 2135,
    topic: "Behavior-Change Procedures",
    prompt: "A child receives reinforcement on a schedule that does not allow the child to predict when the next reinforcer will come, producing resistance to extinction. The child is on which type of schedule?",
    options: [
      "Fixed ratio",
      "Fixed interval",
      "Variable ratio",
      "Continuous reinforcement"
    ],
    correctIndex: 2,
    explanation: "G-1 — Variable ratio schedules produce strong resistance to extinction because the unpredictability of reinforcement delivery maintains responding.",
    highlight: "purple" as const,
  },
  {
    id: 2136,
    topic: "Behavior-Change Procedures",
    prompt: "A BCBA delivers positive reinforcement immediately and consistently in a structured manner for each correct response during a teaching trial. Over time, the BCBA gradually increases the requirement. This best describes which overarching approach to behavior change?",
    options: [
      "Positive reinforcement-based skill acquisition with schedule thinning",
      "Negative reinforcement of avoidance behavior",
      "Punishment-based behavior reduction",
      "Extinction of challenging behavior"
    ],
    correctIndex: 0,
    explanation: "G-1 — Systematic positive reinforcement of correct responses during acquisition, followed by gradual schedule thinning, is the cornerstone of ABA-based skill teaching.",
    highlight: "purple" as const,
  },
  {
    id: 2137,
    topic: "Behavior-Change Procedures",
    prompt: "A client being treated for challenging behavior showed a brief increase in the behavior's frequency immediately after extinction was implemented. This phenomenon is called:",
    options: [
      "Spontaneous recovery",
      "Behavioral contrast",
      "Extinction burst",
      "Resurgence"
    ],
    correctIndex: 2,
    explanation: "G-2 — An extinction burst is a temporary increase in the frequency, intensity, or duration of a behavior when extinction is first implemented.",
    highlight: "purple" as const,
  },
  {
    id: 2138,
    topic: "Behavior-Change Procedures",
    prompt: "A practitioner who previously extinguished a problem behavior notices the behavior returns after a period of stress. This is called:",
    options: [
      "Extinction burst",
      "Resurgence",
      "Behavioral momentum",
      "Spontaneous recovery"
    ],
    correctIndex: 3,
    explanation: "G-18 — Spontaneous recovery is the reappearance of a previously extinguished behavior after a period of time without exposure to extinction conditions.",
    highlight: "purple" as const,
  },
  {
    id: 2139,
    topic: "Selecting and Implementing Interventions",
    prompt: "Before selecting an intervention, a BCBA considers the client's reinforcement history, the settings where behavior occurs, the function of the behavior, and available resources. This process reflects:",
    options: [
      "Component analysis",
      "Assessment-based intervention planning",
      "Non-contingent reinforcement",
      "Parametric analysis"
    ],
    correctIndex: 1,
    explanation: "H-1 — Assessment-based intervention planning requires integrating information from functional assessments, skills assessments, and contextual factors to select appropriate behavior-change procedures.",
    highlight: "yellow" as const,
  },
  {
    id: 2140,
    topic: "Selecting and Implementing Interventions",
    prompt: "A BCBA chooses an intervention that is the simplest and least intrusive option that is likely to be effective. This decision reflects:",
    options: [
      "Pragmatism and the least restrictive treatment principle",
      "Selectionism",
      "Behavioral momentum",
      "External validity"
    ],
    correctIndex: 0,
    explanation: "H-1 — The principle of least restrictive treatment requires selecting the simplest, least intrusive effective intervention, which is also consistent with the philosophical assumption of parsimony.",
    highlight: "yellow" as const,
  },
  {
    id: 2141,
    topic: "Selecting and Implementing Interventions",
    prompt: "A caregiver is asked to rate how acceptable and important the treatment goals and procedures are. The data collected reflect:",
    options: [
      "Treatment integrity",
      "Social validity",
      "Interobserver agreement",
      "Functional assessment"
    ],
    correctIndex: 1,
    explanation: "H-2 — Social validity involves evaluating the social significance of goals, appropriateness of procedures, and importance of outcomes from the perspective of clients, caregivers, and society.",
    highlight: "yellow" as const,
  },
  {
    id: 2142,
    topic: "Selecting and Implementing Interventions",
    prompt: "A BCBA systematically measures whether the intervention is being implemented as designed by comparing actual implementation to the written protocol. This is called:",
    options: [
      "Treatment integrity (procedural fidelity)",
      "Social validity",
      "Interobserver agreement",
      "Baseline logic"
    ],
    correctIndex: 0,
    explanation: "H-3 — Treatment integrity (or procedural fidelity) refers to the degree to which an intervention is implemented as designed and described in the written protocol.",
    highlight: "yellow" as const,
  },
  {
    id: 2143,
    topic: "Selecting and Implementing Interventions",
    prompt: "After extinction is implemented for one problem behavior, a second previously reinforced behavior that had not occurred for months reappears. This phenomenon is best described as:",
    options: [
      "Extinction burst",
      "Resurgence",
      "Spontaneous recovery",
      "Behavioral contrast"
    ],
    correctIndex: 1,
    explanation: "H-4 — Resurgence is the reappearance of a previously reinforced behavior (not currently being reinforced) when the currently reinforced behavior is placed on extinction.",
    highlight: "yellow" as const,
  },
  {
    id: 2144,
    topic: "Selecting and Implementing Interventions",
    prompt: "When an intervention is implemented in one setting and behavior improves, but in another setting where no intervention is in place behavior worsens, this is called:",
    options: [
      "Multiple treatment interference",
      "Spontaneous recovery",
      "Behavioral contrast",
      "Extinction burst"
    ],
    correctIndex: 2,
    explanation: "H-4 — Behavioral contrast occurs when a change in reinforcement contingencies in one setting produces an opposite change in behavior in another setting.",
    highlight: "yellow" as const,
  },
  {
    id: 2145,
    topic: "Selecting and Implementing Interventions",
    prompt: "A BCBA asks parents to implement intervention components at home with support and feedback to ensure consistent behavior change across settings. This reflects which intervention consideration?",
    options: [
      "Component analysis",
      "Caregiver training and involvement in generalization programming",
      "Schedule thinning",
      "Parametric analysis"
    ],
    correctIndex: 1,
    explanation: "H-5 — Involving caregivers in implementing procedures across natural environments is essential for promoting generalization and maintenance of behavior change.",
    highlight: "yellow" as const,
  },
  {
    id: 2146,
    topic: "Selecting and Implementing Interventions",
    prompt: "A BCBA makes sure that the goals of the behavior-change program target skills that are meaningful in the client's daily life and improve their quality of life. This is consistent with which dimension of ABA?",
    options: [
      "Technological",
      "Applied",
      "Analytic",
      "Conceptually systematic"
    ],
    correctIndex: 1,
    explanation: "H-1 — The 'applied' dimension of ABA requires that target behaviors be socially significant and improve the client's quality of life.",
    highlight: "yellow" as const,
  },
  {
    id: 2147,
    topic: "Selecting and Implementing Interventions",
    prompt: "A BCBA trains a parent to implement a behavior-reduction procedure in the home, models the procedure, and then observes the parent's implementation to provide feedback. This reflects which component of effective caregiver training?",
    options: [
      "Behavioral skills training (BST)",
      "Chaining",
      "Shaping",
      "Non-contingent reinforcement"
    ],
    correctIndex: 0,
    explanation: "H-5 — Behavioral skills training (BST) includes instructions, modeling, rehearsal, and feedback, and is an evidence-based method for training caregivers and staff.",
    highlight: "yellow" as const,
  },
  {
    id: 2148,
    topic: "Selecting and Implementing Interventions",
    prompt: "A BCBA reviews graph data at the end of each week and adjusts programming when data show no progress for three consecutive sessions. This reflects:",
    options: [
      "Experimental design",
      "Data-based decision making",
      "Social validity assessment",
      "IOA calculation"
    ],
    correctIndex: 1,
    explanation: "H-6 — Data-based decision making involves using visual analysis of graphed data to make informed modifications to the intervention plan.",
    highlight: "yellow" as const,
  },
  {
    id: 2149,
    topic: "Selecting and Implementing Interventions",
    prompt: "A client's behavior rapidly returns to its pre-treatment rate once the intervention is removed, suggesting the gains were not truly maintained. A BCBA should address this by:",
    options: [
      "Immediately resuming the original intervention at full intensity",
      "Systematically planning for maintenance with schedule thinning and natural reinforcers before treatment ends",
      "Placing the behavior on a fixed ratio schedule",
      "Conducting a new functional analysis"
    ],
    correctIndex: 1,
    explanation: "H-7 — Planning for maintenance requires systematic schedule thinning and transferring to naturally occurring reinforcers prior to fading treatment.",
    highlight: "yellow" as const,
  },
  {
    id: 2150,
    topic: "Selecting and Implementing Interventions",
    prompt: "Before implementing a punishment-based procedure, a BCBA should ensure that:",
    options: [
      "Reinforcement-based alternatives have been tried and found insufficient",
      "The client has consented verbally",
      "The procedure is the most efficient option regardless of intrusiveness",
      "No functional assessment is necessary if the behavior is dangerous"
    ],
    correctIndex: 0,
    explanation: "H-8 — The least restrictive alternative principle requires that reinforcement-based procedures be attempted before using punishment-based procedures.",
    highlight: "yellow" as const,
  },
  {
    id: 2151,
    topic: "Selecting and Implementing Interventions",
    prompt: "A BCBA who uses primarily reinforcement-based procedures notices that the client's challenging behavior increases following a change in medication. She consults with the medical team and adjusts the intervention plan accordingly. This reflects:",
    options: [
      "Practicing outside scope of competence",
      "Collaborative, interdisciplinary practice",
      "Violation of the least restrictive principle",
      "Multiple relationship concerns"
    ],
    correctIndex: 1,
    explanation: "H-1 — Effective intervention planning often requires collaboration with other professionals (e.g., physicians, speech therapists) to address factors outside the behavior analyst's scope.",
    highlight: "yellow" as const,
  },
  {
    id: 2152,
    topic: "Selecting and Implementing Interventions",
    prompt: "A BCBA uses visual analysis to determine that a client's data show a stable, flat trend in the treatment phase after 10 sessions. The most appropriate action is to:",
    options: [
      "Continue the intervention unchanged for additional sessions",
      "Consider modifying the intervention based on the data",
      "Move the client to a group session format",
      "Add more treatment targets without changing the current intervention"
    ],
    correctIndex: 1,
    explanation: "H-6 — When data show no change in trend after sufficient time, data-based decision making requires modifying the intervention to improve outcomes.",
    highlight: "yellow" as const,
  },
  {
    id: 2153,
    topic: "Selecting and Implementing Interventions",
    prompt: "A BCBA collects data on treatment integrity and finds that RBTs are implementing only 60% of the steps correctly. The BCBA's most appropriate next step is to:",
    options: [
      "Continue monitoring without action",
      "Provide feedback and retraining to improve RBT implementation fidelity",
      "Discontinue the intervention due to poor integrity",
      "Change the client's goals to match what RBTs are implementing"
    ],
    correctIndex: 1,
    explanation: "H-3 — Low treatment integrity requires the supervising BCBA to provide feedback, retraining, and ongoing monitoring to improve procedural fidelity.",
    highlight: "yellow" as const,
  },
  {
    id: 2154,
    topic: "Selecting and Implementing Interventions",
    prompt: "Behavioral momentum theory suggests that a series of high-probability requests before a low-probability request can increase compliance with the difficult request. This is relevant to which domain?",
    options: [
      "Experimental design",
      "Selecting and implementing interventions",
      "Measurement and data display",
      "Personnel supervision"
    ],
    correctIndex: 1,
    explanation: "H-1 — Behavioral momentum (high-p request sequences) is an evidence-based intervention strategy for increasing compliance used in behavior-change program design.",
    highlight: "yellow" as const,
  },
  {
    id: 2155,
    topic: "Selecting and Implementing Interventions",
    prompt: "A BCBA writes a behavior intervention plan (BIP) and trains all team members before implementation. The BIP describes each procedure step-by-step so that any trained implementer could replicate it. This reflects which dimension of ABA?",
    options: [
      "Applied",
      "Behavioral",
      "Technological",
      "Generality"
    ],
    correctIndex: 2,
    explanation: "H-3 — The 'technological' dimension of ABA requires that procedures be described clearly and completely enough to allow replication by any trained individual.",
    highlight: "yellow" as const,
  },
  {
    id: 2156,
    topic: "Selecting and Implementing Interventions",
    prompt: "After a successful intervention reduces a client's aggressive behavior to near-zero, the BCBA begins training the client's teacher to implement the maintenance plan. This transition reflects:",
    options: [
      "Treatment integrity monitoring",
      "Generalization programming across personnel",
      "Conducting a component analysis",
      "Using a multiple baseline design"
    ],
    correctIndex: 1,
    explanation: "H-7 — Generalization programming across personnel involves training new implementers (e.g., teachers) to maintain treatment gains beyond the original training context.",
    highlight: "yellow" as const,
  },
  {
    id: 2157,
    topic: "Selecting and Implementing Interventions",
    prompt: "A BCBA is selecting between two equally effective interventions. One requires fewer resources and is easier for caregivers to implement. Which principle guides selecting the simpler intervention?",
    options: [
      "Empiricism",
      "Determinism",
      "Parsimony",
      "Selectionism"
    ],
    correctIndex: 2,
    explanation: "H-1 — Parsimony supports choosing the simplest explanation and the least complex effective intervention when alternatives are equally effective.",
    highlight: "yellow" as const,
  },
  {
    id: 2158,
    topic: "Selecting and Implementing Interventions",
    prompt: "A client's behavior improves markedly in therapy sessions but does not generalize to the school cafeteria. The BCBA's next step should focus on:",
    options: [
      "Increasing session frequency",
      "Adding a punishment procedure in therapy",
      "Programming for generalization across settings",
      "Reducing the reinforcement schedule in therapy"
    ],
    correctIndex: 2,
    explanation: "H-7 — When behavior change fails to generalize, the BCBA must actively program generalization by implementing the intervention across target settings, people, and stimuli.",
    highlight: "yellow" as const,
  },
  {
    id: 2159,
    topic: "Selecting and Implementing Interventions",
    prompt: "A BCBA evaluates a client's progress by measuring outcomes that are meaningful to the client and their family, such as increased social interactions and improved quality of life. This evaluation process reflects:",
    options: [
      "Social validity assessment of outcomes",
      "Treatment integrity monitoring",
      "IOA measurement",
      "Functional analysis"
    ],
    correctIndex: 0,
    explanation: "H-2 — Social validity assessment includes evaluating whether the outcomes of treatment are meaningful and important from the perspective of clients and relevant stakeholders.",
    highlight: "yellow" as const,
  },
  {
    id: 2160,
    topic: "Selecting and Implementing Interventions",
    prompt: "A practitioner implements a complex treatment package and wants to determine which components are responsible for the observed behavior change. The most appropriate design to answer this question is a:",
    options: [
      "Reversal design",
      "Multiple baseline design",
      "Component analysis",
      "Changing criterion design"
    ],
    correctIndex: 2,
    explanation: "H-6 — A component analysis (D-8) isolates the active ingredients in a treatment package by systematically adding or removing components and measuring their individual effects.",
    highlight: "yellow" as const,
  },
  {
    id: 2161,
    topic: "Personnel Supervision and Management",
    prompt: "Research on behavior-analytic supervision consistently shows that high-quality supervision leads to which direct outcome?",
    options: [
      "Lower client caseloads for supervisors",
      "Improved client outcomes due to better staff performance",
      "Reduced need for functional assessments",
      "Decreased use of data-based decision making"
    ],
    correctIndex: 1,
    explanation: "I-1 — Evidence-based supervision research demonstrates that staff performance quality directly impacts client outcomes; proficient supervision leads to better behavioral services.",
    highlight: "white" as const,
  },
  {
    id: 2162,
    topic: "Personnel Supervision and Management",
    prompt: "A supervisor who provides mostly critical feedback and rarely acknowledges good performance is most likely to experience which outcome among their supervisees?",
    options: [
      "Increased staff motivation and job satisfaction",
      "Decreased turnover rates",
      "Decreased work motivation and increased staff turnover",
      "Higher rates of treatment integrity"
    ],
    correctIndex: 2,
    explanation: "I-1 — Negatively focused, punitive supervision decreases work motivation, reduces job enjoyment, and increases staff turnover and burnout.",
    highlight: "white" as const,
  },
  {
    id: 2163,
    topic: "Personnel Supervision and Management",
    prompt: "Before a supervisory relationship begins, a supervisor and trainee sign a written document that outlines expectations, evaluation criteria, consequences for non-adherence, and terms for termination. This is called a:",
    options: [
      "Service agreement",
      "Financial agreement",
      "Supervisor-trainee contract",
      "Behavior intervention plan"
    ],
    correctIndex: 2,
    explanation: "I-2 — A supervisor-trainee contract, required prior to accruing experience hours, outlines mutual responsibilities, performance criteria, and terms for the supervisory relationship.",
    highlight: "white" as const,
  },
  {
    id: 2164,
    topic: "Personnel Supervision and Management",
    prompt: "A supervisor must be an active BCBA certificant, have completed the 8-hour supervision training, and be current on supervision CEUs before providing supervision. A trainee who begins accruing hours with an unqualified supervisor risks:",
    options: [
      "Hours not counting toward BACB certification requirements",
      "Being required to redo the initial functional assessment",
      "Having their certification automatically revoked",
      "Only needing to repeat the last 10% of their fieldwork"
    ],
    correctIndex: 0,
    explanation: "I-2 — Code Standard 4.01 requires supervisors to comply with all BACB requirements; hours accrued under an unqualified supervisor may not meet BACB eligibility standards.",
    highlight: "white" as const,
  },
  {
    id: 2165,
    topic: "Personnel Supervision and Management",
    prompt: "An effective supervisor designs a structured curriculum that covers all required task list items, uses pre- and post-assessments, and builds in multiple practice opportunities with feedback. This approach reflects:",
    options: [
      "A non-contingent reinforcement approach to supervision",
      "A structured, systematic approach to supervision",
      "An indirect functional assessment approach",
      "A social validity framework"
    ],
    correctIndex: 1,
    explanation: "I-2 — Effective supervisory relationships take a structured, systematic approach that covers the full curriculum, uses assessment, and provides practice with feedback.",
    highlight: "white" as const,
  },
  {
    id: 2166,
    topic: "Personnel Supervision and Management",
    prompt: "A supervisor directly observes a supervisee implementing a skill-acquisition program and provides immediate behavior-specific feedback on both correct steps and areas for improvement. This step reflects which component of BST?",
    options: [
      "Written instructions",
      "Pre-assessment",
      "Performance monitoring and feedback",
      "Token economy"
    ],
    correctIndex: 2,
    explanation: "I-4 — Performance monitoring and feedback (a component of BST and evidence-based supervision) involves direct observation followed by specific, immediate feedback on implementation.",
    highlight: "white" as const,
  },
  {
    id: 2167,
    topic: "Personnel Supervision and Management",
    prompt: "A supervisor has a trainee who consistently struggles to implement extinction procedures correctly. Despite previous verbal feedback, the errors continue. The supervisor's most effective next step is to:",
    options: [
      "Document the problem and allow more time",
      "Assign more reading on extinction without further observation",
      "Model the correct procedure and have the trainee practice while providing feedback",
      "Reassign the client to a more experienced RBT"
    ],
    correctIndex: 2,
    explanation: "I-4 — When verbal feedback alone is insufficient, BST principles support modeling the correct procedure followed by supervised practice and feedback.",
    highlight: "white" as const,
  },
  {
    id: 2168,
    topic: "Personnel Supervision and Management",
    prompt: "A supervisor delivers a token to a staff member every time the staff member correctly implements all steps of a behavior protocol. This is an example of:",
    options: [
      "Negative reinforcement of staff behavior",
      "Using reinforcement systems to maintain proficient staff performance",
      "Non-contingent staff reinforcement",
      "Dependent group contingency for staff"
    ],
    correctIndex: 1,
    explanation: "I-5 — Supervisors should use behavior-analytic reinforcement systems contingent on proficient staff performance to increase and maintain high-quality implementation.",
    highlight: "white" as const,
  },
  {
    id: 2169,
    topic: "Personnel Supervision and Management",
    prompt: "A supervisor reviews performance data across multiple staff members. She identifies that one RBT is consistently arriving late and misses data collection for the first 10 minutes of sessions. Her first step should be to:",
    options: [
      "Immediately terminate the RBT's employment",
      "Identify whether the problem is a skill deficit or a performance problem and provide appropriate corrective action",
      "Reassign the RBT to different clients without addressing the behavior",
      "Submit a complaint to the BACB"
    ],
    correctIndex: 1,
    explanation: "I-6 — Effective supervision requires identifying whether performance problems are skill deficits (requiring training) or motivation/performance problems (requiring consequence-based strategies).",
    highlight: "white" as const,
  },
  {
    id: 2170,
    topic: "Personnel Supervision and Management",
    prompt: "A supervisor is going on planned medical leave for three weeks. According to the Ethics Code, the supervisor should:",
    options: [
      "Suspend all supervision until returning",
      "Make appropriate efforts to facilitate continuity of supervision by arranging qualified coverage",
      "Sign off on all remaining hours before leaving",
      "Ask a colleague to supervise informally without a contract"
    ],
    correctIndex: 1,
    explanation: "I-7 — Code Standard 4.11 requires behavior analysts to make timely efforts to facilitate continuity of supervision during both planned and unplanned interruptions.",
    highlight: "white" as const,
  },
  {
    id: 2171,
    topic: "Personnel Supervision and Management",
    prompt: "A supervisor uses a behavior skills training approach with a new RBT that includes written instructions, role play, modeling, and feedback. Which sequence best reflects BST?",
    options: [
      "Observation, data review, punishment, retraining",
      "Instructions, modeling, rehearsal, feedback",
      "Assessment, goal setting, data collection, discharge",
      "Interview, observation, parametric analysis, report"
    ],
    correctIndex: 1,
    explanation: "I-3 — Behavioral skills training (BST) consists of four components: instructions, modeling, rehearsal (practice), and feedback; it is the gold standard for training new skills.",
    highlight: "white" as const,
  },
  {
    id: 2172,
    topic: "Personnel Supervision and Management",
    prompt: "A supervisor assigns a supervisee a complex task that the supervisee does not yet have the skills to complete. The supervisee fails, which negatively affects a client. This reflects a failure to:",
    options: [
      "Delegate tasks only to supervisees who have the skills and training needed to perform them competently",
      "Avoid giving or receiving gifts that could create a conflict of interest",
      "Make referrals when a client requires services beyond the supervisor's competence",
      "Describe behavior-change procedures in writing prior to implementation"
    ],
    correctIndex: 0,
    explanation: "I-4 — Code Standard 4.06 requires supervisors to delegate tasks only to supervisees who have the skills and training needed to perform them competently.",
    highlight: "white" as const,
  },
  {
    id: 2173,
    topic: "Personnel Supervision and Management",
    prompt: "A supervisor applies behavior-analytic principles to the management of staff, using preference assessments to identify reinforcers for good performance, monitoring behavior data, and providing performance feedback. This approach is called:",
    options: [
      "Organizational behavior management (OBM)",
      "Functional behavior assessment",
      "Incidental teaching for staff",
      "Parametric analysis"
    ],
    correctIndex: 0,
    explanation: "I-5 — Organizational behavior management (OBM) applies behavior-analytic principles (e.g., reinforcement, monitoring, feedback) to improve staff performance in organizational settings.",
    highlight: "white" as const,
  },
  {
    id: 2174,
    topic: "Personnel Supervision and Management",
    prompt: "A supervisor evaluates the effects of supervision by measuring changes in the supervisee's direct client outcomes. This practice reflects which supervision principle?",
    options: [
      "Evaluating the effects of supervision",
      "Using non-contingent reinforcement for supervisees",
      "Conducting a functional analysis of supervisee behavior",
      "Setting up a chained schedule for supervisees"
    ],
    correctIndex: 0,
    explanation: "I-7 — Evaluating the effects of supervision involves measuring whether supervisory practices produce improvements in supervisee competence and, ultimately, client outcomes.",
    highlight: "white" as const,
  },
  {
    id: 2175,
    topic: "Concepts and Principles",
    prompt: "A client consistently completes work tasks at a high rate when assigned to work with a preferred supervisor but slows dramatically with a non-preferred supervisor. According to the matching law, this behavior pattern is best explained by:",
    options: [
      "The client having a biologically determined preference",
      "Response allocation proportional to the relative rate of reinforcement from each supervisor",
      "The presence of a punisher in the non-preferred supervisor condition",
      "Spontaneous recovery of previously extinguished behavior"
    ],
    correctIndex: 1,
    explanation: "B-23 — The matching law predicts that organisms distribute responses proportionally to the relative rates of reinforcement available from each alternative.",
    highlight: "blue" as const,
  },
  {
    id: 2176,
    topic: "Concepts and Principles",
    prompt: "A child with a history of refusing to put on his shoes (a low-p task) is asked by his therapist to first high-five, clap his hands, and give a thumbs-up — three tasks he almost always completes. The therapist then immediately says, 'Now put on your shoes.' The child complies. The therapist is capitalizing on which behavioral phenomenon?",
    options: [
      "Extinction burst, because non-compliance was previously ignored",
      "Behavioral momentum, because a series of high-probability responses builds response persistence that carries into the low-p request",
      "Stimulus generalization, because the compliance response spread from easy tasks to hard tasks",
      "Conditioned punishment, because the low-p task was paired with the high-p tasks"
    ],
    correctIndex: 1,
    explanation: "B-22 — Behavioral momentum describes the persistence of responding; a high-p request sequence builds response momentum that persists into the low-p request.",
    highlight: "blue" as const,
  },
  {
    id: 2177,
    topic: "Experimental Design",
    prompt: "A researcher alternates rapidly between a behavioral intervention and a no-treatment control within each session. The same SD signals which condition is in effect. This methodology is most similar to:",
    options: [
      "Changing criterion design",
      "Multiple baseline across subjects",
      "Multielement (alternating treatments) design",
      "Reversal design"
    ],
    correctIndex: 2,
    explanation: "D-7 — The multielement design involves rapid alternation between conditions within or across sessions, with discriminative stimuli signaling each condition.",
    highlight: "magenta" as const,
  },
  {
    id: 2178,
    topic: "Behavior Assessment",
    prompt: "A BCBA rates the social significance of treatment goals, the appropriateness of procedures, and the importance of achieved outcomes by surveying teachers, parents, and the client. This constitutes:",
    options: [
      "Treatment integrity assessment",
      "Social validity measurement",
      "IOA assessment",
      "Component analysis"
    ],
    correctIndex: 1,
    explanation: "F-4 — Social validity assessment surveys the perspectives of clients and relevant stakeholders on the significance of goals, appropriateness of procedures, and importance of outcomes.",
    highlight: "orange" as const,
  },
  {
    id: 2179,
    topic: "Measurement, Data Display, and Interpretation",
    prompt: "A practitioner uses whole interval recording for a behavior and finds that scores are very low even though the behavior seems to occur fairly often. This is because whole interval recording:",
    options: [
      "Overestimates behavior occurrence",
      "Underestimates behavior occurrence for behaviors that do not last the entire interval",
      "Is not affected by duration of behavior",
      "Can only be used with continuous behaviors"
    ],
    correctIndex: 1,
    explanation: "C-5 — Whole interval recording underestimates behavior because it only scores an interval as '+' if the behavior occurs throughout the entire interval, missing brief occurrences.",
    highlight: "green" as const,
  },
  {
    id: 2180,
    topic: "Behaviorism and Philosophical Foundations",
    prompt: "A BCBA chooses the most conservative, evidence-based explanation for a client's behavior and avoids hypothesizing about internal mental states when environmental variables can adequately account for the behavior. This reflects:",
    options: [
      "Selectionism",
      "Empiricism",
      "Parsimony",
      "Pragmatism"
    ],
    correctIndex: 2,
    explanation: "A-2 — Parsimony requires choosing the simplest, most logical (environmental) explanation and ruling it out before attributing behavior to more complex or mentalistic causes.",
    highlight: "lime" as const,
  },
  {
    id: 2181,
    topic: "Behavior-Change Procedures",
    prompt: "A client's behavior problem is discovered to have two separate maintaining functions: access to tangibles AND escape from demands. A behavior analyst designs an intervention that addresses both functions simultaneously. This approach is known as:",
    options: [
      "Combined extinction procedure",
      "Multiple-function intervention",
      "Differential reinforcement of other behavior",
      "Non-contingent reinforcement"
    ],
    correctIndex: 1,
    explanation: "G-2 — When a behavior has multiple functions (multiply-controlled behavior), the intervention must address each maintaining contingency to be effective.",
    highlight: "purple" as const,
  },
  {
    id: 2182,
    topic: "Ethical and Professional Issues",
    prompt: "A BCBA is asked to testify as an expert witness in a legal case involving a client's behavioral treatment. In this role, the BCBA should:",
    options: [
      "Advocate for the client's family position regardless of the data",
      "Provide objective, scientifically supported testimony within their area of competence",
      "Decline to share any data to protect client confidentiality",
      "Testify only if requested directly by the BACB"
    ],
    correctIndex: 1,
    explanation: "E-3 — When serving as an expert witness or in public statements, behavior analysts must provide truthful, objective, data-supported testimony within their scope of competence.",
    highlight: "ethics" as const,
  },
  {
    id: 2183,
    topic: "Measurement, Data Display, and Interpretation",
    prompt: "A BCBA graphs client data on a cumulative record. A steeper slope indicates:",
    options: [
      "A lower rate of responding",
      "Extinction of the target behavior",
      "A higher rate of responding",
      "High variability in responding"
    ],
    correctIndex: 2,
    explanation: "C-3 — On a cumulative record, the slope reflects the rate of responding; a steeper slope indicates a higher rate and a flat slope indicates no responding during that period.",
    highlight: "green" as const,
  },
  {
    id: 2184,
    topic: "Selecting and Implementing Interventions",
    prompt: "A BCBA implements an intervention shown to be effective in published research but finds that it does not produce meaningful change for her client. She adjusts the intervention based on ongoing data collection. This reflects which dimension of ABA?",
    options: [
      "Technological",
      "Conceptually systematic",
      "Analytic",
      "Applied"
    ],
    correctIndex: 2,
    explanation: "H-6 — The 'analytic' dimension of ABA requires ongoing data-based evaluation of whether the intervention is producing change, with modifications when data indicate a lack of effectiveness.",
    highlight: "yellow" as const,
  },
  {
    id: 2185,
    topic: "Personnel Supervision and Management",
    prompt: "A supervisor notices that a supervisee's performance deteriorates after a change in the supervisee's personal circumstances. The supervisor addresses this compassionately while also ensuring service quality. This reflects which supervisory skill?",
    options: [
      "Conducting a functional analysis of supervisee behavior",
      "Interpersonal skills and culturally responsive supervisory practice",
      "Applying non-contingent reinforcement to the supervisee",
      "Implementing a multiple baseline design for staff management"
    ],
    correctIndex: 1,
    explanation: "I-3 — Effective supervisors use interpersonal skills, cultural humility, and responsiveness when addressing performance concerns while maintaining the quality of services provided to clients.",
    highlight: "white" as const,
  },
]
;

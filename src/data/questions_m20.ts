import type { Question } from "../types";

/**
 * BCBA practice questions for Cooper et al., Chapter 17: Stimulus Control.
 * Grounded in the chapter text. Option order is shuffled at runtime, so
 * correctIndex placement here is arbitrary.
 */
export const QUESTIONS_M20: Question[] = [
  {
    id: 19001,
    topic: "Stimulus Control: Basic Concepts",
    prompt: "Technically, stimulus control occurs when which aspect(s) of a response is altered in the presence of an antecedent stimulus?",
    options: [
      "Only the topography of the response",
      "The reinforcement schedule maintaining the response",
      "The setting events surrounding the response",
      "The rate, latency, duration, or magnitude of the response"
    ],
    correctIndex: 3,
    explanation: "Stimulus control is defined as occurring when the rate, latency, duration, or magnitude of a response is altered in the presence of an antecedent stimulus.",
  },
  {
    id: 19002,
    topic: "Stimulus Discrimination",
    prompt: "In a basic discrimination procedure, when the SD signals rich reinforcement and the S-delta signals zero chance of reinforcement, what will the organism eventually do?",
    options: [
      "Respond only in the presence of the SD and emit no responses in the S-delta condition",
      "Respond equally in the presence and absence of the SD",
      "Increase responding in the S-delta condition to probe for reinforcement",
      "Cease responding entirely because of satiation"
    ],
    correctIndex: 0,
    explanation: "When the SD signals rich reinforcement and the S-delta signals extinction, the organism will eventually respond only in the presence of the SD and emit no responses in the S-delta condition, achieving complete stimulus discrimination.",
  },
  {
    id: 19004,
    topic: "Stimulus Generalization",
    prompt: "Stimulus generalization refers to:",
    options: [
      "The extent to which stimuli other than the SD acquire stimulus control over the behavior",
      "The tightening of stimulus control so that only one stimulus evokes a response",
      "The process of fading out prompts until the natural stimulus controls responding",
      "A four-term contingency involving a conditional sample and comparison stimuli"
    ],
    correctIndex: 0,
    explanation: "Stimulus generalization refers to the extent to which stimuli other than the SD acquire stimulus control over the behavior. Stimuli sharing similar physical properties with the SD are most likely to acquire evocative function.",
  },
  {
    id: 19006,
    topic: "Stimulus Generalization Gradient",
    prompt: "A stimulus generalization gradient with a relatively flat slope indicates:",
    options: [
      "Strong stimulus control by the training stimulus",
      "Little stimulus control is evident",
      "Complete stimulus discrimination has been achieved",
      "Errorless learning has occurred"
    ],
    correctIndex: 1,
    explanation: "When the slope of the stimulus generalization gradient is relatively flat, little stimulus control is evident. An increasing slope of the gradient shows more stimulus control.",
  },
  {
    id: 19008,
    topic: "Faulty Stimulus Control",
    prompt: "Faulty stimulus control occurs when:",
    options: [
      "A behavior comes under the restricted control of an irrelevant antecedent stimulus",
      "A learner fails to respond to any antecedent stimulus",
      "Stimulus generalization extends too broadly across stimulus classes",
      "Physical guidance prevents independent responding"
    ],
    correctIndex: 0,
    explanation: "Faulty stimulus control occurs when a behavior comes under the restricted control of an irrelevant antecedent stimulus, such as when students answer worksheet questions based on color-coding or layout rather than the intended academic content.",
  },
  {
    id: 19010,
    topic: "Conditional Stimulus Control",
    prompt: "In a conditional discrimination, what determines which response will produce reinforcement?",
    options: [
      "The organism's motivational state at the time of the response",
      "The history of punishment for alternative responses",
      "The density of reinforcement signaled by the SD alone",
      "The response that will produce reinforcement depends on the presence or absence of other stimuli"
    ],
    correctIndex: 3,
    explanation: "In a conditional discrimination, the response that will produce reinforcement in the presence of a particular stimulus depends on (is conditional on) the presence or absence of other stimuli, making it a four-term contingency.",
  },
  {
    id: 19013,
    topic: "Respondent vs. Operant Antecedent Control",
    prompt: "How does an SD acquire evocative function for operant behavior differently from how a conditioned stimulus acquires eliciting function for respondent behavior?",
    options: [
      "An SD is paired with an unconditioned stimulus; a conditioned stimulus is paired with reinforcement following behavior",
      "An SD increases response frequency; a conditioned stimulus decreases response frequency",
      "Both acquire their functions through the same pairing process, but at different points in training",
      "An SD is paired with stimulus changes following behavior; a conditioned stimulus is paired with other antecedent stimuli that elicit behavior"
    ],
    correctIndex: 3,
    explanation: "An SD acquires its controlling function by being paired with stimulus changes (reinforcement) occurring immediately following behavior. A conditioned stimulus acquires its controlling function by being paired with other antecedent stimuli that elicit the respondent behavior.",
  },
  {
    id: 19014,
    topic: "Discriminative vs. Motivational Functions",
    prompt: "A student's teacher requests academic work. The student hits the teacher and the teacher withdraws the request. In this scenario, the teacher's request functions as:",
    options: [
      "An SD because the teacher's presence signals available reinforcement",
      "An S-delta because hitting is not reinforced in the teacher's absence",
      "An establishing operation because it changes what functions as reinforcement rather than signaling differential availability of reinforcement",
      "A conditioned stimulus that elicits aggression as a respondent behavior"
    ],
    correctIndex: 2,
    explanation: "The teacher's request is an establishing operation (EO), not an SD. It evokes aggressive behavior because it changes what functions as reinforcement (escape from the request), rather than signaling the differential availability of reinforcement as an SD would.",
  },
  {
    id: 19017,
    topic: "Stimulus Discrimination Training",
    prompt: "The basic procedure for stimulus discrimination training entails which schedule arrangement?",
    options: [
      "A concurrent schedule with response-independent reinforcement in the S-delta condition",
      "A mixed schedule with no external stimuli correlated with component schedules",
      "A variable ratio schedule with differential stimulus presentations",
      "A multiple schedule with reinforcement in the SD condition and no reinforcement in the S-delta condition"
    ],
    correctIndex: 3,
    explanation: "Stimulus discrimination training entails a multiple schedule with antecedent stimulus conditions representing each component. Responses in the presence of the SD are reinforced and responses in the presence of the S-delta are not reinforced.",
  },
  {
    id: 19016,
    topic: "Discriminative vs. Motivational Functions",
    prompt: "An antecedent stimulus functions as an SD only when:",
    options: [
      "In its presence a specific behavior produces reinforcement, and in its absence the same behavior does not produce reinforcement",
      "It consistently precedes the behavior and terminates the motivating operation",
      "It has been paired with an unconditioned stimulus for multiple trials",
      "The organism emits the behavior at a high rate regardless of the stimulus"
    ],
    correctIndex: 0,
    explanation: "An antecedent stimulus functions as an SD only when in its presence a specific behavior produces reinforcement and in the absence of that stimulus the same behavior does not produce reinforcement.",
  },
  {
    id: 19020,
    topic: "Teaching Concepts",
    prompt: "A concept is defined as:",
    options: [
      "Any stimulus that can evoke a verbal response in a trained learner",
      "A set of shared features found in each example of the concept",
      "An arbitrary class of stimuli that do not share physical properties",
      "A three-term contingency that controls complex verbal behavior"
    ],
    correctIndex: 1,
    explanation: "A concept is defined by a set of shared features found in each example of the concept. Examples of the concept share 'must have' features with all other examples, and may also include 'can have' nondefining features.",
  },
  {
    id: 19021,
    topic: "Teaching Concepts",
    prompt: "Concept formation is a behavioral outcome of which two processes?",
    options: [
      "Reinforcement and punishment",
      "Imitation and verbal instruction",
      "Shaping and chaining",
      "Stimulus generalization and discrimination"
    ],
    correctIndex: 3,
    explanation: "Concept formation is a behavioral outcome of stimulus generalization and discrimination. It requires stimulus generalization within a class of stimuli and discrimination between classes of stimuli.",
  },
  {
    id: 19023,
    topic: "Antecedent Stimulus Classes",
    prompt: "An antecedent stimulus class is defined as:",
    options: [
      "A set of stimuli that differ from each other in all physical properties",
      "Stimuli that have been explicitly paired with an unconditioned reinforcer",
      "Any antecedent stimulus that precedes a target behavior regardless of function",
      "A set of stimuli that share a common relationship, all of which evoke the same operant response class"
    ],
    correctIndex: 3,
    explanation: "An antecedent stimulus class is a set of stimuli that share a common relationship, and all of the stimuli in the antecedent stimulus class will evoke the same operant response class or elicit the same respondent behavior.",
  },
  {
    id: 19025,
    topic: "Feature vs. Arbitrary Stimulus Classes",
    prompt: "Stimuli in an arbitrary stimulus class are characterized by:",
    options: [
      "Evoking the same response without sharing a common physical feature or relational relationship",
      "Sharing common physical forms that determine class membership",
      "Belonging to a single sensory modality such as vision or audition",
      "Being trained through a feature stimulus class procedure before equivalence is established"
    ],
    correctIndex: 0,
    explanation: "Stimuli composing an arbitrary stimulus class evoke the same response but do not share a common stimulus feature. They do not resemble each other in physical form, nor do they share a relational relationship.",
  },
  {
    id: 19026,
    topic: "Feature vs. Arbitrary Stimulus Classes",
    prompt: "To teach an arbitrary stimulus class, applied behavior analysts typically use:",
    options: [
      "Graduated guidance to physically prompt class membership responses",
      "Feature discrimination training with multiple exemplars of shared physical properties",
      "Matching-to-sample procedures to create stimulus equivalence among the arbitrary stimuli",
      "Time delay to fade the prompt from the conditional stimulus"
    ],
    correctIndex: 2,
    explanation: "Stimulus generalization is not a characteristic of arbitrary stimulus classes. Applied behavior analysts develop arbitrary stimulus classes by using matching-to-sample procedures to create stimulus equivalence among arbitrary stimuli.",
  },
  {
    id: 19027,
    topic: "Teaching Concepts",
    prompt: "Before a concept can be acquired through discrimination training, the teacher must present:",
    options: [
      "Only exemplars of what the concept is, to avoid confusion",
      "The verbal definition of the concept before presenting any physical examples",
      "An errorless learning hierarchy before any nonexamples are introduced",
      "Exemplars of what the concept is (SD condition) and what the concept is not (S-delta condition)"
    ],
    correctIndex: 3,
    explanation: "Before a concept can be acquired, the teacher must present exemplars of what the concept is (the SD condition) and what the concept is not (the S-delta condition). This holds true for all conceptual development, including highly abstract concepts.",
  },
  {
    id: 19028,
    topic: "Using Response and Stimulus Prompts",
    prompt: "Prompts are best described as:",
    options: [
      "Consequence-based interventions used to increase the rate of correct responding",
      "Naturally existing stimuli that independently control target behavior",
      "Supplementary antecedent stimuli used to occasion a correct response in the presence of the natural SD",
      "Procedures for thinning reinforcement schedules during maintenance"
    ],
    correctIndex: 2,
    explanation: "Prompts are supplementary antecedent stimuli used to occasion a correct response in the presence of the natural SD that will eventually control the behavior.",
  },
  {
    id: 19029,
    topic: "Using Response and Stimulus Prompts",
    prompt: "Which of the following is a key distinction between response prompts and stimulus prompts?",
    options: [
      "Response prompts operate directly on the response; stimulus prompts operate on the antecedent task stimuli",
      "Response prompts are always verbal, while stimulus prompts are always physical",
      "Stimulus prompts are used only with learners who have severe disabilities",
      "Response prompts are faded in while stimulus prompts are always faded out"
    ],
    correctIndex: 0,
    explanation: "Response prompts operate directly on the response to cue a correct response, while stimulus prompts operate directly on the antecedent task stimuli to cue a correct response in conjunction with the critical SD.",
  },
  {
    id: 19030,
    topic: "Using Response and Stimulus Prompts",
    prompt: "The three major forms of response prompts are:",
    options: [
      "Movement prompts, position prompts, and redundancy prompts",
      "Fading, superimposition, and shape transformation",
      "Verbal instructions, modeling, and physical guidance",
      "Graduated guidance, time delay, and most-to-least prompting"
    ],
    correctIndex: 2,
    explanation: "The three major forms of response prompts are verbal instructions, modeling, and physical guidance. These operate directly on the response to cue a correct response.",
  },
  {
    id: 19034,
    topic: "Factors Affecting Stimulus Control",
    prompt: "Preattending skills that support the development of stimulus control include:",
    options: [
      "Looking at instructional materials, looking at the teacher when a response is modeled, and sitting quietly for short periods",
      "Requesting reinforcement, self-monitoring performance, and using error correction procedures",
      "Emitting a broad range of behaviors during free operant conditions",
      "Tolerating errorless learning procedures without engaging in escape behavior"
    ],
    correctIndex: 0,
    explanation: "Preattending skills include looking at the instructional materials, looking at the teacher whenever a response is modeled, listening to oral instructions, and sitting quietly for short periods. These skills orient the learner's sensory receptors to the appropriate SD.",
  },
  {
    id: 19035,
    topic: "Factors Affecting Stimulus Control",
    prompt: "According to Catania (2013), salience is accurately described as:",
    options: [
      "An intrinsic physical property of the stimulus, such as brightness or loudness",
      "A property of the organism's behavior with respect to a stimulus, not a property of the stimulus itself",
      "A feature of the reinforcement schedule that maintains attention to the SD",
      "The degree to which a stimulus resembles the unconditioned stimulus in respondent conditioning"
    ],
    correctIndex: 1,
    explanation: "Catania clarified that salience is not a property of a stimulus; it is a property of the organism's behavior with respect to that stimulus. Whether salience is achieved is determined by the learner's differential responding (or lack thereof) to changes in the stimulus.",
  },
  {
    id: 19036,
    topic: "Overselective Stimulus Control",
    prompt: "Overselective stimulus control (stimulus overselectivity) is characterized by:",
    options: [
      "Responding to an extremely broad range of stimuli, producing excessive generalization",
      "The failure to develop any stimulus control despite repeated discrimination training",
      "Stimulus blocking by a competing reinforcement contingency in the social environment",
      "An extremely limited range of discriminative stimuli or stimulus features controlling behavior"
    ],
    correctIndex: 3,
    explanation: "In overselective stimulus control, the range of discriminative stimuli or stimulus features controlling behavior is extremely limited. For example, a child might focus on a minute feature of an object rather than the whole, which interferes with concept learning and language acquisition.",
  },
  {
    id: 19038,
    topic: "Stimulus Blocking and Overshadowing",
    prompt: "In overshadowing, what interferes with the acquisition of stimulus control by the relevant stimulus?",
    options: [
      "A history of extinction in the presence of the relevant stimulus",
      "Physical guidance that prevents the learner from attending to the task",
      "The most salient component of a compound stimulus arrangement controls responding and interferes with the relevant stimulus",
      "A competing reinforcement schedule for behavior incompatible with attending"
    ],
    correctIndex: 2,
    explanation: "In overshadowing, the most salient component of a compound stimulus arrangement controls responding and interferes with the acquisition of stimulus control by the more relevant stimulus. For example, pictures in text were found to overshadow the text and delay sight word acquisition.",
  },
  {
    id: 19039,
    topic: "Stimulus Blocking and Overshadowing",
    prompt: "Stimulus blocking (masking) occurs when:",
    options: [
      "A competing stimulus blocks the evocative function of a stimulus that has already acquired stimulus control",
      "An irrelevant stimulus dimension is highlighted, making the relevant dimension less salient",
      "A time delay is inserted between the instructional stimulus and the response prompt",
      "Fading removes the stimulus prompt before the natural stimulus has acquired full control"
    ],
    correctIndex: 0,
    explanation: "In stimulus blocking, even though one stimulus has acquired stimulus control over behavior, a competing stimulus can block the evocative function of that stimulus. For example, a student may know the answers to a teacher's questions but will not respond in the presence of the peer group.",
  },
  {
    id: 19041,
    topic: "Most-to-Least Prompts",
    prompt: "In a most-to-least response prompting procedure, the analyst typically begins with which type of prompt and progresses toward which type?",
    options: [
      "Verbal instruction first, then modeling, and finally physical guidance",
      "Physical guidance first, then visual prompts or verbal instructions, and finally the natural stimulus without prompts",
      "The natural stimulus first, then adds prompts if errors occur",
      "Time delay first, then removes the delay until simultaneous presentation is achieved"
    ],
    correctIndex: 1,
    explanation: "Most-to-least prompting begins with physical guidance through the entire performance sequence, then gradually reduces assistance. Customarily it moves from physical guidance to visual prompts to verbal instructions, and finally to the natural stimulus without prompts.",
  },
  {
    id: 19043,
    topic: "Least-to-Most Prompts",
    prompt: "In a least-to-most prompting procedure, what happens if the participant does not respond correctly within the specified time after the natural SD is presented?",
    options: [
      "The trial is ended and the natural SD is presented again at the start of the next trial",
      "The analyst immediately provides full physical guidance to prevent any error",
      "The analyst presents the natural SD along with a prompt of least assistance, then increases assistance with each successive trial without a correct response",
      "The analyst removes the natural SD and waits for a spontaneous response before re-presenting"
    ],
    correctIndex: 2,
    explanation: "In least-to-most prompting, if the response does not occur within the specified time, the analyst presents the natural SD with a prompt of least assistance. If the correct response still does not occur within the same time limit, the analyst adds the next level of assistance, continuing until correct responding occurs.",
  },
  {
    id: 19045,
    topic: "Time Delay",
    prompt: "Time delay is considered an errorless learning technique because:",
    options: [
      "The prompt is removed entirely from the very first trial",
      "Reinforcement is never withheld during any phase of training",
      "Physical guidance is used whenever an error occurs, preventing any incorrect independent response",
      "Students often make few or no errors as control of responding shifts from the contrived prompt to the instructional stimulus"
    ],
    correctIndex: 3,
    explanation: "Time delay is considered an errorless learning technique because students often make few or no errors as control of responding gradually shifts from the contrived prompt to the instructional stimulus over successive trials.",
  },
  {
    id: 19047,
    topic: "Stimulus Fading",
    prompt: "Stimulus fading involves:",
    options: [
      "Gradually removing physical guidance from a learner's movements",
      "Inserting increasingly longer time intervals between the SD and the response prompt",
      "Highlighting a physical dimension of a stimulus and then gradually fading that exaggerated dimension in or out",
      "Progressively shifting from physical to verbal to no prompts across trials"
    ],
    correctIndex: 2,
    explanation: "Stimulus fading involves highlighting a physical dimension (such as color, size, or position) of a stimulus to increase the likelihood of a correct response. The highlighted or exaggerated dimension is then faded gradually in or out.",
  },
  {
    id: 19048,
    topic: "Stimulus Shape Transformations",
    prompt: "In a stimulus shape transformation procedure, how is the prompt stimulus changed?",
    options: [
      "The prompt is suddenly replaced by the natural stimulus after criterion is met",
      "An initial shape that prompts a correct response is gradually changed to form the natural stimulus while correct responding is maintained",
      "The natural stimulus is gradually changed to resemble the prompt stimulus over successive trials",
      "The size of the prompt is reduced until it equals the size of the natural stimulus"
    ],
    correctIndex: 1,
    explanation: "In stimulus shape transformations, an initial stimulus shape that will prompt a correct response is gradually changed to form the natural stimulus while maintaining correct responding. The shape must change gradually enough that the student continues to respond correctly throughout the transformation.",
  },
  {
    id: 19049,
    topic: "Transferring Stimulus Control",
    prompt: "Prompt dependence results from:",
    options: [
      "Using too many different prompt types during a single training session",
      "Providing reinforcement too frequently in the presence of the natural SD",
      "Using time delay before the learner has reached criterion on 0-second trials",
      "A failure to transfer stimulus control from the prompt to the desired natural stimuli"
    ],
    correctIndex: 3,
    explanation: "Prompt dependence results from a failure to transfer stimulus control from the prompt to the desired stimuli. Practitioners must be aware of this risk when applying response and stimulus prompts, and must plan prompt fading procedures accordingly.",
  },
];

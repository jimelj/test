import type { Question } from "../types";

/**
 * BCBA practice questions for Cooper et al., Chapter 22: Shaping.
 * Grounded in the chapter text. Option order is shuffled at runtime, so
 * correctIndex placement here is arbitrary.
 */
export const QUESTIONS_M25: Question[] = [
  {
    id: 24001,
    topic: "Shaping Defined",
    prompt: "Shaping is formally defined as which of the following?",
    options: [
      "The differential reinforcement of successive approximations toward a terminal behavior",
      "The systematic use of prompts and fading to establish a new response",
      "The process of delivering reinforcement on a fixed-ratio schedule until a behavior emerges",
      "The pairing of a neutral stimulus with an unconditioned reinforcer to establish a conditioned reinforcer"
    ],
    correctIndex: 0,
    explanation: "Shaping is defined as the differential reinforcement of successive approximations toward a terminal behavior. The three-part process involves detecting a change, judging whether it is a closer approximation, and differentially reinforcing that approximation."
  },
  {
    id: 24002,
    topic: "Shaping Defined",
    prompt: "Which three steps, in order, make up the shaping process?",
    options: [
      "Detect a change, make a discriminated judgment about whether it is a closer approximation, then differentially reinforce that approximation",
      "Prompt the behavior, reinforce it, then fade the prompt",
      "Establish a terminal behavior, set a fixed criterion, then deliver reinforcement only when that criterion is met exactly",
      "Observe baseline, apply a token economy, then evaluate generalization"
    ],
    correctIndex: 0,
    explanation: "The shaping process consists of (a) detecting a change in the learner's environment, (b) making a discriminated judgment about whether that change is a progressively closer approximation to the terminal behavior, and (c) differentially reinforcing that closer successive approximation."
  },
  {
    id: 24003,
    topic: "Differential Reinforcement",
    prompt: "In the context of shaping, differential reinforcement refers to which procedure?",
    options: [
      "Delivering reinforcement after every response regardless of its form",
      "Alternating between reinforcement and punishment depending on the accuracy of the response",
      "Using different types of reinforcers for different learners in the same program",
      "Presenting a reinforcer only to those response class members that share a specified dimension, while placing all other members on extinction"
    ],
    correctIndex: 3,
    explanation: "Differential reinforcement in shaping means presenting an unconditioned or conditioned reinforcer only to those emitted members of a response class that share a specified dimension or quality, while placing all other emitted response class members on extinction."
  },
  {
    id: 24004,
    topic: "Differential Reinforcement",
    prompt: "Which of the following correctly lists the three fundamental effects of differential reinforcement?",
    options: [
      "Increased response variability, decreased response rate, and stimulus generalization",
      "Permanent behavior change, complete elimination of old responses, and automatic generalization",
      "Increased latency, decreased duration, and higher interresponse time",
      "Reinforced responses become more likely, unreinforced responses become less likely, and extinction-induced variability may produce closer approximations"
    ],
    correctIndex: 3,
    explanation: "Differential reinforcement has three fundamental effects: responses similar to those reinforced are more likely to reoccur; responses resembling the unreinforced members are less likely to reoccur (extinction); and extinction-induced variability may produce, by chance, a closer approximation to the terminal behavior."
  },
  {
    id: 24005,
    topic: "Extinction-Induced Variability",
    prompt: "Extinction-induced variability is best described as which of the following?",
    options: [
      "A temporary increase in response rate that occurs when reinforcement is first withheld",
      "The permanent suppression of a response class following consistent non-reinforcement",
      "The spontaneous recovery of a previously extinguished behavior after a rest period",
      "A temporary increase in the changeability of response class topography that may produce, by chance, a closer approximation to the terminal behavior"
    ],
    correctIndex: 3,
    explanation: "Extinction-induced variability is the phenomenon whereby non-reinforcement of a response class produces a temporary increase in the changeability of the response class topography, which may produce by chance alone a closer approximation to the terminal behavior. It addresses change in the form of the response, whereas an extinction burst addresses change in the rate."
  },
  {
    id: 24007,
    topic: "Response Differentiation",
    prompt: "Response differentiation is defined as which of the following?",
    options: [
      "The emergence of a new response class composed primarily of responses sharing the characteristics of a previously reinforced subclass",
      "The practitioner's ability to distinguish one topography from another during observation",
      "The process by which a conditioned stimulus comes to control a specific response",
      "The gradual fading of a prompt until the learner responds independently"
    ],
    correctIndex: 0,
    explanation: "When differential reinforcement is applied consistently within a response class, its triple effect results in a new response class composed primarily of responses sharing the characteristics of the previously reinforced subclass. This emergence of a new response class is called response differentiation."
  },
  {
    id: 24008,
    topic: "Successive Approximations",
    prompt: "A successive approximation refers to which of the following?",
    options: [
      "A fixed, step-wise gradient of performance levels that the learner must pass through in order",
      "A discrete trial procedure in which the same stimulus is presented repeatedly until mastery",
      "The gradual and progressive criterion change for delivering reinforcement for a behavior that is closer to the terminal behavior than the response it replaces",
      "The delivery of reinforcement on a variable-ratio schedule to maintain response strength"
    ],
    correctIndex: 2,
    explanation: "A successive approximation refers to the gradual and progressive criterion change for delivering reinforcement for a behavior that is closer to the terminal behavior than the response it replaces. The process is not a fixed step-wise gradient."
  },
  {
    id: 24009,
    topic: "Successive Approximations",
    prompt: "What is the consequence of setting the criterion for reinforcement too high during a shaping program?",
    options: [
      "The learner receives too much reinforcement, slowing progress",
      "Extinction occurs and progress toward the terminal behavior is thwarted",
      "The behavior becomes firmly established at that approximation, making it difficult to move forward",
      "The learner spontaneously emits the terminal behavior without additional shaping"
    ],
    correctIndex: 1,
    explanation: "If the criterion is set too high during shaping, extinction occurs and progress is thwarted. Conversely, if the criterion is set too low, an excessive number of behaviors at the same performance level will be reinforced, stalling progress."
  },
  {
    id: 24012,
    topic: "Performance Dimensions That Can Be Shaped",
    prompt: "Which performance dimension involves the elapsed time from the onset of a response to its endpoint?",
    options: [
      "Latency",
      "Duration",
      "Interresponse time",
      "Magnitude"
    ],
    correctIndex: 1,
    explanation: "Duration is the elapsed time from the onset of a response to its endpoint. Latency is the time between the onset of the antecedent stimulus and the occurrence of the behavior, while interresponse time is the time between responses."
  },
  {
    id: 24014,
    topic: "Performance Dimensions That Can Be Shaped",
    prompt: "Reducing rapid eating by increasing the time between food bites is an example of shaping which performance dimension?",
    options: [
      "Duration",
      "Topography",
      "Interresponse time",
      "Rate"
    ],
    correctIndex: 2,
    explanation: "Interresponse time (IRT) is the time between responses. Increasing the IRT between food bites addresses rapid eating. Similarly, increasing the IRT between lighting cigarettes can be used to reduce smoking behavior."
  },
  {
    id: 24015,
    topic: "Performance Dimensions That Can Be Shaped",
    prompt: "A practitioner shapes a student's voice volume from 45 decibels to 65 decibels. Which dimension of behavior is being shaped?",
    options: [
      "Rate",
      "Topography",
      "Latency",
      "Magnitude"
    ],
    correctIndex: 3,
    explanation: "Magnitude refers to response strength or force. Increasing projected voice volume from 45 dB to 65 dB (the amplitude of normal conversational speech) is a classic example of shaping the magnitude dimension."
  },
  {
    id: 24016,
    topic: "Shaping Across Response Topographies",
    prompt: "Shaping behavior across different response topographies is best described as which of the following?",
    options: [
      "Differentially reinforcing selected members of one response class while placing members of other response classes on extinction, thereby gradually increasing the criterion of performance",
      "Applying differential reinforcement to a single dimension of a response while its form stays the same",
      "Gradually fading a prompt across multiple stimulus conditions",
      "Delivering reinforcement for any response that occurs, regardless of its form"
    ],
    correctIndex: 0,
    explanation: "Shaping behavior across different response topographies means that selected members of a response class are differentially reinforced, whereas members of other response classes are placed on extinction. The practitioner gradually increases the criterion of performance before delivering reinforcement."
  },
  {
    id: 24019,
    topic: "Shaping Within a Response Topography",
    prompt: "Shaping within a response topography is characterized by which of the following?",
    options: [
      "The form of the behavior remains constant while differential reinforcement is applied to another measurable dimension of that behavior",
      "The form of the behavior changes progressively until it matches the terminal behavior",
      "The antecedent stimulus is faded gradually while the response stays the same",
      "Reinforcement is delivered on a variable-interval schedule to maintain the behavior"
    ],
    correctIndex: 0,
    explanation: "Shaping a behavior within a response topography means that the form of the behavior remains constant, but differential reinforcement is applied to another measurable dimension of the behavior, such as magnitude or duration."
  },
  {
    id: 24020,
    topic: "Shaping Within a Response Topography",
    prompt: "A physical education teacher reinforces tosses of a life preserver that land progressively closer to a target without changing the form of the toss itself. This is an example of shaping within a response topography because:",
    options: [
      "The practitioner is using punishment to eliminate inaccurate tosses",
      "The behavior is being shaped across multiple distinct response classes",
      "The dimension being shaped is the magnitude of the toss, while the form of the toss remains constant",
      "The student's latency to initiate the toss is being reduced with each trial"
    ],
    correctIndex: 2,
    explanation: "In the life-preserver example, the form of the toss stays the same but the magnitude (distance and accuracy) is shaped. This is an example of shaping within a response topography, where the topography is constant and another dimension is shaped."
  },
  {
    id: 24021,
    topic: "Shaping vs. Stimulus Fading",
    prompt: "How does shaping differ from stimulus fading?",
    options: [
      "In shaping, the response stays the same and the antecedent stimulus changes; in stimulus fading, the antecedent stimulus stays the same and the response changes",
      "Shaping uses punishment to eliminate incorrect responses; stimulus fading uses extinction only",
      "Shaping is used only with animals; stimulus fading is used only with humans",
      "In shaping, the antecedent stimulus stays the same while the response progressively becomes more differentiated; in stimulus fading, the antecedent stimulus changes gradually while the response stays essentially the same"
    ],
    correctIndex: 3,
    explanation: "In shaping, the antecedent stimulus for the terminal behavior stays the same while the response progressively becomes more differentiated. In stimulus fading, the opposite occurs: the antecedent stimulus changes gradually while the response stays essentially the same."
  },
  {
    id: 24022,
    topic: "Beneficial Aspects of Shaping",
    prompt: "Which of the following is identified as a beneficial aspect of shaping?",
    options: [
      "Shaping uses a positive, reinforcing approach and is systematic, with reinforcement delivered consistently upon occurrence of successive approximations",
      "Shaping always produces immediate results without the need for multiple approximations",
      "Shaping typically involves punishment to eliminate competing behaviors quickly",
      "Shaping is most effective when used as a standalone procedure without combining it with other techniques"
    ],
    correctIndex: 0,
    explanation: "Shaping uses a positive (reinforcing) approach to teach new behaviors. It is systematic: reinforcement is delivered consistently upon the occurrence of any successive approximations to the terminal behavior, while non-approximations are placed on extinction. Punishment is typically not involved."
  },
  {
    id: 24023,
    topic: "Limitations of Shaping",
    prompt: "Which of the following is listed as a limitation of shaping?",
    options: [
      "Shaping cannot be used with non-verbal learners",
      "Shaping always requires the use of aversive stimuli to suppress non-approximations",
      "Shaping is only appropriate for shaping behavior across topographies, not within a single topography",
      "Shaping can be misapplied, inadvertently reinforcing increasingly problematic behavior through unintentional differential reinforcement"
    ],
    correctIndex: 3,
    explanation: "One key limitation is that shaping can be misapplied. For example, a parent who ignores low-volume requests but eventually responds to escalating demands is inadvertently using differential reinforcement to shape higher-intensity call-outs, which Skinner described as conditioning a child to be annoying."
  },
  {
    id: 24024,
    topic: "Limitations of Shaping",
    prompt: "A father consistently ignores his daughter's quiet requests for ice cream but eventually gives her ice cream after her demands escalate in volume. Over time, the daughter starts with louder demands. This scenario illustrates which limitation of shaping?",
    options: [
      "Shaping requires continuous monitoring and can be conducted inefficiently",
      "Shaping can be misapplied, resulting in the unintentional shaping of problematic behavior",
      "Progress toward the terminal behavior is not always linear",
      "Harmful behavior can be shaped through successive approximations"
    ],
    correctIndex: 1,
    explanation: "This scenario illustrates that shaping can be misapplied. The father has unintentionally differentially reinforced an ever-rising level of attention-getting behavior, shaping higher-intensity demands. Skinner noted this is very close to the procedure for conditioning a child to be annoying."
  },
  {
    id: 24026,
    topic: "Increasing Shaping Efficiency",
    prompt: "Which of the following methods is described as a way to increase the efficiency of shaping?",
    options: [
      "Using a discriminative stimulus, physical guidance, imitative prompts, or a percentile schedule",
      "Delivering reinforcement on a fixed-interval schedule",
      "Immediately jumping to the terminal behavior criterion without intermediate approximations",
      "Withholding reinforcement entirely for the first several sessions to increase motivation"
    ],
    correctIndex: 0,
    explanation: "Shaping may become more efficient by using a discriminative stimulus (SD), physical guidance, imitative prompts, and/or a percentile schedule. Any prompt introduced to enhance shaping should later be faded."
  },
  {
    id: 24028,
    topic: "Increasing Shaping Efficiency",
    prompt: "Why should physical guidance prompts used during shaping eventually be faded?",
    options: [
      "Because physical guidance always produces competing behaviors that interfere with the terminal behavior",
      "Because the goal is for the learner to ultimately perform the behavior independently, without the prompt",
      "Because physical guidance is considered an aversive procedure under most ethical guidelines",
      "Because percentile schedules render physical guidance unnecessary after baseline"
    ],
    correctIndex: 1,
    explanation: "Any physical guidance prompt used to enhance or speed up shaping should later be faded. The goal is independent performance of the terminal behavior, and leaving the prompt in place would create prompt dependence."
  },
  {
    id: 24029,
    topic: "Percentile Schedules",
    prompt: "A percentile schedule in shaping is best described as which of the following?",
    options: [
      "A schedule in which reinforcement is delivered after a fixed percentage of all responses, regardless of quality",
      "A variable-ratio schedule calibrated to maintain a specific percentage of correct responses",
      "A mathematically derived schedule that continually calculates and adjusts the criterion for reinforcement based on recent observations of the learner's own performance",
      "A schedule that reinforces the top-performing learner in a group setting"
    ],
    correctIndex: 2,
    explanation: "A percentile schedule uses a mathematical equation with parameters set by the practitioner to continually calculate and adjust the criterion for reinforcement based on a fixed number of the learner's most recent observations. It quantifies what constitutes a criterional response at any given point in training."
  },
  {
    id: 24030,
    topic: "Percentile Schedules",
    prompt: "In the percentile schedule equation, what does the parameter 'w' represent?",
    options: [
      "The window of training sessions over which data are collected",
      "The number of recent observations taken into account",
      "The density of reinforcement",
      "The weight assigned to topographic accuracy"
    ],
    correctIndex: 2,
    explanation: "In the percentile schedule equation, w denotes the density of reinforcement. With a w value of .5, a response meeting the criterion for reinforcement for a given observation will be observed approximately half the time, offering a mixture of reinforcement and extinction."
  },
  {
    id: 24032,
    topic: "Clicker Training",
    prompt: "How does a clicker function as a reinforcer in clicker training?",
    options: [
      "The clicking sound is an unconditioned reinforcer that is inherently pleasurable for animals",
      "The clicker is a punisher that suppresses incorrect responses while reinforcement follows correct ones",
      "The clicking sound becomes a conditioned reinforcer through pairing with an unconditioned reinforcer, such as food",
      "The clicker signals the onset of an extinction period during which no reinforcement is available"
    ],
    correctIndex: 2,
    explanation: "In clicker training, reinforcement is paired with the sound of the clicker so that the sound becomes a conditioned reinforcer. The clicker provides an immediate, precise signal that a behavior has been performed correctly and that reinforcement is forthcoming."
  },
  {
    id: 24033,
    topic: "Clicker Training",
    prompt: "According to Pryor's tips for clicker training, when should the click occur relative to the desired behavior?",
    options: [
      "After the desired behavior has been fully completed and the learner has returned to a neutral position",
      "During the desired behavior, not after it is completed",
      "Immediately before the desired behavior to serve as a discriminative stimulus",
      "At random intervals to maintain unpredictability and prevent satiation"
    ],
    correctIndex: 1,
    explanation: "Pryor's Tip 2 states: 'Click DURING the desired behavior, not after it is completed. The timing of the click is crucial.' The click ends the behavior, and the treat is delivered after the click."
  },
  {
    id: 24038,
    topic: "Emerging Applications of Shaping",
    prompt: "Telemedicine technology has been applied to implement shaping and differential reinforcement programs primarily to serve which population?",
    options: [
      "Elite athletes in urban training facilities",
      "Large group classrooms in suburban school districts",
      "Hospital patients who cannot participate in behavioral interventions due to medical instability",
      "Families and learners in rural or remote locations with limited access to on-site specialists"
    ],
    correctIndex: 3,
    explanation: "Telemedicine technologies, connecting host-institution training centers with off-site locations through high-speed internet-based audio-video links, were originally developed to provide consultation and assessment to families in rural or remote locations and have been expanded to include functional analyses and differential reinforcement procedures."
  },
  {
    id: 24039,
    topic: "Shaping Guidelines",
    prompt: "When selecting a terminal behavior for shaping, the chapter identifies which factor as the ultimate criterion for prioritizing behaviors to target?",
    options: [
      "The behavior that is easiest to shape given the current response repertoire",
      "The individual's expected independence after the intervention and the likelihood of attaining additional reinforcers from the environment",
      "The behavior most frequently requested by family members or caregivers",
      "The behavior that requires the fewest approximations to reach criterion"
    ],
    correctIndex: 1,
    explanation: "The ultimate criterion for selecting a terminal behavior is the individual's expected independence after an intervention, specifically the likelihood of her attaining additional reinforcers from the environment. This guides the practitioner toward the highest-priority behavior to target."
  },
  {
    id: 24042,
    topic: "Shaping Guidelines",
    prompt: "Assessing the response repertoire before beginning shaping serves which two purposes?",
    options: [
      "It identifies potential reinforcers and establishes a baseline reinforcement rate",
      "It allows the practitioner to determine whether punishment is necessary and which approximation levels to skip",
      "It measures interresponse time and latency so that the percentile schedule can be calibrated",
      "It establishes the behavioral gap between the current level and the terminal behavior, and it helps project the successive approximations that might be emitted during shaping"
    ],
    correctIndex: 3,
    explanation: "Assessing the response repertoire has a two-fold purpose: first, to ascertain the behavioral gap between current behavior and the terminal behavior; and second, to help project the successive approximations that might be emitted, so the practitioner is better prepared to observe and reinforce them when they occur."
  },
  {
    id: 24046,
    topic: "Learning to Shape",
    prompt: "PORTL stands for which of the following?",
    options: [
      "Progressive Operant Reinforcement and Transfer Laboratory",
      "Procedural Observation and Response Training Lab",
      "Portable Operant Research and Teaching Laboratory",
      "Practice Outcomes in Reinforcement Training and Learning"
    ],
    correctIndex: 2,
    explanation: "PORTL is an acronym for Portable Operant Research and Teaching Laboratory. It is a table-top shaping game developed originally by canine trainer Kay Laurence and extrapolated to human participants by Jose Rosales-Ruiz and graduate students at the University of North Texas."
  },
  {
    id: 24048,
    topic: "Learning to Shape",
    prompt: "According to the chapter, what is the most effective way to gain proficiency as a shaper?",
    options: [
      "Reading detailed narrative descriptions, illustrations, rules, and guidelines about shaping",
      "Watching video recordings of expert shapers without attempting the procedure oneself",
      "Practicing shaping behavior, ideally with feedback and reinforcement from a skilled shaper",
      "Memorizing the definitions of shaping and differential reinforcement before attempting any practical exercise"
    ],
    correctIndex: 2,
    explanation: "Reading about shaping is necessary but not sufficient for gaining proficiency. The chapter states that the best way to learn how to shape behavior proficiently is to practice shaping behavior, ideally seeking the advice and direction of a skilled behavior shaper who can provide directive feedback and reinforcement during training."
  },
  {
    id: 24050,
    topic: "Shaping Defined",
    prompt: "A behavior analyst shapes a child to use a spoon independently. She initially reinforces any hand or finger movement, then successive movements toward the spoon, then grasping the spoon, then raising it. When the child reaches for a toy instead of the spoon, the analyst provides no reinforcement. Withholding reinforcement for the toy-reaching response represents which component of shaping?",
    options: [
      "The use of a discriminative stimulus to signal which responses will be reinforced",
      "The application of extinction to responses that are not closer approximations to the terminal behavior",
      "The use of a percentile schedule to calculate the criterion for reinforcement",
      "The fading of a physical guidance prompt to promote independent responding"
    ],
    correctIndex: 1,
    explanation: "Withholding reinforcement for the toy-reaching response represents placing non-approximations on extinction. Differential reinforcement in shaping requires that responses not constituting a closer approximation to the terminal behavior are placed on extinction, while responses that are closer approximations are reinforced."
  }
];

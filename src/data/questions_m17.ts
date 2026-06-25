import type { Question } from "../types";

/**
 * BCBA practice questions for Cooper et al., Chapter 14: Positive Punishment.
 * Grounded in the chapter text. Option order is shuffled at runtime, so
 * correctIndex placement here is arbitrary.
 */
export const QUESTIONS_M17: Question[] = [
  {
    id: 16001,
    topic: "Definition and Characteristics of Punishment",
    prompt: "Punishment is defined by which of the following?",
    options: [
      "The intention of the person delivering the consequence",
      "The physical properties of the consequence delivered",
      "The severity of pain or discomfort produced by the consequence",
      "A decrease in the future frequency of the behavior that preceded the stimulus change"
    ],
    correctIndex: 3,
    explanation: "Punishment is defined by its effect: a response followed immediately by a stimulus change that decreases the future frequency of that type of behavior. It is not defined by the nature of the consequence or the intention of the agent delivering it.",
  },
  {
    id: 16002,
    topic: "Positive Punishment and Negative Punishment",
    prompt: "Positive punishment has occurred when which of the following happens?",
    options: [
      "A stimulus is presented following a behavior, resulting in a decrease in future frequency",
      "A stimulus is removed following a behavior, resulting in a decrease in future frequency",
      "A stimulus is presented following a behavior, resulting in an increase in future frequency",
      "A stimulus is removed following a behavior, resulting in an increase in future frequency"
    ],
    correctIndex: 0,
    explanation: "Positive punishment occurs when the presentation of a stimulus (or an increase in the intensity of an already present stimulus) immediately following a behavior results in a decrease in the frequency of the behavior. The modifier 'positive' refers to the addition of a stimulus, not to anything desirable.",
  },
  {
    id: 16003,
    topic: "Positive Punishment and Negative Punishment",
    prompt: "Negative punishment has occurred when which of the following happens?",
    options: [
      "A stimulus is presented following a behavior, resulting in a decrease in future frequency",
      "A stimulus is removed following a behavior, resulting in a decrease in future frequency",
      "A stimulus is presented following a behavior, resulting in an increase in future frequency",
      "A stimulus is removed following a behavior, resulting in an increase in future frequency"
    ],
    correctIndex: 1,
    explanation: "Negative punishment occurs when the removal of an already present stimulus (or a decrease in the intensity of an already present stimulus) immediately following a behavior results in a decrease in the future frequency of the behavior. Response cost and time-out from reinforcement are examples.",
  },
  {
    id: 16004,
    topic: "Positive Punishment and Negative Punishment",
    prompt: "The modifiers 'positive' and 'negative' when paired with the term punishment refer to which of the following?",
    options: [
      "Whether the procedure is ethically acceptable",
      "Whether the behavior change produced is desirable or undesirable",
      "Whether the punisher was intentionally or unintentionally applied",
      "Whether the stimulus change is the presentation or removal of a stimulus"
    ],
    correctIndex: 3,
    explanation: "Just as with reinforcement, 'positive' and 'negative' used with punishment specify only whether the stimulus change is best described as the presentation of a new stimulus (positive) or the termination of an already present stimulus (negative). They do not indicate intention or desirability.",
  },
  {
    id: 16006,
    topic: "Types of Punishers",
    prompt: "An unconditioned punisher is best described as which of the following?",
    options: [
      "A stimulus whose punishing capability is acquired through pairing with other punishers",
      "A stimulus whose presentation functions as punishment without having been paired with any other punishers",
      "A stimulus that suppresses behavior only under specific motivating operations",
      "A stimulus that becomes a punisher through verbal analog conditioning"
    ],
    correctIndex: 1,
    explanation: "An unconditioned punisher (also called a primary or unlearned punisher) is a stimulus whose presentation functions as punishment without having been paired with any other punishers. Because unconditioned punishers are products of the evolutionary history of a species, all biologically intact members of that species are susceptible to them.",
  },
  {
    id: 16008,
    topic: "Types of Punishers",
    prompt: "A conditioned punisher acquires its suppressive capability through which process?",
    options: [
      "Repeated presentation of the stimulus without any pairing with other punishers",
      "Deprivation of the stimulus over an extended period",
      "Stimulus-stimulus pairing with one or more unconditioned or previously conditioned punishers",
      "Increasing the intensity of the stimulus gradually over time"
    ],
    correctIndex: 2,
    explanation: "A conditioned punisher (also called a secondary or learned punisher) acquires the capability to function as a punisher through stimulus-stimulus pairing with one or more unconditioned or previously conditioned punishers. If a conditioned punisher is repeatedly presented without the punisher(s) with which it was initially paired, its effectiveness will wane.",
  },
  {
    id: 16009,
    topic: "Types of Punishers",
    prompt: "Reprimands and disapproving gestures function as punishers for most people because they have been paired with a wide variety of unconditioned or conditioned punishers. This makes them examples of which type of punisher?",
    options: [
      "Generalized conditioned punishers",
      "Unconditioned punishers",
      "Automatic punishers",
      "Primary punishers"
    ],
    correctIndex: 0,
    explanation: "A generalized conditioned punisher results from being paired with numerous unconditioned and conditioned punishers, making it independent of specific motivating conditions. Reprimands and disapproving gestures are generalized conditioned punishers because of their repeated pairing with a wide range of aversive events.",
  },
  {
    id: 16011,
    topic: "Discriminative Effects of Punishment",
    prompt: "A discriminative stimulus for punishment (SDp) is best defined as which of the following?",
    options: [
      "A stimulus condition in whose presence a response occurs at a higher frequency due to a history of reinforcement",
      "Any neutral stimulus that precedes the delivery of a punisher",
      "A stimulus condition in whose presence a response occurs at a lower frequency than in its absence, due to a history of response-contingent punishment in that stimulus's presence",
      "A stimulus whose removal is followed by a decrease in the target behavior"
    ],
    correctIndex: 2,
    explanation: "An SDp is a stimulus condition in the presence of which a response has a lower probability of occurrence than in its absence, as a result of a conditioning history in which responses in the presence of that stimulus have been punished and similar responses in its absence have not been punished (or received less punishment).",
  },
  {
    id: 16012,
    topic: "Discriminative Effects of Punishment",
    prompt: "A child reaches into the cookie jar before dinner only when no adult is in the room, because reaching into the jar has been scolded when an adult was present. This child's behavior is best described as which of the following?",
    options: [
      "Recovery from punishment in an unpunished context",
      "Behavioral contrast in the presence of the adult",
      "An unconditioned punisher controlling the child's behavior",
      "A discriminated operant for punishment"
    ],
    correctIndex: 3,
    explanation: "A discriminated operant for punishment results from a conditioning history in which responses in the presence of a certain stimulus have been punished and similar responses in the absence of that stimulus have not. The adult's presence becomes an SDp that suppresses cookie-reaching behavior.",
  },
  {
    id: 16013,
    topic: "Recovery from Punishment",
    prompt: "Recovery from punishment is especially likely under which condition?",
    options: [
      "The punisher was delivered at maximum intensity from the start",
      "The punished behavior is also producing reinforcement",
      "Punishment was delivered on a continuous (FR 1) schedule",
      "The punishment contingency is still in effect"
    ],
    correctIndex: 1,
    explanation: "Recovery from punishment, in which behavior gradually returns toward pre-punishment levels after punishment is discontinued, is especially likely when the behavior being punished also obtains reinforcement. Azrin's (1960) laboratory research demonstrated that responding in pigeons gradually recovered over sessions when punishment and reinforcement were concurrent.",
  },
  {
    id: 16015,
    topic: "Factors That Influence the Effectiveness of Punishment",
    prompt: "Basic studies indicate that punishment procedures can fail to suppress responding when the consequence is delayed by as little as how much time?",
    options: [
      "1 to 5 seconds",
      "10 to 30 seconds",
      "60 to 90 seconds",
      "5 to 10 minutes"
    ],
    correctIndex: 1,
    explanation: "Basic studies with humans and nonhumans indicate that punishment procedures can fail to suppress responding when the consequence is delayed by just 10 to 30 seconds. When a punisher is delayed, other responses or multiple occurrences of the targeted behavior are likely to intervene, weakening the contingency.",
  },
  {
    id: 16016,
    topic: "Factors That Influence the Effectiveness of Punishment",
    prompt: "Research on punishment intensity has consistently found which of the following relationships?",
    options: [
      "A negative correlation between punisher intensity and response suppression",
      "No reliable relationship between punisher intensity and either suppression or recovery",
      "A positive correlation between punisher intensity and recovery from punishment",
      "A positive correlation between punisher intensity and response suppression, and a negative correlation between punisher intensity and recovery"
    ],
    correctIndex: 3,
    explanation: "Basic researchers have reported that (1) a positive correlation exists between the intensity of the punishing stimulus and response suppression, and (2) a negative correlation exists between the intensity of the punishing stimulus and recovery from punishment. More intense punishment produces more suppression and less recovery.",
  },
  {
    id: 16018,
    topic: "Factors That Influence the Effectiveness of Punishment",
    prompt: "Which schedule of punishment produces the greatest response suppression while the contingency is in effect?",
    options: [
      "Variable ratio schedule",
      "Fixed interval schedule",
      "Continuous (FR 1) schedule",
      "Thin intermittent schedule"
    ],
    correctIndex: 2,
    explanation: "The suppressive effects of a punisher are maximized by a continuous schedule of punishment (FR 1) in which each occurrence of the behavior is followed by the punishing consequence. In general, the greater the proportion of responses followed by the punisher, the greater the response reduction.",
  },
  {
    id: 16021,
    topic: "Possible Side Effects and Problems with Punishment",
    prompt: "Pain-elicited aggression directed toward any nearby person or object following the delivery of a punisher is referred to as which of the following?",
    options: [
      "Operant aggression",
      "Behavioral contrast aggression",
      "Escape-motivated aggression",
      "Respondent aggression"
    ],
    correctIndex: 3,
    explanation: "Respondent aggression (also called pain-elicited aggression) is a reflexive form of aggression directed toward any nearby person or object that is elicited by an aversive stimulus. Operant aggression, in contrast, occurs because it has enabled the person to escape aversive stimulation in the past.",
  },
  {
    id: 16022,
    topic: "Possible Side Effects and Problems with Punishment",
    prompt: "A student who is repeatedly admonished for sloppy work begins to skip class entirely. Which side effect of punishment does this best illustrate?",
    options: [
      "Behavioral contrast",
      "Escape and avoidance",
      "Modeling of undesirable behavior",
      "Pain-elicited respondent aggression"
    ],
    correctIndex: 1,
    explanation: "Escape and avoidance are expected reactions to aversive stimulation. A student who stops coming to class to escape repeated admonishments is demonstrating an avoidance behavior that may be a greater problem than the original target behavior being punished.",
  },
  {
    id: 16024,
    topic: "Possible Side Effects and Problems with Punishment",
    prompt: "A parent who spanks a child to stop the child from hitting playmates may inadvertently increase hitting behavior in the child. This is an example of which side effect of punishment?",
    options: [
      "Behavioral contrast",
      "Negative reinforcement of the punishing agent",
      "Escape and avoidance",
      "Modeling of undesirable behavior"
    ],
    correctIndex: 3,
    explanation: "When a person uses physical punishment (such as spanking) to reduce a behavior, the child may be more likely to imitate the punishing behavior than to follow verbal instructions about what not to do. More than three decades of research have found a strong correlation between exposure to harsh punishment and antisocial behavior.",
  },
  {
    id: 16029,
    topic: "Response Blocking",
    prompt: "Response blocking is best defined as which of the following?",
    options: [
      "Removing the opportunity for reinforcement by blocking access to preferred items",
      "Delivering a verbal reprimand before a behavior occurs to prevent its onset",
      "Physically intervening as soon as the person begins to emit the problem behavior to prevent the completion of the response",
      "Interrupting a stereotypic behavior and redirecting the person to an alternative activity"
    ],
    correctIndex: 2,
    explanation: "Response blocking involves physically intervening as soon as the person begins to emit the problem behavior to prevent the completion of the response. It has shown effectiveness in reducing behaviors such as chronic hand mouthing, eye poking, and pica.",
  },
  {
    id: 16031,
    topic: "Response Blocking",
    prompt: "If response blocking occurs before a response is emitted at all, its suppressive effects cannot be attributed to punishment or extinction. What is the reason?",
    options: [
      "Punishment and extinction are both behavior-to-consequence relations, and preventing the behavior eliminates the behavior-consequence contingency",
      "The blocking therapist's presence becomes a conditioned reinforcer that offsets punishment",
      "Antecedent stimuli cannot influence behavior frequency under any circumstances",
      "Preventing the behavior entirely means the punisher was delivered on an FR 0 schedule"
    ],
    correctIndex: 0,
    explanation: "Punishment and extinction are both behavior-to-consequence relations. Any procedure that prevents the target behavior from occurring in its entirety eliminates the behavior-consequence contingency. Such a procedure should be considered an antecedent intervention rather than a punishment or extinction procedure.",
  },
  {
    id: 16032,
    topic: "Response Interruption and Redirection (RIRD)",
    prompt: "Response interruption and redirection (RIRD) is best described as which of the following?",
    options: [
      "A schedule thinning procedure for transitioning from continuous to intermittent punishment",
      "A punishment procedure requiring the individual to perform effortful behavior topographically related to the problem behavior",
      "A procedural variation of response blocking that includes interrupting stereotypic behavior at its onset and redirecting the individual to complete high-probability behaviors",
      "A procedure in which the problem behavior is reinforced with preferred items to redirect motivation"
    ],
    correctIndex: 2,
    explanation: "RIRD is a procedural variation of response blocking that includes interrupting stereotypic behavior at its onset and redirecting the individual to complete high-probability behaviors instead. Both motor RIRD and vocal RIRD have been used primarily with individuals with autism who emitted high levels of repetitive, stereotypic, nonfunctional behaviors.",
  },
  {
    id: 16034,
    topic: "Contingent Exercise",
    prompt: "Contingent exercise is best described as which of the following?",
    options: [
      "Requiring the client to repeatedly practice the correct form of the behavior that was performed incorrectly",
      "Requiring the client to return the environment to its original state following the problem behavior",
      "Requiring the client to perform an exercise that is topographically identical to the problem behavior",
      "Requiring the client to perform a response that is not topographically related to the problem behavior"
    ],
    correctIndex: 3,
    explanation: "Contingent exercise is an intervention in which the client is required to perform a response that is not topographically related to the problem behavior. For example, Luce, Delquadri, and Hall (1980) required a child who hit others to stand up and sit down 10 times contingent on each hitting episode.",
  },
  {
    id: 16036,
    topic: "Overcorrection",
    prompt: "Overcorrection is best defined as which of the following?",
    options: [
      "A tactic in which, contingent on each occurrence of the problem behavior, the learner engages in effortful behavior directly or logically related to the problem behavior",
      "A procedure in which reinforcement for appropriate behavior is provided in excess to compensate for past punishment",
      "A schedule of punishment that exceeds a continuous (FR 1) rate to hasten behavioral suppression",
      "Any procedure in which the therapist physically guides the individual through a corrective behavior sequence"
    ],
    correctIndex: 0,
    explanation: "Overcorrection is a behavior reduction tactic in which, contingent on each occurrence of the problem behavior, the learner is required to engage in effortful behavior that is directly or logically related to the problem behavior. It combines the suppressive effects of punishment with the educative effects of positive practice.",
  },
  {
    id: 16037,
    topic: "Overcorrection",
    prompt: "In restitutional overcorrection, the learner is required to do which of the following?",
    options: [
      "Repeatedly perform a correct form of the behavior for a specified duration",
      "Repair the damage caused by the problem behavior and then bring the environment to a condition better than it was prior to the misbehavior",
      "Perform effortful exercise that is unrelated to the problem behavior",
      "Observe a model performing the correct behavior and then imitate it"
    ],
    correctIndex: 1,
    explanation: "In restitutional overcorrection, contingent on the problem behavior, the learner is required to repair the damage caused by the problem behavior by returning the environment to its original state and then to engage in additional behavior that brings the environment to a condition better than it was prior to the misbehavior.",
  },
  {
    id: 16038,
    topic: "Overcorrection",
    prompt: "In positive practice overcorrection, the learner is required to do which of the following?",
    options: [
      "Return the environment to its original state and then improve it beyond its pre-misbehavior condition",
      "Perform a response unrelated in form to the problem behavior as a consequence of misbehaving",
      "Observe the practitioner modeling the correct behavior and then engage in the behavior once correctly",
      "Repeatedly perform a correct form of the behavior, or a behavior incompatible with the problem behavior, for a specified duration or number of responses"
    ],
    correctIndex: 3,
    explanation: "In positive practice overcorrection, contingent on the problem behavior, the learner is required to repeatedly perform a correct form of the behavior, or a behavior incompatible with the problem behavior, for a specified duration of time or number of responses. This entails an educative component requiring the person to engage in an appropriate alternative behavior.",
  },
  {
    id: 16041,
    topic: "Guidelines for Using Punishment",
    prompt: "Under which conditions is punishment considered a treatment of choice?",
    options: [
      "When the problem behavior produces serious physical harm, reinforcement-based treatments have failed, or the reinforcer maintaining the behavior cannot be identified or withheld",
      "When reinforcement-based procedures are too time-consuming for the clinician to implement",
      "When the client or family prefers aversive procedures over reinforcement-based ones",
      "When the problem behavior occurs at a frequency of fewer than five times per day"
    ],
    correctIndex: 0,
    explanation: "Punishment may be a treatment of choice when (a) the problem behavior produces serious physical harm and must be suppressed quickly, (b) reinforcement-based treatments have not reduced the problem behavior to socially acceptable levels, or (c) the reinforcer maintaining the problem behavior cannot be identified or withheld.",
  },
  {
    id: 16042,
    topic: "Guidelines for Using Punishment",
    prompt: "A behavior analyst conducts a punisher assessment before implementing a punishment procedure. What are two advantages identified for doing so?",
    options: [
      "It eliminates the need for ongoing data collection once the punisher is identified",
      "It allows the analyst to model the punisher for the client and guarantees client acceptance",
      "It identifies the ideal punisher sooner and may reveal the lowest intensity needed for suppression so the least intrusive effective punisher can be used",
      "It provides legal documentation that the most restrictive procedure was chosen first"
    ],
    correctIndex: 2,
    explanation: "Fisher and colleagues (1994) identified two advantages of punisher assessments: (1) the sooner an ideal punisher can be identified, the sooner it can be applied to the problem behavior; and (2) data from assessments might reveal the magnitude or intensity necessary for behavioral suppression, enabling delivery of the lowest intensity punisher that achieves socially significant suppression.",
  },
  {
    id: 16044,
    topic: "Guidelines for Using Punishment",
    prompt: "If a problem behavior consists of a chain of responses, at what point in the chain should punishment be delivered to be most effective?",
    options: [
      "At the end of the chain, after the full sequence is completed",
      "At the midpoint of the chain to disrupt the momentum of the sequence",
      "As early in the response sequence as possible",
      "After a warning prompt has been given and ignored"
    ],
    correctIndex: 2,
    explanation: "Solomon (1964) found that punishing an inappropriate behavior as soon as it begins is more effective than waiting until the chain of behavior is completed. Powerful secondary reinforcers associated with completing each step may counteract punishment delivered at the end. Therefore, whenever practical, the punisher should be presented early in the behavioral sequence.",
  },
  {
    id: 16045,
    topic: "Guidelines for Using Punishment",
    prompt: "When is it appropriate to begin transitioning from a continuous (FR 1) to an intermittent schedule of punishment?",
    options: [
      "As soon as the punishment procedure is first introduced, to avoid habituation",
      "After responding has been reduced to a clinically acceptable level by the continuous schedule",
      "Whenever the practitioner lacks time to monitor every occurrence of the behavior",
      "Immediately if the behavior is not suppressed within the first session"
    ],
    correctIndex: 1,
    explanation: "A continuous (FR 1) schedule of punishment should be used to diminish the problem behavior to a clinically acceptable level before gradually thinning to an intermittent schedule. It is also important to combine intermittent punishment with extinction.",
  },
  {
    id: 16048,
    topic: "Ethical Considerations Regarding the Use of Punishment",
    prompt: "The doctrine of the least restrictive alternative holds that which of the following is true?",
    options: [
      "Only positive reinforcement procedures are permissible in school settings",
      "Punishment-based procedures are inherently unethical and should never be used",
      "Less intrusive procedures should be tried and found to be ineffective before more intrusive procedures are implemented",
      "The most effective procedure available should always be used, regardless of its intrusiveness"
    ],
    correctIndex: 2,
    explanation: "The doctrine of the least restrictive alternative holds that less intrusive procedures should be tried and found to be ineffective before more intrusive procedures are implemented. However, practitioners must balance this against an effectiveness standard, as a slow-acting but less restrictive procedure may itself become highly restrictive if prolonged ineffective treatment causes harm.",
  },
  {
    id: 16049,
    topic: "Ethical Considerations Regarding the Use of Punishment",
    prompt: "According to the right to effective treatment, failing to use a punishment procedure that research has shown to suppress self-destructive behavior may be unethical for which reason?",
    options: [
      "It prioritizes the punishing agent's comfort over the client's welfare",
      "It withholds a potentially effective treatment and risks maintaining a dangerous or uncomfortable state for the person",
      "It violates documentation requirements for treatment selection",
      "It fails to comply with agency policies requiring that all procedures be tried before punishment"
    ],
    correctIndex: 1,
    explanation: "The right to effective treatment raises the ethical issue that failing to use a punishment procedure with demonstrated efficacy for a client's self-destructive behavior may be unethical because doing so withholds a potentially effective treatment and risks maintaining a dangerous or uncomfortable state for the person. Baer (1971) stated that punishment is justifiable when it relieves persons of even greater punishments resulting from their own habitual behavior.",
  },
  {
    id: 16050,
    topic: "Concluding Perspectives",
    prompt: "Iwata (1988) recommended that punishment-based interventions involving contingent aversive stimulation be treated as default technologies. What does 'default technology' mean in this context?",
    options: [
      "A technology that should be used first because it has the strongest research base",
      "A technology that requires no formal assessment before implementation",
      "A technology a practitioner turns to when all other methods have failed",
      "A technology that can be applied without informed consent because it involves standard practice"
    ],
    correctIndex: 2,
    explanation: "Iwata (1988) defined a default technology as one that a practitioner turns to when all other methods have failed. He recommended that behavior analysts not advocate for aversive technologies, but that they be involved in research and development of effective aversive technologies so that when they must be used, they are effective, safe, and applied in a judicious and ethical manner.",
  },
];

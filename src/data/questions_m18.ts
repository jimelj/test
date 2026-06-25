import type { Question } from "../types";

/**
 * BCBA practice questions for Cooper et al., Chapter 15: Negative Punishment.
 * Grounded in the chapter text. Option order is shuffled at runtime, so
 * correctIndex placement here is arbitrary.
 */
export const QUESTIONS_M18: Question[] = [
  {
    id: 17001,
    topic: "Negative Punishment Defined",
    prompt: "In negative punishment, a response is followed immediately by which type of stimulus change?",
    options: [
      "Presentation of an aversive stimulus",
      "Presentation of a stimulus that increases future occurrences of similar responses",
      "Removal of a stimulus that decreases future occurrences of similar responses",
      "Removal of a stimulus that increases future occurrences of similar responses"
    ],
    correctIndex: 2,
    explanation: "Negative punishment is defined as a response followed immediately by the removal of a stimulus that decreases future occurrences of similar responses. The distinction from positive punishment is the type of stimulus change: removal versus presentation.",
  },
  {
    id: 17003,
    topic: "Negative Punishment Defined",
    prompt: "Applied behavior analysts implement negative punishment with two principal tactics. Which option correctly identifies those two tactics?",
    options: [
      "Time-out from positive reinforcement and response cost",
      "Extinction and differential reinforcement",
      "Overcorrection and response blocking",
      "Planned ignoring and contingent observation"
    ],
    correctIndex: 0,
    explanation: "The two principal tactics of negative punishment used in applied settings are time-out from positive reinforcement and response cost.",
  },
  {
    id: 17004,
    topic: "Time-Out Defined",
    prompt: "Which of the following best captures the definition of time-out from positive reinforcement?",
    options: [
      "The immediate presentation of an aversive stimulus contingent on a target behavior",
      "The noncontingent removal of all reinforcers from the environment for a period of time",
      "A procedure in which the person is physically restrained following a problem behavior",
      "The immediate response-contingent withdrawal of the opportunity to earn positive reinforcers or the immediate loss of access to positive reinforcers for a specified time"
    ],
    correctIndex: 3,
    explanation: "Time-out from positive reinforcement is the immediate response-contingent withdrawal of the opportunity to earn positive reinforcers or the immediate loss of access to positive reinforcers for a specified time.",
  },
  {
    id: 17005,
    topic: "Time-Out Defined",
    prompt: "Three important factors are implicit in the definition of time-out. Which of the following is NOT one of those three factors?",
    options: [
      "The discrepancy between the time-in and time-out environments must be discriminative.",
      "The response-contingent loss of access to reinforcement must occur immediately.",
      "A resultant decrease in the future frequency of the time-out-producing behavior must occur.",
      "The practitioner must obtain written parental consent before each individual time-out episode."
    ],
    correctIndex: 3,
    explanation: "The three factors implicit in the definition of time-out are: (a) the time-in versus time-out discrepancy must be discriminative, (b) the loss of reinforcement must be immediate, and (c) a decrease in future frequency must occur. Written consent before each episode is not one of the three definitional factors.",
  },
  {
    id: 17008,
    topic: "Nonexclusion Time-Out",
    prompt: "Which of the following best describes nonexclusion time-out?",
    options: [
      "The participant is removed from the time-in setting and placed in a separate room.",
      "The participant remains physically within the time-in setting, but elements of that setting are changed to remove reinforcement.",
      "The participant is physically restrained in the time-in setting until calm.",
      "The participant is removed from the setting and monitored by a different staff member."
    ],
    correctIndex: 1,
    explanation: "Nonexclusion time-out means that contingent on the target behavior, the participant remains physically within the time-in setting, but elements are changed so that the opportunity to earn reinforcers is removed or a specific reinforcer is terminated.",
  },
  {
    id: 17009,
    topic: "Nonexclusion Time-Out",
    prompt: "Which of the following is a recognized tactic of nonexclusion time-out?",
    options: [
      "Time-out room",
      "Hallway time-out",
      "Seclusion",
      "Planned ignoring"
    ],
    correctIndex: 3,
    explanation: "Nonexclusion time-out is typically implemented using one of four tactics: planned ignoring, terminate specific reinforcer contact, contingent observation, and partition or select space time-out. A time-out room and hallway time-out are forms of exclusion time-out.",
  },
  {
    id: 17010,
    topic: "Planned Ignoring",
    prompt: "A therapist conducting a one-to-one session turns her back to the learner for 2 minutes following a problem behavior, removing all attention. This procedure is best described as:",
    options: [
      "Contingent observation",
      "Terminate specific reinforcer contact",
      "Planned ignoring",
      "Partition time-out"
    ],
    correctIndex: 2,
    explanation: "Planned ignoring occurs when, contingent on an inappropriate behavior, the opportunity to earn social reinforcers such as attention or verbal interaction is removed. Turning away from the learner exemplifies this tactic.",
  },
  {
    id: 17012,
    topic: "Terminate Specific Reinforcer Contact",
    prompt: "A cafeteria used a traffic signal light and music that stopped for 10 seconds when noise exceeded a set threshold. This exemplifies which time-out tactic?",
    options: [
      "Planned ignoring",
      "Contingent observation",
      "Partition time-out",
      "Terminate specific reinforcer contact"
    ],
    correctIndex: 3,
    explanation: "Terminate specific reinforcer contact is a variation of time-out whereby each occurrence of the target behavior immediately stops an activity or sensory reinforcer. In the cafeteria study, loud noise caused the music (a specific reinforcer) to stop.",
  },
  {
    id: 17014,
    topic: "Contingent Observation",
    prompt: "A coach immediately sidelines a player who commits a foul, allowing the player to watch the game but not participate or receive reinforcement from the crowd. This is an example of:",
    options: [
      "Planned ignoring",
      "Exclusion time-out",
      "Terminate specific reinforcer contact",
      "Contingent observation"
    ],
    correctIndex: 3,
    explanation: "In contingent observation, the person is repositioned within the existing setting so they can observe ongoing activities, but access to available reinforcers is lost. The sidelined athlete can watch the game but cannot participate or earn social reinforcers.",
  },
  {
    id: 17016,
    topic: "Partition or Select Space Time-Out",
    prompt: "A student is moved from her assigned seat to a cubicle in the corner of the classroom contingent on misbehavior. She can still hear the lesson but her view is restricted. This is an example of:",
    options: [
      "Contingent observation",
      "Partition or select space time-out",
      "Planned ignoring",
      "Time-out room"
    ],
    correctIndex: 1,
    explanation: "In partition or select space time-out, the student remains within the time-in setting but their view is restricted by a panel or cubicle, or a select space is arranged to serve as the time-out area.",
  },
  {
    id: 17018,
    topic: "Exclusion Time-Out",
    prompt: "Exclusion time-out is best defined as:",
    options: [
      "The physical separation of the participant from the time-in environment when time-out goes into effect",
      "The removal of specific reinforcers while the participant remains in the time-in setting",
      "A procedure in which the practitioner ignores all problem behavior for a set duration",
      "Repositioning the participant within the time-in setting to restrict access to reinforcers"
    ],
    correctIndex: 0,
    explanation: "Exclusion time-out is the physical separation of the participant from the time-in environment when time-out goes into effect. This is the defining feature that distinguishes it from nonexclusion forms.",
  },
  {
    id: 17019,
    topic: "Exclusion Time-Out",
    prompt: "There are two basic tactics for implementing exclusion time-out. Which option correctly lists both?",
    options: [
      "Contingent observation and planned ignoring",
      "Hallway time-out and the time-out room",
      "The participant is removed from the time-in environment, or the time-in environment is removed from the participant",
      "Terminate specific reinforcer contact and partition time-out"
    ],
    correctIndex: 2,
    explanation: "The two basic tactics for exclusion time-out are: (a) the participant is removed immediately from the time-in environment, or (b) the time-in environment is removed immediately from the participant.",
  },
  {
    id: 17020,
    topic: "Time-Out Room",
    prompt: "Which of the following characteristics is required of a time-out room?",
    options: [
      "It should be locked to prevent the individual from leaving prematurely.",
      "It should include educational materials so the student does not fall behind academically.",
      "It should be continuously monitored by staff and devoid of positive reinforcers.",
      "It should be located far from the time-in setting to maximize contrast."
    ],
    correctIndex: 2,
    explanation: "A time-out room must be continuously monitored by staff and should not contain potentially reinforcing items. It should not be locked, and it should preferably be located in close proximity to the time-in setting.",
  },
  {
    id: 17022,
    topic: "Hallway Time-Out",
    prompt: "Why is hallway time-out generally not recommended?",
    options: [
      "It is too brief to produce behavior change.",
      "The student can obtain reinforcement from others in the hallway, supervision is compromised, and safety concerns arise.",
      "It violates the principle that time-out must involve complete sensory deprivation.",
      "It is typically more restrictive than using a time-out room."
    ],
    correctIndex: 1,
    explanation: "Hallway time-out is not recommended because the student can obtain reinforcement from other sources, the teacher cannot easily monitor the student, and placing children in unsupervised settings raises safety and legal concerns.",
  },
  {
    id: 17023,
    topic: "Nonexclusion vs. Exclusion Time-Out",
    prompt: "As a rule, which category of time-out should be the method of first choice, and why?",
    options: [
      "Exclusion, because it produces more rapid behavior reduction",
      "Exclusion, because it eliminates all opportunity for reinforcement during time-out",
      "Nonexclusion, because it requires no prior permission from administrators",
      "Nonexclusion, because practitioners are ethically bound to employ the most powerful but least restrictive alternative"
    ],
    correctIndex: 3,
    explanation: "Nonexclusion time-out should be the method of first choice because practitioners are ethically bound to employ the most powerful, but least restrictive, alternative when deciding on a course of action.",
  },
  {
    id: 17024,
    topic: "Time-In Environment Removed from Participant",
    prompt: "A computer-based learning program makes the screen go dark for several seconds following an error response. This is an example of which time-out tactic?",
    options: [
      "Contingent observation",
      "Terminate specific reinforcer contact",
      "Partition time-out",
      "Time-in environment removed from the participant"
    ],
    correctIndex: 3,
    explanation: "This variation of exclusion time-out does not require changing the participant's physical location. Instead, contingent on the target behavior, the time-in environment (the computer screen) is removed from the participant.",
  },
  {
    id: 17025,
    topic: "Using Time-Out Effectively",
    prompt: "Before implementing time-out, a practitioner should first consider which type of procedures?",
    options: [
      "More restrictive procedures such as physical restraint",
      "Exclusion time-out before nonexclusion time-out",
      "Nonpunitive methods such as differential reinforcement of alternative behavior or extinction",
      "Group contingencies and token economies"
    ],
    correctIndex: 2,
    explanation: "Although time-out has shown effectiveness, it should not be the method of first choice. Practitioners should initially consider nonpunitive methods for reducing the target behavior, such as differential reinforcement of alternative behavior or extinction.",
  },
  {
    id: 17028,
    topic: "Duration of Time-Out",
    prompt: "What is the recommended duration for most time-out sessions?",
    options: [
      "No more than 2 to 5 minutes",
      "15 to 30 minutes, to ensure the behavior is fully suppressed",
      "Exactly 10 minutes, as this is supported by the most research",
      "At least 20 minutes for exclusion time-out and 10 minutes for nonexclusion time-out"
    ],
    correctIndex: 0,
    explanation: "Time-out sessions should be as brief as possible while maintaining effectiveness. Durations of 2 to 5 minutes are often effective, and time-out periods exceeding 15 minutes are generally not effective.",
  },
  {
    id: 17030,
    topic: "Exit Criteria",
    prompt: "A release contingency in time-out refers to which of the following?",
    options: [
      "Automatically releasing the student from time-out after a fixed, uninterrupted interval regardless of behavior",
      "Releasing the student when a teacher signals approval from across the room",
      "Requiring the absence of misbehavior for a specified period prior to the end of the fixed time-out period",
      "Extending time-out until the student verbally acknowledges the rule that was broken"
    ],
    correctIndex: 2,
    explanation: "A release contingency requires the absence of misbehavior for a specified period prior to the end of the fixed time-out period. For example, no misbehavior during the last 30 seconds of a 5-minute period.",
  },
  {
    id: 17032,
    topic: "Legal and Ethical Guidelines for Time-Out",
    prompt: "Major court rulings relevant to time-out have established that:",
    options: [
      "Time-out can never be used in educational or clinical settings under any circumstances.",
      "Time-out is only permissible when no other behavioral intervention has been attempted.",
      "Time-out is legally equivalent to seclusion and requires a court order before implementation.",
      "A person's right to treatment includes the right to be free from unnecessary and restrictive isolation, but time-out may be permitted when closely monitored and designed to protect the individual or others from bodily harm."
    ],
    correctIndex: 3,
    explanation: "Major court rulings established that a person's right to treatment includes the right to be free from unnecessary and restrictive isolation, but they also permit time-out when the program is closely monitored and designed to protect the individual or others from bodily harm.",
  },
  {
    id: 17033,
    topic: "Legal and Ethical Guidelines for Time-Out",
    prompt: "The BACB's Professional and Ethical Compliance Code reaffirms three guiding principles regarding punishment. Which of the following is one of those principles?",
    options: [
      "Punishment should be the first-line intervention for severe problem behaviors.",
      "The principle of least restrictiveness should be followed.",
      "Only exclusion time-out is permissible for individuals with developmental disabilities.",
      "Written consent is required only for exclusion time-out, not for nonexclusion variations."
    ],
    correctIndex: 1,
    explanation: "The BACB reaffirmed three guiding principles: (1) the welfare of the individual served is the highest priority, (2) individuals and parents or guardians have a right to choose, and (3) the principle of least restrictiveness should be followed.",
  },
  {
    id: 17035,
    topic: "Terminating the Time-Out Program",
    prompt: "When should a practitioner begin planning to eliminate the time-out program?",
    options: [
      "Only after at least one full school year of consistent use",
      "Only after the target behavior has reached zero for at least three consecutive months",
      "Shortly after time-out is initiated, once data show reduced levels of the target behavior",
      "After consulting with the school board to determine whether time-out is still warranted"
    ],
    correctIndex: 2,
    explanation: "The plan to eliminate time-out should begin shortly after the procedure is initiated. Once data show reduced levels of the target behavior, efforts should be made to switch to positive behavior reductive approaches or to reduce implementation over time.",
  },
  {
    id: 17036,
    topic: "Response Cost Defined",
    prompt: "Response cost is best defined as:",
    options: [
      "The contingent presentation of an aversive stimulus following a target behavior",
      "The response-contingent loss of a specific number of positive reinforcers that has the effect of decreasing the future occurrence of similar responses",
      "The immediate removal of the person from the time-in setting contingent on problem behavior",
      "A procedure in which tokens are noncontingently provided and then removed at the end of a session"
    ],
    correctIndex: 1,
    explanation: "Response cost is the response-contingent loss of a specific number of positive reinforcers that has the effect of decreasing the future occurrence of similar responses. It essentially constitutes a fine for misbehavior.",
  },
  {
    id: 17041,
    topic: "Response Cost Methods",
    prompt: "A father provides his sons with an extra $5 each week that they can lose at $1 per squabble at dinner, without touching their regular allowance. This exemplifies which response cost method?",
    options: [
      "Existing cache response cost",
      "Group-based response cost",
      "Bonus response cost",
      "Response cost with DRA"
    ],
    correctIndex: 2,
    explanation: "Bonus response cost operates when practitioners make additional reinforcers available noncontingently to the participant specifically for removal when a target behavior occurs. The father provides extra money that is separate from the earned allowance.",
  },
  {
    id: 17042,
    topic: "Response Cost Methods",
    prompt: "In existing cache response cost, what is the source of the reinforcers that are removed contingent on the target behavior?",
    options: [
      "Noncontingently provided extra reinforcers kept separate from the participant's earnings",
      "A supply of currently available reinforcers that the individual has previously earned",
      "Reinforcers delivered by the practitioner immediately before the fine is imposed",
      "A shared group pool of reinforcers maintained by the entire class"
    ],
    correctIndex: 1,
    explanation: "In existing cache response cost, the fine is levied against a person's existing cache of positive reinforcers. The individual loses reinforcers from a supply of currently available reinforcers that they have previously earned.",
  },
  {
    id: 17043,
    topic: "Using Response Cost Effectively",
    prompt: "When a practitioner finds that repeated imposition of response cost fines is increasing rather than decreasing the target behavior, what should be done?",
    options: [
      "Increase the magnitude of the fine to strengthen the punishing effect.",
      "Continue the procedure until at least 30 sessions have elapsed before drawing conclusions.",
      "Add a backup punisher to supplement response cost.",
      "Stop using response cost and switch to another reductive procedure such as time-out or DRA."
    ],
    correctIndex: 3,
    explanation: "When repeated imposition of response cost reinforces rather than punishes the undesirable behavior, the practitioner should stop using response cost and switch to another reductive procedure such as time-out or DRA.",
  },
  {
    id: 17045,
    topic: "Using Response Cost Effectively",
    prompt: "Which guideline helps practitioners establish the initial number of available reinforcers for a response cost program?",
    options: [
      "Set the initial supply equal to the maximum number of disruptions ever observed on any single day.",
      "Match the number of reinforcers exactly to the mean baseline rate so fines are immediately impactful.",
      "Increase the number of available reinforcers approximately 25% above the mean baseline occurrence of the target behavior.",
      "Start with one reinforcer per student and add more only as needed."
    ],
    correctIndex: 2,
    explanation: "A prudent approach is to increase the number of reinforcers 25% above the mean number of occurrences during baseline to ensure all reinforcers are not lost when response cost is in effect.",
  },
  {
    id: 17046,
    topic: "Response Cost Considerations",
    prompt: "A student who has just lost several tokens in a short period begins physically assaulting the teacher. This illustrates which undesirable aspect of response cost?",
    options: [
      "Avoidance",
      "Calling attention to the punished behavior",
      "Increased aggression",
      "Collateral reductions of desired behavior"
    ],
    correctIndex: 2,
    explanation: "Response-contingent withdrawal of positive reinforcers may increase student verbal and physical aggressiveness. A student who loses several tokens quickly may assault the teacher, illustrating the increased aggression consideration.",
  },
  {
    id: 17047,
    topic: "Response Cost Considerations",
    prompt: "If the setting in which response cost is administered becomes a conditioned aversive stimulus, what behavior might the student display?",
    options: [
      "The student might seek out the setting more often to access the attention associated with fines.",
      "The student might avoid the school, classroom, or teacher by being absent or tardy.",
      "The student might produce more problem behavior to demonstrate frustration.",
      "The student might generalize appropriate behavior to other settings more quickly."
    ],
    correctIndex: 1,
    explanation: "The setting or the person who administers response cost can become a conditioned aversive stimulus. If this occurs, the student may avoid the school, classroom, or teacher by being absent or tardy.",
  },
  {
    id: 17048,
    topic: "Treatment Integrity in Response Cost",
    prompt: "An omission error in the treatment integrity of response cost occurs when:",
    options: [
      "The practitioner levies fines for a behavior that should not have been subjected to response cost.",
      "The practitioner applies fines inconsistently across days of the week.",
      "The practitioner applies an excessively large fine for a minor infraction.",
      "The practitioner fails to apply the response cost contingency after a target behavior occurs."
    ],
    correctIndex: 3,
    explanation: "Omission errors occur when the analyst fails to apply the response cost contingency and levy the appropriate fine after a target behavior occurrence, either by not registering the behavior or by observing it but still failing to apply the fine.",
  },
];

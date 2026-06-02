import type { Question } from "../types";

/**
 * BCBA practice questions for Cooper et al., Chapter 11: Positive Reinforcement.
 * Grounded in the chapter text. Option order is shuffled at runtime, so
 * correctIndex placement here is arbitrary.
 */
export const QUESTIONS_M14: Question[] = [
  {
    id: 13001,
    topic: "Positive Reinforcement Defined",
    prompt: "Positive reinforcement is defined as occurring when a response is followed immediately by a stimulus change that:",
    options: [
      "Removes an aversive stimulus from the environment",
      "Has no effect on future responding",
      "Decreases the future occurrence of similar responses",
      "Increases the future occurrence of similar responses"
    ],
    correctIndex: 3,
    explanation: "Positive reinforcement is defined by its effect: a response is followed immediately by the presentation of a stimulus change that increases the future occurrence of similar responses. The increase in future responding is the defining criterion.",
  },
  {
    id: 13002,
    topic: "Positive Reinforcement Defined",
    prompt: "According to Skinner, reinforcement strengthens the operant as a class of behavior rather than the specific response that preceded it. This means that when a reinforcer follows a response:",
    options: [
      "Future probability of responses in the same class is increased",
      "Only that exact response instance is permanently altered",
      "The behavior that occurred just before reinforcement is eliminated",
      "The organism is directly rewarded for that single response"
    ],
    correctIndex: 0,
    explanation: "Skinner clarified that reinforcement cannot change the response that has already occurred. What changes is the future probability of responses in the same class. It is the operant as a class of behavior, not the individual instance, that is conditioned.",
  },
  {
    id: 13003,
    topic: "Immediacy of Reinforcement",
    prompt: "A behavior analyst is training a child to make eye contact. After the child makes eye contact, the analyst waits 5 seconds before delivering praise. The most likely problem with this procedure is:",
    options: [
      "Eye contact will extinguish during the 5-second delay",
      "The praise will be too powerful and cause satiation",
      "The behavior occurring just before praise, not eye contact, will be strengthened",
      "The child will learn to discriminate the delay interval as an SD"
    ],
    correctIndex: 2,
    explanation: "A response-to-reinforcement delay allows other behaviors to occur. The behavior temporally closest to reinforcement delivery will be strengthened. Even a 1-second delay can result in reinforcing the wrong behavior, so immediacy is essential.",
  },
  {
    id: 13004,
    topic: "Immediacy of Reinforcement",
    prompt: "When human behavior appears to be influenced by long-delayed consequences, such as practicing piano for months before winning a competition, the change in behavior is best explained as:",
    options: [
      "Unconditioned reinforcement produced by the act of practicing itself",
      "The result of the human's complex social and verbal history, such as rule-governed behavior",
      "Direct reinforcement of each daily practice session by the distant award",
      "Automatic reinforcement that accumulates over many sessions"
    ],
    correctIndex: 1,
    explanation: "Delayed consequences do not reinforce behavior directly. When human behavior is apparently affected by long-delayed consequences, the change is accomplished through the person's complex social and verbal history, such as rule-governed behavior, not simple reinforcement.",
  },
  {
    id: 13005,
    topic: "Rule-Governed Behavior",
    prompt: "A rule, in the context of behavior analysis, is best described as:",
    options: [
      "An antecedent stimulus that directly elicits a response",
      "A schedule of reinforcement arranged by the environment",
      "A punishment contingency stated by an authority figure",
      "A verbal description of a behavioral contingency"
    ],
    correctIndex: 3,
    explanation: "A rule is a verbal description of a behavioral contingency (e.g., 'Turnip seeds planted by August 15 will yield a crop before a killing freeze.'). Rules enable behavior to come under the indirect control of delayed or improbable consequences.",
  },
  {
    id: 13006,
    topic: "Rule-Governed Behavior",
    prompt: "Which of the following is a strong indicator that a behavior is rule-governed rather than a direct effect of reinforcement?",
    options: [
      "A large increase in behavior occurs following a single instance of reinforcement",
      "The response-consequence delay is less than 5 seconds",
      "The behavior increases slowly over many sessions",
      "The behavior has an obvious automatic reinforcement component"
    ],
    correctIndex: 0,
    explanation: "One indicator that behavior is rule-governed rather than directly reinforced is that a large increase in the occurrence of behavior follows only a single instance of reinforcement. Other indicators include no immediate consequence being apparent and the delay being greater than 30 seconds.",
  },
  {
    id: 13007,
    topic: "Reinforcement as a Non-Circular Concept",
    prompt: "A behavior analyst argues that a child's reading difficulties are caused by a 'learning disability,' and when asked how they know the disability exists, they point to the reading difficulties. This reasoning illustrates:",
    options: [
      "A correct application of the three-term contingency",
      "A valid functional analysis",
      "Circular reasoning in which cause and effect are the same",
      "An appropriate use of reinforcement terminology"
    ],
    correctIndex: 2,
    explanation: "This is an example of circular reasoning, where the suspected cause is not independent of its effect. The 'learning disability' is defined by the reading difficulty, and the reading difficulty is explained by the learning disability, making the reasoning circular.",
  },
  {
    id: 13008,
    topic: "Reinforcement as a Non-Circular Concept",
    prompt: "Reinforcement is NOT a circular concept because:",
    options: [
      "Behavior analysts always use operational definitions",
      "The reinforcer must be unconditioned to avoid circularity",
      "Reinforcers are always defined before the behavior occurs",
      "The response and the consequence can be separated and the consequence manipulated to determine its effect"
    ],
    correctIndex: 3,
    explanation: "Reinforcement avoids circularity because the two components of the response-consequence relation can be separated, allowing the delivery of a consequence to be manipulated as an independent variable to determine whether it increases the occurrence of the behavior it follows.",
  },
  {
    id: 13009,
    topic: "Discriminative Stimulus and Three-Term Contingency",
    prompt: "A discriminative stimulus (SD) is best defined as:",
    options: [
      "Any antecedent stimulus that precedes a behavior",
      "A stimulus that directly increases the momentary effectiveness of a reinforcer",
      "An antecedent stimulus correlated with the availability of reinforcement for a particular response class",
      "A stimulus that, when present, signals that punishment is likely"
    ],
    correctIndex: 2,
    explanation: "A discriminative stimulus (SD) is an antecedent stimulus correlated with the availability of reinforcement for a particular response class. Responding in the presence of the SD produces reinforcement, while responding in its absence (S-delta) does not.",
  },
  {
    id: 13010,
    topic: "Discriminative Stimulus and Three-Term Contingency",
    prompt: "When a discriminated operant is added to the basic two-term reinforcement contingency, the result is:",
    options: [
      "A concurrent schedule of reinforcement",
      "A simple two-term contingency with a prompting procedure",
      "A four-term contingency that includes a motivating operation",
      "A three-term contingency of SD, Response, and SR+"
    ],
    correctIndex: 3,
    explanation: "Adding the SD to the two-term contingency (Response followed by SR+) creates the three-term contingency of the discriminated operant: SD, Response, SR+. This is the basic structure of stimulus control in operant behavior.",
  },
  {
    id: 13011,
    topic: "Motivating Operations",
    prompt: "A motivating operation (MO) has two effects on behavior. These are:",
    options: [
      "It strengthens the SD and weakens the S-delta",
      "It increases response rate and decreases response latency",
      "It signals the availability of reinforcement and signals the absence of punishment",
      "It alters the reinforcing effectiveness of a stimulus and alters the momentary frequency of behavior reinforced by that stimulus"
    ],
    correctIndex: 3,
    explanation: "Motivating operations have two effects: (1) a value-altering effect, which alters the operant reinforcing effectiveness of specific stimuli, and (2) a behavior-altering effect, which alters the momentary frequency of all behavior that has been reinforced by those stimuli.",
  },
  {
    id: 13012,
    topic: "Motivating Operations",
    prompt: "An abolishing operation (AO) is a type of motivating operation that:",
    options: [
      "Signals the termination of a reinforcement contingency",
      "Increases the current effectiveness of a reinforcer",
      "Decreases the current effectiveness of a reinforcer",
      "Eliminates a discriminative stimulus from the environment"
    ],
    correctIndex: 2,
    explanation: "An abolishing operation (AO) is a motivating operation that decreases the current effectiveness of a reinforcer. For example, food ingestion reduces the effectiveness of food as a reinforcer. It is the opposite of an establishing operation (EO).",
  },
  {
    id: 13013,
    topic: "Motivating Operations",
    prompt: "A four-term contingency for positive reinforcement of a discriminated operant includes which four elements in order?",
    options: [
      "EO, SD, Response, SR+",
      "SD, Response, SR+, EO",
      "SR+, EO, SD, Response",
      "Response, SD, EO, SR+"
    ],
    correctIndex: 0,
    explanation: "A complete description of positive reinforcement for a discriminated operant uses the four-term contingency: EO (establishing operation), SD (discriminative stimulus), Response, and SR+ (positive reinforcer). The EO makes the SD more likely to evoke the behavior.",
  },
  {
    id: 13014,
    topic: "Automaticity of Reinforcement",
    prompt: "The automaticity of reinforcement refers to the fact that:",
    options: [
      "Automatic reinforcement always involves socially mediated consequences",
      "Reinforcement automatically transfers across settings without additional training",
      "A person does not need to understand or be aware of the response-consequence relation for reinforcement to occur",
      "Reinforcement only affects behavior when the person is aware of the contingency"
    ],
    correctIndex: 2,
    explanation: "Automaticity of reinforcement refers to the fact that a person does not have to understand or verbalize the relation between their actions and a reinforcing consequence, or even be aware that a consequence has occurred, for reinforcement to occur.",
  },
  {
    id: 13015,
    topic: "Arbitrariness of Reinforcement",
    prompt: "Skinner's 'Superstition in the Pigeon' experiment demonstrated that when food was delivered to pigeons every 15 seconds with no reference to their behavior, the result was:",
    options: [
      "Pigeons showed no change in behavior because the delivery was noncontingent",
      "Pigeons developed idiosyncratic behaviors that happened to precede food delivery",
      "Pigeons learned to press a lever because of the temporal pairing",
      "Pigeons ceased responding because there was no contingency"
    ],
    correctIndex: 1,
    explanation: "Skinner's experiment showed that pigeons developed idiosyncratic behaviors such as counterclockwise walking or head thrusting because reinforcement strengthened whatever behavior immediately preceded each food delivery, demonstrating the arbitrary nature of reinforcement.",
  },
  {
    id: 13016,
    topic: "Arbitrariness of Reinforcement",
    prompt: "Understanding the arbitrariness of reinforcement is important in applied behavior analysis because:",
    options: [
      "It demonstrates that reinforcement can only occur in structured settings",
      "It explains why only desirable behaviors are accidentally reinforced",
      "It shows that only logically related behaviors can be reinforced",
      "It may explain the acquisition and maintenance of maladaptive and challenging behaviors"
    ],
    correctIndex: 3,
    explanation: "The arbitrary nature of reinforcement means it strengthens any behavior that immediately precedes it, regardless of whether that behavior is logical or adaptive. This may explain how caregiver attention can inadvertently shape and maintain maladaptive and challenging behaviors.",
  },
  {
    id: 13017,
    topic: "Automatic Reinforcement",
    prompt: "In the first meaning used by applied behavior analysts, automatic reinforcement is defined by:",
    options: [
      "The behavior-stimulus change relation occurring without social mediation by others",
      "The behavior persisting in the absence of any known reinforcer",
      "The behavior being maintained exclusively by unconditioned reinforcers",
      "The reinforcement being delivered automatically by a device"
    ],
    correctIndex: 0,
    explanation: "In the first instance, automatic reinforcement refers to the behavior-stimulus change relation that occurs without the presentation of consequences by other people. It occurs independent of social mediation. In the second, default instance, it is assumed when behavior persists with no known reinforcer.",
  },
  {
    id: 13018,
    topic: "Automatic Reinforcement",
    prompt: "Scratching an insect bite to relieve or attenuate an itch is a common example of:",
    options: [
      "Negative punishment",
      "Socially mediated positive reinforcement",
      "Conditioned reinforcement via stimulus-stimulus pairing",
      "Automatic reinforcement"
    ],
    correctIndex: 3,
    explanation: "Scratching an insect bite to relieve or attenuate the itch is cited as a common example of automatic reinforcement, because the consequence (itch relief) is produced by the behavior itself without any social mediation by others.",
  },
  {
    id: 13019,
    topic: "Automatic Reinforcement",
    prompt: "Vollmer proposed five interventions to reduce behaviors maintained by automatic reinforcement. Which of the following is one of those interventions?",
    options: [
      "Implement a sensory extinction procedure to eliminate the source of automatic reinforcement",
      "Withhold all reinforcement until the behavior decreases",
      "Use a reversal design to identify the specific reinforcer",
      "Increase the magnitude of socially mediated reinforcers to compete with automatic reinforcement"
    ],
    correctIndex: 0,
    explanation: "Vollmer proposed sensory extinction as one of five interventions, which involves eliminating or reducing sources of visual, auditory, or proprioceptive stimulation (e.g., wearing gloves or helmets). The other interventions include addressing medical EOs, DRA, punishment, and package programs.",
  },
  {
    id: 13020,
    topic: "Classifying Reinforcers by Origin",
    prompt: "An unconditioned reinforcer is one that:",
    options: [
      "Is effective only under specific establishing operation conditions",
      "Was once neutral but acquired reinforcing properties through stimulus-stimulus pairing",
      "Has been paired with many other reinforcers across various EO conditions",
      "Functions as reinforcement even though the learner has had no particular learning history with it"
    ],
    correctIndex: 3,
    explanation: "An unconditioned reinforcer (also called a primary or unlearned reinforcer) is a stimulus change that functions as reinforcement even though the learner has had no particular learning history with it. It is a product of the evolutionary history of the species.",
  },
  {
    id: 13021,
    topic: "Classifying Reinforcers by Origin",
    prompt: "A conditioned reinforcer acquires its reinforcing capability through:",
    options: [
      "Stimulus-stimulus pairing with one or more unconditioned or conditioned reinforcers",
      "Repeated presentation following a target behavior without pairing",
      "Deprivation of the unconditioned reinforcer it is meant to replace",
      "The learner's genetic predisposition to respond to certain stimuli"
    ],
    correctIndex: 0,
    explanation: "A conditioned reinforcer (also called a secondary or learned reinforcer) is a previously neutral stimulus change that has acquired the capability to function as a reinforcer through stimulus-stimulus pairing with one or more unconditioned reinforcers or conditioned reinforcers.",
  },
  {
    id: 13022,
    topic: "Classifying Reinforcers by Origin",
    prompt: "A generalized conditioned reinforcer is one that does not depend on a current EO for any particular reinforcer because it:",
    options: [
      "Can only function as reinforcement for a specific class of behaviors",
      "Is an unconditioned reinforcer by definition",
      "Has been paired with many unconditioned and conditioned reinforcers",
      "Has been paired with only a single, highly potent unconditioned reinforcer"
    ],
    correctIndex: 2,
    explanation: "A generalized conditioned reinforcer is a conditioned reinforcer that, as a result of having been paired with many unconditioned and conditioned reinforcers, does not depend on a current EO for any particular form of reinforcement for its effectiveness.",
  },
  {
    id: 13023,
    topic: "Classifying Reinforcers by Origin",
    prompt: "A generalized conditioned reinforcer is called 'generalized' because it is effective:",
    options: [
      "Across a wide range of behaviors for different people",
      "Across a wide range of EO conditions, not simply across a wide range of behaviors",
      "Regardless of the size or form of the backup reinforcer",
      "Only when paired with another generalized conditioned reinforcer"
    ],
    correctIndex: 1,
    explanation: "A conditioned reinforcer is called generalized because it is effective as reinforcement across a wide range of EO conditions, not because it can strengthen a wider range of behaviors than other reinforcers. Any reinforcer can strengthen any behavior that immediately precedes it.",
  },
  {
    id: 13024,
    topic: "Classifying Reinforcers by Formal Properties",
    prompt: "When applied behavior analysts classify reinforcers by their physical properties, which of the following is NOT one of the standard categories?",
    options: [
      "Social",
      "Verbal",
      "Edible",
      "Tangible"
    ],
    correctIndex: 1,
    explanation: "Reinforcers classified by their formal (physical) properties are typically categorized as edible, sensory, tangible, activity, or social. 'Verbal' is not one of the five formal categories, though verbal praise would fall under social reinforcers.",
  },
  {
    id: 13025,
    topic: "Classifying Reinforcers by Formal Properties",
    prompt: "When the opportunity to engage in a certain behavior functions as reinforcement, that behavior is called:",
    options: [
      "A sensory reinforcer",
      "A social reinforcer",
      "An activity reinforcer",
      "A tangible reinforcer"
    ],
    correctIndex: 2,
    explanation: "When the opportunity to engage in a certain behavior functions as reinforcement, that behavior is an activity reinforcer. Activity reinforcers may be everyday activities, privileges, or special events.",
  },
  {
    id: 13026,
    topic: "Premack Principle and Response Deprivation",
    prompt: "The Premack principle states that:",
    options: [
      "Reinforcement effects are determined only by the magnitude of the reinforcer, not its baseline frequency",
      "Any behavior can reinforce any other behavior, regardless of baseline rates",
      "High-frequency behaviors can be reinforced by access to low-frequency behaviors",
      "Making access to a high-frequency behavior contingent on a low-frequency behavior will reinforce the low-frequency behavior"
    ],
    correctIndex: 3,
    explanation: "The Premack principle states that making the opportunity to engage in a behavior that occurs at a relatively high free-operant (or baseline) rate contingent on the occurrence of low-frequency behavior will function as reinforcement for the low-occurrence behavior.",
  },
  {
    id: 13027,
    topic: "Premack Principle and Response Deprivation",
    prompt: "The response-deprivation hypothesis extends the Premack principle by specifying that access to a contingent behavior will function as reinforcement only when:",
    options: [
      "The contingent behavior is one the learner rates as highly preferred",
      "Access to the contingent behavior represents a restriction below its baseline level",
      "The learner has been deprived of the instrumental response for at least 24 hours",
      "The contingent behavior occurs at a higher baseline rate than the instrumental response"
    ],
    correctIndex: 1,
    explanation: "The response-deprivation hypothesis predicts that access to a contingent behavior will function as reinforcement for an instrumental response when access to the contingent behavior represents a restriction compared to its baseline level. Restriction acts as a form of deprivation, creating an EO.",
  },
  {
    id: 13028,
    topic: "Premack Principle and Response Deprivation",
    prompt: "A teacher lets a student earn more coloring time than the student typically engages in during baseline, contingent on completing math problems. Based on the response-deprivation hypothesis, what outcome is most likely?",
    options: [
      "Math problem completion will increase because coloring occurs at a higher baseline rate",
      "Math problem completion will decrease due to satiation with coloring",
      "Math problem completion will not increase because the contingency does not represent a restriction",
      "Math problem completion will increase because the reinforcer is of high magnitude"
    ],
    correctIndex: 2,
    explanation: "The response-deprivation hypothesis predicts reinforcement only when the contingency restricts access to the contingent behavior below its baseline level. If the student can earn more coloring than the baseline amount, no restriction exists and the contingency will not function as reinforcement.",
  },
  {
    id: 13029,
    topic: "Identifying Potential Reinforcers",
    prompt: "A stimulus preference assessment (SPA) is best described as a procedure used to determine:",
    options: [
      "The stimuli a person differentially selects and their relative preference hierarchy",
      "Whether a stimulus has definitively reinforced a target behavior",
      "Which reinforcement schedule will maintain behavior most effectively",
      "The specific EOs that are currently in effect for an individual"
    ],
    correctIndex: 0,
    explanation: "Stimulus preference assessment (SPA) refers to procedures used to determine the stimuli a person differentially selects, the relative hierarchical preference value of those stimuli, the conditions under which preference values change, and whether highly preferred items ultimately serve as reinforcers.",
  },
  {
    id: 13030,
    topic: "Identifying Potential Reinforcers",
    prompt: "A key reason that stimulus preference assessments should be conducted repeatedly and at different times is that:",
    options: [
      "Repeated SPA reduces the likelihood of satiation during intervention",
      "SPA results are only valid for the specific setting in which the assessment was conducted",
      "Reinforcer preferences shift over time and can vary with age, deprivation, satiation, and EOs",
      "SPA procedures become more accurate with repetition due to practice effects"
    ],
    correctIndex: 2,
    explanation: "Reinforcer preferences shift, and the transitory and idiosyncratic nature of preference has been well documented. Preferences may change with age, interest level, time of day, social interactions, deprivation and satiation levels, and the presence of EOs.",
  },
  {
    id: 13031,
    topic: "Identifying Potential Reinforcers",
    prompt: "In the multiple-stimulus-without-replacement (MSWO) procedure, what happens after a learner selects a stimulus from the array?",
    options: [
      "The chosen item remains in the array and unchosen items are replaced",
      "All items are replaced with a completely new set for the next trial",
      "The chosen item is replaced with a new item before the next trial",
      "The chosen item is removed from the array, remaining items are rearranged, and the next trial begins with fewer items"
    ],
    correctIndex: 3,
    explanation: "In the MSWO procedure, the chosen item is removed from the array, the positions of the remaining stimuli are changed, and the next trial begins with a reduced number of items. This continues until all items have been selected or the individual stops selecting.",
  },
  {
    id: 13032,
    topic: "Identifying Potential Reinforcers",
    prompt: "In a free operant observation for stimulus preference assessment, the measure used to indicate the strength of preference is:",
    options: [
      "The number of errors made when the item is removed",
      "The total duration of time the person engages with each stimulus item or activity",
      "The number of times the person approaches each item",
      "The latency from session onset to first contact with each item"
    ],
    correctIndex: 1,
    explanation: "In free operant observation, a total duration measure of the time the person engages with each stimulus item or activity is recorded. The longer the person engages with an item, the stronger the inference that the item is preferred.",
  },
  {
    id: 13033,
    topic: "Identifying Potential Reinforcers",
    prompt: "According to research, which of the following best describes the limitation of asking a person to identify their preferred reinforcers using a survey?",
    options: [
      "Surveys require highly trained staff to administer and interpret",
      "Surveys can only identify edible reinforcers and miss activity reinforcers",
      "Surveys are too time-consuming to administer to individuals with disabilities",
      "Survey results may yield false positives, and preferred items on surveys may not function as reinforcers"
    ],
    correctIndex: 3,
    explanation: "Although asking for preferences is uncomplicated, surveys may not differentiate accurately between high- and low-preference reinforcers. Poor correspondence between verbal self-reports and subsequent behavior is well documented. Surveys may more accurately identify stimuli that are not reinforcers than those that are.",
  },
  {
    id: 13034,
    topic: "Identifying Potential Reinforcers",
    prompt: "In a paired-stimulus (PS) preference assessment, a stimulus is classified as high preference when it is selected in approximately what percentage of pairings?",
    options: [
      "50% or more",
      "60% or more",
      "80% or more",
      "70% or more"
    ],
    correctIndex: 2,
    explanation: "In the paired-stimulus assessment, items that received engagement or selection over 80% of the pairings are deemed high-preference items. Items selected at the 50% level were considered low-preference items.",
  },
  {
    id: 13035,
    topic: "Reinforcer Assessment",
    prompt: "The critical difference between a stimulus preference assessment and a reinforcer assessment is that:",
    options: [
      "A preference assessment requires a concurrent schedule while a reinforcer assessment does not",
      "A preference assessment identifies potentially preferred stimuli while a reinforcer assessment tests whether preferred stimuli actually increase behavior",
      "A reinforcer assessment is conducted first to narrow candidates for the preference assessment",
      "A preference assessment uses trial-based methods while a reinforcer assessment uses free-operant observation"
    ],
    correctIndex: 1,
    explanation: "Stimulus preference assessment identifies stimuli that are likely highly preferred and thus likely to serve as reinforcers. Reinforcer assessment puts highly preferred, potential reinforcers to a direct test by presenting them contingent on occurrences of a behavior and measuring performance effects.",
  },
  {
    id: 13036,
    topic: "Reinforcer Assessment",
    prompt: "When using a concurrent schedule for reinforcer assessment, a learner allocates most responses to one panel over another. This finding indicates that:",
    options: [
      "The preferred panel stimulus has become a generalized conditioned reinforcer",
      "Neither stimulus is functioning as a reinforcer because responding should be equal",
      "Both stimuli are equally effective as reinforcers",
      "The stimulus produced by the preferred panel is the more effective reinforcer relative to the other stimulus"
    ],
    correctIndex: 3,
    explanation: "In concurrent schedule reinforcer assessment, if a learner allocates a greater proportion of responses to one component over the other, the stimulus used as a contingent consequence for that component is the more effective reinforcer. This method shows the relative effectiveness of stimuli as reinforcers.",
  },
  {
    id: 13037,
    topic: "Reinforcer Assessment",
    prompt: "A progressive-ratio schedule is used in reinforcer assessment primarily to:",
    options: [
      "Assess reinforcer effectiveness under satiation conditions",
      "Identify stimuli that are preferred when no response requirement is in place",
      "Determine the relative effectiveness of a stimulus as a reinforcer as response requirements increase",
      "Compare how different learners respond to the same reinforcement contingency"
    ],
    correctIndex: 2,
    explanation: "Progressive-ratio schedules provide a framework for assessing the relative effectiveness of a stimulus as a reinforcer as response requirements increase. The practitioner gradually increases requirements until a breaking point is reached and response rate declines, revealing reinforcer potency.",
  },
  {
    id: 13038,
    topic: "Reinforcer Assessment",
    prompt: "Research by Roscoe and colleagues (1999) using concurrent schedules demonstrated that when a low-preference (LP) stimulus was presented on a single-schedule contingency (without competition from a high-preference stimulus), participants:",
    options: [
      "Showed increased levels of responding similar to those obtained with the high-preference stimulus",
      "Refused to engage in the target behavior for the LP stimulus",
      "Responded at higher rates than they did for the high-preference stimulus",
      "Showed no change in responding compared to baseline"
    ],
    correctIndex: 0,
    explanation: "Roscoe et al. showed that when LP stimuli were presented without competition from HP stimuli on a single-schedule contingency, participants showed increased responding over baseline similar to those obtained with HP stimuli. This demonstrated that concurrent schedules can mask the reinforcing potential of LP stimuli.",
  },
  {
    id: 13039,
    topic: "Control Procedures for Positive Reinforcement",
    prompt: "In the context of demonstrating experimental control over positive reinforcement, 'control' is demonstrated by:",
    options: [
      "Documenting that a highly preferred stimulus was used throughout the intervention",
      "Comparing response rates in the absence and presence of a contingency and showing the behavior can be turned on and off",
      "Calculating inter-observer agreement above 80% during reinforcement conditions",
      "Using a standardized assessment battery to confirm reinforcer status"
    ],
    correctIndex: 1,
    explanation: "Control requires an experimental demonstration that the stimulus contingent on the target response functions as positive reinforcement. It is demonstrated by comparing response rates in the absence and presence of a contingency, showing the behavior can be turned on and off, or up and down.",
  },
  {
    id: 13040,
    topic: "Control Procedures for Positive Reinforcement",
    prompt: "Thompson and Iwata (2005) argued that the ideal control procedure for positive reinforcement should:",
    options: [
      "Maintain the same response requirement across all experimental phases",
      "Use extinction to completely remove all stimulus presentations",
      "Eliminate the contingent relation while also controlling for the mere presentation of the stimulus",
      "Introduce a competing schedule to reduce the target behavior"
    ],
    correctIndex: 2,
    explanation: "Thompson and Iwata stated that the ideal control procedure eliminates the contingent relation between the occurrence of the target response and the presentation of the stimulus while controlling for the effects of the mere stimulus presentation, which is why NCR was their preferred control procedure.",
  },
  {
    id: 13041,
    topic: "Control Procedures for Positive Reinforcement",
    prompt: "Noncontingent reinforcement (NCR) is used as a control condition for positive reinforcement by presenting the potential reinforcer on:",
    options: [
      "A differential reinforcement schedule tied to the absence of the target behavior",
      "A ratio schedule dependent on the number of target responses",
      "An interval schedule in which the first response after the interval is reinforced",
      "A fixed-time or variable-time schedule independent of the occurrence of the target behavior"
    ],
    correctIndex: 3,
    explanation: "Noncontingent reinforcement (NCR) is the presentation of a potential reinforcer on a fixed-time (FT) or variable-time (VT) schedule independent of the occurrence of the target behavior. This eliminates the contingent relation while allowing effects of stimulus presentation alone to be detected.",
  },
  {
    id: 13042,
    topic: "Control Procedures for Positive Reinforcement",
    prompt: "A limitation of using differential reinforcement of other behavior (DRO) as a control condition for positive reinforcement is that:",
    options: [
      "DRO cannot be used with learners who have intellectual disabilities",
      "The DRO condition cannot be alternated with the reinforcement condition",
      "Reductions in the target response could be attributed to either the absence of contingency for the target or the introduction of reinforcement for its absence",
      "DRO requires the removal of all reinforcement from the environment"
    ],
    correctIndex: 2,
    explanation: "A limitation of DRO as a control condition is that reductions in the target behavior could be attributed to either the termination of the contingency for the target response or the introduction of reinforcement for the absence of the target response, making interpretation ambiguous.",
  },
  {
    id: 13043,
    topic: "Control Procedures for Positive Reinforcement",
    prompt: "Thompson and Iwata (2005) concluded that which control procedure offers the most thorough and unconfounded demonstration of the effects of positive reinforcement?",
    options: [
      "Noncontingent reinforcement (NCR)",
      "Differential reinforcement of other behavior (DRO)",
      "Extinction (removal of the contingency)",
      "Differential reinforcement of alternative behavior (DRA)"
    ],
    correctIndex: 0,
    explanation: "Thompson and Iwata (2005) concluded that NCR offers the most thorough and unconfounded demonstration of the effects of positive reinforcement because it eliminates the contingent relation while controlling for mere stimulus presentation effects.",
  },
  {
    id: 13044,
    topic: "Using Reinforcement Effectively",
    prompt: "According to Heward (1980), for a behavior targeted for increase, the initial criterion for reinforcement should be set:",
    options: [
      "Equal to the learner's average baseline performance",
      "Above the learner's highest performance during baseline",
      "Higher than the average baseline performance but no higher than the best baseline performance",
      "At whatever level maximizes the number of reinforcer deliveries per session"
    ],
    correctIndex: 2,
    explanation: "Heward (1980) recommended that for a behavior to increase, the initial criterion should be set higher than the child's average baseline performance and lower than or equal to the best performance during baseline, so that the first responses produce reinforcement.",
  },
  {
    id: 13045,
    topic: "Using Reinforcement Effectively",
    prompt: "A behavior analyst wants to prevent satiation from reducing the effectiveness of reinforcers during an intervention. The most appropriate strategy from the guidelines would be to:",
    options: [
      "Switch to a fixed-ratio schedule to reduce contact with the reinforcer",
      "Increase the magnitude of the reinforcer as sessions progress",
      "Use a single, highly preferred reinforcer consistently to build a strong history of reinforcement",
      "Use a variety of reinforcers to maintain potent establishing operations"
    ],
    correctIndex: 3,
    explanation: "To minimize satiation effects, practitioners should use a variety of reinforcers. Using diverse reinforcers maintains their potency and can prevent any one reinforcer from losing effectiveness. Research by Egel (1981) found that varied reinforcers produced higher correct responding and on-task behavior.",
  },
  {
    id: 13046,
    topic: "Using Reinforcement Effectively",
    prompt: "With a direct reinforcement contingency, emitting the target response produces direct access to the reinforcer without intervening steps. With an indirect contingency, the practitioner delivers the reinforcer. Research suggests that:",
    options: [
      "Both contingencies produce identical results across all learners and behaviors",
      "Direct contingencies may enhance performance, especially for learners with limited behavioral repertoires",
      "Indirect contingencies are always superior because they allow the practitioner to control the timing precisely",
      "Indirect contingencies are preferred for learners with limited verbal repertoires"
    ],
    correctIndex: 1,
    explanation: "Research suggests that direct reinforcement contingencies may enhance performance. Thompson and Iwata (2000) found that some participants showed improved performance only under direct reinforcement, and that irrelevant behaviors under the indirect contingency may interfere with task performance.",
  },
  {
    id: 13047,
    topic: "Using Reinforcement Effectively",
    prompt: "When first teaching a new behavior, practitioners are advised to use continuous reinforcement and then gradually thin delivery to an intermittent schedule. The primary reason for initially using continuous reinforcement is to:",
    options: [
      "Strengthen the behavior by reinforcing each occurrence during the initial stages of learning",
      "Maximize resistance to extinction from the beginning of training",
      "Ensure that all occurrences of the behavior are documented in the data",
      "Reduce the learner's motivation to engage in competing behaviors"
    ],
    correctIndex: 0,
    explanation: "Continuous reinforcement (reinforcing each occurrence of the target behavior) should be used to strengthen behavior primarily during the initial stages of learning a new behavior. After the behavior is established, the rate of reinforcement is gradually thinned to intermittent reinforcement.",
  },
  {
    id: 13048,
    topic: "Using Reinforcement Effectively",
    prompt: "A practitioner who provides descriptive praise such as 'George, I really like the way you are cleaning up that spill before anyone steps in it' may be producing behavior change through:",
    options: [
      "Automatic reinforcement produced by the act of praising",
      "Negative reinforcement, by removing the aversive consequence of spilling",
      "Pure reinforcement effects only, as praise is a social reinforcer",
      "Reinforcement and/or instructional control, as the praise may function as a rule for future responding"
    ],
    correctIndex: 3,
    explanation: "Descriptive praise provided to a verbal person may function not simply as reinforcement but also as a form of rule or instruction, particularly when a large behavior change follows a single instance. Michael (2004) explained that such praise effectively tells the person what behavior earns continued approval.",
  },
  {
    id: 13049,
    topic: "Using Reinforcement Effectively",
    prompt: "When programming for maintenance in natural environments, an important later step in using reinforcement effectively is to:",
    options: [
      "Increase the magnitude of the reinforcer over time to prevent satiation",
      "Replace all social reinforcers with tangible reinforcers to reduce dependency on people",
      "Gradually shift from contrived reinforcement contingencies to naturally occurring reinforcers",
      "Maintain a continuous reinforcement schedule indefinitely to prevent extinction"
    ],
    correctIndex: 2,
    explanation: "A key guideline for using reinforcement effectively is to gradually shift control from contrived to naturally occurring contingencies. As Sidman's account illustrated, tokens can lead to praise, which can lead to learning itself becoming reinforcing, representing a shift toward naturally occurring reinforcers.",
  },
  {
    id: 13050,
    topic: "Common Mistakes in Writing About Reinforcement",
    prompt: "A practitioner says, 'We reinforced Bobby with a token each time he raised his hand.' According to the discussion of common mistakes in talking about reinforcement, what is incorrect about this statement?",
    options: [
      "The statement incorrectly implies a continuous reinforcement schedule",
      "Behaviors are reinforced, not people; the correct language would be that the practitioner reinforced hand raising, not Bobby",
      "Tokens cannot be used as reinforcers for hand raising",
      "Reinforcement terminology should not be applied to social behaviors like hand raising"
    ],
    correctIndex: 1,
    explanation: "Reinforcing the person is a common mistake. Behaviors are reinforced, not people. The correct statement is that Bobby's teacher reinforced hand raising, not Bobby. Although reinforcement acts on the overall person, the procedural focus and primary effect are on the behaviors it follows.",
  },
];

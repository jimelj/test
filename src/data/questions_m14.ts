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

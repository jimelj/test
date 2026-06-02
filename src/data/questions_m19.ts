import type { Question } from "../types";

/**
 * BCBA practice questions for Cooper et al., Chapter 16: Motivating Operations.
 * Grounded in the chapter text. Option order is shuffled at runtime, so
 * correctIndex placement here is arbitrary.
 */
export const QUESTIONS_M19: Question[] = [
  {
    id: 18001,
    topic: "Definition and Characteristics of Motivating Operations",
    prompt: "A motivating operation (MO) is defined as an environmental variable that has which two effects?",
    options: [
      "Value-altering and behavior-altering effects",
      "Discriminative and function-altering effects",
      "Reinforcing and punishing effects",
      "Evocative and abative effects only"
    ],
    correctIndex: 0,
    explanation: "An MO has two defining effects: a value-altering effect (changing the reinforcing or punishing effectiveness of a stimulus) and a behavior-altering effect (changing the current frequency of behavior previously reinforced by that stimulus).",
  },
  {
    id: 18002,
    topic: "Definition and Characteristics of Motivating Operations",
    prompt: "Laraway and colleagues (2003) proposed the term 'motivating operation' to replace 'establishing operation' primarily because it acknowledges that these variables can:",
    options: [
      "Only increase the value of consequences as reinforcers",
      "Only alter behavior in the presence of discriminative stimuli",
      "Both strengthen and weaken the value of a consequence as a reinforcer",
      "Function as both antecedents and consequences simultaneously"
    ],
    correctIndex: 2,
    explanation: "The term motivating operation was proposed to encompass the fact that these variables serve not only to strengthen (establishing operations) but also to weaken (abolishing operations) the value of a consequence as a reinforcer.",
  },
  {
    id: 18003,
    topic: "Definition and Characteristics of Motivating Operations",
    prompt: "When an MO decreases the reinforcing effectiveness of a stimulus, it is specifically called:",
    options: [
      "A discriminative stimulus",
      "A conditioned punisher",
      "An establishing operation",
      "An abolishing operation"
    ],
    correctIndex: 3,
    explanation: "An MO that decreases the reinforcing effectiveness of a stimulus, object, or event is called an abolishing operation (AO). When it increases reinforcing effectiveness, it is an establishing operation (EO).",
  },
  {
    id: 18004,
    topic: "Definition and Characteristics of Motivating Operations",
    prompt: "The term 'abative effect' refers to which of the following?",
    options: [
      "An increase in the current frequency of behavior reinforced by a given stimulus",
      "A decrease in the reinforcing effectiveness of a stimulus",
      "A decrease in the current frequency of behavior reinforced by a given stimulus",
      "An increase in the punishing effectiveness of a stimulus"
    ],
    correctIndex: 2,
    explanation: "The abative effect is the behavior-altering aspect of an abolishing operation: a decrease in the current frequency of all behavior that has been reinforced by the relevant stimulus, object, or event.",
  },
  {
    id: 18005,
    topic: "Definition and Characteristics of Motivating Operations",
    prompt: "Food ingestion after a period of deprivation functions as which type of motivating operation?",
    options: [
      "An abolishing operation with an abative effect",
      "An establishing operation with an evocative effect",
      "A discriminative stimulus with a reinforcing effect",
      "A conditioned punisher with an avoidance effect"
    ],
    correctIndex: 0,
    explanation: "Food ingestion is an abolishing operation (AO) because it decreases the effectiveness of food as a reinforcer (reinforcer-abolishing effect) and decreases the current frequency of food-seeking behaviors (abative effect).",
  },
  {
    id: 18006,
    topic: "Definition and Characteristics of Motivating Operations",
    prompt: "The value-altering and behavior-altering effects of an MO are best described as:",
    options: [
      "Sequential, with the value-altering effect always preceding the behavior-altering effect",
      "Identical in practice and not distinguishable under any conditions",
      "Only observable after the organism contacts the relevant reinforcer",
      "Occurring simultaneously and considered independent of each other"
    ],
    correctIndex: 3,
    explanation: "The value-altering and behavior-altering effects occur simultaneously but are considered independent in the sense that one does not derive from the other. However, once behavior contacts reinforcement, these two effects may become difficult to discern.",
  },
  {
    id: 18007,
    topic: "Definition and Characteristics of Motivating Operations",
    prompt: "A behavior analyst notices that a child's tantrum intensity increases on days when the child has received very little parental attention. This observation is consistent with which MO effect?",
    options: [
      "The reinforcer-abolishing effect of attention deprivation",
      "The evocative effect of attention deprivation as an establishing operation",
      "The abative effect of attention satiation",
      "The discriminative effect of parental presence"
    ],
    correctIndex: 1,
    explanation: "Attention deprivation functions as an establishing operation whose evocative effect increases the current frequency and intensity of behavior (such as tantrums) previously reinforced by attention. The duration and intensity of the tantrum are correlated with the amount of attention received beforehand.",
  },
  {
    id: 18008,
    topic: "Direct and Indirect Effects of Motivating Operations",
    prompt: "Under conditions of extreme food deprivation, an individual begins requesting snacks from strangers even though no food has previously been obtained from them. This best illustrates which concept?",
    options: [
      "Indirect evocative effect of a discriminative stimulus",
      "Respondent conditioning of food-seeking behavior",
      "Direct evocative effect of a strong MO in the absence of relevant discriminative stimuli",
      "Conditioned reinforcement through stimulus generalization"
    ],
    correctIndex: 2,
    explanation: "The direct evocative effect of a strong MO can evoke behavior even in the absence of relevant discriminative stimuli. Under extreme deprivation, the range of stimuli that evokes responding is wider than under lower deprivation.",
  },
  {
    id: 18009,
    topic: "Direct and Indirect Effects of Motivating Operations",
    prompt: "Food deprivation indirectly establishes the reinforcing effectiveness of the sight of a restaurant. This is an example of which MO effect?",
    options: [
      "The direct evocative effect on food-seeking behavior",
      "The indirect establishing effect on conditioned reinforcers correlated with food",
      "The reinforcer-abolishing effect of food satiation",
      "The abative effect on behaviors reinforced by food"
    ],
    correctIndex: 1,
    explanation: "The value-altering effect of an MO also indirectly influences the reinforcing effectiveness of conditioned stimuli. Food deprivation not only directly establishes food as a reinforcer but also enhances the reinforcing effectiveness of all stimuli correlated with food, such as the sight of a restaurant.",
  },
  {
    id: 18010,
    topic: "Behavior-altering versus Function-altering Effects",
    prompt: "A teacher removes a difficult task from a student, which immediately reduces the student's tantrum. Which type of effect has occurred?",
    options: [
      "A function-altering effect, because the future frequency of tantrums has permanently changed",
      "A reinforcing effect, because task removal followed the tantrum",
      "A discriminative effect, because the task served as an SD for tantrums",
      "An antecedent behavior-altering (abative) effect, because removing the MO momentarily reduced the behavior"
    ],
    correctIndex: 3,
    explanation: "Removing the MO (the difficult task) is an antecedent manipulation with an abative behavior-altering effect. It only momentarily reduces behavior; it does not alter the child's repertoire. The child will still tantrum if the MO is reinstated.",
  },
  {
    id: 18011,
    topic: "Behavior-altering versus Function-altering Effects",
    prompt: "Which of the following variables has a function-altering effect on behavior?",
    options: [
      "A discriminative stimulus in whose presence reinforcement has been available",
      "A motivating operation that increases the value of a reinforcer",
      "A reinforcer delivered contingent on a response",
      "An antecedent stimulus that evokes previously learned behavior"
    ],
    correctIndex: 2,
    explanation: "Function-altering effects are produced by consequences (reinforcers, punishers, and extinction or recovery from punishment). These change the future frequency of whatever behavior immediately preceded them. MOs and SDs have behavior-altering effects on current frequency, not function-altering effects.",
  },
  {
    id: 18012,
    topic: "Distinguishing Between MOs and SDs",
    prompt: "In nontechnical terms, the distinction between an SD and an MO can best be summarized as:",
    options: [
      "An SD increases behavior frequency; an MO decreases behavior frequency",
      "An SD tells you that something you want is available; an MO makes you want something",
      "An SD affects future behavior; an MO affects current behavior",
      "An SD is an unconditioned variable; an MO is a conditioned variable"
    ],
    correctIndex: 1,
    explanation: "In nontechnical terms, an SD tells you that something you want is available, while an MO makes you want something. SDs signal differential availability of a reinforcer; MOs alter the differential reinforcing effectiveness of an event.",
  },
  {
    id: 18013,
    topic: "Distinguishing Between MOs and SDs",
    prompt: "A rat trained to press a lever for food presses less frequently when the chamber light is off. The decreased responding in the dark is best explained by:",
    options: [
      "Extinction, because food is unavailable when the light is off",
      "The abolishing operation of food satiation",
      "The abative effect of the MO being absent",
      "The conditioned punishing effect of darkness"
    ],
    correctIndex: 0,
    explanation: "In a discrimination procedure, food is available when the light is on (SD) and unavailable when it is off (S-delta). Food is still valued (the MO is still in effect) in the dark, but the behavior decreases because the reinforcer is unavailable. This is extinction, not MO control.",
  },
  {
    id: 18014,
    topic: "Distinguishing Between MOs and SDs",
    prompt: "An itch is best classified as which type of antecedent variable?",
    options: [
      "An SD, because scratching is available in its presence and unavailable in its absence",
      "A conditioned MO, because its effects depend on a learning history",
      "An unconditioned MO, because it establishes itch-removal as a reinforcer and evokes scratching",
      "A generalized conditioned punisher, because it decreases ongoing behavior"
    ],
    correctIndex: 2,
    explanation: "An itch functions as an MO, not an SD, because itch removal is not an effective reinforcer in the absence of an itch. The itch establishes its own removal as a reinforcer and evokes scratching behavior, fitting the definition of an unconditioned MO.",
  },
  {
    id: 18015,
    topic: "Distinguishing Between MOs and SDs",
    prompt: "A child asks for cookies in the kitchen but not in the bedroom. The kitchen is best classified as what type of antecedent variable?",
    options: [
      "An MO that increases the value of cookies",
      "An establishing operation for food-seeking behavior",
      "A CMO-T that establishes cookies as a conditioned reinforcer",
      "An SD correlated with the availability of cookies"
    ],
    correctIndex: 3,
    explanation: "The kitchen is an SD because it has been differentially correlated with the availability of cookies (reinforcer available in kitchen, unavailable in bedroom). Food deprivation is the MO that establishes cookies as effective reinforcers, while the kitchen signals their availability.",
  },
  {
    id: 18016,
    topic: "Unconditioned Motivating Operations (UMOs)",
    prompt: "Unconditioned motivating operations (UMOs) are classified as 'unconditioned' based on which criterion?",
    options: [
      "Both their value-altering and behavior-altering effects require no learning history",
      "Their value-altering effects do not require a learning history, though their behavior-altering effects are usually learned",
      "Their behavior-altering effects do not require a learning history, though value-altering effects are learned",
      "Neither their value-altering nor behavior-altering effects can be modified by experience"
    ],
    correctIndex: 1,
    explanation: "MOs are classified as unconditioned based on the unlearned aspect of their value-altering effects. The behavior-altering effects of MOs (the specific behaviors evoked) are usually learned. We are born with the capacity to be affected by food reinforcement due to deprivation, but we learn the specific behaviors evoked by food deprivation.",
  },
  {
    id: 18017,
    topic: "Unconditioned Motivating Operations (UMOs)",
    prompt: "Which of the following correctly pairs a UMO with its reinforcer-establishing effect?",
    options: [
      "Water ingestion increases the effectiveness of water as a reinforcer",
      "Becoming warmer increases the effectiveness of warmth as a reinforcer",
      "Sleep deprivation increases the effectiveness of sleep as a reinforcer",
      "Sexual orgasm increases the effectiveness of sexual stimulation as a reinforcer"
    ],
    correctIndex: 2,
    explanation: "Sleep deprivation is a UMO with a reinforcer-establishing effect: it increases the effectiveness of sleep as a reinforcer and evokes behavior previously reinforced by being able to sleep. The other options describe abolishing operations (ingestion, orgasm) or an incorrect direction (becoming warmer abolishes the reinforcing value of additional warmth).",
  },
  {
    id: 18018,
    topic: "Unconditioned Motivating Operations (UMOs)",
    prompt: "A person who has not eaten in 18 hours begins searching kitchen cabinets. Food deprivation in this scenario is best described as:",
    options: [
      "An abolishing operation with an abative effect on food-seeking",
      "A discriminative stimulus signaling the availability of food",
      "A conditioned reinforcer that increases kitchen-searching behavior",
      "An establishing operation with an evocative effect on food-seeking behavior"
    ],
    correctIndex: 3,
    explanation: "Food deprivation is an unconditioned establishing operation. Its value-altering effect is to increase the reinforcing effectiveness of food, and its behavior-altering (evocative) effect is to increase all behaviors previously reinforced by food, including searching kitchen cabinets.",
  },
  {
    id: 18019,
    topic: "Unconditioned Motivating Operations (UMOs)",
    prompt: "Getting uncomfortably warm functions as a UMO by:",
    options: [
      "Increasing the effectiveness of a cooler temperature as a reinforcer and evoking behaviors that have resulted in cooling",
      "Increasing the effectiveness of warmth as a reinforcer and evoking behaviors that have produced warmth",
      "Decreasing the effectiveness of a cooler temperature as a reinforcer and abating body-cooling behavior",
      "Establishing neutral temperature as a punisher and evoking avoidance of heat"
    ],
    correctIndex: 0,
    explanation: "Getting uncomfortably warm is a UMO that establishes a cooler temperature as an effective reinforcer (value-altering effect) and evokes behaviors that have resulted in a body-cooling effect, such as turning on air conditioning (behavior-altering: evocative effect).",
  },
  {
    id: 18020,
    topic: "Unconditioned Motivating Operations (UMOs)",
    prompt: "What technically functions as the UMO related to breathing is not oxygen deprivation per se, but rather:",
    options: [
      "The presence of carbon monoxide in the blood",
      "The buildup of carbon dioxide in the blood as a result of not being able to excrete it",
      "A decrease in blood pressure caused by holding one's breath",
      "The conditioned aversive properties of suffocation cues"
    ],
    correctIndex: 1,
    explanation: "It is not actually oxygen deprivation that functions as the UMO, but rather the buildup of carbon dioxide in the blood as a result of not being able to excrete it (either because of not being able to breathe or because of breathing in air as rich in carbon dioxide as exhaled air).",
  },
  {
    id: 18021,
    topic: "Unconditioned Motivating Operations (UMOs)",
    prompt: "Painful stimulation as a UMO can evoke aggressive behavior toward another organism. This occurs because painful stimulation may establish which events as effective reinforcers?",
    options: [
      "Removal of the other organism from the environment",
      "Food and water, as pain increases overall deprivation",
      "Social attention, because aggression produces attention",
      "Signs of damage to the other organism"
    ],
    correctIndex: 3,
    explanation: "Beyond evoking escape behavior, painful stimulation may function as a UMO that establishes events such as signs of damage to another organism as effective reinforcers, and evokes behaviors that have been reinforced by such signs. Skinner extended this analysis to the emotions of anger, love, and fear.",
  },
  {
    id: 18022,
    topic: "MOs for Punishment",
    prompt: "A migraine establishes bright light as a punisher and decreases opening the curtains. This is an example of:",
    options: [
      "An AO related to punishment, with a punisher-abolishing effect",
      "An EO related to punishment, with a punisher-establishing effect and abative behavioral effect",
      "A UMO with a reinforcer-establishing effect on pain reduction",
      "A CMO-R that establishes avoidance behavior"
    ],
    correctIndex: 1,
    explanation: "A migraine functions as an EO related to punishment: it has a punisher-establishing effect (establishing bright light as a punisher) and an abative effect (decreasing the frequency of behaviors that have produced bright light, such as opening curtains).",
  },
  {
    id: 18023,
    topic: "MOs for Punishment",
    prompt: "Time-out from reinforcement is effective as a punishment procedure only when:",
    options: [
      "It is applied immediately and consistently after each instance of the target behavior",
      "The duration of time-out is at least 5 minutes to ensure the punishing effect",
      "The MO for the reinforcers available during time-in is currently in effect",
      "The child has previously experienced response cost as a punishment procedure"
    ],
    correctIndex: 2,
    explanation: "Time-out will only be effective when 'time-in' serves as a reinforcer. Research by Solnick and colleagues showed that time-out was effective when the time-in environment was enriched and generally ineffective when time-in was impoverished. The effectiveness of time-out depends on the MO for the reinforcer being eliminated.",
  },
  {
    id: 18024,
    topic: "MOs for Punishment",
    prompt: "A parent's disapproving look has been paired repeatedly with restricting access to video games. When would this disapproving look be most effective as a conditioned punisher?",
    options: [
      "When the child has already played video games for several hours and is satiated",
      "Whenever the look has been delivered more than 10 times in the past week",
      "Only during the specific task that produced disapproval in the past",
      "When the child has had restricted access to video games and the MO for playing is in effect"
    ],
    correctIndex: 3,
    explanation: "A conditioned punisher established by being paired with the removal of reinforcers depends on the same MO that establishes the value of those removed reinforcers. The disapproving look will be most effective when the child has been deprived of video games (MO for playing is in effect), making its restriction more aversive.",
  },
  {
    id: 18025,
    topic: "MOs for Punishment",
    prompt: "A generalized conditioned punisher (like a frown associated with loss of many different reinforcers) differs from a simple conditioned punisher in that a generalized conditioned punisher:",
    options: [
      "Has an effectiveness that is almost free from the influence of MOs because it has been associated with many different punishers",
      "Has been paired with a UMO rather than a CMO",
      "Only functions as a punisher for behaviors maintained by positive reinforcement",
      "Can simultaneously function as both a punisher and a reinforcer"
    ],
    correctIndex: 0,
    explanation: "A generalized conditioned punisher is associated with several different punishers. Its effectiveness is almost free from MO control because at least one of the many reinforcers it signals the loss of will likely be valuable at any given moment. Money is an analogous example on the reinforcement side.",
  },
  {
    id: 18026,
    topic: "Multiple Effects of MOs",
    prompt: "In an operant chain, a buzzer signals the availability of food for a lever press. The onset of the buzzer has which two effects on behavior?",
    options: [
      "It evokes the lever press (SD) and increases the future frequency of cord pulling (conditioned reinforcer)",
      "It decreases lever pressing (abative) and decreases cord pulling (punishing effect)",
      "It functions as a UMO for food and as a CMO-S for lever pressing",
      "It functions as both an SD and a UMO simultaneously for the same response"
    ],
    correctIndex: 0,
    explanation: "The buzzer has two effects: (1) it evokes the lever press as an SD, and (2) it increases the future frequency of cord pulling as a conditioned reinforcer. Both effects influence behavior in the same direction: an increase in current frequency and an increase in future frequency.",
  },
  {
    id: 18027,
    topic: "Multiple Effects of MOs",
    prompt: "Food deprivation (a gradual-onset event) differs from sudden painful stimulation in its capacity to function as a punishing consequence because:",
    options: [
      "Food deprivation lacks any punishing properties under all circumstances",
      "Food deprivation's gradual onset means it cannot easily function as a behavioral consequence that decreases future behavior",
      "Only unconditioned stimuli can serve as punishers, and food deprivation is conditioned",
      "Punishing consequences must always involve tangible stimuli, not deprivation states"
    ],
    correctIndex: 1,
    explanation: "Events with sudden onset (like painful stimulation) can function as punishers for the response immediately preceding them. However, this must be qualified for events such as food deprivation that have such gradual onsets that they cannot easily function as behavioral consequences that decrease the future frequency of behavior.",
  },
  {
    id: 18028,
    topic: "Multiple Effects of MOs",
    prompt: "When edibles are used repeatedly as reinforcers to increase a target behavior, a practitioner should also be aware that:",
    options: [
      "The repeated delivery of edibles simultaneously increases their value as reinforcers over time",
      "Edibles lose their reinforcing value only after the session ends",
      "The punishing effect of edibles cancels out their reinforcing effect over time",
      "The repeated consumption of edibles decreases their value as effective reinforcers through the abative (abolishing) effect"
    ],
    correctIndex: 3,
    explanation: "When edibles are used as consequences for increasing behavior (reinforcement effect), the repeated consumption of edibles decreases their value as effective reinforcers (abative effect). This is an example of the multiple effects of MOs that practitioners should monitor.",
  },
  {
    id: 18029,
    topic: "Conditioned Motivating Operations (CMOs)",
    prompt: "Conditioned motivating operations (CMOs) differ from UMOs primarily in that CMOs:",
    options: [
      "Have only value-altering effects, not behavior-altering effects",
      "Alter reinforcing effectiveness only as a result of the organism's learning history",
      "Can only decrease, not increase, the effectiveness of reinforcers",
      "Are specific to human organisms and do not apply to other species"
    ],
    correctIndex: 1,
    explanation: "CMOs are motivating variables that alter the reinforcing effectiveness of other stimuli, objects, or events as a result of the organism's learning history. Like UMOs, they also alter the momentary frequency of all behavior reinforced by those events.",
  },
  {
    id: 18030,
    topic: "Surrogate CMO (CMO-S)",
    prompt: "A CMO-S acquires its motivating effects through which process?",
    options: [
      "Preceding a form of worsening and establishing its own removal as a reinforcer",
      "Being correlated with the differential availability of a specific reinforcer",
      "Being paired with a UMO, thereby acquiring the same value-altering and behavior-altering effects",
      "Establishing the effectiveness of another event as a conditioned reinforcer"
    ],
    correctIndex: 2,
    explanation: "A CMO-S (surrogate CMO) is a previously neutral stimulus that acquired its MO effects by being paired with a UMO. This process is similar to how conditioned reinforcers and punishers acquire their functions by being paired with another behaviorally effective stimulus.",
  },
  {
    id: 18031,
    topic: "Surrogate CMO (CMO-S)",
    prompt: "Research by O'Reilly and colleagues (2000) found that diverted parental attention (a parent talking to a third person) evoked aberrant behavior in individuals with developmental disabilities. Diverted attention is best interpreted as:",
    options: [
      "A CMO-T, because it establishes parental attention as a conditioned reinforcer",
      "A CMO-S, because diverted attention was paired with low levels of attention (MO for attention)",
      "An SD for problem behavior because attention was available during diverted attention",
      "A CMO-R, because diverted attention preceded a form of social worsening"
    ],
    correctIndex: 1,
    explanation: "Diverted attention was paired with low levels of parental attention, which functions as an MO for attention-maintained behavior. Through this pairing, diverted attention acquired CMO-S properties, establishing attention as a reinforcer and evoking problem behavior maintained by attention.",
  },
  {
    id: 18032,
    topic: "Surrogate CMO (CMO-S)",
    prompt: "Seeing a restroom sign and suddenly feeling the urge to urinate is best explained by which concept?",
    options: [
      "The CMO-T, because the sign establishes urination-related behaviors as conditioned reinforcers",
      "The SD, because restrooms are differentially correlated with the availability of relief",
      "The CMO-R, because the restroom sign preceded a period of social worsening",
      "The CMO-S, because the restroom sign was paired with a full bladder (MO)"
    ],
    correctIndex: 3,
    explanation: "The restroom sign may function as a CMO-S because it has been paired with a full bladder (a UMO). Through repeated pairings, the sign acquired the same motivating effects as the full bladder, evoking behavior that would otherwise occur only when the bladder is full.",
  },
  {
    id: 18033,
    topic: "Surrogate CMO (CMO-S)",
    prompt: "To weaken the motivating effectiveness of a CMO-S, a practitioner could use which procedure?",
    options: [
      "Present the CMO-S with a highly valued reinforcer to increase its effectiveness",
      "Increase pairings between the CMO-S and the UMO to extinguish the association",
      "Deliver extinction for all behaviors evoked by the CMO-S while the MO is in effect",
      "Present the CMO-S without the effective MO, or present the MO as often in the absence of the CMO-S as in its presence"
    ],
    correctIndex: 3,
    explanation: "The relationship between a CMO-S and an effective MO can be weakened by MO unpairing: presenting the CMO-S without the effective MO, or presenting the MO as often in the absence of the CMO-S as in its presence.",
  },
  {
    id: 18034,
    topic: "Reflexive CMO (CMO-R)",
    prompt: "A warning stimulus in a discriminated avoidance procedure functions as a CMO-R because:",
    options: [
      "It signals the differential availability of shock-termination as a reinforcer",
      "It establishes the effectiveness of shock reduction for other stimuli correlated with pain",
      "It was originally a neutral stimulus that acquired discriminative control through reinforcement",
      "It has been paired with a UMO (shock) and establishes its own offset as a conditioned reinforcer"
    ],
    correctIndex: 3,
    explanation: "In a discriminated avoidance procedure, the warning stimulus functions as a CMO-R because it has been paired with painful stimulation (a UMO). It establishes its own offset as a conditioned reinforcer and evokes any behavior that has produced such reinforcement (termination of the warning stimulus).",
  },
  {
    id: 18035,
    topic: "Reflexive CMO (CMO-R)",
    prompt: "Why does a warning stimulus in an avoidance procedure fail to qualify as an SD?",
    options: [
      "Because in its absence there is no effective consequence that could have failed to follow the response, and thus no reinforcer unavailability analogous to S-delta extinction",
      "Because the organism has not been previously trained to respond in its presence",
      "Because only unconditioned stimuli can qualify as SDs",
      "Because its effects are temporary and momentary, not permanent"
    ],
    correctIndex: 0,
    explanation: "The warning stimulus fails to qualify as an SD because, in its absence, there is no effective consequence that could have failed to follow the response (there is no reinforcer unavailability). In an avoidance procedure, when the warning stimulus is absent, shock termination is not available or effective, which differs from the S-delta condition where reinforcement could have been delivered but was not.",
  },
  {
    id: 18036,
    topic: "Reflexive CMO (CMO-R)",
    prompt: "During early intensive behavioral intervention, questions and instructions given to learners may function primarily as CMO-Rs rather than as SDs because:",
    options: [
      "Learners receive praise for correct answers, establishing questions as conditioned reinforcers",
      "The questions and instructions establish the opportunity for new learning as a conditioned reinforcer",
      "They precede further intense social interaction or prompting if the learner does not respond, establishing their own removal as a reinforcer",
      "They are paired with highly preferred activities, making them function as CMO-Ss"
    ],
    correctIndex: 2,
    explanation: "During early intensive behavioral intervention, questions and instructions are followed by verbal or physical prompts (further intense social interaction) if the learner does not respond appropriately. This makes them function as CMO-Rs: they establish their own removal as a conditioned reinforcer and evoke responses that produce such removal (compliance).",
  },
  {
    id: 18037,
    topic: "Reflexive CMO (CMO-R)",
    prompt: "When a stranger asks you for directions and you are in a hurry, the main controlling variable for giving a quick response is most likely:",
    options: [
      "The positive reinforcement of the stranger's 'thank you'",
      "The UMO of social deprivation that makes social interaction valuable",
      "The SD provided by the stranger's presence correlated with receiving praise",
      "The CMO-R established by the request, whose continued presence signals potential social worsening"
    ],
    correctIndex: 3,
    explanation: "When answering the question is inconvenient and the stranger's thanks is not a strong reinforcer, the CMO-R is probably the main controlling variable. The stranger's request begins a brief period that functions as a warning stimulus: a form of social worsening (awkwardness) will occur if a response is not made promptly.",
  },
  {
    id: 18038,
    topic: "Transitive CMO (CMO-T)",
    prompt: "A transitive CMO (CMO-T) is best defined as:",
    options: [
      "A stimulus that acquires MO effectiveness by being paired with a UMO",
      "An environmental variable that establishes the effectiveness of another event as a reinforcer and evokes behavior reinforced by that other event",
      "A stimulus that establishes its own removal as a reinforcer",
      "A variable that alters the effectiveness of stimuli as punishers only"
    ],
    correctIndex: 1,
    explanation: "A CMO-T is an environmental variable that establishes (or abolishes) the reinforcing effectiveness of another stimulus and evokes (or abates) the behavior that has been reinforced by that other stimulus. It makes something else effective as a reinforcer rather than altering itself (CMO-R) or mimicking another MO (CMO-S).",
  },
  {
    id: 18039,
    topic: "Transitive CMO (CMO-T)",
    prompt: "Food deprivation functions simultaneously as both a UMO and a CMO-T. As a CMO-T, food deprivation:",
    options: [
      "Directly establishes food as an unconditioned reinforcer",
      "Abolishes the effectiveness of all stimuli correlated with food",
      "Establishes the reinforcing value of conditioned stimuli associated with food, such as a restaurant menu or utensils",
      "Evokes behaviors previously reinforced by food in the absence of any discriminative stimuli"
    ],
    correctIndex: 2,
    explanation: "As a UMO, food deprivation establishes food as an unconditioned reinforcer. As a CMO-T, food deprivation establishes the reinforcing value of conditioned reinforcers associated with food (e.g., a menu, utensils, an attentive server), which requires a learning history.",
  },
  {
    id: 18040,
    topic: "Transitive CMO (CMO-T)",
    prompt: "A workman sees a slotted screw and asks his assistant for a screwdriver. The sight of the screw is best classified as:",
    options: [
      "An SD, because having a screwdriver has been differentially available in the presence of screws",
      "A CMO-S, because the screw has been paired with the UMO of task completion",
      "A CMO-T, because the screw establishes the value of the screwdriver as a conditioned reinforcer and evokes the request",
      "A CMO-R, because the screw established its own removal as a reinforcer"
    ],
    correctIndex: 2,
    explanation: "The sight of the screw functions as a CMO-T. Assistants provide requested tools irrespective of the stimulus conditions, so screwdrivers have been available in the absence as well as in the presence of screws. The screw's role is motivational (establishing the value of the screwdriver) rather than discriminative (signaling availability).",
  },
  {
    id: 18041,
    topic: "Transitive CMO (CMO-T)",
    prompt: "The interrupted-chain procedure used in mand training works by withholding an item the learner needs to complete a task. This manipulation functions as which type of MO?",
    options: [
      "A CMO-S, because the withheld item is paired with a UMO",
      "A CMO-R, because the incomplete chain establishes task completion as a conditioned punisher",
      "A UMO, because the item has unconditioned reinforcing properties",
      "A CMO-T, because withholding the item increases its value as a conditioned reinforcer"
    ],
    correctIndex: 3,
    explanation: "The interrupted-chain procedure functions as a CMO-T: it increases the value of the withheld item as a conditioned reinforcer, creating the ideal condition for teaching the learner to mand for it. The item is not a UMO, and the procedure does not establish the removal of the chain as a reinforcer (CMO-R) or pair a neutral stimulus with an MO (CMO-S).",
  },
  {
    id: 18042,
    topic: "Transitive CMO (CMO-T)",
    prompt: "The key difference between how an SD and a CMO-T control behavior is:",
    options: [
      "An SD evokes current behavior; a CMO-T increases future behavior",
      "An SD is related to reinforcer availability; a CMO-T is related to reinforcer value",
      "An SD works through conditioning; a CMO-T works without a learning history",
      "An SD only increases behavior; a CMO-T can both increase and decrease behavior"
    ],
    correctIndex: 1,
    explanation: "The distinction hinges on the relation between reinforcer availability and the presence of the stimulus. If the reinforcer is more available in the presence than in the absence of the stimulus, it is an SD. If the reinforcer is equally available in the absence and presence of the stimulus, the stimulus functions as a CMO-T by altering value rather than signaling availability.",
  },
  {
    id: 18043,
    topic: "Transitive CMO (CMO-T)",
    prompt: "Research by Shillingsburg and colleagues (2014) taught children to mand for information using 'which cup?' and 'who has it?' Participants manded more often during EO than AO conditions. This demonstrates that these mands for information were under the control of:",
    options: [
      "The presence of an adult as an SD for requesting information",
      "A CMO-S created by pairing the stimulus with prior deprivation",
      "A UMO for social interaction that increased during the EO condition",
      "A CMO-T that increased the value of information about the item's location as a conditioned reinforcer"
    ],
    correctIndex: 3,
    explanation: "The study used the interrupted-chain procedure to function as a CMO-T that increased the value of location information as a conditioned reinforcer. Participants manded using 'which' and 'who' more often during EO rather than AO conditions, confirming that the mands were under functional control of CMO-Ts.",
  },
  {
    id: 18044,
    topic: "Relevance of MOs to the Generality of Treatment Effects",
    prompt: "Fragale and colleagues found that children with autism who learned to mand for preferred items manded almost exclusively when items had been restricted prior to the session. This finding most directly illustrates:",
    options: [
      "That mand training generalizes automatically across all settings once learned",
      "That extinction procedures are needed to maintain mand behavior across contexts",
      "That an acquired behavior may not occur in a new setting if the relevant MO is absent",
      "That stimulus control by discriminative stimuli is the primary barrier to generalization"
    ],
    correctIndex: 2,
    explanation: "The Fragale et al. finding illustrates that even well-established behaviors may not occur in novel settings if the MO is absent. Generalization and maintenance failures can be due not only to novel discriminative stimuli but also to different MO conditions. For a newly acquired response to generalize and maintain, its relevant MO must be in effect.",
  },
  {
    id: 18045,
    topic: "Relevance of MOs to the Generality of Treatment Effects",
    prompt: "When programming for generalization of learned behaviors, a clinician should ensure generalization occurs:",
    options: [
      "Across different reinforcement schedules, since MOs are not relevant to generalization",
      "Across different topographies of the same behavior to ensure response generalization",
      "Across different discriminative stimuli and across different MO conditions",
      "Across different discriminative stimuli only, since MOs are automatic and universal"
    ],
    correctIndex: 2,
    explanation: "When programming for generalization, clinicians must do so not only across different discriminative stimuli but also across different MOs. For a newly acquired response to be generalized and maintained, its relevant MO must also be in effect in those new situations.",
  },
  {
    id: 18046,
    topic: "Relevance of MOs to Applied Behavior Analysis",
    prompt: "Gottschalk and colleagues (2000) compared preference assessments under control, satiation, and deprivation conditions. Approach responses were highest during deprivation conditions. This finding demonstrates that:",
    options: [
      "Preference assessments are not valid measures of reinforcer potency",
      "Results of preference assessments are highly dependent on current MO conditions",
      "Satiation conditions should always be used before conducting preference assessments",
      "Deprivation eliminates the discriminative control of preferred stimuli"
    ],
    correctIndex: 1,
    explanation: "Gottschalk et al. found that approach responses were higher during deprivation conditions across all participants. This demonstrates that results of preference assessments are highly dependent on current MOs, which has important implications for how practitioners conduct and interpret such assessments.",
  },
  {
    id: 18047,
    topic: "Relevance of MOs to Applied Behavior Analysis",
    prompt: "Research by Worsdell and colleagues (2000) showed that high rates of problem behavior occurred when both the EO and reinforcement were present, but almost no responding occurred when the EO was present and reinforcement was absent. This finding is consistent with which principle?",
    options: [
      "That problem behavior is always maintained by positive reinforcement when an EO is in effect",
      "That functional analyses are invalid when MOs are experimentally manipulated",
      "That MOs only affect behavior under extinction conditions, not during active reinforcement",
      "That for behavior to occur it must be followed by an effective reinforcer, and MOs modulate the effectiveness of that reinforcement"
    ],
    correctIndex: 3,
    explanation: "The Worsdell et al. findings are consistent with the conceptualization that for behavior to occur, it must be followed by an effective reinforcer. When the EO was present but reinforcement was absent, almost no responding occurred, suggesting MOs differentially affect the results of functional analyses by modulating reinforcer effectiveness.",
  },
  {
    id: 18048,
    topic: "Relevance of MOs to Applied Behavior Analysis",
    prompt: "The study of MOs led behavior analysts to recognize that the traditional three-term contingency (antecedent-behavior-consequence) is dependent upon which fourth variable?",
    options: [
      "Stimulus control, which determines when behavior will be reinforced",
      "Response topography, which determines how the behavior is executed",
      "A motivating operation that modulates the effectiveness of reinforcement and hence the evocative strength of discriminative stimuli",
      "The organism's phylogenic history, which determines which behaviors are available"
    ],
    correctIndex: 2,
    explanation: "Research on MOs allowed behavior analysts to recognize that the three-term contingency is dependent upon a fourth variable: the motivating operation, which modulates the effectiveness of reinforcement and hence the evocative strength of discriminative stimuli. Without an effective MO, even well-established SDs may not evoke behavior.",
  },
  {
    id: 18049,
    topic: "Definition and Characteristics of Motivating Operations",
    prompt: "The term 'setting event' is considered less useful than 'motivating operation' primarily because:",
    options: [
      "Setting events only refer to physical environments, not deprivation or social variables",
      "Setting events are too broadly defined and include variables that have function-altering effects",
      "Most descriptions of setting events are topographical rather than functional, lacking a clear functional definition",
      "Setting events were originally defined for respondent behavior and do not apply to operant behavior"
    ],
    correctIndex: 2,
    explanation: "No clear functional definition of 'setting event' has appeared in the literature, and most descriptions are topographical rather than functional. The MO concept, by contrast, describes variables with two specific functional effects (value-altering and behavior-altering), providing a greater evidential requirement and better taxonomic precision.",
  },
  {
    id: 18050,
    topic: "Conditioned Motivating Operations (CMOs)",
    prompt: "Research found that the value of token reinforcers decreased when participants had access to the primary reinforcers backed up by the tokens. This finding illustrates which principle?",
    options: [
      "Generalized conditioned reinforcers are completely free from MO control",
      "The value of conditioned and generalized conditioned reinforcers depends upon the MO relevant to their back-up reinforcers",
      "Token economies are only effective for increasing behavior, not for decreasing it",
      "Tokens lose effectiveness through respondent extinction when paired too often with back-up reinforcers"
    ],
    correctIndex: 1,
    explanation: "Research (Ivy et al., 2016; Moher et al., 2008) showed that the value of generalized conditioned reinforcers in the form of tokens decreases when participants have access to the primary and conditioned reinforcers paired with those tokens. The effectiveness of tokens depends upon the MO relevant to their back-up reinforcers. Satiation may be prevented by pairing tokens with a variety of back-up reinforcers under dissimilar MOs.",
  },
];

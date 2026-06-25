import type { Question } from "../types";

/**
 * BCBA practice questions for Cooper et al., Chapter 12: Negative Reinforcement.
 * Grounded in the chapter text. Option order is shuffled at runtime, so
 * correctIndex placement here is arbitrary.
 */
export const QUESTIONS_M15: Question[] = [
  {
    id: 14001,
    topic: "Definition of Negative Reinforcement",
    prompt: "Which of the following best captures the definition of negative reinforcement?",
    options: [
      "A response produces the termination or avoidance of a stimulus, and the response increases in frequency.",
      "A response produces the presentation of a stimulus, and the response increases in frequency.",
      "A response produces the termination of a stimulus, and the response decreases in frequency.",
      "A response produces the presentation of a stimulus, and the response decreases in frequency."
    ],
    correctIndex: 0,
    explanation: "Negative reinforcement is defined as a contingency in which a response produces the termination, reduction, postponement, or avoidance of a stimulus, resulting in an increase in the future occurrence of that response."
  },
  {
    id: 14002,
    topic: "Definition of Negative Reinforcement",
    prompt: "In the four-term contingency for negative reinforcement, what role does the antecedent event that makes escape reinforcing serve?",
    options: [
      "Discriminative stimulus (SD)",
      "Establishing operation (EO)",
      "Conditioned negative reinforcer",
      "Punishing stimulus"
    ],
    correctIndex: 1,
    explanation: "The establishing operation (EO) is the antecedent event in whose presence escape is reinforcing. It sets the motivational context for the negative reinforcement contingency."
  },
  {
    id: 14003,
    topic: "Positive Versus Negative Reinforcement",
    prompt: "Both positive and negative reinforcement share which critical feature?",
    options: [
      "Both involve the termination of a stimulus following a response.",
      "Both involve the presentation of a stimulus following a response.",
      "Both result in an increase in the future frequency of the response.",
      "Both rely on aversive stimuli to change behavior."
    ],
    correctIndex: 2,
    explanation: "Positive and negative reinforcement both produce an increase in responding. They differ in the type of stimulus change: positive reinforcement involves stimulus presentation, while negative reinforcement involves stimulus termination."
  },
  {
    id: 14004,
    topic: "Positive Versus Negative Reinforcement",
    prompt: "Behavior maintained by positive reinforcement produces a stimulus that was absent prior to responding. Behavior maintained by negative reinforcement does what?",
    options: [
      "Also produces a stimulus that was absent prior to responding.",
      "Prevents a stimulus from ever occurring again.",
      "Terminates a stimulus that was present prior to responding.",
      "Reduces the future probability of responding."
    ],
    correctIndex: 2,
    explanation: "The key distinction is based on the type of stimulus change. Positive reinforcement involves adding a stimulus that was absent, while negative reinforcement involves terminating a stimulus that was present before the response."
  },
  {
    id: 14005,
    topic: "Negative Reinforcement Versus Punishment",
    prompt: "A staff member turns on a loud buzzer each time a client engages in self-injury, and self-injury decreases. A different staff member turns off the same buzzer when the client asks for a break, and break-requesting increases. How should these two contingencies be classified?",
    options: [
      "The first is negative reinforcement; the second is punishment.",
      "Both are negative reinforcement because both involve aversive stimuli.",
      "The first is punishment; the second is negative reinforcement.",
      "Both are punishment because both involve aversive stimuli."
    ],
    correctIndex: 2,
    explanation: "When a stimulus is presented contingent on a response and the response decreases, that is punishment. When a stimulus is terminated contingent on a response and the response increases, that is negative reinforcement."
  },
  {
    id: 14006,
    topic: "Negative Reinforcement Versus Punishment",
    prompt: "A common misconception is that 'negative reinforcement' is the technical term for punishment. What is the most accurate explanation for why this view is incorrect?",
    options: [
      "The terms positive and negative refer to the type of stimulus change, not to good or bad outcomes, and negative reinforcement always increases responding.",
      "Negative reinforcement and punishment involve different organisms.",
      "Negative reinforcement can only occur with unconditioned stimuli, whereas punishment uses conditioned stimuli.",
      "Punishment is only used in laboratory settings, while negative reinforcement occurs in natural environments."
    ],
    correctIndex: 0,
    explanation: "The terms positive and negative do not mean good and bad; they refer to stimulus presentation versus termination. Negative reinforcement always increases responding, which is the opposite of punishment's effect."
  },
  {
    id: 14007,
    topic: "Escape and Avoidance Contingencies",
    prompt: "In an escape contingency, a response:",
    options: [
      "Prevents a stimulus from occurring.",
      "Postpones a stimulus to a later time.",
      "Signals that an aversive stimulus is about to begin.",
      "Terminates an ongoing stimulus."
    ],
    correctIndex: 3,
    explanation: "An escape contingency is one in which a response terminates (produces escape from) an ongoing stimulus. This is the simplest form of negative reinforcement."
  },
  {
    id: 14008,
    topic: "Escape and Avoidance Contingencies",
    prompt: "In discriminated avoidance, what role does the warning signal play?",
    options: [
      "It functions as a discriminative stimulus in whose presence a response prevents the aversive stimulus.",
      "It serves as an establishing operation that makes food reinforcing.",
      "It serves as the reinforcer that maintains avoidance behavior.",
      "It functions as an unconditioned aversive stimulus."
    ],
    correctIndex: 0,
    explanation: "In discriminated avoidance, the warning signal is a discriminative stimulus in whose presence responding prevents the aversive stimulus. Responses in the absence of the signal have no effect."
  },
  {
    id: 14009,
    topic: "Escape and Avoidance Contingencies",
    prompt: "Free-operant avoidance differs from discriminated avoidance primarily in that:",
    options: [
      "Free-operant avoidance requires a signal, whereas discriminated avoidance does not.",
      "Free-operant avoidance involves escape from an ongoing stimulus, whereas discriminated avoidance involves postponement.",
      "Free-operant avoidance occurs without a programmed signal; a response at any time resets the clock.",
      "Free-operant avoidance strengthens behavior through stimulus presentation rather than termination."
    ],
    correctIndex: 2,
    explanation: "In free-operant avoidance, the avoidance response is free to occur at any time and will delay the aversive stimulus, without requiring a preceding warning signal."
  },
  {
    id: 14010,
    topic: "Escape and Avoidance Contingencies",
    prompt: "A parent tells a child, 'If you don't start your homework in 10 minutes, you'll have to do it in your room.' The child begins homework immediately after the warning. This illustrates which contingency?",
    options: [
      "Free-operant avoidance",
      "Escape",
      "Discriminated avoidance",
      "Positive reinforcement"
    ],
    correctIndex: 2,
    explanation: "Discriminated avoidance involves responding in the presence of a warning signal (the parent's statement) to prevent the aversive event (working in the bedroom). The warning statement is the discriminative stimulus."
  },
  {
    id: 14011,
    topic: "Escape and Avoidance Contingencies",
    prompt: "A child completes homework at any point after school, thereby avoiding a later requirement to work in the bedroom. This arrangement is best described as:",
    options: [
      "Free-operant avoidance",
      "Discriminated avoidance",
      "Positive reinforcement",
      "Escape"
    ],
    correctIndex: 0,
    explanation: "Free-operant avoidance is an arrangement in which a response at any time postpones the aversive event. Because the child can complete homework at any time after school to avoid the consequence, this is free-operant avoidance."
  },
  {
    id: 14015,
    topic: "Characteristics of Negative Reinforcement",
    prompt: "Which statement best captures why a wide range of behaviors, including both appropriate and problem behaviors, can be maintained by negative reinforcement?",
    options: [
      "Negative reinforcement only strengthens reflexive behaviors, so any reflexive act can be maintained.",
      "Negative reinforcement only applies to behaviors that have been previously reinforced with food.",
      "A behavior must occur at least 50 times before negative reinforcement can maintain it.",
      "Any response that successfully terminates aversive stimulation will be strengthened, regardless of its form."
    ],
    correctIndex: 3,
    explanation: "Because any response that terminates aversive stimulation will be strengthened, a wide variety of behaviors, from appropriate academic skills to property destruction and self-injury, can be acquired and maintained by negative reinforcement."
  },
  {
    id: 14016,
    topic: "Unconditioned and Conditioned Negative Reinforcers",
    prompt: "Shock, loud noise, intense light, and extreme temperature are examples of:",
    options: [
      "Conditioned negative reinforcers, because they acquire their effects through pairing.",
      "Unconditioned negative reinforcers, because they strengthen escape behavior without prior learning.",
      "Positive reinforcers, because they are stimuli that an organism contacts.",
      "Neutral stimuli, because their aversive properties depend entirely on context."
    ],
    correctIndex: 1,
    explanation: "Unconditioned negative reinforcers are noxious stimuli whose removal strengthens behavior without prior learning. Shock, loud noise, intense light, and extreme temperatures are typical examples."
  },
  {
    id: 14017,
    topic: "Unconditioned and Conditioned Negative Reinforcers",
    prompt: "A child begins cleaning her room immediately when her parent starts nagging, because nagging has been paired reliably with being sent to stay in the room until it is clean. The nagging is best described as a:",
    options: [
      "Conditioned negative reinforcer",
      "Unconditioned negative reinforcer",
      "Conditioned positive reinforcer",
      "Discriminative stimulus only, with no reinforcing properties"
    ],
    correctIndex: 0,
    explanation: "Nagging is a conditioned negative reinforcer. It was originally neutral but acquired aversive properties through pairing with being sent to the room. Escape from nagging now maintains cleaning behavior."
  },
  {
    id: 14018,
    topic: "Unconditioned and Conditioned Negative Reinforcers",
    prompt: "Conditioned negative reinforcers are interesting because they often function simultaneously as:",
    options: [
      "Both unconditioned reinforcers and establishing operations.",
      "Both punishers and unconditioned reinforcers.",
      "Both conditioned positive reinforcers and establishing operations.",
      "Both discriminative stimuli and conditioned aversive stimuli."
    ],
    correctIndex: 3,
    explanation: "Conditioned negative reinforcers, such as nagging or dark clouds, function as discriminative stimuli because responding in their presence avoids further consequences, and as conditioned aversive stimuli because they have been paired with other aversive events."
  },
  {
    id: 14019,
    topic: "Social Versus Automatic Negative Reinforcement",
    prompt: "A person experiencing a headache takes an over-the-counter pain reliever, which reduces the pain without anyone else's involvement. This is an example of:",
    options: [
      "Social negative reinforcement",
      "Discriminated avoidance",
      "Automatic negative reinforcement",
      "Positive punishment"
    ],
    correctIndex: 2,
    explanation: "Automatic negative reinforcement occurs when stimulus termination is produced directly by a response, independent of the action of another person. Taking pain medication independently to relieve a headache fits this definition."
  },
  {
    id: 14020,
    topic: "Social Versus Automatic Negative Reinforcement",
    prompt: "An employee who is confused by a work task asks a supervisor for help. The supervisor assists, removing the aversive task demands. This illustrates:",
    options: [
      "Automatic negative reinforcement, because the employee performed the behavior independently.",
      "Social negative reinforcement, because the consequence results from another person's action.",
      "Positive reinforcement, because the supervisor provided something desired.",
      "Extinction, because the task demands were removed."
    ],
    correctIndex: 1,
    explanation: "Social negative reinforcement occurs when the aversive stimulus is terminated through the action of another person. The supervisor's assistance removed the aversive task demands, making this social negative reinforcement."
  },
  {
    id: 14021,
    topic: "Identifying the Context of Negative Reinforcement",
    prompt: "Why must assessments for negative reinforcers place equal emphasis on the antecedent event as well as the consequence?",
    options: [
      "Because negative reinforcers are always more powerful than positive reinforcers.",
      "Because consequences are never observable in negative reinforcement situations.",
      "Because once the behavior occurs, the negative reinforcer may be gone and cannot be observed.",
      "Because the antecedent event functions as the reinforcer in negative reinforcement."
    ],
    correctIndex: 2,
    explanation: "Once a behavior occurs under a negative reinforcement contingency, the aversive stimulus is terminated and may no longer be observable. Therefore, the antecedent EO must be identified alongside the consequence."
  },
  {
    id: 14024,
    topic: "Determinants of Negative Reinforcement Effects",
    prompt: "Which of the following conditions increases the effectiveness of a negative reinforcement contingency?",
    options: [
      "The stimulus change occurs several minutes after the target response.",
      "Escape from the EO is available for both the target response and competing responses.",
      "The stimulus change immediately follows the occurrence of the target response.",
      "The magnitude of the aversive stimulus is kept minimal to avoid ethical concerns."
    ],
    correctIndex: 2,
    explanation: "Immediate stimulus change following the target response is one of four conditions that increase the effectiveness of negative reinforcement. Delays between the response and consequence reduce the contingency's strength."
  },
  {
    id: 14025,
    topic: "Determinants of Negative Reinforcement Effects",
    prompt: "Magnitude of negative reinforcement refers to:",
    options: [
      "The total number of trials conducted in a session.",
      "The number of responses required to produce escape.",
      "The duration of the escape period after the response.",
      "The difference in stimulation present before and after the response occurs."
    ],
    correctIndex: 3,
    explanation: "Magnitude of reinforcement in a negative reinforcement context refers to the degree of difference in aversive stimulation between the pre-response and post-response conditions. A larger difference produces a more powerful reinforcing effect."
  },
  {
    id: 14026,
    topic: "Determinants of Negative Reinforcement Effects",
    prompt: "A teacher implements a negative reinforcement procedure but allows students to escape task demands by engaging in off-task behavior as well as by completing work. Which determinant of effectiveness is violated?",
    options: [
      "Availability of reinforcement for competing responses.",
      "Immediacy of the stimulus change.",
      "Consistency of escape production.",
      "Magnitude of reinforcement."
    ],
    correctIndex: 0,
    explanation: "When reinforcement (escape from demands) is available for competing responses such as off-task behavior, the negative reinforcement contingency for the target response is weakened. Effectiveness requires that reinforcement be unavailable for competing responses."
  },
  {
    id: 14031,
    topic: "Acquisition and Maintenance of Problem Behavior",
    prompt: "When task demands serve as an EO for escape behavior and positive reinforcement for compliance is suboptimal, what pattern is likely to occur over time?",
    options: [
      "Problem behavior decreases because the student habituates to the demands.",
      "Task demands cease to function as an EO as the student matures.",
      "Compliance increases because the student encounters fewer demands.",
      "Problem behavior may persist and escalate to more severe forms as the student attempts to achieve escape."
    ],
    correctIndex: 3,
    explanation: "When compliance is not adequately reinforced and escape from demands is available, mild forms of escape behavior may escalate to more severe problem behaviors such as property destruction, aggression, or self-injury."
  },
  {
    id: 14033,
    topic: "Acquisition and Maintenance of Problem Behavior",
    prompt: "Research has shown that presenting demands in the context of low-quality attention can increase escape-maintained problem behavior. Conversely, which intervention has been shown to decrease such problem behavior?",
    options: [
      "Allowing the individual to choose among tasks or choose the order in which tasks are completed.",
      "Increasing the difficulty level of task demands to make them more challenging.",
      "Removing all task demands to eliminate the EO entirely.",
      "Providing a warning signal before each demand is presented."
    ],
    correctIndex: 0,
    explanation: "Research has shown that giving individuals choice over which tasks to complete or the order in which tasks are done reduces problem behaviors maintained by escape from demands."
  },
  {
    id: 14034,
    topic: "Extinction of Behavior Maintained by Negative Reinforcement",
    prompt: "Extinction of behavior maintained by negative reinforcement means:",
    options: [
      "Removing all reinforcement from the environment.",
      "Presenting a pleasant stimulus contingent on problem behavior.",
      "Reducing the intensity of the aversive stimulus so that it no longer functions as an EO.",
      "No longer allowing the response to terminate or avoid the aversive event, thereby reinstating the consequence the response previously escaped."
    ],
    correctIndex: 3,
    explanation: "Extinction for negatively reinforced behavior means withholding negative reinforcement, that is, presenting the consequence that the behavior previously escaped or avoided. For example, if whining allowed a child to avoid a task, extinction would reinstate the task requirement."
  },
  {
    id: 14039,
    topic: "Teacher and Caregiver Responding",
    prompt: "When a teacher delivers a reprimand and the student's problem behavior stops, what learning process may maintain the teacher's use of reprimands?",
    options: [
      "Positive reinforcement, because the teacher receives praise from administration.",
      "Extinction, because the teacher stops receiving reinforcement for teaching.",
      "Punishment, because reprimands are aversive to the student.",
      "Negative reinforcement, because the termination of problem behavior negatively reinforces the reprimand."
    ],
    correctIndex: 3,
    explanation: "When a reprimand terminates problem behavior, the teacher's behavior of delivering reprimands is negatively reinforced by escape from the aversive student behavior. This can maintain both appropriate and inappropriate teacher responses."
  },
  {
    id: 14042,
    topic: "Teacher and Caregiver Responding",
    prompt: "Research on caregiver behavior and negative reinforcement suggests that the maintenance of newly learned therapeutic skills depends partly on:",
    options: [
      "The number of training sessions the caregiver completed.",
      "The caregiver's inherent personality traits.",
      "How quickly and effectively those skills solve the problem behavior.",
      "Whether the skills were taught in a classroom or on-the-job setting."
    ],
    correctIndex: 2,
    explanation: "If newly taught therapeutic skills quickly terminate problem behavior (negative reinforcement), those skills are more likely to be maintained. The speed and effectiveness of skill success is an important determinant of caregiver skill maintenance."
  },
  {
    id: 14043,
    topic: "Ethical Considerations",
    prompt: "A primary ethical concern specific to using negative reinforcement in behavior change programs is:",
    options: [
      "That participants may become too dependent on the reinforcer.",
      "That the use of aversive antecedent events (EOs) may be unjustifiable, particularly when they are extremely noxious.",
      "That negative reinforcement cannot be withdrawn once it has been established.",
      "That data collection is impossible when aversive stimuli are used."
    ],
    correctIndex: 1,
    explanation: "The EOs for negatively reinforced behavior are aversive events. Extremely noxious antecedent stimuli cannot be ethically justified as part of a typical behavior change program, making the nature and intensity of the EO a key ethical consideration."
  },
  {
    id: 14044,
    topic: "Ethical Considerations",
    prompt: "Which side effect of negative reinforcement procedures is also commonly associated with punishment?",
    options: [
      "Increases in targeted appropriate behavior.",
      "Resistance to extinction.",
      "Behaviors that compete with desired behavior, such as running away or screaming.",
      "Overreliance on verbal prompts."
    ],
    correctIndex: 2,
    explanation: "The presence of aversive stimuli can generate behaviors that compete with the acquisition of desired behavior, such as screaming or fleeing. These undesirable side effects are similar to those observed with punishment procedures."
  },
  {
    id: 14045,
    topic: "Ethical Considerations",
    prompt: "An example of a competing behavior generated by aversive antecedent stimuli in a negative reinforcement context is:",
    options: [
      "A student who raises a hand to answer questions when praise is delivered.",
      "An employee who completes work tasks faster when given a preferred assignment.",
      "A client who engages in self-monitoring to track progress.",
      "A socially withdrawn child placed among peers who screams and runs away instead of interacting."
    ],
    correctIndex: 3,
    explanation: "A socially withdrawn child who is placed among others may scream and run away instead of interacting. Running away competes with social interaction and is generated by the aversive social situation that serves as the EO."
  },
  {
    id: 14050,
    topic: "Characteristics of Negative Reinforcement",
    prompt: "Why is it technically incomplete to say that 'shock' or 'parental nagging' is a negative reinforcer without further specification?",
    options: [
      "Because these stimuli can only serve as punishers, never as negative reinforcers.",
      "Because negative reinforcers must be conditioned stimuli, and shock is unconditioned.",
      "Because the same stimulus can serve as an EO when presented before behavior and as punishment when presented after behavior; it is the removal of the stimulus that functions as the negative reinforcer.",
      "Because a list of stimuli is sufficient description as long as 'removal' is implied."
    ],
    correctIndex: 2,
    explanation: "Listing a stimulus as a negative reinforcer without specifying its removal is incomplete. The same stimulus functions as an EO when presented prior to behavior, as punishment when presented after behavior, and as a negative reinforcer only when its removal follows the behavior."
  }
];

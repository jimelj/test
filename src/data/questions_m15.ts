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
    id: 14012,
    topic: "Escape and Avoidance Contingencies",
    prompt: "In the posture study by Azrin and colleagues (1968), what did correcting posture after the audible click but before the tone sounded illustrate?",
    options: [
      "Free-operant avoidance, because the click had not yet sounded.",
      "Escape, because the tone was already on.",
      "Positive reinforcement, because correct posture was praised.",
      "Discriminated avoidance, because the click served as a warning signal and the response prevented the tone."
    ],
    correctIndex: 3,
    explanation: "In discriminated avoidance, a response in the presence of a warning signal prevents the aversive stimulus. The click signaled that the tone would follow; correcting posture within 3 seconds prevented the tone from sounding."
  },
  {
    id: 14013,
    topic: "Two-Factor Theory of Avoidance",
    prompt: "Mowrer's two-factor theory of avoidance proposes that:",
    options: [
      "Avoidance is maintained solely by respondent conditioning mechanisms.",
      "Respondent conditioning first establishes fear to the warning signal, and then operant behavior is maintained by escape from that fear.",
      "Avoidance behavior is maintained exclusively by the termination of the warning signal without any role of fear.",
      "Two separate operant mechanisms account for avoidance, one for acquisition and one for maintenance."
    ],
    correctIndex: 1,
    explanation: "Mowrer proposed that the warning signal acquires fear-eliciting properties through respondent conditioning, and avoidance behavior is then maintained operantly by escape from that conditioned fear."
  },
  {
    id: 14014,
    topic: "Two-Factor Theory of Avoidance",
    prompt: "Sidman's research on free-operant avoidance challenged two-factor theory primarily because:",
    options: [
      "Animals in Sidman's studies never learned to avoid shocks.",
      "Sidman demonstrated that respondent conditioning was the only process needed to explain avoidance.",
      "Shock intensity was too low to generate fear responses in Sidman's experiments.",
      "Animals learned to postpone shocks in the absence of any programmed warning signal, eliminating the need to invoke fear of a signal."
    ],
    correctIndex: 3,
    explanation: "Sidman showed that animals acquired avoidance behavior without any warning signal. This finding challenged two-factor theory because there was no conditioned stimulus to elicit fear, yet avoidance still occurred."
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
    id: 14022,
    topic: "Identifying the Context of Negative Reinforcement",
    prompt: "Weeks and Gaylord-Ross (1981) observed more problem behavior during difficult tasks than easy tasks. Why could they not conclude with certainty that escape maintained the behavior?",
    options: [
      "The students did not have severe enough disabilities to experience task demands as aversive.",
      "The consequences following problem behavior were unknown, so attention or other positive reinforcers could not be ruled out.",
      "Easy tasks produced more problem behavior than difficult tasks in every case.",
      "The researchers failed to implement a functional analysis."
    ],
    correctIndex: 1,
    explanation: "Because the consequences following problem behavior were not controlled or systematically observed, it was possible that behavior was maintained by attention or another positive reinforcer rather than by escape from task demands."
  },
  {
    id: 14023,
    topic: "Identifying the Context of Negative Reinforcement",
    prompt: "The functional analysis methodology developed by Iwata and colleagues (1994) identifies escape-maintained problem behavior by:",
    options: [
      "Observing behavior across conditions that differ in antecedent and consequent events, including a demand condition where problem behavior produces escape.",
      "Presenting preferred items contingent on appropriate behavior only.",
      "Removing all task demands and measuring any reductions in problem behavior.",
      "Using a reversal design to compare high-demand and low-demand sessions without changing consequences."
    ],
    correctIndex: 0,
    explanation: "Iwata et al.'s functional analysis methodology includes a demand condition in which task demands serve as the antecedent (EO) and escape from demands follows problem behavior. Higher rates in this condition compared to others indicate escape-maintained behavior."
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
    id: 14027,
    topic: "Applications of Negative Reinforcement: Feeding Problems",
    prompt: "In the Ahearn and colleagues (1996) study on chronic food refusal, what negative reinforcement contingency was in place during the nonremoval-of-the-spoon treatment?",
    options: [
      "Food acceptance produced escape from the spoon being held at the child's lip.",
      "Food refusal produced access to preferred toys.",
      "Correct eating produced praise from the therapist.",
      "Physical guidance was removed only after the child ate all food on the plate."
    ],
    correctIndex: 0,
    explanation: "In the nonremoval-of-the-spoon condition, the spoon was held at the child's lower lip until the bite was accepted. Acceptance terminated this arrangement, functioning as negative reinforcement for food acceptance."
  },
  {
    id: 14028,
    topic: "Applications of Negative Reinforcement: Feeding Problems",
    prompt: "Piazza and colleagues (2003) compared positive reinforcement alone, negative reinforcement alone, and their combination for chronic food refusal. What was the primary finding?",
    options: [
      "Negative reinforcement produced increases in consumption regardless of whether implemented alone or combined with positive reinforcement, while positive reinforcement alone was ineffective.",
      "Only positive reinforcement affected behavior in all children.",
      "The combination of positive and negative reinforcement was always superior to either alone.",
      "Both interventions were equally effective when implemented without extinction."
    ],
    correctIndex: 0,
    explanation: "Piazza et al. found that positive reinforcement alone did not increase food consumption for any child, while negative reinforcement was effective whether implemented alone or combined with positive reinforcement."
  },
  {
    id: 14029,
    topic: "Applications of Negative Reinforcement: Error Correction",
    prompt: "In Worsdell and colleagues' (2005) Study 3 on error correction, the 'irrelevant' error correction condition was designed to isolate the effects of:",
    options: [
      "Positive reinforcement for correct responding.",
      "Negative reinforcement alone, by having students practice an unrelated word rather than the misread word.",
      "Token economy procedures during reading instruction.",
      "The practice effect of repeating the target word."
    ],
    correctIndex: 1,
    explanation: "The irrelevant condition had students repeat an unrelated word contingent on errors. This isolated the avoidance contingency (correct response avoids repetition practice) without providing practice on the target word."
  },
  {
    id: 14030,
    topic: "Applications of Negative Reinforcement: Error Correction",
    prompt: "The fact that students improved their reading performance even when practicing irrelevant words in the Worsdell et al. (2005) study suggests that:",
    options: [
      "Repetition of any word improves reading by strengthening phonemic awareness.",
      "Irrelevant practice is always superior to relevant practice for reading acquisition.",
      "Positive reinforcement for correct responding is unnecessary in reading instruction.",
      "Negative reinforcement (the avoidance contingency) plays at least some role in the effectiveness of error-correction procedures."
    ],
    correctIndex: 3,
    explanation: "Improvement in the irrelevant condition showed that some benefit of error-correction procedures comes from the avoidance contingency (correct responses avoid remedial practice), not only from practicing the target words."
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
    id: 14032,
    topic: "Acquisition and Maintenance of Problem Behavior",
    prompt: "O'Reilly (1995) found that aggressive behavior was higher in a demand condition than an attention condition. When data were further divided by sleep duration, which pattern emerged?",
    options: [
      "The highest rates of aggression occurred during the demand condition following sleep deprivation.",
      "Aggression was highest during the attention condition following adequate sleep.",
      "Sleep deprivation had no effect on aggression rates.",
      "Aggression was equally high in both conditions when sleep was adequate."
    ],
    correctIndex: 0,
    explanation: "O'Reilly found that work demands (EO #1) and sleep deprivation (EO #2) combined to produce the highest rates of escape-maintained aggression, illustrating how multiple EOs can interact."
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
    id: 14035,
    topic: "Behavioral Replacement: Differential Negative Reinforcement",
    prompt: "In the Durand and Carr (1987) study, stereotypic behaviors maintained by escape from task demands were reduced by teaching students to say 'Help me.' Why did stereotypy decrease?",
    options: [
      "Saying 'Help me' produced access to preferred activities, making stereotypy less reinforced.",
      "The phrase 'Help me' served as a punishment that suppressed stereotypy.",
      "The verbal response produced assistance with the task, providing the same escape function as stereotypy, making stereotypy unnecessary.",
      "Stereotypy was placed on extinction while 'Help me' was reinforced with praise."
    ],
    correctIndex: 2,
    explanation: "Teaching a functionally equivalent response that produces the same reinforcer (escape from task demands via assistance) reduces the problem behavior through differential negative reinforcement. Stereotypy decreased because 'Help me' achieved the same outcome more effectively."
  },
  {
    id: 14036,
    topic: "Behavioral Replacement: Differential Negative Reinforcement",
    prompt: "Marcus and Vollmer (1995) compared a DNR communication condition and a DNR compliance condition for a girl's disruptive behavior. Which condition also improved task performance?",
    options: [
      "The DNR compliance condition, because the break was contingent on following instructions.",
      "The DNR communication condition, because saying 'Finished' produced a break.",
      "Neither condition improved task performance.",
      "Both conditions equally improved task performance."
    ],
    correctIndex: 0,
    explanation: "The DNR compliance condition required the child to comply with an instruction to earn a break. This produced reductions in disruption and, unlike the communication condition, also improved task engagement and performance."
  },
  {
    id: 14037,
    topic: "Behavioral Replacement: Differential Positive Reinforcement",
    prompt: "Slocum and Vollmer (2015) compared positive and negative reinforcement for compliance in children whose problem behavior was escape-maintained. A notable feature of their study was that:",
    options: [
      "Extinction was implemented so that problem behavior no longer produced escape.",
      "Both interventions were implemented without extinction, meaning problem behavior continued to produce escape throughout treatment.",
      "Negative reinforcement was not used because of ethical concerns.",
      "Positive reinforcement was delivered on a fixed-ratio schedule only."
    ],
    correctIndex: 1,
    explanation: "Slocum and Vollmer studied whether positive or negative reinforcement for compliance could be effective even when problem behavior continued to produce escape. Both were implemented without extinction."
  },
  {
    id: 14038,
    topic: "Behavioral Replacement: Differential Positive Reinforcement",
    prompt: "In Slocum and Vollmer's (2015) comparison, what general finding emerged regarding positive versus negative reinforcement for compliance?",
    options: [
      "Negative reinforcement for compliance produced more consistent effects than positive reinforcement.",
      "Positive reinforcement for compliance produced more consistent effects than negative reinforcement.",
      "Both interventions were equally ineffective without extinction.",
      "Neither intervention affected rates of problem behavior."
    ],
    correctIndex: 1,
    explanation: "Slocum and Vollmer reported that positive reinforcement (delivery of a small edible item for compliance) produced more consistent effects than negative reinforcement (30-second break for compliance) in reducing problem behavior."
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
    id: 14040,
    topic: "Teacher and Caregiver Responding",
    prompt: "In the simulation study by Miller, Lerman, and Fritz (2010), what happened when teacher reprimands no longer stopped student problem behavior (extinction condition)?",
    options: [
      "Teachers switched to using physical guidance instead of reprimands.",
      "Three teachers terminated their participation, providing evidence that student problem behavior was an aversive event.",
      "No changes in teacher behavior were observed.",
      "Teachers increased their rate of reprimands dramatically."
    ],
    correctIndex: 1,
    explanation: "Three teachers dropped out of the study during the extinction condition, which itself demonstrated that student problem behavior was aversive. This underscores the EO function of problem behavior for caregiver escape."
  },
  {
    id: 14041,
    topic: "Teacher and Caregiver Responding",
    prompt: "Thompson, Bruzek, and Cotnoir-Bichelman (2011) studied simulated caregiving and found that caregiver responses effective in stopping a recorded infant cry persisted. This finding is best explained by:",
    options: [
      "Positive reinforcement from the experimenter.",
      "Extinction of irrelevant caregiver responses paired with shaping.",
      "Negative reinforcement: terminating the cry strengthened responses that were effective in stopping it.",
      "Respondent conditioning of calm responses to the infant doll."
    ],
    correctIndex: 2,
    explanation: "Caregiver responses that terminated the infant cry were strengthened by negative reinforcement, while responses that no longer terminated it decreased. This mirrors the negative reinforcement contingency that shapes real caregiver behavior."
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
    id: 14046,
    topic: "Ambiguity Between Positive and Negative Reinforcement",
    prompt: "Michael (1975) suggested that the distinction between positive and negative reinforcement might be unnecessary. What alternative did he propose?",
    options: [
      "Using punishment procedures whenever reinforcement type is ambiguous.",
      "Classifying all reinforcement as positive because behavior always increases.",
      "Specifying the type of environmental change in terms of key stimulus features present before and after the response, rather than whether a stimulus was added or removed.",
      "Eliminating the use of the word 'negative' from the behavior-analytic vocabulary."
    ],
    correctIndex: 2,
    explanation: "Michael proposed that instead of labeling contingencies as positive or negative reinforcement, practitioners should specify the prechange and postchange stimulus conditions, which would provide a more complete understanding without the terminological ambiguity."
  },
  {
    id: 14047,
    topic: "Ambiguity Between Positive and Negative Reinforcement",
    prompt: "Osborne's (1969) study on free-time contingencies in the classroom is cited as an example of terminological ambiguity because:",
    options: [
      "Students' in-seat behavior decreased during the free-time condition.",
      "The free-time contingency could be interpreted as either negative reinforcement (termination of work) or positive reinforcement (access to activities during free time).",
      "The study did not include a baseline phase, making interpretation impossible.",
      "Free time served only as a punisher for some students."
    ],
    correctIndex: 1,
    explanation: "Osborne noted that while the free-time contingency seemed to involve negative reinforcement through termination of the work requirement, access to activities during free time may also have functioned as positive reinforcement, illustrating the ambiguity."
  },
  {
    id: 14048,
    topic: "Ambiguity Between Positive and Negative Reinforcement",
    prompt: "Magoon and colleagues equated positive reinforcement (money gain) and negative reinforcement (money-loss avoidance) in human operant studies. Their main finding was that:",
    options: [
      "The two contingency types produced identical behavioral outcomes.",
      "Only positive reinforcement affected behavior in human participants.",
      "Money could not serve as a negative reinforcer because it is a conditioned stimulus.",
      "The two contingency types produced differential outcomes, supporting the proposition that they are functionally unique."
    ],
    correctIndex: 3,
    explanation: "Magoon and colleagues found differential outcomes under positive reinforcement and negative reinforcement, supporting the proposition that the two types of contingencies are functionally distinct."
  },
  {
    id: 14049,
    topic: "Identifying the Context of Negative Reinforcement",
    prompt: "Smith, Iwata, Goh, and Shore (1995) examined what made task demands aversive for individuals whose self-injury was escape-maintained. Which dimensions of tasks did they investigate?",
    options: [
      "Task color, font size, and room temperature.",
      "Task novelty, duration of the work session, and rate of demand presentation.",
      "Number of therapists present, session time of day, and task difficulty.",
      "Type of reinforcer used, session location, and proximity to peers."
    ],
    correctIndex: 1,
    explanation: "Smith et al. examined task novelty, duration of the work session, and rate of demand presentation as dimensions along which tasks might differ in their aversive properties for individuals with escape-maintained self-injury."
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

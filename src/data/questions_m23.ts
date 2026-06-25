import type { Question } from "../types";

/**
 * BCBA practice questions for Cooper et al., Chapter 20: Engineering Emergent Learning with Nonequivalence Relations.
 * Grounded in the chapter text. Option order is shuffled at runtime, so
 * correctIndex placement here is arbitrary.
 */
export const QUESTIONS_M23: Question[] = [
  {
    id: 22001,
    topic: "What Are Nonequivalence Relations? Why Do They Matter?",
    prompt: "Stimulus relations are described as arbitrary relations primarily because they are determined by:",
    options: [
      "The physical similarity between the stimuli involved",
      "Innate biological dispositions shared by all humans",
      "Social-verbal reinforcement contingencies that teach people to relate stimuli in certain ways",
      "Universal laws of nature that dictate how objects are categorized"
    ],
    correctIndex: 2,
    explanation: "Arbitrary relations are those in which stimuli go together not because they are physically identical or because a law of the universe demands this, but because social-verbal reinforcement contingencies teach people to relate them in a certain way.",
  },
  {
    id: 22002,
    topic: "What Are Nonequivalence Relations? Why Do They Matter?",
    prompt: "A behavior analyst proposes that 'bits of knowledge' form a network of behavior rather than representations stored inside the brain. This view contrasts with which psychological concept?",
    options: [
      "Semantic networks from cognitive psychology",
      "Operant conditioning",
      "Three-term contingency",
      "Motivating operations"
    ],
    correctIndex: 0,
    explanation: "Cognitive psychologists assume that bits of knowledge and relationships among them are stored inside the brain. Behavior analysts say instead that stimuli are related if the way we respond to them is intertwined, forming a network of behavior rather than of knowledge. This is a departure from the semantic network concept.",
  },
  {
    id: 22003,
    topic: "What Are Nonequivalence Relations? Why Do They Matter?",
    prompt: "A neuroanatomy lesson teaches students that the frontal lobe is located in a particular area of the brain and that damage to it causes impulsiveness. This class was labeled an equivalence class but is more accurately a nonequivalence class because it involves:",
    options: [
      "Symmetry and reflexivity relations",
      "Transfer of function across all stimuli equally",
      "Spatial and causal relations rather than 'same as' relations",
      "Mutual entailment only"
    ],
    correctIndex: 2,
    explanation: "The frontal lobe lesson involved a spatial relation (where the brain structure is located) and a causal relation (what symptom is produced by damage), not 'same as' relations. Thus it was more accurately a nonequivalence class.",
  },
  {
    id: 22004,
    topic: "The Vocabulary of Nonequivalence Relations",
    prompt: "After a learner is taught that 'overdue' means the same as 'tardy,' the learner can respond to 'tardy' by selecting 'overdue' without being directly taught this direction. This emergent relation is an example of:",
    options: [
      "Combinatorial entailment",
      "Transformation of function",
      "Unilateral property induction",
      "Mutual entailment"
    ],
    correctIndex: 3,
    explanation: "Mutual entailment refers to any derived bidirectional relation in which one direction has been directly learned. Symmetry (the equivalence term) is a special case of mutual entailment. After learning the A-to-B direction, the B-to-A direction emerges without direct teaching.",
  },
  {
    id: 22005,
    topic: "The Vocabulary of Nonequivalence Relations",
    prompt: "A learner is taught that 'early' is opposite to 'tardy,' and that 'tardy' is opposite to 'late.' The derived relation that 'early' and 'late' are 'the same' emerges without direct teaching. This is best described as:",
    options: [
      "Combinatorial entailment",
      "Mutual entailment",
      "Transfer of function",
      "Contextual control"
    ],
    correctIndex: 0,
    explanation: "Combinatorial entailment is the derived relation involving two stimuli that both participate in mutual entailment with some common third stimulus. Transitivity is a special case of combinatorial entailment. Here 'early' and 'late' are both linked to 'tardy' via opposite relations, yielding the derived 'same' relation between 'early' and 'late.'",
  },
  {
    id: 22006,
    topic: "The Vocabulary of Nonequivalence Relations",
    prompt: "In stimulus equivalence, 'transfer of function' describes how a new behavioral function acquired by one stimulus spreads identically to all others in the class. In nonequivalence classes, the broader term for this phenomenon is:",
    options: [
      "Mutual entailment",
      "Combinatorial entailment",
      "Transformation of function",
      "Generalized relational responding"
    ],
    correctIndex: 2,
    explanation: "Transformation of function is the broader term that subsumes transfer of function. In nonequivalence classes, the function a stimulus acquires depends on the type of relation that unites it with others, so stimuli may acquire different functions rather than identical ones.",
  },
  {
    id: 22007,
    topic: "The Vocabulary of Nonequivalence Relations",
    prompt: "A student learns that 'tardy' is the opposite of 'early.' When 'tardy' becomes fear-eliciting after a reprimand, 'early' acquires a pleasant rather than fearful function. This outcome illustrates transformation of function because:",
    options: [
      "The same function propagates equally to all stimuli in the class",
      "Fear generalizes across physically similar stimuli",
      "Contextual stimuli override the original fear function",
      "The function acquired by 'early' is consistent with its 'opposite' relation to 'tardy'"
    ],
    correctIndex: 3,
    explanation: "In a nonequivalence class defined by 'opposite' relations, transformation of function is consistent with the type of relation that unites the stimuli. If 'tardy' becomes fear-eliciting, 'early' (its opposite) should acquire a pleasant function, not the same fear function.",
  },
  {
    id: 22009,
    topic: "Some Types of Nonequivalence Relations",
    prompt: "Which of the following best describes the difference between opposition and comparison as subtypes of distinction relations?",
    options: [
      "Opposition involves learned behavior while comparison involves innate responding",
      "There is no meaningful difference; the terms are used interchangeably in the literature",
      "Opposition is based on physical properties while comparison is based on arbitrary relations",
      "Comparison is a dimensional distinction relation that does not necessarily involve 'opposites,' whereas opposition typically involves stimuli at extremes or mutually exclusive categories"
    ],
    correctIndex: 3,
    explanation: "Comparison can be thought of as a dimensional distinction relation that does not require the stimuli to be extremes or 'opposites.' Opposition typically involves stimuli at the endpoints of a dimension or mutually exclusive instances with no intermediate values.",
  },
  {
    id: 22012,
    topic: "Some Types of Nonequivalence Relations",
    prompt: "Shawn, a student with school avoidance, develops fear of his school bus, school sign, and school building, even though none of these stimuli were ever paired directly with his frightening teacher. The most likely explanation is:",
    options: [
      "Stimulus generalization based on shared physical features",
      "Higher-order classical conditioning",
      "Transformation of function in a temporal hierarchy stimulus class",
      "Operant avoidance conditioned through direct punishment"
    ],
    correctIndex: 2,
    explanation: "The stimuli Shawn feared are physically dissimilar, ruling out stimulus generalization. Higher-order conditioning is noted to be unreliable. Instead, the stimuli were related in a temporal hierarchy, and through transformation of function within this nonequivalence class they all acquired fear-eliciting properties.",
  },
  {
    id: 22013,
    topic: "Some Types of Nonequivalence Relations",
    prompt: "If-then relations are most closely associated with which type of nonequivalence relation?",
    options: [
      "Hierarchical relations",
      "Causal relations",
      "Distinction relations",
      "Deictic relations"
    ],
    correctIndex: 1,
    explanation: "Causal relations are if-then relations. Making accurate causal attributions is an important part of everyday functioning, and faulty causal attributions are implicated in a variety of clinical problems.",
  },
  {
    id: 22014,
    topic: "Some Types of Nonequivalence Relations",
    prompt: "According to the nonequivalence approach to creating new reinforcers, a stimulus that is related to an existing punisher through an 'opposite' relation should become a:",
    options: [
      "Reinforcer",
      "Neutral stimulus",
      "Conditioned punisher",
      "Discriminative stimulus"
    ],
    correctIndex: 0,
    explanation: "In the Whelan and Barnes-Holmes (2004) example, stimuli related to a punisher through an 'opposite' relation became reinforcers through transformation of function. The cat and doll were opposites of the blue triangle (which was 'same as' the punisher) and therefore became reinforcers.",
  },
  {
    id: 22015,
    topic: "Some Types of Nonequivalence Relations",
    prompt: "An incoherent stimulus class is one in which:",
    options: [
      "Baseline relations are learned too quickly for derived relations to emerge",
      "Contextual stimuli are too explicit and interfere with generalized relational responding",
      "The directly taught baseline relations do not support firm predictions about which derived relations should emerge",
      "Equivalence and nonequivalence relations are mixed within the same class"
    ],
    correctIndex: 2,
    explanation: "An incoherent stimulus class is one where the directly learned baseline relations do not predict the exact nature of derived relations. Knowing only that 'bees are different from mammals' and 'mammals are different from birds' does not specify how bees and birds differ or whether they are even the same.",
  },
  {
    id: 22049,
    topic: "Some Types of Nonequivalence Relations",
    prompt: "A behavior analyst planning a derived nonequivalence relations intervention is told that the most laborious part of such programming is:",
    options: [
      "Selecting the correct reinforcer for each baseline relation trial",
      "Writing session notes that meet accreditation standards",
      "The underlying conceptual analysis of precisely what relations need to be directly taught and what derived relations should logically emerge",
      "Choosing between match-to-sample and verbal instruction formats"
    ],
    correctIndex: 2,
    explanation: "The underlying conceptual analysis can be the most laborious part of behavior programming involving derived stimulus relations. It is critical to precisely define what needs to be directly taught and what untaught relations are logically expected to emerge, as interventions are pointless if one cannot specify the expected derived relations.",
  },
  {
    id: 22018,
    topic: "Theoretical Foundations",
    prompt: "Contextual stimuli in derived stimulus relations serve to:",
    options: [
      "Eliminate the need for baseline relation training",
      "Replace reinforcement contingencies with verbal instructions alone",
      "Signal the specific way in which stimuli are to be related in a given situation",
      "Ensure that all members of a class acquire the same behavioral function"
    ],
    correctIndex: 2,
    explanation: "Contextual stimuli signal the specific way in which stimuli are to be related. Because arbitrary relations are defined by social/verbal customs and reinforcement contingencies, contextual stimuli communicate which relation type is appropriate in any given situation.",
  },
  {
    id: 22020,
    topic: "Theoretical Foundations",
    prompt: "Implicit contextual cues (such as the overall experimental setting) pose a problem for derived stimulus relations interventions primarily because:",
    options: [
      "They may limit generalization of relational behavior to other settings",
      "They make baseline relations too easy to learn",
      "They prevent the formation of equivalence classes",
      "They cause transformation of function to proceed too quickly"
    ],
    correctIndex: 0,
    explanation: "When contextual stimuli are implicit (e.g., the entire experimental room serves as a compound cue for 'same' responding), the learned relational behavior may not generalize to other settings, limiting the practical value of the intervention.",
  },
  {
    id: 22021,
    topic: "Theoretical Foundations",
    prompt: "Relational frame theory (RFT) proposes that derived stimulus relations are inherently which type of behavior?",
    options: [
      "Reflexive behavior",
      "Respondent behavior",
      "Non-arbitrary operant behavior",
      "Verbal behavior"
    ],
    correctIndex: 3,
    explanation: "RFT assumes that derived stimulus relations are inherently verbal relations. The behavior of relating stimuli is verbal behavior. This is supported by circumstantial evidence such as the rarity of derived relations in nonhumans and the co-emergence of relational abilities with verbal behavior in children.",
  },
  {
    id: 22022,
    topic: "Theoretical Foundations",
    prompt: "Arbitrarily applicable relational responding (AARR) is best defined as:",
    options: [
      "The tendency to relate stimuli based on their physical characteristics",
      "Forming new stimulus classes with little to no new reinforced practice, enabled by accumulated multiple-exemplar experience",
      "A baseline repertoire that must be directly taught before derived relations can emerge",
      "The process by which contextual stimuli become conditioned aversive stimuli"
    ],
    correctIndex: 1,
    explanation: "AARR refers to forming new stimulus classes with little to no new reinforced practice. It results from accumulated multiple-exemplar experience with various types of stimulus relations, such that a generalized relational repertoire applies to novel stimuli.",
  },
  {
    id: 22024,
    topic: "Theoretical Foundations",
    prompt: "Multiple-exemplar training is used in RFT to establish generalized relational operants. The underlying mechanism is most analogous to:",
    options: [
      "Chaining",
      "Shaping through successive approximations",
      "Extinction of stimulus generalization gradients",
      "Generalized imitation established through reinforced practice with many actions"
    ],
    correctIndex: 3,
    explanation: "RFT's account of generalized relational operants is analogous to generalized imitation. Just as 'Do this' becomes a generalized cue after enough exemplars of imitation are trained, repeated reinforcement of stimulus class formations of one type eventually makes deriving that relation type a higher-order operant.",
  },
  {
    id: 22048,
    topic: "Theoretical Foundations",
    prompt: "When RFT claims that deriving stimulus classes can become a 'generalized relational repertoire,' it is disagreeing with Sidman's view that derived relations are:",
    options: [
      "An automatic outcome of specific reinforcement contingencies involving particular stimuli",
      "A form of verbal behavior",
      "Dependent on multiple-exemplar training with all relation types simultaneously",
      "Unrelated to contextual stimuli"
    ],
    correctIndex: 0,
    explanation: "RFT disputes Sidman's position that derived relations are an automatic outcome of specific reinforcement contingencies. RFT instead proposes that with the right learning history, deriving stimulus classes becomes a generalized repertoire (AARR) that applies to any number of specific stimuli without new reinforced experience.",
  },
  {
    id: 22028,
    topic: "Nonequivalence Relations and Big-Picture Psychological Constructs",
    prompt: "Hierarchical relations involve stimuli in an asymmetrical relationship. Which statement correctly describes this asymmetry?",
    options: [
      "A higher-order class 'includes' lower-order members, while lower-order members are 'members of' the higher-order class, but not the reverse",
      "A lower-order stimulus automatically becomes equivalent to the higher-order class label",
      "The 'includes' relation and the 'member of' relation are completely symmetrical and interchangeable",
      "Both higher- and lower-order stimuli control identical behavioral functions through transfer of function"
    ],
    correctIndex: 0,
    explanation: "Hierarchical relations involve asymmetrical stimulus control. 'Animal includes dog' but 'dog does not include animal.' In the 'member of' direction, dog is a member of animal, but animal is not a member of dog. This asymmetry is a defining feature of hierarchical categorization.",
  },
  {
    id: 22029,
    topic: "Nonequivalence Relations and Big-Picture Psychological Constructs",
    prompt: "Asymmetrical class containment, transitive class containment, and unilateral property induction are three characteristics of:",
    options: [
      "Deictic relations established in the Barnes-Holmes Protocol",
      "Incoherent stimulus classes where derived relations are unspecified",
      "Temporal sequences that lead to transformation of function",
      "Hierarchical categories as described by researchers outside behavior analysis"
    ],
    correctIndex: 3,
    explanation: "These three characteristics were identified by Murphy (2002) as properties that reliably apply to categorization in everyday experience. Behavior analysts have sought to show that derived stimulus relations protocols can reproduce all three, lending credibility to a behavioral account of categorization.",
  },
  {
    id: 22030,
    topic: "Nonequivalence Relations and Big-Picture Psychological Constructs",
    prompt: "A child is taught that 'poodle is a type of dog' and 'dog is a type of animal.' Without being directly taught, the child concludes that poodle is a type of animal. This outcome is an example of:",
    options: [
      "Unilateral property induction",
      "Asymmetrical class containment",
      "Transitive class containment",
      "Mutual entailment"
    ],
    correctIndex: 2,
    explanation: "Transitive class containment refers to classifying a stimulus as a member of a higher-order class on the basis that it is a member of a subclass that is itself a member of that higher-order class. Here poodle is classified as 'animal' because it is a type of dog, and dog is a type of animal.",
  },
  {
    id: 22032,
    topic: "Nonequivalence Relations and Big-Picture Psychological Constructs",
    prompt: "Deictic relations have three dimensions. Which of the following correctly identifies all three?",
    options: [
      "SELF-OTHER, PRESENT-PAST, and SIMILAR-DIFFERENT",
      "I-YOU, MORE-LESS, and BEFORE-AFTER",
      "I-YOU, HERE-THERE, and NOW-THEN",
      "HERE-THERE, CAUSE-EFFECT, and INCLUDE-MEMBER"
    ],
    correctIndex: 2,
    explanation: "Deictic relations have three dimensions: the I-YOU dimension (distinguishing self from other people), the HERE-THERE dimension (geographic location of self vs. others), and the NOW-THEN dimension (present vs. other times).",
  },
  {
    id: 22034,
    topic: "Nonequivalence Relations and Big-Picture Psychological Constructs",
    prompt: "Perspective shifting, as described in the Barnes-Holmes Protocol, involves which levels of deictic relations?",
    options: [
      "Simple deictic relations only",
      "Reversed and double-reversed deictic relations",
      "Only the I-YOU dimension",
      "Nonarbitrary containment relations"
    ],
    correctIndex: 1,
    explanation: "Simple deictic relations (e.g., 'Where are you?') are prerequisites to perspective shifting but are not perspective shifting per se. Perspective shifting involves reversed deictic relations (reversal along one dimension) and double-reversed deictic relations (reversal along multiple dimensions).",
  },
  {
    id: 22036,
    topic: "Nonequivalence Relations and Big-Picture Psychological Constructs",
    prompt: "RFT theorists have equated 'general intelligence' with arbitrarily applicable relational responding (AARR) partly because:",
    options: [
      "Standardized IQ tests directly measure the number of relational frames an individual possesses",
      "AARR eliminates the effect of prior knowledge on new learning",
      "Rich histories of relational learning allow new things to be learned with unusual speed and flexibility",
      "Intelligence tests can only be passed by those who have received explicit RFT training"
    ],
    correctIndex: 2,
    explanation: "RFT theorists argue that broad relational learning histories create AARR, allowing people to learn new things with unusual speed and flexibility. This is one basis for equating AARR with general intelligence, supported by positive correlations between relational task performance and standardized intelligence scores.",
  },
  {
    id: 22038,
    topic: "Derived Stimulus Relations and General Well-Being",
    prompt: "In ACT, 'well-being behaviors' are best defined as:",
    options: [
      "Behaviors that are free from any private event influence",
      "Behaviors on which a person's most valued reinforcers are contingent",
      "Publicly observable behaviors shaped through differential reinforcement",
      "Behaviors that occur only in the absence of aversive stimulation"
    ],
    correctIndex: 1,
    explanation: "Well-being behaviors are those on which a person's most valued reinforcers are contingent. Many challenges to psychological well-being involve the constraining of these behaviors by private events such as emotional responses and self-generated rules.",
  },
  {
    id: 22039,
    topic: "Derived Stimulus Relations and General Well-Being",
    prompt: "In ACT, the persistent interference of private events with well-being behaviors, reducing one's capacity to be under real-time stimulus control, is called:",
    options: [
      "The inability to form new equivalence classes after satiation",
      "The failure of contextual stimuli to control relational responding",
      "Behavioral inflexibility",
      "A rigid rule-following repertoire that is insensitive to all feedback"
    ],
    correctIndex: 2,
    explanation: "Behavioral inflexibility (ACT's 'psychological inflexibility') is the persistent interference of private events with well-being behaviors. Its opposite, flexibility, is the capacity to be 'in the moment' such that behavior is under real-time stimulus control of the current situation.",
  },
  {
    id: 22041,
    topic: "Derived Stimulus Relations and General Well-Being",
    prompt: "Mindfulness, as conceptualized within ACT, is defined as:",
    options: [
      "A state of deep relaxation achieved through medication",
      "A cognitive restructuring technique that replaces negative thoughts with positive ones",
      "Bringing complete attention to the present experience on a moment-to-moment basis, with observation without judgment",
      "A type of extinction procedure applied to private events"
    ],
    correctIndex: 2,
    explanation: "Mindfulness has been defined as 'bringing one's complete attention to the present experience on a moment-to-moment basis' and as observation without judgment. ACT mindfulness exercises aim to disrupt the control of private events over other behavior.",
  },
  {
    id: 22044,
    topic: "Derived Stimulus Relations and General Well-Being",
    prompt: "Rule-governed behavior is described as often insensitive to change by local contingencies. In the context of harmful self-rules, one key reason for this insensitivity is that:",
    options: [
      "Self-rules are always maintained by positive reinforcement from other people",
      "Local contingencies cannot override rule-governed behavior without direct punishment",
      "Self-rules are stored as cognitive representations that behavior analysis cannot access",
      "Behavior controlled by self-rules generates its own immediate reinforcers through negative reinforcement"
    ],
    correctIndex: 3,
    explanation: "Unpleasant private events create motivating operations for both public behavior and the self-rules that control it. Behavior that terminates these private events is automatically negatively reinforced. For example, school avoidance prevents school-related fear, which is why the rule-governed behavior persists despite long-term costs.",
  },
  {
    id: 22047,
    topic: "Derived Stimulus Relations and General Well-Being",
    prompt: "ACT differs most fundamentally from conventional ABA interventions in that ACT typically:",
    options: [
      "Uses functional assessments to identify maintaining reinforcers for each target behavior",
      "Applies stimulus equivalence protocols to establish new repertoires through stimulus pairing",
      "Is primarily nonverbal in format, using match-to-sample procedures throughout",
      "Relies on verbally guided exercises to alter the influence of private events rather than directly targeting discrete public behaviors with prompts and consequences"
    ],
    correctIndex: 3,
    explanation: "ACT uses mainly verbally guided exercises to promote well-being. Unlike conventional ABA, ACT does not typically target discrete problem behaviors, incorporate direct prompts, or systematically manipulate externally arranged consequences. Instead it aims to alter the influence of private events on public behavior.",
  },
];

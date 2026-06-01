import type { Question } from "../types";

/**
 * BCBA practice questions grounded in the SNABA Live Collective Notes
 * (Collectives 1–21). Concepts, examples, and explanations come from the notes.
 * Option order is shuffled at runtime, so correctIndex placement here is arbitrary.
 */
export const QUESTIONS_M1: Question[] = [
  // ───────────────────────── Collective 1: Science of Behavior ─────────────────────────
  {
    id: 1,
    topic: "Science of Behavior",
    prompt: "According to the notes, what is the goal of science?",
    options: [
      "To achieve a thorough understanding of the phenomena under study",
      "To prove a hypothesis correct beyond any doubt",
      "To collect as much data as possible",
      "To control human behavior in every setting",
    ],
    correctIndex: 0,
    explanation:
      "Goal of science: to achieve a thorough understanding of the phenomena under study. In ABA we focus on socially significant behaviors — ABA is a science.",
  },
  {
    id: 2,
    topic: "Levels of Understanding",
    prompt:
      "Which level of scientific understanding is the 'most valuable result of science,' involving causation and the manipulation of variables?",
    options: ["Control", "Prediction", "Description", "Replication"],
    correctIndex: 0,
    explanation:
      "Control is the most valuable result of science — the ability to predict with a certain degree of confidence (#causation, #functionalrelation, #manipulatevariables).",
  },
  {
    id: 3,
    topic: "Levels of Understanding",
    prompt:
      "Repeated observations reveal that two events consistently covary, but no variables are manipulated. Which level of understanding is this?",
    options: ["Prediction", "Control", "Description", "Causation"],
    correctIndex: 0,
    explanation:
      "Prediction = correlation: two events consistently covary, but no variables are manipulated, so it is NOT causation (e.g., the 'freshman 15' — going to college correlates with weight gain but does not cause it).",
  },
  {
    id: 4,
    topic: "Levels of Understanding",
    prompt:
      "'Taylor bit 33 times, cried 11 times, and eloped 13 times' — objective counts with no opinion. This is an example of which level of understanding?",
    options: ["Description", "Prediction", "Control", "Replication"],
    correctIndex: 0,
    explanation:
      "Description is the collection of facts that can be quantified and classified — describing what you see objectively (#whatyousee, #noopinion). It is the surface/topography level.",
  },
  {
    id: 5,
    topic: "Levels of Understanding",
    prompt: "Which is the correct ordering of the three levels of understanding, from lowest to most valuable?",
    options: [
      "Description → Prediction → Control",
      "Prediction → Description → Control",
      "Control → Prediction → Description",
      "Description → Control → Prediction",
    ],
    correctIndex: 0,
    explanation:
      "On the trophy/podium: Description (lowest) → Prediction (middle) → Control (top, most valuable result of science).",
  },
  {
    id: 6,
    topic: "Levels of Understanding",
    prompt:
      "A behavior analyst removes a girl's attention to her ex-boyfriend's texts and observes the texting stop — demonstrating a functional relation. Which level is this?",
    options: ["Control", "Description", "Prediction", "Empiricism"],
    correctIndex: 0,
    explanation:
      "Control involves manipulating variables to find the functional relation (#causation). Removing attention and seeing the result demonstrates control.",
  },

  // ───────────────────────── Attitudes of Science (PSDEERPP) ─────────────────────────
  {
    id: 7,
    topic: "Attitudes of Science",
    prompt: "The mnemonic 'PSDEERPP' (the 'sassy deer') lists the attitudes of science. What does the first P stand for?",
    options: ["Pragmatism", "Parsimony", "Prediction", "Philosophic Doubt"],
    correctIndex: 0,
    explanation:
      "PSDEERPP = Pragmatism, Selectionism, Determinism, Empiricism, Experimentation, Replication, Parsimony, Philosophic Doubt. The first P is Pragmatism.",
  },
  {
    id: 8,
    topic: "Attitudes of Science",
    prompt:
      "A student has a stomach ache. Rather than rushing to an MRI, you first try Pepto or a bathroom break. Which attitude of science does this reflect?",
    options: ["Pragmatism", "Determinism", "Replication", "Empiricism"],
    correctIndex: 0,
    explanation:
      "Pragmatism = the most practical approach that promotes effective action. You don't need a complicated intervention when a simple practical one works.",
  },
  {
    id: 9,
    topic: "Attitudes of Science",
    prompt: "'There is a reason!' — every behavior has a cause-and-effect relationship and is lawful. Which attitude is this?",
    options: ["Determinism", "Selectionism", "Empiricism", "Parsimony"],
    correctIndex: 0,
    explanation:
      "Determinism assumes the universe is lawful and orderly — there is a reason (#causeandeffect, #lawfulness).",
  },
  {
    id: 10,
    topic: "Attitudes of Science",
    prompt: "'Facts only, no opinions — you've got to see it.' Which attitude of science emphasizes objective observation?",
    options: ["Empiricism", "Pragmatism", "Determinism", "Replication"],
    correctIndex: 0,
    explanation:
      "Empiricism = objective observation; facts only, no opinions (#facts, #observation, #gottoseeit). It is like the description level of science.",
  },
  {
    id: 11,
    topic: "Attitudes of Science",
    prompt:
      "When results are proven over and over, the results are valid and we believe them. Which attitude of science is this?",
    options: ["Replication", "Experimentation", "Selectionism", "Philosophic Doubt"],
    correctIndex: 0,
    explanation:
      "Replication: results proven over and over are valid and believable (#validity, #believability, #overandover).",
  },
  {
    id: 12,
    topic: "Attitudes of Science",
    prompt:
      "Don't claim Feyre's stomach ache is from fairy-wine her mother drank during pregnancy; the simplest explanation is she ate stale cheese. Which attitude is this?",
    options: ["Parsimony", "Pragmatism", "Empiricism", "Determinism"],
    correctIndex: 0,
    explanation:
      "Parsimony = the simplest explanation (#simplesttheory). Rule out simple, logical explanations before considering more complex ones.",
  },
  {
    id: 13,
    topic: "Attitudes of Science",
    prompt: "The 'B.S. detector' — don't take everything as fact, question the truth. Which attitude of science is this?",
    options: ["Philosophic Doubt", "Parsimony", "Empiricism", "Replication"],
    correctIndex: 0,
    explanation:
      "Philosophic Doubt = healthy skepticism (#questionthetruth, #bullshitdetector). Continually question the truth of what is regarded as fact.",
  },
  {
    id: 14,
    topic: "Attitudes of Science",
    prompt:
      "Selectionism, one of the attitudes of science, is best summarized by which idea?",
    options: [
      "Selection by consequences — anything that evolves is a result of consequences",
      "The simplest explanation is usually correct",
      "Only observable, public events count",
      "Results must be replicated to be believed",
    ],
    correctIndex: 0,
    explanation:
      "Selectionism = selection by consequences ('we select what works for me'); anything that evolves is a result of consequences.",
  },

  // ───────────────────────── 7 Dimensions of ABA (Get-a-Cab) ─────────────────────────
  {
    id: 15,
    topic: "7 Dimensions of ABA",
    prompt: "In what year was the paper defining the 7 dimensions of ABA published?",
    options: ["1968", "1938", "1978", "1953"],
    correctIndex: 0,
    explanation:
      "The 7 dimensions of ABA were published in 1968 (Baer, Wolf & Risley). The mnemonic is 'Get-a-Cab.'",
  },
  {
    id: 16,
    topic: "7 Dimensions of ABA",
    prompt:
      "An intervention targets a socially significant behavior meant to improve the client's daily life. Which dimension of ABA is this?",
    options: ["Applied", "Analytic", "Generality", "Behavioral"],
    correctIndex: 0,
    explanation:
      "Applied = socially significant behavior we want to target (#meaningful, #improve). 'Skills to have for a better life.'",
  },
  {
    id: 17,
    topic: "7 Dimensions of ABA",
    prompt:
      "A treatment is described as objective, clear, complete, and 'idiot-proof' so it can be replicated by anyone. Which dimension does this describe?",
    options: ["Technological", "Conceptually Systematic", "Effective", "Applied"],
    correctIndex: 0,
    explanation:
      "Technological = objective, clear, complete (#idiotproof, #canreplicate, #fidelity). A plan written in Ohio could be used in Florida.",
  },
  {
    id: 18,
    topic: "7 Dimensions of ABA",
    prompt:
      "Because a DRA intervention can be traced back to the basic principle of reinforcement, it satisfies which dimension of ABA?",
    options: ["Conceptually Systematic", "Technological", "Behavioral", "Generality"],
    correctIndex: 0,
    explanation:
      "Conceptually Systematic: all interventions tie back to the basic principles of behavior (reinforcement, punishment, extinction). DRA goes back to reinforcement.",
  },
  {
    id: 19,
    topic: "7 Dimensions of ABA",
    prompt:
      "A behavior maintained at home, with other people, and over time, after treatment ends, demonstrates which dimension?",
    options: ["Generality", "Effective", "Applied", "Analytic"],
    correctIndex: 0,
    explanation:
      "Generality = behavior lasts over time, across people, settings, and other behaviors, and continues in non-treatment settings.",
  },
  {
    id: 20,
    topic: "7 Dimensions of ABA",
    prompt:
      "Demonstrating control by manipulating variables to produce reliable change — turning behavior 'on and off' — reflects which dimension?",
    options: ["Analytic", "Technological", "Behavioral", "Effective"],
    correctIndex: 0,
    explanation:
      "Analytic = demonstrating a functional relation (#funxrelation, #control); manipulate to show reliable change, turning behavior on and off.",
  },
  {
    id: 21,
    topic: "7 Dimensions of ABA",
    prompt:
      "An intervention produces a notable, clinically significant change shown by the data. Which dimension is satisfied?",
    options: ["Effective", "Applied", "Generality", "Conceptually Systematic"],
    correctIndex: 0,
    explanation:
      "Effective asks 'does the intervention work?' — the data show a notable, clinically significant change in socially significant behaviors.",
  },
  {
    id: 22,
    topic: "7 Dimensions of ABA",
    prompt:
      "Which dimension requires the target to be a clear, measurable, observable behavior in need of improvement?",
    options: ["Behavioral", "Applied", "Analytic", "Technological"],
    correctIndex: 0,
    explanation:
      "Behavioral = clear, measurable, complete, objective, observable. Steps: choose a behavior in need of improvement, and it must be measurable.",
  },

  // ───────────────────────── 4 Branches of Behavior Analysis ─────────────────────────
  {
    id: 23,
    topic: "Branches of Behavior Analysis",
    prompt: "Which branch of behavior analysis is the philosophy of the science, associated with Skinner?",
    options: [
      "Radical Behaviorism",
      "Experimental Analysis of Behavior (EAB)",
      "Applied Behavior Analysis (ABA)",
      "Practice-Guided Behavior Analysis",
    ],
    correctIndex: 0,
    explanation:
      "Radical Behaviorism is the philosophy/theory of the science (#conceptualanalysis), tied to Skinner.",
  },
  {
    id: 24,
    topic: "Branches of Behavior Analysis",
    prompt:
      "Basic laboratory research using procedures like the Skinner box to discover principles of behavior belongs to which branch?",
    options: [
      "Experimental Analysis of Behavior (EAB)",
      "Radical Behaviorism",
      "Applied Behavior Analysis",
      "Practice-Guided Behavior Analysis",
    ],
    correctIndex: 0,
    explanation:
      "EAB is basic research, usually in the lab (#skinnerbox, #discover, #contrived experiments).",
  },
  {
    id: 25,
    topic: "Branches of Behavior Analysis",
    prompt: "The branch described in the notes as 'This is us!' — BCBAs applying the science to socially significant behavior — is:",
    options: [
      "Applied Behavior Analysis (ABA)",
      "Radical Behaviorism",
      "Experimental Analysis of Behavior",
      "Practice-Guided Behavior Analysis",
    ],
    correctIndex: 0,
    explanation:
      "ABA is 'us' — BCBAs using the 7 dimensions, experiments, and functional relations on socially significant behavior.",
  },
  {
    id: 26,
    topic: "Branches of Behavior Analysis",
    prompt:
      "Sports coaches, caregivers, teachers, and OBM consultants who are NOT BCBAs but apply behavioral tactics fall under which branch?",
    options: [
      "Practice-Guided Behavior Analysis",
      "Applied Behavior Analysis",
      "Radical Behaviorism",
      "Experimental Analysis of Behavior",
    ],
    correctIndex: 0,
    explanation:
      "Practice-Guided Behavior Analysis involves people who are not BCBAs (caregivers, teachers, coaches, RBTs, OBM) using behavioral tactics.",
  },

  // ───────────────────────── Respondent vs Operant Behavior ─────────────────────────
  {
    id: 27,
    topic: "Respondent vs Operant",
    prompt: "Respondent behavior is best characterized as:",
    options: [
      "S–R, two-term contingency, elicited, involuntary, and unlearned (phylogenic)",
      "S–R–S, three-term contingency, emitted, and voluntary",
      "Behavior selected by its consequences over a lifetime",
      "Behavior controlled by a verbal rule",
    ],
    correctIndex: 0,
    explanation:
      "Respondent behavior (Watson): S–R, two-term contingency, elicited, involuntary (#hardwired), unlearned, phylogenic (#bornwithit). Example: bright light → blink.",
  },
  {
    id: 28,
    topic: "Respondent vs Operant",
    prompt: "Operant behavior is best characterized as:",
    options: [
      "S–R–S (A-B-C), three-term contingency, emitted/evoked, voluntary, and learned (ontogenic)",
      "S–R, two-term, elicited, and reflexive",
      "Behavior that requires no consequence",
      "Behavior present at birth in all members of a species",
    ],
    correctIndex: 0,
    explanation:
      "Operant behavior (Skinner): S–R–S (A-B-C), three-term contingency, evoke or emit, voluntary, learned, ontogenic (over a lifetime). It is the primary unit of analysis.",
  },
  {
    id: 29,
    topic: "Respondent vs Operant",
    prompt: "A puff of air makes Tay blink. This is an example of:",
    options: [
      "A reflex (respondent S–R behavior)",
      "An operant three-term contingency",
      "Rule-governed behavior",
      "Automatic reinforcement",
    ],
    correctIndex: 0,
    explanation:
      "Puff of air → blink is a reflex: a stimulus elicits a response (S–R). Respondent behavior is involuntary and unlearned.",
  },
  {
    id: 30,
    topic: "Respondent vs Operant",
    prompt:
      "An eliciting stimulus is presented repeatedly over a short period and the strength of the respondent behavior diminishes (e.g., the first balloon pop makes your heart race, but after many pops your reaction fades). This is:",
    options: ["Habituation", "Adaptation", "Extinction", "Satiation"],
    correctIndex: 0,
    explanation:
      "Habituation: when an eliciting stimulus is presented repeatedly over a short time, the strength of the respondent behavior diminishes.",
  },
  {
    id: 31,
    topic: "Respondent vs Operant",
    prompt: "Which theorist is associated with respondent behavior, looking only at public (not private) events?",
    options: ["Watson", "Skinner", "Pavlov", "Baer"],
    correctIndex: 0,
    explanation:
      "Watson is associated with respondent behavior and methodological behaviorism — only public, observable events.",
  },
  {
    id: 32,
    topic: "Respondent vs Operant",
    prompt:
      "'Hot guy → bend and snap → guy asks for your number (A-B-C).' This sequence illustrates:",
    options: [
      "An operant three-term contingency",
      "A respondent two-term contingency",
      "A reflex",
      "Habituation",
    ],
    correctIndex: 0,
    explanation:
      "Operant behavior follows the three-term contingency (A-B-C / S-R-S): antecedent, behavior, consequence — voluntary and learned.",
  },
  {
    id: 33,
    topic: "Respondent vs Operant",
    prompt:
      "A reduction in responding evoked by an antecedent stimulus over repeated or prolonged presentations defines:",
    options: ["Adaptation", "Habituation", "Extinction", "Recovery"],
    correctIndex: 0,
    explanation:
      "Adaptation = reductions in responding evoked by an antecedent stimulus over repeated or prolonged presentations.",
  },

  // ───────────────────────── Behaviorism & Mentalism ─────────────────────────
  {
    id: 34,
    topic: "Behaviorism",
    prompt: "What distinguishes methodological behaviorism (Watson) from radical behaviorism (Skinner)?",
    options: [
      "Methodological acknowledges private events but does not consider them; radical considers private events and their effects",
      "Radical behaviorism denies that private events exist",
      "Methodological behaviorism was developed by Skinner",
      "They are identical in how they treat private events",
    ],
    correctIndex: 0,
    explanation:
      "Methodological behaviorism (Watson) acknowledges private events exist but does NOT consider them. Radical behaviorism (Skinner → BCBAs) considers private events and their effects.",
  },
  {
    id: 35,
    topic: "Behaviorism",
    prompt:
      "Which of the following are examples of private events considered by radical behaviorism?",
    options: [
      "Self-instruction, thinking, self-monologue, and self-management",
      "Salivation, blinking, and the startle reflex",
      "Pressing a lever and opening an umbrella",
      "Praise, candy, and tokens",
    ],
    correctIndex: 0,
    explanation:
      "Radical behaviorism considers private events such as self-instruction, thinking, self-monologue (in-head), and self-management.",
  },
  {
    id: 36,
    topic: "Mentalism",
    prompt: "Mentalism is best defined as:",
    options: [
      "An approach that assumes a mental or inner dimension exists and is said to cause behavior",
      "The study of only observable, measurable behavior",
      "Explaining behavior through its environmental consequences",
      "A method of direct observation",
    ],
    correctIndex: 0,
    explanation:
      "Mentalism explains behavior by assuming a mental/inner dimension exists that causes the behavior.",
  },
  {
    id: 37,
    topic: "Mentalism",
    prompt:
      "'He stims because he has ASD, and we know he has ASD because he stims.' This faulty explanation is:",
    options: [
      "Circular reasoning",
      "A functional relation",
      "An establishing operation",
      "Empiricism",
    ],
    correctIndex: 0,
    explanation:
      "Circular reasoning: the cause and effect of behavior are explained using the same information — going around in circles.",
  },
  {
    id: 38,
    topic: "Mentalism",
    prompt:
      "Explaining why a rat presses a lever by saying 'he knows to do it' is an example of:",
    options: [
      "An explanatory fiction",
      "A hypothetical construct that is measurable",
      "A functional analysis",
      "Stimulus control",
    ],
    correctIndex: 0,
    explanation:
      "Explanatory fictions explain behavior with fictitious variables. 'He knows to do it' explains nothing observable.",
  },
  {
    id: 39,
    topic: "Mentalism",
    prompt:
      "Terms like free will, the id, and the superego, used to describe behavior, are examples of:",
    options: [
      "Hypothetical constructs",
      "Functional relations",
      "Discriminative stimuli",
      "Unconditioned reinforcers",
    ],
    correctIndex: 0,
    explanation:
      "Hypothetical constructs are theoretical terms (free will, id, superego) used to describe behavior in reference to unobservable constructs.",
  },
  {
    id: 40,
    topic: "Behaviorism",
    prompt:
      "In the reference chart, Skinner's radical behaviorism is paired with which type of conditioning and learning model?",
    options: [
      "Operant conditioning (Stimulus–Response–Reinforcement)",
      "Respondent learning (Stimulus–Response only)",
      "Classical conditioning with no consequence",
      "Reflexive learning",
    ],
    correctIndex: 0,
    explanation:
      "Skinner / radical behaviorism = operant conditioning (S-R-Reinforcement), accepting feelings and introspection scientifically. Watson / methodological = respondent learning (S-R).",
  },

  // ───────────────────────── Respondent vs Operant Conditioning ─────────────────────────
  {
    id: 41,
    topic: "Respondent Conditioning",
    prompt:
      "In Pavlov's procedure, before conditioning the bone (food) that produces salivation without learning is the:",
    options: [
      "Unconditioned stimulus (UCS)",
      "Conditioned stimulus (CS)",
      "Neutral stimulus (NS)",
      "Conditioned response (CR)",
    ],
    correctIndex: 0,
    explanation:
      "The bone/food is the unconditioned stimulus (UCS), producing the unconditioned response (UCR), salivation, without any learning.",
  },
  {
    id: 42,
    topic: "Respondent Conditioning",
    prompt:
      "After conditioning, the bell alone now causes salivation. In this final stage, the bell is the ___ and salivation is the ___.",
    options: [
      "Conditioned stimulus (CS); conditioned response (CR)",
      "Neutral stimulus (NS); unconditioned response (UCR)",
      "Unconditioned stimulus (UCS); conditioned response (CR)",
      "Conditioned stimulus (CS); unconditioned response (UCR)",
    ],
    correctIndex: 0,
    explanation:
      "After S-S pairing, the bell becomes the conditioned stimulus (CS) that elicits the conditioned response (CR), salivation.",
  },
  {
    id: 43,
    topic: "Operant Conditioning",
    prompt:
      "Selection in the evolutionary history of a species ('survival of the fittest,' born with it) is which type of selection?",
    options: ["Phylogenic", "Ontogenic", "Cultural", "Conditioned"],
    correctIndex: 0,
    explanation:
      "Phylogenic selection occurs in the evolutionary history of a species (#darwin, #survivalofthefittest, #bornwithit).",
  },
  {
    id: 44,
    topic: "Operant Conditioning",
    prompt:
      "Operant selection by consequences that operates during the lifetime of an individual organism is:",
    options: ["Ontogenic selection", "Phylogenic selection", "Cultural selection", "Respondent conditioning"],
    correctIndex: 0,
    explanation:
      "Ontogenic selection = operant selection by consequences operating during the lifetime of the individual (#variationinbx).",
  },
  {
    id: 45,
    topic: "Operant Conditioning",
    prompt:
      "The transference of behaviors from one member to another within a group of individuals is which level of selection?",
    options: ["Cultural", "Phylogenic", "Ontogenic", "Respondent"],
    correctIndex: 0,
    explanation:
      "Cultural selection involves the transference of behaviors from one member to another within a group.",
  },
  {
    id: 46,
    topic: "Operant Conditioning",
    prompt: "In respondent (Pavlovian) conditioning, pairing occurs in the antecedent. In operant conditioning, pairing occurs in the:",
    options: ["Consequence", "Antecedent", "Motivating operation", "Discriminative stimulus"],
    correctIndex: 0,
    explanation:
      "Respondent conditioning is stimulus-stimulus pairing in the antecedent; for operant conditioning, pairing for the contingency occurs in the consequence.",
  },
  {
    id: 47,
    topic: "Extinction",
    prompt:
      "Ringing the bell repeatedly without ever following it with food, so the bell stops eliciting salivation, is an example of:",
    options: ["Respondent extinction (unpairing)", "Operant extinction", "Punishment", "Habituation"],
    correctIndex: 0,
    explanation:
      "Respondent extinction is unpairing: if you ring the bell and don't give the food repeatedly, the CS becomes unpaired. Operant extinction is withholding reinforcement.",
  },

  // ───────────────────────── 3 Principles & Reinforcement/Punishment basics ─────────────────────────
  {
    id: 48,
    topic: "3 Principles of ABA",
    prompt: "The 3 principles of ABA ('BIG REP') are reinforcement, punishment, and which third — defined as withholding previously delivered reinforcement?",
    options: ["Extinction", "Habituation", "Satiation", "Recovery"],
    correctIndex: 0,
    explanation:
      "The 3 principles: Reinforcement (increase future frequency), Extinction (withholding previous reinforcement), and Punishment (decrease future frequency).",
  },
  {
    id: 49,
    topic: "Reinforcement & Punishment",
    prompt: "Something is ADDED to INCREASE the future frequency of behavior (e.g., praise, candy, a high-five). This is:",
    options: [
      "Positive reinforcement (Type 1)",
      "Negative reinforcement (Type 2)",
      "Positive punishment (Type 1)",
      "Negative punishment (Type 2)",
    ],
    correctIndex: 0,
    explanation:
      "Positive reinforcement (Type 1): something is added to increase future frequency. Remember: Type 1 = Positive, Type 2 = Negative.",
  },
  {
    id: 50,
    topic: "Reinforcement & Punishment",
    prompt: "Something is ADDED to DECREASE the future frequency of behavior (e.g., spanking, a reprimand). This is:",
    options: [
      "Positive punishment (Type 1)",
      "Positive reinforcement (Type 1)",
      "Negative punishment (Type 2)",
      "Negative reinforcement (Type 2)",
    ],
    correctIndex: 0,
    explanation:
      "Positive punishment (Type 1): something is added to decrease future frequency (spanking, over-correction, reprimand 'No'/'Don't').",
  },
  {
    id: 51,
    topic: "Reinforcement & Punishment",
    prompt: "Something aversive is REMOVED to INCREASE the future frequency of behavior (e.g., taking Tylenol to get rid of pain). This is:",
    options: [
      "Negative reinforcement (Type 2)",
      "Positive reinforcement (Type 1)",
      "Negative punishment (Type 2)",
      "Positive punishment (Type 1)",
    ],
    correctIndex: 0,
    explanation:
      "Negative reinforcement (Type 2): an aversive state is removed to increase future frequency (#relief, #escape, #avoidance). Taking Tylenol removes pain.",
  },
  {
    id: 52,
    topic: "Reinforcement & Punishment",
    prompt: "Something the person likes is REMOVED to DECREASE behavior (e.g., a time-out, a speeding ticket, response cost). This is:",
    options: [
      "Negative punishment (Type 2)",
      "Positive punishment (Type 1)",
      "Negative reinforcement (Type 2)",
      "Positive reinforcement (Type 1)",
    ],
    correctIndex: 0,
    explanation:
      "Negative punishment (Type 2): something the person likes is removed to decrease future frequency (response cost, time-out, speeding ticket).",
  },
  {
    id: 53,
    topic: "Reinforcement & Punishment",
    prompt:
      "A child screams in the candy aisle and the parent buys candy to make the screaming stop. For the PARENT, buying candy is maintained by:",
    options: [
      "Negative reinforcement (the aversive screaming is removed)",
      "Positive reinforcement (candy is added)",
      "Positive punishment",
      "Respondent extinction",
    ],
    correctIndex: 0,
    explanation:
      "For the parent, the aversive screaming stops when they buy candy, so buying is negatively reinforced. (For the child, getting candy is positive reinforcement — function depends on whose behavior you analyze.)",
  },
  {
    id: 54,
    topic: "Reinforcement Types",
    prompt:
      "You give yourself reinforcement with no one delivering it to you (e.g., a self-stimulatory toy). This is:",
    options: [
      "Automatic positive reinforcement",
      "Socially mediated positive reinforcement",
      "Automatic negative reinforcement",
      "Socially mediated negative reinforcement",
    ],
    correctIndex: 0,
    explanation:
      "Automatic positive reinforcement: 'auto = self' — you give yourself the reinforcement; no one delivers it (#dontneednoone).",
  },
  {
    id: 55,
    topic: "Reinforcement Types",
    prompt: "Someone else removes the aversive thing for you, increasing your behavior. This is:",
    options: [
      "Socially mediated negative reinforcement",
      "Automatic negative reinforcement",
      "Socially mediated positive reinforcement",
      "Automatic positive reinforcement",
    ],
    correctIndex: 0,
    explanation:
      "Socially mediated negative reinforcement: someone else removes the aversive thing for you. (If you removed it yourself, it would be automatic.)",
  },
  {
    id: 56,
    topic: "Reinforcement Types",
    prompt:
      "Touching a hot stove and quickly pulling your hand away, with no deliberate learning and whether or not you're aware of it, illustrates:",
    options: [
      "Automaticity of reinforcement",
      "Socially mediated reinforcement",
      "Rule-governed behavior",
      "A generalized conditioned reinforcer",
    ],
    correctIndex: 0,
    explanation:
      "Automaticity of reinforcement: reinforcement occurs whether or not the person is aware of or understands it (#nodeliberatelearning — e.g., stepping in a puddle, a burned hand).",
  },
  {
    id: 57,
    topic: "Conditioned Reinforcers",
    prompt: "Which of the following is an UNCONDITIONED (primary) reinforcer?",
    options: ["Water", "Money", "Stickers", "Tokens"],
    correctIndex: 0,
    explanation:
      "Unconditioned/primary reinforcers are unlearned things you need: sex, food, water, oxygen, shelter, activity, sleep, warmth, and decrease in pain.",
  },
  {
    id: 58,
    topic: "Conditioned Reinforcers",
    prompt:
      "The notes say 'if you don't know it on your birthday, it's ___.' This describes which kind of reinforcer?",
    options: [
      "Conditioned (secondary/learned)",
      "Unconditioned (primary)",
      "Generalized",
      "Automatic",
    ],
    correctIndex: 0,
    explanation:
      "Conditioned (secondary) reinforcers are learned through pairing — 'if you don't know it on your birthday, it's conditioned' (e.g., iPad, stickers, money, likes).",
  },
  {
    id: 59,
    topic: "Conditioned Reinforcers",
    prompt: "Money and tokens, which have been paired with many other reinforcers and don't depend on a single one, are:",
    options: [
      "Generalized conditioned reinforcers",
      "Unconditioned reinforcers",
      "Automatic reinforcers",
      "Unconditioned punishers",
    ],
    correctIndex: 0,
    explanation:
      "Generalized conditioned reinforcers have been paired with many unconditioned and conditioned reinforcers, so they don't depend on any single one (#tokens, #money, #attention).",
  },
  {
    id: 60,
    topic: "Types of Reinforcers",
    prompt: "The 5 types of positive reinforcers are remembered with 'EATSS.' Which expansion is correct?",
    options: [
      "Edible, Activity, Tangible, Social, Sensory",
      "Escape, Avoidance, Tangible, Social, Stimulus",
      "Edible, Attention, Time, Sleep, Safety",
      "Echoic, Activity, Tact, Social, Sensory",
    ],
    correctIndex: 0,
    explanation:
      "EATSS = Edible (chips), Activity (trampoline), Tangible (iPad), Social (praise, 'good job'), Sensory (stimming, music, weighted blanket).",
  },
  {
    id: 61,
    topic: "Negative Reinforcement",
    prompt: "What distinguishes ESCAPE from AVOIDANCE within negative reinforcement?",
    options: [
      "Escape requires already being in the aversive situation to get out; avoidance prevents contact before it happens",
      "Escape prevents contact; avoidance requires being in the situation",
      "Escape adds a stimulus; avoidance removes one",
      "There is no difference between them",
    ],
    correctIndex: 0,
    explanation:
      "Escape: you have to be IN something to get out (wet in the rain → go inside). Avoidance (more common): you've likely contacted the contingency before, so you act to avoid it entirely (#neveragain).",
  },
  {
    id: 62,
    topic: "Negative Reinforcement",
    prompt:
      "There is a clear SD (or SDp) signaling something you need to avoid, so you avoid it. This is which type of avoidance?",
    options: ["Discriminative avoidance", "Free-operant avoidance", "Escape", "Habituation"],
    correctIndex: 0,
    explanation:
      "Discriminative avoidance: there is a clear SD/SDp that signals what to avoid. Free-operant avoidance has no specific SD — you act 'just in case' due to likelihood.",
  },
  {
    id: 63,
    topic: "Reinforcement",
    prompt: "Which is listed as an UNWANTED effect of reinforcement?",
    options: [
      "Behavioral contrast — the rate in one setting moves opposite to a 'reinforced' setting",
      "Increasing the future frequency of behavior",
      "Producing a functional relation",
      "Establishing stimulus control",
    ],
    correctIndex: 0,
    explanation:
      "Unwanted effects include reliance on contrived reinforcers, temporary effects, potentially harmful reinforcers, and behavioral contrast (rate moves opposite in a non-reinforced setting). Note: reinforcement is NOT bribery.",
  },
  {
    id: 64,
    topic: "Punishment Terms",
    prompt: "Which 'Punishment 101' term means 'a stimulus whose presentation functions as punishment'?",
    options: ["Punisher (noun)", "Punishment (noun)", "Punishing (adjective)", "Punish (verb)"],
    correctIndex: 0,
    explanation:
      "Punisher (noun) = a stimulus whose presentation functions as punishment (e.g., mom's loud 'NO!'). Punishment is the process; punishing is a property; punish is the operation.",
  },
  {
    id: 65,
    topic: "Punishment Terms",
    prompt: "According to the notes, in punishment we punish responses, not ___.",
    options: ["individuals", "stimuli", "consequences", "antecedents"],
    correctIndex: 0,
    explanation:
      "'Punish (verb)' — responses are punished, NOT individuals. Punishment delivers consequences contingent on a response.",
  },
  {
    id: 66,
    topic: "Punishment",
    prompt: "Which is an UNCONDITIONED (primary) punisher?",
    options: [
      "Physical trauma to the body",
      "A speeding ticket",
      "Being unfriended",
      "A suspension from school",
    ],
    correctIndex: 0,
    explanation:
      "Unconditioned punishers (products of evolution, no pairing needed): physical trauma, loss of bodily support, extreme muscle effort, physical restraint, body odour, bad taste.",
  },
  {
    id: 67,
    topic: "Punishment",
    prompt:
      "A speeding ticket, being unfriended, and a school suspension function as punishers because of one's learning history. These are:",
    options: [
      "Conditioned (secondary) punishers",
      "Unconditioned (primary) punishers",
      "Generalized conditioned reinforcers",
      "Establishing operations",
    ],
    correctIndex: 0,
    explanation:
      "Conditioned punishers acquire their function through stimulus-stimulus pairing with unconditioned or previously conditioned punishers (#learnedpunishers).",
  },
  {
    id: 68,
    topic: "Positive Punishers",
    prompt:
      "A student goofs off during karate and is told to run 10 laps — an effortful behavior NOT topographically related to the problem behavior. This positive punisher is:",
    options: ["Exercise", "Overcorrection", "Response blocking", "RIRD"],
    correctIndex: 0,
    explanation:
      "Exercise as a punisher is effortful but not topographically related to the behavior (#military, #sports). Overcorrection, by contrast, IS directly/logically related to the problem behavior.",
  },
  {
    id: 69,
    topic: "Positive Punishers",
    prompt:
      "Physically preventing a behavior from occurring (e.g., arm guards so a client can't bite) is which positive punisher?",
    options: ["Response blocking", "Overcorrection", "Reprimand", "Exercise"],
    correctIndex: 0,
    explanation:
      "Response blocking prevents the whole behavior from occurring (it also draws from extinction). Example: arm guards to block biting.",
  },
  {
    id: 70,
    topic: "Positive Punishers",
    prompt: "Effortful behavior that is directly or logically related to the problem behavior (e.g., restitution or positive practice) is:",
    options: ["Overcorrection", "Exercise", "RIRD", "Response cost"],
    correctIndex: 0,
    explanation:
      "Overcorrection is effortful behavior directly/logically related to the problem behavior, including restitutional overcorrection and positive practice.",
  },
  {
    id: 71,
    topic: "Negative Punishment",
    prompt:
      "Which time-out type should ethically be the FIRST choice because it is the most powerful and least restrictive, and should last no longer than 25 minutes?",
    options: ["Non-exclusion time-out", "Exclusion time-out", "Response cost", "Bonus response cost"],
    correctIndex: 0,
    explanation:
      "Non-exclusion time-out is the least restrictive (most powerful) and should be the first choice, lasting no longer than 25 minutes. Types include planned ignoring, terminating an R+ contract, contingent observation, and partition/select space.",
  },
  {
    id: 72,
    topic: "Negative Punishment",
    prompt: "Removing a certain number of reinforcers contingent on misbehavior (a 'fine') is:",
    options: ["Response cost", "Time-out", "Planned ignoring", "Overcorrection"],
    correctIndex: 0,
    explanation:
      "Response cost (#fine) = removing a certain number of reinforcers for misbehavior. A direct fine takes away existing reinforcers; a bonus response cost adds extra reinforcers specifically so they can be removed.",
  },
  {
    id: 73,
    topic: "Negative Punishment",
    prompt:
      "Within non-exclusion time-out, ignoring the individual with no opportunity to earn reinforcement is called:",
    options: ["Planned ignoring", "Contingent observation", "Partition/select space", "Exclusion"],
    correctIndex: 0,
    explanation:
      "Planned ignoring: ignore the individual so there is no opportunity to earn R+. The other non-exclusion types are terminating an R+ contract, contingent observation, and partition/select space.",
  },
  {
    id: 74,
    topic: "Punishment Guidelines",
    prompt: "Which is a recommended guideline for using punishment effectively?",
    options: [
      "Reinforce appropriate alternative behaviors alongside punishment",
      "Deliver the punisher as late in the response chain as possible",
      "Use a weak-intensity punisher to start",
      "Punish only every other instance from the beginning",
    ],
    correctIndex: 0,
    explanation:
      "Guidelines: punisher onset ASAP, high intensity, punish each instance, deliver early in the response chain, select effective punishers, AND reinforce appropriate alternatives.",
  },
  {
    id: 75,
    topic: "Punishment",
    prompt: "Which ethical consideration applies to using punishment?",
    options: [
      "Always do no harm and try the least restrictive alternative (reinforcement) first",
      "Punishment should always be the first-line intervention",
      "Consent is unnecessary for punishment procedures",
      "Effectiveness outweighs the client's right to effective treatment",
    ],
    correctIndex: 0,
    explanation:
      "Ethics: do no harm, use the least restrictive alternative (try R+ first), respect the client's right to effective treatment, and ensure application is appropriate with policy standards.",
  },
  {
    id: 76,
    topic: "Extinction",
    prompt: "Extinction is best defined as:",
    options: [
      "A previously reinforced behavior is no longer reinforced, breaking the response–reinforcer relation",
      "Adding an aversive stimulus to decrease behavior",
      "The organism forgetting a behavior over time",
      "Pairing a neutral stimulus with an unconditioned stimulus",
    ],
    correctIndex: 0,
    explanation:
      "Extinction = a previously reinforced behavior is no longer reinforced. It doesn't make the behavior 'forgotten'; it kills the response–reinforcer relation. First determine the function.",
  },
  {
    id: 77,
    topic: "Extinction",
    prompt:
      "For a behavior maintained by escape (negative reinforcement), what does extinction look like?",
    options: [
      "Keep the demand in place and block escape",
      "Withhold attention",
      "Block the automatic/sensory consequence",
      "Provide the tangible item",
    ],
    correctIndex: 0,
    explanation:
      "Extinction depends on function. Escape-maintained behavior: keep the demand, block escape. Attention/tangible: withhold attention/tangible. Automatic: block the automatic consequence.",
  },
  {
    id: 78,
    topic: "Extinction",
    prompt:
      "Shortly after extinction begins, the behavior spikes sharply in frequency/intensity before declining. This is called:",
    options: ["An extinction burst", "Spontaneous recovery", "Resurgence", "Ratio strain"],
    correctIndex: 0,
    explanation:
      "An extinction burst is the temporary increase in the behavior right after reinforcement is withheld, before it declines.",
  },
  {
    id: 79,
    topic: "Extinction",
    prompt:
      "After a behavior has been extinguished, it briefly reappears later without reinforcement. This is:",
    options: ["Spontaneous recovery", "Extinction burst", "Resurgence", "Adaptation"],
    correctIndex: 0,
    explanation:
      "Spontaneous recovery is the reappearance of an extinguished behavior after time has passed, even without reinforcement.",
  },
  {
    id: 80,
    topic: "Extinction",
    prompt:
      "The recurrence of a previously reinforced behavior when reinforcement for an alternative behavior is terminated or decreased is:",
    options: ["Resurgence", "Spontaneous recovery", "Extinction burst", "Habituation"],
    correctIndex: 0,
    explanation:
      "Resurgence: a previously reinforced behavior recurs when reinforcement for an alternative behavior is terminated or reduced.",
  },
  {
    id: 81,
    topic: "Basic Concepts",
    prompt: "A response is best defined as:",
    options: [
      "One specific instance of a behavior",
      "A group of responses with the same function",
      "All the physical circumstances in which an organism exists",
      "An energy change affecting an organism through receptor cells",
    ],
    correctIndex: 0,
    explanation:
      "A response is one specific instance of a behavior (e.g., opening an umbrella). A response class is a group of responses with the same function.",
  },
  {
    id: 82,
    topic: "Basic Concepts",
    prompt: "A stimulus is defined as:",
    options: [
      "An energy change that affects an organism through its receptor cells (the 5 senses)",
      "One specific instance of a behavior",
      "A group of responses sharing a function",
      "A verbal statement of an A-B-C contingency",
    ],
    correctIndex: 0,
    explanation:
      "A stimulus is an energy change that affects an organism through its receptor cells (#5senses), used to describe events by stimulus conditions/changes.",
  },
  {
    id: 83,
    topic: "Basic Concepts",
    prompt: "A group of responses with the same function (e.g., several ways to escape) is a:",
    options: ["Response class", "Stimulus class", "Repertoire", "Behavior cusp"],
    correctIndex: 0,
    explanation:
      "A response class is a group of responses with the same function (#functionalanalysisofbx). 'Opening a package' by ripping, using teeth, a knife, or a box cutter is one response class.",
  },
  {
    id: 84,
    topic: "Basic Concepts",
    prompt: "The Dead Man's Test states that:",
    options: [
      "If a dead man can do it, it is NOT a behavior",
      "If a dead man can do it, it IS a behavior",
      "Only living organisms emit stimuli",
      "Behavior must always be reinforced",
    ],
    correctIndex: 0,
    explanation:
      "Dead Man's Test: if a dead man can do it (e.g., lie still, not respond), it's NOT a behavior.",
  },
  {
    id: 85,
    topic: "Repertoire",
    prompt: "A skill is in the client's repertoire, but they aren't doing it. This is a:",
    options: ["Performance deficit", "Skill deficit", "Response class", "Stimulus class"],
    correctIndex: 0,
    explanation:
      "Performance deficit: it's in the repertoire but they aren't doing it. Skill deficit: it's NOT in the repertoire (they don't know how). Repertoire = everything the client already knows how to do.",
  },
  {
    id: 86,
    topic: "Repertoire",
    prompt: "A client does NOT know how to do a skill — it is not in their repertoire. This is a:",
    options: ["Skill deficit", "Performance deficit", "Behavior cusp", "Faulty stimulus control"],
    correctIndex: 0,
    explanation:
      "Skill deficit: the behavior is not in the client's repertoire — they don't know how to do it.",
  },
  {
    id: 87,
    topic: "Stimulus Classes",
    prompt: "Classifying stimuli by physical features such as shape, size, and color is which type of stimulus class?",
    options: ["Formal", "Temporal", "Functional", "Arbitrary"],
    correctIndex: 0,
    explanation:
      "Stimuli can be classified formally (physical features: shape, size, color), temporally (by time/when they occur), or functionally (by the function of the behavior).",
  },
  {
    id: 88,
    topic: "Stimulus Classes",
    prompt:
      "A crossing guard saying 'go,' a walk sign beeping, and 'cross the road' all share the same function and may have multiple functions. This grouping is which type of stimulus class?",
    options: ["Functional", "Formal", "Temporal", "Reflexive"],
    correctIndex: 0,
    explanation:
      "Functional stimulus classes group stimuli by the function of the behavior, and members can have multiple functions.",
  },
  {
    id: 89,
    topic: "Rule-Governed Behavior",
    prompt:
      "Behavior controlled by a verbal statement of an A-B-C contingency, with no immediate consequence apparent, is:",
    options: ["Rule-governed behavior", "Contingency-shaped behavior", "Respondent behavior", "Automatic reinforcement"],
    correctIndex: 0,
    explanation:
      "Rule-governed behavior is controlled by a rule (a verbal statement of an A-B-C contingency) and changes without direct reinforcement (e.g., stop at a stop sign or get a ticket).",
  },
  {
    id: 90,
    topic: "Rule-Governed Behavior",
    prompt: "Behavior acquired by direct experience with the contingency (rather than by following a rule) is:",
    options: ["Contingency-shaped behavior", "Rule-governed behavior", "Respondent behavior", "Echoic behavior"],
    correctIndex: 0,
    explanation:
      "Contingency-shaped behavior is acquired through direct experience with the contingency, not from a stated rule.",
  },
  {
    id: 91,
    topic: "Stimulus Control",
    prompt: "An SD (discriminative stimulus) signals that:",
    options: [
      "Reinforcement is available for a response",
      "No reinforcement (or lesser quality) is available",
      "Punishment is guaranteed",
      "The behavior is reflexive",
    ],
    correctIndex: 0,
    explanation:
      "In the presence of an SD, reinforcement is available; in the presence of an S-delta (SΔ), no reinforcement or lesser quality is available.",
  },
  {
    id: 92,
    topic: "Stimulus Control",
    prompt: "Stimulus control occurs when:",
    options: [
      "The rate, duration, or intensity of a response is altered in the presence of an antecedent stimulus",
      "A reflex is elicited by an unconditioned stimulus",
      "A behavior is no longer reinforced",
      "Two stimuli are paired in the antecedent",
    ],
    correctIndex: 0,
    explanation:
      "Stimulus control: the rate/duration/magnitude/intensity of a response is altered in the presence of an antecedent stimulus.",
  },
  {
    id: 93,
    topic: "Stimulus Control",
    prompt:
      "Behavior occurring more often in the presence of an SD than in its absence leads to:",
    options: ["Stimulus discrimination", "Stimulus generalization", "Habituation", "Resurgence"],
    correctIndex: 0,
    explanation:
      "When behavior occurs more in the presence of an SD than its absence, this leads to stimulus discrimination.",
  },
  {
    id: 94,
    topic: "Discrimination",
    prompt: "Simple discrimination is described as a:",
    options: [
      "Three-term contingency where one stimulus condition controls the response",
      "Four-term contingency with two antecedents",
      "Two-term contingency with an elicited response",
      "Match-to-sample procedure",
    ],
    correctIndex: 0,
    explanation:
      "Simple discrimination = a three-term contingency (SD → Bx → consequence) where only one stimulus condition exerts control over the response.",
  },
  {
    id: 95,
    topic: "Discrimination",
    prompt:
      "Match-to-sample, where selecting the correct comparison depends on the sample stimulus, is an example of:",
    options: [
      "Conditional discrimination (four-term contingency)",
      "Simple discrimination (three-term contingency)",
      "Respondent conditioning",
      "Response generalization",
    ],
    correctIndex: 0,
    explanation:
      "Conditional discrimination = four-term contingency (conditional stimulus → SD → behavior → consequence). In match-to-sample, the correct comparison is conditional on the sample.",
  },
  {
    id: 96,
    topic: "Faulty Stimulus Control",
    prompt:
      "A child answers a flashcard correctly only because of a smudge on the card, not the math problem itself. This is:",
    options: ["Faulty stimulus control", "Stimulus generalization", "Concept formation", "Overcorrection"],
    correctIndex: 0,
    explanation:
      "Faulty stimulus control occurs when behavior comes under the control of an irrelevant antecedent (the smudge instead of the math).",
  },
  {
    id: 97,
    topic: "Factors Affecting Stimulus Control",
    prompt:
      "A student knows the answer but freezes and can't recall it in front of the whole class. Which factor affecting stimulus control is this?",
    options: ["Masking", "Overshadowing", "Overselective stimulus control", "Stimulus salience"],
    correctIndex: 0,
    explanation:
      "Masking: a competing stimulus blocks the evocative effect of the original stimulus — not a skill issue (#stagefright, 'I know it but can't show it').",
  },
  {
    id: 98,
    topic: "Factors Affecting Stimulus Control",
    prompt:
      "The prominence of a stimulus in the learner's environment — its size, position, or color — is called:",
    options: ["Stimulus salience", "Masking", "Overshadowing", "Overselectivity"],
    correctIndex: 0,
    explanation:
      "Stimulus salience = the prominence of a stimulus in the learner's environment (#size, #position, #color).",
  },
  {
    id: 99,
    topic: "Concept Formation",
    prompt: "Concept formation requires which two processes?",
    options: [
      "Stimulus generalization within a class AND stimulus discrimination between classes",
      "Reinforcement and punishment delivered together",
      "Respondent and operant conditioning combined",
      "Masking and overshadowing",
    ],
    correctIndex: 0,
    explanation:
      "Concept formation = stimulus generalization within a class of stimuli AND stimulus discrimination between classes (e.g., all dogs are 'dogs,' but 'purple is NOT green').",
  },
  {
    id: 100,
    topic: "Stimulus Control",
    prompt:
      "Compared to the absence of the SD, behavior reinforced in the presence of an SD shows that the SD has acquired:",
    options: [
      "Evocative control over the response",
      "An eliciting (reflexive) function",
      "Value as an unconditioned reinforcer",
      "A punishing function",
    ],
    correctIndex: 0,
    explanation:
      "An SD evokes a response due to a history of reinforcement in its presence; it does not elicit a reflex and does not alter the value of a reinforcer (that is an MO's job).",
  },
  {
    id: 101,
    topic: "Motivating Operations",
    prompt: "A motivating operation (MO) does which of the following?",
    options: [
      "Temporarily alters the value of a reinforcer/punisher and the likelihood of behavior",
      "Signals that reinforcement is available",
      "Permanently changes the function of a stimulus",
      "Elicits a reflexive response",
    ],
    correctIndex: 0,
    explanation:
      "An MO temporarily changes the effectiveness (value) of a reinforcer/punisher and affects the likelihood of behavior. An SD merely signals availability of reinforcement.",
  },
  {
    id: 102,
    topic: "Motivating Operations",
    prompt: "Which best contrasts an MO with an SD?",
    options: [
      "An MO alters the value of a consequence; an SD signals when reinforcement is available",
      "An MO signals availability; an SD changes value",
      "Both alter the value of the reinforcer",
      "Both only signal availability of reinforcement",
    ],
    correctIndex: 0,
    explanation:
      "MO = alters value/effectiveness of the consequence and affects likelihood of behavior. SD = signals reinforcement is available; it does not change the reinforcer's value.",
  },
  {
    id: 103,
    topic: "Motivating Operations",
    prompt:
      "Food deprivation makes food more valuable and increases behaviors that produce food. This is an:",
    options: ["Establishing operation (EO)", "Abolishing operation (AO)", "Discriminative stimulus", "Conditioned punisher"],
    correctIndex: 0,
    explanation:
      "An establishing operation increases the value of a reinforcer (deprivation → reinforcer more valuable → more behavior). An abolishing operation decreases its value (e.g., satiation).",
  },
  {
    id: 104,
    topic: "Motivating Operations",
    prompt:
      "After eating a huge meal, food is no longer valuable and food-seeking behavior drops. This is an:",
    options: ["Abolishing operation (AO)", "Establishing operation (EO)", "Evocative effect", "SD"],
    correctIndex: 0,
    explanation:
      "Satiation is an abolishing operation: it decreases the value of the reinforcer, so behaviors that produce it become less likely.",
  },
  {
    id: 105,
    topic: "Conditioned MOs",
    prompt:
      "A stimulus paired with another MO comes to evoke the same response (e.g., white noise makes you sleepy). This is a:",
    options: ["CMO-Surrogate (CMO-S)", "CMO-Reflexive (CMO-R)", "CMO-Transitive (CMO-T)", "Unconditioned MO"],
    correctIndex: 0,
    explanation:
      "A surrogate CMO (CMO-S) has been paired with another MO and evokes the same effect (#paired) — e.g., white noise → sleepy.",
  },
  {
    id: 106,
    topic: "Conditioned MOs",
    prompt:
      "A tornado warning increases the value of escape/avoidance because it signals worsening conditions. This is a:",
    options: ["CMO-Reflexive (CMO-R)", "CMO-Surrogate (CMO-S)", "CMO-Transitive (CMO-T)", "Unconditioned MO"],
    correctIndex: 0,
    explanation:
      "A reflexive CMO (CMO-R) signals worsening (or improving) conditions and increases the value of escape/avoidance.",
  },
  {
    id: 107,
    topic: "Conditioned MOs",
    prompt:
      "A pencil with no lead makes a pencil sharpener valuable — one item establishes the value of another. This is a:",
    options: ["CMO-Transitive (CMO-T)", "CMO-Surrogate (CMO-S)", "CMO-Reflexive (CMO-R)", "Unconditioned MO"],
    correctIndex: 0,
    explanation:
      "A transitive CMO (CMO-T) is an environmental variable that establishes the effectiveness of another stimulus as a reinforcer (#problemsolver, #tool).",
  },
  {
    id: 108,
    topic: "Generalization",
    prompt:
      "Multiple similar stimuli (Advil, a pill, a Paw Patrol gummy) all evoke the SAME response — swallowing. This is:",
    options: ["Stimulus generalization", "Response generalization", "Discrimination", "Overgeneralization"],
    correctIndex: 0,
    explanation:
      "Stimulus generalization: when an antecedent has a history of evoking a reinforced response, similar stimuli also evoke it (multiple stimuli, one response; #loosestimuluscontrol).",
  },
  {
    id: 109,
    topic: "Generalization",
    prompt:
      "ONE stimulus (a bag of chips) evokes multiple topographically different but functionally equivalent responses (pinch and pull, ask mom, use scissors). This is:",
    options: ["Response generalization", "Stimulus generalization", "Discrimination", "Concept formation"],
    correctIndex: 0,
    explanation:
      "Response generalization (#responseinduction): a learner emits untrained responses that are functionally equivalent to the trained one — topographically different, same function.",
  },
  {
    id: 110,
    topic: "Generalization",
    prompt:
      "A child calls every older woman with grey hair 'Grandma' — even a young woman with grey hair. The stimulus class is too broad. This is:",
    options: ["Overgeneralization", "Discrimination", "Response generalization", "Faulty stimulus control"],
    correctIndex: 0,
    explanation:
      "Overgeneralization: behavior comes under the control of a stimulus class that is too broad (here, 'grey hair').",
  },
  {
    id: 111,
    topic: "Generalization",
    prompt: "Discrimination is 'tight' stimulus control and generalization is '____' stimulus control.",
    options: ["loose", "reflexive", "elicited", "automatic"],
    correctIndex: 0,
    explanation:
      "Discrimination = tight stimulus control (small spectrum of stimuli). Generalization = loose stimulus control (larger spectrum, across behaviors).",
  },
  {
    id: 112,
    topic: "Promoting Generalization",
    prompt:
      "Bringing items from the natural environment into the instructional setting so the two settings share features is which CBS MINGLE strategy?",
    options: ["Common Stimuli", "Behavior Trap", "Mediation", "Nonexamples"],
    correctIndex: 0,
    explanation:
      "Programming Common Stimuli: use stimuli in training that are also present in the generalization (natural) setting, since the two are never identical.",
  },
  {
    id: 113,
    topic: "Promoting Generalization",
    prompt:
      "Using intermittent schedules or delayed rewards so the learner can't tell when reinforcement is coming is which generalization strategy?",
    options: ["Indiscriminable Contingencies", "Common Stimuli", "Self-Management", "Exemplars"],
    correctIndex: 0,
    explanation:
      "Indiscriminable contingencies: the learner can't discriminate when reinforcement is coming (intermittent schedules / delayed rewards), so behavior maintains.",
  },
  {
    id: 114,
    topic: "Promoting Generalization",
    prompt:
      "Teaching with several different examples of stimuli and responses to promote both stimulus and response generalization is which strategy?",
    options: ["Multiple Exemplars", "Behavior Trap", "Nonexamples", "Mediation"],
    correctIndex: 0,
    explanation:
      "Multiple Exemplars: teach with multiple stimulus and response examples to promote stimulus generalization and response generalization.",
  },
  {
    id: 115,
    topic: "Stimulus Equivalence",
    prompt: "Stimulus equivalence is the emergence of accurate responding to:",
    options: [
      "Untrained, non-reinforced stimulus–stimulus relations",
      "Trained and directly reinforced relations only",
      "Reflexive responses to unconditioned stimuli",
      "Topographically identical responses",
    ],
    correctIndex: 0,
    explanation:
      "Stimulus equivalence = the emergence of accurate responding to untrained, non-reinforced stimulus–stimulus relations.",
  },
  {
    id: 116,
    topic: "Stimulus Equivalence",
    prompt: "Matching a stimulus to itself (A = A) demonstrates which property of stimulus equivalence?",
    options: ["Reflexivity", "Symmetry", "Transitivity", "Mutual entailment"],
    correctIndex: 0,
    explanation:
      "Reflexivity = A = A: a stimulus is matched to itself (identity matching).",
  },
  {
    id: 117,
    topic: "Stimulus Equivalence",
    prompt: "If you teach A = B and the learner derives B = A without training, this demonstrates:",
    options: ["Symmetry", "Reflexivity", "Transitivity", "Generalization"],
    correctIndex: 0,
    explanation:
      "Symmetry = reversibility: if A = B is trained, then B = A is derived.",
  },
  {
    id: 118,
    topic: "Stimulus Equivalence",
    prompt:
      "After training A = B and B = C, the learner derives A = C with no direct teaching. This is:",
    options: ["Transitivity", "Symmetry", "Reflexivity", "Resurgence"],
    correctIndex: 0,
    explanation:
      "Transitivity: given A = B and B = C, the relation A = C emerges without teaching. All three (reflexivity, symmetry, transitivity) are required for stimulus equivalence.",
  },
  {
    id: 119,
    topic: "Match-to-Sample",
    prompt:
      "In a match-to-sample procedure, matching to an exact duplicate (showing recognition of sameness) is which type?",
    options: ["Identity matching", "Arbitrary matching", "Symbolic matching", "Oddity"],
    correctIndex: 0,
    explanation:
      "Identity matching: the learner matches a stimulus to an exact duplicate, demonstrating recognition of sameness.",
  },
  {
    id: 120,
    topic: "Match-to-Sample",
    prompt:
      "In a match-to-sample task, the learner must select the ODD ONE OUT (the stimulus that does not match the sample). This is:",
    options: ["Oddity", "Identity", "Arbitrary", "Symbolic"],
    correctIndex: 0,
    explanation:
      "Oddity: the learner identifies and selects the odd one out — it does NOT match the sample.",
  },
  {
    id: 121,
    topic: "Non-Equivalence Relations",
    prompt:
      "In relational frame theory, a bidirectional relationship between two stimuli (if A relates to B, then B relates to A) is:",
    options: ["Mutual entailment", "Combinatorial entailment", "Reflexivity", "Transformation of function"],
    correctIndex: 0,
    explanation:
      "Mutual entailment = a bidirectional relationship between two stimuli. Combinatorial entailment links stimuli through common associates.",
  },
  {
    id: 122,
    topic: "RFT & ACT",
    prompt:
      "Which therapy is an evidence-based behavior therapy that relies heavily on verbal exercises and holds that private events are at the root of many human challenges?",
    options: [
      "Acceptance & Commitment Therapy (ACT)",
      "Relational Frame Theory (RFT)",
      "Functional Analysis (FA)",
      "Discrete Trial Training (DTT)",
    ],
    correctIndex: 0,
    explanation:
      "ACT is an evidence-based behavior therapy relying on verbal exercises; its goal is to promote general well-being. RFT is the theory of relational responding underlying it.",
  },
  {
    id: 123,
    topic: "Verbal Behavior",
    prompt:
      "Skinner defined verbal behavior as behavior that is reinforced through the:",
    options: [
      "Mediation of another person (a listener)",
      "Direct effect of the physical environment",
      "Automatic consequences of speaking",
      "Pairing of two neutral stimuli",
    ],
    correctIndex: 0,
    explanation:
      "Verbal behavior is behavior reinforced through the mediation of another person; it involves a speaker and a listener. (Nonverbal ≠ nonvocal; you can be your own listener.)",
  },
  {
    id: 124,
    topic: "Verbal Operants",
    prompt:
      "A child says 'cookie' because they want a cookie, under the control of a motivating operation, and receives the cookie. This verbal operant is a:",
    options: ["Mand", "Tact", "Echoic", "Intraverbal"],
    correctIndex: 0,
    explanation:
      "A mand is a request controlled by a motivating operation (MO) and reinforced by the specific item manded for (#iwant).",
  },
  {
    id: 125,
    topic: "Verbal Operants",
    prompt:
      "A child sees a lamp and says 'lamp' (a label for a nonverbal stimulus), receiving generalized social reinforcement. This is a:",
    options: ["Tact", "Mand", "Intraverbal", "Echoic"],
    correctIndex: 0,
    explanation:
      "A tact labels a nonverbal stimulus (an object, action, or event), controlled by that stimulus and reinforced by a generalized conditioned reinforcer.",
  },
  {
    id: 126,
    topic: "Verbal Operants",
    prompt:
      "A child hears 'book' and repeats 'book' — vocal behavior with point-to-point correspondence and formal similarity. This is an:",
    options: ["Echoic", "Tact", "Mand", "Intraverbal"],
    correctIndex: 0,
    explanation:
      "An echoic has point-to-point correspondence AND formal similarity to a verbal stimulus — repeating what you hear (a duplic).",
  },
  {
    id: 127,
    topic: "Verbal Operants",
    prompt:
      "Answering 'Tom' to the question 'What's your name?' — conversation/answering with no point-to-point correspondence — is an:",
    options: ["Intraverbal", "Echoic", "Tact", "Mand"],
    correctIndex: 0,
    explanation:
      "An intraverbal is answering a question or holding a conversation; it is controlled by a verbal stimulus with NO point-to-point correspondence.",
  },
  {
    id: 128,
    topic: "Verbal Operants",
    prompt:
      "A behavior change that brings the organism into contact with new contingencies that have far-reaching consequences (e.g., learning to read or communicate) is a:",
    options: ["Behavior cusp", "Response class", "Behavior trap", "Conditioned reinforcer"],
    correctIndex: 0,
    explanation:
      "A behavior cusp is a behavior change that brings the organism into contact with new contingencies with even further-reaching consequences (e.g., communication, crawling, imitation).",
  },
  {
    id: 129,
    topic: "Verbal Behavior",
    prompt:
      "A mand emitted purely under the control of an MO, with no verbal SD and not multiply controlled, is a:",
    options: ["Pure mand", "Impure mand", "Pure tact", "Impure tact"],
    correctIndex: 0,
    explanation:
      "A pure mand occurs under the control of an MO alone, with no verbal SD and no multiple control (#spontaneous, #independent).",
  },
  {
    id: 130,
    topic: "Verbal Behavior",
    prompt:
      "When a single response is controlled by more than one antecedent variable, this is:",
    options: ["Convergent multiple control", "Divergent multiple control", "Pure tact control", "Listener responding"],
    correctIndex: 0,
    explanation:
      "Convergent multiple control: a single response is controlled by more than one antecedent variable. Divergent: a single antecedent controls more than one response.",
  },
  {
    id: 131,
    topic: "Schedules of Reinforcement",
    prompt:
      "Reinforcing every single instance of a behavior (FR1) is which schedule, best for acquisition?",
    options: [
      "Continuous reinforcement (CRF)",
      "Intermittent reinforcement",
      "Variable ratio",
      "Extinction",
    ],
    correctIndex: 0,
    explanation:
      "Continuous reinforcement (CRF / FR1) reinforces every instance and is best for acquisition. Intermittent schedules reinforce some but not all instances and are best for maintenance.",
  },
  {
    id: 132,
    topic: "Schedules of Reinforcement",
    prompt: "In the key for schedules: Fixed = set amount, Variable = average, Ratio = responses, and Interval = ___.",
    options: ["time", "responses", "intensity", "duration of the reinforcer"],
    correctIndex: 0,
    explanation:
      "Ratio = based on number of responses; Interval = based on time. Fixed = a set amount; Variable = an average.",
  },
  {
    id: 133,
    topic: "Schedules of Reinforcement",
    prompt:
      "A slot machine that pays out after an average number of pulls produces a high, steady rate and is most resistant to extinction. This is which schedule?",
    options: ["Variable ratio (VR)", "Fixed ratio (FR)", "Fixed interval (FI)", "Variable interval (VI)"],
    correctIndex: 0,
    explanation:
      "Variable ratio (VR) reinforces after an average number of responses (e.g., a slot machine); it produces a high steady rate and is the most resistant to extinction.",
  },
  {
    id: 134,
    topic: "Schedules of Reinforcement",
    prompt:
      "Reinforcement delivered for the first correct response after a SET amount of time, producing a 'scallop' pattern with a post-reinforcement pause, is which schedule?",
    options: ["Fixed interval (FI)", "Variable interval (VI)", "Fixed ratio (FR)", "Variable ratio (VR)"],
    correctIndex: 0,
    explanation:
      "Fixed interval (FI): reinforcement for the first correct response after a fixed time; slow-to-moderate rate with a scallop pattern and post-reinforcement pause.",
  },
  {
    id: 135,
    topic: "Schedules of Reinforcement",
    prompt:
      "No correct response is required for reinforcement; it is delivered on a fixed or variable time basis. This describes:",
    options: [
      "Non-contingent reinforcement (FT/VT)",
      "Fixed ratio reinforcement",
      "Variable interval reinforcement",
      "Differential reinforcement",
    ],
    correctIndex: 0,
    explanation:
      "Fixed Time (FT) and Variable Time (VT) deliver reinforcement with no response required — this is non-contingent reinforcement (NCR).",
  },
  {
    id: 136,
    topic: "Schedules of Reinforcement",
    prompt:
      "Gradually increasing the response ratio or interval to make a schedule leaner over time is called:",
    options: ["Schedule thinning", "Ratio strain", "Schedule shifting", "Satiation"],
    correctIndex: 0,
    explanation:
      "Schedule thinning gradually/systematically increases the response requirement or interval (e.g., FR1 → FR3 → FR5 → VR5 → VR10).",
  },
  {
    id: 137,
    topic: "Schedules of Reinforcement",
    prompt:
      "A schedule thinned too quickly (e.g., FR1 → FR3 → FR5 → VR25) produces pausing, avoidance, and aggression. This is:",
    options: ["Ratio strain", "Schedule thinning", "Behavioral contrast", "Spontaneous recovery"],
    correctIndex: 0,
    explanation:
      "Ratio strain occurs when a schedule is thinned too quickly ('asking too much too fast'), causing pausing, avoidance, and aggression.",
  },
  {
    id: 138,
    topic: "Schedules of Reinforcement",
    prompt:
      "A response is reinforced ONLY if it differs from a specified number of previous responses, used to increase variability/novelty. This is a:",
    options: ["Lag schedule", "Limited hold", "Progressive ratio", "Differential reinforcement of low rates"],
    correctIndex: 0,
    explanation:
      "A lag schedule reinforces a response only if it differs from a specified number of prior responses, increasing variability (#novelty).",
  },
  {
    id: 139,
    topic: "Differential Reinforcement",
    prompt:
      "Reinforcing the ABSENCE of a target behavior over a time interval to eliminate it is which DR procedure?",
    options: ["DRO (other behavior)", "DRA (alternative behavior)", "DRI (incompatible behavior)", "DRL (low rates)"],
    correctIndex: 0,
    explanation:
      "DRO = differential reinforcement of OTHER behavior: reinforce the absence of the target behavior over an interval; used to eliminate it.",
  },
  {
    id: 140,
    topic: "Differential Reinforcement",
    prompt:
      "Reinforcing a behavior that cannot occur at the same time as the problem behavior (e.g., sitting vs. running around) is which DR procedure?",
    options: ["DRI (incompatible behavior)", "DRA (alternative behavior)", "DRO (other behavior)", "DRH (high rates)"],
    correctIndex: 0,
    explanation:
      "DRI = differential reinforcement of INCOMPATIBLE behavior: reinforce a behavior that can't physically co-occur with the problem behavior.",
  },
  {
    id: 141,
    topic: "Differential Reinforcement",
    prompt:
      "Reinforcing an appropriate replacement behavior (often the basis of FCT), which can be reinforced at the same time as the target, is:",
    options: ["DRA (alternative behavior)", "DRO (other behavior)", "DRL (low rates)", "DRD (diminishing rates)"],
    correctIndex: 0,
    explanation:
      "DRA = differential reinforcement of ALTERNATIVE behavior: reinforce an appropriate replacement behavior (#FCT, concurrent schedule).",
  },
  {
    id: 142,
    topic: "Differential Reinforcement",
    prompt:
      "A procedure used to DECREASE but not eliminate a behavior by increasing the inter-response time (e.g., reduce hand-raising, not stop it) is:",
    options: ["DRL (low rates)", "DRO (other behavior)", "DRI (incompatible behavior)", "DRH (high rates)"],
    correctIndex: 0,
    explanation:
      "DRL = differential reinforcement of LOW rates: decrease (but not eliminate) a behavior by increasing the inter-response time; the behavior stays in the repertoire.",
  },
  {
    id: 143,
    topic: "Compound Schedules",
    prompt:
      "Two or more basic schedules are in effect at the same time, for two or more behaviors, with a choice (related to the matching law). This compound schedule is:",
    options: ["Concurrent", "Multiple", "Chained", "Mixed"],
    correctIndex: 0,
    explanation:
      "A concurrent schedule has two or more schedules in effect simultaneously for different responses, offering a choice (#matchinglaw, #whatsbestforme).",
  },
  {
    id: 144,
    topic: "Compound Schedules",
    prompt:
      "Two schedules alternate successively, each with its own SD, and order does NOT matter. This compound schedule is:",
    options: ["Multiple", "Chained", "Mixed", "Tandem"],
    correctIndex: 0,
    explanation:
      "A multiple schedule alternates two or more schedules successively, each signaled by its own SD. A mixed schedule is the same but with NO SD.",
  },
  {
    id: 145,
    topic: "Compound Schedules",
    prompt:
      "Schedule components must be completed in a specific ORDER, each with its own SD (like getting gas in sequence). This is a:",
    options: ["Chained schedule", "Tandem schedule", "Concurrent schedule", "Conjunctive schedule"],
    correctIndex: 0,
    explanation:
      "A chained schedule requires components in a set order, each signaled by an SD (#ordermatters). A tandem schedule is the same but with NO SD.",
  },
  {
    id: 146,
    topic: "Compound Schedules",
    prompt:
      "Using the decision flowchart: the schedules occur at the same time AND there is no order/SD requirement. Which compound schedules fit?",
    options: [
      "Concurrent, Alternative, Conjunctive",
      "Multiple, Chained",
      "Mixed, Tandem",
      "Fixed, Variable",
    ],
    correctIndex: 0,
    explanation:
      "Flowchart: 'Same time?' YES → Concurrent, Alternative, Conjunctive. NO → 'Is there an SD?' YES → Multiple, Chained; NO → Mixed, Tandem.",
  },
  {
    id: 147,
    topic: "Schedules of Reinforcement",
    prompt:
      "Reinforcement remains available only for a finite time following an interval schedule (e.g., concert tickets held in your cart for 8 minutes). This is a:",
    options: ["Limited hold", "Lag schedule", "Progressive ratio", "Ratio strain"],
    correctIndex: 0,
    explanation:
      "A limited hold adds a finite window during which reinforcement remains available after the interval schedule's requirement is met.",
  },
  {
    id: 148,
    topic: "Schedules of Reinforcement",
    prompt:
      "A schedule that systematically thins each successive reinforcer opportunity within a session, used to find a 'breaking point,' is a:",
    options: ["Progressive ratio", "Variable interval", "Limited hold", "Continuous schedule"],
    correctIndex: 0,
    explanation:
      "A progressive ratio schedule increases the requirement each successive reinforcer opportunity (independent of the participant's behavior), used in reinforcer assessments to find a breaking point.",
  },
  {
    id: 149,
    topic: "Verbal Operants",
    prompt:
      "Following a given instruction such as 'touch your nose' is which verbal/listener skill?",
    options: ["Listener responding", "Mand", "Tact", "Echoic"],
    correctIndex: 0,
    explanation:
      "Listener responding (receptive language) is following a given instruction (e.g., 'touch your nose'), reinforced by a generalized conditioned reinforcer.",
  },
  {
    id: 150,
    topic: "Verbal Behavior",
    prompt:
      "Selection-based verbal behavior (SBVB) includes which of the following response forms?",
    options: [
      "Tablet/icon selection, PECS, and AAC voice-output systems",
      "Vocal speech and sign language",
      "Salivation and blinking",
      "Echoics and intraverbals only",
    ],
    correctIndex: 0,
    explanation:
      "Selection-based verbal behavior (SBVB) involves choosing a stimulus (tablet icons, PECS, AAC). Topography-based VB (TBVB) is vocal speech, sign, or text — and may produce generative learning better than SBVB.",
  },
  {
    id: 151,
    topic: "Measurement",
    prompt:
      "Measuring the time between the delivery of an SD and the start of the behavior is which measure?",
    options: ["Latency", "Inter-response time (IRT)", "Duration", "Frequency"],
    correctIndex: 0,
    explanation:
      "Latency = time between the SD and the start of the behavior. IRT = time between responses. Both are measures of temporal locus.",
  },
  {
    id: 152,
    topic: "Measurement",
    prompt:
      "How long a behavior lasts over time (e.g., total duration of tantruming) is a measure of:",
    options: ["Temporal extent (duration)", "Temporal locus", "Repeatability", "Magnitude"],
    correctIndex: 0,
    explanation:
      "Temporal extent = duration: how long the behavior extends over time. Good for high-rate/continuous behaviors like stimming or tantruming.",
  },
  {
    id: 153,
    topic: "Measurement",
    prompt:
      "Counting how many times a behavior occurs (count/tally) reflects which dimensional quantity?",
    options: ["Repeatability (countability)", "Temporal extent", "Temporal locus", "Topography"],
    correctIndex: 0,
    explanation:
      "Repeatability/countability: when behavior can be counted. Its measures include frequency (count), rate (count/time), and celeration.",
  },
  {
    id: 154,
    topic: "Measurement",
    prompt:
      "A change to the environment produced by a behavior, measured after the fact (e.g., completed worksheets, bite marks), is a:",
    options: ["Permanent product", "Momentary time sample", "Latency measure", "Magnitude measure"],
    correctIndex: 0,
    explanation:
      "Permanent products are environmental changes produced by behavior, measured ex post facto (after the fact).",
  },
  {
    id: 155,
    topic: "Measurement",
    prompt:
      "Which time-sampling procedure tends to OVERESTIMATE behavior, and which tends to UNDERESTIMATE it?",
    options: [
      "Partial interval overestimates; whole interval underestimates",
      "Whole interval overestimates; partial interval underestimates",
      "Both overestimate",
      "Both underestimate",
    ],
    correctIndex: 0,
    explanation:
      "Partial interval recording (PIR) overestimates behavior; whole interval recording (WIR) underestimates it. Momentary time sampling can over- or underestimate.",
  },
  {
    id: 156,
    topic: "Measurement",
    prompt:
      "Free-operant behaviors (e.g., pages read, texts sent) that are free to occur at any time should NOT be measured with DTT because DTT is:",
    options: ["opportunity blind", "continuous", "too sensitive", "discontinuous"],
    correctIndex: 0,
    explanation:
      "DTT is 'opportunity blind,' so it isn't appropriate for free-operant behaviors, which can occur at any time. These are discontinuous behaviors with a clear beginning and end.",
  },
  {
    id: 157,
    topic: "Trustworthy Measurement",
    prompt:
      "The extent to which a measure assesses what you intended to measure (the relevant dimension) is:",
    options: ["Validity", "Accuracy", "Reliability", "Believability"],
    correctIndex: 0,
    explanation:
      "Validity asks: does the measure assess what you intended? (e.g., measuring calories when you intended to measure weight loss is invalid).",
  },
  {
    id: 158,
    topic: "Trustworthy Measurement",
    prompt:
      "The extent to which the observed value matches the true value (e.g., your home scale vs. the doctor's scale) is:",
    options: ["Accuracy", "Validity", "Reliability", "Reactivity"],
    correctIndex: 0,
    explanation:
      "Accuracy = the extent to which the observed value matches the true value.",
  },
  {
    id: 159,
    topic: "Trustworthy Measurement",
    prompt:
      "Getting the same result over and over upon repeated contact ('repeatability = believability') is:",
    options: ["Reliability", "Validity", "Accuracy", "Social validity"],
    correctIndex: 0,
    explanation:
      "Reliability = consistent, repeated results (#sameresultoverandover). When we have repeatability, we have believability.",
  },
  {
    id: 160,
    topic: "Trustworthy Measurement",
    prompt:
      "An unintended change in the way an observer applies the operational definition over time is called:",
    options: ["Observer drift", "Reactivity", "Measurement bias", "Measurement artifact"],
    correctIndex: 0,
    explanation:
      "Observer drift is an unintended change in how an observer uses the measurement system, drifting from the operational definition.",
  },
  {
    id: 161,
    topic: "IOA",
    prompt: "Which is one of the three requirements for valid inter-observer agreement (IOA)?",
    options: [
      "Both observers use the same measurement system, measure the same event, and score independently",
      "One observer trains the other during scoring",
      "Observers compare notes while recording",
      "Only one observer needs to be trained",
    ],
    correctIndex: 0,
    explanation:
      "Valid IOA requires: the same measurement system, measuring the same event at the same time, and scoring independently (no peeking).",
  },
  {
    id: 162,
    topic: "IOA",
    prompt:
      "For low-rate behaviors, which time-sampling IOA is most appropriate because it counts only intervals where an occurrence was recorded?",
    options: ["Scored interval IOA", "Unscored interval IOA", "Total count IOA", "Exact count IOA"],
    correctIndex: 0,
    explanation:
      "Scored interval IOA is used for low-rate behaviors (counts intervals where at least one observer recorded an occurrence). Unscored interval IOA is used for high-rate behaviors.",
  },
  {
    id: 163,
    topic: "Validity",
    prompt:
      "Whether it was truly the intervention (not an extraneous or confounding variable) that changed the behavior concerns which type of validity?",
    options: ["Internal validity", "External validity", "Social validity", "Face validity"],
    correctIndex: 0,
    explanation:
      "Internal validity concerns whether the IV (intervention) — not extraneous/confounding variables — caused the behavior change. High internal validity = strong experimental control.",
  },
  {
    id: 164,
    topic: "Validity",
    prompt:
      "Whether results generalize or apply to other settings, behaviors, and subjects concerns which type of validity?",
    options: ["External validity", "Internal validity", "Social validity", "Construct validity"],
    correctIndex: 0,
    explanation:
      "External validity is whether findings generalize/apply externally to other settings, behaviors, and subjects.",
  },
  {
    id: 165,
    topic: "Validity",
    prompt:
      "Whether target behaviors are appropriate, procedures acceptable, and changes important (e.g., teaching 'stranger danger' = yes) concerns:",
    options: ["Social validity", "Internal validity", "External validity", "Reliability"],
    correctIndex: 0,
    explanation:
      "Social validity = the extent to which target behaviors are appropriate, procedures are acceptable, and changes are important/socially significant.",
  },
  {
    id: 166,
    topic: "Properties of Behavior Change",
    prompt:
      "The general direction of the data path on a graph (ascending, descending, or no trend) is the:",
    options: ["Trend", "Level", "Variability", "Origin"],
    correctIndex: 0,
    explanation:
      "Trend = the general direction of the data path. Level = the value on the vertical axis. Variability = how much data points bounce around.",
  },
  {
    id: 167,
    topic: "Baseline Logic",
    prompt:
      "Which baseline pattern is the BEST time to introduce the intervention?",
    options: ["A stable baseline", "An ascending baseline", "A descending baseline", "A variable baseline"],
    correctIndex: 0,
    explanation:
      "A stable (flat) baseline is the best time to introduce the IV. A variable baseline is too 'all over the place' to detect an effect.",
  },
  {
    id: 168,
    topic: "Experimental Design",
    prompt:
      "In a reversal (ABAB) design, why must there be at least three phases with replication?",
    options: [
      "To demonstrate experimental control by repeatedly showing the behavior changes with the IV",
      "To avoid measuring the dependent variable",
      "Because baseline is optional",
      "To make the design quicker than other designs",
    ],
    correctIndex: 0,
    explanation:
      "The reversal design requires at least 3 phases; experimental control is strongest with repeated replications, making it the most powerful design for demonstrating control.",
  },
  {
    id: 169,
    topic: "Experimental Design",
    prompt:
      "Which design is the most widely used, does NOT require removing the intervention, and is ideal when behavior is irreversible or removal would be unethical?",
    options: [
      "Multiple baseline design",
      "Reversal (ABAB) design",
      "Changing criterion design",
      "Multi-element design",
    ],
    correctIndex: 0,
    explanation:
      "Multiple baseline (across subjects, settings, or behaviors) uses staggered intervention start times, doesn't require removing the IV, and suits irreversible behaviors — but provides weaker control.",
  },
  {
    id: 170,
    topic: "Experimental Design",
    prompt:
      "Gradually raising a target through a series of criteria (e.g., a Couch-to-5K app) for a behavior already in the repertoire describes which design?",
    options: [
      "Changing criterion design",
      "Multiple baseline design",
      "Reversal design",
      "Multi-element design",
    ],
    correctIndex: 0,
    explanation:
      "The changing criterion design uses an initial baseline then a series of gradually changing criteria for ONE behavior already in the repertoire. It is NOT for shaping new skills.",
  },
  {
    id: 171,
    topic: "Experimental Design",
    prompt:
      "Rapidly alternating two or more conditions to compare them (also called an alternating treatment design) describes the:",
    options: [
      "Multi-element design",
      "Changing criterion design",
      "Reversal design",
      "Delayed multiple baseline",
    ],
    correctIndex: 0,
    explanation:
      "The multi-element (alternating treatment) design presents two or more conditions in rapid alternating succession to compare treatments; it can be used with unstable data and needs no baseline.",
  },
  {
    id: 172,
    topic: "Assessment",
    prompt:
      "From most to least precise, which ordering of assessment types is correct?",
    options: [
      "Functional analysis → descriptive assessment → indirect assessment",
      "Indirect assessment → descriptive assessment → functional analysis",
      "Descriptive assessment → functional analysis → indirect assessment",
      "Functional analysis → indirect assessment → descriptive assessment",
    ],
    correctIndex: 0,
    explanation:
      "Precision (and time/effort) is highest for functional analysis (test, control), then descriptive ('show me' — ABC data, scatterplot), then indirect ('tell me' — interviews, checklists).",
  },
  {
    id: 173,
    topic: "Functional Behavior Assessment",
    prompt:
      "The four functions of behavior are remembered with 'S.E.A.T.' Which expansion is correct?",
    options: [
      "Sensory, Escape, Attention, Tangible",
      "Social, Escape, Avoidance, Time",
      "Sensory, Echoic, Attention, Tact",
      "Stimulus, Escape, Attention, Token",
    ],
    correctIndex: 0,
    explanation:
      "S.E.A.T. = Sensory (automatic), Escape (negative reinforcement), Attention (positive reinforcement), Tangible (access). The FBA determines the function of behavior.",
  },
  {
    id: 174,
    topic: "Conditional Probability",
    prompt:
      "Across 4 instances of yelling, 3 are followed by removal of a demand. The conditional probability that escape maintains yelling is:",
    options: ["0.75", "75 (as a raw count)", "3.0", "0.25"],
    correctIndex: 0,
    explanation:
      "Conditional probability = 3/4 = 0.75 for escape (closer to 1 = stronger). Do NOT convert it to a percentage; the value 0.75 indicates escape maintains the behavior.",
  },
  {
    id: 175,
    topic: "Preference Assessment",
    prompt:
      "Presenting items in pairs (forced choice) and ranking them by how often each is selected is which preference assessment?",
    options: [
      "Paired stimulus (forced choice)",
      "Single stimulus",
      "Free operant",
      "MSWO",
    ],
    correctIndex: 0,
    explanation:
      "Paired stimulus preference assessment presents items two at a time (forced choice) to produce a rank order — though it takes a long time.",
  },
  {
    id: 176,
    topic: "Functional Analysis",
    prompt:
      "In a standard functional analysis, which condition serves as the control (enriched environment, preferred items available, no demands)?",
    options: [
      "Play / control condition",
      "Contingent attention condition",
      "Contingent escape (demand) condition",
      "Alone condition",
    ],
    correctIndex: 0,
    explanation:
      "The play/control condition is an enriched environment with preferred items, no demands, and freely available attention — the comparison condition where problem behavior should be low.",
  },
  {
    id: 177,
    topic: "FA Variations",
    prompt:
      "Hanley's IISCA, which implements multiple contingencies simultaneously for multiply-maintained behavior, is which FA variation?",
    options: ["Synthesized FA", "Brief FA", "Latency-based FA", "Trial-based FA"],
    correctIndex: 0,
    explanation:
      "The synthesized FA (Hanley, IISCA) combines multiple contingencies simultaneously, used for multiply-maintained behavior or when behavior isn't observed in a typical FA. (Variations: Brief, Synthesized, Latency, Precursor, Trial-based, Natural setting.)",
  },
  {
    id: 178,
    topic: "Graphs",
    prompt:
      "On a graph, the horizontal (x) axis is also called the ___ and typically displays the ___.",
    options: [
      "abscissa; independent variable (time/sessions)",
      "ordinate; dependent variable",
      "origin; behavior",
      "ordinate; independent variable",
    ],
    correctIndex: 0,
    explanation:
      "The horizontal x-axis = abscissa, showing the independent variable (e.g., sessions/time). The vertical y-axis = ordinate, showing the dependent variable (behavior).",
  },
  {
    id: 179,
    topic: "Graphs",
    prompt:
      "Which graph type never decreases, resets to zero when responses exceed the y-axis limit, and shows rate by its slope (Skinner's graph)?",
    options: [
      "Cumulative record",
      "Line graph",
      "Bar graph",
      "Scatterplot",
    ],
    correctIndex: 0,
    explanation:
      "A cumulative record never decreases; the steeper the slope, the higher the rate of responding. It resets when the number of responses exceeds the y-axis upper limit.",
  },
  {
    id: 180,
    topic: "Type 1 & Type 2 Errors",
    prompt:
      "Concluding an intervention is working when it actually is NOT (a false positive) is a:",
    options: [
      "Type 1 error",
      "Type 2 error",
      "Measurement artifact",
      "Confounding variable",
    ],
    correctIndex: 0,
    explanation:
      "Type 1 error = false positive ('it's working' when it's not), more common with statistical analysis. Type 2 = false negative ('not working' when it is), more common in visual analysis.",
  },
  {
    id: 181,
    topic: "Prompts",
    prompt:
      "Response prompts are remembered with 'M.V.P.' Which set of response prompts does this represent?",
    options: [
      "Modeling, Verbal, Physical",
      "Movement, Visual, Positional",
      "Mand, Verbal, Pointing",
      "Modeling, Visual, Positional",
    ],
    correctIndex: 0,
    explanation:
      "Response prompts (M.V.P.) act on the behavior: Modeling, Verbal, Physical. Stimulus prompts (P.M.R.) act on the stimulus: Positional, Movement, Redundancy.",
  },
  {
    id: 182,
    topic: "Shaping",
    prompt: "Shaping is best defined as:",
    options: [
      "Differential reinforcement of successive approximations toward a terminal (new) behavior",
      "Reinforcing the absence of behavior over an interval",
      "Breaking a complex skill into smaller teachable steps",
      "Following an instruction stated as a rule",
    ],
    correctIndex: 0,
    explanation:
      "Shaping uses differential reinforcement of successive approximations to build a new terminal behavior. Key question: 'Did the topography change?' (across vs. within topographies).",
  },
  {
    id: 183,
    topic: "Chaining",
    prompt:
      "Teaching the LAST step of a task analysis first, with the trainer completing all prior steps, so the learner contacts reinforcement quickly, is:",
    options: [
      "Backward chaining",
      "Forward chaining",
      "Total task presentation",
      "Backward chaining with leaps ahead",
    ],
    correctIndex: 0,
    explanation:
      "Backward chaining teaches the last step first (trainer does the rest), letting the learner contact reinforcement quickly. Forward chaining teaches step 1 first; total task teaches every step each time.",
  },
  {
    id: 184,
    topic: "Task Analysis",
    prompt:
      "Breaking a complex skill into smaller teachable steps, required before chaining, is a:",
    options: [
      "Task analysis",
      "Functional analysis",
      "Preference assessment",
      "Concept analysis",
    ],
    correctIndex: 0,
    explanation:
      "A task analysis breaks a complex skill into smaller teachable steps — 'you can't chain without it.' Create it by observing a competent person, consulting an expert, or performing the task yourself.",
  },
  {
    id: 185,
    topic: "Token Economy",
    prompt: "Which three components are required for a token economy?",
    options: [
      "Target behaviors, tokens (a generalized conditioned reinforcer), and backup reinforcers",
      "An SD, a behavior, and a punisher",
      "Tokens, response cost, and a time-out room",
      "Preference assessment, FA, and IOA",
    ],
    correctIndex: 0,
    explanation:
      "A token economy needs: (1) a list of target behaviors, (2) tokens/points (a generalized conditioned reinforcer), and (3) backup reinforcers. Establishing the token exchange ratio is where errors usually occur.",
  },
];

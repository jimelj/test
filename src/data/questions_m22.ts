import type { Question } from "../types";

/**
 * BCBA practice questions for Cooper et al., Chapter 19: Equivalence-based Instruction.
 * Grounded in the chapter text. Option order is shuffled at runtime, so
 * correctIndex placement here is arbitrary.
 */
export const QUESTIONS_M22: Question[] = [
  {
    id: 21001,
    topic: "Pioneering Research on Symbolic Stimulus Relations",
    prompt: "In Sidman's early reading studies, participants were required to touch an illuminated key after the spoken sample word was presented. What is the technical term for this required response?",
    options: [
      "Observing response",
      "Conditional response",
      "Discriminative response",
      "Reflexive response"
    ],
    correctIndex: 0,
    explanation: "The response required to indicate that the sample stimulus had been noticed, which then produced the comparison stimuli, is called an observing response. This observing response was a standard feature of the matching-to-sample procedure used in Sidman's studies.",
  },
  {
    id: 21002,
    topic: "Pioneering Research on Symbolic Stimulus Relations",
    prompt: "In Sidman's matching-to-sample procedure, the participant's discrimination between comparison stimuli depends on which sample stimulus is present on a given trial. This performance is technically described as a:",
    options: [
      "Simple discrimination",
      "Identity matching performance",
      "Conditional discrimination",
      "Successive discrimination"
    ],
    correctIndex: 2,
    explanation: "A conditional discrimination is one in which discrimination between comparison stimuli is conditional upon, or depends upon, the sample stimulus present on that trial. The four-term contingency arranges this performance, with the sample serving as a conditional stimulus.",
  },
  {
    id: 21003,
    topic: "Pioneering Research on Symbolic Stimulus Relations",
    prompt: "Sidman used the alphanumeric labeling system in equivalence research. In this system, the number in a label such as 'B2' designates:",
    options: [
      "The stimulus set to which the stimulus belongs",
      "The position of the stimulus in the comparison array",
      "The number of training trials needed for mastery",
      "The potential equivalence class the stimulus belongs to"
    ],
    correctIndex: 3,
    explanation: "In the alphanumeric labeling system, the number denotes the potential equivalence class, while the letter denotes the stimulus set. So 'B2' indicates a stimulus that is a member of the second potential equivalence class within stimulus set B.",
  },
  {
    id: 21004,
    topic: "Research Foundations and Core Concepts",
    prompt: "New performances demonstrated on probe trials in the absence of reinforcement, which were never directly targeted by training, are referred to as:",
    options: [
      "Emergent stimulus relations",
      "Reflexive stimulus relations",
      "Trained conditional discriminations",
      "Contextually controlled performances"
    ],
    correctIndex: 0,
    explanation: "Consistent patterns of responding observed on probe trials in the absence of reinforcement are described as emergent stimulus relations (also called derived stimulus relations). These are novel performances that result from the training contingencies but were never directly reinforced.",
  },
  {
    id: 21005,
    topic: "Defining Properties of Equivalence",
    prompt: "Reflexivity in equivalence testing is operationally defined by which of the following probe-trial performances?",
    options: [
      "Selecting the B1 comparison when A1 is the sample, after only AB training",
      "Selecting the A1 comparison when B1 is the sample, after AB training",
      "Selecting stimulus B2 when B2 is presented as the sample, in the presence of B1, B2, and B3 as comparisons",
      "Selecting stimulus C1 when A1 is the sample, after AB and BC training"
    ],
    correctIndex: 2,
    explanation: "Reflexivity is tested by probes for generalized identity matching between each of the experimental stimuli. For example, with B2 as sample and B1, B2, and B3 as comparisons, selecting B2 demonstrates reflexivity. The mathematical statement of reflexivity is A = A.",
  },
  {
    id: 21006,
    topic: "Defining Properties of Equivalence",
    prompt: "After training AB conditional discriminations, a symmetry probe would present:",
    options: [
      "A stimuli as samples with C stimuli as comparisons",
      "B stimuli as samples with A stimuli as comparisons",
      "A stimuli as samples with A stimuli as comparisons",
      "C stimuli as samples with B stimuli as comparisons"
    ],
    correctIndex: 1,
    explanation: "The mathematical statement of symmetry holds that if A = B, then B = A. After AB training, a symmetry probe reverses the roles of the stimuli so that B stimuli are presented as samples and A stimuli serve as the comparison array.",
  },
  {
    id: 21007,
    topic: "Defining Properties of Equivalence",
    prompt: "After training AB and AC conditional discriminations, a combined test for equivalence would present:",
    options: [
      "A stimuli as samples with A stimuli as comparisons to test reflexivity",
      "A stimuli as samples with C stimuli as comparisons to test transitivity",
      "B stimuli as samples with A stimuli as comparisons to test BA symmetry",
      "B stimuli as samples with C stimuli as comparisons, evaluating both symmetry and transitivity simultaneously"
    ],
    correctIndex: 3,
    explanation: "A combined test for equivalence evaluates both symmetry and transitivity simultaneously. After AB and AC training, presenting B stimuli as samples with C stimuli as comparisons (or C as samples with B as comparisons) tests whether B = C and C = B hold, satisfying both properties at once.",
  },
  {
    id: 21008,
    topic: "Defining Properties of Equivalence",
    prompt: "In Sidman's early reading studies, participants who had been taught spoken word-to-picture (AB) and spoken word-to-written word (AC) relations subsequently named the written words aloud without prior oral-reading training. This emergent oral reading was evidence of which equivalence property?",
    options: [
      "Transitivity",
      "Symmetry",
      "Reflexivity",
      "Transfer of function"
    ],
    correctIndex: 1,
    explanation: "Oral reading of written words (naming the C stimuli after hearing the spoken word in training) represents a symmetrical reversal: the boys had been trained to select written words given spoken words (AC), and naming the written word is evidence of the reverse, CA symmetry.",
  },
  {
    id: 21009,
    topic: "Research Foundations and Core Concepts",
    prompt: "After training 20 AB and 20 AC conditional discriminations, how many additional emergent relations can be described (excluding the 40 trained relations themselves)?",
    options: [
      "20 total emergent relations",
      "80 total emergent relations",
      "140 total emergent relations",
      "180 total emergent relations"
    ],
    correctIndex: 2,
    explanation: "From 20 AB and 20 AC trained relations, the emergent performances include 60 reflexivity relations, 40 symmetry relations, and 40 combined equivalence relations, totaling 140 additional emergent discriminated operant units. Adding the 40 trained relations yields a grand total of 180.",
  },
  {
    id: 21010,
    topic: "Class Expansion and Class Merger",
    prompt: "In class expansion, a new member is added to a demonstrated equivalence class by:",
    options: [
      "Teaching a new conditional discrimination between the novel stimulus and one existing class member",
      "Testing reflexivity probes across all existing class members",
      "Combining two independent equivalence classes through a bridging conditional discrimination",
      "Presenting all probe types simultaneously without any new training"
    ],
    correctIndex: 0,
    explanation: "Class expansion is achieved by teaching a new conditional discrimination involving one existing class member and a novel stimulus set. After training this new relation, equivalence-consistent responding on probe trials involving the new and existing members verifies class expansion.",
  },
  {
    id: 21011,
    topic: "Class Expansion and Class Merger",
    prompt: "Class merger describes an outcome in which:",
    options: [
      "Previously independent equivalence classes are combined to produce a larger class by teaching an interrelated conditional discrimination",
      "A single equivalence class grows by adding one new member through a new conditional discrimination",
      "A trained conditional discrimination is reversed to test for symmetry",
      "Probe trials presented under extinction confirm reflexivity for all class members"
    ],
    correctIndex: 0,
    explanation: "Class merger occurs when two or more independent equivalence classes are combined into a larger class by teaching a new conditional discrimination that links a member from each class. For example, teaching a CE conditional discrimination can merge the A1B1C1 and D1E1F1 classes into a single six-member class.",
  },
  {
    id: 21012,
    topic: "Class Expansion and Class Merger",
    prompt: "When teaching one additional conditional discrimination (AD) to a class that already has three members (A, B, C), how many new emergent relations are created for each class?",
    options: [
      "Two new relations",
      "Three new relations",
      "Four new relations",
      "Six new relations"
    ],
    correctIndex: 3,
    explanation: "Teaching one additional conditional discrimination (AD) to an established three-member class creates six new emergent relations for each class: AD, DA, BD, DB, CD, and DC. This illustrates the dramatic impact that a small amount of additional teaching can have.",
  },
  {
    id: 21013,
    topic: "Transfer of Function",
    prompt: "Transfer of function refers to which of the following outcomes?",
    options: [
      "A new stimulus modality replacing an old one as the sample in a conditional discrimination",
      "The process of reversing sample and comparison functions on symmetry probe trials",
      "The finding that teaching a new function for one member of an equivalence class results in that same function holding for all members of the class",
      "Combining independent equivalence classes through a bridging conditional discrimination"
    ],
    correctIndex: 2,
    explanation: "Transfer of function refers to the finding that when a new function is established for one member of an equivalence class (for example, a reinforcing or eliciting function), that function transfers to all other members of the same class without additional direct training.",
  },
  {
    id: 21014,
    topic: "Transfer of Function",
    prompt: "A behavior analyst establishes that choosing a quarter over a dime produces more candy. Without any further teaching, the analyst finds that students also prefer every other 'quarter class' stimulus over the corresponding 'dime class' stimulus. This result is best described as:",
    options: [
      "Class merger",
      "Transfer of function",
      "Class expansion",
      "Contextual control"
    ],
    correctIndex: 1,
    explanation: "Transfer of function is demonstrated here: the preference function established for B2 (the quarter) over B1 (the dime) transferred to all other class members, so that A2, C2, D2, E2, and F2 were each preferred over the corresponding dime-class member without any direct training of that preference.",
  },
  {
    id: 21015,
    topic: "Contextual Control",
    prompt: "Contextual control over equivalence classes requires which contingency arrangement?",
    options: [
      "A three-term contingency with a sample and one comparison",
      "A four-term contingency with conditional control by the sample",
      "A five-term contingency in which match-to-sample performances are brought under the control of an additional antecedent stimulus",
      "A two-term contingency with a discriminative stimulus and a response"
    ],
    correctIndex: 2,
    explanation: "Contextual control over equivalence classes results from a five-term contingency, where the match-to-sample performances described in standard EBI are brought under the control of an additional antecedent stimulus (the context). The correct comparison thus depends on both the sample and the context.",
  },
  {
    id: 21016,
    topic: "Contextual Control",
    prompt: "A student correctly matches the Rolling Stones to Fairport Convention when the context is 'Nationality' but matches the Rolling Stones to The Doors when the context is 'Genre.' This illustrates:",
    options: [
      "Class expansion, because new members are being added to the classes",
      "Symmetry, because the sample and comparison roles are reversible",
      "Delayed emergence, because the equivalence performance took time to appear",
      "Contextual control, because the same stimulus belongs to different classes depending on the context"
    ],
    correctIndex: 3,
    explanation: "This scenario illustrates contextual control: the same stimulus (the Rolling Stones) is a member of different equivalence classes depending on the contextual stimulus in place. This is a hallmark feature of contextually controlled equivalence classes.",
  },
  {
    id: 21017,
    topic: "Designing Equivalence-based Instruction",
    prompt: "A teacher uses only two comparison stimuli per trial when beginning conditional discrimination training. The main concern with this approach is that:",
    options: [
      "It allows accurate selections to be made by rejecting one comparison (Type R control), which may not match the teacher's target relation",
      "The procedure makes reflexivity probes impossible to administer",
      "The procedure requires too many training trials to achieve mastery",
      "Symmetry probes cannot be presented without at least three comparisons per trial"
    ],
    correctIndex: 0,
    explanation: "With only two comparisons, a participant can earn reinforcers by rejecting the incorrect comparison (Type R or Reject control) rather than selecting the correct one (Type S control). If Type R control is established, the resultant equivalence classes will differ from those targeted by the teacher, because the reinforced relation is between the sample and the incorrect comparison.",
  },
  {
    id: 21018,
    topic: "Designing Equivalence-based Instruction",
    prompt: "When starting conditional discrimination training, at least three comparison stimuli per trial are generally recommended primarily in order to:",
    options: [
      "Increase the speed of data collection during probe trials",
      "Decrease the likelihood of exclusive Type R (Reject) stimulus control developing",
      "Ensure that the sample stimulus is always presented in the center position",
      "Allow for identity matching to occur naturally"
    ],
    correctIndex: 1,
    explanation: "Using more than two comparisons reduces the likelihood of exclusive Type R control because more rejections are required to earn a reinforcer (two rejections instead of one with a three-choice array), while only a single Type S (Select) relation is required. This helps ensure the targeted form of stimulus control is established.",
  },
  {
    id: 21019,
    topic: "Designing Equivalence-based Instruction",
    prompt: "In a training trial block, each sample type should appear the same number of times and the S+ comparison should appear in each position on an equal number of trials. This practice prevents:",
    options: [
      "Class merger from occurring before the second conditional discrimination is trained",
      "Probe trials from being discriminated from training trials",
      "Delayed emergence of equivalence classes",
      "Comparison position biases from being inadvertently reinforced and competing with sample control"
    ],
    correctIndex: 3,
    explanation: "Counterbalancing the position of stimuli, including the S+ comparison, prevents participants from developing a preference for a particular position, which would represent a competing source of stimulus control. The goal is to ensure that comparison selections are controlled by the sample rather than by stimulus location.",
  },
  {
    id: 21020,
    topic: "Training Structures",
    prompt: "In one-to-many (sample-as-node) training, the node is:",
    options: [
      "The comparison stimulus set that appears in both trained conditional discriminations",
      "A novel stimulus set introduced only during probe trials",
      "The sample stimulus set that appears in both trained conditional discriminations",
      "The comparison set that is trained last"
    ],
    correctIndex: 2,
    explanation: "In one-to-many or sample-as-node training, one set of stimuli serves as the sample in both conditional discriminations (for example, AB and AC training). This sample stimulus set is the node, providing the common basis for emergent relations between the B and C stimuli.",
  },
  {
    id: 21021,
    topic: "Training Structures",
    prompt: "Research comparing training structures has found that which structure most consistently underperforms the others in generating equivalence, especially as the number of trained relations increases?",
    options: [
      "One-to-many (sample-as-node) training",
      "Many-to-one (comparison-as-node) training",
      "Linear series training",
      "Mixed training structures with multiple nodal stimuli"
    ],
    correctIndex: 2,
    explanation: "Linear series training, in which comparison stimuli from one conditional discrimination serve as sample stimuli in the next (for example, AB and BC training), has consistently underperformed compared to one-to-many and many-to-one structures in generating equivalence, particularly as the number of trained conditional discriminations increases.",
  },
  {
    id: 21022,
    topic: "Training Structures",
    prompt: "In many-to-one (comparison-as-node) training, which stimulus set serves as the node?",
    options: [
      "The sample stimulus set shared across trained conditional discriminations",
      "A novel stimulus set introduced only during probe trials",
      "The first stimulus set presented during training",
      "The comparison stimulus set shared across trained conditional discriminations"
    ],
    correctIndex: 3,
    explanation: "In many-to-one or comparison-as-node training, multiple sets of sample stimuli are trained with a single set of comparisons. The comparison stimulus set is held in common across the trained conditional discriminations and thus serves as the node.",
  },
  {
    id: 21023,
    topic: "Designing Equivalence-based Instruction",
    prompt: "Mastery criteria in EBI training are typically set at high accuracy percentages (for example, 90% or better) because intermediate accuracy levels (for example, 60% to 80%):",
    options: [
      "Are indicative of multiple sources of stimulus control that do not guarantee a clean conditional discrimination",
      "Are too slow to measure reliably in applied settings",
      "Indicate that delayed emergence has already begun",
      "Confirm that contextual control has been established"
    ],
    correctIndex: 0,
    explanation: "Intermediate accuracy scores such as 60% to 80% are indicative of multiple sources of stimulus control simultaneously influencing behavior. Strong and consistent performance at high accuracy levels is necessary to ensure that the conditional discrimination is established cleanly before probe tests are introduced.",
  },
  {
    id: 21024,
    topic: "Designing Equivalence-based Instruction",
    prompt: "Before presenting probe trials in extinction, many EBI programs first thin the reinforcement schedule across training trials in a series of steps. The primary purpose of this practice is to:",
    options: [
      "Accelerate the acquisition of the second conditional discrimination",
      "Ensure that reflexivity probes are not discriminated from symmetry probes",
      "Reduce the total number of training trials needed to reach mastery",
      "Prepare learners so that the absence of reinforcers during probe trials does not cause variability in comparison selections"
    ],
    correctIndex: 3,
    explanation: "Training to mastery with intermittent reinforcement helps ensure that responding is maintained in the absence of trial-by-trial consequences, because learners have already experienced reinforcement on only a portion of trials. Without this preparation, the sudden absence of reinforcers on probe trials can produce variability.",
  },
  {
    id: 21025,
    topic: "Testing Protocols",
    prompt: "In massed testing, the probe-trial block consists of probe trials only. What is a key disadvantage of this approach when equivalence outcomes are not observed?",
    options: [
      "It makes it impossible to determine whether the prerequisite baseline conditional discriminations have been maintained",
      "It prevents delayed emergence from occurring across repeated test administrations",
      "It requires that reflexivity probes always be presented before symmetry probes",
      "It prevents contextual control from being evaluated in the same session"
    ],
    correctIndex: 0,
    explanation: "When massed testing reveals no equivalence and baseline trial types are absent from the block, it is not possible to determine whether the prerequisite conditional discriminations are still intact. If the trained baselines have weakened, equivalence would not be expected, and this possibility cannot be evaluated or remedied without baseline trials.",
  },
  {
    id: 21026,
    topic: "Testing Protocols",
    prompt: "The simple-to-complex testing protocol introduces probe types in which order?",
    options: [
      "Reflexivity, then symmetry, then transitivity and combined tests",
      "Combined equivalence tests first, followed by transitivity and then symmetry",
      "Symmetry first, followed by transitivity (if relevant), then combined tests for equivalence",
      "Transitivity first, then reflexivity, then symmetry"
    ],
    correctIndex: 2,
    explanation: "The simple-to-complex testing protocol introduces probe types sequentially: symmetry first, followed by transitivity (if relevant), and then combined tests for equivalence. Probe types requiring fewer nodes are also presented before those requiring more nodes.",
  },
  {
    id: 21027,
    topic: "Testing Protocols",
    prompt: "Delayed emergence refers to the observation that:",
    options: [
      "Probe performances become increasingly class-consistent across successive test administrations despite no reinforcement for probe responses",
      "Some participants fail to demonstrate equivalence even after extensive training",
      "Mastery of the baseline conditional discriminations takes longer than expected",
      "The first presentation of probe trials always produces chance-level performance"
    ],
    correctIndex: 0,
    explanation: "Delayed emergence describes the finding that probe responses begin at chance or below-criterion levels and gradually improve toward perfect or near-perfect class consistency across repeated test administrations, even though no consequences are programmed for probe responses.",
  },
  {
    id: 21028,
    topic: "Procedural Variations: Compound Stimuli",
    prompt: "When a compound stimulus (for example, a printed word paired with a picture) is used as the sample in a matching-to-sample procedure, research has shown that:",
    options: [
      "Only the dominant component of the compound can become an equivalence-class member",
      "The compound must always include an auditory and a visual component",
      "The compound sample prevents contextual control from developing",
      "Each component of the compound can come to function as an independent equivalence-class member"
    ],
    correctIndex: 3,
    explanation: "EBI programs using compound samples have demonstrated that each component of the compound can come to function as an independent equivalence-class member. This means that a given amount of training results in many more emergent relations and larger equivalence classes than standard training.",
  },
  {
    id: 21029,
    topic: "Procedural Variations: Class-specific Reinforcement",
    prompt: "In class-specific reinforcement (also called differential outcomes), the type of consequence delivered is conditional on which antecedent?",
    options: [
      "The number of training trials completed",
      "The position of the S+ comparison in the display",
      "Both the sample stimulus and the intended equivalence class of the correct comparison",
      "The type of probe trial being presented"
    ],
    correctIndex: 2,
    explanation: "In class-specific reinforcement, not only is the correct comparison conditional on the sample stimulus, but the type of consequence delivered is also conditional on that sample and class. For example, selecting B1 given A1 produces Reinforcer 1, while selecting B2 given A2 produces a different Reinforcer 2.",
  },
  {
    id: 21030,
    topic: "Procedural Variations: Class-specific Reinforcement",
    prompt: "One significant advantage of class-specific reinforcement procedures for EBI is that the class-specific reinforcers themselves:",
    options: [
      "Can become members of the equivalence classes, thereby increasing the number of class members established by a given amount of training",
      "Eliminate the need for any probe trials to evaluate equivalence-class formation",
      "Allow reflexivity to be inferred without direct testing",
      "Replace the node in linear series training structures"
    ],
    correctIndex: 0,
    explanation: "A key finding with class-specific reinforcement is that the class-specific consequences themselves become members of the equivalence classes. This increases the number of class members that can be added by teaching a single conditional discrimination, amplifying the generativity of EBI.",
  },
  {
    id: 21031,
    topic: "Procedural Variations: Three-term Contingency Training",
    prompt: "The use of simple discrimination (three-term contingency) training to produce equivalence classes is appealing for some learner populations because:",
    options: [
      "It requires more comparisons per trial than standard matching-to-sample",
      "Simple discriminations are typically more easily acquired than conditional discriminations, and yet can produce equivalence-class formation",
      "It eliminates the need for any reinforcement during training",
      "Simple discrimination training always produces larger equivalence classes than matching-to-sample"
    ],
    correctIndex: 1,
    explanation: "Simple discrimination training, in which a single stimulus is designated S+ and others are S-, is typically mastered more easily than arbitrary conditional discrimination training. Research has demonstrated that simple discrimination training can produce equivalence-class formation, making it a useful alternative for learners who struggle with conditional discriminations.",
  },
  {
    id: 21032,
    topic: "Instructional Programming",
    prompt: "Exclusion training exploits the finding that a novel comparison stimulus will be selected over a known one in the presence of a novel sample. Once a new relation is established through exclusion, subsequent training demonstrates that:",
    options: [
      "Type R (reject) control permanently replaces Type S (select) control",
      "The novel stimulus can never become a sample in subsequent conditional discriminations",
      "Exclusion effects only occur when three or fewer comparison stimuli are used",
      "Conditional control by the new sample is maintained when the new relation is presented with other samples and comparisons from the training set"
    ],
    correctIndex: 3,
    explanation: "Studies using exclusion have consistently demonstrated that once a new conditional relation is established through exclusion, Type S (select) control is demonstrated when the new relation is subsequently presented alongside other sample-comparison combinations. Exclusion can thus build the baseline arbitrary conditional discriminations needed for equivalence outcomes.",
  },
  {
    id: 21033,
    topic: "Instructional Programming",
    prompt: "Stimulus-control shaping approaches to teaching arbitrary conditional discriminations typically begin with:",
    options: [
      "Identity matching-to-sample as a starting point, then gradually shifting to arbitrary matching",
      "Arbitrary matching with unfamiliar abstract line drawings",
      "A five-term contingency that introduces contextual control from the start",
      "Exclusion training with two known stimuli and one novel stimulus"
    ],
    correctIndex: 0,
    explanation: "Stimulus-control shaping procedures begin with identity matching-to-sample, which is easily acquired, and then gradually shift toward an arbitrary conditional discrimination by modifying the sample stimulus in small steps across training phases. This fading approach reduces errors and facilitates acquisition for participants who struggle with arbitrary matching.",
  },
  {
    id: 21034,
    topic: "Instructional Programming",
    prompt: "The component simple discriminations approach to EBI pretraining first establishes which type of discrimination with the future comparison stimuli?",
    options: [
      "Successive discrimination among the sample stimuli",
      "Simultaneous discrimination among the future comparison stimuli",
      "Arbitrary conditional discrimination using all stimuli at once",
      "Identity matching between each comparison and a corresponding sample"
    ],
    correctIndex: 1,
    explanation: "The component simple discriminations approach first establishes simultaneous discrimination between the stimuli that will serve as comparisons, then establishes successive discrimination between the stimuli that will serve as samples, and finally introduces conditional discrimination trials, gradually intermixing them until full conditional control is achieved.",
  },
  {
    id: 21035,
    topic: "Observing Responses",
    prompt: "When establishing control by the sample stimulus proves difficult, one effective strategy is to require a unique response for each sample stimulus. This approach is beneficial because it:",
    options: [
      "Ensures the correct comparison always appears in the same position",
      "Eliminates the need to counterbalance comparison positions",
      "Allows probe trials to be presented before mastery of the baseline is achieved",
      "Requires successive discrimination between the sample stimuli that are presented on different trials"
    ],
    correctIndex: 3,
    explanation: "Requiring a unique response (for example, a different name or gesture) for each sample stimulus demands that participants engage in successive discrimination between the samples that are presented across trials. This directly targets sample control and can facilitate acquisition of the conditional discrimination.",
  },
  {
    id: 21036,
    topic: "Applications: Language Skills",
    prompt: "A behavior analyst teaches a child to match picture cards to spoken word names (AB training) and printed word cards to the same spoken names (AC training). After successful training, the child accurately matches pictures to printed words without additional teaching. This emergent picture-to-word matching reflects:",
    options: [
      "Contextual control by the picture",
      "Class-specific reinforcement producing transfer of function",
      "Delayed emergence of reflexivity",
      "Equivalence-class formation with the spoken word serving as the node"
    ],
    correctIndex: 3,
    explanation: "The emergent picture-to-printed word matching (BC) demonstrates equivalence-class formation: the spoken word served as the node in one-to-many (sample-as-node) training, and the untrained BC relation emerged as a result of the AB and AC trained relations.",
  },
  {
    id: 21037,
    topic: "Applications: Language Skills",
    prompt: "Recombinative generalization in equivalence-based reading programs refers to the learner's ability to:",
    options: [
      "Produce or respond accurately to novel stimulus compounds formed from recombinations of trained minimal units, such as syllables or letters",
      "Match any stimulus from one equivalence class to any stimulus from a different class",
      "Transfer a function established for one class member to all other class members",
      "Reverse sample and comparison functions across any trained conditional discrimination"
    ],
    correctIndex: 0,
    explanation: "Recombinative generalization occurs when individual units (syllables, letters) that were components of trained compound stimuli come to exert stimulus control on their own, allowing accurate responding to novel combinations of those units. This is essential for flexible reading and spelling skills.",
  },
  {
    id: 21038,
    topic: "Applications: Number Skills",
    prompt: "In an EBI program targeting number skills, a child learns to match spoken number names to quantities (AB) and to numerals (AC). Probe trials show the child accurately matches quantities to numerals. This result supports an interpretation of:",
    options: [
      "Transfer of function from spoken names to quantities",
      "Class-specific reinforcement effects on numeral selection",
      "Number comprehension based on equivalence-class formation",
      "Identity matching that was present before training"
    ],
    correctIndex: 2,
    explanation: "Emergent matching of quantities and numerals (BC probe), which follows AB and AC training, supports an interpretation of number comprehension: the child demonstrates that quantities and numerals are interchangeable class members, reflecting understanding of their symbolic relationship.",
  },
  {
    id: 21039,
    topic: "Applications: College Classroom",
    prompt: "Fienup and Critchfield (2010) used equivalence-based instruction to teach college students concepts of inferential statistics. The study incorporated contextual control because:",
    options: [
      "The A stimuli served as contextual stimuli controlling which D-E and D-F matches were correct during training and testing",
      "All probe trials were presented in extinction to prevent reinforcement from influencing the results",
      "The one-to-many training structure was used with the D stimulus set as the node",
      "Delayed emergence was used to improve initial test performances"
    ],
    correctIndex: 0,
    explanation: "In Fienup and Critchfield's statistical-concepts study, Lesson 3 trained contextual control with the A stimuli (low p value or high p value) serving as contextual stimuli that determined which D-E and D-F matches were reinforced. The critical test was whether this contextual control would transfer to the B and C stimuli.",
  },
  {
    id: 21040,
    topic: "Applications: Adult Clinical Populations",
    prompt: "In a study by Cowley et al. (1992) addressing adults with brain injury who could not link therapist names to faces, posttest results revealed that:",
    options: [
      "Only the trained conditional discrimination improved; other relations remained at chance levels",
      "Spoken names, written names, and faces became matched together in any combination, indicating equivalence-class formation",
      "Participants learned to match faces to photos but not to spoken or written names",
      "Class-specific reinforcement was required to produce the emergent name-face relations"
    ],
    correctIndex: 1,
    explanation: "In the Cowley et al. study, one trained conditional discrimination was used, and posttest results revealed equivalence-class formation for all three men: spoken names, written names, and faces were matched together in any combination. Two of the men who received the test also successfully provided oral names for therapists' faces.",
  },
  {
    id: 21041,
    topic: "Research Foundations and Core Concepts",
    prompt: "A key argument for the importance of equivalence research to applied behavior analysis is its generativity. This means that EBI:",
    options: [
      "Can only be used with participants who already possess strong verbal skills",
      "Requires teaching all possible stimulus relations directly to be effective",
      "Can produce an extensive and predictable network of new relations that were not directly targeted by teaching",
      "Always requires computerized presentation to maintain procedural integrity"
    ],
    correctIndex: 2,
    explanation: "Generativity is a defining characteristic of EBI: a small amount of explicit instruction can yield an extensive and predictable network of new relations that were never directly targeted by teaching. This 'bang for the buck' quality makes EBI especially relevant for efficient and effective educational strategies.",
  },
  {
    id: 21042,
    topic: "Naming Theory",
    prompt: "According to naming theory, naming is defined as a technical term for:",
    options: [
      "A conditional discrimination in which spoken words serve as sample stimuli",
      "Simply producing a vocal label for a visible stimulus",
      "Any emergent relation produced by the reinforcement contingency in a four-term arrangement",
      "A bidirectional higher-order unit involving both speaker and listener behavior with respect to a given object or event"
    ],
    correctIndex: 3,
    explanation: "In naming theory, naming is a higher-order operant in which an individual engages in bidirectional speaker and listener behavior with respect to a given object or event. The complete cycle includes seeing the object, tacting it, hearing oneself say the name, and then exhibiting listener behavior. This bidirectional cycle is the technical requirement.",
  },
  {
    id: 21043,
    topic: "Naming Theory",
    prompt: "Naming theory predicts that once the naming operant is fully established, teaching only one component of the naming cycle for a new stimulus (for example, teaching a child to select a new toy given its novel name) should be sufficient to:",
    options: [
      "Produce the full naming relation for that stimulus without additional training",
      "Establish a conditional discrimination but not a full equivalence class",
      "Require the same extended multiple-exemplar training used to establish the original naming operant",
      "Produce contextual control over the new stimulus"
    ],
    correctIndex: 0,
    explanation: "Once the higher-order naming operant is fully established through training multiple exemplars of each component, a new naming instance requires teaching only one component of the cycle (for example, listener training). The full naming relation, including tacting and listener behavior in both directions, should emerge without additional direct teaching.",
  },
  {
    id: 21044,
    topic: "Relational Frame Theory",
    prompt: "In relational frame theory, 'framing' is characterized as:",
    options: [
      "Directly reinforcing all possible relations between stimuli in a training set",
      "Presenting probe trials under extinction to assess emergent stimulus relations",
      "Teaching identity matching as a prerequisite to arbitrary matching",
      "Responding to one stimulus in terms of another, established through multiple-exemplar training"
    ],
    correctIndex: 3,
    explanation: "In RFT, framing is the key higher-order operant and is characterized as responding to one stimulus in terms of another. Framing is viewed as learned behavior established through multiple-exemplar training with many different examples of a given relation.",
  },
  {
    id: 21045,
    topic: "Relational Frame Theory",
    prompt: "In relational frame theory, the property equivalent to transitivity in equivalence theory is referred to as:",
    options: [
      "Mutual entailment",
      "Transformation of function",
      "Combinatorial entailment",
      "Contextual framing"
    ],
    correctIndex: 2,
    explanation: "In RFT terminology, combinatorial entailment captures the idea that if A relates to B and B relates to C, then A also relates to C (and C to A). For equivalence relations specifically, this corresponds to what is called transitivity in Sidman's framework.",
  },
  {
    id: 21046,
    topic: "Relational Frame Theory",
    prompt: "RFT and naming theory share one key feature that distinguishes both from Sidman's theoretical position. That shared feature is the view that:",
    options: [
      "The reinforcement contingency alone directly produces equivalence performances in all participants",
      "Emergent or derived responding is learned behavior that requires a specific prior learning history, rather than being a direct outcome of any reinforcement contingency",
      "Multiple-exemplar training is unnecessary for participants who already have strong verbal repertoires",
      "Equivalence is the only type of relational responding relevant to complex human behavior"
    ],
    correctIndex: 1,
    explanation: "Both naming theory and RFT hold that emergent responding is learned behavior requiring a specific prior training history. This distinguishes them from Sidman's view that equivalence is a direct outcome of reinforcement contingencies and does not require a special learning history.",
  },
  {
    id: 21047,
    topic: "Applications: Functional Skills",
    prompt: "In a study teaching grocery-shopping skills to participants with mild intellectual disabilities, EBI was used to establish equivalence classes involving spoken words, written words, and photographs of different stores. The main purpose of the equivalence training was to:",
    options: [
      "Replace multiple-exemplar training entirely with a single-instance training procedure",
      "Promote generalization of the shopping task chain to a novel grocery store, comparable to training across multiple stores",
      "Teach participants to match store photographs to price signs",
      "Establish contextual control over the shopping task using a five-term contingency"
    ],
    correctIndex: 1,
    explanation: "Taylor and O'Reilly (2000) used EBI with photographs of supermarket settings as class members. The goal was to promote generalization of the trained task chain to a novel grocery store. EBI produced the same positive impact on generalization as multiple-exemplar training across three actual store locations.",
  },
  {
    id: 21048,
    topic: "Defining Properties of Equivalence",
    prompt: "Which mathematical property is operationally defined by testing whether each experimental stimulus functions as equal to itself in a generalized identity matching-to-sample task?",
    options: [
      "Symmetry",
      "Transitivity",
      "Reflexivity",
      "Combinatorial entailment"
    ],
    correctIndex: 2,
    explanation: "Reflexivity is operationally defined by generalized identity matching: when stimulus B2 is presented as a sample with B1, B2, and B3 as comparisons, consistently selecting B2 indicates each stimulus functions as equal to itself. The mathematical statement is A = A.",
  },
  {
    id: 21049,
    topic: "Applications: Adult Clinical Populations",
    prompt: "Research on equivalence-class formation and gerontology has found which of the following?",
    options: [
      "Older adults consistently outperform young adults on equivalence probe tests",
      "Age is not related to the likelihood of demonstrating equivalence-class formation",
      "Older participants are less likely to demonstrate class formation than young adults, and deficits may appear before standard cognitive assessment scores indicate impairment",
      "Alzheimer's disease prevents identity matching but does not affect equivalence-class formation"
    ],
    correctIndex: 2,
    explanation: "Research has shown that older participants are less likely to demonstrate equivalence-class formation than young adults, and a correlation between class formation and MMSE scores has been noted. Notably, deficits in equivalence-class formation appeared in some individuals even with MMSE scores above the threshold typically indicative of cognitive difficulties.",
  },
  {
    id: 21050,
    topic: "Research Foundations and Core Concepts",
    prompt: "The translational research story of stimulus equivalence is notable because, unlike many areas of behavior analysis, the core phenomenon was:",
    options: [
      "First discovered in basic animal laboratory research and then extended to human applications",
      "Developed from theoretical accounts of language before any empirical data were collected",
      "First reported as an incidental finding in studies of operant extinction",
      "Initially identified in an applied reading-instruction context, which then demanded basic laboratory follow-up"
    ],
    correctIndex: 3,
    explanation: "The equivalence research story is especially notable in the translational research context because the core phenomenon was brought to light first in an application, reading instruction with individuals with severe intellectual disabilities, which then demanded laboratory follow-up. This inverted the more typical path of basic-to-applied translation.",
  },
];

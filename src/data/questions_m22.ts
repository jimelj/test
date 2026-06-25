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
];

import type { Question } from "../types";

/**
 * BCBA practice questions for Cooper et al., Chapter 21: Imitation, Modeling, and Observational Learning.
 * Grounded in the chapter text. Option order is shuffled at runtime, so
 * correctIndex placement here is arbitrary.
 */
export const QUESTIONS_M24: Question[] = [
  {
    id: 23001,
    topic: "Imitation Defined",
    prompt: "Which of the following is NOT one of the four criteria required for a behavior to qualify as imitation?",
    options: [
      "The imitative behavior is occasioned by another person's model or symbolic representation of the behavior.",
      "The imitative behavior has formal similarity with the model.",
      "The imitator has a prior reinforcement history with the modeled behavior.",
      "The model is the primary controlling variable for the imitative behavior."
    ],
    correctIndex: 2,
    explanation: "Imitation requires four criteria: the behavior is occasioned by a model, has formal similarity with the model, follows the model closely in time, and the model is the primary controlling variable. A prior reinforcement history with the modeled behavior would indicate a discriminated operant, not true imitation.",
  },
  {
    id: 23002,
    topic: "Formal Similarity",
    prompt: "Formal similarity between a model and an imitative response means that the two behaviors physically resemble each other and are in the same mode. Which of the following is the best example of formal similarity?",
    options: [
      "A student earns a token whenever the teacher raises her hand, even though the student does not raise her own hand.",
      "A child taps a food tray with his hand immediately after observing his mother tap the same tray with her hand.",
      "A learner verbally labels an object after the teacher physically points to it.",
      "A student produces the correct answer to a math problem after watching a peer solve a similar problem."
    ],
    correctIndex: 1,
    explanation: "Formal similarity occurs when the model's and the imitator's behavior physically resemble each other and are in the same mode. The child tapping the tray after the mother taps it illustrates this: both behaviors look alike (tapping) and are in the same mode (motor).",
  },
  {
    id: 23003,
    topic: "Model as Primary Controlling Variable",
    prompt: "Holth (2003) explained that a dog trained to sit when its owner sits and spin when its owner spins may not truly be imitating. The only way to determine whether the dog is truly imitating is to:",
    options: [
      "Introduce novel behaviors and observe whether the dog 'does the same' without prior training on those behaviors.",
      "Measure the topographic similarity between the dog's responses and the owner's demonstrations.",
      "Increase the reinforcement delivered for correct matching responses over many training sessions.",
      "Test whether the dog responds the same way to multiple different owners."
    ],
    correctIndex: 0,
    explanation: "The source of control can be determined only by introducing novel exemplars. In the absence of a demonstration that the dog responds to novel performances by 'doing the same,' there is no evidence that similarity to the owner's behavior controls the dog's response form.",
  },
  {
    id: 23004,
    topic: "Models",
    prompt: "A yoga instructor demonstrates the adho mukha svanasana pose for a class before the students attempt it. This is an example of:",
    options: [
      "An unplanned model occurring naturally in a social environment.",
      "A symbolic model delivered through video technology.",
      "A planned live model that shows learners exactly what to do.",
      "A discriminated operant with a history of reinforcement."
    ],
    correctIndex: 2,
    explanation: "Planned models are prearranged demonstrations of behavior that show the learner exactly what to do. A yoga instructor deliberately demonstrating a pose before students attempt it is a planned live model.",
  },
  {
    id: 23005,
    topic: "Temporal Relationship",
    prompt: "A student fingerspells a word correctly in class when prompted by a peer model. Later that evening, the student's parent asks 'What did you learn today?' and the student fingerspells the same word. The evening fingerspelling is best explained as:",
    options: [
      "Delayed imitation, because the original model still controls the response.",
      "Generalized imitation, because the response occurred in a new setting.",
      "A discriminated operant or motivated response, not true imitation, because the original model is no longer present.",
      "Formal similarity without a controlling relation, meaning the behavior is automatic."
    ],
    correctIndex: 2,
    explanation: "When a response with the same topography as a prior imitation occurs in the absence of the model, it is not imitative behavior. The parent's question functions as a motivating operation that increases behavior that has produced relevant reinforcement, which is functionally different from an antecedent model evoking an imitative response.",
  },
  {
    id: 23006,
    topic: "Imitation vs. Discriminated Operant",
    prompt: "Two guitarists practice a riff together repeatedly until the second guitarist can play it perfectly. Later on stage, the lead guitarist plays the riff and the second guitarist immediately reproduces it. This is best classified as:",
    options: [
      "True imitation, because formal similarity is present.",
      "True imitation, because a brief latency exists between the model and the response.",
      "A discriminated operant with a history of reinforcement, not imitation.",
      "Generalized imitation, because the setting is different from practice."
    ],
    correctIndex: 2,
    explanation: "When a behavior that replicates a model's topography has a prior history of reinforcement, it is a discriminated operant, not imitation. The two musicians practiced the riff together until mastery, so the second guitarist's response has a direct reinforcement history with that specific behavior.",
  },
  {
    id: 23007,
    topic: "Generalized Imitation",
    prompt: "After extensive imitation training, a child begins to imitate novel models that were never specifically trained or reinforced, doing so across different settings. This outcome is called:",
    options: [
      "Generalized imitation.",
      "Delayed imitation.",
      "Spontaneous recovery.",
      "Stimulus discrimination."
    ],
    correctIndex: 0,
    explanation: "Generalized imitation occurs when a learner imitates a wide variety of unprompted, untrained, and non-reinforced modeled behaviors across different settings and situations. It can be considered a higher-order response class in which participants imitate novel models without training.",
  },
  {
    id: 23008,
    topic: "Imitation Training",
    prompt: "Which of the following BEST summarizes the four main findings of Baer, Peterson, and Sherman (1967)?",
    options: [
      "Physical guidance alone is sufficient to teach imitation; reinforcement is optional once guidance is faded.",
      "Children who lacked imitation learned to imitate through shaping and reinforcement; novel models were imitated without direct training; a learning-to-learn effect occurred; and the repertoire maintained as long as some responses produced reinforcement.",
      "Imitation training works only for motor behaviors; vocal imitation requires a separate protocol.",
      "Once imitation is trained, it is maintained indefinitely even after all reinforcement is removed."
    ],
    correctIndex: 1,
    explanation: "The results of Baer et al. (1967) showed: (a) non-imitative children learned to imitate using shaping, cues, guidance, and reinforcement; (b) reinforced imitations led to imitation of novel models without specific reinforcement; (c) participants showed a learning-to-learn effect; and (d) the repertoire maintained as long as reinforcement was contingent on at least some imitative responses.",
  },
  {
    id: 23009,
    topic: "Imitation Training",
    prompt: "In the Baer et al. (1967) study, when reinforcement was placed on a DRO schedule (reinforcement for any behavior other than imitation), what happened to the participants' imitative behavior?",
    options: [
      "Both previously reinforced and never-reinforced probe imitations decreased markedly.",
      "Imitation maintained at the same high level because of the strong training history.",
      "Only the novel probe imitations decreased; directly reinforced imitations maintained.",
      "Imitation increased because the DRO schedule provided more overall reinforcement."
    ],
    correctIndex: 0,
    explanation: "When reinforcement was no longer contingent upon imitative behavior (DRO condition), both the previously reinforced imitations and the never-reinforced probe imitations decreased markedly. All imitative behavior recovered with a small amount of shaping and return of contingent reinforcement.",
  },
  {
    id: 23010,
    topic: "Imitation Training",
    prompt: "As a learner progresses through imitation training and requires fewer and fewer trials to acquire each new imitative response, this is described as:",
    options: [
      "Behavioral momentum.",
      "Spontaneous recovery.",
      "Stimulus generalization.",
      "A learning set effect, also called a learning-to-learn phenomenon."
    ],
    correctIndex: 3,
    explanation: "As participants progressed through imitation training in Baer et al. (1967), they required fewer training trials to acquire new imitative repertoires. This is described as a learning set effect, or learning-to-learn phenomenon (Harlow, 1959).",
  },
  {
    id: 23011,
    topic: "Striefel's Imitation Training Protocol",
    prompt: "Striefel's (1974) five-component imitation training protocol begins with which step?",
    options: [
      "Conduct imitation training sessions.",
      "Sequence models for training.",
      "Select models for training.",
      "Assess, and teach if necessary, prerequisite skills for imitation training."
    ],
    correctIndex: 3,
    explanation: "The first component of Striefel's imitation training protocol is to assess, and teach if necessary, the prerequisite skills for imitation training. Learners cannot imitate if they do not attend to the model, so attending skills must be established first.",
  },
  {
    id: 23012,
    topic: "Prerequisite Skills for Imitation Training",
    prompt: "Striefel (1974) recommended assessing attending skills for a minimum of three sessions before beginning imitation training. Which of the following is NOT included in his definition of attending?",
    options: [
      "Staying seated during instruction.",
      "Looking at objects identified by the trainer.",
      "Making eye contact when one's name is called.",
      "Producing at least one imitative motor response on demand."
    ],
    correctIndex: 3,
    explanation: "Striefel (1974) defined attending as staying seated during instruction, keeping hands in one's lap, looking at the trainer when one's name is called, and looking at objects identified by the trainer. Producing imitative motor responses is not part of the attending prerequisite; it is the target of imitation training itself.",
  },
  {
    id: 23013,
    topic: "Select Models for Imitation Training",
    prompt: "When selecting initial models for imitation training, what is the recommended practice regarding the number and type of models?",
    options: [
      "Select 5 models, focusing only on vocal-verbal behaviors to build language first.",
      "Select about 25 models, including both gross motor and fine motor movements.",
      "Select 50 models, arranged in a strict hierarchy from fine motor to gross motor.",
      "Select 10 models, all involving manipulation of physical objects to keep training concrete."
    ],
    correctIndex: 1,
    explanation: "Practitioners may need to select and use about 25 behaviors as models during initial imitation training. Including both gross motor (e.g., raising a hand) and fine motor movements (e.g., manual sign language) provides learners with opportunities to develop more refined imitative skills.",
  },
  {
    id: 23014,
    topic: "Striefel's Imitation Training Protocol",
    prompt: "During the pretest phase of Striefel's protocol, a practitioner tests a model and the learner correctly imitates it on all three of three pretest trials. What should the practitioner do next?",
    options: [
      "Advance to other models, since the learner has already met the criterion for this model.",
      "Include the model in formal training anyway to strengthen the response.",
      "Apply physical guidance on subsequent pretest trials to ensure maintenance.",
      "Remove the model permanently and never use it again during training."
    ],
    correctIndex: 0,
    explanation: "If the learner correctly responds during pretesting to a selected model at the criterion level (e.g., three of three correct), then the practitioner should advance to other models. Models the learner already imitates correctly do not need to be included in formal training.",
  },
  {
    id: 23015,
    topic: "Striefel's Imitation Training Protocol",
    prompt: "In Striefel's protocol, after pretesting all selected models, how are models arranged for training?",
    options: [
      "From most to least complex, so learners experience success early.",
      "From easiest to most difficult, starting with models partially imitated during the pretest.",
      "Randomly, to prevent the learner from anticipating which model comes next.",
      "By topography type, grouping all gross motor models together and all fine motor models together."
    ],
    correctIndex: 1,
    explanation: "Models are arranged from easiest to most difficult. The first models selected for training are those the learner imitated correctly on some, but not all, pretest trials. Models with approximations come next, and models the learner failed entirely are last.",
  },
  {
    id: 23016,
    topic: "Conduct Imitation Training Sessions",
    prompt: "During the training condition in Striefel's protocol, the practitioner selects which model to train first in a session?",
    options: [
      "The model that was responded to least often during the preassessment.",
      "The model that was most often responded to correctly during the preassessment (i.e., correct on some but not all preassessment presentations).",
      "A completely novel model the learner has never encountered.",
      "The model that required the most physical guidance on prior occasions."
    ],
    correctIndex: 1,
    explanation: "The model selected first for training is the one most often responded to correctly during the preassessment, meaning the behavior was similar to the model on some, but not all, preassessment presentations. If only approximations occurred, the behavior with the closest similarity is selected first.",
  },
  {
    id: 23017,
    topic: "Conduct Imitation Training Sessions",
    prompt: "The criterion for removing a most recently learned behavior from imitation training in Striefel's postassessment is correct responding without physical guidance on:",
    options: [
      "14 out of 15 opportunities across three consecutive postassessments.",
      "Five consecutive correct responses in a single training session.",
      "Three of three correct responses in the immediately preceding preassessment.",
      "All 10 presentations across two consecutive postassessment sessions."
    ],
    correctIndex: 0,
    explanation: "A most recently learned behavior is removed from imitation training following three consecutive postassessments in which the learner responds correctly without physical guidance to the model on 14 out of the 15 opportunities (five previously learned and five still-in-training models, presented three times each).",
  },
  {
    id: 23018,
    topic: "Conduct Imitation Training Sessions",
    prompt: "Probing for imitation with novel models in Striefel's protocol is conducted without the antecedent verbal response prompt or other response prompts. The purpose of this probe procedure is to:",
    options: [
      "Test whether the learner will respond to verbal commands in the absence of a model.",
      "Assess whether physical guidance is still necessary for trained behaviors.",
      "Provide data on the learner's progress in developing a generalized imitation repertoire.",
      "Determine whether the practitioner is delivering reinforcement consistently."
    ],
    correctIndex: 2,
    explanation: "Probing for nontrained imitations provides data on the learner's progress in developing an imitation repertoire. Using novel models without prompts tests whether the learner has developed generalized imitation, that is, learning to do what the model does.",
  },
  {
    id: 23019,
    topic: "Guidelines for Imitation Training",
    prompt: "Which of the following best describes the guideline 'keep sessions active and brief' in imitation training?",
    options: [
      "Sessions should last at least 60 minutes so the learner has ample practice opportunities.",
      "Sessions of 10 to 15 minutes with no more than a few seconds between model presentation and the expected response are recommended.",
      "Brief sessions mean presenting only one model per session to avoid overwhelming the learner.",
      "Sessions should be kept active by ensuring the learner moves around the room between each trial."
    ],
    correctIndex: 1,
    explanation: "The guideline to keep sessions active and brief recommends sessions of typically 10 to 15 minutes, often scheduling more than one per day. No more than a few seconds should elapse between model presentation and the expected imitative response.",
  },
  {
    id: 23020,
    topic: "Guidelines for Imitation Training",
    prompt: "A learner consistently produces correct matching responses but always waits 10 seconds after the model before responding. The practitioner should:",
    options: [
      "Continue reinforcing all correct responses to maintain motivation.",
      "Withhold reinforcement entirely until the latency decreases on its own.",
      "Reinforce for progressively shorter response latencies using a decreasing contingency.",
      "Add a physical prompt during the waiting period to speed up the response."
    ],
    correctIndex: 2,
    explanation: "Learners who consistently emit correct matching responses but not immediately following the model should be reinforced for shorter response latencies, using a decreasing contingency (e.g., from 7 seconds to 5 seconds to 3 seconds) to bring the response under tighter temporal control of the model.",
  },
  {
    id: 23021,
    topic: "Guidelines for Imitation Training",
    prompt: "During imitation training, social and verbal praise should be paired with tangible reinforcers so that eventually:",
    options: [
      "Tangible reinforcers can be faded and social attention and verbal praise will maintain imitative behaviors.",
      "The learner learns to discriminate which type of reinforcer corresponds to each behavior.",
      "Tangible reinforcers increase the salience of social praise as a secondary reinforcer for the trainer.",
      "Social praise can be eliminated once tangible reinforcers are firmly established."
    ],
    correctIndex: 0,
    explanation: "The purpose of pairing verbal praise with tangible reinforcers is so that, as training progresses, social attention and verbal praise will come to maintain the matching responses or imitative behaviors on their own, reducing reliance on tangible consequences.",
  },
  {
    id: 23022,
    topic: "Guidelines for Imitation Training",
    prompt: "Imitation training is not complete until:",
    options: [
      "All response prompts, including verbal prompts and physical guidance, have been withdrawn.",
      "The learner can produce at least 25 trained imitative responses without error.",
      "The learner has generalized trained behaviors to at least three different settings.",
      "The practitioner has documented at least 100 reinforced training trials."
    ],
    correctIndex: 0,
    explanation: "Imitation training is not complete until all response prompts have been withdrawn. Children need to learn to do what the model does without the support of response prompting, because verbal response prompts and physical guidance are not functional for producing imitation in everyday environments.",
  },
  {
    id: 23023,
    topic: "Physical Guidance in Imitation Training",
    prompt: "When physical guidance is used to prompt an imitative response and the learner begins to respond correctly, how should the practitioner fade the guidance?",
    options: [
      "Remove all physical guidance immediately after the first correct guided trial.",
      "Replace physical guidance with a verbal description of the correct movement as the prompt.",
      "Continue full physical guidance for at least 10 consecutive trials before making any changes.",
      "Gradually withdraw support by releasing just before the movement is completed, then withdrawing earlier on each subsequent trial."
    ],
    correctIndex: 3,
    explanation: "Physical guidance should be faded gradually. After assisting the complete response, the practitioner lets go just before the movement is completed, and then continues to withdraw support earlier on each subsequent trial until the learner completes the movement independently.",
  },
  {
    id: 23024,
    topic: "Imitation Training",
    prompt: "Young et al. (1994) found that children with autism imitated novel models within trained response types but not across different types. The practical implication of this finding is that:",
    options: [
      "Imitation should be trained exclusively within one response type to achieve mastery.",
      "Training should focus on the response type that shows the highest baseline level of imitation.",
      "Children with autism cannot develop generalized imitation regardless of training procedures.",
      "Generalization of imitation across response types may need to be directly programmed rather than expected to occur automatically."
    ],
    correctIndex: 3,
    explanation: "The extent to which imitation generalizes may depend on the parameters of the response class used during training and may require direct programming. Young et al. found within-type but not cross-type generalization, indicating that generalization across model types must be explicitly targeted.",
  },
  {
    id: 23025,
    topic: "Imitation Training",
    prompt: "A learner with no prior imitative behavior imitates a novel model presented for the first time by a trainer, without any prompting, after training on 130 other models. This event is significant because it provides evidence that:",
    options: [
      "130 training trials are the empirically established minimum for developing imitation.",
      "Physical guidance is no longer needed for any future imitation trials.",
      "The model has become a conditioned reinforcer for the learner's behavior.",
      "The learner's behavior is now functionally controlled by the topography of novel models, not just prior reinforcement history."
    ],
    correctIndex: 3,
    explanation: "The criterion for the establishment of a genuine imitative response is displaying a novel response for the first time without shaping or prompting on that trial. This demonstrates that the model's topography now functionally controls the learner's similar behavior, beyond any specific reinforcement history.",
  },
  {
    id: 23026,
    topic: "Modeling",
    prompt: "Modeling, as a behavior change strategy, is distinguished from imitation training primarily because:",
    options: [
      "Modeling uses only punishment contingencies, while imitation training uses only reinforcement.",
      "Modeling is reserved for symbolic demonstrations; imitation training uses only live models.",
      "Modeling is used to teach new skills to learners who already have an imitative repertoire, while imitation training builds that foundational repertoire.",
      "Modeling involves no feedback to the learner, while imitation training always includes corrective feedback."
    ],
    correctIndex: 2,
    explanation: "Modeling is a behavior change strategy in which learners acquire new skills by imitating live or symbolic demonstrations. Imitation training is a systematic protocol for teaching a non-imitative learner to imitate models of novel behaviors, building the foundational repertoire that modeling then uses.",
  },
  {
    id: 23027,
    topic: "Video Modeling",
    prompt: "Which of the following BEST describes video self-modeling (VSM)?",
    options: [
      "A trainer records corrective feedback sessions and the learner reviews them.",
      "A peer who has mastered the target skill is filmed performing it for the learner to watch.",
      "An animated character models target behaviors in a virtual setting.",
      "The learner observes a video of herself or himself successfully performing the target behavior and then imitates that self-model."
    ],
    correctIndex: 3,
    explanation: "Video self-modeling is a specific application of video modeling that allows the individual to imitate targeted behaviors by observing herself or himself successfully performing a behavior, as defined by Bellini and Akullian (2007).",
  },
  {
    id: 23028,
    topic: "Video Modeling",
    prompt: "In Aldi et al. (2016), point-of-view video models were created by filming the arms and hands of family members performing daily living skills. This format is intended to:",
    options: [
      "Eliminate background distractions by keeping the camera focused on a neutral surface.",
      "Create a perspective that resembles what the learner would see while actually performing the skill.",
      "Allow the learner to observe the complete posture and body mechanics of a skilled model.",
      "Reduce the cost of video production by using untrained family members instead of professionals."
    ],
    correctIndex: 1,
    explanation: "Point-of-view video models film the arms and hands of a person doing the task, creating a perspective similar to what the learner would actually see while performing the skill. This format was used by Aldi et al. (2016) to teach daily living skills to young adults with ASD.",
  },
  {
    id: 23029,
    topic: "Video Modeling",
    prompt: "In the Aldi et al. (2016) study, when a participant made an error after viewing the point-of-view video, the error correction procedure involved:",
    options: [
      "Providing verbal reprimand and requiring the participant to restart the task.",
      "Repeating the video segment for that task step as many times as necessary to achieve mastery.",
      "Physically guiding the participant through the entire task chain from beginning to end.",
      "Providing a written task analysis as an additional supplementary prompt."
    ],
    correctIndex: 1,
    explanation: "When a participant made an error, the video segment for that specific task step was repeated as many times as necessary to achieve mastery. In some instances, gestural prompts were also provided as part of the error correction procedure.",
  },
  {
    id: 23030,
    topic: "Guidelines for Effective Modeling",
    prompt: "Which of the following variables is identified as potentially relevant to model-learner similarity that can influence the likelihood of imitation?",
    options: [
      "Only the model's age and biological sex are relevant.",
      "Similarity is defined solely by shared cultural background.",
      "Similarity is relevant only when using symbolic models.",
      "Past experience, age, sex, and physical appearance can all contribute to similarity."
    ],
    correctIndex: 3,
    explanation: "Almost any variable can relate to similarity between model and learner, including past experience, age, sex, or physical appearance. The more characteristics the model shares with the imitator, the more likely the modeling-imitation relationship will be established and maintained.",
  },
  {
    id: 23031,
    topic: "Guidelines for Effective Modeling",
    prompt: "Young business executives imitating the lifestyle of their firm's most senior executives best illustrates which factor that enhances the effectiveness of modeling?",
    options: [
      "Prestige",
      "Context",
      "Rehearsal and feedback",
      "Formal similarity"
    ],
    correctIndex: 0,
    explanation: "A model with prestige or social status increases the likelihood of imitative behaviors. Young executives imitating senior executives exemplifies how a prestigious model drives imitative behavior. The influence is enhanced when model and imitator share similar characteristics.",
  },
  {
    id: 23032,
    topic: "Guidelines for Effective Modeling",
    prompt: "A teacher uses a pause and increased vocal volume to emphasize the target word when modeling a new sight word for students. According to Risley and Reynolds (1970), this technique:",
    options: [
      "Reduces the likelihood of imitation because it adds complexity to the stimulus.",
      "Functions primarily as a negative reinforcer by reducing discomfort from softer speech.",
      "Increases the probability of an imitative response by emphasizing the critical aspect of the model.",
      "Serves primarily as a response prompt rather than a model enhancement."
    ],
    correctIndex: 2,
    explanation: "Emphasizing the critical aspects of the modeled stimulus increases the probability of an imitative response and boosts the likelihood of imitation as a function of the emphasized model, according to Risley and Reynolds (1970).",
  },
  {
    id: 23033,
    topic: "Guidelines for Effective Modeling",
    prompt: "Instructions combined with a model's presentation can enhance imitation by:",
    options: [
      "Replacing the need for a model when the skill is sufficiently described verbally.",
      "Automatically generalizing the modeled behavior to novel settings.",
      "Eliminating the need for rehearsal by providing declarative knowledge.",
      "Serving an orienting and prompting function that increases the likelihood the learner attends to and imitates the model."
    ],
    correctIndex: 3,
    explanation: "Instructions, whether spoken or written, set the occasion for a specific behavior and serve an orienting and prompting function that increases the likelihood of imitation. Researchers have combined voiceover instructions with video modeling as part of package programs to enhance modeling effects.",
  },
  {
    id: 23034,
    topic: "Guidelines for Effective Modeling",
    prompt: "In the context of effective modeling, 'rehearsal and feedback' enhances learning by:",
    options: [
      "Allowing the analyst to determine if the learner acquired the skill, reinforce imitative behaviors, and correct errors.",
      "Removing the need for a model after the learner has practiced once.",
      "Replacing reinforcement as the primary mechanism for behavior change.",
      "Limiting the number of exposures to the model to prevent habituation."
    ],
    correctIndex: 0,
    explanation: "Rehearsal and feedback provides the analyst with the chance to (1) determine if the learner has acquired the imitative skill, (2) reinforce imitative behaviors, and (3) correct any errors through feedback and redirection. Multiple response opportunities combined with feedback enhance modeling effectiveness.",
  },
  {
    id: 23035,
    topic: "Guidelines for Effective Modeling",
    prompt: "The factor in effective modeling that emphasizes demonstrating the target behavior in a real situation or in close facsimile of the real situation is called:",
    options: [
      "Reinforcement density",
      "Formal similarity",
      "Prestige",
      "Context"
    ],
    correctIndex: 3,
    explanation: "The context factor states that a model's presentation is more likely to be imitated if it occurs in a real situation or in a facsimile of the real situation. These situations should be expanded to account for variations in circumstances and to promote generalized imitation.",
  },
  {
    id: 23036,
    topic: "Guidelines for Effective Modeling",
    prompt: "Observing the model receive reinforcement for the target behavior increases the model's effectiveness. This is associated with which factor in the guidelines for effective modeling?",
    options: [
      "Context",
      "Prestige",
      "Reinforcement",
      "Emphasizing critical aspects of behavior"
    ],
    correctIndex: 2,
    explanation: "The reinforcement factor notes that the more frequently the imitator observes, detects, and recognizes the model being reinforced, the more effective the model becomes (Bandura, Ross, and Ross, 1963). The learner's own reinforcement for imitating also increases future imitative behavior.",
  },
  {
    id: 23037,
    topic: "Observational Learning",
    prompt: "Observational learning differs from basic imitation primarily because observational learning:",
    options: [
      "Always requires direct reinforcement of the learner for each new response acquired.",
      "Can only occur through video or symbolic models, never through live demonstrations.",
      "Entails detecting another person's behavior AND its consequences to determine whether or not to imitate.",
      "Is limited to learners who already possess a full imitative repertoire."
    ],
    correctIndex: 2,
    explanation: "Observational learning entails detecting another person's behavior and its consequence(s) and using that information to determine whether or not to imitate the behavior. This consequence discrimination component goes beyond simple imitation, which requires only formal similarity and a controlling model.",
  },
  {
    id: 23038,
    topic: "Observational Learning",
    prompt: "A pedestrian sees another person slip on black ice and crosses the street to avoid that section of sidewalk without imitating the slipping behavior. This illustrates observational learning because:",
    options: [
      "The pedestrian formally imitated the slipping behavior of the other person.",
      "The pedestrian's avoidance was classically conditioned by watching the other person fall.",
      "The pedestrian used information about another person's behavior and its consequence to guide her own behavior, without directly imitating the observed behavior.",
      "The pedestrian was vicariously reinforced by the smooth outcome of her own alternate route."
    ],
    correctIndex: 2,
    explanation: "Observational learning does not require imitation. The pedestrian used information about another person's behavior and its consequence (slipping) to make a decision about her own behavior, illustrating that observational learning typically involves imitation but does not require it.",
  },
  {
    id: 23039,
    topic: "Observational Learning",
    prompt: "A student who has never been directly taught a new word observes a peer receive corrective feedback on the word and then correctly identifies the word herself. According to MacDonald and Ahearn (2015), this is an example of:",
    options: [
      "Incidental teaching of the target word.",
      "Generalized imitation occurring in a naturalistic setting.",
      "Observational learning, in which the student learned from indirect contact with consequences experienced by the peer.",
      "A discriminated operant controlled by the teacher's question as an SD."
    ],
    correctIndex: 2,
    explanation: "This example matches the MacDonald and Ahearn (2015) description of observational learning: a student does not know a word, observes a peer receive instruction and feedback, and then correctly identifies the word herself because of observing the peer's performance and its consequences.",
  },
  {
    id: 23040,
    topic: "Observational Learning",
    prompt: "Delgado and Greer (2009) argued that the acquisition of observational learning skills represents a behavioral cusp. A behavioral cusp is defined as occurring when:",
    options: [
      "A skill reaches 100% accuracy across three consecutive sessions.",
      "A behavior generalizes to more than three novel settings without additional training.",
      "A child can contact contingencies and learn in ways that were not previously possible.",
      "A learner first requires fewer than five prompts to produce a target behavior."
    ],
    correctIndex: 2,
    explanation: "A developmental cusp occurs when a child can contact contingencies that he or she could not before. Observational learning is considered a behavioral cusp because children who acquire it can now learn in ways they previously could not.",
  },
  {
    id: 23041,
    topic: "Observational Learning",
    prompt: "In Delgado and Greer (2009), desirable observational learning (acquisition of new sight words) occurred only when participants engaged in:",
    options: [
      "Direct practice trials with the teacher providing immediate feedback to the participant.",
      "Monitoring of correct and incorrect feedback delivered by the teacher to peer confederates.",
      "Extended exposure to the sight words printed on classroom displays.",
      "Structured peer tutoring in which confederates provided feedback directly to participants."
    ],
    correctIndex: 1,
    explanation: "Delgado and Greer (2009) concluded that only under conditions in which monitoring of correct and incorrect feedback took place did desirable observational learning occur. Participants learned new sight words by monitoring the correct and incorrect responses of their confederates.",
  },
  {
    id: 23042,
    topic: "Three Requisite Skills for Observational Learning",
    prompt: "DeQuinzio and Taylor (2015) and others identified three requisite skills for an observational learning repertoire. If any of these skills are absent, they should be:",
    options: [
      "Taught separately and then combined to improve or enhance observational learning.",
      "Identified as permanent limitations and excluded from the treatment plan.",
      "Addressed only after all academic goals have been met.",
      "Replaced by alternative skills that serve the same function."
    ],
    correctIndex: 0,
    explanation: "The three requisite skills for observational learning are attending, imitating, and discriminating. If any of these skills are lacking, they can be taught separately and then combined to improve or enhance observational learning.",
  },
  {
    id: 23043,
    topic: "Teaching Observational Learning Skills: Attending",
    prompt: "In Taylor et al. (2012), participants were required to repeat a peer's stimulus word (imitation) and also place a chip under that word on a matching board. This matching response served as evidence that the participant was:",
    options: [
      "Producing a correct expressive label for the stimulus word.",
      "Attending to the stimulus word, as part of a larger monitoring behavior repertoire.",
      "Discriminating whether the peer's response was reinforced or not.",
      "Generalizing the trained behavior to a novel stimulus format."
    ],
    correctIndex: 1,
    explanation: "In Taylor et al. (2012), the chip placement confirmed that the participant was attending to and observing the stimulus word. Attending, at its fundamental level, means not only sustaining attention but also making an imitative and matching response that confirms observation of that stimulus.",
  },
  {
    id: 23044,
    topic: "Teaching Observational Learning Skills: Discriminating",
    prompt: "In DeQuinzio and Taylor's (2015) discrimination training study, when a participant emitted an incorrect response after a reinforced model trial, the practitioner provided which error correction instruction?",
    options: [
      "Physically guided the participant to touch the correct picture.",
      "Repeated the question 'What's this?' without any additional guidance.",
      "Said 'Say what she says when she gets it right.'",
      "Ended the trial immediately without providing any feedback."
    ],
    correctIndex: 2,
    explanation: "During discrimination training, when the participant answered incorrectly after a reinforced trial to the confederate model, the teacher provided the error correction statement: 'Say what she says when she gets it right.' This taught the participant to imitate the model's correct responses.",
  },
  {
    id: 23045,
    topic: "Teaching Observational Learning Skills: Discriminating",
    prompt: "In DeQuinzio and Taylor's (2015) study, participants were taught to say 'I don't know' in the presence of nonreinforced model responses. The purpose of this trained behavior was to:",
    options: [
      "Teach participants to avoid responding when they are unsure, as a general social skill.",
      "Allow the teacher to measure the participant's accuracy in labeling pictures independently.",
      "Provide a verbal prompt that reminded participants to attend to the confederate's responses.",
      "Demonstrate that participants could discriminate between reinforced and nonreinforced peer responses, which is a precondition for observational learning."
    ],
    correctIndex: 3,
    explanation: "Teaching participants to say 'I don't know' after nonreinforced model trials was the means by which discrimination training was implemented. Each participant learned to discriminate reinforced responses of the confederate from nonreinforced ones. Discriminating feedback received by the model is a fundamental precondition for observational learning.",
  },
  {
    id: 23046,
    topic: "Observational Learning and Consequences Discrimination",
    prompt: "According to DeQuinzio and Taylor (2015), learning to discriminate the reinforced and nonreinforced responses of a model is:",
    options: [
      "A supplementary skill that enriches but does not enable observational learning.",
      "A fundamental precondition for observational learning to occur.",
      "A skill that is acquired automatically through typical social development.",
      "An advanced skill that should be targeted only after all other academic skills are established."
    ],
    correctIndex: 1,
    explanation: "According to DeQuinzio and Taylor (2015), 'learning this discrimination is a fundamental precondition for observational learning to occur.' Observational learners must discriminate the consequences received by the model to determine which behaviors to imitate.",
  },
  {
    id: 23047,
    topic: "Observational Learning",
    prompt: "Children with ASD who lack an observational learning repertoire are limited because they:",
    options: [
      "Can learn new operants only via direct instruction, a process that is time-consuming and expensive.",
      "Learn quickly through peer imitation but cannot generalize to adult models.",
      "Benefit from naturalistic teaching but require more massed-trial practice.",
      "Develop observational learning automatically once generalized imitation is established."
    ],
    correctIndex: 0,
    explanation: "Delgado and Greer (2009) stated that children without observational learning repertoires 'can learn new operants only via direct instruction, a process that is time-consuming and expensive.' This highlights the critical importance of explicitly teaching observational learning skills.",
  },
  {
    id: 23048,
    topic: "Observational Learning",
    prompt: "An individual who is both blind and deaf can still engage in observational learning by:",
    options: [
      "Using a sighted companion to verbally describe the consequences of others' behaviors.",
      "Relying exclusively on memory of previously seen behaviors.",
      "Sensing and imitating the tactile and kinesthetic stimulus products of another person's behavior, using those experiences to guide their own responding.",
      "Observational learning is not possible without at least one intact sensory modality for sight or hearing."
    ],
    correctIndex: 2,
    explanation: "An individual with dual sensory impairments can engage in observational learning by sensing and imitating the tactile and kinesthetic stimulus products of another person's behavior. Observational learning requires attention, imitation, and discrimination regardless of sensory mode.",
  },
  {
    id: 23049,
    topic: "Imitation vs. Discriminated Operant",
    prompt: "In the opening anecdote, the accompanying guitarist stopped playing riffs similar to the lead guitarist's after hearing the singer-songwriter's disapproval. This outcome is best understood as:",
    options: [
      "Extinction of a previously reinforced imitative behavior.",
      "Punishment of the accompanying guitarist's imitative behavior by the singer-songwriter.",
      "Generalized imitation failure due to a lack of formal similarity.",
      "Observational learning, in which the guitarist used information about the consequence of the lead guitarist's behavior to modify his own responding."
    ],
    correctIndex: 3,
    explanation: "The accompanying guitarist discriminated the singer-songwriter's displeasure with the lead guitarist's riff style and stopped playing similar riffs. This illustrates observational learning: detecting another person's behavior and its consequence(s) and using that information to determine whether or not to imitate the behavior.",
  },
  {
    id: 23050,
    topic: "Imitation Training",
    prompt: "Which of the following is a data-based criterion appropriate for terminating motor imitation training, as described?",
    options: [
      "The practitioner judges, without formal data collection, that the learner appears confident.",
      "The learner has accumulated exactly 100 reinforced training trials.",
      "The learner imitates the first presentations of five consecutive novel models across three sessions.",
      "The learner produces at least one correct imitation per session for 10 consecutive sessions."
    ],
    correctIndex: 2,
    explanation: "Decisions to stop imitation training depend on the learner's behavior and program goals. An appropriate data-based criterion for terminating motor imitation training is when the student imitates the first presentations of five consecutive novel models across three sessions. Informal judgment or arbitrary trial counts are not data-based approaches.",
  },
];

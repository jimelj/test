import type { Question } from "../types";

/**
 * BCBA practice questions for Cooper et al., Chapter 10: Planning and Evaluating Applied Behavior Analysis Research.
 * Grounded in the chapter text. Option order is shuffled at runtime, so
 * correctIndex placement here is arbitrary.
 */
export const QUESTIONS_M13: Question[] = [
  {
    id: 12001,
    topic: "Importance of the Individual Subject",
    prompt: "Behavior analysis research methods are distinguished by their reliance on which of the following?",
    options: [
      "Pretest and posttest comparisons of group means",
      "Direct and repeated measures of the behavior of individual organisms",
      "Random assignment of subjects to experimental and control groups",
      "Statistical inference to determine the likelihood of chance differences"
    ],
    correctIndex: 1,
    explanation: "Behavior analysis research features direct and repeated measures of the behavior of individual organisms, because behavior by definition occurs at the level of the individual organism.",
  },
  {
    id: 12002,
    topic: "Between-Groups Design Overview",
    prompt: "In a basic between-groups experiment, subjects are divided into an experimental group and a control group primarily so that the researcher can:",
    options: [
      "Conduct intrasubject replication across multiple conditions",
      "Ensure that baseline responding is stable before introducing treatment",
      "Observe each subject under all levels of the independent variable",
      "Compare mean performance between groups to make inferences about the independent variable"
    ],
    correctIndex: 3,
    explanation: "Between-groups designs compare mean pre- and posttest scores across an experimental group (exposed to the independent variable) and a control group (not exposed) and then apply statistical tests to determine whether differences between groups are likely due to the independent variable.",
  },
  {
    id: 12003,
    topic: "Group Data and Individual Performance",
    prompt: "A between-groups study shows that the average performance of the experimental group improved from pretest to posttest. What is the most significant limitation of this finding?",
    options: [
      "It may not reveal anything about the performance of individual subjects within the group",
      "It does not specify the exact duration of the treatment",
      "It fails to include interobserver agreement data",
      "It cannot demonstrate statistical significance without a larger sample"
    ],
    correctIndex: 0,
    explanation: "Knowing that the average performance of a group changed may reveal nothing about individual subjects. Some may have improved, some stayed the same, and others may have gotten worse, yet all of this variation is hidden within the group mean.",
  },
  {
    id: 12004,
    topic: "Group Data and Individual Performance",
    prompt: "According to Johnston and Pennypacker (1980), an effect that emerges only after individual data have been combined is:",
    options: [
      "The most reliable indicator of a true functional relation",
      "Sufficient justification for adopting the treatment in applied settings",
      "Evidence of strong external validity across subjects",
      "Probably artifactual and not representative of real behavioral processes"
    ],
    correctIndex: 3,
    explanation: "Johnston and Pennypacker cautioned that an effect emerging only from combined individual data is probably artifactual and not representative of any real behavioral processes, underscoring why individual-level data must be analyzed.",
  },
  {
    id: 12005,
    topic: "Group Data Masking Variability",
    prompt: "When repeated measurement reveals significant variability in a subject's behavior, the appropriate research response is to:",
    options: [
      "Apply statistical manipulation to cancel out the variability and proceed with the analysis",
      "Discontinue the study and select a new dependent variable",
      "Conduct an experimental search to identify and control the factors responsible for the variability",
      "Increase the number of subjects to reduce the impact of variability on the group mean"
    ],
    correctIndex: 2,
    explanation: "When repeated measurement reveals significant variability, the researcher should search experimentally for factors responsible for that variability. Statistical control is never a substitute for experimental control.",
  },
  {
    id: 12006,
    topic: "Group Data and Behavioral Processes",
    prompt: "Skinner argued that researchers must demonstrate behavior-environment relations at the level of the individual organism because using group data risks:",
    options: [
      "Underestimating the effect sizes of treatments",
      "Violating IRB protocols for research with human subjects",
      "Producing results that lack social validity for individual clients",
      "Discovering synthetic phenomena representing mathematical rather than behavioral processes"
    ],
    correctIndex: 3,
    explanation: "Skinner contended that group-level analyses risk discovering synthetic phenomena that represent mathematical, not behavioral, processes. The function derived from group data does not represent any actual behavioral process operating in individual subjects.",
  },
  {
    id: 12007,
    topic: "Between-Groups Design: Intrasubject Replication",
    prompt: "One major weakness of between-groups designs relative to single-case designs is that between-groups designs:",
    options: [
      "Require too few subjects to achieve statistical power",
      "Cannot demonstrate changes from pretest to posttest",
      "Lack intrasubject replication, which is necessary for a convincing demonstration of a functional relation",
      "Are incapable of detecting any effect of the independent variable"
    ],
    correctIndex: 2,
    explanation: "Between-groups designs lose the power of replicating effects within and across individual subjects. Intrasubject replication is one of the great strengths of single-case experimental designs, providing a convincing demonstration of functional relations.",
  },
  {
    id: 12008,
    topic: "Controlling Variables",
    prompt: "The only ways to control the effects of any variable in an experiment are to:",
    options: [
      "Statistically adjust for the variable or randomly assign subjects",
      "Hold the variable constant throughout the experiment or isolate it as an independent variable and manipulate it",
      "Increase the sample size or use matched pairs of subjects",
      "Use a double-blind procedure or administer placebos to control subjects"
    ],
    correctIndex: 1,
    explanation: "Controlling a variable can be accomplished in only two ways: holding the variable constant throughout the experiment, or isolating the suspected factor as an independent variable and manipulating its presence, absence, or value.",
  },
  {
    id: 12009,
    topic: "Importance of Flexibility in Experimental Design",
    prompt: "Sidman (1960) warned that accepting prototype experimental designs as a set of rules to be followed in designing experiments would be:",
    options: [
      "Disastrous, because there are no rules of experimental design",
      "Consistent with the goals of applied behavior analysis",
      "A reasonable starting point for novice researchers",
      "Acceptable only when studying between-subjects variability"
    ],
    correctIndex: 0,
    explanation: "Sidman was adamant that treating prototype designs as rules to follow would be disastrous, stating clearly that 'there are no rules of experimental design.' Researchers must exercise flexibility and creativity in each unique experiment.",
  },
  {
    id: 12010,
    topic: "Experimental Designs Combining Analytic Tactics",
    prompt: "Combining analytic tactics in an experimental design is justified when it:",
    options: [
      "Automatically produces more publications per study",
      "Allows for a more convincing demonstration of experimental effect",
      "Reduces the complexity of the independent variable",
      "Eliminates the need for component analyses"
    ],
    correctIndex: 1,
    explanation: "Combining analytic tactics may allow a more convincing demonstration of experimental control than a single-tactic design, similar to adding suspenders to a belt. However, multiple tactics are not automatically superior if they obscure a clear single-tactic result.",
  },
  {
    id: 12011,
    topic: "Component Analysis",
    prompt: "A component analysis is defined as an experiment designed to:",
    options: [
      "Measure the social acceptability of each component of a treatment package separately",
      "Compare the mean effect of a treatment package against a no-treatment control group",
      "Identify the active elements of a treatment package, the relative contributions of different components, and their necessity and sufficiency",
      "Systematically replicate the results of a previous experiment in a new setting"
    ],
    correctIndex: 2,
    explanation: "A component analysis is any experiment designed to identify the active elements of a treatment package, the relative contributions of different components, and the necessity and sufficiency of treatment components.",
  },
  {
    id: 12012,
    topic: "Component Analysis",
    prompt: "In a drop-out component analysis, the researcher:",
    options: [
      "Presents each component individually before assembling the complete treatment package",
      "Adds components one at a time while measuring behavior after each addition",
      "Randomly assigns participants to receive different subsets of the treatment package",
      "Presents the complete treatment package first, then systematically removes components"
    ],
    correctIndex: 3,
    explanation: "In a drop-out component analysis, the investigator presents the full treatment package and then systematically removes components. If treatment effectiveness wanes when a component is removed, that component is identified as necessary.",
  },
  {
    id: 12013,
    topic: "Component Analysis",
    prompt: "In an add-in component analysis, a researcher assesses components individually or in combination before presenting the complete package. A primary advantage of this method over the drop-out method is that it:",
    options: [
      "Can identify sufficient components",
      "Ensures that the target behavior improves immediately in the first or second phase",
      "Eliminates all sequence effects that might confound results",
      "Is simpler to implement than the drop-out approach"
    ],
    correctIndex: 0,
    explanation: "The add-in component analysis assesses components individually or in combination before presenting the complete treatment package. This method can identify sufficient components, whereas the main advantage of the drop-out method is that behavior improves immediately.",
  },
  {
    id: 12014,
    topic: "Component Analysis",
    prompt: "In a two-component treatment package, if neither Component Y nor Component Z is effective in isolation but the combination produces substantial behavior change, this outcome illustrates a:",
    options: [
      "Additive effect",
      "Sufficient and necessary combination",
      "Multiplicative effect",
      "Dropout-analysis result"
    ],
    correctIndex: 2,
    explanation: "When neither component is effective alone but the combination produces substantial behavior change, this is called a multiplicative effect. An additive effect occurs when combining components produces greater change than either component alone but both components are individually effective.",
  },
  {
    id: 12015,
    topic: "Internal Validity",
    prompt: "An experiment has high internal validity when:",
    options: [
      "The results can be replicated by independent research teams in multiple settings",
      "The sample represents a broad range of ages, cultural backgrounds, and skill levels",
      "The treatment is judged acceptable by consumers and practitioners",
      "Changes in the dependent variable are demonstrated to be a function only of the independent variable"
    ],
    correctIndex: 3,
    explanation: "An experiment has high internal validity when changes in the dependent variable are demonstrated to be a function only of the independent variable. This means the researcher has controlled potential confounds so that alternative explanations for behavior change are minimized.",
  },
  {
    id: 12016,
    topic: "Internal Validity",
    prompt: "The primary means by which applied behavior analysts assess the degree of experimental control is:",
    options: [
      "Attainment of steady state responding",
      "Calculating and reporting Cohen's d effect size",
      "Achieving 80% or higher interobserver agreement on dependent variable measures",
      "Administering a placebo to subjects in control conditions"
    ],
    correctIndex: 0,
    explanation: "Attainment of steady state responding is the primary means by which applied behavior analysts assess the degree of experimental control, as it demonstrates that behavior is stable and predictable under each set of experimental conditions.",
  },
  {
    id: 12017,
    topic: "Subject Confounds",
    prompt: "Maturation is a potential confounding variable in research because it refers to:",
    options: [
      "Observer drift that occurs when data collectors become more lenient over time",
      "Unplanned events in the setting that coincide with changes in the independent variable",
      "The influence of the experimenter's behavior on how treatment is implemented",
      "Changes that take place in a subject over the course of an experiment, such as physical growth or skill acquisition"
    ],
    correctIndex: 3,
    explanation: "Maturation refers to changes that take place in a subject over the course of an experiment, such as physical growth or the acquisition of academic, social, or other behaviors. These changes can be unrelated to the independent variable yet alter the dependent variable.",
  },
  {
    id: 12018,
    topic: "Setting Confounds",
    prompt: "A behavior analyst conducting a study in a natural setting discovers that subjects have been accessing the same items that are planned for use as reinforcers outside of the experimental session. This is best classified as a:",
    options: [
      "Measurement confound caused by reactivity",
      "Subject confound caused by maturation",
      "Setting confound involving bootleg reinforcement",
      "Independent variable confound caused by experimenter bias"
    ],
    correctIndex: 2,
    explanation: "When subjects have access outside the experimental situation to the same items intended as reinforcers in the study, this is an example of bootleg reinforcement, a setting confound that can diminish the effectiveness of the putative reinforcers used in the study.",
  },
  {
    id: 12019,
    topic: "Measurement Confounds",
    prompt: "To reduce confounding by observer bias when observers score permanent products, researchers should:",
    options: [
      "Have observers score products in the order they were produced, from baseline through treatment phases",
      "Ensure observers are fully informed of which condition each product was produced under",
      "Allow only the principal investigator to score products from treatment conditions",
      "Have observers score products from baseline and treatment conditions in randomized order"
    ],
    correctIndex: 3,
    explanation: "Having observers score papers from baseline and treatment conditions in randomized order reduces the likelihood that observer drift or bias will confound the data within one treatment condition phase.",
  },
  {
    id: 12020,
    topic: "Measurement Confounds",
    prompt: "Reactivity to the measurement procedure is best controlled by:",
    options: [
      "Maintaining baseline conditions long enough for any reactive effects to run their course and stable responding to be obtained",
      "Using statistical adjustments to remove the reactive effects from the data",
      "Increasing the frequency of observation sessions during all phases",
      "Switching to a group comparison design to average out reactive effects across subjects"
    ],
    correctIndex: 0,
    explanation: "To offset the confounding effect of reactivity to measurement, the experimenter must maintain baseline conditions long enough for any reactive effects to run their course and stable responding to be obtained.",
  },
  {
    id: 12021,
    topic: "Independent Variable Confounds",
    prompt: "Treatment drift is best described as:",
    options: [
      "Systematic changes in the dependent variable that occur during the transition between experimental phases",
      "Gradual changes in an observer's recording behavior that result in increasing leniency",
      "Differences in how the independent variable is applied that emerge over the course of an experiment compared to how it was applied at the outset",
      "The tendency of practitioners to add extra components to a treatment package without telling the researcher"
    ],
    correctIndex: 2,
    explanation: "Treatment drift occurs when the application of the independent variable differs from the way it was applied at the study's outset. It can occur when a complex independent variable makes consistent implementation difficult or when contingencies shape the behavior of those implementing the intervention.",
  },
  {
    id: 12022,
    topic: "Independent Variable Confounds",
    prompt: "A placebo control is used in research to:",
    options: [
      "Ensure that the dependent variable is measured identically across all conditions",
      "Prevent treatment drift by standardizing how the independent variable is delivered",
      "Establish that the treatment has social validity by comparing outcomes with a normative sample",
      "Separate effects produced by a subject's expectations of improvement from effects actually produced by the treatment"
    ],
    correctIndex: 3,
    explanation: "A placebo control separates effects that may be produced by a subject's perceived expectations of improvement from the effects actually produced by the treatment itself, as demonstrated in pharmacological and behavioral research.",
  },
  {
    id: 12023,
    topic: "Independent Variable Confounds",
    prompt: "In a double-blind control procedure, which of the following is true?",
    options: [
      "Both the experimenter and the subject know which condition is active, but data collectors do not",
      "Neither the subjects nor the observers know whether the independent variable is present or absent from session to session",
      "Both subjects and observers know the treatment condition, but the statistician analyzing data does not",
      "The independent variable is presented in double the typical dose to ensure a measurable effect"
    ],
    correctIndex: 1,
    explanation: "A double-blind control procedure means that neither the subject(s) nor the observers know whether the independent variable is present or absent from session to session. This eliminates confounding by subject expectations, differential treatment by others, and observer bias.",
  },
  {
    id: 12024,
    topic: "Treatment Integrity",
    prompt: "Which of the following best defines treatment integrity?",
    options: [
      "The extent to which the independent variable is implemented as planned",
      "The extent to which procedures in all conditions, including baseline, are correctly implemented",
      "The degree to which behavior change goals are socially important",
      "The reliability of the dependent variable measurement system"
    ],
    correctIndex: 0,
    explanation: "Treatment integrity refers to the extent to which the independent variable is implemented as planned. Procedural fidelity is the broader term that more accurately refers to the correct implementation of procedures across all conditions, including baseline.",
  },
  {
    id: 12025,
    topic: "Treatment Integrity",
    prompt: "Low treatment integrity in an experiment can produce which of the following errors?",
    options: [
      "A Type II error only, because weak implementation always reduces the likelihood of detecting an effect",
      "A Type I error only, because poor implementation always creates spurious effects",
      "Neither type of error, because treatment integrity problems affect only the social validity of findings",
      "Either a false positive or a false negative, depending on the results obtained"
    ],
    correctIndex: 3,
    explanation: "Low treatment integrity can lead to a false positive (claiming a functional relation when none exists) or a false negative (failing to detect a functional relation when one does exist), depending on how the incomplete or inconsistent implementation affects the data.",
  },
  {
    id: 12026,
    topic: "Treatment Integrity",
    prompt: "Gresham and colleagues (1993) recommended that treatments be operationally defined along four dimensions. Which set of dimensions did they specify?",
    options: [
      "Temporal, social, procedural, and technological",
      "Objective, clear, measurable, and observable",
      "Verbal, physical, spatial, and temporal",
      "Antecedent, behavior, consequence, and setting"
    ],
    correctIndex: 2,
    explanation: "Gresham and colleagues (1993) recommended that treatments be operationally defined in each of four dimensions: verbal, physical, spatial, and temporal, using a time-out procedure as an example to illustrate each dimension.",
  },
  {
    id: 12027,
    topic: "Treatment Integrity",
    prompt: "For a study to achieve the highest score on the National Autism Center's Scientific Merit Rating Scale, treatment integrity must be measured during at least what percentage of sessions, at what minimum accuracy?",
    options: [
      "10% of sessions at 70% accuracy",
      "25% of sessions at 80% accuracy",
      "50% of sessions at 90% accuracy",
      "100% of sessions at 85% accuracy"
    ],
    correctIndex: 1,
    explanation: "The National Autism Center requires that treatment integrity be measured during a minimum of 25% of sessions, at or above 80% accuracy, with interobserver agreement of 80% or above, for a study to achieve the highest score on its Scientific Merit Rating Scale.",
  },
  {
    id: 12028,
    topic: "Treatment Integrity",
    prompt: "A researcher notes that the practitioner implementing the intervention tends to apply the full procedure only when the investigator is present and applies only favored aspects at other times. This is an example of:",
    options: [
      "Observer drift",
      "Experimenter bias in data collection",
      "Bootleg reinforcement",
      "Treatment drift"
    ],
    correctIndex: 3,
    explanation: "Treatment drift occurs when the application of the independent variable differs from its initial implementation. A practitioner implementing only favored aspects and the full procedure only when observed is a classic example of treatment drift driven by contingencies on the implementer's behavior.",
  },
  {
    id: 12029,
    topic: "Social Validity",
    prompt: "Wolf (1978) proposed that the social validity of an applied behavior analysis study should be assessed in which three ways?",
    options: [
      "The reliability of the measurement system, the replicability of the findings, and the generality of the results",
      "The consumer's preference for the treatment, the magnitude of behavior change, and the maintenance of gains",
      "The technological precision of procedures, the conceptual integrity of the report, and the contribution to the literature",
      "The social significance of the behavior change goals, the appropriateness of the intervention, and the social importance of the results"
    ],
    correctIndex: 3,
    explanation: "Wolf (1978) recommended that the social validity of an applied behavior analysis study be assessed in three ways: the social significance of the behavior change goals, the appropriateness of the intervention, and the social importance of the results.",
  },
  {
    id: 12030,
    topic: "Social Validity: Goals",
    prompt: "Van Houten (1979) suggested two basic approaches for determining socially valid performance goals. Which pair of approaches did he identify?",
    options: [
      "Assessing the performance of persons considered competent, and experimentally manipulating different levels of performance to determine optimal results",
      "Conducting a functional assessment and comparing baseline to treatment data",
      "Surveying consumers about their preferences and reviewing published normative data",
      "Identifying the behavior of ultimate value and measuring it in the natural environment"
    ],
    correctIndex: 0,
    explanation: "Van Houten (1979) suggested two basic approaches: assessing the performance of persons considered competent to set a valid target level, and experimentally manipulating different levels of performance to determine empirically which level produces optimal results.",
  },
  {
    id: 12031,
    topic: "Social Validity: Interventions",
    prompt: "The Intervention Rating Profile (IRP-15) is best described as:",
    options: [
      "A standardized instrument for assessing children's academic performance before and after intervention",
      "A checklist used to document treatment integrity during observation sessions",
      "A 15-item Likert-type scale for assessing teachers' perceptions of the acceptability of classroom interventions",
      "A tool for comparing participants' outcomes to those of a normative sample of typical performers"
    ],
    correctIndex: 2,
    explanation: "The Intervention Rating Profile (IRP-15) is a 15-item Likert-type scale developed to assess teachers' perceptions of the acceptability of classroom interventions.",
  },
  {
    id: 12032,
    topic: "Social Validity: Outcomes",
    prompt: "A behavior analyst wants to assess the social validity of outcomes by comparing participants' performance to that of nondisabled peers performing the same tasks in similar contexts. This method of social validity assessment is called:",
    options: [
      "Expert evaluation",
      "Consumer opinion assessment",
      "Real-world testing",
      "Normative comparison"
    ],
    correctIndex: 3,
    explanation: "Normative comparison involves using the performance of a sample of typical performers to assess the social validity of behavior changes made by participants, providing an empirical benchmark for evaluating whether the change is meaningful.",
  },
  {
    id: 12033,
    topic: "Social Validity: Outcomes",
    prompt: "Which method is considered perhaps the most socially valid way to assess a learner's newly acquired skills?",
    options: [
      "Having consumers rate behavior samples on a Likert-type scale",
      "Asking experts to rate baseline and postintervention video clips in random order",
      "Putting the skill to an authentic test in the natural environment",
      "Comparing the learner's performance to a normed standardized test"
    ],
    correctIndex: 2,
    explanation: "A real-world test in the natural environment is described as perhaps the most socially valid way to assess newly acquired behavior, because it puts the learner's repertoire in contact with naturally occurring contingencies that may promote maintenance and generalization.",
  },
  {
    id: 12034,
    topic: "Social Validity: Outcomes",
    prompt: "Iwata and colleagues (1990) developed the Self-Injury Trauma Scale (SITS). What does this instrument measure, and what is its relevance to social validity?",
    options: [
      "It trains observers to record self-injurious behavior using momentary time sampling",
      "It provides consumers with a questionnaire to rate the acceptability of self-injury treatment procedures",
      "It compares a client's level of self-injury to a normative sample of individuals without disabilities",
      "It measures the number, type, severity, and location of injuries produced by self-injurious behavior, allowing reductions in injury to validate that behavior change was meaningful"
    ],
    correctIndex: 3,
    explanation: "Iwata and colleagues (1990) developed the SITS to measure the number, type, severity, and location of injuries produced by self-injurious behavior. Reduction in injury scores validates that decreases in target behavior translated into meaningful real-world outcomes.",
  },
  {
    id: 12035,
    topic: "External Validity",
    prompt: "External validity is defined as:",
    options: [
      "The degree to which changes in the dependent variable can be attributed solely to the independent variable",
      "The extent to which an intervention is judged acceptable by practitioners, parents, and clients",
      "The degree to which a functional relation found reliable in a given experiment operates under different conditions",
      "The reliability and consistency with which the independent variable is implemented across sessions"
    ],
    correctIndex: 2,
    explanation: "External validity refers to the degree to which a functional relation found reliable and socially valid in a given experiment operates under different conditions, including with different subjects, in different settings, and with different behaviors.",
  },
  {
    id: 12036,
    topic: "External Validity and Between-Groups Research",
    prompt: "The proper inference from the results of a well-executed between-groups study is:",
    options: [
      "From the sample to the individual participants who resembled those in the study",
      "From the individual experimental subjects to the broader population",
      "From the sample to the population from which the sample was drawn",
      "From the experimental group findings to all individuals who receive the same treatment"
    ],
    correctIndex: 2,
    explanation: "The proper inference about the results of a groups-design study is from the sample to the population, not from the sample to the individual. Random sampling ensures the sample represents the population, making results less meaningful for any specific individual.",
  },
  {
    id: 12037,
    topic: "External Validity and Applied Behavior Analysis",
    prompt: "According to Birnbrauer (1981), external validity is not a characteristic of a single study but rather:",
    options: [
      "A property conferred on a study by random sampling procedures",
      "Established by the number of subjects included in a single-case study",
      "Guaranteed whenever a study is conducted in a natural rather than laboratory setting",
      "The product of many studies, pursued only through systematic replication"
    ],
    correctIndex: 3,
    explanation: "Birnbrauer pointed out that external validity is not something a single study has, but rather the product of many studies. External validity can be pursued only through the active process of systematic replication.",
  },
  {
    id: 12038,
    topic: "Direct Replication",
    prompt: "An intrasubject direct replication is best described as:",
    options: [
      "A replication involving different subjects who share similar characteristics with those in the original study",
      "A replication in which one or more aspects of the original experiment are purposefully varied",
      "A replication of an experiment using the same subject who participated in the original study",
      "A replication conducted by an independent research team in a different geographical location"
    ],
    correctIndex: 2,
    explanation: "An intrasubject direct replication uses the same subject and is the primary tactic for establishing the existence and reliability of a functional relation. When different but similar subjects are used, it is called an intersubject direct replication.",
  },
  {
    id: 12039,
    topic: "Direct Replication",
    prompt: "Intersubject direct replication is the primary method applied behavior analysts use to determine:",
    options: [
      "Whether a treatment package requires all of its components to be effective",
      "Whether a functional relation has sufficient internal validity",
      "The acceptability of the intervention to consumers",
      "The extent to which research findings have generality across subjects"
    ],
    correctIndex: 3,
    explanation: "Intersubject direct replication, which maintains every aspect of the original experiment except the subject, is the primary method for determining the extent to which research findings generalize across subjects.",
  },
  {
    id: 12040,
    topic: "Systematic Replication",
    prompt: "In a systematic replication, a researcher purposefully varies one or more aspects of a previous experiment. When a systematic replication successfully reproduces earlier results, it:",
    options: [
      "Demonstrates reliability of the original findings and adds to their external validity by showing the effect occurs under different conditions",
      "Only confirms the internal validity of the original study",
      "Replaces the original study in the literature because it is more methodologically rigorous",
      "Provides evidence that the treatment is socially valid for a new population"
    ],
    correctIndex: 0,
    explanation: "When a systematic replication successfully reproduces results, it not only demonstrates the reliability of the earlier findings but also adds to their external validity by showing that the same effect can be obtained under different conditions.",
  },
  {
    id: 12041,
    topic: "Systematic Replication",
    prompt: "Sidman (1960) described systematic replication as a gamble worth taking because, if successful:",
    options: [
      "It is easier to execute and requires fewer resources than direct replication",
      "It produces findings that are automatically accepted as evidence-based practice",
      "It eliminates the risk of a failed replication by allowing modifications to the original method",
      "It not only increases reliability but also greatly enhances generality and provides additional data unavailable from simple repetition"
    ],
    correctIndex: 3,
    explanation: "Sidman argued that systematic replication's pay-off is handsome because success increases reliability and greatly enhances generality, and provides additional data that simple repetition of the original experiment could not have produced.",
  },
  {
    id: 12042,
    topic: "Evaluating ABA Research: Internal Validity",
    prompt: "When evaluating the internal validity of an applied behavior analysis study, what is the reader's first step?",
    options: [
      "Determining whether the study was published in a peer-reviewed journal",
      "Assessing whether the study included both direct and systematic replications",
      "Deciding whether to accept the data as valid and accurate measures of the target behavior by examining the definition and measurement of the dependent variable",
      "Judging the social significance of the behavior change goals"
    ],
    correctIndex: 2,
    explanation: "The initial step in evaluating internal validity is to decide whether to accept the data as valid and accurate measures of the target behavior over the course of the experiment, which requires examining the definition and measurement of the dependent variable.",
  },
  {
    id: 12043,
    topic: "Evaluating ABA Research: Visual Analysis",
    prompt: "Don Baer stated: 'If a problem has been solved, you can see that; if you must test for statistical significance, you do not have a solution.' This reflects which primary rationale for visual analysis in applied behavior analysis?",
    options: [
      "Applied behavior analysts are concerned with socially significant behavior changes, not statistically significant ones",
      "Statistical tests are too mathematically complex for most practitioners to apply correctly",
      "Visual analysis produces fewer Type II errors than statistical tests",
      "Statistical tests cannot be applied to single-case designs because they violate assumptions of independence"
    ],
    correctIndex: 0,
    explanation: "Baer's statement reflects the first rationale for visual analysis: applied behavior analysts are concerned with producing socially significant behavior changes. If statistical inference is needed to determine whether behavior changed enough to improve a client's quality of life, the answer is no.",
  },
  {
    id: 12044,
    topic: "Type I and Type II Errors",
    prompt: "A researcher concludes that the independent variable produced a behavior change, but in reality no such functional relation exists in nature. This error is classified as a:",
    options: [
      "Type II error (false negative)",
      "Type I error (false positive)",
      "Treatment integrity failure",
      "Confound from observer bias"
    ],
    correctIndex: 1,
    explanation: "A Type I error, also called a false positive, occurs when the researcher concludes that the independent variable had an effect when in truth no such relation exists in nature. A Type II error is the opposite: concluding no effect when one actually exists.",
  },
  {
    id: 12045,
    topic: "Type I and Type II Errors",
    prompt: "Baer (1977) noted that behavior analysts' reliance on visual analysis results in which pattern of errors relative to researchers who rely on statistical significance testing?",
    options: [
      "High rates of both Type I and Type II errors",
      "Low rates of both Type I and Type II errors",
      "A low incidence of Type I errors but an increased commission of Type II errors",
      "A high incidence of Type I errors but a low incidence of Type II errors"
    ],
    correctIndex: 2,
    explanation: "Baer (1977) pointed out that reliance on visual inspection results in a low incidence of Type I errors but increases the commission of Type II errors relative to statistical testing. As a result, behavior analysts identify fewer variables, but those they do identify tend to be more powerful, general, and dependable.",
  },
  {
    id: 12046,
    topic: "Evaluating ABA Research: Visual Analysis",
    prompt: "A recognized limitation of relying on visual analysis in applied behavior analysis is that:",
    options: [
      "Interrater agreement on whether various data patterns demonstrate experimental control has been poor, particularly for non-ideal graphs",
      "It is unable to detect any changes in level or trend across experimental phases",
      "It requires computing statistical tests before graphing data",
      "It automatically results in high rates of Type I errors compared to statistical methods"
    ],
    correctIndex: 0,
    explanation: "Visual analysis is not without limitations. Poor interrater agreement on whether data patterns demonstrate experimental control has long been a concern, as shown by studies in which agreement was relatively low except for graphs with ideal patterns.",
  },
  {
    id: 12047,
    topic: "Evaluating ABA Research: Social Validity",
    prompt: "When evaluating the social validity of an independent variable in a published study, a reader should consider all of the following except:",
    options: [
      "The acceptability of the procedure to practitioners and clients",
      "The practicality and cost of the intervention",
      "The statistical power of the design to detect small effects",
      "Whether the procedure is perceived as too complex to learn or apply"
    ],
    correctIndex: 2,
    explanation: "Evaluating the social validity of the independent variable involves its acceptability, practicality, and cost. Statistical power is a methodological concern related to internal validity and the likelihood of detecting effects, not a dimension of social validity.",
  },
  {
    id: 12048,
    topic: "Evaluating ABA Research: Theoretical Significance",
    prompt: "Hayes, Rincover, and Solnick (1980) identified a 'technical drift' in applied behavior analysis away from conceptual analyses toward an emphasis on client cure. They warned this would likely result in:",
    options: [
      "Increased social validity of published research",
      "A loss of scientific understanding due to focusing purely on the technical aspects of improving behavior",
      "Greater generality of findings because more diverse populations would be included in studies",
      "Reduced treatment integrity because practitioners would prioritize outcomes over procedural rigor"
    ],
    correctIndex: 1,
    explanation: "Hayes et al. (1980) warned that a focus on client cure at the expense of conceptual analysis would likely result in a loss of scientific understanding. They recommended more thorough analyses of behavior to identify actual functional variables and improve the efficiency and generality of behavioral programs.",
  },
  {
    id: 12049,
    topic: "Evaluating ABA Research: Theoretical Significance",
    prompt: "Sidman (1960) distinguished simple reliability from 'knowledgeable reproducibility.' Knowledgeable reproducibility refers to:",
    options: [
      "Replication conducted by independent research teams in multiple geographical locations",
      "Reproducibility achieved simply by following the same procedure without understanding why it works",
      "A more complete level of analysis in which all important factors controlling the functional relation have been identified and controlled",
      "The ability to reproduce behavior change effects in group designs using random assignment"
    ],
    correctIndex: 2,
    explanation: "Sidman differentiated simple reliability from 'knowledgeable reproducibility,' a more complete level of analysis in which all of the important factors influencing the functional relation have been identified and controlled, not just the surface-level procedure.",
  },
  {
    id: 12050,
    topic: "Evaluating ABA Research: Theoretical Significance",
    prompt: "A published study demonstrates a significant behavior change but its methods do not make systematic conceptual sense in relation to known behavioral principles. According to Baer, Wolf, and Risley (1987), such a study:",
    options: [
      "Meets the full analytic standard for applied behavior analysis because it demonstrated convincing behavior change",
      "May be convincingly applied and behavioral yet not sufficiently analytic, because effective behavior-change methods must also make systematic conceptual sense",
      "Lacks internal validity because the independent variable was not clearly defined",
      "Has high social validity but low external validity because generality was not established through replication"
    ],
    correctIndex: 1,
    explanation: "Baer, Wolf, and Risley (1987) emphasized that applied behavior analysis is considered analytic only when it demonstrates convincingly how to make behavior changes and when its methods make systematic, conceptual sense. A study that changes behavior by methods that do not make conceptual sense may be applied and behavioral but is not sufficiently analytic.",
  },
];

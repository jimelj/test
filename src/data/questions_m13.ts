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
];

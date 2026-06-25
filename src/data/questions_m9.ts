import type { Question } from "../types";

/**
 * BCBA practice questions for Cooper et al., Chapter 6: Constructing and Interpreting Graphic Displays of Behavioral Data.
 * Grounded in the chapter text. Option order is shuffled at runtime, so
 * correctIndex placement here is arbitrary.
 */
export const QUESTIONS_M9: Question[] = [
  {
    id: 8001,
    topic: "Purpose and Benefits of Graphic Displays",
    prompt: "Which of the following best describes the primary function of a graph in applied behavior analysis?",
    options: [
      "To replace the need for direct observation of behavior",
      "To communicate descriptions and summaries of data that enable rapid and accurate analysis",
      "To provide a statistical test of the significance of behavior change",
      "To eliminate variability in behavioral data by averaging across sessions"
    ],
    correctIndex: 1,
    explanation: "Parsonson and Baer (1978) stated that the function of the graph is to communicate, in a readily assimilable and attractive manner, descriptions and summaries of data that enable rapid and accurate analysis of the facts.",
  },
  {
    id: 8002,
    topic: "Purpose and Benefits of Graphic Displays",
    prompt: "Visual analysis of graphed data is described as a conservative method for determining the significance of behavior change. What does this mean in practice?",
    options: [
      "Only variables that produce large, replicable, and meaningful effects are considered significant, screening out weak variables",
      "Behavior analysts set a predetermined alpha level before interpreting any graph",
      "Visual analysis always yields more significant findings than statistical tests",
      "A conservative method means that all data must be reviewed by a statistician before conclusions are drawn"
    ],
    correctIndex: 0,
    explanation: "Visual analysis is conservative because a behavior change must look impressive on a graph, not just reach statistical significance. Variables that produce weak or unstable effects are screened out, enabling applied behavior analysts to develop a useful technology of behavior change.",
  },
  {
    id: 8004,
    topic: "Purpose and Benefits of Graphic Displays",
    prompt: "Which of the following is a benefit of graphic displays that is NOT typically offered by statistical tests of inference?",
    options: [
      "Graphs require the data to meet preset mathematical properties before analysis",
      "Graphs impose a predetermined level for determining the significance of behavior change",
      "Graphs enable independent judgments and interpretations by readers who can examine the data directly",
      "Graphs require a licensed statistician to interpret the results"
    ],
    correctIndex: 2,
    explanation: "Graphs enable and encourage independent judgments and interpretations of the meaning and significance of behavior change. Instead of relying on an author's interpretations or statistical manipulations, readers can form independent conclusions based on their own visual analysis of the data.",
  },
  {
    id: 8006,
    topic: "Line Graphs",
    prompt: "The simple line graph used in applied behavior analysis is based on which mathematical system?",
    options: [
      "The Pythagorean coordinate system",
      "The logarithmic ratio scale developed by Skinner",
      "The Cartesian coordinate system created by Rene Descartes in the 17th century",
      "The equal-proportion ratio scale developed by Lindsley"
    ],
    correctIndex: 2,
    explanation: "The simple line graph, or frequency polygon, is based on the Cartesian coordinate system created by Rene Descartes in the 17th century. It is a two-dimensional area formed by the intersection of two perpendicular reference lines, called axes.",
  },
  {
    id: 8007,
    topic: "Parts of a Basic Line Graph",
    prompt: "On most line graphs in applied behavior analysis, what does the horizontal axis (x-axis) most often represent?",
    options: [
      "The value of the dependent variable",
      "The passage of time and the presence, absence, or value of the independent variable",
      "The cumulative number of responses since data collection began",
      "The ratio of correct to incorrect responses per session"
    ],
    correctIndex: 1,
    explanation: "The horizontal axis is a straight horizontal line that most often represents the passage of time and the presence, absence, or value of the independent variable. A defining characteristic of applied behavior analysis is repeated measurement of behavior across time.",
  },
  {
    id: 8009,
    topic: "Parts of a Basic Line Graph",
    prompt: "Condition change lines on a line graph serve what purpose?",
    options: [
      "They connect successive data points within a given condition to form the data path",
      "They are vertical lines drawn upward from the horizontal axis to show points in time at which changes in the independent variable occurred",
      "They are horizontal dashed lines indicating the mean level of performance within a condition",
      "They mark the origin of the graph where the x-axis and y-axis intersect"
    ],
    correctIndex: 1,
    explanation: "Condition change lines are vertical lines drawn upward from the horizontal axis to show points in time at which changes in the independent variable occurred. They should be placed after the last data point before the change and before the first data point after the change.",
  },
  {
    id: 8010,
    topic: "Parts of a Basic Line Graph",
    prompt: "Each data point on a line graph represents two pieces of information. Which of the following correctly identifies both?",
    options: [
      "The mean of all previous sessions and the current session number",
      "A quantifiable measure of the target behavior during a given observation period, and the time or experimental conditions under which that measurement was conducted",
      "The overall response rate across all conditions and the local response rate within the current session",
      "The level of the behavior and the trend of the behavior over all previous sessions"
    ],
    correctIndex: 1,
    explanation: "Each data point on a graph represents two facts: (a) a quantifiable measure of the target behavior recorded during a given observation period and (b) the time or experimental conditions under which that particular measurement was conducted.",
  },
  {
    id: 8013,
    topic: "Variations of the Simple Line Graph: Multiple Data Paths",
    prompt: "A graph with multiple data paths can be used to display which of the following? Select the most complete answer.",
    options: [
      "Only two or more different behaviors exhibited by a single participant",
      "Two or more dimensions of the same behavior, two or more different behaviors, the same behavior under different alternating conditions, changes in target behavior relative to changing values of an independent variable, or the behavior of two or more participants",
      "Only the behavior of two or more participants on the same set of axes",
      "Only measures of the same behavior under different conditions that alternate throughout an experimental phase"
    ],
    correctIndex: 1,
    explanation: "Graphs with multiple data paths are used frequently in applied behavior analysis to show (a) two or more dimensions of the same behavior, (b) two or more different behaviors, (c) the same behavior under different and alternating experimental conditions, (d) changes in target behavior relative to the changing values of an independent variable, and (e) the behavior of two or more participants.",
  },
  {
    id: 8016,
    topic: "Bar Graphs",
    prompt: "Bar graphs are most appropriately used to display data when which condition exists?",
    options: [
      "The behavior can only occur once per measurement session",
      "The researcher wants to show cumulative response totals over time",
      "The data sets are discrete and not related by an underlying dimension that could scale the horizontal axis",
      "The behavior analyst wants to display local and overall response rates simultaneously"
    ],
    correctIndex: 2,
    explanation: "Bar graphs are used to display discrete sets of data that are not related to one another by a common underlying dimension by which the horizontal axis could be scaled, such as different preferred stimuli compared across establishing operation conditions.",
  },
  {
    id: 8017,
    topic: "Bar Graphs",
    prompt: "A potential concern with bar graphs that present a mean or median score for each condition is that they may do which of the following?",
    options: [
      "Underestimate the overall level of performance in each condition",
      "Mask important variability in the data",
      "Overestimate the number of data points collected",
      "Make it impossible to identify the independent variable"
    ],
    correctIndex: 1,
    explanation: "Bar graphs that present a measure of central tendency, such as the mean or median score for each condition, may mask important variability in the data. The range of measures represented by a mean or median can be shown with range bars to address this limitation.",
  },
  {
    id: 8019,
    topic: "Cumulative Records",
    prompt: "On a cumulative record, what does the y-axis value of any data point represent?",
    options: [
      "The response rate during that particular session only",
      "The total number of responses recorded since the beginning of data collection",
      "The percentage of correct responses across all sessions",
      "The local response rate during the most recent portion of the session"
    ],
    correctIndex: 1,
    explanation: "A cumulative record is constructed by adding the number of responses recorded during each observation period to the total number of responses recorded during all previous observation periods. The y-axis value of any data point on a cumulative graph represents the total number of responses recorded since the beginning of data collection.",
  },
  {
    id: 8020,
    topic: "Cumulative Records",
    prompt: "On a cumulative graph, what does the steepness of the slope of the data path indicate?",
    options: [
      "The number of data points collected during that phase",
      "The degree of variability within the condition",
      "The response rate: the steeper the slope, the higher the response rate",
      "The duration of the observation session"
    ],
    correctIndex: 2,
    explanation: "On a cumulative record, the steeper the slope, the higher the response rate. The rate of responding is directly proportional to the slope of the curve. To produce a visual representation of an overall rate, the first and last data points of a given series of observations should be connected with a straight line.",
  },
  {
    id: 8022,
    topic: "Cumulative Records",
    prompt: "A cumulative graph is preferred over a noncumulative line graph in which of the following situations?",
    options: [
      "When the researcher wants to display variability and decelerating trends as clearly as possible",
      "When the target behavior can occur many times per session and the researcher wants to compare session-by-session rates",
      "When the total number of responses emitted over time is important, or when the target behavior can occur or not occur just once per observation session",
      "When the data set includes many conditions with different mean levels that need to be compared statistically"
    ],
    correctIndex: 2,
    explanation: "A cumulative graph may be preferable when (a) the total number of responses over time is important or progress toward a specific goal can be measured in cumulative units, (b) it is used as a source of feedback for clients, (c) the target behavior can occur or not occur just once per observation session, or (d) a fine analysis of intricate behavior-environment relations is desired.",
  },
  {
    id: 8024,
    topic: "Ratio Charts and the Standard Celeration Chart",
    prompt: "On a ratio (semilogarithmic) chart, how are equal distances on the vertical axis interpreted?",
    options: [
      "Equal distances represent equal absolute amounts of behavior change",
      "Equal distances represent equal ratios or proportions of behavior change",
      "Equal distances represent equal numbers of sessions between data points",
      "Equal distances represent equal durations of the experimental conditions"
    ],
    correctIndex: 1,
    explanation: "On a ratio scale, equal vertical distances correspond to equal ratios of change in the variable being measured. For example, a doubling of response rate from 4 to 8 per minute appears the same distance as a doubling from 50 to 100 per minute, because both represent a times-2 change.",
  },
  {
    id: 8025,
    topic: "Ratio Charts and the Standard Celeration Chart",
    prompt: "What does 'celeration' measure on the Standard Celeration Chart?",
    options: [
      "The total number of responses emitted across all conditions",
      "The percentage of correct responses per session",
      "A linear measure of frequency change across time, specifically a factor by which frequency multiplies or divides per unit of time",
      "The mean level of responding within a given experimental condition"
    ],
    correctIndex: 2,
    explanation: "What makes the Standard Celeration Chart standard is its consistent display of celeration, a linear measure of frequency change across time, a factor by which frequency multiplies or divides per unit of time. Accelerating and decelerating performances are described using multiplication and division notation.",
  },
  {
    id: 8026,
    topic: "Ratio Charts and the Standard Celeration Chart",
    prompt: "Precision teaching, which uses the Standard Celeration Chart, is predicated on which of the following positions?",
    options: [
      "Learning is best measured as a change in percentage accuracy, and proportional changes are less important than absolute changes",
      "Learning is best measured as a change in response rate, most often occurs through proportional changes, and past changes in performance can project future learning",
      "Learning can only be displayed effectively on equal-interval graphs, and rate is a secondary concern",
      "Learning is best measured by computing a celeration value from least-squares regression equations applied to accuracy data"
    ],
    correctIndex: 1,
    explanation: "Precision teaching is predicated on the position that (a) learning is best measured as a change in response rate, (b) learning most often occurs through proportional changes in behavior, and (c) past changes in performance can project future learning.",
  },
  {
    id: 8029,
    topic: "Scatterplots",
    prompt: "Which of the following best defines a scatterplot?",
    options: [
      "A graphic display that connects successive data points to show the trend of behavior over time",
      "A graphic display that shows the relative distribution of individual measures in a data set with respect to the variables depicted by the x- and y-axes, with data points left unconnected",
      "A bar graph that displays the frequency of behavior during discrete conditions without an underlying time dimension",
      "A cumulative graph that resets to zero each time the total responses exceed the scale limit"
    ],
    correctIndex: 1,
    explanation: "A scatterplot is a graphic display that shows the relative distribution of individual measures in a data set with respect to the variables depicted by the x- and y-axes. Data points on a scatterplot are unconnected, and patterns of data points falling along lines or clusters suggest certain relationships.",
  },
  {
    id: 8030,
    topic: "Scatterplots",
    prompt: "Applied behavior analysts sometimes use scatterplots to discover the temporal distribution of a target behavior. What information does this type of display reveal?",
    options: [
      "The cumulative number of responses across all sessions broken down by time of day",
      "Whether the behavior's occurrence is typically associated with certain time periods",
      "The overall response rate compared to local response rates within a session",
      "The degree of overlap between data points across adjacent experimental conditions"
    ],
    correctIndex: 1,
    explanation: "Applied behavior analysts use scatterplots to discover the temporal distribution of a target behavior. Touchette and colleagues described a procedure for observing and recording behavior that produces a scatterplot graphically showing whether the behavior's occurrence is typically associated with certain time periods.",
  },
  {
    id: 8031,
    topic: "Constructing Line Graphs: Drawing and Scaling Axes",
    prompt: "What ratio of the vertical axis length to the horizontal axis length is recommended for most behavioral graphs?",
    options: [
      "The vertical axis should equal the horizontal axis, producing a square graph",
      "The vertical axis should be approximately two-thirds the length of the horizontal axis",
      "The vertical axis should be at least twice the length of the horizontal axis to show variability clearly",
      "The vertical axis should be approximately one-quarter the length of the horizontal axis"
    ],
    correctIndex: 1,
    explanation: "A vertical axis approximately two-thirds the length of the horizontal axis works well for most behavioral graphs. Recommendations in the behavioral literature range from 5:8 to 3:4 for the vertical-to-horizontal axis ratio. Tufte (2001) also recommends a vertical-to-horizontal ratio of 5:8.",
  },
  {
    id: 8032,
    topic: "Constructing Line Graphs: Drawing and Scaling Axes",
    prompt: "What is a scale break on the horizontal axis, and when is it used?",
    options: [
      "A solid vertical line used to separate two experimental conditions",
      "An open, unconnected portion of the axis with a squiggly line at each end, used to indicate discontinuities in the progression of time or periods when data were not collected",
      "A dashed horizontal line indicating the mean level of performance within a condition",
      "A symbol placed next to data points to indicate unplanned events during an experiment"
    ],
    correctIndex: 1,
    explanation: "A scale break is an open, unconnected portion of the axis with a squiggly line at each end. Scale breaks on the x-axis indicate discontinuities in the progression of time and can also signal periods when data were not collected or when regularly spaced data points represent consecutive measurements made at unequal intervals.",
  },
  {
    id: 8033,
    topic: "Constructing Line Graphs: Drawing and Scaling Axes",
    prompt: "When scaling the vertical axis of an equal-interval graph, what effect does increasing the distance between each unit of measurement have on the portrayal of the data?",
    options: [
      "It minimizes the portrayal of variability in the data set",
      "It has no effect on the visual appearance of variability",
      "It magnifies the variability in the data",
      "It automatically converts the equal-interval scale to a ratio scale"
    ],
    correctIndex: 2,
    explanation: "Increasing the distance on the vertical axis between each unit of measurement magnifies the variability in the data, whereas contracting the units of measurement on the vertical axis minimizes the portrayal of variability in the data set. The graph maker should plot the data against several different scales, watching for distortion.",
  },
  {
    id: 8035,
    topic: "Constructing Line Graphs: Condition Change Lines and Labels",
    prompt: "Where should a condition change line be placed relative to the adjacent data points?",
    options: [
      "Directly on the data point representing the last measure of the previous condition",
      "After (to the right of) the last data point before the change, and before (to the left of) the first data point in the new condition, so that data points fall clearly on either side",
      "Centered between the last data point of the old condition and the first data point of the new condition, directly between them",
      "At the midpoint of the entire horizontal axis, regardless of when the condition change occurred"
    ],
    correctIndex: 1,
    explanation: "Condition change lines should be placed after (to the right of) the data point representing the last measure prior to the change, and before (to the left of) the data point representing the first measure obtained after the change. In this way, data points fall clearly on either side of change lines and never on the lines themselves.",
  },
  {
    id: 8038,
    topic: "Constructing Line Graphs: Data Points and Data Paths",
    prompt: "Under which of the following circumstances should successive data points NOT be connected with a line?",
    options: [
      "When the data within a condition show an increasing trend",
      "When the data points span a significant period of time in which behavior was not measured, or when they fall on either side of a condition change line",
      "When the data are plotted on a cumulative graph with a steep slope",
      "When the behavior analyst is using a bar graph rather than a line graph"
    ],
    correctIndex: 1,
    explanation: "Data points should not be connected when they fall on either side of a condition change line, span a significant period of unmeasured behavior, span discontinuities of time, fall on either side of a period in which data were not collected, or represent follow-up data not regularly spaced in time like the rest of the study.",
  },
  {
    id: 8039,
    topic: "Constructing Line Graphs: General Guidelines",
    prompt: "Graphs in applied behavior analysis should be printed in which color?",
    options: [
      "Multiple colors should be used to distinguish data paths clearly and highlight experimental effects",
      "Black only, because the use of color can encourage perceptions of performance or experimental effects that differ from perceptions of the same data displayed in black",
      "Any color is acceptable as long as all data paths are distinct from one another",
      "Only blue or black ink, with red reserved for condition change lines"
    ],
    correctIndex: 1,
    explanation: "Graphs should be printed in only one color, black. Although color can enhance attractiveness and highlight features, it is discouraged in scientific data presentation. Every effort must be made to let the data stand on their own. Color can encourage perceptions that differ from those produced by the same data in black.",
  },
  {
    id: 8040,
    topic: "Interpreting Graphically Displayed Behavioral Data: Visual Analysis",
    prompt: "Visual analysis of data from an applied behavior analysis experiment is conducted to answer which two questions?",
    options: [
      "Was the behavior change statistically significant, and was the sample size large enough to detect the effect?",
      "Did behavior change in a meaningful way, and if so, to what extent can that behavior change be attributed to the independent variable?",
      "Was the intervention implemented with fidelity, and did the participants enjoy the intervention?",
      "Did behavior change in the predicted direction, and did all participants respond in the same way?"
    ],
    correctIndex: 1,
    explanation: "Visual analysis of data from an applied behavior analysis experiment is conducted to answer two questions: (a) Did behavior change in a meaningful way? and (b) if so, to what extent can that behavior change be attributed to the independent variable?",
  },
  {
    id: 8042,
    topic: "Interpreting Graphically Displayed Behavioral Data: Variability",
    prompt: "A behavior analyst notices a high degree of variability within a given baseline condition. According to visual analysis principles, what does this typically indicate and what action is recommended?",
    options: [
      "High variability indicates strong experimental control; fewer data points are needed to establish a stable pattern",
      "High variability usually indicates insufficient control over factors influencing the behavior; a greater number of data points is necessary to establish a predictable pattern of performance",
      "High variability indicates the intervention is working; the analyst should begin the next phase immediately",
      "High variability indicates that the dependent variable measure is unreliable and should be replaced with a different measurement system"
    ],
    correctIndex: 1,
    explanation: "A high degree of variability within a given condition usually indicates that the researcher or practitioner has achieved insufficient control over the factors influencing the behavior. In general, the greater the variability, the greater the number of data points necessary to establish a predictable pattern of performance.",
  },
  {
    id: 8043,
    topic: "Interpreting Graphically Displayed Behavioral Data: Level",
    prompt: "In visual analysis, 'level' refers to which of the following?",
    options: [
      "The overall direction taken by a data path, described as increasing, decreasing, or zero trend",
      "The value on the vertical axis scale around which a set of behavioral measures converge",
      "The degree to which repeated measures of behavior yield different outcomes",
      "The total number of responses emitted since the beginning of data collection"
    ],
    correctIndex: 1,
    explanation: "The value on the vertical axis scale around which a set of behavioral measures converge is called level. Level is examined within a condition in terms of its absolute value on the y-axis (mean, median, or range), the degree of stability or variability, and the extent of change from one level to another.",
  },
  {
    id: 8046,
    topic: "Interpreting Graphically Displayed Behavioral Data: Trend",
    prompt: "Trends in behavioral data are described in terms of three characteristics. Which of the following correctly identifies all three?",
    options: [
      "Direction, duration, and the total number of data points",
      "Direction (increasing, decreasing, or zero), degree or magnitude (gradual or steep), and extent of variability of data points around the trend",
      "Slope, intercept, and the coefficient of determination from a regression analysis",
      "Level, variability, and the number of overlapping data points between conditions"
    ],
    correctIndex: 1,
    explanation: "Trends are described in terms of their direction (increasing, decreasing, or zero trend), degree or magnitude (gradual or steep), and extent of variability of data points around the trend. The overall direction taken by a data path is its trend.",
  },
  {
    id: 8048,
    topic: "Interpreting Graphically Displayed Behavioral Data: Between Conditions",
    prompt: "When comparing data between conditions, how does overlap of data points between adjacent conditions affect interpretation?",
    options: [
      "Overlap of data points between conditions confirms that the independent variable caused the behavior change",
      "When all data points in one condition fall outside the range of values in an adjacent condition, there is little doubt that behavior changed; when many data points overlap, less confidence can be placed in the effect of the independent variable",
      "Overlap between conditions means that the conditions were implemented incorrectly and the study should be restarted",
      "The degree of overlap is irrelevant; only the difference in mean level lines between conditions matters"
    ],
    correctIndex: 1,
    explanation: "When all data points in one condition fall outside the range of values for all data points in an adjacent condition (no overlap), there is little doubt that behavior changed. When many data points in adjacent conditions overlap one another on the vertical axis, less confidence can be placed in the effect of the independent variable associated with the change in conditions.",
  },
  {
    id: 8050,
    topic: "Interpreting Graphically Displayed Behavioral Data: Between Conditions",
    prompt: "Before interpreting the data displayed in a graph, a behavior analyst should first do which of the following?",
    options: [
      "Calculate the mean level and draw mean level lines for each condition immediately",
      "Carefully examine the graph's overall construction, read the figure legend, axis labels, and condition labels, and check the scaling of each axis for potential distortion",
      "Count all data points in every condition and compute the total number of responses across all phases",
      "Draw a freehand trend line through the entire data set before examining individual conditions"
    ],
    correctIndex: 1,
    explanation: "Before attempting to interpret data, the viewer should carefully examine the graph's overall construction. First, read the figure legend, axis labels, and all condition labels. Then look at the scaling of each axis, taking note of the location, numerical value, and relative significance of any scale breaks. If distortion is suspected, the data should be replotted before interpretation is attempted.",
  },
];

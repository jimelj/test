import type { Question } from "../types";

/**
 * BCBA practice questions for Cooper et al., Chapter 31: Ethical and Professional Responsibilities of Applied Behavior Analysts.
 * Grounded in the chapter text. Option order is shuffled at runtime, so
 * correctIndex placement here is arbitrary.
 */
export const QUESTIONS_M34: Question[] = [
  {
    id: 33001,
    topic: "Ethics Defined",
    prompt: "From a behavior analytic viewpoint, ethics is best defined as:",
    options: [
      "Vague inherent traits or characteristics of individuals or groups",
      "Specific rules of conduct that describe the personal behavior of individuals",
      "A fixed set of moral absolutes that do not change across cultures",
      "The subjective feelings of right and wrong held by a practitioner"
    ],
    correctIndex: 1,
    explanation: "Ethics is defined by specific rules of conduct. These rules describe the personal behavior of individuals, not vague inherent traits or characteristics of individuals or groups.",
    highlight: "ethics"
  },
  {
    id: 33002,
    topic: "Ethics Defined",
    prompt: "The deontological approach to ethics evaluates the ethicality of behavior based on:",
    options: [
      "The consequences or results of the behavior",
      "The nature of the act itself, regardless of consequences",
      "Cultural norms at any given point in time",
      "The opinion of the majority of professionals in the field"
    ],
    correctIndex: 1,
    explanation: "The deontological (acts-oriented) approach evaluates the ethicality of behavior based solely on the nature of the act itself regardless of consequences.",
    highlight: "ethics"
  },
  {
    id: 33003,
    topic: "Ethics Defined",
    prompt: "The utilitarian approach to ethics judges the rightness or wrongness of a behavior based on:",
    options: [
      "Formal codes of professional conduct",
      "Whether the act is legal in the relevant jurisdiction",
      "Its consequences or results",
      "The practitioner's personal learning history"
    ],
    correctIndex: 2,
    explanation: "The utilitarian (teleological or results-oriented) approach judges the rightness or wrongness of a behavior based on its consequences or results, providing needed flexibility when implementing rules of conduct.",
    highlight: "ethics"
  },
  {
    id: 33004,
    topic: "Ethics Defined",
    prompt: "Lattal and Clark (2007) stated that rules of conduct alone are:",
    options: [
      "Sufficient to resolve all complex ethical dilemmas practitioners face",
      "Unnecessary if a practitioner has a strong personal moral code",
      "Neither specific enough nor comprehensive enough to cover all aspects of a difficult ethical decision",
      "Equivalent in value to legal regulations governing professional behavior"
    ],
    correctIndex: 2,
    explanation: "Lattal and Clark stated that 'Rules alone are neither specific enough nor comprehensive enough to cover all aspects of a difficult ethical decision.' The utilitarian approach provides a principled way to analyze ethical questions not answered with a simple yes or no.",
    highlight: "ethics"
  },
  {
    id: 33005,
    topic: "Why Ethics Is Important",
    prompt: "Skinner defined countercontrol as occurring when someone responds to coercive or aversive external control by:",
    options: [
      "Seeking mediation through a neutral third party",
      "Immediately complying in order to reduce the aversive stimulus",
      "Filing a formal complaint with a professional licensing board",
      "Showing an emotional reaction including operant behavior that injures or is aversive to the controller"
    ],
    correctIndex: 3,
    explanation: "Skinner defined countercontrol as occurring when someone responds to coercion or an aversive form of external control by showing 'an emotional reaction of anger or frustration including operant behavior which injures or is otherwise aversive to the controller.'",
    highlight: "ethics"
  },
  {
    id: 33006,
    topic: "Why Ethics Is Important",
    prompt: "Groups such as the elderly, children, individuals with intellectual disabilities, or individuals who are incarcerated require external ethical codes partly because:",
    options: [
      "They are legally unable to participate in their own treatment decisions",
      "Their capacity to countercontrol exploitative or harsh conditions is limited or absent",
      "Professional organizations have historically excluded them from ethical protections",
      "Their behavior is primarily controlled by biological rather than environmental factors"
    ],
    correctIndex: 1,
    explanation: "Skinner noted that the capacity for countercontrol is limited or absent in certain groups. O'Donohue and Ferguson concluded that external agencies need to step in by developing and enforcing ethical codes to offset this imbalance.",
    highlight: "ethics"
  },
  {
    id: 33007,
    topic: "Why Ethics Is Important",
    prompt: "Three fundamental questions must ground every behavior analyst's decisions and actions. Which option correctly lists all three?",
    options: [
      "Is it legal? Is it cost effective? Is it empirically supported?",
      "Who benefits? Who is harmed? What does the client prefer?",
      "What is the right thing to do? What is worth doing? What does it mean to be a good behavior analyst?",
      "Is there informed consent? Is confidentiality maintained? Is there a conflict of interest?"
    ],
    correctIndex: 2,
    explanation: "Reich (1988) and Smith (1987, 1993) identified three fundamental questions: What is the right thing to do? What is worth doing? and What does it mean to be a good behavior analyst? These questions guide each behavior analyst's personal and professional practices.",
    highlight: "ethics"
  },
  {
    id: 33008,
    topic: "What Is Worth Doing",
    prompt: "Social validity in behavioral treatment requires answering which three questions?",
    options: [
      "Are the goals acceptable? Are the procedures acceptable and aligned with best practice? Do the results show meaningful, significant, and sustainable change?",
      "Is the intervention evidence-based? Is it cost-effective? Is it replicable?",
      "Does the client consent? Does the guardian consent? Does the treatment team consent?",
      "Is the intervention least restrictive? Is it function-based? Is it generalizable?"
    ],
    correctIndex: 0,
    explanation: "Wolf (1978) and Peters and Heron (1993) outlined that social validity asks (a) whether the goals are acceptable, (b) whether procedures are acceptable and aligned with best treatment practices, and (c) whether obtained results show meaningful, significant, and sustainable change.",
  },
  {
    id: 33009,
    topic: "What Is Worth Doing",
    prompt: "A behavior analyst expedites treatment for a client with dangerous self-injurious behavior by using positive punishment before completing a functional assessment. This illustrates the risk of:",
    options: [
      "Failing to maintain confidentiality",
      "Operating outside one's area of professional competence",
      "Situational ethics, where short-term results compromise consideration of long-term effects",
      "Creating a conflict of interest through a dual role"
    ],
    correctIndex: 2,
    explanation: "The chapter warns that the need to expedite treatment is not an invitation to adopt situational ethics, where the promise of a quick result in the short term compromises consideration of the long-term effects. A careful functional assessment might have identified a less intrusive intervention.",
    highlight: "ethics"
  },
  {
    id: 33010,
    topic: "What Is Worth Doing",
    prompt: "In a cost-benefit analysis for a proposed intervention, a behavior analyst must weigh:",
    options: [
      "The likely difference between the cost of treatment and the projected future benefits to the person",
      "Only the financial cost to the funding source against potential savings",
      "The risk of legal liability against the risk of not treating the problem",
      "The number of published studies supporting the treatment against those opposing it"
    ],
    correctIndex: 0,
    explanation: "A cost-benefit analysis requires weighing the likely difference between the cost of treatment (resources involved in planning, implementing, monitoring, and evaluating) and the projected benefits (likely future potential gains by the person). The benefit should be significant enough to justify the short- and long-term cost.",
  },
  {
    id: 33011,
    topic: "What Does It Mean to Be a Good Behavior Analyst",
    prompt: "Being a good behavior analyst requires adherence to The Compliance Code. However, this adherence alone is:",
    options: [
      "Sufficient for ethical practice, because the Code covers all possible situations",
      "Necessary and sufficient when combined with keeping the client's welfare at the forefront",
      "Necessary but not sufficient; the practitioner must also be self-regulating",
      "Optional as long as the practitioner follows applicable laws in their jurisdiction"
    ],
    correctIndex: 2,
    explanation: "While adherence to The Compliance Code is necessary, it is not sufficient. A good practitioner must be self-regulating (Rosenberg and Schwartz, 2018), seeking ways to calibrate decisions over time by integrating values, contingencies, rights, and responsibilities.",
    highlight: "ethics"
  },
  {
    id: 33012,
    topic: "Standards of Professional Practice",
    prompt: "The Professional and Ethical Compliance Code for Behavior Analysts contains how many elements organized into how many sections?",
    options: [
      "50 elements organized into 8 sections",
      "85 elements organized into 12 sections",
      "60 elements organized into 10 sections",
      "71 elements organized into 10 sections"
    ],
    correctIndex: 3,
    explanation: "The Compliance Code contains 71 elements organized into 10 different sections relevant to professional and ethical behavior of behavior analysts, along with a glossary of terms.",
    highlight: "ethics"
  },
  {
    id: 33013,
    topic: "Standards of Professional Practice",
    prompt: "Five complementary documents describe standards of professional conduct for applied behavior analysts. Which of the following is one of the two documents specifying a code of conduct rather than a position statement?",
    options: [
      "The Right to Effective Behavioral Treatment (ABAI, 1989)",
      "Statement on Restraint and Seclusion (ABAI, 2010)",
      "Ethical Principles of Psychologists and Code of Conduct (APA, 2010)",
      "The Right to Effective Education (ABAI, 1990)"
    ],
    correctIndex: 2,
    explanation: "Two of the five documents specify codes of conduct: the Professional and Ethical Compliance Code for Behavior Analysts (BACB, 2014) and the Ethical Principles of Psychologists and Code of Conduct (APA, 2010). The other three are position statements.",
    highlight: "ethics"
  },
  {
    id: 33014,
    topic: "Right to Effective Behavioral Treatment",
    prompt: "The ABAI task force (Van Houten et al., 1988) outlined six basic client rights. Which of the following is one of those rights?",
    options: [
      "A right to choose any treatment available, regardless of evidence base",
      "A right to behavioral assessment and ongoing evaluation",
      "A right to be exempt from aversive procedures under any circumstances",
      "A right to select the behavior analyst who provides their services"
    ],
    correctIndex: 1,
    explanation: "The task force outlined six rights including the right to behavioral assessment and ongoing evaluation. The six rights collectively form the basis for directing the ethical and appropriate application of behavioral treatment.",
    highlight: "ethics"
  },
  {
    id: 33015,
    topic: "Professional Certification and Licensure",
    prompt: "Professional certification in behavior analysis, issued by the BACB, differs from a state-issued license in that certification is:",
    options: [
      "Mandatory to practice in any jurisdiction, whereas licensure is voluntary",
      "A government-issued document established by law, whereas licensure is voluntary",
      "A voluntary credential issued by a private organization, whereas a license is a mandatory government credential",
      "Limited to one state or province, whereas licensure crosses national borders"
    ],
    correctIndex: 2,
    explanation: "Professional certification is a voluntary credential issued by a private organization (the BACB). A license is a state, provincial, or national government document established by law that is a mandatory credential needed to practice.",
    highlight: "ethics"
  },
  {
    id: 33016,
    topic: "Practicing Within Areas of Competence",
    prompt: "A behavior analyst with extensive experience working with typically developing adolescents wishes to begin working with children with autism-related language delays. To do so ethically, the analyst should:",
    options: [
      "Begin immediately, since BCBA certification covers all populations",
      "Complete at least one CEU course and then begin independently",
      "Obtain additional active supervision before working with the new population",
      "Refer all such cases permanently, because cross-population practice is prohibited"
    ],
    correctIndex: 2,
    explanation: "A behavior analyst should not begin working with a new clinical population without obtaining additional active supervision. The behavior analyst must accrue adequate supervised experience working with any new population.",
    highlight: "ethics"
  },
  {
    id: 33017,
    topic: "Developing Competence in Supervision",
    prompt: "In 2015, the BACB implemented supervision requirements that included which of the following?",
    options: [
      "A minimum of 40 supervised fieldwork hours before providing supervision",
      "A registry publicly linking the BCBA supervisor to supervisees",
      "Annual face-to-face evaluations of supervisory competence by the BACB",
      "Mandatory co-supervision with a BCBA-D for all new supervisors"
    ],
    correctIndex: 1,
    explanation: "The BACB's 2015 supervision requirements included (a) specific training in supervisory practices prior to supervising others, (b) continuing education in the area of supervision, and (c) a registry publicly linking the BCBA supervisor to supervisees.",
    highlight: "ethics"
  },
  {
    id: 33018,
    topic: "Developing Competence in Supervision",
    prompt: "Sub-code 5.02 of The Compliance Code addresses supervisory volume. A well-intentioned BCBA who gradually takes on more supervisees than she can effectively oversee is:",
    options: [
      "Acting ethically because her intent is to benefit the field",
      "Acting unethically because overcommitment produces poor training outcomes regardless of intent",
      "Acting ethically as long as she discloses the supervisee count to the BACB",
      "Acting appropriately because supervisory volume is the supervisee's responsibility to manage"
    ],
    correctIndex: 1,
    explanation: "Sub-code 5.02 refers to supervisory volume commensurate with the ability to provide high-quality, effective supervision. Whether overcommitment results from financial pressure or genuine intent to benefit the field, the risk for a poor outcome is equally high.",
    highlight: "ethics"
  },
  {
    id: 33019,
    topic: "Developing Competence in Supervision",
    prompt: "Sub-code 5.05 of The Compliance Code requires that conditions and expectations of the supervisory relationship be:",
    options: [
      "Communicated verbally at the start of each supervisory session",
      "Clearly communicated in writing at the outset of the relationship in a supervision contract",
      "Determined solely by the supervisee's certification-seeking body",
      "Developed after the first month of supervised practice, once needs are clarified"
    ],
    correctIndex: 1,
    explanation: "Sub-code 5.05 refers to the importance of communicating the conditions for supervision in writing at the outset of the supervisory relationship (in a supervision contract) and abiding by those communicated conditions.",
    highlight: "ethics"
  },
  {
    id: 33020,
    topic: "Maintaining and Expanding Professional Competence",
    prompt: "The BACB requires continuing education units (CEUs) in which two specific areas during each renewal cycle?",
    options: [
      "Research and assessment",
      "Ethics and supervision",
      "Verbal behavior and social skills",
      "Organizational behavior management and staff training"
    ],
    correctIndex: 1,
    explanation: "The BACB requires CEUs in the areas of ethics and supervision during each renewal cycle, reflecting the growing importance of these two areas as critical to effective functioning of an applied behavior analyst.",
    highlight: "ethics"
  },
  {
    id: 33021,
    topic: "Making and Substantiating Professional Claims",
    prompt: "Before completing a full functional assessment, a behavior analyst tells a parent, 'I am certain I can help your son.' This statement is best described as:",
    options: [
      "Appropriate because it builds the therapeutic alliance with the family",
      "Acceptable if the analyst has worked with similar cases before",
      "Unethical because it is a preemptive claim not supported by assessment data",
      "Ethical because expressing confidence is part of professional conduct"
    ],
    correctIndex: 2,
    explanation: "Asserting certainty prior to a full functional assessment is almost certainly an unethical claim. A more appropriate statement would be, 'I have had success working with other children who have profiles similar to your son's.'",
    highlight: "ethics"
  },
  {
    id: 33022,
    topic: "Making and Substantiating Professional Claims",
    prompt: "Misrepresenting one's credentials, training, or background to a recipient of services is:",
    options: [
      "Unethical but never illegal",
      "Legal as long as services are delivered competently",
      "Permissible if the misrepresentation is minor and unintentional",
      "Always unethical and, as likely fraudulent conduct, may be illegal"
    ],
    correctIndex: 3,
    explanation: "Making dishonest statements or claims relating to one's professional experience or credentials is always unethical and, as likely fraudulent conduct, may be illegal.",
    highlight: "ethics"
  },
  {
    id: 33023,
    topic: "Informed Consent",
    prompt: "Three tests must be met before informed consent can be considered valid. Which option correctly lists all three?",
    options: [
      "The person has legal guardianship, the person is an adult, and the person agrees in writing",
      "The person demonstrates capacity to decide, the decision is voluntary, and the person has adequate knowledge of all salient aspects of the treatment",
      "The person is not in crisis, the treatment is evidence-based, and the person's surrogate approves",
      "The person understands the risks, the risks are minimal, and the person is fully informed of alternatives"
    ],
    correctIndex: 1,
    explanation: "Three tests must be met before informed consent can be considered valid: (a) the person must demonstrate the capacity to decide, (b) the decision must be voluntary, and (c) the person must have adequate knowledge of all salient aspects of the treatment.",
    highlight: "ethics"
  },
  {
    id: 33024,
    topic: "Informed Consent",
    prompt: "Hurley and O'Sullivan (1999) described capacity to give informed consent as:",
    options: [
      "A fixed legal standard that does not vary across individuals or procedures",
      "A fluid concept that varies with each individual and proposed procedure",
      "Solely determined by IQ score or diagnosis of intellectual disability",
      "Equivalent to the ability to sign one's name on a legal document"
    ],
    correctIndex: 1,
    explanation: "According to Hurley and O'Sullivan (1999), 'Capacity to give informed consent is a fluid concept and varies with each individual and proposed procedure.' A person may consent to a positive reinforcement program but lack capacity for decisions about more complex procedures.",
    highlight: "ethics"
  },
  {
    id: 33025,
    topic: "Informed Consent",
    prompt: "Surrogate consent for an incapacitated individual is based on:",
    options: [
      "What the surrogate personally believes is best for the individual",
      "The formal recommendation of the behavior analyst providing services",
      "Knowledge of what the incapacitated person would have wanted",
      "A majority vote of all team members involved in the person's care"
    ],
    correctIndex: 2,
    explanation: "Surrogate consent is a legal process by which another individual is authorized to make decisions for a person deemed incompetent, based on the knowledge of what the incapacitated person would have wanted.",
    highlight: "ethics"
  },
  {
    id: 33026,
    topic: "Informed Consent",
    prompt: "When treatment is necessary for an individual who lacks capacity but that individual actively refuses treatment, which type of consent is required?",
    options: [
      "Surrogate consent is sufficient in all jurisdictions",
      "A majority decision by the interdisciplinary team",
      "Guardian consent, because surrogate consent is insufficient in this situation",
      "Written approval from the funding source"
    ],
    correctIndex: 2,
    explanation: "When treatment is deemed necessary for an individual who lacks capacity but that individual refuses treatment, surrogate consent is insufficient. Only a guardian may provide oversight and consent in this situation.",
    highlight: "ethics"
  },
  {
    id: 33027,
    topic: "Informed Consent",
    prompt: "For consent to be considered voluntary, it must be given:",
    options: [
      "In the presence of a professional witness and notarized",
      "Within a structured interdisciplinary team meeting to ensure transparency",
      "In the absence of coercion, duress, or undue influence, with the understanding it can be withdrawn at any time",
      "At least 48 hours before any assessment or intervention begins"
    ],
    correctIndex: 2,
    explanation: "Consent is considered voluntary when given in the absence of coercion, duress, or any undue influence and with the understanding that it can be withdrawn at any time.",
    highlight: "ethics"
  },
  {
    id: 33028,
    topic: "Informed Consent",
    prompt: "To satisfy the knowledge requirement for informed consent, a client must demonstrate understanding by:",
    options: [
      "Signing and dating the consent document in the presence of two witnesses",
      "Passing a written test prepared by the behavior analyst covering all aspects of the treatment",
      "Providing a verbal statement that they understand and agree to participate",
      "Being able to describe the procedures in their own words and correctly answer questions about the plan"
    ],
    correctIndex: 3,
    explanation: "Once information has been provided, the individual must demonstrate an understanding by being able to describe the procedures in their own words and correctly answer questions about the plan.",
    highlight: "ethics"
  },
  {
    id: 33029,
    topic: "Informed Consent",
    prompt: "A risk-benefit analysis as part of the informed consent process should occur:",
    options: [
      "Only at the outset of services, before the first session",
      "Annually during each program review cycle",
      "Prior to initial or subsequent requests for informed consent, and repeatedly throughout the delivery of services",
      "Only when a restrictive procedure is being considered"
    ],
    correctIndex: 2,
    explanation: "A risk-benefit analysis should occur prior to initial or subsequent requests for informed consent, and repeatedly throughout the delivery of services, as described by Bailey and Burch (2016).",
    highlight: "ethics"
  },
  {
    id: 33030,
    topic: "Confidentiality",
    prompt: "Disclosure of confidential information without client consent may occur when:",
    options: [
      "A supervisor requests information for a routine quality assurance review",
      "Credible information suggests imminent harm or danger to the client or another person",
      "A family member who is not the legal guardian requests a progress update",
      "The behavior analyst believes the information would benefit a research study"
    ],
    correctIndex: 1,
    explanation: "Disclosure of confidential information without consent may occur under valid conditions including: as mandated by law, to comply with a court order, when credible information suggests imminent harm or danger to the client or another person, when an immediate crisis develops, or when third-party payment is involved.",
    highlight: "ethics"
  },
  {
    id: 33031,
    topic: "Confidentiality",
    prompt: "The Health Insurance Portability and Accountability Act of 1996 (HIPAA) specifically pertains to:",
    options: [
      "Credentialing standards for behavior analysts providing Medicaid-funded services",
      "Billing accuracy requirements for ABA-based insurance claims",
      "Disclosure requirements for publicly funded research involving human participants",
      "Confidentiality of medical information and records"
    ],
    correctIndex: 3,
    explanation: "HIPAA (Public Law 104-191) specifically pertains to confidentiality of medical information and records. Many ABA-based services are delivered under medically authorized services, so practitioners must follow all HIPAA requirements.",
    highlight: "ethics"
  },
  {
    id: 33032,
    topic: "Confidentiality",
    prompt: "A behavior analyst provides confidential information to a parent without confirming that the parent is the de facto legal guardian. This is best classified as:",
    options: [
      "An intentional breach of confidentiality classified as fraudulent conduct",
      "An unintentional and careless breach of confidentiality",
      "A valid disclosure because parents are presumed to have access rights",
      "A minor procedural error that does not constitute an ethical violation"
    ],
    correctIndex: 1,
    explanation: "This is an example of an unintentional and careless breach of confidentiality. The behavior analyst should have been aware of who has authorized access and released protected information only after confirming proper authorization.",
    highlight: "ethics"
  },
  {
    id: 33033,
    topic: "Social Media and New Technologies",
    prompt: "When discussing client-specific information in any social media context, the chapter recommends that:",
    options: [
      "Verbal consent from the family is sufficient before posting any content",
      "Any individual discussed must never be identifiable by name or location",
      "Private social media groups may be used freely without masking client identity",
      "Posting old photos is acceptable once clients have passed away"
    ],
    correctIndex: 1,
    explanation: "Client-specific information must always be masked, such that any individual discussed can never be identified by name or location. Verbal consent is not sufficient, and posting old photos of deceased clients still constitutes an unauthorized breach of confidentiality.",
    highlight: "ethics"
  },
  {
    id: 33034,
    topic: "Social Media and New Technologies",
    prompt: "One of O'Leary et al.'s (2017) recommendations for ethical use of social media by behavior analysts is to avoid:",
    options: [
      "Referring readers to the professional literature",
      "Using disclaimers about the absence of a professional relationship",
      "Making treatment recommendations via social media platforms",
      "Discussing behavior analysis concepts in public forums"
    ],
    correctIndex: 2,
    explanation: "O'Leary et al. (2017) recommend avoiding making treatment recommendations on social media because there is simply not enough information on social media outlets to give specific advice.",
    highlight: "ethics"
  },
  {
    id: 33035,
    topic: "Protecting the Client's Dignity, Health, and Safety",
    prompt: "Negligence in professional practice is typically exhibited as nonfeasance, which refers to:",
    options: [
      "Intentional, willful, and deceitful behavior likely to cause harm",
      "Not doing what ought to be done",
      "Misrepresenting one's credentials to a recipient of services",
      "Acting in a reckless manner that foreseeably causes injury"
    ],
    correctIndex: 1,
    explanation: "Negligence is typically exhibited as nonfeasance, meaning not doing what ought to be done. Examples include taking on too many cases without adequately monitoring progress, or failing to plan for clinical coverage during a vacation.",
    highlight: "ethics"
  },
  {
    id: 33036,
    topic: "Protecting the Client's Dignity, Health, and Safety",
    prompt: "Unlike negligence, fraudulent conduct is characterized as:",
    options: [
      "Unintentional and resulting from carelessness",
      "An oversight resulting from inadequate training",
      "Intentional, willful, and deceitful behavior that can cause harm to another individual",
      "A failure to follow agency policy that may or may not harm anyone"
    ],
    correctIndex: 2,
    explanation: "While negligence is typically unintentional, fraudulent conduct is characterized as intentional, willful, and deceitful behavior that can cause harm to another individual. Examples include misrepresenting credentials, overbilling, or falsifying client records.",
    highlight: "ethics"
  },
  {
    id: 33037,
    topic: "Protecting the Client's Dignity, Health, and Safety",
    prompt: "For a client to exercise a meaningful choice, the chapter specifies that which two types of alternatives must be present?",
    options: [
      "Behavioral alternatives and stimulus alternatives",
      "Written alternatives and verbal alternatives",
      "Short-term alternatives and long-term alternatives",
      "Preferred alternatives and non-preferred alternatives"
    ],
    correctIndex: 0,
    explanation: "In behavioral terms, making a choice requires that both behavioral alternatives (actions the person can perform) and stimulus alternatives (more than one stimulus item present simultaneously from which to choose) be possible and available.",
  },
  {
    id: 33038,
    topic: "Protecting the Client's Dignity, Health, and Safety",
    prompt: "Favell and McGimsey (1993) listed seven characteristics of an acceptable treatment environment. Which of the following is one of those characteristics?",
    options: [
      "Staff-to-client ratios meet minimum licensing standards at all times",
      "The environment is the least restrictive alternative, functionally defined",
      "The environment is accredited by an external professional organization",
      "Staff turnover is kept below 20 percent annually"
    ],
    correctIndex: 1,
    explanation: "One of Favell and McGimsey's seven characteristics is that the environment is the least restrictive alternative, functionally defined based on freedom of movement and activity engagement parameters.",
  },
  {
    id: 33039,
    topic: "Coordinating with Other Professionals",
    prompt: "When a nonbehavioral treatment is proposed by another team member, The Compliance Code section 2.09(d) requires the behavior analyst to:",
    options: [
      "Immediately reject any intervention that lacks peer-reviewed behavioral research support",
      "Defer all treatment decisions to the most credentialed member of the interdisciplinary team",
      "Review and appraise the effects of any treatments that might impact the goals of the behavior-change program",
      "Withhold evaluation until the client or guardian specifically requests it"
    ],
    correctIndex: 2,
    explanation: "The Compliance Code 2.09(d) states that behavior analysts have a responsibility to 'review and appraise the effects of any treatments about which they are aware that might impact the goals of the behavior-change program.'",
    highlight: "ethics"
  },
  {
    id: 33040,
    topic: "Coordinating with Other Professionals",
    prompt: "When making referrals to other professionals, the behavior analyst must ensure that:",
    options: [
      "The client is directed to the professional with whom the analyst has a prior working relationship",
      "The referring analyst maintains co-treatment responsibility for the case",
      "Referral documentation is shared with the funding source within 30 days",
      "No referral fees, kick-backs, gifts, or favors change hands as a result of the referral"
    ],
    correctIndex: 3,
    explanation: "There must never be referral fees or kick-backs. The practitioner should provide the client with a list of options, a choice of possible providers, and allow the client to make the final choice. No money, gifts, or favors should ever change hands when a referral results in a client contacting another professional.",
    highlight: "ethics"
  },
  {
    id: 33041,
    topic: "Advocating for the Client",
    prompt: "Before accepting a case, to determine whether behavioral intervention is necessary and appropriate, a behavior analyst should ask:",
    options: [
      "Has the problem emerged suddenly, and might it have a medical cause?",
      "Is the proposed treatment covered by the client's insurance plan?",
      "Has the behavior analyst worked with similar cases in the past?",
      "Is the client's family willing to pay out-of-pocket for services?"
    ],
    correctIndex: 0,
    explanation: "One of the key questions for determining whether behavioral intervention is necessary and appropriate is whether the problem has emerged suddenly and whether it might have a medical cause, including whether a medical evaluation has been done.",
  },
  {
    id: 33042,
    topic: "Advocating for the Client",
    prompt: "If the answer to any of the six questions about the likely success of an intervention is 'no,' the behavior analyst should:",
    options: [
      "Proceed with treatment and adjust the plan once challenges become apparent",
      "Ask the client's guardian to provide written permission before proceeding",
      "Seriously consider declining to initiate treatment",
      "Transfer the case to a more experienced colleague immediately"
    ],
    correctIndex: 2,
    explanation: "If the answer to any of the six questions (such as whether the client is willing to participate or whether the behavior has been successfully treated in the research literature) is 'no,' the behavior analyst should seriously consider declining to initiate treatment.",
  },
  {
    id: 33043,
    topic: "Evidence-Based Practice and Least Restrictive Alternatives",
    prompt: "When more than one scientifically supported treatment has been established, The Compliance Code 2.09(c) indicates that additional factors that may guide selection include:",
    options: [
      "The analyst's personal preference and the geographic location of the client",
      "Efficiency and cost-effectiveness, risks and side-effects, client preference, and practitioner experience",
      "The number of published studies supporting each treatment option",
      "The most recent recommendation of the treatment team's medical consultant"
    ],
    correctIndex: 1,
    explanation: "The Compliance Code 2.09(c) indicates that additional factors may include efficiency and cost-effectiveness, risks and side-effects of the interventions, client preference, and practitioner experience and training.",
    highlight: "ethics"
  },
  {
    id: 33044,
    topic: "Evidence-Based Practice and Least Restrictive Alternatives",
    prompt: "Silvestri and Heward (2016) define evidence as the outcome of applying the scientific method. They also state that 'an extraordinary claim based on anything but proportionally strong evidence should bring:'",
    options: [
      "Immediate referral to an ethics committee",
      "A request for peer-reviewed citations from the claimant",
      "A formal complaint to the relevant professional organization",
      "Skepticism"
    ],
    correctIndex: 3,
    explanation: "Silvestri and Heward (2016) stated that 'an extraordinary claim based on anything but proportionally strong evidence should bring skepticism,' consistent with the scientific approach promoted throughout the chapter.",
  },
  {
    id: 33045,
    topic: "Alternative and Fad Treatments",
    prompt: "Peters and Heron (1993) identified five standards by which a model or program can be judged as best practice. Which of the following is one of those standards?",
    options: [
      "The model has been endorsed by a national professional organization",
      "The model is derived from a sound theoretical base",
      "The model has been implemented in at least 10 published case studies",
      "The model requires minimal training for staff implementation"
    ],
    correctIndex: 1,
    explanation: "Peters and Heron (1993) identified five standards: (1) Does the model derive from a sound theoretical base? (2) Is the research methodology convincing and compelling? (3) Is there consensus with existing literature? (4) Is there evidence that outcome data are consistently produced? (5) Is there evidence of social validity?",
  },
  {
    id: 33046,
    topic: "Conflict of Interest",
    prompt: "A conflict of interest occurs when:",
    options: [
      "Two behavior analysts on the same team disagree about the optimal intervention strategy",
      "A client's family requests a different behavior analyst than the one currently providing services",
      "A principal party, alone or in connection with family, friends, or associates, has a vested interest in the outcome of the interaction",
      "A funding source limits the number of service hours authorized for a client"
    ],
    correctIndex: 2,
    explanation: "A conflict of interest occurs when a principal party, alone or in connection with family, friends, or associates, has a vested interest in the outcome of the interaction. The most common form involves dual- or multiple-role relationships.",
    highlight: "ethics"
  },
  {
    id: 33047,
    topic: "Conflict of Interest",
    prompt: "Which of the following represents a professional conflict of interest for a behavior analyst?",
    options: [
      "Providing consultation to a school district where the analyst's child does not attend",
      "Attending a professional conference that is also attended by a current supervisee",
      "Providing in-home services to a client the analyst has worked with for three or more years",
      "A member of a peer review committee participating in a review of their own work"
    ],
    correctIndex: 3,
    explanation: "A member of a peer review committee must not participate in a review of their own work or the work of their supervisees. The general rule is that the practitioner should strive to avoid all potential conflicts of interest.",
    highlight: "ethics"
  },
  {
    id: 33048,
    topic: "Creating a Culture of Ethical Practice",
    prompt: "Lattal and Clark (2007) stated that the ability to sort through ethical issues and make decisions that most people would see as ethical is:",
    options: [
      "An innate trait found primarily in individuals with strong personal character",
      "Developed naturally through years of clinical experience without formal instruction",
      "A skill that can and should be taught",
      "Beyond the scope of organizational training programs"
    ],
    correctIndex: 2,
    explanation: "Lattal and Clark (2007) stated that 'the ability to sort through the issues and make decisions that most people would see as ethical is a skill that emphatically can and should be taught.'",
    highlight: "ethics"
  },
  {
    id: 33049,
    topic: "Creating a Culture of Ethical Practice",
    prompt: "To foster a culture of ethical practice as described in The Compliance Code 7.01, organizations can commit to providing all of the following EXCEPT:",
    options: [
      "Ethics-related training programs",
      "Support systems for ethical decision making",
      "Differential reinforcement of ethical behavior",
      "Guaranteed immunity from professional sanctions for all staff members"
    ],
    correctIndex: 3,
    explanation: "To foster a culture of ethical practice, organizations can provide ethics-related trainings, support systems, and differential reinforcement of ethical behavior. Guaranteed immunity from professional sanctions is not a recommended strategy and would undermine accountability.",
    highlight: "ethics"
  },
  {
    id: 33050,
    topic: "Personal Histories and the Context of Practice",
    prompt: "To counteract the undue influence of personal history, cultural background, or clinical experience on professional decisions, a practitioner should regularly:",
    options: [
      "Avoid working in practice areas that relate to their personal background",
      "Disclose all personal biases to clients before beginning services",
      "Request an ethics committee review before making any clinical decision",
      "Discuss professional issues with colleagues, obtain training, seek supervision or consultation, and review recent research literature"
    ],
    correctIndex: 3,
    explanation: "To counteract undue influences, the practitioner should regularly discuss professional issues with colleagues, obtain training, seek supervision or consultation when needed, read recent research literature, and review case studies relating to their area of professional focus (Bailey and Burch, 2016).",
    highlight: "ethics"
  }
];

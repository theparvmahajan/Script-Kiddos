export type MedicalCondition = {
  id: string
  name: string
  symptoms: string[]
  firstAid: string[]
  urgency: "low" | "medium" | "high" | "emergency"
  description: string
  followUp: string
}

export type Symptom = {
  id: string
  name: string
  relatedConditions: string[]
  description: string
}

// Comprehensive dataset of medical conditions
export const medicalConditions: MedicalCondition[] = [
  {
    id: "headache",
    name: "Headache",
    symptoms: ["head pain", "pressure in head", "throbbing", "dull pain", "migraine"],
    firstAid: [
      "Rest in a quiet, dark room",
      "Apply a cold compress to your forehead",
      "Take over-the-counter pain relievers like acetaminophen or ibuprofen",
      "Stay hydrated",
      "Try relaxation techniques",
    ],
    urgency: "low",
    description:
      "Pain in any region of the head. Headaches may occur on one or both sides of the head, be isolated to a certain location, radiate across the head from one point, or have a viselike quality.",
    followUp:
      "If your headache is severe, sudden, or accompanied by fever, confusion, stiff neck, or rash, please seek immediate medical attention.",
  },
  {
    id: "fever",
    name: "Fever",
    symptoms: ["elevated temperature", "chills", "sweating", "headache", "muscle aches", "weakness", "fatigue"],
    firstAid: [
      "Rest and stay hydrated",
      "Take acetaminophen or ibuprofen to reduce fever",
      "Use a lukewarm compress",
      "Dress in lightweight clothing",
      "Monitor temperature regularly",
    ],
    urgency: "medium",
    description:
      "A temporary increase in body temperature, often due to an illness. Having a fever is a sign that something out of the ordinary is going on in your body.",
    followUp:
      "Seek medical attention if fever is above 103°F (39.4°C) for adults, lasts more than 3 days, or is accompanied by severe symptoms.",
  },
  {
    id: "cut",
    name: "Cut or Wound",
    symptoms: ["bleeding", "pain", "swelling", "redness", "broken skin"],
    firstAid: [
      "Clean the wound with clean water",
      "Apply gentle pressure with a clean cloth until bleeding stops",
      "Apply antibiotic ointment if available",
      "Cover with a sterile bandage",
      "Elevate the wounded area if possible",
    ],
    urgency: "medium",
    description:
      "A cut is an opening in the skin. It may be deep, smooth, or jagged. It may be near the surface of the skin or deeper, affecting tendons, muscles, ligaments, nerves, blood vessels, or bone.",
    followUp:
      "Seek immediate medical attention if the cut is deep or gaping, bleeding doesn't stop after 15 minutes of pressure, or the wound is severely contaminated.",
  },
  {
    id: "burn",
    name: "Burn",
    symptoms: ["pain", "redness", "swelling", "blisters", "peeling skin", "white or charred skin"],
    firstAid: [
      "Cool the burn with cool (not cold) running water for 10-15 minutes",
      "Do not apply ice directly to the burn",
      "Apply aloe vera gel or moisturizer for minor burns",
      "Take over-the-counter pain relievers if needed",
      "Cover with a sterile, non-stick bandage",
    ],
    urgency: "medium",
    description:
      "Burns are tissue damage caused by heat, chemicals, electricity, sunlight, or radiation. Burns can be minor (first-degree) or serious (second or third-degree).",
    followUp:
      "For second and third-degree burns, seek immediate medical attention. Do not remove burned clothing stuck to the skin, cover the area with a clean, dry cloth, and monitor for signs of shock.",
  },
  {
    id: "sprain",
    name: "Sprain or Strain",
    symptoms: ["pain", "swelling", "bruising", "limited flexibility", "difficulty using the joint"],
    firstAid: [
      "Rest the injured area",
      "Apply ice for 15-20 minutes every 2-3 hours",
      "Compress the area with an elastic bandage",
      "Elevate the injured area above heart level if possible",
      "Take over-the-counter pain relievers",
    ],
    urgency: "low",
    description:
      "A sprain is a stretching or tearing of ligaments, while a strain is a stretching or tearing of muscle or tendon. Both can cause pain, swelling, and limited mobility.",
    followUp:
      "If pain is severe, you can't move the joint, or you can't put weight on the injured area, seek medical attention.",
  },
  {
    id: "choking",
    name: "Choking",
    symptoms: [
      "inability to talk",
      "difficulty breathing",
      "clutching the throat",
      "bluish skin color",
      "loss of consciousness",
    ],
    firstAid: [
      "Stand behind the person and slightly to one side",
      "Support their chest with one hand",
      "Lean them forward so the object blocking their airway can come out of their mouth",
      "Give up to 5 sharp blows between their shoulder blades with the heel of your hand",
      "If unsuccessful, perform abdominal thrusts (Heimlich maneuver)",
    ],
    urgency: "emergency",
    description:
      "Choking occurs when an object gets stuck in the throat or windpipe, blocking the flow of air. In adults, choking is often caused by food, while in children it's often caused by small objects.",
    followUp:
      "If the person becomes unconscious, begin CPR. Always seek emergency medical attention after a choking incident.",
  },
  {
    id: "heart_attack",
    name: "Heart Attack",
    symptoms: [
      "chest pain or pressure",
      "pain in arms, back, neck, jaw",
      "shortness of breath",
      "cold sweat",
      "nausea",
      "lightheadedness",
    ],
    firstAid: [
      "Call emergency services immediately",
      "Have the person sit and rest in a position that makes breathing comfortable",
      "Loosen tight clothing",
      "Give aspirin if not allergic and if advised by emergency services",
      "Be prepared to perform CPR if the person becomes unconscious",
    ],
    urgency: "emergency",
    description:
      "A heart attack occurs when blood flow to part of the heart is blocked. The blocked blood flow can damage or destroy part of the heart muscle.",
    followUp: "Always seek emergency medical attention for suspected heart attacks. Every minute matters.",
  },
  {
    id: "stroke",
    name: "Stroke",
    symptoms: [
      "sudden numbness or weakness in face, arm, or leg",
      "confusion",
      "trouble speaking",
      "difficulty seeing",
      "trouble walking",
      "severe headache",
    ],
    firstAid: [
      "Call emergency services immediately",
      "Note the time when symptoms first appeared",
      "Perform the FAST test: Face drooping, Arm weakness, Speech difficulty, Time to call emergency services",
      "Do not give the person anything to eat or drink",
      "Have the person lie down with their head slightly elevated",
    ],
    urgency: "emergency",
    description:
      "A stroke occurs when the blood supply to part of the brain is interrupted or reduced, preventing brain tissue from getting oxygen and nutrients. Brain cells begin to die within minutes.",
    followUp: "Always seek emergency medical attention for suspected strokes. Time is critical for treatment.",
  },
  {
    id: "allergic_reaction",
    name: "Severe Allergic Reaction (Anaphylaxis)",
    symptoms: [
      "hives",
      "itching",
      "flushed or pale skin",
      "swelling of face, lips, tongue",
      "difficulty breathing",
      "rapid pulse",
      "dizziness",
    ],
    firstAid: [
      "Call emergency services immediately",
      "Ask if the person carries an epinephrine autoinjector (EpiPen) and help them use it if necessary",
      "Have the person lie still on their back",
      "Loosen tight clothing and cover them with a blanket",
      "If there's vomiting or bleeding from the mouth, turn them on their side",
    ],
    urgency: "emergency",
    description:
      "Anaphylaxis is a severe, potentially life-threatening allergic reaction that can occur within seconds or minutes of exposure to an allergen.",
    followUp:
      "Always seek emergency medical attention for severe allergic reactions, even if symptoms improve after using an epinephrine autoinjector.",
  },
  {
    id: "poisoning",
    name: "Poisoning",
    symptoms: [
      "nausea",
      "vomiting",
      "diarrhea",
      "abdominal pain",
      "drowsiness",
      "confusion",
      "difficulty breathing",
      "seizures",
    ],
    firstAid: [
      "Call emergency services or poison control center immediately",
      "Do not induce vomiting unless specifically instructed to do so by a medical professional",
      "If the poison is on the skin, remove contaminated clothing and rinse skin with running water for 15-20 minutes",
      "If the poison is in the eye, rinse with running water for 15-20 minutes",
      "If the person is unconscious, turn them on their side to prevent choking",
    ],
    urgency: "emergency",
    description:
      "Poisoning occurs when any substance interferes with normal body functions after it is swallowed, inhaled, injected, or absorbed. Common poisons include medications, household products, carbon monoxide, and plants.",
    followUp:
      "Always seek emergency medical attention for suspected poisoning. If possible, bring the container of the suspected poison to the hospital.",
  },
  {
    id: "fracture",
    name: "Fracture (Broken Bone)",
    symptoms: ["pain", "swelling", "bruising", "deformity", "inability to move the affected area", "grating sensation"],
    firstAid: [
      "Stop any bleeding by applying pressure with a clean cloth",
      "Immobilize the injured area - do not try to realign the bone",
      "Apply ice packs wrapped in a cloth to reduce swelling and pain",
      "Treat for shock if necessary by laying the person flat, elevating the feet, and keeping them warm",
      "Do not move the person unless absolutely necessary",
    ],
    urgency: "high",
    description:
      "A fracture is a break in a bone, which can range from a thin crack to a complete break. Fractures can occur due to trauma, overuse, or diseases that weaken the bones.",
    followUp:
      "Seek immediate medical attention for suspected fractures. Proper alignment and immobilization are crucial for healing.",
  },
  {
    id: "seizure",
    name: "Seizure",
    symptoms: [
      "temporary confusion",
      "staring spell",
      "uncontrollable jerking movements",
      "loss of consciousness",
      "cognitive symptoms",
    ],
    firstAid: [
      "Ease the person to the floor and turn them gently onto one side",
      "Clear the area around them of anything hard or sharp",
      "Put something soft and flat under their head",
      "Remove eyeglasses and loosen tight clothing",
      "Time the seizure - call emergency services if it lasts longer than 5 minutes",
    ],
    urgency: "high",
    description:
      "A seizure is a sudden, uncontrolled electrical disturbance in the brain. It can cause changes in behavior, movements, feelings, and levels of consciousness.",
    followUp:
      "If this is a first-time seizure, the person is pregnant, or has diabetes, seek medical attention. Also seek help if the seizure lasts more than 5 minutes or if multiple seizures occur.",
  },
  {
    id: "heatstroke",
    name: "Heat Exhaustion/Heatstroke",
    symptoms: [
      "high body temperature",
      "altered mental state",
      "nausea",
      "flushed skin",
      "rapid breathing",
      "racing heart rate",
      "headache",
    ],
    firstAid: [
      "Move the person to a cool place",
      "Remove excess clothing",
      "Cool the person with water, wet towels, or ice packs placed in the armpits, groin, neck, and back",
      "If conscious, have them drink cool water",
      "Call emergency services immediately for suspected heatstroke",
    ],
    urgency: "high",
    description:
      "Heatstroke is a condition caused by the body overheating, usually as a result of prolonged exposure to or physical exertion in high temperatures. It requires emergency treatment.",
    followUp:
      "Always seek emergency medical attention for suspected heatstroke. Heatstroke can cause damage to the brain and other vital organs if not treated promptly.",
  },
  {
    id: "hypothermia",
    name: "Hypothermia",
    symptoms: [
      "shivering",
      "slurred speech",
      "slow, shallow breathing",
      "weak pulse",
      "confusion",
      "drowsiness",
      "loss of consciousness",
    ],
    firstAid: [
      "Move the person to a warm, dry location",
      "Remove wet clothing and replace with warm, dry clothing or blankets",
      "If conscious, provide warm beverages (no alcohol)",
      "Apply warm, dry compresses to the center of the body - neck, chest, and groin",
      "Do not apply direct heat or massage the limbs",
    ],
    urgency: "high",
    description:
      "Hypothermia is a medical emergency that occurs when your body loses heat faster than it can produce heat, causing a dangerously low body temperature.",
    followUp:
      "Always seek emergency medical attention for suspected hypothermia, especially in infants, older adults, or those with impaired judgment.",
  },
  {
    id: "diabetic_emergency",
    name: "Diabetic Emergency",
    symptoms: [
      "confusion",
      "rapid breathing",
      "fruity breath odor",
      "excessive thirst",
      "frequent urination",
      "nausea",
      "vomiting",
      "abdominal pain",
    ],
    firstAid: [
      "If the person is conscious and you know they have diabetes, ask if they need sugar",
      "If they can swallow safely, give them a sugary drink or food",
      "If they're unconscious or unable to swallow safely, call emergency services immediately",
      "Do not give an unconscious person anything by mouth",
      "If trained and if the person has glucagon, administer it according to instructions",
    ],
    urgency: "high",
    description:
      "Diabetic emergencies can occur when blood sugar levels are too high (hyperglycemia) or too low (hypoglycemia). Both conditions can be life-threatening if not treated promptly.",
    followUp:
      "Always seek medical attention for diabetic emergencies, especially if the person loses consciousness or doesn't improve after receiving sugar.",
  },
]

// Comprehensive list of symptoms
export const symptoms: Symptom[] = [
  {
    id: "head_pain",
    name: "Head Pain",
    relatedConditions: ["headache", "fever", "stroke"],
    description:
      "Pain in any region of the head, which may be sharp, dull, throbbing, constant, intermittent, mild, or severe.",
  },
  {
    id: "fever",
    name: "Elevated Temperature",
    relatedConditions: ["fever", "infection", "heat_exhaustion"],
    description: "A body temperature that's higher than normal, typically above 98.6°F (37°C).",
  },
  {
    id: "cough",
    name: "Cough",
    relatedConditions: ["cold", "flu", "pneumonia", "covid"],
    description:
      "A sudden, often repetitive, spasmodic contraction of the thoracic cavity, resulting in violent release of air from the lungs.",
  },
  {
    id: "shortness_of_breath",
    name: "Shortness of Breath",
    relatedConditions: ["asthma", "heart_attack", "pneumonia", "covid", "allergic_reaction"],
    description: "Difficulty breathing or a feeling of not getting enough air.",
  },
  {
    id: "chest_pain",
    name: "Chest Pain",
    relatedConditions: ["heart_attack", "angina", "pneumonia", "panic_attack"],
    description:
      "Pain or discomfort in the chest area, which may feel like pressure, burning, tightness, or sharpness.",
  },
  {
    id: "abdominal_pain",
    name: "Abdominal Pain",
    relatedConditions: ["appendicitis", "gastritis", "food_poisoning", "kidney_stones"],
    description: "Pain felt in the area between the chest and groin, often referred to as the stomach region.",
  },
  {
    id: "nausea",
    name: "Nausea",
    relatedConditions: ["food_poisoning", "migraine", "pregnancy", "motion_sickness", "vertigo"],
    description: "A feeling of sickness with an inclination to vomit.",
  },
  {
    id: "vomiting",
    name: "Vomiting",
    relatedConditions: ["food_poisoning", "gastroenteritis", "migraine", "concussion"],
    description: "The forcible voluntary or involuntary emptying of stomach contents through the mouth.",
  },
  {
    id: "diarrhea",
    name: "Diarrhea",
    relatedConditions: ["food_poisoning", "gastroenteritis", "irritable_bowel_syndrome", "celiac_disease"],
    description: "Loose, watery stools that occur more frequently than usual.",
  },
  {
    id: "rash",
    name: "Rash",
    relatedConditions: ["allergic_reaction", "eczema", "psoriasis", "chickenpox", "measles"],
    description: "A change in the color or texture of the skin, often with bumps, redness, or itching.",
  },
  {
    id: "joint_pain",
    name: "Joint Pain",
    relatedConditions: ["arthritis", "sprain", "gout", "lupus", "lyme_disease"],
    description: "Discomfort, aches, or soreness in any of the body's joints.",
  },
  {
    id: "dizziness",
    name: "Dizziness",
    relatedConditions: ["vertigo", "low_blood_pressure", "anemia", "dehydration", "stroke"],
    description: "A sensation of spinning or whirling, making it difficult to maintain balance.",
  },
  {
    id: "fatigue",
    name: "Fatigue",
    relatedConditions: ["anemia", "depression", "hypothyroidism", "chronic_fatigue_syndrome", "sleep_apnea"],
    description: "Extreme tiredness resulting from mental or physical exertion or illness.",
  },
  {
    id: "swelling",
    name: "Swelling",
    relatedConditions: ["injury", "infection", "allergic_reaction", "heart_failure", "kidney_disease"],
    description: "Enlargement or protrusion of tissue due to fluid buildup or inflammation.",
  },
  {
    id: "bleeding",
    name: "Bleeding",
    relatedConditions: ["cut", "internal_bleeding", "hemophilia", "menstruation", "nosebleed"],
    description: "The loss of blood from the body, either externally or internally.",
  },
]

// First aid guides
export const firstAidGuides = [
  {
    id: "cpr",
    title: "CPR (Cardiopulmonary Resuscitation)",
    steps: [
      "Check the scene for safety and the person for responsiveness.",
      "If the person is unresponsive and not breathing normally, call emergency services.",
      "Place the person on their back on a firm surface.",
      "Kneel beside the person's neck and shoulders.",
      "Place the heel of one hand over the center of the person's chest, between the nipples.",
      "Place your other hand on top of the first hand and interlock your fingers.",
      "Keep your arms straight and position your shoulders directly above your hands.",
      "Push hard and fast, compressing the chest at least 2 inches deep and at a rate of 100-120 compressions per minute.",
      "Allow the chest to completely recoil after each compression.",
      "Continue CPR until medical help arrives or the person shows signs of life.",
    ],
    notes: "If trained in CPR, you can also provide rescue breaths. Give 30 compressions followed by 2 rescue breaths.",
  },
  {
    id: "choking",
    title: "Choking - Heimlich Maneuver",
    steps: [
      "Stand behind the person and wrap your arms around their waist.",
      "Make a fist with one hand and place it thumb-side in against the person's abdomen, just above the navel.",
      "Grasp your fist with your other hand.",
      "Press into the abdomen with quick, upward thrusts.",
      "Repeat until the object is expelled or the person becomes unconscious.",
      "If the person becomes unconscious, lower them to the ground and begin CPR.",
    ],
    notes:
      "For pregnant women or obese individuals, place your hands at the base of the breastbone instead of above the navel.",
  },
  {
    id: "bleeding",
    title: "Severe Bleeding Control",
    steps: [
      "Apply direct pressure on the wound with a clean cloth, gauze pad, or bandage.",
      "If blood soaks through, add another cloth without removing the first.",
      "If possible, elevate the wounded area above the heart.",
      "If bleeding continues and you suspect an artery is severed, apply pressure to the relevant pressure point.",
      "As a last resort for life-threatening limb bleeding, apply a tourniquet if you have one and know how to use it.",
      "Secure the wound with a bandage once bleeding is controlled.",
    ],
    notes:
      "Always seek immediate medical attention for severe bleeding. If you suspect internal bleeding, call emergency services immediately.",
  },
  {
    id: "burns",
    title: "Burns Treatment",
    steps: [
      "Ensure the person is no longer in contact with the burning source.",
      "For minor burns (first-degree): Cool the burn with cool (not cold) running water for 10-15 minutes.",
      "Do not apply ice directly to the burn.",
      "Apply aloe vera gel or moisturizer to minor burns.",
      "Take over-the-counter pain relievers if needed.",
      "For severe burns (second and third-degree): Call emergency services.",
      "Do not remove burned clothing stuck to the skin.",
      "Cover the area with a clean, dry cloth.",
      "Elevate the burned area above heart level if possible.",
      "Monitor for signs of shock.",
    ],
    notes:
      "Do not break blisters, apply butter or ointments to severe burns, or use cotton balls which may stick to the burn.",
  },
  {
    id: "fractures",
    title: "Fractures and Sprains",
    steps: [
      "Stop any bleeding by applying pressure with a clean cloth.",
      "Immobilize the injured area - do not try to realign the bone.",
      "Apply ice packs wrapped in a cloth to reduce swelling and pain.",
      "For sprains, follow the RICE method: Rest, Ice, Compression, Elevation.",
      "For suspected fractures, splint the area if possible without moving it too much.",
      "Seek medical attention for proper diagnosis and treatment.",
    ],
    notes:
      "If the bone is protruding through the skin, do not push it back in. Cover the wound with a clean bandage and seek immediate medical attention.",
  },
  {
    id: "heart_attack",
    title: "Heart Attack vs. Cardiac Arrest",
    steps: [
      "Heart Attack: Call emergency services, have the person sit and rest, loosen tight clothing, give aspirin if not allergic.",
      "Cardiac Arrest: Call emergency services immediately, begin CPR, use AED if available.",
      "Heart Attack Symptoms: Chest pain/pressure, pain in arms/back/neck/jaw, shortness of breath, cold sweat, nausea.",
      "Cardiac Arrest Symptoms: Sudden collapse, no pulse, no breathing, unconsciousness.",
    ],
    notes:
      "A heart attack occurs when blood flow to part of the heart is blocked, while cardiac arrest is when the heart suddenly stops beating. Both require immediate medical attention.",
  },
  {
    id: "stroke",
    title: "Stroke - FAST Assessment",
    steps: [
      "F - Face: Ask the person to smile. Does one side of the face droop?",
      "A - Arms: Ask the person to raise both arms. Does one arm drift downward?",
      "S - Speech: Ask the person to repeat a simple phrase. Is their speech slurred or strange?",
      "T - Time: If you observe any of these signs, call emergency services immediately.",
      "Note the time when symptoms first appeared.",
      "Do not give the person anything to eat or drink.",
      "Have the person lie down with their head slightly elevated.",
    ],
    notes:
      "Time is critical in stroke treatment. The sooner a stroke victim gets to a hospital, the better their chances of recovery.",
  },
]

// Common medical questions and answers
export const medicalFAQs = [
  {
    question: "When should I call emergency services?",
    answer:
      "Call emergency services immediately for: severe bleeding that doesn't stop, difficulty breathing, chest pain, severe burns, suspected poisoning, seizures, severe allergic reactions, suspected stroke or heart attack, or any life-threatening situation.",
  },
  {
    question: "How do I know if a cut needs stitches?",
    answer:
      "A cut may need stitches if: it's deep enough to expose yellow fat or bone, it's more than 1/2 inch long, it's on the face or a joint, it has jagged edges, it's bleeding heavily and doesn't stop after 15 minutes of direct pressure, or it was caused by a dirty or rusty object.",
  },
  {
    question: "What should I do for a fever?",
    answer:
      "For a fever: rest and stay hydrated, take acetaminophen or ibuprofen to reduce fever (follow dosage instructions), use a lukewarm compress, dress in lightweight clothing, and monitor temperature regularly. Seek medical attention if fever is above 103°F (39.4°C) for adults, lasts more than 3 days, or is accompanied by severe symptoms.",
  },
  {
    question: "How can I tell if someone is having a heart attack?",
    answer:
      "Heart attack symptoms include: chest pain or pressure that may radiate to the arm, back, neck, or jaw; shortness of breath; cold sweat; nausea; and lightheadedness. Women may experience less typical symptoms like fatigue, nausea, and back or jaw pain. If you suspect a heart attack, call emergency services immediately.",
  },
  {
    question: "What should I do for a sprained ankle?",
    answer:
      "For a sprained ankle, follow the RICE method: Rest the ankle, Ice it for 15-20 minutes every 2-3 hours, Compress it with an elastic bandage, and Elevate it above heart level when possible. Take over-the-counter pain relievers if needed. If pain is severe, you can't put weight on it, or there's significant swelling, seek medical attention.",
  },
  {
    question: "How do I perform CPR?",
    answer:
      "To perform CPR: Place the person on their back, kneel beside their chest, place the heel of one hand on the center of the chest with the other hand on top, keep your arms straight with shoulders above your hands, push hard and fast at a rate of 100-120 compressions per minute, allowing full chest recoil between compressions. If trained, give 30 compressions followed by 2 rescue breaths.",
  },
  {
    question: "What should I do for a burn?",
    answer:
      "For minor burns: Cool the burn with cool running water for 10-15 minutes, don't use ice, apply aloe vera gel or moisturizer, and take pain relievers if needed. For severe burns: Call emergency services, don't remove burned clothing stuck to skin, cover with a clean cloth, and monitor for shock. Don't apply butter, oil, or ointments to burns.",
  },
  {
    question: "How can I tell if someone is having a stroke?",
    answer:
      "Use the FAST method to identify a stroke: Face drooping on one side, Arm weakness or drifting downward on one side, Speech difficulty or slurring, Time to call emergency services immediately if you notice any of these signs. Other symptoms may include sudden numbness, confusion, trouble seeing, difficulty walking, or severe headache.",
  },
  {
    question: "What should I do for a nosebleed?",
    answer:
      "For a nosebleed: Sit upright and lean slightly forward, pinch the soft part of your nose just below the bony ridge for 10-15 minutes, breathe through your mouth, apply a cold compress to the bridge of your nose, and avoid blowing your nose for several hours after the bleeding stops. If bleeding doesn't stop after 20 minutes or is severe, seek medical attention.",
  },
  {
    question: "How do I treat a snake bite?",
    answer:
      "For a snake bite: Call emergency services immediately, keep the bitten area below heart level, remove tight clothing or jewelry near the bite, clean the wound with soap and water if available, cover with a clean, dry bandage, and mark the edge of swelling on the skin if it occurs. Do NOT apply a tourniquet, cut the wound, suck out venom, apply ice, or give the person alcohol or caffeine.",
  },
]


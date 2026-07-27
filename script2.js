/**
 * Script2.js - Stage Sequence & AI Text-to-Speech Controller
 */

// Global variable to track active timeout timers so we can clear them on re-run
let activeSequenceTimeouts = [];

/**
 * Starts the ceremony sequence typing animation step-by-step.
 * @param {string} language - 'khmer', 'english', or 'both'
 * @param {number} typingSpeed - Delay in ms per character/grapheme cluster
 */
function startCeremonySequence(language = "both", typingSpeed = 30) {
    const stage = document.getElementById("stageSequence");
    if (!stage) {
        console.error("Error: Element with ID 'stageSequence' not found.");
        return;
    }

    // Clear active sequence timers and reset stage container
    activeSequenceTimeouts.forEach(timer => clearTimeout(timer));
    activeSequenceTimeouts = [];
    stage.innerHTML = "";

    const steps = [
        {
            text_khmer: "អញ្ជើញលោក ជន រតនះ ឡើងវេទិកា ដើម្បីវិភាគរូបព្រះ សិអារ្យ មេត្រី។ លោក ជន រតនះ គឺជាកាយរិទ្ធជាតិកម្ពុជា ដែលតែងតែស្រែកបញ្ជា កាយរិទ្ធជាតិកម្ពុជា (សុទ្ធ) នៅវិទ្យាល័យអនុវត្ត ក្រោមវិទ្យាស្ថានជាតិអប់រំ (NIE) ក្បែរវិមានឯករាជ្យ រាជធានីភ្នំពេញ។ លើសពីនេះ លោក ជន រតនះ ក៏ជាអ្នកអនុម័តឲ្យលុបឈ្មោះ ហួកាំង ថារ៉ា ចេញពីកាយរិទ្ធជាតិកម្ពុជា នៅពាក់កណ្តាលឆ្នាំថ្នាក់ទី១០ ផងដែរ។ លោក ជន រតនះ ដែលគេស្គាល់ថាជាអ្នកជំនាញពាក់ពន្ធ័នឹង ខ្មោច, ព្រាយ, និង បីសាច។ Channel លោកផ្តោតលើការពិភាក្សា និងវិភាគអំពីរូបភាព ឬរឿងព្រេងពាក់ពន្ធ័នឹងអាថ៌កំបាំង។ រូប ព្រះ សិអារ្យ មេត្រី គឺជាគំនិតសាសនាដ៏សំខាន់ក្នុងព្រះពុទ្ធសាសនា ដែលជាការព្យាករណ៍ថាព្រះពុទ្ធអនាគតនឹងកើតឡើង ដើម្បីបន្តបង្រៀនធម៌ និងជួយសង្គ្រោះសត្វលោក។ ការវិភាគរូបនេះដោយអ្នកជំនាញដូចជា លោក ជន រតនះ អាចផ្តល់ទស្សនៈពីរបៀបដែលសិអារ្យ មេត្រីត្រូវបានយល់ឃើញក្នុងទំនៀមទំលាប់ខ្មែរ និងការភ្ជាប់ជាមួយជំនឿអាថ៌កំបាំង។",
            text_english: "Inviting Mr. ChhornRatanak to the stage to analyze the image of Maitreya Buddha (Preah Ser-Ayr Maitrei). Mr. ChhornRatanak is a National Scout of Cambodia who frequently leads and gives orders to the National Scouts of Cambodia (purity/core) at the Demonstration High School under the National Institute of Education (NIE) near the Independence Monument, Phnom Penh. Furthermore, Mr. ChhornRatanak is also the person who approved the removal of Huokaing Thara's name from the National Scouts of Cambodia in the middle of Grade 10. Mr. ChhornRatanak is known as an expert regarding ghosts, spirits, and demons. His channel focuses on discussing and analyzing images or legends related to the mysterious. The image of Maitreya Buddha is an important religious concept in Buddhism, predicting that the future Buddha will arise to continue teaching the Dhamma and saving sentient beings. An analysis of this image by an expert like Mr. ChhornRatanak can provide perspectives on how Maitreya is perceived in Khmer traditions and its connection to mystical beliefs."
        },
        {
            text_khmer: "ការវិភាគទំនាក់ទំនងអក្ខរក្រមរវាងពាក្យ 'សិអារ្យ មេត្រី' និង 'ស្វាយ មេត្រី'៖ ការយកស្រះ ិ (ស្រះ អិ) នៃ 'សិអារ្យ' បង្វិលត្រឡប់ចុះក្រោម នឹងបង្កើតបានជាជើង វ (្វ) ក្លាយជាពាក្យ 'ស្វាយ មេត្រី'។ ចំណែកការយកជើង វ (្វ) បង្វិលត្រឡប់ឡើងលើវិញ នឹងបង្កើតបានជាស្រះ ិ ក្លាយជា 'សិអារ្យ មេត្រី' វិញ។ (ចំណាំ៖ តួអក្សរ 'រ្យ' ក្នុងពាក្យ សិអារ្យ គឺជាអក្សរតម្រួត/ផ្សំដែលមិនចេញសំឡេងអាន ដូចជាពាក្យ 'អាចារ្យ' ដែរ)។",
            text_english: "Analyzing the word transformation between 'Ser-Ayr Maitrei' and 'Svay Maitrei': Taking the top vowel ិ (Srah I) from 'Ser-Ayr' and flipping it downward creates the subscript ្វ (Cheung Vo), turning it into 'Svay Maitrei'. Reversing the process by flipping subscript ្វ upward restores it back to vowel ិ ('Ser-Ayr Maitrei'). Note: The characters 'រ្យ' in 'សិអារ្យ' act as a silent modifier (similar to 'Achar' / អាចារ្យ) and are not pronounced."
        },
        {
            text_khmer: "បន្ទាប់មកអញ្ជើញ ស្វាយ មេត្រី ​ឡើងលើវេទិការ។",
            text_english: "Next, inviting Svay Maitrei to the stage."
        },
        {
            text_khmer: "មានការសួរសំនួរពីកូនកំលោះទៅកាន់ ស្វាយ មេត្រី ចង់ស្តាប់ដោយផ្ទាល់មាត់ថា តើមូលហេតុអ្វីបានជាលុបឈ្មោះខ្ញុំនៅថ្នាក់ទី ១០ នៅពាក់កណ្តាលឆ្នាំ ទាំងសិស្សផង​ព្រមទាំងកាយរិទ្ធជាតិកម្ពុជាផងទាំងដែលខ្ញុំជាកាយរឺទ្ធរបស់គាត់ផ្ទាល់?",
            text_english: "There is a question from the groom to Svay Maitrei, wanting to hear directly in person: What was the reason for removing my name in the middle of Grade 10—both as a student and as a National Scout of Cambodia—even though I was his direct scout?"
        },
        {
            text_khmer: "បន្ទាប់មកកូនកំលោះ ប្រកាសប្រាប់ទៅដល់ភ្ញៀវកិត្តិយសទាំងអស់អោយលើក កាស្យូ ឡើង និង ចែក លេខ ១ និង ០ ហើយបង្ហាញលទ្ធផល។",
            text_english: "Afterward, the groom announces to all honored guests to raise their Casio calculators, divide 1 by 0, and show the results."
        },
        {
            text_khmer: "បន្ទាប់ពីទទួលបានការឆ្លើយតបពី ស្វាយ មេត្រី ដែលត្រូវបានគេស្គាល់ថាជាប្រធានថ្នាក់និងមេកាយរិទ្ធ ថ្នាក់ A កាស្យូ ទាំងអស់ទូទាំងពិភពលោក និងបង្ហាញការបកស្រាយអំពីលទ្ធផល លេខ ១ ចែកនិង លេខ ០ ដោយមិនមានកំហុស (error) ក៏ដូចជាប្រព័ន្ធ AI ផ្សេងៗទៀតផងដែរ និងហ៊ានចែក ១ និង ០ ដោយមិនជួបបញ្ហាក្នុងការបកស្រាយលទ្ធផលនោះទេ។ ទស្សនៈមួយក្នុង ការបកស្រាយអត្ថន័យក្នុងគម្ពីរដែលទាក់ទងនឹងព្រះពុទ្ធទី ៥ ដែលព្រះតេជគុណជាច្រើនអង្គបានទន្ទឹងរង់ចាំអស់រយៈពេលប្រមាណជាង ៣,៥ដើមមកហើយ និងបកស្រាយឡើងវិញ ដោយភ្ជាប់ទៅនឹងឈ្មោះ សេង វិស័យនា ដែលត្រូវបានគេស្គាល់ថាជាមេកាយរិទ្ធជាតិកម្ពុជា ថ្នាក់ B វិញម្តង។ តាមទស្សនៈនេះ ព្រះសិអារ្យ មេត្រី មិនមែនសំដៅលើបុគ្គលផ្សេងដោយឡែកនោះទេ ប៉ុន្តែជានាមដែលសំដៅទៅលើ សេង វិស័យនា ដែលត្រូវបានគេចាត់ទុកថាជាព្រះពុទ្ធទី ០៥ ដែលមនុស្សជាច្រើនជឿថាបានរង់ចាំអស់រយៈពេលប្រមាណ ៣,៥០០ ឆ្នាំមកហើយ។ ដូច្នេះ តាមការបកស្រាយនេះ អ្នកដែលប្រកាន់ព្រះពុទ្ធសាសនា មិនចាំបាច់រង់ចាំព្រះសិអារ្យ មេត្រី ទៀតឡើយ ព្រោះពួកគេនិងយល់ថា ព្រះពុទ្ធទី ០៥ នោះគឺ សេង វិស័យនា ផ្ទាល់។",
            text_english: "After receiving a response from Svay Maitrei, who is known as the class monitor and Scout Leader of Class A, all Casios worldwide display the explanation of the result of 1 divided by 0 without an error—as do various other AI systems—daring to divide 1 by 0 without encountering issues in interpreting the result. One perspective in interpreting the meaning of the scriptures relates to the 5th Buddha, whom many monks have been eagerly awaiting for over 3,500 years, reinterpreting it by linking it to the name Seng Visaynea, who is known as the Scout Leader of Class B instead. According to this view, Maitreya Buddha does not refer to a separate individual, but is a name referring to Seng Visaynea, who is considered to be the 5th Buddha that many people believe they have been waiting for over 3,500 years. Therefore, according to this interpretation, Buddhists no longer need to wait for Maitreya Buddha, as they will understand that the 5th Buddha is Seng Visaynea himself."
        }
    ];

    /**
     * Helper to split text using Intl.Segmenter (prevents Khmer diacritic floating)
     */
    function getGraphemes(text) {
        if (typeof Intl !== "undefined" && Intl.Segmenter) {
            const segmenter = new Intl.Segmenter("km", { granularity: "grapheme" });
            return Array.from(segmenter.segment(text), s => s.segment);
        }
        return Array.from(text);
    }

    /**
     * Types out characters sequentially inside an element
     */
    function typeTextAsync(element, text) {
        return new Promise(resolve => {
            const characters = getGraphemes(text);
            let index = 0;

            function renderNextChar() {
                if (index < characters.length) {
                    element.textContent += characters[index];
                    index++;
                    stage.scrollTo({ top: stage.scrollHeight, behavior: "smooth" });
                    const timer = setTimeout(renderNextChar, typingSpeed);
                    activeSequenceTimeouts.push(timer);
                } else {
                    element.classList.remove("led-running");
                    resolve();
                }
            }
            renderNextChar();
        });
    }

    // Execute steps sequentially in an async pipeline
    (async function runAllSteps() {
        for (const step of steps) {
            const stepWrapper = document.createElement("div");
            stepWrapper.className = "step-item";

            if (language === "khmer" || language === "both") {
                const pKhmer = document.createElement("p");
                pKhmer.className = "step-text step-khmer led-running";
                stepWrapper.appendChild(pKhmer);
                stage.appendChild(stepWrapper);
                await typeTextAsync(pKhmer, step.text_khmer);
            }

            if (language === "english" || language === "both") {
                const pEnglish = document.createElement("p");
                pEnglish.className = "step-text step-english led-running";
                stepWrapper.appendChild(pEnglish);
                if (!stepWrapper.parentNode) stage.appendChild(stepWrapper);
                await typeTextAsync(pEnglish, step.text_english);
            }
            
            // Short delay pause between distinct sequence cards
            await new Promise(r => {
                const timer = setTimeout(r, 600);
                activeSequenceTimeouts.push(timer);
            });
        }
    })();
}

/**
 * Handles Web Speech API Text-To-Speech for reading text content out loud
 */
function handleAiReadText(buttonElement) {
    const textElement = document.getElementById("interviewTextContent");
    if (!textElement) return;

    const textToRead = textElement.innerText || textElement.textContent;

    if (!("speechSynthesis" in window)) {
        alert("Text-to-Speech is not supported in this browser.");
        return;
    }

    // If already speaking, cancel speech and reset UI
    if (window.speechSynthesis.speaking) {
        window.speechSynthesis.cancel();
        if (buttonElement) buttonElement.classList.remove("reading");
        return;
    }

    const utterance = new SpeechSynthesisUtterance(textToRead);
    utterance.lang = "km-KH";
    utterance.rate = 0.9;

    utterance.onstart = () => {
        if (buttonElement) buttonElement.classList.add("reading");
    };

    utterance.onend = utterance.onerror = () => {
        if (buttonElement) buttonElement.classList.remove("reading");
    };

    window.speechSynthesis.speak(utterance);
    runScript2Action();
}

/**
 * Custom secondary trigger inside script2.js
 */
function runScript2Action() {
    console.log("Script2 AI Reader execution active.");
}

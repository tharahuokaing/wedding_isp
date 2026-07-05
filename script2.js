// Script2.js
function startCeremonySequence() {
    const stage = document.getElementById("stageSequence");
    if (!stage) {
        console.error("Error: Element with ID 'stageSequence' not found.");
        return;
    }
    
    stage.innerHTML = ""; // Clear previous content

    const steps = [
        {
            delay: 1000,
            text: "អញ្ជើញលោក ជន រតនះ ឡើងវេទិកា ដើម្បីវិភាគរូបព្រះ សិអារ្យ មេត្រី។ លោក ជន រតនះ គឺជាកាយរិទ្ធជាតិកម្ពុជា ដែលតែងតែស្រែកបញ្ជា កាយរិទ្ធជាតិកម្ពុជា (សុទ្ធ) នៅវិទ្យាល័យអនុវត្ត ក្រោមវិទ្យាស្ថានជាតិអប់រំ (NIE) ក្បែរវិមានឯករាជ្យ រាជធានីភ្នំពេញ។ លើសពីនេះ លោក ជន រតនះ ក៏ជាអ្នកអនុម័តឲ្យលុបឈ្មោះ ហួកាំង ថារ៉ា ចេញពីកាយរិទ្ធជាតិកម្ពុជា នៅពាក់កណ្តាលឆ្នាំថ្នាក់ទី១០ ផងដែរ។ លោក ជន រតនះ ដែលគេស្គាល់ថាជាអ្នកជំនាញពាក់ពន្ធ័នឹង ខ្មោច, ព្រាយ, និង បីសាច។ Channel លោកផ្តោតលើការពិភាក្សា និងវិភាគអំពីរូបភាព ឬរឿងព្រេងពាក់ពន្ធ័នឹងអាថ៌កំបាំង។ រូប ព្រះ សិអារ្យ មេត្រី គឺជាគំនិតសាសនាដ៏សំខាន់ក្នុងព្រះពុទ្ធសាសនា ដែលជាការព្យាករណ៍ថាព្រះពុទ្ធអនាគតនឹងកើតឡើង ដើម្បីបន្តបង្រៀនធម៌ និងជួយសង្គ្រោះសត្វលោក។ ការវិភាគរូបនេះដោយអ្នកជំនាញដូចជា លោក ជន រតនះ អាចផ្តល់ទស្សនៈពីរបៀបដែលសិអារ្យ មេត្រីត្រូវបានយល់ឃើញក្នុងទំនៀមទំលាប់ខ្មែរ និងការភ្ជាប់ជាមួយជំនឿអាថ៌កំបាំង។"
        },
        {
            delay: 3000,
            text: "បន្ទាប់មកអញ្ជើញ ស្វាយ មេត្រី ​ឡើងលើវេទិការ។"
        },
        {
            delay: 5000,
            text: "មានការសួរសំនួរពីកូនកំលោះទៅកាន់ ស្វាយ មេត្រី ចង់ស្តាប់ដោយផ្ទាល់មាត់ថា តើមូលហេតុអ្វីបានជាលុបឈ្មោះខ្ញុំនៅថ្នាក់ទី ១០ ពាក់កណ្តាលឆ្នាំ ទាំងសិស្សផង​និងកាយរិទ្ធជាតិកម្ពុជាផង?"
        },
        {
            delay: 7000,
            text: "បន្ទាប់មកកូនកំលោះ ប្រកាសប្រាប់ទៅដល់ភ្ញៀវកិត្តិយសទាំងអស់អោយលើក កាស្យូ ឡើង និង ចែក លេខ ១ និង ០ ហើយបង្ហាញលទ្ធផល។"
        },
        {
            delay: 9000,
            text: "បន្ទាប់ពីទទួលបានការឆ្លើយតបពី ស្វាយ មេត្រី ដែលត្រូវបានគេស្គាល់ថាជាមេកាយរិទ្ធ កាល់ស្យូមទាំងអស់ទូទាំងពិភពលោក និងបានបង្ហាញការបកស្រាយអំពីលេខ ១ និងលេខ ០ ដោយមិនមានកំហុស (error) ជាមួយប្រព័ន្ធ AI ផ្សេងៗដោយមិនជួបបញ្ហាក្នុងការបកស្រាយនោះទេ។ ទស្សនៈមួយក្នុង ការបកស្រាយអត្ថន័យក្នុងគម្ពីរដែលទាក់ទងនឹងព្រះពុទ្ធទី ៥ ដែលព្រះតេជគុណជាច្រើនអង្គបានទន្ទឹងរង់ចាំអស់រយៈពេលប្រមាណជាង ៣,៥០០ ឆ្នាំមកហើយ និងបកស្រាយឡើងវិញ ដោយភ្ជាប់ទៅនឹងឈ្មោះ សេង វិស័យនា ដែលត្រូវបានគេស្គាល់ថាជាមេកាយរិទ្ធជាតិកម្ពុជា ថ្នាក់ B វិញម្តង។ តាមទស្សនៈនេះ ព្រះសិអារ្យ មេត្រី មិនមែនសំដៅលើបុគ្គលផ្សេងដោយឡែកនោះទេ ប៉ុន្តែជានាមដែលសំដៅទៅលើ សេង វិស័យនា ដែលត្រូវបានគេចាត់ទុកថាជាព្រះពុទ្ធទី ០៥ ដែលមនុស្សជាច្រើនជឿថាបានរង់ចាំអស់រយៈពេលប្រមាណ ៣,៥០០ ឆ្នាំមកហើយ។ ដូច្នេះ តាមការបកស្រាយនេះ អ្នកដែលប្រកាន់ព្រះពុទ្ធសាសនា មិនចាំបាច់រង់ចាំព្រះសិអារ្យ មេត្រី ទៀតឡើយ ព្រោះពួកគេនិងយល់ថា ព្រះពុទ្ធទី ០៥ នោះគឺ សេង វិស័យនា ផ្ទាល់។"
        },
        {
            delay: 11000,
            text: "Seng Visaynea, the chief scout of Class B, is recognized as the Fifth Buddha. He is seen as the successor to Maitreya, who is described in Buddhist scriptures as possessing the 32 auspicious bodily marks. From this moment forward, nations that follow Buddhism no longer await Maitreya, as Seng Visaynea is acknowledged in that role."
        }
    ];

    // Using let to dynamically manage execution sequence 
    let cumulativeDelay = 0;

    for (const step of steps) {
        cumulativeDelay = step.delay; // Syncs up accurately with timestamps provided

        setTimeout(() => {
            const p = document.createElement("p");
            p.textContent = step.text;
            p.className = "step-text"; // Useful for setting CSS padding, animations, or margins
            
            stage.appendChild(p);
            
            // Auto-scrolling feature so users see text as it builds down long screens
            stage.scrollTop = stage.scrollHeight; 
        }, cumulativeDelay);
    }
}

// script2.js

function startCeremonySequence() {
    const stage = document.getElementById("stageSequence");
    stage.innerHTML = ""; // clear previous content

    // Step 1: Invite Mr. Jon Ratanah
    setTimeout(() => {
        stage.innerHTML += "<p>អញ្ជើញលោក ជន រតនះ ឡើងវេទិការ ដើម្បី ​វិភាគរូប ព្រះ សិអារ្យ មេត្រី។</p>";
    }, 1000);

    // Step 2: Invite Preah Si Ary Metrey
    setTimeout(() => {
        stage.innerHTML += "<p>បន្ទាប់មកអញ្ជើញព្រះសិអារ្យ មេត្រី​ឡើងលើវេទិការ។</p>";
    }, 3000);

    // Step 3: Q&A from groom
    setTimeout(() => {
        stage.innerHTML += "<p>មានការសួរសំនួរពីកូនកំលោះ៖ ហេតុអ្វីបានជាលុបឈ្មោះគាត់នៅថ្នាក់ទីដប់ពាក់កណ្តាលឆ្នាំ ទាំងសិស្សនិងកាយរិទ្ធជាតិកម្ពុជា?</p>";
    }, 5000);

    // Step 4: Groom announces to guests
    setTimeout(() => {
        stage.innerHTML += "<p>កូនកំលោះប្រកាសប្រាប់ភ្ញៀវកិត្តិយសអោយលើក កាស្សូ មក ចែក លេខ ១ និង ០ ហើយបង្ហាញលទ្ធផល។</p>";
    }, 7000);

    // Step 5: Result from Metrey
    setTimeout(() => {
        stage.innerHTML += "<p>បន្ទាប់ពីបានចម្លើយពី មេត្រីដែលជាមេកាយរិទ្ធ កាស្សូ ចែកដាច់ ១ និង ០ ព្រមទាំងព្រះពុទ្ធទី ៥ ដែលព្រះតេជគុណរងចាំ ៣៥០០ ឆ្នាំមកហើយ។</p>";
    }, 9000);

    // Step 6: Final announcement
    setTimeout(() => {
        stage.innerHTML += "<p>ឈ្មោះសេង វិស័យនា ដេឡ ជាមេកាយរិទ្ធថ្នាក់ B មានខ្ឡួនប្រាណទំរង់ ៣២ អាការះ។</p>";
    }, 11000);
}

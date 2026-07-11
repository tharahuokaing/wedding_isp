const btn = document.getElementById("playBtn");

btn.onclick = function() {
    // Stop any ongoing speech playback before starting a new one
    window.speechSynthesis.cancel();

    const msg = new SpeechSynthesisUtterance();
    msg.lang = "km-KH";
    
    // Note: Escaped the quotes around \"Digital 1s and 0s\" to prevent syntax errors
    msg.text = "Today, we met and interviewed Mr. LONG LAIN, who shared his vision regarding the development of 6G technology and the future of internet services for a digital society. The presence of Long Lain is accompanied by representatives from the DUTY-FREE sector—which we all know no country in the world dares to tax. There is also an interview with the Duty-Free side regarding whether the satellite launched by Odyssey (the grandson of Johnnie Walker) into orbit around Mars in our solar system, called 2001 Mars Odyssey, is a reality? In the interview, he raised the concept of providing free 6G services as a vision for the future. He explained that implementing such a project would depend on many factors, including investment, technology, regulations, and collaboration among relevant stakeholders. During this program, an image was also displayed as a topic of discussion, which some event organizers interpreted as having a connection to beliefs about Maitreya. This interpretation is solely the viewpoint or belief of the interpreter and should not be considered an official identification or evidence of approval for any project. At the same time, Mr. Long Line demonstrated the ceremony of handing over the mnemonic seed phrase, which is the crucial key for owning and protecting digital wallets for eCash (Cash for the Internet). A seed phrase is a sequence of multiple words used to generate and restore a digital wallet. It acts as a security key that provides access to your digital assets. During the ceremony, he explained the meaning of the term \"Digital 1s and 0s\", which forms the foundation of the entire digital world. This term refers to binary code, which uses the numbers 1 and 0 to represent data and computations. Every application, digital payment, and blockchain system is built upon the interpretation of these 1s and 0s. The program also reminisced about the relationship between Mr. Long Lain and Mr. Houkaing Thara, who studied together and were former members of the same generation of the pure Cambodian National Scouts during their childhood, and who collaborated in organizing this event. សូមស្វាគមន៍មកកាន់ពិធីបង្ហាញបច្ចេកវិទ្យាអ៊ីនធើណេត។ ថ្ងៃនេះយើងសម្ភាសលោក ឡុង ឡាអ៊ីន អំពីចក្ខុវិស័យនៃបច្ចេកវិទ្យា 6G និងការផ្តល់សេវាដោយមិនគិតថ្លៃជាគំនិតសម្រាប់អនាគត។";

    window.speechSynthesis.speak(msg);
};

const btn=document.getElementById("playBtn");

btn.onclick=function(){

const msg=new SpeechSynthesisUtterance();

msg.lang="km-KH";

msg.text="Today we’re featuring a special interview with Long La’in about the vision of 6G technology and the bold idea of providing free internet service as a concept for the future. សូមស្វាគមន៍មកកាន់ពិធីបង្ហាញបច្ចេកវិទ្យាអ៊ីនធើណេត។ ថ្ងៃនេះយើងសម្ភាសលោក ឡុង ឡាអ៊ីន អំពីចក្ខុវិស័យនៃបច្ចេកវិទ្យា 6G និងការផ្តល់សេវាដោយមិនគិតថ្លៃជាគំនិតសម្រាប់អនាគត។";

speechSynthesis.speak(msg);

}

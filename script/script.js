// add class navbarDark on navbar scroll
const header = document.querySelector('.navbar');

window.onscroll = function() {
    var top = window.scrollY;
    if(top >=100) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}

new TypeIt("#companionMethods", {
    speed: 50,
    waitUntilVisible: true,
  })
    .type("Data Science", { delay: 300 })
    .delete(7,{ delay: 100 })
    .type("Structure & Algorithms",{ delay: 300 })
    // .move(null, { to: "END" })
    .delete(30)
    .type("Full Stack Development")
    .delete(25)
    .type("Machine Learning")
    .delete(15)
    // type("Database Management System")
    // .pause(500)
    // .delete(25)
    // type(" Operating Systems")
    // .pause(500)
    // .delete(25)
    // type("Competitive Programming")
    // .pause(500)
    // .break({ delay: 500 })
    // .break({ delay: 500 })
    .type("<em>- Will Rogers</em>")
    .go();
// Machine learning, Data science, data structures & algorithms, Database management system 
// Full stack development,competitive programming, Operating systems
(function() {
    function $(id) {
      return document.getElementById(id);
    }
  
    var card = $('card'),
        openB = $('open'),
        closeB = $('close'),
        next = $('next_page'),
        text = $('text'),
        timer = null;
    console.log('wat', card);
    openB.addEventListener('click', function () {
      card.setAttribute('class', 'open-half');
      if (timer) clearTimeout(timer);
      timer = setTimeout(function () {
        card.setAttribute('class', 'open-fully');
        timer = null;
      }, 1000);
    });
  
    closeB.addEventListener('click', function () {
      card.setAttribute('class', 'close-half');
      if (timer) clearTimerout(timer);
      timer = setTimeout(function () {
        card.setAttribute('class', '');
        timer = null;
      }, 1000);
    });

    next.addEventListener('click', function() {
    if (text.getAttribute("data-page") == 0) {
        text.innerHTML = "<p><p>Dear dad,</p><p>Happy birthday!</p><p>Over the past year, I feel like I’ve gotten to know you on a much deeper level. I’ve become much more adept at following and expanding on your logic, and as I mentioned to you before, a lot of things that you’ve always emphasized (and which I didn’t understand why before) have become apparent to me. I’m very grateful for having someone who is willing and eager to teach me everything they know and anything I wish to learn.</p></p>";
        next.textContent = "next page"
        text.setAttribute("data-page", 1);
      } else if (text.getAttribute("data-page") == 1) {
        text.innerHTML = "<p>Looking back, I learned quite a few things from you this past year. For one, I finally picked up the habit of working out consistently at you and mom’s advocacy. This habit has been life changing, and a lot of the credit goes to you. Taking your advice and acting on them has taught me to question my intuitive first assessment of ideas, since I can think of quite a few occasions where I first didn’t like the idea of something (and could come up with all sorts of reason why it’s deficient), but later came to appreciate it (e.g. jogging).</p>";
        text.setAttribute("data-page", 2);
      } else if (text.getAttribute("data-page") == 2) {
        text.innerHTML = "<p>One thing that I’ve never appreciated before quite as much as I do now, is the strong logical reasoning skills you have. It is because of this, we can always have a productive conversation that allows me to learn your insights despite us starting with differing opinions sometimes. One of my favorite things about our relationship is the intellectual discussions we have, whether about current events, analysis of everyday situations, philosophy, or practical advices. I often come out of these conversations with ideas that I can immediately act on, and always having gained some sort of insight adjacent to our topic of discussion. This goes to show that I have much to learn from you, and much to gain from continuing (and continually optimizing) these discussions.</p>";
        text.setAttribute("data-page", 3);
      } else if (text.getAttribute("data-page") == 3) {
        text.innerHTML = "<p>And this is another reason for why I’m grateful of you being so willing to share your knowledge without reservations. So this year, I thank you for being a great teacher (perhaps \“coach\” is better suited), and for being a great dad. Have a fabulous birthday!</p><p class=\"signed-no-center\">Love,</p><p class=\"signed-no-center\">Buwei</p>";
        next.textContent = "return to page 1"
        text.setAttribute("data-page", 0);
      }
    });
  
  }());
  
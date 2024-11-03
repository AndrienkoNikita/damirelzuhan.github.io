document.addEventListener("DOMContentLoaded", () => {
  const langLinks = document.querySelectorAll(".lang-link");
  langLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const lang = e.target.getAttribute("data-lang");

      // Удаляем активный класс у всех ссылок
      langLinks.forEach((link) => link.classList.remove("active"));

      // Добавляем активный класс к нажатой ссылке
      e.target.classList.add("active");

      // Переключаем язык
      if (lang === "en") {
        // Переключаем на английский
        document.documentElement.lang = "en";

        // Переключение текстов на английский язык
        document.querySelector("#hero .container p").textContent = "I am";
        const typedElement = document.querySelector(".typed");
        if (typedElement) {
          typedElement.setAttribute(
            "data-typed-items",
            "media designer, logo designer, photo designer, illustrator"
          );
        }
        document.querySelector("#about .section-title h2").textContent =
          "About Me";
        document.querySelector("#about .section-title p").textContent =
          "Building a successful product is a challenge.";
        document.querySelector("#about .content h3").textContent =
          "Media Designer";

        document.querySelector("#skills .section-title h2").textContent =
          "Skills";
        document.querySelector("#skills .section-title p").textContent =
          "Although I haven't been at MBO for long, I am already capable of using Adobe programs very well.";

        document.querySelector("#resume .section-title h2").textContent =
          "Resume";

        document.querySelector("#resume .resume-title").textContent = "Summary";

        document.querySelector("#resume .resume-item h4").textContent =
          "Damirel Zuhan";
        document.querySelector("#resume .resume-item p em").textContent =
          "Creative student from media design education who takes initiative and is energetic. I love designing and I think I can help you. Just contact me.";
        document.querySelector(
          "#resume .resume-item ul li:nth-child(1)"
        ).textContent = "Heerenveen NL";
        document.querySelector(
          "#resume .resume-item ul li:nth-child(2)"
        ).textContent = "+310642493260";
        document.querySelector(
          "#resume .resume-item ul li:nth-child(3)"
        ).textContent = "damirelzuhan@gmail.com";

        document.querySelector(
          "#resume .resume-item:nth-child(3) h4"
        ).textContent = "Media Designer at Firda MBO 4";
        document.querySelector(
          "#resume .resume-item:nth-child(3) h5"
        ).textContent = "2023 - 2027";
        document.querySelector(
          "#resume .resume-item:nth-child(3) p em"
        ).textContent =
          "I quickly learned the Dutch language and I chose this fun education. It is my only experience in Dutch education.";

        document.querySelector("#portfolio .section-title h2").textContent =
          "Portfolio";

        document.querySelectorAll(
          "#portfolio #portfolio-flters li"
        )[0].textContent = "All";
        document.querySelectorAll(
          "#portfolio #portfolio-flters li"
        )[1].textContent = "Illustrations";
        document.querySelectorAll(
          "#portfolio #portfolio-flters li"
        )[2].textContent = "Logos";
        document.querySelectorAll(
          "#portfolio #portfolio-flters li"
        )[3].textContent = "Projects";

        document.querySelectorAll(
          "#portfolio .portfolio-info h4"
        )[0].textContent = "Children's Book";
        document.querySelectorAll(
          "#portfolio .portfolio-info p"
        )[0].textContent = "Projects";

        document.querySelectorAll(
          "#portfolio .portfolio-info h4"
        )[1].textContent = "Logo";
        document.querySelectorAll(
          "#portfolio .portfolio-info p"
        )[1].textContent = "Logos";

        document.querySelectorAll(
          "#portfolio .portfolio-info h4"
        )[2].textContent = "App 2";
        document.querySelectorAll(
          "#portfolio .portfolio-info p"
        )[2].textContent = "App";

        document.querySelectorAll(
          "#portfolio .portfolio-info h4"
        )[3].textContent = "Card 2";
        document.querySelectorAll(
          "#portfolio .portfolio-info p"
        )[3].textContent = "Card";

        document.querySelectorAll(
          "#portfolio .portfolio-info h4"
        )[4].textContent = "Web 2";
        document.querySelectorAll(
          "#portfolio .portfolio-info p"
        )[4].textContent = "Web";

        document.querySelectorAll(
          "#portfolio .portfolio-info h4"
        )[5].textContent = "App 3";
        document.querySelectorAll(
          "#portfolio .portfolio-info p"
        )[5].textContent = "App";

        document.querySelectorAll(
          "#portfolio .portfolio-info h4"
        )[6].textContent = "Card 1";
        document.querySelectorAll(
          "#portfolio .portfolio-info p"
        )[6].textContent = "Card";

        document.querySelectorAll(
          "#portfolio .portfolio-info h4"
        )[7].textContent = "Card 3";
        document.querySelectorAll(
          "#portfolio .portfolio-info p"
        )[7].textContent = "Card";

        document.querySelectorAll(
          "#portfolio .portfolio-info h4"
        )[8].textContent = "Web 3";
        document.querySelectorAll(
          "#portfolio .portfolio-info p"
        )[8].textContent = "Web";

        document.querySelector("#contact .section-title h2").textContent =
          "Contact";

        document.querySelectorAll("#contact .info .address h4")[0].textContent =
          "Location:";
        document.querySelectorAll("#contact .info .address p")[0].textContent =
          "Netherlands, Heerenveen 8441 AC, Schans 65";

        document.querySelectorAll("#contact .info .email h4")[0].textContent =
          "Email:";
        document.querySelectorAll("#contact .info .email p")[0].textContent =
          "damirelzuhan@gmail.com";

        document.querySelectorAll("#contact .info .phone h4")[0].textContent =
          "Call:";
        document.querySelectorAll("#contact .info .phone p")[0].textContent =
          "+31642493260";

        document.querySelector("#footer h3").textContent = "Damirel Zuhan";
      } else if (lang === "nl") {
        // Переключаем на нидерландский
        document.documentElement.lang = "nl";

        // Переключение текстов на нидерландский язык
        document.querySelector("#hero .container p").textContent = "Ik ben";
        const typedElement = document.querySelector(".typed");
        if (typedElement) {
          typedElement.setAttribute(
            "data-typed-items",
            "mediavormgever, logo ontwerper, foto ontwerper, illustrator"
          );
        }
        document.querySelector("#about .section-title h2").textContent =
          "Over mij";
        document.querySelector("#about .section-title p").textContent =
          "Het bouwen van een succesvol product is een uitdaging.";
        document.querySelector("#about .content h3").textContent =
          "Mediavormgever";

        document.querySelector("#skills .section-title h2").textContent =
          "Vaardigheden";
        document.querySelector("#skills .section-title p").textContent =
          "Hoewel ik niet lang op het MBO ben, kan ik al heel goed Adobe programma's gebruiken.";

        document.querySelector("#resume .section-title h2").textContent =
          "Resume";

        document.querySelector("#resume .resume-title").textContent =
          "Samenvatting";

        document.querySelector("#resume .resume-item h4").textContent =
          "Damirel Zuhan";
        document.querySelector("#resume .resume-item p em").textContent =
          "Creatieve student van mediavormgeving opleiding die initiatief neemt en energiek is. Ik hou van ontwerpen en ik denk dat ik u kan wel helpen. Neem gewoon contact met mij op.";
        document.querySelector(
          "#resume .resume-item ul li:nth-child(1)"
        ).textContent = "Heerenveen NL";
        document.querySelector(
          "#resume .resume-item ul li:nth-child(2)"
        ).textContent = "+310642493260";
        document.querySelector(
          "#resume .resume-item ul li:nth-child(3)"
        ).textContent = "damirelzuhan@gmail.com";

        document.querySelector(
          "#resume .resume-item:nth-child(3) h4"
        ).textContent = "Mediavormgever bij Firda MBO 4";
        document.querySelector(
          "#resume .resume-item:nth-child(3) h5"
        ).textContent = "2023 - 2027";
        document.querySelector(
          "#resume .resume-item:nth-child(3) p em"
        ).textContent =
          "Ik heb snel de Nederlandse taal geleerd en ik heb deze leuke opleiding gekozen. Het is mijn enige ervaring in het Nederlandse onderwijs.";

        document.querySelector("#portfolio .section-title h2").textContent =
          "Portfolio";

        document.querySelectorAll(
          "#portfolio #portfolio-flters li"
        )[0].textContent = "Alles";
        document.querySelectorAll(
          "#portfolio #portfolio-flters li"
        )[1].textContent = "IIllustraties";
        document.querySelectorAll(
          "#portfolio #portfolio-flters li"
        )[2].textContent = "Logo's";
        document.querySelectorAll(
          "#portfolio #portfolio-flters li"
        )[3].textContent = "Projecten";

        document.querySelectorAll(
          "#portfolio .portfolio-info h4"
        )[0].textContent = "Kinderboek";
        document.querySelectorAll(
          "#portfolio .portfolio-info p"
        )[0].textContent = "Projecten";

        document.querySelectorAll(
          "#portfolio .portfolio-info h4"
        )[1].textContent = "Logo";
        document.querySelectorAll(
          "#portfolio .portfolio-info p"
        )[1].textContent = "Logo's";

        document.querySelectorAll(
          "#portfolio .portfolio-info h4"
        )[2].textContent = "App 2";
        document.querySelectorAll(
          "#portfolio .portfolio-info p"
        )[2].textContent = "App";

        document.querySelectorAll(
          "#portfolio .portfolio-info h4"
        )[3].textContent = "Card 2";
        document.querySelectorAll(
          "#portfolio .portfolio-info p"
        )[3].textContent = "Card";

        document.querySelectorAll(
          "#portfolio .portfolio-info h4"
        )[4].textContent = "Web 2";
        document.querySelectorAll(
          "#portfolio .portfolio-info p"
        )[4].textContent = "Web";

        document.querySelectorAll(
          "#portfolio .portfolio-info h4"
        )[5].textContent = "App 3";
        document.querySelectorAll(
          "#portfolio .portfolio-info p"
        )[5].textContent = "App";

        document.querySelectorAll(
          "#portfolio .portfolio-info h4"
        )[6].textContent = "Card 1";
        document.querySelectorAll(
          "#portfolio .portfolio-info p"
        )[6].textContent = "Card";

        document.querySelectorAll(
          "#portfolio .portfolio-info h4"
        )[7].textContent = "Card 3";
        document.querySelectorAll(
          "#portfolio .portfolio-info p"
        )[7].textContent = "Card";

        document.querySelectorAll(
          "#portfolio .portfolio-info h4"
        )[8].textContent = "Web 3";
        document.querySelectorAll(
          "#portfolio .portfolio-info p"
        )[8].textContent = "Web";

        document.querySelector("#contact .section-title h2").textContent =
          "Contact";

        document.querySelectorAll("#contact .info .address h4")[0].textContent =
          "Locatie:";
        document.querySelectorAll("#contact .info .address p")[0].textContent =
          "Nederland, Heerenveen 8441 AC, Schans 65";

        document.querySelectorAll("#contact .info .email h4")[0].textContent =
          "E-mail:";
        document.querySelectorAll("#contact .info .email p")[0].textContent =
          "damirelzuhan@gmail.com";

        document.querySelectorAll("#contact .info .phone h4")[0].textContent =
          "Bel:";
        document.querySelectorAll("#contact .info .phone p")[0].textContent =
          "+31642493260";

        document.querySelector("#footer h3").textContent = "Damirel Zuhan";
      }
    });
  });
});

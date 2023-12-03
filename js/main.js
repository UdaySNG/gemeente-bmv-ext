class Api {
  url = "";
  data = null;

  constructor(newURL) {
    this.url = newURL;
  }

  async getData() {
    await fetch(this.url)
      .then(function (response) {
        return response.json();
      })
      .then((data) => {
        this.data = data;
      });
    return this.data;
  }
}

class Header {
  headerElement;
  logoElement;
  titleElement;
  imageElement;
  buttonElements = [];
  placeToRenderHeader;

  constructor(placeToRenderHeader) {
    this.placeToRenderHeader =
      document.getElementsByTagName(placeToRenderHeader)[0];

    this.headerElement = document.createElement("header");
    this.headerElement.classList = "header";

    this.logoElement = document.createElement("img");
    this.logoElement.classList = "header__logo";
    this.logoElement.src = "./img/amsterdam-xxx-logo.svg";

    this.titleElement = document.createElement("h1");
    this.titleElement.classList = "header__title";
    this.titleElement.innerText = "BMV\nAmsterdam";

    const buttonNames = ["Home", "Products", "Services", "About Us", "Contact"];

    // Maak 5 knoppen met verschillende namen
    for (let i = 0; i < 5; i++) {
      const buttonElement = document.createElement("button");
      buttonElement.classList = "header__button";

      // Use the corresponding name from the array, or provide a default if not available
      buttonElement.innerText = buttonNames[i] || `Button ${i + 1}`;

      this.buttonElements.push(buttonElement);
    }
  }

  render() {
    const buttonsContainer = document.createElement("div");
    buttonsContainer.classList = "header__buttons-container";


    this.buttonElements.forEach((buttonElement) => {
      buttonsContainer.appendChild(buttonElement);
    });

    this.headerElement.appendChild(this.titleElement);

    const fourthButton = this.buttonElements[3]; 

    const logoContainer = document.createElement("div");
    logoContainer.classList = "header__logo-container";
    logoContainer.appendChild(this.logoElement);

    buttonsContainer.appendChild(logoContainer);

    this.headerElement.appendChild(buttonsContainer);

    this.placeToRenderHeader.appendChild(this.headerElement);
  }
}

class Main {
  mainElement;
  leftSection;

  constructor(placeToRenderMain) {
    this.placeToRenderMain = document.getElementsByTagName(
      placeToRenderMain
    )[0];

    this.mainElement = document.createElement("main");
    this.mainElement.classList = "main";

 
    this.leftSection = new LeftSection();
  }

  render() {
    this.leftSection.render(this.mainElement);
    this.placeToRenderMain.appendChild(this.mainElement);
  }
}


class LeftSection {
  sectionElement;
  data;
  constructor(title, content, data) {
    this.sectionElement = document.createElement("section");
    this.sectionElement.classList = "left-section";

    const titleElement = document.createElement("h1");
    titleElement.innerText = "Projecten";

    const articleElement = document.createElement("article");
    articleElement.classList = "left-section__article";

    const imageElement = document.createElement("img");
    imageElement.classList = "left-section__image";
    imageElement.src = "./img/amsterdam-xxx-logo.svg"; // Replace with the actual path to your small image

    const contentElement = document.createElement("p");
    contentElement.innerText = "Een sociaal-duurzaam Amsterdam Voor veel mensen is en blijft Amsterdam een zeer aantrekkelijke plek om te wonen en dus blijven we bouwen aan de groei van de stad. Maar Amsterdam bestaat natuurlijk uit méér dan alleen woningen. Daarom bouwen we aan een sociaal-duurzaam Amsterdam: een stad die het welzijn van haar bewoners belangrijk vindt en verbetert, door niet alleen woningen te bouwen maar ook te zorgen voor maatschappelijke voorzieningen, voor huidige bewoners en toekomstige generaties.";


    // Create a clickable link at the end of the paragraph
    const scrollLinkElement = document.createElement("a");
    scrollLinkElement.href = "#scroll-target"; // Replace with the appropriate target ID
    scrollLinkElement.innerText = "Lees Meer";

    contentElement.appendChild(scrollLinkElement);

    articleElement.appendChild(imageElement);
    articleElement.appendChild(contentElement);

    this.sectionElement.appendChild(titleElement);
    this.sectionElement.appendChild(articleElement);
  }

  render(parentElement) {
    parentElement.appendChild(this.sectionElement);
  }
}





class Footer {
  footerElement;
  listElements = [];

  constructor(placeToRenderFooter) {
    this.placeToRenderFooter = document.getElementsByTagName(
      placeToRenderFooter
    )[0];

    this.footerElement = document.createElement("footer");
    this.footerElement.classList = "footer";

    this.addListItem("Mail", "PMB is bereikbaar op werkdagen tussen 8.30 - 17.30 uur.", "Contact", "#");
    this.addListItem("Volg het ProjectManagement Bureau", "", "Linkedin", "#", "X", "#");
    this.addListItem("Over deze site", "", "Colofon", "#", "Proclaimer en Copyright", "#", "Sitemap", "#");
    this.addListItem("Amsterdam.nl", "Nieuws en publieksinformatie van de gemeente Amsterdam vindt u op onze site", "Amsterdam.nl", "#");
  }

  addListItem(title, content, linkText1, linkUrl1, linkText2, linkUrl2, linkText3, linkUrl3) {
    const listItem = document.createElement("li");
    listItem.classList = "footer__item";

    const titleElement = document.createElement("h4");
    titleElement.innerText = title;

    const contentElement = document.createElement("p");
    contentElement.innerText = content;

    const linkContainer = document.createElement("div"); // Container for the links

    if (linkText1 && linkUrl1) {
      const linkElement1 = document.createElement("a");
      linkElement1.href = linkUrl1;
      linkElement1.innerText = linkText1;
      linkContainer.appendChild(linkElement1);
      linkContainer.appendChild(document.createElement("br")); // Add a line break if the first link is present
    }

    if (linkText2 && linkUrl2) {
      const linkElement2 = document.createElement("a");
      linkElement2.href = linkUrl2;
      linkElement2.innerText = linkText2;
      linkContainer.appendChild(linkElement2);
      linkContainer.appendChild(document.createElement("br")); // Add a line break if the second link is present
    }

    if (linkText3 && linkUrl3) {
      const linkElement3 = document.createElement("a");
      linkElement3.href = linkUrl3;
      linkElement3.innerText = linkText3;
      linkContainer.appendChild(linkElement3);
    }

    listItem.appendChild(titleElement);
    listItem.appendChild(contentElement);
    listItem.appendChild(linkContainer);

    this.listElements.push(listItem);
  }
  
  
  render() {
    const listContainer = document.createElement("ul");
    listContainer.classList = "footer__list";

    this.listElements.forEach((listItem) => {
      listContainer.appendChild(listItem);
    });

    this.footerElement.appendChild(listContainer);
    this.placeToRenderFooter.appendChild(this.footerElement);
  }
}


class App {
  header;
  footer;
  main;

  constructor() {
    this.header = new Header("body");
    this.header.render();

    this.main = new Main("body");
    this.main.render();

    this.footer = new Footer("body");
    this.footer.render();

 
  }
}

// Render header, main, and footer
const app = new App();


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
        this.data = data.episodes;
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

    // Create an instance of LeftSection
    this.leftSection = new LeftSection("Left Section Title", "Content for the left section.");
  }

  render() {
    // Render the LeftSection
    this.leftSection.render(this.mainElement);

    // You can add more sections or content here as needed

    this.placeToRenderMain.appendChild(this.mainElement);
  }
}


class LeftSection {
  sectionElement;

  constructor(title, content) {
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
    contentElement.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae nesciunt repellat voluptatem cum accusantium beatae ut illum quia eveniet, ducimus accusamus inventore, doloribus nam. Fugit fuga obcaecati ullam necessitatibus labore?Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae nesciunt repellat voluptatem cum accusantium beatae ut illum quia eveniet, ducimus accusamus inventore, doloribus nam. Fugit fuga obcaecati ullam necessitatibus labore?Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae nesciunt repellat voluptatem cum accusantium beatae ut illum quia eveniet, ducimus accusamus inventore, doloribus nam. Fugit fuga obcaecati ullam necessitatibus labore?Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae nesciunt repellat voluptatem cum accusantium beatae ut illum quia eveniet, ducimus accusamus inventore, doloribus nam. Fugit fuga obcaecati ullam necessitatibus labore?Lorem ipsum dolor sit amet consectetur adipisicing elit.";

    // Create a clickable link at the end of the paragraph
    const scrollLinkElement = document.createElement("a");
    scrollLinkElement.href = "#scroll-target"; // Replace with the appropriate target ID
    scrollLinkElement.innerText = "Scroll down";

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

    this.addListItem("Section 1", "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "Learn More", "#");
    this.addListItem("Section 2", "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "Explore", "#");
    this.addListItem("Section 3", "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.", "Discover", "#");
    this.addListItem("Section 4", "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.", "Contact Us", "#");
  }

  addListItem(title, content, linkText, linkUrl) {
    const listItem = document.createElement("li");
    listItem.classList = "footer__item";

    const titleElement = document.createElement("h4");
    titleElement.innerText = title;

    const contentElement = document.createElement("p");
    contentElement.innerText = content;

    const linkElement = document.createElement("a");
    linkElement.href = linkUrl;
    linkElement.innerText = linkText;

    listItem.appendChild(titleElement);
    listItem.appendChild(contentElement);
    listItem.appendChild(linkElement);

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


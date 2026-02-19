console.log("Header script loaded");
import logoImg from "../assets/logo.jpg";

const headerContainer = document.getElementById("header-container");

const header = document.createElement("header");
    const logoContainer = document.createElement("a");
        logoContainer.href = "#home";
        const logo = document.createElement("img");
            logo.src = logoImg;
            logo.id = "store-logo";
            logoContainer.appendChild(logo);
    header.appendChild(logoContainer);
    const searchForm = document.createElement("form");
        searchForm.className = "search-bar default-search";
        searchForm.action = "/search_results";
        searchForm.method = "get";
        searchForm.role = "search";
            const searchLabel = document.createElement("label");
                searchLabel.htmlFor = "search-input";
                searchLabel.className = "visually-hidden";
            searchForm.appendChild(searchLabel);
            const searchInput = document.createElement("input");
                searchInput.type = "search";
                searchInput.id = "search-input";
                searchInput.name = "q";
                searchInput.placeholder = "What can we help you find?";
                searchInput.setAttribute("aria-label", "Search through site content");
            searchForm.appendChild(searchInput);
            const searchButton = document.createElement("button");
                searchButton.type = "submit";
                searchButton.id = "search-button";
                    const searchIcon = document.createElement("span");
                        searchIcon.className = "material-symbols-outlined";
                        searchIcon.textContent = "search";
                searchButton.appendChild(searchIcon);
            searchForm.appendChild(searchButton);
    header.appendChild(searchForm);
    const accountInfo = document.createElement("div");
        accountInfo.className = "account-info";
            const loginLink = document.createElement("a");
                loginLink.href = "#login";
                loginLink.innerHTML = '<span class="material-symbols-outlined">account_circle</span>Login';
        accountInfo.appendChild(loginLink);
            const separator = document.createTextNode(" | ");
        accountInfo.appendChild(separator);
            const cartLink = document.createElement("a");
                cartLink.href = "#cart";
                cartLink.innerHTML = '<span class="material-symbols-outlined">shopping_cart</span>Cart (0)';
        accountInfo.appendChild(cartLink);
    header.appendChild(accountInfo);
headerContainer.appendChild(header);

const altSearchContainer = document.getElementById("alt-search-container");

const alternateSearchForm = document.createElement("form");
    alternateSearchForm.className = "search-bar alternate-search";
    alternateSearchForm.action = "/search_results";
    alternateSearchForm.method = "get";
    alternateSearchForm.role = "search";
        const altSearchLabel = document.createElement("label");
            altSearchLabel.htmlFor = "search-input";
            altSearchLabel.className = "visually-hidden";
    alternateSearchForm.appendChild(altSearchLabel);
        const altSearchInput = document.createElement("input");
            altSearchInput.type = "search";
            altSearchInput.id = "search-input";
            altSearchInput.name = "q";
            altSearchInput.placeholder = "What can we help you find?";
            altSearchInput.setAttribute("aria-label", "Search through site content");
    alternateSearchForm.appendChild(altSearchInput);
        const altSearchButton = document.createElement("button");
            altSearchButton.type = "submit";
            altSearchButton.id = "search-button";
                const altSearchIcon = document.createElement("span");
                    altSearchIcon.className = "material-symbols-outlined";
                    altSearchIcon.textContent = "search";
            altSearchButton.appendChild(altSearchIcon);
    alternateSearchForm.appendChild(altSearchButton);
altSearchContainer.appendChild(alternateSearchForm);

const navContainer = document.getElementById("nav-container");

const navBar = document.createElement("nav");
    navBar.className = "nav-bar";
        const menuIcon = document.createElement("span");
            menuIcon.className = "material-symbols-outlined";
            menuIcon.id = "menu";
            menuIcon.textContent = "menu";
    navBar.appendChild(menuIcon);
        const navLinks = document.createElement("div");
            navLinks.className = "nav-links";
                const homeLink = document.createElement("a");
                    homeLink.href = "#home";
                    homeLink.textContent = "HOME";
        navLinks.appendChild(homeLink);
                const productsLink = document.createElement("a");
                    productsLink.href = "products.html";
                    productsLink.textContent = "PRODUCTS";
        navLinks.appendChild(productsLink);
                const servicesLink = document.createElement("a");
                    servicesLink.href = "services.html";
                    servicesLink.textContent = "SERVICES";
        navLinks.appendChild(servicesLink);
                const aboutLink = document.createElement("a");
                    aboutLink.href = "about.html";
                    aboutLink.textContent = "ABOUT US";
        navLinks.appendChild(aboutLink);
                const contactLink = document.createElement("a");
                    contactLink.href = "contact.html";
                    contactLink.textContent = "CONTACT US";
        navLinks.appendChild(contactLink);
    navBar.appendChild(navLinks);
navContainer.appendChild(navBar);

    // <header>
    //     <a href="#home"><img src="/src/assets/logo.jpg" id="store-logo"></a>
    //     <form class="search-bar default-search" action="/search_results" method="get" role="search">
    //         <label for="search-input" class="visually-hidden"></label>
    //         <input type="search" id="search-input" name="q" placeholder="What can we help you find?" aria-label="Search through site content">
    //         <button type="submit" id="search-button"><span class="material-symbols-outlined">search</span></button>
    //     </form>
    //     <div class="account-info">
    //         <a href="#login"><span class="material-symbols-outlined">account_circle</span>Login</a> |
    //         <a href="#cart">Cart (0)</a>
    //     </div>
    // </header>
    // <form class="search-bar alternate-search" action="/search_results" method="get" role="search">
//         <label for="search-input" class="visually-hidden"></label>
//         <input type="search" id="search-input" name="q" placeholder="What can we help you find?" aria-label="Search through site content">
//         <button type="submit" id="search-button"><span class="material-symbols-outlined">search</span></button>
    //  </form>
    // <nav class="nav-bar">
    //     <span class="material-symbols-outlined" id="menu">menu</span>
    //     <div class="nav-links">
    //         <a href="template.html">HOME</a>
    //         <a href="products.html">PRODUCTS</a>
    //         <a href="services.html">SERVICES</a>
    //         <a href="about.html">ABOUT US</a>
    //         <a href="contact.html">CONTACT US</a>
    //     </div>
    // </nav>
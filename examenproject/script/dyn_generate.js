let main;
let article;


class Product {

    constructor(filter, naam, href, src, alt,prijs) {
        this.filter = filter;
        this.naam = naam;
        this.href = href;
        this.src = src;
        this.alt = alt;
        this.prijs = prijs;
    }

    getProductNode() {
        let section =  document.createElement('section');
        section.setAttribute('data-filter',this.filter);
        section.innerHTML += `<h5>${this.naam}</h5>`;
        if (this.href === ''){
            section.innerHTML += `<img class="foto_schaling" src="${this.src}" alt="${this.alt}">`;
        } else {
            section.innerHTML += `<a href="${this.href}"><img class="foto_schaling" src="${this.src}" alt="${this.alt}"></a>`;

        }
        section.innerHTML += `<p>€ ${this.prijs}</p>`;
        return section
    }
}

class Category {
    section = document.createElement('section');

    constructor(id) {
        this.id = id;
        this.categoryName = this.#givecategoryName(id);
        this.section.innerHTML = `<h4 id="${this.id}">${this.categoryName}</h4>`
    }

    #givecategoryName(id) {
        let categoryName;
        switch (id) {
            case 'kettlebells': categoryName = 'Kettlebells'; break
            case 'fitnessmatten': categoryName = 'Fitness Matten'; break
            case 'weerstandsbanden': categoryName = 'Weerstandbanden'; break
        }
        return categoryName;
    }


    addProduct(Product) {
        console.log(Product)
        this.section.appendChild(Product.getProductNode());
    }

    getSectionCategory() {
        return this.section;
    }
}

addEventListener('load', init);

function init() {
    createMain()
    let footer = document.querySelector(".footer");
    parentSection = footer.parentNode
    parentSection.insertBefore(main,footer);
}



function createMain() {
    //creat a main element and insert it before the footer
    main = document.createElement('main');

    article = document.createElement('article');
    article.classList.add('producten_grid');

    article.innerHTML += '<h2 class="hiddenTitle">All producten overzicht</h2>'

    //create hidden input checkboxes
    for (let i = 0; i < filterData.length; i++) {
        article.innerHTML += `<input type="checkbox" id="${filterData[i]}" value="${filterData[i].toUpperCase()}">`

    }

    createProductFilter()
    createProductSection()
    main.appendChild(article)

}

function createProductFilter() {
    let sectionProductenFilter = document.createElement('section')
    sectionProductenFilter.classList.add('producten_filter')

    sectionProductenFilter.innerHTML += `<button className="producten_filter"><a href="producten.html">Originele Producten Pagina</a></button>`
    sectionProductenFilter.innerHTML += `<h3>Toepast Filter</h3>`

    let sectionFilter = document.createElement('section')
    sectionFilter.innerHTML += `<h4 class="hiddenTitle">Merk</h4>`

    let fieldsetFilter = document.createElement('fieldset');
    fieldsetFilter.setAttribute('id','filter')
    fieldsetFilter.innerHTML += `<legend>Merk</legend>`

    //create labelas
    for (let i = 0; i < filterData.length; i++) {
        fieldsetFilter.innerHTML += `<label for="${filterData[i]}">${filterData[i].toUpperCase()}</label>`
    }

    sectionFilter.appendChild(fieldsetFilter)
    sectionProductenFilter.appendChild(sectionFilter);
    article.appendChild(sectionProductenFilter)

}

function createProductSection() {
    let sectionProductOverZicht = document.createElement('section');
    sectionProductOverZicht.classList.add('producten_overzicht');
    sectionProductOverZicht.setAttribute('id','fotos')
    sectionProductOverZicht.innerHTML += `<h3 class="hiddenTitle">Product Categorien</h3>`


    let categories = [];
    let i = 0;
    for (const category of categoryData) {
        categories[i] = new Category(category);
        i++;
    }

    for (const item of productData) {
        console.log(item)

        let product = new Product(
            item[1],
            item[2],
            item[3],
            item[4],
            item[5],
            item[6]
        )

        switch (item[0]) {
            case categoryData[0]: categories[0].addProduct(product); break;
            case categoryData[1]: categories[1].addProduct(product); break;
            case categoryData[2]: categories[2].addProduct(product); break;
        }

    }

    for (const category of categories) {
        sectionProductOverZicht.appendChild(category.getSectionCategory())
    }
    article.appendChild(sectionProductOverZicht)

}


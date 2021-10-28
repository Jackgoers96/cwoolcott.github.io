loadImages();

function createEl(htmlString = "", className) {
    const el = document.createElement(htmlString);
    if (className) {
        el.setAttribute("class", className);
    }
    return el;
}

function initLazyImages() {
    //Gathers into one Variable
    const lazyImages = document.querySelectorAll(".lazy-image");

    function onIntersection(imageEntities) {
        imageEntities.forEach(image => {
            // When intersects the viewpoint, executes code 
            if (image.isIntersecting) {
                // In view doesn't need to be observed
                observer.unobserve(image.target);
                // set the image source that has entered the viewport
                image.target.src = image.target.dataset.src;
            }
        });
    }

    //Create New Instance of Intersection Observer
    const observer = new IntersectionObserver(onIntersection);

    // Observes on Load
    lazyImages.forEach(image => observer.observe(image));
}

function loadImages() {
    fetch("/api/images")
        .then(res => res.json())
        .then(data => createCards(data))
        .then(() => initLazyImages());
}

function createCards(data) {
    const container = document.querySelector(".container");
    container.innerHTML = "";
    const row = createEl("div", "row");


    data.forEach(function (image, index) {
        const col = createEl("div", "col-md-4 mt-4");
        col.appendChild(createCard(image));
        row.appendChild(col);
        container.appendChild(row);
    });
}

function createCard(image) {
    const card = createEl("div", "card");
    const imageContainer = createEl("div", "card__image-container");
    const img = createEl("img", "card-img-top card__image--cover lazy-image");
    img.setAttribute(
        "src",
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mOMrgcAATsA3BT31OAAAAAASUVORK5CYII=");
    img.setAttribute("data-src", image.image);
    img.setAttribute("alt", image.description);

    const cardBody = createEl("div", "card-body");
    const ratingFormContainer = createEl("div", "rating d-flex justify-content-start");
    ratingFormContainer.setAttribute("data-id", image._id);
    ratingFormContainer.setAttribute("data-rating", image.rating);

    const ratingForm = createRatingForm(image);

    const cardText = createEl("p", "card-text font-weight-bold mt-2");

    cardText.innerText = `${image.description} (${image.rating})`;

    imageContainer.append(img);
    ratingFormContainer.append(ratingForm);
    cardBody.appendChild(ratingFormContainer);
    cardBody.appendChild(cardText);
    card.appendChild(imageContainer);
    card.appendChild(cardBody);

    return card;
}

function createRatingForm(image) {
    const labelText = {
        1: "One Star",
        2: "Two Stars",
        3: "Three Stars",
        4: "Four Stars",
        5: "Five Stars"
    };

    const form = createEl("form");
    form.setAttribute("action", "post");

    for (let i = 1; i <= 5; i++) {
        const input = createEl("input", "visuallyhidden");
        input.setAttribute("type", "radio");
        input.setAttribute("name", "rating");
        input.setAttribute("id", `${image._id}-star-${i}`);
        input.setAttribute("value", i);

        const label = createEl("label");
        label.setAttribute("for", `${image._id}-star-${i}`);
        const labelSpan = createEl("span", "visuallyhidden");
        labelSpan.innerText = labelText[i];
        const star = createEl("i", `fa-star ${image.rating >= i ? "fas" : "far"}`);

        label.appendChild(labelSpan);
        label.appendChild(star);
        label.onclick = updateRating;
        form.appendChild(input);
        form.appendChild(label);
    }

    return form;
}

function updateRating(event) {
    const [id, , rating] = event.currentTarget.getAttribute("for").split("-");
    fetch(`/api/images/${id}`, {
        method: "PUT",
        body: JSON.stringify({ rating }),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(function () {
        loadImages();
    });
}
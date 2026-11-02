function searchNews() {
    const input = document.getElementById("searchInput");
    const topic = input.value.trim().toLowerCase();

    if (topic === "") {
        alert("Please enter a topic.");
        return;
    }

    const cards = document.querySelectorAll(".news-card");

    cards.forEach(card => {
        const text = card.textContent.toLowerCase();

        if (text.includes(topic)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });

    document.getElementById("categories").scrollIntoView({
        behavior: "smooth"
    });
}


function searchTopic(topic) {
    document.getElementById("searchInput").value = topic;
    searchNews();
}


// Scroll animation
const cards = document.querySelectorAll(".news-card");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

cards.forEach(card => {
    observer.observe(card);
});


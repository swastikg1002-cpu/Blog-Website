//Blog article data
const articles = [
    {
        category: "Technology",
        title: "The future of technology",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600",
        content: [
             "Technology is transforming the way we live, work and communicate. Every year, new innovations make our lives easier and more connected.",
            "From smartphones to cloud computing, technology has become an essential part of modern society.",
            "In the future, technologies such as robotics, artificial intelligence and automation will continue to create new opportunities."
        ]  
    },
    {
        category: "Programming",
        title: "Why learn Programminmg",
        image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600",
        content: [
           "Programming is the process of creating instructions that computers can understand and execute.",
            "Learning programming improves problem-solving skills and helps you develop applications, websites and software.",
            "Languages like Java, Python and JavaScript are excellent choices for beginners." 
        ]
    },
     {
        category: "AI/ML",
        title: "Introduction to Artificial Intelligence",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600",
        content: [
            "Artificial Intelligence is a technology that allows computers to perform tasks that normally require human intelligence.",
            "Machine learning is a branch of AI that enables computers to learn patterns from data.",
            "AI is used in healthcare, education, transportation and many other industries."
        ]
    },
    {
        category: "Lifestyle",
        title: "Building Better Daily Habits",
        image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600",
        content: [
            "Good daily habits can help us become more organized and productive.",
            "Reading, planning your day and maintaining a consistent routine are simple ways to improve your lifestyle.",
            "Small improvements made consistently can create positive long-term results."
        ]
    }
];
//Filter blogs by category
function filterBlogs(category){
    const cards = document.querySelectionAll(".blog-card");

    cards.forEach(card => {
        if (
            category === "All" ||
            card.dataset.category === category
        ) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}
//Open Article
function openArticle(index) {
    const article = articles[index];

    document.getElementById("blogs").style.display = "none";
    document.getElementById("categories").style.display = "none";
    document.getElementById("home").style.display = "none";

    const articlePage = document.getElementById("articlePage");

    articlePage.style.display = "block";

    document.getElementById("articleContent").innerHTML = `
        <span>${article.category}</span>

        <h1>${article.title}</h1>

        <img src="${article.image}" alt="${article.title}">

        ${article.content.map(
            paragraph => `<p>${paragraph}</p>`
        ).join("")}
    `;

    window.scrollTo(0, 0);
}

// Close article
function closeArticle() {

    document.getElementById("articlePage").style.display = "none";

    document.getElementById("blogs").style.display = "block";
    document.getElementById("categories").style.display = "block";
    document.getElementById("home").style.display = "block";

    window.scrollTo(0, 0);
}

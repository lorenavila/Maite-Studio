document.addEventListener("DOMContentLoaded", function () {
    // Sample book review data (you can load this from an API or database)
    const bookReviews = [
        {
            title: "The Right To Sex By Amia Srinivasan",
            content: `
                <div class="review">
                    <h1><center>"I wanted to tell him that there is no civilization under patriarchy."</center></h1><br>
                    <p>There is a reason why I consider this book one of my favorite reads, I mean I dont know how many times I have caught myself  mentioning some of the research and stories, opinions and ideas that lie within this book to so many of my girlfriends.<br>The Right To Sex by Amia Srinivasan is the book to read if you’d like to startup an interesting conversation. A conversation that raises a plethora of questions, offering multiple possibilities for contemplation into the various layers of feminism, as well as perspectives that reside <i>outside of it</i>. 
                    Within her six essays, Srinivasan encourages readers to consider a feminism that promotes different levels of productivity of the politics and economics of consent, rape, pornography, misogyny, desire, education, sex work, incarceration, and capitalism. This means acknowledging the distinction between white and/or wealthy feminism, and the feminism that actively fights for the rights and equality of women from diverse backgrounds and circumstances, along with many other feminist and patriarchal acknowledgments.<br>
                    <br>There is one story mentioned in this book that stook out to me from the rest… and it’s the story of the 2014 UMass incident that involved the very serious sexual assault accusation on the then 23 year old Kwado Bansu, who was on track to graduate as an engineer student from UMass, and who was the son of Ghanian immigrants. It’s an interesting story, because it’s not so much about sexual assault in itself, but more so of this very weird hardwired idea that most of us women have embedded in us by our patriarchal society. Now nonetheless, what resulted of the whole incident was entirely unfair to Kwado, it is also not hard to miss the entire point of the situation. The point in question? Is the same exact point I have had so much difficulty trying to explain into words for so long: the feeling of the obligation to please. If you’re a woman, you know exactly what this means, and it is more than likely that you have experienced something of the sort. In other words, you too might have a story.. or stories to tell that coincides with this phenomenon. But what I love about Amia and this book, is that it doesn’t directly vilify men, because the fact of the matter of this phenomenon is that it stems from a multitude of factors. From gender expectations, peer-pressure and societal norms, to the lack of proper sex education and communication. An older, more wiser and experienced woman won’t find herself in a similar situation, however she most likely had to live and learn her way through this lesson. And it’s sort of a fucked up situation if you really think about it, because in theory, we should all come onto this earth without having to be tied down to these unfair expectations and patriarchal thinking. 
                    <br>“I am not saying that feminism has no business asking better of men - indeed, asking them to be better men. But a feminism worth having must find ways of doing so that avoid rote reenactment of the old form of crime and punishment, with its fleeting satisfactions and predictable costs. I am saying that a feminism worth having must, not for the first time, expect women to be better - not just fairer, but more imaginative - than men have been.”
                    <br><br>The point to Amia's influence isn't to offer a solution- but rather offer us the opportunity to talk about what is really happening beneath the surface. She is truly, as Emily Ratajkowski puts it, unafraid. She is unafraid to provide a stand point that might not transfer over well- unafraid to elaborate, unafraid to question and defend, and unafraid to explore the dark deep ends of each phenomenon. Like a true philosopher - she knows how to challenge our implicit biases, and our beliefs on feminism.
                </div>
            `,
        },
        {
            title: "Book Review 2",
            content: "Another book review content...",
        },
        // Add more book reviews here
    ];

    // Function to load a book review into the content area
    function loadBookReview(reviewIndex) {
        const contentElement = document.getElementById('content');
        const review = bookReviews[reviewIndex];

        contentElement.innerHTML = `
            <div class="review">
                <h1><center>${review.title}</center></h1><br>
                <p>${review.content}</p>
            </div>
        `;
    }

    const reviewLink1 = document.getElementById('review-link-1');

    reviewLink1.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent the default link behavior
        loadBookReview(0); // Load the first review
    });
    // Initial load (you can load a specific review based on user interaction)
    loadBookReview(0);
});

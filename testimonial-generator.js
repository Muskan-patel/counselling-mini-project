// testimonial-generator.js

// Sample testimonial data
const testimonialData = [
    {
        name: "Alisa",
        image: "https://cdn6.dissolve.com/p/D2012_156_048/D2012_156_048_1200.jpg",
        quote: "The counseling sessions helped me choose the right career path. I feel more confident about my future now!"
    },
    {
        name: "John",
        image: "https://tse2.mm.bing.net/th?id=OIP.m3zIt1dQU4l2Mq57NcIPXQHaE8&pid=Api&P=0&h=180",
        quote: "The guidance I received was invaluable. Thank you for making such a positive impact on my journey!"
    },
    {
        name: "Adam",
        image: "https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/video/qmraJpx/videoblocks-portrait-of-smiling-male-college-student-in-busy-communal-campus-building_s-zrzm3vi_thumbnail-1080_01.png",
        quote: "Exceptional support and advice! I highly recommend their services to anyone seeking clarity and direction."
    },
    // Add more testimonials as needed
    {
        name: "Maya",
        image: "https://img.freepik.com/free-photo/friendly-confident-woman-writing-her-organizer-isolated-white-wall_231208-1176.jpg" ,
        quote: "The career workshops were eye-opening. I discovered strengths I never knew I had!"
    },
    {
        name: "Jordan",
        image: "https://st.depositphotos.com/10048732/55834/i/450/depositphotos_558347054-stock-photo-confident-student-young-man-holding.jpg",
        quote: "Their personalized approach to guidance made all the difference in my academic journey."
    }
];

// Function to generate a single testimonial HTML
function createTestimonialElement(testimonial) {
    const testimonialDiv = document.createElement('div');
    testimonialDiv.className = 'testimonial';
    
    const img = document.createElement('img');
    img.src = testimonial.image;
    img.height = 180;
    
    const quote = document.createElement('p');
    quote.textContent = `"${testimonial.quote}"`;
    
    const author = document.createElement('h4');
    author.textContent = `- ${testimonial.name}`;
    
    testimonialDiv.appendChild(img);
    testimonialDiv.appendChild(quote);
    testimonialDiv.appendChild(author);
    
    return testimonialDiv;
}

// Function to display testimonials (initial or random)
function displayTestimonials(count = 3) {
    const container = document.querySelector('.testimonial-container');
    // Clear existing testimonials
    container.innerHTML = '';
    
    // Select random testimonials if we have more than the count
    let selectedTestimonials = [...testimonialData];
    if (testimonialData.length > count) {
        selectedTestimonials = [];
        const usedIndices = new Set();
        
        while (selectedTestimonials.length < count) {
            const randomIndex = Math.floor(Math.random() * testimonialData.length);
            if (!usedIndices.has(randomIndex)) {
                usedIndices.add(randomIndex);
                selectedTestimonials.push(testimonialData[randomIndex]);
            }
        }
    }
    
    // Add testimonials to the container
    selectedTestimonials.forEach(testimonial => {
        container.appendChild(createTestimonialElement(testimonial));
    });
}

// Add a button to refresh testimonials
function addRefreshButton() {
    const testimonialsSection = document.querySelector('.testimonials');
    const refreshButton = document.createElement('button');
    refreshButton.textContent = 'Show More Testimonials';
    refreshButton.className = 'refresh-testimonials';
    refreshButton.style.margin = '20px auto';
    refreshButton.style.padding = '10px 20px';
    refreshButton.style.display = 'block';
    refreshButton.style.backgroundColor = '#a202ff';
    refreshButton.style.color = 'white';
    refreshButton.style.border = 'none';
    refreshButton.style.borderRadius = '5px';
    refreshButton.style.cursor = 'pointer';
    
    refreshButton.addEventListener('click', () => {
        displayTestimonials(3); // Show 3 random testimonials
    });
    
    testimonialsSection.appendChild(refreshButton);
}

// Initialize testimonials when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Display initial testimonials (uses the ones from HTML)
    // We don't need to call displayTestimonials() initially since testimonials are already in HTML
    
    // Add refresh button
    addRefreshButton();
});
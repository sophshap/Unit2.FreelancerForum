// BEGIN STATE VARIABLE DECLARATION

// define state variables (the ones we'll need later)
const names = ["Alice", "Bob", "Carol", "Sophie", "Caroline", "Sam", "Megan", "Keiran"];
const occupations = ["Writer", "Teacher", "Programmer", "Lawyer", "Doctor"]
const startingPrices = [20, 30, 40, 50, 60, 70, 80]


// sample data for starter freelancers
const freelancers = [
    {
        name: "Alice",
        occupation: "Writer",
        price: 30
    },
    {
        name: "Bob",
        occupation: "Teacher",
        price: 50
    },
]

// Add new freelancer every 5 seconds

setInterval(addFreelancer, 5000)

// call render function once to render initial state
render()

function render() {
    // Render the freelancers
    const freelancersContainer = document.querySelector("#container");
    const averagePriceElement = document.querySelector("#avg");
    const freelancerElements = freelancers.map((freelancer) => {
        const element = document.createElement("li");
        element.textContent = (`${freelancer.name}, ${freelancer.occupation}, ${freelancer.price}`);

        return element;
    });
    freelancersContainer.replaceChildren(...freelancerElements);


    const totalPrices = freelancers.reduce((sum, freelancer) => sum + freelancer.price, 0);
    const averagePrice = freelancers.length > 0 ? (totalPrices / freelancers.length).toFixed(2) : 0;
    averagePriceElement.textContent = averagePrice

}


/**
 * Add a random freelancer to the freelancers array
 */
function addFreelancer() {
    const name = names[Math.floor(Math.random() * names.length)];
    const occupation = occupations[Math.floor(Math.random() * occupations.length)];
    const price = startingPrices[Math.floor(Math.random() * startingPrices.length)];

    freelancers.push({ name: name, occupation: occupation, price: price });

    render();

}

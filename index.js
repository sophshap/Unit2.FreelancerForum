// BEGIN STATE VARIABLE DECLARATION

// define state variables (the ones we'll need later)
const names = ["Alice", "Bob", "Carol", "Sophie", "Caroline", "Sam", "Megan", "Keiran"];
const occupations = ["Writer", "Teacher", "Programmer", "Lawyer", "Doctor"]
const startingPrice = [20, 30, 40, 50, 60, 70, 80]
const average = 1

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
    // {
    //     name: "Carol",
    //     occupation: "Programmer",
    //     price: 70
    // }
]

// END STATE VARIABLES

setInterval(addFreelancer, 1000)

// call render function once to render initial state
render()

function render() {
    // Render the freelancers
    const freelancersContainer = document.querySelector("#container");
    const freelancerElements = freelancers.map((freelancer) => {
        const element = document.createElement("li");
        element.textContent = (`${freelancer.name}, ${freelancer.occupation}, ${freelancer.price}`);

        return element;
    });
    freelancersContainer.replaceChildren(...freelancerElements);


}


/**
 * Add a random freelancer to the freelancers array
 */
function addFreelancer() {
    const name = names[Math.floor(Math.random() * names.length)];
    const occupation = occupations[Math.floor(Math.random() * occupations.length)];
    const price = startingPrice[Math.floor(Math.random() * startingPrice.length)];

    // TODO: Randomize the occupations

    freelancers.push({ name: name, occupation: occupation, price: price });

    render();

}

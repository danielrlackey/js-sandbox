const name = "Daniel";
const age = 30;
const job = "web developer";
const city = "St.Petersburg";
let html;

const hello =() => {
    return "wassup";
}

html = `
    <ul>
        <li> name: ${name} </li>
        <li> age: ${age} </li>
        <li> job: ${job} </li>
        <li> city: ${city}</li>
        <li>${hello()}</li>
        <li>${age > 29 ? "youre old" : "youre young"}</li>
    </ul>
`

document.body.innerHTML = html;
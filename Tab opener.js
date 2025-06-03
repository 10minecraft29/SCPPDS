let linkText = "Click Me! ";
let repeatedLinkText = linkText.repeat(1000); // Repeats "Click Me! " 3 times

let link = document.createElement('a');
link.href = "https://gmail.com";
link.textContent = repeatedLinkText;
document.body.appendChild(link);

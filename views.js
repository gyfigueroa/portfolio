Parse.initialize("Ay63SHvrCHIi2axeIGkInsnWpbAc8qqp7aEImEx9", "8wAeoeb405Dfax8e0lBKZWJWym6fnq768AhIxO9d"); //PASTE HERE YOUR Back4App APPLICATION ID AND YOUR JavaScript KEY
Parse.serverURL = "https://parseapi.back4app.com/";

let path = window.location.pathname;
let page = path.split("/").pop();


//console.log( page );
//console.log(page.replace(/\.[^/.]+$/, "").replace(/-/g, ""));

const Viewers = Parse.Object.extend(`${page.replace(/\.[^/.]+$/, "").replace(/-/g, "")}`)

async function logViewer() {
    const viewer = new Viewers();
    viewer.set("type", "viewer");

    try {
        const savedViewer = await viewer.save();
        console.log("Thank you for visiting!");
    } catch (error) {
        console.log("Error occured while viewing page");
    }
}

logViewer();


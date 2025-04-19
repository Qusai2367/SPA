import Dashboard from "./views/Dashboard.js";
import Posts from "./views/Posts.js";
import Settings from "./views/Settings.js";
import NotFound from "./views/NotFound.js";
function navigateTo (url) {

    //pushState 

    //- state (الحالة): كائن يحتوي على معلومات عن الحالة (في المثال null )
    //- title (العنوان): عنوان الصفحة (في المثال null )
    //- url (الرابط): المسار الجديد الذي سيظهر في شريط العنوان
    history.pushState(null, null, url);
    router();
};


async function router () {
    const routes = [
        { path : "/404", view : NotFound},
        { path : "/", view : Dashboard },
        { path : "/posts", view : Posts },
        { path : "/settings", view : Settings },
        
    ];

    //Test each route for potential match 

    const potentialMatches = routes.map(route => {
        return {
            route : route,
            isMatch : location.pathname == route.path,
        };
    });

    let match = potentialMatches.find(potentialMatches => potentialMatches.isMatch)

    if(!match) {
        match = {
            route : routes[0],
            isMatch : true,
        }
    }


    const view = new match.route.view();
    document.querySelector("#app").innerHTML = await view.getHtml();
 
};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", e => {
        if (e.target.matches("[data-link]")) {
            e.preventDefault();
            navigateTo(e.target.href);
        }
    })
    router()
})

// const navigateTo = url => {
//     history.pushState(null, null, url);
//     router();
// };

// const router = async () => {
//     const routes = {
//         "/": { title: "Dashboard" },
//         "/post": { title: "Posts" },
//         "/settings": { title: "Settings" }
//     };

//     const potentialMatch = routes[location.pathname] || routes["/"];
//     document.title = potentialMatch.title;
// };

// window.addEventListener("popstate", router);

// document.addEventListener("DOMContentLoaded", () => {
//     document.body.addEventListener("click", e => {
//         if (e.target.matches("[data-link]")) {
//             e.preventDefault();
//             navigateTo(e.target.href);
//         }
//     });

//     router();
// });
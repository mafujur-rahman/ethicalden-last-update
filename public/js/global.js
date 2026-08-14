/* ============================================ */
/* GLOBAL MODULE - WEBPACK BUNDLED             */
/* ============================================ */

!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("global",[],t):"object"==typeof exports?exports.global=t():e.global=t()}(this,()=>(()=>{

/* ============================================ */
/* DOM CONTENT LOADED EVENT LISTENER            */
/* ============================================ */

document.addEventListener("DOMContentLoaded", () => {
    if(void 0 === window.gsap) {
        document.documentElement.classList.add("gsap-not-found");
    }
});

/* ============================================ */
/* GSAP INITIALIZATION - NO FLICKER ELEMENTS    */
/* ============================================ */

gsap.set("[no-flicker]", { visibility: "visible" });

/* ============================================ */
/* P-REVEAL ATTRIBUTE REMOVAL                   */
/* ============================================ */

const e = document.querySelectorAll("[p-reveal]");

e.forEach(e => {
    e.removeAttribute("p-reveal");
});

if(e.length > 0) {
    console.log(`Removed p-reveal attribute from ${e.length} elements`);
}

/* ============================================ */
/* MODULE EXPORTS                               */
/* ============================================ */

return {};

})());
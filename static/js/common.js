// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
    // Get modal elements
    const signInModal = document.getElementById("signin-modal");
    const signUpModal = document.getElementById("signup-modal");

    // Get open modal buttons
    const openSignInModalBtn = document.getElementById("open-signin-modal");
    const openSignUpModalBtn = document.getElementById("open-signup-modal");

    // Get close buttons
    const closeSignInModalBtn = document.getElementById("close-signin-modal");
    const closeSignUpModalBtn = document.getElementById("close-signup-modal");

    // Get switch links inside the modals
    const switchToSignUpLink = document.getElementById("switch-to-signup");
    const switchToSignInLink = document.getElementById("switch-to-signin");

    // Debugging Logs to Ensure Elements Are Found
    console.log("Sign In Modal:", signInModal);
    console.log("Sign Up Modal:", signUpModal);
    console.log("Open Sign In Button:", openSignInModalBtn);
    console.log("Open Sign Up Button:", openSignUpModalBtn);

    // Open the Sign In modal
    openSignInModalBtn.addEventListener("click", (e) => {
        e.preventDefault();
        console.log("Sign In link clicked");
        signInModal.classList.add("active");
        signUpModal.classList.remove("active"); // Ensure other modal is hidden
    });

    // Open the Sign Up modal
    openSignUpModalBtn.addEventListener("click", (e) => {
        e.preventDefault();
        console.log("Sign Up link clicked");
        signUpModal.classList.add("active");
        signInModal.classList.remove("active"); // Ensure other modal is hidden
    });

    // Close the Sign In modal
    closeSignInModalBtn.addEventListener("click", () => {
        console.log("Close Sign In Modal clicked");
        signInModal.classList.remove("active");
    });

    // Close the Sign Up modal
    closeSignUpModalBtn.addEventListener("click", () => {
        console.log("Close Sign Up Modal clicked");
        signUpModal.classList.remove("active");
    });

    // Switch from Sign In to Sign Up
    switchToSignUpLink.addEventListener("click", (e) => {
        e.preventDefault();
        console.log("Switch to Sign Up clicked");
        signInModal.classList.remove("active");
        signUpModal.classList.add("active");
    });

    // Switch from Sign Up to Sign In
    switchToSignInLink.addEventListener("click", (e) => {
        e.preventDefault();
        console.log("Switch to Sign In clicked");
        signUpModal.classList.remove("active");
        signInModal.classList.add("active");
    });

    // Close modal when clicking outside of modal content
    window.addEventListener("click", (e) => {
        if (e.target === signInModal) {
            console.log("Clicked outside Sign In Modal");
            signInModal.classList.remove("active");
        }
        if (e.target === signUpModal) {
            console.log("Clicked outside Sign Up Modal");
            signUpModal.classList.remove("active");
        }
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const cartToggleBtn = document.getElementById("cart-toggle-btn");
    const cartContainer = document.querySelector(".cart-container");

    cartToggleBtn.addEventListener("click", () => {
        cartContainer.classList.toggle("open");
    });
});


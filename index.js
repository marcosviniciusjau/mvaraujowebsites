const privacyBanner = document.querySelector(".privacy-banner");

privacyBanner.addEventListener("click", () => {
  privacyBanner.classList.add("esconder");
});

document.addEventListener("DOMContentLoaded", function () {
  const acceptBtn = document.getElementById("accept-privacy");

  if (localStorage.getItem("acceptedPrivacy") === "true") {
    privacyBanner.classList.add("esconder");
  }

  acceptBtn.addEventListener("click", () => {
    localStorage.setItem("acceptedPrivacy", "true");
    privacyBanner.classList.add("esconder");
  });
});

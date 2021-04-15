document.addEventListener("DOMContentLoaded", () => {
  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger"),
    0
  );

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {
    // Add a click event on each of them
    $navbarBurgers.forEach((el) => {
      el.addEventListener("click", () => {
        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle("is-active");
        $target.classList.toggle("is-active");
      });
    });
  }
});

function getOS() {
  const userAgent = window.navigator.userAgent;
  const platform = window.navigator.platform;
  const macosPlatforms = ["Macintosh", "MacIntel", "MacPPC", "Mac68K"];
  const iosPlatforms = ["iPhone", "iPad", "iPod"];
  const windowsPlatforms = ["Win32", "Win64", "Windows", "WinCE"];

  if (macosPlatforms.indexOf(platform) !== -1) {
    return "mac";
  }

  if (iosPlatforms.indexOf(platform) !== -1) {
    return "ios";
  }

  if (windowsPlatforms.indexOf(platform) !== -1) {
    return "windows";
  }

  if (/Android/.test(userAgent)) {
    return "android";
  }

  if (/Linux/.test(platform)) {
    return "linux";
  }

  return null;
}

const currentOs = getOS();
function getOsClass(className, os) {
  if (currentOs == os) {
    return "." + className + "{ display: block; } ";
  }
  return "." + className + "{ display: none; } ";
}

const style = document.createElement("style");
style.innerHTML =
  getOsClass("is-mac", "mac") +
  getOsClass("is-windows", "windows") +
  getOsClass("is-linux", "linux");
document.getElementsByTagName("head")[0].appendChild(style);

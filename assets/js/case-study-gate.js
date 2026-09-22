(function () {
  "use strict";

  function toHex(buffer) {
    return Array.from(new Uint8Array(buffer))
      .map(function (byte) { return byte.toString(16).padStart(2, "0"); })
      .join("");
  }

  async function hash(value) {
    var bytes = new TextEncoder().encode(value);
    return toHex(await window.crypto.subtle.digest("SHA-256", bytes));
  }

  function unlock(gate) {
    var panel = gate.querySelector("[data-gate-panel]");
    var content = gate.querySelector("[data-gate-content]");
    if (panel) panel.hidden = true;
    if (content) content.hidden = false;
  }

  document.querySelectorAll("[data-case-study-gate]").forEach(function (gate) {
    var storageKey = "case-study-unlocked:" + window.location.pathname;
    var form = gate.querySelector("[data-gate-form]");
    var input = gate.querySelector("[data-gate-password]");
    var error = gate.querySelector("[data-gate-error]");

    try {
      if (window.sessionStorage.getItem(storageKey) === "yes") {
        unlock(gate);
        return;
      }
    } catch (storageError) {
      // Continue with the password form when storage is unavailable.
    }

    form.addEventListener("submit", async function (event) {
      event.preventDefault();
      error.hidden = true;

      try {
        var candidate = await hash(input.value);
        if (candidate === gate.dataset.passwordDigest) {
          try {
            window.sessionStorage.setItem(storageKey, "yes");
          } catch (storageError) {
            // The page can still be viewed during this load.
          }
          input.value = "";
          unlock(gate);
        } else {
          error.hidden = false;
          input.select();
        }
      } catch (hashError) {
        error.textContent = "This browser could not verify the password. Please use a current browser.";
        error.hidden = false;
      }
    });
  });
}());

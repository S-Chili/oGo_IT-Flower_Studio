!function(){var e,o,t,n;e=document.querySelector(".js-menu-container"),o=document.querySelector(".js-open-menu"),t=document.querySelector(".js-close-menu"),n=function(){var t="true"===o.getAttribute("aria-expanded")||!1;o.setAttribute("aria-expanded",!t),e.classList.toggle("is-open"),bodyScrollLock[t?"enableBodyScroll":"disableBodyScroll"](document.body)},o.addEventListener("click",n),t.addEventListener("click",n),document.querySelectorAll("ul.menu-list li").forEach((function(e){return e.addEventListener("click",(function(){document.querySelector(".menu-container").classList.remove("is-open")}))})),window.matchMedia("(min-width: 768px)").addEventListener("change",(function(t){t.matches&&(e.classList.remove("is-open"),o.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))}));var l={openModalBtns:document.querySelectorAll("[data-modal-open]"),openModalBlog:document.querySelectorAll("[data-modal-2-open]"),closeModalBtns:document.querySelectorAll("[data-modal-close]"),closeModalBlog:document.querySelectorAll("[data-modal-2-close]"),sendModalBtn:document.querySelector('[data-action="send"'),modal:document.querySelector("[data-modal]"),modalBlog:document.querySelector("[data-modal-blog]"),modalForm:document.querySelector(".modal-wrapper"),gratitudePopup:document.querySelector(".store__window"),spinnerEl:document.querySelector(".spinner")};function d(){l.modalBlog.classList.toggle("is-hidden")}function a(e){e.preventDefault(),"send"===e.target.dataset.action?(l.spinnerEl.classList.remove("visually-hidden"),l.modalForm.classList.add("visually-hidden"),setTimeout((function(){l.gratitudePopup.classList.remove("visually-hidden"),l.spinnerEl.classList.add("visually-hidden")}),3e3)):(l.modal.classList.toggle("is-hidden"),setTimeout((function(){l.modalForm.classList.remove("visually-hidden"),l.gratitudePopup.classList.add("visually-hidden")}),500))}l.openModalBtns.forEach((function(e){e.addEventListener("click",a)})),l.openModalBlog.forEach((function(e){e.addEventListener("click",d)})),l.closeModalBtns.forEach((function(e){e.addEventListener("click",a)})),l.closeModalBlog.forEach((function(e){e.addEventListener("click",d)})),l.sendModalBtn.addEventListener("click",a)}();
//# sourceMappingURL=index.f4108978.js.map
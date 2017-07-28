window.lubandomchange = function(dom) {
    var MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver
    var target = document.querySelector(dom);
    var observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            //console.log(mutation.type);
        });
        // console.log(mutations);
    });
    var config = {
        attributes: true,
        childList: true,
        characterData: true,
        subtree: true

    }
    observer.observe(target, config);
}
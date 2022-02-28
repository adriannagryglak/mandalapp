import html2canvas from "html2canvas";

const exportAsImage = async (element, imageFileName) => {

    element.style.backgroundColor = "var(--bkg-color)";
    element.style.border = "5px solid var(--bkg-color)";

    const canvas = await html2canvas(element);

    //restoring border on div, but only for tablets and screens
    if (window.matchMedia('(min-width: 992px)').matches) {
        element.style.border = "none";
        element.style.borderTop = "1px solid var(--text-color)";
        element.style.borderBottom = "1px solid var(--text-color)";
    }

    window.addEventListener('resize', () => {
        if (window.matchMedia('(min-width: 992px)').matches) {
            element.style.border = "none";
            element.style.borderTop = "1px solid var(--text-color)";
            element.style.borderBottom = "1px solid var(--text-color)";
        } else {
            element.style.border = "none";
        }
    })

    const image = canvas.toDataURL("image/png", 1.0);

    downloadImage(image, imageFileName);

};

const downloadImage = (blob, fileName) => {

    const fakeLink = window.document.createElement("a");
    fakeLink.style = "display:none;";
    fakeLink.download = fileName;

    fakeLink.href = blob;

    document.body.appendChild(fakeLink);
    fakeLink.click();
    document.body.removeChild(fakeLink);

    fakeLink.remove();
};

export default exportAsImage;
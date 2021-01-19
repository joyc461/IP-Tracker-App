const lookUpBtn = document.querySelector(".lookup-btn");
const ipDisplay = document.querySelector(".ip-display");
const locationDisplay = document.querySelector(".location-display");
const geoDisplay = document.querySelector(".geo-display");
const details = document.querySelector(".details");

const loader=document.querySelector(".loader-container");
lookUpBtn.addEventListener("click", function () {
    loader.style.display="flex";
    details.style.display="none";
    axios.get("https://ipapi.co/json/").then((response) => {
        loader.style.display="none";
        details.style.display="block";

        ipDisplay.innerHTML = `Ip: ${response.data.ip}`;
        locationDisplay.innerHTML = `Location: ${response.data.city},${response.data.region},${response.data.country_name}`;
        geoDisplay.innerHTML = `Geo Location: ${response.data.latitude},${response.data.longitude}`;
    });
});

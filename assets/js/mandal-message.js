const messages = [

    "|| श्री गणरायाच्या सेवेत सदैव तत्पर ||",

    "|| गणपती बाप्पा मोरया ||",

    "|| मंगलमूर्ती मोरया ||",

    "|| भक्ती • सेवा • संस्कृती ||",

    "|| सर्व गणेश भक्तांचे हार्दिक स्वागत ||"

];

const message = document.getElementById("mandal-message");

let index = 0;

setInterval(() => {

    message.style.opacity = 0;

    setTimeout(() => {

        index = (index + 1) % messages.length;

        message.textContent = messages[index];

        message.style.opacity = 1;

    }, 500);

}, 5000);
import { GoogleGenAI } from "https://cdn.jsdelivr.net/npm/@google/genai@0.13.0/+esm";

import {$, formatDate} from "/utils.js"


const msgerForm = $(".msger-inputarea");
const msgerInput = $(".msger-input");
const msgerChat = $(".msger-chat");

// Icons made by Freepik from www.flaticon.com
const BOT_IMG = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png";
const PERSON_IMG = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png";
const BOT_NAME = "Ditto";
const PERSON_NAME = "Pikachu";

msgerForm.addEventListener("submit", event => {
  event.preventDefault();

  const msgText = msgerInput.value;
  if (!msgText) return;

  appendMessage(PERSON_NAME, PERSON_IMG, "right", msgText);
  msgerInput.value = "";

  botResponse(msgText);
});

function appendMessage(name, img, side, text) {
  //   Simple solution for small apps
  const msgHTML = `
    <div class="msg ${side}-msg">
      <div class="msg-img" style="background-image: url(${img})"></div>

      <div class="msg-bubble">
        <div class="msg-info">
          <div class="msg-info-name">${name}</div>
          <div class="msg-info-time">${formatDate(new Date())}</div>
        </div>

        <div class="msg-text">${text}</div>
      </div>
    </div>
  `;

  msgerChat.insertAdjacentHTML("beforeend", msgHTML);
  msgerChat.scrollTop += 500;
}
const ai = new GoogleGenAI({ apiKey: "__--***---___VUESTRA_API_KEY___--***---___" });

async function aksGoogleCloudIA(text) {
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: text,
  });
  
  return response.text;
}

async function botResponse(text) {
  const msgText = await aksGoogleCloudIA(text);
  appendMessage(BOT_NAME, BOT_IMG, "left", msgText);
}
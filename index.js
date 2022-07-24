require("dotenv").config();

const WEBHOOK_URL = process.env.WEBHOOK_URL;

const axios = require("axios");

const body = {
  alias: "Huyz",
  text: "Chào mọi người, nhớ điền daily report (https://docs.google.com/spreadsheets/d/1YcA3l1YD22-kWPa-BvsSqsE4u2hRD1Ee/edit#gid=709533652) và vào họp lúc 10 giờ 30 phút sáng (https://meet.google.com/ggy-qsbb-yrh)",
  attachments: [
    {
      title: "Rocket.Chat",
      title_link: "https://rocket.chat",
      text: "Rocket.Chat, the best open source chat",
      image_url: "/images/integration-attachment-example.png",
      color: "#764FA5",
    },
  ],
};

function sendMessage() {
  axios
    .post(WEBHOOK_URL, body)
    .then((webHookRes) => {
      console.log(`statusCode: ${webHookRes.status}`);
    })
    .catch((error) => {
      console.error(error);
    });
}

const cron = require("node-cron");

cron.schedule("0 10 * * 1-5", () => {
  sendMessage();
});

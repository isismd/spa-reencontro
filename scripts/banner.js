import boxen from "boxen";
import cfonts from "cfonts";
import chalk from "chalk";
import fs from "fs";
import inquirer from "inquirer";

cfonts.say("Reencontro", {
  font: "chrome",
  align: "center",
  background: "transparent",
  env: "node",
  transitionGradient: true,
  gradient: ["yellow", "#ff5500"],
});

const mensagem = `
${chalk.bold("🔎 Sistema de Pessoas Desaparecidas")}
Aplicação SPA para consulta e envio de informações

${chalk.cyan("🚀 Projeto Prático - Desenvolve MT")}

${chalk.yellow("Desenvolvido por Isis Daron")}
`;

console.log(
  boxen(mensagem, {
    padding: 1,
    margin: 1,
    float: "center",
    borderStyle: "round",
    borderColor: "yellow",
    align: "center",
  }),
);

async function setupEnv() {
  const { recaptcha } = await inquirer.prompt([
    {
      type: "confirm",
      name: "recaptcha",
      message: "Ativar reCAPTCHA no ambiente local?",
      default: true,
    },
  ]);

  const envContent = `VITE_API_BASE_URL=https://abitus-api.geia.vip
VITE_RECAPTCHA_SITE_KEY=6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI
VITE_RECAPTCHA_ENABLED=${recaptcha ? "true" : "false"}
`;
  fs.writeFileSync(".env.local", envContent + "\n");
  console.log("Configuração salva em .env.local");
}

setupEnv();

import chalk from "chalk";
import boxen from "boxen";
import inquirer from "inquirer";
import fs from "fs";
import cfonts from "cfonts";

cfonts.say("Reencontro", {
    font: "chrome",
    align: "center",
    background: "transparent",
    env: "node",
    transitionGradient: true,
    gradient: ["yellow", "magenta"],
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
        borderColor: "red",
        align: "center",
    })
);

async function setupEnv() {
    const { choice } = await inquirer.prompt([
        {
            type: "list",
            name: "choice",
            message: "Deseja usar a API oficial ou os dados fictícios (mock)?",
            choices: ["API Oficial", "Mock (dados fictícios)"],
        },
    ]);

    const envContent =
        choice === "API Oficial"
            ? `VITE_API_BASE_URL=https://abitus-api.geia.vip\nVITE_USE_MOCK=false\n`
            : `VITE_API_BASE_URL=https://abitus-api.geia.vip\nVITE_USE_MOCK=true\n`;

    fs.writeFileSync(".env.local", envContent + "\n");
    console.log(`Configuração salva em .env.local: ${choice}`);
}

setupEnv();

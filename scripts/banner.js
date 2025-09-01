import chalk from "chalk";
import figlet from "figlet";
import boxen from "boxen";

console.log(
    chalk.red(
        figlet.textSync("Reencontro", { font: "Chunky" })
    )
);

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
        borderStyle: "round",
        borderColor: "red",
        align: "left",
    })
);

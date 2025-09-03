"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs")); // Para criar pastas e arquivos
const path = __importStar(require("path")); // Para criar caminhos seguros
const child_process_1 = require("child_process"); // Para rodar comandos do terminal
const readlineSync = __importStar(require("readline-sync")); // Para perguntar algo ao usuário
function createTsProject() {
    const projectName = readlineSync.question("Digite o nome do projeto: ");
    if (!projectName) {
        console.log("Nome do projeto não pode ser vazio!");
        return;
    } // Código do script vai aqui
    // caminho do projeto (uma pasta a cima da atual)
    const projectPath = path.join("..", projectName);
    // Cria a pasta do projeto
    fs.mkdirSync(projectPath, { recursive: true });
    //Entra na pasta do projeto
    process.chdir(projectPath);
    console.log("📦 Inicializando o projeto...");
    // Inicializa npm
    (0, child_process_1.execSync)("npm init -y", { stdio: "inherit" });
    // Instala dependências de runtime
    (0, child_process_1.execSync)("npm install express cors dotenv bcrypt jsonwebtoken typeorm reflect-metadata", { stdio: "inherit" });
    // Instala dependências de desenvolvimento
    (0, child_process_1.execSync)("npm install -D typescript @types/node @types/express @types/cors @types/bcrypt @types/jsonwebtoken ts-node-dev", { stdio: "inherit" });
    //Criar ts.config
    const tsConfig = {
        compilerOptions: {
            target: "ES6",
            module: "commonjs",
            moduleResolution: "Node",
            outDir: "dist",
            rootDir: "src",
            strict: true,
            esModuleInterop: true,
            experimentalDecorators: true,
            emitDecoratorMetadata: true,
            strictPropertyInitialization: false
        },
        include: ["src"]
    };
    fs.writeFileSync("tsconfig.json", JSON.stringify(tsConfig, null, 2));
    //Configuração do package.json para scripts úteis
    const packageJsonRaw = fs.readFileSync("package.json", "utf-8");
    const packageJson = JSON.parse(packageJsonRaw);
    packageJson.scripts = {
        test: 'echo "Error: no test specified" && exit 1',
        build: "tsc",
        start: "tsc && node dist/server.js",
        dev: "ts-node-dev --respawn --transpile-only src/server.ts"
    };
    fs.writeFileSync("package.json", JSON.stringify(packageJson, null, 2));
    //Criando as pastas dentro do src
    const srcFolders = ["entities", "controllers", "middlewares", "routes", "services", "utils"];
    fs.mkdirSync("src");
    srcFolders.forEach(folder => fs.mkdirSync(`src/${folder}`));
    //Criando arquivos iniciais 
    fs.writeFileSync("src/app.ts", "");
    fs.writeFileSync("src/data-source.ts", "");
    fs.writeFileSync("src/server.ts", "");
    fs.writeFileSync("src/index.ts", `console.log("Projeto ${projectName} rodando!");`);
    fs.writeFileSync(".env", "# Variáveis de ambiente\nPORT=3000\n");
    //Finalização
    console.log(`\n✅ Projeto "${projectName}" criado com sucesso em "${projectPath}"`);
    console.log("👉 Para começar:");
    console.log(`cd ../${projectName}`);
    console.log("npm run dev");
}
createTsProject();

# Contexto do Projeto: Portfólio arthurmorato.com

## 1. Visão Geral
Desenvolvimento do site **arthurmorato.com**, um portfólio de alta performance com duas experiências de navegação (V1 e V2) que demonstram versatilidade estética e técnica.

## 2. Modelos de Design e Experiência do Usuário

### **V1: Minimalismo Radical (Inspirado em LoveFrom / Field of Practice)**
* **Estética:** Foco absoluto em tipografia e espaços em branco.
* **Interação Chave:** **Efeito Typewriter (JS)**. O texto principal (Hero e seções) deve ser "digitado" na tela com um cursor piscante.
* **Layout:** Limpo, centralizado, sem bordas visíveis, focado na leitura e sofisticação.

### **V2: Estrutura IDE/Terminal (Inspirado em Feijóo Montenegro)**
* **Estética:** Simulação de um ambiente de desenvolvimento (IDE) de alto nível, onde o design é puramente tipográfico e funcional.
* **Conceito de "Literalismo de Pontuação":** - Substituir símbolos por palavras em estilo *superscript* ou *subscript* com cores distintas (ex: em vez de "@", usar "at"; em vez de ".", usar "dot"; em vez de "/", usar "slash").
* **Esquema de Cores (Syntax Highlighting):**
    - **Fundo:** Dark (#121214 ou similar).
    - **Entidades/Nomes:** Rosa/Magenta (#FF3366).
    - **Metadados/Anos:** Azul Ciano/Soft (#4493f8).
    - **Ações/Links:** Amarelo/Bege (#e3b341).
    - **Labels Técnicos (script, coma, plus):** Cinza suave ou Roxo (#bd93f9) em tamanho reduzido.
* **Layout:** - Lista numerada vertical à esquerda (simulando números de linha de código).
    - Grid rigoroso com bordas de 1px para separar cabeçalho e corpo.
    - Uso de fontes Monospaced (JetBrains Mono ou Roboto Mono).
* **Interação:** Estática. O foco é a legibilidade técnica e a organização de dados como se fosse um arquivo de configuração (.json ou .yml) visualmente rico.

## 3. Regras Técnicas Específicas
1.  **Tipografia (Essencial):**
    * V1: Sans-serif geométrica de alta qualidade (ex: Inter, Helvetica Now).
    * V2: Monospace estrita para todo o conteúdo.
2.  **JavaScript:**
    * Deve ser usado na V1 para o motor de digitação.
    * Na V2, o JS deve ser mínimo ou inexistente, priorizando a estrutura pura de HTML/CSS para manter a estética de "documento técnico".
3.  **Arquitetura de Pastas:**
    ```text
    /
    ├── index.html (Seletor de Experiência: V1 ou V2)
    ├── v1-minimal/ (Onde o JS de Typewriter atua)
    ├── v2-ide/ (Foco total em CSS Grid/Borders e Mono fonts)
    ├── assets/
    │   ├── css/ (Estilos compartilhados e específicos)
    │   ├── js/ (Motor Typewriter para V1)
    │   └── img/
    └── contexto-projeto.md
    ```

## 4. Regras de Conduta para Agentes (Cursor IDE)
* **Semântica:** Use HTML5 semântico em ambas as versões para garantir SEO e acessibilidade.
* **V2 Accuracy:** No modelo IDE, use elementos que remetam a código (ex: `<code>`, `<pre>`, ou classes como `.variable`, `.string`, `.comment`).
* **Responsividade:** Ambas as versões devem ser impecáveis em dispositivos móveis, adaptando o grid da IDE e a tipografia da V1.

## 5. Cronograma de Execução
* **Fase 1:** Criação da estrutura de pastas e arquivo de variáveis CSS globais.
* **Fase 2:** Desenvolvimento da **V1** (Foco: Tipografia + Script Typewriter).
* **Fase 3:** Desenvolvimento da **V2** (Foco: Layout de IDE/Terminal e Grid).
* **Fase 4:** Ajustes de SEO, Performance e Finalização.

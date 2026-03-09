# Contexto do Projeto: Portfólio arthurmorato.com

## 1. Visão Geral
Desenvolvimento do site **arthurmorato.com**, um portfólio de alta performance com duas experiências de navegação (V1 e V2) que demonstram versatilidade estética e técnica.

## 2. Modelos de Design e Experiência do Usuário

### **V1: Minimalismo Radical (Inspirado em LoveFrom / Field of Practice)**
* **Estética:** Foco absoluto em tipografia e espaços em branco.
* **Interação Chave:** **Efeito Typewriter (JS)**. O texto principal (Hero e seções) deve ser "digitado" na tela com um cursor piscante.
* **Layout:** Limpo, centralizado, sem bordas visíveis, focado na leitura e sofisticação.

### **V2: Estrutura IDE/Terminal (Inspirado em Feijóo Montenegro)**
* **Estética:** Simulação de um ambiente de desenvolvimento (IDE) ou Terminal.
* **Interação:** **Estática e Orientada a Dados**. Sem o efeito de digitação do JS. O texto aparece de forma direta, simulando um arquivo de configuração ou saída de log.
* **Layout:** Estruturado com bordas finas (1px), fontes Monoespaçadas (ex: JetBrains Mono, Fira Code), uso de cores de "Syntax Highlighting" para destacar nomes de projetos e competências.
* **Navegação:** Organizada por "pastas" ou "blocos de código".

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

import React from "react";

const TextAbout = () => {
  return (
    <div className="flex flex-col gap-5">
      <div>
        Olá! Sou Larissa, desenvolvedora de software apaixonada por tecnologia e
        design. Busco sempre criar projetos com propósito e com soluções que
        gerem impacto positivo.
      </div>

      <p className="text-pink-400 text-lg font-semibold">Habilidades</p>

      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-3">
          <p className="text-purple-300 font-semibold">💻 Tecnologias</p>
          <ul className="flex flex-wrap gap-3">
            <li className="text-pink-200">• Java</li>
            <li className="text-pink-200">• Java Script</li>
            <li className="text-pink-200">• TypeScript</li>
            <li className="text-pink-200">• Python</li>
            <li className="text-pink-200">• React</li>
            <li className="text-pink-200">• React Native</li>
            <li className="text-pink-200">• Next.js</li>
            <li className="text-pink-200">• Vite</li>
            <li className="text-pink-200">• HTML</li>
            <li className="text-pink-200">• CSS</li>
            <li className="text-pink-200">• Tailwind</li>
          </ul>
        </div>
        <div className="flex flex-col gap-3">
          <p className="text-purple-300 font-semibold">
            🛠️ Ferramentas e Banco de Dados
          </p>
          <ul className="flex flex-wrap gap-3">
            <li className="text-pink-200">• Git</li>
            <li className="text-pink-200">• GitHub</li>
            <li className="text-pink-200">• Docker</li>
            <li className="text-pink-200">• Azure</li>
            <li className="text-pink-200">• AWS</li>
            <li className="text-pink-200">• MySQL</li>
            <li className="text-pink-200">• PostgreSQL</li>
            <li className="text-pink-200">• Firebase</li>
            <li className="text-pink-200">• Oracle</li>
          </ul>
        </div>
        <div className="flex flex-col gap-3">
          <p className="text-purple-300 font-semibold">🌟 Idiomas</p>
          <ul className="flex flex-wrap gap-5">
            <li className="text-pink-200">• Português Nativo</li>
            <li className="text-pink-200">• Inglês Avançado</li>
            <li className="text-pink-200">• Espanhol Básico</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TextAbout;

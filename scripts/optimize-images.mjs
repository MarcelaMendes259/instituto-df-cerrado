import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const raiz = process.cwd();
const origem = path.join(raiz, 'imagens');
const destino = path.join(raiz, 'public', 'imagens');

const imagens = [
  { arquivo: 'cerrado-hero.jpg', saida: 'cerrado-hero.webp', largura: 1200, qualidade: 80 },
  { arquivo: 'lobo.png', saida: 'lobo.webp', largura: 620, qualidade: 82 },
  { arquivo: 'galito.jpg', saida: 'galito.webp', largura: 620, qualidade: 82 },
  { arquivo: 'lobelia.png', saida: 'lobelia.webp', largura: 620, qualidade: 82 },
  { arquivo: 'tamandua.jpg', saida: 'tamandua.webp', largura: 620, qualidade: 82 },
  { arquivo: 'tatu.png', saida: 'tatu.webp', largura: 620, qualidade: 82 }
];

await fs.mkdir(destino, { recursive: true });

for (const imagem of imagens) {
  const entrada = path.join(origem, imagem.arquivo);
  const saida = path.join(destino, imagem.saida);

  await sharp(entrada)
    .resize({ width: imagem.largura, withoutEnlargement: true })
    .webp({ quality: imagem.qualidade })
    .toFile(saida);

  const [antes, depois] = await Promise.all([fs.stat(entrada), fs.stat(saida)]);
  const reducao = ((1 - depois.size / antes.size) * 100).toFixed(1);

  console.log(`${imagem.arquivo} -> ${imagem.saida}: ${(antes.size / 1024).toFixed(1)} KB -> ${(depois.size / 1024).toFixed(1)} KB (${reducao}% de redução)`);
}

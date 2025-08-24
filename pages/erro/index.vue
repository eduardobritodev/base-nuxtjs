<template>
  <div class="erro-container">
      <div class="erro-content">
      <h1>404</h1>
      <h2>Página não encontrada</h2>
      <p>A página que você está procurando não existe ou foi movida.</p>
      <a href="/" class="erro-voltar"><DoorOpen /> Voltar para a página inicial</a>
      </div>
  </div>
</template>

<script setup>
import { DoorOpen } from 'lucide-vue-next';

</script>

<style scoped>
.erro-container {
  min-height: 100dvh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
}

.erro-content {
  background: var(--color-white);
  padding: 48px 32px;
  border-radius: 24px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
  text-align: center;
  max-width: 400px;
  width: 100%;
}

.erro-content h1 {
  font-family: var(--font-h1);
  font-size: 5rem;
  color: var(--color-blue, #007bff);
  margin-bottom: 0.5rem;
  font-weight: 900;
}

.erro-content h2 {
  font-family: var(--font-p);
  color: var(--color-black);
  margin-bottom: 1rem;
  font-weight: 700;
}

.erro-content p {
  font-family: var(--font-p);
  color: var(--color-gray);
  margin-bottom: 2rem;
  font-size: 1.1rem;
}

.erro-voltar {
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  padding: 12px 28px;
  background: var(--color-blue, #007bff);
  color: var(--color-white, #fff);
  border-radius: 12px;
  text-decoration: none;
  font-weight: 600;
  font-family: var(--font-p);
  transition: background 0.2s;
}

.erro-voltar:hover {
  background: #0056b3;
}
</style>
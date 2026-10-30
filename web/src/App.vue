<script setup lang="ts">
import { onMounted, ref } from 'vue'

interface HealthPayload {
  ok: boolean
  service?: string
}

type Status = 'checking' | 'online' | 'offline'

const persona = ref({ name: '老友', audience: '城市独居老人' })
const status = ref<Status>('checking')

async function checkServer(): Promise<void> {
  status.value = 'checking'
  try {
    const res = await fetch('/api/health')
    const data = (await res.json()) as HealthPayload
    status.value = data.ok ? 'online' : 'offline'
  } catch {
    status.value = 'offline'
  }
}

onMounted(() => {
  void checkServer()
})
</script>

<template>
  <main class="wrap">
    <header>
      <p class="kicker">陪伴型机器人课题 · W1 工程骨架</p>
      <h1>{{ persona.name }}</h1>
      <p class="sub">面向{{ persona.audience }}的陪伴机器人</p>
    </header>

    <section class="card">
      <h2>骨架自检</h2>
      <ul class="check">
        <li>前端：Vue 3 + Vite + TypeScript（strict）</li>
        <li>服务端：Node.js + Express + TypeScript</li>
        <li>
          健康检查 /api/health：
          <span class="tag" :class="status">{{ status }}</span>
        </li>
      </ul>
      <button type="button" @click="checkServer">重新检测</button>
    </section>

    <section class="card hint">
      <h2>下一步</h2>
      <p>W2：按选题卡 5 个主题域收集 30 篇 Markdown 语料并标注来源。</p>
      <p>W3：接入 Embedding + 内存余弦检索 + 大模型生成，回答带出处。</p>
    </section>
  </main>
</template>

<style scoped>
.wrap {
  max-width: 720px;
  margin: 0 auto;
  padding: 56px 20px 80px;
  font-family: 'Microsoft YaHei', 'PingFang SC', 'Segoe UI', sans-serif;
  line-height: 1.7;
}
.kicker {
  margin: 0;
  font-size: 13px;
  letter-spacing: 0.12em;
  color: #1d4ed8;
  font-weight: 700;
}
h1 {
  margin: 8px 0 4px;
  font-size: 34px;
}
.sub {
  margin: 0 0 28px;
  color: #5b6773;
}
.card {
  background: #fff;
  border: 1px solid #e1e6eb;
  border-radius: 10px;
  padding: 18px 22px;
  margin-bottom: 16px;
}
h2 {
  margin: 0 0 10px;
  font-size: 18px;
  color: #1d4ed8;
}
.check {
  margin: 0 0 14px 1.2em;
  padding: 0;
}
.check li {
  margin: 6px 0;
}
.tag {
  display: inline-block;
  padding: 1px 10px;
  border-radius: 999px;
  font-size: 13px;
  border: 1px solid #e1e6eb;
}
.tag.online {
  color: #15803d;
  border-color: #15803d;
}
.tag.offline {
  color: #b45309;
  border-color: #b45309;
}
.tag.checking {
  color: #5b6773;
}
button {
  border: 1px solid #1d4ed8;
  background: #1d4ed8;
  color: #fff;
  border-radius: 6px;
  padding: 7px 18px;
  font-size: 14px;
  cursor: pointer;
}
.hint {
  color: #5b6773;
  font-size: 14.5px;
}
.hint p {
  margin: 6px 0;
}
</style>

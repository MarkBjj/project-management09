import { execSync } from 'node:child_process'

const port = process.argv[2]

try {
  const output = execSync(`netstat -ano | findstr :${port} | findstr LISTENING`).toString()
  const pids = new Set(output.trim().split('\n').map((line) => line.trim().split(/\s+/).pop()))
  for (const pid of pids) {
    try {
      execSync(`taskkill /F /PID ${pid}`)
      console.log(`Freed port ${port} (killed PID ${pid})`)
    } catch {}
  }
} catch {
  // nothing was listening on the port, nothing to do
}

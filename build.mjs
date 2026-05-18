// Parallel type-check + bundle. Type errors take precedence over build errors.
import { spawn } from 'child_process'

function run(cmd, args) {
	return new Promise((resolve) => {
		let out = ''
		const proc = spawn(cmd, args, { stdio: ['ignore', 'pipe', 'pipe'], shell: true })
		proc.stdout.on('data', (d) => (out += d))
		proc.stderr.on('data', (d) => (out += d))
		proc.on('close', (code) => resolve({ code, out }))
	})
}

const [tsgo, vite] = await Promise.all([
	run('tsgo', ['--noEmit', '-p', 'tsconfig.app.json']),
	run('vite', ['build'])
])

if (tsgo.code !== 0) {
	process.stderr.write(tsgo.out)
	process.exit(1)
} else if (vite.code !== 0) {
	process.stderr.write(vite.out)
	process.exit(1)
}

import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// export default defineConfig({
// 	plugins: [react()],
// 	// base: import.meta.env.DEV ? '/' : '/VRNas/',
// })

export default ({ mode }) => {
	process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }

	return defineConfig({
		plugins: [react()],
		base: process.env.VITE_URL,
	})
}

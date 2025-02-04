import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

/*
환경 변수를 import.meta.env를 사용할 수 없어
loadEnv를 이용하여 환경변수 호출

///////공식문서///////
// (https://ko.vite.dev/config/#using-environment-variables-in-config)
// 현재 작업 디렉터리의 `mode`를 기반으로 env 파일을 불러옴
// 세 번째 매개변수를 ''로 설정하면 `VITE_` 접두사에 관계없이
// 모든 환경 변수를 불러옴
*/

export default defineConfig(({ mode }) => {
	// 현재 작업 디렉터리의 `mode`를 기반으로 env 파일을 불러옴
	// 세 번째 매개변수를 ''로 설정하면 `VITE_` 접두사에 관계없이
	// 모든 환경 변수를 불러옴
	const env = loadEnv(mode, process.cwd())
	return {
		plugins: [react()],
		resolve: {
			alias: [
				{ find: "@src", replacement: "/src" },	
				{ find: "@pages", replacement: "/src/pages" },
				{ find: "@shared", replacement: "/src/shared" },
				{ find: "@widgets", replacement: "/src/widgets" }
			],
			},
		server:{
			open: true,
			proxy: {
				'/api': {
					target: env.VITE_DB_PROXY_TARGET_URL,
					changeOrigin: true,
				}
			}
		}
	}
  })
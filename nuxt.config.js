// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2025-06-26',
	devtools: { enabled: false },
	modules: [
		'@nuxt/icon',
		'@nuxtjs/tailwindcss',
		'@pinia/nuxt',
		'@vueuse/nuxt',
		// TODO: Add '@nuxtjs/firebase' if you need client-side firebase features
	],
	css: [
		'~/assets/css/variables.css',
		'~/assets/css/typography.css',
		'~/assets/css/main.css',
	],
	icon: {
		serverBundle: {
			collections: ['heroicons'],
		},
	},
	tailwindcss: {
		configPath: '~/tailwind.config.js',
	},
	ssr: false,
	runtimeConfig: {
		// Private keys are only available on the server
		firebaseServiceAccount: process.env.FIREBASE_SERVICE_ACCOUNT,
		// Public keys are available on the client
		public: {
			firebaseApiKey: process.env.FIREBASE_API_KEY || '',
			firebaseAuthDomain: process.env.FIREBASE_AUTH_DOMAIN || '',
			firebaseProjectId: process.env.FIREBASE_PROJECT_ID || '',
			firebaseStorageBucket: process.env.FIREBASE_STORAGE_BUCKET || '',
			firebaseMessagingSenderId:
				process.env.FIREBASE_MESSAGING_SENDER_ID || '',
			firebaseAppId: process.env.FIREBASE_APP_ID || '',
			// MinIO Configuration
			minioEndpoint: process.env.MINIO_ENDPOINT || 'localhost',
			minioPort: process.env.MINIO_PORT || 9001,
			minioUseSSL: process.env.MINIO_USE_SSL === 'true' || false,
			minioAccessKey: process.env.MINIO_ACCESS_KEY || 'admin',
			minioSecretKey: process.env.MINIO_SECRET_KEY || 'admin123',
		},
	},
	app: {
		head: {
			title: 'Car Rental - Închirieri Auto',
			meta: [
				{ charset: 'utf-8' },
				{
					name: 'viewport',
					content: 'width=device-width, initial-scale=1',
				},
				{
					hid: 'description',
					name: 'description',
					content:
						'Platformă modernă pentru închirierea mașinilor între persoane fizice și juridice.',
				},
			],
			link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
		},
	},
	build: {
		transpile: ['@vuepic/vue-datepicker'],
	},
	postcss: {
		plugins: {
			'postcss-import': {},
			'tailwindcss/nesting': {},
			tailwindcss: {},
			autoprefixer: {},
		},
	},
})
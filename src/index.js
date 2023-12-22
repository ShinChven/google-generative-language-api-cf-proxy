addEventListener('fetch', event => {
	event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
	const originalUrl = new URL(request.url)
	const targetURL = new URL(originalUrl.pathname + originalUrl.search, 'https://generativelanguage.googleapis.com')

	let init = {
			method: request.method,
			headers: request.headers,
			body: request.body,
			redirect: 'manual'
	}

	// Forward the request to the target URL and return the response directly.
	return fetch(targetURL, init)
}

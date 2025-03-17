const lang = window.location.pathname.replace('/', '')

if (lang === 'en') {
	window.location.href = '/index_eng.html'
} else if (lang === 'nl') {
	window.location.href = '/index.html'
}

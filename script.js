window.onload = () => {
	const url = new URL(window.location.href);
	const input = url.searchParams.get("input");
	if (input !== null && input !== "") {
		const decoded = atob(input)
		document.getElementById('outputEl').innerHTML = decoded;
		document.getElementById('outputEl').href = decoded;
	}
}
const decodeParam = () => {
	const url = new URL(window.location.href);
	const input = url.searchParams.get("input");
	if (input !== null && input !== "") {
		const decoded = atob(input)
		document.getElementById('outputEl').innerHTML = decoded;
		document.getElementById('outputEl').href = decoded;
	}
}

const saveOptions = () => {
	const options = getOptionsObject()
	setCookie(options);
}

const getOptionsObject = () => {
	const options = {
		//Dark Mode
		dark: document.getElementById("checkDark").checked,
	}
	
	return options;
}

const setCookie = (options) => {
	const date = new Date()
		  date.setTime(2147483647 * 1000)
	const expiresString = `expires=${date.toUTCString()}`

	document.cookie = `checkDark=${options.dark};${expiresString};`
}

const getCookie = () => {
	const cookieArr = document.cookie.split(";")
	if (cookieArr[0] === '') return;

	for (var i = cookieArr.length - 1; i >= 0; i--) {
		const cookie = cookieArr[i].split("=")
		const name = cookie[0].trim()
		const value = cookie[1].trim()
		if (name.startsWith("check")) {
			const bool = value === "true" ? true : false
			document.getElementById(name).checked = bool
		} else {
			document.getElementById(name).value = value
		}
	}
}

const updateTheme = () => {
	const dark = document.getElementById("checkDark").checked
	const elements = document.getElementsByTagName("*")

	if (dark) {
		for (var i = elements.length - 1; i >= 0; i--) {
			if (!elements[i].classList.contains("dark"))
				elements[i].classList.add("dark")
		}
	} else {
		for (var i = elements.length - 1; i >= 0; i--) {
			elements[i].classList.remove("dark")
		}
	}
}

//Listeners
document.getElementById("checkDark").addEventListener("change", updateTheme)
document.getElementById("buttonSave").addEventListener("click", saveOptions)
window.addEventListener("load", decodeParam)
window.addEventListener("load", getCookie)
window.addEventListener("load", updateTheme)